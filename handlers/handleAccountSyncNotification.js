"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [56],
  {
    652: function (t, e, n) {
      n.r(e),
        n.d(e, "handleAccountSyncNotification", function () {
          return f;
        });
      var i = n(88),
        c = n(4),
        o = n(6),
        a = n(7),
        r = n(27),
        s = n.n(r),
        d = n(60);
      function y() {
        return (y = s()(function* (t) {
          return Promise.resolve();
        })).apply(this, arguments);
      }
      n(515), n(169), n(354), n(30), n(16), n(62);
      var u = new i.b("accountSyncNotification", (t) => {
          var e = t.attrString("id"),
            n = t.attrPhoneDeviceJid("from");
          if (t.hasChild("devices")) {
            var i = (function (t) {
              if ("devices" !== t.tag())
                throw new Error("Expected devices node");
              return "modify" === t.maybeAttrString("action")
                ? { type: "devices-modify" }
                : {
                    type: "devices-sync",
                    devices: t.mapChildrenWithTag("device", (t) => ({
                      jid: t.attrPhoneDeviceJid("jid"),
                      keyIndex: (0, d.g)(t, "key-index") || d.b,
                    })),
                    advTs: t.hasChild("key-index-list")
                      ? t.child("key-index-list").attrInt("ts")
                      : null,
                  };
            })(t.child("devices"));
            return "devices-modify" === i.type
              ? { type: "devices-modify", stanzaId: e, from: n }
              : {
                  type: "devices-sync",
                  devices: i.devices,
                  advTs: i.advTs,
                  stanzaId: e,
                  from: n,
                };
          }
          var c = t.maybeChild("tos");
          if (c) {
            var o = c.child("notice");
            return {
              type: "tos",
              stanzaId: e,
              from: n,
              noticeId: o.attrInt("id"),
              state: "false" !== o.maybeAttrString("state"),
            };
          }
          var a = null;
          return (
            t.hasChild("blocklist")
              ? (a = "blocklist")
              : t.hasChild("picture")
              ? (a = "picture")
              : t.hasChild("privacy")
              ? (a = "privacy")
              : ((a = "unknown"),
                __LOG__(4)`Unknown account sync notification: ${t}`,
                SEND_LOGS("account-sync-notification-received-unknown")),
            { type: "unknown", action: a, stanzaId: e, from: n }
          );
        }),
        f = (0, i.c)("handleAccountSyncNotification", u, (t) => {
          if (o.r.get() !== (0, a.h)(t.from))
            return (
              __LOG__(4)`Received account sync notificaton from non-self`,
              SEND_LOGS("account-sync-notification-self"),
              l(t)
            );
          var e = null;
          return (
            "devices-modify" === t.type
              ? (e = Promise.resolve())
              : "devices-sync" === t.type
              ? (e = (function (t) {
                  return y.apply(this, arguments);
                })(t))
              : "tos" === t.type
              ? (e = n
                  .e(139)
                  .then(n.bind(null, 642))
                  .then((e) =>
                    e.maybeUpdateTOSStatusFromNotification(t.noticeId, t.state)
                  ))
              : (t.type,
                __LOG__(
                  3
                )`Received unhandled ${t.action} account sync notification.`,
                (e = Promise.resolve())),
            e.then(() => l(t))
          );
        });
      function l(t) {
        var e = t.from,
          n = t.stanzaId;
        return (0, c.v)("ack", {
          to: (0, c.g)(e),
          id: (0, c.b)(n),
          type: (0, c.b)("account_sync"),
          class: "notification",
        });
      }
    },
  },
]);
