"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [122],
  {
    615: function (e, t, n) {
      n.r(t),
        n.d(t, "sendReaction", function () {
          return i;
        }),
        n.d(t, "retryReaction", function () {
          return o;
        });
      var r = n(75),
        s = n(17),
        a = n(239),
        d = {
          code: (e) => {
            if (e) return (0, a.d)(e).then((e) => {});
            __LOG__(3)`sendWrittenReactionMsg: reaction does not exist`;
          },
          stopRetryIf: {
            timePassedSeconds: n(3).b,
            appCrashed: !0,
            onStopRetry: (e) => {
              if ((__LOG__(3)`sendWrittenReactionMsg aborted`, e))
                return (0, a.e)(e);
            },
          },
        },
        i = (0, r.c)()
          .step("saveAndPassOff", (e, t, n) => {
            var r = n.jobStartTime,
              d = e.msgId,
              i = e.text,
              o = e.key,
              c = (0, s.s)(o);
            return (0, a.g)({
              msgId: d,
              externalId: c,
              text: i,
              senderTimestamp: r,
            });
          })
          .finalStep("encryptAndSend", d)
          .end(),
        o = (0, r.c)()
          .step("saveAndPassOff", (e, t, n) => {
            var r = n.jobStartTime,
              s = e.reactionId;
            return (0, a.b)(s, r);
          })
          .finalStep("encryptAndSend", d)
          .end();
    },
  },
]);
