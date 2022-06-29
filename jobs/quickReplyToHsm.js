"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [101],
  {
    636: function (e, t, s) {
      s.r(t);
      var n = s(75),
        r = s(30),
        d = s(16),
        a = s(17);
      t.default = (0, n.c)()
        .step("markButtonPressed", (e) => {
          var t = e.msgId,
            s = e.selectedButtonIndex;
          return (0, a.Lb)(t, s);
        })
        .finalStep("quickReplyToHsm", (e, t) => {
          if (e) {
            var s = e.content;
            if ("rich_hsm" === s.type) {
              var n = s.buttons;
              if (n) {
                var o = t.selectedButtonIndex;
                if (!(o < 0 || o > n.length))
                  return (0, a.C)(e.chatId).then((e) => {
                    var s = n[o];
                    if ("quick_reply" === s.type) {
                      var a = {
                          type: "hsm_button_reply",
                          selectedButtonIndex: o,
                          selectedDisplayText: s.displayText,
                          payload: s.payload,
                        },
                        u = { msgId: t.msgId, remoteJid: null };
                      return (0, r.b)().waitUntilPersisted(
                        d.e.sendMsg(e, a, u)
                      );
                    }
                    __LOG__(
                      4
                    )`Message returned by markHsmButtonPressed does not have a quick reply button at the specified selectedButtonIndex`;
                  });
                __LOG__(
                  4
                )`Message returned by markHsmButtonPressed does not have enough buttons to cover the passed selectedButtonIndex`;
              } else
                __LOG__(
                  4
                )`Message returned by markHsmButtonPressed does not have any buttons`;
            } else
              __LOG__(
                4
              )`Message returned by markHsmButtonPressed isn't of the rich_hsm type`;
          }
        })
        .end();
    },
  },
]);
