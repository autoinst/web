// index.ts
import type { NuxtPage } from "nuxt/schema";
const path = require("path");

const resolve = (pagePath: any) => path.resolve(pagePath)

const routerList: NuxtPage[] = [
  {
    path: '/',
    name: 'index',
    file: resolve('pages/index.vue')
  },
  {
    path: '/404',
    name: '404',
    file: resolve('pages/404.vue')
  },
]
export default {
  'pages:extend': (routes: any) => {
    routes.splice(0);
    routes.push(...(routerList as NuxtPage[]));
  }
};