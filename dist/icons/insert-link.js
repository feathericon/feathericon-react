"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InsertLink = function InsertLink(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M11 9H7a3 3 0 0 0 0 6h4v2H7A5 5 0 0 1 7 7h4v2zm2 6h4a3 3 0 0 0 0-6h-4V7h4a5 5 0 0 1 0 10h-4v-2zm-4-4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" })
  );
};

exports.default = InsertLink;
module.exports = exports["default"];