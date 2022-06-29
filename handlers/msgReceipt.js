"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [63],
  {
    656: function (e, r, t) {
      t.r(r),
        t.d(r, "fromJid", function () {
          return O;
        });
      var a = t(27),
        i = t.n(a),
        n = t(88),
        o = t(360),
        d = t(7),
        c = t(11),
        p = t(17),
        s = t(6),
        u = t(30),
        l = t(16),
        g = t(175),
        h = t(31),
        y = t.n(h),
        f = t(4),
        _ = t(486),
        m = t(39),
        v = t(134);
      function I(e) {
        if (!e.hasChild("biz")) return "NO_BIZ";
        var r = e.child("biz");
        return (0, g.getBspInfo)(r) || "NO_BSP";
      }
      t(515), t(518), t(354), t(328);
      var E = {
          read: m.a.READ,
          played: m.a.PLAYED,
          "server-error": m.a.CONTENT_GONE,
          inactive: m.a.INACTIVE_RECEIVED,
          none: m.a.RECEIVED,
        },
        S = new n.b("incomingMsgReceiptParser", (e) => {
          e.assertTag("receipt"), e.hasAttr("to") && (0, o.a)(e, "to");
          var r = e.maybeAttrString("type");
          if ("server-error" === r) {
            var t = e.attrFromPhoneJid(),
              a = e.maybeChild("encrypt"),
              i = e.attrString("id"),
              n = e.attrTime("t");
            return a
              ? {
                  type: "encrypted-reupload",
                  stanzaId: i,
                  externalId: i,
                  from: t,
                  ts: n,
                  ackString: r,
                  ciphertext: a.child("enc_p").contentBytes(),
                  iv: a.child("enc_iv").contentBytes(),
                }
              : {
                  type: "reupload",
                  stanzaId: i,
                  externalId: i,
                  from: t,
                  ts: n,
                  ackString: r,
                };
          }
          var d = e.maybeChild("participants");
          if (d) {
            var c = d.mapChildrenWithTag("user", (e) => ({
              participant: e.attrPhoneDeviceJid("jid"),
              ts: e.attrTime("t"),
            }));
            return {
              type: "aggregate",
              stanzaId: e.attrString("id"),
              externalId: d.attrString("key"),
              fromJid: e.attrJidWithType(),
              ackString: r,
              receipts: c,
            };
          }
          var p,
            s = e.attrFromPhoneJid(),
            u = e.attrString("id"),
            l = "error" === r ? e.child("error").attrString("type") : null;
          return (
            (p = e.hasChild("list")
              ? e
                  .child("list")
                  .mapChildrenWithTag("item", (e) => e.attrString("id"))
              : []).push(u),
            {
              type: "simple",
              stanzaId: u,
              externalIds: p,
              from: s,
              ts: e.attrTime("t"),
              ackString: r,
              bizInfo: I(e),
              errorType: l,
            }
          );
        });
      function b(e) {
        var r = e.stanzaId,
          t = e.ackString,
          a = e.from;
        return (0, f.v)("ack", {
          to: (0, f.l)(a),
          id: (0, f.b)(r),
          class: "receipt",
          type: (0, f.i)(t),
          participant: (0, f.j)(a),
        });
      }
      function R(e, r) {
        var t = E[r || "none"] || m.a.RECEIVED;
        return (0, m.h)(t) &&
          (function (e) {
            return !e && "none" === s.j.get().readReceipts;
          })(e)
          ? m.a.RECEIVED
          : t;
      }
      function x() {
        return (x = i()(function* (e) {
          var r = b(e),
            t = O(e.from);
          if (!t) return r;
          var a = e.from,
            i = e.stanzaId,
            n = yield (0, p.U)("reupload", t, a.author, i);
          if (n.error)
            return (
              __LOG__(2)`handleEncryptedReuploadReceipt: Msg ${(0, v.a)(
                i
              )} no longer exist`,
              r
            );
          var o = n.dbMsg,
            c = yield (0, p.v)(o.id);
          if (!c)
            return (
              __LOG__(2)`handleEncryptedReuploadReceipt: Msg ${(0, v.a)(
                i
              )} no longer exist`,
              r
            );
          var s = c.msg,
            g = c.media.mediaEntries[s.id];
          if (!g)
            return (
              __LOG__(
                3
              )`handleEncryptedReuploadReceipt: Media entry not found for ${s.id} longer exist`,
              SEND_LOGS("no-media-entry"),
              r
            );
          if ("reupload" === e.type)
            return (0, u.b)()
              .waitUntilPersisted(
                l.e.reuploadMedia(e.externalId, t, (0, d.h)(e.from.author))
              )
              .then(() => r);
          var h = e.iv,
            y = e.ciphertext,
            f = yield (0, _.b)(g.cryptoKey, i, h, y);
          return f.stanzaId !== i
            ? (__LOG__(
                4
              )`handleEncryptedReuploadReceipt: Incorrect server-error receipt: ${
                f.stanzaId ? (0, v.a)(f.stanzaId) : "missing"
              }-${(0, v.a)(i)}`,
              SEND_LOGS("server-error-receipt-mismatch"),
              r)
            : (0, u.b)()
                .waitUntilPersisted(l.e.reuploadMedia(i, t, (0, d.h)(a.author)))
                .then(() => r);
        })).apply(this, arguments);
      }
      function O(e) {
        switch (e.type) {
          case "device":
            return e.chat;
          case "group":
            return e.groupJid;
          case "status":
            return c.h;
          case "broadcast":
            return (
              __LOG__(
                4
              )`Unexpected receipt received for broadcastlist ${e.broadcastJid}`,
              void SEND_LOGS("unexpected-broadcast-receipt")
            );
          default:
            return (0, y.a)(e.type);
        }
      }
      r.default = (0, n.c)("handleMsgReceipt", S, (e) => {
        var r;
        return (
          __LOG__(
            2
          )`handleMsgReceipt processing ${e.type} receipt, ack ${e.ackString}`,
          "simple" === e.type
            ? (r = (function (e) {
                var r,
                  t = e.from,
                  a = e.externalIds,
                  i = e.ts,
                  n = e.ackString,
                  o = e.bizInfo,
                  d = e.errorType,
                  c = b(e),
                  s = O(t);
                return s
                  ? ((r =
                      null != d
                        ? { type: "receipt-error", error: d }
                        : R("group" === t.type, n)),
                    (0, p.Oc)(a, s, t.author, i, r, o).then(() => c))
                  : Promise.resolve(c);
              })(e))
            : "aggregate" === e.type
            ? (r = (function (e) {
                var r = e.fromJid,
                  t = e.ackString,
                  a = (function (e) {
                    var r = e.stanzaId,
                      t = e.ackString,
                      a = e.fromJid;
                    return (0, f.v)("ack", {
                      to: (0, f.g)((0, d.g)(a)),
                      id: (0, f.b)(r),
                      class: "receipt",
                      type: (0, f.i)(t),
                    });
                  })(e),
                  i = R("group" === r.jidType, t);
                switch (r.jidType) {
                  case "group":
                    return (0, p.Pc)(
                      e.externalId,
                      r.groupJid,
                      e.receipts,
                      i
                    ).then(() => a);
                  case "status":
                    return (0, p.Pc)(e.externalId, c.h, e.receipts, i).then(
                      () => a
                    );
                  default:
                    return (
                      __LOG__(
                        4
                      )`Expected aggregate receipt to come for group JID or status, got ${
                        r.jidType
                      } jid: ${(0, d.g)(r)}`,
                      SEND_LOGS("non-group-aggregate-receipt"),
                      a
                    );
                }
              })(e))
            : "hist_sync" === e.type
            ? (r = Promise.resolve(b(e)))
            : (e.type,
              (r = (function (e) {
                return x.apply(this, arguments);
              })(e))),
          r
        );
      });
    },
  },
]);
