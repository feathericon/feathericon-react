"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M21.004 11.657l-5.657 5.657-1.414-1.415 4.242-4.242-4.242-4.243L15.347 6l5.657 5.657zm-15.176 0l4.243 4.242-1.414 1.415L3 11.657 8.657 6l1.414 1.414-4.243 4.243z"
    })
  );
};

exports.default = Code;
module.exports = exports["default"];