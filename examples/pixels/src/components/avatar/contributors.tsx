import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

import { Pixel } from "../../types";
import { getUniqueContributorsAvatarURL } from "../../utility";

type ContributorsProps = {
    pixels: Pixel[];
};

export const Contributors: React.FC<ContributorsProps> = ({ pixels }) => {
    const avatarURls = getUniqueContributorsAvatarURL(pixels);

    if (avatarURls.length === 0) {
        return null;
    }

    return (
        <Avatar.Group maxCount={2}>
            {avatarURls.map((avatar_url) => (
                <Avatar
                    key={avatar_url}
                    icon={<UserOutlined />}
                    src={avatar_url}
                />
            ))}
        </Avatar.Group>
    );
};
