"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [155],
  {
    420: function (e, t, r) {
      r.r(t),
        r.d(t, "initializeMigrations", function () {
          return u;
        });
      var s = r(289),
        n = r(123),
        i = r(294),
        a = r(14),
        o = r(6),
        c = r(5);
      function u(e, t) {
        var u = t.mode;
        return "deleting" === u || "error" === u
          ? Promise.resolve({ type: "up-to-date" })
          : (0, c.d)(a.g).then((t) =>
              t
                ? ((0, s.b)(),
                  r(294),
                  r(105),
                  r(74),
                  r(52),
                  r(91),
                  r(142),
                  r(113),
                  (0, n.b)(),
                  r(551).registerCustomMigrations(),
                  (0, s.a)().then(() => {
                    var t = (0, s.d)(e);
                    return null == t
                      ? o.d.set("2.2218.5").then(() => ({ type: "up-to-date" }))
                      : {
                          type: "migration-needed",
                          migration: () =>
                            t(new i.BaseContentTable()).then(() =>
                              o.d.set("2.2218.5")
                            ),
                        };
                  }))
                : { type: "up-to-date" }
            );
      }
    },
    551: function (e, t, r) {
      r.r(t),
        r.d(t, "registerCustomMigrations", function () {
          return b;
        });
      var s = r(289),
        n = r(10),
        i = r(205),
        a = r(6),
        o = r(9),
        c = r.n(o),
        u = r(215),
        d = r(26),
        p = r(5),
        h = r(295),
        l = r(3),
        v = r(60),
        m = r(2),
        g = r(59),
        f = r(141),
        y = r(7),
        _ = r(52),
        w = r(124),
        E = r(399);
      function b() {
        (0, s.e)(
          new (class {
            constructor() {
              (this.type = "simple"), (this.name = "refresh_chat_previews_v5");
            }
            run(e) {
              return a.r.isDefined()
                ? e.transact("rw", ["chats", "msgs"], () =>
                    e.stores.chats.toArray().then((t) => {
                      var r = t.filter(
                        (e) =>
                          e.previewMsg &&
                          (function e(t) {
                            if (!t) return !1;
                            for (var r = 0; r < t.length; ++r) {
                              var s = t[r];
                              if ("emoji" === s.type) return !0;
                              if (e(s.children)) return !0;
                            }
                            return !1;
                          })(e.previewMsg.formatting)
                      );
                      if (0 !== r.length) {
                        for (var s = [], a = 0; a < r.length; ++a) {
                          var o = r[a];
                          o.previewMsg && s.push(o.previewMsg.id);
                        }
                        return e.stores.msgs
                          .where("id")
                          .anyOf(s)
                          .toArray()
                          .then((t) => {
                            var s = (0, n.t)(t, (e) => e.id),
                              a = [];
                            return (
                              r.forEach((e) => {
                                if (e.previewMsg) {
                                  var t = s.get(e.previewMsg.id);
                                  if (t) {
                                    var r = (0, i.a)(t);
                                    a.push(
                                      (0, n.j)(e, { previewMsg: r || void 0 })
                                    );
                                  }
                                }
                              }),
                              a.length > 0
                                ? e.stores.chats.bulkPut(a).then(() => {})
                                : void 0
                            );
                          });
                      }
                    })
                  )
                : Promise.resolve();
            }
          })()
        ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "group_sender_key_migration_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact(
                  "rw",
                  ["meta", "groups", "groupParticipantsInfo"],
                  () =>
                    (0, p.c)([
                      (0, d.d)(e.stores.meta, d.a.REGISTERED),
                      e.stores.groups.toArray(),
                      e.stores.groupParticipantsInfo.toArray(),
                    ])
                      .then((t) => {
                        var r = c()(t, 3),
                          s = r[0],
                          n = r[1],
                          i = r[2];
                        if (s) {
                          var a = new Set();
                          i.forEach((e) => {
                            var t = e.jid;
                            return a.add(t);
                          });
                          var o = [];
                          n.forEach((e) => {
                            if (!a.has(e.jid)) {
                              var t = {
                                jid: e.jid,
                                superadmins: e.superadmins,
                                admins: e.admins,
                                participants: e.participants,
                                knowsSenderKey: e.knowsSenderKey,
                                keyIncrement: e.keyIncrement,
                                invitations: e.invitations,
                                rotateSenderKey: !1,
                                senderKeyTimestamp: l.c,
                              };
                              (e.isInTheGroup = (0, u.b)(t)),
                                (e.isAdmin = (0, u.a)(t)),
                                delete e.superadmins,
                                delete e.admins,
                                delete e.participants,
                                delete e.knowsSenderKey,
                                delete e.keyIncrement,
                                delete e.invitations,
                                o.push(e),
                                i.push(t);
                            }
                          });
                          var d = [];
                          return (
                            i.forEach((e) => {
                              var t = (0, h.a)(e, s.value);
                              e !== t && d.push(t);
                            }),
                            (0, p.c)([
                              e.stores.groups.bulkPut(o),
                              e.stores.groupParticipantsInfo.bulkPut(d),
                            ])
                          );
                        }
                      })
                      .then(() => {})
                );
              }
            })()
          ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "contact_devices_key_index_migration_v2"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact("rw", ["contacts"], () =>
                  e.stores.contacts
                    .toArray()
                    .then((t) => {
                      var r = [];
                      return (
                        t.forEach((e) => {
                          if (e.devices && 0 !== e.devices.length) {
                            if (!Array.isArray(e.devices))
                              return (
                                __LOG__(
                                  3
                                )`Contact.devices is not an array (before migration)`,
                                void SEND_LOGS(
                                  "contact-devices-migration-not-array"
                                )
                              );
                            var t = e.devices,
                              s = !1,
                              i = !1,
                              a = t.map((e) =>
                                (0, n.l)(e)
                                  ? (e.id && (0, n.l)(e.id) && (s = !0), e)
                                  : ((i = !0), { id: e, index: v.b })
                              );
                            if (s) {
                              var o = Object.assign({}, e);
                              delete o.devices,
                                delete o.deviceVerification,
                                delete o.phash,
                                r.push(o);
                            } else
                              i && r.push(Object.assign({}, e, { devices: a }));
                          }
                        }),
                        e.stores.contacts.bulkPut(r)
                      );
                    })
                    .then(() => {})
                );
              }
            })()
          ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "ephemeral_settings_migration_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact("rw", ["contacts"], () =>
                  e.stores.contacts
                    .toArray()
                    .then((t) => {
                      var r = [];
                      return (
                        t.forEach((e) => {
                          var t = e.ephemeralExpiration,
                            s = e.ephemeralSettingTimestamp;
                          null != t &&
                            null != s &&
                            r.push(
                              Object.assign({}, e, {
                                ephemeral: { expiration: t, ts: s },
                                ephemeralExpiration: void 0,
                                ephemeralSettingTimestamp: void 0,
                              })
                            );
                        }),
                        e.stores.contacts.bulkPut(r)
                      );
                    })
                    .then(() => {})
                );
              }
            })()
          ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "ephemeral_upgrade_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e
                  .transact("rw", ["meta"], () =>
                    (0, d.d)(e.stores.meta, d.a.EPHEMERAL_UPGRADE_TS).then(
                      (t) => {
                        if (null == t)
                          return e.stores.meta.put({
                            key: d.a.EPHEMERAL_UPGRADE_TS,
                            value: (0, l.E)(),
                          });
                        __LOG__(
                          2
                        )`EphemeraUpgrade already upgraded, cannot change date`;
                      }
                    )
                  )
                  .then(() => {});
              }
            })()
          ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"), (this.name = "add_privacy_banner_v1");
              }
              run(e) {
                return e.transact("rw", ["chats", "msgs", "contacts"], () =>
                  (0, p.c)([
                    e.stores.chats.toArray(),
                    e.stores.contacts.toArray(),
                  ]).then((t) => {
                    var r = c()(t, 2),
                      s = r[0],
                      i = r[1],
                      a = (0, n.s)(i, (e) => e.jid);
                    return (0, p.c)(
                      s.map((t) => {
                        var r = t.id,
                          s = (0, g.m)(r),
                          n = e.stores.msgs.where("id").equals(s).first(),
                          i = (0, p.e)(),
                          o = t.oldest;
                        return (
                          o &&
                            (i = e.stores.msgs.where("id").equals(o).first()),
                          (0, p.c)([i, n]).then((n) => {
                            var i = c()(n, 2),
                              o = i[0],
                              u = i[1],
                              d = (0, y.q)(t.jid),
                              p = "e2ee";
                            if (d) {
                              var h = a[d];
                              if (
                                (h &&
                                  h.verifiedInfo &&
                                  h.verifiedInfo.isApi &&
                                  (p = "api"),
                                h && !(0, f.b)(h))
                              )
                                return (
                                  __LOG__(
                                    3
                                  )`AddPrivacyBannerMigration unexpected non-e2ee chat`,
                                  void SEND_LOGS("unexpected-non-e2ee")
                                );
                            }
                            if (!(u || (o && o.type === m.f.PRIVACY_CHANGE))) {
                              var v = {
                                id: s,
                                chat: r,
                                externalId: "/privacy/" + r,
                                ts: (null == o ? void 0 : o.ts) || (0, l.E)(),
                                author: m.c,
                                ack: m.a.RECEIVED,
                                type: m.f.PRIVACY_CHANGE,
                                subtype: p,
                                altIndex: "x-" + s,
                              };
                              return e.stores.msgs.add(v).then(() => {
                                var r = Object.assign({}, t, {
                                  msgCount: t.msgCount + 1,
                                });
                                return (
                                  null == r.newest && (r.newest = s),
                                  (r.oldest = s),
                                  e.stores.chats.put(r)
                                );
                              });
                            }
                          })
                        );
                      })
                    ).then(() => {});
                  })
                );
              }
            })()
          ),
          (0, s.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "purge_old_sessions_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run() {
                var e = (0, _.getSignalTable)();
                return e.transact("rw", ["sessions", "identities"], () =>
                  (function t(r) {
                    return e.stores.sessions
                      .offset(r)
                      .limit(20)
                      .toArray()
                      .then((s) => {
                        if (!(s.length < 1)) {
                          var n = [],
                            i = 0;
                          return (
                            s.forEach((t) => {
                              var r = (0, E.a)(t.session);
                              r.wasChanged &&
                                n.push(
                                  e.stores.identities
                                    .get(t.address)
                                    .then((s) => {
                                      if (null != s)
                                        return null != r.identity &&
                                          (0, w.a)(
                                            s.identity.buffer,
                                            r.identity
                                          )
                                          ? e.stores.sessions.put(
                                              Object.assign({}, t, {
                                                session: r.session,
                                              })
                                            )
                                          : (i++,
                                            e.stores.sessions.delete(
                                              t.address
                                            ));
                                    })
                                );
                            }),
                            (0, p.c)(n).then(() => t(r + s.length - i))
                          );
                        }
                      });
                  })(0)
                );
              }
            })()
          );
      }
    },
  },
]);
