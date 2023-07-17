import { liveProvider } from "@refinedev/ably";
import {
    ErrorComponent,
    notificationProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { GitHubBanner, Refine } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ConfigProvider } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { CustomSider } from "./components";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from "./pages/categories";
import { PostCreate, PostEdit, PostList, PostShow } from "./pages/posts";
import { ablyClient } from "./utility";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_URL)}
                    liveProvider={liveProvider(ablyClient)}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                            create: "/posts/create",
                            edit: "/posts/edit/:id",
                            show: "/posts/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                        {
                            name: "categories",
                            list: "/categories",
                            create: "/categories/create",
                            edit: "/categories/edit/:id",
                            show: "/categories/show/:id",
                        },
                    ]}
                    options={{ liveMode: "auto" }}
                    notificationProvider={notificationProvider}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2 Sider={CustomSider}>
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
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                                <Route path="show/:id" element={<PostShow />} />
                            </Route>

                            <Route path="categories">
                                <Route index element={<CategoryList />} />
                                <Route
                                    path="create"
                                    element={<CategoryCreate />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<CategoryEdit />}
                                />
                                <Route
                                    path="show/:id"
                                    element={<CategoryShow />}
                                />
                            </Route>

                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
