import {
    AuthPage,
    ErrorComponent,
    notificationProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/antd";
import { dataProvider, liveProvider } from "@refinedev/appwrite";
import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import routerProvider, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";
import { ConfigProvider } from "antd";

import { authProvider } from "./authProvider";
import { appwriteClient } from "./utility";

import { Header } from "./components/header";
import { ProductShow } from "./components/product";
import { OrderCreate, OrderEdit, OrderList } from "./pages/orders";
import { ProductList } from "./pages/products";

function App() {
    // inital tenant
    const tenant = "refine";

    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    liveProvider={liveProvider(appwriteClient, {
                        databaseId: "multi-tenancy",
                    })}
                    dataProvider={dataProvider(appwriteClient, {
                        databaseId: "multi-tenancy",
                    })}
                    authProvider={authProvider}
                    options={{
                        liveMode: "auto",
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                    resources={[
                        {
                            name: "products",
                            list: "/:tenant/products",
                            show: "/:tenant/products/show/:id",
                            meta: {
                                tenant,
                            },
                        },
                        {
                            name: "orders",
                            list: "/:tenant/orders",
                            create: "/:tenant/orders/create",
                            edit: "/:tenant/orders/edit/:id",
                            meta: {
                                tenant,
                            },
                        },
                    ]}
                    notificationProvider={notificationProvider}
                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated
                                    fallback={<CatchAllNavigate to="/login" />}
                                >
                                    <ThemedLayoutV2 Header={Header}>
                                        <Outlet />
                                    </ThemedLayoutV2>
                                </Authenticated>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="products" />
                                }
                            />

                            <Route path="/:tenant">
                                <Route path="products">
                                    <Route index element={<ProductList />} />
                                    <Route
                                        path="show/:id"
                                        element={<ProductShow />}
                                    />
                                </Route>

                                <Route path="orders">
                                    <Route index element={<OrderList />} />
                                    <Route
                                        path="create"
                                        element={<OrderCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<OrderEdit />}
                                    />
                                </Route>
                            </Route>
                        </Route>

                        <Route
                            element={
                                <Authenticated fallback={<Outlet />}>
                                    <NavigateToResource resource="products" />
                                </Authenticated>
                            }
                        >
                            <Route
                                path="/login"
                                element={
                                    <AuthPage
                                        type="login"
                                        formProps={{
                                            initialValues: {
                                                email: "demo@refine.dev",
                                                password: "demodemo",
                                            },
                                        }}
                                    />
                                }
                            />
                        </Route>

                        <Route
                            element={
                                <Authenticated>
                                    <ThemedLayoutV2 Header={Header}>
                                        <Outlet />
                                    </ThemedLayoutV2>
                                </Authenticated>
                            }
                        >
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;
