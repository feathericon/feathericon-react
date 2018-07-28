"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubAlt = function GithubAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M20.375 8.174c.163-.4.688-1.987-.163-4.137 0 0-1.312-.413-4.3 1.625-1.25-.35-2.587-.4-3.912-.4-1.325 0-2.662.05-3.912.4-2.988-2.05-4.3-1.625-4.3-1.625-.85 2.15-.325 3.737-.163 4.137C2.612 9.262 2 10.662 2 12.362c0 6.437 4.162 7.887 9.975 7.887S22 18.799 22 12.362c0-1.7-.613-3.1-1.625-4.188zM12 19.024c-4.125 0-7.475-.187-7.475-4.187 0-.95.475-1.85 1.275-2.588 1.338-1.225 3.625-.575 6.2-.575 2.588 0 4.85-.65 6.2.575.813.738 1.275 1.625 1.275 2.588 0 3.987-3.35 4.187-7.475 4.187zm-3.137-6.262c-.825 0-1.5 1-1.5 2.225s.674 2.237 1.5 2.237c.825 0 1.5-1 1.5-2.237 0-1.238-.675-2.225-1.5-2.225zm6.274 0c-.825 0-1.5.987-1.5 2.225 0 1.237.675 2.237 1.5 2.237s1.5-1 1.5-2.237c0-1.238-.662-2.225-1.5-2.225z"
    })
  );
};

exports.default = GithubAlt;
module.exports = exports["default"];