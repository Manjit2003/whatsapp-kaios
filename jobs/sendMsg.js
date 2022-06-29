"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [120],
  {
    616: function (e, t, i) {
      i.r(t),
        i.d(t, "sendStatusMsg", function () {
          return m;
        });
      var n = i(27),
        r = i.n(n),
        d = i(11),
        o = i(104),
        l = i(17),
        a = i(63),
        s = i(291),
        u = i(75),
        c = i(485),
        v = i(30),
        g = i(16),
        p = i(217),
        f = i(74),
        y = i(89),
        b = i(39);
      t.default = (0, u.c)()
        .finalStep(
          "saveAndPassOff",
          (function () {
            var e = r()(function* (e, t, i) {
              var n = i.jobStartTime,
                r = e.jid,
                d = e.key,
                a = e.content,
                s = e.quoted,
                u = e.link,
                c = e.remoteJid,
                p = (0, l.s)(d),
                f = yield (function (e, t, i, n, r, d) {
                  return M.apply(this, arguments);
                })(p, a, n, c, null, u),
                y = yield (0, l.bb)(r),
                m = yield (0, l.jd)(r, f, s, { to: y, identityIds: new Map() });
              if (m) {
                if (!(0, b.k)(m.dbMsg.ack)) {
                  var k = m.outgoingTo;
                  if (!k)
                    return (
                      __LOG__(
                        4
                      )`sendMsg writeOutgoingMsg returned null outgoingTo`,
                      SEND_LOGS("sendMsg-null-outgoingTo"),
                      void (0, o.j)({ jid: r, dbMsg: f.msg, thumbSize: w(f) })
                    );
                  yield (0, v.b)().waitUntilPersisted(
                    g.e.sendWrittenMsg(m.dbMsg.rowId, r, k)
                  );
                }
              } else (0, o.j)({ jid: r, dbMsg: f.msg, thumbSize: w(f) });
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })()
        )
        .end();
      var m = (0, u.c)()
        .finalStep(
          "saveAndPassOff",
          (function () {
            var e = r()(function* (e, t, i) {
              var n = i.jobStartTime,
                r = e.key,
                a = e.content,
                u = e.origin,
                p = (0, l.s)(r),
                f = yield (function (e, t, i, n) {
                  t.type;
                  var r = k(void 0);
                  return (0, s.l)(
                    e,
                    i,
                    {
                      text: t.text,
                      linkPreview: null == r ? void 0 : r.linkPreview,
                      backgroundColor: t.backgroundColor,
                      font: t.font,
                    },
                    (null == r ? void 0 : r.preview) || null
                  );
                })(p, a, n);
              if (
                "success" !== (yield (0, c.ensureStatusSettingsInitialized)())
              )
                throw (
                  (__LOG__(4)`sendStatusMsg couldn't fetch settings.`,
                  SEND_LOGS("send-status-no-settings"),
                  new y.b({ algo: { type: "constant", delay: 3e5 } }))
                );
              var m = yield (0, l.kd)(f);
              if (m) {
                if (!(0, b.k)(m.dbMsg.ack)) {
                  var M = { to: m.to, identityIds: new Map() };
                  yield (0, v.b)().waitUntilPersisted(
                    g.e.sendWrittenMsg(m.dbMsg.rowId, d.h, M, void 0, u)
                  );
                }
              } else (0, o.j)({ jid: d.h, dbMsg: f.msg, thumbSize: w(f), origin: u });
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })()
        )
        .end();
      function w(e) {
        var t = e.media,
          i = null == t ? void 0 : t.preview;
        return i ? (i instanceof Blob ? i.size : i.byteLength) : void 0;
      }
      function k(e) {
        var t, i;
        return e
          ? {
              linkPreview: {
                matchedText: e.matchedText,
                canonicalUrl: e.canonicalUrl,
                description: null != (t = e.description) ? t : void 0,
                title: null != (i = e.title) ? i : void 0,
              },
              preview: e.imgBlob || void 0,
            }
          : null;
      }
      function M() {
        return (M = r()(function* (e, t, i, n, r, d) {
          switch (t.type) {
            case "text":
              var o,
                l,
                u = k(d);
              return (0,
              s.n)(e, i, n, r, { text: t.text, linkPreview: null == u ? void 0 : u.linkPreview, urlNumber: null == (o = t.waMe) ? void 0 : o.urlNumber, urlText: null == (l = t.waMe) ? void 0 : l.urlText }, (null == u ? void 0 : u.preview) || null);
            case "vcard":
              var c = (0, p.k)(t.contacts.map((e) => e.vcard)),
                v = yield (0, a.d)(Array.from(c)),
                g = t.contacts.map((e) => {
                  var t = e.vcard;
                  return { displayName: e.displayName, vcard: (0, p.a)(t, v) };
                });
              return (0, s.o)(e, i, n, { contacts: g });
            case "location":
              return (0,
              s.i)(e, i, n, { degreesLatitude: t.lat, degreesLongitude: t.lng, name: t.name || void 0, address: t.address || void 0, url: t.url || void 0 }, t.previewBlob || null);
            case "group_invite":
              var y = yield (0, f.getProfilePicTable)().getThumb(t.groupJid);
              return (0,
              s.f)(e, i, n, { groupJid: t.groupJid, inviteCode: t.inviteCode, inviteExpiration: t.inviteExpiration, groupName: t.groupName, caption: t.caption }, (y && y.image) || null);
            default:
              return (
                t.type,
                (0, s.g)(e, i, n, {
                  selectedDisplayText: t.selectedDisplayText,
                  payload: t.payload,
                  selectedButtonIndex: t.selectedButtonIndex,
                })
              );
          }
        })).apply(this, arguments);
      }
    },
  },
]);
