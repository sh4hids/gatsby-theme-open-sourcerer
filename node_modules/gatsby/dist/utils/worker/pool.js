"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.runQueriesInWorkersQueue = runQueriesInWorkersQueue;
exports.create = void 0;

var _gatsbyWorker = require("gatsby-worker");

var _lodash = require("lodash");

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

const create = () => {
  const worker = new _gatsbyWorker.WorkerPool(require.resolve(`./child`), {
    numWorkers: Math.max(1, (0, _gatsbyCoreUtils.cpuCoreCount)() - 1),
    env: {
      GATSBY_WORKER_POOL_WORKER: `true`
    }
  });
  return worker;
};

exports.create = create;

async function runQueriesInWorkersQueue(pool, queryIds, chunkSize = 50) {
  const staticQuerySegments = (0, _lodash.chunk)(queryIds.staticQueryIds, chunkSize);
  const pageQuerySegments = (0, _lodash.chunk)(queryIds.pageQueryIds, chunkSize);

  const activity = _reporter.default.createProgress(`run queries in workers`, queryIds.staticQueryIds.length + queryIds.pageQueryIds.length);

  activity.start();
  const promises = [];

  for (const segment of staticQuerySegments) {
    promises.push(pool.single.runQueries({
      pageQueryIds: [],
      staticQueryIds: segment
    }).then(() => {
      activity.tick(segment.length);
    }));
  }

  for (const segment of pageQuerySegments) {
    promises.push(pool.single.runQueries({
      pageQueryIds: segment,
      staticQueryIds: []
    }).then(() => {
      activity.tick(segment.length);
    }));
  }

  await Promise.all(promises);
  activity.end();
}
//# sourceMappingURL=pool.js.map