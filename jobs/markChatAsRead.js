"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [94],
  {
    590: function (r, a, e) {
      e.r(a);
      var t = e(75),
        i = e(17),
        p = e(28),
        n = e(10),
        l = e(6),
        s = e(7),
        u = e(4),
        c = e(400);
      function d(r, a, e, t) {
        return (0, c.a)(e, 20).map((e) => {
          var i = null;
          e.length > 1 &&
            (i = (0, u.v)(
              "list",
              null,
              e.slice(1).map((r) => (0, u.v)("item", { id: (0, u.b)(r) }))
            ));
          var n = (0, u.v)(
            "receipt",
            {
              to: (0, u.g)(r),
              type: "read",
              id: (0, u.b)(e[0]),
              t: (0, u.b)(String(t)),
              participant: a ? (0, u.g)(a) : u.d,
            },
            i
          );
          return (0, p.l)(n, {
            id: e[0],
            class: "receipt",
            type: "read",
            from: r,
            participant: a ? (0, s.e)(a) : null,
          });
        });
      }
      a.default = (0, t.c)()
        .step("gatherMsgs", (r) => {
          var a = r.chat,
            e = r.startMsg,
            t = r.endMsg;
          return (0, i.Kc)(a, e, t);
        })
        .finalStep("updateDbAndSend", (r, a, e) => {
          var t = a.chat,
            h = e.jobStartTime;
          if (r) {
            var o = (0, i.Hb)(r.chatId, r.upTo);
            if ("all" !== l.j.get().readReceipts && null === (0, s.p)(t))
              return o;
            var v = [];
            if (r.type)
              if ("user" === r.type) {
                var f = r.unread,
                  g = r.userJid,
                  b = r.broadcast,
                  m = d(g, null, f, h);
                v.push(...m),
                  (0, n.w)(b).forEach((r) => {
                    var a = d(r, g, b[r], h);
                    v.push(...a);
                  });
              } else {
                r.type;
                var y = r.unread,
                  w = r.groupJid;
                (0, n.w)(y).forEach((r) => {
                  var a = d(w, r, y[r], h);
                  v.push(...a);
                });
              }
            else {
              var S = r.byAuthor,
                E = [];
              (0, n.w)(S).forEach((r) => {
                (0, c.a)(S[r], 20).forEach((a) => {
                  E.push({ author: r, ids: a });
                });
              });
              var J = E.map((r) => {
                var a = r.author,
                  e = r.ids,
                  i = a !== t ? a : null,
                  n = null;
                e.length > 1 &&
                  (n = (0, u.v)(
                    "list",
                    null,
                    e.slice(1).map((r) => (0, u.v)("item", { id: (0, u.b)(r) }))
                  ));
                var l = String(h),
                  c = (0, u.v)(
                    "receipt",
                    {
                      to: (0, u.g)(t),
                      type: "read",
                      id: (0, u.b)(e[0]),
                      t: (0, u.b)(l),
                      participant: i ? (0, u.g)(i) : u.d,
                    },
                    n
                  );
                return (0, p.l)(c, {
                  id: e[0],
                  class: "receipt",
                  type: "read",
                  from: t,
                  participant: i ? (0, s.e)(i) : null,
                });
              });
              v.push(...J);
            }
            return Promise.all([o, ...v]).then(() => {});
          }
          __LOG__(2)`markChatAsRead no change`;
        })
        .end();
    },
  },
]);
