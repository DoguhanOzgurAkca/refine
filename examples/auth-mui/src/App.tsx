import { Refine, AuthBindings, Authenticated } from "@refinedev/core";
import {
    Layout,
    ErrorComponent,
    ReadyPage,
    LightTheme,
    notificationProvider,
    RefineSnackbarProvider,
    AuthPage,
} from "@refinedev/mui";
import {
    CssBaseline,
    GlobalStyles,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import { useFormContext } from "react-hook-form";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import { PostsList, PostCreate, PostEdit } from "pages/posts";

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ providerName, email }) => {
            if (providerName === "google") {
                window.location.href =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                return {
                    success: true,
                };
            }

            if (providerName === "github") {
                window.location.href =
                    "https://github.com/login/oauth/authorize";
                return {
                    success: true,
                };
            }

            if (email) {
                localStorage.setItem("email", email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                error: new Error("Invalid email or password"),
            };
        },
        register: async (params) => {
            if (params.email && params.password) {
                localStorage.setItem("email", params.email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }
            return {
                success: false,
                error: new Error("Invalid email or password"),
            };
        },
        updatePassword: async (params) => {
            if (params.newPassword) {
                //we can update password here
                return {
                    success: true,
                };
            }
            return {
                success: false,
                error: new Error("Invalid password"),
            };
        },
        forgotPassword: async (params) => {
            if (params.email) {
                //we can send email with reset password link here
                return {
                    success: true,
                };
            }
            return {
                success: false,
                error: new Error("Invalid email"),
            };
        },
        logout: async () => {
            localStorage.removeItem("email");
            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async () => ({}),
        check: async () =>
            localStorage.getItem("email")
                ? {
                      authenticated: true,
                  }
                : {
                      authenticated: false,
                      error: new Error("Not authenticated"),
                      logout: true,
                      redirectTo: "/login",
                  },
        getPermissions: async () => ["admin"],
        getIdentity: async () => ({
            id: 1,
            name: "Jane Doe",
            avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
        }),
    };

    const RememeberMe = () => {
        const { register } = useFormContext();

        return (
            <FormControlLabel
                sx={{
                    span: {
                        fontSize: "12px",
                        color: "text.secondary",
                    },
                }}
                color="secondary"
                control={
                    <Checkbox
                        size="small"
                        id="rememberMe"
                        {...register("rememberMe")}
                    />
                }
                label="Remember me"
            />
        );
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={LightTheme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        authProvider={authProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        routerProvider={routerProvider}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "posts",
                                list: "/posts",
                                edit: "/posts/edit/:id",
                                create: "/posts/create",
                            },
                        ]}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Authenticated
                                        fallback={<Navigate to="/login" />}
                                    >
                                        <Layout>
                                            <Outlet />
                                        </Layout>
                                    </Authenticated>
                                }
                            >
                                <Route index element={<NavigateToResource />} />
                                <Route path="/posts" element={<PostsList />} />
                                <Route
                                    path="/posts/create"
                                    element={<PostCreate />}
                                />
                                <Route
                                    path="/posts/edit/:id"
                                    element={<PostEdit />}
                                />
                            </Route>

                            <Route
                                element={
                                    <Authenticated fallback={<Outlet />}>
                                        <NavigateToResource />
                                    </Authenticated>
                                }
                            >
                                <Route
                                    path="/login"
                                    element={
                                        <AuthPage
                                            type="login"
                                            providers={[
                                                {
                                                    name: "google",
                                                    label: "Sign in with Google",
                                                    icon: (
                                                        <GoogleIcon
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                    ),
                                                },
                                                {
                                                    name: "github",
                                                    label: "Sign in with GitHub",
                                                    icon: (
                                                        <GitHubIcon
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                    ),
                                                },
                                            ]}
                                        />
                                    }
                                />
                                <Route
                                    path="/register"
                                    element={
                                        <AuthPage
                                            type="register"
                                            formProps={{
                                                onSubmit: (formValues) => {
                                                    console.log(
                                                        JSON.stringify(
                                                            formValues,
                                                            null,
                                                            2,
                                                        ),
                                                    );
                                                },
                                                defaultValues: {
                                                    email: "test@mail.com",
                                                },
                                            }}
                                            providers={[
                                                {
                                                    name: "google",
                                                    label: "Sign in with Google",
                                                    icon: (
                                                        <GoogleIcon
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                    ),
                                                },
                                                {
                                                    name: "github",
                                                    label: "Sign in with GitHub",
                                                    icon: (
                                                        <GitHubIcon
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                    ),
                                                },
                                            ]}
                                        />
                                    }
                                />
                                <Route
                                    path="/forgot-password"
                                    element={<AuthPage type="forgotPassword" />}
                                />
                                <Route
                                    path="/update-password"
                                    element={<AuthPage type="updatePassword" />}
                                />
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
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
