---
id: real-time
title: Live / Realtime
sidebar_label: Live / Realtime
---

**refine** lets you add Realtime support to your app via the `liveProvider` prop for [`<Refine>`](/api-reference/core/components/refine-config.md). It can be used to update and show data in Realtime throughout your app. **refine** remains agnostic in its API to allow different solutions([Ably](https://ably.com), [Socket.IO](https://socket.io/), [Mercure](https://mercure.rocks/), [supabase](https://supabase.com), etc.) to be integrated.

[Refer to the Live Provider documentation for detailed information. &#8594](/api-reference/core/providers/live-provider.md)

We will be using [Ably](https://ably.com) in this guide to provide Realtime features.

## Installation

We need to install the Ably live provider package from **refine**.

```bash
npm install @refinedev/ably
```

:::caution
To make this example more visual, we used the [`@refinedev/antd`](https://github.com/refinedev/refine/tree/master/packages/refine-antd) package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the [`@refinedev/antd`](https://github.com/refinedev/refine/tree/master/packages/refine-antd) package.
:::

## Setup

Since we will need `apiKey` from Ably, you must first register and get the key from [Ably](https://ably.com).

The app will have one resource: **posts** with [CRUD pages(list, create, edit, and show) similar to base example](https://github.com/refinedev/refine/tree/master/examples/base-antd/src/pages/posts).

[You can also refer to CodeSandbox to see the final state of the app &#8594](#example)

## Adding `liveProvider`

Firstly we create a Ably client for [`@refinedev/ably`](https://github.com/refinedev/refine/tree/master/packages/ably) live provider.

```ts title="src/utility/ablyClient.ts"
import { Ably } from "@refinedev/ably";

export const ablyClient = new Ably.Realtime("your-api-key");
```

Then pass `liveProvider` from [`@refinedev/ably`](https://github.com/refinedev/refine/tree/master/packages/ably) to `<Refine>`.

```tsx title="src/App.tsx"
import { Refine } from "@refinedev/core";
import {
    ThemedLayoutV2,
    notificationProvider,
    ErrorComponent,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";

//highlight-next-line
import { liveProvider } from "@refinedev/ably";

//highlight-next-line
import { ablyClient } from "utility/ablyClient";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    notificationProvider={notificationProvider}
                    //highlight-start
                    liveProvider={liveProvider(ablyClient)}
                    options={{ liveMode: "auto" }}
                    //highlight-end
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                            show: "/posts/show/:id",
                            create: "/posts/create",
                            edit: "/posts/edit/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                    ]}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet />
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource />} />
                            <Route path="/posts" element={<PostList />} />
                            <Route
                                path="/posts/create"
                                element={<PostCreate />}
                            />
                            <Route
                                path="/posts/show/:id"
                                element={<PostShow />}
                            />
                            <Route
                                path="/posts/edit/:id"
                                element={<PostEdit />}
                            />
                        </Route>
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
```

:::note

For live features to work automatically we added `liveMode: "auto"` in the `options` prop.

[Refer to the Live Provider documentation for detailed information. &#8594](/api-reference/core/providers/live-provider.md#livemode)
:::

<br/>
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/Realtime/real-time.gif" alt="Realtime Demo" />

## Configuring `liveMode`

We may not want to make Realtime changes instantly in some cases. In these cases, we can use `manual` mode to prevent the data from changing instantly. Then we can handle the event manually.

For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record.

We will be alerted about changes in an alert box on top of the form instead of changing the data instantly.

```tsx title="src/pages/posts/edit.tsx"
// ...

export const PostEdit: React.FC = () => {
    //highlight-start
    const [deprecated, setDeprecated] = useState<
        "deleted" | "updated" | undefined
    >();
    //highlight-end

    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({
        //highlight-start
        liveMode: "manual",
        onLiveEvent: (event) => {
            if (event.type === "deleted" || event.type === "updated") {
                setDeprecated(event.type);
            }
        },
        //highlight-end
    });

    //highlight-start
    const handleRefresh = () => {
        queryResult?.refetch();
        setDeprecated(undefined);
    };
    //highlight-end

    // ...

    return (
        <Edit /* ... */>
            //highlight-start
            {deprecated === "deleted" && (
                <Alert
                    message="This post is deleted."
                    type="warning"
                    style={{ marginBottom: 20 }}
                    action={<ListButton size="small" />}
                />
            )}
            {deprecated === "updated" && (
                <Alert
                    message="This post is updated. Refresh to see changes."
                    type="warning"
                    style={{ marginBottom: 20 }}
                    action={
                        <RefreshButton size="small" onClick={handleRefresh} />
                    }
                />
            )}
            //highlight-end
            <Form {...formProps} layout="vertical">
                // ....
            </Form>
        </Edit>
    );
};
```

:::note

We can also implement a similar thing on the show page.

[Refer to the CodeSandbox example for detailed information. &#8594](#example)
:::

<br/>
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/manual-mode.gif" alt="Manual Mode Demo" />

## Custom Subscriptions

You can subscribe to events emitted within **refine** in any place in your app with `useSubscription`.

For example, we can subscribe to **_create_** event for **_posts_** resource and we can show a badge for the number of events in the sider menu.

Firstly, let's implement a custom sider like in [this example](/examples/customization/customSider.md).

<details>
<summary>Custom Sider Menu</summary>

```tsx title="src/components/sider.tsx"
import React, { useState } from "react";
import { TreeMenuItem, CanAccess, useMenu } from "@refinedev/core";
import { Layout, Menu, Grid } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { antLayoutSider, antLayoutSiderMobile } from "./styles";

export const CustomSider: React.FC = ({ Title }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { menuItems, selectedKey } = useMenu();
    const breakpoint = Grid.useBreakpoint();

    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {
        return tree.map((item: TreeMenuItem) => {
            const { icon, label, route, key, name, children, meta } = item;

            if (children.length > 0) {
                return (
                    <SubMenu
                        key={key}
                        icon={icon ?? <UnorderedListOutlined />}
                        title={label}
                    >
                        {renderTreeView(children, selectedKey)}
                    </SubMenu>
                );
            }
            const isSelected = key === selectedKey;
            const isRoute = !(
                meta?.parent !== undefined && children.length === 0
            );

            return (
                <CanAccess
                    key={key}
                    resource={name.toLowerCase()}
                    action="list"
                >
                    <Menu.Item
                        key={key}
                        style={{
                            fontWeight: isSelected ? "bold" : "normal",
                        }}
                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}
                    >
                        <Link to={route}>{label}</Link>
                        {!collapsed && isSelected && <UnorderedListOutlined />}
                    </Menu.Item>
                </CanAccess>
            );
        });
    };

    return (
        <Layout.Sider
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
            style={isMobile ? antLayoutSiderMobile : antLayoutSider}
        >
            <Title collapsed={collapsed} />
            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={({ key }) => {
                    if (!breakpoint.lg) {
                        setCollapsed(true);
                    }
                }}
            >
                {renderTreeView(menuItems, selectedKey)}
            </Menu>
        </Layout.Sider>
    );
};
```

</details>

Now, let's add a badge for the number of create and update events for **_posts_** menu items.

```tsx
import React, { useState } from "react";
import {
    TreeMenuItem,
    CanAccess,
    useMenu,
    //highlight-start
    useSubscription,
    //highlight-end
} from "@refinedev/core";
import {
    Layout,
    Menu,
    Grid,
    //highlight-start
    Badge,
    //highlight-end
} from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { antLayoutSider, antLayoutSiderMobile } from "./styles";

export const CustomSider: React.FC = ({ Title }) => {
    const [subscriptionCount, setSubscriptionCount] = useState(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { menuItems, selectedKey } = useMenu();
    const breakpoint = Grid.useBreakpoint();

    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    //highlight-start
    useSubscription({
        channel: "resources/posts",
        type: ["created", "updated"],
        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),
    });
    //highlight-end

    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {
        return tree.map((item: TreeMenuItem) => {
            const { icon, label, route, key, name, children, meta } = item;

            if (children.length > 0) {
                return (
                    <SubMenu
                        key={key}
                        icon={icon ?? <UnorderedListOutlined />}
                        title={label}
                    >
                        {renderTreeView(children, selectedKey)}
                    </SubMenu>
                );
            }
            const isSelected = key === selectedKey;
            const isRoute = !(
                meta?.parent !== undefined && children.length === 0
            );
            return (
                <CanAccess
                    key={key}
                    resource={name.toLowerCase()}
                    action="list"
                >
                    <Menu.Item
                        key={key}
                        style={{
                            fontWeight: isSelected ? "bold" : "normal",
                        }}
                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}
                    >
                        //highlight-start
                        <div>
                            <Link to={route}>{label}</Link>
                            {label === "Posts" && (
                                <Badge
                                    size="small"
                                    count={subscriptionCount}
                                    offset={[2, -15]}
                                />
                            )}
                        </div>
                        //highlight-end
                    </Menu.Item>
                </CanAccess>
            );
        });
    };

    return (
        <Layout.Sider
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
            style={isMobile ? antLayoutSiderMobile : antLayoutSider}
        >
            <Title collapsed={collapsed} />
            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={() => {
                    if (!breakpoint.lg) {
                        setCollapsed(true);
                    }

                    //highlight-start
                    if (key === "/posts") {
                        setSubscriptionCount(0);
                    }
                    //highlight-end
                }}
            >
                {renderTreeView(menuItems, selectedKey)}
            </Menu>
        </Layout.Sider>
    );
};
```

:::tip

You can subscribe to specific `ids` with `params`. For example, you can subscribe to **deleted** and **updated** events from **posts** resource with **id** `1` and `2`.

```tsx
useSubscription({
    channel: "resources/posts",
    type: ["deleted", "updated"],
    //highlight-start
    params: {
        ids: ["1", "2"],
    },
    //highlight-end
    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),
});
```

:::

<br/>
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/custom-sider.gif" alt="Custom Sider Demo" />

## Example

<CodeSandboxExample path="live-provider-ably" />
