"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M4.981 14.887l4.132 4.132 9.906-9.906V4.981h-4.132L4.98 14.887zM13.486 3.58a1.98 1.98 0 0 1 1.4-.58h4.133C20.113 3 21 3.887 21 4.981v4.132c0 .526-.209 1.03-.58 1.401l-9.906 9.906a1.981 1.981 0 0 1-2.802 0L3.58 16.288a1.981 1.981 0 0 1 0-2.802l9.906-9.906zM16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
  );
};

exports.default = Tag;
module.exports = exports["default"];