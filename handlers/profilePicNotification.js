"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [65],
  {
    559: function (t, e, a) {
      a.r(e);
      var r = a(88),
        i = a(360),
        s = a(17),
        d = a(7),
        n = a(74),
        o = a(2),
        c = a(12),
        l = a(4),
        h = a(536),
        f = a(483),
        u = new r.b("incomingProfilePicNotificationParser", (t) => {
          var e, a;
          if ((t.assertTag("notification"), t.hasChild("delete")))
            (e = "delete"), (a = t.child("delete"));
          else if (t.hasChild("set")) (e = "set"), (a = t.child("set"));
          else {
            if (!t.hasChild("request"))
              return t.throw(
                "Expected child type to be one of: set, delete, request"
              );
            (e = "request"), (a = t.child("request")), (0, i.a)(a, "jid");
          }
          var r = t.attrString("id");
          return a.hasAttr("jid")
            ? {
                type: e,
                from: t.attrPhoneChatJid("from"),
                jid: a.attrPhoneChatJid("jid"),
                author: (0, i.b)(a, "author"),
                ts: t.attrTime("t"),
                rawTs: t.attrString("t"),
                stanzaId: r,
                picId: "set" === e ? a.attrInt("id", 1) : 0,
              }
            : {
                from: t.attrPhoneUserJid("from"),
                type: e,
                hash: a.attrString("hash"),
                stanzaId: r,
              };
        });
      function p(t, e) {
        switch (t) {
          case "delete":
            return (
              (0, c.c)("event", "avatarsUpdated", {
                changed: [{ jid: e, photoId: null }],
              }),
              (0, n.getProfilePicTable)().storeEmptyThumb(e)
            );
          case "set":
            return (
              (0, c.c)("event", "avatarsUpdated", { cleared: [e] }),
              (0, n.getProfilePicTable)().clearRecord(e)
            );
          default:
            return (0, h.resendProfilePicture)();
        }
      }
      e.default = (0, r.c)("handleProfilePicNotification", u, (t) => {
        if (void 0 !== t.jid) {
          var e = t.jid,
            a = t.rawTs,
            r = t.picId,
            i = t.ts,
            n = t.author,
            c = t.type,
            h = p(c, e),
            u =
              (0, d.p)(e) &&
              (0, s.gd)(e, {
                msg: {
                  externalId: JSON.stringify([a, r]),
                  ts: i,
                  author: n,
                  ack: o.a.RECEIVED,
                  type: o.f.GROUP_NOTIFICATION,
                  subtype: "delete" === c ? "picture_remove" : "picture",
                  altIndex: "",
                },
              });
          return Promise.all([h, u]).then(() =>
            (0, l.v)("ack", {
              id: (0, l.b)(t.stanzaId),
              to: (0, l.g)(t.from),
              class: "notification",
              type: "picture",
            })
          );
        }
        return (0, f.a)(t.hash)
          .then((e) => Promise.all(e.map((e) => p(t.type, e))))
          .then(() =>
            (0, l.v)("ack", {
              id: (0, l.b)(t.stanzaId),
              to: (0, l.g)(t.from),
              class: "notification",
              type: "picture",
            })
          );
      });
    },
  },
]);
