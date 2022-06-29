"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [138],
  {
    640: function (e, t, s) {
      s.r(t);
      var r = s(75),
        c = s(4),
        n = s(71),
        i = s(28),
        a = s(46),
        o = s(83),
        d = s(17),
        u = s(3),
        _ = s(284),
        l = s(202),
        v = s(12),
        f = s(89),
        h = s(15),
        S = s(6),
        y = s(14),
        g = new n.a(),
        w = { 400: (0, o.d)("bad-request"), 500: (0, o.d)("unknown") },
        p = new a.a("syncUserNoticeState", (e) => {
          if (e.hasChild("error")) {
            var t = e.child("error");
            return {
              success: !1,
              stale: !1,
              code: t.attrInt("code"),
              text: t.attrString("text"),
            };
          }
          if (!e.hasChild("notice")) return { success: !0, stale: !1 };
          var s = e.child("notice"),
            r = s.attrInt("stage"),
            c = (0, _.a)(r);
          return null == c
            ? (__LOG__(
                3
              )`syncUserNoticeState: Received user notice containing notice with invalid state: "${r}"`,
              { success: !1, code: 500 })
            : { success: !0, stale: !0, state: c, ts: s.attrTime("t") };
        });
      function q(e) {
        return e === y.S
          ? S.J.set({
              status: "accepted",
              forcedFetchIteration: S.J.get().forcedFetchIteration,
            }).then(
              () => (
                (0, v.c)("event", "tosGatingStatusChanged", {
                  tosAccepted: "accepted",
                }),
                "success"
              )
            )
          : "success";
      }
      t.default = (0, r.c)()
        .finalStep("sendStateToServer", (e) =>
          (function (e, t, s) {
            if (!(0, l.b)())
              return (
                __LOG__(
                  2
                )`syncUserNoticeState: User Notice Framework is disabled`,
                Promise.resolve("success")
              );
            var r = (0, c.t)(),
              n = (0, c.v)(
                "iq",
                { to: c.k, type: "set", xmlns: "tos", id: r },
                (0, c.v)("notice", { id: (0, c.f)(e), stage: (0, c.f)(t) })
              );
            return (
              __LOG__(
                2
              )`syncUserNoticeState: Queuing iq for notice ${e} state ${t} for version ${s}`,
              g.enqueue(
                () => (
                  __LOG__(
                    2
                  )`syncUserNoticeState: Sending iq ${e} state ${t} for version ${s}`,
                  (0, i.e)(n, p).then((r) => {
                    if (
                      (__LOG__(2)`syncUserNoticeState: received server ack`,
                      !r.success)
                    ) {
                      var c = (0, o.f)(r, w);
                      if (400 === r.errorCode)
                        return (
                          __LOG__(
                            4
                          )`syncUserNoticeState: Received bad request when sending iq to sync user notice state`,
                          SEND_LOGS("sync-user-notice-state-bad-request"),
                          WAM.log("regular", 2474, void 0, [
                            3,
                            0,
                            1,
                            1,
                            0,
                            e,
                            2,
                            0,
                            s,
                          ]),
                          d.ac(e).then(() => c)
                        );
                      if (r.errorCode >= 500)
                        throw (
                          (__LOG__(
                            4
                          )`syncUserNoticeState: Received internal server error when sending iq to sync user notice state`,
                          new f.b({
                            algo: {
                              type: "fibonacci",
                              first: 1e3 * u.d,
                              second: 1e3 * u.d,
                            },
                            max: 1e3 * u.b,
                          }))
                        );
                      return (
                        __LOG__(
                          4
                        )`syncUserNoticeState: ${r.errorCode} Received unknown server error when sending iq to sync user notice state`,
                        c
                      );
                    }
                    var n = r.result;
                    return n.stale
                      ? t === h.q.EXPIRED
                        ? (__LOG__(
                            3
                          )`syncUserNoticeState: Received stale user notice state when sending acceptance iq`,
                          q(e))
                        : d.cd(e, n.state, (0, u.j)(n.ts)).then(() => "success")
                      : t >= h.q.EXPIRED
                      ? (__LOG__(
                          2
                        )`syncUserNoticeState: Received server ack for expired notice, will delete notice`,
                        d.ac(e).then(() => q(e)))
                      : "success";
                  })
                )
              )
            );
          })(e.id, e.state, e.version)
        )
        .end();
    },
  },
]);
