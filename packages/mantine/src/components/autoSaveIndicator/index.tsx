import { Text } from "@mantine/core";
import { AutoSaveIndicatorProps, useTranslate } from "@refinedev/core";
import {
    IconCircleCheck,
    IconDots,
    IconExclamationCircle,
    IconRefresh,
} from "@tabler/icons";
import React from "react";

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
    status,
}) => {
    const translate = useTranslate();
    let message = null;
    let icon = <IconDots size="18px" />;

    switch (status) {
        case "success":
            message = translate("autoSave.success", "saved");
            icon = <IconCircleCheck size="18px" />;
            break;
        case "error":
            message = translate("autoSave.error", "auto save failure");
            icon = <IconExclamationCircle size="18px" />;
            break;
        case "loading":
            message = translate("autoSave.loading", "saving...");
            icon = <IconRefresh size="18px" />;
            break;
        default:
            // for idle
            message = translate("autoSave.idle", "waiting for changes");
            break;
    }

    return (
        <Text size="sm" display="flex" align="center" mr="2" color="gray">
            {message}
            <span
                style={{ position: "relative", top: "3px", marginLeft: "3px" }}
            >
                {icon}
            </span>
        </Text>
    );
};
