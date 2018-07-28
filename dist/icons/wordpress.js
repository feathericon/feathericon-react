"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wordpress = function Wordpress(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m0 19.542c-5.261 0-9.541-4.281-9.541-9.542S6.739 2.458 12 2.458s9.542 4.28 9.542 9.542c0 5.26-4.28 9.542-9.542 9.542M3.422 12a8.579 8.579 0 0 0 4.835 7.72L4.164 8.51A8.545 8.545 0 0 0 3.422 12m14.37-.432c0-1.06-.382-1.794-.708-2.366-.435-.707-.843-1.305-.843-2.012 0-.788.598-1.522 1.44-1.522.039 0 .075.004.112.007A8.547 8.547 0 0 0 12 3.42a8.569 8.569 0 0 0-7.168 3.867c.202.006.392.01.553.01.897 0 2.286-.109 2.286-.109.462-.027.517.652.055.707 0 0-.465.055-.982.082l3.124 9.292 1.877-5.63-1.336-3.662c-.462-.027-.9-.082-.9-.082-.462-.027-.408-.734.055-.707 0 0 1.416.11 2.259.11.897 0 2.286-.11 2.286-.11.463-.027.517.652.055.707 0 0-.465.055-.982.082l3.1 9.221.857-2.859c.37-1.187.652-2.039.652-2.773m-5.64 1.183l-2.574 7.48a8.569 8.569 0 0 0 5.272-.137.791.791 0 0 1-.062-.119l-2.636-7.224zm7.377-4.866c.037.274.058.567.058.882 0 .87-.163 1.849-.653 3.073l-2.62 7.576A8.574 8.574 0 0 0 20.578 12a8.537 8.537 0 0 0-1.05-4.116"
    })
  );
};

exports.default = Wordpress;
module.exports = exports["default"];