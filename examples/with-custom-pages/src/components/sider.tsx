import { CheckOutlined } from "@ant-design/icons";
import { Sider as RefineSider } from "@refinedev/antd";
import { useMenu } from "@refinedev/core";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const Sider = () => {
    const { selectedKey } = useMenu();
    return (
        <RefineSider
            render={({ items, logout }) => {
                return (
                    <>
                        {items}
                        <Menu.Item
                            key="/post-review"
                            icon={<CheckOutlined />}
                            style={{
                                fontWeight:
                                    selectedKey === "/post-review"
                                        ? "bold"
                                        : "normal",
                            }}
                        >
                            <Link to="/post-review">Post Review</Link>
                        </Menu.Item>
                        {logout}
                    </>
                );
            }}
        />
    );
};
