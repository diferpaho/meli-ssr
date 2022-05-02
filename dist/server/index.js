"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _app = _interopRequireDefault(require("../client/components/app"));

var app = (0, _express["default"])();
app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, '..', '..', 'dist', 'static')));
app.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var root, html;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const response = await axios('http://localhost:4000/items');
            // const items = response.data;
            root = /*#__PURE__*/_react["default"].createElement("html", {
              lang: "es"
            }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
              charSet: "utf-8"
            }), /*#__PURE__*/_react["default"].createElement("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            }), /*#__PURE__*/_react["default"].createElement("link", {
              href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
              rel: "stylesheet",
              integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
              crossOrigin: "anonymous"
            }), /*#__PURE__*/_react["default"].createElement("title", null, "Meli")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
              id: "root"
            }, /*#__PURE__*/_react["default"].createElement(_app["default"], null)), /*#__PURE__*/_react["default"].createElement("script", {
              src: "/static/bundle.js"
            }), /*#__PURE__*/_react["default"].createElement("script", {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
              crossOrigin: "anonymous"
            })));
            html = _server["default"].renderToString(root);
            res.send(html);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(3000, function () {
  console.log('server started: http://localhost:3000');
});