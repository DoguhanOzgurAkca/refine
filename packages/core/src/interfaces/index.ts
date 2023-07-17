import { IResourceItem } from "./bindings/resource";

// contexts
export * from "../components/pages/login";
export * from "../contexts/accessControl/IAccessControlContext";
export * from "../contexts/auditLog/IAuditLogContext";
export * from "../contexts/auth/IAuthContext";
export * from "../contexts/data/IDataContext";
export * from "../contexts/legacy-router/IRouterContext";
export * from "../contexts/live/ILiveContext";
export * from "../contexts/notification/INotificationContext";
export * from "../contexts/refine/IRefineContext";
export * from "../contexts/resource/IResourceContext";
export * from "../contexts/translation/ITranslationContext";
export * from "../contexts/undoableQueue/IUndoableQueueContext";
export * from "../contexts/unsavedWarn/IUnsavedWarnContext";
// actions
export * from "./actions";
//auditLog
export * from "./auditLog";
export * from "./auth";
export * from "./autoSave";
export * from "./bindings";
// custom components
export * from "./customComponents";
// mutationMode
export * from "./errors";
export * from "./form-url-params";
//metaData
export * from "./live";
// mapData
export * from "./mapDataFn";
//metaData
export * from "./metaData";
// mutationMode
export * from "./mutationMode";
// notification
export * from "./notification";
export * from "./prettify";
//queryKeys
export * from "./queryKey";
// resourceErrorRouterParams
export * from "./resourceErrorRouterParams";
// resourceRouterParams
export * from "./resourceRouterParams";
// successErrorNotification
export * from "./successErrorNotification";
export * from "./textTransformers";

export type BaseKey = string | number;
export type BaseRecord = {
    id?: BaseKey;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};
export interface Option {
    label: string;
    value: string;
}

/* Backward compatible version of 'TreeMenuItem' */
export type ITreeMenu = IResourceItem & {
    key?: string;
    children: ITreeMenu[];
};

export type IMenuItem = IResourceItem & {
    key: string;
    route: string;
};
