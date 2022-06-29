"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [6],
  {
    486: function (t, n, r) {
      r.d(n, "d", function () {
        return S;
      }),
        r.d(n, "b", function () {
          return A;
        }),
        r.d(n, "c", function () {
          return E;
        }),
        r.d(n, "a", function () {
          return g;
        });
      var e = r(233),
        a = r(67),
        i = r(101),
        u = r(0),
        c = {},
        o = {};
      (c.internalSpec = {
        stanzaId: [1, u.d.STRING],
        directPath: [2, u.d.STRING],
        result: [
          3,
          u.d.ENUM,
          { GENERAL_ERROR: 0, SUCCESS: 1, NOT_FOUND: 2, DECRYPTION_ERROR: 3 },
        ],
      }),
        (o.internalSpec = { stanzaId: [1, u.d.STRING] });
      var d = r(27),
        f = r.n(d),
        l = r(25);
      function s(t, n, r, e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = f()(function* (t, n, r, e) {
          var a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
          return self.crypto.subtle.encrypt(
            {
              name: "AES-GCM",
              iv: R(n),
              additionalData: R(e),
              tagLength: 8 * a,
            },
            yield v(t),
            r
          );
        })).apply(this, arguments);
      }
      function y(t, n, r, e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = f()(function* (t, n, r, e) {
          var a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
          return self.crypto.subtle.decrypt(
            {
              name: "AES-GCM",
              iv: R(n),
              additionalData: R(e),
              tagLength: 8 * a,
            },
            yield v(t),
            r
          );
        })).apply(this, arguments);
      }
      function v(t) {
        return self.crypto.subtle.importKey("raw", t, "AES-GCM", !1, [
          "encrypt",
          "decrypt",
        ]);
      }
      function R(t) {
        if (t instanceof Uint8Array) return t;
        if ("string" == typeof t) {
          var n = new l.a();
          return n.writeString(t), n.readByteArray();
        }
        return new Uint8Array(t);
      }
      function S(t, n, r) {
        return N(t).then((t) => {
          var e,
            a = ((e = { stanzaId: n }), (0, i.a)(o, e).readByteArray()),
            u = (null == r ? void 0 : r.slice()) || I();
          return s(t, u, a, n).then((t) => ({ ciphertext: t, iv: u }));
        });
      }
      function A(t, n, r, e) {
        return N(t)
          .then((t) => y(t, r, e, n))
          .then((t) => (0, a.a)(o, t));
      }
      function E(t, n, r, e, a) {
        return N(t).then((t) => {
          var u,
            o =
              ((u = { stanzaId: n, directPath: r, result: a }),
              (0, i.a)(c, u).readByteArray()),
            d = (null == e ? void 0 : e.slice()) || I();
          return s(t, d, o, n).then((t) => ({ ciphertext: t, iv: d }));
        });
      }
      function g(t, n, r, e) {
        return N(t)
          .then((t) => y(t, r, e, n))
          .then((t) => (0, a.a)(c, t));
      }
      function N(t) {
        return (0, e.a)(t, "WhatsApp Media Retry Notification", 32);
      }
      function I() {
        var t = new Uint8Array(12);
        return self.crypto.getRandomValues(t), t;
      }
    },
  },
]);
