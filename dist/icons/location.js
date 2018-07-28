"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function Location(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 19c.437 0 1.479-1.187 2.411-3.312C15.357 13.534 16 10.874 16 9.353 16 6.924 14.183 5 12 5S8 6.924 8 9.353c0 1.52.643 4.181 1.589 6.335C10.52 17.813 11.563 19 12 19zm0 2c-3.314 0-6-8.138-6-11.647C6 5.844 8.686 3 12 3s6 2.844 6 6.353S15.314 21 12 21zm0-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" })
  );
};

exports.default = Location;
module.exports = exports["default"];