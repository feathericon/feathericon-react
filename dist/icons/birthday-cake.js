"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BirthdayCake = function BirthdayCake(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M17 10a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a4 4 0 0 1 4-4V7h2v3h2V7h2v3h2V7h2v3zM7 12a2 2 0 0 0-2 2v1h14v-1a2 2 0 0 0-2-2H7zm-2 5v2h14v-2H5zM7 4a1 1 0 0 0 1-1 1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4zm4 0a1 1 0 0 0 1-1 1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4zm4 0a1 1 0 0 0 1-1 1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4z" })
  );
};

exports.default = BirthdayCake;
module.exports = exports["default"];