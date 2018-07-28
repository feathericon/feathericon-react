"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gear = function Gear(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M11 19.938a7.96 7.96 0 0 1-3.906-1.618l-1.458 1.458-1.414-1.414 1.458-1.458A7.96 7.96 0 0 1 4.062 13H2v-2h2.062A7.96 7.96 0 0 1 5.68 7.094L4.222 5.636l1.414-1.414L7.094 5.68A7.96 7.96 0 0 1 11 4.062V2h2v2.062a7.96 7.96 0 0 1 3.906 1.618l1.458-1.458 1.414 1.414-1.458 1.458A7.96 7.96 0 0 1 19.938 11H22v2h-2.062a7.96 7.96 0 0 1-1.618 3.906l1.458 1.458-1.414 1.414-1.458-1.458A7.96 7.96 0 0 1 13 19.938V22h-2v-2.062zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" })
  );
};

exports.default = Gear;
module.exports = exports["default"];