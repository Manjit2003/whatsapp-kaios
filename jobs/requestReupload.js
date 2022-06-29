"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [108],
  {
    623: function (e, r, t) {
      t.r(r),
        t.d(r, "requestReupload", function () {
          return c;
        });
      var n = t(75),
        i = t(17),
        a = t(28),
        d = t(4),
        o = t(7),
        p = t(11),
        l = t(49),
        u = t(486),
        s = t(6),
        c = (0, n.c)()
          .finalStep("request", (e) => {
            var r = e.msgId;
            return (0, i.v)(r).then((e) => {
              if (e) {
                var t = e.msg,
                  n = e.media,
                  c = (0, l.i)(t.author);
                if (null != c)
                  return ("chat" === e.type
                    ? (0, i.C)(e.msg.chat).then((e) => {
                        var r = (0, o.p)(e);
                        return {
                          to: r || c,
                          participant: null != r ? c : null,
                        };
                      })
                    : Promise.resolve({ to: p.h, participant: c })
                  ).then((e) => {
                    var i = e.to,
                      p = e.participant,
                      l = t.externalId,
                      c = n.mediaEntries[t.id];
                    if (!c)
                      return (
                        __LOG__(
                          4
                        )`requestReupload: no entry found on media ${n.mediaId} for msg ${r}`,
                        void SEND_LOGS("reupload-entry-not-found")
                      );
                    if ("mms4" !== c.version)
                      return (
                        __LOG__(
                          4
                        )`requestReupload: invalid entry found on media ${n.mediaId} for msg ${r}`,
                        void SEND_LOGS("reupload-entry-invalid")
                      );
                    var v = {
                      id: t.externalId,
                      class: "receipt",
                      from: i,
                      participant: p ? (0, o.e)(p) : null,
                      type: "server-error",
                    };
                    return s.E.get().mms4ServerErrorReceiptEncryptionEnabled
                      ? (0, u.d)(c.cryptoKey, l).then((e) => {
                          var r = e.ciphertext,
                            t = e.iv;
                          return (0, a.l)(
                            (0, d.v)(
                              "receipt",
                              {
                                type: "server-error",
                                to: (0, d.g)(i),
                                participant: p ? (0, d.g)(p) : d.d,
                                id: (0, d.b)(l),
                              },
                              (0, d.v)(
                                "encrypt",
                                null,
                                (0, d.v)("enc_p", null, r),
                                (0, d.v)("enc_iv", null, t)
                              )
                            ),
                            v
                          );
                        })
                      : (0, a.l)(
                          (0, d.v)("receipt", {
                            to: (0, d.g)(i),
                            participant: p ? (0, d.g)(p) : d.d,
                            id: (0, d.b)(t.externalId),
                            type: "server-error",
                          }),
                          v
                        );
                  });
                __LOG__(
                  2
                )`requestReupload executed for msg with invalid author ${t.author}`;
              } else __LOG__(2)`downloadMedia msg deleted`;
            });
          })
          .end();
    },
  },
]);
