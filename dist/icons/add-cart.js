"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddCart = function AddCart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M8 16h8a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V4H5a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v9h8.775L18 7V5.001c1.145 0 2 .894 2 1.999 0 .146-.017.291-.05.434l-1.151 5c-.21.915-1.052 1.566-2.024 1.566H8.073L8 13.999V16zm-.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM14 5h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V7h-1a1 1 0 0 1 0-2h1V4a1 1 0 0 1 2 0v1z"
    })
  );
};

exports.default = AddCart;
module.exports = exports["default"];