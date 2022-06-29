"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [28],
  {
    554: function (e, t, s) {
      s.r(t),
        s.d(t, "onRegistrationSms", function () {
          return l;
        }),
        s.d(t, "stopSmsPoller", function () {
          return d;
        });
      var n = s(235),
        i = s(20),
        o = {},
        r = !1,
        a = null;
      function _(e) {
        a && a.handleSms(e.message);
      }
      function l(e) {
        __LOG__(2)`onRegistrationSms: start`,
          a && (__LOG__(2)`onRegistrationSms: stopping smsListener`, a.stop()),
          r ||
            (__LOG__(2)`onRegistrationSms: adding mozMobileMessage listener`,
            navigator.mozMobileMessage.addEventListener("received", _),
            (r = !0));
        try {
          __LOG__(2)`onRegistrationSms: creating new smsListener`,
            (a = new (class {
              constructor(e) {
                (this.checkedUntil = Date.now()),
                  (this.loop = new n.a({
                    name: "SmsPoller",
                    timer: {
                      jitter: 0,
                      algo: { type: "constant", delay: 2e3 },
                    },
                    code: (e) => this.readSms(e),
                  })),
                  (this.FM = e);
              }
              readSms(e) {
                var t = this.checkedUntil,
                  s = navigator.mozMobileMessage.getMessages(void 0, !0);
                return (
                  __LOG__(2)`Reading SMS from the phone until ${new Date(t)}`,
                  (function (e, t) {
                    return new Promise((s) => {
                      (e.onsuccess = () => {
                        if (e.result) {
                          var n = t(e.result);
                          n !== o ? s(n) : e.continue();
                        } else e.done ? s(null) : e.continue();
                      }),
                        (e.onerror = function (e) {
                          __LOG__(4)`Failed to read SMS: ${e}`, s(null);
                        });
                    });
                  })(s, (e) => {
                    if ("sms" === e.type)
                      return e.timestamp > t
                        ? ((this.checkedUntil = e.timestamp), c(e) || o)
                        : null;
                  }).then((t) => {
                    t && e(t);
                  })
                );
              }
              handleSms(e) {
                __LOG__(2)`handleSms: got notified about sms`;
                var t = c(e);
                t &&
                  (__LOG__(2)`handleSms: detected code`,
                  this.loop.endWithValue(t));
              }
              start() {
                this.loop.start(),
                  this.loop.promise().then((e) => {
                    this === a && ((a = null), null != e && this.FM(e));
                  });
              }
              stop() {
                this === a && (a = null), this.loop.endWithValue(null);
              }
            })(e)),
            __LOG__(2)`onRegistrationSms: starting smsListener`,
            a.start();
        } catch (e) {
          __LOG__(4)`Failed to start smsListener ${e}`;
        }
      }
      function d() {
        __LOG__(2)`stopSmsPoller: start`,
          a && (__LOG__(2)`stopSmsPoller: stopping smsListener`, a.stop()),
          __LOG__(2)`stopSmsPoller: removing mozMobileMessage listener`,
          navigator.mozMobileMessage.removeEventListener("received", _);
      }
      function c(e) {
        if ("sms" === e.type)
          if ("string" == typeof e.body) {
            var t = -1 !== e.body.indexOf("WhatsApp"),
              s = /[0-9]{3}-[0-9]{3}/.exec(e.body),
              n = new RegExp(
                `(?:WhatsApp|${(0, i.k)(982)}).*?([0-9]{3})-([0-9]{3})`
              ).exec(e.body);
            if (n) {
              __LOG__(
                2
              )`Received SMS during registration and could extract the code from it`;
              var o = n[1].split(""),
                r = n[2].split("");
              return [
                parseInt(o[0], 10),
                parseInt(o[1], 10),
                parseInt(o[2], 10),
                parseInt(r[0], 10),
                parseInt(r[1], 10),
                parseInt(r[2], 10),
              ];
            }
            if (t) {
              var a = s
                ? "also found a matching code"
                : "but did not find a valid code";
              __LOG__(
                2
              )`Received SMS during registration including [WhatsApp] keyword, ${a}. But the full regexp did not match`;
            } else __LOG__(2)`Received non-relevant SMS during registration`;
          } else
            __LOG__(
              2
            )`Received SMS during registration but body is not a string: ${typeof e.body}`;
        else
          __LOG__(2)`Received SMS during registration but with type: ${e.type}`;
      }
    },
  },
]);
