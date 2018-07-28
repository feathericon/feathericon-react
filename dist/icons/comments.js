"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function Comments(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M4.368 14.632L3 16v-2.8A5.64 5.64 0 0 1 2 10c0-3.314 2.91-6 6.5-6 3.254 0 5.95 2.207 6.425 5.088A6.57 6.57 0 0 1 16 9c3.314 0 6 2.462 6 5.5 0 1.125-.368 2.17-1 3.041V20l-1.225-1.225A6.32 6.32 0 0 1 16 20c-2.825 0-5.194-1.79-5.831-4.2-.533.13-1.092.2-1.669.2a6.81 6.81 0 0 1-4.132-1.368zM8.5 14c2.52 0 4.5-1.828 4.5-4 0-2.172-1.98-4-4.5-4S4 7.828 4 10c0 2.172 1.98 4 4.5 4zm3.546 1.03C12.336 16.687 13.972 18 16 18c2.24 0 4-1.6 4-3.5S18.24 11 16 11c-.389 0-.763.048-1.117.138-.338 1.626-1.387 3.018-2.837 3.891z"
    })
  );
};

exports.default = Comments;
module.exports = exports["default"];