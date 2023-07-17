import {
    DeleteButton,
    List,
    useEditableTable,
    useModal,
} from "@refinedev/antd";
import { useUpdate } from "@refinedev/core";
import { Avatar, Button, Form, Modal, Space, Table, Tag } from "antd";
import { useState } from "react";

import { CanvasItem } from "../../components/canvas";
import { LogList } from "../../components/logs";
import { TCanvas } from "../../types/canvas";

type TCanvasPromoteResult = {
    id: number;
    featured: boolean;
};

export const CanvasList = () => {
    const [currentCanvas, setCurrentCanvas] = useState({});
    const { modalProps, show, close } = useModal();
    const { tableProps, formProps } = useEditableTable<TCanvas>({
        liveMode: "auto",
        sorters: {
            initial: [
                {
                    field: "created_at",
                    order: "desc",
                },
            ],
        },
        meta: {
            select: "*, pixels(id, canvas_id, user_id, x, y, color)",
        },
    });
    const { mutate } = useUpdate<TCanvasPromoteResult>();

    return (
        <List>
            <Form {...formProps}>
                <Table {...tableProps} rowKey="id">
                    <Table.Column<TCanvas>
                        key="id"
                        dataIndex="id"
                        title={
                            <h4
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Canvas
                            </h4>
                        }
                        render={(_, record) => (
                            <Avatar
                                shape="square"
                                size={64}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                icon={
                                    <CanvasItem
                                        canvas={record}
                                        pixels={record?.pixels}
                                        border={true}
                                        scale={5 / record?.width}
                                        active={false}
                                    />
                                }
                            />
                        )}
                    />
                    <Table.Column<TCanvas>
                        key="name"
                        dataIndex="name"
                        title={
                            <h4
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Name
                            </h4>
                        }
                    />
                    <Table.Column<TCanvas>
                        key="is_featured"
                        dataIndex="is_featured"
                        title={
                            <h4
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Featured
                            </h4>
                        }
                        render={(_, record) =>
                            record.is_featured ? (
                                <Tag
                                    color="success"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Yes
                                </Tag>
                            ) : (
                                <Tag
                                    color="warning"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    No
                                </Tag>
                            )
                        }
                    />
                    <Table.Column<TCanvas>
                        title={
                            <h4
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Actions
                            </h4>
                        }
                        dataIndex="actions"
                        render={(_, record) => (
                            <Space
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    size="small"
                                    style={{ width: "100px" }}
                                    type={
                                        record.is_featured ? "ghost" : "primary"
                                    }
                                    onClick={() =>
                                        mutate({
                                            resource: "canvases",
                                            id: record.id,
                                            values: {
                                                is_featured:
                                                    !record.is_featured,
                                            },
                                            meta: {
                                                canvas: record,
                                            },
                                        })
                                    }
                                >
                                    {record.is_featured
                                        ? "Unpromote"
                                        : "Promote"}
                                </Button>
                                <>
                                    <Button
                                        size="small"
                                        type="primary"
                                        onClick={() => {
                                            setCurrentCanvas(record);
                                            show();
                                        }}
                                    >
                                        View Changes
                                    </Button>
                                </>
                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                            </Space>
                        )}
                    />
                </Table>
            </Form>
            <Modal
                title={<h3 style={{ fontWeight: "bold" }}>Canvas Changes</h3>}
                {...modalProps}
                centered
                destroyOnClose
                onOk={close}
                onCancel={() => {
                    close();
                    setCurrentCanvas({});
                }}
                footer={[
                    <Button type="primary" key="close" onClick={close}>
                        Close
                    </Button>,
                ]}
            >
                <LogList currentCanvas={currentCanvas} />
            </Modal>
        </List>
    );
};
