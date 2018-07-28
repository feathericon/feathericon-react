"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pinterest = function Pinterest(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.854 6.355 9.311-.087-.791-.166-2.004.035-2.868.182-.78 1.173-4.97 1.173-4.97s-.299-.6-.299-1.485c0-1.391.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.806 1.481 1.806 1.777 0 3.143-1.874 3.143-4.579 0-2.394-1.72-4.068-4.177-4.068-2.844 0-4.515 2.134-4.515 4.34 0 .859.331 1.78.744 2.281a.3.3 0 0 1 .07.287c-.076.316-.245.995-.278 1.135-.044.182-.145.221-.334.133-1.25-.581-2.03-2.407-2.03-3.874 0-3.155 2.291-6.051 6.607-6.051 3.469 0 6.165 2.472 6.165 5.775 0 3.447-2.173 6.22-5.19 6.22-1.012 0-1.965-.526-2.291-1.149 0 0-.502 1.91-.623 2.378-.226.868-.835 1.958-1.243 2.622.936.289 1.93.445 2.96.445C17.524 22 22 17.522 22 12S17.523 2 12 2"
    })
  );
};

exports.default = Pinterest;
module.exports = exports["default"];