"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm8-5.825l3.243-3.242 1.414 1.414L12 17.004l-5.657-5.657 1.414-1.414L11 13.175V2h2v11.175z"
    })
  );
};

exports.default = Download;
module.exports = exports["default"];