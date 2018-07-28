"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Forward = function Forward(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 12V7.65c0-.11.025-.22.072-.316.152-.314.5-.428.775-.253l6.86 4.349c.093.059.17.147.221.253.153.314.054.71-.221.885l-6.86 4.35a.516.516 0 0 1-.277.081c-.315 0-.57-.291-.57-.651v-4.35c0 .23-.106.451-.293.57l-6.86 4.35A.516.516 0 0 1 4.57 17c-.315 0-.57-.291-.57-.651V7.651c0-.11.025-.22.072-.316.152-.314.5-.428.775-.253l6.86 4.349c.093.059.17.147.221.253.049.1.072.209.072.315z" })
  );
};

exports.default = Forward;
module.exports = exports["default"];