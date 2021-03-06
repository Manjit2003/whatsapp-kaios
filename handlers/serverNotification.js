"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [67],
  {
    564: function (r, t, a) {
      a.r(t);
      var e = a(88),
        n = a(4),
        i = a(329),
        o = a(113),
        s = a(305),
        p = a(408),
        l = new e.b("incomingServerNotificationParser", (r) => {
          r.assertTag("notification");
          var t = null;
          return (
            r.hasChild("log")
              ? (t = "log")
              : r.hasChild("props")
              ? (t = "props")
              : r.hasChild("abprops") && (t = "abprops"),
            {
              type: t,
              from: r.attrFromPhoneJid(),
              stanzaId: r.attrString("id"),
            }
          );
        });
      t.default = (0, e.c)("handleServerNotification", l, (r) => {
        var t = (0, n.v)("ack", {
          id: (0, n.b)(r.stanzaId),
          to: (0, n.l)(r.from),
          class: "notification",
          type: "server",
        });
        switch (r.type) {
          case "log":
            return (
              (0, o.crashlog)("Uploading logs", "Server Request"),
              (0, i.a)(!0).then(() => t)
            );
          case "props":
            return (0, s.a)().then(() => t);
          case "abprops":
            return (0, p.a)(!1).then(() => t);
          default:
            return (
              __LOG__(
                4
              )`Unsupported notification with type "server", blindly ack-ing it and doing nothing`,
              t
            );
        }
      });
    },
  },
]);
