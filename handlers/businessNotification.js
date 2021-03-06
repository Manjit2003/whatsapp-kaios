"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [49],
  {
    560: function (e, t, i) {
      i.r(t);
      var s = i(88),
        r = i(17),
        a = i(63),
        n = i(4),
        o = i(30),
        l = i(16),
        h = i(483),
        v = i(175),
        c = i(144),
        d = new s.b("incomingBusinessNotification", (e) => {
          e.assertTag("notification");
          var t = e
            .mapChildren((e) => {
              var t = e.tag();
              switch (t) {
                case "verified_name":
                  return e.hasAttr("hash")
                    ? { type: "changeForHash", hash: e.attrString("hash") }
                    : {
                        type: "change",
                        jid: e.attrPhoneUserJid("jid"),
                        serial: e.attrLongInt("serial"),
                        verifiedLevel: e.attrEnum(
                          "verified_level",
                          v.VLEVEL_TYPES
                        ),
                        blob: e.hasContent() ? e.contentBytes() : void 0,
                        bsp: (0, v.getBspInfo)(e),
                      };
                case "remove":
                  return e.hasAttr("hash")
                    ? { type: "removeForHash", hash: e.attrString("hash") }
                    : { type: "remove", jid: e.attrPhoneUserJid("jid") };
                default:
                  return __LOG__(4)`Unrecognized business action ${t}`, null;
              }
            })
            .filter(Boolean);
          return {
            externalId: e.attrString("id"),
            from: e.attrFromPhoneJid(),
            actions: t,
          };
        });
      t.default = (0, s.c)("handleBusinessNotification", d, (e) =>
        Promise.all(
          e.actions.map((e) =>
            (function (e, t) {
              if (!t) return Promise.resolve(!1);
              var i = null;
              if ("change" === t.type || "remove" === t.type)
                i = Promise.resolve([t.jid]);
              else {
                t.type;
                var s = t.hash;
                i = (0, h.a)(s);
              }
              return i.then((e) => {
                if (e.length < 1) return !0;
                switch (t.type) {
                  case "remove":
                    return Promise.all(e.map((e) => (0, r.Mc)(e))).then(
                      () => !1
                    );
                  case "change":
                    return Promise.all(
                      e.map((e) =>
                        (0, a.b)(e).then((i) => {
                          var s = null == i ? void 0 : i.verifiedInfo;
                          if (!s || s.serial !== t.serial)
                            return t.blob
                              ? (0, v.verifyUserCert)(
                                  e,
                                  t.verifiedLevel,
                                  t.blob,
                                  t.bsp
                                )
                              : (0, o.b)().waitUntilPersisted(
                                  l.e.validateBusinessCertificate(e)
                                );
                          if ((0, c.d)(i, t.serial, t.verifiedLevel, t.bsp)) {
                            if (t.bsp && s.bsp && t.bsp.ts < s.bsp.ts)
                              return void __LOG__(
                                2
                              )`Received business notification with old bsp ts`;
                            var a = s.isApi
                              ? Object.assign({}, s, {
                                  level: t.verifiedLevel,
                                  bsp: t.bsp,
                                })
                              : Object.assign({}, s, {
                                  level: t.verifiedLevel,
                                });
                            return (0, r.ed)(e, a);
                          }
                        })
                      )
                    ).then(() => !1);
                  case "removeForHash":
                  case "changeForHash":
                    return Promise.all(
                      e.map((e) =>
                        (0, o.b)().waitUntilPersisted(
                          l.e.validateBusinessCertificate(e)
                        )
                      )
                    ).then(() => !1);
                  default:
                    return __LOG__(4)`Unimplemented action ${t}`, !1;
                }
              });
            })(0, e)
          )
        ).then((t) =>
          (0, n.v)(
            "ack",
            {
              to: (0, n.l)(e.from),
              id: (0, n.b)(e.externalId),
              class: "notification",
              type: "business",
            },
            t.some(Boolean) ? (0, n.v)("user", { side_list: "out" }) : null
          )
        )
      );
    },
  },
]);
