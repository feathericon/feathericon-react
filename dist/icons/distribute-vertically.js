"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DistributeVertically = function DistributeVertically(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M7 10h10a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4zm-4 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
    })
  );
};

exports.default = DistributeVertically;
module.exports = exports["default"];