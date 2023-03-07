import { Refine, LegacyAuthProvider as AuthProvider } from "@refinedev/core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
    AuthPage,
} from "@refinedev/antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6";

import "@refinedev/antd";

import { PostList, PostEdit, PostShow } from "pages/posts";
import { DashboardPage } from "pages/dashboard";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: async ({ email, providerName }) => {
            if (providerName === "google") {
                window.location.href =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                return Promise.resolve(false);
            }

            if (providerName === "github") {
                window.location.href =
                    "https://github.com/login/oauth/authorize";
                return Promise.resolve(false);
            }

            if (email) {
                localStorage.setItem("email", email);
                return Promise.resolve();
            }

            return Promise.reject();
        },
        register: (params) => {
            if (params.email && params.password) {
                localStorage.setItem("email", params.email);
                return Promise.resolve();
            }
            return Promise.reject();
        },
        updatePassword: (params) => {
            if (params.newPassword) {
                //we can update password here
                return Promise.resolve();
            }
            return Promise.reject();
        },
        forgotPassword: (params) => {
            if (params.email) {
                //we can send email with forgot password link here
                return Promise.resolve();
            }
            return Promise.reject();
        },
        logout: () => {
            localStorage.removeItem("email");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("email")
                ? Promise.resolve()
                : Promise.reject(),
        getPermissions: () => Promise.resolve(["admin"]),
        getUserIdentity: () =>
            Promise.resolve({
                id: 1,
                name: "Jane Doe",
                avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
            }),
    };

    return (
        <Refine
            legacyAuthProvider={authProvider}
            dataProvider={dataProvider(API_URL)}
            legacyRouterProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: (
                            <AuthPage
                                type="register"
                                providers={[
                                    {
                                        name: "google",
                                        label: "Sign in with Google",
                                        icon: (
                                            <GoogleOutlined
                                                style={{
                                                    fontSize: 24,
                                                    lineHeight: 0,
                                                }}
                                            />
                                        ),
                                    },
                                    {
                                        name: "github",
                                        label: "Sign in with GitHub",
                                        icon: (
                                            <GithubOutlined
                                                style={{
                                                    fontSize: 24,
                                                    lineHeight: 0,
                                                }}
                                            />
                                        ),
                                    },
                                ]}
                            />
                        ),
                    },
                    {
                        path: "/forgot-password",
                        element: <AuthPage type="forgotPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}
            DashboardPage={DashboardPage}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
            notificationProvider={notificationProvider}
            LoginPage={() => (
                <AuthPage
                    providers={[
                        {
                            name: "google",
                            label: "Sign in with Google",
                            icon: (
                                <GoogleOutlined
                                    style={{ fontSize: 24, lineHeight: 0 }}
                                />
                            ),
                        },
                        {
                            name: "github",
                            label: "Sign in with GitHub",
                            icon: (
                                <GithubOutlined
                                    style={{ fontSize: 24, lineHeight: 0 }}
                                />
                            ),
                        },
                    ]}
                />
            )}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />
    );
};

export default App;
