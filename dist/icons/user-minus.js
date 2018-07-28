"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserMinus = function UserMinus(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 15c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15zm0-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5 2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4z" })
  );
};

exports.default = UserMinus;
module.exports = exports["default"];