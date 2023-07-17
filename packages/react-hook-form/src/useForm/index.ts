import {
    BaseRecord,
    HttpError,
    useForm as useFormCore,
    UseFormProps as UseFormCoreProps,
    UseFormReturnType as UseFormReturnTypeCore,
    useWarnAboutChange,
} from "@refinedev/core";
import React, { useEffect } from "react";
import {
    FieldValues,
    Path,
    useForm as useHookForm,
    UseFormHandleSubmit,
    UseFormProps as UseHookFormProps,
    UseFormReturn,
} from "react-hook-form";

export type UseFormReturnType<
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
> = UseFormReturn<TVariables, TContext> & {
    refineCore: UseFormReturnTypeCore<
        TQueryFnData,
        TError,
        TVariables,
        TData,
        TResponse,
        TResponseError
    >;
    saveButtonProps: {
        disabled: boolean;
        onClick: (e: React.BaseSyntheticEvent) => void;
    };
};

export type UseFormProps<
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
> = {
    /**
     * Configuration object for the core of the [useForm](/docs/api-reference/core/hooks/useForm/)
     * @type [`UseFormCoreProps<TQueryFnData, TError, TVariables, TData, TResponse, TResponseError>`](/docs/api-reference/core/hooks/useForm/#properties)
     */
    refineCoreProps?: UseFormCoreProps<
        TQueryFnData,
        TError,
        TVariables,
        TData,
        TResponse,
        TResponseError
    >;
    /**
     * When you have unsaved changes and try to leave the current page, **refine** shows a confirmation modal box.
     * @default `false*`
     */
    warnWhenUnsavedChanges?: boolean;
} & UseHookFormProps<TVariables, TContext>;

export const useForm = <
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
>({
    refineCoreProps,
    warnWhenUnsavedChanges: warnWhenUnsavedChangesProp,
    ...rest
}: UseFormProps<
    TQueryFnData,
    TError,
    TVariables,
    TContext,
    TData,
    TResponse,
    TResponseError
> = {}): UseFormReturnType<
    TQueryFnData,
    TError,
    TVariables,
    TContext,
    TData,
    TResponse,
    TResponseError
> => {
    const {
        warnWhenUnsavedChanges: warnWhenUnsavedChangesRefine,
        setWarnWhen,
    } = useWarnAboutChange();
    const warnWhenUnsavedChanges =
        warnWhenUnsavedChangesProp ?? warnWhenUnsavedChangesRefine;

    const useFormCoreResult = useFormCore<
        TQueryFnData,
        TError,
        TVariables,
        TData,
        TResponse,
        TResponseError
    >({
        ...refineCoreProps,
    });

    const { queryResult, onFinish, formLoading, onFinishAutoSave } =
        useFormCoreResult;

    const useHookFormResult = useHookForm<TVariables, TContext>({
        ...rest,
    });

    const {
        watch,
        setValue,
        getValues,
        handleSubmit: handleSubmitReactHookForm,
    } = useHookFormResult;

    useEffect(() => {
        const data = queryResult?.data?.data;
        if (!data) return;

        const registeredFields = Object.keys(getValues());
        Object.entries(data).forEach(([key, value]) => {
            const name = key as Path<TVariables>;

            if (registeredFields.includes(name)) {
                setValue(name, value);
            }
        });
    }, [queryResult?.data, setValue, getValues]);

    useEffect(() => {
        const subscription = watch((values: any, { type }: { type?: any }) => {
            if (type === "change") {
                onValuesChange(values);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onValuesChange = (changeValues: TVariables) => {
        if (warnWhenUnsavedChanges) {
            setWarnWhen(true);
        }

        if (refineCoreProps?.autoSave) {
            setWarnWhen(false);

            const onFinishProps = refineCoreProps.autoSave?.onFinish;

            if (onFinishProps) {
                return onFinishAutoSave(onFinishProps(changeValues));
            }

            return onFinishAutoSave(changeValues);
        }

        return changeValues;
    };

    const handleSubmit: UseFormHandleSubmit<TVariables> =
        (onValid, onInvalid) => async (e) => {
            setWarnWhen(false);
            return handleSubmitReactHookForm(onValid, onInvalid)(e);
        };

    const saveButtonProps = {
        disabled: formLoading,
        onClick: (e: React.BaseSyntheticEvent) => {
            handleSubmit(onFinish, () => false)(e);
        },
    };

    return {
        ...useHookFormResult,
        handleSubmit,
        refineCore: useFormCoreResult,
        saveButtonProps,
    };
};
