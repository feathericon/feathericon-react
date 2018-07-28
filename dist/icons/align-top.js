"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignTop = function AlignTop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M4.8 3h14.4c.442 0 .8.448.8 1s-.358 1-.8 1H4.8C4.358 5 4 4.552 4 4s.358-1 .8-1zM7 9a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V9zm6 0a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0V9z"
    })
  );
};

exports.default = AlignTop;
module.exports = exports["default"];