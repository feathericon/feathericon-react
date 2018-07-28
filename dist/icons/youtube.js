"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Youtube = function Youtube(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.935 14.628v-5.62l5.403 2.82-5.403 2.8zM21.8 8.035s-.195-1.379-.795-1.986c-.76-.796-1.613-.8-2.004-.847C16.203 5 12.004 5 12.004 5h-.008s-4.198 0-6.997.202c-.391.047-1.243.05-2.004.847-.6.607-.795 1.986-.795 1.986S2 9.653 2 11.272v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.771 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.006 7.001-.208c.391-.047 1.244-.05 2.004-.847.6-.607.795-1.985.795-1.985s.2-1.619.2-3.237v-1.517c0-1.619-.2-3.237-.2-3.237z"
    })
  );
};

exports.default = Youtube;
module.exports = exports["default"];