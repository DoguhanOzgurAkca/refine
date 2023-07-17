import { IResourceComponentsProps, useMany, useShow } from "@refinedev/core";

import { MarkdownField, Show } from "@refinedev/antd";

import { Tag, Typography } from "antd";

import { IPost, ITag } from "../../interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: tagsData, isLoading: tagsIsLoading } = useMany<ITag>({
        resource: "tags",
        ids: record?.tags || [""],
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading && tagsIsLoading}>
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>

            <Title level={5}>Tags</Title>
            {tagsData?.data.map((tag) => (
                <Tag key={tag.id}>{tag.title}</Tag>
            ))}

            <Title level={5} style={{ marginTop: "20px" }}>
                Content
            </Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};
