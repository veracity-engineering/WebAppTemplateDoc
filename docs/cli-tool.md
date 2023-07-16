---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# CLI tool Guidance

We support using NPX/NPM to install CLI tool, no matter NPX or NPM you need to get access token first then do the installation.

## Create azure feed and NPM access token

:::tip

CLI tool is host by the [artifacts](https://dnvgl-one.visualstudio.com/Engineering%20China/_artifacts/feed/dnv-cli) of **Engineering China** in Azure DevOps. You may need access for the artifacts and create personal access token to install DNV-CLI tool.

#### Please contact us for the token if it's not convient for you to get access.

:::

### Generate a `.npmrc` for installation

Please follow steps below to generate a `.npmrc` for installation:

1. Add a `.npmrc` to your project, in the same directory as your `package.json`
2. Add codes below to `.npmrc`:

```bash

registry=https://dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/registry/
always-auth=true

; begin auth token
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/registry/:username=dnvgl-one
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/registry/:email=npm requires email to be set but doesn't use the value
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/:username=dnvgl-one
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//dnvgl-one.pkgs.visualstudio.com/456fe6d6-0acc-47eb-8479-90237b03b54c/_packaging/dnv-cli/npm/:email=npm requires email to be set but doesn't use the value
; end auth token


```

3. Generate a [Personal Access Token](https://dnvgl-one.visualstudio.com/_usersSettings/tokens) with Packaging - **read & write** scope.

4. Base64 encode the personal access token got from Step 3.

:::tip Base64 encoding a string

In a command/shell prompt, run

```bash
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
```

Paste your personal access token value and press Enter/Return

Copy the Base64 encoded value

:::

5. Replace all `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` values in your .npmrc file with your personal access token encoded from Step 4.

:::info

You are recommended to put this `.npmrc` to your user directory and paste the token there. On windows, it should be in `C:\Users\{USER}\.npmrc`.

Installation may fail if dnv-cli cannot find correct registry.

:::

## Install and using CLI tool

After `.npmrc` is ready, we could start install and use CLI tool now.

You could choose to use NPX or NPM to install and use CLI.

<Tabs>
<TabItem value="npx" label="NPX">

By using npx, you could use CLI tool directly without install it globally, just run command

```bash
npx dnv-cli init
```

then following command step to step to finish install template.

</TabItem>
<TabItem value="npm" label="NPM">

By using npm, you could install CLI tool globally on your laptop

```bash
npm install dnv-cli -g
```

After dnv-cli is installed, you could use

```bash
dnv-cli init
```

to download templates anytime

</TabItem>
</Tabs>

## Any download error?

🧐 Token may expired sometimes which will cause download error.We are sorry about the inconvience about this.
Please contact us anytime when you find CLI tool or download is not working. We will fix it **ASAP**.
