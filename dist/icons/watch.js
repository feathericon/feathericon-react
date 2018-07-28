"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Watch = function Watch(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M15 6.803A5.998 5.998 0 0 1 18 12c0 2.22-1.207 4.16-3 5.197V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.803A5.998 5.998 0 0 1 6 12c0-2.22 1.207-4.16 3-5.197V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.803zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm2-5a1 1 0 0 1 0 2h-1c-1.1 0-2-.9-2-2v-1a1 1 0 0 1 2 0v1h1z"
    })
  );
};

exports.default = Watch;
module.exports = exports["default"];