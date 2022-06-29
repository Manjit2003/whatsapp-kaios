"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [91],
  {
    641: function (e, t, n) {
      n.r(t),
        n.d(t, "addFavoriteGif", function () {
          return v;
        }),
        n.d(t, "addFavoriteGifsFromChat", function () {
          return c;
        }),
        n.d(t, "removeFavoriteGif", function () {
          return p;
        }),
        n.d(t, "removeFavoriteGifFromId", function () {
          return h;
        });
      var a = n(27),
        i = n.n(a),
        r = n(75),
        o = n(12),
        d = n(89),
        f = n(80),
        l = n(14),
        s = n(222),
        u = n(94);
      t.default = (0, r.c)()
        .step(
          "saveToStorage",
          (function () {
            var e = i()(function* (e) {
              var t = e.plaintextHash,
                n = e.request;
              (0, d.c)("addRecentGif");
              var a = n.plaintext,
                i = yield (0, s.l)(t);
              if (i && null != i.contentPath)
                __LOG__(2)`addRecentGif: gif already exists and has content.`;
              else {
                var r;
                if (i) r = i.relativePath;
                else {
                  __LOG__(2)`addRecentGif: adding new recent gif`;
                  var o = a.type || l.D;
                  (r = (0, f.f)(o)), yield (0, s.b)(t, r);
                }
                if (yield (0, s.a)(t)) {
                  var u = yield _(r, a);
                  if (u) return (0, s.r)(t, n, u);
                } else
                  __LOG__(
                    2
                  )`addRecentGif: gif is not worth enough to be stored`;
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        )
        .finalStep("purgeDeleted", (e, t) => {
          if (
            (t.plaintextHash,
            (0, o.c)("event", "refreshRecentGifs", {}),
            e && e.length > 0)
          )
            return (
              __LOG__(2)`addRecentGif: Purging media content ${e.length}`,
              Promise.all(
                e.map((e) => G(e).then(() => (0, s.q)(e)))
              ).then(() => {})
            );
        })
        .end();
      var v = (0, r.c)()
          .finalStep(
            "saveToStorage",
            (function () {
              var e = i()(function* (e) {
                var t = e.plaintextHash,
                  n = e.request;
                (0, d.c)("addFavoriteGif");
                var a = t;
                a || (a = yield (0, u.e)(n.plaintext));
                var i = yield (0, s.f)(a);
                if (i && i.contentPath)
                  __LOG__(
                    2
                  )`addFavoriteGif: gif already exists and has content.`;
                else {
                  var r;
                  if ((__LOG__(2)`addFavoriteGif: adding new favorite gif`, i))
                    r = i.relativePath;
                  else {
                    var v = n.plaintext.type || l.D;
                    (r = (0, f.f)(v)), yield (0, s.c)(a, r, n);
                  }
                  var c = yield _(r, n.plaintext);
                  if (!c) return (0, s.d)(a);
                  var p = yield (0, s.o)(a, c, n);
                  p && (0, o.c)("event", "addFavoriteGifs", { gifs: [p] });
                }
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end(),
        c = (0, r.c)()
          .finalStep(
            "saveToStorage",
            (function () {
              var e = i()(function* (e) {
                var t = e.msgIds,
                  n = yield (0, s.i)(t);
                if (0 !== n.length) {
                  var a = n.map((e) => {
                    var t = e.plaintextHash,
                      n = e.request,
                      a = n.plaintext.type,
                      i = (0, f.f)(a);
                    return (0, s.c)(t, i, n).then((e) => {
                      if (null != e)
                        return _(i, n.plaintext).then((e) =>
                          e ? (0, s.o)(t, e, n) : (0, s.d)(t)
                        );
                      __LOG__(3)`addFavoriteGifsFromChat: didn't favorite ${t}`;
                    });
                  });
                  yield Promise.all(a).then((e) => {
                    var t = e.filter(Boolean);
                    t.length > 0 &&
                      (0, o.c)("event", "addFavoriteGifs", { gifs: t });
                  });
                } else __LOG__(2)`addFavoriteGifsFromChat: no favorite to add`;
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end(),
        p = (0, r.c)()
          .finalStep(
            "removeFromStorage",
            (function () {
              var e = i()(function* (e) {
                var t = e.plaintextHash;
                (0, d.c)("deleteFavouriteGif");
                var n = yield (0, s.f)(t);
                n && n.contentPath
                  ? (yield G(n.contentPath),
                    yield (0, s.d)(t),
                    (0, o.c)("event", "removeFavoriteGif", {
                      plaintextHash: t,
                    }))
                  : __LOG__(
                      2
                    )`deleteFavouriteGif: gif does not exist exists and has content`;
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end(),
        h = (0, r.c)()
          .finalStep(
            "removeFromStorage",
            (function () {
              var e = i()(function* (e) {
                var t = e.gifId,
                  n = e.gifAttribution;
                (0, d.c)("deleteFavouriteGifFromId");
                var a = yield (0, s.g)(t, n);
                if (a && a.contentPath) {
                  var i = a.contentPath,
                    r = a.plaintextHash;
                  yield G(i),
                    yield (0, s.e)(t, n),
                    (0, o.c)("event", "removeFavoriteGif", {
                      plaintextHash: r,
                    });
                } else __LOG__(2)`deleteFavouriteGif: gif does not exist exists and has content`;
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end();
      function _(e, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = i()(function* (e, t) {
          var n = (yield (0, o.e)("page", "craftMediaFilesystemPath", {
            path: e,
          })).path;
          yield G(n);
          var a = yield (0, o.e)("page", "putBlobToPhoneStorage", {
            path: n,
            blob: t,
          });
          return "ok" !== a.result
            ? (__LOG__(
                3
              )`putGifBlobInStorage: There was an error when trying to put blob in storage`,
              null)
            : a.path;
        })).apply(this, arguments);
      }
      function G(e) {
        return (0, o.e)("page", "deletePath", { path: e });
      }
    },
  },
]);
