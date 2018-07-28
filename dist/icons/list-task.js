"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTask = function ListTask(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9 13h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm0 4h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6-8h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm-7.257 1.914L4 7.172l1.414-1.415 2.329 2.329L12.828 3l1.415 1.414-6.5 6.5z"
    })
  );
};

exports.default = ListTask;
module.exports = exports["default"];