"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function Detail() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "container section-content px-5",
    style: {
      minHeight: '90%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row content bg-white mx-5 px-5  mt-5 mb-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://webplanetbogota.com/wp-content/uploads/2021/03/K2-blue.png",
    className: "card-img-top px-5",
    alt: "...",
    style: {
      width: '70%'
    }
  }), /*#__PURE__*/_react["default"].createElement("h4", {
    className: "mt-5 mb-3"
  }, "Detalles del producto"), /*#__PURE__*/_react["default"].createElement("p", null, "In this example we have 3 pages handled by the router: a home page, an about page, and a users page. As you click around on the different  the router renders the matching Note: Behind the scenes a  renders an  with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-3 mt-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "form-text"
  }, "nuevo - 50 vendidos"), /*#__PURE__*/_react["default"].createElement("h4", null, "nombre"), /*#__PURE__*/_react["default"].createElement("h2", null, "$ 1900"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary w-100"
  }, "Comprar"))));
}

var _default = Detail;
exports["default"] = _default;