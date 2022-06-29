"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [177],
  {
    447: function (a, t) {
      function e(a) {
        var t = 0;
        return function () {
          return t < a.length ? { done: !1, value: a[t++] } : { done: !0 };
        };
      }
      var i,
        r =
          "function" == typeof Object.create
            ? Object.create
            : function (a) {
                function t() {}
                return (t.prototype = a), new t();
              };
      if ("function" == typeof Object.setPrototypeOf) i = Object.setPrototypeOf;
      else {
        var s;
        a: {
          var n = {};
          try {
            (n.__proto__ = { Hc: !0 }), (s = n.Hc);
            break a;
          } catch (a) {}
          s = !1;
        }
        i = s
          ? function (a, t) {
              if (((a.__proto__ = t), a.__proto__ !== t))
                throw new TypeError(a + " is not extensible");
              return a;
            }
          : null;
      }
      var f = i;
      function h(a, t) {
        if (((a.prototype = r(t.prototype)), (a.prototype.constructor = a), f))
          f(a, t);
        else
          for (var e in t)
            if ("prototype" != e)
              if (Object.defineProperties) {
                var i = Object.getOwnPropertyDescriptor(t, e);
                i && Object.defineProperty(a, e, i);
              } else a[e] = t[e];
        a.Qc = t.prototype;
      }
      var u = Number.MAX_SAFE_INTEGER;
      function b(a, t) {
        return (a = a.toString(16).toUpperCase()), "0".repeat(t - a.length) + a;
      }
      function c(a) {
        return 0 > a && (a = o + a + 1), b(a, 8);
      }
      var o = 4294967295,
        l = new Uint8Array(0);
      function d(a) {
        var t = this;
        a instanceof ArrayBuffer
          ? ((this.size = a.byteLength),
            (this.slice = function (e, i) {
              return (
                0 > e && (e += t.size),
                0 > i && (i += t.size),
                (e = Math.max(e, 0)) < (i = Math.min(i, t.size))
                  ? Promise.resolve(new Uint8Array(a, e, i - e))
                  : Promise.resolve(l)
              );
            }))
          : ((this.size = a.size),
            (this.slice = function (t, e) {
              return (function (a) {
                var t;
                return new Promise(function (e, i) {
                  ((t = new FileReader()).onload = e),
                    (t.onerror = function (t) {
                      i(
                        Error(
                          "blobToArrayBuffer for blob size " +
                            a.size +
                            ", got error " +
                            t
                        )
                      );
                    }),
                    t.readAsArrayBuffer(a);
                }).then(function () {
                  return t.result;
                });
              })(a.slice(t, e)).then(function (a) {
                return new Uint8Array(a);
              });
            }));
      }
      var g = new d(new ArrayBuffer(0));
      function v(a) {
        return (
          ((255 & a) << 24) |
          (((a >> 8) & 255) << 16) |
          (((a >> 16) & 255) << 8) |
          ((a >> 24) & 255)
        );
      }
      function w(a) {
        var t = Math.pow(2, 16);
        return (a >> 16) + (a & (t - 1) & o) / t;
      }
      function k() {
        this.Pa = this.Ka = this.Mb = this.Nb = this.Ca = this.Da = this.yb = this.Qb = this.Tb = this.ga = 0;
      }
      function p() {
        this.Pa = this.Ka = this.mc = this.lc = this.U = this.H = this.Za = this.Ya = this.Y = this.ma = 0;
      }
      function y() {
        (this.b = 0), (this.a = new Uint8Array([0, 0, 0, 0]));
      }
      function R(a, t) {
        for (var e = 0; e < a.b; e++) a.a[a.b - e] = a.a[a.b - e - 1];
        (a.a[0] = t), a.b++;
      }
      function m(a) {
        for (var t = 127 & a.a[0], e = 1; e < a.b; e++)
          t |= (127 & a.a[e]) << (7 * e);
        return t;
      }
      function U() {
        this.a = this.b = this.c = this.nb = 0;
      }
      function A() {
        this.a = this.b = this.c = this.nb = 0;
      }
      function O() {
        (this.f = 0), (this.aa = []);
      }
      function L() {
        (this.f = 0), (this.aa = []);
      }
      function j() {
        (this.I = 0), (this.ca = new O()), (this.da = new L());
      }
      function E(a) {
        var t = new j();
        return (
          (t.I = a.I),
          0 == a.I
            ? ((t.ca = new O()), (t.ca.f = a.ca.f), (t.ca.aa = a.ca.aa.slice()))
            : ((t.da = new L()),
              (t.da.f = a.da.f),
              (t.da.aa = a.da.aa.slice())),
          t
        );
      }
      function D() {
        (this.a = new Uint8Array([0, 0, 0, 0, 0, 0])),
          (this.s = this.m = this.g = 0),
          (this.c = new Uint32Array([0, 0, 0])),
          (this.w = this.u = this.R = this.J = this.height = this.width = 0),
          (this.b = new Uint8Array(32)),
          (this.K = this.j = 0);
      }
      function I(a) {
        var t = new D();
        a = new DataView(a.buffer, a.byteOffset, a.byteLength);
        var e,
          i = 0;
        for (e = 0; e < t.a.length; e++) (t.a[e] = a.getUint8(i)), (i += 1);
        for (
          t.g = a.getUint16(i, !1),
            i += 2,
            t.m = a.getUint16(i, !1),
            i += 2,
            t.s = a.getUint16(i, !1),
            i += 2,
            e = 0;
          e < t.c.length;
          e++
        )
          (t.c[e] = a.getUint32(i, !1)), (i += 4);
        for (
          t.width = a.getUint16(i, !1),
            i += 2,
            t.height = a.getUint16(i, !1),
            i += 2,
            t.J = a.getUint32(i, !1),
            i += 4,
            t.R = a.getUint32(i, !1),
            i += 4,
            t.u = a.getUint16(i, !1),
            i += 4,
            t.w = a.getUint16(i, !1),
            i += 2,
            e = 0;
          e < t.b.length;
          e++
        )
          (t.b[e] = a.getUint8(i)), (i += 1);
        return (t.j = a.getUint16(i, !1)), (t.K = a.getUint16(i + 2, !1)), t;
      }
      function V() {
        (this.a = new Uint16Array([0, 0, 0])),
          (this.c = 0),
          (this.b = new Uint32Array([0, 0])),
          (this.Fa = this.j = this.g = this.cb = this.Va = 0);
      }
      function M() {
        (this.m = 0),
          (this.a = new y()),
          (this.s = this.u = this.g = this.b = 0),
          (this.j = new Uint8Array(3)),
          (this.c = this.maxBitrate = 0);
      }
      function P() {
        this.a = new M();
      }
      function F() {
        (this.j = 0),
          (this.g = new y()),
          (this.m = new Uint8Array(2)),
          (this.c = this.b = this.a = this.s = 0);
      }
      function N() {
        (this.b = new F()), (this.c = 0), (this.a = new P());
      }
      function B() {}
      function C() {
        (this.$b = this.Mc = this.ac = this.Kc = 0),
          (this.nc = -1),
          (this.ua = []),
          (this.zc = 0),
          (this.Ia = []);
      }
      function G() {
        this.a = this.D = 0;
      }
      function x() {
        (this.f = 0), (this.F = []);
      }
      function H() {
        this.Bc = this.D = 0;
      }
      function W() {
        (this.f = 0), (this.F = []);
      }
      function S(a) {
        var t = new W();
        return (t.f = a.f), (t.F = a.F.slice()), t;
      }
      function J() {
        (this.f = 0), (this.Ab = new Uint32Array(0));
      }
      function K() {
        this.a = this.Yb = this.Wa = 0;
      }
      function T() {
        (this.f = 0), (this.F = []);
      }
      function X() {
        (this.D = this.mb = 0), (this.Qa = new Uint32Array(0));
      }
      function z() {
        (this.D = this.Ac = 0), (this.F = []);
      }
      function Y() {
        (this.f = 0), (this.Ea = new Uint32Array(0));
      }
      function Z() {
        (this.f = 0), (this.Ea = []);
      }
      function $() {
        this.g = this.j = this.c = this.b = this.a = 0;
      }
      function q() {
        (this.f = 0), (this.Xb = []);
      }
      function _(a) {
        var t = new q();
        return (t.f = a.f), (t.Xb = a.Xb.slice()), t;
      }
      function Q() {
        this.Aa = this.Ub = this.Sb = this.Rb = 0;
      }
      function aa(a) {
        var t = new Q();
        return (t.Rb = a.Rb), (t.Sb = a.Sb), (t.Ub = a.Ub), (t.Aa = a.Aa), t;
      }
      function ta() {
        (this.Ic = new p()), (this.Cc = new k()), (this.Nc = new Q());
      }
      function ea() {
        (this.M = u), (this.a = null);
      }
      function ia(a, t) {
        return (a.a = t), (a.M = 0), null != (a = a.a) && 0 < a.length;
      }
      function ra() {
        (this.b = new Uint8Array(4)), (this.a = this.g = this.c = 0);
      }
      function sa() {
        this.s = this.j = this.c = this.g = this.J = this.K = this.w = this.b = this.m = this.a = this.u = 0;
      }
      function na() {
        (this.w = this.m = this.c = this.j = this.ia = this.R = this.s = this.g = this.K = this.V = this.u = this.a = this.ha = this.J = 0),
          (this.b = new sa()),
          (this.ya = this.ja = this.xa = this.wa = 0);
      }
      function fa() {
        this.mode = this.K = this.c = this.j = this.J = this.b = this.s = this.m = this.R = this.u = this.a = this.g = this.V = this.w = 0;
      }
      function ha(a, t) {
        for (var e in t) a[e] = t[e];
      }
      (ea.prototype.seek = function (a, t) {
        var e = this.a;
        if (e) {
          switch (((e = e.length), t)) {
            case 1:
              this.M = a;
              break;
            case 2:
              this.M += a;
              break;
            case 3:
              this.M = e - a;
          }
          0 > this.M ? (this.M = 0) : this.M > e && (this.M = e);
        }
      }),
        (ea.prototype.read = function (a) {
          var t = this.a;
          if (t) {
            var e = this.M,
              i = t.length - e;
            if (0 < i)
              return (
                (a = Math.min(a, i)),
                (this.M += a),
                { data: t.subarray(e, e + a), i: !0 }
              );
          }
          return { data: new Uint8Array(0), i: !1 };
        }),
        (ea.prototype.close = function () {
          this.M = u;
        });
      var ua = [64, 102, 103, 104, 105, 107],
        ba = [8, 16, 24, 32],
        ca = [1, 2, 3, 4, 5, 6, 8],
        oa = [8e3, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100, 48e3],
        la = [1, 4, 8, 17, 35],
        da = [13, 14, 16, 18, 20, 21, 27, 32, 6, 6, 6, 6, 0, 0, 0, 1],
        ga = [18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 0, 1, 1];
      function va() {
        this.a = this.Ob = this.b = this.c = 0;
      }
      function wa(a) {
        var t = new va();
        return (
          (t.c = 3 & a[0]),
          (t.b = (a[0] >> 2) & 1),
          (t.Ob = (a[0] >> 3) & 15),
          (t.a = (a[0] >> 7) & 1),
          t
        );
      }
      function ka() {
        (this.a = new fa()),
          (this.b = this.m = this.j = this.c = this.s = 0),
          (this.w = this.u = !1),
          (this.g = 0);
      }
      function pa(a) {
        return {
          h: !0,
          kc: a.b,
          Oc: 0,
          Pc: 0 === a.b ? "reserved" : a.b + " Hz",
        };
      }
      function ya(a, t) {
        var e = { h: !0, wb: 0 };
        (a.s = (255 & a.a.w) << 4), (a.s |= (7 & a.a.u) << 1);
        var i = 4095 === a.s || 4094 === a.s;
        switch (((a.c = 3 & a.a.a), a.c)) {
          case 0:
            a.c = 2;
            break;
          case 1:
            a.c = 255;
            break;
          case 2:
            a.c = 0;
            break;
          case 3:
            a.c = 1;
        }
        if (255 === a.c) return (e.h = !1), e;
        a: {
          switch (3 & a.a.g) {
            case 0:
              a.j = 0;
              var r = !1;
              break a;
            case 1:
              a.j = 3;
              break;
            case 2:
              a.j = 2;
              break;
            case 3:
              a.j = 1;
          }
          r = !0;
        }
        if (0 === a.j) var s = !1;
        else
          (a.m = Ra[a.c][a.j - 1][15 & a.a.b]),
            (s = 0 !== a.m && 65535 !== a.m);
        var n = 3 & a.a.s;
        return (
          3 <= n ? (n = !1) : ((a.b = ma[a.c][n]), (n = 0 !== a.b)),
          (a.u = !!(1 & a.a.c)),
          (a.w = !!(1 & a.a.j)),
          a.b && a.m
            ? ((a.g =
                1 === a.j
                  ? Math.floor((12e3 * a.m) / a.b)
                  : Math.floor((144e3 * a.m) / a.b)),
              1 !== a.c && 3 === a.j && (a.g = Math.floor(a.g / 2)),
              (44100 === a.b || 22050 === a.b || 11025 === a.b) &&
                a.a.m &&
                a.g++,
              1 === a.j && (a.g *= 4))
            : (a.g = 0),
          t
            ? i && r && s && n
              ? ((e.wb = a.g), (e.h = !0))
              : ((e.wb = 0), (e.h = !1))
            : ((e.wb = a.g), (e.h = i)),
          e
        );
      }
      var Ra = [
          [
            [
              0,
              32,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              176,
              192,
              224,
              256,
              65535,
            ],
            [
              0,
              8,
              16,
              24,
              32,
              40,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              65535,
            ],
            [
              0,
              8,
              16,
              24,
              32,
              40,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              65535,
            ],
          ],
          [
            [
              0,
              32,
              64,
              96,
              128,
              160,
              192,
              224,
              256,
              288,
              320,
              352,
              384,
              416,
              448,
              65535,
            ],
            [
              0,
              32,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              160,
              192,
              224,
              256,
              320,
              384,
              65535,
            ],
            [
              0,
              32,
              40,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              160,
              192,
              224,
              256,
              320,
              65535,
            ],
          ],
          [
            [
              0,
              32,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              176,
              192,
              224,
              256,
              65535,
            ],
            [
              0,
              8,
              16,
              24,
              32,
              40,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              65535,
            ],
            [
              0,
              8,
              16,
              24,
              32,
              40,
              48,
              56,
              64,
              80,
              96,
              112,
              128,
              144,
              160,
              65535,
            ],
          ],
        ],
        ma = [
          [22050, 24e3, 16e3, 0],
          [44100, 48e3, 32e3, 0],
          [11025, 12e3, 8e3, 0],
        ];
      function Ua() {
        this.ea = this.a = this.$a = this.Ca = this.Da = this.b = this.bb = this.ab = this.ga = 0;
      }
      function Aa() {
        this.ea = this.a = this.U = this.La = this.H = this.Za = this.Ya = this.Y = this.ma = 0;
      }
      function Oa() {
        (this.v = 0),
          (this.a = new Uint8Array(5)),
          (this.video = new Ua()),
          (this.audio = new Aa());
      }
      function La() {
        this.duration = this.ba = 0;
      }
      function ja(a) {
        var t = new La();
        return (
          (a = new DataView(a.buffer, a.byteOffset, a.byteLength)),
          (t.ba = a.getInt32(0, !1)),
          (t.duration = a.getInt32(4, !1)),
          t
        );
      }
      function Ea() {
        (this.b = new Uint16Array(3)),
          (this.Fa = this.Lb = this.cb = this.Va = this.version = 0);
      }
      function Da(a) {
        var t = new Ea();
        return t.a(a), t;
      }
      function Ia() {
        Ea.call(this);
      }
      function Va() {
        (this.a = new Uint16Array(3)),
          (this.ha = this.V = this.ia = this.R = this.J = this.c = this.b = this.ja = this.w = this.m = this.K = this.s = this.u = this.j = this.version = this.g = 0);
      }
      function Ma() {
        this.xc = this.yc = this.tc = this.uc = this.oc = this.pc = this.qc = this.rc = 0;
      }
      function Pa() {
        this.C = this.Ma = this.a = this.A = this.T = this.B = this.b = this.oa = 0;
      }
      function Fa() {
        (this.pb = this.Hb = this.gb = this.fb = !1),
          (this.qb = this.Ib = this.tb = 0),
          (this.Sa = this.$ = this.O = 4294967295),
          (this.hb = this.ub = this.rb = this.sb = 0),
          (this.L = new Uint32Array(9)),
          (this.o = new Oa()),
          (this.sa = new La()),
          (this.Z = new j()),
          (this.P = new W()),
          (this.za = new x()),
          (this.G = new T()),
          (this.la = new X()),
          (this.Ua = new z()),
          (this.X = new Y()),
          (this.qa = new Z()),
          (this.Ta = new J()),
          (this.Ga = new q()),
          (this.ob = new Ma()),
          (this.S = []),
          Sa(this);
      }
      function Na(a) {
        var t = new Fa();
        if (
          ((t.fb = a.fb),
          (t.gb = a.gb),
          (t.Hb = a.Hb),
          (t.pb = a.pb),
          (t.tb = a.tb),
          (t.Ib = a.Ib),
          (t.qb = a.qb),
          (t.O = a.O),
          (t.$ = a.$),
          (t.o = a.o),
          (t.ub = a.ub),
          (t.Sa = a.Sa),
          (t.L = a.L),
          (t.sb = a.sb),
          (t.rb = a.rb),
          (t.sa = a.sa),
          !a.Z || (0 === a.Z.ca.f && 0 === a.Z.da.f) || (t.Z = E(a.Z)),
          a.P && a.P.f && (t.P = S(a.P)),
          a.za && a.za.f)
        ) {
          var e = a.za,
            i = new x();
          (i.f = e.f), (i.F = e.F.slice()), (t.za = i);
        }
        return (
          a.G &&
            a.G.f &&
            ((e = a.G),
            ((i = new T()).f = e.f),
            (i.F = e.F.slice()),
            (t.G = i)),
          a.P && a.P.f && (t.P = S(a.P)),
          a.la &&
            a.la.D &&
            ((e = a.la),
            ((i = new X()).mb = e.mb),
            (i.D = e.D),
            (i.Qa = e.Qa.slice()),
            (t.la = i)),
          a.Ua &&
            a.Ua.D &&
            ((e = a.Ua),
            ((i = new z()).Ac = e.Ac),
            (i.D = e.D),
            (i.F = e.F.slice()),
            (t.Ua = i)),
          a.X &&
            a.X.f &&
            ((e = a.X),
            ((i = new Y()).f = e.f),
            (i.Ea = e.Ea.slice()),
            (t.X = i)),
          a.qa &&
            a.qa.f &&
            ((e = a.qa),
            ((i = new Z()).f = e.f),
            (i.Ea = e.Ea.slice()),
            (t.qa = i)),
          a.Ta &&
            a.Ta.f &&
            ((e = a.Ta),
            ((i = new J()).f = e.f),
            (i.Ab = e.Ab.slice()),
            (t.Ta = i)),
          a.Ga && a.Ga.f && (t.Ga = _(a.Ga)),
          a.ob &&
            ((e = a.ob),
            ((i = new Ma()).rc = e.rc),
            (i.qc = e.qc),
            (i.pc = e.pc),
            (i.oc = e.oc),
            (i.uc = e.uc),
            (i.tc = e.tc),
            (i.yc = e.yc),
            (i.xc = e.xc),
            (t.ob = i)),
          a.S && (t.S = a.S.slice()),
          t
        );
      }
      function Ba(a) {
        if (!a.X && !a.qa) return !1;
        var t,
          e = a.X.f ? a.X.f : a.qa.f;
        if (!(t = 0 === e)) {
          a: if (((t = 0), 0 === a.G.f)) t = !1;
          else {
            for (var i = 0; i < a.G.f; i++) {
              var r = a.G.F[i].Wa;
              if (r <= t) {
                t = !1;
                break a;
              }
              t = r;
            }
            t = !0;
          }
          t = !1 === t;
        }
        if (t) return !1;
        for (t = [], r = 0; r < a.G.f; r++) {
          i = (r === a.G.f - 1 ? e + 1 : a.G.F[r + 1].Wa) - a.G.F[r].Wa;
          for (var s = 0; s < i; s++) t.push(r);
        }
        if (e !== (t = Uint32Array.from(t)).length) return !1;
        for (i = r = 0; i < e; i++) {
          ((s = new Pa()).oa = a.$),
            (s.b = i),
            a.X.f ? (s.B = a.X.Ea[i]) : (s.T = a.qa.Ea[i]),
            (s.a = t[i]),
            (s.Ma = r),
            (s.C = a.G.F[s.a].Yb);
          for (var n = (s.A = 0); n < s.C; n++) s.A += a.la.Qa[r + n];
          a.S.push(s), (r += s.C);
        }
        return 0 !== a.S.length;
      }
      function Ca(a) {
        return (1 == a.o.v || 5 == a.o.v) && 65536 != a.L[0] && 65536 != a.L[4];
      }
      function Ga(a) {
        if (
          0 != a.sa.duration &&
          0 != a.sa.ba &&
          (0 != a.S.length || 0 != Ba(a))
        ) {
          for (var t = 0, e = 0; e < a.S.length; e++) t += a.S[e].A;
          (t = 8 * t * a.sa.ba),
            1 === a.o.v
              ? (a.o.video.ea = Math.floor(t / a.sa.duration))
              : 2 === a.o.v && (a.o.audio.ea = Math.floor(t / a.sa.duration));
        }
      }
      function xa(a, t) {
        return (
          (1 === a.o.v || 6 === a.o.v || 8 === a.o.v) && ((a.o.video = t), !0)
        );
      }
      function Ha(a, t) {
        return 2 === a.o.v && ((a.o.audio = t), !0);
      }
      function Wa(a, t, e, i) {
        if (t >= a.la.D || t + e - 1 >= a.la.D) return !1;
        for (var r = 0; r < e; r++) i[r] = a.la.Qa[t + r];
        return !0;
      }
      function Sa(a) {
        (a.fb = !1),
          (a.gb = !1),
          (a.Hb = !1),
          (a.pb = !1),
          (a.tb = 0),
          (a.Ib = 0),
          (a.qb = 0),
          (a.O = 4294967295),
          (a.$ = 4294967295),
          (a.Sa = 4294967295),
          (a.sb = 0),
          (a.rb = 0),
          (a.ub = 0),
          (a.hb = 0),
          (a.L = new Uint32Array(9)),
          (a.o = new Oa()),
          (a.sa = new La()),
          (a.Z = new j()),
          (a.P = new W()),
          (a.za = new x()),
          (a.G = new T()),
          (a.la = new X()),
          (a.Ua = new z()),
          (a.X = new Y()),
          (a.qa = new Z()),
          (a.Ta = new J()),
          (a.Ga = new q()),
          (a.ob = new Ma());
      }
      (Ea.prototype.a = function (a) {
        a = new DataView(a.buffer, a.byteOffset, a.byteLength);
        for (var t = 0, e = 0; e < this.b.length; e++)
          (this.b[e] = a.getUint16(t, !1)), (t += 2);
        a.getUint16(t, !1),
          (t += 2),
          (this.version = a.getUint16(t, !1)),
          (t += 2),
          a.getUint16(t, !1),
          (t += 2),
          a.getUint32(t, !1),
          (t += 4),
          (this.Va = a.getUint16(t, !1)),
          (t += 2),
          (this.cb = a.getUint16(t, !1)),
          (t += 2),
          (this.Lb = a.getUint16(t, !1)),
          (t += 2),
          a.getUint16(t, !1),
          (this.Fa = a.getUint32(t + 2, !1)),
          (this.Fa >>>= 16);
      }),
        h(Ia, Ea),
        (Ia.prototype.a = function (a) {
          Ea.prototype.a.call(this, a);
          var t = 0;
          (a = new DataView(
            a.buffer,
            a.byteOffset + 28,
            a.byteLength - 28
          )).getUint32(t, !1),
            (t += 4),
            a.getUint32(t, !1),
            (t += 4),
            a.getUint32(t, !1),
            a.getUint32(t + 4, !1);
        });
      var Ja = [
          1887007846,
          1852400752,
          1987014509,
          1718579053,
          1634887277,
          1952539757,
          1701147238,
          1885956979,
          1635018093,
          1868785005,
          1887007859,
          2019846515,
          2020176755,
          1952871024,
          1684567661,
          1801548404,
          2019915373,
          1668116585,
          1684563565,
          1717662324,
          1634887284,
          1869768301,
          1635017845,
          1919706216,
          1718511972,
          1668246633,
          1869770857,
          1718511977,
          1935961961,
          543976824,
          1819113570,
          1836345712,
          1684564852,
          1717924468,
          1937007717,
          1634296941,
          1684563309,
          2019914356,
          1684563572,
          1952736884,
          1885696628,
          1853190772,
          1885823603,
          1935832435,
          2053726579,
          1869177203,
          1953656931,
          1717924452,
          543978101,
          544109173,
          1718511987,
          1953721445,
          1684563053,
          1718511981,
          1634562662,
          1718185321,
          1835557747,
          1768448883,
          1684565366,
          1684565363,
          1684565352,
          1684565358,
          1818391667,
          1685288051,
          1937011827,
          1937011811,
          1668510835,
          2054386803,
          846886003,
          1868788851,
          875982691,
          1936946291,
          1752396915,
          1650745712,
          1885631603,
          1886676083,
          1685088115,
          828601953,
          1130591841,
          1935946861,
          1953657954,
          828601960,
          1131837032,
          1932816493,
          1983148141,
          859189875,
          859189860,
          1630826605,
          1919770995,
          1651990899,
          1919770980,
          1668703603,
          1668703588,
          1885565299,
          1885565284,
          1986884467,
          1886549876,
          858612581,
          862151012,
          1935962981,
          1684632949,
        ],
        Ka = [
          2019846515,
          2020176755,
          1952871024,
          1684567661,
          1684564852,
          1684563053,
          1919706216,
          1684565366,
          1684565363,
          1684565352,
          1684565358,
          1717924452,
          543978101,
          544109173,
          1937011827,
          1937011811,
          1685288051,
          2054386803,
          846886003,
          1668510835,
          1868788851,
          875982691,
          1936946291,
          1752396915,
          1885631603,
          1886676083,
          1650745712,
          1953721445,
          1953656931,
          1684563309,
          2019914356,
          1684563565,
          1684563572,
          1952736884,
          1885696628,
          1853190772,
          1634887284,
          1869768301,
          1885823603,
          1685088115,
          1819505779,
          1935832435,
          2053726579,
          1869177203,
          1852400752,
          1635018093,
          543976824,
          1819113570,
          1668246633,
          1836345712,
          1869770857,
          1701211753,
          1718511977,
          1935961961,
          1718185321,
          1668116585,
          1835557747,
          1886417523,
          1935962981,
        ],
        Ta = [
          1887007846,
          1852400752,
          1952539757,
          1701147238,
          1885956979,
          1887007859,
          2019846515,
          2020176755,
          1952871024,
          1684567661,
          1668116585,
          1684563565,
          1634887284,
          1869768301,
          1919706216,
          1668246633,
          1718511977,
          1935961961,
          543976824,
          1819113570,
          1836345712,
          1684564852,
          1684563309,
          2019914356,
          1684563572,
          1952736884,
          1853190772,
          1885823603,
          1935832435,
          2053726579,
          1869177203,
          1953656931,
          543978101,
          544109173,
          1953721445,
          1684563053,
          1634562662,
          1718185321,
          1835557747,
          1768448883,
          1684565366,
          1684565363,
          1684565352,
          1684565358,
          1851876717,
          1701667182,
          1635017060,
          1937011827,
          1937011811,
          1668510835,
          2054386803,
          846886003,
          1868788851,
          875982691,
          1936946291,
          1752396915,
          1650745712,
          1885631603,
          1886676083,
          1685088115,
          1130591841,
          1935946861,
          1953657954,
          1130591848,
          859189860,
          1919770980,
          1668703588,
          1885565284,
          862151012,
          1935962981,
          1684632949,
          1887007859,
          1684104820,
          1634559604,
          1835166817,
          1752462689,
          1718840419,
          1819045731,
          1885565796,
          1701998183,
          1685551467,
          1768124268,
          1718773104,
          1735292018,
          1651337332,
          1819568500,
          1818588020,
          1952543349,
          1668444793,
          1414676905,
          1651270057,
          1953325993,
          1852139433,
          1886545833,
          2036425897,
          1953326761,
          1718512041,
          1920560297,
          1835101865,
          1902473897,
          1953658793,
          2054781097,
          863005998,
          1851877475,
          1819306083,
          1885432931,
          1919709027,
          1718511976,
          1769238120,
          1701667182,
          1953459824,
          1734701162,
          1902342771,
          1731426420,
          1701079415,
          1397178708,
          1835099490,
          1886351212,
        ],
        Xa = [
          1887007859,
          1684104820,
          1634559604,
          1835166817,
          1752462689,
          1718840419,
          1819045731,
          1885565796,
          1701998183,
          1685551467,
          1768124268,
          1718773104,
          1735292018,
          1651337332,
          1819568500,
          1818588020,
          1952543349,
          1668444793,
        ],
        za = [
          757935405,
          863005998,
          544694642,
          1414676905,
          1651270057,
          1953325993,
          1852139433,
          1886545833,
          2036425897,
          1953326761,
          1718512041,
          1920560297,
          1835101865,
          1902473897,
          1869575337,
          1953658793,
          2054781097,
          1414676833,
          1145662305,
          1145663585,
          1145664609,
          1735680355,
          1851877475,
          1819306083,
          1885432931,
          1145663075,
          1919709027,
          1920364387,
          1818849379,
          1953656931,
          1635017060,
          1668506980,
          1802725732,
          1684629349,
          859189864,
          1718511976,
          1769238120,
          1145660775,
          1701998183,
          1953721449,
          2004444523,
          1701667182,
          1919509613,
          1953719152,
          1885431664,
          1145662576,
          1685222768,
          1819440496,
          1735292018,
          1145661043,
          1902342771,
          1802073203,
          1869639028,
          1852535412,
          1852143220,
          1852733044,
          1752397428,
          1853060724,
          1936029300,
          1731426420,
          1702257015,
          1701079415,
          1413695824,
          1397178708,
        ],
        Ya = [1751675751, 1970303847, 1836086119, 1685287783, 1685353319],
        Za = [1634890840],
        $a = [1835099490, 1886351212];
      function qa() {
        this.fa = this.na = 0;
      }
      function _a(a) {
        a = new DataView(a.buffer, a.byteOffset, a.byteLength);
        var t = new qa();
        return (t.na = a.getUint32(0, !1)), (t.fa = a.getUint32(4, !0)), t;
      }
      function Qa() {
        (this.ib = this.ka = this.ra = this.W = this.pa = this.O = 0),
          (this.Ja = []);
      }
      function at(a) {
        var t;
        for (t = 0; t < Ja.length; t++) if (Ja[t] == a.fa) return !0;
        for (t = 0; t < Xa.length; t++) if (Xa[t] == a.fa) return !0;
        for (t = 0; t < za.length; t++) if (za[t] == a.fa) return !0;
        if (0 == a.fa && 8 == a.na) return !0;
        for (t = 0; t < Ya.length; t++) if (Ya[t] == a.fa) return !0;
        for (t = 0; t < Za.length; t++) if (Za[t] == a.fa) return !0;
        for (t = 0; t < $a.length; t++) if ($a[t] == a.fa) return !0;
        return !1;
      }
      function tt(a) {
        a = a.ka;
        for (var t = "", e = 0; 4 > e; e++) {
          var i = (a >> (8 * e)) & 255;
          32 > i || 127 < i
            ? (0 > i && (i = (o + i + 1) & 255), (i = "<" + b(i, 2) + ">"))
            : (i = String.fromCharCode(i)),
            (t += i);
        }
        return t;
      }
      function et(a) {
        (0 === a.ka && 8 === a.W && 0 === a.ra) || tt(a);
      }
      function it() {
        (this.xa = g),
          (this.ec = this.V = this.Fc = !1),
          (this.wa = this.Fb = this.bc = this.R = 0),
          (this.a = new ea()),
          (this.ia = new Qa()),
          (this.J = []),
          (this.m = 0);
      }
      function rt(a, t) {
        return (
          a.a.seek(t, 1),
          !1 === (a = a.a.read(8)).i
            ? { Xa: new qa(), status: 204 }
            : { Xa: _a(a.data), status: 0 }
        );
      }
      function st(a, t, e) {
        var i = { va: new Qa(), Jb: !1 };
        switch (((i.va.pa = t), (i.va.ka = e.fa), e.na)) {
          case 0:
            (i.va.W = a.R - t), a.ia.Ja.push(i.va), (i.Jb = !0);
            break;
          case 1:
            ((a = new Uint32Array([0, 0]))[0] = v(a[0])),
              (a[1] = v(a[1])),
              (i.va.W = a[1]),
              (i.va.ra = a[0]);
            break;
          default:
            i.va.W = e.na;
        }
        return i;
      }
      function nt(a, t, e, i) {
        var r = e + ((t.ra << 32) | t.W);
        return r == i
          ? { Oa: !0, status: 0 }
          : r > i || r < e
          ? ((e = 1952539757 == t.ka || 1701147238 == t.ka),
            a.ec && e && i == a.R
              ? { Oa: !0, status: 201 }
              : { Oa: !1, status: 201 })
          : a.V && 8 > (t = i - r)
          ? ((i = ut(a, r, t)),
            a.a.seek(e, 1),
            { Oa: i, status: i ? 319 : 201 })
          : (a.a.seek(r, 1),
            0 !== (t = rt(a, r)).status
              ? { Oa: !1, status: 224 }
              : 0 == at((t = t.Xa))
              ? ((i = ft(a, r, t.na, i)),
                a.a.seek(e, 1),
                { Oa: i, status: i ? 319 : 224 })
              : (a.a.seek(e, 1), { Oa: !0, status: 319 }));
      }
      function ft(a, t, e, i) {
        return (
          (t += e) == i ||
          (!(0 == e || t > i) &&
            (t > i - 8
              ? !(!a.V || 4 != i - t)
              : (a.a.seek(t, 1),
                0 === (e = rt(a, t)).status &&
                  (0 != at(e.Xa) || (0 != e.Xa.na && ft(a, t, e.Xa.na, i))))))
        );
      }
      function ht(a, t) {
        var e = 28;
        if (a.V) {
          if (28 > t - 8) return t - 8;
          if (((t = a.a.M), 0 == (e = a.a.read(28)).i)) return 4294967295;
          switch (((e = Da(e.data)), a.a.seek(t, 1), e.version)) {
            case 0:
              e = 28;
              break;
            case 1:
              e = 44;
              break;
            case 2:
              e = 60;
              break;
            default:
              e = 4294967295;
          }
        }
        return e;
      }
      function ut(a, t, e) {
        return (
          0 != a.V &&
          4 == e &&
          (a.a.seek(t, 1),
          !1 !== (e = a.a.read(4)).i &&
            ((e =
              (e.data[0] << 24) |
              (e.data[1] << 16) |
              (e.data[2] << 8) |
              e.data[3]),
            a.a.seek(t, 1),
            0 === e))
        );
      }
      function bt() {
        this.jb = this.kb = this.B = 0;
      }
      function ct() {
        it.call(this),
          (this.u = this.Gb = this.cc = !1),
          (this.ja = Gt),
          (this.s = []),
          (this.ya = new La()),
          (this.g = new Fa()),
          (this.j = []),
          (this.c = []),
          (this.Db = 0),
          (this.hc = new Map()),
          (this.ic = new Q());
      }
      function ot(a, t) {
        var e = 4294967295;
        return (
          0 == a.Gb ||
            a.hc.forEach(function (a, i) {
              t === i && (e = a);
            }),
          e
        );
      }
      function lt(a, t, e, i, r) {
        if (0 == ((i << 32) | (e & o)) >= r) return 302;
        if (8 < r) {
          if (!1 === (a = gt(a, t + 8)).h) return 302;
          if (0 !== a.I && 1 !== a.I) return 301;
        }
        return 0;
      }
      function dt(a, t) {
        for (var e = 4294967295, i = 0; i < a.j.length; i++)
          if (t === a.j[i].$) {
            e = i;
            break;
          }
        return e;
      }
      function gt(a, t) {
        (t -= a.m), a.a.seek(t, 1);
        var e = a.a.read(1);
        return !1 === e.i
          ? { I: 4294967295, h: !1 }
          : (a.a.seek(t, 1), { I: e.data[0], h: !0 });
      }
      function vt(a, t, e, i) {
        if (0 !== (e = lt(a, t, e, i, 108))) return e;
        if (!1 === (e = gt(a, t + 8)).h) return 302;
        if (
          ((t += 1 === e.I ? 28 : 20), (t -= a.m), a.a.seek(t, 1), 0 === e.I)
        ) {
          if (!1 === (t = a.a.read(8)).i) return 302;
          a.ya = ja(t.data);
        } else {
          if (!1 === (t = a.a.read(4)).i) return 302;
          if (
            ((t = new DataView(
              t.data.buffer,
              t.data.byteOffset,
              t.data.byteLength
            )),
            (a.ya.ba = t.getUint32(0, !1)),
            !1 === (t = a.a.read(8)).i)
          )
            return 302;
          (e =
            ((e = (t = new DataView(
              t.data.buffer,
              t.data.byteOffset,
              t.data.byteLength
            )).getUint32(0, !1)) <<
              32) |
            t.getUint32(4, !1)),
            (a.ya.duration = e & o);
        }
        return 0;
      }
      function wt(a, t, e, i) {
        if (0 == 28 <= ((i << 32) | (e & o))) return 302;
        var r = gt(a, t + 8);
        if (!1 === r.h) return 302;
        if (0 !== r.I && 1 !== r.I) return 301;
        if ((a.a.seek(t - a.m + 12, 1), !1 === (e = a.a.read(4)).i)) return 302;
        if (
          ((i = new DataView(
            e.data.buffer,
            e.data.byteOffset,
            e.data.byteLength
          ).getUint32(0, !1)),
          ((t = new j()).I = r.I),
          0 === r.I)
        ) {
          if (!1 === (e = a.a.read(12 * i)).i) return 302;
          for (
            new DataView(e.data.buffer, e.data.byteOffset, e.data.byteLength),
              t.ca.f = i,
              r = 0;
            r < i;
            r++
          ) {
            var s = e.data.subarray(12 * r, 12 * (r + 1)),
              n = new U();
            s = new DataView(s.buffer, s.byteOffset, s.byteLength);
            var f = 0;
            (n.nb = s.getUint32(f, !1)),
              (f += 4),
              (n.c = s.getUint32(f, !1)),
              (f += 4),
              (n.b = s.getUint16(f, !1)),
              (n.a = s.getUint16(f + 2, !1)),
              t.ca.aa.push(n);
          }
        } else {
          if (!1 === (e = a.a.read(20 * i)).i) return 302;
          for (
            new DataView(e.data.buffer, e.data.byteOffset, e.data.byteLength),
              t.da.f = i,
              r = 0;
            r < i;
            r++
          ) {
            (s = e.data.subarray(20 * r, 20 * (r + 1))), (n = new A()), (f = 0);
            var h = (s = new DataView(
              s.buffer,
              s.byteOffset,
              s.byteLength
            )).getUint32(f, !1);
            f += 4;
            var u = s.getUint32(f, !1);
            (f += 4),
              (n.nb = (h << 32) | (u & o)),
              (h = s.getUint32(f, !1)),
              (f += 4),
              (u = s.getUint32(f, !1)),
              (f += 4),
              (n.c = (h << 32) | (u & o)),
              (n.b = s.getUint16(f, !1)),
              (n.a = s.getUint16(f + 2, !1)),
              t.da.aa.push(n);
          }
        }
        return (
          (a = a.g),
          t &&
            ((a.Z = new j()),
            (a.Z.I = t.I),
            0 === t.I
              ? ((a.Z.ca.f = t.ca.f), (a.Z.ca.aa = t.ca.aa.slice()))
              : ((a.Z.da.f = t.da.f), (a.Z.da.aa = t.da.aa.slice()))),
          0
        );
      }
      function kt(a, t, e, i) {
        if (0 !== (e = lt(a, t, e, i, 32))) return e;
        if (!1 === (e = gt(a, t + 8)).h) return 302;
        if (
          ((a.g.qb = e.I),
          (t -= a.m),
          (t += 1 === e.I ? 28 : 20),
          a.a.seek(t, 1),
          (t = new La()),
          0 === e.I)
        ) {
          if (!1 === (t = a.a.read(8)).i) return 302;
          t = ja(t.data);
        } else {
          if (!1 === (e = a.a.read(12)).i) return 302;
          (i = new DataView(
            e.data.buffer,
            e.data.byteOffset,
            e.data.byteLength
          )),
            (t.ba = i.getUint32(0, !1)),
            (e = i.getUint32(4, !1)),
            (i = i.getUint32(8, !1)),
            (t.duration = (e << 32) | i);
        }
        return 0 === t.ba ? 313 : ((a.g.sa = t), 0);
      }
      function pt(a, t, e, i) {
        if (0 != (i = lt(a, t, e, i, 16))) return i;
        a.a.seek(t - a.m + 12, 1);
        var r = new q();
        return (
          (r.f = e - 12),
          0 == (t = a.a.read(r.f)).i
            ? 302
            : (t.data.forEach(function (a) {
                var t = new $();
                (t.a = a),
                  (t.b = (a >> 6) & 3),
                  (t.c = (a >> 4) & 3),
                  (t.j = (a >> 2) & 3),
                  (t.g = 3 & a),
                  r.Xb.push(t);
              }),
              r && 0 != r.f && (a.g.Ga = _(r)),
              0)
        );
      }
      function yt() {
        ct.call(this);
      }
      function Rt(a, t, e) {
        var i, r;
        if ((r = 0 === t.la.D && 0 === t.Ua.D)) {
          var s = t.o.a;
          (1836278895 !==
            (s = new DataView(s.buffer, s.byteOffset, s.byteLength).getUint32(
              0,
              !1
            )) &&
            1836278899 !== s) ||
            (r = !1);
        }
        if (
          0 !=
          (r =
            !1 ===
            (t.fb &&
              t.gb &&
              0 !== t.P.f &&
              0 !== t.G.f &&
              !1 === r &&
              (0 !== t.X.f || 0 !== t.qa.f))
              ? 303
              : 0)
        )
          return r;
        if (
          0 !==
          (r = (function (a, t) {
            var e,
              i,
              r = a.la.D;
            if (a.P && 0 !== a.P.f) {
              for (i = e = 0; i < a.P.f; i++) e += a.P.F[i].D;
              i = !0;
            } else (e = 0), (i = !1);
            if (!i) return 303;
            if (e !== r && !1 === t) return 304;
            if (a.za && 0 !== a.za.f) {
              for (i = e = 0; i < a.za.f; i++) e += a.za.F[i].D;
              i = !0;
            } else (e = 0), (i = !1);
            if (i && e !== r && !1 === t) return 305;
            if (a.G && 0 !== a.G.f) {
              for (i = e = 0; i < a.G.f; i++) e += a.G.F[i].Yb;
              i = !0;
            } else (e = 0), (i = !1);
            return i
              ? e > r && !1 === t
                ? 304
                : 0 == (!a.Ga || 0 === a.Ga.f) && (a = a.Ga.f) && a !== r && !t
                ? 306
                : 0
              : 303;
          })(t, a.ja > Gt))
        )
          return r;
        if (((r = t.sa.duration), t.P && 0 !== t.P.f)) {
          for (i = s = 0; i < t.P.f; i++) s += t.P.F[i].D * t.P.F[i].Bc;
          i = !0;
        } else (s = 0), (i = !1);
        if (
          0 != (r = i ? (s !== r && !1 === (a.cc || a.ja > Gt) ? 304 : 0) : 303)
        )
          return r;
        if (0 != (r = 0)) return r;
        if (
          ((r = t.X.f ? t.X.f : t.qa.f),
          0 !=
            (r = (s =
              t.G && 0 !== t.G.f
                ? { sc: t.G.F[0].Wa, vc: t.G.F[t.G.f - 1].Wa, status: !0 }
                : { sc: 4294967295, vc: 4294967295, status: !1 }).status
              ? 1 !== s.sc || (s.vc > r && 0 == a.ja > Gt)
                ? 309
                : 0
              : 303))
        )
          return r;
        if (!1 === e) {
          if (
            !1 ===
              (e =
                (t.S && 0 !== t.S.length) || !1 !== Ba(t)
                  ? { Kb: t.S.slice(), status: !0 }
                  : { Kb: [], status: !1 }).status ||
            0 === e.Kb.length
          )
            r = 312;
          else if (
            ((e = e.Kb),
            (s = a.u ? e[0].T : e[0].B),
            4294967295 === (r = t.Sa) || a.s.length <= r)
          )
            r = 317;
          else {
            i = a.s[r];
            var n = !1;
            if (
              !(
                0 === (r = e.length) ||
                s < i.B ||
                ((s = a.u ? e[r - 1].T + e[r - 1].A : e[r - 1].B + e[r - 1].A),
                s > i.B + ((i.jb << 32) | (i.kb & o)))
              )
            ) {
              for (
                i = 0;
                i < r - 1 &&
                ((s = e[i].B + e[i].A), !((a.u ? e[i + 1].T : e[i + 1].B) < s));
                i++
              );
              (n = !0), (a.c = a.c.concat(e.slice()));
            }
            r = n ? 0 : 312;
          }
          if (0 !== r) return r;
        }
        if (
          ((0 == t.L[0] &&
            0 == t.L[1] &&
            0 == t.L[2] &&
            0 == t.L[3] &&
            0 == t.L[4] &&
            0 == t.L[5] &&
            0 == t.L[6] &&
            0 == t.L[7] &&
            0 == t.L[8]) ||
            t.L[0] !== t.L[4] ||
            1e-4 < w(t.L[1]) + w(t.L[3]) ||
            ((e = w(t.L[1])),
            (r = w(t.L[0])),
            (t.hb = 1e-4 < Math.abs(e) ? Math.asin(e) : Math.acos(r)),
            (t.hb = (360 * t.hb) / (2 * Math.PI))),
          0 != (r = 0))
        )
          return r;
        if (0 != (r = 0)) return r;
        if (
          ((e = a.ja > Gt), (r = 0), 0 != !(0 === t.Z.ca.f && 0 === t.Z.da.f))
        ) {
          (s = E(t.Z)),
            (t = 0),
            (n = 0 === (i = s.I) ? s.ca.aa.length : s.da.aa.length);
          for (var f = 0; f < n; f++)
            t += 0 === i ? s.ca.aa[f].nb : s.da.aa[f].nb;
          t === (a = a.ya.duration) || t > a || (t < a && !e && (r = 564));
        }
        return 0 !== r ? r : 0;
      }
      function mt(a, t) {
        return 0 < (a = a.B - t.B) ? 1 : 0 > a ? -1 : 0;
      }
      function Ut(a, t) {
        return 0 < (a = a.T - t.T) ? 1 : 0 > a ? -1 : 0;
      }
      function At(a) {
        (this.g = 0), (this.c = a);
      }
      function Ot(a) {
        var t = { status: !1, value: 4294967295 };
        if (!a.c) return t;
        var e = a.c.M,
          i = a.c.read(1);
        if (0 == i.i) return { status: !1, value: 4294967295 };
        if (
          (a.c.seek(e, 1),
          (t.value = i.data[0] & (1 << (7 - a.g)) ? 1 : 0),
          a.g++,
          0 == a.g % 8)
        ) {
          if (0 == (i = a.c.read(1)).i)
            return { status: !1, value: 4294967295 };
          a.g = 0;
        }
        return (t.status = !0), t;
      }
      function Lt(a, t, e) {
        At.call(this, a),
          (this.j = this.b = 0),
          (this.a = new na()),
          (this.b = 8 * e),
          (this.j = 0);
      }
      function jt(a, t) {
        var e = { status: !1, value: 0 };
        if (a.c && !(32 < t)) {
          for (var i, r = 0, s = 0; s < t; s++)
            (i = 1 << (t - s - 1)), 1 & Ot(a).value && (r |= i);
          (e.status = !0), (e.value = r);
        }
        return (
          !1 === e.status ||
            (a.b < t ? (a = !1) : ((a.b -= t), (a = !0)), (e.status = a)),
          e
        );
      }
      (it.prototype.w = function () {
        return 0;
      }),
        (it.prototype.gc = function () {
          return 0;
        }),
        h(ct, it),
        (ct.prototype.w = function (a, t, e, i) {
          var r = 0;
          if (this.V && 0 === a && 4 === e && 0 === i) return 0;
          do {
            a: {
              for (
                var s = [
                    1952539757,
                    1801548404,
                    2019915373,
                    1635017845,
                    1635018093,
                    1701079415,
                    1868785005,
                  ],
                  n = 0;
                n < s.length;
                n++
              )
                if (a === s[n]) {
                  if (1635017845 !== a) {
                    var f = !0;
                    break a;
                  }
                  if (u === this.Db || t < this.Db) break;
                }
              f = !1;
            }
            if (f) {
              if (
                (4294967295 !== this.g.O &&
                  (this.j.push(Na(this.g)), Sa(this.g)),
                1952539757 === a)
              ) {
                var h = new bt();
                (h.B = t), (h.kb = e), (h.jb = i), this.s.push(h);
              }
              if (1801548404 !== a) break;
            }
            1634890840 === a && (this.cc = !0);
            a: {
              for (
                var b = [
                    1684567661,
                    1801548404,
                    1684564852,
                    1953721445,
                    1684563053,
                    1919706216,
                    1684563053,
                    1818391667,
                    1685288051,
                    1937011827,
                    1937011811,
                    1668510835,
                    2054386803,
                    846886003,
                    1868788851,
                    875982691,
                    1936946291,
                    1752396915,
                    1650745712,
                    1885631603,
                    1886676083,
                    1885823603,
                    1685088115,
                    1935832435,
                    2053726579,
                    1869177203,
                    1885432931,
                  ],
                  c = 0;
                c < b.length;
                c++
              )
                if (a === b[c]) {
                  var l = !0;
                  break a;
                }
              l = !1;
            }
            if (!1 !== l)
              switch (a) {
                case 1684567661:
                  r = vt(this, t, e, i);
                  break;
                case 1801548404:
                  this.Db = t + e;
                  var d = e;
                  Sa(this.g), (this.g.ub = d), (this.g.O = this.j.length);
                  break;
                case 1684564852:
                  var g = t;
                  if (0 == 92 <= ((i << 32) | (e & o))) r = 302;
                  else {
                    var v = gt(this, g + 8);
                    if (!1 === v.h) r = 302;
                    else {
                      this.g.tb = v.I;
                      var w = g - this.m;
                      (w += 1 === v.I ? 28 : 20), this.a.seek(w, 1);
                      var k = this.a.read(4);
                      if (!1 === k.i) r = 302;
                      else {
                        var p = new DataView(
                            k.data.buffer,
                            k.data.byteOffset,
                            k.data.byteLength
                          ),
                          y = p.getUint32(0, !1);
                        (this.g.$ = y),
                          (w += 1 === v.I ? 32 : 28),
                          this.a.seek(w, 1);
                        var R = new Uint32Array(9);
                        if (!1 === (k = this.a.read(44)).i) r = 302;
                        else {
                          p = new DataView(
                            k.data.buffer,
                            k.data.byteOffset,
                            k.data.byteLength
                          );
                          for (var m = 0, U = 0; 9 > U; U++)
                            (R[U] = p.getUint32(m, !1)), (m += 4);
                          this.g.L = R.slice();
                          var A = p.getUint16(m, !1),
                            O = p.getUint16(m + 4, !1),
                            L = this.g,
                            j = O;
                          (L.sb = A), (L.rb = j), (r = 0);
                        }
                      }
                    }
                  }
                  break;
                case 1953721445:
                  r = wt(this, t, e, i);
                  break;
                case 1684563053:
                  r = kt(this, t, e, i);
                  break;
                case 1919706216:
                  if (4294967295 !== this.g.O)
                    a: {
                      var E = t,
                        D = lt(this, E, e, i, 33);
                      if (0 !== D) r = D;
                      else {
                        var I = E - this.m + 12;
                        if (this.V) {
                          this.a.seek(I, 1);
                          var V = this.a.read(4);
                          if (!1 === V.i) {
                            r = 302;
                            break a;
                          }
                          if (
                            1919707245 !==
                            new DataView(
                              V.data.buffer,
                              V.data.byteOffset,
                              V.data.byteLength
                            ).getUint32(0, !0)
                          ) {
                            r = 0;
                            break a;
                          }
                        }
                        this.a.seek(I + 4, 1);
                        var M = this.a.read(4);
                        if (!1 === M.i) r = 302;
                        else {
                          var P = this.g,
                            F = M.data;
                          switch (
                            (F[3] << 24) |
                            (F[2] << 16) |
                            (F[1] << 8) |
                            F[0]
                          ) {
                            case 1701079414:
                              (P.o.a = F.slice()), (P.o.v = 1);
                              break;
                            case 1853190003:
                              (P.o.a = F.slice()), (P.o.v = 2);
                              break;
                            case 1953393e3:
                              (P.o.a = F.slice()), (P.o.v = 3);
                              break;
                            case 1635018093:
                              (P.o.a = F.slice()), (P.o.v = 4);
                              break;
                            case 1987605857:
                              (P.o.a = F.slice()), (P.o.v = 1);
                              break;
                            case 1836278895:
                              (P.o.a = F.slice()), (P.o.v = 6);
                              break;
                            case 1836282467:
                              (P.o.a = F.slice()), (P.o.v = 7);
                              break;
                            case 1836278899:
                              (P.o.a = F.slice()), (P.o.v = 8);
                              break;
                            case 1836267373:
                              (P.o.a = F.slice()), (P.o.v = 9);
                              break;
                            case 1836278639:
                              (P.o.a = F.slice()), (P.o.v = 10);
                              break;
                            case 1836281961:
                              (P.o.a = F.slice()), (P.o.v = 11);
                              break;
                            case 1836280429:
                              (P.o.a = F.slice()), (P.o.v = 12);
                          }
                          r = 0;
                        }
                      }
                    }
                  break;
                case 1818391667:
                  var N = lt(this, t, e, i, 8);
                  0 !== N ? (r = N) : ((this.g.fb = !0), (r = 0));
                  break;
                case 1685288051:
                  var B = lt(this, t, e, i, 12);
                  0 !== B ? (r = B) : ((this.g.gb = !0), (r = 0));
                  break;
                case 1937011827:
                  var C = t,
                    S = e,
                    z = i,
                    $ = lt(this, C, S, z, 16);
                  if (0 !== $) r = $;
                  else {
                    this.a.seek(C - this.m + 12, 1);
                    var q = new W(),
                      _ = this.a.read(4);
                    if (!1 === _.i) r = 302;
                    else {
                      var Q = new DataView(
                        _.data.buffer,
                        _.data.byteOffset,
                        _.data.byteLength
                      );
                      if (
                        ((q.f = Q.getUint32(0, !1)),
                        ((z << 32) | (S & o)) != 8 * q.f + 16)
                      )
                        r = 304;
                      else if (!1 === (_ = this.a.read(8 * q.f)).i) r = 302;
                      else {
                        new DataView(
                          _.data.buffer,
                          _.data.byteOffset,
                          _.data.byteLength
                        );
                        for (var aa = 0; aa < q.f; aa++) {
                          var ta = q.F,
                            ea = aa,
                            ia = _.data.subarray(8 * aa, 8 * (aa + 1)),
                            ra = new H(),
                            sa = new DataView(
                              ia.buffer,
                              ia.byteOffset,
                              ia.byteLength
                            );
                          (ra.D = sa.getUint32(0, !1)),
                            (ra.Bc = sa.getUint32(4, !1)),
                            (ta[ea] = ra);
                        }
                        q && (this.g.P = q), (r = 0);
                      }
                    }
                  }
                  break;
                case 1937011811:
                  var na = t,
                    fa = e,
                    ha = i,
                    ua = lt(this, na, fa, ha, 16);
                  if (0 !== ua) r = ua;
                  else {
                    this.a.seek(na - this.m + 12, 1);
                    var ba = new x(),
                      ca = this.a.read(4);
                    if (!1 === ca.i) r = 302;
                    else {
                      var oa = new DataView(
                        ca.data.buffer,
                        ca.data.byteOffset,
                        ca.data.byteLength
                      );
                      if (
                        ((ba.f = oa.getUint32(0, !1)),
                        ((ha << 32) | (fa & o)) != 8 * ba.f + 16)
                      )
                        r = 304;
                      else if (!1 === (ca = this.a.read(8 * ba.f)).i) r = 302;
                      else {
                        new DataView(
                          ca.data.buffer,
                          ca.data.byteOffset,
                          ca.data.byteLength
                        );
                        for (var la = 0; la < ba.f; la++) {
                          var da = ba.F,
                            ga = la,
                            va = ca.data.subarray(8 * la, 8 * (la + 1)),
                            wa = new G(),
                            ka = new DataView(
                              va.buffer,
                              va.byteOffset,
                              va.byteLength
                            );
                          (wa.D = ka.getUint32(0, !1)),
                            (wa.a = ka.getUint32(4, !1)),
                            (da[ga] = wa);
                        }
                        ba && (this.g.za = ba), (r = 0);
                      }
                    }
                  }
                  break;
                case 1668510835:
                  var pa = t,
                    ya = e,
                    Ra = i,
                    ma = lt(this, pa, ya, Ra, 16);
                  if (0 !== ma) r = ma;
                  else {
                    this.a.seek(pa - this.m + 12, 1);
                    var Ua = new T(),
                      Aa = this.a.read(4);
                    if (!1 === Aa.i) r = 302;
                    else {
                      var Oa = new DataView(
                        Aa.data.buffer,
                        Aa.data.byteOffset,
                        Aa.data.byteLength
                      );
                      if (
                        ((Ua.f = Oa.getUint32(0, !1)),
                        ((Ra << 32) | (ya & o)) != 12 * Ua.f + 16)
                      )
                        r = 308;
                      else if (!1 === (Aa = this.a.read(12 * Ua.f)).i) r = 302;
                      else {
                        new DataView(
                          Aa.data.buffer,
                          Aa.data.byteOffset,
                          Aa.data.byteLength
                        );
                        for (var La = 0; La < Ua.f; La++) {
                          var ja = Ua.F,
                            Ea = La,
                            Da = Aa.data.subarray(12 * La, 12 * (La + 1)),
                            Ia = new K(),
                            Va = new DataView(
                              Da.buffer,
                              Da.byteOffset,
                              Da.byteLength
                            );
                          (Ia.Wa = Va.getUint32(0, !1)),
                            (Ia.Yb = Va.getUint32(4, !1)),
                            (Ia.a = Va.getUint32(8, !1)),
                            (ja[Ea] = Ia);
                        }
                        Ua && (this.g.G = Ua), (r = 0);
                      }
                    }
                  }
                  break;
                case 2054386803:
                  a: {
                    var Ma = t,
                      Pa = e,
                      Fa = i,
                      Ba = new X();
                    do {
                      var Ca = lt(this, Ma, Pa, Fa, 16);
                      if (0 === Ca) {
                        this.a.seek(Ma - this.m + 12, 1);
                        var Ga = this.a.read(8);
                        if (!1 === Ga.i) {
                          r = 302;
                          break a;
                        }
                        var xa = new DataView(
                          Ga.data.buffer,
                          Ga.data.byteOffset,
                          Ga.data.byteLength
                        );
                        if (
                          ((Ba.mb = xa.getUint32(0, !1)),
                          (Ba.D = xa.getUint32(4, !1)),
                          (Ba.Qa = new Uint32Array(Ba.D)),
                          0 === Ba.mb)
                        ) {
                          if (((Fa << 32) | (Pa & o)) != 4 * Ba.D + 20) {
                            Ca = 308;
                            break;
                          }
                          if (!1 === (Ga = this.a.read(4 * Ba.D)).i) {
                            Ca = 302;
                            break;
                          }
                          xa = new DataView(
                            Ga.data.buffer,
                            Ga.data.byteOffset,
                            Ga.data.byteLength
                          );
                          for (var Ha = 0; Ha < Ba.D; Ha++)
                            Ba.Qa[Ha] = xa.getUint32(4 * Ha, !1);
                        } else
                          for (var Wa = 0; Wa < Ba.D; Wa++) Ba.Qa[Wa] = Ba.mb;
                        Ba && (this.g.la = Ba);
                      }
                    } while (0);
                    r = Ca;
                  }
                  break;
                case 846886003:
                  r = 0;
                  break;
                case 1868788851:
                  var Ja = t,
                    Ka = e,
                    Ta = i,
                    Xa = lt(this, Ja, Ka, Ta, 16);
                  if (0 !== Xa) r = Xa;
                  else {
                    this.a.seek(Ja - this.m + 12, 1);
                    var za = new Y(),
                      Ya = this.a.read(4);
                    if (!1 === Ya.i) r = 302;
                    else {
                      var Za = new DataView(
                        Ya.data.buffer,
                        Ya.data.byteOffset,
                        Ya.data.byteLength
                      );
                      if (
                        ((za.f = Za.getUint32(0, !1)),
                        ((Ta << 32) | (Ka & o)) != 4 * za.f + 16)
                      )
                        r = 308;
                      else if (!1 === (Ya = this.a.read(4 * za.f)).i) r = 302;
                      else {
                        (Za = new DataView(
                          Ya.data.buffer,
                          Ya.data.byteOffset,
                          Ya.data.byteLength
                        )),
                          (za.Ea = new Uint32Array(za.f));
                        for (var $a = 0; $a < za.f; $a++)
                          za.Ea[$a] = Za.getUint32(4 * $a, !1);
                        za && (this.g.X = za), (r = 0);
                      }
                    }
                  }
                  break;
                case 875982691:
                  var qa = t,
                    _a = e,
                    Qa = i,
                    at = lt(this, qa, _a, Qa, 16);
                  if (0 !== at) r = at;
                  else {
                    this.a.seek(qa - this.m + 12, 1);
                    var tt = new Z(),
                      et = this.a.read(4);
                    if (!1 === et.i) r = 302;
                    else {
                      var rt = new DataView(
                        et.data.buffer,
                        et.data.byteOffset,
                        et.data.byteLength
                      );
                      if (
                        ((tt.f = rt.getUint32(0, !1)),
                        ((Qa << 32) | (_a & o)) != 8 * tt.f + 16)
                      )
                        r = 308;
                      else if (!1 === (et = this.a.read(8 * tt.f)).i) r = 302;
                      else {
                        rt = new DataView(
                          et.data.buffer,
                          et.data.byteOffset,
                          et.data.byteLength
                        );
                        for (var st = 0; st < tt.f; st++) {
                          var nt = rt.getUint32(8 * st, !1),
                            ft = rt.getUint32(4 * (2 * st + 1), !1);
                          tt.Ea[st] = (nt << 32) | (ft & o);
                        }
                        tt && (this.g.qa = tt), (this.u = !0), (r = 0);
                      }
                    }
                  }
                  break;
                case 1936946291:
                  var ht = t,
                    ut = e,
                    ct = i,
                    ot = lt(this, ht, ut, ct, 16);
                  if (0 !== ot) r = ot;
                  else {
                    this.a.seek(ht - this.m + 12, 1);
                    var dt = new J(),
                      yt = this.a.read(4);
                    if (!1 === yt.i) r = 302;
                    else {
                      var Rt = new DataView(
                        yt.data.buffer,
                        yt.data.byteOffset,
                        yt.data.byteLength
                      );
                      if (
                        ((dt.f = Rt.getUint32(0, !1)),
                        ((ct << 32) | (ut & o)) != 4 * dt.f + 16)
                      )
                        r = 308;
                      else if (!1 === (yt = this.a.read(4 * dt.f)).i) r = 302;
                      else {
                        (Rt = new DataView(
                          yt.data.buffer,
                          yt.data.byteOffset,
                          yt.data.byteLength
                        )),
                          (dt.Ab = new Uint32Array(dt.f));
                        for (var mt = 0; mt < dt.f; mt++)
                          dt.Ab[mt] = Rt.getUint32(4 * mt, !1);
                        dt && (this.g.Ta = dt), (r = 0);
                      }
                    }
                  }
                  break;
                case 1752396915:
                case 1650745712:
                case 1885631603:
                  r = 0;
                  break;
                case 1886676083:
                  r = pt(this, t, e, i);
                  break;
                case 1885823603:
                case 1935832435:
                case 2053726579:
                case 1869177203:
                  r = 0;
                  break;
                case 1885432931:
                  r = 0;
              }
          } while (0);
          return it.prototype.w.call(this, a, t, e, i), r;
        }),
        (ct.prototype.Ec = function () {
          return this.Gb;
        }),
        (ct.prototype.gc = function (a, t) {
          var e = 0;
          if (0 == 24 <= ((t << 32) | (a & o))) e = 302;
          else if ((this.a.seek(0, 1), 0 == (a = this.a.read(24)).i)) e = 302;
          else {
            if (((a = a.data), (t = new Q()), 1835099490 == _a(a).fa)) {
              (t = a.subarray(8)),
                (a = new Q()),
                (t = new DataView(t.buffer, t.byteOffset, t.byteLength));
              var i = 0;
              switch (
                ((a.Rb = t.getUint32(i, !0)),
                (i += 4),
                (a.Sb = t.getUint32(i, !0)),
                (i += 4),
                (a.Ub = t.getUint32(i, !0)),
                t.getUint32(i + 4, !0))
              ) {
                default:
                  a.Aa = 0;
                  break;
                case 1:
                  a.Aa = 1;
                  break;
                case 2:
                  a.Aa = 2;
                  break;
                case 3:
                  a.Aa = 3;
                  break;
                case 4:
                  a.Aa = 4;
                  break;
                case 5:
                  a.Aa = 5;
                  break;
                case 6:
                  a.Aa = 6;
                  break;
                case 7:
                  a.Aa = 7;
              }
              t = a;
            }
            this.ic = aa(t);
          }
          return e;
        }),
        h(yt, ct),
        (yt.prototype.Dc = function (a) {
          var t;
          a = void 0 === a ? Gt : a;
          var e = void 0 !== e && e;
          (this.ja = a),
            4294967295 !== this.g.O && (this.j.push(Na(this.g)), Sa(this.g)),
            (this.Gb = !0);
          for (var i = (a = 0); i < this.j.length; i++)
            2 === this.j[i].o.v && a++;
          if (!1 === ct.prototype.Ec.call(this)) a = 319;
          else {
            for (a = 0; a < this.j.length; a++) this.hc.set(this.j[a].$, a);
            a = 0;
          }
          if (0 !== a) return a;
          if (2 < this.s.length) return 226;
          for (a = 0; a < this.j.length; a++);
          if (!1 === e) {
            a: {
              for (a = 0; a < this.s.length; a++)
                for (
                  var r =
                      (i = this.s[a].B) +
                      ((this.s[a].jb << 32) | (this.s[a].kb & o)),
                    s = 0;
                  s < this.j.length;
                  s++
                ) {
                  var n = this.j[s];
                  if (0 === n.S.length && !1 === Ba(n)) {
                    n = t = u;
                    var f = !1;
                  } else
                    (f = n.S.length),
                      0 !== n.X.f
                        ? ((t = n.S[0].B), (n = n.S[f - 1].B + n.S[f - 1].A))
                        : ((t = n.S[0].T), (n = n.S[f - 1].T + n.S[f - 1].A)),
                      (f = !0);
                  if (!1 === f) {
                    a = 310;
                    break a;
                  }
                  if (t >= i && n <= r) {
                    if (4294967295 !== this.j[s].Sa) {
                      a = 317;
                      break a;
                    }
                    this.j[s].Sa = a;
                  }
                }
              a = 0;
            }
            if (0 !== a) return a;
          }
          for (i = 0; i < this.j.length; i++)
            if (0 !== (a = Rt(this, this.j[i], e))) return a;
          return !1 !== e ||
            0 ===
              (e = (function (a) {
                a.c.sort(a.u ? Ut : mt);
                for (var t = [], e = a.c.length - 1; 0 <= e; e--) {
                  var i = !1,
                    r = a.c.length,
                    s = a.c[e];
                  if (0 !== s.A) s = !1;
                  else {
                    var n = !1;
                    0 < e &&
                      ((n = a.c[e - 1]), (n = a.u ? n.T == s.T : n.B == s.B));
                    var f = !1;
                    e + 1 < r &&
                      ((r = a.c[e + 1]), (f = a.u ? r.T == s.T : r.B == s.B)),
                      (s = n || f);
                  }
                  s && ((i = !0), t.push(e)),
                    (i = !1 === i) &&
                      ((i = a.c[e]),
                      (i = 0 != (s = a.j[dt(a, i.oa)].la.D) && i.Ma >= s)),
                    i && t.push(e);
                }
                for (e = 0; e < t.length; e++) a.c.splice(t[e], 1);
                if ((0 == (t = 0) && (t = 0 != (t = 0) ? t : 0), 0 !== t))
                  return t;
                if (0 === (t = a.c.length)) return 312;
                for (i = e = 0; i < t - 1; i++)
                  if (
                    (s = a.u ? a.c[i].T + a.c[i].A : a.c[i].B + a.c[i].A) !==
                    (r = a.u ? a.c[i + 1].T : a.c[i + 1].B)
                  ) {
                    if (((n = !0), 1 < (f = a.s.length)))
                      for (var h = 0; h < f - 1; h++) {
                        var u = a.s[h + 1].B - a.m + 8;
                        if (
                          (s =
                            a.s[h].B + ((a.s[h].jb << 32) | (a.s[h].kb & o))) &&
                          u === r
                        ) {
                          n = !1;
                          break;
                        }
                      }
                    if (n)
                      if (1 < a.s.length)
                        for (r = e; r < a.s.length; r++)
                          (f = (n = a.s[r]).jb),
                            (f <<= 32),
                            (f |= n.kb),
                            s === (f += n.B) && e++;
                      else if (
                        ((n = a.j[dt(a, a.c[i].oa)].o),
                        (f = a.j[dt(a, a.c[i + 1].oa)].o),
                        3 !== n.v &&
                          6 !== n.v &&
                          8 !== n.v &&
                          3 !== f.v &&
                          6 !== f.v &&
                          8 !== f.v &&
                          s > r)
                      )
                        return 318;
                  }
                return 0;
              })(this))
            ? (function (a) {
                if (0 == a.ya.ba) return 314;
                for (
                  var t = (1 * a.ya.duration) / a.ya.ba, e = 0;
                  e < a.j.length;
                  e++
                ) {
                  var i = a.j[e].sa;
                  if (0 == i.ba) return 314;
                  if (0.1 < (1 * i.duration) / i.ba - t && 0 == a.ja >= xt)
                    return 316;
                }
                return 0;
              })(this)
            : e;
        }),
        (yt.prototype.w = function (a, t, e, i) {
          return ct.prototype.w.call(this, a, t, e, i);
        }),
        h(Lt, At);
      var Et = [
        96e3,
        88200,
        64e3,
        48e3,
        44100,
        32e3,
        24e3,
        22050,
        16e3,
        12e3,
        11025,
        8e3,
        7350,
        2147483648,
        4294967295,
      ];
      function Dt(a) {
        switch (a) {
          case 65534:
          case 65524:
            a = 105;
            break;
          case 65532:
            a = 107;
            break;
          default:
            a = 0;
        }
        return a;
      }
      function It(a, t) {
        var e = { status: 0, zb: -1, Zb: new y() };
        if (!a) return (e.status = 101), e;
        var i = a.read(1);
        if (!1 === i.i) return (e.status = 401), e;
        if (((e.zb = i.data[0]), t !== e.zb)) return (e.status = 401), e;
        for (;;) {
          if (!1 === (i = a.read(1)).i) {
            e.status = 401;
            break;
          }
          if (((t = i.data[0]), R(e.Zb, t), 0 == (128 & t))) break;
        }
        return e;
      }
      function Vt() {
        ct.call(this), (this.Ra = new C());
      }
      function Mt() {
        (this.status = 0), (this.l = []);
      }
      function Pt() {
        Vt.call(this),
          (this.Gc = []),
          (this.dc = !1),
          (this.eb = 0),
          (this.Cb = u),
          (this.fc = this.Bb = -1),
          (this.ha = new p()),
          (this.K = new k()),
          (this.Eb = 524288),
          (this.b = []);
      }
      function Ft(a, t, e, i, r) {
        var s = !1,
          n = t.O,
          f = a.c.length;
        if (u != a.Cb)
          for (
            var h = (f = 0);
            h < a.c.length && !(a.Cb < (a.u ? a.c[h].T : a.c[h].B) + a.c[h].A);
            h++
          )
            f++;
        h = (t.X.f ? t.X.f : t.qa.f) - 1;
        var b = a.c[e];
        if (b.oa !== t.$) return (r.h = !1), r;
        for (
          var c, o = i, l = i + b.A, d = 0, g = 1 + (3 & a.Ra.nc);
          !(o >= l);

        ) {
          a.a.seek(o, 1), (c = new ra());
          var v = 4 - g,
            w = 5 - v,
            k = a.a.read(w);
          if (!1 === k.i)
            return (
              a.b[n].l.push(
                "ERROR   :    Failed reading " +
                  w +
                  " bytes from input file @offset " +
                  o
              ),
              a.a.seek(i, 1),
              (r.h = !1),
              r
            );
          (w = c), (k = k.data);
          for (var p = 4 - v, y = 0; y < p; y++) w.b[y + v] = k[y];
          if (
            ((w.g = (w.b[0] << 24) | (w.b[1] << 16) | (w.b[2] << 8) | w.b[3]),
            (w.c = k[p]),
            (w.a = 31 & w.c),
            0 === c.a)
          )
            return (
              a.b[n].l.push(
                "ERROR  :     AVC stream parsing error: NAL unit type = 0 (chunkIndex = " +
                  r.N +
                  ", chunk file offset = " +
                  o +
                  ")"
              ),
              (r.h = !1),
              r
            );
          if (
            (t.pb &&
              5 > c.a &&
              !1 === r.Ha &&
              (a.b[n].l.push(
                "WARNING:     Found non-IDR frame in video trak which had empty STSS table (chunkIndex = " +
                  r.N +
                  ", chunk file offset = " +
                  o +
                  ")"
              ),
              (r.Ha = !0)),
            0 === r.N &&
              0 === d &&
              9 !== c.a &&
              5 !== c.a &&
              6 !== c.a &&
              14 !== c.a)
          )
            if (7 === c.a)
              a.b[n].l.push(
                "WARNING:     AVC stream: Sequence Parameter Set detected in the payload (?!)"
              ),
                (s = !0);
            else if (8 === c.a)
              a.b[n].l.push(
                "WARNING:     AVC stream: Picture Parameter Set detected in the payload (?!)"
              ),
                (s = !0);
            else if (1 === c.a) {
              if (!1 === (k = a.a.read(3)).i)
                return (
                  a.b[n].l.push(
                    "ERROR  :     Failed reading 3 bytes required to identify H.264 slice type"
                  ),
                  (r.h = !1),
                  r
                );
            } else {
              if (!((16 <= c.a && 18 >= c.a) || (21 <= c.a && 23 >= c.a)))
                return (
                  a.b[n].l.push(
                    "ERROR  :     very first AVC payload chunk does not start with\n             either IDR picture or Supplementary Enhanced Info"
                  ),
                  (r.h = !1),
                  r
                );
              a.b[n].l.push(
                "WARNING:     very first AVC payload chunk starts with reserved NAL Unit Type (" +
                  c.a +
                  ")"
              );
            }
          6 > c.a &&
            (d++,
            a.eb++,
            a.dc &&
              5 === c.a &&
              (a.b[n].l.push(
                "INFO   : Video frame #" + a.eb + " is a seek point"
              ),
              a.Gc.push(a.eb))),
            (o += g + (c = c.g));
        }
        return l === o || (xt <= a.ja && (f - 1 === e || h === r.N))
          ? (d !== b.C &&
              (a.b[n].l.push(
                "WARNING:     AVC stream parsing inconsistency: chunk #" +
                  r.N +
                  " contains " +
                  d +
                  " samples vs. expected " +
                  b.C
              ),
              s &&
                a.b[n].l.push(
                  "WARNING:     SPS/PPS incorrectly counted as video sample (Google Nexus problem ?)"
                )),
            r.N++,
            (r.h = !0),
            r)
          : (a.b[n].l.push(
              "ERROR   :     AVC stream parsing inconsistency: chunk #" +
                r.N +
                "  end file offset is %" +
                o +
                " instead of " +
                l
            ),
            (r.h = !1),
            r);
      }
      function Nt(a, t, e, i, r) {
        var s = t.O,
          n = a.c[e];
        if (n.oa !== t.$) return (r.h = !1), r;
        var f = new Uint32Array(n.C);
        if (!1 === Wa(t, n.Ma, n.C, f)) return a.a.seek(i, 1), (r.h = !1), r;
        for (t = i + a.c[e].A, f = 0; ; ) {
          a.a.seek(i, 1);
          var h = a.a.read(4);
          if (!1 === h.i)
            return (
              a.b[s].l.push(
                "ERROR  : Failed reading 4 bytes of Mp3 header from file offset " +
                  i
              ),
              (r.h = !1),
              r
            );
          h = h.data;
          var u = new fa();
          (u.w = h[0]),
            (u.V = 1 & h[1]),
            (u.g = (h[1] >> 1) & 3),
            (u.a = (h[1] >> 3) & 3),
            (u.u = (h[1] >> 5) & 7),
            (u.R = 1 & h[2]),
            (u.m = (h[2] >> 1) & 1),
            (u.s = (h[2] >> 2) & 3),
            (u.b = (h[2] >> 4) & 15),
            (u.J = 3 & h[3]),
            (u.j = (h[3] >> 2) & 1),
            (u.c = (h[3] >> 3) & 1),
            (u.K = (h[3] >> 4) & 3),
            (u.mode = (h[3] >> 6) & 1),
            (h = u),
            (u = !0);
          var b = new ka();
          if (((u = void 0 !== u && u), ha(b.a, h), !1 === (u = ya(b, u)).h))
            return (
              a.b[s].l.push(
                "ERROR  : Found invalid Mp3 header at file offset " + i
              ),
              (r.h = !1),
              r
            );
          if (0 === r.N && 0 === f) ha(r.Pb, h);
          else {
            var c = (b = new ka());
            ha(c.a, r.Pb), ya(c, !1);
            var o = (c = new ka());
            if ((ha(o.a, h), ya(o, !1), 0 == (pa(b).kc === pa(c).kc)))
              return (r.h = !1), r;
          }
          if ((f++, (i += u.wb) >= t)) {
            if (i > t)
              return (
                a.b[s].l.push(
                  "ERROR  : mp3 chunk #" +
                    e +
                    ": exceeded the Mp3 chunk byte length"
                ),
                (r.h = !1),
                r
              );
            break;
          }
        }
        return (
          f !== n.C &&
            a.b[s].l.push(
              "WARNING: Number of detected Mp3 samples (" +
                f +
                ") != number of hosted chunk samples (" +
                n.C +
                ")"
            ),
          r.N++,
          (r.h = !0),
          r
        );
      }
      function Bt(a, t, e, i, r) {
        var s = t.O,
          n = a.c[e];
        if (n.oa !== t.$) return (r.h = !1), r;
        var f = new Uint32Array(n.C);
        if (!1 === Wa(t, n.Ma, n.C, f)) return a.a.seek(i, 1), (r.h = !1), r;
        f = i;
        for (var h, u = 0, b = [], c = 0; c < n.A; c++) {
          if ((a.a.seek(f, 1), !1 === (h = a.a.read(1)).i))
            return (
              a.b[s].l.push(
                "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                  f
              ),
              a.b[s].l.push("ERROR  :     QCELP audio stream integrity: FAIL"),
              a.a.seek(i, 1),
              (r.h = !1),
              r
            );
          if (5 <= (h = h.data[0]))
            return (
              a.b[s].l.push(
                "ERROR  : QCELP frame start has wrong value (" + h + " (?!)"
              ),
              a.b[s].l.push("ERROR  :    QCELP audio stream integrity: FAIL"),
              (r.h = !1),
              r
            );
          if (((h = la[h]), u++, b.push(h), (f += h) >= i + n.A)) break;
        }
        return u === n.C && !1 === Ct(a, t, e, Uint32Array.from(b))
          ? (a.b[s].l.push(
              "ERROR  :     QCELP audio frame starts misaligned with sample starts"
            ),
            a.b[s].l.push("ERROR  :     QCELP audio stream integrity: FAIL"),
            (r.h = !1),
            r)
          : (r.N++, (r.h = !0), r);
      }
      function Ct(a, t, e, i) {
        var r = a.c[e].Ma;
        if (((a = a.c[e].C), (e = i.length), 0 === i.length || a !== e))
          return !1;
        if (!1 === Wa(t, r, a, (e = new Uint32Array(a))) || e.length !== a)
          return !1;
        for (t = 0; t < e.length; t++) if (i[t] !== e[t]) return !1;
        return !0;
      }
      h(Vt, yt),
        (Vt.prototype.w = function (a, t, e, i) {
          switch (a) {
            case 1633906277:
              var r = lt(this, t, e, i, 12);
              if (0 != r) return r;
              r = 0;
              break;
            case 1986227813:
            case 1952673381:
            case 1935896165:
              if (0 != (r = lt(this, t, e, i, 12))) return r;
              r = 0;
              break;
            case 1935962981:
              if (0 != (r = lt(this, t, e, i, 12))) return r;
              r = (function (a, t, e) {
                if (!a) return 101;
                if (2 === t.o.v) {
                  var i = new N();
                  if ((a.seek(e + 12, 1), 0 !== (e = It(a, 3)).status))
                    return 0;
                  (i.b.j = e.zb), (i.b.g = e.Zb);
                  var r = a.M;
                  if (!1 === (e = a.read(3)).i) return 401;
                  if (
                    ((i.b.m = e.data.slice(0, 2)),
                    (i.b.s = 31 & e.data[2]),
                    (i.b.a = (e.data[2] >> 5) & 1),
                    (i.b.b = (e.data[2] >> 6) & 1),
                    (i.b.c = (e.data[2] >> 7) & 1),
                    (r += 3),
                    i.b.c && ((r += 2), a.seek(r, 1)),
                    i.b.b)
                  ) {
                    if (!1 === (e = a.read(1)).i) return 401;
                    (i.c = e.data[0]),
                      (r += 1),
                      i.c && (r += i.c),
                      a.seek(r, 1);
                  }
                  if ((i.b.a && a.seek(r + 2, 1), 0 !== (e = It(a, 4)).status))
                    return 0;
                  if (
                    ((i.a.a.m = e.zb),
                    (i.a.a.a = e.Zb),
                    !1 === (e = a.read(13)).i)
                  )
                    return 401;
                  if (
                    ((r = new DataView(
                      e.data.buffer,
                      e.data.byteOffset,
                      e.data.byteLength
                    )),
                    (i.a.a.b = e.data[0]),
                    (i.a.a.s = (e.data[1] >> 2) & 63),
                    (i.a.a.u = (e.data[1] >> 1) & 1),
                    (i.a.a.g = 1 & e.data[1]),
                    (i.a.a.j = e.data.slice(2, 5)),
                    (i.a.a.maxBitrate = r.getUint32(5, !1)),
                    (i.a.a.c = r.getUint32(9, !1)),
                    13 > m(i.a.a.a))
                  )
                    return 401;
                  if (4 > (e = m(i.a.a.a) - 13))
                    return 0 === e
                      ? (((a = t.o.audio).Y = i.a.a.b),
                        (a.ea = i.a.a.c),
                        !1 === Ha(t, a) ? 406 : 0)
                      : 401;
                  if (!1 === jt((a = new Lt(a, a.M, e)), 8).status) e = !1;
                  else {
                    a: {
                      for (e = new y(); ; ) {
                        if (!1 === (r = jt(a, 8)).status) {
                          e = !1;
                          break a;
                        }
                        if ((R(e, r.value), 0 == (128 & r.value))) break;
                      }
                      e = !(a.j > a.b / 8 + (a.b % 8 ? 1 : 0));
                    }
                    e =
                      !(!1 === e || 2 > a.b / 8) &&
                      (function (a) {
                        var t = jt(a, 5);
                        if (!1 === t.status) return !1;
                        if (((a.a.J = t.value), 31 === a.a.J)) {
                          if (!1 === (t = jt(a, 6)).status) return !1;
                          (a.a.ha = t.value), (a.a.a = 32 + a.a.ha);
                        } else a.a.a = a.a.J;
                        if (!1 === (t = jt(a, 4)).status) return !1;
                        if (((a.a.u = t.value), 15 === a.a.u)) {
                          if (!1 === (t = jt(a, 24)).status) return !1;
                          a.a.V = t.value;
                        } else {
                          if (2147483648 === a.a.u || 4294967295 === a.a.u)
                            return !1;
                          a.a.V = Et[a.a.u];
                        }
                        if (
                          ((a.a.g = 255),
                          (a.a.s = 255),
                          !1 === (t = jt(a, 4)).status)
                        )
                          return !1;
                        if (((a.a.K = t.value), 8 > a.b)) return !0;
                        if (5 === a.a.a || 29 === a.a.a) {
                          if (
                            ((a.a.j = 5),
                            (a.a.g = 1),
                            29 === a.a.a && (a.a.s = 1),
                            !1 === (t = jt(a, 4)).status)
                          )
                            return !1;
                          if (((a.a.c = t.value), 15 === a.a.c)) {
                            if (!1 === (t = jt(a, 24)).status) return !1;
                            a.a.m = t.value;
                          }
                          if (!1 === (t = jt(a, 4)).status) return !1;
                          a.a.w = t.value;
                        } else a.a.j = 0;
                        switch (a.a.a) {
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 6:
                          case 7:
                          case 17:
                          case 19:
                          case 20:
                          case 21:
                          case 22:
                          case 23:
                            if (
                              !1 ===
                              (function (a) {
                                if (0 === a.b) return !1;
                                var t = jt(a, 1);
                                if (!1 === t.status) return !1;
                                if (
                                  ((a.a.b.u = t.value),
                                  !1 === (t = jt(a, 1)).status)
                                )
                                  return !1;
                                if (((a.a.b.a = t.value), a.a.b.a)) {
                                  if (!1 === (t = jt(a, 14)).status) return !1;
                                  a.a.b.m = t.value;
                                }
                                if (!1 === (t = jt(a, 1)).status) return !1;
                                if (
                                  ((a.a.b.b = t.value),
                                  6 === a.a.a || 20 === a.a.a)
                                ) {
                                  if (!1 === (t = jt(a, 3)).status) return !1;
                                  a.a.b.w = t.value;
                                }
                                if (a.a.b.b) {
                                  if (22 === a.a.a) {
                                    if (!1 === (t = jt(a, 5)).status) return !1;
                                    if (
                                      ((a.a.b.K = t.value),
                                      !1 === (t = jt(a, 11)).status)
                                    )
                                      return !1;
                                    a.a.b.J = t.value;
                                  }
                                  if (
                                    17 === a.a.a ||
                                    19 === a.a.a ||
                                    20 === a.a.a ||
                                    23 === a.a.a
                                  ) {
                                    if (!1 === (t = jt(a, 1)).status) return !1;
                                    if (
                                      ((a.a.b.g = t.value),
                                      !1 === (t = jt(a, 1)).status)
                                    )
                                      return !1;
                                    if (
                                      ((a.a.b.c = t.value),
                                      !1 === (t = jt(a, 1)).status)
                                    )
                                      return !1;
                                    a.a.b.j = t.value;
                                  }
                                  if (!1 === (t = jt(a, 1)).status) return !1;
                                  a.a.b.s = t.value;
                                }
                                return !0;
                              })(a)
                            )
                              return !1;
                        }
                        if (24 >= a.b) return !0;
                        if (((a.a.wa = a.b - 24), 5 != a.a.j && 16 <= a.a.wa)) {
                          if (!1 === (t = jt(a, 11)).status) return !1;
                          if (((a.a.xa = t.value), 695 != a.a.xa)) return !0;
                          if (!1 === (t = jt(a, 5)).status) return !1;
                          if (((a.a.R = t.value), 31 === a.a.R)) {
                            if (!1 === (t = jt(a, 6)).status) return !1;
                            (a.a.ia = t.value), (a.a.j = 32 + a.a.ia);
                          } else a.a.j = a.a.R;
                          if (5 === a.a.j) {
                            if (!1 === (t = jt(a, 1)).status) return !1;
                            if (((a.a.g = t.value), 1 === a.a.g)) {
                              if (!1 === (t = jt(a, 4)).status) return !1;
                              if (((a.a.c = t.value), 15 === a.a.c)) {
                                if (!1 === (t = jt(a, 24)).status) return !1;
                                a.a.m = t.value;
                              } else {
                                if (
                                  2147483648 === a.a.c ||
                                  4294967295 === a.a.c
                                )
                                  return !0;
                                a.a.m = Et[a.a.c];
                              }
                              if (((a.a.ja = a.b), 12 <= a.a.ja)) {
                                if (!1 === (t = jt(a, 11)).status) return !1;
                                if (((a.a.ya = t.value), 1352 != a.a.ya))
                                  return !0;
                                if (!1 === (t = jt(a, 1)).status) return !1;
                                a.a.s = t.value;
                              }
                            }
                          } else if (22 === a.a.j) {
                            if (!1 === (t = jt(a, 1)).status) return !1;
                            if (((a.a.g = t.value), 1 === a.a.g)) {
                              if (!1 === (t = jt(a, 4)).status) return !1;
                              if (((a.a.c = t.value), 15 === a.a.c))
                                if (!1 !== (t = jt(a, 24)).status)
                                  a.a.m = t.value;
                                else {
                                  if (
                                    2147483648 === a.a.c ||
                                    4294967295 === a.a.c
                                  )
                                    return !0;
                                  a.a.m = Et[a.a.c];
                                }
                            }
                            if (!1 === (t = jt(a, 4)).status) return !1;
                            a.a.w = t.value;
                          }
                        }
                        return !0;
                      })(a);
                  }
                  if (!1 === e) return 401;
                  var s = a.a.a,
                    n = 0;
                  (e = a.a.V),
                    (r = 7 === a.a.K ? 8 : a.a.K),
                    1 === a.a.g && ((n |= 1), (e = a.a.m)),
                    1 === a.a.s && ((n |= 2), (r = 7 === a.a.w ? 8 : a.a.w));
                  var f = t.o.audio;
                  if (
                    ((f.Y = i.a.a.b),
                    (f.Ya = s),
                    (f.Za = n),
                    (i = f.U),
                    r !== f.H && 0 == (1 === a.a.s) && (f.H = r),
                    e !== i && 0 == (1 === a.a.g) && (f.U = e),
                    !1 === Ha(t, f))
                  )
                    return 406;
                }
                return 0;
              })(this.a, this.g, t - this.m);
              break;
            case 863005998:
              if (0 != (r = lt(this, t, e, i, 12))) return r;
              a: {
                var s = this.a;
                if (((r = this.g), s)) {
                  s.seek(t - this.m + 8, 1);
                  var n = e - 8,
                    f = new Aa();
                  if (((f.ma = 1), 60 <= n)) {
                    if (!1 === (s = s.read(60)).i) {
                      r = 401;
                      break a;
                    }
                    (n = s.data),
                      (s = new Va()),
                      (n = new DataView(n.buffer, n.byteOffset, n.byteLength));
                    for (var h = 0, u = 0; u < s.a.length; u++)
                      (s.a[u] = n.getUint16(h, !1)), (h += 2);
                    (s.g = n.getUint16(h, !1)),
                      (h += 2),
                      (s.version = n.getUint16(h, !1)),
                      (h += 2),
                      (s.j = n.getUint16(h, !1)),
                      (h += 2),
                      (s.u = n.getUint32(h, !1)),
                      (h += 4),
                      (s.s = n.getUint16(h, !1)),
                      (h += 2),
                      (s.K = n.getUint16(h, !1)),
                      (h += 2),
                      (s.m = n.getUint16(h, !1)),
                      (h += 2),
                      (s.w = n.getUint16(h, !1)),
                      (h += 2),
                      (s.ja = n.getUint32(h, !1)),
                      (h += 4),
                      (s.b = n.getFloat64(h, !1)),
                      (h += 8),
                      (s.c = n.getUint32(h, !1)),
                      (h += 4),
                      (s.J = n.getUint32(h, !1)),
                      (h += 4),
                      (s.R = n.getUint32(h, !1)),
                      (h += 4),
                      (s.ia = n.getUint32(h, !1)),
                      (h += 4),
                      (s.V = n.getUint32(h, !1)),
                      (s.ha = n.getUint32(h + 4, !1)),
                      (f.Y = 105),
                      (f.H = s.c),
                      (f.La = 16),
                      (f.U = s.b);
                  } else if (44 <= n) {
                    if (!1 === (s = s.read(44)).i) {
                      r = 401;
                      break a;
                    }
                    (n = new Ia()).a(s.data),
                      (f.Y = Dt(n.Lb)),
                      (f.H = n.Va),
                      (f.La = n.cb),
                      (f.U = n.Fa);
                  } else if (28 <= n) {
                    if (!1 === (s = s.read(28)).i) {
                      r = 401;
                      break a;
                    }
                    (s = Da(s.data)),
                      (f.Y = Dt(s.Lb)),
                      (f.H = s.Va),
                      (f.La = s.cb),
                      (f.U = s.Fa);
                  }
                  r = 0 == Ha(r, f) ? 406 : 0;
                } else r = 101;
              }
              break;
            case 828601960:
            case 829842792:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (f = this.a),
                (r = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (r = 401)
                      : ((f = I(f.data)),
                        ((s = new Ua()).ga = 5),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Ca(r) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (r = !1 === xa(r, s) ? 406 : 0)))
                  : (r = 101);
              break;
            case 1130591848:
              if (0 != (r = 14 <= ((i << 32) | (e & o)) ? 0 : 302)) return r;
              (this.Ra = new C()), (r = 0);
              break;
            case 828601953:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (f = this.a),
                (r = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (r = 401)
                      : ((f = I(f.data)),
                        ((s = new Ua()).ga = 2),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Ca(r) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (r = !1 === xa(r, s) ? 406 : 0)))
                  : (r = 101);
              break;
            case 1130591841:
              if (0 != (r = 14 <= ((i << 32) | (e & o)) ? 0 : 302)) return r;
              (this.Ra = new C()),
                (r = (function (a, t, e, i) {
                  if (!a) return 101;
                  if ((a.seek(i + 8, 1), !1 === (i = a.read(6)).i)) return 401;
                  if (
                    (new DataView(
                      i.data.buffer,
                      i.data.byteOffset,
                      i.data.byteLength
                    ),
                    (e.Kc = i.data[0]),
                    (e.ac = i.data[1]),
                    (e.Mc = i.data[2]),
                    (e.$b = i.data[3]),
                    (e.nc = 3 & i.data[4]),
                    (e.Lc = 31 & i.data[5]),
                    ((i = t.o).video.ab = e.ac),
                    (i.video.bb = e.$b),
                    !1 === xa(t, i.video))
                  )
                    return 406;
                  var r = e.Lc;
                  if (r) {
                    if (((e.ua = Array(r)), !e.ua)) return 202;
                    for (var s = 0; s < r; s++) {
                      if (
                        ((i = a.read(2)),
                        (t = new DataView(
                          i.data.buffer,
                          i.data.byteOffset,
                          i.data.byteLength
                        )),
                        !1 === i.i)
                      )
                        return 401;
                      if (
                        ((e.ua[s] = new B()),
                        (e.ua[s].xb = t.getUint16(0, !1)),
                        (i = e.ua[s].xb),
                        (e.ua[s].Na = new Uint8Array(i)),
                        !e.ua[s].Na)
                      )
                        return 202;
                      if (!1 === (i = a.read(i)).i) return 202;
                      if (
                        ((e.ua[s].Na = i.data.slice()),
                        7 != (31 & e.ua[s].Na[0]))
                      )
                        return 527;
                    }
                    if (!1 === (i = a.read(1)).i) return 401;
                    if (
                      ((e.zc = i.data[0]), (r = e.zc), (e.Ia = Array(r)), !e.Ia)
                    )
                      return 202;
                    for (s = 0; s < r; s++) {
                      if (!1 === (i = a.read(2)).i) return 401;
                      if (
                        ((t = new DataView(
                          i.data.buffer,
                          i.data.byteOffset,
                          i.data.byteLength
                        )),
                        (e.Ia[s] = new B()),
                        (e.Ia[s].xb = t.getUint16(0, !1)),
                        (i = e.Ia[s].xb),
                        (e.Ia[s].Na = new Uint8Array(i)),
                        !e.Ia[s].Na)
                      )
                        return 202;
                      if (!1 === (i = a.read(i)).i) return 202;
                      if (
                        ((e.Ia[s].Na = i.data.slice()),
                        8 != (31 & e.Ia[s].Na[0]))
                      )
                        return 527;
                    }
                  }
                  return 0;
                })(this.a, this.g, this.Ra, t - this.m));
              break;
            case 1983148141:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (f = this.a),
                (r = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (r = 401)
                      : ((f = I(f.data)),
                        ((s = new Ua()).ga = 3),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Ca(r) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (r = !1 === xa(r, s) ? 406 : 0)))
                  : (r = 101);
              break;
            case 1630826605:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              if (this.V && 12 >= e) r = 0;
              else if (((f = this.a), (r = this.g), f))
                if ((f.seek(t - this.m + 8, 1), !1 === (f = f.read(28)).i))
                  r = 401;
                else {
                  for (
                    s = f.data,
                      f = new V(),
                      s = new DataView(s.buffer, s.byteOffset, s.byteLength),
                      h = n = 0;
                    h < f.a.length;
                    h++
                  )
                    (f.a[h] = s.getUint16(n, !1)), (n += 2);
                  for (
                    f.c = s.getUint16(n, !1), n += 2, h = 0;
                    h < f.b.length;
                    h++
                  )
                    (f.b[h] = s.getUint32(n, !1)), (n += 4);
                  (f.Va = s.getUint16(n, !1)),
                    (n += 2),
                    (f.cb = s.getUint16(n, !1)),
                    (n += 2),
                    (f.g = s.getUint16(n, !1)),
                    (n += 2),
                    (f.j = s.getUint16(n, !1)),
                    (f.Fa = s.getUint32(n + 2, !1)),
                    (f.Fa >>>= 16),
                    ((s = new Aa()).ma = 1),
                    (s.Y = 0),
                    (s.H = f.Va),
                    (s.La = f.cb),
                    (s.U = f.Fa),
                    (s.a = 0),
                    (s.ea = 0),
                    (r = !1 === Ha(r, s) ? 406 : 0);
                }
              else r = 101;
              break;
            case 1932816493:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (r = this.g),
                this.a
                  ? (((f = new Ua()).ga = 4), (r = !1 === xa(r, f) ? 406 : 0))
                  : (r = 101);
              break;
            case 859189875:
            case 859189864:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (f = this.a),
                (r = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (r = 401)
                      : ((f = I(f.data)),
                        ((s = new Ua()).ga = 1),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Ca(r) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (r = !1 === xa(r, s) ? 406 : 0)))
                  : (r = 101);
              break;
            case 1919770995:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (r = this.g),
                this.a
                  ? (((f = new Aa()).ma = 2),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 8e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (r = !1 === Ha(r, f) ? 406 : 0))
                  : (r = 101);
              break;
            case 1651990899:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (r = this.g),
                this.a
                  ? (((f = new Aa()).ma = 3),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 16e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (r = !1 === Ha(r, f) ? 406 : 0))
                  : (r = 101);
              break;
            case 858612581:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              r = 0;
              break;
            case 1885565299:
              if (0 != (r = lt(this, t, e, i, 8))) return r;
              (r = this.g),
                this.a
                  ? (((f = new Aa()).ma = 4),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 8e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (r = !1 === Ha(r, f) ? 406 : 0))
                  : (r = 101);
              break;
            default:
              r = 0;
          }
          return yt.prototype.w.call(this, a, t, e, i), r;
        }),
        h(Pt, Vt),
        (Pt.prototype.w = function (a, t, e, i) {
          return Vt.prototype.w.call(this, a, t, e, i);
        });
      var Gt = 0,
        xt = 2;
      self.simpleVerifyMp4FileIntegrity = function (a, t) {
        var i = new ta();
        return (function (a, t, i) {
          var r = new Pt(),
            s = new d(t),
            n = { status: 0, ta: 0 };
          return s
            .slice(0, 64)
            .then(function (t) {
              var e = { status: 0, ta: 0 };
              if (a) {
                var i = new ea();
                if (!1 === ia(i, t)) e.status = 203;
                else if ((i.seek(0, 3), (t = i.M), i.seek(0, 1), 12 > t))
                  e.status = 104;
                else if (0 == (t = i.read(8)).i) e.status = 204;
                else {
                  var r = _a(t.data);
                  if (1887007846 != r.fa)
                    1887007859 == r.fa
                      ? ((e.ta = 5), (e.status = 566))
                      : ((e.ta = 0), (e.status = 224));
                  else if (0 == (t = i.read(4)).i) e.status = 204;
                  else
                    switch (
                      new DataView(
                        t.data.buffer,
                        t.data.byteOffset,
                        t.data.byteLength
                      ).getUint32(0, !0)
                    ) {
                      case 538997873:
                        e.ta = 2;
                        break;
                      case 1752392036:
                        e.ta = 4;
                        break;
                      case 1630693171:
                      case 829450035:
                      case 846227251:
                      case 863004467:
                      case 879781683:
                      case 896558899:
                      case 913336115:
                      case 896496489:
                      case 825520237:
                      case 842297453:
                        if (0 == (t = i.read(4)).i) {
                          e.status = 204;
                          break;
                        }
                        (r = r.na / 4 - 4), (e.ta = 1);
                        for (var s = 0; s < r; s++) {
                          if (0 == (t = i.read(4)).i) {
                            e.status = 204;
                            break;
                          }
                          if (
                            1718840424 ==
                            (t = new DataView(
                              t.data.buffer,
                              t.data.byteOffset,
                              t.data.byteLength
                            ).getUint32(0, !0))
                          ) {
                            e.ta = 3;
                            break;
                          }
                          if (1752392036 == t || 913273705 == t) {
                            e.ta = 4;
                            break;
                          }
                        }
                        break;
                      case 542520397:
                      case 541144141:
                      case 1836020585:
                        e.ta = 1;
                        break;
                      default:
                        e.ta = 1;
                    }
                }
                i.close();
              } else e.status = 101;
              if (0 != (e = (n = e).status)) {
                if (0 === n.ta)
                  throw Error("Unknown or unsupported MP4 flavor detected");
                return Promise.reject(e);
              }
            })
            .then(function () {
              return (
                2 == n.ta && (r.V = !0),
                (function (a, t, i) {
                  return (
                    (a.xa = t),
                    (a.ec = !1),
                    (function (a, t) {
                      return null === t
                        ? Promise.resolve(!1)
                        : (function (a) {
                            return null === a.xa
                              ? Promise.resolve(!1)
                              : 0 === a.R
                              ? ((a.R = a.xa.size),
                                (function (a) {
                                  return (
                                    (a.Fb = 0),
                                    (function (a) {
                                      var t = 0;
                                      return (function e() {
                                        return t + 16 >= a.R
                                          ? Promise.resolve(0)
                                          : a.xa
                                              .slice(t, t + 16)
                                              .then(function (e) {
                                                var i = _a(e);
                                                switch (i.na) {
                                                  case 0:
                                                    i.na = a.R - t;
                                                    break;
                                                  case 1:
                                                    var r = new DataView(
                                                      e.buffer,
                                                      e.byteOffset,
                                                      e.byteLength
                                                    );
                                                    (e = r.getUint32(8)),
                                                      (r = r.getUint32(12)),
                                                      (i.na = (e << 32) | r);
                                                }
                                                if (
                                                  0 === a.J.length &&
                                                  1887007846 !== i.fa
                                                )
                                                  return Promise.reject(224);
                                                if (!1 === at(i)) t++;
                                                else {
                                                  if (
                                                    (et((e = st(a, t, i)).va),
                                                    e.Jb)
                                                  )
                                                    return Promise.resolve(0);
                                                  a.J.push(e.va);
                                                }
                                                t += i.na;
                                              })
                                              .then(e);
                                      })().then(function (t) {
                                        if (0 === t)
                                          for (var e = 0; e < a.J.length; e++) {
                                            var i = e === a.J.length - 1,
                                              r =
                                                a.J[e].pa +
                                                ((a.J[e].ra << 32) | a.J[e].W),
                                              s = i ? a.R : a.J[e + 1].pa;
                                            r !== s &&
                                              (i && r < s && (a.R = r),
                                              (t = 224)),
                                              (a.Fb = r);
                                          }
                                        return Promise.resolve(t);
                                      });
                                    })(a).then(function (t) {
                                      var i = !0;
                                      switch (t) {
                                        case 0:
                                          i = !0;
                                          break;
                                        case 201:
                                          i = !1;
                                          break;
                                        default:
                                          if (0 === a.J.length) return !1;
                                          var r = (t = !1),
                                            s = !1,
                                            n = a.J,
                                            f =
                                              "undefined" != typeof Symbol &&
                                              Symbol.iterator &&
                                              n[Symbol.iterator];
                                          for (
                                            n = f ? f.call(n) : { next: e(n) },
                                              f = n.next();
                                            !f.done;
                                            f = n.next()
                                          )
                                            switch (f.value.ka) {
                                              case 1887007846:
                                                t = !0;
                                                break;
                                              case 1987014509:
                                                r = !0;
                                                break;
                                              case 1952539757:
                                                s = !0;
                                            }
                                          t &&
                                            r &&
                                            s &&
                                            ((a.R = a.Fb), (i = !0));
                                      }
                                      return (a.bc = 0), i;
                                    })
                                  );
                                })(a).then(function (t) {
                                  return !1 !== t && ((a.bc = 0), !0);
                                }))
                              : Promise.resolve(!0);
                          })(a).then(function (a) {
                            return !1 !== a;
                          });
                    })(a, i).then(function (t) {
                      if (!1 === t) return 203;
                      (function a(t) {
                        for (var e = 0; e < t.Ja.length; e++) a(t.Ja[e]);
                        t.Ja = [];
                      })(a.ia),
                        (a.ia.O = 0),
                        (a.ia.ka = 0),
                        (a.ia.W = a.R),
                        (a.ia.ra = 0),
                        (a.ia.pa = 0);
                      var e = -1,
                        i = 0;
                      return (function t() {
                        if (++e === a.J.length)
                          return (a.Fc = 0 === i), Promise.resolve(i);
                        var r = a.J[e],
                          s = r.ka;
                        if (
                          ((r.ib = 1),
                          a.wa++,
                          (r.O = a.wa),
                          et(r),
                          a.ia.Ja.push(r),
                          (a.m = r.pa),
                          a.w(s, r.pa, r.W, r.ra),
                          1887007846 === s ||
                            1952539757 === s ||
                            1684632949 === s ||
                            1701147238 === s ||
                            1835099490 === s)
                        )
                          return 1835099490 === s
                            ? ((s = r.pa),
                              a.xa
                                .slice(s, s + ((r.ra << 32) | r.W))
                                .then(function (e) {
                                  return !1 === ia(a.a, e)
                                    ? 203
                                    : 0 != (i = a.gc(r.W, r.ra))
                                    ? i
                                    : t();
                                }))
                            : t();
                        s = r.pa;
                        var n = (r.ra << 32) | r.W;
                        return a.xa.slice(s, s + n).then(function (e) {
                          return !1 === ia(a.a, e)
                            ? 203
                            : 0 !=
                              (i = (function a(t, e, i, r) {
                                for (var s, n; !(i >= r); ) {
                                  if ((t.a.seek(i, 1), i + 8 > r)) {
                                    ut(t, i, r - i) && t.w(0, t.m + i, 4, 0);
                                    break;
                                  }
                                  if (0 !== (s = rt(t, i)).status) return 204;
                                  if (((s = s.Xa), 0 === t.wa)) {
                                    if (1887007846 !== s.fa) return 224;
                                    n = t.a.M;
                                    var f = t.a.read(4);
                                    if (!1 === f.i) return 201;
                                    (t.V =
                                      538997873 ==
                                      ((f.data[0] << 24) |
                                        (f.data[1] << 16) |
                                        (f.data[2] << 8) |
                                        f.data[3])),
                                      t.a.seek(n, 1);
                                  }
                                  if (!1 === at(s)) {
                                    if (!1 === ft(t, i, s.na, r)) return 224;
                                    if (
                                      (t.wa++,
                                      ((s = st(t, t.m + i, s).va).O = t.wa),
                                      (s.ib = 1 + e.ib),
                                      et(s),
                                      e.Ja.push(s),
                                      0 !== (n = t.w(s.ka, s.pa, s.W, s.ra)))
                                    )
                                      return n;
                                    i += s.W;
                                  } else {
                                    if (
                                      (t.wa++,
                                      ((s = (n = st(t, t.m + i, s)).va).O =
                                        t.wa),
                                      (s.ib = 1 + e.ib),
                                      et(s),
                                      n.Jb)
                                    ) {
                                      t.w(s.ka, s.pa, s.W, s.ra);
                                      break;
                                    }
                                    if (
                                      ((f = (n = nt(t, s, i, r)).Oa),
                                      (n = n.status),
                                      !1 === f)
                                    )
                                      return e.Ja.push(s), n;
                                    f = t.a.M;
                                    var h = t.w(s.ka, s.pa, s.W, s.ra);
                                    if (0 !== h) return h;
                                    t.a.seek(f, 1);
                                    a: {
                                      for (f = 0; f < Ta.length; f++)
                                        if (Ta[f] == s.ka) {
                                          f = !1;
                                          break a;
                                        }
                                      f = !0;
                                    }
                                    if (f) {
                                      var u = s.pa - t.m;
                                      (f = u + (n = s.W)), (u += 8);
                                      a: {
                                        for (h = 0; h < Ka.length; h++)
                                          if (Ka[h] == s.ka) {
                                            h = !0;
                                            break a;
                                          }
                                        h = !1;
                                      }
                                      if (
                                        (h && (u += 4),
                                        0 === tt(s).indexOf("meta"))
                                      ) {
                                        var b = (h = t).a.M;
                                        h.a.seek(u, 1);
                                        var c = h.a.read(4);
                                        if (
                                          (!1 === c.i
                                            ? (h = {
                                                jc: 4294967295,
                                                status: 224,
                                              })
                                            : (1919706216 ==
                                                ((c.data[3] << 24) |
                                                  (c.data[2] << 16) |
                                                  (c.data[1] << 8) |
                                                  c.data[0]) && (u -= 4),
                                              h.a.seek(b, 1),
                                              (h = { jc: u, status: 0 })),
                                          0 !== h.status)
                                        )
                                          return h.status;
                                        u = h.jc;
                                      }
                                      if (
                                        (0 === tt(s).indexOf("mp4v") ||
                                        0 === tt(s).indexOf("hvc1") ||
                                        0 === tt(s).indexOf("avc1")
                                          ? (u += 78)
                                          : 0 === tt(s).indexOf("mp4a")
                                          ? (u += ht(t, n))
                                          : 0 === tt(s).indexOf("mp4s")
                                          ? (u += 8)
                                          : 0 === tt(s).indexOf("dref")
                                          ? (u += 4)
                                          : 0 === tt(s).indexOf("s263") ||
                                            0 === tt(s).indexOf("h263")
                                          ? (u += 78)
                                          : 0 === tt(s).indexOf("samr")
                                          ? (u += ht(t, n))
                                          : 0 === tt(s).indexOf("sevc") ||
                                            0 === tt(s).indexOf("sawb") ||
                                            0 === tt(s).indexOf("sqcp") ||
                                            0 === tt(s).indexOf("ec-3")
                                          ? (u += 28)
                                          : 0 === tt(s).indexOf("stsd") &&
                                            (u += 4),
                                        0 !== (n = a(t, s, u, f)))
                                      )
                                        return n;
                                      n = 319;
                                    }
                                    if ((e.Ja.push(s), (i += s.W), 0 === n))
                                      return n;
                                  }
                                }
                                return 0;
                              })(a, r, 8, n))
                            ? i
                            : t();
                        });
                      })();
                    })
                  );
                })(r, s, a)
              );
            })
            .then(function (a) {
              return 0 != a
                ? a
                : (function (a) {
                    var t = 1;
                    t = void 0 === t ? Gt : t;
                    var e = void 0 === e ? u : e,
                      i = void 0 !== i && i,
                      r = 0;
                    if (
                      (!a.c || 0 === a.c.length) &&
                      0 !== (r = Vt.prototype.Dc.call(a, t))
                    )
                      return Promise.resolve(r);
                    if (
                      ((a.Cb = e),
                      (a.dc = i),
                      0 !==
                        (r = (function (a) {
                          for (
                            var t = 405, e = 405, i = 0, r = a.j.length, s = 0;
                            s < r;
                            s++
                          ) {
                            var n = a.j[s].o;
                            if (1 === n.v) (t = 0), Ga(a.j[s]);
                            else if (2 === n.v) {
                              if (((e = 0), 0 === (n = n.audio).ma)) n = !1;
                              else {
                                var f,
                                  h = !0;
                                if (1 === n.ma)
                                  for (h = !1, f = 0; f < ua.length; f++)
                                    if (ua[f] === n.Y) {
                                      h = !0;
                                      break;
                                    }
                                !1 === h && a.V && (h = !0);
                                var u = !1;
                                for (f = 0; f < ba.length; f++)
                                  if (ba[f] === n.La) {
                                    u = !0;
                                    break;
                                  }
                                var b = !1;
                                for (f = 0; f < ca.length; f++)
                                  if (ca[f] === n.H) {
                                    b = !0;
                                    break;
                                  }
                                var c = !1;
                                for (f = 0; f < oa.length; f++)
                                  if (oa[f] === n.U) {
                                    c = !0;
                                    break;
                                  }
                                n = h && u && b && c;
                              }
                              if (!1 === n) {
                                e = 403;
                                break;
                              }
                              Ga(a.j[s]);
                            }
                          }
                          return (
                            (405 === t && 405 === e) || (404 === t && 403 === e)
                              ? (i = 405)
                              : 404 === t
                              ? (i = 404)
                              : 403 === e && (i = 403),
                            i
                          );
                        })(a)))
                    ) {
                      if (xt !== t) return Promise.resolve(r);
                      (403 === r || 404 === r) && (r = 0);
                    }
                    var s = (function (a) {
                      for (var t = 0, e = [], i = 0, r = 0; r < a.c.length; r++)
                        a.c[r].A > i && (i = a.c[r].A);
                      for (i > a.Eb && (a.Eb = i); ; ) {
                        if (
                          ((r = { wc: t, vb: 0, Vb: u, Wb: 0 }),
                          t < (i = a).c.length)
                        )
                          for (
                            var s = i.u ? i.c[t].T : i.c[t].B, n = t;
                            n < i.c.length && !(r.Wb + i.c[n].A > i.Eb);
                            n++
                          )
                            (r.Wb = (i.u ? i.c[n].T : i.c[n].B) - s + i.c[n].A),
                              u === r.Vb && (r.Vb = i.u ? i.c[n].T : i.c[n].B),
                              r.vb++;
                        if (0 === (i = r).vb) break;
                        e.push(i), (t += i.vb);
                      }
                      return e;
                    })(a);
                    for (a.b = Array(a.j.length), t = 0; t < a.b.length; t++)
                      a.b[t] = new Mt();
                    var n = { h: !1, N: 0, Ha: !1, Jc: !1, Pb: new fa() },
                      f = { h: !1, N: 0, Ha: !1, Jc: !1, Pb: new fa() };
                    return (function t(e) {
                      if (s.length === e) return Promise.resolve(0);
                      var i = s[e],
                        r = i.Vb;
                      return a.xa.slice(r, r + i.Wb).then(function (s) {
                        if ((a.a || (a.a = new ea()), !1 === ia(a.a, s)))
                          return 203;
                        for (s = i.wc; s < i.wc + i.vb; s++) {
                          var h = a.u ? a.c[s].T : a.c[s].B;
                          if (xt <= a.ja && 16777216 <= h + a.c[s].A) return 0;
                          var u = ot(a, a.c[s].oa),
                            b = a.j[u],
                            o = b.o,
                            l = !1;
                          switch (o.v) {
                            case 1:
                              switch (o.video.ga) {
                                case 0:
                                  a.b[u].l.push(
                                    "ERROR  : Undefined video type (" +
                                      o.video.ga +
                                      ") encountered (?!)"
                                  ),
                                    (l = !1);
                                  break;
                                case 1:
                                  a: {
                                    (l = s), (h -= r);
                                    var d = f,
                                      g = b.O,
                                      v = a.c[l];
                                    if (v.oa !== b.$) d.h = !1;
                                    else {
                                      var w = 0,
                                        k = [],
                                        p = h + v.A,
                                        y = h;
                                      a.a.seek(y, 1);
                                      for (
                                        var R,
                                          m = { h: !1, lb: y, Ba: 5 },
                                          U = y,
                                          A = 0,
                                          O = 0,
                                          L = new Uint8Array(5);
                                        ;

                                      ) {
                                        if (!1 === (R = a.a.read(1 * m.Ba)).i) {
                                          a.b[g].l.push(
                                            "ERROR   :   Failed reading " +
                                              m.Ba +
                                              " bytes from input file @offset " +
                                              y
                                          ),
                                            a.b[g].l.push(
                                              "ERROR   :     H.263 video stream integrity: FAIL"
                                            ),
                                            a.a.seek(h, 1),
                                            (d.h = !1),
                                            (f = d);
                                          break a;
                                        }
                                        for (var j = 0; j < m.Ba; j++)
                                          L[j + O] = R.data[j];
                                        if (
                                          ((R = m.Ba),
                                          (O = L),
                                          (A = y - A),
                                          (m.Ba = 5),
                                          0 === O[0] &&
                                          0 === O[1] &&
                                          128 == (-4 & O[2])
                                            ? ((m.lb = A), (m.h = !0))
                                            : 0 === O[1] &&
                                              0 === O[2] &&
                                              128 == (-4 & O[3])
                                            ? ((m.lb = A + 1), (m.h = !0))
                                            : 0 === O[2] &&
                                              0 === O[3] &&
                                              128 == (-4 & O[4])
                                            ? ((m.lb = A + 2), (m.h = !0))
                                            : (0 === O[3] && 0 === O[4]
                                                ? (m.Ba = 1)
                                                : 0 === O[4] && (m.Ba = 2),
                                              (m.h = !1)),
                                          m.h)
                                        )
                                          y > h && k.push(m.lb - U),
                                            (U = m.lb),
                                            w++,
                                            a.eb++;
                                        else if (h === y) {
                                          a.b[g].l.push(
                                            "ERROR   :     H263 pic start code not found at the chunk start"
                                          ),
                                            a.b[g].l.push(
                                              "ERROR   :     H.263 video stream integrity: FAIL"
                                            ),
                                            (d.h = !1),
                                            (f = d);
                                          break a;
                                        }
                                        if (0 != (A = 5 - m.Ba))
                                          for (O = 0; O < A; O++)
                                            L[O] = L[O + m.Ba];
                                        if (
                                          ((O = 5 > m.Ba ? A : 0),
                                          (y += R) >= p - 5)
                                        )
                                          break;
                                      }
                                      if ((k.push(p - U), w !== v.C))
                                        a.b[g].l.push(
                                          "WARNING:     H.263 stream parsing inconsistency: chunk #" +
                                            d.N +
                                            " contains " +
                                            w +
                                            " samples vs. expected " +
                                            v.C
                                        );
                                      else if (
                                        !1 === Ct(a, b, l, Uint32Array.from(k))
                                      ) {
                                        a.b[g].l.push(
                                          "ERROR   :     H.263 video start codes misaligned with sample starts"
                                        ),
                                          a.b[g].l.push(
                                            "ERROR   :     H.263 video stream integrity: FAIL"
                                          ),
                                          (d.h = !1),
                                          (f = d);
                                        break a;
                                      }
                                      d.N++, (d.h = !0);
                                    }
                                    f = d;
                                  }
                                  l = f.h;
                                  break;
                                case 2:
                                  l = (f = Ft(a, b, s, h - r, f)).h;
                                  break;
                                case 3:
                                  a: {
                                    if (
                                      ((l = s),
                                      (k = h - r),
                                      (h = f),
                                      (d = b.O),
                                      (g = a.c[l]).oa !== b.$)
                                    )
                                      h.h = !1;
                                    else {
                                      if (
                                        ((v = 0),
                                        (w = []),
                                        (p = 0),
                                        0 < g.A - 5)
                                      ) {
                                        if (
                                          (a.a.seek(k + 0, 1),
                                          !1 === (p = a.a.read(5)).i)
                                        ) {
                                          a.b[d].l.push(
                                            "ERROR   :     Failed reading 5 bytes from input file @offset " +
                                              k +
                                              0
                                          ),
                                            a.b[d].l.push(
                                              "ERROR   :     MPEG4 video stream integrity: FAIL"
                                            ),
                                            a.a.seek(k, 1),
                                            (h.h = !1),
                                            (f = h);
                                          break a;
                                        }
                                        if (
                                          ((k = p.data.slice(0, 5)),
                                          438 !=
                                            (p =
                                              (k[0] << 24) |
                                              (k[1] << 16) |
                                              (k[2] << 8) |
                                              k[3]) &&
                                            435 !== p &&
                                            432 !== p &&
                                            0 == (256 <= p && 287 >= p) &&
                                            0 == (288 <= p && 303 <= p))
                                        ) {
                                          a.b[d].l.push(
                                            "ERROR   :     VOP start code not found at the chunk start, found 0x" +
                                              c(p) +
                                              " instead"
                                          ),
                                            a.b[d].l.push(
                                              "ERROR   :     MPEG4 video stream integrity: FAIL"
                                            ),
                                            (h.h = !1),
                                            (f = h);
                                          break a;
                                        }
                                        435 === p && (h.Ha = !0),
                                          438 === p &&
                                            ((h.Ha = !1),
                                            (k = (k[4] >> 6) & 3),
                                            0 === h.N &&
                                              0 !== k &&
                                              a.b[d].l.push(
                                                "WARNING:     MPEG4 part 2 video payload does not start with I picture"
                                              ),
                                            v++),
                                          (p = g.A - 5);
                                      }
                                      if ((w.push(p + 5), v !== g.C))
                                        a.b[d].l.push(
                                          "WARNING:     MPEG4 video stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            v +
                                            " samples vs. expected " +
                                            g.C
                                        );
                                      else if (
                                        !1 === Ct(a, b, l, Uint32Array.from(w))
                                      ) {
                                        a.b[d].l.push(
                                          "ERROR   :     MPEG4 part 2 video start codes misaligned with sample starts"
                                        ),
                                          a.b[d].l.push(
                                            "ERROR   :     MPEG4 video stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (f = h);
                                        break a;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    f = h;
                                  }
                                  l = f.h;
                                  break;
                                case 5:
                                  l = !1;
                              }
                              (o.video.$a = a.eb), xa(b, o.video);
                              break;
                            case 2:
                              switch (o.audio.ma) {
                                case 0:
                                  a.b[u].l.push(
                                    "ERROR  : Undefined audio type (" +
                                      o.audio.Y +
                                      ") encountered (?!)"
                                  ),
                                    (l = !1);
                                  break;
                                case 1:
                                  switch (o.audio.Y) {
                                    case 107:
                                    case 105:
                                      l = (n = Nt(a, b, s, h - r, n)).h;
                                      break;
                                    default:
                                      switch (o.audio.H) {
                                        case 1:
                                          d = 0;
                                          break;
                                        case 2:
                                          d = 1;
                                          break;
                                        default:
                                          return 0;
                                      }
                                      a: {
                                        if (
                                          ((l = h - r),
                                          (h = d),
                                          (d = n),
                                          (g = b.O),
                                          (w = a.c[s]).oa !== b.$)
                                        )
                                          d.h = !1;
                                        else if (
                                          ((v = new Uint32Array(w.C)),
                                          !1 === Wa(b, w.Ma, w.C, v))
                                        )
                                          a.a.seek(l, 1), (d.h = !1);
                                        else {
                                          for (
                                            b = l, w = 0;
                                            w < v.length;
                                            w++
                                          ) {
                                            if (
                                              (a.a.seek(b, 1),
                                              !1 === (k = a.a.read(1)).i)
                                            ) {
                                              a.b[g].l.push(
                                                "ERROR  :    Failed reading 1 raw_sample_block byte from input file @offset " +
                                                  b
                                              ),
                                                a.b[g].l.push(
                                                  "ERROR  :    MPEG  audio stream integrity: FAIL"
                                                ),
                                                a.a.seek(l, 1),
                                                (d.h = !1),
                                                (n = d);
                                              break a;
                                            }
                                            if (
                                              (k = (k.data[0] >> 5) & 7) !== h
                                            ) {
                                              switch (
                                                ((p = !1), (U = y = ""), k)
                                              ) {
                                                case 0:
                                                  (p = 2 < o.audio.H),
                                                    (y = " = single channel"),
                                                    (U =
                                                      "    imperfect implicit AACHEv2 signalling (?)");
                                                  break;
                                                case 1:
                                                  (p =
                                                    !1 === d.Ha &&
                                                    2 <= o.audio.H),
                                                    (y = " = channel pair");
                                                  break;
                                                case 2:
                                                  (p =
                                                    !1 === d.Ha &&
                                                    1 === o.audio.H),
                                                    (y =
                                                      " = coupled channel pair");
                                                  break;
                                                case 3:
                                                  (p =
                                                    !1 === d.Ha &&
                                                    2 >= o.audio.H),
                                                    (y = " = LFE channel");
                                                  break;
                                                case 5:
                                                  d.Ha = !0;
                                              }
                                              if (p) {
                                                a.b[g].l.push(
                                                  "WARNING:     raw_sample_block indicator (" +
                                                    k +
                                                    y +
                                                    ") found at file offset " +
                                                    b +
                                                    " is in mismatch with declared number of channels (" +
                                                    o.audio.H +
                                                    ")"
                                                ),
                                                  U &&
                                                    a.b[g].l.push(
                                                      "WARNING: " + U
                                                    ),
                                                  a.b[g].l.push(
                                                    "ERROR  :     MPEG  audio stream integrity: FAIL"
                                                  ),
                                                  a.a.seek(l, 1),
                                                  (d.h = !1),
                                                  (n = d);
                                                break a;
                                              }
                                            }
                                            b += v[w];
                                          }
                                          d.N++, (d.h = !0);
                                        }
                                        n = d;
                                      }
                                      l = n.h;
                                  }
                                  break;
                                case 2:
                                  if (0 === s) {
                                    if (1 !== o.audio.H) {
                                      a.b[u].l.push(
                                        "ERROR  :  AMRNB number of channels is not 1 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     AMRNB audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                    if (8e3 !== o.audio.U) {
                                      a.b[u].l.push(
                                        "ERROR  :  AMRNB sampling rate is not 8000 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     AMRNB audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                  }
                                  a: {
                                    if (
                                      ((o = s),
                                      (l = h - r),
                                      (h = n),
                                      (d = b.O),
                                      (g = a.c[o]).oa !== b.$)
                                    )
                                      h.h = !1;
                                    else if (
                                      ((v = new Uint32Array(g.C)),
                                      !1 === Wa(b, g.Ma, g.C, v))
                                    )
                                      a.a.seek(l, 1), (h.h = !1);
                                    else {
                                      for (
                                        v = l, w = 0, k = [], p = 0;
                                        p < g.A;
                                        p++
                                      ) {
                                        if (
                                          (a.a.seek(v, 1),
                                          !1 === (y = a.a.read(1)).i)
                                        ) {
                                          a.b[d].l.push(
                                            "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                                              v
                                          ),
                                            a.b[d].l.push(
                                              "ERROR  :     AMRNB audio stream integrity: FAIL"
                                            ),
                                            a.a.seek(l, 1),
                                            (h.h = !1),
                                            (n = h);
                                          break a;
                                        }
                                        if (
                                          ((y = wa(y.data)),
                                          (y = da[15 & y.Ob]),
                                          w++,
                                          k.push(y),
                                          (v += y) >= l + g.A)
                                        )
                                          break;
                                      }
                                      if (w !== g.C)
                                        a.b[d].l.push(
                                          "    AMR-NB audio stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            w +
                                            " samples vs. expected " +
                                            g.C
                                        );
                                      else if (
                                        !1 === Ct(a, b, o, Uint32Array.from(k))
                                      ) {
                                        a.b[d].l.push(
                                          "ERROR  :     AMRNB audio frame starts misaligned with sample starts"
                                        ),
                                          a.b[d].l.push(
                                            "ERROR  :     AMRNB audio stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (n = h);
                                        break a;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    n = h;
                                  }
                                  l = n.h;
                                  break;
                                case 3:
                                  if (0 === s) {
                                    if (1 !== o.audio.H) {
                                      a.b[u].l.push(
                                        "ERROR  :  AMRWB number of channels is not 1 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     AMRWB audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                    if (16e3 !== o.audio.U) {
                                      a.b[u].l.push(
                                        "ERROR  :  AMRWB sampling rate is not 16000 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     AMRWB audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                  }
                                  a: {
                                    if (
                                      ((o = s),
                                      (l = h - r),
                                      (h = n),
                                      (d = b.O),
                                      (g = a.c[o]).oa !== b.$)
                                    )
                                      h.h = !1;
                                    else if (
                                      ((v = new Uint32Array(g.C)),
                                      !1 === Wa(b, g.Ma, g.C, v))
                                    )
                                      a.a.seek(l, 1), (h.h = !1);
                                    else {
                                      for (
                                        v = l, w = 0, k = [], p = 0;
                                        p < g.A;
                                        p++
                                      ) {
                                        if (
                                          (a.a.seek(v, 1),
                                          !1 === (y = a.a.read(1)).i)
                                        ) {
                                          a.b[d].l.push(
                                            "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                                              v
                                          ),
                                            a.b[d].l.push(
                                              "ERROR  :     AMRWB audio stream integrity: FAIL"
                                            ),
                                            a.a.seek(l, 1),
                                            (h.h = !1),
                                            (n = h);
                                          break a;
                                        }
                                        if (
                                          ((y = wa(y.data)),
                                          (y = ga[15 & y.Ob]),
                                          w++,
                                          k.push(y),
                                          (v += y) >= l + g.A)
                                        )
                                          break;
                                      }
                                      if (w !== g.C)
                                        a.b[d].l.push(
                                          "    AMR-WB audio stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            w +
                                            " samples vs. expected " +
                                            g.C
                                        );
                                      else if (
                                        !1 === Ct(a, b, o, Uint32Array.from(k))
                                      ) {
                                        a.b[d].l.push(
                                          "ERROR  :     AMRWB audio frame starts misaligned with sample starts"
                                        ),
                                          a.b[d].l.push(
                                            "ERROR  :     AMRWB audio stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (n = h);
                                        break a;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    n = h;
                                  }
                                  l = n.h;
                                  break;
                                case 4:
                                  if (0 === s) {
                                    if (1 !== o.audio.H) {
                                      a.b[u].l.push(
                                        "ERROR  :  QCELP number of channels is not 1 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     QCELP audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                    if (8e3 !== o.audio.U) {
                                      a.b[u].l.push(
                                        "ERROR  :  QCELP sampling rate is not 8000 (?!)"
                                      ),
                                        a.b[u].l.push(
                                          "ERROR  :     QCELP audio stream integrity: FAIL"
                                        ),
                                        (l = !1);
                                      break;
                                    }
                                  }
                                  l = (n = Bt(a, b, s, h - r, n)).h;
                                  break;
                                case 5:
                                  l = !1;
                              }
                              break;
                            default:
                              l = !0;
                          }
                          if (!1 === l) return (a.b[u].status = 407);
                        }
                        return t(e + 1);
                      });
                    })(0).then(function (t) {
                      for (var e = 0; e < a.b.length; e++) {
                        for (var i = a.j[e].o, r = 0; r < a.b[e].l.length; r++);
                        if (0 === a.b[e].status)
                          if (((r = a.j[e].sa), 1 === i.v)) {
                            if (
                              ((a.Bb = -1),
                              (a.fc = (1 * i.video.$a * r.ba) / r.duration),
                              2 === i.video.ga)
                            ) {
                              var s = a,
                                n = a,
                                f = n.Ra.ua[0].xb,
                                h = new Uint8Array(4 + f);
                              (h[0] = 0), (h[1] = 0), (h[2] = 0), (h[3] = 1);
                              for (var u = 0; u < f; u++)
                                h[4 + u] = n.Ra.ua[0].Na[u];
                              s.Bb = -1;
                            }
                            (s = a.j[e].hb),
                              (a.K.ga = i.video.ga),
                              (a.K.Tb = i.video.ab),
                              (a.K.Qb = i.video.bb),
                              (a.K.yb = Math.floor(s)),
                              (a.K.Da = i.video.Da),
                              (a.K.Ca = i.video.Ca),
                              (a.K.Nb = a.Bb),
                              (a.K.Mb = a.fc),
                              (a.K.Ka =
                                0 !== r.ba ? (1 * r.duration) / r.ba : 0),
                              (a.K.Pa = i.video.ea);
                          } else
                            2 === i.v &&
                              ((a.ha.ma = i.audio.ma),
                              (a.ha.Y = i.audio.Y),
                              (a.ha.Ya = i.audio.Ya),
                              (a.ha.Za = i.audio.Za),
                              (a.ha.H = i.audio.H),
                              (a.ha.U = i.audio.U),
                              (a.ha.Ka =
                                0 !== r.ba ? (1 * r.duration) / r.ba : 0),
                              (a.ha.Pa = i.audio.ea));
                      }
                      return Promise.resolve(t);
                    });
                  })(r).then(function (a) {
                    if (0 != a) return a;
                    var t = r.ha,
                      e = new p();
                    (e.ma = t.ma),
                      (e.Y = t.Y),
                      (e.Ya = t.Ya),
                      (e.Za = t.Za),
                      (e.H = t.H),
                      (e.U = t.U),
                      (e.lc = t.lc),
                      (e.mc = t.mc),
                      (e.Ka = t.Ka),
                      (e.Pa = t.Pa),
                      (t = r.K);
                    var s = new k();
                    return (
                      (s.ga = t.ga),
                      (s.Tb = t.Tb),
                      (s.Qb = t.Qb),
                      (s.yb = t.yb),
                      (s.Da = t.Da),
                      (s.Ca = t.Ca),
                      (s.Nb = t.Nb),
                      (s.Mb = t.Mb),
                      (s.Ka = t.Ka),
                      (s.Pa = t.Pa),
                      (i.Ic = e),
                      (i.Cc = s),
                      (i.Nc = aa(r.ic)),
                      a
                    );
                  });
            });
        })(a, t, i).then(function (a) {
          if (a) return { error: a };
          var t = null;
          return (
            0 !== (a = i.Cc).ga &&
              (t = {
                width: a.Da,
                height: a.Ca,
                rotation: a.yb,
                duration: a.Ka,
              }),
            { error: null, info: { audio: "UNCONVERTED", video: t } }
          );
        });
      };
    },
  },
]);
