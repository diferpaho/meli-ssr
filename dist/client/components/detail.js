"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Detail() {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  (0, _react.useEffect)(function () {
    console.log("HOLA!");
    (0, _axios["default"])({
      url: "http://localhost:3000/api/items/1"
    }).then(function (response) {
      console.log(response);
      setList(response);
      console.log(list);
    })["catch"](function (error) {
      console.log(error);
    });
  }, [setList]);
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
  }, "Detalles del producto"), /*#__PURE__*/_react["default"].createElement("p", null, list)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-3 mt-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "form-text"
  }, "nuevo - 50 vendidos"), /*#__PURE__*/_react["default"].createElement("h4", null, "nombre"), /*#__PURE__*/_react["default"].createElement("h2", null, "$ 1900"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary w-100"
  }, "Comprar"))));
}

var _default = Detail;
exports["default"] = _default;