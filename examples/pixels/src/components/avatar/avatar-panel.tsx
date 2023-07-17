import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import React from "react";

import { Pixel } from "../../types";
import { getUniqueContributorsAvatarURL } from "../../utility";

const { Title } = Typography;

type AvatarPanelProps = {
    pixels: Pixel[] | undefined;
};

export const AvatarPanel: React.FC<AvatarPanelProps> = ({ pixels }) => {
    const contributors = getUniqueContributorsAvatarURL(pixels);

    if (contributors.length === 0) {
        return null;
    }

    return (
        <div>
            <Title level={4}>Users</Title>
            <Space wrap>
                {contributors.map((avatar_url) => (
                    <Avatar
                        key={avatar_url}
                        icon={<UserOutlined />}
                        src={avatar_url}
                    />
                ))}
            </Space>
        </div>
    );
};
