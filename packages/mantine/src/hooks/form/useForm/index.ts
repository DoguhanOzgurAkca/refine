import {
    useForm as useMantineForm,
    UseFormReturnType as UseMantineFormReturnType,
} from "@mantine/form";
import { UseFormInput } from "@mantine/form/lib/types";
import {
    BaseRecord,
    HttpError,
    useForm as useFormCore,
    UseFormProps as UseFormCoreProps,
    UseFormReturnType as UseFormReturnTypeCore,
    useWarnAboutChange,
} from "@refinedev/core";
import React, { useEffect } from "react";

type FormVariableType<TVariables, TTransformed> = ReturnType<
    NonNullable<
        UseFormInput<
            TVariables,
            (values: TVariables) => TTransformed
        >["transformValues"]
    >
>;

export type UseFormReturnType<
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = Record<string, unknown>,
    TTransformed = TVariables,
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
> = UseMantineFormReturnType<
    TVariables,
    (values: TVariables) => TTransformed
> & {
    refineCore: UseFormReturnTypeCore<
        TQueryFnData,
        TError,
        FormVariableType<TVariables, TTransformed>,
        TData,
        TResponse,
        TResponseError
    >;
    saveButtonProps: {
        disabled: boolean;
        onClick: (e: React.PointerEvent<HTMLButtonElement>) => void;
    };
};

export type UseFormProps<
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = Record<string, unknown>,
    TTransformed = TVariables,
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
> = {
    refineCoreProps?: UseFormCoreProps<
        TQueryFnData,
        TError,
        FormVariableType<TVariables, TTransformed>,
        TData,
        TResponse,
        TResponseError
    > & {
        warnWhenUnsavedChanges?: boolean;
    };
} & UseFormInput<TVariables, (values: TVariables) => TTransformed>;

export const useForm = <
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = Record<string, unknown>,
    TTransformed = TVariables,
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
>({
    refineCoreProps,
    ...rest
}: UseFormProps<
    TQueryFnData,
    TError,
    TVariables,
    TTransformed,
    TData,
    TResponse,
    TResponseError
> = {}): UseFormReturnType<
    TQueryFnData,
    TError,
    TVariables,
    TTransformed,
    TData,
    TResponse,
    TResponseError
> => {
    const warnWhenUnsavedChangesProp = refineCoreProps?.warnWhenUnsavedChanges;

    const {
        warnWhenUnsavedChanges: warnWhenUnsavedChangesRefine,
        setWarnWhen,
    } = useWarnAboutChange();
    const warnWhenUnsavedChanges =
        warnWhenUnsavedChangesProp ?? warnWhenUnsavedChangesRefine;

    const useFormCoreResult = useFormCore<
        TQueryFnData,
        TError,
        FormVariableType<TVariables, TTransformed>,
        TData,
        TResponse,
        TResponseError
    >({
        ...refineCoreProps,
    });

    const { queryResult, onFinish, formLoading, onFinishAutoSave } =
        useFormCoreResult;

    const useMantineFormResult = useMantineForm<
        TVariables,
        (values: TVariables) => TTransformed
    >({
        ...rest,
    });

    const {
        setValues,
        onSubmit: onMantineSubmit,
        isDirty,
        resetDirty,
        values,
    } = useMantineFormResult;

    useEffect(() => {
        if (typeof queryResult?.data !== "undefined") {
            const fields: any = {};
            const registeredFields = Object.keys(rest.initialValues ?? {});
            Object.entries(queryResult?.data?.data || {}).forEach(
                ([key, value]) => {
                    if (registeredFields.includes(key)) {
                        fields[key] = value;
                    }
                },
            );
            setValues(fields);
            resetDirty(fields);
        }
    }, [queryResult?.data]);

    const isValuesChanged = isDirty();

    useEffect(() => {
        if (warnWhenUnsavedChanges) {
            setWarnWhen(isValuesChanged);
        }
    }, [isValuesChanged]);

    useEffect(() => {
        if (isValuesChanged && refineCoreProps?.autoSave && values) {
            setWarnWhen(false);

            const transformedValues = rest.transformValues
                ? rest.transformValues(values)
                : (values as unknown as TTransformed);

            onFinishAutoSave(transformedValues);
        }
    }, [values]);

    const onSubmit: (typeof useMantineFormResult)["onSubmit"] =
        (handleSubmit, handleValidationFailure) => async (e) => {
            setWarnWhen(false);
            return await onMantineSubmit(
                handleSubmit,
                handleValidationFailure,
            )(e);
        };

    const saveButtonProps = {
        disabled: formLoading,
        onClick: (e: React.PointerEvent<HTMLButtonElement>) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error event type is not compatible with pointer event
            onSubmit(onFinish, () => false)(e);
        },
    };

    return {
        ...useMantineFormResult,
        onSubmit,
        refineCore: useFormCoreResult,
        saveButtonProps,
    };
};
