"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [50],
  {
    557: function (e, a, r) {
      r.r(a),
        r.d(a, "default", function () {
          return w;
        });
      var l = r(88),
        t = r(67),
        n = r(4),
        i = r(102),
        c = r(260),
        o = r(338),
        s = r(29),
        d = r(47),
        _ = r(62),
        u = r(301),
        f = r(17),
        p = r(63),
        v = r(7),
        h = r(6),
        y = r(28),
        g = r(71),
        m = r(30),
        O = r(16),
        E = r(3),
        b = r(12),
        I = r(405),
        C = (r(111), r(203)),
        L = r(134);
      function k() {
        return h.n.get() && (0, C.a)(h.E.get());
      }
      var G = new l.b("callParser", (e) => {
          e.assertTag("call");
          var a = e.mapChildren(o.b);
          if (1 !== a.length)
            throw new Error("expected exactly one child for call");
          return {
            externalId: e.attrString("id"),
            peerJid: e.attrPhoneDeviceJid("from"),
            payload: a[0],
            peerPlatform: e.hasAttr("platform")
              ? e.attrString("platform")
              : null,
            peerAppVersion: e.hasAttr("version")
              ? e.attrString("version")
              : null,
            epochMsec: e.hasAttr("t") ? 1e3 * e.attrInt("t") : 0,
            elapsedMsec: e.hasAttr("e") ? 1e3 * e.attrInt("e") : 0,
            isOffline: e.hasAttr("offline"),
          };
        }),
        D = new l.b("callReceiptParser", (e) => {
          e.assertTag("receipt");
          var a = e.mapChildren(o.b);
          if (1 !== a.length)
            throw new Error("expected exactly one child for call receipt");
          var r = a[0].tag;
          if ("offer" === r || "accept" === r || "reject" === r)
            return {
              externalId: e.attrString("id"),
              type: e.hasAttr("type") ? e.attrString("type") : null,
              peerJid: e.attrPhoneDeviceJid("from"),
              payload: a[0],
            };
          throw new Error("unexpected receipt child tag " + r);
        });
      function P(e) {
        var a = (0, v.o)(e);
        return "phoneUser" === a.jidType ? a.userJid : null;
      }
      function R(e, a, r, l) {
        (0, y.a)(
          (0, n.v)(
            "ack",
            {
              id: (0, n.b)(e),
              to: (0, n.g)(a),
              from: (0, n.g)(h.r.get()),
              class: "call",
              type: (0, n.b)(r),
            },
            l
          )
        );
      }
      function A(e, a, r) {
        var l = r.tag;
        if ("offer" === l || "accept" === l || "reject" === l) {
          var t = r.attrs,
            c = t.find((e) => "call-id" === e.key),
            o = t.find((e) => "call-creator" === e.key),
            s = null;
          o && null != o.value && (s = P(o.value));
          var d = {};
          return (
            (d["call-creator"] =
              null != s
                ? (0, n.g)(s)
                : "offer" === l
                ? (0, n.g)(a)
                : (0, n.g)(h.r.get())),
            null != c && null != c.value
              ? (d["call-id"] = (0, n.b)(c.value))
              : __LOG__(2)`handleCall ${l}, callId is missing`,
            (0, y.a)(
              (0, n.v)(
                "receipt",
                { to: (0, n.g)(a), id: (0, n.b)(e) },
                new n.n(l, d)
              )
            ),
            Promise.resolve()
          );
        }
        if ("terminate" === l && k()) {
          var _ = r.attrs,
            u = _.find((e) => "call-id" === e.key),
            f = _.find((e) => "call-creator" === e.key),
            p = null;
          f && null != f.value && (p = P(f.value));
          var v = null != u ? u.value : null;
          return (0, i.d)().then((r) => {
            var t = null;
            null != r &&
              "evicted" !== r &&
              r.callId === v &&
              (r.audioDuration > 0 || r.videoDuration > 0) &&
              (t = (0, n.v)("terminate", {
                "call-id": (0, n.i)(v),
                "call-creator": (0, n.i)(p),
                audio_duration:
                  r.audioDuration > 0 ? (0, n.f)(r.audioDuration) : n.d,
                video_duration:
                  r.videoDuration > 0 ? (0, n.f)(r.videoDuration) : n.d,
              })),
              R(e, a, l, t);
          });
        }
        return R(e, a, l, null), Promise.resolve();
      }
      var S = new g.a();
      function w(e) {
        var a = e.tag;
        if ("call" === a)
          return (function (e) {
            var a = G.parse(e);
            if ((__LOG__(2)`handleCallStanza start`, a.error))
              return (
                __LOG__(4)`handleCallStanza: failed to parse ${a.error}`,
                Promise.reject("handleCallStanza: failed to parse stanza")
              );
            if (k())
              return S.enqueue(() => {
                __LOG__(2)`handleCallStanza::acknowledge`;
                var e = a.success,
                  r = e.externalId,
                  l = e.peerJid,
                  n = e.payload;
                return A(r, l, n).then(() =>
                  "offer" === n.tag
                    ? ((0, b.d)() || (0, b.b)(),
                      (function (e, a) {
                        var r = a.payload.attrs.find(
                            (e) => "call-id" === e.key
                          ),
                          l = null != r ? r.value : null,
                          n = a.epochMsec;
                        return null == l || null == n
                          ? (__LOG__(
                              4
                            )`Cannot extract required attributes from call offer`,
                            Promise.resolve())
                          : (function (e, a, r) {
                              var l = r.externalId,
                                n = r.payload;
                              if ("offer" !== n.tag)
                                throw new Error(
                                  "maybeDecryptOfferEnc should only be called for offer"
                                );
                              var c = n.children.find((e) => "enc" === e.tag);
                              if (null == c)
                                return (
                                  __LOG__(
                                    2
                                  )`maybeDecryptOfferEnc call offer does not contain a valid <enc />`,
                                  Promise.resolve({
                                    status: "success",
                                    parsedCall: r,
                                  })
                                );
                              var o = c.attrs.find((e) => "type" === e.key),
                                f =
                                  !o ||
                                  ("pkmsg" !== o.value && "msg" !== o.value)
                                    ? null
                                    : o.value;
                              if (null == f)
                                return (
                                  __LOG__(
                                    4
                                  )`maybeDecryptOfferEnc call offer does not contain valid enc type`,
                                  Promise.resolve({
                                    status: "error",
                                    parsedCall: r,
                                  })
                                );
                              var p = 0,
                                v = c.attrs.find((e) => "count" === e.key);
                              if (
                                null != v &&
                                ((p = parseInt(v.value, 10)), Number.isNaN(p))
                              )
                                return (
                                  __LOG__(
                                    4
                                  )`maybeDecryptOfferEnc call offer has an invalid count ${v.value}`,
                                  Promise.resolve({
                                    status: "error",
                                    parsedCall: r,
                                  })
                                );
                              __LOG__(
                                2
                              )`maybeDecryptOfferEnc call offer containing a valid <enc />, decrypting`;
                              var h = {
                                onSuccess(e) {
                                  var a,
                                    r = (0, u.a)(e),
                                    l = (0, t.a)(_.g, r),
                                    n = new Uint8Array(
                                      null == (a = l.call) ? void 0 : a.callKey
                                    );
                                  return (c.content = n), "success";
                                },
                                onDecryptFailure(r) {
                                  var t = (0, L.a)(l);
                                  switch (r) {
                                    case d.b.ERR_DUPLICATE_MESSAGE:
                                      return (
                                        __LOG__(2)`Call ${t} is duplicate`,
                                        "ignore"
                                      );
                                    case d.b.ERR_NO_SESSION:
                                      __LOG__(2)`Call ${t} has no session`;
                                      break;
                                    case d.b.ERR_INVALID_KEY:
                                      __LOG__(2)`Call ${t} has invalid key`;
                                      break;
                                    case d.b.ERR_INVALID_KEY_ID:
                                      __LOG__(2)`Call ${t} has invalid key id`;
                                      break;
                                    case d.b.ERR_INVALID_SIGNED_PRE_KEY:
                                      __LOG__(
                                        2
                                      )`Call ${t} has invalid signed pre key`;
                                      break;
                                    case d.b.ERR_SIGNED_PRE_KEY_ID_MISMATCH:
                                      __LOG__(
                                        2
                                      )`Call ${t} has mismatched signed pre key id`;
                                      break;
                                    case d.b.ERR_SIGNED_PRE_KEY_DESERIALIZATION:
                                      __LOG__(
                                        2
                                      )`Cannot deserialize local signed pre key while processing call ${t}`;
                                      break;
                                    case d.b.ERR_INVALID_ONE_TIME_KEY:
                                      __LOG__(
                                        2
                                      )`Call ${t} has invalid one time key`;
                                      break;
                                    case d.b.ERR_ONE_TIME_KEY_ID_MISMATCH:
                                      __LOG__(
                                        2
                                      )`Call ${t} has mismatched one time key id`;
                                      break;
                                    case d.b.ERR_ONE_TIME_KEY_DESERIALIZATION:
                                      __LOG__(
                                        2
                                      )`Cannot deserialize local one time key while processing call ${t}`;
                                      break;
                                    case d.b.ERR_INVALID_MESSAGE:
                                      __LOG__(2)`Call ${t} has invalid message`;
                                      break;
                                    default:
                                      __LOG__(
                                        2
                                      )`onDecryptFailure TODO: unhandled error code ${r} for call ${t}`;
                                  }
                                  return (
                                    (0, s.H)().then((r) => {
                                      (0, i.m)(a, e, "enc", p + 1, r);
                                    }),
                                    "ignore"
                                  );
                                },
                              };
                              return (0, s.i)(e, f, c.content, h).then((e) => ({
                                status: e,
                                parsedCall: r,
                              }));
                            })(e, l, a).then((a) => {
                              var r = a.status,
                                t = a.parsedCall;
                              "success" === r
                                ? (__LOG__(
                                    2
                                  )`handleIncomingCallOffer::maybeDecryptOfferEnc success`,
                                  (0, c.a)().then((a) => {
                                    var r = (function () {
                                      var e = (0, I.a)();
                                      if (null == e) return !1;
                                      switch (e) {
                                        case "pick":
                                        case "camera-pick":
                                        case "dial":
                                          return !0;
                                        default:
                                          return !1;
                                      }
                                    })();
                                    return "idle" !== a || r
                                      ? (r
                                          ? __LOG__(
                                              2
                                            )`handleIncomingCallOffer mozActivity in progress detected, rejecting the call offer`
                                          : __LOG__(
                                              2
                                            )`handleIncomingCallOffer POTS call detected, rejecting the call offer`,
                                        (function (e, a, r, l) {
                                          return (0, i.m)(
                                            e,
                                            a,
                                            "busy",
                                            0,
                                            0
                                          ).then(() => {
                                            var t = l.peerAppVersion,
                                              n = l.peerPlatform,
                                              c = l.payload.children.some(
                                                (e) => "video" === e.tag
                                              ),
                                              o = (0, v.h)(a);
                                            (0, m.b)().fireAndForget(
                                              O.e.createMissedCallLog(
                                                {
                                                  callId: e,
                                                  peer: o,
                                                  isFromMe: !1,
                                                },
                                                (0, E.j)(r / 1e3)
                                              )
                                            ),
                                              (0, i.j)({
                                                callId: e,
                                                callPeerPlatform: n,
                                                callPeerAppVersion: t,
                                                videoEnabled: c,
                                              });
                                          });
                                        })(l, e, n, t))
                                      : (__LOG__(
                                          2
                                        )`handleIncomingCallOffer no POTS call detected, passing the call offer to the voip stack`,
                                        (function (e, a, r, l) {
                                          var t = (0, v.h)(e);
                                          return (
                                            (0, f.qb)(
                                              {
                                                callId: a,
                                                peer: t,
                                                isFromMe: !1,
                                              },
                                              (0, E.j)(l / 1e3)
                                            ),
                                            (0, p.b)(t).then((e) => {
                                              var a =
                                                  null == e ||
                                                  null == e.phonebookPhone,
                                                l = r.isOffline
                                                  ? (0, b.d)()
                                                    ? 0
                                                    : 1
                                                  : 5;
                                              return (0, i.f)(
                                                {
                                                  peerJid: r.peerJid,
                                                  payload: r.payload,
                                                  peerPlatform: r.peerPlatform,
                                                  peerAppVersion:
                                                    r.peerAppVersion,
                                                  epochMsec: r.epochMsec,
                                                  elapsedMsec: r.elapsedMsec,
                                                  isOffline: r.isOffline,
                                                },
                                                {
                                                  isNotContact: a,
                                                  callWakeupSource: l,
                                                }
                                              ).then(() => {});
                                            })
                                          );
                                        })(e, l, t, n));
                                  }))
                                : __LOG__(
                                    2
                                  )`handleIncomingCallOffer::maybeDecryptOfferEnc status ${r}`;
                            });
                      })(l, e))
                    : (0, i.h)({
                        peerJid: e.peerJid,
                        payload: e.payload,
                        peerPlatform: e.peerPlatform,
                        peerAppVersion: e.peerAppVersion,
                        epochMsec: e.epochMsec,
                        elapsedMsec: e.elapsedMsec,
                        isOffline: e.isOffline,
                      }).then(() => {})
                );
              });
            __LOG__(2)`handleCallStanza::acknowledge when VoIP is unavailable`;
            var r = a.success;
            return A(r.externalId, r.peerJid, r.payload), Promise.resolve();
          })(e);
        if ("receipt" === a)
          return (function (e) {
            var a = D.parse(e);
            if ((__LOG__(2)`handleCallReceipt: start`, a.error))
              return (
                __LOG__(4)`handleCallReceipt: failed to parse ${a.error}`,
                Promise.reject("handleCallReceipt: failed to parse stanza")
              );
            if (k())
              return S.enqueue(() => {
                var e = a.success,
                  r = e.externalId,
                  l = e.type,
                  t = e.peerJid,
                  n = e.payload;
                return (
                  M(r, t, l),
                  (0, i.g)({ peerJid: t, payload: n }).then(() => {})
                );
              });
            var r = a.success,
              l = r.externalId,
              t = r.type;
            return M(l, r.peerJid, t), Promise.resolve();
          })(e);
        throw new Error("unexpected call stanza tag " + a);
      }
      function M(e, a, r) {
        (0, y.a)(
          (0, n.v)("ack", {
            id: (0, n.b)(e),
            to: (0, n.g)(a),
            from: (0, n.g)(h.r.get()),
            class: "receipt",
            type: (0, n.i)(r),
          })
        );
      }
    },
  },
]);
