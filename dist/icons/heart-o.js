"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeartO = function HeartO(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12 20c-2.205-.48-9-4.24-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.76-6.795 10.52-9 11zm0-2c3.12-.93 7-4.805 7-9a3 3 0 0 0-3-3c-1.305 0-2.638.833-4 2.5C10.638 6.833 9.305 6 8 6a3 3 0 0 0-3 3c0 4.195 3.88 8.07 7 9z"
    })
  );
};

exports.default = HeartO;
module.exports = exports["default"];