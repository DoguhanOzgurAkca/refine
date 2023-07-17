import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import LocalPizzaOutlined from "@mui/icons-material/LocalPizzaOutlined";
import PeopleOutlineOutlined from "@mui/icons-material/PeopleOutlineOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import StoreOutlined from "@mui/icons-material/StoreOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { KBarProvider } from "@refinedev/kbar";
import {
    ErrorComponent,
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
} from "@refinedev/mui";
import routerProvider, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { authProvider } from "./authProvider";
import { Header, OffLayoutArea, Title } from "./components";
import { BikeWhiteIcon } from "./components/icons/bike-white";
import { ColorModeContextProvider } from "./contexts";
import { AuthPage } from "./pages/auth";
import { CategoryList } from "./pages/categories";
import {
    CourierCreate,
    CourierEdit,
    CourierList,
    CourierShow,
} from "./pages/couriers";
import { DashboardPage } from "./pages/dashboard";
import { OrderList, OrderShow } from "./pages/orders";
import { ProductList } from "./pages/products";
import { ReviewsList } from "./pages/reviews";
import { StoreCreate, StoreEdit, StoreList } from "./pages/stores";
import { UserList, UserShow } from "./pages/users";

const API_URL = "https://api.finefoods.refine.dev";

const App: React.FC = () => {
    const { t, i18n } = useTranslation();
    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    return (
        <BrowserRouter>
            <GitHubBanner />
            <KBarProvider>
                <ColorModeContextProvider>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{ html: { WebkitFontSmoothing: "auto" } }}
                    />
                    <RefineSnackbarProvider>
                        <Refine
                            routerProvider={routerProvider}
                            dataProvider={dataProvider(API_URL)}
                            authProvider={authProvider}
                            i18nProvider={i18nProvider}
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                            }}
                            notificationProvider={notificationProvider}
                            resources={[
                                {
                                    name: "dashboard",
                                    list: "/",
                                    meta: {
                                        label: "Dashboard",
                                        icon: <Dashboard />,
                                    },
                                },
                                {
                                    name: "orders",
                                    list: "/orders",
                                    show: "/orders/show/:id",
                                    meta: {
                                        icon: <AddShoppingCartOutlined />,
                                    },
                                },
                                {
                                    name: "users",
                                    list: "/users",
                                    show: "/users/show/:id",
                                    meta: {
                                        icon: <PeopleOutlineOutlined />,
                                    },
                                },
                                {
                                    name: "products",
                                    list: "/products",
                                    meta: {
                                        icon: <LocalPizzaOutlined />,
                                    },
                                },
                                {
                                    name: "stores",
                                    list: "/stores",
                                    create: "/stores/create",
                                    edit: "/stores/edit/:id",
                                    meta: {
                                        icon: <StoreOutlined />,
                                    },
                                },
                                {
                                    name: "categories",
                                    list: "/categories",
                                    meta: {
                                        icon: <CategoryOutlined />,
                                    },
                                },
                                {
                                    name: "couriers",
                                    list: "/couriers",
                                    create: "/couriers/create",
                                    edit: "/couriers/edit/:id",
                                    show: "/couriers/show/:id",
                                    meta: {
                                        icon: <BikeWhiteIcon />,
                                    },
                                },
                                {
                                    name: "reviews",
                                    list: "/reviews",
                                    meta: {
                                        icon: <StarBorderOutlined />,
                                    },
                                },
                            ]}
                        >
                            <Routes>
                                <Route
                                    element={
                                        <Authenticated
                                            fallback={
                                                <CatchAllNavigate to="/login" />
                                            }
                                        >
                                            <ThemedLayoutV2
                                                Header={Header}
                                                Title={Title}
                                                OffLayoutArea={OffLayoutArea}
                                            >
                                                <Outlet />
                                            </ThemedLayoutV2>
                                        </Authenticated>
                                    }
                                >
                                    <Route index element={<DashboardPage />} />

                                    <Route path="/orders">
                                        <Route index element={<OrderList />} />
                                        <Route
                                            path="show/:id"
                                            element={<OrderShow />}
                                        />
                                    </Route>

                                    <Route path="/users">
                                        <Route index element={<UserList />} />
                                        <Route
                                            path="show/:id"
                                            element={<UserShow />}
                                        />
                                    </Route>

                                    <Route
                                        path="/products"
                                        element={<ProductList />}
                                    />

                                    <Route path="/stores">
                                        <Route index element={<StoreList />} />
                                        <Route
                                            path="create"
                                            element={<StoreCreate />}
                                        />
                                        <Route
                                            path="edit/:id"
                                            element={<StoreEdit />}
                                        />
                                    </Route>

                                    <Route
                                        path="/categories"
                                        element={<CategoryList />}
                                    />

                                    <Route path="/couriers">
                                        <Route
                                            index
                                            element={<CourierList />}
                                        />
                                        <Route
                                            path="create"
                                            element={<CourierCreate />}
                                        />
                                        <Route
                                            path="edit/:id"
                                            element={<CourierEdit />}
                                        />
                                        <Route
                                            path="show/:id"
                                            element={<CourierShow />}
                                        />
                                    </Route>

                                    <Route
                                        path="/reviews"
                                        element={<ReviewsList />}
                                    />
                                </Route>

                                <Route
                                    element={
                                        <Authenticated fallback={<Outlet />}>
                                            <NavigateToResource resource="dashboard" />
                                        </Authenticated>
                                    }
                                >
                                    <Route
                                        path="/login"
                                        element={
                                            <AuthPage
                                                type="login"
                                                formProps={{
                                                    defaultValues: {
                                                        email: "demo@refine.dev",
                                                        password: "demodemo",
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/register"
                                        element={
                                            <AuthPage
                                                type="register"
                                                formProps={{
                                                    defaultValues: {
                                                        email: "demo@refine.dev",
                                                        password: "demodemo",
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/forgot-password"
                                        element={
                                            <AuthPage
                                                type="forgotPassword"
                                                formProps={{
                                                    defaultValues: {
                                                        email: "demo@refine.dev",
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/update-password"
                                        element={
                                            <AuthPage type="updatePassword" />
                                        }
                                    />
                                </Route>

                                <Route
                                    element={
                                        <Authenticated>
                                            <ThemedLayoutV2
                                                Header={Header}
                                                Title={Title}
                                                OffLayoutArea={OffLayoutArea}
                                            >
                                                <Outlet />
                                            </ThemedLayoutV2>
                                        </Authenticated>
                                    }
                                >
                                    <Route
                                        path="*"
                                        element={<ErrorComponent />}
                                    />
                                </Route>
                            </Routes>
                            <UnsavedChangesNotifier />
                            <DocumentTitleHandler />
                        </Refine>
                    </RefineSnackbarProvider>
                </ColorModeContextProvider>
            </KBarProvider>
        </BrowserRouter>
    );
};

export default App;
