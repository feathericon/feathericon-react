"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Activity = function Activity(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M11 19a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0v11zm-4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0v7zm6 0v-9a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0zm4-14a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0V5z"
    })
  );
};

exports.default = Activity;
module.exports = exports["default"];