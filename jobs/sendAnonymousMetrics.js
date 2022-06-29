"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [115],
  {
    647: function (e, r, t) {
      t.r(r);
      var s = t(27),
        n = t.n(s),
        a = t(43),
        u = t(129),
        o = t(235),
        i = t(3),
        l = t(170),
        c = "https://dit.whatsapp.net/deidentified_telemetry",
        d = "245118376424571|3e7d275052f1522bf3200afcf53841a7",
        p = "WAMEventBuffer.dat",
        f = 111e3,
        v = 3067002,
        h = 3067003,
        y = 3067004;
      function m(e) {
        return {
          result: e.result,
          httpResponseCode: e.httpResponseCode,
          uploadTime: (0, i.v)(e.uploadStartTime),
        };
      }
      function _() {
        return (_ = n()(function* (e, r, t, s) {
          if ((yield (0, l.e)()) === d)
            return (
              __LOG__(
                2
              )`Removing private stats buffer without submitting it (kill switch)`,
              (0, l.h)(t.key).then(() => {
                e();
              })
            );
          var n = (0, i.u)(),
            o = yield s();
          if (null == o)
            return (
              __LOG__(4)`Couldn't get token to submit a private stats buffer`,
              void e()
            );
          var f = new FormData();
          f.append("access_token", d);
          var v = yield (0, u.d)(o.sharedSecret, t.content),
            h = `${(0, a.e)(o.token, !0)}+${(0, a.e)(v, !0)}`;
          f.append("credential", h),
            f.append(
              "message",
              new Blob([t.content], { type: "application/octet-stream" }),
              p
            ),
            f.append("meta_data", JSON.stringify({ t: (0, i.E)(), p: 0 }));
          var y,
            m = {
              method: "POST",
              body: f,
              "Content-Type": "multipart/form-data",
            };
          try {
            y = yield fetch(c, m);
          } catch (e) {
            return (
              __LOG__(3)`Upload of a private stats buffer failed: ${e}`,
              void r({ uploadStartTime: n, result: "error-other" })
            );
          }
          var _ = y.status,
            g = (r) => {
              e({ uploadStartTime: n, httpResponseCode: _, result: r });
            },
            S = (e) => {
              r({ uploadStartTime: n, httpResponseCode: _, result: e });
            };
          switch (_) {
            case 200:
              return (0, l.h)(t.key).then(() => {
                g("success");
              });
            case 429:
              return void g("error-server-other");
            case 401:
              return Promise.all([(0, l.f)(d), (0, l.h)(t.key)]).then(() => {
                g("error-access-token");
              });
            case 400:
              var w = yield b(y),
                k = w.result,
                L = w.shouldRetry,
                O = { uploadStartTime: n, httpResponseCode: _, result: k };
              return void ("retry" === L ? r(O) : e(O));
            case 500:
              return void S("error-server-other");
          }
          __LOG__(
            3
          )`Unsupported response status code from PrivateStats upload request: ${_}`,
            S("error-other");
        })).apply(this, arguments);
      }
      function b(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = n()(function* (e) {
          var r = yield e.json().catch(() => {});
          if ("object" != typeof r)
            return (
              __LOG__(
                3
              )`Unable to parse error response 400 from PrivateStats upload request or parsed response is not an object`,
              { result: "error-other", shouldRetry: "retry" }
            );
          var t = r.error;
          if ("object" != typeof t)
            return (
              __LOG__(
                3
              )`Incorrect or missing error entry in the error response 400 from PrivateStats upload request`,
              { result: "error-other", shouldRetry: "retry" }
            );
          var s = t.code,
            n = t.error_subcode;
          if ("number" != typeof s || "number" != typeof n)
            return (
              __LOG__(
                3
              )`Incorrect code or subcode in the error response 400 from PrivateStats upload request`,
              { result: "error-other", shouldRetry: "retry" }
            );
          switch (s) {
            case 9:
              return { result: "error-server-other", shouldRetry: "no-retry" };
            case f:
              switch (n) {
                case v:
                  return { result: "error-parsing", shouldRetry: "retry" };
                case h:
                  return { result: "error-decoding", shouldRetry: "retry" };
                case y:
                  return { result: "error-credential", shouldRetry: "retry" };
                default:
                  return (
                    __LOG__(
                      3
                    )`Unsupported subcode value in the error response 400 from PrivateStats upload request: ${n}`,
                    { result: "error-other", shouldRetry: "retry" }
                  );
              }
            default:
              return (
                __LOG__(
                  3
                )`Unsupported code value in the error response 400 from PrivateStats upload request: ${s}`,
                { result: "error-other", shouldRetry: "retry" }
              );
          }
        })).apply(this, arguments);
      }
      var S = t(75),
        w = t(71),
        k = t(25),
        L = t(28),
        O = t(109),
        R = t(44),
        A = t(99);
      function P(e) {
        (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
      }
      var T = t(4),
        G = new (t(46).a)("issuePrivateStatsToken", (e) => {
          var r = e.child("sign_credential");
          return {
            signedCredential: r.child("signed_credential").contentBytes(),
            acsPublicKey: r.child("acs_public_key").contentBytes(),
          };
        }),
        j = t(376),
        C = new w.a();
      function U() {
        return C.enqueue(() =>
          (0, l.g)()
            .then((e) =>
              e
                ? { result: e }
                : (function (e) {
                    var r = (0, i.u)(),
                      t = {
                        overallStartTime: r,
                        retryStartTime: r,
                        retryAttemptsLeft: 3,
                      },
                      s = new Uint8Array(32);
                    self.crypto.getRandomValues(s);
                    var n = new Uint8Array(32);
                    self.crypto.getRandomValues(n);
                    var a = (function (e, r) {
                        return (0, A.j)(() => {
                          var t = (0, A.g)(),
                            s = (0, A.a)(Uint8Array, 32);
                          s.set(r), P(s), R.c.scalarbase(t, s);
                          var n = (0, A.d)(e);
                          (0, R.c.add)(n, t);
                          var a = new Uint8Array(32);
                          return (0, A.h)(a, n), a;
                        });
                      })(s, n),
                      u = new o.a({
                        name: "issuePrivateStatsToken",
                        timer: {
                          algo: { type: "exponential", first: 250 },
                          max: 1e3,
                        },
                        code: (e) => {
                          t.retryAttemptsLeft < 3 &&
                            (t.retryStartTime = (0, i.u)());
                          var r = (0, T.v)(
                            "iq",
                            {
                              xmlns: "privatestats",
                              id: (0, T.t)(),
                              type: "get",
                              to: T.k,
                            },
                            (0, T.v)(
                              "sign_credential",
                              { version: "1" },
                              (0, T.v)("blinded_credential", null, a)
                            )
                          );
                          return (0, L.h)(r, G)
                            .then((r) => {
                              if (!r.success) {
                                var a = (function (e) {
                                  switch (e.errorCode) {
                                    case 400:
                                      return "bad-request";
                                    case 500:
                                      return "internal-server-error";
                                    case 501:
                                      return "feature-not-implemented";
                                    case 503:
                                      return "service-unavailable";
                                    default:
                                      return "unknown";
                                  }
                                })(r);
                                return (
                                  __LOG__(
                                    3
                                  )`issuePrivateStatsToken: failed ${a}`,
                                  void ("internal-server-error" !== a ||
                                  t.retryAttemptsLeft <= 0
                                    ? e({
                                        result: null,
                                        metric: Object.assign({}, t, {
                                          result: a,
                                        }),
                                      })
                                    : t.retryAttemptsLeft--)
                                );
                              }
                              var u = r.result,
                                o = u.signedCredential,
                                i = u.acsPublicKey,
                                l = (function (e, r, t) {
                                  return (0, A.j)(() => {
                                    var s = (0, A.g)();
                                    if ((0, A.l)(s, e)) return null;
                                    var n = (0, A.g)();
                                    if (0 !== (0, A.m)(n, t)) return null;
                                    var a = (0, A.a)(Uint8Array, 32);
                                    a.set(r), P(a);
                                    var u = (0, A.g)();
                                    R.c.scalarmult(u, n, a), (0, R.c.add)(s, u);
                                    var o = new Uint8Array(32);
                                    return (0, A.h)(o, s), o;
                                  });
                                })(o, n, i);
                              if (null == l)
                                return (
                                  __LOG__(
                                    3
                                  )`issuePrivateStatsToken: failed to unblind the signed token`,
                                  void e({
                                    result: null,
                                    metric: Object.assign({}, t, {
                                      result: "decryption-error",
                                    }),
                                  })
                                );
                              var c = k.a.build(s, l),
                                d = (0, R.b)(c.readByteArray());
                              e({
                                result: { token: s, sharedSecret: d },
                                metric: Object.assign({}, t, {
                                  result: "success",
                                }),
                              });
                            })
                            .catch((r) => {
                              if (!(r instanceof O.a)) return Promise.reject(r);
                              __LOG__(3)`issuePrivateStatsToken: Disconnected`,
                                t.retryAttemptsLeft <= 0
                                  ? e({
                                      result: null,
                                      metric: Object.assign({}, t, {
                                        result: "disconnected",
                                      }),
                                    })
                                  : t.retryAttemptsLeft--;
                            });
                        },
                      });
                    return u.start(), u.promise();
                  })().then((e) => {
                    var r = Object.assign({}, e),
                      t = e.result;
                    return t ? (0, l.i)(t).then(() => r) : r;
                  })
            )
            .then((e) => {
              var r,
                t,
                s,
                n,
                a,
                u,
                o = e.result,
                l = e.metric;
              return (
                l &&
                  ((t = (r = l).result),
                  (s = r.overallStartTime),
                  (n = r.retryStartTime),
                  (a = r.retryAttemptsLeft),
                  (u = (function (e) {
                    switch (e) {
                      case "success":
                        return 1;
                      case "bad-request":
                        return 2;
                      case "internal-server-error":
                        return 3;
                      case "disconnected":
                        return 5;
                      default:
                        return 4;
                    }
                  })(t)),
                  WAM.log("regular", 2242, void 0, [
                    1,
                    0,
                    u,
                    4,
                    0,
                    (0, i.v)(s),
                    3,
                    0,
                    (0, i.v)(n),
                    2,
                    0,
                    3 - a,
                    5,
                    1,
                    "disconnected" !== t,
                    6,
                    0,
                    (0, j.a)() ? 1 : 2,
                  ])),
                o || __LOG__(3)`Couldn't get a private stats token`,
                o
              );
            })
        );
      }
      r.default = (0, S.c)()
        .finalStep("sendAnonymousMetrics", {
          code: () =>
            (0, L.p)()
              .then(() => {
                return (
                  (e = U),
                  (0, l.b)("private").then((r) =>
                    (function (e, r) {
                      var t = e.map((e) => {
                        var t = 3,
                          s = [],
                          n = new o.a({
                            name: "uploadPrivateStatsBuffer",
                            timer: {
                              algo: { type: "exponential", first: 250 },
                              max: 1e3,
                            },
                            code: (n) =>
                              (function (e, r, t, s) {
                                return _.apply(this, arguments);
                              })(
                                n,
                                (e) => {
                                  var r = m(e);
                                  s.push(r), t <= 0 ? n() : t--;
                                },
                                e,
                                r
                              ),
                          });
                        return (
                          n.start(),
                          n.promise().then((r) => {
                            if (null != r) {
                              var t = m(r);
                              s.push(t);
                            }
                            return {
                              uploadedBufferKey:
                                "success" === (null == r ? void 0 : r.result)
                                  ? e.key
                                  : null,
                              metrics: s,
                            };
                          })
                        );
                      });
                      return Promise.all(t).then((e) => {
                        var r = e.reduce(
                          (e, r) => (e.push(...r.metrics), e),
                          []
                        );
                        return {
                          uploadedBufferKeys: e.reduce(
                            (e, r) => (
                              null != r.uploadedBufferKey &&
                                e.push(r.uploadedBufferKey),
                              e
                            ),
                            []
                          ),
                          metrics: r,
                        };
                      });
                    })(r, e)
                  )
                );
                var e;
              })
              .then((e) => {
                e.metrics.forEach((e) => {
                  (function (e) {
                    var r = e.result,
                      t = e.uploadTime,
                      s = e.httpResponseCode,
                      n = (function (e) {
                        switch (e) {
                          case "success":
                            return 1;
                          case "error-server-other":
                            return 8;
                          case "error-parsing":
                            return 2;
                          case "error-decoding":
                            return 3;
                          case "error-credential":
                            return 4;
                          case "error-other":
                            return 5;
                          default:
                            return 11;
                        }
                      })(r);
                    WAM.log("regular", 2244, void 0, [
                      1,
                      0,
                      n,
                      2,
                      0,
                      t,
                      3,
                      0,
                      s,
                      6,
                      0,
                      (0, j.a)() ? 1 : 2,
                    ]);
                  })(e);
                });
              }),
          stopRetryIf: {
            timePassedSeconds: 600,
            onStopRetry: () => {
              __LOG__(
                2
              )`sendAnonymousMetrics timed out, will be restarted later`;
            },
          },
        })
        .end();
    },
  },
]);
