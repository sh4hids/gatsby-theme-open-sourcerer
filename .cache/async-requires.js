// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-templates-projects-js": () => import("./../../../src/templates/Projects.js" /* webpackChunkName: "component---src-templates-projects-js" */),
  "component---src-templates-uses-js": () => import("./../../../src/templates/Uses.js" /* webpackChunkName: "component---src-templates-uses-js" */)
}

