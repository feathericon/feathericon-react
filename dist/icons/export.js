"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Export = function Export(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M13 5.828V17h-2V5.828L7.757 9.071 6.343 7.657 12 2l5.657 5.657-1.414 1.414L13 5.828zM4 16h2v4h12v-4h2v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.963-2-2v-4z"
    })
  );
};

exports.default = Export;
module.exports = exports["default"];