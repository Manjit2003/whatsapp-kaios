"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [107],
  {
    599: function (e, r, t) {
      t.r(r);
      var s = t(28),
        n = t(4),
        i = t(75),
        a = t(46),
        c = t(29),
        d = t(25),
        y = t(124),
        u = t(377),
        h = new a.a("preKeyDigest", (e) => {
          var r = e.child("digest"),
            t = r
              .child("list")
              .mapChildrenWithTag("id", (e) => e.contentUint(3)),
            s = r.child("skey").child("id").contentUint(3);
          return {
            regId: r.child("registration").contentUint(4),
            type: r.child("type").contentUint(1),
            skeyId: s,
            preKeyIds: t,
            hash: r.child("hash").contentBytes(20),
          };
        });
      function o(e, r) {
        return e.id - r.id;
      }
      r.default = (0, i.c)()
        .finalStep("requestPreKeyDigest", () => {
          var e = (0, n.v)(
            "iq",
            { xmlns: "encrypt", type: "get", to: n.k, id: (0, n.t)() },
            (0, n.v)("digest", null)
          );
          return (0, s.e)(e, h).then((e) => {
            if (!e.success)
              throw (
                (__LOG__(4)`Error while requesting prekey digest`,
                new Error("Error while requesting prekey digest"))
              );
            var r = e.result;
            return (0, c.M)(r.preKeyIds)
              .then((e) => {
                var t = e.regId,
                  s = e.staticPublicKey,
                  n = e.signedPreKey,
                  i = e.preKeys;
                if (t !== r.regId) return { success: !1, reason: "RegId" };
                if (n.id !== r.skeyId)
                  return { success: !1, reason: "SignedPreKeyId" };
                var a = new Set();
                return (
                  i.forEach((e) => {
                    var r = e.id;
                    a.add(r);
                  }),
                  r.preKeyIds.some((e) => !a.has(e))
                    ? { success: !1, reason: "UnknownPreKey" }
                    : (function (e, r, t, s) {
                        var n = new d.a();
                        return (
                          n.writeByteArray(r),
                          n.writeByteArray(t.keyPair.publicKey),
                          n.writeByteArray(t.signature),
                          s.sort(o).forEach((e) => {
                            n.writeByteArray(e.keyPair.publicKey);
                          }),
                          self.crypto.subtle
                            .digest("SHA-1", n.readByteArray())
                            .then((e) => new Uint8Array(e))
                        );
                      })(0, s, n, i).then((e) =>
                        (0, y.c)(e, r.hash)
                          ? { success: !0 }
                          : { success: !1, reason: "HashMismatch" }
                      )
                );
              })
              .then((e) => {
                if (!e.success)
                  return (
                    __LOG__(2)`Digest comparison failed ${e.reason}`,
                    (0, u.default)()
                  );
              });
          });
        })
        .end();
    },
  },
]);
