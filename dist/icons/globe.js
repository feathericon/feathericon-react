"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Globe = function Globe(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm4.252-1.552c.243-.508.643-1.948.932-1.948.288 0 .183.723.441.786.217.053.05-.323.653-.39s1.26.302 1.26.302.712.177 1.369 0c0 0-.347-.526.078-.698.424-.172 1.002.464 1.023.875.021.411-.944.687-.944.687l.944.567s.277-.878.867-.887c.525-.01 1.183.95.875 1.383-.308.433-.506.135-.506.135s-.94.952-1.236 1.123c-.295.17-.708 0-.708 0s-.175.324 0 .473c.355.366 1.277.73 1.277.73s2.835.461 2.923 1.039c.088.578-2.256 3.5-2.625 3.5H14c-.357-.63.577-2.644.577-2.644s-.48-.532-.577-.856c-.096-.324.186-.894.186-.894l-1.279-.589s-.68 0-1.017-.267c-.337-.267-.515-1.75-.515-1.75l-1.22-.894s-1.06 1.346-1.405 1.174c-.346-.172-.74-.45-.498-.957zm6.57-2.098c-.844 0-2.875-1.074-2.534-1.65 0-.826 2.135-.702 2.593-.702.458 0 1.58.354 2.203.85.623.495-.263 1.203-.572 1.502-.31.3-.845 0-1.69 0z"
    })
  );
};

exports.default = Globe;
module.exports = exports["default"];