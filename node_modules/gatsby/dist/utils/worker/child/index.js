"use strict";

exports.__esModule = true;
exports.loadConfigAndPlugins = exports.runQueries = exports.setQueries = exports.buildSchema = exports.setInferenceMetadata = exports.renderHTMLDev = exports.renderHTMLProd = void 0;

var _renderHtml = require("./render-html");

exports.renderHTMLProd = _renderHtml.renderHTMLProd;
exports.renderHTMLDev = _renderHtml.renderHTMLDev;

var _schema = require("./schema");

exports.setInferenceMetadata = _schema.setInferenceMetadata;
exports.buildSchema = _schema.buildSchema;

var _queries = require("./queries");

exports.setQueries = _queries.setQueries;
exports.runQueries = _queries.runQueries;

var _loadConfigAndPlugins = require("./load-config-and-plugins");

exports.loadConfigAndPlugins = _loadConfigAndPlugins.loadConfigAndPlugins;
//# sourceMappingURL=index.js.map