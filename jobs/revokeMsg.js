"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [112],
  {
    613: function (e, t, s) {
      s.r(t),
        s.d(t, "revokeStatusMsgJob", function () {
          return l;
        });
      var r = s(75),
        o = s(17),
        n = s(349),
        a = s(538),
        u = s(7),
        i = s(10),
        g = s(39),
        v = s(206);
      t.default = (0, r.c)()
        .step("saveInviteGroupJids", (e) => {
          var t = e.chatJid,
            s = e.msgIds,
            r = (0, u.q)(t);
          return (r ? (0, o.cb)(r, s) : Promise.resolve()).then((e) => ({
            groupInvites: e,
          }));
        })
        .finalStep("revokeChatMsgs", (e, t) => {
          var s,
            r = t.chatJid,
            o = t.msgIds;
          return (
            e &&
              (e.groupInvites
                ? (s = e.groupInvites)
                : null == e.chatJid && (s = e)),
            (0, v.e)(r, o).then((e) => {
              var t = e
                  .filter((e) => !(0, g.k)(e.dbMsg.ack))
                  .map((e) =>
                    e.outgoingTo
                      ? (0, n.b)(
                          e.chat.jid,
                          e.outgoingTo.to,
                          e.dbMsg,
                          null
                        ).then(() => {})
                      : (__LOG__(
                          4
                        )`revokeMsg revokeChatMsgs returned MsgWrittenResult without outgoingTo`,
                        void SEND_LOGS("revokeMsg-null-outgoingTo"))
                  ),
                o = (0, u.q)(r);
              if (s && o) {
                var v = s,
                  l = (0, i.w)(v);
                t.push(
                  Promise.all(
                    l.map((e) => (0, a.revokeGroupInvitations)(e, [v[e]]))
                  )
                );
              }
              return Promise.all(t).then(() => {});
            })
          );
        })
        .end();
      var l = (0, r.c)()
        .finalStep("revokeStatusMsg", (e) => {
          var t = e.statusMsgId;
          return (0, o.kc)(t).then((e) => {
            if (e) {
              if (!(0, g.k)(e.dbMsg.ack)) {
                var t = { to: e.to, identityIds: new Map() };
                return (0, n.c)(t.to, e.dbMsg, null).then(() => {});
              }
              __LOG__(2)`revokeStatusMsg: revoke already sent`;
            } else __LOG__(2)`revokeStatusMsg: no result`;
          });
        })
        .end();
    },
  },
]);
