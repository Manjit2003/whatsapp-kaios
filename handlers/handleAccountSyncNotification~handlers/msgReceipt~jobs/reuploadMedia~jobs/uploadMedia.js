"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [5],
  {
    497: function (e, r, t) {
      t.d(r, "a", function () {
        return T;
      }),
        t.d(r, "c", function () {
          return f;
        }),
        t.d(r, "b", function () {
          return h;
        });
      var a = t(27),
        l = t.n(a),
        o = t(3),
        s = t(35),
        u = t(43),
        n = t(28),
        i = t(4),
        d = new (t(46).a)("resumeCheck", (e) => {
          var r = e.child("resume");
          return "complete" === r.attrString("resume")
            ? {
                status: "found",
                url: r.maybeAttrString("url") || void 0,
                directPath: r.maybeAttrString("direct_path") || void 0,
              }
            : { status: "not-found" };
        }),
        c = t(94),
        p = t(6),
        v = t(224),
        m = t(38);
      function T(e) {
        e &&
          null != e.overallUploadResult &&
          null != e.overallMediaType &&
          WAM.log("regular", 1588, void 0, [
            43,
            0,
            e.connectionType,
            34,
            2,
            e.debugMediaException,
            32,
            2,
            e.debugMediaIp,
            33,
            2,
            e.debugUrl,
            45,
            3,
            e.estimatedBandwidth,
            28,
            0,
            e.finalizeConnectT,
            31,
            0,
            e.finalizeHttpCode,
            30,
            1,
            e.finalizeIsReuse,
            29,
            0,
            e.finalizeNetworkT,
            49,
            1,
            e.isViewOnce,
            46,
            0,
            e.mediaId,
            42,
            0,
            e.networkStack,
            4,
            0,
            e.overallAttemptCount,
            10,
            0,
            e.overallConnBlockFetchT,
            41,
            2,
            e.overallConnectionClass,
            37,
            0,
            e.overallCumT,
            38,
            0,
            e.overallCumUserVisibleT,
            5,
            2,
            e.overallDomain,
            50,
            0,
            e.overallEncryptT,
            36,
            1,
            e.overallIsFinal,
            16,
            1,
            e.overallIsForward,
            13,
            1,
            e.overallIsManual,
            11,
            0,
            e.overallLastUploadRetryPhase,
            40,
            0,
            e.overallMediaKeyReuse,
            7,
            3,
            e.overallMediaSize,
            1,
            0,
            e.overallMediaType,
            6,
            0,
            e.overallMmsVersion,
            12,
            0,
            e.overallOptimisticFlag,
            9,
            0,
            e.overallQueueT,
            3,
            0,
            e.overallRetryCount,
            8,
            0,
            e.overallT,
            15,
            0,
            e.overallTranscodeT,
            39,
            0,
            e.overallUploadMode,
            44,
            0,
            e.overallUploadOrigin,
            35,
            0,
            e.overallUploadResult,
            14,
            0,
            e.overallUserVisibleT,
            17,
            0,
            e.resumeConnectT,
            20,
            0,
            e.resumeHttpCode,
            19,
            1,
            e.resumeIsReuse,
            18,
            0,
            e.resumeNetworkT,
            27,
            3,
            e.uploadBytesTransferred,
            22,
            0,
            e.uploadConnectT,
            25,
            0,
            e.uploadHttpCode,
            24,
            1,
            e.uploadIsReuse,
            26,
            1,
            e.uploadIsStreaming,
            23,
            0,
            e.uploadNetworkT,
            21,
            0,
            e.uploadResumePoint,
            48,
            0,
            e.uploadSource,
            47,
            2,
            e.usedFallbackHint,
          ]);
      }
      function f(e, r, t, a, u) {
        return (function () {
          var n = l()(function* (l, n, i, d) {
            var c = (0, o.u)(),
              p = C(e, t, a, l.domain, n),
              f = Object.assign({}, d, {
                overallDomain: l.domain,
                overallConnectionClass: l.class,
                overallRetryCount: i,
              }),
              h = yield (0, s.d)(p, { body: r }),
              b = (0, o.v)(c);
            if ("ok" === h.type)
              return (0, m.b)({
                result: {
                  type: "ok",
                  directPath: h.json.direct_path,
                  url: h.json.url,
                  handle: h.json.handle,
                },
                metric: Object.assign({}, f, {
                  uploadNetworkT: b,
                  uploadHttpCode: s.a.OK,
                  overallCumT: u.cumulative(),
                  overallT: u.elapsed(),
                }),
              });
            if ("http-error" === h.type) {
              var k,
                y = h.code;
              if (y === s.a.UNSUPPORTED_MEDIA_TYPE) k = "invalid-hash";
              else if (y === s.a.PAYLOAD_TOO_LARGE) k = "payload-too-large";
              else if (y === s.a.INSUFFICIENT_STORAGE) k = "throttled";
              else {
                if (y === s.a.REQUEST_TIMEOUT || y >= 500)
                  return (
                    T(
                      Object.assign({}, f, {
                        overallUploadResult: y >= 500 ? 13 : 2,
                        overallIsFinal: i === v.b - 1,
                        uploadHttpCode: y,
                        uploadNetworkT: b,
                      })
                    ),
                    u.reset(),
                    (0, m.a)({ progressMade: !0 })
                  );
                if (!(y >= 400 && y < 500))
                  throw new Error("upload: unexpected http code " + y);
                k = "request-error";
              }
              return (0, m.b)({
                result: { type: "error", error: k },
                metric: Object.assign({}, f, {
                  overallCumT: u.cumulative(),
                  overallT: u.elapsed(),
                  uploadNetworkT: b,
                  uploadHttpCode: y,
                }),
              });
            }
            T(
              Object.assign({}, f, {
                overallUploadResult: 14,
                overallCumT: u.cumulative(),
                overallT: u.elapsed(),
                overallIsFinal: i === v.b - 1,
                uploadNetworkT: b,
              })
            ),
              u.reset();
            var g = "body-network-error" === h.type;
            return (0, m.a)({ progressMade: g });
          });
          return function (e, r, t, a) {
            return n.apply(this, arguments);
          };
        })();
      }
      function h(e, r, t, a) {
        var f = p.E.get().mmsResumeCheckChatd;
        return (function () {
          var p = l()(function* (l, p, h, b) {
            var k = (0, o.u)();
            if (f) {
              var y = yield (function (e, r, t, a) {
                var l = (0, u.e)(r),
                  o = (0, u.e)(t),
                  s = (0, i.v)(
                    "iq",
                    { to: i.k, xmlns: "w:m", type: "get", id: (0, i.t)() },
                    (0, i.v)("resume_check", {
                      media_type: (0, i.b)(e),
                      hash: (0, i.b)(l),
                      token: (0, i.b)(o),
                      auth: (0, i.b)(a),
                      resume: (0, i.f)(0),
                    })
                  );
                return (0, n.e)(s, d).then((e) =>
                  e.success
                    ? e.result
                    : 401 === e.errorCode
                    ? { status: "auth-expired" }
                    : (__LOG__(
                        3
                      )`resumeCheck failed to perform resume check through chat server`,
                      null)
                );
              })((0, c.f)(t), e, r, p);
              if (null != y)
                return (0, m.b)({
                  result: y,
                  metric: Object.assign({}, b, {
                    resumeNetworkT: (0, o.v)(k),
                    overallT: a.elapsed(),
                    overallCumT: a.cumulative(),
                    overallRetryCount: h,
                  }),
                });
            }
            var g = C(t, r, e, l.domain, p, "resume"),
              O = Object.assign({}, b, {
                overallRetryCount: h,
                overallDomain: l.domain,
                overallConnectionClass: l.class,
              }),
              w = yield (0, s.d)(g),
              R = (0, o.v)(k);
            if ("ok" === w.type) {
              var I =
                "complete" === w.json.resume
                  ? {
                      status: "found",
                      directPath: w.json.direct_path,
                      url: w.json.url,
                    }
                  : { status: "not-found" };
              return (0, m.b)({
                result: I,
                metric: Object.assign({}, O, {
                  resumeNetworkT: (0, o.v)(k),
                  resumeHttpCode: s.a.OK,
                  overallCumT: a.cumulative(),
                  overallT: a.elapsed(),
                }),
              });
            }
            if ("http-error" === w.type) {
              var U,
                E = w.code;
              if (E === s.a.NOT_FOUND || E === s.a.GONE)
                U = { status: "not-found" };
              else if (E === s.a.UNAUTHORIZED) U = { status: "auth-expired" };
              else if (E === s.a.INSUFFICIENT_STORAGE)
                U = { status: "throttled" };
              else {
                if (E === s.a.REQUEST_TIMEOUT || E >= 500)
                  return (
                    T(
                      Object.assign({}, O, {
                        overallUploadResult: E >= 500 ? 13 : 2,
                        overallIsFinal: h === v.b - 1,
                        resumeHttpCode: E,
                        resumeNetworkT: R,
                      })
                    ),
                    a.reset(),
                    (0, m.a)({ progressMade: !0 })
                  );
                if (!(E >= 400 && E < 500))
                  throw new Error("resumeCheck: unexpected http code " + E);
                U = { status: "request-error" };
              }
              return (0, m.b)({
                result: U,
                metric: Object.assign({}, O, {
                  resumeHttpCode: E,
                  resumeNetworkT: R,
                }),
              });
            }
            T(
              Object.assign({}, O, {
                overallUploadResult: 14,
                overallIsFinal: h === v.b - 1,
                uploadNetworkT: R,
              })
            ),
              a.reset();
            var N = "body-network-error" === w.type;
            return (0, m.a)({ progressMade: N });
          });
          return function (e, r, t, a) {
            return p.apply(this, arguments);
          };
        })();
      }
      function C(e, r, t, a, l, o) {
        var n = (0, u.e)(t),
          i = { auth: l, token: (0, u.e)(r) };
        return (
          "resume" === o && (i.resume = 1),
          (0, s.c)("https://" + a, `${(0, c.c)(e)}/${n}`, i)
        );
      }
    },
  },
]);
