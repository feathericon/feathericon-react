"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function Phone(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M4.024 9L4 8.931C3.46 7.384 3 5.27 3 4c0-.55.45-1 1-1h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.837A16.054 16.054 0 0 0 15 17.837V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3c0 .45-.55 1-1 1-1.725 0-3.44-.456-5-1-5.114-1.832-9.168-5.886-10.976-11z"
    })
  );
};

exports.default = Phone;
module.exports = exports["default"];