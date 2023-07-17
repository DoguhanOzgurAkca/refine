import { StarOutlined } from "@ant-design/icons";
import {
    ErrorComponent,
    notificationProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ConfigProvider } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { CategoryCreate, CategoryEdit, CategoryList } from "./pages/categories";
import { PostCreate, PostEdit, PostList, PostShow } from "./pages/posts";

import { OffLayoutArea } from "./components";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />

            <RefineKbarProvider>
                <ConfigProvider theme={RefineThemes.Blue}>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(API_URL)}
                        resources={[
                            {
                                name: "posts",
                                list: "/posts",
                                show: "/posts/show/:id",
                                create: "/posts/create",
                                edit: "/posts/edit/:id",
                                meta: {
                                    icon: <StarOutlined />,
                                    canDelete: true,
                                },
                            },
                            {
                                name: "categories",
                                list: "/categories",
                                create: "/categories/create",
                                edit: "/categories/edit/:id",
                                meta: {
                                    canDelete: true,
                                },
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
                                        OffLayoutArea={OffLayoutArea}
                                    >
                                        <Outlet />
                                    </ThemedLayoutV2>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="posts" />
                                    }
                                />

                                <Route path="/posts">
                                    <Route index element={<PostList />} />
                                    <Route
                                        path="create"
                                        element={<PostCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<PostEdit />}
                                    />
                                    <Route
                                        path="show/:id"
                                        element={<PostShow />}
                                    />
                                </Route>

                                <Route path="/categories">
                                    <Route index element={<CategoryList />} />
                                    <Route
                                        path="create"
                                        element={<CategoryCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<CategoryEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                        <DocumentTitleHandler />
                    </Refine>
                </ConfigProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
};

export default App;
