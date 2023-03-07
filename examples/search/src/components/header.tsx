import { useState, useEffect } from "react";
import { useList } from "@refinedev/core";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

import { Layout as AntdLayout, AutoComplete, Input, Typography } from "antd";
import routerProvider from "@refinedev/react-router-v6";
import debounce from "lodash/debounce";

const { Link } = routerProvider;
const { Text } = Typography;
const { SearchOutlined } = Icons;

import { ICategory, IOptions, IPost } from "interfaces";

const renderTitle = (title: string) => {
    return (
        <Text strong style={{ fontSize: "16px" }}>
            {title}
        </Text>
    );
};

const renderItem = (title: string, resource: string, id: number) => {
    return {
        value: title,
        label: (
            <Link to={`/${resource}/show/${id}`}>
                <Text>{title}</Text>
            </Link>
        ),
    };
};

export const Header: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<IOptions[]>([]);

    const { refetch: refetchPosts } = useList<IPost>({
        resource: "posts",

        queryOptions: {
            enabled: false,
            onSuccess: (data) => {
                const postOptionGroup = data.data.map((item) =>
                    renderItem(item.title, "posts", item.id),
                );
                if (postOptionGroup.length > 0) {
                    setOptions((prevOptions) => [
                        ...prevOptions,
                        {
                            label: renderTitle("Posts"),
                            options: postOptionGroup,
                        },
                    ]);
                }
            },
        },

        filters: [{ field: "title", operator: "contains", value }],
    });

    const { refetch: refetchCategories } = useList<ICategory>({
        resource: "categories",

        queryOptions: {
            enabled: false,
            onSuccess: (data) => {
                const categoryOptionGroup = data.data.map((item) =>
                    renderItem(item.title, "categories", item.id),
                );
                if (categoryOptionGroup.length > 0) {
                    setOptions((prevOptions) => [
                        ...prevOptions,
                        {
                            label: renderTitle("Categories"),
                            options: categoryOptionGroup,
                        },
                    ]);
                }
            },
        },

        filters: [{ field: "title", operator: "contains", value }],
    });

    useEffect(() => {
        setOptions([]);
        refetchPosts();
        refetchCategories();
    }, [value]);

    return (
        <AntdLayout.Header
            style={{
                padding: "0px 24px",
                backgroundColor: "#FFF",
            }}
        >
            <AutoComplete
                style={{ width: "100%", maxWidth: "550px" }}
                options={options}
                filterOption={false}
                onSearch={debounce((value: string) => setValue(value), 500)}
            >
                <Input
                    size="large"
                    placeholder="Search posts or categories"
                    suffix={<SearchOutlined />}
                />
            </AutoComplete>
        </AntdLayout.Header>
    );
};
