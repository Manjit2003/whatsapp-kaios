"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [114],
  {
    594: function (e, t, r) {
      r.r(t);
      var n = r(75),
        s = r(2),
        a = r(17),
        d = r(30),
        c = r(16),
        i = r(23);
      t.default = (0, n.c)()
        .step("runAll", (e, t, r) => {
          var n = e.jid,
            d = e.key,
            c = e.showMsg,
            i = r.jobStartTime;
          return (0, a.cc)(
            n,
            c
              ? {
                  type: s.f.IDENTITY_CHANGE,
                  externalId: "keychange/" + d,
                  ts: i,
                  author: n,
                  ack: s.a.RECEIVED,
                  subtype: "primary",
                  altIndex: "",
                }
              : void 0
          );
        })
        .finalStep("sendPrivacyTokens", (e, t) => {
          var r = t.jid;
          if ((0, i.a)("trusted_contacts_sender"))
            return (0, d.b)().waitUntilPersisted(
              c.e.resendTrustedContactSenderToken(r)
            );
        })
        .end();
    },
  },
]);
