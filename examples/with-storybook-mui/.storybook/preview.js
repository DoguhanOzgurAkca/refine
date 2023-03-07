import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { MemoryRouterComponent } from "@refinedev/react-router-v6";
import { useDarkMode } from "storybook-dark-mode";
import { DarkTheme, LightTheme, LoginPage, ReadyPage, ErrorComponent } from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import { authProvider } from "../src/authProvider";

export const parameters = {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

export const RefineWithLayout = (Story) => (
    <ThemeProvider theme={useDarkMode() ? DarkTheme : LightTheme}>
        <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            legacyAuthProvider={authProvider}
            LoginPage={LoginPage}
            ReadyPage={ReadyPage}
            catchAll={ErrorComponent}
            legacyRouterProvider={{
                ...routerProvider,
                RouterComponent: MemoryRouterComponent,
            }}
            resources={[
                {
                    name: "CMS",
                },
                {
                    name: "posts",
                    parentName: "CMS",
                    list: Story,
                },
            ]}

        />
    </ThemeProvider>
);

export const RefineWithoutLayout = (Story) => (
    <ThemeProvider theme={useDarkMode() ? DarkTheme : LightTheme}>
        <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            legacyAuthProvider={authProvider}
            LoginPage={LoginPage}
            ReadyPage={ReadyPage}
            catchAll={ErrorComponent}
            legacyRouterProvider={{
                ...routerProvider,
                RouterComponent: MemoryRouterComponent,
            }}
            resources={[
                {
                    name: "CMS",
                },
                {
                    name: "posts",
                    parentName: "CMS",
                    list: Story,
                },
            ]}

        />
    </ThemeProvider>
);
