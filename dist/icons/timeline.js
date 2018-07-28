"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function Timeline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.17 17a3.001 3.001 0 0 1 5.66 0H20l1 1-1 1h-5.17a3.001 3.001 0 0 1-5.66 0H3l1-1-1-1h6.17zM12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-7l-2 2-2-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3zM7 5v5h4l1 1 1-1h4V5H7z"
    })
  );
};

exports.default = Timeline;
module.exports = exports["default"];