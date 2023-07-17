import {
    ErrorComponent,
    notificationProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { CanAccess, GitHubBanner, Refine } from "@refinedev/core";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ConfigProvider } from "antd";
import { newEnforcer } from "casbin";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { adapter, model } from "./accessControl";
import { Header } from "./components/header";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from "./pages/categories";
import { PostCreate, PostEdit, PostList, PostShow } from "./pages/posts";
import { UserCreate, UserEdit, UserList, UserShow } from "./pages/users";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const role = localStorage.getItem("role") ?? "admin";

    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_URL)}
                    accessControlProvider={{
                        can: async ({ action, params, resource }) => {
                            const enforcer = await newEnforcer(model, adapter);
                            if (
                                action === "delete" ||
                                action === "edit" ||
                                action === "show"
                            ) {
                                return Promise.resolve({
                                    can: await enforcer.enforce(
                                        role,
                                        `${resource}/${params?.id}`,
                                        action,
                                    ),
                                });
                            }
                            if (action === "field") {
                                return Promise.resolve({
                                    can: await enforcer.enforce(
                                        role,
                                        `${resource}/${params?.field}`,
                                        action,
                                    ),
                                });
                            }
                            return {
                                can: await enforcer.enforce(
                                    role,
                                    resource,
                                    action,
                                ),
                            };
                        },
                    }}
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
                        {
                            name: "users",
                            list: "/users",
                            show: "/users/show/:id",
                            create: "/users/create",
                            edit: "/users/edit/:id",
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
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2
                                    Header={() => <Header role={role} />}
                                >
                                    <CanAccess>
                                        <Outlet />
                                    </CanAccess>
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
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                                <Route path="show/:id" element={<PostShow />} />
                            </Route>

                            <Route path="/users">
                                <Route index element={<UserList />} />
                                <Route path="create" element={<UserCreate />} />
                                <Route path="edit/:id" element={<UserEdit />} />
                                <Route path="show/:id" element={<UserShow />} />
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
                                <Route
                                    path="show/:id"
                                    element={<CategoryShow />}
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
