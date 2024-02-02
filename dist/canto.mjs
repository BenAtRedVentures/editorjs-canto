(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.canto-tool{position:relative}.canto-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='currentColor' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.canto-tool__input-holder{position:relative}.canto-tool__input-holder--error .canto-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='rgb(224, 147, 147)' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.canto-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.canto-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.canto-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.canto-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.canto-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.canto-tool__progress--loaded{width:100%}.canto-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.canto-tool__content:after{content:"";clear:both;display:table}.canto-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.canto-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.canto-tool__src{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.canto-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.canto-tool__title+.canto-tool__anchor{margin-top:25px}.canto-tool__caption,.canto-tool__alt,.canto-tool__id{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.canto-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .canto-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
(function(_) {
  var P = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, w = P(), g = function(n) {
    var o = {
      next: function() {
        var t = n.shift();
        return { done: t === void 0, value: t };
      }
    };
    return w && (o[Symbol.iterator] = function() {
      return o;
    }), o;
  }, s = function(n) {
    return encodeURIComponent(n).replace(/%20/g, "+");
  }, c = function(n) {
    return decodeURIComponent(String(n).replace(/\+/g, " "));
  }, i = function() {
    var n = function(t) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var a = typeof t;
      if (a !== "undefined")
        if (a === "string")
          t !== "" && this._fromString(t);
        else if (t instanceof n) {
          var p = this;
          t.forEach(function(u, l) {
            p.append(l, u);
          });
        } else if (t !== null && a === "object")
          if (Object.prototype.toString.call(t) === "[object Array]")
            for (var e = 0; e < t.length; e++) {
              var m = t[e];
              if (Object.prototype.toString.call(m) === "[object Array]" || m.length !== 2)
                this.append(m[0], m[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + e + " of URLSearchParams's input");
            }
          else
            for (var r in t)
              t.hasOwnProperty(r) && this.append(r, t[r]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, o = n.prototype;
    o.append = function(t, a) {
      t in this._entries ? this._entries[t].push(String(a)) : this._entries[t] = [String(a)];
    }, o.delete = function(t) {
      delete this._entries[t];
    }, o.get = function(t) {
      return t in this._entries ? this._entries[t][0] : null;
    }, o.getAll = function(t) {
      return t in this._entries ? this._entries[t].slice(0) : [];
    }, o.has = function(t) {
      return t in this._entries;
    }, o.set = function(t, a) {
      this._entries[t] = [String(a)];
    }, o.forEach = function(t, a) {
      var p;
      for (var e in this._entries)
        if (this._entries.hasOwnProperty(e)) {
          p = this._entries[e];
          for (var m = 0; m < p.length; m++)
            t.call(a, p[m], e, this);
        }
    }, o.keys = function() {
      var t = [];
      return this.forEach(function(a, p) {
        t.push(p);
      }), g(t);
    }, o.values = function() {
      var t = [];
      return this.forEach(function(a) {
        t.push(a);
      }), g(t);
    }, o.entries = function() {
      var t = [];
      return this.forEach(function(a, p) {
        t.push([p, a]);
      }), g(t);
    }, w && (o[Symbol.iterator] = o.entries), o.toString = function() {
      var t = [];
      return this.forEach(function(a, p) {
        t.push(s(p) + "=" + s(a));
      }), t.join("&");
    }, _.URLSearchParams = n;
  }, h = function() {
    try {
      var n = _.URLSearchParams;
      return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  h() || i();
  var f = _.URLSearchParams.prototype;
  typeof f.sort != "function" && (f.sort = function() {
    var n = this, o = [];
    this.forEach(function(a, p) {
      o.push([p, a]), n._entries || n.delete(p);
    }), o.sort(function(a, p) {
      return a[0] < p[0] ? -1 : a[0] > p[0] ? 1 : 0;
    }), n._entries && (n._entries = {});
    for (var t = 0; t < o.length; t++)
      this.append(o[t][0], o[t][1]);
  }), typeof f._fromString != "function" && Object.defineProperty(f, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(n) {
      if (this._entries)
        this._entries = {};
      else {
        var o = [];
        this.forEach(function(e, m) {
          o.push(m);
        });
        for (var t = 0; t < o.length; t++)
          this.delete(o[t]);
      }
      n = n.replace(/^\?/, "");
      for (var a = n.split("&"), p, t = 0; t < a.length; t++)
        p = a[t].split("="), this.append(
          c(p[0]),
          p.length > 1 ? c(p[1]) : ""
        );
    }
  });
})(
  typeof O < "u" ? O : typeof window < "u" ? window : typeof self < "u" ? self : O
);
(function(_) {
  var P = function() {
    try {
      var s = new _.URL("b", "http://a");
      return s.pathname = "c d", s.href === "http://a/c%20d" && s.searchParams;
    } catch {
      return !1;
    }
  }, w = function() {
    var s = _.URL, c = function(f, n) {
      typeof f != "string" && (f = String(f));
      var o = document, t;
      if (n && (_.location === void 0 || n !== _.location.href)) {
        o = document.implementation.createHTMLDocument(""), t = o.createElement("base"), t.href = n, o.head.appendChild(t);
        try {
          if (t.href.indexOf(n) !== 0)
            throw new Error(t.href);
        } catch (d) {
          throw new Error("URL unable to set base " + n + " due to " + d);
        }
      }
      var a = o.createElement("a");
      a.href = f, t && (o.body.appendChild(a), a.href = a.href);
      var p = o.createElement("input");
      if (p.type = "url", p.value = f, a.protocol === ":" || !/:/.test(a.href) || !p.checkValidity() && !n)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: a
      });
      var e = new _.URLSearchParams(this.search), m = !0, r = !0, u = this;
      ["append", "delete", "set"].forEach(function(d) {
        var y = e[d];
        e[d] = function() {
          y.apply(e, arguments), m && (r = !1, u.search = e.toString(), r = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: e,
        enumerable: !0
      });
      var l = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== l && (l = this.search, r && (m = !1, this.searchParams._fromString(this.search), m = !0));
        }
      });
    }, i = c.prototype, h = function(f) {
      Object.defineProperty(i, f, {
        get: function() {
          return this._anchorElement[f];
        },
        set: function(n) {
          this._anchorElement[f] = n;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(f) {
      h(f);
    }), Object.defineProperty(i, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(f) {
        this._anchorElement.search = f, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(i, {
      toString: {
        get: function() {
          var f = this;
          return function() {
            return f.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(f) {
          this._anchorElement.href = f, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(f) {
          this._anchorElement.pathname = f;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var f = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n = this._anchorElement.port != f && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(f) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(f) {
        },
        enumerable: !0
      }
    }), c.createObjectURL = function(f) {
      return s.createObjectURL.apply(s, arguments);
    }, c.revokeObjectURL = function(f) {
      return s.revokeObjectURL.apply(s, arguments);
    }, _.URL = c;
  };
  if (P() || w(), _.location !== void 0 && !("origin" in _.location)) {
    var g = function() {
      return _.location.protocol + "//" + _.location.hostname + (_.location.port ? ":" + _.location.port : "");
    };
    try {
      Object.defineProperty(_.location, "origin", {
        get: g,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        _.location.origin = g();
      }, 100);
    }
  }
})(
  typeof O < "u" ? O : typeof window < "u" ? window : typeof self < "u" ? self : O
);
var R = { exports: {} };
(function(_, P) {
  (function(w, g) {
    _.exports = g();
  })(window, function() {
    return function(w) {
      var g = {};
      function s(c) {
        if (g[c])
          return g[c].exports;
        var i = g[c] = { i: c, l: !1, exports: {} };
        return w[c].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
      }
      return s.m = w, s.c = g, s.d = function(c, i, h) {
        s.o(c, i) || Object.defineProperty(c, i, { enumerable: !0, get: h });
      }, s.r = function(c) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
      }, s.t = function(c, i) {
        if (1 & i && (c = s(c)), 8 & i || 4 & i && typeof c == "object" && c && c.__esModule)
          return c;
        var h = /* @__PURE__ */ Object.create(null);
        if (s.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: c }), 2 & i && typeof c != "string")
          for (var f in c)
            s.d(h, f, (function(n) {
              return c[n];
            }).bind(null, f));
        return h;
      }, s.n = function(c) {
        var i = c && c.__esModule ? function() {
          return c.default;
        } : function() {
          return c;
        };
        return s.d(i, "a", i), i;
      }, s.o = function(c, i) {
        return Object.prototype.hasOwnProperty.call(c, i);
      }, s.p = "", s(s.s = 3);
    }([function(w, g) {
      var s;
      s = function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      w.exports = s;
    }, function(w, g, s) {
      (function(c) {
        var i = s(2), h = setTimeout;
        function f() {
        }
        function n(r) {
          if (!(this instanceof n))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], m(r, this);
        }
        function o(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, n._immediateFn(function() {
            var l = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (l !== null) {
              var d;
              try {
                d = l(r._value);
              } catch (y) {
                return void a(u.promise, y);
              }
              t(u.promise, d);
            } else
              (r._state === 1 ? t : a)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function t(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var l = u.then;
              if (u instanceof n)
                return r._state = 3, r._value = u, void p(r);
              if (typeof l == "function")
                return void m((d = l, y = u, function() {
                  d.apply(y, arguments);
                }), r);
            }
            r._state = 1, r._value = u, p(r);
          } catch (v) {
            a(r, v);
          }
          var d, y;
        }
        function a(r, u) {
          r._state = 2, r._value = u, p(r);
        }
        function p(r) {
          r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function() {
            r._handled || n._unhandledRejectionFn(r._value);
          });
          for (var u = 0, l = r._deferreds.length; u < l; u++)
            o(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function e(r, u, l) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = l;
        }
        function m(r, u) {
          var l = !1;
          try {
            r(function(d) {
              l || (l = !0, t(u, d));
            }, function(d) {
              l || (l = !0, a(u, d));
            });
          } catch (d) {
            if (l)
              return;
            l = !0, a(u, d);
          }
        }
        n.prototype.catch = function(r) {
          return this.then(null, r);
        }, n.prototype.then = function(r, u) {
          var l = new this.constructor(f);
          return o(this, new e(r, u, l)), l;
        }, n.prototype.finally = i.a, n.all = function(r) {
          return new n(function(u, l) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var d = Array.prototype.slice.call(r);
            if (d.length === 0)
              return u([]);
            var y = d.length;
            function v(j, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var T = E.then;
                  if (typeof T == "function")
                    return void T.call(E, function(S) {
                      v(j, S);
                    }, l);
                }
                d[j] = E, --y == 0 && u(d);
              } catch (S) {
                l(S);
              }
            }
            for (var b = 0; b < d.length; b++)
              v(b, d[b]);
          });
        }, n.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === n ? r : new n(function(u) {
            u(r);
          });
        }, n.reject = function(r) {
          return new n(function(u, l) {
            l(r);
          });
        }, n.race = function(r) {
          return new n(function(u, l) {
            for (var d = 0, y = r.length; d < y; d++)
              r[d].then(u, l);
          });
        }, n._immediateFn = typeof c == "function" && function(r) {
          c(r);
        } || function(r) {
          h(r, 0);
        }, n._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, g.a = n;
      }).call(this, s(5).setImmediate);
    }, function(w, g, s) {
      g.a = function(c) {
        var i = this.constructor;
        return this.then(function(h) {
          return i.resolve(c()).then(function() {
            return h;
          });
        }, function(h) {
          return i.resolve(c()).then(function() {
            return i.reject(h);
          });
        });
      };
    }, function(w, g, s) {
      function c(e) {
        return (c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
          return typeof m;
        } : function(m) {
          return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
        })(e);
      }
      s(4);
      var i, h, f, n, o, t, a = s(8), p = (h = function(e) {
        return new Promise(function(m, r) {
          e = n(e), e = o(e);
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(e.method, e.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e.headers).forEach(function(d) {
            var y = e.headers[d];
            u.setRequestHeader(d, y);
          });
          var l = e.ratio;
          u.upload.addEventListener("progress", function(d) {
            var y = Math.round(d.loaded / d.total * 100), v = Math.ceil(y * l / 100);
            e.progress(v);
          }, !1), u.addEventListener("progress", function(d) {
            var y = Math.round(d.loaded / d.total * 100), v = Math.ceil(y * (100 - l) / 100) + l;
            e.progress(v);
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var d = u.response;
              try {
                d = JSON.parse(d);
              } catch {
              }
              var y = a.parseHeaders(u.getAllResponseHeaders()), v = { body: d, code: u.status, headers: y };
              u.status === 200 ? m(v) : r(v);
            }
          }, u.send(e.data);
        });
      }, f = function(e) {
        return e.method = "POST", h(e);
      }, n = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (e.url && typeof e.url != "string")
          throw new Error("Url must be a string");
        if (e.url = e.url || "", e.method && typeof e.method != "string")
          throw new Error("`method` must be a string or null");
        if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && c(e.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (e.headers = e.headers || {}, e.type && (typeof e.type != "string" || !Object.values(i).includes(e.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (e.progress && typeof e.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (e.progress = e.progress || function(m) {
        }, e.beforeSend = e.beforeSend || function(m) {
        }, e.ratio && typeof e.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (e.ratio < 0 || e.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (e.ratio = e.ratio || 90, e.accept && typeof e.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (e.accept = e.accept || "*/*", e.multiple && typeof e.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (e.multiple = e.multiple || !1, e.fieldName && typeof e.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return e.fieldName = e.fieldName || "files", e;
      }, o = function(e) {
        switch (e.method) {
          case "GET":
            var m = t(e.data, i.URLENCODED);
            delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + m : e.url + "?" + m;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var r = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || i.JSON;
            }(e);
            (a.isFormData(e.data) || a.isFormElement(e.data)) && (r = i.FORM), e.data = t(e.data, r), r !== p.contentType.FORM && (e.headers["content-type"] = r);
        }
        return e;
      }, t = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case i.URLENCODED:
            return a.urlEncode(e);
          case i.JSON:
            return a.jsonEncode(e);
          case i.FORM:
            return a.formEncode(e);
          default:
            return e;
        }
      }, { contentType: i = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: h, get: function(e) {
        return e.method = "GET", h(e);
      }, post: f, transport: function(e) {
        return e = n(e), a.selectFiles(e).then(function(m) {
          for (var r = new FormData(), u = 0; u < m.length; u++)
            r.append(e.fieldName, m[u], m[u].name);
          return a.isObject(e.data) && Object.keys(e.data).forEach(function(l) {
            var d = e.data[l];
            r.append(l, d);
          }), e.beforeSend && e.beforeSend(m), e.data = r, f(e);
        });
      }, selectFiles: function(e) {
        return delete (e = n(e)).beforeSend, a.selectFiles(e);
      } });
      w.exports = p;
    }, function(w, g, s) {
      s.r(g);
      var c = s(1);
      window.Promise = window.Promise || c.a;
    }, function(w, g, s) {
      (function(c) {
        var i = c !== void 0 && c || typeof self < "u" && self || window, h = Function.prototype.apply;
        function f(n, o) {
          this._id = n, this._clearFn = o;
        }
        g.setTimeout = function() {
          return new f(h.call(setTimeout, i, arguments), clearTimeout);
        }, g.setInterval = function() {
          return new f(h.call(setInterval, i, arguments), clearInterval);
        }, g.clearTimeout = g.clearInterval = function(n) {
          n && n.close();
        }, f.prototype.unref = f.prototype.ref = function() {
        }, f.prototype.close = function() {
          this._clearFn.call(i, this._id);
        }, g.enroll = function(n, o) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = o;
        }, g.unenroll = function(n) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = -1;
        }, g._unrefActive = g.active = function(n) {
          clearTimeout(n._idleTimeoutId);
          var o = n._idleTimeout;
          o >= 0 && (n._idleTimeoutId = setTimeout(function() {
            n._onTimeout && n._onTimeout();
          }, o));
        }, s(6), g.setImmediate = typeof self < "u" && self.setImmediate || c !== void 0 && c.setImmediate || this && this.setImmediate, g.clearImmediate = typeof self < "u" && self.clearImmediate || c !== void 0 && c.clearImmediate || this && this.clearImmediate;
      }).call(this, s(0));
    }, function(w, g, s) {
      (function(c, i) {
        (function(h, f) {
          if (!h.setImmediate) {
            var n, o, t, a, p, e = 1, m = {}, r = !1, u = h.document, l = Object.getPrototypeOf && Object.getPrototypeOf(h);
            l = l && l.setTimeout ? l : h, {}.toString.call(h.process) === "[object process]" ? n = function(v) {
              i.nextTick(function() {
                y(v);
              });
            } : function() {
              if (h.postMessage && !h.importScripts) {
                var v = !0, b = h.onmessage;
                return h.onmessage = function() {
                  v = !1;
                }, h.postMessage("", "*"), h.onmessage = b, v;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", p = function(v) {
              v.source === h && typeof v.data == "string" && v.data.indexOf(a) === 0 && y(+v.data.slice(a.length));
            }, h.addEventListener ? h.addEventListener("message", p, !1) : h.attachEvent("onmessage", p), n = function(v) {
              h.postMessage(a + v, "*");
            }) : h.MessageChannel ? ((t = new MessageChannel()).port1.onmessage = function(v) {
              y(v.data);
            }, n = function(v) {
              t.port2.postMessage(v);
            }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, n = function(v) {
              var b = u.createElement("script");
              b.onreadystatechange = function() {
                y(v), b.onreadystatechange = null, o.removeChild(b), b = null;
              }, o.appendChild(b);
            }) : n = function(v) {
              setTimeout(y, 0, v);
            }, l.setImmediate = function(v) {
              typeof v != "function" && (v = new Function("" + v));
              for (var b = new Array(arguments.length - 1), j = 0; j < b.length; j++)
                b[j] = arguments[j + 1];
              var E = { callback: v, args: b };
              return m[e] = E, n(e), e++;
            }, l.clearImmediate = d;
          }
          function d(v) {
            delete m[v];
          }
          function y(v) {
            if (r)
              setTimeout(y, 0, v);
            else {
              var b = m[v];
              if (b) {
                r = !0;
                try {
                  (function(j) {
                    var E = j.callback, T = j.args;
                    switch (T.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(T[0]);
                        break;
                      case 2:
                        E(T[0], T[1]);
                        break;
                      case 3:
                        E(T[0], T[1], T[2]);
                        break;
                      default:
                        E.apply(f, T);
                    }
                  })(b);
                } finally {
                  d(v), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? c === void 0 ? this : c : self);
      }).call(this, s(0), s(7));
    }, function(w, g) {
      var s, c, i = w.exports = {};
      function h() {
        throw new Error("setTimeout has not been defined");
      }
      function f() {
        throw new Error("clearTimeout has not been defined");
      }
      function n(l) {
        if (s === setTimeout)
          return setTimeout(l, 0);
        if ((s === h || !s) && setTimeout)
          return s = setTimeout, setTimeout(l, 0);
        try {
          return s(l, 0);
        } catch {
          try {
            return s.call(null, l, 0);
          } catch {
            return s.call(this, l, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : h;
        } catch {
          s = h;
        }
        try {
          c = typeof clearTimeout == "function" ? clearTimeout : f;
        } catch {
          c = f;
        }
      })();
      var o, t = [], a = !1, p = -1;
      function e() {
        a && o && (a = !1, o.length ? t = o.concat(t) : p = -1, t.length && m());
      }
      function m() {
        if (!a) {
          var l = n(e);
          a = !0;
          for (var d = t.length; d; ) {
            for (o = t, t = []; ++p < d; )
              o && o[p].run();
            p = -1, d = t.length;
          }
          o = null, a = !1, function(y) {
            if (c === clearTimeout)
              return clearTimeout(y);
            if ((c === f || !c) && clearTimeout)
              return c = clearTimeout, clearTimeout(y);
            try {
              c(y);
            } catch {
              try {
                return c.call(null, y);
              } catch {
                return c.call(this, y);
              }
            }
          }(l);
        }
      }
      function r(l, d) {
        this.fun = l, this.array = d;
      }
      function u() {
      }
      i.nextTick = function(l) {
        var d = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var y = 1; y < arguments.length; y++)
            d[y - 1] = arguments[y];
        t.push(new r(l, d)), t.length !== 1 || a || n(m);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = u, i.addListener = u, i.once = u, i.off = u, i.removeListener = u, i.removeAllListeners = u, i.emit = u, i.prependListener = u, i.prependOnceListener = u, i.listeners = function(l) {
        return [];
      }, i.binding = function(l) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(l) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(w, g, s) {
      function c(h, f) {
        for (var n = 0; n < f.length; n++) {
          var o = f[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(h, o.key, o);
        }
      }
      var i = s(9);
      w.exports = function() {
        function h() {
          (function(t, a) {
            if (!(t instanceof a))
              throw new TypeError("Cannot call a class as a function");
          })(this, h);
        }
        var f, n, o;
        return f = h, o = [{ key: "urlEncode", value: function(t) {
          return i(t);
        } }, { key: "jsonEncode", value: function(t) {
          return JSON.stringify(t);
        } }, { key: "formEncode", value: function(t) {
          if (this.isFormData(t))
            return t;
          if (this.isFormElement(t))
            return new FormData(t);
          if (this.isObject(t)) {
            var a = new FormData();
            return Object.keys(t).forEach(function(p) {
              var e = t[p];
              a.append(p, e);
            }), a;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(t) {
          return Object.prototype.toString.call(t) === "[object Object]";
        } }, { key: "isFormData", value: function(t) {
          return t instanceof FormData;
        } }, { key: "isFormElement", value: function(t) {
          return t instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(a, p) {
            var e = document.createElement("INPUT");
            e.type = "file", t.multiple && e.setAttribute("multiple", "multiple"), t.accept && e.setAttribute("accept", t.accept), e.style.display = "none", document.body.appendChild(e), e.addEventListener("change", function(m) {
              var r = m.target.files;
              a(r), document.body.removeChild(e);
            }, !1), e.click();
          });
        } }, { key: "parseHeaders", value: function(t) {
          var a = t.trim().split(/[\r\n]+/), p = {};
          return a.forEach(function(e) {
            var m = e.split(": "), r = m.shift(), u = m.join(": ");
            r && (p[r] = u);
          }), p;
        } }], (n = null) && c(f.prototype, n), o && c(f, o), h;
      }();
    }, function(w, g) {
      var s = function(i) {
        return encodeURIComponent(i).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, c = function(i, h, f, n) {
        return h = h || null, f = f || "&", n = n || null, i ? function(o) {
          for (var t = new Array(), a = 0; a < o.length; a++)
            o[a] && t.push(o[a]);
          return t;
        }(Object.keys(i).map(function(o) {
          var t, a, p = o;
          if (n && (p = n + "[" + p + "]"), typeof i[o] == "object" && i[o] !== null)
            t = c(i[o], null, f, p);
          else {
            h && (a = p, p = !isNaN(parseFloat(a)) && isFinite(a) ? h + Number(p) : p);
            var e = i[o];
            e = (e = (e = (e = e === !0 ? "1" : e) === !1 ? "0" : e) === 0 ? "0" : e) || "", t = s(p) + "=" + s(e);
          }
          return t;
        })).join(f).replace(/[!'()*]/g, "") : "";
      };
      w.exports = c;
    }]);
  });
})(R);
