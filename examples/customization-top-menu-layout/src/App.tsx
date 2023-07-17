import {
    ErrorComponent,
    notificationProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/antd";
import { GitHubBanner, Refine } from "@refinedev/core";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ConfigProvider, Layout as AntdLayout } from "antd";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

import { CustomSider } from "./components";
import { PostList } from "./pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    dataProvider={dataProvider(API_URL)}
                    routerProvider={routerProvider}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                        },
                    ]}
                    notificationProvider={notificationProvider}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2
                                    Sider={() => null}
                                    Header={() => {
                                        return (
                                            <AntdLayout.Header>
                                                <Link
                                                    to="/"
                                                    style={{
                                                        float: "left",
                                                        marginRight: "10px",
                                                    }}
                                                >
                                                    <img
                                                        src="/refine.svg"
                                                        alt="Refine"
                                                        style={{
                                                            width: "100px",
                                                        }}
                                                    />
                                                </Link>
                                                <CustomSider />
                                            </AntdLayout.Header>
                                        );
                                    }}
                                >
                                    <AntdLayout.Content>
                                        <div
                                            style={{
                                                padding: 24,
                                                minHeight: 360,
                                            }}
                                        >
                                            <Outlet />
                                        </div>
                                    </AntdLayout.Content>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="posts" />
                                }
                            />
                            <Route path="/posts" element={<PostList />} />
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
