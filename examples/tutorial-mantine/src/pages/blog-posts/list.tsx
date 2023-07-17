import { Group, Pagination, ScrollArea, Table } from "@mantine/core";
import {
    GetManyResponse,
    IResourceComponentsProps,
    useMany,
} from "@refinedev/core";
import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
} from "@refinedev/mantine";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import React from "react";
import { ColumnFilter } from "../../components/table/ColumnFilter";
import { ColumnSorter } from "../../components/table/ColumnSorter";

export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
    const columns = React.useMemo<ColumnDef<any>[]>(
        () => [
            {
                id: "id",
                accessorKey: "id",
                header: "Id",
                enableColumnFilter: false,
            },
            {
                id: "title",
                accessorKey: "title",
                header: "Title",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
                id: "content",
                accessorKey: "content",
                header: "Content",
                meta: {
                    filterOperator: "contains",
                },
                cell: function render({ getValue }) {
                    return (
                        <MarkdownField
                            value={getValue<string>()?.slice(0, 80) + "..."}
                        />
                    );
                },
            },
            {
                id: "category",
                header: "Category",
                accessorKey: "category.id",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        categoryData: GetManyResponse;
                    };

                    const category = meta.categoryData?.data?.find(
                        (item) => item.id === getValue<any>(),
                    );

                    return category?.title ?? "Loading...";
                },
            },
            {
                id: "status",
                accessorKey: "status",
                header: "Status",
            },
            {
                id: "createdAt",
                accessorKey: "createdAt",
                header: "Created At",
                enableColumnFilter: false,
                cell: function render({ getValue }) {
                    return <DateField value={getValue<any>()} />;
                },
            },
            {
                id: "actions",
                accessorKey: "id",
                header: "Actions",
                enableColumnFilter: false,
                enableSorting: false,
                cell: function render({ getValue }) {
                    return (
                        <Group spacing="xs" noWrap>
                            <ShowButton
                                hideText
                                recordItemId={getValue() as string}
                            />
                            <EditButton
                                hideText
                                recordItemId={getValue() as string}
                            />
                            <DeleteButton
                                hideText
                                recordItemId={getValue() as string}
                            />
                        </Group>
                    );
                },
            },
        ],
        [],
    );

    const {
        getHeaderGroups,
        getRowModel,
        setOptions,
        refineCore: {
            setCurrent,
            pageCount,
            current,
            tableQueryResult: { data: tableData },
        },
    } = useTable({
        columns,
    });

    const { data: categoryData } = useMany({
        resource: "categories",
        ids: tableData?.data?.map((item) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!tableData?.data,
        },
    });

    setOptions((prev) => ({
        ...prev,
        meta: {
            ...prev.meta,
            categoryData,
        },
    }));

    return (
        <List>
            <ScrollArea>
                <Table highlightOnHover>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id}>
                                            <Group spacing="xs">
                                                {!header.isPlaceholder &&
                                                    flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )}
                                                <ColumnSorter
                                                    column={header.column}
                                                />
                                                <ColumnFilter
                                                    column={header.column}
                                                />
                                            </Group>
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </ScrollArea>
            <br />
            <Pagination
                position="right"
                total={pageCount}
                page={current}
                onChange={setCurrent}
            />
        </List>
    );
};
