"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _navbar = _interopRequireDefault(require("./navbar"));

var _list = _interopRequireDefault(require("./list"));

var Itemid = function Itemid(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App bg-light"
  }, /*#__PURE__*/_react["default"].createElement(_navbar["default"], null));
};

Itemid.defaultProps = {
  items: []
};
var _default = Itemid;
exports["default"] = _default;