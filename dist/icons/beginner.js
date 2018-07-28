"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Beginner = function Beginner(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 7.529L5 5.09v10.372l7 3.251V7.529zM5.632 3.108L12 5.326l6.368-2.218c1.047-.365 2.18.227 2.53 1.322.067.213.102.436.102.66v10.372c0 .826-.465 1.574-1.188 1.91L12 21l-7.812-3.628C3.465 17.036 3 16.288 3 15.462V5.09C3 3.936 3.895 3 5 3c.215 0 .429.037.632.108z" })
  );
};

exports.default = Beginner;
module.exports = exports["default"];