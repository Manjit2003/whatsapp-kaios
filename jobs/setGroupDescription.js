"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [129],
  {
    581: function (e, r, t) {
      t.r(r);
      var n = t(28),
        s = t(4),
        i = t(75),
        c = t(17),
        o = t(46),
        u = t(30),
        p = t(16),
        a = t(12),
        d = new o.a("setGroupDescription", (e) => ({}));
      r.default = (0, i.c)()
        .finalStep("setGroupDescription", (e) => {
          var r = e.groupJid,
            t = e.description;
          return (0, c.O)(r)
            .then((e) => {
              var i = (0, s.t)(),
                c = e ? e.descriptionId : null,
                o = t
                  ? (0, s.v)(
                      "iq",
                      {
                        to: (0, s.g)(r),
                        type: "set",
                        xmlns: "w:g2",
                        id: (0, s.t)(),
                      },
                      (0, s.v)(
                        "description",
                        { id: i, prev: (0, s.i)(c) },
                        (0, s.v)("body", null, t)
                      )
                    )
                  : (0, s.v)(
                      "iq",
                      {
                        to: (0, s.g)(r),
                        type: "set",
                        xmlns: "w:g2",
                        id: (0, s.t)(),
                      },
                      (0, s.v)("description", {
                        delete: "true",
                        prev: (0, s.i)(c),
                      })
                    );
              return (0, n.e)(o, d);
            })
            .then((e) => {
              if (!e.success)
                switch (e.errorCode) {
                  case 401:
                    return "not-authorized";
                  case 409:
                    return (
                      (0, u.b)().fireAndForget(p.e.queryGroup(r)), "conflict"
                    );
                  case 406:
                    return (
                      (0, a.c)("backend", "syncServerProps", {}),
                      "not-acceptable"
                    );
                  case 500:
                    return "internal-server-error";
                  default:
                    return "unknown-error";
                }
              return "success";
            });
        })
        .end();
    },
  },
]);
