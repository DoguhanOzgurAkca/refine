import { useGetIdentity } from "@refinedev/core";
import {
    Avatar,
    Layout as AntdLayout,
    Space,
    Switch,
    theme,
    Typography,
} from "antd";
import { useContext } from "react";

import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

const { useToken } = theme;
export const Header: React.FC = () => {
    const { token } = useToken();
    const { data: user } = useGetIdentity<IUser>();
    const { mode, setMode } = useContext(ColorModeContext);

    return (
        <AntdLayout.Header
            style={{
                backgroundColor: token.colorBgElevated,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0px 24px",
                height: "64px",
                position: "sticky",
                top: 0,
                zIndex: 1,
            }}
        >
            <Space>
                <Switch
                    checkedChildren="🌛"
                    unCheckedChildren="🔆"
                    onChange={() =>
                        setMode(mode === "light" ? "dark" : "light")
                    }
                    defaultChecked={mode === "dark"}
                />
                <Space size="middle">
                    {user?.name && <Text strong>{user.name}</Text>}
                    {user?.avatar && (
                        <Avatar src={user?.avatar} alt={user?.name} />
                    )}
                </Space>
            </Space>
        </AntdLayout.Header>
    );
};
