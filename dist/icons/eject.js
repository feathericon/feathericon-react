"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Eject = function Eject(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M7 16h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm5.973-9.565l4.83 6.048c.359.448.214 1.054-.324 1.353a1.34 1.34 0 0 1-.648.164H7.169C6.523 14 6 13.563 6 13.024c0-.193.068-.381.196-.541l4.831-6.048c.358-.449 1.084-.57 1.622-.271.128.071.238.163.324.27z"
    })
  );
};

exports.default = Eject;
module.exports = exports["default"];