"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DistributeHorizontally = function DistributeHorizontally(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M7 21a1 1 0 0 1-2 0V3a1 1 0 1 1 2 0v18zm12 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0v18zm-5-4a2 2 0 1 1-4 0V7a2 2 0 1 1 4 0v10z"
    })
  );
};

exports.default = DistributeHorizontally;
module.exports = exports["default"];