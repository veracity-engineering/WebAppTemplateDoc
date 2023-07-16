---
sidebar_position: 1
tags:
  - Templates
  - Vui
  - Base
---

# Overview

### Start your project

To download the vui-base, select `Vui - Base` when you run `npx dnv-cli init`.

After your project is download, to start the project, run

```bash
yarn

yarn start
```

Then project is running in `http://localhost:3000`

### Teches overview

We provided a base version of vui template including an empty dashboard page with a vui header and a vui footer. You could extend the template based on your business requirement after download our template.

Here's the teches we are using in our template:

- react v17.x.x
- react-router-dom v6.x.x
- typescript v4.x.x
- vui v1.x.x
- react-query v3.x.x
- zustand v4.x.x
- vite v2.x.x
- eslit v8.x.x
- prettier v2.x.x

:::tip

We are following the latest agreed state management pattern **zustand + react-query** to simply the react state management. If you are not familiar with these teches yet, we provided some example code in our template so you could have a fisrt insight of it. To get more deep understand of these, please go to website to see some tutorals of them.

:::

For more details, please check the `package.json` file in `yourProject/package.json`.

# More details?

To understand more about vui-base template, you could go to code-structure page to see the code structure.
