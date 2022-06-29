"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [21],
  {
    513: function (e, t, i) {
      i.d(t, "a", function () {
        return m;
      }),
        i.d(t, "c", function () {
          return w;
        }),
        i.d(t, "d", function () {
          return b;
        }),
        i.d(t, "b", function () {
          return x;
        });
      var n = i(27),
        a = i.n(n),
        r = i(105),
        d = i(30),
        p = i(17),
        o = i(107),
        u = i(261),
        s = i(2),
        l = i(31),
        c = i.n(l),
        g = i(291),
        h = i(12),
        y = i(104),
        f = i(16);
      function m(e, t, i, n, a, r) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = a()(function* (e, t, i, n, a, l) {
          var c = yield (0, p.c)(t, a, l.preview || null);
          if (!c)
            return (
              __LOG__(2)`sendMediaMsg msg removed while processing`,
              void (0, y.l)(e)
            );
          var g,
            m = c.dbMedia,
            v = c.dbMsg,
            w = m.mediaId;
          if ("video" === l.type || "gif" === l.type) {
            var b = {
              frame: yield (0, r.getChunkTable)().storeFrame(w, l.frame),
              rotation: l.rotation,
            };
            yield (0, p.Fc)(w, b);
          }
          if (
            "ok" ===
            (g = (0, u.a)(l)
              ? yield (0, u.e)(m, l.filepath)
              : yield (0, o.h)(t, m.mediaId, l.plaintext, "dont-save")).type
          )
            "gif" === l.type &&
              (yield (0, d.b)().waitUntilPersisted(f.e.addRecentGif(a, l))),
              yield (0, d.b)().waitUntilPersisted(f.e.uploadMedia(t, e, n, i));
          else {
            var z, k;
            switch ((g.type, g.error)) {
              case "gone":
                (z = s.a.CONTENT_GONE),
                  (k = { type: "error", error: "noLongerExists" });
                break;
              case "not-enough-space":
                (z = s.a.CONTENT_GONE),
                  (k = { type: "error", error: "notEnoughUploadSpace" });
                break;
              default:
                g.error,
                  (z = s.a.FAILED),
                  (k = { type: "error", error: "unknown" });
            }
            (0, y.j)({ jid: e, dbMsg: v, thumbSize: x(l) }),
              yield (0, p.dd)(t, z),
              (0, h.c)("event", "msgMediaStatusUpdated", {
                msgId: t,
                mediaStatus: k,
              });
          }
        })).apply(this, arguments);
      }
      function w(e, t, i, n, a) {
        switch (t.type) {
          case "voice":
            return (0, g.q)(e, i, n, {
              duration: t.duration,
              size: t.plaintext.size,
              mimetype: t.plaintext.type,
              waveform: t.waveform,
            });
          case "image":
            return (0, g.h)(
              e,
              i,
              n,
              a,
              {
                bg: t.bg,
                width: t.width,
                height: t.height,
                text: t.caption,
                size: t.plaintext.size,
              },
              t.preview,
              null,
              t.viewOnce ? "active" : void 0,
              t.uploadSource
            );
          case "gif":
            return (0, g.e)(
              e,
              i,
              n,
              a,
              {
                text: t.caption,
                bg: t.bg,
                width: t.width,
                height: t.height,
                duration: t.duration,
                gifAttribution: t.gifAttribution,
                size: t.plaintext.size,
                mimetype: t.plaintext.type,
              },
              t.preview
            );
          case "video":
            return (0, g.p)(
              e,
              i,
              n,
              a,
              {
                text: t.caption,
                bg: t.bg,
                width: t.width,
                height: t.height,
                duration: t.duration,
                size: t.plaintext.size,
                mimetype: t.plaintext.type,
              },
              t.preview,
              null,
              t.viewOnce ? "active" : void 0,
              t.uploadSource
            );
          case "audio":
            return (0, g.a)(e, i, n, {
              duration: t.duration,
              size: t.plaintext.size,
              mimetype: t.plaintext.type,
            });
          case "text/vcard":
            return (0, g.b)(
              e,
              i,
              n,
              {
                mimetype: "text/vcard",
                fileName: t.filename,
                isVCard: !0,
                size: t.plaintext.size,
                contactsCount: t.contactsCount,
                uiVCards: t.uiVCards,
              },
              null
            );
          default:
            return (
              t.type,
              (0, g.b)(
                e,
                i,
                n,
                {
                  fileName: t.filename,
                  size: t.plaintext.size,
                  pages: t.pages,
                  mimetype: t.mimetype,
                },
                t.preview || null,
                void 0
              )
            );
        }
      }
      function b(e, t, i) {
        switch (t.type) {
          case "image":
            return (0, g.k)(
              e,
              i,
              {
                text: t.caption,
                height: t.height,
                width: t.width,
                bg: t.bg,
                size: t.plaintext.size,
              },
              t.preview
            );
          case "video":
            return (0, g.m)(
              e,
              i,
              {
                text: t.caption,
                bg: t.bg,
                width: t.width,
                height: t.height,
                duration: t.duration,
                size: t.plaintext.size,
                mimetype: t.plaintext.type,
              },
              t.preview
            );
          case "gif":
            return (0, g.j)(
              e,
              i,
              {
                text: t.caption,
                bg: t.bg,
                width: t.width,
                height: t.height,
                duration: t.duration,
                gifAttribution: t.gifAttribution,
                size: t.plaintext.size,
                mimetype: t.plaintext.type,
              },
              t.preview
            );
          default:
            return (0, c.a)(t.type);
        }
      }
      function x(e) {
        if ("gif" === e.type || "image" === e.type || "video" === e.type)
          return e.preview.byteLength;
      }
    },
  },
]);
