(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.canto-tool{font-family:sans-serif;position:relative}.canto-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='currentColor' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.canto-tool__input-holder{position:relative}.canto-tool__input-holder--error .canto-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='rgb(224, 147, 147)' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.canto-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.canto-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.canto-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.canto-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.canto-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.canto-tool__progress--loaded{width:100%}.canto-tool__content{display:block;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.canto-tool__content:after{content:"";clear:both;display:table}.canto-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.canto-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.canto-tool__src{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 1.5rem;width:100%;border-radius:3px;float:right}.canto-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.canto-tool__title+.canto-tool__anchor{margin-top:25px}.canto-tool__label{font-size:.875rem;display:block;margin:0 auto .5rem;max-width:95%;color:#111827}.canto-tool__caption,.canto-tool__alt,.canto-tool__id{margin:0 0 20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:15px;line-height:1.55em;margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;width:100%}.canto-tool__caption,.canto-tool__alt{margin:0 auto 2rem;max-width:95%;overflow:scroll;resize:none;border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);-moz-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.canto-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .canto-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
(function(_) {
  var g = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, h = g(), v = function(n) {
    var a = {
      next: function() {
        var e = n.shift();
        return { done: e === void 0, value: e };
      }
    };
    return h && (a[Symbol.iterator] = function() {
      return a;
    }), a;
  }, s = function(n) {
    return encodeURIComponent(n).replace(/%20/g, "+");
  }, o = function(n) {
    return decodeURIComponent(String(n).replace(/\+/g, " "));
  }, i = function() {
    var n = function(e) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var c = typeof e;
      if (c !== "undefined")
        if (c === "string")
          e !== "" && this._fromString(e);
        else if (e instanceof n) {
          var p = this;
          e.forEach(function(u, d) {
            p.append(d, u);
          });
        } else if (e !== null && c === "object")
          if (Object.prototype.toString.call(e) === "[object Array]")
            for (var t = 0; t < e.length; t++) {
              var y = e[t];
              if (Object.prototype.toString.call(y) === "[object Array]" || y.length !== 2)
                this.append(y[0], y[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
            }
          else
            for (var r in e)
              e.hasOwnProperty(r) && this.append(r, e[r]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, a = n.prototype;
    a.append = function(e, c) {
      e in this._entries ? this._entries[e].push(String(c)) : this._entries[e] = [String(c)];
    }, a.delete = function(e) {
      delete this._entries[e];
    }, a.get = function(e) {
      return e in this._entries ? this._entries[e][0] : null;
    }, a.getAll = function(e) {
      return e in this._entries ? this._entries[e].slice(0) : [];
    }, a.has = function(e) {
      return e in this._entries;
    }, a.set = function(e, c) {
      this._entries[e] = [String(c)];
    }, a.forEach = function(e, c) {
      var p;
      for (var t in this._entries)
        if (this._entries.hasOwnProperty(t)) {
          p = this._entries[t];
          for (var y = 0; y < p.length; y++)
            e.call(c, p[y], t, this);
        }
    }, a.keys = function() {
      var e = [];
      return this.forEach(function(c, p) {
        e.push(p);
      }), v(e);
    }, a.values = function() {
      var e = [];
      return this.forEach(function(c) {
        e.push(c);
      }), v(e);
    }, a.entries = function() {
      var e = [];
      return this.forEach(function(c, p) {
        e.push([p, c]);
      }), v(e);
    }, h && (a[Symbol.iterator] = a.entries), a.toString = function() {
      var e = [];
      return this.forEach(function(c, p) {
        e.push(s(p) + "=" + s(c));
      }), e.join("&");
    }, _.URLSearchParams = n;
  }, f = function() {
    try {
      var n = _.URLSearchParams;
      return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  f() || i();
  var l = _.URLSearchParams.prototype;
  typeof l.sort != "function" && (l.sort = function() {
    var n = this, a = [];
    this.forEach(function(c, p) {
      a.push([p, c]), n._entries || n.delete(p);
    }), a.sort(function(c, p) {
      return c[0] < p[0] ? -1 : c[0] > p[0] ? 1 : 0;
    }), n._entries && (n._entries = {});
    for (var e = 0; e < a.length; e++)
      this.append(a[e][0], a[e][1]);
  }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(n) {
      if (this._entries)
        this._entries = {};
      else {
        var a = [];
        this.forEach(function(t, y) {
          a.push(y);
        });
        for (var e = 0; e < a.length; e++)
          this.delete(a[e]);
      }
      n = n.replace(/^\?/, "");
      for (var c = n.split("&"), p, e = 0; e < c.length; e++)
        p = c[e].split("="), this.append(
          o(p[0]),
          p.length > 1 ? o(p[1]) : ""
        );
    }
  });
})(
  typeof L < "u" ? L : typeof window < "u" ? window : typeof self < "u" ? self : L
);
(function(_) {
  var g = function() {
    try {
      var s = new _.URL("b", "http://a");
      return s.pathname = "c d", s.href === "http://a/c%20d" && s.searchParams;
    } catch {
      return !1;
    }
  }, h = function() {
    var s = _.URL, o = function(l, n) {
      typeof l != "string" && (l = String(l));
      var a = document, e;
      if (n && (_.location === void 0 || n !== _.location.href)) {
        a = document.implementation.createHTMLDocument(""), e = a.createElement("base"), e.href = n, a.head.appendChild(e);
        try {
          if (e.href.indexOf(n) !== 0)
            throw new Error(e.href);
        } catch (m) {
          throw new Error("URL unable to set base " + n + " due to " + m);
        }
      }
      var c = a.createElement("a");
      c.href = l, e && (a.body.appendChild(c), c.href = c.href);
      var p = a.createElement("input");
      if (p.type = "url", p.value = l, c.protocol === ":" || !/:/.test(c.href) || !p.checkValidity() && !n)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: c
      });
      var t = new _.URLSearchParams(this.search), y = !0, r = !0, u = this;
      ["append", "delete", "set"].forEach(function(m) {
        var b = t[m];
        t[m] = function() {
          b.apply(t, arguments), y && (r = !1, u.search = t.toString(), r = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: t,
        enumerable: !0
      });
      var d = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== d && (d = this.search, r && (y = !1, this.searchParams._fromString(this.search), y = !0));
        }
      });
    }, i = o.prototype, f = function(l) {
      Object.defineProperty(i, l, {
        get: function() {
          return this._anchorElement[l];
        },
        set: function(n) {
          this._anchorElement[l] = n;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(l) {
      f(l);
    }), Object.defineProperty(i, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(l) {
        this._anchorElement.search = l, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(i, {
      toString: {
        get: function() {
          var l = this;
          return function() {
            return l.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(l) {
          this._anchorElement.href = l, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(l) {
          this._anchorElement.pathname = l;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var l = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n = this._anchorElement.port != l && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      }
    }), o.createObjectURL = function(l) {
      return s.createObjectURL.apply(s, arguments);
    }, o.revokeObjectURL = function(l) {
      return s.revokeObjectURL.apply(s, arguments);
    }, _.URL = o;
  };
  if (g() || h(), _.location !== void 0 && !("origin" in _.location)) {
    var v = function() {
      return _.location.protocol + "//" + _.location.hostname + (_.location.port ? ":" + _.location.port : "");
    };
    try {
      Object.defineProperty(_.location, "origin", {
        get: v,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        _.location.origin = v();
      }, 100);
    }
  }
})(
  typeof L < "u" ? L : typeof window < "u" ? window : typeof self < "u" ? self : L
);
var P = { exports: {} };
(function(_, g) {
  (function(h, v) {
    _.exports = v();
  })(window, function() {
    return function(h) {
      var v = {};
      function s(o) {
        if (v[o])
          return v[o].exports;
        var i = v[o] = { i: o, l: !1, exports: {} };
        return h[o].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
      }
      return s.m = h, s.c = v, s.d = function(o, i, f) {
        s.o(o, i) || Object.defineProperty(o, i, { enumerable: !0, get: f });
      }, s.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, s.t = function(o, i) {
        if (1 & i && (o = s(o)), 8 & i || 4 & i && typeof o == "object" && o && o.__esModule)
          return o;
        var f = /* @__PURE__ */ Object.create(null);
        if (s.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: o }), 2 & i && typeof o != "string")
          for (var l in o)
            s.d(f, l, (function(n) {
              return o[n];
            }).bind(null, l));
        return f;
      }, s.n = function(o) {
        var i = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return s.d(i, "a", i), i;
      }, s.o = function(o, i) {
        return Object.prototype.hasOwnProperty.call(o, i);
      }, s.p = "", s(s.s = 3);
    }([function(h, v) {
      var s;
      s = function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      h.exports = s;
    }, function(h, v, s) {
      (function(o) {
        var i = s(2), f = setTimeout;
        function l() {
        }
        function n(r) {
          if (!(this instanceof n))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(r, this);
        }
        function a(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, n._immediateFn(function() {
            var d = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (d !== null) {
              var m;
              try {
                m = d(r._value);
              } catch (b) {
                return void c(u.promise, b);
              }
              e(u.promise, m);
            } else
              (r._state === 1 ? e : c)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function e(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var d = u.then;
              if (u instanceof n)
                return r._state = 3, r._value = u, void p(r);
              if (typeof d == "function")
                return void y((m = d, b = u, function() {
                  m.apply(b, arguments);
                }), r);
            }
            r._state = 1, r._value = u, p(r);
          } catch (w) {
            c(r, w);
          }
          var m, b;
        }
        function c(r, u) {
          r._state = 2, r._value = u, p(r);
        }
        function p(r) {
          r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function() {
            r._handled || n._unhandledRejectionFn(r._value);
          });
          for (var u = 0, d = r._deferreds.length; u < d; u++)
            a(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function t(r, u, d) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = d;
        }
        function y(r, u) {
          var d = !1;
          try {
            r(function(m) {
              d || (d = !0, e(u, m));
            }, function(m) {
              d || (d = !0, c(u, m));
            });
          } catch (m) {
            if (d)
              return;
            d = !0, c(u, m);
          }
        }
        n.prototype.catch = function(r) {
          return this.then(null, r);
        }, n.prototype.then = function(r, u) {
          var d = new this.constructor(l);
          return a(this, new t(r, u, d)), d;
        }, n.prototype.finally = i.a, n.all = function(r) {
          return new n(function(u, d) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var m = Array.prototype.slice.call(r);
            if (m.length === 0)
              return u([]);
            var b = m.length;
            function w(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var S = C.then;
                  if (typeof S == "function")
                    return void S.call(C, function(j) {
                      w(T, j);
                    }, d);
                }
                m[T] = C, --b == 0 && u(m);
              } catch (j) {
                d(j);
              }
            }
            for (var E = 0; E < m.length; E++)
              w(E, m[E]);
          });
        }, n.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === n ? r : new n(function(u) {
            u(r);
          });
        }, n.reject = function(r) {
          return new n(function(u, d) {
            d(r);
          });
        }, n.race = function(r) {
          return new n(function(u, d) {
            for (var m = 0, b = r.length; m < b; m++)
              r[m].then(u, d);
          });
        }, n._immediateFn = typeof o == "function" && function(r) {
          o(r);
        } || function(r) {
          f(r, 0);
        }, n._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, v.a = n;
      }).call(this, s(5).setImmediate);
    }, function(h, v, s) {
      v.a = function(o) {
        var i = this.constructor;
        return this.then(function(f) {
          return i.resolve(o()).then(function() {
            return f;
          });
        }, function(f) {
          return i.resolve(o()).then(function() {
            return i.reject(f);
          });
        });
      };
    }, function(h, v, s) {
      function o(t) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
          return typeof y;
        } : function(y) {
          return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
        })(t);
      }
      s(4);
      var i, f, l, n, a, e, c = s(8), p = (f = function(t) {
        return new Promise(function(y, r) {
          t = n(t), t = a(t);
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var b = t.headers[m];
            u.setRequestHeader(m, b);
          });
          var d = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), w = Math.ceil(b * d / 100);
            t.progress(w);
          }, !1), u.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), w = Math.ceil(b * (100 - d) / 100) + d;
            t.progress(w);
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var b = c.parseHeaders(u.getAllResponseHeaders()), w = { body: m, code: u.status, headers: b };
              u.status === 200 ? y(w) : r(w);
            }
          }, u.send(t.data);
        });
      }, l = function(t) {
        return t.method = "POST", f(t);
      }, n = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && o(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(i).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(y) {
        }, t.beforeSend = t.beforeSend || function(y) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, a = function(t) {
        switch (t.method) {
          case "GET":
            var y = e(t.data, i.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y : t.url + "?" + y;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var r = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || i.JSON;
            }(t);
            (c.isFormData(t.data) || c.isFormElement(t.data)) && (r = i.FORM), t.data = e(t.data, r), r !== p.contentType.FORM && (t.headers["content-type"] = r);
        }
        return t;
      }, e = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case i.URLENCODED:
            return c.urlEncode(t);
          case i.JSON:
            return c.jsonEncode(t);
          case i.FORM:
            return c.formEncode(t);
          default:
            return t;
        }
      }, { contentType: i = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: f, get: function(t) {
        return t.method = "GET", f(t);
      }, post: l, transport: function(t) {
        return t = n(t), c.selectFiles(t).then(function(y) {
          for (var r = new FormData(), u = 0; u < y.length; u++)
            r.append(t.fieldName, y[u], y[u].name);
          return c.isObject(t.data) && Object.keys(t.data).forEach(function(d) {
            var m = t.data[d];
            r.append(d, m);
          }), t.beforeSend && t.beforeSend(y), t.data = r, l(t);
        });
      }, selectFiles: function(t) {
        return delete (t = n(t)).beforeSend, c.selectFiles(t);
      } });
      h.exports = p;
    }, function(h, v, s) {
      s.r(v);
      var o = s(1);
      window.Promise = window.Promise || o.a;
    }, function(h, v, s) {
      (function(o) {
        var i = o !== void 0 && o || typeof self < "u" && self || window, f = Function.prototype.apply;
        function l(n, a) {
          this._id = n, this._clearFn = a;
        }
        v.setTimeout = function() {
          return new l(f.call(setTimeout, i, arguments), clearTimeout);
        }, v.setInterval = function() {
          return new l(f.call(setInterval, i, arguments), clearInterval);
        }, v.clearTimeout = v.clearInterval = function(n) {
          n && n.close();
        }, l.prototype.unref = l.prototype.ref = function() {
        }, l.prototype.close = function() {
          this._clearFn.call(i, this._id);
        }, v.enroll = function(n, a) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = a;
        }, v.unenroll = function(n) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = -1;
        }, v._unrefActive = v.active = function(n) {
          clearTimeout(n._idleTimeoutId);
          var a = n._idleTimeout;
          a >= 0 && (n._idleTimeoutId = setTimeout(function() {
            n._onTimeout && n._onTimeout();
          }, a));
        }, s(6), v.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, v.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, s(0));
    }, function(h, v, s) {
      (function(o, i) {
        (function(f, l) {
          if (!f.setImmediate) {
            var n, a, e, c, p, t = 1, y = {}, r = !1, u = f.document, d = Object.getPrototypeOf && Object.getPrototypeOf(f);
            d = d && d.setTimeout ? d : f, {}.toString.call(f.process) === "[object process]" ? n = function(w) {
              i.nextTick(function() {
                b(w);
              });
            } : function() {
              if (f.postMessage && !f.importScripts) {
                var w = !0, E = f.onmessage;
                return f.onmessage = function() {
                  w = !1;
                }, f.postMessage("", "*"), f.onmessage = E, w;
              }
            }() ? (c = "setImmediate$" + Math.random() + "$", p = function(w) {
              w.source === f && typeof w.data == "string" && w.data.indexOf(c) === 0 && b(+w.data.slice(c.length));
            }, f.addEventListener ? f.addEventListener("message", p, !1) : f.attachEvent("onmessage", p), n = function(w) {
              f.postMessage(c + w, "*");
            }) : f.MessageChannel ? ((e = new MessageChannel()).port1.onmessage = function(w) {
              b(w.data);
            }, n = function(w) {
              e.port2.postMessage(w);
            }) : u && "onreadystatechange" in u.createElement("script") ? (a = u.documentElement, n = function(w) {
              var E = u.createElement("script");
              E.onreadystatechange = function() {
                b(w), E.onreadystatechange = null, a.removeChild(E), E = null;
              }, a.appendChild(E);
            }) : n = function(w) {
              setTimeout(b, 0, w);
            }, d.setImmediate = function(w) {
              typeof w != "function" && (w = new Function("" + w));
              for (var E = new Array(arguments.length - 1), T = 0; T < E.length; T++)
                E[T] = arguments[T + 1];
              var C = { callback: w, args: E };
              return y[t] = C, n(t), t++;
            }, d.clearImmediate = m;
          }
          function m(w) {
            delete y[w];
          }
          function b(w) {
            if (r)
              setTimeout(b, 0, w);
            else {
              var E = y[w];
              if (E) {
                r = !0;
                try {
                  (function(T) {
                    var C = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(S[0]);
                        break;
                      case 2:
                        C(S[0], S[1]);
                        break;
                      case 3:
                        C(S[0], S[1], S[2]);
                        break;
                      default:
                        C.apply(l, S);
                    }
                  })(E);
                } finally {
                  m(w), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, s(0), s(7));
    }, function(h, v) {
      var s, o, i = h.exports = {};
      function f() {
        throw new Error("setTimeout has not been defined");
      }
      function l() {
        throw new Error("clearTimeout has not been defined");
      }
      function n(d) {
        if (s === setTimeout)
          return setTimeout(d, 0);
        if ((s === f || !s) && setTimeout)
          return s = setTimeout, setTimeout(d, 0);
        try {
          return s(d, 0);
        } catch {
          try {
            return s.call(null, d, 0);
          } catch {
            return s.call(this, d, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : f;
        } catch {
          s = f;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : l;
        } catch {
          o = l;
        }
      })();
      var a, e = [], c = !1, p = -1;
      function t() {
        c && a && (c = !1, a.length ? e = a.concat(e) : p = -1, e.length && y());
      }
      function y() {
        if (!c) {
          var d = n(t);
          c = !0;
          for (var m = e.length; m; ) {
            for (a = e, e = []; ++p < m; )
              a && a[p].run();
            p = -1, m = e.length;
          }
          a = null, c = !1, function(b) {
            if (o === clearTimeout)
              return clearTimeout(b);
            if ((o === l || !o) && clearTimeout)
              return o = clearTimeout, clearTimeout(b);
            try {
              o(b);
            } catch {
              try {
                return o.call(null, b);
              } catch {
                return o.call(this, b);
              }
            }
          }(d);
        }
      }
      function r(d, m) {
        this.fun = d, this.array = m;
      }
      function u() {
      }
      i.nextTick = function(d) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            m[b - 1] = arguments[b];
        e.push(new r(d, m)), e.length !== 1 || c || n(y);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = u, i.addListener = u, i.once = u, i.off = u, i.removeListener = u, i.removeAllListeners = u, i.emit = u, i.prependListener = u, i.prependOnceListener = u, i.listeners = function(d) {
        return [];
      }, i.binding = function(d) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(d) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(h, v, s) {
      function o(f, l) {
        for (var n = 0; n < l.length; n++) {
          var a = l[n];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(f, a.key, a);
        }
      }
      var i = s(9);
      h.exports = function() {
        function f() {
          (function(e, c) {
            if (!(e instanceof c))
              throw new TypeError("Cannot call a class as a function");
          })(this, f);
        }
        var l, n, a;
        return l = f, a = [{ key: "urlEncode", value: function(e) {
          return i(e);
        } }, { key: "jsonEncode", value: function(e) {
          return JSON.stringify(e);
        } }, { key: "formEncode", value: function(e) {
          if (this.isFormData(e))
            return e;
          if (this.isFormElement(e))
            return new FormData(e);
          if (this.isObject(e)) {
            var c = new FormData();
            return Object.keys(e).forEach(function(p) {
              var t = e[p];
              c.append(p, t);
            }), c;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(e) {
          return Object.prototype.toString.call(e) === "[object Object]";
        } }, { key: "isFormData", value: function(e) {
          return e instanceof FormData;
        } }, { key: "isFormElement", value: function(e) {
          return e instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(c, p) {
            var t = document.createElement("INPUT");
            t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function(y) {
              var r = y.target.files;
              c(r), document.body.removeChild(t);
            }, !1), t.click();
          });
        } }, { key: "parseHeaders", value: function(e) {
          var c = e.trim().split(/[\r\n]+/), p = {};
          return c.forEach(function(t) {
            var y = t.split(": "), r = y.shift(), u = y.join(": ");
            r && (p[r] = u);
          }), p;
        } }], (n = null) && o(l.prototype, n), a && o(l, a), f;
      }();
    }, function(h, v) {
      var s = function(i) {
        return encodeURIComponent(i).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(i, f, l, n) {
        return f = f || null, l = l || "&", n = n || null, i ? function(a) {
          for (var e = new Array(), c = 0; c < a.length; c++)
            a[c] && e.push(a[c]);
          return e;
        }(Object.keys(i).map(function(a) {
          var e, c, p = a;
          if (n && (p = n + "[" + p + "]"), typeof i[a] == "object" && i[a] !== null)
            e = o(i[a], null, l, p);
          else {
            f && (c = p, p = !isNaN(parseFloat(c)) && isFinite(c) ? f + Number(p) : p);
            var t = i[a];
            t = (t = (t = (t = t === !0 ? "1" : t) === !1 ? "0" : t) === 0 ? "0" : t) || "", e = s(p) + "=" + s(t);
          }
          return e;
        })).join(l).replace(/[!'()*]/g, "") : "";
      };
      h.exports = o;
    }]);
  });
})(P);
var k = P.exports;
const I = /* @__PURE__ */ O(k), R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
class F {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: R,
      title: "Canto"
    };
  }
  /**
   * Allow to press Enter inside the CantoTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {CantoToolData} options.data - previously saved data
   * @param {CantoToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data: g, config: h, api: v, readOnly: s }) {
    this.api = v, this.readOnly = s, this.config = {
      endpoint: h.endpoint || "",
      headers: h.headers || {}
    }, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      cantoContentId: null,
      cantoSrc: null,
      cantoTitle: null,
      cantoAlt: null,
      cantoAltLabel: null,
      cantoCaption: null,
      cantoCaptionLabel: null
    }, this._data = {
      contentId: "",
      src: "",
      title: "",
      alt: "",
      credit: "",
      caption: "",
      height: "",
      width: ""
    }, this.data = g;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    var g, h;
    return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.cantoContent = this.prepareCantoPreview(), (h = (g = this.data) == null ? void 0 : g.src) != null && h.length ? (this.nodes.container.appendChild(this.nodes.cantoContent), this.showCantoPreview(this.data)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {CantoToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Validate Block data
   * - check if given contentId is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.contentId.trim() !== "";
  }
  /**
   * Stores all Tool's data
   *
   * @param {CantoToolData} data - data to store
   */
  set data(g) {
    this._data = Object.assign({}, {
      contentId: g.contentId || this._data.contentId,
      src: g.src || this._data.src,
      title: g.title || this._data.title,
      alt: g.alt || this._data.alt,
      caption: g.caption || this._data.caption,
      credit: g.credit || this._data.credit,
      height: g.height || this._data.height,
      width: g.width || this._data.width
    });
  }
  /**
   * Return Tool data
   *
   * @returns {CantoToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * @returns {object} - Canto Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      container: "canto-tool",
      inputEl: "canto-tool__input",
      inputHolder: "canto-tool__input-holder",
      inputError: "canto-tool__input-holder--error",
      inputLabel: "canto-tool__label",
      cantoContent: "canto-tool__content",
      cantoContentRendered: "canto-tool__content--rendered",
      cantoSrc: "canto-tool__src",
      cantoTitle: "canto-tool__title",
      cantoAlt: "canto-tool__alt",
      cantoCaption: "canto-tool__caption",
      cantoContentId: "canto-tool__id",
      progress: "canto-tool__progress",
      progressLoading: "canto-tool__progress--loading",
      progressLoaded: "canto-tool__progress--loaded"
    };
  }
  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const g = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Canto"), this.readOnly || (this.nodes.input.addEventListener("paste", (h) => {
      this.startFetching(h);
    }), this.nodes.input.addEventListener("keydown", (h) => {
      const [v, s] = [13, 65], o = h.ctrlKey || h.metaKey;
      switch (h.keyCode) {
        case v:
          h.preventDefault(), h.stopPropagation(), this.startFetching(h);
          break;
        case s:
          o && this.selectCantoId(h);
          break;
      }
    })), g.appendChild(this.nodes.progress), g.appendChild(this.nodes.input), g;
  }
  /**
   * Activates Canto data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(g) {
    let h = this.nodes.input.textContent;
    g.type === "paste" && (h = (g.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchCantoData(h);
  }
  /**
   * If previous Canto data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }
  /**
   * Select CantoTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectCantoId(g) {
    g.preventDefault(), g.stopPropagation();
    const h = window.getSelection(), v = new Range(), i = h.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    v.selectNodeContents(i), h.removeAllRanges(), h.addRange(v);
  }
  /**
   * Prepare canto preview holder
   *
   * @returns {HTMLElement}
   */
  prepareCantoPreview() {
    const g = this.make("div", this.CSS.cantoContent);
    return this.nodes.cantoContentId = this.make("div", this.CSS.cantoContentId), this.nodes.cantoSrc = this.make("img", this.CSS.cantoSrc), this.nodes.cantoTitle = this.make("div", this.CSS.cantoTitle), this.nodes.cantoCaption = this.make("textarea", this.CSS.cantoCaption, {
      rows: 5
    }), this.nodes.cantoAlt = this.make("textarea", this.CSS.cantoAlt, {
      rows: 2
    }), g;
  }
  /**
   * Compose Canto preview from fetched data
   *
   * @param {metaData} meta - canto meta data
   */
  showCantoPreview({ src: g, title: h, caption: v, alt: s }) {
    this.nodes.container.appendChild(this.nodes.cantoContent), g && (this.nodes.cantoSrc.src = g, this.nodes.cantoContent.appendChild(this.nodes.cantoSrc)), s && (this.nodes.cantoAltLabel = this.make("span", this.CSS.inputLabel), this.nodes.cantoAltLabel.textContent = "Alt Text:", this.nodes.cantoContent.appendChild(this.nodes.cantoAltLabel), this.nodes.cantoAlt.textContent = s, this.nodes.cantoContent.appendChild(this.nodes.cantoAlt)), v && (this.nodes.cantoCaptionLabel = this.make("span", this.CSS.inputLabel), this.nodes.cantoCaptionLabel.textContent = "Caption:", this.nodes.cantoContent.appendChild(this.nodes.cantoCaptionLabel), this.nodes.cantoCaption.textContent = v, this.nodes.cantoContent.appendChild(this.nodes.cantoCaption)), this.nodes.cantoContent.classList.add(this.CSS.cantoContentRendered), this.nodes.cantoContent.setAttribute("href", this.data.src), this.nodes.cantoContent.appendChild(this.nodes.cantoContentId);
  }
  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }
  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((g) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(g, 500);
    });
  }
  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
  }
  /**
   * Sends to backend pasted url and receives canto data
   *
   * @param {string} contentId - canto content ID
   */
  async fetchCantoData(g) {
    this.showProgress(), this.data = { contentId: g };
    try {
      const { body: h } = await I.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          contentId: g
        }
      });
      this.onFetch(h);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the canto data"));
    }
  }
  /**
   * Canto data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(g) {
    if (!g || !g.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this canto data, try the other one"));
      return;
    }
    const h = g.meta, { src: v, title: s, alt: o, caption: i, credit: f, height: l, width: n } = h, a = this.data.contentId;
    if (this.data = {
      contentId: a,
      src: v,
      title: s,
      alt: o,
      caption: i,
      credit: f,
      height: l,
      width: n
    }, !h) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    console.log(h), this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showCantoPreview({ src: v, title: s, caption: i, alt: o });
    });
  }
  /**
   * Handle canto fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(g) {
    this.api.notifier.show({
      message: g,
      style: "error"
    }), this.applyErrorStyle();
  }
  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(g, h = null, v = {}) {
    const s = document.createElement(g);
    Array.isArray(h) ? s.classList.add(...h) : h && s.classList.add(h);
    for (const o in v)
      s[o] = v[o];
    return s;
  }
}
export {
  F as default
};
