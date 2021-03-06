"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [81],
  {
    605: function (e, i, n) {
      n.r(i);
      var t = n(27),
        a = n.n(t),
        r = n(17),
        c = n(63),
        s = n(75),
        d = n(3),
        l = n(21),
        u = n(29),
        o = n(23),
        p = n(119),
        v = n(30),
        f = n(16);
      i.default = (0, s.c)()
        .step(
          "deleteDevices",
          (function () {
            var e = a()(function* (e, i, n) {
              var t = n.interruptJob;
              if (!(0, o.a)("adv_v2_m4_m5")) return t();
              var a = (0, o.a)("num_days_before_device_expiry_check"),
                s = Math.min(35, a);
              s < 0 && (s = 0);
              var l = (0, o.a)("num_days_key_index_list_expiration"),
                p = Math.min(35, l);
              p < 1 && (p = 1);
              var v = [],
                f = new Set(),
                _ = yield (0, c.c)(),
                y = yield (0, r.I)();
              if (
                (_.forEach((e) => {
                  var i = e.deviceVerification;
                  if (i) {
                    var n = (0, d.j)(i.timestamp),
                      t = (0, d.l)(p * d.b, n),
                      a = (0, d.E)();
                    a >= t ||
                    (function (e, i, n) {
                      if (null == e || 0 === e) return !1;
                      var t = (0, d.j)(e),
                        a = (0, d.l)(25 * d.d, t);
                      return (0, d.E)() >= a && i !== n;
                    })(
                      i.expectedTsUpdatedTs,
                      i.deleteExpiredDeviceTs,
                      y.lastRunTs
                    )
                      ? (v.push({ jid: e.jid, devices: e.devices }),
                        f.add(e.jid))
                      : a >= (0, d.x)(s * d.b, t) && f.add(e.jid);
                  }
                }),
                v.length >= 1)
              ) {
                __LOG__(2)`Expiring contacts ${v.length}`;
                var m = [];
                v.forEach((e) => {
                  var i = e.devices;
                  null != i &&
                    m.push(
                      (0, u.l)(
                        e.jid,
                        i.map((e) => e.id)
                      )
                    );
                }),
                  yield Promise.all(m),
                  yield (0, r.q)(v.map((e) => e.jid));
              }
              return { usersToSync: f, completionTime: Date.now() };
            });
            return function (i, n, t) {
              return e.apply(this, arguments);
            };
          })()
        )
        .finalStep(
          "syncDeviceAndSaveInfo",
          (function () {
            var e = a()(function* (e) {
              if (!(e instanceof p.b)) {
                var i = e.usersToSync,
                  n = e.completionTime;
                i.size >= 1 &&
                  (__LOG__(2)`Syncing devices ${i.size}`,
                  yield (0, v.b)().waitUntilCompleted(
                    f.e.syncDeviceList((0, l.c)(i))
                  )),
                  yield (0, r.Vc)({ lastRunTs: n });
              }
            });
            return function (i) {
              return e.apply(this, arguments);
            };
          })()
        )
        .end();
    },
  },
]);
