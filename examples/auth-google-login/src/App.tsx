import { Refine, AuthBindings, Authenticated } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { Login } from "pages/login";
import { parseJwt } from "utils/parse-jwt";

const axiosInstance = axios.create();

const API_URL = "https://api.fake-rest.refine.dev";

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ credential }: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            if (profileObj) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...profileObj,
                        avatar: profileObj.picture,
                    }),
                );

                localStorage.setItem("token", `${credential}`);

                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
            };
        },
        logout: async () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return {};
                });
            }

            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async () => ({}),
        check: async () => {
            const token = localStorage.getItem("token");

            if (token) {
                return {
                    authenticated: true,
                };
            }

            return {
                authenticated: false,
                error: new Error("Not authenticated"),
                logout: true,
                redirectTo: "/login",
            };
        },
        getPermissions: async () => null,
        getIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return JSON.parse(user);
            }

            return null;
        },
    };

    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider(API_URL, axiosInstance)}
                authProvider={authProvider}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        show: "/posts/show/:id",
                        edit: "/posts/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <Authenticated fallback={<Navigate to="/login" />}>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route index element={<NavigateToResource />} />
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/posts/show/:id" element={<PostShow />} />
                        <Route path="/posts/create" element={<PostCreate />} />
                        <Route path="/posts/edit/:id" element={<PostEdit />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource />
                            </Authenticated>
                        }
                    >
                        <Route path="/login" element={<Login />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
