"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [141],
  {
    630: function (e, s, t) {
      t.r(s);
      var a = t(75),
        n = t(17),
        r = t(7),
        i = t(189),
        c = t(30),
        p = t(16),
        u = t(21);
      s.default = (0, a.c)()
        .finalStep("updateContactPHash", (e) => {
          var s = e.user,
            t = e.devices,
            a = e.serverPHash,
            d = t.map((e) => (0, r.A)(s, e));
          return (0, i.a)(d).then((e) => {
            if (e !== a)
              return (0, c.b)().waitUntilPersisted(
                p.e.syncDeviceList((0, u.l)(s))
              );
            (0, n.ad)(s, t, e);
          });
        })
        .end();
    },
  },
]);
