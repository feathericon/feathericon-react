"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Codepen = function Codepen(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fill: "#050101",
      fillRule: "evenodd",
      d: "M22 15.047a.846.846 0 0 1-.008.112l-.006.037-.016.072c-.003.015-.008.028-.013.042l-.022.063-.02.042c-.008.02-.018.038-.028.057l-.025.04a.769.769 0 0 1-.108.135l-.035.034a.812.812 0 0 1-.049.04l-.038.03c-.005.003-.01.008-.015.01l-9.14 6.095a.858.858 0 0 1-.954 0l-9.14-6.094-.014-.01a.807.807 0 0 1-.088-.071c-.012-.01-.023-.022-.034-.034-.015-.015-.03-.03-.043-.046a.707.707 0 0 1-.066-.09 1.038 1.038 0 0 1-.054-.096l-.019-.042a.868.868 0 0 1-.022-.063c-.005-.014-.01-.027-.013-.042-.007-.023-.01-.048-.015-.072l-.007-.037A.847.847 0 0 1 2 15.047V8.953c0-.038.003-.075.008-.112l.007-.037c.004-.024.008-.049.015-.072a.774.774 0 0 1 .145-.295.978.978 0 0 1 .029-.038l.043-.046.034-.034a.834.834 0 0 1 .088-.07c.005-.003.009-.008.014-.01l9.14-6.095a.86.86 0 0 1 .954 0l9.14 6.094c.005.003.01.008.015.01l.038.03a.839.839 0 0 1 .05.041l.034.034a.735.735 0 0 1 .108.136l.025.04.029.056.019.042.022.063c.005.014.01.027.013.042.007.023.011.048.016.072l.006.037a.834.834 0 0 1 .008.112v6.094zM3.719 10.562v2.876L5.869 12l-2.15-1.438zm7.422-2.088V4.465l-6.734 4.49 3.008 2.011 3.726-2.492zm8.452.48L12.86 4.465v4.009l3.726 2.492 3.007-2.012zM4.407 15.046l6.734 4.489v-4.009l-3.726-2.492-3.008 2.012zm8.453.48v4.009l6.733-4.49-3.007-2.01-3.726 2.491zM12 9.966L8.96 12 12 14.033 15.04 12 12 9.967zm8.281 3.472v-2.876L18.131 12l2.15 1.438z"
    })
  );
};

exports.default = Codepen;
module.exports = exports["default"];