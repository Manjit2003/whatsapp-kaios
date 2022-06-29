"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [61],
  {
    570: function (t, n, e) {
      e.r(n);
      var r = e(88),
        a = e(4),
        i = e(236),
        o = e(23),
        c = { trusted_contact: e(2).g.TC_RECEIVED },
        s = new r.b("incomingPrivacyTokensParser", (t) => {
          t.assertTag("notification");
          var n = t.attrString("id"),
            e = t.attrPhoneUserJid("from"),
            r = t.child("tokens"),
            a = {};
          return (
            r.forEachChildWithTag("token", (t) => {
              var n = t.attrEnumOrNullIfUnknown("type", c);
              if (null != n) {
                var e = t.attrTime("t"),
                  r = t.contentBytes();
                a[n] = { value: r, ts: e };
              } else
                __LOG__(
                  4
                )`incomingPrivacyTokensParser: unrecognized type ${t.attrString(
                  "type"
                )}`;
            }),
            { externalId: n, from: e, privacyTokens: a }
          );
        });
      n.default = (0, r.c)("incomingPrivacyTokenNotification", s, (t) => {
        var n = (0, a.v)("ack", {
          to: (0, a.g)(t.from),
          type: "privacy_token",
          id: (0, a.b)(t.externalId),
          class: "notification",
        });
        return (0, o.a)("trusted_contacts")
          ? (0, i.f)(t.from, t.privacyTokens).then(() => n)
          : n;
      });
    },
  },
]);
