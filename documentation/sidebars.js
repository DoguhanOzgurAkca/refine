/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    someSidebar: [
        {
            type: "category",
            label: "Getting Started",
            items: [
                "getting-started/overview",
                "getting-started/quickstart",
                {
                    type: "doc",
                    id: "tutorial/introduction/index",
                    label: "Tutorial",
                },
            ],
            className: "category-as-header",
        },
        {
            type: "category",
            collapsible: false,
            label: "API Reference",
            className: "category-as-header",
            items: [
                "api-reference/general-concepts",
                {
                    type: "category",
                    label: "Core API",
                    link: {
                        type: "generated-index",
                        title: "Core API",
                        slug: "/api-reference/core",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Providers",
                            items: [
                                "api-reference/core/providers/accessControl-provider",
                                "api-reference/core/providers/auth-provider",
                                "api-reference/core/providers/audit-log-provider",
                                "api-reference/core/providers/data-provider",
                                "api-reference/core/providers/i18n-provider",
                                "api-reference/core/providers/live-provider",
                                "api-reference/core/providers/notification-provider",
                                "api-reference/core/providers/router-provider",
                            ],
                        },
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                {
                                    type: "category",
                                    label: "Access Control",
                                    items: [
                                        "api-reference/core/hooks/accessControl/useCan",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Authentication",
                                    items: [
                                        "api-reference/core/hooks/authentication/useIsAuthenticated",
                                        "api-reference/core/hooks/authentication/useOnError",
                                        "api-reference/core/hooks/authentication/useGetIdentity",
                                        "api-reference/core/hooks/authentication/useLogin",
                                        "api-reference/core/hooks/authentication/useLogout",
                                        "api-reference/core/hooks/authentication/usePermissions",
                                        "api-reference/core/hooks/authentication/useRegister",
                                        "api-reference/core/hooks/authentication/useForgotPassword",
                                        "api-reference/core/hooks/authentication/useUpdatePassword",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Audit Log",
                                    items: [
                                        "api-reference/core/hooks/audit-log/useLog",
                                        "api-reference/core/hooks/audit-log/useLogList",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Breadcrumb",
                                    items: [
                                        "api-reference/core/hooks/useBreadcrumb",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Data",
                                    items: [
                                        "api-reference/core/hooks/data/useApiUrl",
                                        "api-reference/core/hooks/data/useCreate/index",
                                        "api-reference/core/hooks/data/useCreateMany/index",
                                        "api-reference/core/hooks/data/useCustom/index",
                                        "api-reference/core/hooks/data/useCustomMutation/index",
                                        "api-reference/core/hooks/data/useDataProvider",
                                        "api-reference/core/hooks/data/useDelete/index",
                                        "api-reference/core/hooks/data/useDeleteMany/index",
                                        "api-reference/core/hooks/data/useList/index",
                                        "api-reference/core/hooks/data/useInfiniteList/index",
                                        "api-reference/core/hooks/data/useMany/index",
                                        "api-reference/core/hooks/data/useOne/index",
                                        "api-reference/core/hooks/data/useUpdate/index",
                                        "api-reference/core/hooks/data/useUpdateMany/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Field",
                                    items: [
                                        "api-reference/core/hooks/useSelect/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Form",
                                    items: ["api-reference/core/hooks/useForm"],
                                },
                                {
                                    type: "category",
                                    label: "Import-Export",
                                    items: [
                                        "api-reference/core/hooks/import-export/useExport",
                                        "api-reference/core/hooks/import-export/useImport",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Invalidate",
                                    items: [
                                        "api-reference/core/hooks/invalidate/useInvalidate",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Live",
                                    items: [
                                        "api-reference/core/hooks/live/usePublish",
                                        "api-reference/core/hooks/live/useSubscription",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Navigation",
                                    items: [
                                        "api-reference/core/hooks/navigation/useGo",
                                        "api-reference/core/hooks/navigation/useParsed",
                                        "api-reference/core/hooks/navigation/useBack",
                                        "api-reference/core/hooks/navigation/useLink",
                                        "api-reference/core/hooks/navigation/useGetToPath",
                                        "api-reference/core/hooks/navigation/useNavigation",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Notification",
                                    items: [
                                        "api-reference/core/hooks/useNotification/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Resource",
                                    items: [
                                        "api-reference/core/hooks/resource/useResource",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Show",
                                    items: [
                                        "api-reference/core/hooks/show/useShow",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Table",
                                    items: [
                                        "api-reference/core/hooks/useTable/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Translate",
                                    items: [
                                        "api-reference/core/hooks/translate/useGetLocale",
                                        "api-reference/core/hooks/translate/useSetLocale",
                                        "api-reference/core/hooks/translate/useTranslate",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "UI",
                                    items: [
                                        "api-reference/core/hooks/ui/useModal",
                                        "api-reference/core/hooks/ui/useMenu",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "api-reference/core/components/auth-page",
                                "api-reference/core/components/refine-config",
                                "api-reference/core/components/inferencer",
                                {
                                    type: "category",
                                    label: "Authorization",
                                    items: [
                                        "api-reference/core/components/auth/authenticated",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Access Control",
                                    items: [
                                        "api-reference/core/components/accessControl/can-access",
                                    ],
                                },
                            ],
                        },
                        "api-reference/core/interfaceReferences",
                    ],
                },

                {
                    type: "category",
                    label: "Ant Design API",
                    link: {
                        type: "generated-index",
                        title: "Ant Design API",
                        slug: "/api-reference/antd",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                {
                                    type: "category",
                                    label: "Field",
                                    items: [
                                        "api-reference/antd/hooks/field/useCheckboxGroup",
                                        "api-reference/antd/hooks/field/useRadioGroup",
                                        "api-reference/antd/hooks/field/useSelect/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Form",
                                    items: [
                                        "api-reference/antd/hooks/form/useDrawerForm",
                                        "api-reference/antd/hooks/form/useForm",
                                        "api-reference/antd/hooks/form/useModalForm",
                                        "api-reference/antd/hooks/form/useStepsForm",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Import",
                                    items: [
                                        "api-reference/antd/hooks/import/useImport",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "List",
                                    items: [
                                        "api-reference/antd/hooks/list/useSimpleList",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Table",
                                    items: [
                                        "api-reference/antd/hooks/table/useEditableTable",
                                        "api-reference/antd/hooks/table/useTable",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "UI",
                                    items: [
                                        "api-reference/antd/hooks/ui/useModal",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "api-reference/antd/components/antd-auth-page",
                                "api-reference/antd/components/antd-themed-layout",
                                "api-reference/antd/components/inferencer",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "api-reference/antd/components/basic-views/create",
                                        "api-reference/antd/components/basic-views/edit",
                                        "api-reference/antd/components/basic-views/list",
                                        "api-reference/antd/components/basic-views/show",
                                    ],
                                },
                                "api-reference/antd/components/breadcrumb",
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "api-reference/antd/components/buttons/clone-button",
                                        "api-reference/antd/components/buttons/create-button",
                                        "api-reference/antd/components/buttons/delete-button",
                                        "api-reference/antd/components/buttons/edit-button",
                                        "api-reference/antd/components/buttons/export-button",
                                        "api-reference/antd/components/buttons/import-button",
                                        "api-reference/antd/components/buttons/list-button",
                                        "api-reference/antd/components/buttons/refresh-button",
                                        "api-reference/antd/components/buttons/save-button",
                                        "api-reference/antd/components/buttons/show-button",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "api-reference/antd/components/fields/boolean",
                                        "api-reference/antd/components/fields/date",
                                        "api-reference/antd/components/fields/email",
                                        "api-reference/antd/components/fields/file",
                                        "api-reference/antd/components/fields/image",
                                        "api-reference/antd/components/fields/markdown",
                                        "api-reference/antd/components/fields/number",
                                        "api-reference/antd/components/fields/tag",
                                        "api-reference/antd/components/fields/text",
                                        "api-reference/antd/components/fields/url",
                                    ],
                                },
                                "api-reference/antd/components/filter-dropdown",
                                {
                                    type: "category",
                                    label: "Inputs",
                                    items: [
                                        "api-reference/antd/components/inputs/custom-inputs",
                                    ],
                                },
                            ],
                        },
                        "api-reference/antd/theming",
                        "api-reference/antd/migration-guide/v4-to-v5",
                    ],
                },

                {
                    type: "category",
                    label: "Chakra UI API",
                    link: {
                        type: "generated-index",
                        title: "Chakra UI API",
                        slug: "/api-reference/chakra-ui",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "api-reference/chakra-ui/components/chakra-auth-page",
                                "api-reference/chakra-ui/components/chakra-ui-themed-layout",
                                "api-reference/chakra-ui/components/inferencer",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "api-reference/chakra-ui/components/basic-views/create",
                                        "api-reference/chakra-ui/components/basic-views/edit",
                                        "api-reference/chakra-ui/components/basic-views/list",
                                        "api-reference/chakra-ui/components/basic-views/show",
                                    ],
                                },
                                "api-reference/chakra-ui/components/breadcrumb",
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "api-reference/chakra-ui/components/buttons/clone-button",
                                        "api-reference/chakra-ui/components/buttons/create-button",
                                        "api-reference/chakra-ui/components/buttons/delete-button",
                                        "api-reference/chakra-ui/components/buttons/edit-button",
                                        "api-reference/chakra-ui/components/buttons/export-button",
                                        "api-reference/chakra-ui/components/buttons/import-button",
                                        "api-reference/chakra-ui/components/buttons/list-button",
                                        "api-reference/chakra-ui/components/buttons/refresh-button",
                                        "api-reference/chakra-ui/components/buttons/save-button",
                                        "api-reference/chakra-ui/components/buttons/show-button",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "api-reference/chakra-ui/components/fields/boolean",
                                        "api-reference/chakra-ui/components/fields/date",
                                        "api-reference/chakra-ui/components/fields/email",
                                        "api-reference/chakra-ui/components/fields/file",
                                        "api-reference/chakra-ui/components/fields/markdown",
                                        "api-reference/chakra-ui/components/fields/number",
                                        "api-reference/chakra-ui/components/fields/tag",
                                        "api-reference/chakra-ui/components/fields/text",
                                        "api-reference/chakra-ui/components/fields/url",
                                    ],
                                },
                            ],
                        },
                        "api-reference/chakra-ui/theming",
                    ],
                },

                {
                    type: "category",
                    label: "Mantine API",
                    link: {
                        type: "generated-index",
                        title: "Mantine API",
                        slug: "/api-reference/mantine",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                {
                                    type: "category",
                                    label: "Form",
                                    items: [
                                        "api-reference/mantine/hooks/form/useDrawerForm",
                                        "api-reference/mantine/hooks/form/useForm",
                                        "api-reference/mantine/hooks/form/useModalForm",
                                        "api-reference/mantine/hooks/form/useStepsForm",
                                    ],
                                },
                                "api-reference/mantine/hooks/useSelect/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "api-reference/mantine/components/mantine-auth-page",
                                "api-reference/mantine/components/mantine-themed-layout",
                                "api-reference/mantine/components/inferencer",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "api-reference/mantine/components/basic-views/create",
                                        "api-reference/mantine/components/basic-views/edit",
                                        "api-reference/mantine/components/basic-views/list",
                                        "api-reference/mantine/components/basic-views/show",
                                    ],
                                },
                                "api-reference/mantine/components/breadcrumb",
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "api-reference/mantine/components/buttons/clone-button",
                                        "api-reference/mantine/components/buttons/create-button",
                                        "api-reference/mantine/components/buttons/delete-button",
                                        "api-reference/mantine/components/buttons/edit-button",
                                        "api-reference/mantine/components/buttons/export-button",
                                        "api-reference/mantine/components/buttons/import-button",
                                        "api-reference/mantine/components/buttons/list-button",
                                        "api-reference/mantine/components/buttons/refresh-button",
                                        "api-reference/mantine/components/buttons/save-button",
                                        "api-reference/mantine/components/buttons/show-button",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "api-reference/mantine/components/fields/boolean",
                                        "api-reference/mantine/components/fields/date",
                                        "api-reference/mantine/components/fields/email",
                                        "api-reference/mantine/components/fields/file",
                                        "api-reference/mantine/components/fields/markdown",
                                        "api-reference/mantine/components/fields/number",
                                        "api-reference/mantine/components/fields/tag",
                                        "api-reference/mantine/components/fields/text",
                                        "api-reference/mantine/components/fields/url",
                                    ],
                                },
                            ],
                        },
                        "api-reference/mantine/theming",
                    ],
                },

                {
                    type: "category",
                    label: "Material UI API",
                    link: {
                        type: "generated-index",
                        title: "Material UI API",
                        slug: "/api-reference/mui",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                "api-reference/mui/hooks/useAutocomplete/index",
                                "api-reference/mui/hooks/useDataGrid/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "api-reference/mui/components/mui-auth-page",
                                "api-reference/mui/components/mui-themed-layout",
                                "api-reference/mui/components/inferencer",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "api-reference/mui/components/basic-views/create",
                                        "api-reference/mui/components/basic-views/edit",
                                        "api-reference/mui/components/basic-views/list",
                                        "api-reference/mui/components/basic-views/show",
                                    ],
                                },
                                "api-reference/mui/components/mui-breadcrumb",
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "api-reference/mui/components/buttons/clone-button",
                                        "api-reference/mui/components/buttons/create-button",
                                        "api-reference/mui/components/buttons/delete-button",
                                        "api-reference/mui/components/buttons/edit-button",
                                        "api-reference/mui/components/buttons/export-button",
                                        "api-reference/mui/components/buttons/import-button",
                                        "api-reference/mui/components/buttons/list-button",
                                        "api-reference/mui/components/buttons/refresh-button",
                                        "api-reference/mui/components/buttons/save-button",
                                        "api-reference/mui/components/buttons/show-button",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "api-reference/mui/components/fields/boolean",
                                        "api-reference/mui/components/fields/date",
                                        "api-reference/mui/components/fields/email",
                                        "api-reference/mui/components/fields/file",
                                        "api-reference/mui/components/fields/markdown",
                                        "api-reference/mui/components/fields/number",
                                        "api-reference/mui/components/fields/tag",
                                        "api-reference/mui/components/fields/text",
                                        "api-reference/mui/components/fields/url",
                                    ],
                                },
                            ],
                        },
                        "api-reference/mui/theming",
                        "api-reference/mui/migration-guide/v4-to-v5",
                    ],
                },

                {
                    type: "category",
                    label: "Packages",
                    link: {
                        type: "generated-index",
                        title: "Packages",
                        slug: "/packages",
                    },
                    items: [
                        "packages/list-of-packages",
                        "packages/documentation/cli",
                        {
                            type: "category",
                            label: "Data Providers",
                            items: [
                                "packages/documentation/data-providers/appwrite",
                                "packages/documentation/data-providers/graphql",
                                "packages/documentation/data-providers/simple-rest",
                                "packages/documentation/data-providers/strapi-v4",
                                "packages/documentation/data-providers/supabase",
                            ],
                        },
                        "packages/documentation/inferencer",
                        "packages/documentation/command-palette",
                        "packages/documentation/react-table/index",
                        {
                            type: "category",
                            label: "React Hook Form",
                            items: [
                                "packages/documentation/react-hook-form/useForm",
                                "packages/documentation/react-hook-form/useModalForm",
                                "packages/documentation/react-hook-form/useStepsForm",
                            ],
                        },
                        {
                            type: "category",
                            label: "Routers",
                            link: {
                                type: "generated-index",
                                title: "Router Providers",
                                description: `<strong>refine</strong> comes with built-in router packages for Next.js, Remix and React Router v6. You can use them to integrate your app with <strong>refine</strong>. You can find examples and documentation for each router about how to use them with layouts, authentication and resource handling.`,
                                slug: "/packages/documentation/routers",
                            },
                            items: [
                                "packages/documentation/routers/react-router-v6",
                                "packages/documentation/routers/nextjs",
                                "packages/documentation/routers/remix",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Guides",
            className: "category-as-header",
            items: [
                {
                    type: "category",
                    label: "Examples",
                    link: {
                        type: "doc",
                        id: "examples/examples",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Access Control",
                            items: [
                                "examples/access-control/casbin",
                                "examples/access-control/cerbos",
                            ],
                        },
                        {
                            type: "category",
                            label: "Authentication",
                            items: [
                                "examples/authentication/headless",
                                "examples/authentication/antd",
                                "examples/authentication/mui",
                                "examples/authentication/mantine",
                            ],
                        },
                        {
                            type: "category",
                            label: "Auth Provider",
                            items: [
                                "examples/auth-provider/auth0",
                                "examples/auth-provider/google-auth",
                                "examples/auth-provider/keycloak",
                                "examples/auth-provider/otpLogin",
                            ],
                        },
                        {
                            type: "category",
                            label: "Audit Log",
                            items: [
                                "examples/audit-log/audit-log-antd",
                                "examples/audit-log/audit-log-provider",
                            ],
                        },
                        {
                            type: "category",
                            label: "Build Systems",
                            items: [
                                "examples/build-systems/turbo",
                                "examples/build-systems/lerna",
                                "examples/build-systems/nx",
                            ],
                        },
                        "examples/antd-calendar-example",
                        "examples/command-palette",
                        {
                            type: "category",
                            label: "Core",
                            items: [
                                "examples/core/useImport",
                                "examples/core/useMenu",
                                "examples/core/useModal",
                                "examples/core/useSelect",
                                "examples/core/useInfiniteList",
                            ],
                        },
                        {
                            type: "category",
                            label: "Customization",
                            items: [
                                {
                                    type: "category",
                                    label: "Custom Theme",
                                    items: [
                                        "examples/customization/theme/customThemeAntd",
                                        "examples/customization/theme/customThemeChakraUI",
                                        "examples/customization/theme/customThemeMaterialUI",
                                        "examples/customization/theme/customThemeMantine",
                                    ],
                                },
                                "examples/customization/customFooter",
                                "examples/customization/customLogin",
                                "examples/customization/customSider",
                                "examples/customization/offLayoutArea",
                                "examples/customization/rtl",
                                "examples/customization/topMenuLayout",
                            ],
                        },
                        "examples/customPages",
                        {
                            type: "category",
                            label: "Data Provider",
                            items: [
                                "examples/data-provider/airtable",
                                "examples/data-provider/appwrite",
                                "examples/data-provider/directus",
                                "examples/data-provider/elide",
                                "examples/data-provider/hasura",
                                "examples/data-provider/multiple",
                                "examples/data-provider/nestjsxCrud",
                                "examples/data-provider/nhost",
                                "examples/data-provider/strapi",
                                "examples/data-provider/strapi-graphql",
                                "examples/data-provider/strapi-v4",
                                "examples/data-provider/supabase",
                            ],
                        },
                        {
                            type: "category",
                            label: "Field",
                            items: [
                                "examples/field/useCheckboxGroup",
                                "examples/field/useRadioGroup",
                                "examples/field/useSelect",
                                "examples/field/useSelect-with-infinite-list",
                                "examples/field/useAutocomplete",
                            ],
                        },
                        {
                            type: "category",
                            label: "Form",
                            items: [
                                {
                                    type: "category",
                                    label: "Ant Design",
                                    items: [
                                        "examples/form/antd/custom-form-validation",
                                        "examples/form/antd/useDrawerForm",
                                        "examples/form/antd/useForm",
                                        "examples/form/antd/useModalForm",
                                        "examples/form/antd/useStepsForm",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Headless",
                                    items: [
                                        "examples/form/headless/save-and-continue",
                                        "examples/form/headless/useForm",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Mantine",
                                    items: [
                                        "examples/form/mantine/useDrawerForm",
                                        "examples/form/mantine/useForm",
                                        "examples/form/mantine/useModalForm",
                                        "examples/form/mantine/useStepsForm",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Material UI",
                                    items: [
                                        "examples/form/mui/useDrawerForm",
                                        "examples/form/mui/useForm",
                                        "examples/form/mui/useModalForm",
                                        "examples/form/mui/useStepsForm",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "React Hook Form",
                                    items: [
                                        "examples/form/react-hook-form/useForm",
                                        "examples/form/react-hook-form/useModalForm",
                                        "examples/form/react-hook-form/useStepsForm",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "i18n",
                            items: [
                                "examples/i18n/i18n-nextjs",
                                "examples/i18n/i18n-react",
                            ],
                        },
                        {
                            type: "category",
                            label: "Import / Export",
                            items: [
                                "examples/import-export/antd",
                                "examples/import-export/material-ui",
                                "examples/import-export/mantine",
                            ],
                        },
                        {
                            type: "category",
                            label: "Inputs",
                            items: [
                                "examples/inputs/customInput",
                                "examples/inputs/datePicker",
                            ],
                        },
                        "examples/javascript",
                        {
                            type: "category",
                            label: "List",
                            items: ["examples/list/useSimpleList"],
                        },
                        {
                            type: "category",
                            label: "Live Provider",
                            items: ["examples/live-provider/ably"],
                        },
                        "examples/multi-level-menu/multi-level-menu",
                        "examples/mutation-mode",
                        {
                            type: "category",
                            label: "Next.js",
                            items: [
                                "examples/next-js/nextjs",
                                "examples/next-js/nextjs-appdir",
                                "examples/next-js/auth",
                                "examples/next-js/NextAuth-js",
                            ],
                        },
                        {
                            type: "category",
                            label: "Notification Provider",
                            items: [
                                "examples/notification-provider/react-toastify",
                            ],
                        },
                        "examples/persistQuery",
                        {
                            type: "category",
                            label: "Remix",
                            items: [
                                "examples/remix/remix-antd",
                                "examples/remix/remix-material-ui",
                                "examples/remix/remix-headless",
                                "examples/remix/remix-auth",
                            ],
                        },
                        {
                            type: "category",
                            label: "Search",
                            items: ["examples/search/search"],
                        },
                        {
                            type: "category",
                            label: "Storybook",
                            items: [
                                "examples/storybook/antd-storybook",
                                "examples/storybook/material-ui-storybook",
                            ],
                        },
                        {
                            type: "category",
                            label: "Table",
                            items: [
                                {
                                    type: "category",
                                    label: "Ant Design",
                                    items: [
                                        "examples/table/antd/advancedTable",
                                        "examples/table/antd/tableFilter",
                                        "examples/table/antd/useDeleteMany",
                                        "examples/table/antd/useEditableTable",
                                        "examples/table/antd/useTable",
                                        "examples/table/antd/useUpdateMany",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Mantine",
                                    items: [
                                        "examples/table/mantine/advanced-react-table",
                                        "examples/table/mantine/basic",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Material UI",
                                    items: [
                                        "examples/table/mui/advanced",
                                        "examples/table/mui/cursor-pagination",
                                        "examples/table/mui/filter",
                                        "examples/table/mui/useDataGrid",
                                        "examples/table/mui/useDeleteMany",
                                        "examples/table/mui/useUpdateMany",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "React Table",
                                    items: [
                                        "examples/table/react-table/advanced-react-table",
                                        "examples/table/react-table/react-table",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Handson Table",
                                    items: [
                                        "examples/table/handsontable/handsontable",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "UI",
                            items: ["examples/ui/useModal"],
                        },
                        {
                            type: "category",
                            label: "Themes",
                            items: [
                                "examples/themes/refine-themes-antd",
                                "examples/themes/refine-themes-chakra-ui",
                                "examples/themes/refine-themes-mantine",
                                "examples/themes/refine-themes-mui",
                            ],
                        },
                        {
                            type: "category",
                            label: "Tutorial",
                            items: [
                                "examples/tutorial/antd-tutorial",
                                "examples/tutorial/headless-tutorial",
                                "examples/tutorial/mantine-tutorial",
                                "examples/tutorial/mui-tutorial",
                            ],
                        },
                        {
                            type: "category",
                            label: "Upload",
                            items: [
                                {
                                    type: "category",
                                    label: "Ant Design",
                                    items: [
                                        "examples/upload/antd/base64",
                                        "examples/upload/antd/multipart",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Mantine",
                                    items: [
                                        "examples/upload/mantine/base64",
                                        "examples/upload/mantine/multipart",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Material UI",
                                    items: [
                                        "examples/upload/mui/base64",
                                        "examples/upload/mui/multipart",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Web3",
                            items: ["examples/web3/web3Login"],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced Tutorials",
                    link: {
                        type: "generated-index",
                        title: "Advanced Tutorials",
                        slug: "/advanced-tutorials",
                    },
                    items: [
                        "advanced-tutorials/access-control",
                        {
                            type: "category",
                            label: "Auth",
                            items: [
                                "advanced-tutorials/auth/auth0",
                                "advanced-tutorials/auth/azure-ad",
                            ],
                        },
                        "advanced-tutorials/custom-layout",
                        {
                            type: "category",
                            label: "Data Provider",
                            items: [
                                "advanced-tutorials/data-provider/handling-filters",
                            ],
                        },
                        {
                            type: "category",
                            label: "Form",
                            items: [
                                "advanced-tutorials/forms/custom-form-validation",
                                "advanced-tutorials/forms/save-and-continue",
                            ],
                        },
                        {
                            type: "category",
                            label: "Import - Export",
                            items: [
                                "advanced-tutorials/import-export/csv-export",
                                "advanced-tutorials/import-export/csv-import",
                            ],
                        },
                        "advanced-tutorials/real-time",
                        "advanced-tutorials/multi-level-menu/multi-level-menu",
                        {
                            type: "category",
                            label: "Multitenancy",
                            items: [
                                "advanced-tutorials/multi-tenancy/appwrite",
                                "advanced-tutorials/multi-tenancy/strapi-v4",
                            ],
                        },
                        "advanced-tutorials/mutation-mode",
                        {
                            type: "category",
                            label: "Search",
                            items: [
                                "advanced-tutorials/search/list-search",
                                "advanced-tutorials/search/search",
                                "advanced-tutorials/search/table-search",
                            ],
                        },
                        {
                            type: "category",
                            label: "Upload",
                            items: [
                                "advanced-tutorials/upload/base64-upload",
                                "advanced-tutorials/upload/multipart-upload",
                            ],
                        },
                        {
                            type: "category",
                            label: "Web3",
                            items: ["advanced-tutorials/web3/ethereum-signin"],
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "faq",
                },
                {
                    type: "doc",
                    id: "contributing",
                },
                {
                    type: "doc",
                    id: "testing",
                },
            ],
        },
        {
            type: "category",
            label: "Migration Guide 🚀",
            className: "category-as-header",
            items: [
                "migration-guide/3x-to-4x",
                "migration-guide/auth-provider",
                "migration-guide/router-provider",
            ],
        },
        {
            type: "category",
            label: "Further Readings",
            className: "category-as-header",
            items: [
                "further-readings/benchmarks",
                "further-readings/telemetry",
                {
                    type: "doc",
                    id: "comparison",
                    label: "Comparison",
                },
                {
                    type: "doc",
                    id: "licence",
                },
            ],
        },
    ],
};
