"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [3],
  {
    133: function (e, t, r) {
      r.d(t, "a", function () {
        return y;
      });
      var i = r(15),
        n = r(2),
        a = r(36),
        o = r(24),
        s = r(79),
        c = r(39),
        p = { type: "idle" },
        u = { type: "pending" },
        d = { type: "error", error: "noLongerExists" },
        f = { type: "error", error: "tooBig" };
      function y(e, t) {
        var r = (0, o.a)(e);
        if (e.ack === i.a.CONTENT_GONE) return d;
        if (e.plaintext) {
          if ((0, c.f)(e.ack) && e.author === n.b)
            return {
              type: "error",
              error: e.ack === i.a.EXPIRED ? "msgExpired" : "unknown",
            };
          var y = e.plaintext;
          if (null == y) return { type: "error", error: "unknown" };
          var l = !1;
          return (
            !(0, o.k)(e) &&
              (0, o.p)(e, e.author === n.b) &&
              (e.type === n.f.PTT
                ? (l = !!e.played)
                : (0, s.b)(e) && "viewed" === e.viewOnceState && (l = !0)),
            { type: "ready", ref: y, played: l }
          );
        }
        return e.author === n.b && e.ack === i.a.CLOCK
          ? u
          : e.author === n.b && (0, c.k)(e.ack)
          ? d
          : r && r > a.c
          ? f
          : t
          ? t(e.id)
          : p;
      }
    },
    24: function (e, t, r) {
      r.d(t, "i", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "m", function () {
          return c;
        }),
        r.d(t, "n", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "g", function () {
          return d;
        }),
        r.d(t, "h", function () {
          return f;
        }),
        r.d(t, "f", function () {
          return y;
        }),
        r.d(t, "j", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return m;
        }),
        r.d(t, "l", function () {
          return b;
        }),
        r.d(t, "k", function () {
          return v;
        }),
        r.d(t, "d", function () {
          return g;
        }),
        r.d(t, "p", function () {
          return C;
        }),
        r.d(t, "o", function () {
          return E;
        });
      var i = r(2),
        n = r(59),
        a = r(79);
      function o(e) {
        return e.type === i.f.CIPHERTEXT || e.type === i.f.MD_PLACEHOLDER;
      }
      function s(e) {
        if (e.type !== i.f.RICH_HSM) return e.size;
        var t = e.richContent;
        return t && t.type !== i.f.LOCATION ? t.size : void 0;
      }
      function c(e) {
        return e.type === i.f.STICKER;
      }
      function p(e) {
        return e.type === i.f.VIDEO || e.type === i.f.GIF;
      }
      function u(e) {
        return (
          e.type === i.f.STICKER ||
          e.type === i.f.IMAGE ||
          e.type === i.f.VIDEO ||
          e.type === i.f.GIF ||
          e.type === i.f.PTT ||
          e.type === i.f.AUDIO ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.IMAGE) ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.VIDEO) ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.DOCUMENT) ||
          e.type === i.f.DOCUMENT
        );
      }
      function d(e) {
        return (
          e.type === i.f.IMAGE || e.type === i.f.VIDEO || e.type === i.f.GIF
        );
      }
      function f(e) {
        return (
          e.type === i.f.TEXT ||
          e.type === i.f.LOCATION ||
          e.type === i.f.GROUP_INVITE
        );
      }
      function y(e) {
        return (
          e.type === i.f.IMAGE ||
          e.type === i.f.STICKER ||
          e.type === i.f.VIDEO ||
          e.type === i.f.GIF ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.IMAGE) ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.VIDEO) ||
          (e.type === i.f.RICH_HSM &&
            !!e.richContent &&
            e.richContent.type === i.f.DOCUMENT) ||
          e.type === i.f.DOCUMENT
        );
      }
      function l(e) {
        return y(e) || f(e);
      }
      function h(e) {
        if (e.hasPreview) return e.id;
      }
      function m(e) {
        if (e.hasPreview)
          return e.media && "media" === e.hasPreview
            ? (0, n.u)(e.media)
            : e.media && "mms" === e.hasPreview
            ? (0, n.t)(e.media)
            : e.id;
      }
      function b(e) {
        return (
          e.type === i.f.IMAGE ||
          e.type === i.f.VIDEO ||
          e.type === i.f.GIF ||
          e.type === i.f.TEXT
        );
      }
      function v(e) {
        return void 0 === e.chat;
      }
      function g(e) {
        return e.type === i.f.DOCUMENT && !0 === e.isVCard;
      }
      function C(e, t) {
        return e.type === i.f.PTT || ((0, a.b)(e) && null != e.viewOnceState);
      }
      function E(e) {
        return !v(e) && null != e.viewOnceState && (0, a.b)(e);
      }
    },
    58: function (e, t, r) {
      r.d(t, "a", function () {
        return g;
      }),
        r.d(t, "c", function () {
          return C;
        }),
        r.d(t, "d", function () {
          return w;
        }),
        r.d(t, "b", function () {
          return I;
        });
      var i = r(59),
        n = r(217),
        a = r(2),
        o = r(15),
        s = r(31),
        c = r.n(s),
        p = r(49),
        u = r(36),
        d = r(133),
        f = r(135),
        y = r(24),
        l = r(80),
        h = r(6),
        m = r(79),
        b = r(23),
        v = null;
      function g(e) {
        v = e;
      }
      function C(e) {
        var t, r, s;
        switch (e.type) {
          case a.f.TEXT:
            var f = e.linkPreview;
            t = {
              type: "text",
              text: e.text,
              linkPreview: f
                ? Object.assign({}, f, { preview: (0, y.c)(e), bg: e.bg })
                : void 0,
            };
            break;
          case a.f.EXTENDED_TEXT:
            t = { type: "text", text: e.text };
            break;
          case a.f.FUTUREPROOF:
            t = { type: "futureproof", subtype: e.subtype };
            break;
          case a.f.REVOKED:
            t = { type: "revoked" };
            break;
          case a.f.CIPHERTEXT:
            t = { type: "ciphertext" };
            break;
          case a.f.MD_PLACEHOLDER:
            t = { type: "placeholder" };
            break;
          case a.f.IDENTITY_CHANGE:
            t = { type: "keyschanged", subtype: e.subtype || "primary" };
            break;
          case a.f.PRIVACY_CHANGE:
            t = { type: "privacy", subtype: e.subtype };
            break;
          case a.f.GROUP_NOTIFICATION:
            t = w(e);
            break;
          case a.f.BUSINESS_NOTIFICATION:
            t = I(e);
            break;
          case a.f.IMAGE:
            var l = {
              type: "image",
              mediaStatus: (0, d.a)(e, v),
              preview: (0, y.b)(e),
              highResPreview: null,
              height: e.height,
              width: e.width,
              caption: e.text,
              bg: e.bg,
              size: e.size,
            };
            (t = l), null != e.viewOnceState && (l.viewOnceState = (0, m.d)(e));
            break;
          case a.f.STICKER:
            var g = {
              type: "sticker",
              mediaStatus: (0, d.a)(e, v),
              preview: (0, y.b)(e),
              height: e.height,
              width: e.width,
              size: e.size,
              highResPreview: e.frame,
            };
            (t = g), (g.isNotNativeSupported = !0);
            break;
          case a.f.PTT:
            t = {
              type: "voice",
              duration: e.duration,
              mediaStatus: (0, d.a)(e, v),
              isPtt: !0,
              size: e.size,
              waveform: e.waveform,
            };
            break;
          case a.f.VIDEO:
            var C = {
              type: "video",
              mediaStatus: (0, d.a)(e, v),
              duration: e.duration,
              rotation: e.rotation,
              size: e.size,
              width: e.width,
              height: e.height,
              caption: e.text,
              preview: (0, y.b)(e),
              highResPreview: e.frame,
              bg: e.bg,
            };
            (t = C), null != e.viewOnceState && (C.viewOnceState = (0, m.d)(e));
            break;
          case a.f.GIF:
            t = {
              type: "gif",
              mediaStatus: (0, d.a)(e, v),
              duration: e.duration,
              rotation: e.rotation,
              size: e.size,
              width: e.width,
              height: e.height,
              caption: e.text,
              preview: (0, y.b)(e),
              highResPreview: e.frame,
              attribution: e.gifAttribution,
              bg: e.bg,
            };
            break;
          case a.f.AUDIO:
            t = {
              type: "voice",
              duration: e.duration,
              mediaStatus: (0, d.a)(e, v),
              isPtt: !1,
              size: e.size,
            };
            break;
          case a.f.VCARD:
            t = {
              type: "vcard",
              contacts: (0, n.f)(e.contacts),
              total: e.contacts.length,
            };
            break;
          case a.f.LOCATION:
            t = {
              type: "location",
              lat: e.degreesLatitude,
              lng: e.degreesLongitude,
              address: e.address,
              name: e.name,
              url: e.url,
              preview: (0, y.c)(e),
            };
            break;
          case a.f.GROUP_INVITE:
            t = {
              type: "group_invite",
              groupJid: e.groupJid,
              groupName: (0, u.m)(e.groupName),
              inviteExpiration: e.inviteExpiration,
              inviteCode: e.inviteCode,
              caption: e.caption,
              preview: (0, y.c)(e),
            };
            break;
          case a.f.RICH_HSM:
            t = {
              type: "rich_hsm",
              title: e.title,
              content: e.content,
              footer: e.footer,
            };
            var T = e.richContent,
              O = e.buttons;
            if (T)
              switch (T.type) {
                case a.f.IMAGE:
                case a.f.VIDEO:
                  T.type === a.f.IMAGE
                    ? (t = Object.assign({}, t, {
                        richContent: {
                          type: "image",
                          mediaStatus: (0, d.a)(e, v),
                          preview: (0, y.b)(e),
                          caption: "",
                          bg: e.bg,
                          height: T.height,
                          width: T.width,
                          size: T.size,
                          highResPreview: null,
                        },
                      }))
                    : (T.type,
                      (t = Object.assign({}, t, {
                        richContent: {
                          type: "video",
                          mediaStatus: (0, d.a)(e, v),
                          preview: (0, y.b)(e),
                          caption: "",
                          bg: e.bg,
                          height: T.height,
                          width: T.width,
                          size: T.size,
                          duration: T.duration,
                          rotation: T.rotation,
                          highResPreview: T.frame,
                        },
                      })));
                  break;
                case a.f.LOCATION:
                  t = Object.assign({}, t, {
                    richContent: {
                      type: "location",
                      lat: T.degreesLatitude,
                      lng: T.degreesLongitude,
                      address: T.address,
                      name: T.name,
                      url: T.url,
                      preview: (0, y.b)(e),
                    },
                  });
                  break;
                case a.f.DOCUMENT:
                  t = Object.assign({}, t, {
                    richContent: {
                      type: "document",
                      mediaStatus: (0, d.a)(e, v),
                      preview: (0, y.b)(e),
                      mimetype: T.mimetype,
                      fileName: T.fileName,
                      size: T.size,
                      pages: T.isVCard ? T.contactsCount : T.pages,
                      isVCard: !!T.isVCard,
                    },
                  });
                  break;
                default:
                  return (0, c.a)(T.type);
              }
            if (O) {
              var k = O.map((e) => {
                switch (e.type) {
                  case a.d.URL:
                    return {
                      type: "url",
                      displayText: e.displayText,
                      url: e.url,
                    };
                  case a.d.QUICK_REPLY:
                    return {
                      type: "quick_reply",
                      displayText: e.displayText,
                      payload: e.payload,
                      pressed: e.pressed,
                    };
                  case a.d.CALL:
                    return {
                      type: "call",
                      displayText: e.displayText,
                      phoneNumber: e.phoneNumber,
                    };
                  default:
                    return (0, c.a)(e);
                }
              });
              t = Object.assign({}, t, { buttons: k });
            }
            break;
          case a.f.HSM_BUTTON_REPLY:
            t = { type: "text", text: e.selectedDisplayText };
            break;
          case a.f.DOCUMENT:
            (r = e),
              (s = (0, d.a)(r, v)),
              (t =
                r.isVCard && r.uiVCards && null != r.contactsCount
                  ? {
                      type: "vcard",
                      contacts: r.uiVCards,
                      total: r.contactsCount,
                      isMMS: !0,
                      mediaStatus: s,
                      size: r.size,
                    }
                  : {
                      type: "document",
                      mediaStatus: s,
                      mimetype: r.mimetype,
                      fileName: r.fileName,
                      preview: (0, y.b)(r),
                      bg: r.bg,
                      size: r.size,
                      pages: r.isVCard ? r.contactsCount : r.pages,
                      isVCard: !!r.isVCard,
                      mmsThumb: r.mmsThumb,
                    });
            break;
          case a.f.CONTACT_BLOCK_CHANGE:
            t = { type: "contact_block_change", blocked: e.blocked };
            break;
          case a.f.EPHEMERAL:
            "fail" === e.subtype
              ? (t = {
                  type: "ephemeral_change_fail",
                  expiration: e.expiration,
                })
              : "default-disappearing-mode" === e.subtype
              ? (t = (0, b.a)("disappearing_mode")
                  ? {
                      type: "default-disappearing-mode",
                      ephemeralExpiration: e.ephemeralExpiration,
                      initiator: e.initiator,
                    }
                  : {
                      type: "ephemeral_change",
                      ephemeralExpiration: e.ephemeralExpiration,
                    })
              : (e.subtype,
                (t = {
                  type: "ephemeral_change",
                  ephemeralExpiration: e.ephemeralExpiration,
                }));
            break;
          default:
            return (0, c.a)(e);
        }
        var _,
          N = e.author;
        _ = N === a.b ? { fromMe: !0, ack: e.ack } : { author: (0, p.i)(N) };
        var x = {
          id: e.id,
          chatId: e.chat,
          ts: e.ts,
          meta: _,
          content: t,
          mentionedJids: e.mentionedJids,
          starred: e.starred,
          kept: e.kept,
          remoteJid: e.remoteJid,
          expiration: e.expiration || void 0,
          validUntil: e.validUntil,
        };
        e.bizConflict &&
          ((x.bizConflict = e.bizConflict), (x.bizInfo = e.bizInfo)),
          e.reactions && (x.reactions = e.reactions);
        var S = (function (e) {
          var t = e.forwardingScore;
          null == t && (t = e.isForwarded ? 1 : 0);
          var r = h.E.get(),
            i = r.frequentlyForwardedThreshold,
            n = r.frequentlyForwardedMessages;
          return t >= u.a
            ? { status: "frequently-forwarded" }
            : n && t >= i - 1 && e.author !== a.b
            ? { status: "will-become-frequently-forwarded", score: t }
            : t > 0
            ? { status: "forwarded", score: t }
            : void 0;
        })(e);
        S && (x.forwarded = S);
        var M = e.quoted;
        return (
          M &&
            (x.quoted = (function (e, t) {
              var r = e.author,
                n = r === a.b ? { fromMe: !0 } : { fromMe: !1, author: r },
                s = (0, p.d)(e.content),
                c = void 0;
              return (
                s &&
                  s.type === a.f.STICKER &&
                  null != e.id &&
                  (c = (0, i.c)(e.id)),
                {
                  remoteJid: e.remoteJid,
                  id: e.id,
                  ts: e.ts,
                  meta: n,
                  content: s ? E(s) : e.content,
                  mentionedJids: e.mentionedJids,
                  preview: e.hasPreview ? (0, o.F)(t) : null,
                  stickerPreviewMsgId: c,
                  bg: e.bg,
                }
              );
            })(M, e.id)),
          x
        );
      }
      function E(e) {
        switch (e.type) {
          case a.f.TEXT:
            return { type: "text", text: (0, u.m)(e.text) };
          case a.f.IMAGE:
            return null != e.viewOnceState
              ? { type: "viewOnceImage", viewOnceState: m.a }
              : { type: "image", caption: (0, u.l)(e.text) };
          case a.f.STICKER:
            return { type: "sticker" };
          case a.f.PTT:
            return { type: "voice", duration: e.duration, isPtt: !0 };
          case a.f.VIDEO:
            return null != e.viewOnceState
              ? { type: "viewOnceVideo", viewOnceState: m.a }
              : {
                  type: "video",
                  duration: e.duration,
                  caption: (0, u.l)(e.text),
                };
          case a.f.GIF:
            return { type: "gif", caption: (0, u.l)(e.text) };
          case a.f.AUDIO:
            return { type: "voice", duration: e.duration, isPtt: !1 };
          case a.f.VCARD:
            return {
              type: "vcard",
              displayNames: (0, n.l)(e.contacts).map((e) =>
                (0, u.m)(e.displayName)
              ),
              total: e.contacts.length,
            };
          case a.f.LOCATION:
            return { type: "location", address: e.address, name: e.name };
          case a.f.GROUP_INVITE:
            return { type: "group_invite", caption: (0, u.l)(e.caption) };
          case a.f.RICH_HSM:
            return {
              type: "rich_hsm",
              text: (0, f.c)((0, u.l)(e.title), (0, u.m)(e.content), null),
              subtype: (0, f.d)(e.richContent),
            };
          case a.f.HSM_BUTTON_REPLY:
            return { type: "hsm_button_reply", text: e.selectedDisplayText };
          case a.f.DOCUMENT:
            return e.isVCard && null != e.contactsCount
              ? {
                  type: "vcard",
                  displayNames: e.uiVCards
                    ? e.uiVCards.map((e) => e.displayName)
                    : [(0, l.i)(e.fileName)],
                  total: e.contactsCount,
                }
              : {
                  type: "document",
                  fileName: e.fileName,
                  mimetype: e.mimetype,
                };
          default:
            return (0, c.a)(e.type);
        }
      }
      function w(e) {
        var t,
          r,
          i = e.subtype;
        switch (i) {
          case "add":
          case "remove":
          case "promote":
          case "demote":
            return {
              type: "gp2",
              subtype: i,
              subjectIsMe: !!e.involvesMe,
              participants: e.participants || [],
            };
          case "invite":
          case "leave":
          case "modify":
          case "accept":
            return {
              type: "gp2",
              subtype: i,
              subject: e.participants && e.participants[0],
            };
          case "subject":
            return {
              type: "gp2",
              subtype: i,
              title: null != (t = (0, u.l)(e.title)) ? t : "",
            };
          case "create":
            return {
              type: "gp2",
              subtype: i,
              title: null != (r = (0, u.l)(e.title)) ? r : void 0,
            };
          case "description":
          case "description_remove":
          case "revoke_invite":
          case "delete":
          case "closed":
          case "picture":
          case "picture_remove":
          case "locked":
          case "unlocked":
            return { type: "gp2", subtype: i };
          case "announcement":
            return { type: "gp2", subtype: "announce", announce: !0 };
          case "not_announcement":
            return { type: "gp2", subtype: "announce", announce: !1 };
          case "restrict":
            return { type: "gp2", subtype: i, restrict: !!e.restrict };
          case "ephemeral":
            return {
              type: "gp2",
              subtype: "ephemeral",
              expiration: e.expiration,
            };
          case "ephemeral_authorless":
            return {
              type: "gp2",
              subtype: "ephemeral_authorless",
              expiration: e.expiration,
            };
          case "growth_locked":
            return { type: "gp2", subtype: "growth_locked" };
          case "growth_unlocked":
            return { type: "gp2", subtype: "growth_unlocked" };
          default:
            throw new Error(
              "groupNotificationContent unrecognized type " + e.subtype
            );
        }
      }
      function I(e) {
        if ("consumer" === e.subtype)
          return { type: "biz", subtype: "consumer", name: e.name };
        if (void 0 === e.name) return { type: "biz", subtype: e.subtype };
        var t = e;
        return { type: "biz", subtype: t.subtype, name: t.name };
      }
    },
  },
]);
