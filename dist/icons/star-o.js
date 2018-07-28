"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarO = function StarO(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M9.282 17.362l3.218-1.685 3.218 1.685-.615-3.57 2.604-2.527-3.598-.52L12.5 7.496l-1.609 3.247-3.598.52 2.604 2.529-.615 3.57zm3.218.563L6.629 21l1.121-6.512L3 9.875l6.564-.95L12.5 3l2.936 5.925 6.564.95-4.75 4.613L18.371 21 12.5 17.925z" })
  );
};

exports.default = StarO;
module.exports = exports["default"];