"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [60],
  {
    568: function (t, a, e) {
      e.r(a);
      var i = e(88),
        n = e(4),
        r = e(17),
        o = e(37),
        s = e(3),
        d = e(67),
        p = e(12),
        c = e(81),
        u = e(402),
        m = e(62),
        h = e(6);
      function g(t) {
        var a = [];
        return (
          t.forEachChildWithTag("message", (t) => {
            var e = t.attrString("id"),
              i = t.attrString("type");
            switch (i) {
              case "media":
                var n = t.child("media");
                n.assertAttr("type", "msg");
                var r = n.maybeAttrString("l10n"),
                  o = n.attrString("mediatype");
                if ("image" !== o && "video" !== o && "gif" !== o)
                  return (
                    __LOG__(3)`Unknown PSA status mediatype ${o}`,
                    void SEND_LOGS("unknown-psa-status-mediatype")
                  );
                var s = n.contentBytes(),
                  p = (0, d.a)(m.g, s);
                a.push({
                  id: e,
                  type: "media",
                  mediatype: o,
                  proto: p,
                  plaintext: s,
                  l10n: r,
                });
                break;
              case "text":
                var c = t.contentBytes(),
                  u = t.hasAttr("fb"),
                  h = (0, d.a)(m.g, c);
                a.push({
                  type: "text",
                  id: e,
                  fromFb: u,
                  plaintext: c,
                  proto: h,
                });
                break;
              default:
                return (
                  __LOG__(3)`Unknown PSA status type ${i}`,
                  void SEND_LOGS("unknown-psa-status-type")
                );
            }
          }),
          a
        );
      }
      var l = new i.b("incomingPSANotification", (t) => {
        t.assertTag("notification"), t.assertAttr("type", "psa");
        var a,
          e = t.attrString("id"),
          i = t.attrTime("t"),
          n = t.attrFromPhoneJid();
        if ("status" !== n.type)
          return (
            __LOG__(
              4
            )`Received status PSA notification from unknown author ${n}`,
            { type: "other", externalId: e, from: n, ts: i }
          );
        var r = t.maybeChild("campaign");
        if (r) {
          var o = r.attrString("id");
          a = r.hasChild("revoke")
            ? { campaignId: o, revoke: !0 }
            : {
                campaignId: o,
                messages: g(r),
                duration: r.maybeAttrInt("duration") || void 0,
              };
        } else a = { campaignId: e, messages: g(t) };
        return { type: "status", from: n, ts: i, campaign: a, externalId: e };
      });
      a.default = (0, i.c)("incomingPSANotification", l, (t) => {
        var a = (0, n.v)("ack", {
          to: (0, n.l)(t.from),
          participant: (0, n.j)(t.from),
          id: (0, n.b)(t.externalId),
          class: "notification",
        });
        switch (t.type) {
          case "status":
            var e = t.ts,
              i = t.campaign;
            if (i.revoke) return r.lc(i.campaignId).then(() => a);
            var d = i.campaignId,
              m = i.duration,
              g = i.messages,
              l = [];
            return (
              g.forEach((t) => {
                var a = (0, u.a)(
                  {
                    externalId: t.id,
                    author: "@psa",
                    ts: e,
                    proto: t.proto,
                    bytes: t.plaintext,
                    edit: -1,
                    verifiedNameSerial: null,
                    verifiedLevel: null,
                    verifiedNameCert: null,
                    pushname: null,
                    urlNumber: !1,
                    urlText: !1,
                    campaignId: d,
                    campaignDuration: m,
                  },
                  t.l10n,
                  t.fromFb
                );
                if (!a)
                  throw (
                    (__LOG__(4)`incomingPSANotification: unrecognized proto`,
                    SEND_LOGS("psa-notification-null"),
                    new Error("Unrecognized Proto"))
                  );
                var i = a.msg;
                if (
                  i.type === o.c.IMAGE ||
                  i.type === o.c.VIDEO ||
                  i.type === o.c.GIF
                ) {
                  var n = i.height,
                    r = i.width;
                  if (
                    n &&
                    r &&
                    !(function (t) {
                      var a = t.height,
                        e = t.width,
                        i = h.h.get();
                      return i.height > i.width ? a > e : e > a;
                    })({ height: n, width: r })
                  )
                    return void __LOG__(
                      2
                    )`incomingPSANotification: dropping media msg with wrong ratio`;
                }
                l.push(a);
              }),
              r
                .hd(l)
                .then((t) => {
                  var a = t.filter(Boolean);
                  if (0 !== a.length) {
                    var e = a[a.length - 1],
                      i = (0, c.c)(e.author, (0, s.E)());
                    i &&
                      (0, p.c)("event", "statusAuthorUpdated", { author: i });
                  }
                })
                .then(() => a)
            );
          default:
            return (
              __LOG__(3)`Unhandled incoming psa notification`,
              SEND_LOGS("unhandled-psa-notification", 0.1),
              a
            );
        }
      });
    },
  },
]);
