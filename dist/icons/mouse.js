"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mouse = function Mouse(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 4a4 4 0 0 0-4 4v8a4 4 0 1 0 8 0V8a4 4 0 0 0-4-4zm0-2a6 6 0 0 1 6 6v8a6 6 0 1 1-12 0V8a6 6 0 0 1 6-6zm1 8a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v3z" })
  );
};

exports.default = Mouse;
module.exports = exports["default"];