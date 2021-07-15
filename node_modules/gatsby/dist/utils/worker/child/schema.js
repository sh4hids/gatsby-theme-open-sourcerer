"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.setInferenceMetadata = setInferenceMetadata;
exports.buildSchema = buildSchema;

var _redux = require("../../../redux");

var _schema = require("../../../schema");

var _apiRunnerNode = _interopRequireDefault(require("../../api-runner-node"));

var _state = require("./state");

function setInferenceMetadata() {
  (0, _state.setState)([`inferenceMetadata`]);
}

async function buildSchema() {
  var _workerStore$config;

  const workerStore = _redux.store.getState();

  if (!(workerStore !== null && workerStore !== void 0 && (_workerStore$config = workerStore.config) !== null && _workerStore$config !== void 0 && _workerStore$config.plugins)) {
    throw Error(`Config loading didn't finish before attempting to build schema in worker`);
  }

  setInferenceMetadata();
  await (0, _apiRunnerNode.default)(`createSchemaCustomization`);
  await (0, _schema.build)({
    fullMetadataBuild: false,
    parentSpan: {}
  });
}
//# sourceMappingURL=schema.js.map