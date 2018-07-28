"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmileHeart = function SmileHeart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10 22a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm3-5a3 3 0 0 1-6 0h6zm-5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6.625-5c-.827-.18-3.375-1.59-3.375-4.125a1.875 1.875 0 0 1 3.375-1.125A1.875 1.875 0 0 1 22 3.875C22 6.41 19.452 7.82 18.625 8z"
    })
  );
};

exports.default = SmileHeart;
module.exports = exports["default"];