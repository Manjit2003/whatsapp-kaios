"use strict";
(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var l = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          n.d(
            i,
            l,
            function (t) {
              return e[t];
            }.bind(null, l)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 0));
})([
  function (e, t) {
    function n() {
      self.removeEventListener("push", i),
        self.removeEventListener("pushsubscriptionchange", i),
        self.removeEventListener("notificationclick", l);
    }
    function i(e) {
      e.waitUntil(
        self.clients.matchAll({ includeUncontrolled: !0 }).then((e) => {
          if (!e.length)
            return (
              self.SwEventHandlers || self.importScripts("./backend.js"),
              self.SwEventHandlers.onPush(n)
            );
          e.forEach((e) => e.postMessage({ type: "receivedPush" }));
        })
      );
    }
    function l(e) {
      e.waitUntil(
        self.clients.matchAll().then((t) => {
          e.notification.close(), console.log("matchAll " + t.length);
          var n = e.notification.data;
          if ("handleCall" === n.action) {
            if (
              (self.SwEventHandlers || self.importScripts("./backend.js"),
              "reject" === e.action)
            )
              return self.SwEventHandlers.onCallRejected();
            self.SwEventHandlers.onCallAccepted(), (n.option = e.action);
          }
          0 === t.length
            ? self.clients.openApp({ msg: JSON.stringify(n) })
            : t[0].postMessage({
                type: "clickedNotification",
                msg: JSON.stringify(n),
              });
        })
      );
    }
    self.origin || (self.origin = "app://kaios.whatsapp.net"),
      console.log("ServiceWorker started"),
      self.addEventListener("push", i),
      self.addEventListener("pushsubscriptionchange", i),
      self.addEventListener("notificationclick", l),
      self.addEventListener("activate", (e) => {
        e.waitUntil(
          Promise.all([
            self.clients.claim(),
            caches
              .keys()
              .then((e) =>
                Promise.all(
                  e.map(
                    (e) => (
                      console.log("WA deleting cache " + e),
                      caches.delete(e).catch(() => {})
                    )
                  )
                )
              )
              .then(() => {}),
          ])
        );
      });
  },
]);
