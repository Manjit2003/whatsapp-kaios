"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [57],
  {
    567: function (e, i, t) {
      t.r(i),
        t.d(i, "handleDevicesNotification", function () {
          return m;
        });
      var n = t(88),
        a = t(4),
        d = t(17),
        s = t(29),
        r = t(7),
        o = t(60),
        c = t(111),
        h = t(304),
        v = t(483),
        f = t(30),
        l = t(16),
        p = t(21),
        u = new n.b("devicesNotification", (e) => {
          var i, t;
          if (
            (e.assertTag("notification"),
            e.assertAttr("type", "devices"),
            e.hasChild("remove"))
          )
            (t = "remove"), (i = e.child("remove"));
          else {
            if (!e.hasChild("add")) {
              if (e.hasChild("update"))
                return (
                  (i = e.child("update")),
                  {
                    type: "sidelist",
                    from: e.attrPhoneUserJid("from"),
                    stanzaId: e.attrString("id"),
                    hash: i.attrString("hash"),
                  }
                );
              throw (
                (__LOG__(
                  4
                )`Devices notification without 'remove' and 'add' nodes`,
                SEND_LOGS("unknown-devices-notification"),
                new Error("Failed to parse devices notification"))
              );
            }
            (t = "add"), (i = e.child("add"));
          }
          var n = i.mapChildrenWithTag("device", (e) => ({
              id: (0, r.f)(e.attrPhoneDeviceJid("jid")),
              index: (0, o.g)(e, "key-index") || o.b,
            })),
            a = i.child("key-index-list"),
            d =
              "add" === t
                ? {
                    type: "device_added_notification",
                    devicesToAdd: n,
                    adv: (0, c.c)(a.contentBytes()),
                    stanzaTs: a.attrTime("ts"),
                  }
                : {
                    type: "device_removed_notification",
                    devicesToRemove: n,
                    advTs: a.attrInt("ts"),
                  };
          return {
            type: "contact",
            stanzaId: e.attrString("id"),
            hash: i.attrString("device_hash"),
            from: e.attrPhoneUserJid("from"),
            unverifiedUSyncResponse: d,
          };
        }),
        m = (0, n.c)("handleDevicesNotification", u, (e) => {
          var i,
            t = e.from;
          return "sidelist" === e.type
            ? ((i = e.hash),
              (0, v.a)(i).then(
                (e) => (
                  __LOG__(
                    2
                  )`handleDevicesNotification side list update for ${e}`,
                  (0, f.b)().waitUntilPersisted(l.e.syncDeviceList((0, p.m)(e)))
                )
              )).then(() => y(e))
            : (0, h.a)([t]).then(() =>
                (0, c.h)(t, e.unverifiedUSyncResponse)
                  .then((i) => {
                    if (i) {
                      var n = (0, s.y)(t, i),
                        a = (0, d.ob)(t, { usyncResponse: i }, e.hash);
                      return Promise.all([n, a]);
                    }
                  })
                  .then(() => y(e))
              );
        });
      function y(e) {
        var i = e.from,
          t = e.stanzaId;
        return (0, a.v)("ack", {
          to: (0, a.g)(i),
          id: (0, a.b)(t),
          type: (0, a.b)("devices"),
          class: "notification",
        });
      }
    },
  },
]);
