"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WineGlass = function WineGlass(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9 20h2v-6a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4v6h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM9 4v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4H9z"
    })
  );
};

exports.default = WineGlass;
module.exports = exports["default"];