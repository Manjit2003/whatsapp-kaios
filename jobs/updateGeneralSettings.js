"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [142],
  {
    589: function (e, t, a) {
      a.r(t);
      var s = a(28),
        r = a(109),
        n = a(4),
        i = a(75),
        o = a(46),
        l = a(15),
        c = a(6),
        u = a(12),
        d = a(21),
        g = a(122),
        p = a(23),
        v = a(14),
        f = {
          all: "all",
          none: "none",
          contacts: "contacts",
          contact_blacklist: "contact_blacklist",
        },
        h = { all: "all", none: "none", contacts: "contacts" },
        m = { all: "all", none: "none" },
        b = ["lastSeen", "profilePhoto", "readReceipts", "about", "groupAdd"],
        k = new o.a("setPrivacyParser", (e) => {
          var t = e.child("privacy"),
            a = c.j.get(),
            s = {};
          return (
            t.forEachChildWithTag("category", (e) => {
              var t = e.attrString("name"),
                r = "error" === e.attrString("value");
              if (t === l.n.readReceipts)
                s.readReceipts = r ? a.readReceipts : e.attrEnum("value", m);
              else if (t === l.n.lastSeen)
                s.lastSeen = r ? a.lastSeen : e.attrEnum("value", h);
              else if (t === l.n.profilePhoto)
                s.profilePhoto = r ? a.profilePhoto : e.attrEnum("value", h);
              else if (t === l.n.about)
                s.about = r ? a.about : e.attrEnum("value", h);
              else if (t === l.n.groupAdd)
                if (r) s.groupAdd = a.groupAdd;
                else {
                  var n = e.attrEnum("value", f);
                  "contact_blacklist" === n
                    ? ((s.groupAdd = "contact_blacklist"),
                      (s.groupAddBlacklistHash = e.attrString("dhash")))
                    : (s.groupAdd = n);
                }
            }),
            s
          );
        }),
        _ = new o.a("setDisappearingMsgsDefaultTimer", (e) => ({}));
      t.default = (0, i.c)()
        .step("setPrivacySettings", (e) => {
          var t = c.j.get(),
            a = [];
          b.forEach((s) => {
            if (
              "groupAdd" === s &&
              e.groupAdd &&
              "contact_blacklist" === e.groupAdd &&
              e.groupAddBlacklist
            ) {
              var r = (function (e, t) {
                  var a = e.groupAddBlacklist || (0, d.f)(),
                    s = t.groupAddBlacklist || (0, d.f)();
                  return {
                    added: (0, d.n)(s, a),
                    removed: (0, d.n)(a, s),
                    hash: e.groupAddBlacklistHash,
                  };
                })(t, e),
                i = r.added,
                o = r.removed,
                c = r.hash,
                u = i.map((e) =>
                  (0, n.v)("user", { action: "add", jid: (0, n.g)(e) })
                );
              o.forEach((e) => {
                u.push(
                  (0, n.v)("user", { action: "remove", jid: (0, n.g)(e) })
                );
              }),
                ("contact_blacklist" !== t.groupAdd || u.length > 0) &&
                  a.push(
                    (0, n.v)(
                      "category",
                      {
                        name: (0, n.b)(l.n.groupAdd),
                        value: (0, n.b)("contact_blacklist"),
                        dhash: c ? (0, n.b)(c) : (0, n.b)("none"),
                      },
                      u
                    )
                  );
            } else
              e[s] &&
                e[s] !== t[s] &&
                a.push(
                  (0, n.v)("category", {
                    name: (0, n.b)(l.n[s]),
                    value: (0, n.b)(e[s]),
                  })
                );
          });
          var i =
              0 === a.length
                ? Promise.resolve({ success: !0, result: {} })
                : (0, s.h)(
                    (0, n.v)(
                      "iq",
                      {
                        to: n.k,
                        type: "set",
                        id: (0, n.t)(),
                        xmlns: "privacy",
                      },
                      (0, n.v)("privacy", null, a)
                    ),
                    k
                  ),
            o = Object.assign({}, e);
          return (
            (o.disappearingMsgsDefaultTimer = t.disappearingMsgsDefaultTimer),
            i
              .then((e) => {
                if (e.success) {
                  var a = e.result;
                  return (
                    c.j.set(Object.assign({}, t, o, a)),
                    (0, u.c)("page", "generalSettings", {
                      settings: c.j.get(),
                    }),
                    { status: "ok" }
                  );
                }
                return (
                  c.j.set(Object.assign({}, t, o)),
                  (0, u.c)("page", "generalSettings", { settings: c.j.get() }),
                  { status: "network_error" }
                );
              })
              .catch(
                (0, g.a)(
                  r.a,
                  () => (
                    __LOG__(2)`updateGeneralSettings disconnected error`,
                    c.j.set(Object.assign({}, t, o)),
                    (0, u.c)("page", "generalSettings", {
                      settings: c.j.get(),
                    }),
                    { status: "network_error" }
                  )
                )
              )
          );
        })
        .finalStep("updateDefaultDisappearingMode", (e, t) => {
          if ("ok" !== e.status) return e;
          if (null == t.disappearingMsgsDefaultTimer) return e;
          var a = c.j.get(),
            i = t.disappearingMsgsDefaultTimer || v.i,
            o = a.disappearingMsgsDefaultTimer || v.i;
          return ((0, p.a)("disappearing_mode") && i !== o
            ? (0, s.h)(
                (0, n.v)(
                  "iq",
                  {
                    to: n.k,
                    type: "set",
                    id: (0, n.t)(),
                    xmlns: "disappearing_mode",
                  },
                  (0, n.v)("disappearing_mode", { duration: (0, n.f)(i) })
                ),
                _
              )
            : Promise.resolve({ success: !0, result: {} })
          )
            .then((e) =>
              e.success ? { status: "ok" } : { status: "network_error" }
            )
            .catch(
              (0, g.a)(
                r.a,
                () => (
                  __LOG__(2)`updateDefaultDisappearingMode disconnected error`,
                  { status: "network_error" }
                )
              )
            )
            .then(
              (e) => (
                c.j.set(
                  Object.assign({}, a, { disappearingMsgsDefaultTimer: i })
                ),
                (0, u.c)("page", "generalSettings", { settings: c.j.get() }),
                e
              )
            );
        })
        .end();
    },
  },
]);
