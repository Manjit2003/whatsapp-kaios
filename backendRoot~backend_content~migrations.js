"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [8],
  {
    101: function (t, r, e) {
      e.d(r, "a", function () {
        return s;
      });
      var n = e(25),
        i = e(34),
        o = e(221),
        a = e(0),
        u = e(316),
        f = e(270);
      function s(t, r) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new n.a();
        return (0, f.b)(t, r), p(e, r, t), e;
      }
      function c(t, r) {
        t.writeVarInt(r);
      }
      function h(t, r) {
        if (
          "number" == typeof r &&
          r < 4503599627370496 &&
          r >= -4503599627370496
        )
          t.writeVarInt(r >= 0 ? 2 * r : 2 * -r - 1);
        else {
          var e,
            o = new n.a();
          "number" == typeof r
            ? ((e = r < 0), o.writeVarInt(e ? -r : r))
            : ((e = (0, i.g)(r)),
              o.writeVarIntFromHexLong(e ? (0, i.j)(r) : r));
          var a = o.peek(() => o.readByteArray()),
            u = a.byteLength;
          if (e) {
            var f,
              s = 0;
            do {
              (f = a[s]), (a[s] = (128 & f) | (((127 & f) - 1) & 127)), s++;
            } while (255 === a[s - 1]);
          }
          for (var c = e ? 1 : 0, h = 0; h < u; h++) {
            var l = a[h],
              d = (128 & l) | ((63 & l) << 1) | c;
            (c = (64 & l) >> 6), (a[h] = d);
          }
          1 === c && ((a[u - 1] |= 128), o.writeInt8(1)), t.writeBinary(o);
        }
      }
      function l(t, r) {
        "number" == typeof r ? t.writeVarInt(r) : t.writeVarIntFromHexLong(r);
      }
      var d = [
          void 0,
          c,
          l,
          c,
          l,
          h,
          h,
          (t, r) => {
            t.writeVarInt(r ? 1 : 0);
          },
          c,
          (t, r) => {
            "number" == typeof r ? t.writeUint64(r, !0) : t.writeHexLong(r, !0);
          },
          (t, r) => {
            "number" == typeof r ? t.writeInt64(r, !0) : t.writeHexLong(r, !0);
          },
          (t, r) => {
            t.writeFloat64(r, !0);
          },
          function (t, r) {
            t.writeVarInt((0, n.c)(r)), t.writeString(r);
          },
          function (t, r) {
            t.writeVarInt(r.byteLength), t.writeBuffer(r);
          },
          function (t, r, e) {
            t.writeWithVarIntLength((t, r) => p(t, r, e), r);
          },
          (t, r) => {
            t.writeUint32(r, !0);
          },
          (t, r) => {
            t.writeInt32(r, !0);
          },
          (t, r) => {
            t.writeFloat32(r, !0);
          },
        ],
        y = d.map((t) => {
          if (null != t)
            return (t, e) => {
              t.writeWithVarIntLength(r, e);
            };
          function r(r, e) {
            for (var n = 0; n < e.length; n++) t(r, e[n]);
          }
        });
      function p(t, r, e) {
        for (
          var n = (0, o.a)(e),
            i = n.names,
            f = n.fields,
            s = n.types,
            c = n.meta,
            h = e.internalDefaults,
            l = 0;
          l < i.length;
          l++
        ) {
          var p = i[l],
            v = r[p];
          if ((null == v && h && (v = h[p]), null != v)) {
            var E = f[l],
              b = s[l],
              g = b & a.e,
              w = c[l],
              A = (8 * E) | (0, u.a)(b);
            if (b & a.b.PACKED)
              v.length > 0 && (t.writeVarInt(A), (0, y[g])(t, v, w));
            else if (b & a.b.REPEATED)
              for (var S = 0; S < v.length; S++)
                t.writeVarInt(A), (0, d[g])(t, v[S], w);
            else t.writeVarInt(A), (0, d[g])(t, v, w);
          }
        }
      }
    },
    124: function (t, r, e) {
      e.d(r, "a", function () {
        return i;
      }),
        e.d(r, "c", function () {
          return o;
        }),
        e.d(r, "b", function () {
          return a;
        });
      var n = e(44);
      function i(t, r) {
        return o(new Uint8Array(t), new Uint8Array(r));
      }
      function o(t, r) {
        return (0 === t.length && 0 === r.length) || (0, n.f)(t, r);
      }
      function a(t) {
        if (t !== (0 | t)) throw new Error("bound must be int32");
        if (t <= 0) throw new Error("bound must not be positive");
        for (
          var r = new Int32Array(1), e = t * Math.floor((-1 >>> 1) / t), n = -1;
          -1 === n;

        ) {
          self.crypto.getRandomValues(r);
          var i = r[0] >>> 1;
          i < e && (n = i % t);
        }
        return n;
      }
    },
    129: function (t, r, e) {
      e.d(r, "a", function () {
        return i;
      }),
        e.d(r, "b", function () {
          return s;
        }),
        e.d(r, "f", function () {
          return c;
        }),
        e.d(r, "c", function () {
          return h;
        }),
        e.d(r, "d", function () {
          return l;
        }),
        e.d(r, "e", function () {
          return d;
        });
      var n = e(227),
        i = 32,
        o = new Uint8Array(i),
        a = { name: "HMAC", hash: "SHA-256" },
        u = { name: "HMAC", hash: "SHA-512" };
      function f(t, r) {
        var e = (0, n.a)(Uint8Array, r);
        return self.crypto.subtle
          .importKey("raw", e, t, !1, ["sign"])
          .then((r) => ({ key: r, algo: t }));
      }
      function s(t) {
        return f(a, t);
      }
      function c(t, r, e) {
        var n = t.key,
          i = t.algo;
        return self.crypto.subtle
          .sign(i, n, r)
          .then((t) => (null != e && 0 !== e ? t.slice(0, e) : t));
      }
      function h(t, r) {
        return f(a, null != t ? t : o).then((t) => c(t, r));
      }
      function l(t, r, e) {
        return f(a, t).then((t) => c(t, r, e));
      }
      function d(t, r, e) {
        return f(u, t).then((t) => c(t, r, e));
      }
    },
    193: function (t, r, e) {
      e.d(r, "b", function () {
        return c;
      }),
        e.d(r, "a", function () {
          return h;
        }),
        e.d(r, "c", function () {
          return l;
        });
      var n = e(0),
        i = {},
        o = {},
        a = {},
        u = {},
        f = {},
        s = {},
        c = {},
        h = {},
        l = {};
      (i.internalSpec = {
        sessionVersion: [1, n.d.UINT32],
        localIdentityPublic: [2, n.d.BYTES],
        remoteIdentityPublic: [3, n.d.BYTES],
        rootKey: [4, n.d.BYTES],
        previousCounter: [5, n.d.UINT32],
        senderChain: [6, n.d.MESSAGE, u],
        receiverChains: [7, n.b.REPEATED | n.d.MESSAGE, u],
        pendingKeyExchange: [8, n.d.MESSAGE, a],
        pendingPreKey: [9, n.d.MESSAGE, o],
        remoteRegistrationId: [10, n.d.UINT32],
        localRegistrationId: [11, n.d.UINT32],
        needsRefresh: [12, n.d.BOOL],
        aliceBaseKey: [13, n.d.BYTES],
      }),
        (o.internalSpec = {
          preKeyId: [1, n.d.UINT32],
          signedPreKeyId: [3, n.d.INT32],
          baseKey: [2, n.d.BYTES],
        }),
        (a.internalSpec = {
          sequence: [1, n.d.UINT32],
          localBaseKey: [2, n.d.BYTES],
          localBaseKeyPrivate: [3, n.d.BYTES],
          localRatchetKey: [4, n.d.BYTES],
          localRatchetKeyPrivate: [5, n.d.BYTES],
          localIdentityKey: [7, n.d.BYTES],
          localIdentityKeyPrivate: [8, n.d.BYTES],
        }),
        (u.internalSpec = {
          senderRatchetKey: [1, n.d.BYTES],
          senderRatchetKeyPrivate: [2, n.d.BYTES],
          chainKey: [3, n.d.MESSAGE, s],
          messageKeys: [4, n.b.REPEATED | n.d.MESSAGE, f],
        }),
        (f.internalSpec = {
          index: [1, n.d.UINT32],
          cipherKey: [2, n.d.BYTES],
          macKey: [3, n.d.BYTES],
          iv: [4, n.d.BYTES],
        }),
        (s.internalSpec = { index: [1, n.d.UINT32], key: [2, n.d.BYTES] }),
        (c.internalSpec = {
          currentSession: [1, n.d.MESSAGE, i],
          previousSessions: [2, n.b.REPEATED | n.d.MESSAGE, i],
        }),
        (h.internalSpec = {
          id: [1, n.d.UINT32],
          publicKey: [2, n.d.BYTES],
          privateKey: [3, n.d.BYTES],
        }),
        (l.internalSpec = {
          id: [1, n.d.UINT32],
          publicKey: [2, n.d.BYTES],
          privateKey: [3, n.d.BYTES],
          signature: [4, n.d.BYTES],
          timestamp: [5, n.d.FIXED64],
        }),
        n.d.BYTES,
        n.d.BYTES,
        n.d.UINT32,
        n.d.MESSAGE,
        n.d.MESSAGE,
        n.b.REPEATED,
        n.d.MESSAGE,
        n.d.BYTES,
        n.d.BYTES,
        n.d.UINT32,
        n.d.BYTES,
        n.d.UINT32,
        n.d.BYTES,
        n.b.REPEATED,
        n.d.MESSAGE;
    },
    198: function (t, r, e) {
      (function (t) {
        var r = function (t) {
            var r,
              e = new Float64Array(16);
            if (t) for (r = 0; r < t.length; r++) e[r] = t[r];
            return e;
          },
          n = function () {
            throw new Error("no PRNG");
          },
          i = new Uint8Array(16),
          o = new Uint8Array(32);
        o[0] = 9;
        var a = r(),
          u = r([1]),
          f = r([56129, 1]),
          s = r([
            30883,
            4953,
            19914,
            30187,
            55467,
            16705,
            2637,
            112,
            59544,
            30585,
            16505,
            36039,
            65139,
            11119,
            27886,
            20995,
          ]),
          c = r([
            61785,
            9906,
            39828,
            60374,
            45398,
            33411,
            5274,
            224,
            53552,
            61171,
            33010,
            6542,
            64743,
            22239,
            55772,
            9222,
          ]),
          h = r([
            54554,
            36645,
            11616,
            51542,
            42930,
            38181,
            51040,
            26924,
            56412,
            64982,
            57905,
            49316,
            21502,
            52590,
            14035,
            8553,
          ]),
          l = r([
            26200,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
          ]),
          d = r([
            41136,
            18958,
            6951,
            50414,
            58488,
            44335,
            6150,
            12099,
            55207,
            15867,
            153,
            11085,
            57099,
            20417,
            9344,
            11139,
          ]);
        function y(t, r, e, n) {
          (t[r] = (e >> 24) & 255),
            (t[r + 1] = (e >> 16) & 255),
            (t[r + 2] = (e >> 8) & 255),
            (t[r + 3] = 255 & e),
            (t[r + 4] = (n >> 24) & 255),
            (t[r + 5] = (n >> 16) & 255),
            (t[r + 6] = (n >> 8) & 255),
            (t[r + 7] = 255 & n);
        }
        function p(t, r, e, n, i) {
          var o,
            a = 0;
          for (o = 0; o < i; o++) a |= t[r + o] ^ e[n + o];
          return (1 & ((a - 1) >>> 8)) - 1;
        }
        function v(t, r, e, n) {
          return p(t, r, e, n, 16);
        }
        function E(t, r, e, n) {
          return p(t, r, e, n, 32);
        }
        function b(t, r, e, n) {
          (function (t, r, e, n) {
            for (
              var i,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                a =
                  (255 & e[0]) |
                  ((255 & e[1]) << 8) |
                  ((255 & e[2]) << 16) |
                  ((255 & e[3]) << 24),
                u =
                  (255 & e[4]) |
                  ((255 & e[5]) << 8) |
                  ((255 & e[6]) << 16) |
                  ((255 & e[7]) << 24),
                f =
                  (255 & e[8]) |
                  ((255 & e[9]) << 8) |
                  ((255 & e[10]) << 16) |
                  ((255 & e[11]) << 24),
                s =
                  (255 & e[12]) |
                  ((255 & e[13]) << 8) |
                  ((255 & e[14]) << 16) |
                  ((255 & e[15]) << 24),
                c =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                h =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                l =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                d =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                y =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                p =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                v =
                  (255 & e[16]) |
                  ((255 & e[17]) << 8) |
                  ((255 & e[18]) << 16) |
                  ((255 & e[19]) << 24),
                E =
                  (255 & e[20]) |
                  ((255 & e[21]) << 8) |
                  ((255 & e[22]) << 16) |
                  ((255 & e[23]) << 24),
                b =
                  (255 & e[24]) |
                  ((255 & e[25]) << 8) |
                  ((255 & e[26]) << 16) |
                  ((255 & e[27]) << 24),
                g =
                  (255 & e[28]) |
                  ((255 & e[29]) << 8) |
                  ((255 & e[30]) << 16) |
                  ((255 & e[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                A = o,
                S = a,
                m = u,
                T = f,
                _ = s,
                I = c,
                U = h,
                x = l,
                K = d,
                M = y,
                B = p,
                k = v,
                Y = E,
                P = b,
                R = g,
                N = w,
                L = 0;
              L < 20;
              L += 2
            )
              (A ^=
                ((i =
                  ((Y ^=
                    ((i =
                      ((K ^=
                        ((i =
                          ((_ ^= ((i = (A + Y) | 0) << 7) | (i >>> 25)) + A) |
                          0) <<
                          9) |
                        (i >>> 23)) +
                        _) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    K) |
                  0) <<
                  18) |
                (i >>> 14)),
                (I ^=
                  ((i =
                    ((S ^=
                      ((i =
                        ((P ^=
                          ((i =
                            ((M ^= ((i = (I + S) | 0) << 7) | (i >>> 25)) + I) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          M) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      P) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (B ^=
                  ((i =
                    ((U ^=
                      ((i =
                        ((m ^=
                          ((i =
                            ((R ^= ((i = (B + U) | 0) << 7) | (i >>> 25)) + B) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          R) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      m) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (N ^=
                  ((i =
                    ((k ^=
                      ((i =
                        ((x ^=
                          ((i =
                            ((T ^= ((i = (N + k) | 0) << 7) | (i >>> 25)) + N) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          T) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      x) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (A ^=
                  ((i =
                    ((T ^=
                      ((i =
                        ((m ^=
                          ((i =
                            ((S ^= ((i = (A + T) | 0) << 7) | (i >>> 25)) + A) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          S) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      m) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (I ^=
                  ((i =
                    ((_ ^=
                      ((i =
                        ((x ^=
                          ((i =
                            ((U ^= ((i = (I + _) | 0) << 7) | (i >>> 25)) + I) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          U) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      x) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (B ^=
                  ((i =
                    ((M ^=
                      ((i =
                        ((K ^=
                          ((i =
                            ((k ^= ((i = (B + M) | 0) << 7) | (i >>> 25)) + B) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          k) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      K) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (N ^=
                  ((i =
                    ((R ^=
                      ((i =
                        ((P ^=
                          ((i =
                            ((Y ^= ((i = (N + R) | 0) << 7) | (i >>> 25)) + N) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          Y) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      P) |
                    0) <<
                    18) |
                  (i >>> 14));
            (A = (A + o) | 0),
              (S = (S + a) | 0),
              (m = (m + u) | 0),
              (T = (T + f) | 0),
              (_ = (_ + s) | 0),
              (I = (I + c) | 0),
              (U = (U + h) | 0),
              (x = (x + l) | 0),
              (K = (K + d) | 0),
              (M = (M + y) | 0),
              (B = (B + p) | 0),
              (k = (k + v) | 0),
              (Y = (Y + E) | 0),
              (P = (P + b) | 0),
              (R = (R + g) | 0),
              (N = (N + w) | 0),
              (t[0] = (A >>> 0) & 255),
              (t[1] = (A >>> 8) & 255),
              (t[2] = (A >>> 16) & 255),
              (t[3] = (A >>> 24) & 255),
              (t[4] = (S >>> 0) & 255),
              (t[5] = (S >>> 8) & 255),
              (t[6] = (S >>> 16) & 255),
              (t[7] = (S >>> 24) & 255),
              (t[8] = (m >>> 0) & 255),
              (t[9] = (m >>> 8) & 255),
              (t[10] = (m >>> 16) & 255),
              (t[11] = (m >>> 24) & 255),
              (t[12] = (T >>> 0) & 255),
              (t[13] = (T >>> 8) & 255),
              (t[14] = (T >>> 16) & 255),
              (t[15] = (T >>> 24) & 255),
              (t[16] = (_ >>> 0) & 255),
              (t[17] = (_ >>> 8) & 255),
              (t[18] = (_ >>> 16) & 255),
              (t[19] = (_ >>> 24) & 255),
              (t[20] = (I >>> 0) & 255),
              (t[21] = (I >>> 8) & 255),
              (t[22] = (I >>> 16) & 255),
              (t[23] = (I >>> 24) & 255),
              (t[24] = (U >>> 0) & 255),
              (t[25] = (U >>> 8) & 255),
              (t[26] = (U >>> 16) & 255),
              (t[27] = (U >>> 24) & 255),
              (t[28] = (x >>> 0) & 255),
              (t[29] = (x >>> 8) & 255),
              (t[30] = (x >>> 16) & 255),
              (t[31] = (x >>> 24) & 255),
              (t[32] = (K >>> 0) & 255),
              (t[33] = (K >>> 8) & 255),
              (t[34] = (K >>> 16) & 255),
              (t[35] = (K >>> 24) & 255),
              (t[36] = (M >>> 0) & 255),
              (t[37] = (M >>> 8) & 255),
              (t[38] = (M >>> 16) & 255),
              (t[39] = (M >>> 24) & 255),
              (t[40] = (B >>> 0) & 255),
              (t[41] = (B >>> 8) & 255),
              (t[42] = (B >>> 16) & 255),
              (t[43] = (B >>> 24) & 255),
              (t[44] = (k >>> 0) & 255),
              (t[45] = (k >>> 8) & 255),
              (t[46] = (k >>> 16) & 255),
              (t[47] = (k >>> 24) & 255),
              (t[48] = (Y >>> 0) & 255),
              (t[49] = (Y >>> 8) & 255),
              (t[50] = (Y >>> 16) & 255),
              (t[51] = (Y >>> 24) & 255),
              (t[52] = (P >>> 0) & 255),
              (t[53] = (P >>> 8) & 255),
              (t[54] = (P >>> 16) & 255),
              (t[55] = (P >>> 24) & 255),
              (t[56] = (R >>> 0) & 255),
              (t[57] = (R >>> 8) & 255),
              (t[58] = (R >>> 16) & 255),
              (t[59] = (R >>> 24) & 255),
              (t[60] = (N >>> 0) & 255),
              (t[61] = (N >>> 8) & 255),
              (t[62] = (N >>> 16) & 255),
              (t[63] = (N >>> 24) & 255);
          })(t, r, e, n);
        }
        function g(t, r, e, n) {
          (function (t, r, e, n) {
            for (
              var i,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                a =
                  (255 & e[0]) |
                  ((255 & e[1]) << 8) |
                  ((255 & e[2]) << 16) |
                  ((255 & e[3]) << 24),
                u =
                  (255 & e[4]) |
                  ((255 & e[5]) << 8) |
                  ((255 & e[6]) << 16) |
                  ((255 & e[7]) << 24),
                f =
                  (255 & e[8]) |
                  ((255 & e[9]) << 8) |
                  ((255 & e[10]) << 16) |
                  ((255 & e[11]) << 24),
                s =
                  (255 & e[12]) |
                  ((255 & e[13]) << 8) |
                  ((255 & e[14]) << 16) |
                  ((255 & e[15]) << 24),
                c =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                h =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                l =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                d =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                y =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                p =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                v =
                  (255 & e[16]) |
                  ((255 & e[17]) << 8) |
                  ((255 & e[18]) << 16) |
                  ((255 & e[19]) << 24),
                E =
                  (255 & e[20]) |
                  ((255 & e[21]) << 8) |
                  ((255 & e[22]) << 16) |
                  ((255 & e[23]) << 24),
                b =
                  (255 & e[24]) |
                  ((255 & e[25]) << 8) |
                  ((255 & e[26]) << 16) |
                  ((255 & e[27]) << 24),
                g =
                  (255 & e[28]) |
                  ((255 & e[29]) << 8) |
                  ((255 & e[30]) << 16) |
                  ((255 & e[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                A = 0;
              A < 20;
              A += 2
            )
              (o ^=
                ((i =
                  ((E ^=
                    ((i =
                      ((d ^=
                        ((i =
                          ((s ^= ((i = (o + E) | 0) << 7) | (i >>> 25)) + o) |
                          0) <<
                          9) |
                        (i >>> 23)) +
                        s) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    d) |
                  0) <<
                  18) |
                (i >>> 14)),
                (c ^=
                  ((i =
                    ((a ^=
                      ((i =
                        ((b ^=
                          ((i =
                            ((y ^= ((i = (c + a) | 0) << 7) | (i >>> 25)) + c) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          y) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      b) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (p ^=
                  ((i =
                    ((h ^=
                      ((i =
                        ((u ^=
                          ((i =
                            ((g ^= ((i = (p + h) | 0) << 7) | (i >>> 25)) + p) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          g) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      u) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (w ^=
                  ((i =
                    ((v ^=
                      ((i =
                        ((l ^=
                          ((i =
                            ((f ^= ((i = (w + v) | 0) << 7) | (i >>> 25)) + w) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          f) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      l) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (o ^=
                  ((i =
                    ((f ^=
                      ((i =
                        ((u ^=
                          ((i =
                            ((a ^= ((i = (o + f) | 0) << 7) | (i >>> 25)) + o) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          a) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      u) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (c ^=
                  ((i =
                    ((s ^=
                      ((i =
                        ((l ^=
                          ((i =
                            ((h ^= ((i = (c + s) | 0) << 7) | (i >>> 25)) + c) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          h) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      l) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (p ^=
                  ((i =
                    ((y ^=
                      ((i =
                        ((d ^=
                          ((i =
                            ((v ^= ((i = (p + y) | 0) << 7) | (i >>> 25)) + p) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          v) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      d) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (w ^=
                  ((i =
                    ((g ^=
                      ((i =
                        ((b ^=
                          ((i =
                            ((E ^= ((i = (w + g) | 0) << 7) | (i >>> 25)) + w) |
                            0) <<
                            9) |
                          (i >>> 23)) +
                          E) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      b) |
                    0) <<
                    18) |
                  (i >>> 14));
            (t[0] = (o >>> 0) & 255),
              (t[1] = (o >>> 8) & 255),
              (t[2] = (o >>> 16) & 255),
              (t[3] = (o >>> 24) & 255),
              (t[4] = (c >>> 0) & 255),
              (t[5] = (c >>> 8) & 255),
              (t[6] = (c >>> 16) & 255),
              (t[7] = (c >>> 24) & 255),
              (t[8] = (p >>> 0) & 255),
              (t[9] = (p >>> 8) & 255),
              (t[10] = (p >>> 16) & 255),
              (t[11] = (p >>> 24) & 255),
              (t[12] = (w >>> 0) & 255),
              (t[13] = (w >>> 8) & 255),
              (t[14] = (w >>> 16) & 255),
              (t[15] = (w >>> 24) & 255),
              (t[16] = (h >>> 0) & 255),
              (t[17] = (h >>> 8) & 255),
              (t[18] = (h >>> 16) & 255),
              (t[19] = (h >>> 24) & 255),
              (t[20] = (l >>> 0) & 255),
              (t[21] = (l >>> 8) & 255),
              (t[22] = (l >>> 16) & 255),
              (t[23] = (l >>> 24) & 255),
              (t[24] = (d >>> 0) & 255),
              (t[25] = (d >>> 8) & 255),
              (t[26] = (d >>> 16) & 255),
              (t[27] = (d >>> 24) & 255),
              (t[28] = (y >>> 0) & 255),
              (t[29] = (y >>> 8) & 255),
              (t[30] = (y >>> 16) & 255),
              (t[31] = (y >>> 24) & 255);
          })(t, r, e, n);
        }
        var w = new Uint8Array([
          101,
          120,
          112,
          97,
          110,
          100,
          32,
          51,
          50,
          45,
          98,
          121,
          116,
          101,
          32,
          107,
        ]);
        function A(t, r, e, n, i, o, a) {
          var u,
            f,
            s = new Uint8Array(16),
            c = new Uint8Array(64);
          for (f = 0; f < 16; f++) s[f] = 0;
          for (f = 0; f < 8; f++) s[f] = o[f];
          for (; i >= 64; ) {
            for (b(c, s, a, w), f = 0; f < 64; f++) t[r + f] = e[n + f] ^ c[f];
            for (u = 1, f = 8; f < 16; f++)
              (u = (u + (255 & s[f])) | 0), (s[f] = 255 & u), (u >>>= 8);
            (i -= 64), (r += 64), (n += 64);
          }
          if (i > 0)
            for (b(c, s, a, w), f = 0; f < i; f++) t[r + f] = e[n + f] ^ c[f];
          return 0;
        }
        function S(t, r, e, n, i) {
          var o,
            a,
            u = new Uint8Array(16),
            f = new Uint8Array(64);
          for (a = 0; a < 16; a++) u[a] = 0;
          for (a = 0; a < 8; a++) u[a] = n[a];
          for (; e >= 64; ) {
            for (b(f, u, i, w), a = 0; a < 64; a++) t[r + a] = f[a];
            for (o = 1, a = 8; a < 16; a++)
              (o = (o + (255 & u[a])) | 0), (u[a] = 255 & o), (o >>>= 8);
            (e -= 64), (r += 64);
          }
          if (e > 0) for (b(f, u, i, w), a = 0; a < e; a++) t[r + a] = f[a];
          return 0;
        }
        function m(t, r, e, n, i) {
          var o = new Uint8Array(32);
          g(o, n, i, w);
          for (var a = new Uint8Array(8), u = 0; u < 8; u++) a[u] = n[u + 16];
          return S(t, r, e, a, o);
        }
        function T(t, r, e, n, i, o, a) {
          var u = new Uint8Array(32);
          g(u, o, a, w);
          for (var f = new Uint8Array(8), s = 0; s < 8; s++) f[s] = o[s + 16];
          return A(t, r, e, n, i, f, u);
        }
        var _ = function (t) {
          var r, e, n, i, o, a, u, f;
          (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (r = (255 & t[0]) | ((255 & t[1]) << 8)),
            (this.r[0] = 8191 & r),
            (e = (255 & t[2]) | ((255 & t[3]) << 8)),
            (this.r[1] = 8191 & ((r >>> 13) | (e << 3))),
            (n = (255 & t[4]) | ((255 & t[5]) << 8)),
            (this.r[2] = 7939 & ((e >>> 10) | (n << 6))),
            (i = (255 & t[6]) | ((255 & t[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (o = (255 & t[8]) | ((255 & t[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (o << 12))),
            (this.r[5] = (o >>> 1) & 8190),
            (a = (255 & t[10]) | ((255 & t[11]) << 8)),
            (this.r[6] = 8191 & ((o >>> 14) | (a << 2))),
            (u = (255 & t[12]) | ((255 & t[13]) << 8)),
            (this.r[7] = 8065 & ((a >>> 11) | (u << 5))),
            (f = (255 & t[14]) | ((255 & t[15]) << 8)),
            (this.r[8] = 8191 & ((u >>> 8) | (f << 8))),
            (this.r[9] = (f >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8));
        };
        function I(t, r, e, n, i, o) {
          var a = new _(o);
          return a.update(e, n, i), a.finish(t, r), 0;
        }
        function U(t, r, e, n, i, o) {
          var a = new Uint8Array(16);
          return I(a, 0, e, n, i, o), v(t, r, a, 0);
        }
        function x(t, r, e, n, i) {
          var o;
          if (e < 32) return -1;
          for (
            T(t, 0, r, 0, e, n, i), I(t, 16, t, 32, e - 32, t), o = 0;
            o < 16;
            o++
          )
            t[o] = 0;
          return 0;
        }
        function K(t, r, e, n, i) {
          var o,
            a = new Uint8Array(32);
          if (e < 32) return -1;
          if ((m(a, 0, 32, n, i), 0 !== U(r, 16, r, 32, e - 32, a))) return -1;
          for (T(t, 0, r, 0, e, n, i), o = 0; o < 32; o++) t[o] = 0;
          return 0;
        }
        function M(t, r) {
          var e;
          for (e = 0; e < 16; e++) t[e] = 0 | r[e];
        }
        function B(t) {
          var r,
            e,
            n = 1;
          for (r = 0; r < 16; r++)
            (e = t[r] + n + 65535),
              (n = Math.floor(e / 65536)),
              (t[r] = e - 65536 * n);
          t[0] += n - 1 + 37 * (n - 1);
        }
        function k(t, r, e) {
          for (var n, i = ~(e - 1), o = 0; o < 16; o++)
            (n = i & (t[o] ^ r[o])), (t[o] ^= n), (r[o] ^= n);
        }
        function Y(t, e) {
          var n,
            i,
            o,
            a = r(),
            u = r();
          for (n = 0; n < 16; n++) u[n] = e[n];
          for (B(u), B(u), B(u), i = 0; i < 2; i++) {
            for (a[0] = u[0] - 65517, n = 1; n < 15; n++)
              (a[n] = u[n] - 65535 - ((a[n - 1] >> 16) & 1)),
                (a[n - 1] &= 65535);
            (a[15] = u[15] - 32767 - ((a[14] >> 16) & 1)),
              (o = (a[15] >> 16) & 1),
              (a[14] &= 65535),
              k(u, a, 1 - o);
          }
          for (n = 0; n < 16; n++)
            (t[2 * n] = 255 & u[n]), (t[2 * n + 1] = u[n] >> 8);
        }
        function P(t, r) {
          var e = new Uint8Array(32),
            n = new Uint8Array(32);
          return Y(e, t), Y(n, r), E(e, 0, n, 0);
        }
        function R(t) {
          var r = new Uint8Array(32);
          return Y(r, t), 1 & r[0];
        }
        function N(t, r) {
          var e;
          for (e = 0; e < 16; e++) t[e] = r[2 * e] + (r[2 * e + 1] << 8);
          t[15] &= 32767;
        }
        function L(t, r, e) {
          for (var n = 0; n < 16; n++) t[n] = r[n] + e[n];
        }
        function O(t, r, e) {
          for (var n = 0; n < 16; n++) t[n] = r[n] - e[n];
        }
        function C(t, r, e) {
          var n,
            i,
            o = 0,
            a = 0,
            u = 0,
            f = 0,
            s = 0,
            c = 0,
            h = 0,
            l = 0,
            d = 0,
            y = 0,
            p = 0,
            v = 0,
            E = 0,
            b = 0,
            g = 0,
            w = 0,
            A = 0,
            S = 0,
            m = 0,
            T = 0,
            _ = 0,
            I = 0,
            U = 0,
            x = 0,
            K = 0,
            M = 0,
            B = 0,
            k = 0,
            Y = 0,
            P = 0,
            R = 0,
            N = e[0],
            L = e[1],
            O = e[2],
            C = e[3],
            D = e[4],
            G = e[5],
            V = e[6],
            F = e[7],
            H = e[8],
            z = e[9],
            J = e[10],
            $ = e[11],
            X = e[12],
            j = e[13],
            Z = e[14],
            W = e[15];
          (o += (n = r[0]) * N),
            (a += n * L),
            (u += n * O),
            (f += n * C),
            (s += n * D),
            (c += n * G),
            (h += n * V),
            (l += n * F),
            (d += n * H),
            (y += n * z),
            (p += n * J),
            (v += n * $),
            (E += n * X),
            (b += n * j),
            (g += n * Z),
            (w += n * W),
            (a += (n = r[1]) * N),
            (u += n * L),
            (f += n * O),
            (s += n * C),
            (c += n * D),
            (h += n * G),
            (l += n * V),
            (d += n * F),
            (y += n * H),
            (p += n * z),
            (v += n * J),
            (E += n * $),
            (b += n * X),
            (g += n * j),
            (w += n * Z),
            (A += n * W),
            (u += (n = r[2]) * N),
            (f += n * L),
            (s += n * O),
            (c += n * C),
            (h += n * D),
            (l += n * G),
            (d += n * V),
            (y += n * F),
            (p += n * H),
            (v += n * z),
            (E += n * J),
            (b += n * $),
            (g += n * X),
            (w += n * j),
            (A += n * Z),
            (S += n * W),
            (f += (n = r[3]) * N),
            (s += n * L),
            (c += n * O),
            (h += n * C),
            (l += n * D),
            (d += n * G),
            (y += n * V),
            (p += n * F),
            (v += n * H),
            (E += n * z),
            (b += n * J),
            (g += n * $),
            (w += n * X),
            (A += n * j),
            (S += n * Z),
            (m += n * W),
            (s += (n = r[4]) * N),
            (c += n * L),
            (h += n * O),
            (l += n * C),
            (d += n * D),
            (y += n * G),
            (p += n * V),
            (v += n * F),
            (E += n * H),
            (b += n * z),
            (g += n * J),
            (w += n * $),
            (A += n * X),
            (S += n * j),
            (m += n * Z),
            (T += n * W),
            (c += (n = r[5]) * N),
            (h += n * L),
            (l += n * O),
            (d += n * C),
            (y += n * D),
            (p += n * G),
            (v += n * V),
            (E += n * F),
            (b += n * H),
            (g += n * z),
            (w += n * J),
            (A += n * $),
            (S += n * X),
            (m += n * j),
            (T += n * Z),
            (_ += n * W),
            (h += (n = r[6]) * N),
            (l += n * L),
            (d += n * O),
            (y += n * C),
            (p += n * D),
            (v += n * G),
            (E += n * V),
            (b += n * F),
            (g += n * H),
            (w += n * z),
            (A += n * J),
            (S += n * $),
            (m += n * X),
            (T += n * j),
            (_ += n * Z),
            (I += n * W),
            (l += (n = r[7]) * N),
            (d += n * L),
            (y += n * O),
            (p += n * C),
            (v += n * D),
            (E += n * G),
            (b += n * V),
            (g += n * F),
            (w += n * H),
            (A += n * z),
            (S += n * J),
            (m += n * $),
            (T += n * X),
            (_ += n * j),
            (I += n * Z),
            (U += n * W),
            (d += (n = r[8]) * N),
            (y += n * L),
            (p += n * O),
            (v += n * C),
            (E += n * D),
            (b += n * G),
            (g += n * V),
            (w += n * F),
            (A += n * H),
            (S += n * z),
            (m += n * J),
            (T += n * $),
            (_ += n * X),
            (I += n * j),
            (U += n * Z),
            (x += n * W),
            (y += (n = r[9]) * N),
            (p += n * L),
            (v += n * O),
            (E += n * C),
            (b += n * D),
            (g += n * G),
            (w += n * V),
            (A += n * F),
            (S += n * H),
            (m += n * z),
            (T += n * J),
            (_ += n * $),
            (I += n * X),
            (U += n * j),
            (x += n * Z),
            (K += n * W),
            (p += (n = r[10]) * N),
            (v += n * L),
            (E += n * O),
            (b += n * C),
            (g += n * D),
            (w += n * G),
            (A += n * V),
            (S += n * F),
            (m += n * H),
            (T += n * z),
            (_ += n * J),
            (I += n * $),
            (U += n * X),
            (x += n * j),
            (K += n * Z),
            (M += n * W),
            (v += (n = r[11]) * N),
            (E += n * L),
            (b += n * O),
            (g += n * C),
            (w += n * D),
            (A += n * G),
            (S += n * V),
            (m += n * F),
            (T += n * H),
            (_ += n * z),
            (I += n * J),
            (U += n * $),
            (x += n * X),
            (K += n * j),
            (M += n * Z),
            (B += n * W),
            (E += (n = r[12]) * N),
            (b += n * L),
            (g += n * O),
            (w += n * C),
            (A += n * D),
            (S += n * G),
            (m += n * V),
            (T += n * F),
            (_ += n * H),
            (I += n * z),
            (U += n * J),
            (x += n * $),
            (K += n * X),
            (M += n * j),
            (B += n * Z),
            (k += n * W),
            (b += (n = r[13]) * N),
            (g += n * L),
            (w += n * O),
            (A += n * C),
            (S += n * D),
            (m += n * G),
            (T += n * V),
            (_ += n * F),
            (I += n * H),
            (U += n * z),
            (x += n * J),
            (K += n * $),
            (M += n * X),
            (B += n * j),
            (k += n * Z),
            (Y += n * W),
            (g += (n = r[14]) * N),
            (w += n * L),
            (A += n * O),
            (S += n * C),
            (m += n * D),
            (T += n * G),
            (_ += n * V),
            (I += n * F),
            (U += n * H),
            (x += n * z),
            (K += n * J),
            (M += n * $),
            (B += n * X),
            (k += n * j),
            (Y += n * Z),
            (P += n * W),
            (w += (n = r[15]) * N),
            (a += 38 * (S += n * O)),
            (u += 38 * (m += n * C)),
            (f += 38 * (T += n * D)),
            (s += 38 * (_ += n * G)),
            (c += 38 * (I += n * V)),
            (h += 38 * (U += n * F)),
            (l += 38 * (x += n * H)),
            (d += 38 * (K += n * z)),
            (y += 38 * (M += n * J)),
            (p += 38 * (B += n * $)),
            (v += 38 * (k += n * X)),
            (E += 38 * (Y += n * j)),
            (b += 38 * (P += n * Z)),
            (g += 38 * (R += n * W)),
            (o =
              (n = (o += 38 * (A += n * L)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (E = (n = E + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o =
              (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (E = (n = E + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o += i - 1 + 37 * (i - 1)),
            (t[0] = o),
            (t[1] = a),
            (t[2] = u),
            (t[3] = f),
            (t[4] = s),
            (t[5] = c),
            (t[6] = h),
            (t[7] = l),
            (t[8] = d),
            (t[9] = y),
            (t[10] = p),
            (t[11] = v),
            (t[12] = E),
            (t[13] = b),
            (t[14] = g),
            (t[15] = w);
        }
        function D(t, r) {
          C(t, r, r);
        }
        function G(t, e) {
          var n,
            i = r();
          for (n = 0; n < 16; n++) i[n] = e[n];
          for (n = 253; n >= 0; n--) D(i, i), 2 !== n && 4 !== n && C(i, i, e);
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function V(t, e) {
          var n,
            i = r();
          for (n = 0; n < 16; n++) i[n] = e[n];
          for (n = 250; n >= 0; n--) D(i, i), 1 !== n && C(i, i, e);
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function F(t, e, n) {
          var i,
            o,
            a = new Uint8Array(32),
            u = new Float64Array(80),
            s = r(),
            c = r(),
            h = r(),
            l = r(),
            d = r(),
            y = r();
          for (o = 0; o < 31; o++) a[o] = e[o];
          for (
            a[31] = (127 & e[31]) | 64, a[0] &= 248, N(u, n), o = 0;
            o < 16;
            o++
          )
            (c[o] = u[o]), (l[o] = s[o] = h[o] = 0);
          for (s[0] = l[0] = 1, o = 254; o >= 0; --o)
            k(s, c, (i = (a[o >>> 3] >>> (7 & o)) & 1)),
              k(h, l, i),
              L(d, s, h),
              O(s, s, h),
              L(h, c, l),
              O(c, c, l),
              D(l, d),
              D(y, s),
              C(s, h, s),
              C(h, c, d),
              L(d, s, h),
              O(s, s, h),
              D(c, s),
              O(h, l, y),
              C(s, h, f),
              L(s, s, l),
              C(h, h, s),
              C(s, l, y),
              C(l, c, u),
              D(c, d),
              k(s, c, i),
              k(h, l, i);
          for (o = 0; o < 16; o++)
            (u[o + 16] = s[o]),
              (u[o + 32] = h[o]),
              (u[o + 48] = c[o]),
              (u[o + 64] = l[o]);
          var p = u.subarray(32),
            v = u.subarray(16);
          return G(p, p), C(v, v, p), Y(t, v), 0;
        }
        function H(t, r) {
          return F(t, r, o);
        }
        function z(t, r) {
          return n(r, 32), H(t, r);
        }
        function J(t, r, e) {
          var n = new Uint8Array(32);
          return F(n, e, r), g(t, i, n, w);
        }
        (_.prototype.blocks = function (t, r, e) {
          for (
            var n,
              i,
              o,
              a,
              u,
              f,
              s,
              c,
              h,
              l,
              d,
              y,
              p,
              v,
              E,
              b,
              g,
              w,
              A,
              S = this.fin ? 0 : 2048,
              m = this.h[0],
              T = this.h[1],
              _ = this.h[2],
              I = this.h[3],
              U = this.h[4],
              x = this.h[5],
              K = this.h[6],
              M = this.h[7],
              B = this.h[8],
              k = this.h[9],
              Y = this.r[0],
              P = this.r[1],
              R = this.r[2],
              N = this.r[3],
              L = this.r[4],
              O = this.r[5],
              C = this.r[6],
              D = this.r[7],
              G = this.r[8],
              V = this.r[9];
            e >= 16;

          )
            (l = h = 0),
              (l +=
                (m += 8191 & (n = (255 & t[r + 0]) | ((255 & t[r + 1]) << 8))) *
                Y),
              (l +=
                (T +=
                  8191 &
                  ((n >>> 13) |
                    ((i = (255 & t[r + 2]) | ((255 & t[r + 3]) << 8)) << 3))) *
                (5 * V)),
              (l +=
                (_ +=
                  8191 &
                  ((i >>> 10) |
                    ((o = (255 & t[r + 4]) | ((255 & t[r + 5]) << 8)) << 6))) *
                (5 * G)),
              (l +=
                (I +=
                  8191 &
                  ((o >>> 7) |
                    ((a = (255 & t[r + 6]) | ((255 & t[r + 7]) << 8)) << 9))) *
                (5 * D)),
              (h =
                (l +=
                  (U +=
                    8191 &
                    ((a >>> 4) |
                      ((u = (255 & t[r + 8]) | ((255 & t[r + 9]) << 8)) <<
                        12))) *
                  (5 * C)) >>> 13),
              (l &= 8191),
              (l += (x += (u >>> 1) & 8191) * (5 * O)),
              (l +=
                (K +=
                  8191 &
                  ((u >>> 14) |
                    ((f = (255 & t[r + 10]) | ((255 & t[r + 11]) << 8)) <<
                      2))) *
                (5 * L)),
              (l +=
                (M +=
                  8191 &
                  ((f >>> 11) |
                    ((s = (255 & t[r + 12]) | ((255 & t[r + 13]) << 8)) <<
                      5))) *
                (5 * N)),
              (l +=
                (B +=
                  8191 &
                  ((s >>> 8) |
                    ((c = (255 & t[r + 14]) | ((255 & t[r + 15]) << 8)) <<
                      8))) *
                (5 * R)),
              (d = h += (l += (k += (c >>> 5) | S) * (5 * P)) >>> 13),
              (d += m * P),
              (d += T * Y),
              (d += _ * (5 * V)),
              (d += I * (5 * G)),
              (h = (d += U * (5 * D)) >>> 13),
              (d &= 8191),
              (d += x * (5 * C)),
              (d += K * (5 * O)),
              (d += M * (5 * L)),
              (d += B * (5 * N)),
              (h += (d += k * (5 * R)) >>> 13),
              (d &= 8191),
              (y = h),
              (y += m * R),
              (y += T * P),
              (y += _ * Y),
              (y += I * (5 * V)),
              (h = (y += U * (5 * G)) >>> 13),
              (y &= 8191),
              (y += x * (5 * D)),
              (y += K * (5 * C)),
              (y += M * (5 * O)),
              (y += B * (5 * L)),
              (p = h += (y += k * (5 * N)) >>> 13),
              (p += m * N),
              (p += T * R),
              (p += _ * P),
              (p += I * Y),
              (h = (p += U * (5 * V)) >>> 13),
              (p &= 8191),
              (p += x * (5 * G)),
              (p += K * (5 * D)),
              (p += M * (5 * C)),
              (p += B * (5 * O)),
              (v = h += (p += k * (5 * L)) >>> 13),
              (v += m * L),
              (v += T * N),
              (v += _ * R),
              (v += I * P),
              (h = (v += U * Y) >>> 13),
              (v &= 8191),
              (v += x * (5 * V)),
              (v += K * (5 * G)),
              (v += M * (5 * D)),
              (v += B * (5 * C)),
              (E = h += (v += k * (5 * O)) >>> 13),
              (E += m * O),
              (E += T * L),
              (E += _ * N),
              (E += I * R),
              (h = (E += U * P) >>> 13),
              (E &= 8191),
              (E += x * Y),
              (E += K * (5 * V)),
              (E += M * (5 * G)),
              (E += B * (5 * D)),
              (b = h += (E += k * (5 * C)) >>> 13),
              (b += m * C),
              (b += T * O),
              (b += _ * L),
              (b += I * N),
              (h = (b += U * R) >>> 13),
              (b &= 8191),
              (b += x * P),
              (b += K * Y),
              (b += M * (5 * V)),
              (b += B * (5 * G)),
              (g = h += (b += k * (5 * D)) >>> 13),
              (g += m * D),
              (g += T * C),
              (g += _ * O),
              (g += I * L),
              (h = (g += U * N) >>> 13),
              (g &= 8191),
              (g += x * R),
              (g += K * P),
              (g += M * Y),
              (g += B * (5 * V)),
              (w = h += (g += k * (5 * G)) >>> 13),
              (w += m * G),
              (w += T * D),
              (w += _ * C),
              (w += I * O),
              (h = (w += U * L) >>> 13),
              (w &= 8191),
              (w += x * N),
              (w += K * R),
              (w += M * P),
              (w += B * Y),
              (A = h += (w += k * (5 * V)) >>> 13),
              (A += m * V),
              (A += T * G),
              (A += _ * D),
              (A += I * C),
              (h = (A += U * O) >>> 13),
              (A &= 8191),
              (A += x * L),
              (A += K * N),
              (A += M * R),
              (A += B * P),
              (m = l =
                8191 &
                (h =
                  ((h = (((h += (A += k * Y) >>> 13) << 2) + h) | 0) +
                    (l &= 8191)) |
                  0)),
              (T = d += h >>>= 13),
              (_ = y &= 8191),
              (I = p &= 8191),
              (U = v &= 8191),
              (x = E &= 8191),
              (K = b &= 8191),
              (M = g &= 8191),
              (B = w &= 8191),
              (k = A &= 8191),
              (r += 16),
              (e -= 16);
          (this.h[0] = m),
            (this.h[1] = T),
            (this.h[2] = _),
            (this.h[3] = I),
            (this.h[4] = U),
            (this.h[5] = x),
            (this.h[6] = K),
            (this.h[7] = M),
            (this.h[8] = B),
            (this.h[9] = k);
        }),
          (_.prototype.finish = function (t, r) {
            var e,
              n,
              i,
              o,
              a = new Uint16Array(10);
            if (this.leftover) {
              for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++)
                this.buffer[o] = 0;
              (this.fin = 1), this.blocks(this.buffer, 0, 16);
            }
            for (e = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++)
              (this.h[o] += e), (e = this.h[o] >>> 13), (this.h[o] &= 8191);
            for (
              this.h[0] += 5 * e,
                e = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += e,
                e = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += e,
                a[0] = this.h[0] + 5,
                e = a[0] >>> 13,
                a[0] &= 8191,
                o = 1;
              o < 10;
              o++
            )
              (a[o] = this.h[o] + e), (e = a[o] >>> 13), (a[o] &= 8191);
            for (a[9] -= 8192, n = (1 ^ e) - 1, o = 0; o < 10; o++) a[o] &= n;
            for (n = ~n, o = 0; o < 10; o++) this.h[o] = (this.h[o] & n) | a[o];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                o = 1;
              o < 8;
              o++
            )
              (i = (((this.h[o] + this.pad[o]) | 0) + (i >>> 16)) | 0),
                (this.h[o] = 65535 & i);
            (t[r + 0] = (this.h[0] >>> 0) & 255),
              (t[r + 1] = (this.h[0] >>> 8) & 255),
              (t[r + 2] = (this.h[1] >>> 0) & 255),
              (t[r + 3] = (this.h[1] >>> 8) & 255),
              (t[r + 4] = (this.h[2] >>> 0) & 255),
              (t[r + 5] = (this.h[2] >>> 8) & 255),
              (t[r + 6] = (this.h[3] >>> 0) & 255),
              (t[r + 7] = (this.h[3] >>> 8) & 255),
              (t[r + 8] = (this.h[4] >>> 0) & 255),
              (t[r + 9] = (this.h[4] >>> 8) & 255),
              (t[r + 10] = (this.h[5] >>> 0) & 255),
              (t[r + 11] = (this.h[5] >>> 8) & 255),
              (t[r + 12] = (this.h[6] >>> 0) & 255),
              (t[r + 13] = (this.h[6] >>> 8) & 255),
              (t[r + 14] = (this.h[7] >>> 0) & 255),
              (t[r + 15] = (this.h[7] >>> 8) & 255);
          }),
          (_.prototype.update = function (t, r, e) {
            var n, i;
            if (this.leftover) {
              for ((i = 16 - this.leftover) > e && (i = e), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = t[r + n];
              if (
                ((e -= i), (r += i), (this.leftover += i), this.leftover < 16)
              )
                return;
              this.blocks(this.buffer, 0, 16), (this.leftover = 0);
            }
            if (
              (e >= 16 &&
                ((i = e - (e % 16)), this.blocks(t, r, i), (r += i), (e -= i)),
              e)
            ) {
              for (n = 0; n < e; n++) this.buffer[this.leftover + n] = t[r + n];
              this.leftover += e;
            }
          });
        var $ = x,
          X = K,
          j = [
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591,
          ];
        function Z(t, r, e, n) {
          for (
            var i,
              o,
              a,
              u,
              f,
              s,
              c,
              h,
              l,
              d,
              y,
              p,
              v,
              E,
              b,
              g,
              w,
              A,
              S,
              m,
              T,
              _,
              I,
              U,
              x,
              K,
              M = new Int32Array(16),
              B = new Int32Array(16),
              k = t[0],
              Y = t[1],
              P = t[2],
              R = t[3],
              N = t[4],
              L = t[5],
              O = t[6],
              C = t[7],
              D = r[0],
              G = r[1],
              V = r[2],
              F = r[3],
              H = r[4],
              z = r[5],
              J = r[6],
              $ = r[7],
              X = 0;
            n >= 128;

          ) {
            for (S = 0; S < 16; S++)
              (m = 8 * S + X),
                (M[S] =
                  (e[m + 0] << 24) |
                  (e[m + 1] << 16) |
                  (e[m + 2] << 8) |
                  e[m + 3]),
                (B[S] =
                  (e[m + 4] << 24) |
                  (e[m + 5] << 16) |
                  (e[m + 6] << 8) |
                  e[m + 7]);
            for (S = 0; S < 80; S++)
              if (
                ((i = k),
                (o = Y),
                (a = P),
                (u = R),
                (f = N),
                (s = L),
                (c = O),
                (l = D),
                (d = G),
                (y = V),
                (p = F),
                (v = H),
                (E = z),
                (b = J),
                (I = 65535 & (_ = $)),
                (U = _ >>> 16),
                (x = 65535 & (T = C)),
                (K = T >>> 16),
                (I +=
                  65535 &
                  (_ =
                    ((H >>> 14) | (N << 18)) ^
                    ((H >>> 18) | (N << 14)) ^
                    ((N >>> 9) | (H << 23)))),
                (U += _ >>> 16),
                (x +=
                  65535 &
                  (T =
                    ((N >>> 14) | (H << 18)) ^
                    ((N >>> 18) | (H << 14)) ^
                    ((H >>> 9) | (N << 23)))),
                (K += T >>> 16),
                (I += 65535 & (_ = (H & z) ^ (~H & J))),
                (U += _ >>> 16),
                (x += 65535 & (T = (N & L) ^ (~N & O))),
                (K += T >>> 16),
                (I += 65535 & (_ = j[2 * S + 1])),
                (U += _ >>> 16),
                (x += 65535 & (T = j[2 * S])),
                (K += T >>> 16),
                (T = M[S % 16]),
                (U += (_ = B[S % 16]) >>> 16),
                (x += 65535 & T),
                (K += T >>> 16),
                (x += (U += (I += 65535 & _) >>> 16) >>> 16),
                (I = 65535 & (_ = A = (65535 & I) | (U << 16))),
                (U = _ >>> 16),
                (x = 65535 & (T = w = (65535 & x) | ((K += x >>> 16) << 16))),
                (K = T >>> 16),
                (I +=
                  65535 &
                  (_ =
                    ((D >>> 28) | (k << 4)) ^
                    ((k >>> 2) | (D << 30)) ^
                    ((k >>> 7) | (D << 25)))),
                (U += _ >>> 16),
                (x +=
                  65535 &
                  (T =
                    ((k >>> 28) | (D << 4)) ^
                    ((D >>> 2) | (k << 30)) ^
                    ((D >>> 7) | (k << 25)))),
                (K += T >>> 16),
                (U += (_ = (D & G) ^ (D & V) ^ (G & V)) >>> 16),
                (x += 65535 & (T = (k & Y) ^ (k & P) ^ (Y & P))),
                (K += T >>> 16),
                (h =
                  (65535 & (x += (U += (I += 65535 & _) >>> 16) >>> 16)) |
                  ((K += x >>> 16) << 16)),
                (g = (65535 & I) | (U << 16)),
                (I = 65535 & (_ = p)),
                (U = _ >>> 16),
                (x = 65535 & (T = u)),
                (K = T >>> 16),
                (U += (_ = A) >>> 16),
                (x += 65535 & (T = w)),
                (K += T >>> 16),
                (Y = i),
                (P = o),
                (R = a),
                (N = u =
                  (65535 & (x += (U += (I += 65535 & _) >>> 16) >>> 16)) |
                  ((K += x >>> 16) << 16)),
                (L = f),
                (O = s),
                (C = c),
                (k = h),
                (G = l),
                (V = d),
                (F = y),
                (H = p = (65535 & I) | (U << 16)),
                (z = v),
                (J = E),
                ($ = b),
                (D = g),
                S % 16 == 15)
              )
                for (m = 0; m < 16; m++)
                  (T = M[m]),
                    (I = 65535 & (_ = B[m])),
                    (U = _ >>> 16),
                    (x = 65535 & T),
                    (K = T >>> 16),
                    (T = M[(m + 9) % 16]),
                    (I += 65535 & (_ = B[(m + 9) % 16])),
                    (U += _ >>> 16),
                    (x += 65535 & T),
                    (K += T >>> 16),
                    (w = M[(m + 1) % 16]),
                    (I +=
                      65535 &
                      (_ =
                        (((A = B[(m + 1) % 16]) >>> 1) | (w << 31)) ^
                        ((A >>> 8) | (w << 24)) ^
                        ((A >>> 7) | (w << 25)))),
                    (U += _ >>> 16),
                    (x +=
                      65535 &
                      (T =
                        ((w >>> 1) | (A << 31)) ^
                        ((w >>> 8) | (A << 24)) ^
                        (w >>> 7))),
                    (K += T >>> 16),
                    (w = M[(m + 14) % 16]),
                    (U +=
                      (_ =
                        (((A = B[(m + 14) % 16]) >>> 19) | (w << 13)) ^
                        ((w >>> 29) | (A << 3)) ^
                        ((A >>> 6) | (w << 26))) >>> 16),
                    (x +=
                      65535 &
                      (T =
                        ((w >>> 19) | (A << 13)) ^
                        ((A >>> 29) | (w << 3)) ^
                        (w >>> 6))),
                    (K += T >>> 16),
                    (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
                    (M[m] = (65535 & x) | (K << 16)),
                    (B[m] = (65535 & I) | (U << 16));
            (I = 65535 & (_ = D)),
              (U = _ >>> 16),
              (x = 65535 & (T = k)),
              (K = T >>> 16),
              (T = t[0]),
              (U += (_ = r[0]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[0] = k = (65535 & x) | (K << 16)),
              (r[0] = D = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = G)),
              (U = _ >>> 16),
              (x = 65535 & (T = Y)),
              (K = T >>> 16),
              (T = t[1]),
              (U += (_ = r[1]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[1] = Y = (65535 & x) | (K << 16)),
              (r[1] = G = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = V)),
              (U = _ >>> 16),
              (x = 65535 & (T = P)),
              (K = T >>> 16),
              (T = t[2]),
              (U += (_ = r[2]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[2] = P = (65535 & x) | (K << 16)),
              (r[2] = V = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = F)),
              (U = _ >>> 16),
              (x = 65535 & (T = R)),
              (K = T >>> 16),
              (T = t[3]),
              (U += (_ = r[3]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[3] = R = (65535 & x) | (K << 16)),
              (r[3] = F = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = H)),
              (U = _ >>> 16),
              (x = 65535 & (T = N)),
              (K = T >>> 16),
              (T = t[4]),
              (U += (_ = r[4]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[4] = N = (65535 & x) | (K << 16)),
              (r[4] = H = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = z)),
              (U = _ >>> 16),
              (x = 65535 & (T = L)),
              (K = T >>> 16),
              (T = t[5]),
              (U += (_ = r[5]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[5] = L = (65535 & x) | (K << 16)),
              (r[5] = z = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = J)),
              (U = _ >>> 16),
              (x = 65535 & (T = O)),
              (K = T >>> 16),
              (T = t[6]),
              (U += (_ = r[6]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[6] = O = (65535 & x) | (K << 16)),
              (r[6] = J = (65535 & I) | (U << 16)),
              (I = 65535 & (_ = $)),
              (U = _ >>> 16),
              (x = 65535 & (T = C)),
              (K = T >>> 16),
              (T = t[7]),
              (U += (_ = r[7]) >>> 16),
              (x += 65535 & T),
              (K += T >>> 16),
              (K += (x += (U += (I += 65535 & _) >>> 16) >>> 16) >>> 16),
              (t[7] = C = (65535 & x) | (K << 16)),
              (r[7] = $ = (65535 & I) | (U << 16)),
              (X += 128),
              (n -= 128);
          }
          return n;
        }
        function W(t, r, e) {
          var n,
            i = new Int32Array(8),
            o = new Int32Array(8),
            a = new Uint8Array(256),
            u = e;
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              o[0] = 4089235720,
              o[1] = 2227873595,
              o[2] = 4271175723,
              o[3] = 1595750129,
              o[4] = 2917565137,
              o[5] = 725511199,
              o[6] = 4215389547,
              o[7] = 327033209,
              Z(i, o, r, e),
              e %= 128,
              n = 0;
            n < e;
            n++
          )
            a[n] = r[u - e + n];
          for (
            a[e] = 128,
              a[(e = 256 - 128 * (e < 112 ? 1 : 0)) - 9] = 0,
              y(a, e - 8, (u / 536870912) | 0, u << 3),
              Z(i, o, a, e),
              n = 0;
            n < 8;
            n++
          )
            y(t, 8 * n, i[n], o[n]);
          return 0;
        }
        function q(t, e) {
          var n = r(),
            i = r(),
            o = r(),
            a = r(),
            u = r(),
            f = r(),
            s = r(),
            h = r(),
            l = r();
          O(n, t[1], t[0]),
            O(l, e[1], e[0]),
            C(n, n, l),
            L(i, t[0], t[1]),
            L(l, e[0], e[1]),
            C(i, i, l),
            C(o, t[3], e[3]),
            C(o, o, c),
            C(a, t[2], e[2]),
            L(a, a, a),
            O(u, i, n),
            O(f, a, o),
            L(s, a, o),
            L(h, i, n),
            C(t[0], u, f),
            C(t[1], h, s),
            C(t[2], s, f),
            C(t[3], u, h);
        }
        function Q(t, r, e) {
          var n;
          for (n = 0; n < 4; n++) k(t[n], r[n], e);
        }
        function tt(t, e) {
          var n = r(),
            i = r(),
            o = r();
          G(o, e[2]),
            C(n, e[0], o),
            C(i, e[1], o),
            Y(t, i),
            (t[31] ^= R(n) << 7);
        }
        function rt(t, r, e) {
          var n, i;
          for (
            M(t[0], a), M(t[1], u), M(t[2], u), M(t[3], a), i = 255;
            i >= 0;
            --i
          )
            Q(t, r, (n = (e[(i / 8) | 0] >> (7 & i)) & 1)),
              q(r, t),
              q(t, t),
              Q(t, r, n);
        }
        function et(t, e) {
          var n = [r(), r(), r(), r()];
          M(n[0], h), M(n[1], l), M(n[2], u), C(n[3], h, l), rt(t, n, e);
        }
        function nt(t, e, i) {
          var o,
            a = new Uint8Array(64),
            u = [r(), r(), r(), r()];
          for (
            i || n(e, 32),
              W(a, e, 32),
              a[0] &= 248,
              a[31] &= 127,
              a[31] |= 64,
              et(u, a),
              tt(t, u),
              o = 0;
            o < 32;
            o++
          )
            e[o + 32] = t[o];
          return 0;
        }
        var it = new Float64Array([
          237,
          211,
          245,
          92,
          26,
          99,
          18,
          88,
          214,
          156,
          247,
          162,
          222,
          249,
          222,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          16,
        ]);
        function ot(t, r) {
          var e, n, i, o;
          for (n = 63; n >= 32; --n) {
            for (e = 0, i = n - 32, o = n - 12; i < o; ++i)
              (r[i] += e - 16 * r[n] * it[i - (n - 32)]),
                (e = Math.floor((r[i] + 128) / 256)),
                (r[i] -= 256 * e);
            (r[i] += e), (r[n] = 0);
          }
          for (e = 0, i = 0; i < 32; i++)
            (r[i] += e - (r[31] >> 4) * it[i]), (e = r[i] >> 8), (r[i] &= 255);
          for (i = 0; i < 32; i++) r[i] -= e * it[i];
          for (n = 0; n < 32; n++) (r[n + 1] += r[n] >> 8), (t[n] = 255 & r[n]);
        }
        function at(t) {
          var r,
            e = new Float64Array(64);
          for (r = 0; r < 64; r++) e[r] = t[r];
          for (r = 0; r < 64; r++) t[r] = 0;
          ot(t, e);
        }
        function ut(t, e, n, i) {
          var o,
            a,
            u = new Uint8Array(64),
            f = new Uint8Array(64),
            s = new Uint8Array(64),
            c = new Float64Array(64),
            h = [r(), r(), r(), r()];
          W(u, i, 32), (u[0] &= 248), (u[31] &= 127), (u[31] |= 64);
          var l = n + 64;
          for (o = 0; o < n; o++) t[64 + o] = e[o];
          for (o = 0; o < 32; o++) t[32 + o] = u[32 + o];
          for (
            W(s, t.subarray(32), n + 32), at(s), et(h, s), tt(t, h), o = 32;
            o < 64;
            o++
          )
            t[o] = i[o];
          for (W(f, t, n + 64), at(f), o = 0; o < 64; o++) c[o] = 0;
          for (o = 0; o < 32; o++) c[o] = s[o];
          for (o = 0; o < 32; o++)
            for (a = 0; a < 32; a++) c[o + a] += f[o] * u[a];
          return ot(t.subarray(32), c), l;
        }
        function ft(t, e, n, i) {
          var o,
            f = new Uint8Array(32),
            c = new Uint8Array(64),
            h = [r(), r(), r(), r()],
            l = [r(), r(), r(), r()];
          if (n < 64) return -1;
          if (
            (function (t, e) {
              var n = r(),
                i = r(),
                o = r(),
                f = r(),
                c = r(),
                h = r(),
                l = r();
              return (
                M(t[2], u),
                N(t[1], e),
                D(o, t[1]),
                C(f, o, s),
                O(o, o, t[2]),
                L(f, t[2], f),
                D(c, f),
                D(h, c),
                C(l, h, c),
                C(n, l, o),
                C(n, n, f),
                V(n, n),
                C(n, n, o),
                C(n, n, f),
                C(n, n, f),
                C(t[0], n, f),
                D(i, t[0]),
                C(i, i, f),
                P(i, o) && C(t[0], t[0], d),
                D(i, t[0]),
                C(i, i, f),
                P(i, o)
                  ? -1
                  : (R(t[0]) === e[31] >> 7 && O(t[0], a, t[0]),
                    C(t[3], t[0], t[1]),
                    0)
              );
            })(l, i)
          )
            return -1;
          for (o = 0; o < n; o++) t[o] = e[o];
          for (o = 0; o < 32; o++) t[o + 32] = i[o];
          if (
            (W(c, t, n),
            at(c),
            rt(h, l, c),
            et(l, e.subarray(32)),
            q(h, l),
            tt(f, h),
            (n -= 64),
            E(e, 0, f, 0))
          ) {
            for (o = 0; o < n; o++) t[o] = 0;
            return -1;
          }
          for (o = 0; o < n; o++) t[o] = e[o + 64];
          return n;
        }
        var st,
          ct = 64,
          ht = 32,
          lt = 64;
        function dt(t, r) {
          if (32 !== t.length) throw new Error("bad key size");
          if (24 !== r.length) throw new Error("bad nonce size");
        }
        function yt() {
          for (var t = 0; t < arguments.length; t++)
            if (!(arguments[t] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function pt(t) {
          for (var r = 0; r < t.length; r++) t[r] = 0;
        }
        (t.lowlevel = {
          crypto_core_hsalsa20: g,
          crypto_stream_xor: T,
          crypto_stream: m,
          crypto_stream_salsa20_xor: A,
          crypto_stream_salsa20: S,
          crypto_onetimeauth: I,
          crypto_onetimeauth_verify: U,
          crypto_verify_16: v,
          crypto_verify_32: E,
          crypto_secretbox: x,
          crypto_secretbox_open: K,
          crypto_scalarmult: F,
          crypto_scalarmult_base: H,
          crypto_box_beforenm: J,
          crypto_box_afternm: $,
          crypto_box: function (t, r, e, n, i, o) {
            var a = new Uint8Array(32);
            return J(a, i, o), $(t, r, e, n, a);
          },
          crypto_box_open: function (t, r, e, n, i, o) {
            var a = new Uint8Array(32);
            return J(a, i, o), X(t, r, e, n, a);
          },
          crypto_box_keypair: z,
          crypto_hash: W,
          crypto_sign: ut,
          crypto_sign_keypair: nt,
          crypto_sign_open: ft,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: ct,
          crypto_sign_PUBLICKEYBYTES: ht,
          crypto_sign_SECRETKEYBYTES: lt,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: r,
          D: s,
          L: it,
          pack25519: Y,
          unpack25519: N,
          M: C,
          A: L,
          S: D,
          Z: O,
          pow2523: V,
          add: q,
          set25519: M,
          modL: ot,
          scalarmult: rt,
          scalarbase: et,
        }),
          (t.randomBytes = function (t) {
            var r = new Uint8Array(t);
            return n(r, t), r;
          }),
          (t.secretbox = function (t, r, e) {
            yt(t, r, e), dt(e, r);
            for (
              var n = new Uint8Array(32 + t.length),
                i = new Uint8Array(n.length),
                o = 0;
              o < t.length;
              o++
            )
              n[o + 32] = t[o];
            return x(i, n, n.length, r, e), i.subarray(16);
          }),
          (t.secretbox.open = function (t, r, e) {
            yt(t, r, e), dt(e, r);
            for (
              var n = new Uint8Array(16 + t.length),
                i = new Uint8Array(n.length),
                o = 0;
              o < t.length;
              o++
            )
              n[o + 16] = t[o];
            return n.length < 32 || 0 !== K(i, n, n.length, r, e)
              ? null
              : i.subarray(32);
          }),
          (t.secretbox.keyLength = 32),
          (t.secretbox.nonceLength = 24),
          (t.secretbox.overheadLength = 16),
          (t.scalarMult = function (t, r) {
            if ((yt(t, r), 32 !== t.length)) throw new Error("bad n size");
            if (32 !== r.length) throw new Error("bad p size");
            var e = new Uint8Array(32);
            return F(e, t, r), e;
          }),
          (t.scalarMult.base = function (t) {
            if ((yt(t), 32 !== t.length)) throw new Error("bad n size");
            var r = new Uint8Array(32);
            return H(r, t), r;
          }),
          (t.scalarMult.scalarLength = 32),
          (t.scalarMult.groupElementLength = 32),
          (t.box = function (r, e, n, i) {
            var o = t.box.before(n, i);
            return t.secretbox(r, e, o);
          }),
          (t.box.before = function (t, r) {
            yt(t, r),
              (function (t, r) {
                if (32 !== t.length) throw new Error("bad public key size");
                if (32 !== r.length) throw new Error("bad secret key size");
              })(t, r);
            var e = new Uint8Array(32);
            return J(e, t, r), e;
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (r, e, n, i) {
            var o = t.box.before(n, i);
            return t.secretbox.open(r, e, o);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(32),
              r = new Uint8Array(32);
            return z(t, r), { publicKey: t, secretKey: r };
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((yt(t), 32 !== t.length))
              throw new Error("bad secret key size");
            var r = new Uint8Array(32);
            return H(r, t), { publicKey: r, secretKey: new Uint8Array(t) };
          }),
          (t.box.publicKeyLength = 32),
          (t.box.secretKeyLength = 32),
          (t.box.sharedKeyLength = 32),
          (t.box.nonceLength = 24),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, r) {
            if ((yt(t, r), r.length !== lt))
              throw new Error("bad secret key size");
            var e = new Uint8Array(ct + t.length);
            return ut(e, t, t.length, r), e;
          }),
          (t.sign.open = function (t, r) {
            if ((yt(t, r), r.length !== ht))
              throw new Error("bad public key size");
            var e = new Uint8Array(t.length),
              n = ft(e, t, t.length, r);
            if (n < 0) return null;
            for (var i = new Uint8Array(n), o = 0; o < i.length; o++)
              i[o] = e[o];
            return i;
          }),
          (t.sign.detached = function (r, e) {
            for (
              var n = t.sign(r, e), i = new Uint8Array(ct), o = 0;
              o < i.length;
              o++
            )
              i[o] = n[o];
            return i;
          }),
          (t.sign.detached.verify = function (t, r, e) {
            if ((yt(t, r, e), r.length !== ct))
              throw new Error("bad signature size");
            if (e.length !== ht) throw new Error("bad public key size");
            var n,
              i = new Uint8Array(ct + t.length),
              o = new Uint8Array(ct + t.length);
            for (n = 0; n < ct; n++) i[n] = r[n];
            for (n = 0; n < t.length; n++) i[n + ct] = t[n];
            return ft(o, i, i.length, e) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(ht),
              r = new Uint8Array(lt);
            return nt(t, r), { publicKey: t, secretKey: r };
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((yt(t), t.length !== lt))
              throw new Error("bad secret key size");
            for (var r = new Uint8Array(ht), e = 0; e < r.length; e++)
              r[e] = t[32 + e];
            return { publicKey: r, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((yt(t), 32 !== t.length)) throw new Error("bad seed size");
            for (
              var r = new Uint8Array(ht), e = new Uint8Array(lt), n = 0;
              n < 32;
              n++
            )
              e[n] = t[n];
            return nt(r, e, !0), { publicKey: r, secretKey: e };
          }),
          (t.sign.publicKeyLength = ht),
          (t.sign.secretKeyLength = lt),
          (t.sign.seedLength = 32),
          (t.sign.signatureLength = ct),
          (t.hash = function (t) {
            yt(t);
            var r = new Uint8Array(64);
            return W(r, t, t.length), r;
          }),
          (t.hash.hashLength = 64),
          (t.verify = function (t, r) {
            return (
              yt(t, r),
              0 !== t.length &&
                0 !== r.length &&
                t.length === r.length &&
                0 === p(t, 0, r, 0, t.length)
            );
          }),
          (t.setPRNG = function (t) {
            n = t;
          }),
          (st =
            "undefined" != typeof self ? self.crypto || self.msCrypto : null) &&
          st.getRandomValues
            ? t.setPRNG(function (t, r) {
                var e,
                  n = new Uint8Array(r);
                for (e = 0; e < r; e += 65536)
                  st.getRandomValues(n.subarray(e, e + Math.min(r - e, 65536)));
                for (e = 0; e < r; e++) t[e] = n[e];
                pt(n);
              })
            : (st = e(436)) &&
              st.randomBytes &&
              t.setPRNG(function (t, r) {
                var e,
                  n = st.randomBytes(r);
                for (e = 0; e < r; e++) t[e] = n[e];
                pt(n);
              });
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    },
    205: function (t, r, e) {
      e.d(r, "a", function () {
        return v;
      });
      var n = e(2),
        i = e(58),
        o = e(31),
        a = e.n(o),
        u = e(108),
        f = e(217),
        s = e(93),
        c = e(49),
        h = e(36),
        l = e(80),
        d = e(135),
        y = e(79);
      function p(t) {
        return (0, h.m)((0, u.c)(t));
      }
      function v(t) {
        var r, e, o;
        switch (t.type) {
          case n.f.TEXT:
          case n.f.EXTENDED_TEXT:
            (e = { type: "text", text: p(t.text) }),
              (o = (0, s.e)(t.text, t.mentionedJids));
            break;
          case n.f.FUTUREPROOF:
            e = { type: "futureproof", subtype: t.subtype };
            break;
          case n.f.REVOKED:
            e = { type: "revoked" };
            break;
          case n.f.CIPHERTEXT:
            e = { type: "ciphertext" };
            break;
          case n.f.MD_PLACEHOLDER:
            e = { type: "placeholder" };
            break;
          case n.f.IDENTITY_CHANGE:
          case n.f.PRIVACY_CHANGE:
            e = null;
            break;
          case n.f.GROUP_NOTIFICATION:
            e = (0, i.d)(t);
            break;
          case n.f.BUSINESS_NOTIFICATION:
            e = (0, i.b)(t);
            break;
          case n.f.STICKER:
            e = { type: "sticker" };
            break;
          case n.f.IMAGE:
            null != t.viewOnceState && (0, y.b)(t)
              ? (e = { type: "viewOnceImage", viewOnceState: t.viewOnceState })
              : ((e = { type: "image", caption: t.text ? p(t.text) : null }),
                t.text && (o = (0, s.e)(t.text, t.mentionedJids)));
            break;
          case n.f.PTT:
            e = { type: "voice", isPtt: !0, duration: t.duration };
            break;
          case n.f.VIDEO:
            null != t.viewOnceState && (0, y.b)(t)
              ? (e = { type: "viewOnceVideo", viewOnceState: t.viewOnceState })
              : ((e = {
                  type: "video",
                  duration: t.duration,
                  caption: t.text ? p(t.text) : null,
                }),
                t.text && (o = (0, s.e)(t.text, t.mentionedJids)));
            break;
          case n.f.GIF:
            (e = { type: "gif", caption: t.text ? p(t.text) : null }),
              t.text && (o = (0, s.e)(t.text, t.mentionedJids));
            break;
          case n.f.AUDIO:
            e = { type: "voice", duration: t.duration, isPtt: !1 };
            break;
          case n.f.VCARD:
            e = {
              type: "vcard",
              displayNames: (0, f.l)(t.contacts).map((t) =>
                (0, u.c)(t.displayName)
              ),
              total: t.contacts.length,
            };
            break;
          case n.f.LOCATION:
            e = {
              type: "location",
              name: t.name ? (0, u.c)(t.name) : void 0,
              address: t.address ? (0, u.c)(t.address) : void 0,
            };
            break;
          case n.f.GROUP_INVITE:
            e = {
              type: "group_invite",
              groupName: p(t.groupName),
              inviteExpiration: t.inviteExpiration,
            };
            break;
          case n.f.RICH_HSM:
            var h = (0, d.c)(t.title, t.content, t.footer);
            (e = {
              type: "rich_hsm",
              text: p(h),
              subtype: (0, d.d)(t.richContent),
            }),
              (o = (0, s.e)(h));
            break;
          case n.f.HSM_BUTTON_REPLY:
            e = { type: "hsm_button_reply", text: p(t.selectedDisplayText) };
            break;
          case n.f.DOCUMENT:
            e =
              t.isVCard && null != t.contactsCount
                ? {
                    type: "vcard",
                    displayNames: t.uiVCards
                      ? t.uiVCards.map((t) => t.displayName)
                      : [(0, u.c)((0, l.i)(t.fileName))],
                    total: t.contactsCount,
                  }
                : {
                    type: "document",
                    fileName: t.fileName,
                    mimetype: t.mimetype,
                  };
            break;
          case n.f.CONTACT_BLOCK_CHANGE:
            e = { type: "contact_block_change", blocked: t.blocked };
            break;
          case n.f.EPHEMERAL:
            "fail" === t.subtype
              ? (e = {
                  type: "ephemeral_change_fail",
                  expiration: t.expiration,
                })
              : "default-disappearing-mode" === t.subtype
              ? (e = {
                  type: "default-disappearing-mode",
                  ephemeralExpiration: t.ephemeralExpiration,
                  initiator: t.initiator,
                })
              : (t.subtype,
                (e = {
                  type: "ephemeral_change",
                  ephemeralExpiration: t.ephemeralExpiration,
                }));
            break;
          default:
            (0, a.a)(t);
        }
        var v,
          E = t.author;
        return (
          (v =
            E === n.b ? { fromMe: !0, ack: t.ack } : { author: (0, c.i)(E) }),
          e
            ? {
                id: t.id,
                meta: v,
                formatting: null == (r = o) ? void 0 : r.styles,
                content: e,
                ts: t.ts,
                mentionedJids: t.mentionedJids,
                validUntil: null == t ? void 0 : t.validUntil,
              }
            : null
        );
      }
    },
    215: function (t, r, e) {
      e.d(r, "b", function () {
        return i;
      }),
        e.d(r, "a", function () {
          return o;
        });
      var n = e(6);
      function i(t) {
        return t.participants.includes(n.r.get());
      }
      function o(t) {
        return t.admins.includes(n.r.get());
      }
    },
    227: function (t, r, e) {
      e.d(r, "a", function () {
        return i;
      });
      var n = e(43);
      function i(t, r) {
        return r instanceof t
          ? r
          : new t("string" == typeof r ? (0, n.b)(r) : r);
      }
    },
    233: function (t, r, e) {
      e.d(r, "a", function () {
        return u;
      }),
        e.d(r, "b", function () {
          return f;
        });
      var n = e(25),
        i = e(129),
        o = 255 * i.a;
      function a(t, r, e) {
        if (e < 0 || e > o)
          return Promise.reject(
            new Error("HKDF::expand given bad length " + e)
          );
        for (
          var a,
            u = Math.ceil(e / i.a),
            f = n.a.build(r).readByteArray(),
            s = new n.a(),
            c = (0, i.b)(t).then((t) => ((a = t), new Uint8Array(0))),
            h = function (t) {
              c = c
                .then((r) => (0, i.f)(a, n.a.build(r, f, t).readByteArray()))
                .then((t) => {
                  var r = new Uint8Array(t);
                  return s.writeByteArray(r), r;
                });
            },
            l = 1;
          l <= u;
          l++
        )
          h(l);
        return c.then(() => s.readBuffer(e));
      }
      function u(t, r, e) {
        return (0, i.c)(null, t).then((t) => a(new Uint8Array(t), r, e));
      }
      function f(t, r, e, n) {
        return (0, i.c)(r, t).then((t) => a(new Uint8Array(t), e, n));
      }
    },
    399: function (t, r, e) {
      e.d(r, "a", function () {
        return f;
      });
      var n = e(101),
        i = e(67),
        o = e(193),
        a = e(78),
        u = e(124);
      function f(t) {
        var r,
          e,
          f = (0, i.a)(o.b, t),
          s = f.previousSessions.length,
          c = f.currentSession;
        if (
          (c
            ? ((e = c.remoteIdentityPublic),
              (r = f.previousSessions.filter(
                (t) =>
                  null != e &&
                  null != t.remoteIdentityPublic &&
                  (0, u.a)(e, t.remoteIdentityPublic)
              )))
            : (r = []),
          s === r.length)
        )
          return { session: t, identity: e, wasChanged: !1 };
        var h = Object.assign({}, f, { previousSessions: r });
        return {
          session: (0, a.a)((0, n.a)(o.b, h).readByteArray()),
          identity: e,
          wasChanged: !0,
        };
      }
    },
    436: function (t, r) {},
    44: function (t, r, e) {
      var n = e(198);
      e.d(r, "b", function () {
        return n.hash;
      }),
        e.d(r, "f", function () {
          return n.verify;
        }),
        e.d(r, "d", function () {
          return n.scalarMult;
        }),
        e.d(r, "a", function () {
          return n.box;
        }),
        e.d(r, "c", function () {
          return n.lowlevel;
        }),
        e.d(r, "e", function () {
          return n.sign;
        });
    },
    52: function (t, r, e) {
      e.r(r),
        e.d(r, "FIRST_ADDRESS_KEY", function () {
          return f;
        }),
        e.d(r, "LAST_ADDRESS_KEY", function () {
          return s;
        }),
        e.d(r, "LATEST_PREKEY_ID", function () {
          return l;
        }),
        e.d(r, "LATEST_SIGNED_PREKEY_ID", function () {
          return d;
        }),
        e.d(r, "EARLIEST_UNUPLOADED_PREKEY_ID", function () {
          return y;
        }),
        e.d(r, "LATEST_PREKEY_GENERATION", function () {
          return p;
        }),
        e.d(r, "PREKEY_GENERATIONS", function () {
          return v;
        }),
        e.d(r, "LATEST_IDENTITY_ID", function () {
          return E;
        }),
        e.d(r, "encodeSender", function () {
          return A;
        }),
        e.d(r, "encodeAddress", function () {
          return S;
        }),
        e.d(r, "getSignalTableIfInitialized", function () {
          return m;
        }),
        e.d(r, "getSignalTable", function () {
          return T;
        });
      var n = e(9),
        i = e.n(n),
        o = e(5),
        a = e(123),
        u = e(14),
        f = "\0",
        s = "ÿ",
        c = "myRegId",
        h = "myStaticKeyPair",
        l = "latestPreKeyId",
        d = "latestSignedPreKeyId",
        y = "earliestUnuploadedPreKeyId",
        p = "latestPKGeneration",
        v = "pkGenerations",
        E = "latestIdentityId",
        b = (0, a.a)(u.L, function (t) {
          t.version(1).stores({
            meta: "key",
            identities: "address, jid",
            preKeys: "id",
            signedPreKeys: "id",
            senderKeys: "id, context, sender",
            sessions: "address, jid",
          });
        }),
        g = class extends o.b {
          constructor() {
            super(b);
          }
          setRegistrationInfo(t) {
            var r = t.regId,
              e = t.staticKeyPair;
            return this.stores.meta.bulkPut([
              { key: c, value: r },
              { key: h, value: e },
            ]);
          }
          getRegistrationInfo() {
            return this.transact("r", ["meta"], () =>
              (0, o.c)([this.stores.meta.get(c), this.stores.meta.get(h)]).then(
                (t) => {
                  var r = i()(t, 2),
                    e = r[0],
                    n = r[1];
                  return null == e || null == n
                    ? null
                    : { regId: e.value, staticKeyPair: n.value };
                }
              )
            );
          }
          getMyStaticKeyPair() {
            return this.maybeStaticKeyPair().then((t) => {
              if (!t)
                throw new Error("SignalTable.getMyStaticKeyPair no keypair");
              return t;
            });
          }
          maybeStaticKeyPair() {
            return this.stores.meta
              .get(h)
              .then((t) => (null == t ? void 0 : t.value));
          }
          getMyRegId() {
            return this.maybeRegId().then((t) => {
              if (null == t)
                throw new Error("SignalTable.getMyRegId no reg id");
              return t;
            });
          }
          maybeRegId() {
            return this.stores.meta
              .get(c)
              .then((t) => (null == t ? void 0 : t.value));
          }
        };
      r.default = g;
      var w = null;
      function A(t) {
        var r = t.groupId,
          e = t.sender,
          n = e.name,
          i = e.deviceId;
        return JSON.stringify([r, n, i]);
      }
      function S(t) {
        return JSON.stringify([t.name, t.deviceId]);
      }
      function m() {
        return w;
      }
      function T() {
        return w || (w = new g());
      }
    },
    60: function (t, r, e) {
      e.d(r, "b", function () {
        return o;
      }),
        e.d(r, "a", function () {
          return a;
        }),
        e.d(r, "d", function () {
          return u;
        }),
        e.d(r, "c", function () {
          return f;
        }),
        e.d(r, "f", function () {
          return s;
        }),
        e.d(r, "e", function () {
          return c;
        }),
        e.d(r, "g", function () {
          return h;
        });
      var n = e(11),
        i = e(7),
        o = 0,
        a = { id: n.c, index: o };
      function u(t) {
        return t.devices && 0 !== t.devices.length
          ? Array.from(t.devices.map((t) => t.id))
          : [n.c];
      }
      function f(t) {
        return u(t).map((r) => (0, i.A)(t.jid, r));
      }
      function s(t) {
        return t;
      }
      function c(t) {
        return t;
      }
      function h(t, r) {
        return t.hasAttr(r) ? t.attrInt(r) : null;
      }
    },
    78: function (t, r, e) {
      e.d(r, "d", function () {
        return i;
      }),
        e.d(r, "g", function () {
          return o;
        }),
        e.d(r, "e", function () {
          return a;
        }),
        e.d(r, "f", function () {
          return u;
        }),
        e.d(r, "c", function () {
          return f;
        }),
        e.d(r, "b", function () {
          return s;
        }),
        e.d(r, "a", function () {
          return c;
        }),
        e(233),
        e(124),
        e(67);
      var n = e(101);
      function i(t, r) {
        if (t.length !== r)
          throw new Error(`Signal expected ${r} bytes, given ${t.length}`);
        return t;
      }
      function o(t, r) {
        return i(new Uint8Array(t), r);
      }
      function a(t) {
        return new Uint8Array(t);
      }
      function u(t, r, e) {
        if (t.length - r < e)
          throw new Error(
            `Can not split off ${e} bytes from index ${r} of ${t.length} bytes`
          );
        return t.slice(r, r + e);
      }
      function f(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 4294967296;
        if ("number" == typeof t && r <= t && t < e && Math.floor(t) === t)
          return t;
        throw new Error(
          `Expected integer in range [${r}, ${e}), given ${String(t)}`
        );
      }
      function s(t, r) {
        return (0, n.a)(t, r).readByteArray();
      }
      function c(t) {
        return t;
      }
    },
  },
]);
