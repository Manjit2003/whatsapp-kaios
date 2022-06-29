"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [2],
  {
    485: function (t, e, r) {
      r.r(e),
        r.d(e, "initLocalSettingsFromServer", function () {
          return G;
        }),
        r.d(e, "updateServerWhitelistJob", function () {
          return O;
        }),
        r.d(e, "ensureStatusSettingsInitialized", function () {
          return P;
        });
      var s = r(27),
        i = r.n(s),
        n = r(28),
        a = r(4),
        o = r(75),
        l = r(46),
        u = r(17),
        c = r(63),
        d = r(31),
        h = r.n(d),
        v = r(83),
        f = r(84),
        p = r(21),
        g = r(30),
        S = r(16),
        _ = r(6),
        w = { 404: (0, v.d)("item-not-found"), 500: (0, v.d)("unknown") },
        y = new l.a("setStatusPrivacyParser", (t) => ({
          result: t.attrString("type"),
        }));
      function b(t) {
        var e;
        switch (t.type) {
          case "contacts":
            e = [];
            break;
          case "whitelist":
            e = t.whitelist;
            break;
          case "blacklist":
            e = t.blacklist;
            break;
          default:
            return (0, h.a)(t.type);
        }
        return (0, n.e)(
          (0, a.v)(
            "iq",
            { to: a.k, type: "set", xmlns: "status", id: (0, a.t)() },
            (0, a.v)(
              "privacy",
              null,
              (0, a.v)(
                "list",
                { type: (0, a.b)(t.type) },
                e.map((t) => (0, a.v)("user", { jid: (0, a.g)(t) }))
              )
            )
          ),
          y
        ).then((t) => (t.success ? { result: "success" } : (0, v.f)(t, w)));
      }
      e.default = (0, o.c)()
        .step("setLocalStatusSettings", (t) => (0, u.Ec)(t))
        .finalStep(
          "setServerStatusSettings",
          i()(function* () {
            var t = yield (0, u.ib)();
            return t
              ? b((0, f.l)(t))
              : { error: { reason: "not-initialized" } };
          })
        )
        .end();
      var k = {
          contacts: "contacts",
          blacklist: "blacklist",
          whitelist: "whitelist",
        },
        m = new l.a("getStatusPrivacyParser", (t) => {
          var e;
          function r(t, r) {
            r.hasAttr("default") &&
              (e &&
                r.throw(
                  `to only have one default child. Found two ${e} & ${t}`
                ),
              (e = t));
          }
          var s = new Set(),
            i = new Set();
          return (
            t.child("privacy").forEachChildWithTag("list", (t) => {
              var e = t.attrEnum("type", k);
              switch (e) {
                case "contacts":
                  return void r("contacts", t);
                case "whitelist":
                  t.forEachChildWithTag("user", (t) => {
                    s.add(t.attrPhoneUserJid("jid"));
                  }),
                    r("whitelist", t);
                  break;
                case "blacklist":
                  t.forEachChildWithTag("user", (t) => {
                    i.add(t.attrPhoneUserJid("jid"));
                  }),
                    r("blacklist", t);
                  break;
                default:
                  return (0, h.a)(e);
              }
            }),
            e
              ? { type: e, whitelist: (0, p.c)(s), blacklist: (0, p.c)(i) }
              : t.throw("to have one node with default attribute")
          );
        }),
        L = { 404: (0, v.d)("item-not-found"), 500: (0, v.d)("unknown") },
        G = (0, o.c)()
          .step("initLocalSettingsFromServer", () =>
            _.k.get()
              ? (0, u.ib)().then((t) =>
                  t
                    ? (__LOG__(
                        3
                      )`initLocalSettingsFromServer settings already found locally`,
                      { result: "ok", settings: t })
                    : (0, n.e)(
                        (0, a.v)(
                          "iq",
                          {
                            to: a.k,
                            type: "get",
                            xmlns: "status",
                            id: (0, a.t)(),
                          },
                          (0, a.v)("privacy", null)
                        ),
                        m
                      )
                        .then((t) => {
                          if (!t.success) {
                            var e = (0, v.f)(t, L);
                            return "item-not-found" !== e.error.reason
                              ? void __LOG__(
                                  4
                                )`fetchInitialServerStatusSettings error server response ${e.error.reason}`
                              : (0, c.f)().then((t) => ({
                                  result: "no-server-value",
                                  settings: {
                                    type: "contacts",
                                    participants: (0, p.m)(t),
                                    whitelist: (0, p.f)(),
                                    blacklist: (0, p.f)(),
                                  },
                                }));
                          }
                          var r = t.result;
                          return (0, c.f)().then((t) => {
                            var e = (0, f.d)(t, (0, f.l)(r), r);
                            return {
                              result:
                                r.whitelist.length !== e.whitelist.length
                                  ? "whitelist-updated"
                                  : "ok",
                              settings: e,
                            };
                          });
                        })
                        .then((t) => {
                          if (t) return (0, u.uc)(t.settings).then(() => t);
                          __LOG__(3)`Server did not return anything`;
                        })
                )
              : (__LOG__(
                  2
                )`Tried to get initial status settings before syncing contacts db. Waiting for sync to happen first`,
                Promise.resolve())
          )
          .finalStep("updateServerWhitelist", (t) => {
            if (!t) return { error: { reason: "error" } };
            var e = t.settings,
              r = t.result;
            return "ok" === r
              ? { result: e }
              : "no-server-value" === r
              ? b({ type: "contacts" }).then((t) =>
                  null != t.error
                    ? (__LOG__(
                        4
                      )`initLocalSettingsFromServer error trying to set default settings reason ${t.error.reason}`,
                      { error: { reason: "error" } })
                    : { result: e }
                )
              : W(e).then((t) =>
                  "error" === t ? { error: { reason: "error" } } : { result: e }
                );
          })
          .end(),
        O = (0, o.c)()
          .finalStep("updateServerWhitelist", () =>
            (0, u.ib)().then((t) => {
              if (t) return W(t).then(() => {});
            })
          )
          .end();
      function W(t) {
        return "whitelist" === t.type
          ? (__LOG__(2)`updateServerWhitelist updating server`,
            b({ type: "whitelist", whitelist: t.whitelist }).then((t) =>
              null != t.error
                ? (__LOG__(
                    4
                  )`updateServerSettings error trying to set default settings reason ${t.error.reason}`,
                  "error")
                : "success"
            ))
          : (__LOG__(2)`updateServerWhitelist no need to update server`,
            Promise.resolve("success"));
      }
      function P() {
        return (0, u.ib)().then((t) =>
          t
            ? (__LOG__(
                2
              )`ensureStatusSettingsInitialized settings found locally`,
              "success")
            : (0, g.b)()
                .waitUntilCompleted(S.e.initLocalSettingsFromServer())
                .then((t) =>
                  t.error
                    ? "error"
                    : (__LOG__(
                        2
                      )`ensureStatusSettingsInitialized settings initialized properly`,
                      "success")
                )
        );
      }
    },
  },
]);
