"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function Navbar() {
  var styles = {
    background: "#fff159"
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navbar",
    style: styles
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row mx-5 px-5 w-100"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "navbar-brand col-1",
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://www.expoknews.com/wp-content/uploads/2020/03/1200px-MercadoLibre.svg-1.png",
    alt: "",
    width: "60",
    height: "30",
    className: "d-inline-block align-text-top"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group col"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Nunca dejes de buscar",
    "aria-label": "Recipient's username",
    "aria-describedby": "button-addon2"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "input-group-text",
    type: "button",
    id: "button-addon2"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-search",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
  }))))))));
}

var _default = Navbar;
exports["default"] = _default;