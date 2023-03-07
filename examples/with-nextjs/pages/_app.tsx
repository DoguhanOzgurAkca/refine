import React from "react";
import { AppProps } from "next/app";

import { Refine } from "@refinedev/core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
    AuthPage,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/nextjs-router";
import "@refinedev/antd";

import "@styles/global.css";

import { authProvider } from "src/authProvider";
import { API_URL } from "../src/constants";

import { PostList, PostCreate, PostEdit, PostShow } from "@components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Refine
            legacyRouterProvider={routerProvider}
            legacyAuthProvider={authProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                { name: "users" },
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                    canDelete: true,
                },
            ]}
            options={{ syncWithLocation: true }}
            notificationProvider={notificationProvider}
            LoginPage={() => (
                <AuthPage
                    formProps={{
                        initialValues: {
                            email: "admin@refine.dev",
                            password: "password",
                        },
                    }}
                />
            )}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default MyApp;
