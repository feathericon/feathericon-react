"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messanger = function Messanger(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12.942 14.413l-2.56-2.66L5.45 14.48l5.406-5.736 2.56 2.66 4.93-2.727-5.405 5.736zM11.899 2C6.432 2 2 6.144 2 11.257c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.874c.9.252 1.855.388 2.843.388 5.468 0 9.9-4.145 9.9-9.257 0-5.113-4.432-9.257-9.9-9.257z"
    })
  );
};

exports.default = Messanger;
module.exports = exports["default"];