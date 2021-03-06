"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [55],
  {
    558: function (t, e, r) {
      r.r(e);
      var i = r(88),
        a = r(4),
        n = r(360),
        c = r(12),
        o = r(2),
        p = r(6),
        s = r(17),
        d = r(8),
        u = r(218),
        h = r(49),
        l = r(237),
        m = r(201),
        g = r(404),
        v = { superadmin: "superadmin", admin: "admin" },
        I = new i.b("incomingGroupNotification", (t) => {
          t.assertTag("notification"), t.hasAttr("to") && (0, n.a)(t, "to");
          var e = t.attrGroupJid("from"),
            r = (0, n.b)(t, "participant");
          function i(t) {
            return t.mapChildrenWithTag("participant", (t) =>
              t.attrPhoneUserJid("jid")
            );
          }
          var a = t.mapChildren((e) => {
            var r = e.tag();
            switch (r) {
              case "add":
                return {
                  type: "add",
                  isInvite: "invite" === e.maybeAttrString("reason"),
                  hasAccepted: "accept" === e.maybeAttrString("reason"),
                  participants: i(e),
                };
              case "remove":
                return { type: "remove", participants: i(e) };
              case "promote":
                return { type: "promote", participants: i(e) };
              case "demote":
                return { type: "demote", participants: i(e) };
              case "modify":
                return {
                  type: "modify",
                  changedTo: e.child("participant").attrPhoneUserJid("jid"),
                  changedFrom: t.attrPhoneUserJid("participant"),
                };
              case "create":
                var a = e.child("group"),
                  n = a.mapChildrenWithTag("participant", (t) => ({
                    jid: t.attrPhoneUserJid("jid"),
                    type: t.attrEnumOrDefault("type", v, "participant"),
                  })),
                  c = (0, g.a)(a);
                return Object.assign(
                  {
                    type: "create",
                    title: a.attrString("subject"),
                    titleTs: a.attrTime("s_t"),
                    description: (0, u.extractDescription)(a),
                    locked: a.hasChild("locked"),
                    announcement: a.hasChild("announcement"),
                    support: a.hasChild("support"),
                    creatorJid: a.maybeAttrPhoneUserJid("creator"),
                    creationTs: a.attrTime("creation"),
                    participants: n,
                    isInvite: "invite" === e.maybeAttrString("reason"),
                    expiration: a.hasChild("ephemeral")
                      ? a.child("ephemeral").attrInt("expiration")
                      : null,
                    growthLocked: (0, l.b)(a),
                  },
                  c && { communityInfo: c }
                );
              case "subject":
                return {
                  type: "subject",
                  subject: e.attrString("subject"),
                  subjectTs: e.attrTime("s_t"),
                };
              case "description":
                return {
                  type: "description",
                  deleted: e.hasChild("delete"),
                  description: e.hasChild("body")
                    ? e.child("body").contentString()
                    : null,
                  descriptionId: e.attrString("id"),
                };
              case "locked":
                return { type: "locked", locked: !0 };
              case "unlocked":
                return { type: "locked", locked: !1 };
              case "announcement":
                return { type: "announcement", announcement: !0 };
              case "not_announcement":
                return { type: "announcement", announcement: !1 };
              case "revoke":
                return {
                  type: "revoke",
                  expirations: e.mapChildrenWithTag("participant", (t) => ({
                    jid: t.attrPhoneUserJid("jid"),
                    expiration: t.attrTime("expiration"),
                  })),
                };
              case "ephemeral":
                return {
                  type: "ephemeral",
                  expiration: e.attrInt("expiration"),
                };
              case "not_ephemeral":
                return { type: "ephemeral", expiration: null };
              case "invite":
                return {
                  type: "invite_code",
                  inviteCode: e.attrString("code"),
                };
              case "delete":
                return { type: "delete" };
              case "growth_locked":
                var o = (0, l.b)(t);
                return null == o
                  ? (__LOG__(4)`Invalid growth-locked group notification`, null)
                  : { type: "growth_locked", state: o };
              case "growth_unlocked":
                return { type: "growth_unlocked" };
              default:
                return __LOG__(4)`Unrecognized group action ${r}`, null;
            }
          });
          return {
            externalId: t.attrString("id"),
            chat: e,
            participant: r,
            ts: t.attrTime("t"),
            pushname: t.maybeAttrString("notify"),
            actions: a,
          };
        });
      function y(t) {
        if (t === o.c) return a.d;
        if (t === o.b) return (0, a.g)(p.r.get());
        var e = (0, h.i)(t);
        if (!e) throw new Error("Incorrect participant format");
        return (0, a.g)(e);
      }
      e.default = (0, i.c)("handleGroupNotification", I, (t) => {
        var e = (0, h.i)(t.participant);
        return (
          e && t.pushname && s.bd(e, t.pushname),
          (0, d.d)(t.chat, () =>
            Promise.all(
              t.actions.map((e) =>
                (function (t, e) {
                  if (e)
                    switch (e.type) {
                      case "add":
                        return (0, m.j)("add", t.chat, {
                          id: t.externalId,
                          isInvite: e.isInvite,
                          hasAccepted: e.hasAccepted,
                          participants: e.participants,
                          ts: t.ts,
                          author: t.participant,
                        });
                      case "promote":
                        return (0, m.j)("promote", t.chat, {
                          id: t.externalId,
                          participants: e.participants,
                          ts: t.ts,
                          author: t.participant,
                        });
                      case "demote":
                        return (0, m.j)("demote", t.chat, {
                          id: t.externalId,
                          participants: e.participants,
                          ts: t.ts,
                          author: t.participant,
                        });
                      case "remove":
                        return (0, m.j)("remove", t.chat, {
                          id: t.externalId,
                          participants: e.participants,
                          ts: t.ts,
                          author: t.participant,
                        });
                      case "modify":
                        return (0, m.g)(t.chat, {
                          jid: t.chat,
                          id: t.externalId,
                          changedTo: e.changedTo,
                          ts: t.ts,
                          changedFrom: e.changedFrom,
                        });
                      case "create":
                        var r = {
                          jid: t.chat,
                          title: e.title,
                          titleTs: e.titleTs,
                          description: e.description
                            ? e.description.content
                            : null,
                          descriptionId: e.description
                            ? e.description.id
                            : null,
                          locked: e.locked,
                          announcement: e.announcement,
                          support: e.support,
                          creatorJid: e.creatorJid,
                          creationTs: e.creationTs,
                          participants: e.participants,
                          expiration: e.expiration,
                          addInfo: {
                            id: t.externalId,
                            isInvite: e.isInvite,
                            participants: e.participants.map((t) => t.jid),
                            ts: t.ts,
                            author: t.participant,
                          },
                          growthLocked: e.growthLocked,
                        };
                        return "parent" === e.communityInfo
                          ? s.sb(
                              Object.assign({}, r, { communityInfo: "parent" }),
                              e.isInvite
                            )
                          : (e.communityInfo,
                            s.rb(
                              Object.assign({}, r, {
                                communityInfo: e.communityInfo,
                              }),
                              e.isInvite
                            ));
                      case "subject":
                        return (0, m.h)(t.chat, {
                          id: t.externalId,
                          author: t.participant,
                          ts: t.ts,
                          subject: e.subject,
                          subjectTs: e.subjectTs,
                        });
                      case "description":
                        return (0, m.b)(t.chat, {
                          id: t.externalId,
                          author: t.participant,
                          ts: t.ts,
                          description: e.description,
                          descriptionId: e.descriptionId,
                          deleted: e.deleted,
                        });
                      case "locked":
                        return (0, m.f)(t.chat, {
                          id: t.externalId,
                          author: t.participant,
                          ts: t.ts,
                          locked: e.locked,
                        });
                      case "announcement":
                        return (0, m.a)(t.chat, {
                          id: t.externalId,
                          author: t.participant,
                          ts: t.ts,
                          announcement: e.announcement,
                        });
                      case "revoke":
                        if (t.participant === o.b) {
                          var i = e.expirations;
                          return s.jc(
                            t.chat,
                            !0,
                            i.map((t) => ({
                              user: t.jid,
                              expiresBefore: t.expiration,
                            }))
                          );
                        }
                        var a = (0, h.i)(t.participant);
                        if (null == a)
                          return void __LOG__(
                            3
                          )`Received revoke without an admin jid ${t.participant}`;
                        var n = e.expirations.find((t) => t.jid === p.r.get());
                        return n
                          ? s.jc(t.chat, !1, [
                              { user: a, expiresBefore: n.expiration },
                            ])
                          : (__LOG__(
                              4
                            )`Received group invite revokation from ${a}, but user not in participants list`,
                            void SEND_LOGS("bad-revoke"));
                      case "ephemeral":
                        return (0, m.c)(t.chat, {
                          id: t.externalId,
                          ts: t.ts,
                          expiration: e.expiration,
                          author: t.participant,
                        });
                      case "invite_code":
                        return (
                          (0, c.c)("event", "groupInviteCode", {
                            groupJid: t.chat,
                            code: e.inviteCode,
                          }),
                          (0, m.e)(t.chat, {
                            id: t.externalId,
                            ts: t.ts,
                            author: t.participant,
                          })
                        );
                      case "delete":
                        return (0, m.j)("delete", t.chat, {
                          id: t.externalId,
                          participants: [p.r.get()],
                          ts: t.ts,
                          author: t.participant,
                        });
                      case "growth_locked":
                        return (
                          (0, c.c)("event", "groupInviteCodeReset", {
                            groupJid: t.chat,
                          }),
                          (0, m.k)(t.chat, {
                            id: t.externalId,
                            ts: t.ts,
                            growthLocked: e.state,
                          })
                        );
                      case "growth_unlocked":
                        return (
                          (0, c.c)("event", "groupInviteCodeReset", {
                            groupJid: t.chat,
                          }),
                          (0, m.l)(t.chat, { id: t.externalId, ts: t.ts })
                        );
                      default:
                        e.type, __LOG__(3)`TODO: handle action ${e}`;
                    }
                })(t, e)
              )
            )
          ).then(() =>
            (0, a.v)("ack", {
              to: (0, a.g)(t.chat),
              id: (0, a.b)(t.externalId),
              class: "notification",
              participant: y(t.participant),
            })
          )
        );
      });
    },
  },
]);
