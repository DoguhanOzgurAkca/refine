import { Text } from "@chakra-ui/react";
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
        <Text
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            color="gray.700"
            marginRight="2"
            fontSize="sm"
        >
            {message}
            <span style={{ marginLeft: "3px" }}>{icon}</span>
        </Text>
    );
};
