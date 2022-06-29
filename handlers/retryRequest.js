"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [66],
  {
    556: function (e, t, n) {
      n.r(t);
      var r = n(27),
        i = n.n(r),
        d = n(9),
        s = n.n(d),
        a = n(88),
        l = n(360),
        o = n(7),
        y = n(11),
        u = n(17),
        c = n(199),
        h = n(29),
        _ = n(349),
        f = n(4),
        p = n(28),
        v = n(150),
        g = n(111),
        I = n(168),
        m = n(288),
        R = n(77),
        b = n(39),
        k = n(134),
        G = new a.b("incomingRetryReceipt", (e) => {
          e.assertTag("receipt"),
            e.assertAttr("type", "retry"),
            e.hasAttr("to") && (0, l.a)(e, "to");
          var t = e.child("registration").contentUint(4),
            n = null;
          if (e.hasChild("keys")) {
            var r = e.child("keys"),
              i = r.child("key"),
              d = r.child("skey"),
              s = r.hasChild("device-identity")
                ? (0, g.d)(r.child("device-identity").contentBytes())
                : null,
              a = r.child("type").contentUint(1),
              o = r.child("identity").contentBytes(32);
            n = {
              identity: o,
              info: {
                regId: t,
                identity: q(a, o),
                oneTimeKey: {
                  id: i.child("id").contentUint(3),
                  publicKey: q(a, i.child("value").contentBytes(32)),
                },
                signedKey: {
                  id: d.child("id").contentUint(3),
                  publicKey: q(a, d.child("value").contentBytes(32)),
                  signature: d.child("signature").contentBytes(64),
                },
              },
              signedDeviceIdentity: s,
            };
          }
          var y = e.child("retry");
          return {
            stanzaId: e.attrString("id"),
            externalId: y.attrString("id"),
            from: e.attrFromPhoneJid(),
            ts: e.attrTime("t"),
            retryCount: y.hasAttr("count") ? y.attrInt("count") : 0,
            offline: e.hasAttr("offline"),
            regId: t,
            keys: n,
          };
        });
      function L(e, t) {
        var n = (0, R.c)(t);
        return null == (null == n ? void 0 : n[e])
          ? "encrypt"
          : null != n[e][b.a.RECEIVED]
          ? "encryptIfIdentityIdMatches"
          : "encrypt";
      }
      function O() {
        return (O = i()(function* (e, t, n, r) {
          var i,
            d = e.author;
          __LOG__(
            2
          )`sendRequestedRetryMsg jid=${(0, f.s)(e)}, author=${d} for ${t.dbMsg.externalId}`;
          var s = t.dbMsg,
            a = (0, o.h)(d),
            l = null;
          if ("status" === t.type) {
            var y = t.dbMsg,
              u = t.mediaInfo;
            l = yield (0, m.b)(a, y, u);
          } else {
            var h = t.dbMsg,
              v = t.mediaInfo;
            l = yield (0, I.e)(
              a,
              h,
              v,
              t.dbMsg.quoted ? { preview: t.quotePreview } : null
            );
          }
          var g,
            R = null == (i = n.identityIds) ? void 0 : i.get(d);
          g =
            "encrypt" ===
              (null == R
                ? "encrypt"
                : (0, o.r)(d)
                ? L(a, n)
                : "encryptIfIdentityIdMatches") || null == R
              ? yield (0, _.e)(d, l, r)
              : yield (0, _.f)({
                  jid: d,
                  proto: l,
                  identityId: R,
                  retryCount: r,
                });
          var b = (0, k.a)(s.externalId);
          if (null != g) {
            var G = g,
              O = G.type,
              q = G.ciphertext,
              M = (0, f.v)(
                "message",
                {
                  id: (0, f.b)(s.externalId),
                  to: (0, f.l)(e),
                  participant: (0, f.j)(e),
                  type: (0, c.b)(s),
                  edit: (0, _.a)(s),
                },
                (0, _.g)(s),
                (0, _.h)(s),
                (0, _.i)(s),
                (0, f.v)(
                  "enc",
                  {
                    v: (0, f.b)("2"),
                    type: O,
                    count: (0, f.f)(r),
                    mediatype: (0, c.a)(s),
                  },
                  q
                )
              );
            __LOG__(2)`sendRequestedRetryMsg sending ${b}`,
              yield (0, p.l)(M, {
                id: s.externalId,
                class: "message",
                from: (0, f.s)(e),
                participant: (0, f.r)(e),
              }),
              __LOG__(2)`sendRequestedRetryMsg success ${b}`;
          } else __LOG__(2)`sendRequestedRetryMsg encryption failed due to identityId mismatch: ${b}`;
        })).apply(this, arguments);
      }
      function q(e, t) {
        var n = new Uint8Array(1 + t.length);
        return (n[0] = e), n.set(t, 1), n;
      }
      t.default = (0, a.c)("handleRetryRequest", G, (e) => {
        var t = e.from,
          n = e.externalId,
          r = (0, f.v)("ack", {
            id: (0, f.b)(e.stanzaId),
            to: (0, f.l)(t),
            participant: (0, f.j)(t),
            class: "receipt",
            type: "retry",
          });
        if (e.retryCount >= 5)
          return (
            __LOG__(
              2
            )`handleRetryRequest refusing retry attempt #${e.retryCount}`,
            r
          );
        var i = t.author,
          d = "status" === t.type ? y.h : t.chat;
        return (0, u.U)("retry", d, i, n)
          .then((n) => {
            if (n.error)
              return (
                __LOG__(2)`handleRetryRequest msg retry not authorized`,
                void (
                  "error-unknown-device" === n.error &&
                  WAM.log("regular", 2178, void 0, [
                    1,
                    0,
                    (0, o.r)(i) ? 1 : 2,
                    2,
                    1,
                    e.offline,
                  ])
                )
              );
            var r = n.dbMsg,
              a = (0, h.F)(i).then((t) => {
                if (e.keys) {
                  var n = {
                    jid: i,
                    identity: e.keys.identity,
                    info: e.keys.info,
                  };
                  if ((0, o.r)(i)) return (0, h.f)(n).then(() => !0);
                  var r = (0, o.e)((0, o.h)(i));
                  return (0, v.ensureE2eSession)(r)
                    .then(() => (0, h.w)(r))
                    .then((t) => {
                      var r;
                      if (!t)
                        return (
                          __LOG__(
                            3
                          )`Primary identity is missing even after ensureE2eSession`,
                          SEND_LOGS(
                            "no-primary-identity-after-ensureE2eSession"
                          ),
                          !1
                        );
                      var d =
                        null == (r = e.keys) ? void 0 : r.signedDeviceIdentity;
                      return d
                        ? (0, g.g)(i, d, n.identity, t).then((e) =>
                            e
                              ? (0, h.g)(n, {
                                  rawId: e.rawId,
                                  keyIndex: e.keyIndex,
                                }).then(() => !0)
                              : (__LOG__(
                                  3
                                )`establishE2eSessionForCompanionDevice failed to verify received ADV object`,
                                !1)
                          )
                        : (__LOG__(
                            3
                          )`no device-identity provided for companion device msg retry`,
                          SEND_LOGS("no-device-identity-companion-msg-retry"),
                          !1);
                    });
                }
                return (
                  !t ||
                  t === e.regId ||
                  (__LOG__(2)`handleRetryRequest delete session`,
                  (0, h.k)(i).then(() => !0))
                );
              }),
              l = (0, o.a)(d),
              y = l ? (0, u.Wb)(l, i) : null;
            return Promise.all([a, y]).then((n) => {
              if (s()(n, 1)[0])
                return (0, u.S)(d, r.rowId).then((n) => {
                  if (null != n) {
                    var r = n.msgInfo,
                      i = n.receipt;
                    if (null != r) {
                      if (null != i)
                        return (function (e, t, n, r) {
                          return O.apply(this, arguments);
                        })(t, r, i, e.retryCount);
                      __LOG__(2)`handleRetryRequest receipt gone`;
                    } else __LOG__(2)`handleRetryRequest message gone`;
                  } else __LOG__(2)`handleRetryRequest result missing`;
                });
              __LOG__(
                2
              )`handleRetryRequest reject retry request due to a problem with keys node`;
            });
          })
          .then(() => r);
      });
    },
  },
]);
