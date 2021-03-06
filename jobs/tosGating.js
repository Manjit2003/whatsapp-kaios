"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [139],
  {
    642: function (t, e, a) {
      a.r(e),
        a.d(e, "fetchTOSGatingAcceptanceStatus", function () {
          return O;
        }),
        a.d(e, "updateTOSGatingAcceptanceStatus", function () {
          return g;
        }),
        a.d(e, "maybeUpdateTOSStatusFromNotification", function () {
          return G;
        });
      var n = a(28),
        c = a(4),
        r = a(46),
        s = a(235),
        i = a(12),
        u = a(83),
        o = a(14),
        d = a(6),
        p = a(23),
        S = a(75),
        _ = new r.a("queryTOSGatingAcceptanceStatus", (t) => {
          var e = "unknown";
          return (
            t.child("tos").forEachChildWithTag("notice", (t) => {
              if (t.attrInt("id") === o.S) {
                var a = "false" !== t.maybeAttrString("state");
                e = a ? "accepted" : "not-yet";
              }
            }),
            e
          );
        }),
        f = { 400: (0, u.d)("bad-request"), 500: (0, u.d)("server-error") };
      function v(t) {
        (0, i.c)("event", "tosGatingStatusChanged", { tosAccepted: t });
      }
      function h() {
        return (0, p.a)("tos_client_state_fetch_iteration");
      }
      function O() {
        var t = (0, c.v)(
            "iq",
            { to: c.k, id: (0, c.t)(), xmlns: "tos", type: "get" },
            (0, c.v)("request", null, (0, c.v)("notice", { id: (0, c.f)(o.S) }))
          ),
          e = new s.a({
            name: "fetchTOSGatingAcceptanceStatus",
            timer: { algo: { type: "exponential", first: 250 } },
            code: (e) =>
              (0, n.e)(t, _)
                .then((t) => {
                  if (!t.success)
                    switch ((0, u.f)(t, f).error.reason) {
                      case "server-error":
                        return "retry";
                      case "bad-request":
                        return void __LOG__(
                          4
                        )`fetchTOSGatingAcceptanceStatus: bad request`;
                      default:
                        return void __LOG__(
                          3
                        )`fetchTOSGatingAcceptanceStatus: unknown error`;
                    }
                  switch (t.result) {
                    case "accepted":
                      return d.J.set({
                        status: "accepted",
                        forcedFetchIteration: h(),
                      }).then(() => {
                        v("accepted");
                      });
                    case "not-yet":
                      var e = d.J.get(),
                        a = e.status,
                        n = e.forcedFetchIteration;
                      return "accepted" === a && n >= h()
                        ? void __LOG__(
                            3
                          )`fetchTOSGatingAcceptanceStatus: already accepted, server says otherwise, skipping save`
                        : d.J.set({
                            status: "not-yet",
                            forcedFetchIteration: h(),
                          }).then(() => {
                            v("not-yet");
                          });
                    default:
                      return void __LOG__(
                        3
                      )`fetchTOSGatingAcceptanceStatus: fetched status is "unknown"`;
                  }
                })
                .then((t) => {
                  null == t && e();
                }),
          });
        return e.start(), e.promise();
      }
      var l = new r.a("updateTOSGatingAcceptanceStatus", (t) => {
          t.assertAttr("type", "result");
        }),
        g = (0, S.c)()
          .finalStep("updateStatus", (t, e) => {
            if (e.notices.includes(o.S)) {
              if ("accepted" === d.J.get().status) {
                var a = (0, c.v)(
                    "iq",
                    { to: c.k, id: (0, c.t)(), xmlns: "tos", type: "set" },
                    (0, c.v)(
                      "request",
                      { type: "session_update" },
                      (0, c.v)("notice", { id: (0, c.f)(o.S) })
                    )
                  ),
                  r = new s.a({
                    name: "updateTOSGatingAcceptanceStatus",
                    timer: { algo: { type: "exponential", first: 250 } },
                    code: (t) =>
                      (0, n.e)(a, l)
                        .then((t) => {
                          if (!t.success)
                            switch ((0, u.f)(t, f).error.reason) {
                              case "server-error":
                                return "retry";
                              case "bad-request":
                                return void __LOG__(
                                  4
                                )`updateTOSGatingAcceptanceStatus: bad request`;
                              default:
                                return void __LOG__(
                                  3
                                )`updateTOSGatingAcceptanceStatus: unknown error`;
                            }
                          t.success,
                            __LOG__(
                              2
                            )`updateTOSGatingAcceptanceStatus: updated server with the TOS status`;
                        })
                        .then((e) => {
                          "retry" !== e && t();
                        }),
                  });
                return r.start(), r.promise();
              }
              __LOG__(
                2
              )`updateTOSGatingAcceptanceStatus: received IB to update user notice state, but TOS are not accepted`;
            } else
              __LOG__(
                2
              )`updateTOSGatingAcceptanceStatus: received IB to update user notice state, but it did not include valid notices`;
          })
          .end();
      function G(t, e) {
        if (t !== o.S)
          return (
            __LOG__(
              3
            )`maybeUpdateTOSStatusFromNotification: received unexpected notice id "${t}"`,
            Promise.resolve()
          );
        var a = Object.assign({}, d.J.get()),
          n = e ? "accepted" : "not-yet";
        return (a.status = n), d.J.set(a).then(() => v(n));
      }
    },
  },
]);
