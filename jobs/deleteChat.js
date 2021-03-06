"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [79],
  {
    657: function (e, t, n) {
      n.r(t),
        n.d(t, "deleteChatJob", function () {
          return j;
        }),
        n.d(t, "clearChatJob", function () {
          return x;
        }),
        n.d(t, "deleteChatContentsJob", function () {
          return y;
        });
      var r = n(9),
        a = n.n(r),
        s = n(64),
        i = n(51),
        o = n(5),
        d = n(15),
        l = n(59),
        u = n(7),
        h = n(10),
        c = n(205),
        p = n(21),
        f = n(53),
        g = n(8),
        v = n(42),
        b = n(74),
        I = n(12),
        w = n(97),
        m = n(236),
        C = n(11),
        M = n(75),
        _ = n(30),
        P = n(16),
        j = (0, M.c)()
          .finalStep("deleteChatInfo", (e) => {
            var t = e.chatId,
              n = e.retainMediaInPhoneStorage;
            return (function (e) {
              return (0, g.c)(
                "deleteChatInfo",
                (t) =>
                  (function (e, t) {
                    var n = [
                      "groups",
                      "groupParticipantsInfo",
                      "chats",
                      "contacts",
                    ];
                    return (
                      n.push("privacyTokens"),
                      e.table.transact("rw", n, () =>
                        e.table.stores.chats.get(t).then((n) => {
                          if (n) {
                            var r,
                              a = (0, u.x)(n.jid, {
                                user: (t) =>
                                  e.table.stores.contacts.get(t).then((t) => {
                                    var r;
                                    if (t)
                                      return (
                                        delete t.chatId,
                                        (t.lastMutedUntil =
                                          null != n.mutedUntil
                                            ? n.mutedUntil
                                            : void 0),
                                        null !=
                                          (null == (r = t.ephemeral)
                                            ? void 0
                                            : r.initiator) &&
                                          delete t.ephemeral.initiator,
                                        e.table.stores.contacts.put(t)
                                      );
                                  }),
                                group: (t) => e.table.stores.groups.delete(t),
                              }),
                              s = e.table.stores.chats.delete(n.id),
                              i = (0, C.D)(n.jid);
                            return (
                              i && (r = (0, m.a)(e, i)),
                              (0, o.c)([a, s, r]).then(() => n)
                            );
                          }
                          __LOG__(
                            3
                          )`Tried to delete chat, but was not found ${t}`;
                        })
                      )
                    );
                  })(t, e),
                (t) => {
                  t &&
                    ((0, b.getProfilePicTable)().deleteRecord(t.jid),
                    (0, I.c)("event", "chatDeleted", { chatId: e }));
                }
              );
            })(t).then(() =>
              (0, _.b)().waitUntilPersisted(P.e.deleteChatContents(t, n))
            );
          })
          .end(),
        x = (0, M.c)()
          .finalStep("clearChatInfo", (e) => {
            var t = e.chatId,
              n = e.retainMediaInPhoneStorage,
              r = e.keepStarredMessages;
            return (function (e, t) {
              return (0, g.c)(
                "clearChatInfo",
                (n) =>
                  (function (e, t, n) {
                    return e.table.transact(
                      "rw",
                      [
                        "groups",
                        "groupParticipantsInfo",
                        "chats",
                        "contacts",
                        "receipts",
                        "media",
                        "msgs",
                        "previews",
                      ],
                      () => {
                        var r = (0, s.a)(t),
                          g = (0, s.d)(t),
                          v = n
                            ? e.table.getStarredMsgIdsInTransaction(r, g)
                            : (0, o.e)((0, p.e)());
                        return (0, o.c)([v, e.table.stores.chats.get(t)]).then(
                          (n) => {
                            var r = a()(n, 2),
                              s = r[0],
                              g = r[1];
                            if (g) {
                              var v = s.length;
                              return (v > 0
                                ? e.table
                                    .getMsgFromId(s[0])
                                    .then((e) => (null == e ? void 0 : e.ts))
                                : (0, o.e)()
                              )
                                .then((t) =>
                                  (0, u.x)(g.jid, {
                                    user: (n) =>
                                      e.table.getContact(n).then((r) => {
                                        var a,
                                          s,
                                          i,
                                          o = r || { jid: n },
                                          d =
                                            null == (a = o.ephemeral)
                                              ? void 0
                                              : a.expiration;
                                        return (0, f.f)(
                                          e,
                                          g,
                                          {
                                            type: "one-to-one",
                                            dbContact: o,
                                            initialExpiration:
                                              null == d || 0 === d
                                                ? "persisted"
                                                : {
                                                    initiator:
                                                      null !=
                                                      (s =
                                                        null ==
                                                        (i = o.ephemeral)
                                                          ? void 0
                                                          : i.initiator)
                                                        ? s
                                                        : w.a.CHANGED_IN_CHAT,
                                                    expiration: d,
                                                  },
                                          },
                                          t
                                        );
                                      }),
                                    group: (n) =>
                                      e.table.getGroupInfo(n).then((n) => {
                                        var r =
                                          null == n ? void 0 : n.expiration;
                                        return (0, f.f)(
                                          e,
                                          g,
                                          {
                                            type: "group",
                                            initialExpiration:
                                              null == r || 0 === r
                                                ? "persisted"
                                                : r,
                                          },
                                          t
                                        );
                                      }),
                                  })
                                )
                                .then((n) => {
                                  var r = n[0],
                                    a = n[1];
                                  return (
                                    __LOG__(
                                      2
                                    )`Clearing chat ${t} with ${v} msgs`,
                                    0 === v
                                      ? [r, a]
                                      : (function (e, t, n) {
                                          if (0 === t.length)
                                            return (0, o.e)({ numberKept: 0 });
                                          var r = {},
                                            a = [];
                                          t.forEach((e) => {
                                            (r[e] = (0, l.n)(
                                              n,
                                              (0, l.x)(e).inChatMsgId
                                            )),
                                              a.push(e, (0, d.F)(e));
                                          });
                                          var s = r[t[0]],
                                            i = r[t[t.length - 1]],
                                            u = 0,
                                            c = e.stores.msgs
                                              .where("id")
                                              .anyOf(t)
                                              .modify((e) => {
                                                (e.id = r[e.id]), (e.chat = n);
                                                var t = e.quoted;
                                                if (t && t.id) {
                                                  var a = (0, d.r)(t.id);
                                                  if (a) {
                                                    var s = (0, l.n)(
                                                      n,
                                                      (0, l.x)(a).inChatMsgId
                                                    );
                                                    t.id = s;
                                                  }
                                                }
                                                null != e.kept && u++;
                                              }),
                                            f = (0, o.l)(
                                              e.stores.media,
                                              "msgIds"
                                            )
                                              .anyOf(t)
                                              .modify((e) => {
                                                e.msgIds = (0, p.k)(
                                                  e.msgIds,
                                                  (e) =>
                                                    null != r[e] ? r[e] : e
                                                );
                                                var t = {};
                                                (0, h.w)(
                                                  e.mediaEntries
                                                ).forEach((n) => {
                                                  var a = r[n];
                                                  null != a
                                                    ? (t[a] = e.mediaEntries[n])
                                                    : (t[n] =
                                                        e.mediaEntries[n]);
                                                }),
                                                  (e.mediaEntries = t);
                                              }),
                                            g = [],
                                            v = e.stores.previews
                                              .where("previewId")
                                              .anyOf(a)
                                              .each((e) => {
                                                var t = (0, l.w)(
                                                  n,
                                                  e.previewId
                                                );
                                                t &&
                                                  g.push(
                                                    (0, h.j)(e, {
                                                      previewId: t,
                                                    })
                                                  );
                                              })
                                              .then(() =>
                                                e.stores.previews.bulkPut(g)
                                              ),
                                            b = [],
                                            I = e.stores.receipts
                                              .where("msgId")
                                              .anyOf(t)
                                              .each((e) => {
                                                b.push(
                                                  (0, h.j)(e, {
                                                    msgId: r[e.msgId],
                                                  })
                                                );
                                              })
                                              .then(() =>
                                                e.stores.receipts.bulkPut(b)
                                              );
                                          return (0, o.c)([
                                            c,
                                            f,
                                            v,
                                            I,
                                          ]).then(() => ({
                                            numberKept: u,
                                            oldestMovedId: s,
                                            newestMovedId: i,
                                          }));
                                        })(e.table, s, r.id).then((t) => {
                                          var n = t.numberKept,
                                            s = t.oldestMovedId,
                                            i = t.newestMovedId;
                                          if (null == s || null == i)
                                            return [r, a];
                                          (r.starredMsgCount = v),
                                            (r.msgCount += v),
                                            n > 0 && (r.keptMsgCount = n),
                                            (null == r.newest ||
                                              i > r.newest) &&
                                              (r.newest = i),
                                            (null == r.oldest ||
                                              s < r.oldest) &&
                                              (r.oldest = s);
                                          var o = r.newest;
                                          return void 0 === o
                                            ? [r, a]
                                            : e.table.stores.msgs
                                                .where("id")
                                                .equals(o)
                                                .first()
                                                .then(
                                                  (t) => (
                                                    null != t &&
                                                      (r.previewMsg =
                                                        (0, c.a)(t) || void 0),
                                                    e.table.updateChat(r)
                                                  )
                                                )
                                                .then(() => [r, a]);
                                        })
                                  );
                                })
                                .then((t) => {
                                  var n = a()(t, 2),
                                    r = n[0],
                                    s = n[1];
                                  return (0, u.x)(r.jid, {
                                    user: (t) => {
                                      if (null != s) {
                                        var n = Object.assign({}, s, {
                                          chatId: r.id,
                                        });
                                        return e.table.stores.contacts
                                          .put(n)
                                          .then(() => (0, i.a)(r));
                                      }
                                    },
                                    group: (t) =>
                                      e.table
                                        .getGroupInfoWithParticipantsInTransaction(
                                          t
                                        )
                                        .then((t) => {
                                          if (t)
                                            return (
                                              (t.groupInfo.chatId = r.id),
                                              e.table
                                                .setGroupInfo(t.groupInfo)
                                                .then(() => (0, i.a)(r, t))
                                            );
                                        }),
                                  });
                                });
                            }
                            __LOG__(
                              3
                            )`Tried to clear chat, but was not found ${t}`;
                          }
                        );
                      }
                    );
                  })(n, e, t),
                (t) => {
                  (0, I.c)("event", "chatDeleted", { chatId: e }),
                    t && (0, I.c)("event", "chatAdded", { chat: t });
                }
              );
            })(t, !!r).then(() =>
              (0, _.b)().waitUntilPersisted(P.e.deleteChatContents(t, n))
            );
          })
          .end(),
        y = (0, M.c)()
          .finalStep("deleteChatContents", (e, t) => {
            var n = t.chatId,
              r = t.retainMediaInPhoneStorage;
            return (function (e, t) {
              return (0, g.e)("deleteChatContents", (n) =>
                (function (e, t, n) {
                  var r = (function e(t, n, r) {
                      return (0, o.l)(t.table.stores.media, "msgIds")
                        .between((0, s.a)(n), (0, s.d)(n), !1, !1)
                        .limit(v.a)
                        .toArray()
                        .then((a) => {
                          if (a.length) {
                            var s = (0, v.K)(
                              t.table.stores,
                              a,
                              (e) => (0, l.j)(e) === n,
                              r
                            );
                            return (0, o.c)(s).then(() => {
                              if (a.length >= v.a) return e(t, n, r);
                            });
                          }
                        });
                    })(e, t, n),
                    a = (0, s.a)(t),
                    i = (0, s.d)(t),
                    d = e.table.stores.msgs
                      .where("id")
                      .between(a, i, !1, !1)
                      .delete(),
                    u = e.table.stores.previews
                      .where("previewId")
                      .between(a, i, !1, !1)
                      .delete(),
                    h = e.table.stores.receipts
                      .where("msgId")
                      .between(a, i, !1, !1)
                      .delete(),
                    c = e.table.stores.reactions
                      .where("msgId")
                      .between(a, i, !1, !1)
                      .delete();
                  return (0, o.i)((0, o.c)([r, d, u, h, c])).then(() => {});
                })(n, e, t)
              );
            })(n, !!r).then(() =>
              (0, _.b)().waitUntilPersisted(
                P.e.removeDeadMediaContent("delete-chat-" + n)
              )
            );
          })
          .end();
    },
  },
]);
