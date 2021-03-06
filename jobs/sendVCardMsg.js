"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [124],
  {
    621: function (e, t, n) {
      n.r(t);
      var r = n(27),
        a = n.n(r),
        c = n(6),
        i = n(63),
        s = n(75),
        o = n(30),
        d = n(16),
        u = n(217),
        l = n(10),
        v = n(36),
        p = n(20);
      t.default = (0, s.c)()
        .finalStep(
          "saveAndPassOff",
          (function () {
            var e = a()(function* (e, t, n) {
              n.jobStartTime;
              var r = e.jid,
                a = e.content,
                s = e.quoted,
                f = e.remoteJid,
                m = (0, u.k)(a.contacts.map((e) => e.vcard)),
                g = yield (0, i.d)(Array.from(m)),
                y = (function (e, t) {
                  var n = 0;
                  return {
                    vcards: e.map((e) => {
                      var r = e.vcard,
                        a = (0, u.a)(r, t);
                      return (n += a.length), a;
                    }),
                    accSize: (n += e.length - 1),
                  };
                })(a.contacts, g),
                b = y.accSize,
                S = y.vcards;
              if (b > c.E.get().vcardMaxSizeKb * l.a)
                return { error: { reason: "too-big" } };
              if (b <= c.E.get().vcardAsDocumentSizeKb * l.a)
                yield (0, o.b)().waitUntilPersisted(d.e.sendMsg(r, a, s, f));
              else {
                var h = (function (e) {
                    return new Blob([e.join("\n")], {
                      type: "text/vcard",
                      endings: "native",
                    });
                  })(S),
                  O = (function (e) {
                    var t = e.contacts.map((e) => e.displayName);
                    return (0, v.n)(t.length, t, {
                      onEmpty: null,
                      onSingleContact: (e) => e,
                      onOneAndOthers: (e, t) => (0, p.k)([t, e, 252]),
                      onOthers: (e) => (0, p.k)([e, 253]),
                    });
                  })(a);
                if (!O)
                  return (
                    __LOG__(4)`Trying to send empty vcard msg`,
                    SEND_LOGS("empty-vcard"),
                    { error: { reason: "empty" } }
                  );
                var k = {
                  type: "text/vcard",
                  plaintext: h,
                  filename: O,
                  contactsCount: S.length,
                  uiVCards: (0, u.e)(a.contacts.map((e) => e.vcard)),
                };
                yield (0, o.b)().waitUntilPersisted(
                  d.e.sendMediaMsg(r, k, s, f)
                );
              }
              return "success";
            });
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          })()
        )
        .end();
    },
  },
]);
