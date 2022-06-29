"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [59],
  {
    569: function (a, t, i) {
      i.r(t);
      var n = i(4),
        r = i(88),
        e = i(63),
        o = i(23),
        s = new r.b("incomingDisappearingModeNotification", (a) => {
          a.assertTag("notification"),
            a.assertAttr("type", "disappearing_mode");
          var t = a.child("disappearing_mode");
          return {
            stanzaId: a.attrString("id"),
            from: a.attrPhoneUserJid("from"),
            duration: t.attrInt("duration"),
            durationTs: t.attrTime("t"),
          };
        });
      function d(a) {
        var t = a.from,
          i = a.stanzaId;
        return (0, n.v)("ack", {
          to: (0, n.g)(t),
          id: (0, n.b)(i),
          type: (0, n.b)("disappearing_mode"),
          class: "notification",
        });
      }
      t.default = (0, r.c)(
        "handleDisappearingModeNotification",
        s,
        function (a) {
          var t = a.from,
            i = a.duration,
            n = a.durationTs;
          if (!(0, o.a)("disappearing_mode")) return d(a);
          var r = {
            defaultDisappearingMode: { expiration: i, lastChangedTs: n },
          };
          return (0, e.h)(t, r).then(() => d(a));
        }
      );
    },
  },
]);
