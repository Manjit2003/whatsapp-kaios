"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [111],
  {
    622: function (e, r, o) {
      o.r(r),
        o.d(r, "reuploadMedia", function () {
          return M;
        });
      var t = o(27),
        a = o.n(t),
        i = o(75),
        l = o(4),
        n = o(17),
        u = o(24),
        d = o(107),
        p = o(2),
        c = o(94),
        s = o(34),
        v = o(486),
        y = o(3),
        _ = o(6),
        f = o(28),
        h = o(7),
        m = o(104),
        O = o(89),
        S = o(497),
        g = o(552),
        b = y.b,
        M = (0, i.c)()
          .finalStep("reupload", (e, r, o) => {
            o.jobStartTime;
            var t = e.externalId,
              a = e.chat,
              i = e.requester,
              l = e.uploadToken;
            return (
              (0, O.c)("reupload media"),
              (0, n.U)("reupload", a, (0, h.e)(i), t).then((r) => {
                if (!r.error && (0, u.e)(r.dbMsg)) {
                  var o = r.dbMsg,
                    t = o.id,
                    i = (0, y.u)();
                  return (0, d.j)(
                    t,
                    () =>
                      (function (e, r, o, t) {
                        return G.apply(this, arguments);
                      })(o, a, i, l).then((r) =>
                        (function (e, r) {
                          var o = e.externalId,
                            t = e.chat,
                            a = e.requester;
                          if ("uploaded" === r.type) {
                            var i = r.directPath,
                              l = r.cryptoKey;
                            return _.E.get()
                              .mms4MediaRetryNotificationEncryptionEnabled
                              ? i
                                ? (function (e, r, o, t, a) {
                                    return w.apply(this, arguments);
                                  })(t, a, l, o, i)
                                : void __LOG__(
                                    4
                                  )`Unexpected encrypted media reupload request without directPath`
                              : (function (e, r, o) {
                                  return L.apply(this, arguments);
                                })(t, a, o);
                          }
                        })(e, r)
                      ),
                    "silent"
                  );
                }
                __LOG__(
                  3
                )`Received reupload request for non-existing or non-media message`;
              })
            );
          })
          .end();
      function w() {
        return (w = a()(function* (e, r, o, t, a) {
          var i = (0, h.a)(e) ? r : void 0,
            n = yield (0, v.c)(o, t, a),
            u = n.ciphertext,
            d = n.iv;
          yield (0,
          f.l)((0, l.v)("notification", { to: (0, l.g)(e), from: (0, l.g)(_.r.get()), participant: i ? (0, l.g)(i) : l.d, id: (0, l.b)(t), type: "mediaretry" }, (0, l.v)("encrypt", null, (0, l.v)("enc_p", null, u), (0, l.v)("enc_iv", null, d))), { id: t, class: "notification", from: e, participant: i ? (0, h.e)(i) : null, type: "mediaretry" });
        })).apply(this, arguments);
      }
      function L() {
        return (L = a()(function* (e, r, o) {
          var t = (0, h.a)(e) ? r : void 0;
          yield (0,
          f.l)((0, l.v)("notification", { to: (0, l.g)(e), from: (0, l.g)(_.r.get()), participant: t ? (0, l.g)(t) : l.d, id: (0, l.b)(o), type: "mediaretry" }), { id: o, class: "notification", from: e, participant: t ? (0, h.e)(t) : null, type: "mediaretry" });
        })).apply(this, arguments);
      }
      function G() {
        return (G = a()(function* (e, r, o, t) {
          var a = e.id,
            i = I(e),
            l = {
              overallT: 0,
              overallCumT: 0,
              overallUploadOrigin: (0, h.y)(r, {
                user: () => 2,
                group: () => 3,
                status: () => 4,
              }),
              overallMediaType: m.a[e.type],
              overallMediaSize: i,
              overallUploadMode: 5,
              overallMmsVersion: 4,
              overallMediaKeyReuse: 3,
            },
            d = (0, y.v)(o),
            p = yield (0, n.v)(a);
          if (!p)
            return (
              __LOG__(
                3
              )`reuploadMedia:enqueueUpload msg ${a} is no longer a valid media message`,
              (0, S.a)(
                Object.assign({}, l, {
                  overallUploadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              { type: "error", error: "not-found" }
            );
          var c = p.msg,
            s = p.media,
            v = s.mediaEntries[a];
          if (!v || "mms4" !== v.version || void 0 === v.validatedTs)
            return (
              __LOG__(
                4
              )`reuploadMedia: no valid entry found for recently uploaded media ${s.mediaId}`,
              SEND_LOGS("media-reupload-missing-entry"),
              (0, S.a)(
                Object.assign({}, l, {
                  overallUploadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              { type: "error", error: "invalid" }
            );
          if (
            null != s.lastUploadAttempt &&
            (0, y.n)(s.lastUploadAttempt, b) &&
            v.validatedTs >= s.lastUploadAttempt
          )
            return (
              __LOG__(
                2
              )`Too soon since last upload. reusing existing entry path`,
              (0, S.a)(
                Object.assign({}, l, {
                  overallUploadResult: 3,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              {
                type: "uploaded",
                directPath: v.directPath,
                url: v.url,
                cryptoKey: v.cryptoKey,
              }
            );
          var _ = s.mediaId,
            f = yield (0, n.Xc)(s.mediaId);
          return null == f
            ? (__LOG__(3)`reuploadMedia media ${_} was not found`,
              (0, S.a)(
                Object.assign({}, l, {
                  overallUploadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              { type: "error", error: "not-found" })
            : U(c, f, v, t, Object.assign({}, l, { overallQueueT: d }));
        })).apply(this, arguments);
      }
      function I(e) {
        var r;
        if (e.type === p.f.RICH_HSM) {
          var o = e.richContent;
          if (null == o)
            return void __LOG__(
              3
            )`Received reupload request for a rich HSM without media content`;
          if (o.type === p.f.LOCATION)
            return void __LOG__(
              3
            )`Received reupload request for a rich HSM with location content`;
          r = o.size;
        } else r = e.size;
        return r;
      }
      function U(e, r, o, t, a) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = a()(function* (e, r, o, t, a) {
          var i = (0, c.h)(e.type),
            l = r.mediaId,
            p = e.id,
            v = r.plaintext;
          if (!v)
            return (
              __LOG__(4)`reuploadMedia does not have plaintext`,
              (0, S.a)(
                Object.assign({}, a, {
                  overallUploadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              { type: "error", error: "not-found" }
            );
          __LOG__(2)`reuploadMedia uploading`;
          var _ = yield (0, d.b)(i);
          if ("no-hosts" === _)
            return (
              __LOG__(
                3
              )`reuploadMedia failed to create retrier, no host for reuploading`,
              (0, S.a)(
                Object.assign({}, a, {
                  overallUploadResult: 17,
                  overallIsFinal: !0,
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              { type: "error", error: "error" }
            );
          if ("disconnected" === _)
            return (
              __LOG__(3)`reuploadMedia disconnected`,
              { type: "error", error: "disconnected" }
            );
          var f = new y.e();
          if (o.uploadToken) {
            var h = yield (0, g.checkCiphertextInServer)(
              o.ciphertextHash,
              o.uploadToken,
              i,
              _,
              f,
              5,
              a
            );
            if ("success" === h.result) {
              (0, S.a)(
                Object.assign({}, h.metric, {
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              );
              var m = (0, y.E)();
              return (0, n.Nb)(l, p, m).then(() => ({
                type: "uploaded",
                directPath: o.directPath,
                url: o.url,
                cryptoKey: o.cryptoKey,
              }));
            }
            if ("error" === h.result)
              return (
                (0, S.a)(
                  Object.assign({}, h.metric, {
                    isViewOnce: (0, u.o)(e),
                    uploadSource: e.uploadSource && e.uploadSource,
                  })
                ),
                { type: "error", error: "error" }
              );
            if ("disconnected" === h.result)
              return (
                (0, S.a)(
                  Object.assign({}, h.metric, {
                    isViewOnce: (0, u.o)(e),
                    uploadSource: e.uploadSource && e.uploadSource,
                  })
                ),
                { type: "error", error: "disconnected" }
              );
            h.result,
              __LOG__(2)`reuploadMedia: content not in server, reuploading`;
          }
          var O = (0, s.k)(t);
          return (0, g.cipherAndUploadPlaintext)(
            i,
            o.cryptoKey,
            O,
            () => (0, c.d)(v),
            _,
            f,
            5,
            a
          ).then((r) => {
            if (
              ((0, S.a)(
                Object.assign({}, r.metric, {
                  isViewOnce: (0, u.o)(e),
                  uploadSource: e.uploadSource && e.uploadSource,
                })
              ),
              "error" === r.result)
            )
              return (
                __LOG__(3)`reuploadMedia uploading error`,
                { type: "error", error: "error" }
              );
            var t = Object.assign({}, o, {
              uploadToken: O,
              validatedTs: (0, y.E)(),
            });
            return (
              r.directPath !== o.directPath && (t.directPath = r.directPath),
              r.url !== o.url && (t.url = r.url),
              (0, n.vc)(l, p, t).then(() => ({
                type: "uploaded",
                directPath: r.directPath,
                url: r.url,
                cryptoKey: o.cryptoKey,
              }))
            );
          });
        })).apply(this, arguments);
      }
    },
  },
]);
