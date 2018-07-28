"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M18 5.97V4H6v1.97l6 4.286 6-4.285zM13 12v8l-2 2V12L4.838 7.598A2 2 0 0 1 4 5.971V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.97a2 2 0 0 1-.838 1.628L13 12z" })
  );
};

exports.default = Filter;
module.exports = exports["default"];