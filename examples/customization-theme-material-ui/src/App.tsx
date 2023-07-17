import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { GitHubBanner, Refine } from "@refinedev/core";
import {
    ErrorComponent,
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
} from "@refinedev/mui";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts";
import { PostCreate, PostEdit, PostList } from "./pages/posts";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ColorModeContextProvider>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        notificationProvider={notificationProvider}
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        resources={[
                            {
                                name: "posts",
                                list: "/posts",
                                create: "/posts/create",
                                edit: "/posts/edit/:id",
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
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
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                        <DocumentTitleHandler />
                    </Refine>
                </RefineSnackbarProvider>
            </ColorModeContextProvider>
        </BrowserRouter>
    );
};

export default App;
