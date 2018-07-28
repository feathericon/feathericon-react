"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Moon = function Moon(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8 1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21 7.962 21 4 16.97 4 12s3.962-9 8.849-9h.12z"
    })
  );
};

exports.default = Moon;
module.exports = exports["default"];