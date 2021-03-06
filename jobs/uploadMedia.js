"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [24],
  {
    552: function (e, r, t) {
      t.r(r),
        t.d(r, "uploadMedia", function () {
          return x;
        }),
        t.d(r, "checkCiphertextInServer", function () {
          return J;
        }),
        t.d(r, "cipherAndUploadPlaintext", function () {
          return Q;
        });
      var i = t(27),
        a = t.n(i),
        l = t(15),
        u = t(30),
        d = t(75),
        o = t(17),
        s = t(107),
        n = t(2),
        c = t(10),
        p = t(94),
        m = t(34),
        h = t(131),
        v = t(24),
        y = t(86),
        _ = t(3),
        f = t(104),
        b = t(497),
        g = t(7),
        O = t(12),
        M = _.b,
        T = 2 * _.b;
      function k(e) {
        var r = Math.floor(Math.random() * M);
        return null != e && (0, _.n)(e, T + r);
      }
      var L = t(341),
        E = t(16),
        G = t(39),
        x = (0, d.c)()
          .finalStep("encrypt", {
            requirements: [d.d],
            code: (e) => {
              var r = e.result.dbMsg.id,
                t = (0, _.u)();
              return (0, s.j)(r, (r) =>
                (function (e, r, t) {
                  return I.apply(this, arguments);
                })(r, e, t)
              );
            },
            stopRetryIf: {
              timePassedSeconds: _.b,
              appCrashed: !0,
              onStopRetry: (e) =>
                (0, o.dd)(e.result.dbMsg.id, n.a.FAILED).then(() => {}),
            },
          })
          .end();
      function I() {
        return (I = a()(function* (e, r, t) {
          var i = r.result,
            a = r.origin,
            l = i.chat.jid,
            d = i.dbMsg.id,
            s = (0, _.v)(t),
            c = yield (0, o.v)(d);
          if (!c)
            return (
              __LOG__(2)`uploadMedia msg ${d} is gone`, void (0, f.l)(l, a)
            );
          var p = c.msg,
            m = c.media,
            h = c.leavesSystem;
          if (p.type !== n.f.RICH_HSM)
            if ((0, G.k)(p.ack)) __LOG__(2)`uploadMedia already uploaded`;
            else {
              var y = (0, g.y)(l, {
                  user: () => 2,
                  group: () => 3,
                  status: () => 4,
                }),
                O = null != p.forwardOriginalTs,
                M = {
                  overallUploadOrigin: y,
                  overallMediaType: f.a[p.type],
                  overallIsForward: O,
                  overallMediaSize: p.size,
                  overallQueueT: s,
                },
                T = m.mediaId,
                k = yield (0, o.Xc)(T);
              if (!k)
                return (
                  __LOG__(3)`uploadMedia: media was not found`,
                  yield (0, o.dd)(p.id, n.a.CONTENT_GONE),
                  (0, b.a)(
                    Object.assign({}, M, {
                      overallUploadResult: 12,
                      isViewOnce: (0, v.o)(p),
                      uploadSource: p.uploadSource && p.uploadSource,
                    })
                  ),
                  void (0, f.m)({ jid: l, dbMsg: p, origin: a })
                );
              var L = C(r.result);
              if (!L)
                return (
                  __LOG__(4)`uploadMedia both 'to' and 'outgoingTo' are null`,
                  SEND_LOGS("uploadMedia-to-is-null"),
                  yield (0, o.dd)(p.id, n.a.FAILED),
                  (0, b.a)(
                    Object.assign({}, M, {
                      overallUploadResult: 2,
                      isViewOnce: (0, v.o)(p),
                      uploadSource: p.uploadSource && p.uploadSource,
                    })
                  ),
                  void (0, f.m)({ jid: l, dbMsg: p, origin: a })
                );
              var x = { result: "error", ack: n.a.FAILED };
              try {
                x = yield w(e, {
                  msg: p,
                  media: k,
                  leavesSystem: h,
                  args: r,
                  uploadMetric: M,
                  outgoingTo: L,
                });
              } finally {
                x.metric &&
                  (0, b.a)(
                    Object.assign({}, x.metric, {
                      isViewOnce: (0, v.o)(p),
                      uploadSource: p.uploadSource && p.uploadSource,
                    })
                  ),
                  x.thumbMetric &&
                    (0, b.a)(
                      Object.assign({}, x.thumbMetric, {
                        uploadSource: p.uploadSource && p.uploadSource,
                      })
                    ),
                  "error" === x.result
                    ? (yield (0, o.dd)(p.id, x.ack),
                      e.updateUploadStatus(d, {
                        type: "error",
                        error: "unknown",
                      }),
                      (0, f.m)({ jid: l, dbMsg: p, origin: a }))
                    : "disconnected" === x.result
                    ? (yield (0, o.dd)(p.id, n.a.FAILED),
                      e.updateUploadStatus(d, {
                        type: "error",
                        error: "disconnected",
                      }),
                      (0, f.m)({ jid: l, dbMsg: p, origin: a }))
                    : (x.result,
                      yield (0, o.d)(p.id),
                      yield (0, u.b)().waitUntilPersisted(
                        E.e.sendWrittenMsg(
                          p.rowId,
                          r.result.chat.jid,
                          L,
                          x.uploaded,
                          a
                        )
                      ));
              }
            }
          else __LOG__(4)`Tried to upload media of a rich HSM`;
        })).apply(this, arguments);
      }
      function S(e, r) {
        if (!r.validatedTs) return __LOG__(2)`Entry without a validatedTs.`, !1;
        var t =
          !!(0, y.f)(e) &&
          (null == r.mmsThumb || null == r.mmsThumb.directPath);
        return !((null == r.directPath && null == r.url) || t);
      }
      function w(e, r) {
        return U.apply(this, arguments);
      }
      function U() {
        return (U = a()(function* (e, r) {
          var t = r.msg,
            i = r.media,
            a = r.leavesSystem,
            l = r.args,
            u = r.uploadMetric,
            d = i.plaintext;
          if (!d)
            return (
              __LOG__(4)`uploadMedia does not have plaintext`,
              { result: "error", ack: n.a.CONTENT_GONE }
            );
          var h = (0, p.h)(t.type),
            v = H(i, t.id, h);
          if ("error" === v)
            return { result: "error", ack: n.a.CONTENT_UNUPLOADABLE };
          var y = v.maybeValidEntry,
            f = v.mediaKeyReuse,
            b = v.isMsgEntry;
          if (y && S(t, y))
            return (
              __LOG__(
                2
              )`uploadMedia content probably exists on server, so we will optimistically skip upload`,
              yield (0, o.vc)(i.mediaId, t.id, (0, c.u)(y)),
              { result: "success", uploaded: !1, metric: void 0 }
            );
          var g = yield (0, s.b)(h);
          if ("no-hosts" === g) {
            __LOG__(3)`uploadMedia no available hosts`;
            var O = Object.assign({}, u, {
              overallUploadMode: 1,
              overallUploadResult: 17,
            });
            return { result: "error", ack: n.a.FAILED, metric: O };
          }
          if ("disconnected" === g) return { result: "disconnected" };
          var M = new _.e(),
            T = Object.assign({}, u, {
              overallMediaKeyReuse: f,
              overallConnBlockFetchT: g.routesInfo.timeElapsed,
              overallMmsVersion: 4,
            });
          if (y && y.uploadToken)
            return (
              b || __LOG__(2)`uploadMedia repurposing existing media entry`,
              yield (0, o.vc)(i.mediaId, t.id, y),
              a
                ? V(i.mediaId, d, t, h, y, g, M, T)
                : { result: "success", uploaded: !1 }
            );
          var k = (0, m.k)(l.backupKey),
            L = (0, m.k)(l.backupToken);
          return j(i.mediaId, t, d, k, L, a, M, g, T);
        })).apply(this, arguments);
      }
      function j(e, r, t, i, a, l, u, d, o) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = a()(function* (e, r, t, i, a, l, u, d, s) {
          var c = (0, p.h)(r.type),
            m = yield (0, p.d)(t);
          if (!m)
            return (
              __LOG__(3)`uploadMedia plaintext is gone`,
              {
                result: "error",
                ack: n.a.CONTENT_GONE,
                metric: Object.assign({}, s, {
                  overallUploadResult: 11,
                  overallCumT: u.cumulative(),
                  overallT: u.elapsed(),
                  overallIsFinal: !0,
                }),
              }
            );
          var f,
            g,
            O = yield A(m, c, i),
            M = O.ciphertext,
            T = O.ciphertextHash,
            k = O.sidecar,
            L = (0, _.E)(),
            E = {
              version: "mms4",
              type: c,
              ciphertextHash: T,
              sidecar: k,
              size: m.size,
              cryptoKey: i,
              uploadToken: a,
              mediaKeyTs: L,
              creationTs: L,
              validatedTs: _.c,
              isViewOnce: (0, v.o)(r),
            };
          if ((0, y.f)(r)) {
            __LOG__(2)`Media for msg type ${r.type} requires MMS Thumb upload`;
            var G = yield (0, o.N)(r.id);
            if (G) {
              yield R(r, G);
              var x = (0, p.i)(r.type),
                I = yield (0, h.c)(i, x),
                S = I.iv,
                w = I.cipherKey,
                U = I.hmacKey,
                j = yield (0, h.d)(w, S, U, x, G),
                F = j.ciphertext,
                N = j.ciphertextHash;
              (f = F), (g = N), (E.mmsThumb = { ciphertextHash: N });
            }
          }
          if ((yield (0, o.vc)(e, r.id, E), !l))
            return { result: "success", uploaded: !1 };
          var K = (0, b.c)(c, M, a, T, u);
          __LOG__(2)`uploadMedia uploading`;
          var D = yield Y(K, d, 1, s);
          if ("error" === D.result)
            return { result: "error", ack: D.ack, metric: D.metric };
          if (
            (__LOG__(2)`uploadMedia ciphertext successfully uploaded`, !f || !g)
          ) {
            var C = (0, _.E)();
            return (
              yield (0, o.wc)(e, r.id, D.directPath, D.url, C),
              { result: "success", uploaded: !0, metric: D.metric }
            );
          }
          yield (0, o.wc)(e, r.id, D.directPath, D.url);
          var H = D.metric,
            V = yield P(e, r, f, g, { cryptoKey: i, uploadToken: a }, u, s);
          if ("success" === V.result) {
            var q = (0, _.E)();
            yield (0, o.Nb)(e, r.id, q);
          }
          return (V.metric = H), V;
        })).apply(this, arguments);
      }
      function P(e, r, t, i, a, l, u) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = a()(function* (e, r, t, i, a, l, u) {
          var d = (0, p.i)(r.type),
            c = yield (0, s.b)(d);
          if ("no-hosts" === c) {
            __LOG__(3)`uploadMedia no available hosts for thumb`;
            var m = Object.assign({}, u, {
              overallUploadMode: 7,
              overallUploadResult: 17,
            });
            return { result: "error", ack: n.a.FAILED, thumbMetric: m };
          }
          if ("disconnected" === c) return { result: "disconnected" };
          var h = (0, b.c)(d, t, a.uploadToken, i, l);
          __LOG__(2)`uploadMedia: mms thumb uploading`;
          var v = yield Y(h, c, 7, u);
          if ("error" === v.result)
            return { result: "error", ack: v.ack, thumbMetric: v.metric };
          var y = v.directPath;
          return void 0 === y
            ? { result: "error", ack: n.a.FAILED, thumbMetric: v.metric }
            : (yield (0, o.yc)(e, r.id, y),
              { result: "success", uploaded: !0, thumbMetric: v.metric });
        })).apply(this, arguments);
      }
      function R(e, r) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = a()(function* (e, r) {
          if ("mms" !== e.hasPreview) {
            var t,
              i,
              a,
              u = e.id;
            if (null != (0, l.s)(u)) t = "skip";
            else {
              var d = yield (0, O.e)("page", "computeMicroThumb", {
                fullThumb: r,
              });
              (t = d.microThumb),
                (a = d.fullThumbWidth),
                (i = d.fullThumbHeight);
            }
            var s = yield (0, p.e)(r);
            yield (0, o.pc)(u, s, t, { blob: r, height: i, width: a });
          }
        })).apply(this, arguments);
      }
      function A(e, r, t) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = a()(function* (e, r, t) {
          __LOG__(2)`_computeCiphertext ciphering`;
          var i = yield (0, h.c)(t, r),
            a = i.iv,
            l = i.cipherKey,
            u = i.hmacKey,
            d = yield (0, h.d)(l, a, u, r, e);
          return {
            ciphertext: d.ciphertext,
            ciphertextHash: d.ciphertextHash,
            sidecar: d.sidecar,
          };
        })).apply(this, arguments);
      }
      function C(e) {
        if (e.outgoingTo) return e.outgoingTo;
        var r = e.to;
        return r ? { to: r, identityIds: new Map() } : void 0;
      }
      function H(e, r, t) {
        var i,
          a,
          l = e.mediaEntries[r];
        if (l) {
          if ("mms4" !== l.version || void 0 === l.validatedTs)
            return (
              __LOG__(4)`uploadMedia can not upload non-mms4 message`, "error"
            );
          k(l.mediaKeyTs) && (i = l), (a = 1);
        } else {
          var u = (function (e, r) {
            for (
              var t = (0, L.b)((0, p.f)(r)),
                i = (0, c.x)(e),
                a = null,
                l = !1,
                u = 0;
              u < i.length;
              ++u
            ) {
              var d = i[u];
              if (d && "mms4" === d.version) {
                var o = d.validatedTs;
                if (
                  void 0 !== o &&
                  (0, p.a)(d.type) === (0, p.a)(r) &&
                  (!t || d.sidecar) &&
                  (null == a ||
                    (t && !a.sidecar) ||
                    (d.uploadToken && !a.uploadToken) ||
                    (d.mmsThumb && !a.mmsThumb) ||
                    null == a.validatedTs ||
                    o > a.validatedTs)
                ) {
                  if (!k(d.mediaKeyTs)) {
                    l = !0;
                    continue;
                  }
                  a = d;
                }
              }
            }
            return a
              ? { type: "ok", entry: a }
              : { type: "no-suitable-entry", keyExpired: l };
          })(e.mediaEntries, t);
          "ok" === u.type
            ? ((i = u.entry), (a = 3))
            : (u.type, (a = u.keyExpired ? 2 : 1));
        }
        return { maybeValidEntry: i, mediaKeyReuse: a, isMsgEntry: null != l };
      }
      function V(e, r, t, i, a, l, u, d) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = a()(function* (e, r, t, i, a, l, u, d) {
          var s,
            c,
            m,
            v,
            f,
            b,
            g = { result: "success", uploaded: !1 },
            O = { result: "success", uploaded: !1 };
          if (null == a.directPath && null == a.url) {
            var M = a.ciphertextHash;
            g = yield z(e, r, t, M, a, l, u, d);
          }
          if ((0, y.f)(t) && (!a.mmsThumb || null == a.mmsThumb.directPath)) {
            var T;
            __LOG__(2)`MMS Thumbnail upload required`;
            var k = null == (T = a.mmsThumb) ? void 0 : T.ciphertextHash;
            if (k) O = yield $(e, t, k, a, u, d);
            else {
              __LOG__(
                2
              )`entry for ${t.id} missing mms thumb info when expected.`;
              var L = yield (0, o.N)(t.id);
              if (L) {
                yield R(t, L);
                var E = (0, p.i)(t.type),
                  G = yield (0, h.c)(a.cryptoKey, E),
                  x = G.iv,
                  I = G.cipherKey,
                  S = G.hmacKey,
                  w = yield (0, h.d)(I, x, S, E, L),
                  U = w.ciphertext,
                  j = w.ciphertextHash;
                yield (0, o.xc)(e, t.id, j), (O = yield P(e, t, U, j, a, u, d));
              }
            }
          }
          if ("success" === g.result && "success" === O.result) {
            var F = g.uploaded || O.uploaded;
            __LOG__(2)`uploadMedia all content has been uploaded`;
            var N = (0, _.E)();
            return (0, o.Nb)(e, t.id, N).then(() => {
              var e, r;
              return {
                result: "success",
                uploaded: F,
                metric: null == (e = g) ? void 0 : e.metric,
                thumbMetric: null == (r = O) ? void 0 : r.metric,
              };
            });
          }
          return "error" === g.result || "error" === O.result
            ? (__LOG__(
                2
              )`uploadMedia found error when checking with server. aborting upload`,
              {
                result: "error",
                ack:
                  (null == (s = g) ? void 0 : s.ack) ||
                  (null == (c = O) ? void 0 : c.ack) ||
                  n.a.FAILED,
                metric: null == (m = g) ? void 0 : m.metric,
                thumbMetric: null == (v = O) ? void 0 : v.metric,
              })
            : (g.result,
              O.result,
              __LOG__(2)`uploadMedia disconnected from server. aborting upload`,
              {
                result: "disconnected",
                metric: null == (f = g) ? void 0 : f.metric,
                thumbMetric: null == (b = O) ? void 0 : b.metric,
              });
        })).apply(this, arguments);
      }
      function z(e, r, t, i, a, l, u, d) {
        var s = (0, p.h)(t.type);
        return (
          __LOG__(2)`Checking if media already exists on server`,
          J(i, a.uploadToken, s, l, u, 1, d).then((i) =>
            "needs-upload" === i.result
              ? (__LOG__(2)`uploadMedia uploading media`,
                Q(
                  s,
                  a.cryptoKey,
                  a.uploadToken,
                  () => (0, p.d)(r),
                  l,
                  u,
                  1,
                  i.metric
                ).then((r) =>
                  "uploaded" === r.result
                    ? (0, o.wc)(e, t.id, r.directPath, r.url).then(() => ({
                        result: "success",
                        uploaded: !0,
                        metric: i.metric,
                      }))
                    : r
                ))
              : "success" === i.result
              ? (0, o.wc)(e, t.id, i.directPath, i.url).then(() => ({
                  result: "success",
                  uploaded: !1,
                  metric: i.metric,
                }))
              : i
          )
        );
      }
      function $(e, r, t, i, a, l) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = a()(function* (e, r, t, i, a, l) {
          var u = (0, p.i)(r.type),
            d = yield (0, s.b)(u);
          if ("no-hosts" === d) {
            __LOG__(3)`uploadMedia no available hosts`;
            var c = Object.assign({}, l, {
              overallUploadMode: 7,
              overallUploadResult: 17,
            });
            return { result: "error", ack: n.a.FAILED, metric: c };
          }
          return "disconnected" === d
            ? { result: "disconnected" }
            : (__LOG__(2)`Checking if mms thumb already exists on server`,
              J(t, i.uploadToken, u, d, a, 7, l).then((t) =>
                "needs-upload" === t.result
                  ? (__LOG__(2)`uploadMedia uploading media thumb`,
                    Q(
                      u,
                      i.cryptoKey,
                      i.uploadToken,
                      () => (0, o.N)(r.id),
                      d,
                      a,
                      7,
                      t.metric
                    ).then((t) => {
                      if ("uploaded" === t.result) {
                        var i = t.directPath;
                        return void 0 === i
                          ? {
                              result: "error",
                              ack: n.a.FAILED,
                              metric: t.metric,
                            }
                          : (0, o.yc)(e, r.id, i).then(() => ({
                              result: "success",
                              uploaded: !0,
                              metric: t.metric,
                            }));
                      }
                      return t;
                    }))
                  : "success" === t.result && t.directPath
                  ? (0, o.yc)(e, r.id, t.directPath).then(() => ({
                      result: "success",
                      uploaded: !1,
                      metric: t.metric,
                    }))
                  : t
              ));
        })).apply(this, arguments);
      }
      function J(e, r, t, i, a, l, u) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = a()(function* (e, r, t, i, a, l, u) {
          var d = (0, b.b)(e, r, t, a),
            o = yield i.run(
              d,
              Object.assign({}, u, {
                overallUploadMode: l,
                overallLastUploadRetryPhase: 1,
              })
            );
          if (null == o)
            return (
              __LOG__(3)`uploadMedia resume check exhausted available retries`,
              { result: "error", ack: n.a.FAILED }
            );
          var c = o.result,
            p = o.metric;
          return "found" === c.status
            ? {
                result: "success",
                directPath: c.directPath,
                url: c.url,
                uploaded: !1,
                metric: Object.assign({}, p, {
                  overallIsFinal: !0,
                  overallUploadResult: 3,
                  overallMediaKeyReuse: 3,
                }),
              }
            : "auth-expired" === c.status
            ? ((0, s.l)(),
              {
                result: "error",
                ack: n.a.FAILED,
                metric: Object.assign({}, p, {
                  overallUploadResult: 17,
                  overallIsFinal: !0,
                }),
              })
            : "throttled" === c.status || "request-error" === c.status
            ? {
                result: "error",
                ack: n.a.FAILED,
                metric: Object.assign({}, p, {
                  overallUploadResult: "throttled" === c.status ? 19 : 2,
                  overallIsFinal: !0,
                }),
              }
            : (c.status,
              __LOG__(
                2
              )`checkCiphertextInServer content is gone from server. Proceed with reupload`,
              { result: "needs-upload", metric: p });
        })).apply(this, arguments);
      }
      function Q(e, r, t, i, a, l, u, d) {
        return X.apply(this, arguments);
      }
      function X() {
        return (X = a()(function* (e, r, t, i, a, l, u, d) {
          var o = yield i();
          if (!o)
            return (
              __LOG__(3)`uploadMedia plaintext is gone`,
              {
                result: "error",
                ack: n.a.CONTENT_GONE,
                metric: Object.assign({}, d, {
                  overallUploadMode: u,
                  overallUploadResult: 11,
                  overallCumT: l.cumulative(),
                  overallT: l.elapsed(),
                  overallIsFinal: !0,
                }),
              }
            );
          var s = yield A(o, e, r),
            c = s.ciphertext,
            p = s.ciphertextHash;
          return Y((0, b.c)(e, c, t, p, l), a, u, d);
        })).apply(this, arguments);
      }
      function Y(e, r, t, i) {
        return r
          .run(
            e,
            Object.assign({}, i, {
              overallLastUploadRetryPhase: 2,
              overallUploadMode: t,
            })
          )
          .then((e) => {
            if (!e)
              return (
                __LOG__(3)`uploadMedia retries exhausted`,
                { result: "error", ack: n.a.FAILED }
              );
            var r = e.result,
              t = e.metric;
            if ("ok" === r.type)
              return {
                result: "uploaded",
                directPath: r.directPath,
                url: r.url,
                metric: Object.assign({}, t, {
                  overallUploadResult: 1,
                  overallIsFinal: !0,
                }),
              };
            r.type;
            var i = Object.assign({}, t, {
              overallUploadResult: "throttled" === r.error ? 19 : 9,
              overallIsFinal: !0,
            });
            return (
              __LOG__(3)`uploadMedia upload failed ${r.error}`,
              "payload-too-large" === r.error
                ? { result: "error", ack: n.a.CONTENT_TOO_BIG, metric: i }
                : { result: "error", ack: n.a.FAILED, metric: i }
            );
          });
      }
    },
  },
]);
