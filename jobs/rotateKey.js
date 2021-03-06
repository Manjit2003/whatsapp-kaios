"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [113],
  {
    603: function (e, r, t) {
      t.r(r);
      var a = t(75),
        l = t(29),
        o = t(242),
        n = t(28),
        s = t(377),
        d = t(89),
        u = t(3),
        _ = t(4),
        p = new a.b("rotateKey", (e) => {
          e.assertFromServer();
        });
      r.default = (0, a.c)()
        .step("uploadKeys", () =>
          (0, l.J)().then((e) => {
            var r = (0, _.v)(
              "iq",
              { xmlns: "encrypt", type: "set", to: _.k, id: (0, _.t)() },
              (0, _.v)("rotate", null, (0, o.b)(e))
            );
            return (
              __LOG__(2)`rotateKey uploading`,
              (0, n.e)(r, p).then((e) => {
                if (e.success) return {};
                var r = e.errorCode;
                if (406 === r)
                  return __LOG__(4)`rotateKey generated bad key`, {};
                if (409 === r) return { shouldUploadAll: !0 };
                if (r >= 500)
                  throw (
                    (__LOG__(2)`rotateKey server error ${r}, wait a day`,
                    new d.b({ algo: { type: "constant", delay: 1e3 * u.b } }))
                  );
                return (
                  __LOG__(4)`rotateKey unrecognized error ${r}`,
                  { shouldUploadAll: !0 }
                );
              })
            );
          })
        )
        .finalStep("maybeUploadAll", (e) => {
          if (e.shouldUploadAll)
            return __LOG__(2)`rotateKey reupload all keys`, (0, s.default)();
        })
        .end();
    },
  },
]);
