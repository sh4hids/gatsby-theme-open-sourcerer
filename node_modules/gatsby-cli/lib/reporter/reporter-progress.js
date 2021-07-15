"use strict";

exports.__esModule = true;
exports.createProgressReporter = void 0;

var reporterActions = _interopRequireWildcard(require("./redux/actions"));

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const createProgressReporter = ({
  id,
  text,
  start,
  total,
  span,
  reporter
}) => {
  let lastUpdateTime = 0;
  let unflushedProgress = 0;
  let unflushedTotal = 0;
  const progressUpdateDelay = Math.round(1000 / 10); // 10 fps *shrug*

  const updateProgress = (forced = false) => {
    const t = Date.now();
    if (!forced && t - lastUpdateTime <= progressUpdateDelay) return;

    if (unflushedTotal > 0) {
      reporterActions.setActivityTotal({
        id,
        total: unflushedTotal
      });
      unflushedTotal = 0;
    }

    if (unflushedProgress > 0) {
      reporterActions.activityTick({
        id,
        increment: unflushedProgress
      });
      unflushedProgress = 0;
    }

    lastUpdateTime = t;
  };

  return {
    start() {
      reporterActions.startActivity({
        id,
        text,
        type: _constants.ActivityTypes.Progress,
        current: start,
        total
      });
    },

    setStatus(statusText) {
      reporterActions.setActivityStatusText({
        id,
        statusText
      });
    },

    tick(increment = 1) {
      unflushedProgress += increment; // Have to manually track this :/

      updateProgress();
    },

    panicOnBuild(errorMeta, error) {
      span.finish();
      reporterActions.setActivityErrored({
        id
      });
      return reporter.panicOnBuild(errorMeta, error);
    },

    panic(errorMeta, error) {
      span.finish();
      reporterActions.endActivity({
        id,
        status: _constants.ActivityStatuses.Failed
      });
      return reporter.panic(errorMeta, error);
    },

    end() {
      updateProgress(true);
      span.finish();
      reporterActions.endActivity({
        id,
        status: _constants.ActivityStatuses.Success
      });
    },

    // @deprecated - use end()
    done() {
      updateProgress(true);
      span.finish();
      reporterActions.endActivity({
        id,
        status: _constants.ActivityStatuses.Success
      });
    },

    set total(value) {
      unflushedTotal = value;
      updateProgress();
    },

    span
  };
};

exports.createProgressReporter = createProgressReporter;