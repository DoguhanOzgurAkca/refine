import { ErrorComponent, GitHubBanner, Refine } from "@refinedev/core";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { BlogPostCreate } from "./pages/blog-posts/create";
import { BlogPostEdit } from "./pages/blog-posts/edit";
import { BlogPostList } from "./pages/blog-posts/list";
import { BlogPostShow } from "./pages/blog-posts/show";

import { Layout } from "./components/layout";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                routerProvider={routerProvider}
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
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route
                            index
                            element={
                                <NavigateToResource resource="blog_posts" />
                            }
                        />

                        <Route path="/blog-posts">
                            <Route index element={<BlogPostList />} />
                            <Route path="show/:id" element={<BlogPostShow />} />
                            <Route path="create" element={<BlogPostCreate />} />
                            <Route path="edit/:id" element={<BlogPostEdit />} />
                        </Route>

                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
        </BrowserRouter>
    );
}

export default App;
