"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileAudio = function FileAudio(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm9.172 2H6v16h12V6.828h-2.828V4zM15 14.085V11h-4v5.5a1.5 1.5 0 1 1-1-1.415V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5.5a1.5 1.5 0 1 1-1-1.415z"
    })
  );
};

exports.default = FileAudio;
module.exports = exports["default"];