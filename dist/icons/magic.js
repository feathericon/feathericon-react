"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Magic = function Magic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M3 5l2-2 16 16-2 2L3 5zm10 0l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1zM5 15l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1zM4 9l1 1-1 1-1-1 1-1zm14 1l1 1-1 1-1-1 1-1z"
    })
  );
};

exports.default = Magic;
module.exports = exports["default"];