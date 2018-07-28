"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppMenu = function AppMenu(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M16 16h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4V4zm-6 0h4v4h-4V4zM4 4h4v4H4V4z"
    })
  );
};

exports.default = AppMenu;
module.exports = exports["default"];