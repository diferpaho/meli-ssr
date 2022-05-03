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

var _navbar = _interopRequireDefault(require("../client/components/navbar"));

var _list = _interopRequireDefault(require("../client/components/list"));

var _detail = _interopRequireDefault(require("../client/components/detail"));

var app = (0, _express["default"])();
app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, '..', '..', 'dist', 'static')));
var base = {
  "author": {
    "name": "diego",
    "lastname": "palacios"
  },
  "categorie": "Tecnología"
};

var items = require('./data.json');

app.route('/').get(function (req, res) {
  var root = /*#__PURE__*/_react["default"].createElement("html", {
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
    id: "root3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "App bg-light"
  }, /*#__PURE__*/_react["default"].createElement(_navbar["default"], null))), /*#__PURE__*/_react["default"].createElement("script", {
    src: "/static/bundle.js"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
    crossOrigin: "anonymous"
  })));

  var html = _server["default"].renderToString(root);

  res.send(html);
});
app.route('/list').get( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var response, item, root, html;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios["default"])("http://localhost:3000/api/items/");

          case 2:
            response = _context.sent;
            item = response.data.items;
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
              id: "root2"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "App bg-light"
            }, /*#__PURE__*/_react["default"].createElement(_navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_list["default"], {
              list: JSON.stringify(item)
            }))), /*#__PURE__*/_react["default"].createElement("script", {
              src: "/static/bundle.js"
            }), /*#__PURE__*/_react["default"].createElement("script", {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
              crossOrigin: "anonymous"
            })));
            html = _server["default"].renderToString(root);
            res.send(html);

          case 7:
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
app.route('/items/:id').get( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var response, item, root, html;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios["default"])("http://localhost:3000/api/items/".concat(req.params.id));

          case 2:
            response = _context2.sent;
            item = response.data;
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
              id: "root2"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "App bg-light"
            }, /*#__PURE__*/_react["default"].createElement(_navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_detail["default"], {
              items: JSON.stringify(item)
            }))), /*#__PURE__*/_react["default"].createElement("script", {
              src: "/static/bundle.js"
            }), /*#__PURE__*/_react["default"].createElement("script", {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
              crossOrigin: "anonymous"
            })));
            html = _server["default"].renderToString(root);
            res.send(html);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.route('/items/search/:title').get( /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var response, item, root, html;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _axios["default"])("http://localhost:3000/api/items/search/".concat(req.params.title));

          case 2:
            response = _context3.sent;
            item = response.data.items;
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
              id: "root2"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "App bg-light"
            }, /*#__PURE__*/_react["default"].createElement(_navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_list["default"], {
              list: JSON.stringify(item)
            }))), /*#__PURE__*/_react["default"].createElement("script", {
              src: "/static/bundle.js"
            }), /*#__PURE__*/_react["default"].createElement("script", {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
              crossOrigin: "anonymous"
            })));
            html = _server["default"].renderToString(root);
            res.send(html);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get('/api/items/', function (request, response) {
  response.json(items);
});
app.get('/api/items/:id', function (request, response) {
  var id = request.params.id;
  var smartphone = items.items.find(function (smartphone) {
    return smartphone.id === id;
  });
  base["items"] = smartphone;

  if (base) {
    return response.json(base);
  } else {
    response.status(404).end();
  }

  base["items"] = "";
});
app.get('/api/items/search/:title', function (request, response) {
  var title = request.params.title.toLowerCase();
  var smartphone = items.items.filter(function (smartphone) {
    return smartphone.title.toLowerCase().includes(title);
  });
  base["items"] = smartphone;

  if (smartphone) {
    return response.json(base);
  } else {
    response.status(404).end();
  }

  base["items"] = "";
});
app.listen(3000, function () {
  console.log('server started: http://localhost:3000');
});