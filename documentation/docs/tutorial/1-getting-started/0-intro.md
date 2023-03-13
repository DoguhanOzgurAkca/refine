---
id: index
title: 1. Intro
tutorial:
    prev: tutorial/introduction/select-framework
    next: tutorial/getting-started/prepare-env
---

<UIConditional is="antd">

Now that you have selected the **Ant Design** option as your UI preference, let's get started!

</UIConditional>

<UIConditional is="chakra-ui">

Now that you have selected the **Chakra UI** option as your UI preference, let's get started!

</UIConditional>

<UIConditional is="headless">

Now that you have selected the **headless** option as your UI preference, let's get started!

</UIConditional>

<UIConditional is="mantine">

Now that you have selected the **Mantine** option as your UI preference, let's get started!

</UIConditional>

<UIConditional is="mui">

Now that you have selected the **Material UI** option as your UI preference, let's get started!

</UIConditional>

:::info Using Stackblitz?
Prefer to go through this tutorial in an online code editor? That's possible!

<details>

<summary>Follow these instructions, then go directly to "Generate CRUD pages automatically with Inferencer" section!</summary>

**Set up StackBlitz**

<UIConditional is="antd">

1. Click [here](https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-antd?file=src%2FApp.tsx) to open the Ant Design template.

</UIConditional>

<UIConditional is="chakra-ui">

1. Click [here](https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-chakra-ui?file=src%2FApp.tsx) to open the Chakra UI template.

</UIConditional>

<UIConditional is="headless">

1. Click [here](https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-headless?file=src%2FApp.tsx) to open the headless template.

</UIConditional>

<UIConditional is="mantine">

1. Click [here](https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-mantine?file=src%2FApp.tsx) to open the Mantine template.

</UIConditional>

<UIConditional is="mui">

1. Click [here](https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-mui?file=src%2FApp.tsx) to open the Material UI template.

</UIConditional>

2. Click “Sign in” on the top right to log in using your GitHub credentials.

3. In the upper left of the StackBlitz editor window, click the “fork” button to fork the template (save to your own account dashboard).

<UIConditional is="antd">

4. After the project loads, you will see a live preview of the “refine-antd-boilerplate” starter.

</UIConditional>

<UIConditional is="chakra-ui">

4. After the project loads, you will see a live preview of the “refine-chakra-ui-boilerplate” starter.

</UIConditional>

<UIConditional is="headless">

4. After the project loads, you will see a live preview of the “refine-headless-boilerplate” starter.

</UIConditional>

<UIConditional is="mantine">

4. After the project loads, you will see a live preview of the “refine-mantine-boilerplate” starter.

</UIConditional>

<UIConditional is="mui">

4. After the project loads, you will see a live preview of the “refine-mui-boilerplate” starter.

</UIConditional>

**Make Changes**
<UIConditional is="antd">

In the files panel, click on `src/app.tsx` to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: [Generate CRUD pages automatically with Inferencer](../1-getting-started/antd/3-generate-crud-pages.md)

</UIConditional>

<UIConditional is="chakra-ui">

In the files panel, click on `src/app.tsx` to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: [Generate CRUD pages automatically with Inferencer](../1-getting-started/chakra-ui/3-generate-crud-pages.md)

</UIConditional>

<UIConditional is="headless">

In the files panel, click on `src/app.tsx` to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: [Generate CRUD pages automatically with Inferencer](../1-getting-started/headless/3-generate-crud-pages.md)

</UIConditional>

<UIConditional is="mantine">

In the files panel, click on `src/app.tsx` to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: [Generate CRUD pages automatically with Inferencer](../1-getting-started/mantine/3-generate-crud-pages.md)

</UIConditional>

<UIConditional is="mui">

In the files panel, click on `src/app.tsx` to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: [Generate CRUD pages automatically with Inferencer](../1-getting-started/mui/3-generate-crud-pages.md)

</UIConditional>

**Create a GitHub Repository**

1. Press the "Connect Repository" button at the top of your list of files, enter a new name for your repository, and click "Create repo & push".

2. When you have changes to commit back to your GitHub, a “Commit” button will appear at the top left of your workspace. Clicking on this will allow you to enter a commit message, and update your repository.

**Deploy your App**

If you’d like to deploy to Netlify, skip to [Deploy your app to the web](../1-getting-started/5-deploy-project.md). Otherwise, skip to [Generate CRUD pages automatically with Inferencer](!!!!! Wrong Link) to start building with **refine**!

</details>
:::

<h3>Where are we going?</h3>

In this unit, we will be covering the following steps:

-   Setting up your development environment.
-   Creating a new project.
-   Generating CRUD pages for your data model.
-   Storing your project in a git repository.
-   Deploying your project to the cloud.

As you make changes to your project, you can commit them to your GitHub repository. Netlify listens for changes to your GitHub repository to automatically rebuilds and deploys your application on every commit. This allows anyone to access and view your website updates as you make them.

<Checklist>

<ChecklistItem id="getting-started">
Let's prepare to build a refine project!
</ChecklistItem>

</Checklist>
