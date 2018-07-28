"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logout = function Logout(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2V5zm14.176 6L14.64 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L17.176 13H10.59v-2h6.586z"
    })
  );
};

exports.default = Logout;
module.exports = exports["default"];