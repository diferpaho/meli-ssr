"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function List(props) {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "container section-content",
    style: {
      minHeight: '90%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row content bg-white mx-5 mt-5"
  }, JSON.parse(props.list).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-2 "
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/items/" + item.id
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.picture,
      className: "card-img-top ",
      alt: "..."
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-8 text-start py-5"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/items/" + item.id,
      style: {
        textDecoration: 'none',
        color: 'black'
      }
    }, /*#__PURE__*/_react["default"].createElement("h4", null, "$ ", item.price.amount), /*#__PURE__*/_react["default"].createElement("h4", null, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-2 text-start py-5"
    }, /*#__PURE__*/_react["default"].createElement("h5", null, "Tecnolog\xEDa")));
  })));
}

var _default = List;
exports["default"] = _default;