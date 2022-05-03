"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Navbar() {
  var styles = {
    background: "#fff159"
  };

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
  };

  var history = (0, _reactRouterDom.useHistory)();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    history.push("/items/search/tv");
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
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "meli-search-navbar-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "input-search",
    className: "form-control",
    placeholder: "Nunca dejes de buscar",
    value: inputValue,
    onChange: handleInputChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "input-group-text",
    type: "submit"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-search",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
  })))))))));
}

var _default = Navbar;
exports["default"] = _default;