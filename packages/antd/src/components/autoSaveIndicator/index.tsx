import {
    CheckCircleOutlined,
    EllipsisOutlined,
    ExclamationCircleOutlined,
    SyncOutlined,
} from "@ant-design/icons";
import { AutoSaveIndicatorProps, useTranslate } from "@refinedev/core";
import { theme, Typography } from "antd";
import React from "react";

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
    status,
}) => {
    const translate = useTranslate();
    const { useToken } = theme;
    const { token } = useToken();

    let message = null;
    let icon = <EllipsisOutlined />;

    switch (status) {
        case "success":
            message = translate("autoSave.success", "saved");
            icon = <CheckCircleOutlined />;
            break;
        case "error":
            message = translate("autoSave.error", "auto save failure");
            icon = <ExclamationCircleOutlined />;

            break;
        case "loading":
            message = translate("autoSave.loading", "saving...");
            icon = <SyncOutlined />;

            break;
        default:
            // for idle
            message = translate("autoSave.idle", "waiting for changes");
            break;
    }

    return (
        <Typography.Text
            style={{
                marginRight: 5,
                color: token.colorTextTertiary,
                fontSize: ".8rem",
            }}
        >
            {message}
            <span style={{ marginLeft: ".2rem" }}>{icon}</span>
        </Typography.Text>
    );
};
