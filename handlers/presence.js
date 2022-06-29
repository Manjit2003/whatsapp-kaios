"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [64],
  {
    572: function (e, a, r) {
      r.r(a),
        r.d(a, "default", function () {
          return l;
        });
      var s = r(88),
        n = r(12),
        t = new s.b("incomingPresenceParser", (e) => {
          e.assertTag("presence");
          var a = null,
            r = e.attrEnumOrDefault(
              "type",
              {
                available: "available",
                unavailable: "unavailable",
                unsubscribe: "unsubscribe",
              },
              "available"
            );
          if ("unavailable" === r && e.hasAttr("last")) {
            var s = e.attrString("last");
            switch (s) {
              case "deny":
              case "none":
              case "error":
                a = s;
                break;
              default:
                a = e.attrTime("last");
            }
          }
          return { jid: e.attrPhoneChatJid("from"), type: r, last: a };
        });
      function l(e) {
        var a = t.parse(e);
        a.error
          ? __LOG__(4)`handlePresence: failed to parse presence: ${a.error}`
          : (0, n.c)("event", "receivePresence", a.success);
      }
    },
  },
]);
