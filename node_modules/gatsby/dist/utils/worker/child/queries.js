"use strict";

exports.__esModule = true;
exports.setQueries = setQueries;
exports.runQueries = runQueries;

var _services = require("../../../services");

var _redux = require("../../../redux");

var _graphqlRunner = require("../../../query/graphql-runner");

var _datastore = require("../../../datastore");

var _state = require("./state");

var _schema = require("./schema");

function setQueries() {
  (0, _state.setState)([`components`, `staticQueryComponents`]);
}

async function runQueries(queryIds) {
  const workerStore = _redux.store.getState(); // If buildSchema() didn't run yet, execute it


  if (workerStore.schemaCustomization.composer === null) {
    await (0, _schema.buildSchema)();
  }

  setQueries();
  const graphqlRunner = new _graphqlRunner.GraphQLRunner(_redux.store, {
    collectStats: true,
    graphqlTracing: workerStore.program.graphqlTracing
  });
  await (0, _services.runStaticQueries)({
    queryIds,
    store: _redux.store,
    graphqlRunner
  });
  await (0, _services.runPageQueries)({
    queryIds,
    store: _redux.store,
    graphqlRunner
  });
  await (0, _datastore.getDataStore)().ready();
}
//# sourceMappingURL=queries.js.map