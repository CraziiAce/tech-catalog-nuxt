import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36449a92 = () => interopDefault(import('..\\pages\\theme1\\index.vue' /* webpackChunkName: "pages/theme1/index" */))
const _3df63ff1 = () => interopDefault(import('..\\pages\\theme2\\index.vue' /* webpackChunkName: "pages/theme2/index" */))
const _45a7e550 = () => interopDefault(import('..\\pages\\theme3\\index.vue' /* webpackChunkName: "pages/theme3/index" */))
const _1f8e262c = () => interopDefault(import('..\\pages\\theme1\\items\\_id.vue' /* webpackChunkName: "pages/theme1/items/_id" */))
const _40e2caeb = () => interopDefault(import('..\\pages\\theme2\\items\\_id.vue' /* webpackChunkName: "pages/theme2/items/_id" */))
const _dce6ae28 = () => interopDefault(import('..\\pages\\theme3\\items\\_id.vue' /* webpackChunkName: "pages/theme3/items/_id" */))
const _7a8ba2cc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/theme1",
    component: _36449a92,
    name: "theme1"
  }, {
    path: "/theme2",
    component: _3df63ff1,
    name: "theme2"
  }, {
    path: "/theme3",
    component: _45a7e550,
    name: "theme3"
  }, {
    path: "/theme1/items/:id?",
    component: _1f8e262c,
    name: "theme1-items-id"
  }, {
    path: "/theme2/items/:id?",
    component: _40e2caeb,
    name: "theme2-items-id"
  }, {
    path: "/theme3/items/:id?",
    component: _dce6ae28,
    name: "theme3-items-id"
  }, {
    path: "/",
    component: _7a8ba2cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
