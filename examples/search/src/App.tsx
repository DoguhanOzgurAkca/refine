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
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";
import { ConfigProvider } from "antd";

import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from "./pages/categories";
import { PostCreate, PostEdit, PostList, PostShow } from "./pages/posts";

import { Header } from "./components";

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
                            show: "/posts/show/:id",
                            create: "/posts/create",
                            edit: "/posts/edit/:id",
                        },
                        {
                            name: "categories",
                            list: "/categories",
                            show: "/categories/show/:id",
                            create: "/categories/create",
                            edit: "/categories/edit/:id",
                        },
                    ]}
                    notificationProvider={notificationProvider}
                    options={{
                        warnWhenUnsavedChanges: true,
                        syncWithLocation: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2 Header={Header}>
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

                            <Route path="posts">
                                <Route index element={<PostList />} />
                                <Route path="show/:id" element={<PostShow />} />
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                            </Route>

                            <Route path="categories">
                                <Route index element={<CategoryList />} />
                                <Route
                                    path="show/:id"
                                    element={<CategoryShow />}
                                />
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
        </BrowserRouter>
    );
};

export default App;
