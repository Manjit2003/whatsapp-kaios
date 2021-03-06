"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [87],
  {
    658: function (e, r, a) {
      a.r(r);
      var o = a(9),
        i = a.n(o),
        t = a(27),
        n = a.n(t),
        d = a(2),
        s = a(75),
        l = a(17),
        u = a(107),
        _ = a(12),
        c = a(7),
        f = a(366),
        m = a(24),
        p = a(30),
        v = a(16),
        g = a(3),
        w = a(177),
        O = a(94),
        h = a(105),
        y = a(89),
        I = a(217),
        G = a(293),
        L = a(36),
        S = a(10),
        D = a(104),
        $ = a(15),
        M = a(63),
        T = a(49),
        E = a(40),
        b = a(6),
        R = 100 * S.a;
      function k() {
        return (k = n()(function* (e) {
          var r = (0, T.i)(e.author);
          if (!r)
            return "@psa" === e.author
              ? U()
              : (__LOG__(
                  3
                )`shouldAutodownloadMediaMsg tried to download message from invalid author ${e.author}`,
                !1);
          if (e.type === d.f.DOCUMENT && e.isVCard) {
            var a = b.E.get().mmsVcardAutodownloadSizeKb;
            if (e.size <= a * S.a) return F(r, e);
          }
          if (e.type === d.f.STICKER) {
            if (e.size < R) return __LOG__(2)`Auto-downloading sticker`, !0;
            __LOG__(
              2
            )`Sticker is above the limit, we will check autodownloading settings`;
          }
          return (yield x(e.type))
            ? !e.chat || F(r, e)
            : (__LOG__(
                2
              )`shouldAutodownloadMediaMsg: Should not autodownload type ${e.type}`,
              !1);
        })).apply(this, arguments);
      }
      function F(e, r) {
        var a = (0, $.w)(r.id);
        return (0, l.D)(a).then((r) => {
          if (!r)
            return (
              __LOG__(
                3
              )`shouldAutodownloadMediaMsg: chat ${a} no longer exists`,
              !1
            );
          var o = [e],
            i = r.dbGroup;
          if (i) {
            var t = i.groupInfo.creatorJid;
            t && o.push(t);
            var n = (0, T.l)(i.participantsInfo.admins);
            o.push(...n);
          }
          return (0, M.c)(o).then((e) => e.some((e) => (0, E.m)(e)));
        });
      }
      function x(e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = n()(function* (e) {
          var r,
            a = b.j.get(),
            o = yield (0, _.e)("page", "getNetworkInfo", {}),
            i = o.isWifiConnected,
            t = o.isRoaming;
          switch (
            ((r = i
              ? a.autodownloadWifi
              : t
              ? a.autodownloadRoaming
              : a.autodownloadMobile),
            e)
          ) {
            case d.f.STICKER:
            case d.f.IMAGE:
            case d.f.GIF:
              return r.includes("photos");
            case d.f.AUDIO:
              return r.includes("audio");
            case d.f.VIDEO:
              return r.includes("videos");
            case d.f.DOCUMENT:
              return r.includes("documents");
            case d.f.PTT:
              return !0;
            default:
              return !1;
          }
        })).apply(this, arguments);
      }
      function U() {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = n()(function* () {
          var e = yield (0, _.e)("page", "getNetworkInfo", {}),
            r = e.isWifiConnected,
            a = e.isRoaming;
          return r || !a;
        })).apply(this, arguments);
      }
      function N() {
        return (N = n()(function* (e, r, a, o, i) {
          var t = r.id,
            n = a.mediaEntries[t];
          if (!n)
            return (
              __LOG__(4)`downloadMedia no entry for media message ${t}`,
              SEND_LOGS("no-entry-for-media-msg"),
              (0, u.k)(
                Object.assign({}, i, {
                  overallDownloadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, m.o)(r),
                })
              ),
              { result: "error", error: "failed" }
            );
          __LOG__(
            2
          )`downloadMedia for message ${r.id}, type = ${r.type}, entry.size = ${n.size}`;
          var d = yield (0, w.d)(
              "user" === e ? "manual" : "auto",
              n,
              a.plaintextHash,
              o,
              i
            ),
            s = d.result,
            c = d.metric;
          if ("success" !== s.status)
            return (
              "gone" === s.status &&
                (yield (0, p.b)().waitUntilPersisted(v.e.requestReupload(t))),
              "daemon-disconnected" === s.status
                ? { result: "error", error: "disconnected" }
                : (__LOG__(
                    2
                  )`downloadMedia failed to download media ${s.status}`,
                  (0, u.k)(
                    Object.assign({}, c, {
                      overallDownloadResult: w.a[s.status],
                      overallIsFinal: !0,
                      isViewOnce: (0, m.o)(r),
                    })
                  ),
                  { result: "error", error: "failed" })
            );
          var h = s.path,
            y = (yield (0, _.e)("page", "getBlobFromPhoneStorage", { path: h }))
              .blob;
          if (!y)
            return (
              __LOG__(4)`downloadMedia blob gone right after downloading`,
              SEND_LOGS("downloaded-blob-gone"),
              (0, u.k)(
                Object.assign({}, c, {
                  overallDownloadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, m.o)(r),
                })
              ),
              { result: "error", error: "failed" }
            );
          var I = void 0,
            G = void 0;
          if ("video" === (0, O.a)(n.type)) {
            __LOG__(2)`downloadMedia parsing video`;
            var L = (0, g.u)(),
              S = yield (0, f.a)(y);
            if (
              ((G = (0, g.v)(L)),
              __LOG__(2)`downloadMedia parsed video`,
              "error" === S.type)
            )
              __LOG__(3)`downloadMedia media rejected for ${t}`,
                SEND_LOGS("invalid-video");
            else {
              var D = S.info.video;
              D
                ? (I = D.rotation)
                : (__LOG__(3)`downloadMedia media not video for ${t}`,
                  SEND_LOGS("no-video-track"));
            }
            if (null == I)
              return (
                (0, u.k)({
                  overallFileValidationT: G,
                  overallDownloadResult: 2,
                  overallIsFinal: !0,
                  isViewOnce: (0, m.o)(r),
                }),
                { result: "error", error: "invalid" }
              );
          }
          (0, u.k)(
            Object.assign({}, c, {
              overallIsFinal: !0,
              overallFileValidationT: G,
              overallDownloadResult: 1,
              isViewOnce: (0, m.o)(r),
            })
          ),
            __LOG__(
              2
            )`downloadMedia successfully stored full content to temporary file`,
            null != I && (yield (0, l.Fc)(a.mediaId, { rotation: I }));
          var $ = yield (0, u.h)(t, a.mediaId, y, "save");
          return (
            o.parts.processing.finished(),
            "ok" === $.type
              ? (__LOG__(
                  2
                )`downloadMedia successfully finalized media ${a.mediaId}`,
                yield j(r, a.mediaId, y),
                yield B(s.progressiveDownload, a),
                { result: "success" })
              : (__LOG__(
                  2
                )`downloadMedia failed to finalize media ${a.mediaId}`,
                { result: "error", error: "failed" })
          );
        })).apply(this, arguments);
      }
      function V(e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = n()(function* (e) {
          var r = yield (0, l.v)(e);
          if (r) {
            var a = r.msg,
              o = r.media;
            if (a.type === d.f.VIDEO || a.type === d.f.GIF) {
              var i = a.plaintext;
              if (i)
                if (o.frame)
                  __LOG__(
                    2
                  )`extractFrame frame is already extracted for msg ${e}`;
                else {
                  var t = a.rotation;
                  if (void 0 !== t) {
                    (0, y.c)("extractFrame");
                    var n = yield (0, _.e)("page", "extractFrame", {
                      msgId: e,
                      videoRef: i,
                      rotation: t,
                    });
                    if (n.error)
                      __LOG__(3)`extractFrame found some error. Skipping`;
                    else {
                      var s = n.result;
                      if (null != s) {
                        var u = yield (0, h.getChunkTable)().storeFrame(
                          o.mediaId,
                          s
                        );
                        yield (0, l.Fc)(o.mediaId, { frame: u });
                      }
                    }
                  } else __LOG__(3)`extractFrame no rotation for msg ${e}`;
                }
              else __LOG__(3)`extractFrame no media plaintext for msg ${e}`;
            } else
              __LOG__(
                2
              )`extractFrame msg ${e} is not video or gif - skipping it`;
          } else __LOG__(2)`extractFrame message ${e} is not a valid media message`;
        })).apply(this, arguments);
      }
      function j(e, r, a) {
        return (0, m.d)(e)
          ? (0, I.j)(a).then((e) => (0, l.nc)(r, e))
          : Promise.resolve();
      }
      function P(e) {
        switch (e) {
          case "retry":
          case "status":
          case "autodownload":
            return 2;
          default:
            return 1;
        }
      }
      function H(e, r, a, o) {
        var i = q(e.msg);
        if (null != i) {
          var t,
            n,
            d = i.size,
            s = i.mediaType,
            l =
              "status" === e.type
                ? 3
                : (0, c.x)(e.jid, { user: () => 1, group: () => 2 });
          if (o)
            if (
              ((n =
                "mms4" === o.version ? 4 : "mms3" === o.version ? 3 : void 0),
              "mms4" !== o.version || null == o.directPath)
            )
              t = 1;
            else {
              var u = o.directPath;
              u.startsWith("/o") ? (t = 3) : u.startsWith("/v") && (t = 2);
            }
          return {
            overallMmsVersion: n,
            overallDownloadOrigin: l,
            overallDownloadMode: P(r),
            overallMediaType: s,
            overallIsFinal: !0,
            overallMediaSize: d,
            overallQueueT: a,
            overallBackendStore: t,
          };
        }
      }
      function W(e, r, a) {
        return (
          "error" === a.result
            ? "no-space" === a.error
              ? e.msgMediaStatusUpdated(r, e.STATUS_ERROR_NOT_ENOUGH_SPACE)
              : "disconnected" === a.error
              ? e.msgMediaStatusUpdated(r, e.STATUS_ERROR_DISCONNECTED)
              : "too-big" === a.error
              ? e.msgMediaStatusUpdated(r, e.STATUS_ERROR_TOO_BIG)
              : (a.error, e.msgMediaStatusUpdated(r, e.STATUS_IDLE))
            : a.result,
          a
        );
      }
      function q(e) {
        if (e.type !== d.f.RICH_HSM)
          return { size: e.size, mediaType: D.a[e.type] };
        e.type;
        var r = e.richContent;
        return null == r
          ? (__LOG__(4)`Tried to enqueue download for a rich HSM without media`,
            null)
          : r.type === d.f.LOCATION
          ? (__LOG__(4)`Tried to enqueue download for a location message`, null)
          : { size: r.size, mediaType: D.a[r.type] };
      }
      function B(e, r) {
        e
          ? (0, l.Bc)(r.mediaId, e)
          : (function (e) {
              return !!(
                e.partialPlaintextHash ||
                e.partialSize ||
                e.progressiveJpegScanNumber
              );
            })(r) && (0, l.Bc)(r.mediaId, null);
      }
      r.default = (0, s.c)()
        .step("download", {
          requirements: [s.d],
          code: (e) => {
            var r = e.msgId,
              a = e.source,
              o = (0, g.u)();
            return (0, u.e)(
              r,
              (e) =>
                (function (e, r, a) {
                  return (0, l.v)(r).then(
                    (function () {
                      var o = n()(function* (o) {
                        if (e.isDownloading(r))
                          return (
                            __LOG__(
                              3
                            )`_shouldDownload twice for same msgId ${r}`,
                            { result: "skip" }
                          );
                        if (!o)
                          return (
                            __LOG__(
                              2
                            )`_shouldDownload message ${r} is not a valid media message`,
                            { result: "error", error: "gone" }
                          );
                        var i = o.msg,
                          t = o.media,
                          n = t.mediaEntries[i.id];
                        n ||
                          __LOG__(3)`Media ${
                            t.mediaId
                          } has no media entry for ${r}. It has mediaEntries ${(0,
                          S.w)(t.mediaEntries)} and msgIds ${
                            t.msgIds
                          } and source is ${a}`;
                        var d = q(i);
                        if (null == d)
                          return { result: "error", error: "invalid" };
                        if (d.size > L.c)
                          return (
                            __LOG__(2)`media is too big, skipping download`,
                            { result: "error", error: "too-big" }
                          );
                        var s = H(o, a, 0, n);
                        if (!s) return { result: "error", error: "invalid" };
                        var _ = t.plaintext;
                        if (_) {
                          __LOG__(
                            2
                          )`_shouldDownload msg ${r} already downloaded`,
                            (0, u.k)(
                              Object.assign({}, s, {
                                overallDownloadResult: 12,
                                isViewOnce: (0, m.o)(i),
                              })
                            );
                          var c =
                            (null == o ? void 0 : o.fromEphemeralChat) || !1;
                          return (
                            yield (0, u.g)(i, t.mediaId, _, c),
                            { result: "skip" }
                          );
                        }
                        if (
                          "autodownload" === a &&
                          !(yield (function (e) {
                            return k.apply(this, arguments);
                          })(i))
                        )
                          return (
                            __LOG__(
                              2
                            )`_shouldDownload msg ${r} should not autodownload`,
                            { result: "skip" }
                          );
                        if (!(0, O.g)(i))
                          return (
                            __LOG__(
                              2
                            )`_shouldDownload msg ${r} does not have a valid mimetype`,
                            (0, u.k)(
                              Object.assign({}, s, {
                                overallDownloadResult: 2,
                                isViewOnce: (0, m.o)(i),
                              })
                            ),
                            { result: "error", error: "no-mimetype" }
                          );
                        e.updateDownload(r, e.STATUS_PENDING);
                        var f = [(0, l.Wc)(t.mediaId)];
                        return (
                          "retry" === a && f.push((0, l.gc)(r, t.mediaId)),
                          Promise.all(f).then((e) => ({ result: "download" }))
                        );
                      });
                      return function (e) {
                        return o.apply(this, arguments);
                      };
                    })()
                  );
                })(e, r, a),
              (e, t) =>
                "download" !== t.result
                  ? W(e, r, t)
                  : (function (e, r, a, o) {
                      var t = (0, g.v)(o);
                      return Promise.all([
                        (0, l.v)(r),
                        (0, _.e)("page", "getFreeSpace", { area: "sdcard" }),
                      ]).then((o) => {
                        var n = i()(o, 2),
                          d = n[0],
                          s = n[1].freeSpace;
                        if (!d)
                          return (
                            __LOG__(
                              2
                            )`_doDownload message ${r} is not a valid media message`,
                            { result: "error", error: "gone" }
                          );
                        var l = d.msg,
                          _ = d.media;
                        if (_.plaintext)
                          return (
                            __LOG__(
                              2
                            )`_doDownload msg downloaded while in queue`,
                            { result: "skip" }
                          );
                        var c = _.mediaEntries[l.id];
                        c ||
                          __LOG__(3)`Media ${
                            _.mediaId
                          } has no media entry for ${r}. It has mediaEntries ${(0,
                          S.w)(_.mediaEntries)} and msgIds ${
                            _.msgIds
                          } and source is ${a}`;
                        var f = H(d, a, t, c);
                        if (!f) return { result: "error", error: "invalid" };
                        if (e.isDownloadCancelled(r))
                          return (
                            __LOG__(2)`_doDownload msg ${r} cancelled`,
                            (0, u.k)(
                              Object.assign({}, f, {
                                overallDownloadResult: 11,
                                isViewOnce: (0, m.o)(l),
                              })
                            ),
                            { result: "error", error: "cancelled" }
                          );
                        var p = q(l);
                        if (null == p)
                          return { result: "error", error: "invalid" };
                        if (s < 2.01 * p.size)
                          return (
                            __LOG__(
                              2
                            )`_doDownload not enough space to download media`,
                            (0, u.k)(
                              Object.assign({}, f, {
                                overallDownloadResult: 5,
                                isViewOnce: (0, m.o)(l),
                              })
                            ),
                            { result: "error", error: "no-space" }
                          );
                        var v = new G.a({
                          parts: w.b,
                          onUpdate(a) {
                            __LOG__(2)`download ${100 * a}% finished`,
                              e.updateDownload(r, {
                                type: "processing",
                                progress: a,
                              });
                          },
                          onSuccess: () => {
                            __LOG__(2)`download finished`;
                          },
                          onError: (e) => {
                            __LOG__(2)`download failed ${e}`;
                          },
                        });
                        return (function (e, r, a, o, i) {
                          return N.apply(this, arguments);
                        })(
                          a,
                          l,
                          _,
                          v,
                          Object.assign({}, f, { overallIsFinal: !1 })
                        );
                      });
                    })(e, r, a || "autodownload", o)
                      .then((a) => W(e, r, a))
                      .catch((a) => {
                        throw (e.msgMediaStatusUpdated(r, e.STATUS_IDLE), a);
                      })
            );
          },
          stopRetryIf: {
            timePassedSeconds: g.b,
            appCrashed: !0,
            onStopRetry: () => {},
          },
        })
        .finalStep("extractFrame", (e, r) => {
          var a = r.msgId;
          if (e && "error" !== e.result) return (0, u.f)(a, V);
        })
        .end();
    },
  },
]);
