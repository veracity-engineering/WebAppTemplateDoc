---
sidebar_position: 3
title: Code example
tags:
  - Templates
  - Vui
  - Base
---

# Code example

We provided some topics for you to quick start with template:

### How to create a new page with routing ?

For example we want to create a `users` page with route /users, so if you can access to users page by going to `localhost:3000/users`.

**Step1:**
Create a folder named users under /pages and a file inside of users.tsx inside of this /users.

```js title="/pages/users/users.tsx"
import { Box } from "@veracity/vui";
import React from "react";

const Users = () => {
  return <Box>Hello, this is users page.</Box>;
};

export default Users;
```

**Step2:**
Add Users to `index.ts`.

```js title="/pages/index.ts"
export { default as Dashboard } from "./dashboard/dashboard";
export { default as Layout } from "./layout/layout";
// highlight-start
export { default as Users } from "./users/users";
// highlight-end
```

**Step3:**
Add routes to users.

```js title="/app.tsx"
...
// highlight-start
import { Dashboard, Layout, Users } from 'pages'
// highlight-end
...

<Routes>
  <Route element={<Layout />} path="/">
    <Route element={<Dashboard />} index />
    <Route element={<Dashboard />} path="/dashboard" />
    // highlight-start
    <Route element={<Users />} path="/users" />
    // highlight-end
    <Route element={<H5>404 Page</H5>} path="*" />
  </Route>
</Routes>
```

Done, users page is added.

### How to add code to call an api and apply data in page ? (server side state management workflow)

For example we want to call get `api/users/currentUser` api from backend.

**Step1:**
Since `api/users/currentUser` is a global api, we add `getMe` function it to `/apis/global/index.ts`

```js title="/apis/global/index.ts"
// we are using mock api now so clien is using clientMock in postman
// if you are integrate with real data, please use client with set baseUrl
import { clientMock as client } from "../client";

// highlight-start
export const getSignIn = () => {
  return client.get(`/auth`).then((response) => response.data);
};
// highlight-end
```

**Step2:**
Create `useMe` hooks in `/queries/global/index.tsx`

```js title="/queries/global/index.tsx"
// highlight-start
import { getMe } from "apis/global";
// highlight-end

// highlight-start
export const useMe = () => {
  return useQuery([queries.global.me], getMe);
};
// highlight-end
```

**Step3:**
Use useMe in Header component

```js title="/components/global/header/header.tsx"
// highlight-start
import { useMe } from 'queries/global'
// highlight-end

export default function Header(){
  ...
  // highlight-start
  const { data: me, isLoding: isMeLoading, isSuccess: isMeSuccess, isError: isMeError } = useMe()
  // highlight-end

  // use me in template
  return (<>
    {isMeloading ? <> Spinner </>: <>{me?.name}</>})
}

```

### How to add client state and use it? (client side state management workflow)

For example we want to add a client state `isSignIn` and `setIsSignIn` function to update isSignIn

**Step1:**
Since `isSignIn` is a global client state, we add them to `/stores/global/index.ts`

```js title="/stores/global/index.ts"

import create from 'zustand'

type GlobalState = {
  // highlight-start
	isSignIn: boolean
	setIsSignIn: (isLogin: boolean) => void
  // highlight-end
}

export const useGlobalStore = create<GlobalState>(set => ({
  // highlight-start
	isSignIn: false,
	setIsSignIn: (isSignIn: boolean) => set({ isSignIn })
  // highlight-end
}))

```

**Step2:**
Use `isSignIn` to Header

```js title="/components/global/header/header.tsx"
// highlight-start
import shallow from 'zustand/shallow'

import { useGlobalStore } from 'stores/global'
// highlight-end

export default function Header(){
  ...
  // highlight-start
  const { isSignIn } = useGlobalStore(state => ({ isSignIn: state.isSignIn }), shallow)
  // highlight-end

  // use isSignIn in template
  return (<>
    {isSignIn ? <> Show signIn header </>: <> Show signOut header </>})
}

```

# More details?
