"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [9],
  {
    106: function (n, e, r) {
      r.d(e, "e", function () {
        return i;
      }),
        r.d(e, "d", function () {
          return o;
        }),
        r.d(e, "b", function () {
          return c;
        }),
        r.d(e, "c", function () {
          return u;
        }),
        r.d(e, "a", function () {
          return s;
        });
      var t = r(34);
      function i(n) {
        if ("number" != typeof n)
          throw (
            (__LOG__(2)`${n} is not a safe integer`,
            new Error("numberOrThrowIfTooLarge is given a non-safe integer"))
          );
        return n;
      }
      var o = (n) => (null == n ? n : i(n));
      function c(n, e) {
        if ("number" == typeof n && "number" == typeof e) return n > e;
        var r = "number" == typeof n ? (0, t.f)(n) : n,
          i = "number" == typeof e ? (0, t.f)(e) : e;
        return (0, t.i)(r, i);
      }
      function u(n) {
        if ("number" == typeof n) return n.toString(10);
        for (var e = (0, t.h)(n), r = [0], i = 0, o = 0; o < e.length; o++) {
          i = (0, t.e)(e, o);
          for (var c = 0; c < r.length; c++)
            (r[c] = 16 * r[c] + i), (i = (r[c] / 10) | 0), (r[c] %= 10);
          for (; i > 0; ) r.push(i % 10), (i = (i / 10) | 0);
        }
        var u = r.reverse().join("");
        return (0, t.g)(n) ? "-" + u : u;
      }
      function s(n) {
        if (!/^-?\d+$/.test(n))
          throw (
            (__LOG__(2)`"${n}" is not a valid decimal string`,
            new Error(
              "decimalStringToLongInt is given an invalid decimal string"
            ))
          );
        var e = "-" === n[0],
          r = n.replace(/^-?0*/, ""),
          i = r.length;
        if (i < 16 || (16 === i && r <= "9007199254740991"))
          return e ? -Number(r) : Number(r);
        if (
          i > 20 ||
          (20 === i && r > "18446744073709551615") ||
          (e && (i > 19 || (19 === i && r > "9223372036854775807")))
        )
          throw (
            (__LOG__(2)`"${n}" is over 64 bits`,
            new Error("decimalStringToHexLong is given value over 64 bits"))
          );
        for (var o = 0, c = 0, u = 0; u < i; u++)
          (o = 10 * o + Number(r[u])),
            (c = 10 * c + Math.floor(o / 4294967296)),
            (o %= 4294967296);
        return (0, t.d)(c, o, e);
      }
    },
    121: function (n, e, r) {
      r.d(e, "b", function () {
        return u;
      }),
        r.d(e, "a", function () {
          return s;
        });
      var t = r(5),
        i = (0, r(123).a)("wa-syncd-1", function (n) {
          n.version(1).stores({
            pendingMutations: "++id, index, collection, action",
            encryptedMutations: "++id",
            collectionVersion: "collection",
            syncKeys: "keyId",
            syncActions: "index, actionState, indexMac, collection, action",
          });
        }),
        o = class extends t.b {
          constructor() {
            super(i);
          }
        },
        c = null;
      function u() {
        return c || (c = new o()), c;
      }
      function s() {
        return (0, t.i)(
          (0, t.c)([
            u().stores.syncActions.clear(),
            u().stores.pendingMutations.clear(),
            u().stores.collectionVersion.clear(),
            u().stores.syncKeys.clear(),
          ])
        ).then(() => {});
      }
    },
    353: function (n, e, r) {
      r(23);
    },
    374: function (n, e, r) {
      r.d(e, "a", function () {
        return c;
      });
      var t = r(40),
        i = r(23),
        o = r(7);
      function c(n, e) {
        if ((0, t.j)(n)) {
          if ((0, i.a)("country_client_gating_enabled"))
            return "country-disabled";
          if ((0, i.a)("tos_3_client_gating_enabled")) {
            var r = (0, o.i)(n.jid);
            if (
              (0, i.a)("system_msg_numbers_fb_branded").split(",").includes(r)
            )
              return !1;
            if ("accepted" !== e) return "tos-not-accepted";
          }
        }
        return !1;
      }
    },
  },
]);
