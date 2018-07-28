"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cloud = function Cloud(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12.713 9.72l-1.073 1.542-1.606-.975A2 2 0 0 0 7 12v2H5a1 1 0 0 0 0 2h11a4 4 0 1 0-3.287-6.28zM16 6a6 6 0 1 1 0 12H5a3 3 0 0 1 0-6 4 4 0 0 1 6.071-3.423A5.993 5.993 0 0 1 16 6z" })
  );
};

exports.default = Cloud;
module.exports = exports["default"];