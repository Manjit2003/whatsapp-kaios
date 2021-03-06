"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [51],
  {
    571: function (e, t, a) {
      a.r(t),
        a.d(t, "default", function () {
          return n;
        });
      var r = a(88),
        i = a(12),
        s = a(7),
        c = new r.b("incomingChatStateParser", (e) => {
          var t;
          e.assertTag("chatstate");
          var a = e.maybeChild("composing");
          if (e.maybeChild("paused")) t = "paused";
          else {
            if (!a) return null;
            t = a.attrEnumOrDefault(
              "media",
              { audio: "recording_audio" },
              "typing"
            );
          }
          var r,
            i = e.attrJidWithType();
          switch (i.jidType) {
            case "phoneUser":
              r = i.userJid;
              break;
            case "phoneDevice":
              r = (0, s.h)(i.deviceJid);
              break;
            case "group":
              r = i.groupJid;
              break;
            default:
              throw e.throw(
                "expected to be user, device or group JID, but received " +
                  i.jidType
              );
          }
          return {
            jid: r,
            participant: e.hasAttr("participant")
              ? (0, s.h)(e.attrPhoneDeviceJid("participant"))
              : null,
            status: t,
          };
        });
      function n(e) {
        var t = c.parse(e);
        t.error
          ? __LOG__(4)`handleChatState: failed to parse chatstate: ${t.error}`
          : t.success && (0, i.c)("event", "receiveChatState", t.success);
      }
    },
  },
]);
