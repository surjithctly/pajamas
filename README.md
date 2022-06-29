# Pajamas JAMStack Starter

Pajamas is a JAMStack Starter template built with Next.js, Tailwind CSS & Sanity CMS.

## Setup Sanity in the Next.js Frontend

First Install `next-sanity` plugin:

```
yarn add next-sanity
```

## Add .env Variables

Open `.env.local` and add the sanity project id. If you want to set different dataset than production, you can add that as well (optional)

**Heads up!** Make sure you copy those `.env` variables to Vercel when you publish the project.

## Setup Sanity Site Config

Every site has some global settings, We can manage them through sanity. But as of now (May 2022) Sanity does not directly support singleton documents. So we do it using a simple hack. To do that, first we need to create a new site Settings Page in Sanity and then disable the `create` and `delete` \_\_experimental_actions in `/schemas/siteConfig.js` so only one site-settings is created. (instead of an array)

<!-- This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)). -->
