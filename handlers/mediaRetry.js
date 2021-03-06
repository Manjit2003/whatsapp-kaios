"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [62],
  {
    562: function (e, t, r) {
      r.r(t);
      var i = r(27),
        a = r.n(i),
        n = r(88),
        d = r(4),
        o = r(30),
        l = r(16),
        c = r(17),
        s = r(486),
        m = r(11),
        y = r(7),
        f = r(10),
        p = r(134),
        _ = new n.b("incomingMediaRetryNotificationParser", (e) => {
          e.assertTag("notification");
          var t = e.attrFromPhoneJid(),
            r = e.attrString("id"),
            i = e.maybeChild("encrypt");
          return i
            ? {
                type: "encrypted",
                from: t,
                externalId: r,
                ciphertext: i.child("enc_p").contentBytes(),
                iv: i.child("enc_iv").contentBytes(),
              }
            : { type: "plaintext", from: t, externalId: r };
        });
      t.default = (0, n.c)("handleMediaRetry", _, (e) => {
        var t = (0, d.v)("ack", {
            id: (0, d.b)(e.externalId),
            to: (0, d.l)(e.from),
            participant: (0, d.j)(e.from),
            class: "notification",
            type: "mediaretry",
          }),
          r = "status" === e.from.type ? m.h : e.from.chat,
          i = (0, y.h)(e.from.author);
        return (0, c.Q)(r, i, e.externalId)
          .then(
            (function () {
              var t = a()(function* (t) {
                if (null != t) {
                  var a = t.msg,
                    n = t.media;
                  if (null != n.lastDownloadAttempt) {
                    if ("encrypted" === e.type) {
                      var d = n.mediaEntries[a.id];
                      if (!d || "mms4" !== d.version)
                        return void __LOG__(
                          3
                        )`handleMediaRetry: no valid entry for media ${n.mediaId} for msg ${a.id}`;
                      var m = yield (0, s.a)(
                          d.cryptoKey,
                          e.externalId,
                          e.iv,
                          e.ciphertext
                        ),
                        y = m.stanzaId,
                        _ = m.directPath;
                      if (y !== e.externalId)
                        return (
                          __LOG__(
                            4
                          )`handleMediaRetry: invalid encrypted stanzaId received ${
                            y ? (0, p.a)(y) : "missing"
                          }-${(0, p.a)(e.externalId)}`,
                          void SEND_LOGS("media-retry-invalid-stanza-id")
                        );
                      __LOG__(2)`mediaretry updating media entry directPath`,
                        yield (0, c.vc)(
                          n.mediaId,
                          a.id,
                          (0, f.j)(d, { directPath: _ })
                        );
                    }
                    return (0, o.b)().waitUntilPersisted(
                      l.e.downloadMedia(a.id, "retry")
                    );
                  }
                  __LOG__(
                    3
                  )`mediaretry received for media ${n.mediaId} but we never tried to download`;
                } else __LOG__(3)`handleMediaRetry: no msg found ${r} ${i} ${(0, p.a)(e.externalId)}`;
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          )
          .then(() => t);
      });
    },
  },
]);
