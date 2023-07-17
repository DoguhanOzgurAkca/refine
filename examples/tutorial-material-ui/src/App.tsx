import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { GitHubBanner, Refine } from "@refinedev/core";
import {
    ErrorComponent,
    notificationProvider,
    RefineSnackbarProvider,
    RefineThemes,
    ThemedLayoutV2,
} from "@refinedev/mui";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BlogPostCreate } from "./pages/blog-posts/create";
import { BlogPostEdit } from "./pages/blog-posts/edit";
import { BlogPostList } from "./pages/blog-posts/list";
import { BlogPostShow } from "./pages/blog-posts/show";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ThemeProvider theme={RefineThemes.Blue}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                show: "/blog-posts/show/:id",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <ThemedLayoutV2>
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="blog_posts" />
                                    }
                                />

                                <Route path="/blog-posts">
                                    <Route index element={<BlogPostList />} />
                                    <Route
                                        path="/blog-posts/show/:id"
                                        element={<BlogPostShow />}
                                    />
                                    <Route
                                        path="/blog-posts/create"
                                        element={<BlogPostCreate />}
                                    />
                                    <Route
                                        path="/blog-posts/edit/:id"
                                        element={<BlogPostEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Routes>
                        </ThemedLayoutV2>
                        <UnsavedChangesNotifier />
                        <DocumentTitleHandler />
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
