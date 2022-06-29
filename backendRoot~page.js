"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [14],
  [
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return o;
      }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return s;
        });
      var r = n(11);
      n.d(e, "b", function () {
        return r.a;
      }),
        n.d(e, "c", function () {
          return r.b;
        });
      var i = n(15);
      n.d(e, "a", function () {
        return i.a;
      });
      var o = {
          IMAGE: 7,
          PTT: 8,
          AUDIO: 9,
          VIDEO: 10,
          GIF: 11,
          DOCUMENT: 18,
          RICH_HSM: 19,
          STICKER: 26,
        },
        u = Object.assign(
          {
            TEXT: 1,
            FUTUREPROOF: 2,
            GROUP_NOTIFICATION: 3,
            REVOKED: 4,
            CIPHERTEXT: 5,
            IDENTITY_CHANGE: 6,
          },
          o,
          {
            VCARD: 12,
            LOCATION: 13,
            EXTENDED_TEXT: 14,
            BUSINESS_NOTIFICATION: 15,
            GROUP_INVITE: 16,
            MD_PLACEHOLDER: 17,
            HSM_BUTTON_REPLY: 20,
            CONTACT_BLOCK_CHANGE: 23,
            EPHEMERAL: 24,
            PRIVACY_CHANGE: 25,
          }
        ),
        a = { QUICK_REPLY: 1, URL: 2, CALL: 3 },
        s = { TC_RECEIVED: "1", TC_SENDER: "2" };
    },
    function (t, e, n) {
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "m", function () {
          return p;
        }),
        n.d(e, "A", function () {
          return g;
        }),
        n.d(e, "j", function () {
          return v;
        }),
        n.d(e, "i", function () {
          return m;
        }),
        n.d(e, "q", function () {
          return y;
        }),
        n.d(e, "C", function () {
          return b;
        }),
        n.d(e, "l", function () {
          return _;
        }),
        n.d(e, "x", function () {
          return w;
        }),
        n.d(e, "h", function () {
          return k;
        }),
        n.d(e, "k", function () {
          return C;
        }),
        n.d(e, "E", function () {
          return E;
        }),
        n.d(e, "s", function () {
          return S;
        }),
        n.d(e, "t", function () {
          return A;
        }),
        n.d(e, "F", function () {
          return I;
        }),
        n.d(e, "z", function () {
          return O;
        }),
        n.d(e, "p", function () {
          return P;
        }),
        n.d(e, "u", function () {
          return D;
        }),
        n.d(e, "v", function () {
          return x;
        }),
        n.d(e, "w", function () {
          return B;
        }),
        n.d(e, "e", function () {
          return T;
        }),
        n.d(e, "B", function () {
          return N;
        }),
        n.d(e, "G", function () {
          return M;
        }),
        n.d(e, "o", function () {
          return j;
        }),
        n.d(e, "n", function () {
          return L;
        }),
        n.d(e, "D", function () {
          return G;
        }),
        n.d(e, "y", function () {
          return R;
        }),
        n.d(e, "r", function () {
          return $;
        });
      var r = n(34),
        i = 3600,
        o = 24 * i,
        u = 7 * o,
        a = 1e3 * i * 24,
        s = 7 * a,
        c = 1 << 31,
        l = ~c,
        f = c + 1,
        d = { time: 0, day: -4 },
        h = 0;
      function p() {
        return h;
      }
      function g(t) {
        h = t;
      }
      function v(t) {
        var e = 0 | t;
        return Math.max(f, Math.min(e, l));
      }
      function m(t) {
        return "number" != typeof t ? ((0, r.g)(t) ? f : l) : v(t);
      }
      function y(t) {
        return t < f || t > l;
      }
      function b(t, e) {
        var n = E(),
          r = Math.max(t + e - n, 0);
        return Math.min(1e3 * r, ~(1 << 31));
      }
      function _(t, e) {
        var n = null != e ? e : E();
        return v(Math.ceil(n + Math.max(t, 0)));
      }
      function w(t, e) {
        var n = null != e ? e : E();
        return v(Math.ceil(n - Math.max(t, 0)));
      }
      function k(t) {
        var e = Math.max(t - E(), 0);
        return Math.min(1e3 * e, ~(1 << 31));
      }
      function C(t) {
        var e = k(t);
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function E() {
        return v(Date.now() / 1e3 - h);
      }
      function S() {
        return v(new Date().setHours(0, 0, 0, 0) / 1e3 - h);
      }
      function A(t) {
        return v(G(t).setHours(0, 0, 0, 0) / 1e3 - h);
      }
      function I() {
        return Date.now() - 1e3 * h;
      }
      function O(t) {
        return Math.max(t - E(), 0);
      }
      function P(t) {
        return O(t) > 0;
      }
      function D() {
        return performance.now();
      }
      function x(t) {
        return Math.floor(performance.now() - t);
      }
      function B(t, e) {
        return t < e ? t : e;
      }
      var T = class {
        constructor() {
          var t = D();
          (this.R = t), (this.S = t);
        }
        reset() {
          this.S = D();
        }
        elapsed() {
          return x(this.S);
        }
        cumulative() {
          return x(this.R);
        }
      };
      function N(t) {
        return Math.max(E() - t, 0);
      }
      function M() {
        return new Date();
      }
      function j(t, e, n) {
        return Math.abs(t - e) <= n;
      }
      function L(t, e) {
        return j(E(), t, e);
      }
      function G(t) {
        return new Date(1e3 * t);
      }
      function R(t, e) {
        if (Math.abs(t - e) > o) return !1;
        var n = d.time === t ? d.day : G(t + h).getDay(),
          r = d.time === e ? d.day : G(e + h).getDay();
        return (d.time = e), (d.day = r), n === r;
      }
      function $(t) {
        return t - E() <= o;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "i", function () {
        return u;
      }),
        n.d(e, "f", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return l;
        }),
        n.d(e, "l", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "k", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return v;
        });
      var r = n(125);
      r.a.Promise.PSD && (r.a.Promise.PSD.onunhandled = () => {});
      var i = new Set(),
        o = !1;
      function u(t) {
        return Promise.resolve(t);
      }
      function a(t) {
        return t.reduce(
          (t, e, n) => t.then((t) => e(n).then((e) => (t.push(e), t))),
          c([])
        );
      }
      function s(t) {
        return r.a.Promise.all(t);
      }
      function c(t) {
        return r.a.Promise.resolve(t);
      }
      function l() {
        return Array.from(i).map((t) => t.name);
      }
      function f(t, e) {
        return t.where(e);
      }
      function d(t, e) {
        return t.orderBy(e);
      }
      function h(t, e) {
        return t.where(e);
      }
      function p(t, e) {
        return t.where(e);
      }
      function g() {
        (o = !0),
          Array.from(i).forEach((t) => {
            t.close();
          });
      }
      function v(t) {
        return u(r.a.exists(t));
      }
      (e.b = class {
        constructor(t) {
          var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = t(),
            r = n.name;
          if (o)
            throw new Error(
              `new DexieTable("${r}", ...) called after all tables disabled`
            );
          (this.name = r), (this.stores = n), e && this.open();
        }
        open() {
          this.stores.open(), i.add(this);
        }
        close() {
          this.stores.close(), i.delete(this);
        }
        transact(t, e, n) {
          return u(
            this.stores.transaction(
              t,
              e.map((t) => this.stores[t]),
              n
            )
          );
        }
      }),
        r.a.addons.push(function (t) {
          t.Collection.prototype.filterIdx = function (t) {
            var e, n, r, i;
            return (
              (n = function (e) {
                return t(e.value, e.key);
              }),
              ((e = this._ctx).filter =
                ((r = e.filter),
                (i = n),
                r
                  ? i
                    ? function () {
                        return (
                          r.apply(this, arguments) && i.apply(this, arguments)
                        );
                      }
                    : r
                  : i)),
              this
            );
          };
        });
    },
    function (t, e, n) {
      n.d(e, "r", function () {
        return l;
      }),
        n.d(e, "z", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "F", function () {
          return p;
        }),
        n.d(e, "L", function () {
          return g;
        }),
        n.d(e, "C", function () {
          return v;
        }),
        n.d(e, "M", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "E", function () {
          return b;
        }),
        n.d(e, "P", function () {
          return _;
        }),
        n.d(e, "Q", function () {
          return w;
        }),
        n.d(e, "j", function () {
          return k;
        }),
        n.d(e, "B", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return E;
        }),
        n.d(e, "f", function () {
          return S;
        }),
        n.d(e, "l", function () {
          return A;
        }),
        n.d(e, "p", function () {
          return I;
        }),
        n.d(e, "H", function () {
          return O;
        }),
        n.d(e, "k", function () {
          return P;
        }),
        n.d(e, "n", function () {
          return D;
        }),
        n.d(e, "A", function () {
          return x;
        }),
        n.d(e, "v", function () {
          return B;
        }),
        n.d(e, "s", function () {
          return T;
        }),
        n.d(e, "t", function () {
          return N;
        }),
        n.d(e, "K", function () {
          return M;
        }),
        n.d(e, "G", function () {
          return j;
        }),
        n.d(e, "e", function () {
          return L;
        }),
        n.d(e, "I", function () {
          return G;
        }),
        n.d(e, "d", function () {
          return R;
        }),
        n.d(e, "D", function () {
          return $;
        }),
        n.d(e, "i", function () {
          return K;
        }),
        n.d(e, "N", function () {
          return U;
        }),
        n.d(e, "O", function () {
          return F;
        }),
        n.d(e, "m", function () {
          return q;
        }),
        n.d(e, "x", function () {
          return z;
        }),
        n.d(e, "w", function () {
          return W;
        }),
        n.d(e, "y", function () {
          return J;
        }),
        n.d(e, "J", function () {
          return H;
        }),
        n.d(e, "q", function () {
          return V;
        }),
        n.d(e, "c", function () {
          return Y;
        }),
        n.d(e, "u", function () {
          return X;
        }),
        n.d(e, "o", function () {
          return Z;
        }),
        n.d(e, "S", function () {
          return Q;
        }),
        n.d(e, "U", function () {
          return tt;
        }),
        n.d(e, "R", function () {
          return et;
        }),
        n.d(e, "T", function () {
          return nt;
        });
      var r = n(15),
        i = n(190),
        o = n(3),
        u = n(69),
        a = (n(14), null),
        s = null,
        c = [],
        l = ot(i.c),
        f = ot("pushname", ""),
        d = ot("about", null),
        h = ot(i.b, !1),
        p = it("status", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
          return Object.assign({}, e, t);
        }),
        g = ot("usyncPause", null),
        v = ot("routingInfo", { edgeInfo: null }),
        m = ot("verboseSecurity", !1),
        y = it("abProps", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t;
        }),
        b = it("serverProps", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.c;
          return Object.assign({}, r.c, e, t);
        }),
        _ = ot("waInfo"),
        w = ot("waServerInfo"),
        k = it("generalSettings", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.d;
          return Object.assign({}, r.d, e, t);
        }),
        C = ot("regStore2", { type: "UNINITIALIZED" }),
        E = rt(
          "deviceInfo",
          (t) =>
            t &&
            new (class {
              constructor(t) {
                var e;
                (this.mcc = t.carrier.mcc),
                  (this.mnc = t.carrier.mnc),
                  (this.roaming = t.carrier.roaming),
                  (this.lg = t.lg),
                  (this.lc = t.lc),
                  (this.hour12 = null == (e = t.hour12) || e);
                var n = /^(\S+) \{(.+)\}$/.exec(t.os.version),
                  r = n ? `${n[1]}--${n[2]}` : t.os.version;
                (this.osVersion = r),
                  (this.manufacturer = t.hardware),
                  (this.device = t.device),
                  (this.osBuild = t.os.build);
                var i = ut(r),
                  o = ut(t.os.build),
                  u = ut(t.hardware),
                  a = ut(t.device);
                (this.userAgent = `WhatsApp/2.2218.5 KaiOS/${i}+${o} Device/${u}+${a}`),
                  (this.height = t.height),
                  (this.width = t.width);
              }
            })(t)
        ),
        S = ot(i.a, 0),
        A = ot("hwMemory", null),
        I = ot("lastLogSent", o.c),
        O = r.p.reduce((t, e) => ((t[e] = ot("Task." + e)), t), {}),
        P = ot("hadSuccessfulSync", !1),
        D = ot("hasVoip", !1),
        x = ot("registrationAlert", null),
        B = ot("previousDeltaSyncs", []),
        T = ot("phonebookRevision", -1),
        N = ot("phonebookStats", {}),
        M = ot("twoFactor", { status: "disabled" }),
        j = ot("storageStats", { lastUpdated: void 0 }),
        L = ot("avatarImageDialog", null),
        G = ot(i.d, null),
        R = ot("appBuild", null),
        $ = ot("serverExp", null),
        K = ot("ephemeralNuxSeen", !1),
        U = ot("viewOnceNuxSeen", !1),
        F = ot("viewOnceReceiverNuxSeen", !1),
        q = ot("hasUserNotice", !1),
        z = ot("privateStatsId", null),
        W = ot("privateStatsBlockedToken", null),
        J = ot("privateStatsIds", {}),
        H = ot("tosGatingAcceptanceStatus", {
          status: "unknown",
          forcedFetchIteration: 0,
        }),
        V = ot("loggerLoggingToTableStartTime", null),
        Y = it("advCompanionSyncState", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t;
        }),
        X = ot("postUpdateHooks", null),
        Z = ot("lang", null);
      function Q(t) {
        if (a) throw new Error("initializeInfoStore called twice");
        return (
          __LOG__(2)`initializeInfoStore`,
          (a = t.readAllEntries().then(
            (e) => (
              c.forEach((n) => {
                n.attach(t, e);
              }),
              t
            )
          )).then((t) => {
            if (
              ((s = t),
              E.isDefined() && (0, u.h)(E.get().hour12),
              !l.isDefined())
            )
              return { mode: "reg" };
            var e = G.get();
            if (null != e) {
              if (e.until > Date.now() / 1e3 - S.get())
                return { mode: "tempBanned" };
              G.delete();
            }
            return h.get() ? { mode: "deleting" } : { mode: "main" };
          })
        );
      }
      function tt() {
        return a ? a.then((t) => t.destroyDb()) : Promise.resolve();
      }
      function et() {
        a && (s ? s.close() : a.then((t) => t && t.close()));
      }
      function nt() {
        return null != s;
      }
      function rt(t, e) {
        var n = new (class {
          constructor(t, e) {
            (this.bB = void 0), (this.bC = null), (this.bA = t), (this.bD = e);
          }
          attach(t, e) {
            (this.bC = t), (this.bB = this.bD(e.get(this.bA), void 0));
          }
          get() {
            if ((this.bE(), void 0 === this.bB))
              throw new Error(this.bA + " not set in InfoStore");
            return this.bB;
          }
          set(t) {
            var e = this.bE(),
              n = this.bD(t, this.bB);
            return (this.bB = n), e.putOrDelete(this.bA, t);
          }
          setWithin(t, e) {
            return t.putOrDelete(this.bA, e);
          }
          isDefined() {
            return this.bE(), void 0 !== this.bB;
          }
          delete() {
            var t = this.bE();
            return (this.bB = this.bD()), t.putOrDelete(this.bA, void 0);
          }
          dangerouslySetInternal(t) {
            this.bB = this.bD(t, this.bB);
          }
          bE() {
            if (!this.bC)
              throw new Error(this.bA + " is not attached to InfoStore");
            return this.bC;
          }
        })(t, e);
        return c.push(n), n;
      }
      function it(t, e) {
        var n = new (class {
          constructor(t, e) {
            (this.bB = void 0), (this.bC = null), (this.bA = t), (this.bF = e);
          }
          attach(t, e) {
            (this.bC = t), (this.bB = this.bF(e.get(this.bA), void 0));
          }
          get() {
            if ((this.bE(), void 0 === this.bB))
              throw new Error(this.bA + " not set in InfoStore");
            return this.bB;
          }
          set(t) {
            var e = this.bE();
            return (this.bB = t), e.putOrDelete(this.bA, t);
          }
          setWithin(t, e) {
            return t.putOrDelete(this.bA, e);
          }
          isDefined() {
            return this.bE(), void 0 !== this.bB;
          }
          update(t) {
            var e = this.bE(),
              n = this.bF(t, this.bB);
            return (this.bB = n), e.putOrDelete(this.bA, n);
          }
          flush() {
            return this.bE()
              .get(this.bA)
              .then((t) => {
                this.bB = t;
              });
          }
          bE() {
            if (!this.bC)
              throw new Error(this.bA + " is not attached to InfoStore");
            return this.bC;
          }
        })(t, e);
        return c.push(n), n;
      }
      function ot(t, e) {
        return rt(t, function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
          return t;
        });
      }
      function ut(t) {
        return encodeURIComponent(t) || "UNKNOWN";
      }
    },
    function (t, e, n) {
      n.d(e, "m", function () {
        return o;
      }),
        n.d(e, "k", function () {
          return u;
        });
      var r = n(11);
      n.d(e, "A", function () {
        return r.N;
      }),
        n.d(e, "B", function () {
          return r.O;
        }),
        n.d(e, "z", function () {
          return r.M;
        }),
        n.d(e, "l", function () {
          return r.y;
        }),
        n.d(e, "i", function () {
          return r.v;
        }),
        n.d(e, "f", function () {
          return r.s;
        }),
        n.d(e, "u", function () {
          return r.H;
        }),
        n.d(e, "q", function () {
          return r.D;
        }),
        n.d(e, "h", function () {
          return r.u;
        }),
        n.d(e, "p", function () {
          return r.C;
        }),
        n.d(e, "y", function () {
          return r.L;
        }),
        n.d(e, "x", function () {
          return r.K;
        }),
        n.d(e, "e", function () {
          return r.r;
        }),
        n.d(e, "r", function () {
          return r.E;
        }),
        n.d(e, "t", function () {
          return r.G;
        }),
        n.d(e, "j", function () {
          return r.x;
        }),
        n.d(e, "g", function () {
          return r.t;
        }),
        n.d(e, "o", function () {
          return r.A;
        }),
        n.d(e, "a", function () {
          return r.l;
        }),
        n.d(e, "v", function () {
          return r.I;
        }),
        n.d(e, "n", function () {
          return r.z;
        }),
        n.d(e, "b", function () {
          return r.m;
        }),
        n.d(e, "c", function () {
          return r.n;
        }),
        n.d(e, "w", function () {
          return r.J;
        }),
        n.d(e, "s", function () {
          return r.F;
        }),
        n.d(e, "d", function () {
          return r.p;
        });
      var i = (0, r.o)({ platform: "whatsapp" }),
        o = i.getUserDomain,
        u = i.getGroupCallDomain;
    },
    ,
    function (t, e, n) {
      var r = n(424),
        i = n(425),
        o = n(426),
        u = n(428);
      t.exports = function (t, e) {
        return r(t) || i(t, e) || o(t, e) || u();
      };
    },
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "g", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return y;
        }),
        n.d(e, "j", function () {
          return b;
        }),
        n.d(e, "k", function () {
          return _;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "e", function () {
          return E;
        }),
        n.d(e, "O", function () {
          return D;
        }),
        n.d(e, "M", function () {
          return x;
        }),
        n.d(e, "y", function () {
          return B;
        }),
        n.d(e, "N", function () {
          return N;
        }),
        n.d(e, "v", function () {
          return M;
        }),
        n.d(e, "s", function () {
          return j;
        }),
        n.d(e, "H", function () {
          return L;
        }),
        n.d(e, "D", function () {
          return G;
        }),
        n.d(e, "m", function () {
          return R;
        }),
        n.d(e, "n", function () {
          return $;
        }),
        n.d(e, "w", function () {
          return K;
        }),
        n.d(e, "u", function () {
          return U;
        }),
        n.d(e, "r", function () {
          return F;
        }),
        n.d(e, "q", function () {
          return q;
        }),
        n.d(e, "E", function () {
          return z;
        }),
        n.d(e, "B", function () {
          return W;
        }),
        n.d(e, "G", function () {
          return J;
        }),
        n.d(e, "x", function () {
          return H;
        }),
        n.d(e, "t", function () {
          return V;
        }),
        n.d(e, "A", function () {
          return Y;
        }),
        n.d(e, "l", function () {
          return X;
        }),
        n.d(e, "I", function () {
          return Z;
        }),
        n.d(e, "z", function () {
          return Q;
        }),
        n.d(e, "F", function () {
          return et;
        }),
        n.d(e, "C", function () {
          return nt;
        }),
        n.d(e, "K", function () {
          return rt;
        }),
        n.d(e, "L", function () {
          return it;
        }),
        n.d(e, "J", function () {
          return ot;
        }),
        n.d(e, "p", function () {
          return ut;
        }),
        n.d(e, "o", function () {
          return at;
        });
      var r = n(9),
        i = n.n(r),
        o = n(31),
        u = n.n(o),
        a = 0,
        s = "@me",
        c = "@system",
        l = "status@broadcast",
        f = "@g.us",
        d = /^([1-9][0-9]{0,19}|(?!10)[1-9][0-9]{4,19}-[1-9][0-9]{9})@g.us$/,
        h = "@msgr",
        p = "msgr",
        g = /^([1-9][0-9]{0,19}(:[1-9][0-9]{0,2})?)@msgr$/,
        v = /^([1-9][0-9]{0,19})@msgr$/,
        m = /^([1-9][0-9]{0,19})(:0)?@msgr$/,
        y = "s.whatsapp.net",
        b = "@s.whatsapp.net",
        _ = "s.whatsapp.net",
        w = /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[0-9]{1,2})))@s.whatsapp.net$/,
        k = /^(0|((?!10)[1-9][0-9]{4,19})(\.[0-9]{1,2})?)@s.whatsapp.net$/,
        C = "@lid",
        E = "lid",
        S = /^([1-9][0-9]{0,14})@lid$/,
        A = /^([1-9][0-9]{0,14}(:[0-9]{1,2})?)@lid$/,
        I = /^(status|location|[1-9][0-9]{0,19})@broadcast$/,
        O = /^([0-9a-fA-F]{18,32})@call$/,
        P = /([0-9a-zA-Z-:]+)@(g\.us|call|s\.whatsapp\.net|broadcast|msgr|lid)/g;
      function D(t) {
        return `${t}${b}`;
      }
      function x(t) {
        return t.endsWith(f) ? t : t + "@g.us";
      }
      function B() {
        return f;
      }
      function T(t) {
        if (t.endsWith(b)) return t.slice(0, -b.length);
        if (t.endsWith(h)) return t.slice(0, -h.length);
        if (t.endsWith(C)) return t.slice(0, -C.length);
        throw new Error(`userIdFromJid called with non-user jid "${t}"`);
      }
      function N(t, e) {
        return `${T(t)}:${e}${b}`;
      }
      function M(t) {
        return t.split("@")[0];
      }
      function j(t) {
        return (function (t) {
          var e = t.split("@")[0].split(":"),
            n = e[0],
            r = e[1];
          return { userId: n, deviceID: parseInt(r, 10) };
        })(t).deviceID;
      }
      function L(t) {
        if (!t.endsWith(b))
          throw new Error(`phoneNumberFromJid called with non-user jid "${t}"`);
        return t.slice(0, -b.length);
      }
      function G(t) {
        return t.endsWith(b) ? t : null;
      }
      function R(t) {
        return t === l ? null : t;
      }
      function $(t) {
        return t === l ? l : null;
      }
      function K(t) {
        var e = t.split("@"),
          n = e[0],
          r = e[1];
        return `${(n = (n = n.split(":")[0]).split(".")[0])}@${r}`;
      }
      function U(t) {
        return K(t);
      }
      function F(t) {
        return `${T(t)}:${a}${b}`;
      }
      function q(t) {
        return (function (t, e) {
          return `${(function (t) {
            if (!t.endsWith(C))
              throw new Error(
                `lidFromLidUserJid called with non-LidUserJid "${t}"`
              );
            return t.slice(0, -C.length);
          })(t)}:${e}${C}`;
        })(t, a);
      }
      function z(t) {
        return j(t) === a;
      }
      function W(t) {
        return t;
      }
      function J(t) {
        var e = t.split("@"),
          n = i()(e, 2),
          r = n[0],
          o = n[1],
          u = r.split(":"),
          a = i()(u, 2),
          s = a[0],
          c = a[1],
          l = s.split("."),
          f = i()(l, 2);
        return { user: f[0], device: c, agent: f[1], server: o };
      }
      function H(t) {
        var e = J(t),
          n = e.user,
          r = e.agent,
          i = void 0 === r ? "0" : r,
          o = e.device;
        return `${n}.${i}:${void 0 === o ? "0" : o}@${e.server}`;
      }
      function V(t) {
        switch (t.jidType) {
          case "lidUser":
          case "msgrUser":
          case "phoneUser":
            return t.userJid;
          case "group":
            return t.groupJid;
          case "status":
            return t.statusJid;
          case "lidDevice":
          case "msgrDevice":
          case "phoneDevice":
            return t.deviceJid;
          case "broadcast":
            return t.broadcastJid;
          case "call":
            return t.callJid;
          default:
            return (0, u.a)(t.jidType);
        }
      }
      function Y(t) {
        return t === l
          ? { jidType: "status", statusJid: l }
          : k.test(t)
          ? { jidType: "phoneUser", userJid: t }
          : v.test(t)
          ? { jidType: "msgrUser", userJid: t }
          : m.test(t)
          ? {
              jidType: "msgrUser",
              userJid: ((e = t.substr(0, t.indexOf(":"))), `${e}${h}`),
            }
          : w.test(t)
          ? { jidType: "phoneDevice", deviceJid: t }
          : g.test(t)
          ? { jidType: "msgrDevice", deviceJid: t }
          : d.test(t)
          ? { jidType: "group", groupJid: t.endsWith(f) ? t : t + "@g.us" }
          : I.test(t)
          ? { jidType: "broadcast", broadcastJid: t }
          : O.test(t)
          ? { jidType: "call", callJid: t }
          : S.test(t)
          ? { jidType: "lidUser", userJid: t }
          : A.test(t)
          ? { jidType: "lidDevice", deviceJid: t }
          : { jidType: "unknown" };
        var e;
      }
      function X(t) {
        return null ==
          ((e = t).endsWith(b) || e.endsWith(h) || e.endsWith(C) ? e : null)
          ? t
          : null;
        var e;
      }
      function Z(t) {
        var e = J(t),
          n = e.user,
          r = e.device;
        return `${n}:${void 0 === r ? "0" : r}@${e.server}`;
      }
      function Q(t) {
        if (t.endsWith(f)) return t.slice(0, -f.length);
        throw new Error(`groupId called with non-group jid "${t}"`);
      }
      function tt(t) {
        var e = Y(t);
        return "unknown" === e.jidType
          ? t
          : "status" === e.jidType
          ? e.statusJid
          : (e.jidType,
            V(e).replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3"));
      }
      function et(t) {
        return t.includes("@") ? t.replace(P, tt) : t;
      }
      function nt(t) {
        return t.endsWith(f) ? t : null;
      }
      function rt(t, e) {
        if (t.endsWith(b)) return e.user(t);
        if (null != nt(t)) return e.group(t);
        throw new Error("Can not switch on chat jid " + t);
      }
      function it(t, e) {
        return t === l ? e.status() : rt(t, { user: e.user, group: e.group });
      }
      function ot(t, e) {
        return t === l
          ? e.multicast(l)
          : rt(t, { user: e.user, group: e.multicast });
      }
      function ut(t) {
        return `${T(t)}:${a}${(function (t) {
          if (t.endsWith(b)) return b;
          if (t.endsWith(h)) return h;
          if (t.endsWith(C)) return C;
          throw new Error(`userDomainFromJid called with non-user jid "${t}"`);
        })(t)}`;
      }
      function at(t) {
        var e = "msgr" === t.platform ? h : b;
        return {
          toUserJid: function (t) {
            return `${t}${e}`;
          },
          getUserDomain: function () {
            return e;
          },
          getGroupCallDomain: function () {
            return "@call";
          },
        };
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "y", function () {
        return o;
      }),
        n.d(e, "A", function () {
          return u;
        }),
        n.d(e, "u", function () {
          return a;
        }),
        n.d(e, "C", function () {
          return s;
        }),
        n.d(e, "M", function () {
          return c;
        }),
        n.d(e, "v", function () {
          return l;
        }),
        n.d(e, "E", function () {
          return f;
        }),
        n.d(e, "z", function () {
          return d;
        }),
        n.d(e, "w", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "j", function () {
          return g;
        }),
        n.d(e, "l", function () {
          return v;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "q", function () {
          return y;
        }),
        n.d(e, "T", function () {
          return b;
        }),
        n.d(e, "U", function () {
          return _;
        }),
        n.d(e, "Q", function () {
          return w;
        }),
        n.d(e, "P", function () {
          return k;
        }),
        n.d(e, "N", function () {
          return C;
        }),
        n.d(e, "O", function () {
          return E;
        }),
        n.d(e, "f", function () {
          return S;
        }),
        n.d(e, "a", function () {
          return A;
        }),
        n.d(e, "K", function () {
          return I;
        }),
        n.d(e, "J", function () {
          return O;
        }),
        n.d(e, "p", function () {
          return P;
        }),
        n.d(e, "L", function () {
          return D;
        }),
        n.d(e, "n", function () {
          return x;
        }),
        n.d(e, "b", function () {
          return B;
        }),
        n.d(e, "r", function () {
          return T;
        }),
        n.d(e, "g", function () {
          return N;
        }),
        n.d(e, "e", function () {
          return M;
        }),
        n.d(e, "d", function () {
          return j;
        }),
        n.d(e, "o", function () {
          return L;
        }),
        n.d(e, "H", function () {
          return G;
        }),
        n.d(e, "I", function () {
          return R;
        }),
        n.d(e, "m", function () {
          return $;
        }),
        n.d(e, "x", function () {
          return K;
        }),
        n.d(e, "h", function () {
          return U;
        }),
        n.d(e, "t", function () {
          return F;
        }),
        n.d(e, "s", function () {
          return q;
        }),
        n.d(e, "D", function () {
          return z;
        }),
        n.d(e, "B", function () {
          return W;
        }),
        n.d(e, "G", function () {
          return J;
        }),
        n.d(e, "F", function () {
          return H;
        }),
        n.d(e, "R", function () {
          return V;
        }),
        n.d(e, "S", function () {
          return Y;
        }),
        n.d(e, "i", function () {
          return X;
        });
      var r = n(3),
        i = n(10),
        o = 90,
        u = 25,
        a = 139,
        s = 6,
        c = 5,
        l = 80,
        f = 48,
        d = 10,
        h = 10,
        p = 3,
        g = 4,
        v = "https://www.google.com/maps/search/",
        m = "https://www.google.com/maps/place/",
        y = "https://www.jiocloud.com/s/?t=",
        b = "https://wa.me/",
        _ = "whatsapp://",
        w = r.b,
        k = 700,
        C = 100,
        E = 10,
        S = "composeBox",
        A = "#075e54",
        I = "error.reboot",
        O = 600,
        P = "wa-info-1",
        D = "wa-signal-1",
        x = "wa-hsm-1",
        B = "wa-avatars-1",
        T = "wa-jobs-1",
        N = "wa-content-1",
        M = "wa-chunks-1",
        j = "91",
        L = { iso: "IN", cc: j },
        G = 4,
        R = 2,
        $ = 10,
        K = 30,
        U = 14 * r.b,
        F = (r.b, 3),
        q = F * i.b,
        z = "application/octet-stream",
        W = 30 * r.b,
        J = r.b,
        H = [
          { key: "DefaultPsId", keyHashInt: 113760892, rotationPeriodDays: -1 },
          { key: "IdPreMetrics", keyHashInt: 56300709, rotationPeriodDays: -1 },
          { key: "IdTtl90Days", keyHashInt: 37887164, rotationPeriodDays: 90 },
          { key: "IdTtlDaily", keyHashInt: 248614979, rotationPeriodDays: 1 },
          {
            key: "IdTtlMonthly",
            keyHashInt: 191000728,
            rotationPeriodDays: 30,
          },
          { key: "IdTtlWeekly", keyHashInt: 42196056, rotationPeriodDays: 7 },
        ],
        V = 20 * i.b,
        Y = 20210210,
        X = 0;
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r.a;
      }),
        n.d(e, "h", function () {
          return r.d;
        }),
        n.d(e, "g", function () {
          return r.c;
        }),
        n.d(e, "e", function () {
          return r.b;
        }),
        n.d(e, "D", function () {
          return r.m;
        }),
        n.d(e, "E", function () {
          return r.n;
        }),
        n.d(e, "o", function () {
          return r.e;
        }),
        n.d(e, "d", function () {
          return i.c;
        }),
        n.d(e, "p", function () {
          return i.f;
        }),
        n.d(e, "c", function () {
          return i.b;
        }),
        n.d(e, "b", function () {
          return i.a;
        }),
        n.d(e, "n", function () {
          return i.e;
        }),
        n.d(e, "m", function () {
          return o;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "k", function () {
          return a;
        }),
        n.d(e, "l", function () {
          return u;
        }),
        n.d(e, "A", function () {
          return l;
        }),
        n.d(e, "G", function () {
          return f;
        }),
        n.d(e, "s", function () {
          return d.f;
        }),
        n.d(e, "r", function () {
          return d.c;
        }),
        n.d(e, "u", function () {
          return d.h;
        }),
        n.d(e, "x", function () {
          return d.p;
        }),
        n.d(e, "z", function () {
          return d.r;
        }),
        n.d(e, "t", function () {
          return d.g;
        }),
        n.d(e, "v", function () {
          return d.j;
        }),
        n.d(e, "w", function () {
          return d.k;
        }),
        n.d(e, "F", function () {
          return d.v;
        }),
        n.d(e, "C", function () {
          return d.u;
        }),
        n.d(e, "B", function () {
          return d.t;
        }),
        n.d(e, "i", function () {
          return d.a;
        }),
        n.d(e, "j", function () {
          return d.b;
        }),
        n.d(e, "y", function () {
          return h.a;
        }),
        n.d(e, "q", function () {
          return p;
        });
      var r = n(39),
        i = n(196),
        o = ["HOME", "WORK"],
        u = [
          "TEL",
          "EMAIL",
          "URL",
          "ADR",
          "_IM",
          "X-ABLabel",
          "X-ABADR",
          "N",
          "FN",
          "NICKNAME",
          "VERSION",
          "X-PHONETIC-FIRST-NAME",
          "X-PHONETIC-LAST-NAME",
          "X-WA-BIZ-NAME",
          "ORG",
          "TITLE",
          "BDAY",
          "PHOTO",
        ],
        a = [
          "HOME",
          "WORK",
          "CELL",
          "IPHONE",
          "MAIN",
          "PAGER",
          "_HOMEFAX",
          "_WORKFAX",
        ],
        s = ["fax-home", "fax-office"],
        c = 0;
      function l() {
        return ++c;
      }
      function f(t, e, n) {
        var r, i;
        switch (e.type) {
          case "ADD_GROUP_PARTICIPANTS":
          case "GROUP_INFO":
          case "GROUP_INFO_CHANGE_SUBJECT":
          case "GROUP_INFO_CHANGE_DESCRIPTION":
          case "GROUP_INFO_PARTICIPANTS":
          case "GROUP_INFO_INVITATIONS":
          case "MESSAGE_ADMIN":
            return e.props.chat.id === n;
          case "MEDIA_DRAWER":
            return (null == (r = e.props.useCase.chat) ? void 0 : r.id) === n;
          case "FEATURED_MESSAGES":
            return (null == (i = e.props.chat) ? void 0 : i.id) === n;
          case "SEND_MEDIA":
            var o = t.chatlist.chats[n];
            return e.props.jid === o.jid;
          default:
            return !1;
        }
      }
      n(130);
      var d = n(59),
        h = n(362),
        p = Object.freeze({
          TRIGGERED: 0,
          FETCHED: 1,
          BANNER_SHOW: 2,
          NON_BLOCKING_MODAL_SHOW: 3,
          BLOCKING_MODAL_SHOW: 4,
          EXPIRED: 5,
        });
    },
    function (t, e, n) {
      n.d(e, "g", function () {
        return u;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return f;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n(34),
        i = n(3),
        o = n(91),
        u = {
          createGroup: (t) => `createGroup-${t.title}-${t.timestamp}`,
          setGroupSubject: (t) => t.groupJid,
          setGroupDescription: (t) => t.groupJid,
          setGroupPicture: (t) => t.jid,
          setProfilePicture: () => "setProfilePicture",
          setProfileName: () => "setProfileName",
          setAbout: () => "setAbout",
          setGroupParticipants: (t) => t.groupJid,
          setOneToOneEphemeralSetting: (t) => t.userJid,
          setGroupEphemeralSetting: (t) => t.groupJid,
        };
      function a(t) {
        return u.hasOwnProperty(t);
      }
      function s(t, e) {
        return c(t, e);
      }
      function c(t, e) {
        return u.hasOwnProperty(t) ? u[t](e) : void 0;
      }
      var l = {
        createGroup: (t) => {
          var e;
          return "no-network" === (null == (e = t.error) ? void 0 : e.reason)
            ? 24 * i.b
            : 0;
        },
        setGroupDescription: (t) => ("success" !== t ? i.b : 0),
        setGroupSubject: (t) => ("success" !== t ? i.b : 0),
        setGroupPicture: (t) => (null != t ? i.b : 0),
        setProfilePicture: (t) => (null != t ? i.b : 0),
        setAbout: (t) => (null != t ? i.b : 0),
      };
      function f(t, e) {
        return l.hasOwnProperty(t) ? l[t](e) : void 0;
      }
      function d() {
        return {
          initializeCallLog: "NOOP",
          rehydrateHsm: "NOOP",
          queryGroupInvite: "NOOP",
        };
      }
      var h = {
        updateGeneralSettings: (t) => ({
          type: "updateGeneralSettings",
          args: t,
        }),
        getPrivacySettings: () => ({ type: "getPrivacySettings", args: {} }),
        initLocalSettingsFromServer: () => ({
          type: "initLocalSettingsFromServer",
          args: {},
          uniqKey: "initLocalSettingsFromServer",
        }),
        updateServerWhitelist: () => ({
          type: "updateServerWhitelist",
          args: {},
        }),
        setStatusSettings: (t) => ({ type: "setStatusSettings", args: t }),
        createGroup: (t, e, n, i, o) => ({
          type: "createGroup",
          args: {
            title: t,
            participants: e,
            blob: n,
            key: (0, r.l)(8),
            timestamp: i,
            expiration: o,
          },
        }),
        addGroupParticipants: (t, e) => ({
          type: "addGroupParticipants",
          args: { groupJid: t, participants: e },
        }),
        demoteGroupParticipants: (t, e) => ({
          type: "demoteGroupParticipants",
          args: { groupJid: t, participants: e },
        }),
        promoteGroupParticipants: (t, e) => ({
          type: "promoteGroupParticipants",
          args: { groupJid: t, participants: e },
        }),
        removeGroupParticipants: (t, e) => ({
          type: "removeGroupParticipants",
          args: { groupJid: t, participants: e },
        }),
        revokeGroupInvitations: (t, e) => ({
          type: "revokeGroupInvitations",
          args: { groupJid: t, invitations: e },
        }),
        revokeGroupInviteCode: (t) => ({
          type: "revokeGroupInviteCode",
          args: { groupJid: t },
        }),
        setGroupSubject: (t, e) => ({
          type: "setGroupSubject",
          args: { groupJid: t, subject: e },
          uniqKey: u.setGroupSubject({ groupJid: t }),
        }),
        setGroupDescription: (t, e) => ({
          type: "setGroupDescription",
          args: { groupJid: t, description: e },
          uniqKey: u.setGroupDescription({ groupJid: t }),
        }),
        setGroupEphemeralSetting: (t, e) => ({
          type: "setGroupEphemeralSetting",
          args: { groupJid: t, expiration: e },
          uniqKey: t,
        }),
        setGroupLocked: (t, e) => ({
          type: "setGroupLocked",
          args: { groupJid: t, locked: e },
        }),
        setGroupParticipants: (t, e) => ({
          type: "setGroupParticipants",
          args: { groupJid: t, adminOnly: e },
        }),
        setGroupAnnouncement: (t, e) => ({
          type: "setGroupAnnouncement",
          args: { groupJid: t, announcement: e },
        }),
        setOneToOneEphemeralSetting: (t, e, n) => ({
          type: "setOneToOneEphemeralSetting",
          args: {
            userJid: t,
            expiration: e,
            ephemeralSettingTimestamp: n,
            id: (0, r.l)(7),
          },
        }),
        sendEphemeralSyncResponse: (t, e, n, i) => ({
          type: "sendEphemeralSyncResponse",
          args: {
            userJid: t,
            ephemeralExpiration: e,
            ephemeralSettingTimestamp: n,
            disappearingModeInitiator: i,
            id: (0, r.l)(7),
          },
          uniqKey: `${t}-${n}`,
        }),
        joinGroupViaInvite: (t) => ({
          type: "joinGroupViaInvite",
          args: { code: t },
        }),
        acceptGroupAddRequest: (t, e, n, r) => ({
          type: "acceptGroupAddRequest",
          args: { group: t, code: e, expiration: n, admin: r },
        }),
        sendReaction: (t, e) => ({
          type: "sendReaction",
          args: { msgId: t, text: e, key: (0, r.l)(7) },
        }),
        retryReaction: (t) => ({
          type: "retryReaction",
          args: { reactionId: t },
        }),
        sendMsg: (t, e, n, i, o) => ({
          type: "sendMsg",
          args: {
            jid: t,
            content: e,
            quoted: n,
            link: o,
            remoteJid: i,
            key: (0, r.l)(7),
          },
        }),
        sendVCardMsg: (t, e, n, i) => ({
          type: "sendVCardMsg",
          args: {
            jid: t,
            content: e,
            quoted: n,
            remoteJid: i,
            key: (0, r.l)(7),
          },
        }),
        sendStatusMsg: (t, e) => ({
          type: "sendStatusMsg",
          args: { content: t, origin: e, key: (0, r.l)(7) },
        }),
        sendMediaMsg: (t, e, n, i) => ({
          type: "sendMediaMsg",
          args: {
            jid: t,
            request: e,
            quoted: n,
            remoteJid: i,
            key: (0, r.l)(7),
          },
        }),
        sendMediaMsgs: (t, e, n, i) => ({
          type: "sendMediaMsgs",
          args: {
            jids: t,
            toStatus: e,
            requests: n,
            origin: i,
            key: (0, r.l)(32),
          },
          version: 1,
        }),
        sendStatusMediaMsg: (t, e) => ({
          type: "sendStatusMediaMsg",
          args: { request: t, origin: e, key: (0, r.l)(7) },
        }),
        sendWrittenMsg: (t, e, n, r, i) => ({
          type: "sendWrittenMsg",
          args: {
            chat: e,
            rowId: t,
            outgoingTo: n,
            mediaUploaded: r,
            origin: i,
          },
          uniqKey: `${e}-${t}`,
        }),
        resendWrittenRevokeMsg: (t, e, n, r) => ({
          type: "resendWrittenRevokeMsg",
          args: { jid: e, rowId: t, originalRecipientsList: n, phash: r },
          uniqKey: `${e}-${t}`,
        }),
        senderBackfill: (t, e, n, r, i) => ({
          type: "senderBackfill",
          args: {
            rowId: t,
            jid: e,
            originalTo: n,
            ts: r,
            primaryIdentityIds: i,
          },
        }),
        forwardMsgs: (t, e, n) => ({
          type: "forwardMsgs",
          args: { msgs: t, jids: e, toStatus: n, key: (0, r.l)(32) },
        }),
        markChatAsRead: (t, e, n) => ({
          type: "markChatAsRead",
          args: { chat: t, startMsg: e, endMsg: n },
          uniqKey: JSON.stringify([t, e, n]),
        }),
        markStatusAsSeen: (t, e) => ({
          type: "markStatusAsSeen",
          args: { authorJid: t, msgId: e },
          uniqKey: e,
        }),
        starMessagesFromChat: (t, e) => ({
          type: "starMessagesFromChat",
          args: { msgIds: t, chatId: e },
        }),
        unstarMessagesFromChat: (t, e) => ({
          type: "unstarMessagesFromChat",
          args: { msgIds: t, chatId: e },
        }),
        keepMessagesFromChat: (t, e) => ({
          type: "keepMessagesFromChat",
          args: { msgIds: t, chatId: e },
        }),
        unkeepMessagesFromChat: (t, e) => ({
          type: "unkeepMessagesFromChat",
          args: { msgIds: t, chatId: e },
        }),
        blockUser: (t) => ({ type: "blockUser", args: { user: t } }),
        unblockUser: (t) => ({ type: "unblockUser", args: { user: t } }),
        getBlocklist: () => ({ type: "getBlocklist", args: {} }),
        getBlocklistV2: () => ({ type: "getBlocklistV2", args: {} }),
        setBlocklistV2: (t, e) => ({
          type: "setBlocklistV2",
          args: { jid: t, action: e },
        }),
        queryGroup: (t, e, n) => ({
          type: "queryGroup",
          args: { groupJid: t, request: e, phash: n },
        }),
        saveKeyChange: (t, e, n) => ({
          type: "saveKeyChange",
          args: { jid: t, key: (0, r.l)(8), showMsg: n },
          uniqKey: (0, r.m)(e),
        }),
        retryMsg: (t, e) => ({
          type: "retryMsg",
          args: { msgId: t, origin: e },
        }),
        downloadMedia: (t, e) => ({
          type: "downloadMedia",
          args: { msgId: t, source: e },
          uniqKey: t,
        }),
        downloadMediaThumb: (t, e) => ({
          type: "downloadMediaThumb",
          args: { msgId: t },
          uniqKey: e ? String(e) : t,
        }),
        requestReupload: (t) => ({
          type: "requestReupload",
          args: { msgId: t },
          uniqKey: t,
        }),
        reportUserSpam: (t) => ({ type: "reportUserSpam", args: t }),
        reportGroupSpam: (t) => ({ type: "reportGroupSpam", args: t }),
        markGroupAsMessaged: (t, e) => ({
          type: "markGroupAsMessaged",
          args: { chatId: t, groupJid: e },
        }),
        uploadMedia: (t, e, n, i) => ({
          type: "uploadMedia",
          args: {
            result: { dbMsg: { id: t }, chat: { jid: e }, outgoingTo: n },
            origin: i,
            backupToken: (0, r.l)(32),
            backupKey: (0, r.l)(32),
          },
          uniqKey: t,
        }),
        reuploadMedia: (t, e, n) => ({
          type: "reuploadMedia",
          args: {
            externalId: t,
            chat: e,
            requester: n,
            uploadToken: (0, r.l)(32),
          },
          uniqKey: t,
        }),
        deleteMsgsFromStorageSetting: (t) => ({
          type: "deleteMsgsFromStorageSetting",
          args: { msgIds: t },
        }),
        deleteChatMsgs: (t, e) => ({
          type: "deleteChatMsgs",
          args: { chatId: t, msgIds: e },
        }),
        revokeChatMsgs: (t, e) => ({
          type: "revokeChatMsgs",
          args: { chatJid: t, msgIds: e },
        }),
        revokeStatusMsg: (t) => ({
          type: "revokeStatusMsg",
          args: { statusMsgId: t },
          uniqKey: t,
        }),
        queryDirtyInfo: (t, e) => ({
          type: "queryDirtyInfo",
          args: { dirtyGroups: t, unsupportedDirtyBits: e },
          uniqKey: "dirty",
        }),
        deleteChat: (t, e) => ({
          type: "deleteChat",
          args: { chatId: t, retainMediaInPhoneStorage: e },
          uniqKey: String(t),
        }),
        deleteChatContents: (t, e) => ({
          type: "deleteChatContents",
          args: { chatId: t, retainMediaInPhoneStorage: e },
          uniqKey: String(t),
        }),
        clearChat: (t, e, n) => ({
          type: "clearChat",
          args: {
            chatId: t,
            retainMediaInPhoneStorage: e,
            keepStarredMessages: n,
          },
          uniqKey: String(t),
        }),
        markPlayed: (t, e) => ({
          type: "markPlayed",
          args: { msgId: t, jid: e },
          uniqKey: t,
        }),
        rotateKey: () => ({
          type: "rotateKey",
          args: {},
          uniqKey: "rotateKey",
        }),
        deleteExpiredPreKeys: (t) => ({
          type: "deleteExpiredPreKeys",
          args: { expirationDays: t },
          uniqKey: "deleteExpiredPreKeys",
        }),
        deleteExpiredDevices: () => ({
          type: "deleteExpiredDevices",
          args: {},
          uniqKey: "deleteExpiredDevices",
        }),
        fetchMissingKeysForContact: (t) => ({
          type: "fetchMissingKeysForContact",
          args: { jid: t },
          uniqKey: t,
        }),
        sendMetrics: () => ({
          type: "sendMetrics",
          args: {},
          uniqKey: "sendMetrics",
        }),
        sendAnonymousMetrics: () => ({
          type: "sendAnonymousMetrics",
          args: {},
          uniqKey: "sendAnonymousMetrics",
        }),
        removeDeadMediaContent: (t) => ({
          type: "removeDeadMediaContent",
          args: {},
          uniqKey: t,
        }),
        validateBusinessCertificate: (t) => ({
          type: "validateBusinessCertificate",
          args: { jid: t },
          uniqKey: t,
        }),
        validateBusinessMsg: (t, e) => ({
          type: "validateBusinessMsg",
          args: { chat: t, content: e },
          uniqKey: JSON.stringify([t, e.msg.author, e.msg.externalId]),
        }),
        getOwnAbout: () => ({ type: "getOwnAbout", args: {} }),
        getUserAbout: (t) => ({
          type: "getUserAbout",
          args: { jid: t },
          uniqKey: t,
        }),
        setAbout: (t) => ({
          type: "setAbout",
          args: { content: t },
          uniqKey: u.setAbout(),
        }),
        requestGdprReport: () => ({ type: "requestGdprReport", args: {} }),
        deleteGdprReport: () => ({ type: "deleteGdprReport", args: {} }),
        setTwoFactor: (t, e) => ({
          type: "setTwoFactor",
          args: { pin: t, email: e },
        }),
        changeTwoFactorPin: (t) => ({
          type: "changeTwoFactorPin",
          args: { pin: t },
        }),
        changeTwoFactorEmail: (t) => ({
          type: "changeTwoFactorEmail",
          args: { email: t },
        }),
        deleteTwoFactor: () => ({ type: "deleteTwoFactor", args: {} }),
        initializeMediaFsMeta: () => ({
          type: "initializeMediaFsMeta",
          args: {},
          uniqKey: "initializeMediaFsMeta",
        }),
        setMsgBg: (t) => ({ type: "setMsgBg", args: { msgId: t }, uniqKey: t }),
        syncDeviceList: (t) => ({ type: "syncDeviceList", args: { users: t } }),
        updateContactPHash: (t, e, n) => ({
          type: "updateContactPHash",
          args: { user: t, devices: e, serverPHash: n },
        }),
        createMissedCallLog: (t, e) => ({
          type: "createMissedCallLog",
          args: { key: t, ts: e },
        }),
        finalizeCallLog: (t, e, n, r) => ({
          type: "finalizeCallLog",
          args: { key: t, callResult: e, duration: n, bytesTransferred: r },
        }),
        deleteCallLogs: (t) => ({ type: "deleteCallLogs", args: { ids: t } }),
        clearAllCallLogs: () => ({ type: "clearAllCallLogs", args: {} }),
        queryAllGroups: () => ({
          type: "queryAllGroups",
          args: {},
          uniqKey: "queryAllGroups",
        }),
        setGroupPicture(t, e) {
          var n = { jid: t, picture: e };
          return {
            type: "setGroupPicture",
            args: n,
            uniqKey: u.setGroupPicture(n),
          };
        },
        setProfilePicture: (t) => ({
          type: "setProfilePicture",
          args: { picture: t },
          uniqKey: u.setProfilePicture(),
        }),
        setProfileName: (t) => ({
          type: "setProfileName",
          args: { pushName: t },
          uniqKey: u.setProfileName(),
        }),
        requestPreKeyDigest: () => ({
          type: "requestPreKeyDigest",
          args: {},
          uniqKey: "requestPreKeyDigest",
        }),
        quickReplyToHsm: (t, e) => ({
          type: "quickReplyToHsm",
          args: { msgId: t, selectedButtonIndex: e },
          uniqKey: `${t}-${e}`,
        }),
        updateChatWallpaper: (t, e, n) => ({
          type: "updateChatWallpaper",
          args: { chatBackgroundSettings: t, chat: e, updateAllChats: n },
          uniqKey: "updateChatWallpaper",
        }),
        convertFutureproofMessage: (t) => ({
          type: "convertFutureproofMessage",
          args: { msgId: t },
          uniqKey: t,
        }),
        processFutureProofMsgs: () => ({
          type: "processFutureProofMsgs",
          args: {},
          uniqKey: "processFutureProofMsgs",
        }),
        downloadUserNoticeContent: (t) => ({
          type: "downloadUserNoticeContent",
          args: { id: t },
        }),
        addContactToSidelist: (t) => ({
          type: "addContactToSidelist",
          args: { userJid: t },
          uniqKey: t,
        }),
        syncUserNoticeState: (t, e, n) => ({
          type: "syncUserNoticeState",
          args: { id: t, state: e, version: n },
        }),
        addRecentGif: (t, e) => ({
          type: "addRecentGif",
          args: { plaintextHash: t, request: e },
          uniqKey: t,
        }),
        addFavoriteGif: (t, e) => ({
          type: "addFavoriteGif",
          args: { plaintextHash: e, request: t },
          uniqKey: e || `${t.gifAttribution}:${t.gifId || ""}`,
        }),
        addFavoriteGifsFromChat: (t) => ({
          type: "addFavoriteGifsFromChat",
          args: { msgIds: t },
        }),
        removeFavoriteGif: (t) => ({
          type: "removeFavoriteGif",
          args: { plaintextHash: t },
          uniqKey: t,
        }),
        removeFavoriteGifFromId: (t, e) => ({
          type: "removeFavoriteGifFromId",
          args: { gifId: t, gifAttribution: e },
          uniqKey: `${e}:${t}`,
        }),
        updateTOSGatingAcceptanceStatus: (t) => ({
          type: "updateTOSGatingAcceptanceStatus",
          args: { notices: t },
        }),
        removeCompanion: (t, e) => ({
          type: "removeCompanion",
          args: { deviceId: t, reason: e },
        }),
        removeAllCompanions: (t) => ({
          type: "removeAllCompanions",
          args: { reason: t },
        }),
        refreshTrustedContactSenderToken: (t, e) => ({
          type: "refreshTrustedContactSenderToken",
          args: { jid: t, ts: e },
          uniqKey: t,
        }),
        resendTrustedContactSenderToken: (t) => ({
          type: "resendTrustedContactSenderToken",
          args: { jid: t },
          uniqKey: t,
        }),
      };
      function p(t) {
        var e = {};
        return (
          null == t ||
            t.forEach((t) => {
              var n = t.jobId,
                r = c(t.type, t.original);
              if (r) {
                var i = e[t.type] || {},
                  u =
                    t.step === o.FINISHED_JOB
                      ? {
                          key: r,
                          jobName: t.type,
                          jobId: n,
                          jobIn: t.original,
                          step: { status: "finished", result: t.current },
                        }
                      : {
                          key: r,
                          jobName: t.type,
                          jobId: n,
                          jobIn: t.original,
                          step: { status: "running" },
                        };
                (i[r] = u), (e[t.type] = i);
              }
            }),
          e
        );
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return d;
      }),
        n.d(e, "k", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return g;
        }),
        n.d(e, "l", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return m;
        }),
        n.d(e, "c", function () {
          return y;
        }),
        n.d(e, "e", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return _;
        }),
        n.d(e, "n", function () {
          return w;
        }),
        n.d(e, "f", function () {
          return k;
        }),
        n.d(e, "g", function () {
          return C;
        }),
        n.d(e, "b", function () {
          return S;
        }),
        n.d(e, "m", function () {
          return A;
        });
      var r,
        i,
        o = new Map([
          [
            "contactInfoKeptMessagesSubtitle",
            (t) => (1 === t ? t + " message" : t + " messages"),
          ],
          ["contactInfoKeptMessagesTitle", "Kept messages"],
          ["keptMessagesTitle", "Kept Messages"],
          ["noKeptMessages", "No kept messages"],
          [
            "pollsUpdateFutureproof",
            "You received a poll update. Update your version of W\ufeffh\ufeffa\ufefft\ufeffs\ufeffA\ufeffp\ufeffp to see polls.",
          ],
        ]),
        u = n(9),
        a = n.n(u);
      function s(t, e) {
        var n = "en",
          r = "US",
          i = "en",
          o = (e || self.navigator.language || "-").split("-"),
          u = a()(o, 2),
          s = u[0],
          c = u[1];
        return (
          (s = s.toLowerCase()),
          (c = c && c.toUpperCase()),
          t.includes(s + "-" + c)
            ? ((n = s), (r = c), (i = s + "-" + c))
            : t.includes(s) && ((n = s), (r = c), (i = s)),
          { lg: n, lc: r, langTag: i }
        );
      }
      var c = { ar: !0, fa: !0, ur: !0, he: !0, dv: !0, ku: !0 };
      function l(t) {
        return "number" == typeof t
          ? i.constants[t]
          : (function (t) {
              return o.get(t);
            })(t);
      }
      function f(t) {
        var e = t[t.length - 1];
        return ("number" == typeof e
          ? i.dynamics[e]
          : (function (t) {
              return o.get(t);
            })(e)
        ).apply(null, t);
      }
      function d(t) {
        return t;
      }
      function h(t) {
        if ("number" == typeof t || "string" == typeof t) return l(t);
        var e = f(t);
        return "string" == typeof e ? e : e.join("");
      }
      function p(t) {
        return "number" == typeof t || "string" == typeof t ? l(t) : f(t);
      }
      function g(t) {
        return i.translateInt(t);
      }
      function v() {
        return i.zero;
      }
      function m(t, e) {
        for (var n = [], r = h(268), i = !1, o = 0; o < t.length; o++)
          i ? n.push(r) : (i = !0), n.push(t[o]);
        return e && (i && n.push(r), n.push(h(168))), n;
      }
      function y() {
        return r.langTag;
      }
      function b(t) {
        var e;
        null != t && (e = t),
          (r = s(
            ["bn", "en", "gu", "hi", "kn", "ml", "mr", "pa", "ta", "te", "ur"],
            e
          ));
      }
      function _() {
        return (
          null == r &&
            (__LOG__(
              3
            )`Called getLgLc without having set it first; setting browser default`,
            (r = s([
              "bn",
              "en",
              "gu",
              "hi",
              "kn",
              "ml",
              "mr",
              "pa",
              "ta",
              "te",
              "ur",
            ]))),
          r
        );
      }
      function w(t) {
        i = t;
      }
      function k(t) {
        return !!c[t];
      }
      function C() {
        return k(r.lg);
      }
      var E = null;
      function S() {
        return null == E && (E = i.countries()), E;
      }
      function A(t) {
        return `⁨${t}⁩`;
      }
    },
    function (t, e, n) {
      function r() {
        return [];
      }
      function i() {
        return [];
      }
      function o(t, e) {
        return t.filter(e);
      }
      function u(t, e) {
        return h(t.map(e));
      }
      function a(t, e) {
        for (var n = t.length === e.length, r = 0; n && r < t.length; r++)
          t[r] !== e[r] && (n = !1);
        return n;
      }
      function s(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n] === e) return t;
        return t.concat([e]).sort();
      }
      function c(t, e) {
        if (t.length < e.length) return !1;
        for (var n = !0, r = 0, i = 0; n && i < e.length; i++)
          do {
            n = t[r] === e[i];
          } while (!n && ++r < t.length);
        return n;
      }
      function l(t, e) {
        for (var n = [], r = 0, i = 0; r < t.length; r++) {
          for (var o = t[r]; i < e.length && o > e[i]; ) i++;
          (i === e.length || o < e[i]) && n.push(o);
        }
        return n;
      }
      function f(t, e) {
        for (var n = [], r = 0, i = 0; r < t.length && i < e.length; ) {
          var o = t[r],
            u = e[i];
          o < u ? r++ : o === u ? (n.push(o), r++, i++) : i++;
        }
        return n;
      }
      function d(t, e) {
        for (var n = [], r = 0, i = 0; r < t.length && i < e.length; )
          t[r] < e[i]
            ? n.push(t[r++])
            : t[r] === e[i]
            ? (n.push(t[r++]), i++)
            : n.push(e[i++]);
        for (; r < t.length; ) n.push(t[r++]);
        for (; i < e.length; ) n.push(e[i++]);
        return n;
      }
      function h(t) {
        return p(t.slice().sort());
      }
      function p(t) {
        for (var e = !1, n = 0; n < t.length - 1; n++)
          t[n] === t[n + 1] && (e = !0);
        if (!e) return t;
        for (var r = [], i = 0; i < t.length - 1; i++)
          t[i] !== t[i + 1] && r.push(t[i]);
        return r.push(t[t.length - 1]), r;
      }
      function g(t) {
        return Array.from(t).sort();
      }
      function v(t, e, n) {
        for (var r = null, i = 0; !r && i < t.length; i++)
          t[i] === e && (((r = t.slice())[i] = n), (r = p(r.sort())));
        return r || t;
      }
      function m(t) {
        return [t];
      }
      function y(t) {
        return t.length < 1;
      }
      n.d(e, "f", function () {
        return r;
      }),
        n.d(e, "e", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "k", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "n", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return d;
        }),
        n.d(e, "m", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return g;
        }),
        n.d(e, "o", function () {
          return v;
        }),
        n.d(e, "l", function () {
          return m;
        }),
        n.d(e, "i", function () {
          return y;
        });
    },
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return m;
        });
      var r = n(153);
      function i(t) {
        if (!t) return {};
        var e = {};
        return (
          Object.keys(t).forEach((n) => {
            var r = t[n];
            null != r && (e[n] = r);
          }),
          e
        );
      }
      var o,
        u,
        a,
        s,
        c = n(191),
        l = n(6);
      function f() {
        return (0, l.T)() && null != s;
      }
      function d(t) {
        var e, n, r;
        (a = t),
          __LOG__(2)`initializeAbProps for ${a.type}`,
          (n = (e = l.b.get()).propExpoKeys),
          (r = e.internalExpoKeys),
          (o = n),
          (u = r || new Set()),
          (s = new (class {
            constructor(t) {
              var e = t.abKey,
                n = t.abHash,
                r = t.lastSyncTime,
                i = t.expoKeyStr,
                o = t.refresh,
                u = t.internalExpoKeys,
                a = t.propExpoKeys,
                s = t.propValues,
                c = t.overridePropValues;
              (this.Cc = null != c ? c : {}),
                (this.Cd = s),
                (this.Cf = n),
                (this.Ce = e),
                (this.Cg = r),
                (this.Ci = o),
                (this.Ch = i),
                (this.Cj = u),
                (this.Ck = a);
            }
            getAbProp(t) {
              var e;
              return null != this.Cc[t]
                ? this.Cc[t]
                : null == (e = this.Cd)
                ? void 0
                : e[t];
            }
            getHash() {
              return this.Cf;
            }
            getRefreshSecs() {
              var t;
              return null != (t = this.Ci) ? t : 86400;
            }
            overrideAbProp(t, e) {
              this.Cc[t] = e;
            }
            readAll() {
              var t = {
                abKey: this.Ce,
                hash: this.getHash(),
                refresh: this.getRefreshSecs(),
                lastSyncTime: this.Cg || 0,
              };
              if (
                (null != this.Ck && (t.propExpoKeys = this.Ck),
                null != this.Cj && (t.internalExpoKeys = this.Cj),
                null != this.Ch && (t.expoKeyStr = this.Ch),
                null != this.Cd)
              ) {
                var e = this.Cd;
                null != e &&
                  ((t.propValues = i(e)),
                  null != this.Cc &&
                    (t.propValues = Object.assign(
                      {},
                      t.propValues,
                      i(this.Cc)
                    )));
              }
              return t;
            }
            rewrite(t) {
              var e = t.abKey,
                n = t.abHash,
                r = t.lastSyncTime,
                i = t.expoKeyStr,
                o = t.refresh,
                u = t.internalExpoKeys,
                a = t.propExpoKeys,
                s = t.propValues;
              (this.Cd = s),
                (this.Cf = n),
                (this.Ce = e),
                (this.Cg = r),
                (this.Ci = o),
                (this.Ch = i),
                (this.Cj = u),
                (this.Ck = a);
            }
          })(h()));
      }
      function h() {
        var t = l.b.get(),
          e = t.hash,
          n = t.abKey,
          r = t.expoKeyStr,
          i = t.internalExpoKeys,
          o = t.lastSyncTime,
          u = t.propExpoKeys,
          a = t.propValues,
          s = t.refresh;
        return (
          t.overridePropValues,
          {
            abHash: e,
            abKey: n,
            expoKeyStr: r,
            internalExpoKeys: i,
            lastSyncTime: o,
            propExpoKeys: u,
            propValues: a,
            refresh: s,
            overridePropValues: null,
          }
        );
      }
      function p() {
        if (f())
          return l.b.flush().then(() => {
            s.rewrite(h());
          });
      }
      function g() {
        f() &&
          (s.rewrite(h()),
          "backend" !== a.type
            ? (a.type,
              a.backend.fireAndForget("backend", "syncAbCacheFromStorage", {}))
            : a.bridge.fireAndForget("event", "syncAbCacheFromStorage", {}));
      }
      function v(t, e) {
        if (!f())
          return __LOG__(3)`getAbProp: using defaults for ${t}`, (0, c.b)(t);
        var n = s.getAbProp(t);
        return (
          null == n && (n = (0, c.b)(t)),
          (function (t) {
            if (null != o && null != u) {
              var e = o,
                n = u,
                i = (0, r.a)(c.a, t),
                a = null != i ? e[i] : null;
              if (null != a) {
                var s = a;
                n.has(s) ||
                  (__LOG__(
                    2
                  )`addInternalExpoKey: config ${t} added to exposure set`,
                  n.add(s),
                  l.b.set(
                    Object.assign({}, l.b.get(), {
                      internalExpoKeys: n,
                      expoKeyStr: Array.from(n).join(","),
                    })
                  ));
              }
            }
          })(t),
          n
        );
      }
      function m(t, e) {}
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return F;
        }),
        n.d(e, "e", function () {
          return q;
        });
      var r = n(34),
        i = 65533,
        o = new Uint8Array(10),
        u = new Uint8Array(0),
        a = class t {
          constructor() {
            var e = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : u,
              r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (this.write = function () {
              for (var n = 0; n < arguments.length; n++) {
                var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                "string" == typeof r
                  ? e.writeString(r)
                  : "number" == typeof r
                  ? e.writeUint8(r)
                  : r instanceof t
                  ? e.writeBinary(r)
                  : r instanceof ArrayBuffer
                  ? e.writeBuffer(r)
                  : r instanceof Uint8Array && e.writeByteArray(r);
              }
            }),
              n instanceof ArrayBuffer
                ? ((this.Cm = new Uint8Array(n)),
                  (this.Cn = this.Cp = n.byteLength))
                : n instanceof Uint8Array &&
                  ((this.Cm = n), (this.Cn = this.Cp = n.length)),
              (this.Cq = 0),
              (this.Cr = this.Co = 0),
              (this.Cs = null),
              (this.Ct = r),
              (this.Cu = 0),
              (this.Cv = 0);
          }
          size() {
            return this.Cn - this.Co;
          }
          peek(t, e) {
            this.Cu++;
            var n = this.Co,
              r = this.Cq;
            try {
              return t(this, e);
            } finally {
              this.Cu--, (this.Co = n - (this.Cq - r));
            }
          }
          advance(t) {
            this.Cw(t);
          }
          readWithViewParser(t, e, n, r) {
            return e(this.Cx(), this.Cw(t), t, n, r);
          }
          readWithBytesParser(t, e, n, r) {
            return e(this.Cm, this.Cw(t), t, n, r);
          }
          readUint8() {
            return d(this, 1, p, !1);
          }
          readInt8() {
            return d(this, 1, p, !0);
          }
          readUint16() {
            return d(
              this,
              2,
              g,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readInt32() {
            return d(
              this,
              4,
              v,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readUint32() {
            return d(
              this,
              4,
              m,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readInt64() {
            return d(
              this,
              8,
              y,
              F,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readUint64() {
            return d(
              this,
              8,
              y,
              q,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readLong(t) {
            return d(
              this,
              8,
              y,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct
            );
          }
          readFloat32() {
            return d(
              this,
              4,
              b,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readFloat64() {
            return d(
              this,
              8,
              _,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Ct
            );
          }
          readVarInt(t) {
            var e = h(this, 0, w, this.size());
            return h(this, e, k, t);
          }
          readBuffer() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.size();
            return 0 === t ? new ArrayBuffer(0) : h(this, t, C);
          }
          readByteArray() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.size();
            return 0 === t ? new Uint8Array(0) : h(this, t, E);
          }
          readBinary() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.size(),
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.Ct;
            if (0 === e) return new t(void 0, n);
            var r = h(this, e, E);
            return new t(r, n);
          }
          indexOf(t) {
            if (0 === t.length) return 0;
            for (
              var e = this.Cm, n = this.Cn, r = this.Co, i = 0, o = r, u = r;
              u < n;
              u++
            )
              if (e[u] === t[i]) {
                if ((0 === i && (o = u), ++i === t.byteLength))
                  return u - r - t.byteLength + 1;
              } else i > 0 && ((i = 0), (u = o));
            return -1;
          }
          readString(t) {
            return h(this, t, S);
          }
          ensureCapacity(t) {
            this.Cy(this.Co + t);
          }
          ensureAdditionalCapacity(t) {
            this.Cy(this.Cp + t);
          }
          writeToView(t, e, n, r) {
            var i = this.Cz(t);
            return e(this.Cx(), i, t, n, r);
          }
          writeToBytes(t, e, n, r) {
            var i = this.Cz(t);
            return e(this.Cm, i, t, n, r);
          }
          writeUint8(t) {
            K(t, 0, 256, "uint8"), I(this, 1, O, t, !1);
          }
          writeInt8(t) {
            K(t, -128, 128, "signed int8"), I(this, 1, O, t, !0);
          }
          writeUint16(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, 0, 65536, "uint16"), A(this, 2, P, t, e);
          }
          writeInt16(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, -32768, 32768, "signed int16"), A(this, 2, D, t, e);
          }
          writeUint32(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, 0, 4294967296, "uint32"), A(this, 4, x, t, e);
          }
          writeInt32(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, -2147483648, 2147483648, "signed int32"), A(this, 4, B, t, e);
          }
          writeUint64(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, 0, 0x10000000000000000, "uint64"), A(this, 8, T, t, e);
          }
          writeInt64(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct;
            K(t, -0x8000000000000000, 0x8000000000000000, "signed int64"),
              A(this, 8, T, t, e);
          }
          writeFloat32(t) {
            A(
              this,
              4,
              N,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct
            );
          }
          writeFloat64(t) {
            A(
              this,
              8,
              M,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct
            );
          }
          writeVarInt(t) {
            K(
              t,
              -0x8000000000000000,
              0x8000000000000000,
              "varint (signed int64)"
            );
            var e = t < 0,
              n = e ? -t : t,
              r = Math.floor(n / 4294967296),
              i = n - 4294967296 * r;
            e && ((r = ~r), 0 === i ? r++ : (i = -i)),
              I(this, $(r, i), j, r, i);
          }
          writeVarIntFromHexLong(t) {
            for (
              var e = (0, r.g)(t),
                n = e ? (0, r.j)(t) : t,
                i = (0, r.h)(n),
                o = 0,
                u = 0,
                a = 0;
              a < r.a;
              a++
            )
              (o = (o << 4) | (u >>> 28)), (u = (u << 4) | (0, r.e)(i, a));
            e && ((o = ~o), 0 === u ? o++ : (u = -u)),
              I(this, $(o, u), j, o, u);
          }
          writeBinary(t) {
            var e = t.peek((t) => t.readByteArray());
            if (e.length) {
              var n = this.Cz(e.length);
              this.Cm.set(e, n);
            }
          }
          writeBuffer(t) {
            this.writeByteArray(new Uint8Array(t));
          }
          writeByteArray(t) {
            var e = this.Cz(t.length);
            this.Cm.set(t, e);
          }
          writeBufferView(t) {
            this.writeByteArray(
              new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
            );
          }
          writeString(t) {
            I(this, l(t), L, t);
          }
          writeHexLong(t) {
            A(
              this,
              8,
              G,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Ct
            );
          }
          writeBytes() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            for (var r = 0; r < e.length; r++) K(e[r], 0, 256, "byte");
            I(this, e.length, R, e);
          }
          writeAtomically(t, e) {
            this.Cv++;
            var n = this.Cp,
              r = this.Cq;
            try {
              var i = t(this, e);
              return (n = this.Cp), (r = this.Cq), i;
            } finally {
              this.Cv--, (this.Cp = n - (this.Cq - r));
            }
          }
          writeWithVarIntLength(t, e) {
            var n = this.Cp,
              r = this.writeAtomically(t, e),
              i = this.Cp;
            this.writeVarInt(i - n);
            for (var u = this.Cp - i, a = this.Cm, s = 0; s < u; s++)
              o[s] = a[i + s];
            for (var c = i - 1; c >= n; c--) a[c + u] = a[c];
            for (var l = 0; l < u; l++) a[n + l] = o[l];
            return r;
          }
          static build() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            for (var i = 0, o = 0; o < n.length; o++) {
              var u = n[o];
              "string" == typeof u
                ? (i += l(u))
                : "number" == typeof u
                ? i++
                : u instanceof t
                ? (i += u.size())
                : u instanceof ArrayBuffer
                ? (i += u.byteLength)
                : u instanceof Uint8Array && (i += u.length);
            }
            var a = new t();
            return a.ensureCapacity(i), a.write.apply(a, arguments), a;
          }
          Cx() {
            return (
              this.Cs ||
              (this.Cs = new DataView(this.Cm.buffer, this.Cm.byteOffset))
            );
          }
          Cw(t) {
            if (t < 0)
              throw new Error(
                "ReadError: given negative number of bytes to read"
              );
            var e = this.Co,
              n = e + t;
            if (n > this.Cn)
              throw new Error(
                e === this.Cn
                  ? "ReadError: tried to read from depleted binary"
                  : "ReadError: tried to read beyond end of binary"
              );
            return (this.Co = n), this.Cu || (this.Cr = n), e;
          }
          Cy(t) {
            var e = this.Cm;
            if (t <= e.length) return t;
            var n = this.Cr,
              r = t - n,
              i = Math.max(r, 2 * (e.length - n), 64),
              o = new Uint8Array(i);
            return (
              n
                ? (o.set(e.subarray(n)),
                  (this.Cq += n),
                  (this.Co -= n),
                  (this.Cn -= n),
                  (this.Cp -= n),
                  (this.Cr = 0))
                : o.set(e),
              (this.Cm = o),
              (this.Cs = null),
              r
            );
          }
          Cz(t) {
            var e = this.Cy(this.Cp + t),
              n = this.Cp;
            return (this.Cp = e), this.Cv || (this.Cn = e), n;
          }
        },
        s = "",
        c = 0;
      function l(t) {
        if (t === s) return c;
        for (var e = t.length, n = 0, r = 0; r < e; r++) {
          var i = t.charCodeAt(r);
          if (i < 128) n++;
          else if (i < 2048) n += 2;
          else if (i < 55296 || (57344 <= i && i <= 65535)) n += 3;
          else if (55296 <= i && i < 56320 && r + 1 !== e) {
            var o = t.charCodeAt(r + 1);
            56320 <= o && o < 57344 ? (r++, (n += 4)) : (n += 3);
          } else n += 3;
        }
        return (s = t), (c = n);
      }
      function f(t, e, n) {
        var r = e >> 21;
        if (t) {
          var i = Boolean(2097151 & e || n);
          return 0 === r || (-1 === r && i);
        }
        return 0 === r;
      }
      function d(t, e, n, r, i) {
        return t.readWithViewParser(e, n, r, i);
      }
      function h(t, e, n, r, i) {
        return t.readWithBytesParser(e, n, r, i);
      }
      function p(t, e, n, r) {
        return r ? t.getInt8(e) : t.getUint8(e);
      }
      function g(t, e, n, r) {
        return t.getUint16(e, r);
      }
      function v(t, e, n, r) {
        return t.getInt32(e, r);
      }
      function m(t, e, n, r) {
        return t.getUint32(e, r);
      }
      function y(t, e, n, r, i) {
        return r(t.getInt32(i ? e + 4 : e, i), t.getInt32(i ? e : e + 4, i));
      }
      function b(t, e, n, r) {
        return t.getFloat32(e, r);
      }
      function _(t, e, n, r) {
        return t.getFloat64(e, r);
      }
      function w(t, e, n, r) {
        for (var i = Math.min(r, 10), o = 0, u = 128; o < i && 128 & u; )
          u = t[e + o++];
        if (10 === o && u > 1)
          throw new Error("ParseError: varint exceeds 64 bits");
        return 128 & u ? o + 1 : o;
      }
      function k(t, e, n, r) {
        var i = 0,
          o = 0,
          u = n;
        10 === n && (o = 1 & t[e + --u]);
        for (var a = u - 1; a >= 0; a--)
          (i = (i << 7) | (o >>> 25)), (o = (o << 7) | (127 & t[e + a]));
        return r(i, o);
      }
      function C(t, e, n) {
        var r = e + t.byteOffset,
          i = t.buffer;
        return 0 === r && n === i.byteLength ? i : i.slice(r, r + n);
      }
      function E(t, e, n) {
        return t.subarray(e, e + n);
      }
      function S(t, e, n) {
        for (var r = e + n, o = [], u = null, a = e; a < r; a++) {
          o.length > 5e3 &&
            (u || (u = []),
            u.push(String.fromCharCode.apply(String, o)),
            (o = []));
          var s = 0 | t[a];
          if (0 == (128 & s)) o.push(s);
          else if (192 == (224 & s)) {
            var c = z(t, a + 1, r);
            if (c) {
              a++;
              var l = ((31 & s) << 6) | (63 & c);
              l >= 128 ? o.push(l) : o.push(i);
            } else o.push(i);
          } else if (224 == (240 & s)) {
            var f = z(t, a + 1, r),
              d = z(t, a + 2, r);
            if (f && d) {
              a += 2;
              var h = ((15 & s) << 12) | ((63 & f) << 6) | (63 & d);
              h >= 2048 && !(55296 <= h && h < 57344) ? o.push(h) : o.push(i);
            } else f ? (a++, o.push(i)) : o.push(i);
          } else if (240 == (248 & s)) {
            var p = z(t, a + 1, r),
              g = z(t, a + 2, r),
              v = z(t, a + 3, r);
            if (p && g && v) {
              a += 3;
              var m =
                ((7 & s) << 18) | ((63 & p) << 12) | ((63 & g) << 6) | (63 & v);
              if (m >= 65536 && m <= 1114111) {
                var y = m - 65536;
                o.push(55296 | (y >> 10), 56320 | (1023 & y));
              } else o.push(i);
            } else
              p && g ? ((a += 2), o.push(i)) : p ? (a++, o.push(i)) : o.push(i);
          } else o.push(i);
        }
        var b = String.fromCharCode.apply(String, o);
        return u ? (u.push(b), u.join("")) : b;
      }
      function A(t, e, n, r, i) {
        return t.writeToView(e, n, r, i);
      }
      function I(t, e, n, r, i) {
        return t.writeToBytes(e, n, r, i);
      }
      function O(t, e, n, r) {
        t[e] = r;
      }
      function P(t, e, n, r, i) {
        t.setUint16(e, r, i);
      }
      function D(t, e, n, r, i) {
        t.setInt16(e, r, i);
      }
      function x(t, e, n, r, i) {
        t.setUint32(e, r, i);
      }
      function B(t, e, n, r, i) {
        t.setInt32(e, r, i);
      }
      function T(t, e, n, r, i) {
        var o = r < 0,
          u = o ? -r : r,
          a = Math.floor(u / 4294967296),
          s = u - 4294967296 * a;
        o && ((a = ~a), 0 === s ? a++ : (s = -s)),
          t.setUint32(i ? e + 4 : e, a, i),
          t.setUint32(i ? e : e + 4, s, i);
      }
      function N(t, e, n, r, i) {
        t.setFloat32(e, r, i);
      }
      function M(t, e, n, r, i) {
        t.setFloat64(e, r, i);
      }
      function j(t, e, n, r, i) {
        for (var o = r, u = i, a = e + n - 1, s = e; s < a; s++)
          (t[s] = 128 | (127 & u)), (u = (o << 25) | (u >>> 7)), (o >>>= 7);
        t[a] = u;
      }
      function L(t, e, n, r) {
        for (var i = e, o = r.length, u = 0; u < o; u++) {
          var a = r.charCodeAt(u);
          if (a < 128) t[i++] = a;
          else if (a < 2048)
            (t[i++] = 192 | (a >> 6)), (t[i++] = 128 | (63 & a));
          else if (a < 55296 || 57344 <= a)
            (t[i++] = 224 | (a >> 12)),
              (t[i++] = 128 | ((a >> 6) & 63)),
              (t[i++] = 128 | (63 & a));
          else if (55296 <= a && a < 56320 && u + 1 !== o) {
            var s = r.charCodeAt(u + 1);
            if (56320 <= s && s < 57344) {
              u++;
              var c = 65536 + (((1023 & a) << 10) | (1023 & s));
              (t[i++] = 240 | (c >> 18)),
                (t[i++] = 128 | ((c >> 12) & 63)),
                (t[i++] = 128 | ((c >> 6) & 63)),
                (t[i++] = 128 | (63 & c));
            } else (t[i++] = 239), (t[i++] = 191), (t[i++] = 189);
          } else (t[i++] = 239), (t[i++] = 191), (t[i++] = 189);
        }
      }
      function G(t, e, n, i, o) {
        for (
          var u = (0, r.g)(i), a = (0, r.h)(i), s = 0, c = 0, l = 0;
          l < 16;
          l++
        )
          (s = (s << 4) | (c >>> 28)), (c = (c << 4) | (0, r.e)(a, l));
        u && ((s = ~s), 0 === c ? s++ : (c = -c)),
          t.setUint32(o ? e + 4 : e, s, o),
          t.setUint32(o ? e : e + 4, c, o);
      }
      function R(t, e, n, r) {
        for (var i = 0; i < n; i++) t[e + i] = r[i];
      }
      function $(t, e) {
        var n, r;
        for (t ? ((n = 5), (r = t >>> 3)) : ((n = 1), (r = e >>> 7)); r; )
          n++, (r >>>= 7);
        return n;
      }
      function K(t, e, n, r) {
        if (
          "number" != typeof t ||
          t != t ||
          Math.floor(t) !== t ||
          t < e ||
          t >= n
        )
          throw new TypeError(
            "string" == typeof t
              ? `WriteError: string "${t}" is not a valid ${r}`
              : `WriteError: ${String(t)} is not a valid ${r}`
          );
      }
      function U(t, e, n) {
        var r =
          4294967296 * (e >= 0 || t ? e : 4294967296 + e) +
          (n >= 0 ? n : 4294967296 + n);
        if (!f(t, e, n))
          throw new Error(`ReadError: integer exceeded 53 bits (${r})`);
        return r;
      }
      function F(t, e) {
        return U(!0, t, e);
      }
      function q(t, e) {
        return U(!1, t, e);
      }
      function z(t, e, n) {
        if (e >= n) return 0;
        var r = 0 | t[e];
        return 128 == (192 & r) ? r : 0;
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return u;
        });
      var r = {
        BLOCKED: "BLOCKLIST_DB_KEY",
        BLOCKLIST_DHASH: "BLOCKLIST_DHASH",
        GROUP_INVITE_REVOKES: "GRP_INV_RVK_DB_KEY",
        APPWRITE_META_KEY: "lastAppWrite",
        REGISTERED: "REGISTERED_DB_KEY",
        INVALID_CONTACTS: "INVALID_CONTACTS_DB_KEY",
        STATUS_PRIVACY_META_KEY: "status",
        STATUS_MMS_THUMB_LAST_CHECKED: "STATUS_MMS_THUMB_LAST_CHECKED",
        PSA_STATUS_META_KEY: "statusPSA",
        DELETED_MEDIA: "DELETED_MEDIA",
        RECENT_EMOJIS: "RECENT_EMOJIS",
        WAM_CHATS_CACHE: "WAM_CHATS_CACHE",
        EPHEMERAL_UPGRADE_TS: "EPHEMERAL_UPGRADE_TS",
        EPHEMERAL_QUERIED_GROUP_SETTINGS: "EPHEMERAL_QUERIED_GROUP_SETTINGS",
        USER_NOTICE: "USER_NOTICE",
        RECENT_GIFS: "RECENT_GIFS",
        ADV_COMPANION_INFO: "ADV_COMPANIONS",
        DELETE_EXPIRED_DEVICES_JOB: "DELETE_EXPIRED_DEVICES_JOB",
      };
      function i(t, e) {
        return t.get(e);
      }
      function o(t) {
        return `${r.DELETED_MEDIA}:${t}`;
      }
      function u(t, e) {
        var n = r.DELETED_MEDIA + ":",
          i = r.DELETED_MEDIA + ";";
        return t.where("key").between(n, i, !1, !1).limit(e).toArray();
      }
    },
    function (t, e) {
      function n(t, e, n, r, i, o, u) {
        try {
          var a = t[o](u),
            s = a.value;
        } catch (t) {
          return void n(t);
        }
        a.done ? e(s) : Promise.resolve(s).then(r, i);
      }
      t.exports = function (t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var u = t.apply(e, r);
            function a(t) {
              n(u, i, o, a, s, "next", t);
            }
            function s(t) {
              n(u, i, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      };
    },
    ,
    ,
    ,
    function (t, e) {
      t.exports = function (t) {
        throw new Error(
          "Impossible value, the default statement should never be reached for value: " +
            t
        );
      };
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "l", function () {
          return u;
        }),
        n.d(e, "m", function () {
          return a;
        }),
        n.d(e, "n", function () {
          return s;
        }),
        n.d(e, "k", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return m;
        }),
        n.d(e, "g", function () {
          return y;
        }),
        n.d(e, "i", function () {
          return b;
        }),
        n.d(e, "j", function () {
          return _;
        });
      var r = 16,
        i = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70],
        o = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
      function u(t) {
        var e = new Uint8Array(t);
        return self.crypto.getRandomValues(e), a(e);
      }
      function a(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          e.push(i[r >> 4], i[15 & r]);
        }
        return String.fromCharCode.apply(String, e);
      }
      function s(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          e.push(o[r >> 4], o[15 & r]);
        }
        return String.fromCharCode.apply(String, e);
      }
      function c(t) {
        var e = f(t);
        if (e.length % 2 != 0)
          throw new Error(
            `parseHex given hex "${e}" which is not a multiple of 8-bits.`
          );
        for (
          var n = new Uint8Array(e.length >> 1), r = 0, i = 0;
          r < e.length;
          r += 2, i++
        )
          n[i] = (l(e, r) << 4) | l(e, r + 1);
        return n.buffer;
      }
      function l(t, e) {
        var n = t.charCodeAt(e);
        return n <= 57 ? n - 48 : n <= 70 ? 10 + n - 65 : 10 + n - 97;
      }
      function f(t) {
        if (/[^0-9a-fA-F]/.test(t))
          throw new Error(`"${t}" is not a valid hex`);
        return t;
      }
      function d(t) {
        var e = t.buffer;
        return 0 === t.byteOffset && t.length === e.byteLength
          ? e
          : e.slice(t.byteOffset, t.byteOffset + t.length);
      }
      function h(t) {
        for (var e = !0, n = t.length; e && n; ) {
          var r = t[--n];
          e = 32 <= r && r < 127;
        }
        return e ? JSON.stringify(String.fromCharCode.apply(String, t)) : a(t);
      }
      function p(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = k(t),
          i = k(e);
        return `${n ? "-" : ""}0x${r}${i}`;
      }
      function g(t, e) {
        for (var n = e - t.length, r = t, i = 0; i < n; i++) r = "0" + r;
        return r;
      }
      function v(t) {
        var e = t < 0;
        return (function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = f(t);
          return w(n, r), `${e ? "-" : ""}0x${g(n, r)}`;
        })(e ? (-t).toString(16) : t.toString(16), e);
      }
      function m(t) {
        return t.substring(t.indexOf("0x") + 2);
      }
      function y(t) {
        return "-" === t[0];
      }
      function b(t, e) {
        var n = y(t);
        if (n !== y(e)) return !n;
        var r = m(t) > m(e);
        return n ? !r : r;
      }
      function _(t) {
        return y(t) ? t.slice(1) : "-" + t;
      }
      function w(t, e) {
        if (t.length > e)
          throw new Error(`"${t}" is longer than ${4 * e} bits.`);
      }
      function k(t) {
        if (t > 4294967295 || t < -4294967296)
          throw new Error("uint32ToLowerCaseHex given number over 32 bits");
        return g((t >= 0 ? t : 4294967296 + t).toString(16), 8);
      }
    },
    function (t, e, n) {
      n.d(e, "j", function () {
        return l;
      }),
        n.d(e, "i", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return g;
        }),
        n.d(e, "f", function () {
          return _;
        }),
        n.d(e, "g", function () {
          return w;
        }),
        n.d(e, "b", function () {
          return k;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "k", function () {
          return A;
        });
      var r = n(27),
        i = n.n(r),
        o = n(9),
        u = n.n(o),
        a = n(10),
        s = n(82),
        c = n(95);
      function l(t, e) {
        return new Promise((n, r) => {
          var i = e.responseType,
            o = e.headers,
            u = e.overrideMimeType,
            a = new XMLHttpRequest({ mozSystem: !0 });
          if (
            (a.open("GET", t),
            a.setRequestHeader("User-Agent", "WhatsApp/2.2218.5 K"),
            (a.responseType = i),
            o)
          )
            for (var s in o)
              try {
                a.setRequestHeader(s, o[s]);
              } catch (t) {
                return (
                  __LOG__(
                    4
                  )`Tried to set an incorrect header value in privileged request`,
                  SEND_LOGS("privileged-request-incorrect-header"),
                  void r(t)
                );
              }
          u && a.overrideMimeType(u),
            (a.onprogress = (t) => {
              if (null != e.maxSize) {
                if (t.total > e.maxSize && !e.keepPartial)
                  return (
                    r(new Error("Requested resource was too large")),
                    void a.abort()
                  );
                t.loaded > e.maxSize &&
                  (e.keepPartial
                    ? n({ response: a.response, responseURL: a.responseURL })
                    : r(new Error("Requested resource was too large")),
                  a.abort());
              }
            }),
            (a.onload = () => {
              200 === a.status &&
                n({ response: a.response, responseURL: a.responseURL }),
                r(new Error(`mozHttp.getRequest onerror(${a.statusText})`));
            }),
            (a.onerror = () => {
              r(new Error(`mozHttp.getRequest onerror(${a.statusText})`));
            }),
            a.send();
        });
      }
      function f(t) {
        var e = (function (t) {
          var e = t.toLowerCase();
          return e.startsWith("https://") || e.startsWith("http://");
        })(t)
          ? t
          : "https://" + t;
        try {
          return new URL(e);
        } catch (t) {
          __LOG__(4)`Failed to create Url ${e}: ${t}`;
        }
      }
      function d(t) {
        var e = f(t);
        if (e) return e.hostname;
      }
      var h = {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        REQUEST_TIMEOUT: 408,
        GONE: 410,
        PAYLOAD_TOO_LARGE: 413,
        UNSUPPORTED_MEDIA_TYPE: 415,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        INSUFFICIENT_STORAGE: 507,
      };
      function p(t, e, n) {
        if (!/^https:\/\/[-\w.]+\.\w+$/.test(t))
          throw new Error(`buildUrl given invalid host "${t}"`);
        if (!e.startsWith("/"))
          throw new Error(`buildUrl given invalid path "${e}"`);
        var r = n,
          i = `${t}${e}`;
        if (!r) return i;
        var o = Object.keys(r).map((t) => {
          var e = r[t];
          e instanceof ArrayBuffer && (e = new Uint8Array(e));
          var n =
            e instanceof Uint8Array
              ? Array.prototype.slice
                  .call(e)
                  .map((t) => "%" + t.toString(16))
                  .join("")
              : encodeURIComponent(e.toString());
          return `${encodeURIComponent(t)}=${n}`;
        });
        if (o.length > 0) {
          var u = o.join("&");
          return i.includes("?") ? `${i}&${u}` : `${i}?${u}`;
        }
        return i;
      }
      function g(t) {
        if (!t.startsWith("https://")) throw new Error("Non-https url " + t);
        return t;
      }
      function v(t, e, n) {
        var r;
        return (
          (r = 0 === t ? 0 : Math.pow(2, t)) > e && (r = e),
          n && (r *= 1 + n * Math.random()),
          r
        );
      }
      function m(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.1;
        return (0, c.a)(Math.floor(1e3 * v(t, e, n)));
      }
      var y = 180,
        b = 0.1;
      function _(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = e.max,
          i = void 0 === r ? 10 : r;
        function o(e) {
          return fetch(t, n).catch((t) => (e < i ? u(e) : Promise.reject(t)));
        }
        function u(t) {
          var e = t + 1;
          return m(e, y, b).then(() => o(e));
        }
        return Promise.resolve(o(0));
      }
      function w(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = e.max,
          i = void 0 === r ? 10 : r;
        function o(e) {
          return fetch(t, n)
            .then((t) =>
              t.ok
                ? t.blob()
                : Promise.reject(
                    new s.a("fetchRetryBlob: fail status " + t.status, t.status)
                  )
            )
            .catch((t) =>
              t instanceof s.a && t.code >= 400 && t.code < 500
                ? Promise.reject(t)
                : e < i
                ? u(e)
                : Promise.reject(t)
            );
        }
        function u(t) {
          var e = t + 1;
          return m(e, y, b).then(() => o(e));
        }
        return Promise.resolve(o(0));
      }
      function k(t) {
        return (0, a.v)(t)
          .map((t) => {
            var e = u()(t, 2),
              n = e[0],
              r = e[1];
            return `${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
          })
          .join("&");
      }
      function C(t, e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = i()(function* (t, e) {
          var n, r;
          try {
            n = yield S(t, e);
          } catch (t) {
            return (
              __LOG__(2)`doPostRequest network error ${t}`,
              { type: "network-error" }
            );
          }
          if (
            (__LOG__(2)`doPostRequest http status ${n.status}`,
            n.status !== h.OK)
          )
            return { type: "http-error", code: n.status };
          try {
            r = yield n.json();
          } catch (t) {
            return (
              __LOG__(2)`doPostRequest network error on body ${t}`,
              { type: "body-network-error" }
            );
          }
          return { type: "ok", json: r };
        })).apply(this, arguments);
      }
      function S(t, e) {
        var n;
        return new Promise((r, i) => {
          (n = new XMLHttpRequest({ mozSystem: !0 })).open("POST", t),
            (n.onload = r),
            (n.onerror = () => {
              i(new Error(`mozHttp.getRequest onerror(${n.statusText})`));
            }),
            e && e.body
              ? n.send(new Blob([e.body], { type: "text/plain" }))
              : n.send();
        }).then(() => ({
          status: n.status,
          json: () => Promise.resolve(JSON.parse(n.responseText)),
        }));
      }
      var A = function (t, e) {
        return Promise.resolve(fetch(t, e));
      };
    },
    function (t, e, n) {
      n.d(e, "k", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "j", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return v;
        }),
        n.d(e, "f", function () {
          return m;
        }),
        n.d(e, "n", function () {
          return y;
        }),
        n.d(e, "o", function () {
          return b;
        }),
        n.d(e, "i", function () {
          return _;
        }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return k;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "e", function () {
          return E;
        }),
        n.d(e, "h", function () {
          return A;
        });
      var r = n(15),
        i = n(3),
        o = n(34),
        u = n(10),
        a = n(14),
        s = n(108),
        c = n(6),
        l = n(203);
      function f(t) {
        return (
          null != t.mutedUntil &&
          ("always" === t.mutedUntil || (0, i.p)(t.mutedUntil))
        );
      }
      var d = 8,
        h = d * u.b,
        p = 127;
      function g() {
        var t = c.l.get();
        return null == t || t < 512;
      }
      function v() {
        return g() ? 5 : 10;
      }
      function m() {
        return g() ? 1280 : 1600;
      }
      function y(t, e, n) {
        var r = e[0];
        return null == r
          ? (__LOG__(4)`How did we get a VCard without any contact?`, n.onEmpty)
          : 1 === t
          ? n.onSingleContact((0, s.c)(r))
          : r.length > a.v
          ? n.onOthers(t)
          : n.onOneAndOthers(r, t - 1);
      }
      function b(t) {
        return {
          ephemeralMessagesAllowedValues: t.ephemeralMessagesAllowedValues,
          frequentlyForwardedGroupSetting: t.frequentlyForwardedGroupSetting,
          frequentlyForwardedMax: t.frequentlyForwardedMax,
          frequentlyForwardedMessages: t.frequentlyForwardedMessages,
          gifProvider: t.gifProvider,
          maxParticipants: t.maxParticipants,
          maxSubject: t.maxSubject,
          multicastLimitGlobal: t.multicastLimitGlobal,
          groupInviteSending: t.groupInviteSending,
          groupJoinPermissions: t.groupJoinPermissions,
          statusVideoMaxDuration: t.statusVideoMaxDuration,
          viewOnceRead: t.viewOnceRead,
          viewOnceWrite: t.viewOnceWrite,
          voipCallEnabled: (0, l.a)(t),
          mdBlocklistV2: t.mdBlocklistV2,
          vcardAsDocumentSizeKb: t.vcardAsDocumentSizeKb,
          vcardMaxSizeKb: t.vcardMaxSizeKb,
          userNotice: t.userNotice,
        };
      }
      function _(t, e) {
        var n = e[t];
        return null != n && "loaded" === n.status && null != n.photoId;
      }
      function w(t) {
        return t.replace(/\n/g, " ");
      }
      function k(t) {
        return t ? w(t) : t;
      }
      function C(t) {
        return t.replace(/\n{3,}/g, "\n\n");
      }
      function E(t) {
        for (
          var e = new Uint8Array((0, o.k)(t)),
            n = new Uint8Array(e.length + 1),
            r = 0,
            i = 0;
          i < e.length;
          i++
        )
          (r ^= e[i]), (n[i] = e[i]);
        return (n[e.length] = r), (0, o.m)(n);
      }
      var S = (0, u.x)(r.o);
      function A() {
        var t = Math.floor(Math.random() * S.length);
        return S[t];
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        });
      var r = n(2);
      n.d(e, "a", function () {
        return r.b;
      });
      var i = "@psa",
        o = {
          TEXT: r.f.TEXT,
          FUTUREPROOF: r.f.FUTUREPROOF,
          REVOKED: r.f.REVOKED,
          CIPHERTEXT: r.f.CIPHERTEXT,
          IMAGE: r.f.IMAGE,
          VIDEO: r.f.VIDEO,
          GIF: r.f.GIF,
        };
    },
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "m", function () {
          return s;
        }),
        n.d(e, "n", function () {
          return c;
        }),
        n.d(e, "k", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "g", function () {
          return d;
        }),
        n.d(e, "j", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return g;
        }),
        n.d(e, "l", function () {
          return v;
        }),
        n(97);
      var r = {
          MEDIUM_RED_VIOLET: 4289080433,
          WASABI: 4287670337,
          SUNDANCE: 4290879551,
          SCARLETT: 4286128440,
          BRANDY_ROSE: 4289628020,
          BRIGHT_SUN: 4293964592,
          EARLS_GREEN: 4290163495,
          PRELUDE: 4291207116,
          CE_SOIR: 4287326608,
          MONA_LISA: 4294937228,
          EMERALD: 4283744869,
          BITTERSWEET: 4294933355,
          SUMMER_SKY: 4280730844,
          MAYA_BLUE: 4283943423,
          SCORPION: 4285818730,
          BALI_HAY: 4286484643,
          CORNFLOWER_BLUE: 4283864831,
          VIVID_VIOLET: 4285408638,
          MONTE_CARLO: 4286237605,
          ELEPHANT: 4280563264,
          POLO_BLUE: 4286747850,
        },
        i = 0,
        o = {
          SENDER_BACKFILL_SENT: -7,
          INACTIVE_RECEIVED: -6,
          CONTENT_UNUPLOADABLE: -5,
          CONTENT_TOO_BIG: -4,
          CONTENT_GONE: -3,
          EXPIRED: -2,
          FAILED: -1,
          CLOCK: 0,
          SENT: 1,
          RECEIVED: 2,
          READ: 3,
          PLAYED: 4,
        },
        u = { NONE: 0, GIPHY: 1, TENOR: 2 },
        a = {
          GROUPED_WITH_PREV: 1,
          GROUPED_WITH_NEXT: 2,
          JOINED_WITH_PREV: 4,
          JOINED_WITH_NEXT: 8,
          SHOW_AUTHOR: 16,
        };
      function s(t) {
        return "voice" === t.content.type && t.content.isPtt;
      }
      function c(t) {
        return (
          ("video" === t.content.type || "image" === t.content.type) &&
          null != t.content.viewOnceState
        );
      }
      function l(t) {
        return "number" == typeof t && t >= o.SENT;
      }
      function f(t) {
        return "number" == typeof t && t >= o.READ;
      }
      function d(t) {
        return "number" == typeof t && t >= o.PLAYED;
      }
      function h(t) {
        return "number" == typeof t && t >= o.RECEIVED;
      }
      function p(t) {
        return ("number" == typeof t && t < o.CLOCK) || "number" != typeof t;
      }
      function g(t) {
        return "number" != typeof t && "receipt-error" === t.type;
      }
      function v(t) {
        return (
          "vcard" === t.type ||
          "text" === t.type ||
          "image" === t.type ||
          "sticker" === t.type ||
          "video" === t.type ||
          "gif" === t.type ||
          "voice" === t.type ||
          "location" === t.type ||
          "document" === t.type
        );
      }
    },
    function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "k", function () {
          return o;
        }),
        n.d(e, "l", function () {
          return u;
        }),
        n.d(e, "m", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "e", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return y;
        });
      var r = n(87);
      function i(t, e) {
        return e[t] || { jid: t };
      }
      function o(t) {
        return null != t.phonebookPhone;
      }
      function u(t) {
        return !t.noWhatsApp;
      }
      function a(t) {
        return null != t.phonebookPhone || !!t.messaged;
      }
      function s(t) {
        return null != t.verifiedInfo && "high" === t.verifiedInfo.level
          ? t.verifiedInfo.name
          : void 0;
      }
      function c(t, e, n) {
        return t || e || (o(n) ? void 0 : s(n));
      }
      function l(t) {
        return c(t.shortName, t.fullName, t);
      }
      function f(t) {
        return c(t.fullName, t.shortName, t);
      }
      function d(t) {
        var e, n;
        return (
          l(t) ||
          (null == (e = t.lastKnownName) ? void 0 : e.shortName) ||
          (null == (n = t.lastKnownName) ? void 0 : n.fullName)
        );
      }
      function h(t) {
        return null != t.verifiedInfo && t.verifiedInfo.isApi;
      }
      function p(t) {
        var e, n;
        return (
          h(t) &&
          (null == (e = t.verifiedInfo) || null == (n = e.bsp)
            ? void 0
            : n.host) === r.b.FB
        );
      }
      function g(t) {
        return null == t ? null : t.value || null;
      }
      function v(t) {
        return h(t) ? 3 : null != t.verifiedInfo ? 2 : 1;
      }
      var m = (0, n(180).b)((t, e) =>
        "ONE_TO_ONE" === t.type
          ? h(i(t.jid, e))
          : (t.type,
            t.groupInfo.superadmins.map((t) => i(t, e)).some((t) => h(t)))
      );
      function y(t, e) {
        return m(t, e);
      }
    },
    function (t, e, n) {
      n.d(e, "o", function () {
        return u;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return f;
        }),
        n.d(e, "n", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return g;
        }),
        n.d(e, "h", function () {
          return v;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return y;
        }),
        n.d(e, "p", function () {
          return b;
        }),
        n.d(e, "q", function () {
          return _;
        }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return k;
        });
      var r = n(192),
        i = n(40),
        o = n(57);
      function u(t, e) {
        var n = t[e];
        return (n && (0, i.b)(n)) || "‎" + (0, o.d)(e);
      }
      var a = "call",
        s = "handleCall",
        c = "missedCall";
      function l(t) {
        return "whatsapp-call-" + t;
      }
      var f = "openChat";
      function d(t) {
        return "whatsapp-chat-" + t;
      }
      var h = "whatsapp-ban-appeal",
        p = "openBanAppealScreen",
        g = "whatsapp-gdpr",
        v = "openGdprReportScreen";
      function m(t) {
        return "whatsapp-chat-reactions-" + t;
      }
      var y = "newReaction";
      function b(t, e) {
        return (0, r.b)().then((n) => {
          (function (t, e, n) {
            t.showNotification(e, n);
          })(n, t, e);
        });
      }
      function _(t, e) {
        new (0, self.Notification)(t, e).close();
      }
      function w(t, e) {
        return (0, r.b)().then((t) => t.getNotifications({ tag: e }));
      }
      function k(t) {
        return (0, r.b)().then((e) =>
          e.getNotifications().then((e) => {
            var n = [];
            return (
              e.forEach((e) => {
                e.data.action === t && n.push(e);
              }),
              n
            );
          })
        );
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return d;
        });
      var r = 3e3,
        i = "data:image/jpeg;base64,";
      function o(t) {
        return a(t, 43, 47, !0);
      }
      function u(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a(t, 45, 95, e);
      }
      function a(t, e, n, i) {
        var o =
          Array.isArray(t) || t instanceof ArrayBuffer ? new Uint8Array(t) : t;
        if (o.length <= r) return s(o, e, n, i);
        for (var u = [], a = 0; a < o.length; a += r)
          u.push(s(o.subarray(a, a + r), e, n, i));
        return u.join("");
      }
      function s(t, e, n, r) {
        for (
          var i = Math.ceil((4 * t.length) / 3),
            o = 4 * Math.ceil(t.length / 3),
            u = new Array(o),
            a = 0,
            s = 0;
          a < o;
          a += 4, s += 3
        ) {
          var c = (t[s] << 16) | (t[s + 1] << 8) | t[s + 2];
          (u[a] = c >> 18),
            (u[a + 1] = (c >> 12) & 63),
            (u[a + 2] = (c >> 6) & 63),
            (u[a + 3] = 63 & c);
        }
        for (var l = 0; l < i; l++) {
          var f = u[l];
          u[l] =
            f < 26
              ? 65 + f
              : f < 52
              ? 71 + f
              : f < 62
              ? f - 4
              : 62 === f
              ? e
              : n;
        }
        for (var d = i; d < o; d++) u[d] = 61;
        var h = String.fromCharCode.apply(String, u);
        return r ? h : h.substring(0, i);
      }
      function c(t, e, n, r) {
        for (
          var i = t.length, o = new Int32Array(i + (i % 4)), u = 0;
          u < i;
          u++
        ) {
          var a = t.charCodeAt(u);
          if (65 <= a && a <= 90) o[u] = a - 65;
          else if (97 <= a && a <= 122) o[u] = a - 71;
          else if (48 <= a && a <= 57) o[u] = a + 4;
          else if (a === e) o[u] = 62;
          else {
            if (a !== n) {
              if (a === r) {
                i = u;
                break;
              }
              return (
                null != self.ERROR &&
                  __LOG__(
                    4
                  )`Found unexpected character code while decoding B64 at index ${u}, length ${i}: ${a}`,
                null
              );
            }
            o[u] = 63;
          }
        }
        for (var s = o.length / 4, c = 0, l = 0; c < s; c++, l += 4)
          o[c] = (o[l] << 18) | (o[l + 1] << 12) | (o[l + 2] << 6) | o[l + 3];
        for (
          var f = Math.floor((3 * i) / 4), d = new Uint8Array(f), h = 0, p = 0;
          p + 3 <= f;
          h++, p += 3
        ) {
          var g = o[h];
          (d[p] = g >> 16), (d[p + 1] = (g >> 8) & 255), (d[p + 2] = 255 & g);
        }
        switch (f - p) {
          case 2:
            (d[p] = o[h] >> 16), (d[p + 1] = (o[h] >> 8) & 255);
            break;
          case 1:
            d[p] = o[h] >> 16;
        }
        return d;
      }
      function l(t) {
        var e = c(t, 43, 47, 61);
        if (e) return e.buffer;
        throw new Error("Base64.decode given invalid string");
      }
      function f(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = c(t, 45, 95, e ? 61 : -1);
        if (n) return n.buffer;
        throw new Error("Base64.decode given invalid string");
      }
      function d(t) {
        return Math.floor((3 * t.length) / 4);
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "h", function () {
        return i;
      }),
        n.d(e, "f", function () {
          return o;
        }),
        n.d(e, "o", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "i", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "l", function () {
          return p;
        }),
        n.d(e, "p", function () {
          return g;
        }),
        n.d(e, "q", function () {
          return v;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "m", function () {
          return y;
        }),
        n.d(e, "d", function () {
          return b;
        }),
        n.d(e, "n", function () {
          return _;
        });
      var r = n(10);
      function i(t, e) {
        return `${t}:${e}`;
      }
      function o(t) {
        var e = t.split("/");
        return e.length <= 2
          ? (__LOG__(4)`splitSystemPath unexpected system path ${t}`,
            void SEND_LOGS("unexpected-system-path"))
          : i(e[1], m(e.slice(2).join("/")));
      }
      function u(t) {
        var e = t.split(":");
        if (1 === e.length) return { relativePath: t };
        if (2 !== e.length) throw Error("Unrecognized storage path " + t);
        return { storageName: e[0], relativePath: e[1] };
      }
      var a = "gdpr",
        s = "gdpr",
        c = 65536;
      function l(t, e) {
        return `/usr/chunks/${t}/${(0, r.o)(e)}`;
      }
      function f(t) {
        return "/usr/blobs/" + t;
      }
      function d(t) {
        return `/usr/frame/${t}.jpg`;
      }
      function h(t) {
        return p(t) ? null : m(t);
      }
      function p(t) {
        return t.startsWith("/");
      }
      function g(t, e) {
        return p(t) ? e.uri(t) : e.path(t);
      }
      function v(t, e) {
        return p(t) ? e.uri(t) : e.path(t);
      }
      function m(t) {
        if (t.startsWith("/")) throw Error();
        return t;
      }
      function y(t) {
        if (t.startsWith("/usr/chunked")) {
          var e = /\/(\d+)\?size=(\d+)$/.exec(t);
          if (!e) throw new Error("parseRawContentUri bad uri " + t);
          return {
            type: "chunked",
            mediaId: parseInt(e[1], 10),
            size: parseInt(e[2], 10),
          };
        }
        return { type: "full", chunkId: t };
      }
      function b(t, e) {
        return v(t, {
          uri: (t) =>
            (function (t, e) {
              if (null == e) return t;
              var n = new URL(t, "http://wa.invalid");
              return n.searchParams.set("mt", e), n.pathname + n.search;
            })(t, e),
          path: (t) => t,
        });
      }
      function _(t) {
        var e = new URL(t, "http://wa.invalid");
        return { uri: e.pathname, mimetype: e.searchParams.get("mt") || null };
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return c;
      }),
        n.d(e, "l", function () {
          return l;
        }),
        n.d(e, "m", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return d;
        }),
        n.d(e, "j", function () {
          return h;
        }),
        n.d(e, "k", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "h", function () {
          return y;
        }),
        n.d(e, "c", function () {
          return b;
        });
      var r = n(37);
      n.d(e, "b", function () {
        return r.b;
      });
      var i = n(2);
      n.d(e, "a", function () {
        return i.b;
      });
      var o = n(11),
        u = n(7),
        a = n(6),
        s = n(36);
      function c(t) {
        var e = t.groupInfo,
          n = t.participantsInfo,
          r = {
            title: (0, s.m)(e.title),
            description: e.description
              ? (0, s.d)(e.description)
              : e.description,
            descriptionId: e.descriptionId,
            locked: e.locked,
            isAdmin: e.isAdmin,
            announcement: e.announcement,
            admins: l(n.admins),
            superadmins: l(n.superadmins),
            isInGroup: e.isInTheGroup,
            participants: l(n.participants),
            invitations: n.invitations ? n.invitations : [],
            creatorJid: e.creatorJid,
            creationTs: e.creationTs,
            messaged: e.messaged,
            expiration: e.expiration,
            support: !!e.support,
            communityInfo: e.communityInfo,
          };
        return null != e.growthLocked && (r.growthLocked = e.growthLocked), r;
      }
      function l(t) {
        for (var e = a.r.get(), n = [], r = 0; r < t.length; r++)
          t[r] !== e && n.push(t[r]);
        return n;
      }
      function f(t, e) {
        return "@me" === t ? e.me() : "@psa" === t ? e.psa() : e.user(t);
      }
      function d(t) {
        return "@me" === t || "@system" === t || "@psa" === t ? null : t;
      }
      function h(t) {
        return t ? p(t) : i.c;
      }
      function p(t) {
        return t === a.r.get() ? i.b : t;
      }
      function g(t) {
        var e = {},
          n = {};
        return (
          t.forEach((t) => {
            var r;
            if (t.outgoing) {
              var i = n[t.user];
              i || (i = n[t.user] = {}), (r = i);
            } else {
              var o = e[t.user];
              o || (o = e[t.user] = {}), (r = o);
            }
            r[t.group] = t.expiresBefore;
          }),
          { received: e, sent: n }
        );
      }
      function v(t) {
        switch (t.type) {
          case i.f.TEXT:
          case i.f.IMAGE:
          case i.f.STICKER:
          case i.f.PTT:
          case i.f.AUDIO:
          case i.f.VIDEO:
          case i.f.GIF:
          case i.f.VCARD:
          case i.f.LOCATION:
          case i.f.GROUP_INVITE:
          case i.f.RICH_HSM:
          case i.f.HSM_BUTTON_REPLY:
          case i.f.DOCUMENT:
            return t;
          default:
            return null;
        }
      }
      function m(t) {
        if ((0, u.p)(t.jid)) return t;
      }
      function y(t) {
        if (t.jid === o.h) return t;
      }
      function b(t) {
        if ("parent" === t.communityInfo) return t;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      });
      var r = n(7),
        i = n(49),
        o = n(3);
      function u(t, e) {
        var n = (function (t) {
            var e = t.starredMsgCount,
              n = t.keptMsgCount,
              r = t.newest,
              i = t.oldestUnread,
              u = t.msgCount,
              a = t.increment,
              s = t.unreadMsgCount,
              c = t.previewMsg,
              l = {
                newest: r,
                oldestUnread: i,
                msgCount: u,
                increment: a,
                unreadMsgCount: s,
              };
            return (
              e && e > 0 && (l.starredMsgCount = e),
              n && n > 0 && (l.keptMsgCount = n),
              null != c &&
                (null != c.validUntil &&
                  c.validUntil < (0, o.E)() &&
                  (__LOG__(2)`ExpiredMsg preview on UI`,
                  (c.content = { type: "expired" })),
                (l.preview = c)),
              l
            );
          })(t),
          u =
            (function (t, e) {
              var n = (0, r.q)(t.jid);
              return n
                ? {
                    type: "ONE_TO_ONE",
                    jid: n,
                    id: t.id,
                    sortBy: t.sortBy,
                    mutedUntil: t.mutedUntil || void 0,
                    archived: t.archived || void 0,
                    msgInfo: e,
                    lastNotified: t.lastNotified || void 0,
                    chatBackgroundSettings: t.chatBackgroundSettings,
                    notStarted: t.notStarted || 0 === t.increment || void 0,
                  }
                : null;
            })(t, n) ||
            (function (t, e, n) {
              var o = (0, r.p)(t.jid);
              return o
                ? e
                  ? {
                      type: "GROUP",
                      jid: o,
                      id: t.id,
                      sortBy: t.sortBy,
                      mutedUntil: t.mutedUntil || void 0,
                      archived: t.archived || void 0,
                      msgInfo: n,
                      groupInfo: (0, i.e)(e),
                      lastNotified: t.lastNotified || void 0,
                      chatBackgroundSettings: t.chatBackgroundSettings,
                      importantMsgCount: t.importantMsgCount,
                    }
                  : (__LOG__(
                      4
                    )`Cannot convert chat ${t.jid} without being given group info`,
                    null)
                : null;
            })(t, e, n);
        if (!u)
          throw (
            (__LOG__(4)`Unable to convert chat ${t.jid}`,
            new Error("Unable to convert chat"))
          );
        return u;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return v;
        });
      var r = {
          1: '[334,-1,"($1) $2-$3"],10',
          20: '["Ah","[23]"],[334,"1[0125]|[89]00"],["Bg","1[35]|[4-6]|[89][2-9]"],[9,10]',
          211: "333,9",
          212: '["[5-7]BF","5(2[015-7]|3[0-4])|[67]",1],["[58]CE",["5(2[2-489]|3[5-9]|92)|892","5(2([2-48]|9[0-7])|3([5-79]|8[0-7])|924)|892"],1],["5DD",["5(29|38)","5(29|38)[89]"],1],["[5]BBBB","5(4[067]|5[03])"],["8[09];G","8(0|9[013-9])",1],9',
          213: '["[5-8]BBBB","[5-8]"],["9ACBB",9],9',
          216: "233,8",
          218: '[27,"[25-79]",1],9',
          220: "34,7",
          221: '[2322,"[379]"],[3222,8],9',
          222: '"[2-48]ABBB",8',
          223: '[2222,"[246-9]"],8',
          224: '[2222,3],[3222,"[67]"],[8,9]',
          225: "2222,8",
          226: '[2222,"[025-7]"],8',
          227: '[233,"08"],[2222,"[0289]"],8',
          228: '[2222,"[279]"],8',
          229: "2222,8",
          230: '[34,"[2-46]|8[013]"],[44,5],[7,8]',
          231: '[133,"[45]"],[233,2],[234,"[23578]"],[7,8,9]',
          232: "26,8",
          233: '[234,"[235]"],9',
          234: '["CCd","[7-9]"],["CDe","[78]"],["CEf","[78]"],10',
          235: "2222,8",
          236: "2222,8",
          237: '[2222,88],[12222,"[26]"],[8,9]',
          238: "322,7",
          239: "34,7",
          240: '[333,"[235]"],[36,"[89]"],9',
          241: "[2222,0],8",
          242: '[234,"[02]"],[144,8],9',
          243: '[234,1],[333,"[89]"],9',
          244: '[333,"[29]"],9',
          245: '[333,"44|9[567]"],[34,40],[7,9]',
          246: "[34,3],7",
          247: "5",
          248: '[133,"[246]"],7',
          249: '[234,"[19]"],9',
          250: '["2BCC",2],["[7-9]BCC","[7-9]"],9',
          251: '"[1-59]ACD",9',
          252: '[17,"24|[67]"],["BA{5,7}","15|28|6[1-35-9]|799|9[2-9]"],[333,"3[59]|4[89]|6[24-6]|79|8[08]|90"],[8,9]',
          253: "2222,8",
          254: '["BA{5,7}","[24-6]"],[36,7],["CCd","[89]"],9',
          255: '["[24]ACD","[24]"],["[67]BCC","[67]"],["[89]BBD","[89]"],9',
          256: '[45,[202,2024]],[36,"[27-9]|4(6[45]|[7-9])"],[27,"[34]"],9',
          257: "2222,8",
          258: '["[28]ACd","2|8[2-7]"],["80ACC",80],9',
          260: '["[29]AG","[29]"],["800;CC",8],9',
          261: '[2232,"[23]"],9',
          262: '"[268]BBBB",9',
          263: '["7ACd",7],["86BCC","86[24]"],["CCd","2(1[39]|2[0157]|6[14]|7[35]|84)|329"],["[235]ACd","[23]9|54"],["[25]CA{3,5}",["(25|54)8","258[23]|5483"]],["8CF",86],["80ACD",80],[9,10]',
          264: '["8ACD","8[1235]"],["6ACd",6],["870;CC",870],9',
          265: '["2BCC",2],[3222,"[1789]"],9',
          266: "44,8",
          267: '["7ACC",7],8',
          268: '[44,"[027]"],8',
          269: "322,7",
          27: '[333,860],[234,"[1-9]"],9',
          290: "[4,5]",
          291: "133,7",
          297: "34,7",
          298: "6,6",
          299: "222,6",
          30: '[244,"21|7"],[46,"2(2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"],[334,"[2689]"],10',
          31: '["[1-578]ACD","1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],["[1-5]BCC","1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],["6;H","6[0-57-9]"],["66;G",66],["[89]0AA{4,7}","80|9"],[9,11]',
          32: "[3222,4],9",
          33: '[3222,8],[12222,"[1-79]"],9',
          34: '["[89]00;CC","[89]00"],["[5-9]BBBB","[568]|[79][0-8]"],9',
          350: "[35,2],8",
          351: '["2ACD","2[12]"],["[2-46-9]BCC","2[3-9]|[346-9]"],9',
          352: '[2223,20],[333,6],["BBBBb","2([0367]|4[3-8])"],["BBBA{1,5}","[3-57]|8[13-9]|9(0[89]|[2-579])|(2|80)[2-9]"],9',
          353: '["AdD",1],["BCd","[2569]|4[1-69]|7[14]"],[333,70],[333,81],[234,"[78]"],[433,1],[2134,8],[244,4],9',
          354: '[34,"[4-9]"],["3BCC",3],[7,8,9]',
          355: '["6[6-9];CD",6],9',
          356: '[44,"[2357-9]"],8',
          357: "26,8",
          358: '["CA{3,7}","([1-3]00|[6-8]0)"],["116C",116],["BA{4,10}","[14]|2[09]|50|7[135]"],["AA{4,11}","[25689][1-8]|3"],[6,7,8,9,10,11]',
          359: '[333,999],["BCd","48|8[7-9]|9[08]"],9',
          36: '["BCd","[2-9]"],9',
          370: '[134,"52[0-79]"],[323,"[7-9]"],[26,"37|4([15]|6[1-8])"],[35,"[3-6]"],8',
          371: '[233,"[269]|8[01]"],8',
          372: '["[3-79]BD",["[369]|4[3-8]|5([0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5([02]|1([0-8]|95)|5[0-478]|6(4[0-4]|5[1-589]))|7[1-9]"]],["70;BD",70],["8000;CC",[800,8000]],["[458]Cd",["40|5|8(00|[1-5])","40|5|8(00[1-9]|[1-5])"]],[7,8]',
          373: '[233,"22|3"],["[25-7]BBC","2[13-9]|[5-7]"],["[89]BE","[89]"],8',
          374: '[26,"1|47"],[26,"4[1349]|[5-7]|9[1-9]"],[35,"[23]"],[323,"8|90"],8',
          375: '[2322,["17[0-3589]|2[4-9]|[34]","17([02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"$1 $2-$3-$4"],[3222,["1(5[24]|6[235]|7[467])|2(1[246]|2[25]|3[26])","1(5[24]|6(2|3[04-9]|5[0346-9])|7([46]|7[37-9]))|2(1[246]|2[25]|3[26])"],"$1 $2-$3-$4"],[423,["1(5[169]|6[3-5]|7[179])|2(1[35]|2[34]|3[3-5])","1(5[169]|6(3[1-3]|4|5[125])|7(1[3-9]|7[0-24-6]|9[2-7]))|2(1[35]|2[34]|3[3-5])"],"$1 $2-$3"],["[89]BCD","8[01]|9"],["82ADD",82],["800;BA{2,4}",800],9',
          376: '[33,"[135-9]"],[44,1],[333,6],[6,9]',
          377: '[2222,"[39]"],[233,4],["6;BBBB",6],[332,8],[8,9]',
          378: '[2222,"[5-7]"],["0549;F",0,"($1) $2"],8',
          379: "10",
          380: '[333,["6[12][29]|(3[1-8]|4[136-8]|5[12457]|6[49])2|(56|65)[24]","6[12][29]|(35|4[1378]|5[12457]|6[49])2|(56|65)[24]|(3[1-46-8]|46)2[013-9]"]],[234,["4[45][0-5]|5(0|6[37])|6([12][018]|[36-8])|7|89|9[1-9]|(48|57)[0137-9]","4[45][0-5]|5(0|6(3[14-7]|7))|6([12][018]|[36-8])|7|89|9[1-9]|(48|57)[0137-9]"]],[45,"[3-6]"],["CCd","[89]"],9',
          381: '["[23]BA{4,9}","(2[389]|39)0"],["[1-3]AA{5,10}","1|2([0-24-7]|[389][1-9])|3([0-8]|9[1-9])"],["6AA{6,8}",6],["[89]BA{3,9}","[89]"],["7[26];A{4,9}","7[26]"],["7[08]AA{4,9}","7[08]"],[8,9,10]',
          382: '[233,"[2-57-9]|6[036-9]"],[8,9]',
          383: '[233,"[23][89]|4[3-79]"],[35,"[89]00"],333,8',
          385: '["1;DC",1],["[2-5]ACd","[2-5]"],["9ACd",9],["[67]ACd","[67]"],["80[01];Bc",8],["80[01];CC",8],[8,9]',
          386: '[1322,"[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"],["[3-7]ACC","[37][01]|4[0139]|51|6"],["[89][09];A{3,6}","[89][09]"],["[58]BE","59|8[1-3]"],8',
          387: '[233,"6[1-356]|[7-9]"],[233,"[3-5]","$1 $2-$3"],[2223,6],[8,9]',
          389: '["2;CD",2],["[347]ACC","[347]"],["[58]BABB","[58]"],8',
          39: '["BdD","0[26]|55"],["0[26];DE","0[26]"],["0BdD","0[13-57-9][0159]"],["CA{3,6}",["0[13-57-9][0159]|8(03|4[17]|9[245])","0[13-57-9][0159]|8(03|4[17]|9(2|[45][0-4]))"]],["0CCD","0[13-57-9][2-46-8]"],["0CA{2,6}","0[13-57-9][2-46-8]"],["CCd",["[13]|8(00|4[08]|9[59])","[13]|8(00|4[08]|9(5[5-9]|9))"]],[344,3],[9,10]',
          40: '[234,"[23]1"],[333,"[23][3-7]|[7-9]"],9',
          41: '["[2-9]ACBB","[2-7]|[89]1"],["[89]BCC","8[047]|90"],[32322,860],9',
          420: '["[2-9]BCC","[2-8]|9[015-7]"],["96ACCC",96],["9ACCC","9[36]"],9',
          421: '["2;CCB",2,"$1/$2 $3 $4"],["[3-5]ACBB","[3-5]","$1/$2 $3 $4"],["[689]BCC","[689]"],9',
          423: '[322,"[237-9]"],[234,69],[333,6],7',
          43: '["1;A{3,12}",1],["5ADA{4,7}","5[079]"],["CA{3,10}","316|46|51|732|6(5[0-3579]|[6-9])|7([28]0)|[89]"],["DA{3,9}","2|3(1[1-578]|[3-8])|4[2378]|5[2-6]|6([12]|4[1-9]|5[468])|7(2[1-8]|35|4[1-8]|[5-79])"],[10,11,12,13]',
          44: '["Ee",["1(38|5[23]|69|76|94)","1((38|69)7|5(24|39)|768|946)","1(3873|5(242|39[4-6])|(697|768)[347]|9467)"]],["Df","1([2-69][02-9]|[78])"],[244,["[25]|7(0|6[024-9])","[25]|7(0|6([04-9]|2[356]))"]],[46,7],[334,"[1389]"],10',
          45: "2222,8",
          46: '["8;ccB",8],["[1-69]AcBB","1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],[3222,"1[2457]|2([247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6([124-689]|7[0-2])|9([125-8]|3[0-5]|4[0-3])"],["7ACBB",7],["9[034]ABBC","9[034]"],[32322,"25[245]|67[3-6]"],9',
          47: '["[489]BBC","[489]"],["[235-7]ABBB","[235-7]"],8',
          48: '[2322,"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"],[333,"26|39|5[0137]|6[0469]|7[02389]|8[08]"],9',
          49: '["BA{3,13}","3[02]|40|[68]9"],["CA{3,12}",["2(0[1-389]|1[124]|2[18]|3[14])|3([35-9][15]|4[015])|906|(2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(0[1-389]|12[0-8])|3([35-9][15]|4[015])|906|2([13][14]|2[18])|(2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"]],["DA{2,11}",["[24-6]|3([3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(3(0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(2[135]|4[13578]|9[1346])|5(0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(2[1-7]|4[145]|6[1-5]|7[1-4])|8(21|3[1468]|6|7[1467]|8[136])|9(0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(47|60)[1356]|3(3[46]|46|5[49])[1246]|3[4579]3[1357]"]],[34,138],["EA{2,10}",3],["CA{5,11}",181],["CAA{4,10}","1(3|80)|9"],["Ch","1[67]"],["CA{7,12}",8],[56,[185,1850,18500]],[344,7],[47,"18[68]"],[56,"15[0568]"],[47,"15[1279]"],[38,18],["CBh","1(6[023]|7)"],[427,"15[279]"],[328,15],[7,8,9,10,11,12]',
          500: "5",
          501: '[34,"[2-8]",1],["0;800;DC",0,1],7',
          502: '[44,"[2-7]"],[434,1],8',
          503: '[44,"[267]"],[344,"[89]"],8',
          504: '[44,"[237-9]",1],8',
          505: "44,8",
          506: '[44,"[24-7]|8[3-9]"],[334,"[89]0",1],8',
          507: "[44,6,1],8",
          508: '"[45]ABB",6',
          509: "224,8",
          51: "[333,9],9",
          52: '[244,"33|5[56]|81"],[334,"[2-9]"],[1244,"1(33|5[56]|81)"],[1334,1],[10,11]',
          53: '["Ag",7],["BA{4,6}","[2-4]"],[17,5],8',
          54: '[424,["2(2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2([23]02|6([25]|4[6-8])|9([02356]|4[02568]|72|8[23]))|3(3[28]|4([04679]|3[5-8]|5[4-68]|8[2379])|5([2467]|3[237]|8[2-5])|7[1-578]|8([2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(2[24-9]|3[1-59]|47)","2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5[2-6])|72|8[23]))|3(3[28]|4([04679]|3[78]|5(4[46]|8)|8[2379])|5([2467]|3[237]|8[23])|7[1-578]|8([2469]|3[278]|5[56][46]|86[3-6]))|2(2[24-9]|3[1-59]|47)|38([58][78]|7[378])|3(4[35][56]|58[45]|8([38]5|54|76))[4-6]","2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5([24-6]|3[2-5]))|72|8[23]))|3(3[28]|4([04679]|3(5(4[0-25689]|[56])|[78])|58|8[2379])|5([2467]|3[237]|8([23]|4([45]|60)|5(4[0-39]|5|64)))|7[1-578]|8([2469]|3[278]|54(4|5[13-7]|6[89])|86[3-6]))|2(2[24-9]|3[1-59]|47)|38([58][78]|7[378])|3(454|85[56])[46]|3(4(36|5[56])|8([38]5|76))[4-6]"],"$1 $2-$3"],[244,1,"$1 $2-$3"],[334,"[23]","$1 $2-$3"],[334,"[68]",1],[1424,["9(2[2-469]|3[3-578])","9(2(2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(2([23]02|6([25]|4[6-8])|9([02356]|4[02568]|72|8[23]))|3(3[28]|4([04679]|3[5-8]|5[4-68]|8[2379])|5([2467]|3[237]|8[2-5])|7[1-578]|8([2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(2[24-9]|3[1-59]|47)","9(2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5[2-6])|72|8[23]))|3(3[28]|4([04679]|3[78]|5(4[46]|8)|8[2379])|5([2467]|3[237]|8[23])|7[1-578]|8([2469]|3[278]|5([56][46]|[78])|7[378]|8(6[3-6]|[78]))))|92(2[24-9]|3[1-59]|47)|93(4[35][56]|58[45]|8([38]5|54|76))[4-6]","9(2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5([24-6]|3[2-5]))|72|8[23]))|3(3[28]|4([04679]|3(5(4[0-25689]|[56])|[78])|5(4[46]|8)|8[2379])|5([2467]|3[237]|8([23]|4([45]|60)|5(4[0-39]|5|64)))|7[1-578]|8([2469]|3[278]|5(4(4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(6[3-6]|[78]))))|92(2[24-9]|3[1-59]|47)|93(4(36|5[56])|8([38]5|76))[4-6]"],"$1 $2 $3-$4"],[1244,91,"$1 $2 $3-$4"],[1334,9,"$1 $2 $3-$4"],[10,11]',
          55: '[244,"[1-9][1-9]","$1 $2-$3"],[254,"([14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9","$1 $2-$3"],["[3589]00;cD","[3589]00"],[10,11]',
          56: '[144,"2[23]"],[234,"[357]|4[1-35]|6[13-57]"],["9;DD",9],["44;CD",44],["[68]00;Cd","60|8"],["600;CBC",60],["1230;CD",1],[54,219],9',
          57: '[17,["1(8[2-9]|9[0-3]|[2-7])|[24-8]","1(8[2-9]|9(09|[1-3])|[2-7])|[24-8]"]],[37,3],["1;CG",["1(80|9[04])","1(800|9(0[01]|4[78]))"]],[8,10]',
          58: "[37,-1,1],10",
          590: '["[56]90;BD",-1,"$1 $2-$3"],9',
          591: '[17,"[23]|4[46]"],[8,"[67]"],[324,8],8',
          592: "34,7",
          593: '[134,"[247]|[356][2-8]",1],[234,9],["1800;Cd",1],[8,9]',
          594: "3222,9",
          595: '["BCd","([26]1|3[289]|4[124678]|7[123]|8[1236])"],["CA{3,6}","[2-9]0"],[36,"9[1-9]"],[234,8700],[333,"[2-8][1-9]"],9',
          596: "3222,9",
          597: '[34,"[6-8]",1],7',
          598: '[233,9],[44,"[24]"],8',
          599: '[34,"[13-7]"],["9;CD",9],[7,8]',
          60: '["3;DD",3,"$1-$2 $3"],["[18]ACd","1[02-46-9][1-9]|8","$1-$2 $3"],["1;[36-8]00;BD","1[36-8]0",1],["11;DD",11,"$1-$2 $3"],["15[49];CD",15,"$1-$2 $3"],[9,10]',
          61: '["BCA{2,4}",16],[333,"14|[45]"],[144,"[2378]"],[433,"1(30|[89])"],9',
          62: '["BA{5,9}","2[124]|[36]1"],["CA{5,7}",800],["CA{5,8}","[2-79]"],["CdC","8[1-35-9]",1],["CA{6,8}",1],[334,804],[3133,80],["CDe",8,1],[2434,0],[9,10,11,12]',
          63: '["DA{4,6}",["3(23|39|46)|4(2[3-6]|[35]9|4[26]|76)|544|88[245]|(52|64|86)2","3(230|397|461)|4(2(35|[46]4|51)|396|4(22|63)|59[347]|76[15])|5(221|446)|642[23]|8(622|8([24]2|5[13]))"]],[334,"[89]"],[434,1],["DbCD",1],10',
          64: '[323,"[89]0"],[134,"24|[346]|7[2-57-9]|9[2-9]","$1-$2 $3"],["CCd","2(10|74)|[59]|80"],["BdD","2[028]"],["BCA{3,5}","2([169]|7[0-35-9])|7|86"],[8,9,10]',
          65: '["[3689]CD","[369]|8[1-9]"],["1[89]00;CD","1[89]"],["7000;DC",70],["800;CD",80],8',
          66: '["BCd","14|[3-9]"],[433,1],9',
          670: "[44,7],8",
          672: "[24,1],[15,3],[5,6]",
          673: '"[2-578]BD",7',
          674: "34,7",
          675: '[34,"[13-689]|27"],[44,"20|7"],[7,8]',
          676: '[34,"7[5-9]|8[47-9]"],[43,0],7',
          677: '[25,"[7-9]"],7',
          678: '[34,"[579]"],7',
          679: '[34,"[35-9]"],[434,0],7',
          680: "34,7",
          681: "222,6",
          682: "23,5",
          683: "4",
          685: '["8Bd",8],["7AE",7],[6,7]',
          686: "8",
          687: '[222,"[2-46-9]|5[0-4]","$1.$2.$3"],6',
          688: "[6,7]",
          689: '[2222,"4[09]|8[79]"],[222,44],[6,8]',
          690: "[4,5,6,7]",
          691: "34,7",
          692: "[34,-1,1],7",
          7: '[4222,["7(1[0-8]|2[1-9])","7(1([0-6]2|7|8[27])|2(1[23]|[2-9]2))","7(1([0-6]2|7|8[27])|2(13[03-69]|62[013-9]))|72[1-57-9]2"]],[5122,["7(1[0-68]|2[1-9])","7(1([06][3-6]|[18]|2[35]|[3-5][3-5])|2([13][3-5]|[24-689]|7[457]))","7(1(0([356]|4[023])|[18]|2(3[013-9]|5)|3[45]|43[013-79]|5(3[1-8]|4[1-7]|5)|6(3[0-35-9]|[4-6]))|2(1(3[178]|[45])|[24-689]|3[35]|7[457]))|7(14|23)4[0-8]|71(33|45)[1-79]"]],[334,7],[3322,"[3489]","$1 $2-$3-$4"],10',
          81: '[334,800,1],["DBd","0077",1],[424,"0088",1],["DCd","00(37|66)",1],["DDe","00(37|66)",1],["DEf","00(37|66)",1],["DFg","00(37|66)",1],[244,"[2579]0|80[1-9]",1],10',
          82: '["AdD",2,1],[234,"60|8",1],["BdD","[1346]|5[1-5]",1],[244,"[57]",1],[533,["003","0030"]],[254,5,1],["EdD",0],[5234,0],[9,10]',
          84: '[244,"2[48]"],[343,"2[0-35-79]"],["[89]ACBB","8(8|9[89])|9"],["1[2689]ACD","1([26]|8[68]|99)"],["[3578]ACD","[357]|8[1-5]"],["86[89];CC","86[89]"],["1[89]00;A{4,6}",["1[89]0","1[89]00"]],[9,10]',
          850: "[334,1],10",
          852: '[44,"[235-7]|[89](0[1-9]|[1-9])"],["800;CC",800],["900;BCC",900],["900;A{2,5}",900],8',
          853: '"[268]CD",8',
          855: '["BCd","[1-9]"],[433,1],[8,9]',
          856: "[2233,2],10",
          86: '["21;DA{4,6}",21],[344,"3(11|7[179])|4([15]1|3[1-35])|5(1|2[37]|3[12]|51|7[13-79]|9[15])|7(31|5[457]|6[09]|91)|8([57]1|98)"],[434,[807,8078]],[344,"1[3-578]"],["10800;CD",[108,1080,10800]],["Ch",950],11',
          880: '["CA{3,7}","3([67]|8[013-9])|4(6[168]|7|[89][18])|5(6[128]|9)|6(28|4[14]|5)|7[2-589]|8(0[014-9]|[12])|9[358]|(3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(44|66)[01346-9]",1],["DA{3,6}","[13-9]",1],10',
          886: '["AdD","[25][2-8]|[346]|7[1-9]|8[237-9]"],[234,"[258]"],[333,9],[244,7],9',
          90: '[334,"512|8[0589]|90"],[3322,["5([0-59]|61)","5([0-59]|616)","5([0-59]|6161)"]],[3322,"[24][1-8]|3[1-9]"],10',
          91: '[55,["600|7([02-8]|19|9[037-9])|8(0[015-9]|[1-9]|20)|9","600|7([078]|19[0-5]|2([02356-9]|[14][017-9]|9[389])|3([025-9]|1[07-9]|[34][017-9])|4([0-35689]|[47][017-9])|5([02346-9]|1[017-9]|5[017-9])|6([02-9]|1[0-257-9])|9([089]|31|7[02-9]))|8(0([01589]|6[67]|7[02-9])|1([0-57-9]|6[07-9])|2(0[078]|[14][07-9]|[235-9])|3([0357-9]|[126][07-9]|4[1-9])|[45]|6([02457-9]|[136][07-9])|7([078][07-9]|[1-69])|8([0-25-9]|3[07-9]|4[047-9])|9([02-9]|1[027-9]))|9","600|7(0|19[0-5]|2([0235679]|[14][017-9]|8([0-569]|[78][089])|9[389])|3([05-8]|1([089]|7[5-9])|2([5-8]|[0-49][089])|3[017-9]|4([07-9]|11)|9([01689]|[2345][089]|40|7[0189]))|4([056]|1([0135-9]|[23][089]|2[089]|4[089])|2(0[089]|[1-7][089]|[89])|3([0-8][089]|9)|4([089]|11|7[02-8])|7([089]|11|7[02-8])|8([0-24-7][089]|[389])|9([0-7][089]|[89]))|5([0346-9]|1[017-9]|2([03-9]|[12][089])|5[017-9])|6([0346-9]|1[0-257-9]|2([0-4].|[5-9][089])|5([0-367][089]|[4589]))|7(0([02-9]|1[089])|[1-9])|8([0-79]|8(0[0189]|11|8[013-9]|9))|9([089]|313|7([02-8]|9[07-9])))|8(0([01589]|6[67]|7([02-8]|9[05-9]))|1([02-57-9]|1([0-35-9]|4[0-46-9])|6([089]|7[02-8]))|2(0([08]|7[02])|[14]([089]|7[02-8])|[235-9])|3([0357-9]|1([089]|7[02-6])|2([09]|77|8[0-689])|4[1-9]|6([089]|7[02-7]))|[45]|6([02457-9]|1([089]|7[02-8])|3([089]|7[02358])|6([08]|7[02-8]|9[01]))|7(0[07-9]|[1-69]|7([089]|7[02-8])|8([089]|7[02-8]))|8([0-25-9]|3([089]|7[02-8])|4([0489]|7[02-68]))|9([02-9]|1([0289]|7[2-6])))|9"]],[244,"11|2[02]|33|4[04]|79[1-9]|80[2-46]"],[334,"1(2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(12|[2345]1|57|6[13]|7[14]|80)|7(12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],[433,"1([23579]|[468][1-9])|[2-8]"],[2343,"008"],[334,140],[424,[160,1600]],["DA{2,4};D",[180,1800]],["DdD",[186,1860]],[4333,"18[06]"],10',
          92: '["Bh","(2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],["Cg",["2(3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(2[2-689]|3[23578]|4[3478]|5[2356])|9(2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(2[3-8]|98)|(2(3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(2[2-689]|3[23578]|4[3478]|5[2356])|9(22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"]],[55,58],[37,3],[2333,"2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],[3333,"[24-9]"],10',
          93: '["[2-7]ACD","[2-7]"],9',
          94: '[234,7],[333,"[1-689]"],9',
          95: '["ACd","[12]"],["BCd","[4-7]|8[1-35]"],["ACA{4,6}","9(2[0-4]|[35-9]|4[137-9])"],[144,2],[334,8],[1333,92],[154,9],[8,9,10]',
          960: '[34,"[3467]|9([1-9]|0[1-9])",1],[334,"[89]00"],7',
          961: '[133,"[13-69]|7([2-57]|62|8[0-7]|9[04-9])|8[02-9]"],[233,"[7-9]"],[7,8]',
          962: '["7;DD","7[457-9]"],["Cf","70|8[0158]|9"],9',
          963: '["BCd","[1-5]"],["9BCC",9],9',
          964: '["BCd","[2-6]"],[334,7],[9,10]',
          965: '["Dd","[169]|2([235]|4[1-35-9])|52"],[35,"[25]"],8',
          966: '[45,9],[234,1],[234,5],["CCd",81],[334,8],9',
          967: '["7BCC","7[0137]"],9',
          968: '["CA{4,6}","[58]"],[26,2],[44,"[79]"],8',
          970: '["5[69]ACC",5],["1[78]00;CC","1[78]"],9',
          971: '["CA{2,9}","60|8"],[315,"[479]"],[234,5],9',
          972: '[234,"[57]",1],[433,12,1],[46,159,1],[1333,"1[7-9]",1],["CbCD",15,"$1-$2 $3-$4"],9',
          973: "44,8",
          974: '["[3-7]CD","[3-7]"],8',
          975: '[2222,"1|77"],8',
          976: '["[12]ABD","[12]1"],["[12]2Af","[12]2[1-3]"],["[12]CE",["[12](27|[3-5])","[12](27|[3-5].)2"]],[44,"[57-9]"],["[12]De",["[12](27|[3-5])","[12](27|[3-5].)[4-9]"]],8',
          977: '["9BG","9(6[013]|7[245]|8)",1],10',
          98: '[244,"[1-8]"],["CCd",9],10',
          992: '[612,[331,3317]],[324,"[34]7|91[78]"],[414,3],[234,"[457-9]"],9',
          993: '[2222,12,"$1 $2-$3-$4"],[26,6],[3122,"13|[2-5]","$1 $2-$3-$4"],8',
          994: '[3222,9],[2322,["[12]|365","[12]|365","[12]|365([0-46-9]|5[0-35-9])"]],[2322,"[3-8]"],9',
          995: '[3222,"[348]"],[333,7],[3222,5],9',
          996: '[45,"3(1[346]|[24-79])"],[333,"[235-79]"],["CCAc",8],9',
          998: '[2322,"[679]"],[7,8,9]',
        },
        i = n(11),
        o = /^(1|2[07]|3[0-469]|4[013-9]|5[1-8]|6[0-6]|7|8[1246]|9[0-58])/,
        u = new Map(),
        a = {};
      function s(t) {
        var e = null != r[t] ? JSON.parse(`[${r[t]}]`) : null;
        if (null == e) return null;
        var n = e.pop();
        return (a[t] = {
          lengths: n,
          formats: e.map(function (t) {
            return new (class {
              constructor(t) {
                var e;
                if (Array.isArray(t)) {
                  e = t[0];
                  var n = t[1];
                  null != n &&
                    -1 !== n &&
                    (Array.isArray(n) || (n = [n]),
                    (this.CZ = n.map(function (t) {
                      return new RegExp("^(" + t + ")");
                    }))),
                    (this.CY = t[2]);
                } else e = t;
                this.CX = new RegExp(
                  `^${(function (t) {
                    return `(${
                      "number" == typeof t
                        ? String(t)
                            .split("")
                            .map((t) => ".".repeat(Number(t)))
                            .join(")(")
                        : t.replace(/;|[a-zA-Z]+/g, (t) =>
                            ";" === t
                              ? ")("
                              : t
                                  .split("")
                                  .map((t) => {
                                    var e = t.charCodeAt(0);
                                    return e >= 97
                                      ? ".".repeat(e - 96) + "?"
                                      : ".".repeat(e - 64);
                                  })
                                  .join(")(")
                          )
                    })`;
                  })(e)}$`
                );
              }
              Ca(t) {
                if (!this.CX.test(t) || !this.Cb(t)) return !1;
                if ("string" == typeof this.CY)
                  return t.replace(this.CX, this.CY);
                var e = this.CX.exec(t);
                return null != e
                  ? e.slice(1).join(null != this.CY ? "-" : " ")
                  : void 0;
              }
              Cb(t) {
                return (
                  !this.CZ ||
                  this.CZ.some(function (e) {
                    return e.test(t);
                  })
                );
              }
            })(t);
          }),
        });
      }
      function c(t) {
        var e = t.match(o);
        return e ? e[0] : t.length >= 3 ? t.substring(0, 3) : t;
      }
      function l(t) {
        var e = u.get(t);
        return (
          null == e &&
            ((e = (function (t) {
              var e = t.length > 0 && "+" === t[0] ? t.substring(1) : t,
                n = c(e);
              if (!n) return e;
              var r = e.substring(n.length),
                i = a[n] || s(n);
              if (!i) return "+" + n + " " + r;
              for (var o = i.formats, u = 0; u < o.length; u++) {
                var l = o[u].Ca(r);
                if (null != l && !1 !== l && "" !== l) return "+" + n + " " + l;
              }
              return "+" + n + " " + r;
            })(t)),
            u.set(t, e)),
          e
        );
      }
      function f(t) {
        var e = t.match(/\d+/g);
        return null != e ? e.join("") : "";
      }
      var d = /^\+*[\d ()]+$/;
      function h(t) {
        return d.test(t);
      }
      function p(t, e) {
        if (!/^\d+$/.test(e)) return !1;
        var n = a[t] || s(t);
        return (
          !!n &&
          ("number" == typeof n.lengths
            ? n.lengths === e.length
            : n.lengths.includes(e.length))
        );
      }
      function g(t) {
        return l((0, i.H)(t));
      }
      function v(t) {
        return c(t);
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "n", function () {
          return c;
        }),
        n.d(e, "m", function () {
          return l;
        }),
        n.d(e, "o", function () {
          return f;
        }),
        n.d(e, "g", function () {
          return d;
        }),
        n.d(e, "h", function () {
          return h;
        }),
        n.d(e, "p", function () {
          return p;
        }),
        n.d(e, "r", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "f", function () {
          return m;
        }),
        n.d(e, "j", function () {
          return y;
        }),
        n.d(e, "k", function () {
          return b;
        }),
        n.d(e, "v", function () {
          return w;
        }),
        n.d(e, "u", function () {
          return k;
        }),
        n.d(e, "t", function () {
          return E;
        }),
        n.d(e, "s", function () {
          return S;
        }),
        n.d(e, "d", function () {
          return A;
        }),
        n.d(e, "x", function () {
          return I;
        }),
        n.d(e, "w", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return P;
        }),
        n.d(e, "l", function () {
          return D;
        }),
        n.d(e, "i", function () {
          return x;
        }),
        n.d(e, "q", function () {
          return B;
        });
      var r = n(9),
        i = n.n(r),
        o = n(10),
        u = n(7),
        a = 0,
        s = 1 / 0;
      function c(t, e) {
        return `${t.toString(16)}_${(0, o.o)(e)}_m`;
      }
      function l(t) {
        return (function (t, e) {
          return `${t.toString(16)}_&${(0, o.o)(0)}_m`;
        })(t);
      }
      function f(t, e) {
        return `s_${t.toString(16)}_${(0, o.o)(e)}`;
      }
      function d(t) {
        return parseInt(t.split("_")[1], 16);
      }
      function h(t) {
        return `s_${t}_/`;
      }
      function p(t) {
        return `s_${t}_g`;
      }
      function g(t) {
        return v(t) ? { type: "chat", msgId: t } : { type: "status", msgId: t };
      }
      function v(t) {
        if (t.endsWith("_m")) return t;
      }
      function m(t) {
        if (t.startsWith("s_")) return t;
      }
      function y(t) {
        var e = v(t);
        return e ? b(e) : null;
      }
      function b(t) {
        return parseInt(t.split("_")[0], 16);
      }
      var _ = "-quoted-media";
      function w(t) {
        return t + "-quoted-media";
      }
      function k(t) {
        return t + "-media";
      }
      var C = "-media-mms";
      function E(t) {
        return t + "-media-mms";
      }
      function S(t) {
        return t.endsWith(C);
      }
      function A(t) {
        if (t.endsWith("_m")) return t;
      }
      function I(t) {
        var e = t.split("_"),
          n = i()(e, 2),
          r = n[0],
          u = n[1];
        return { chatId: parseInt(r, 16), inChatMsgId: (0, o.y)(u) };
      }
      function O(t, e) {
        if (e.endsWith(_) || (!e.endsWith("-media") && !e.endsWith(C)))
          return e.endsWith(_)
            ? w(
                c(
                  t,
                  I(
                    (function (t) {
                      return t.slice(0, -_.length);
                    })(e)
                  ).inChatMsgId
                )
              )
            : c(t, I(e).inChatMsgId);
        __LOG__(4)`Trying to replace chatId on media preview`;
      }
      function P(t) {
        if (t.startsWith("createGroup-")) return t;
      }
      function D(t, e, n) {
        var r = "@me" === e ? e : (0, u.u)(e);
        return "deleted" === n ? `${t}$${r}` : `${t}|${r}`;
      }
      function x(t) {
        return t + "{";
      }
      function B(t) {
        return t + "}";
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = class {
        constructor() {
          (this.Q = !1),
            (this.promise = new Promise((t) => {
              this.P = t;
            }));
        }
        resolve(t) {
          (this.Q = !0), this.P(t);
        }
        reject(t) {
          this.resolve(Promise.reject(t));
        }
        resolveWasCalled() {
          return this.Q;
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return c;
      }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return I;
        }),
        n.d(e, "c", function () {
          return O;
        }),
        n.d(e, "i", function () {
          return P;
        }),
        n.d(e, "b", function () {
          return D;
        }),
        n.d(e, "a", function () {
          return B;
        }),
        n.d(e, "g", function () {
          return N;
        });
      var r = n(31),
        i = n.n(r),
        o = n(3),
        u = n(20),
        a = 2 * o.b;
      function s(t) {
        return `${t < 10 ? (0, u.l)() : ""}${(0, u.i)(t)}`;
      }
      function c(t) {
        if ((0, o.E)() - t < a) {
          var e = new Date().getDay(),
            n = (0, o.D)(t).getDay();
          if (e === n) return "TODAY";
          if ((n + 1) % 7 === e) return "YESTERDAY";
        }
        return "LONG_AGO";
      }
      function l(t) {
        var e = (0, o.E)() - t;
        if (e < a) {
          var n = new Date().getDay(),
            r = (0, o.D)(t).getDay();
          if (n === r) return "TODAY";
          if ((r + 1) % 7 === n) return "YESTERDAY";
        } else {
          if (e < 6 * o.b) return "WEEK_AGO";
          if (e < 30 * o.b) return "MONTH_AGO";
        }
        return "LONG_AGO";
      }
      function f(t) {
        var e = (0, o.E)() - t;
        return e < 60
          ? "NOW"
          : e < o.d
          ? Math.floor(e / 60)
          : new Date().getDay() === (0, o.D)(t).getDay()
          ? "TODAY"
          : "YESTERDAY";
      }
      var d = { formatMatcher: "basic" },
        h = Object.assign({}, d, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        p = Object.assign({}, d, { hour: "numeric", minute: "numeric" }),
        g = Object.assign({}, h, p),
        v = null,
        m = null,
        y = null,
        b = null,
        _ = null,
        w = null,
        k = null,
        C = null,
        E = null,
        S = null,
        A = !1;
      function I(t) {
        A !== t && ((A = t), (_ = null), (w = null));
      }
      function O() {
        return (
          null == v &&
            (v = navigator.language).startsWith("ar") &&
            (v += "-u-ca-gregory"),
          v
        );
      }
      function P(t, e) {
        if ("undefined" == typeof Intl) {
          var n = "toLocaleDateTimeString() called but Intl is unavailable";
          return __LOG__(4)`${n}`, SEND_LOGS(n), "";
        }
        var r = t + (0, o.m)();
        switch (e) {
          case "dateAndTime":
            return (
              null == w &&
                (w = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, g, { hour12: A })
                )),
              w.format((0, o.D)(r))
            );
          case "date":
            return (
              null == m && (m = new Intl.DateTimeFormat(O(), h)),
              m.format((0, o.D)(r))
            );
          case "dateShort":
            return (
              null == y &&
                (y = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, h, { year: "2-digit" })
                )),
              y.format((0, o.D)(r))
            );
          case "yearDate":
            return (
              null == b &&
                (b = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, d, { month: "short", day: "numeric" })
                )),
              b.format((0, o.D)(r))
            );
          case "weekday":
            return (
              null == k &&
                (k = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, d, { weekday: "long" })
                )),
              k.format((0, o.D)(r))
            );
          case "weekdayShort":
            return (
              null == C &&
                (C = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, d, { weekday: "short" })
                )),
              C.format((0, o.D)(r))
            );
          case "time":
            return (
              null == _ &&
                (_ = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, p, { hour12: A })
                )),
              _.format((0, o.D)(r))
            );
          case "fulldateShort":
            return (
              null == S &&
                (S = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, d, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                )),
              S.format((0, o.D)(r))
            );
          case "fulldate":
            return (
              null == E &&
                (E = new Intl.DateTimeFormat(
                  O(),
                  Object.assign({}, d, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                )),
              E.format((0, o.D)(r))
            );
          default:
            return (0, i.a)(e);
        }
      }
      function D(t) {
        var e = t,
          n = Math.floor(e / 3600);
        e -= 3600 * n;
        var r = Math.floor(e / 60);
        return (
          (e = Math.round(e - 60 * r)),
          n > 0 ? `${(0, u.i)(n)}:${s(r)}:${s(e)}` : `${(0, u.i)(r)}:${s(e)}`
        );
      }
      var x = null;
      function B(t, e) {
        return (
          null == x && (x = new Intl.DateTimeFormat(e, { weekday: "long" })),
          x.format(new Date(2021, 10, t))
        );
      }
      var T = null;
      function N(t, e) {
        var n = new Date();
        return (
          n.setHours(0, t, 0, 0),
          null == T &&
            (T = new Intl.DateTimeFormat(e, {
              hour: "numeric",
              minute: "numeric",
            })),
          T.format(n)
        );
      }
    },
    function (t, e, n) {
      var r, i;
      n.d(e, "a", function () {
        return o;
      });
      var o =
        ((r = class {
          constructor(t) {
            i.call(this), (this.BI = t);
          }
          onOrBeforeRepaint(t) {
            if (!this.BK) {
              var e = Date.now(),
                n = this.BN;
              if (!(0 !== n && e < n)) {
                var r = this.BM;
                (0 === r || e < r) && (this.BM = e),
                  this.BJ && (clearTimeout(this.BJ), (this.BJ = 0)),
                  (!this.ts || this.ts > e) && (this.ts = e),
                  (this.BO = t),
                  (this.BK = requestAnimationFrame(this.BP));
              }
            }
          }
          onOrAfter(t, e) {
            u(t);
            var n = Date.now() + t,
              r = this.BN;
            if (!(0 !== r && n < r)) {
              var i = this.BM;
              (0 !== i && i < n) ||
                ((this.BN = n), (!this.BJ || this.ts < n) && this.BQ(n, t, e));
            }
          }
          debounce(t, e) {
            u(t), this.BR(Date.now(), t, e);
          }
          debounceAndCap(t, e, n) {
            u(t), u(e);
            var r = Date.now(),
              i = r + e,
              o = this.BN,
              a = this.BM;
            (0 === o || o <= i) && (0 === a || i < a) && (this.BM = i),
              this.BR(r, t, n);
          }
          forceRunNowIfScheduled() {
            this.BJ
              ? (clearTimeout(this.BJ), this.BP())
              : this.BK && (cancelAnimationFrame(this.BK), this.BP());
          }
          isScheduled() {
            return 0 !== this.BJ || 0 !== this.BK;
          }
          BR(t, e, n) {
            var r = t + e,
              i = this.BN;
            if (!(0 !== i && r < i)) {
              var o = this.ts,
                u = this.BM;
              0 !== u && u < r
                ? o < u && this.BQ(u, u - t, n)
                : o < r && this.BQ(r, e, n);
            }
          }
          BQ(t, e, n) {
            if (
              (this.BK && (cancelAnimationFrame(this.BK), (this.BK = 0)),
              (this.BO = n),
              (this.ts = t),
              this.BJ)
            ) {
              var r = t - this.BL;
              if (-16 < r && r < 16) return;
              clearTimeout(this.BJ);
            }
            (this.BJ = setTimeout(this.BP, e)), (this.BL = t);
          }
        }),
        (i = function () {
          (this.BJ = 0),
            (this.BK = 0),
            (this.ts = 0),
            (this.BL = 0),
            (this.BM = 0),
            (this.BN = 0),
            (this.BO = void 0),
            (this.BP = () => {
              var t = this.BO,
                e = this.BI;
              (this.BK = 0),
                (this.BJ = 0),
                (this.ts = 0),
                (this.BL = 0),
                (this.BM = 0),
                (this.BN = 0),
                (this.BO = void 0),
                e(t);
            }),
            (this.onOrBefore = (t, e) => {
              u(t);
              var n = Date.now() + t,
                r = this.BM;
              if (!(0 !== r && r < n)) {
                var i = this.BN;
                (0 !== i && n < i) ||
                  ((this.BM = n),
                  this.BK || (this.BJ && !(n < this.ts)) || this.BQ(n, t, e));
              }
            }),
            (this.forceRunNow = (t) => {
              this.BJ && clearTimeout(this.BJ),
                this.BK && cancelAnimationFrame(this.BK),
                (this.BO = t),
                this.BP();
            }),
            (this.cancel = () => {
              this.BJ && clearTimeout(this.BJ),
                this.BK && cancelAnimationFrame(this.BK),
                (this.BJ = 0),
                (this.BK = 0),
                (this.ts = 0),
                (this.BL = 0),
                (this.BM = 0),
                (this.BN = 0),
                (this.BO = void 0);
            });
        }),
        r);
      function u(t) {
        if (!(t >= 0)) throw new Error("ShiftTimer must be given delay >= 0");
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = class {
          constructor() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -1;
            (this.EW = Promise.resolve()), (this.EX = t);
          }
          wait() {
            return this.EW;
          }
          enqueueHandlers(t, e, n) {
            var r = this.EW.then(() => t).then(e, n),
              i = r.then();
            return (this.EW = o(r, this.EX)), i;
          }
          enqueue(t) {
            var e = this.EW.then(t),
              n = e.then();
            return (this.EW = o(e, this.EX)), n;
          }
        },
        i = class {
          constructor() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -1;
            (this.EY = new Map()), (this.EX = t);
          }
          waitIfPending(t) {
            return this.EY.get(t);
          }
          wait(t) {
            return this.EY.get(t) || Promise.resolve();
          }
          enqueueHandlers(t, e, n, r) {
            var i = this.wait(t)
              .then(() => e)
              .then(n, r);
            return this.EZ(t, i);
          }
          enqueue(t, e) {
            var n = this.wait(t).then(e);
            return this.EZ(t, n);
          }
          EZ(t, e) {
            var n,
              r = e.then(),
              i = () => {
                this.EY.get(t) === n && this.EY.delete(t);
              };
            return (n = o(e, this.EX).then(i, i)), this.EY.set(t, n), r;
          }
        };
      function o(t, e) {
        return e >= 0
          ? new Promise((n) => {
              var r = () => {
                n();
              };
              t.then(r, r), setTimeout(r, e);
            })
          : t.then(u, u);
      }
      function u() {}
    },
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "defineDb", function () {
          return c;
        }),
        n.d(e, "getProfilePicTable", function () {
          return p;
        }),
        n.d(e, "nukeProfilePicTable", function () {
          return g;
        });
      var r = n(5),
        i = n(3),
        o = n(10),
        u = n(123),
        a = n(14),
        s = { thumbnails: "fullImages", icons: "thumbImages" };
      function c(t) {
        t.version(1).stores({ fullImages: "jid", thumbImages: "jid" });
      }
      var l = (0, u.a)(a.b, c);
      function f(t) {
        if (t) return Object.assign({}, t, { photoId: t.photoId || null });
      }
      var d = class extends r.b {
        constructor() {
          super(l);
        }
        getAllStoreNames() {
          return (0, o.x)(s);
        }
        getThumbnailsStore() {
          return this.stores.fullImages;
        }
        getIconsStore() {
          return this.stores.thumbImages;
        }
        getThumb(t) {
          return (0, r.i)(this.getThumbnailsStore().get(t)).then(f);
        }
        getIcon(t) {
          return (0, r.i)(this.getIconsStore().get(t)).then(f);
        }
        getIcons(t) {
          return (0, r.i)(
            this.getIconsStore().where("jid").anyOf(t).toArray()
          ).then((t) => t.map(f));
        }
        refreshLastUpdated(t) {
          var e = (0, i.E)();
          return (0, r.i)(
            this.getThumbnailsStore().update(t, { lastUpdated: e })
          ).then(() => e);
        }
        setDontRetryBefore(t, e) {
          return (0, r.i)(
            this.getThumbnailsStore().update(t, { dontRetryBefore: e })
          );
        }
        storeEmptyThumb(t, e) {
          return this.storeThumb(t, null, e);
        }
        storeThumb(t, e, n) {
          var o = (0, i.E)(),
            u = {
              jid: t,
              photoId: e ? e.photoId : null,
              image: e ? e.thumb : null,
              lastUpdated: o,
            };
          null != n && (u.dontRetryBefore = n);
          var a = {
            jid: t,
            photoId: e ? e.photoId : null,
            image: e ? e.icon : null,
          };
          return this.transact("rw", this.getAllStoreNames(), () =>
            (0, r.c)([
              this.getThumbnailsStore().put(u),
              this.getIconsStore().put(a),
            ])
          ).then(() => u);
        }
        clearRecord(t) {
          return (0, r.i)(
            this.getThumbnailsStore().update(t, { lastUpdated: null })
          ).then(() => {});
        }
        clearRecords(t) {
          return this.transact("rw", [s.thumbnails], () =>
            (0, r.c)(
              t.map((t) =>
                this.getThumbnailsStore().update(t, { lastUpdated: null })
              )
            )
          ).then(() => {});
        }
        deleteRecord(t) {
          return this.transact("rw", this.getAllStoreNames(), () =>
            (0, r.c)([
              this.getThumbnailsStore().delete(t),
              this.getIconsStore().delete(t),
            ]).then(() => {})
          );
        }
        clearStores() {
          return (0, r.i)(
            (0, r.c)([
              this.getThumbnailsStore().clear(),
              this.getIconsStore().clear(),
            ])
          );
        }
      };
      e.default = d;
      var h = null;
      function p() {
        return h || (h = new d()), h;
      }
      function g() {
        return (0, r.i)(p().stores.delete());
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return g;
        }),
        n.d(e, "e", function () {
          return v;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return y;
        }),
        n.d(e, "h", function () {
          return b;
        }),
        n.d(e, "l", function () {
          return _;
        }),
        n.d(e, "k", function () {
          return w;
        }),
        n.d(e, "j", function () {
          return k;
        }),
        n.d(e, "i", function () {
          return E;
        });
      var r = n(45),
        i = n(10),
        o = n(3),
        u = n(34),
        a = {
          "image/webp": "webp",
          "image/jpeg": "jpg",
          "video/3gpp": "3gp",
          "video/mp4": "mp4",
          "video/mpeg": "mpg",
          "video/avi": "avi",
          "audio/ogg; codecs=opus": "opus",
          "audio/ogg": "ogg",
          "audio/mpeg": "mp3",
          "audio/mp3": "mp3",
          "audio/mp4": "m4a",
          "audio/aac": "aac",
          "audio/amr": "amr",
          "application/pdf": "pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            "docx",
          "text/vcard": "vcf",
        },
        s = { "image/": "IMG", "video/": "VID", "audio/": "AUD" },
        c = (0, r.k)("whatsapp"),
        l = "" + c,
        f = c + "/.private",
        d = c + "/.sent",
        h = c + "/.gifs",
        p = c + "/.status/.sent",
        g = c + "/.status",
        v = (0, r.k)(c + "/.tmp");
      function m(t) {
        var e = a[t] || "bin",
          n = (function () {
            var t = (0, o.G)(),
              e = (0, i.p)(t.getMonth() + 1, 2),
              n = (0, i.p)(t.getDate(), 2);
            return `${t.getFullYear()}${e}${n}`;
          })(),
          r = (0, u.l)(4).toLowerCase(),
          c = t.substring(0, t.indexOf("/") + 1);
        return `WA-${s[c] || "DOC"}-${n}-${r}.${e}`;
      }
      function y(t) {
        var e = m(t);
        return (0, r.k)(`${h}/${e}`);
      }
      function b(t, e) {
        var n = m(t);
        return e.isStatus
          ? e.outgoing
            ? (0, r.k)(`${p}/${n}`)
            : (0, r.k)(`${g}/${n}`)
          : e.outgoing
          ? (0, r.k)(`${d}/${n}`)
          : e.showInGallery
          ? (0, r.k)(`${l}/${n}`)
          : (0, r.k)(`${f}/${n}`);
      }
      function _(t, e) {
        return e.showInGallery
          ? !t.showInGallery
          : (e.showInGallery, !e.isStatus && !!t.isStatus);
      }
      function w(t) {
        var e = k(t);
        return e
          ? !e.showInGallery
          : (__LOG__(4)`Unexpected filesystem path`,
            SEND_LOGS("external-filesystem-path"),
            !1);
      }
      function k(t) {
        var e = (0, r.o)(t).relativePath;
        return e.startsWith(c)
          ? e.startsWith(g)
            ? { isStatus: !0, outgoing: e.startsWith(p) }
            : e.startsWith(d)
            ? { outgoing: !0 }
            : { outgoing: !1, showInGallery: !e.startsWith(f) }
          : null;
      }
      var C = /^(.*.)\.[^.]+$/;
      function E(t) {
        return t.replace(C, "$1");
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "g", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return f;
        });
      var r = Object.create(Error.prototype, {
        constructor: { value: void 0, writable: !0, configurable: !0 },
      });
      function i(t) {
        var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        function i(n) {
          var r = Error.call(this, n);
          (this.message = n),
            (r.name = t),
            (this.name = t),
            e && (this.stack = r.stack);
        }
        return (
          (i.prototype = Object.create(n ? n.prototype : r)),
          (i.prototype.constructor = i),
          i
        );
      }
      i("AggregateError", !0);
      var o = class extends i("TimeoutError", !1) {},
        u = class extends i("HttpError", !1) {
          constructor(t, e) {
            super(t), (this.code = e);
          }
        },
        a = (i("UnimplementedMethod"), !1);
      function s(t) {
        if (null == t || "QuotaExceededError" !== t.name) throw t;
        a = !0;
      }
      function c() {
        return a;
      }
      function l(t) {
        return JSON.stringify(t, Object.getOwnPropertyNames(t));
      }
      var f = class extends Error {
        constructor(t, e) {
          super(t), (this.inner = e);
        }
      };
    },
    ,
    function (t, e, n) {
      n.d(e, "f", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return g;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "j", function () {
          return m;
        }),
        n.d(e, "d", function () {
          return y;
        }),
        n.d(e, "l", function () {
          return b;
        }),
        n.d(e, "a", function () {
          return _;
        }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return k;
        }),
        n.d(e, "k", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return E;
        });
      var r = n(93),
        i = n(31),
        o = n.n(i),
        u = n(14),
        a = n(3),
        s = n(182),
        c = n(21),
        l = n(39),
        f = new WeakMap();
      function d(t) {
        if (!f.has(t)) {
          var e = (function (t) {
            switch (t.type) {
              case "image":
              case "gif":
              case "video":
                return t.caption;
              case "text":
                return t.text;
              default:
                return (0, o.a)(t.type);
            }
          })(t);
          e && f.set(t, (0, r.e)(e, null));
        }
        return f.get(t);
      }
      function h(t) {
        var e = (16777215 & t).toString(16);
        return "#" + "00000".substring(0, 6 - e.length) + e;
      }
      function p(t) {
        return t ? h(t) : "#000";
      }
      function g(t) {
        var e = t.findIndex((t) => !(0, l.h)(t.ack));
        return e < 0
          ? { first: null, count: 0 }
          : { first: t[e], count: t.length - e };
      }
      function v(t, e) {
        return e.campaignId
          ? null != e.campaignReadTs
            ? (0, a.o)(t, e.campaignReadTs, u.Q)
            : null == e.campaignDuration ||
              (0, a.o)(t, e.ts, e.campaignDuration)
          : !(0, l.k)(e.ack) || (0, a.o)(t, e.ts, u.Q);
      }
      function m(t) {
        return t.campaignId && null == t.campaignDuration
          ? t.campaignReadTs
          : t.ts;
      }
      function y(t, e, n) {
        var r = new Set(t);
        switch (e.type) {
          case "whitelist":
            var i = e.whitelist.filter((t) => r.has(t)),
              o = (0, c.m)(i);
            return {
              type: "whitelist",
              participants: o,
              whitelist: o,
              blacklist: n.blacklist,
            };
          case "blacklist":
            var u = new Set(e.blacklist);
            return {
              type: "blacklist",
              participants: (0, c.g)((0, c.c)(r), (t) => !u.has(t)),
              blacklist: (0, c.c)(u),
              whitelist: (0, c.g)(n.whitelist, (t) => r.has(t)),
            };
          default:
            return (
              e.type,
              {
                type: "contacts",
                participants: (0, c.c)(r),
                blacklist: n.blacklist,
                whitelist: (0, c.g)(n.whitelist, (t) => r.has(t)),
              }
            );
        }
      }
      function b(t) {
        switch (t.type) {
          case "contacts":
            return { type: "contacts" };
          case "blacklist":
            return { type: "blacklist", blacklist: t.blacklist };
          default:
            return t.type, { type: "whitelist", whitelist: t.whitelist };
        }
      }
      function _(t) {
        if (t && "@psa" === t.jid) return t;
      }
      function w(t) {
        for (var e = (0, s.a)(t), n = t.indexOf("\n"); n >= 0; )
          (e += 49), (n = t.indexOf("\n", n + 1));
        return e;
      }
      function k(t) {
        return (function (t) {
          var e = t.indexOf("\n");
          if (e < 0) return (0, s.b)(t, 0, u.P);
          for (var n = 0, r = 0; e >= 0; ) {
            var i = t.substring(r, e),
              o = n + (0, s.a)(i) + 50;
            o > u.P
              ? (e = -1)
              : ((r = e + 1), (e = t.indexOf("\n", r)), (n = o));
          }
          return t.substring(0, r) + (0, s.b)(t.substring(r), 0, u.P - n);
        })(t.trim()).trim();
      }
      function C(t) {
        switch (t.from) {
          case "cameraTab":
            return 1;
          case "forwardFromMessages":
            return 3;
          case "externalShare":
            return 4;
          default:
            return t.from, 2;
        }
      }
      function E(t) {
        switch (t.type) {
          case "blacklist":
            return 0 === t.blacklist.length ? 877 : [t.blacklist.length, 219];
          case "whitelist":
            return [t.whitelist.length, 220];
          default:
            return t.type, 877;
        }
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
      var r = { ON_PREMISE: "1", FB: "2" },
        i = { SELF: "1", BSP: "2" };
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "defineDb", function () {
          return f;
        }),
        n.d(e, "jobsTable", function () {
          return v;
        }),
        n.d(e, "DummyJobsTable", function () {
          return m;
        });
      var r = n(5),
        i = n(3),
        o = n(34),
        u = n(82),
        a = n(123),
        s = n(14),
        c = n(119);
      n.d(e, "UNSTARTED_JOB", function () {
        return c.f;
      }),
        n.d(e, "FINISHED_JOB", function () {
          return c.a;
        });
      var l = "appRunId";
      function f(t) {
        t.version(1).stores({
          bookmarks: "++jobId, type, uniqKey",
          meta: "key",
        });
      }
      var d,
        h = (0, a.a)(s.r, f),
        p = class extends r.b {
          constructor() {
            super(h), (this.Ai = (0, o.l)(8));
          }
          maybeCreateJob(t) {
            var e = t.type,
              n = t.args,
              o = t.version,
              u = void 0 === o ? 1 : o,
              a = t.uniqKey,
              s = g(e, a),
              l = {
                type: e,
                uniqKey: s,
                startTime: (0, i.E)(),
                version: u,
                original: n,
                current: n,
                step: c.f,
                waitUntil: null,
                stepFirstStartTime: null,
                stepHardStartCountAfterTimeout: 0,
                stepUnexpectedErrorCount: 0,
                backedOffCount: 0,
              };
            return a
              ? this.transact("rw", ["bookmarks"], () =>
                  this.stores.bookmarks
                    .where("uniqKey")
                    .equals(s)
                    .toArray()
                    .then((t) => {
                      var e,
                        n = [];
                      if (
                        (t.forEach((t) => {
                          t.step === c.a
                            ? n.push(this.stores.bookmarks.delete(t.jobId))
                            : (e = t);
                        }),
                        e)
                      ) {
                        var i = e.jobId;
                        return (
                          __LOG__(2)`Job with ${s} already exists as ${i}`,
                          (0, r.c)(n).then(() => ({
                            newlyCreated: !1,
                            jobId: i,
                          }))
                        );
                      }
                      return (0, r.c)(n).then(() =>
                        this.stores.bookmarks
                          .add(l)
                          .then((t) => ({ newlyCreated: !0, jobId: t }))
                      );
                    })
                )
              : (0, r.i)(this.stores.bookmarks.add(l)).then((t) => ({
                  newlyCreated: !0,
                  jobId: t,
                }));
          }
          loadBookmark(t) {
            return (0, r.i)(this.stores.bookmarks.get(t));
          }
          loadAllBookmarks() {
            return (0, r.i)(this.stores.bookmarks.toArray());
          }
          saveBookmarkAsPage(t) {
            return this.transact("rw", ["meta", "bookmarks"], () =>
              (0, r.c)([this.Aj(), this.stores.bookmarks.put(t)])
            );
          }
          saveBookmarkIfNoPage(t) {
            return this.transact("rw", ["meta", "bookmarks"], () =>
              this.Ak().then(
                (e) => !!e || this.stores.bookmarks.put(t).then(() => !1)
              )
            );
          }
          removeJob(t) {
            return (0, r.i)(this.stores.bookmarks.delete(t));
          }
          removeFinishedJob(t) {
            return this.transact("rw", ["bookmarks"], () =>
              this.stores.bookmarks
                .get(t)
                .then((e) => {
                  if (e)
                    return e.step !== c.a
                      ? (__LOG__(
                          4
                        )`Tried to clear unfinished job. This can be dangerous. Skipping`,
                        void SEND_LOGS("clear-unfinished-job"))
                      : this.stores.bookmarks.delete(t);
                  __LOG__(2)`removeFinishedJob: No bookmark for job ${t}`;
                })
                .then(() => {})
            );
          }
          updateAppRunId() {
            return (0, r.i)(this.Aj());
          }
          Aj() {
            return this.stores.meta.put({ key: l, value: this.Ai }).catch(u.g);
          }
          checkAppRunId() {
            return (0, r.i)(this.Ak());
          }
          Ak() {
            return this.stores.meta
              .get(l)
              .then((t) => !t || t.value !== this.Ai);
          }
          clearFinishedJob(t, e) {
            var n = g(t, e);
            return this.transact("rw", ["bookmarks"], () =>
              this.stores.bookmarks
                .where("uniqKey")
                .equals(n)
                .filter((t) => t.step === c.a)
                .delete()
                .then(
                  (t) => (
                    t > 1 &&
                      (__LOG__(3)`More than one job was found for uniqKey ${e}`,
                      SEND_LOGS("multiple-uniqKey-job")),
                    t > 0
                  )
                )
            );
          }
        };
      function g(t, e) {
        return e ? JSON.stringify([t, e]) : (0, o.l)(32);
      }
      function v() {
        return d || (d = new p()), d;
      }
      e.default = p;
      var m = class {
        constructor() {
          (this.Al = 1), (this.Am = new Map());
        }
        maybeCreateJob(t) {
          var e = t.type,
            n = t.args,
            r = t.version,
            u = void 0 === r ? 1 : r,
            a = t.uniqKey,
            s = this.Al++,
            l = {
              jobId: s,
              uniqKey: JSON.stringify([e, a || (0, o.l)(32)]),
              type: e,
              startTime: (0, i.E)(),
              version: u,
              original: n,
              current: n,
              step: c.f,
              waitUntil: null,
              stepFirstStartTime: null,
              stepHardStartCountAfterTimeout: 0,
              stepUnexpectedErrorCount: 0,
              backedOffCount: 0,
            };
          return (
            this.Am.set(s, l), Promise.resolve({ newlyCreated: !0, jobId: s })
          );
        }
        getJob(t) {
          return this.Am.get(t);
        }
        removeJob(t) {
          this.Am.delete(t);
        }
      };
    },
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return q;
      }),
        n.d(e, "a", function () {
          return z;
        }),
        n.d(e, "d", function () {
          return W;
        }),
        n.d(e, "c", function () {
          return J;
        }),
        n.d(e, "b", function () {
          return H;
        });
      var r,
        i = n(9),
        o = n.n(i),
        u = n(57),
        a = n(7),
        s = n(40),
        c = n(35),
        l = n(6),
        f = n(180),
        d = null,
        h = n(143),
        p = /^\s$/,
        g = {
          bold: 1,
          italic: 1,
          strikethrough: 1,
          code: 3,
          mention: 0,
          emoji: 0,
          link: 0,
          phoneNumber: 0,
        };
      function v(t) {
        return p.test(t);
      }
      function m(t) {
        return "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".includes(t);
      }
      function y(t) {
        return null == t || v(t) || m(t);
      }
      function b(t) {
        return null != t && !v(t);
      }
      function _(t, e, n, r) {
        var i = t.openings[e];
        return (
          !(r && null != i && n <= i + g[e]) &&
          ("italic" !== e ||
            !(function (t, e) {
              return (
                "¯\\_(ツ)_/¯" === t.text.slice(e - 2, e + 7) ||
                "¯\\_(ツ)_/¯" === t.text.slice(e - 6, e + 3)
              );
            })(t, n)) &&
          ("code" === e
            ? "`" === t.text[n + 1] && "`" === t.text[n + 2]
            : r
            ? b(t.text[n - 1]) && y(t.text[n + 1])
            : y(t.text[n - 1]) && b(t.text[n + 1]))
        );
      }
      function w(t, e, n) {
        !(function (t, e) {
          return null != t.openings[e];
        })(t, e)
          ? _(t, e, n, !1) && k(t, e, n)
          : _(t, e, n, !0) && C(t, e, n);
      }
      function k(t, e, n) {
        null == t.openings[e]
          ? ((t.openings[e] = n),
            "phoneNumber" === e &&
              ((t.phoneNumber = ""),
              (t.phoneNumberStartsWithPlus = !1),
              (t.phoneNumberLastSignificantCodePoint = -1),
              (t.phoneNumberParenthesesDepth = 0),
              (t.phoneNumberLeadingZeroes = 0),
              (t.phoneNumberCurrentlyMatchingLeadingZeroes = !0)))
          : __LOG__(4)`Msg formatting: cannot open a style before closing it`;
      }
      function C(t, e, n) {
        var r = t.openings[e];
        if (null != r) {
          var i = g[e];
          if (i > 0 && 0 === t.text.slice(r + i, n).trim().length) return;
          switch (
            ("bold" !== e && E(t, "bold", r),
            "italic" !== e && E(t, "italic", r),
            "strikethrough" !== e && E(t, "strikethrough", r),
            "code" === e &&
              ((function (t, e, n) {
                t.styles = t.styles.filter((t) => {
                  var r = t.type,
                    i = t.start,
                    o = t.end;
                  return (
                    "mention" === r || (i < e && o < e) || (i > n && o > n)
                  );
                });
              })(t, r, n),
              S(t, "bold"),
              S(t, "italic"),
              S(t, "strikethrough")),
            e)
          ) {
            case "bold":
              t.styles.push({ type: "bold", start: r, end: n, children: [] });
              break;
            case "italic":
              t.styles.push({ type: "italic", start: r, end: n, children: [] });
              break;
            case "strikethrough":
              t.styles.push({
                type: "strikethrough",
                start: r,
                end: n,
                children: [],
              });
              break;
            case "code":
              t.styles.push({ type: "code", start: r, end: n, children: [] });
          }
          t.openings[e] = null;
        } else
          __LOG__(4)`Msg formatting: cannot close a style before opening it`;
      }
      function E(t, e, n) {
        null != t.openings[e] && t.openings[e] > n && S(t, e);
      }
      function S(t, e) {
        t.openings[e] = null;
      }
      function A(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 === t.length) return t;
        var n = e;
        if (1 === t.length) {
          var r = o()(t, 1),
            i = r[0];
          return (
            "phoneNumber" === i.type && (i.absoluteEndWithoutMarkup -= n), t
          );
        }
        var u = [],
          a = null;
        return (
          t.forEach((t) => {
            (n += g[t.type]),
              null == a
                ? ((a = t),
                  "phoneNumber" === t.type && (t.absoluteEndWithoutMarkup -= n))
                : t.start < a.end
                ? (t.end > a.end &&
                    __LOG__(
                      4
                    )`formatting: all styles should be fully nested or ignored`,
                  (t.start = t.start - a.start - g[a.type]),
                  (t.end = t.end - a.start - g[a.type]),
                  a.children.push(t))
                : ((a.children = A(a.children, g[a.type])),
                  u.push(a),
                  (a = t),
                  "phoneNumber" === t.type &&
                    (t.absoluteEndWithoutMarkup -= n)),
              (n += g[t.type]);
          }),
          null != a && ((a.children = A(a.children, g[a.type])), u.push(a)),
          u
        );
      }
      function I(t, e) {
        (t.phoneNumber = t.phoneNumber + String.fromCodePoint(e)),
          (t.phoneNumberLastSignificantCodePoint = e),
          t.phoneNumberCurrentlyMatchingLeadingZeroes &&
            (48 === e
              ? t.phoneNumberLeadingZeroes++
              : (t.phoneNumberCurrentlyMatchingLeadingZeroes = !1));
      }
      function O(t) {
        t.phoneNumberStartsWithPlus = !0;
      }
      function P(t) {
        t.phoneNumberLastSignificantCodePoint = 45;
      }
      function D(t) {
        t.phoneNumberLastSignificantCodePoint = 32;
      }
      function x(t, e) {
        1 !== t.phoneNumberParenthesesDepth
          ? (t.phoneNumberParenthesesDepth++,
            (t.phoneNumberLastSignificantCodePoint = -1))
          : C(t, "phoneNumber", e);
      }
      function B(t, e) {
        0 === t.phoneNumberParenthesesDepth ||
        t.phoneNumberLastSignificantCodePoint < 48 ||
        t.phoneNumberLastSignificantCodePoint > 57
          ? C(t, "phoneNumber", e)
          : (t.phoneNumberParenthesesDepth--,
            (t.phoneNumberLastSignificantCodePoint = -1));
      }
      var T = (0, f.a)(function (t) {
          return (0, u.g)(t);
        }),
        N = new RegExp(
          "\\.(?:бел|дети|москва|онлайн|орг|рус|рф|сайт|укр|قطر|भारत|বাংলা|გე|台灣|한국|[a-zA-Z]{2,15})",
          "y"
        );
      function M(t, e) {
        return (N.lastIndex = e), N.test(t);
      }
      function j(t, e, n) {
        switch (t.text[n]) {
          case ".":
          case ",":
          case "?":
          case "!":
          case ")":
          case "}":
          case "]":
            return !0;
          case "*":
            return null != e.bold && _(t, "bold", n, !0);
          case "_":
            return null != e.italic && _(t, "italic", n, !0);
          case "~":
            return null != e.strikethrough && _(t, "strikethrough", n, !0);
          case "`":
            return (
              null != e.code &&
              (_(t, "code", n, !0) ||
                ("`" === t.text[n - 1] && _(t, "code", n - 1, !0)) ||
                ("`" === t.text[n - 2] && _(t, "code", n - 2, !0)))
            );
          default:
            return !1;
        }
      }
      function L(t, e, n) {
        if (null != t.openings.link) {
          var i = (function (t, e, n) {
            for (var i = e, o = t.text; m(o[i]); ) ++i;
            for (
              var u = Object.assign({}, t.openings),
                a = t.styles.filter(
                  (t) =>
                    !(
                      i <= t.end &&
                      t.end <= n &&
                      (t.start < i && (u[t.type] = t.start), 1)
                    )
                ),
                s = 0,
                l = n - 1;
              l >= i && j(t, u, l);
              --l
            )
              ++s;
            var f,
              h = n - s,
              p = o.slice(i, h);
            if (
              (r ||
                (r = /^(?:mailto:)?(?:(?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(?:(?:[a-zA-Z\-0-9\u0080-\uFFFF]+\.)+[a-zA-Z\u0080-\uFFFF]{2,}))$/),
              r.test(p))
            );
            else {
              var g = (0, c.i)(p);
              if (!g) return;
              var v = g.hostname.split(".");
              (
                d ||
                ((d = new Set()),
                "abb|abbott|abc|abudhabi|ac|academy|accountant|actor|ad|ads|adult|ae|aero|af|africa|ag|agency|ai|al|alsace|am|amsterdam|ao|apartments|app|apple|aq|ar|archi|army|art|as|asia|at|au|auction|audio|auto|aws|ax|axa|az|ba|baby|band|bank|bar|barcelona|barclaycard|barclays|basketball|bayern|bb|bd|be|beer|berlin|best|bet|bf|bg|bh|bi|bible|bid|bike|bio|biz|bj|black|blog|blue|bm|bn|bnpparibas|bo|bot|boutique|box|br|bradesco|broker|brother|brussels|bs|bt|build|builders|business|buzz|bw|by|bz|ca|cab|cafe|cam|camera|camp|canon|capital|cards|care|careers|cars|casa|cash|casino|cat|cc|cd|center|ceo|cern|cf|cg|ch|chat|cheap|christmas|chrome|church|ci|city|ck|cl|claims|click|clinic|clothing|cloud|club|cm|cn|co|coach|codes|coffee|college|com|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|corsica|coupons|courses|cr|credit|cricket|crs|cruises|cu|cv|cw|cx|cy|cymru|cz|dance|date|dating|de|deals|degree|delivery|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|do|doctor|dog|domains|download|dvag|dz|earth|ec|eco|edu|education|ee|eg|email|energy|engineering|enterprises|es|estate|et|etisalat|eu|eus|events|exchange|expert|exposed|express|fail|faith|family|fan|fans|farm|fashion|fi|film|finance|fish|fishing|fit|fitness|fj|flowers|fm|fo|football|forex|forsale|foundation|fr|frl|fun|fund|furniture|futbol|fyi|ga|gal|gallery|game|games|garden|gd|gdn|ge|gg|gh|gi|gift|gifts|gives|gl|glass|gle|global|gm|gmbh|gn|gold|golf|goog|google|gop|gov|gp|gq|gr|graphics|gratis|green|group|gs|gt|guide|guru|gy|hamburg|haus|health|healthcare|help|here|hermes|hisamitsu|hitachi|hk|hm|hn|hockey|holdings|holiday|homes|honda|horse|hospital|host|hosting|hot|house|how|hr|ht|hu|icu|id|ie|il|im|in|inc|industries|info|ink|institute|insure|int|international|investments|io|iq|ir|irish|is|ismaili|ist|istanbul|it|jcb|je|jewelry|jm|jo|jobs|jp|kaufen|ke|kg|kh|ki|kim|kitchen|kiwi|kn|koeln|komatsu|kp|kpmg|kr|krd|kred|kw|ky|kyoto|kz|la|land|lat|law|lawyer|lb|lc|leclerc|legal|li|lidl|life|lighting|limited|limo|link|live|lk|llc|loan|loans|lol|london|love|lr|ls|lt|ltd|lu|luxury|lv|ly|ma|madrid|maison|management|market|marketing|markets|mba|mc|md|me|media|melbourne|men|menu|mg|miami|mil|mk|ml|mm|mn|mo|mobi|moda|moe|moi|mom|monash|money|monster|moscow|movie|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|nagoya|name|nc|ne|net|network|neustar|news|nf|ng|ngo|ni|nico|ninja|nl|no|np|nrw|ntt|nu|nyc|nz|observer|office|okinawa|om|one|onl|online|ooo|org|organic|ovh|pa|page|paris|partners|parts|party|pe|pet|pf|pg|ph|pharmacy|photo|photography|photos|pics|pictet|pictures|pink|pioneer|pizza|pk|pl|place|plus|pm|pn|poker|porn|post|pr|press|pro|prod|productions|promo|properties|ps|pt|pub|pw|py|qa|quebec|radio|re|realestate|realtor|realty|recipes|red|ren|rent|rentals|repair|report|rest|restaurant|review|reviews|ricoh|rio|rip|ro|rocks|rodeo|rs|ru|rugby|ruhr|run|rw|sa|sale|salon|sandvik|sap|sas|saxo|sb|sbi|sc|schmidt|school|schule|science|scot|sd|se|security|services|sex|sexy|sg|sh|sharp|shiksha|shoes|shop|shopping|show|si|singles|site|sk|ski|sl|sm|sn|sncf|so|soccer|social|software|solar|solutions|sony|soy|space|sport|spot|sr|srl|st|stockholm|store|stream|studio|study|style|su|supply|support|surf|sv|swiss|sx|sy|sydney|systems|sz|taipei|tatamotors|tatar|tax|taxi|tc|td|team|tech|technology|tel|tennis|tf|tg|th|theater|tickets|tips|tires|tj|tk|tl|tm|tn|to|today|tokyo|tools|top|tours|town|toyota|toys|tr|trade|trading|training|travel|trust|tt|tube|tv|tw|tz|ua|ug|uk|university|uno|uol|us|uy|uz|va|vacations|vanguard|vc|ve|vegas|ventures|vet|vg|vi|video|villas|vin|vip|vision|vn|vote|voyage|vu|wales|wang|watch|webcam|weber|website|wedding|weir|wf|wien|wiki|win|wine|work|works|world|ws|wtf|xin|xyz|yandex|ye|yoga|yokohama|youtube|yt|za|zip|zm|zone|zw"
                  .split("|")
                  .forEach((t) => d && d.add(t)),
                [
                  "xn--90ais",
                  "xn--d1acj3b",
                  "xn--80adxhks",
                  "xn--80asehdb",
                  "xn--c1avg",
                  "xn--p1acf",
                  "xn--p1ai",
                  "xn--80aswg",
                  "xn--j1amh",
                  "xn--wgbl6a",
                  "xn--h2brj9c",
                  "xn--54b7fta0cc",
                  "xn--node",
                  "xn--kpry57d",
                  "xn--3e0b707e",
                ].forEach((t) => d && d.add(t)),
                d)
              ).has(v[v.length - 1]) && (f = g.toString());
            }
            if (f) {
              var y = f;
              (t.openings = u), (t.styles = a);
              for (var b = h; b < n; ++b)
                switch (o[b]) {
                  case "*":
                    C(t, "bold", b);
                    break;
                  case "_":
                    C(t, "italic", b);
                    break;
                  case "~":
                    C(t, "strikethrough", b);
                    break;
                  case "`":
                    _(t, "code", b, !0) && C(t, "code", b);
                }
              return (
                R(t) && C(t, "phoneNumber", h),
                {
                  type: "link",
                  start: i,
                  end: h,
                  id: "link" + ++t.uniqueId,
                  href: y,
                  matchedText: p,
                  children: [],
                }
              );
            }
          })(t, e, n);
          null != i && t.styles.push(i),
            C(t, "link", (null == i ? void 0 : i.end) || n);
        }
      }
      function G(t, e) {
        return null != t && null != e && null != t.openings.mention;
      }
      function R(t) {
        return null != t && null != t.openings.phoneNumber;
      }
      function $(t, e, n, r) {
        var i = (function (t, e, n) {
          if (null != t.openings.mention) {
            for (
              var r = t.openings.mention, i = t.text.slice(r + 1, n), o = 0;
              o < e.values.length;
              ++o
            ) {
              var u = e.values[o];
              if (i.startsWith(u))
                return {
                  type: "mention",
                  start: r,
                  end: r + u.length + 1,
                  jid: e.toPhoneUserJid[u],
                  children: [],
                };
            }
            return (t.openings.mention = null), null;
          }
        })(t, e, r);
        return null == i
          ? n
          : (L(t, n, i.start),
            t.styles.push(i),
            C(t, "mention", r),
            R(t) && C(t, "phoneNumber", r),
            i.end + 1);
      }
      function K(t, e) {
        var n = (function (t, e) {
          if (null != t.openings.phoneNumber) {
            if (1 === t.phoneNumberParenthesesDepth) return null;
            var n = t.phoneNumber.slice(
              Math.min(2, t.phoneNumberLeadingZeroes)
            );
            if (0 === n.length) return null;
            var r = !1,
              i = n;
            if (
              t.phoneNumberStartsWithPlus ||
              t.phoneNumberLeadingZeroes >= 2
            ) {
              var o = (0, u.b)(n),
                a = n.slice(o.length);
              r = (0, u.f)(o, a);
            } else {
              var s = T(l.r.get());
              if ((r = (0, u.f)(s, n))) i = `${s}${n}`;
              else {
                var c = (0, u.b)(n);
                if (c === s) {
                  var f = n.slice(c.length);
                  r = (0, u.f)(c, f);
                }
              }
            }
            if (r) {
              var d = t.openings.phoneNumber;
              if (null == d) return null;
              var h = 45 === t.phoneNumberLastSignificantCodePoint ? e - 1 : e,
                p = t.text.slice(d, h);
              return {
                type: "phoneNumber",
                start: d,
                end: h,
                id: "phone" + ++t.uniqueId,
                phoneNumber: i,
                matchedText: p,
                absoluteEndWithoutMarkup: h,
                children: [],
              };
            }
            return null;
          }
        })(t, e);
        return (
          null != n &&
          (t.styles.push(n),
          C(t, "phoneNumber", e),
          t.parsedPhoneNumbers
            ? t.parsedPhoneNumbers.push(n)
            : (t.parsedPhoneNumbers = [n]),
          !0)
        );
      }
      function U(t, e) {
        K(t, e) || C(t, "phoneNumber", e);
      }
      function F(t) {
        return {
          uniqueId: 0,
          text: t,
          openings: {},
          styles: [],
          phoneNumber: "",
          phoneNumberStartsWithPlus: !1,
          phoneNumberLastSignificantCodePoint: -1,
          phoneNumberParenthesesDepth: 0,
          phoneNumberLeadingZeroes: 0,
          phoneNumberCurrentlyMatchingLeadingZeroes: !0,
          parsedPhoneNumbers: null,
        };
      }
      function q(t, e) {
        var n = null,
          r = (function (t) {
            if (null != t && 0 !== t.length) {
              for (
                var e = { values: [], toPhoneUserJid: {} }, n = 0, r = t.length;
                n < r;
                ++n
              ) {
                var i = t[n],
                  o = (0, a.u)(i);
                e.values.push(o), (e.toPhoneUserJid[o] = i);
              }
              return e;
            }
          })(e),
          i = 0,
          o = h.a;
        o.lastIndex = 0;
        for (
          var u = null,
            s = 0,
            c = t.length,
            l = 0,
            f = function () {
              if (l >= t.length) return 0;
              var e = 0;
              if (
                ((!u || l <= s) && ((o.lastIndex = s), (u = o.exec(t))),
                u && u.index === s)
              ) {
                var r = (0, h.e)(t, s);
                if (null != r) {
                  var i = r.normalized,
                    a = r.normalizedRemapped,
                    c = r.originalLength,
                    f = r.chunkId;
                  n || (n = F(t)),
                    (function (t, e, n, r, i, o) {
                      t.styles.push({
                        type: "emoji",
                        start: e,
                        end: e + i,
                        normalized: n,
                        normalizedRemapped: r,
                        chunkId: o,
                        children: [],
                      });
                    })(n, s, i, a, c, f),
                    (e = c);
                }
              }
              return (l = u ? s + e : t.length), e;
            },
            d = !0;
          s < c;

        ) {
          var g = t.codePointAt(s),
            v = (0, h.b)(g);
          G(n, r) && (g < 48 || g > 57) && (i = $(n, r, i, s)),
            p.test(t[s])
              ? (n && L(n, i, s), (i = s + 1))
              : ("(" !== t[s] && ")" !== t[s]) ||
                (n && n.openings.link) ||
                (i = s + 1),
            R(n) &&
              (g < 48 || g > 57) &&
              (45 === g
                ? 0 === n.phoneNumberParenthesesDepth
                  ? 45 === n.phoneNumberLastSignificantCodePoint
                    ? U(n, s)
                    : 0 === n.phoneNumber.length
                    ? C(n, "phoneNumber", s)
                    : P(n)
                  : C(n, "phoneNumber", s)
                : 40 === g ||
                  (41 === g
                    ? B(n, s)
                    : 32 === g
                    ? 32 === n.phoneNumberLastSignificantCodePoint
                      ? C(n, "phoneNumber", s)
                      : K(n, s) || D(n)
                    : U(n, s)));
          var m = !1;
          switch (g) {
            case 42:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              var y = t.codePointAt(s + 1);
              if (8419 === y || 65039 === y) {
                var b = f();
                b > 0 && ((v = b), (m = !0));
              }
              m ||
                (42 === g
                  ? (n || (n = F(t)), w(n, "bold", s))
                  : (R(n) || (n || (n = F(t)), k(n, "phoneNumber", s)),
                    I(n, g)));
              break;
            case 46:
              (null != n && null != n.openings.link) ||
                (M(t, s) && (n || (n = F(t)), k(n, "link", s)));
              break;
            case 64:
              null != r && (n || (n = F(t)), k(n, "mention", s));
              break;
            case 95:
              n || (n = F(t)), w(n, "italic", s);
              break;
            case 96:
              n || (n = F(t)), w(n, "code", s);
              break;
            case 126:
              n || (n = F(t)), w(n, "strikethrough", s);
              break;
            case 10:
            case 13:
              n || (n = F(t)),
                S(n, "bold"),
                S(n, "italic"),
                S(n, "strikethrough");
              break;
            case 43:
              n || (n = F(t)), k(n, "phoneNumber", s), O(n);
              break;
            case 40:
              R(n) || (n || (n = F(t)), k(n, "phoneNumber", s)), x(n, s);
              break;
            default:
              if (g >= 8252 || 169 === g || 174 === g || 35 === g) {
                var _ = f();
                _ && ((v = _), (m = !0));
              }
          }
          (s += v), (d = d && m);
        }
        return (
          n &&
            null != n.openings.mention &&
            null != r &&
            (i = $(n, r, i, t.length)),
          n && null != n.openings.link && L(n, i, t.length),
          n && null != n.openings.phoneNumber && U(n, t.length),
          n && n.styles.length > 0
            ? (n.styles.sort((t, e) => t.start - e.start),
              {
                styles: A(n.styles),
                parsedPhoneNumbers: n.parsedPhoneNumbers,
                allEmojis: d,
              })
            : null
        );
      }
      function z(t, e, n, r) {
        if (0 === e.length) return [t];
        var i = [],
          o = 0;
        return (
          e.forEach((e, u) => {
            o < e.start && i.push(t.slice(o, e.start));
            var a = t.slice(e.start + g[e.type], e.end);
            if (0 === a.length) return i;
            i.push(n(a, e, u.toString(), z, r)), (o = e.end + g[e.type]);
          }),
          o < t.length && i.push(t.slice(o)),
          i
        );
      }
      function W(t, e, n) {
        if (n.jid === t) return { name: n.pushname, jid: n.jid };
        var r = (0, s.c)(t, e);
        return { name: r.fullName || r.pushname, jid: t };
      }
      function J(t, e, n, r) {
        return e
          ? z(
              t,
              e.styles,
              (function t(e, n) {
                return (r, i, o) => {
                  return "mention" === i.type
                    ? ((s = (a = W(i.jid, e, n)).name),
                      (c = a.jid),
                      "@" + (s || (0, u.d)(c)))
                    : "emoji" === i.type
                    ? i.normalized
                    : (i.type, z(r, i.children, t(e, n)).join(""));
                  var a, s, c;
                };
              })(n, r)
            ).join("")
          : t;
      }
      function H(t) {
        var e = q(t);
        return e
          ? z(t, e.styles, (t, e, n) => {
              if ("emoji" !== e.type)
                throw new Error("formatEmojiOnly: invalid text");
              return e.normalized;
            }).join("")
          : t;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        });
      var r = n(82),
        i = class extends (0, r.d)("AbortError") {};
      function o(t, e) {
        return new Promise((n, r) => {
          if (null == e ? void 0 : e.aborted) throw new i();
          var o = setTimeout(function () {
            null == e || e.removeEventListener("abort", u), n();
          }, t);
          function u() {
            null == e || e.removeEventListener("abort", u),
              clearTimeout(o),
              r(new i());
          }
          null == e || e.addEventListener("abort", u);
        });
      }
      function u(t, e, n) {
        return new Promise((r, i) => {
          var o = setTimeout(() => {
            try {
              r(n());
            } catch (t) {
              i(t);
            }
          }, e);
          t.then(
            (t) => {
              clearTimeout(o), r(t);
            },
            (t) => {
              clearTimeout(o), i(t);
            }
          );
        });
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = { CHANGED_IN_CHAT: 0, INITIATED_BY_ME: 1, INITIATED_BY_OTHER: 2 };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "defineDb", function () {
          return s;
        }),
        n.d(e, "getChunkTable", function () {
          return h;
        });
      var r = n(5),
        i = n(45),
        o = n(3),
        u = n(123),
        a = n(14);
      function s(t) {
        t.version(1).stores({ chunks: "chunkId, owner, creationTs" });
      }
      function c(t) {
        return "media-" + t;
      }
      var l = (0, u.a)(a.e, s),
        f = class extends r.b {
          constructor() {
            super(l);
          }
          deleteMediaContent(t) {
            __LOG__(2)`deleteMediaContentUri for ${t}`;
            var e = i.m(t);
            if ("chunked" === e.type) {
              var n = e.mediaId,
                o = Math.floor((e.size - 1) / i.a),
                u = i.i(n, 0),
                a = i.i(n, o);
              return (0, r.i)(
                this.stores.chunks
                  .where("chunkId")
                  .between(u, a, !0, !0)
                  .delete()
                  .then(() => {})
              );
            }
            return (
              e.type,
              (0, r.i)(
                this.stores.chunks
                  .where("chunkId")
                  .equals(e.chunkId)
                  .delete()
                  .then(() => {})
              )
            );
          }
          deleteAllByMedia(t) {
            return (
              __LOG__(2)`deleteAllByMedia for media ${t}`,
              (0, r.i)(this.dexieDeleteAllByMedia(t))
            );
          }
          dexieDeleteAllByMedia(t) {
            return (
              __LOG__(2)`dexieDeleteAllByMedia for media ${t}`,
              this.stores.chunks.where("owner").equals(c(t)).delete()
            );
          }
          getFrame(t) {
            return this.BD(t);
          }
          storeStickerFrame(t, e) {
            return this.storeFrame(t, e);
          }
          storeFrame(t, e) {
            var n = i.j(t);
            return (0, r.i)(
              this.stores.chunks.put({
                chunkId: n,
                owner: c(t),
                chunk: e,
                creationTs: (0, o.E)(),
              })
            ).then(() => n);
          }
          getFullContent(t) {
            var e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = i.n(t),
              r = n.mimetype || a.D,
              o = i.m(n.uri);
            return "chunked" === o.type
              ? this.BE(o.mediaId, 0, o.size, r)
              : (o.type,
                this.BD(o.chunkId).then((t) =>
                  null == t
                    ? null
                    : t.type === r || !1 === e
                    ? t
                    : new Blob([t], { type: r })
                ));
          }
          BD(t) {
            return (0, r.i)(this.stores.chunks.get(t)).then(
              (t) => t && t.chunk
            );
          }
          BE(t, e, n, o) {
            var u = Math.floor(e / i.a),
              a = Math.floor((n - 1) / i.a),
              s = i.i(t, u),
              c = i.i(t, a),
              l = this.stores.chunks
                .where("chunkId")
                .between(s, c, !0, !0)
                .toArray();
            return (0, r.i)(l).then((t) => {
              if (t.length < a - u + 1)
                return (
                  __LOG__(
                    4
                  )`_gatherChunks only ${t.length} chunks between ${s} and ${c}`,
                  null
                );
              var r = new Blob(
                  t.map((t) => t.chunk),
                  { type: o }
                ),
                l = u * i.a;
              return e === l && n - e === r.size ? r : r.slice(e - l, n - l, o);
            });
          }
          storeFullContent(t, e) {
            var n = i.g(t);
            return (0, r.i)(
              this.stores.chunks.put({
                chunkId: n,
                owner: c(t),
                chunk: e,
                creationTs: (0, o.E)(),
              })
            ).then(() => n);
          }
          storeGdprReport(t) {
            return (0, r.i)(
              this.stores.chunks.put({
                chunkId: i.b,
                owner: i.c,
                chunk: t,
                creationTs: (0, o.E)(),
              })
            ).then(() => {});
          }
          getGdprReportBlob() {
            var t = this.stores.chunks.get(i.b);
            return (0, r.i)(t).then((t) => (null == t ? void 0 : t.chunk));
          }
          deleteGdprReport() {
            var t = this.stores.chunks.delete(i.b);
            return (0, r.i)(t).then(() => {});
          }
          clearAll() {
            return (0, r.i)(this.stores.chunks.clear());
          }
        };
      e.default = f;
      var d = null;
      function h() {
        return d || (d = new f()), d;
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return a;
        });
      var r = n(14),
        i = 6 * r.v;
      function o(t) {
        return t.length > r.v ? t.substr(0, r.v) : t;
      }
      function u(t) {
        return t.length > i ? t.substr(0, i) : t;
      }
      function a(t, e) {
        return t.length > i + e ? t.substr(e, i) : t.substr(e);
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "defaultSendLogs", function () {
          return g;
        }),
        n.d(e, "initializeLogger", function () {
          return x;
        }),
        n.d(e, "initializeLogsTable", function () {
          return T;
        }),
        n.d(e, "logsEachFormatted", function () {
          return L;
        }),
        n.d(e, "getInMemoryLogs", function () {
          return G;
        }),
        n.d(e, "nukeLogs", function () {
          return $;
        }),
        n.d(e, "closeLogs", function () {
          return K;
        }),
        n.d(e, "crashlog", function () {
          return F;
        }),
        n.d(e, "buildLogTemplateFunction", function () {
          return q;
        }),
        n.d(e, "serializeTaggedTemplateArgs", function () {
          return z;
        }),
        n.d(e, "enableLoggingToTable", function () {
          return H;
        });
      var r = n(125),
        i = n(5),
        o = n(123),
        u = n(3),
        a = n(6),
        s = n(23),
        c = n(7),
        l = n(34),
        f = "info",
        d = "warn",
        h = "error";
      function p(t) {
        if ("string" == typeof t) return `'${t}'`;
        if (null == t || "object" != typeof t) return String(t);
        if (Array.isArray(t)) return `[${t.join(",")}]`;
        if (t instanceof Uint8Array) {
          if (t.length < 64) return `<<${(0, l.c)(t)}>>`;
          var e = t.subarray(0, 32);
          return `<<${(0, l.c)(e)}, ${t.length - e.length} more bytes>>`;
        }
        return t.toString === Object.prototype.toString
          ? JSON.stringify(t, (t, e) => (t ? String(e) : e))
          : String(t);
      }
      function g() {
        __LOG__(3)`Should send logs but default was not overriden in Logger.js`;
      }
      var v = !1,
        m = g;
      self.SEND_LOGS = (t, e) => {
        if (!v) {
          if (null != e)
            if (e > 0 && e <= 1) {
              if (Math.random() > e) return;
            } else
              __LOG__(
                4
              )`The sampling argument for sendLogs must be 0 < n <= 1, was ${e}`;
          F("sendLogs", t), m();
        }
      };
      var y = "LTSX0Mo+_*-=.<^!?";
      function b() {
        return y[Math.floor(Math.random() * y.length)];
      }
      var _ = b() + b() + b() + b(),
        w = "",
        k = null,
        C = "none",
        E = !1,
        S = !1,
        A = { mute() {}, unmute() {} };
      function I() {
        if (!(0, s.c)()) return 1e3;
        var t = (0, s.a)("logger_memory_lines_threshold");
        return t >= 0 ? t : 1e3;
      }
      var O,
        P = !1,
        D = [];
      function x(t, e) {
        if (P) return A;
        (w = t), (m = e);
        var n = q(f),
          r = [n, n, q("log"), q(d), q(h)];
        return (
          (self.__LOG__ = function (t, e) {
            return r[t];
          }),
          (P = !0),
          (O = Date.now()),
          A
        );
      }
      var B = "logs-dev-4";
      function T() {
        if (!P) throw new Error("You must call initializeLogger first");
        if (null == k) {
          var t = (0, o.a)(B, (t) => {
            t.version(1).stores({ logs: "++line, localTimeMs" });
          })();
          t.open()
            .then(() => {
              if (null != t) {
                var e = (k = t).logs;
                return e
                  .orderBy("line")
                  .reverse()
                  .offset(1e3)
                  .delete()
                  .then(() =>
                    e
                      .where("localTimeMs")
                      .belowOrEqual(Date.now() - 2592e5)
                      .delete()
                  )
                  .then(M);
              }
            })
            .catch((t) => {
              __LOG__(4)`Unable to open the logs table: ${t}`,
                (C = "none" === C ? "once" : "twice"),
                [
                  "------ INITIALIZING 2.2218.5 ------",
                  U("sendLogs") + " logs-table-broken-open",
                  String(t && "object" == typeof t ? t.stack : t),
                ].forEach((t) => V(t, h)),
                WAM.log("regular", 498, void 0, [
                  3,
                  0,
                  14,
                  2,
                  2,
                  "initializeLogsTable",
                ]),
                R().then(() => {
                  "once" === C && T();
                });
            });
        }
      }
      function N() {
        if (k) {
          var t = k.logs;
          D.forEach((e) => {
            t.add(e);
          }),
            (D = []);
        }
      }
      function M() {
        var t = {
          localTimeMs: O,
          text: "------ INITIALIZING 2.2218.5 ------",
          visualId: _,
          context: w,
          cropped: 0,
          type: f,
        };
        D.unshift(t), J() && N();
      }
      function j(t) {
        var e = t.localTimeMs.toString(),
          n = e.substr(0, e.length - 3),
          r = e.substr(e.length - 3),
          i = t.context;
        return `${n}.${r} ${t.visualId} ${i}: ${(0, c.s)(t.text)}${
          t.cropped ? `... (${t.cropped} more codepoints)` : ""
        }\n`;
      }
      function L(t, e) {
        if (!k && "none" === C)
          throw new Error("Trying to pull logs before initialising logsTable");
        return Promise.resolve()
          .then(() => {
            if (k)
              return (0, i.i)(k.logs.each((e, n) => t(j(e)))).catch((e) => {
                [U("sendLogs") + " logs-table-broken-send", e.stack].forEach(
                  (e) => {
                    var n = W(e, h);
                    t(j(n));
                  }
                );
              });
          })
          .then(() => {
            for (
              var n = 0,
                r = 0,
                i = 0,
                o = 2 * I(),
                u = D.length,
                a = (null == e ? void 0 : e.length) || 0;
              ;

            ) {
              var s = void 0,
                c = void 0,
                l = void 0;
              if (
                (n < u && (s = D[n]),
                r < a && (c = e && e[r]),
                null != s && null != c
                  ? s.localTimeMs < c.localTimeMs
                    ? ((l = s), n++)
                    : ((l = c), r++)
                  : s
                  ? ((l = s), n++)
                  : c && ((l = c), r++),
                null == l)
              )
                break;
              if ((t(j(l)), ++i > o)) {
                t(
                  j({
                    localTimeMs: Date.now(),
                    text: `Too many in-memory log lines scheduled for submission: ${u} ${a}`,
                    visualId: _,
                    context: w,
                    cropped: 0,
                    type: d,
                  })
                );
                break;
              }
            }
          });
      }
      function G() {
        if (!k && "none" === C)
          throw new Error("Trying to pull logs before initialising logsTable");
        return D;
      }
      function R() {
        return (0, i.i)(
          r.a.delete(B).then(() => {
            k = null;
          })
        );
      }
      function $() {
        return R().then(() => {
          v = !0;
        });
      }
      function K() {
        (S = !0), k && (k.close(), (k = null), (v = !0));
      }
      function U(t) {
        return t + " log-version: 2.2218.5 log-reason: ";
      }
      function F(t, e) {
        __LOG__(2)`${U(t)}${e}`,
          WAM.log("regular", 494, void 0, [3, 2, t, 5, 0, 1, 2, 2, e, 6, 0, 7]);
      }
      function q(t) {
        return function (e) {
          for (var n = [], r = 1, i = arguments.length; r < i; ++r)
            n[r - 1] = arguments[r];
          var o = z(e, n);
          return V(o, t), o;
        };
      }
      function z(t, e) {
        if (S) return "";
        for (var n = [t[0]], r = 0; r < e.length; r++)
          n.push(p(e[r]), t[r + 1]);
        return n.join("");
      }
      function W(t, e) {
        var n, r;
        return (
          t.length < 900
            ? ((r = t), (n = 0))
            : ((r = t.substring(0, 800)), (n = t.length - r.length)),
          {
            localTimeMs: Date.now(),
            text: r,
            context: w,
            visualId: _,
            cropped: n,
            type: e,
          }
        );
      }
      function J() {
        var t = null != k && !E;
        if (t) {
          var e = a.q.get();
          null == e
            ? (t = !1)
            : (0, u.n)(e, u.b) ||
              ((t = !1),
              a.q.set(null),
              __LOG__(2)`Logging to table disabled in ${w}`);
        }
        return t;
      }
      function H() {
        null != a.q.get() ||
          E ||
          (a.q.set((0, u.E)()),
          N(),
          __LOG__(2)`Logging to table enabled in ${w}`);
      }
      function V(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = W(t, e),
          i = J() && !n;
        if (i && null != k)
          k.logs.add(r).catch((t) => {
            (E = !0),
              D.push(r),
              [
                U("sendLogs") + " logs-table-broken-persist-statement",
                String(t && "object" == typeof t ? t.stack : t),
              ].forEach((t) => {
                V(t, h, !0);
              }),
              WAM.log("regular", 498, void 0, [
                3,
                0,
                1,
                2,
                2,
                "persistStatement",
              ]);
          });
        else {
          D.push(r);
          var o = I();
          D.length > o && D.splice(0, o / 2);
        }
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return _;
      }),
        n.d(e, "d", function () {
          return w;
        }),
        n.d(e, "a", function () {
          return k;
        }),
        n.d(e, "e", function () {
          return C;
        }),
        n.d(e, "f", function () {
          return E;
        }),
        n.d(e, "g", function () {
          return S;
        }),
        n.d(e, "i", function () {
          return A;
        }),
        n.d(e, "c", function () {
          return I;
        }),
        n.d(e, "h", function () {
          return O;
        });
      var r = n(9),
        i = n.n(r),
        o = n(27),
        u = n.n(o),
        a = (function () {
          var t = u()(function* (t, e) {
            for (var n = [], r = 0; r < t.length; r++) n.push(yield e(t[r]));
            return n;
          });
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        s = n(70),
        c = n(25),
        l = n(161);
      function f(t, e, n, r) {
        0 === r
          ? p(t, e, 16 | n)
          : 1 === r
          ? p(t, e, 32 | n)
          : -128 <= r && r < 128
          ? (p(t, e, 48 | n), t.writeInt8(r))
          : -32768 <= r && r < 32768
          ? (p(t, e, 64 | n), t.writeInt16(r))
          : -2147483648 <= r && r < 2147483648
          ? (p(t, e, 80 | n), t.writeInt32(r))
          : (p(t, e, 96 | n), t.writeInt64(r));
      }
      function d(t, e, n, r) {
        p(t, e, 112 | n), t.writeFloat64(r);
      }
      function h(t, e, n, r) {
        var i = (0, c.c)(r);
        i < 256
          ? (p(t, e, 128 | n), t.writeUint8(i))
          : i < 65536
          ? (p(t, e, 144 | n), t.writeUint16(i))
          : (p(t, e, 160 | n), t.writeUint32(i)),
          t.writeString(r);
      }
      function p(t, e, n) {
        e < 256
          ? (t.writeUint8(n), t.writeUint8(e))
          : (t.writeUint8(8 | n), t.writeUint16(e));
      }
      function g(t) {
        for (var e = -1, n = 0; n < t.length; n += 3)
          null != t[n + 2] && (e = n);
        return e;
      }
      var v = { putBuffer: (t, e, n) => Promise.resolve() },
        m = n(212),
        y = null;
      function b() {
        return (
          y ||
            (y = new (class {
              constructor() {
                (this.AO = new Map()), (this.AP = null);
              }
              getWamInstance(t) {
                var e = this.AO.get(t);
                return (
                  e ||
                    ((e = new (class {
                      constructor(t) {
                        (this.CE = []),
                          (this.CF = new Map()),
                          (this.CG = !1),
                          (this.CH = new Map()),
                          (this.CK = -1),
                          (this.CL = v),
                          (this.CM = null),
                          (this.deinitialize = () => {
                            (this.CG = !1),
                              (this.CE = []),
                              this.CF.clear(),
                              (this.CH = new Map()),
                              (this.CK = -1),
                              (this.CL = v),
                              this.serializePending.cancel(),
                              this.finalizeBuffers.cancel();
                          }),
                          (this.enqueueEvent = (t, e, n, r, i, o) => {
                            this.CE.push({
                              type: 1,
                              id: t,
                              commitTime: e,
                              psIdIntValue: n,
                              weight: i,
                              fields: r,
                              resolve: o,
                            }),
                              this.CG && this.serializePending.onOrBefore(3e3);
                          }),
                          (this.enqueueAttributesUpdate = (t) => {
                            var e = { type: 2, delta: [] };
                            t.forEach((t, n) => {
                              void 0 !== t && e.delta.push([n, t]);
                            }),
                              e.delta.length > 0 &&
                                (__LOG__(
                                  2
                                )`WAM: Enqueued ${e.delta.length} attribute keys for update`,
                                this.CE.push(e));
                          }),
                          (this.finalizeBuffers = new s.a(() => {
                            this.CO();
                          })),
                          (this.serializePending = new s.a(() => {
                            this.CP();
                          })),
                          (this.forceSerializePending = () => {
                            this.CG &&
                              this.CN() &&
                              this.serializePending.forceRunNow();
                          }),
                          (this.CD = t);
                      }
                      initialize(t, e, n, r) {
                        if (this.CG)
                          return (
                            __LOG__(
                              4
                            )`WAM: Failed to initialize already initialized WAM`,
                            void SEND_LOGS("wam-initialize")
                          );
                        (this.CJ = r),
                          (this.CK = t),
                          (this.CL = n),
                          (this.CM = e),
                          this.CN() && this.serializePending.forceRunNow(),
                          (this.CG = !0),
                          __LOG__(
                            2
                          )`WAM: Initialized with stream id ${this.CK}`;
                      }
                      CO() {
                        this.CH.forEach((t) => {
                          t.finalize();
                        }),
                          this.CH.size > 0 &&
                            this.serializePending.onOrBefore(3e3);
                      }
                      CQ(t) {
                        var e;
                        return (
                          null == (e = this.CJ) ? void 0 : e.multipleSequences
                        )
                          ? 0 === t
                            ? "null-psid"
                            : t
                          : "regular";
                      }
                      CR(t) {
                        var e = this.CH.get(t);
                        if (e) return e;
                        var n = this.CQ(t);
                        if (null == this.CM)
                          return (
                            __LOG__(
                              4
                            )`WAM: Sequence number generator not initialised for channel ${this.CD}`,
                            void SEND_LOGS("wam-serializePending")
                          );
                        var r = this.CM(n);
                        if (
                          ((e = new (class {
                            constructor(t, e, n, r) {
                              (this.DH = !1), (this.DI = !1);
                              var i = new c.a(void 0, !0);
                              switch (
                                (i.writeString("WAM"),
                                i.writeUint8(5),
                                i.writeUint8(e),
                                i.writeUint16(n),
                                t)
                              ) {
                                case "regular":
                                  i.writeUint8(0);
                                  break;
                                default:
                                  i.writeUint8(2);
                              }
                              (this.DD = t),
                                (this.DE = i),
                                (this.DF = n),
                                (this.DG = e),
                                r.forEach((t, e) => {
                                  this.writeGlobal(e, t);
                                });
                            }
                            writeGlobal(t, e) {
                              if (null != e)
                                if ("string" == typeof e) h(this.DE, t, 0, e);
                                else if ("number" == typeof e)
                                  f(this.DE, t, 0, e);
                                else {
                                  if ("boolean" != typeof e)
                                    throw new Error(
                                      "Incorrect value type " + typeof e
                                    );
                                  f(this.DE, t, 0, e ? 1 : 0);
                                }
                              else p(this.DE, t, 0);
                            }
                            writeEvent(t, e, n, r) {
                              var i = this.DE;
                              f(i, 47, 0, Math.floor(t / 1e3));
                              var o = g(n);
                              f(i, e, -1 === o ? 5 : 1, r);
                              for (var u = 0; u <= o; u += 3) {
                                var a = n[u + 2];
                                if (null != a) {
                                  var s = n[u],
                                    c = n[u + 1],
                                    p = u === o ? 6 : 2;
                                  c === l.a.INT
                                    ? f(i, s, p, a)
                                    : c === l.a.BOOL
                                    ? f(i, s, p, a ? 1 : 0)
                                    : c === l.a.STRING
                                    ? h(i, s, p, a)
                                    : d(i, s, p, a);
                                }
                              }
                              this.DI = !0;
                            }
                            getKey() {
                              return {
                                streamId: this.DG,
                                sequenceNumber: this.DF,
                                channel: this.DD,
                              };
                            }
                            getSize() {
                              return this.DE.size();
                            }
                            peek() {
                              return this.DE.peek((t) => t.readByteArray());
                            }
                            isFinalized() {
                              return this.DH;
                            }
                            finalize() {
                              this.DH = !0;
                            }
                            hasEvents() {
                              return this.DI;
                            }
                          })(this.CD, this.CK, r, this.CF)),
                          this.CH.set(t, e),
                          "regular" !== t)
                        )
                          if (null == this.CI)
                            __LOG__(
                              4
                            )`WAM: Tried to create a private buffer without setting private stats ids`,
                              SEND_LOGS("wam-serializePending");
                          else {
                            var i = 0 === t ? "none" : this.CI.get(t);
                            null == i
                              ? (__LOG__(
                                  4
                                )`WAM: Tried to create a private buffer without setting private stats id`,
                                SEND_LOGS("wam-serializePending"))
                              : e.writeGlobal(6005, i);
                          }
                        return e;
                      }
                      CP() {
                        var t = [];
                        this.finalizeBuffers.onOrBefore(3e5);
                        var e = new Map(),
                          n = -1;
                        this.CE.forEach((r, o) => {
                          if (1 === r.type) {
                            var u = !0;
                            e.forEach((t) => {
                              (function (t) {
                                return "number" != typeof t || !isNaN(t);
                              })(t) || (u = !1);
                            });
                            var a,
                              s = (function (t) {
                                for (var e = g(t), n = 0; n <= e; n += 3) {
                                  var r = t[n + 2];
                                  if (
                                    null != r &&
                                    t[n + 1] === l.a.INT &&
                                    isNaN(r)
                                  )
                                    return !1;
                                }
                                return !0;
                              })(r.fields);
                            s && u
                              ? ("regular" === this.CD
                                  ? (a = this.CR("regular"))
                                  : (this.CD,
                                    null == r.psIdIntValue
                                      ? (__LOG__(
                                          4
                                        )`A WAM event in channel private was dropped before serialization. Reason: missing psIdIntValue in the event payload`,
                                        SEND_LOGS("wam-serializePending"))
                                      : (a = this.CR(r.psIdIntValue))),
                                null != a &&
                                  (e.forEach((t, e) => {
                                    var n = this.CF.get(e);
                                    (void 0 !== n && n === t) ||
                                      (this.CH.forEach((n) =>
                                        n.writeGlobal(e, t)
                                      ),
                                      this.CF.set(e, t));
                                  }),
                                  e.clear(),
                                  a.writeEvent(
                                    r.commitTime,
                                    r.id,
                                    r.fields,
                                    r.weight
                                  )))
                              : __LOG__(
                                  3
                                )`A WAM event in channel ${this.CD} was dropped before serialization. Event correct: ${s}, pending attributes correct: ${u}`,
                              null != r.resolve && t.push(r.resolve),
                              (n = o);
                          } else {
                            r.type;
                            for (var c = 0; c < r.delta.length; ++c) {
                              var f = i()(r.delta[c], 2),
                                d = f[0],
                                h = f[1];
                              e.set(d, h);
                            }
                          }
                        });
                        var r = !1;
                        this.CH.forEach((t) => {
                          (t.isFinalized() || t.getSize() > 65536) && (r = !0);
                        });
                        var o = [];
                        this.CH.forEach((t, e) => {
                          t.hasEvents()
                            ? o.push([t.getKey(), t.peek(), this.CQ(e)])
                            : __LOG__(
                                3
                              )`Skipping putting buffer to sink, as it does not contain any events`;
                        });
                        var u = a(o, (t) => {
                          var e = i()(t, 3),
                            n = e[0],
                            o = e[1],
                            u = e[2];
                          return this.CL.putBuffer(n, o, r, u);
                        }).then(() => {
                          t.forEach((t) => {
                            t();
                          });
                        });
                        return (
                          (this.CE = this.CE.slice(n + 1)),
                          r &&
                            ((this.CH = new Map()),
                            this.finalizeBuffers.cancel()),
                          u
                        );
                      }
                      CN() {
                        return (
                          this.CE.length > 0 &&
                          this.CE.some((t) => 1 === t.type)
                        );
                      }
                      isInitialized() {
                        return this.CG;
                      }
                      updatePrivateStatsIds(t) {
                        if ("private" !== this.CD)
                          return (
                            __LOG__(
                              4
                            )`WAM: Tried to set private stats ids on a non-private channel`,
                            void SEND_LOGS("wam-updatePrivateStatsIds")
                          );
                        this.CI = t;
                      }
                    })(t)),
                    this.AO.set(t, e)),
                  e
                );
              }
              initialize(t, e, n, r, i) {
                var o = this.getWamInstance(t);
                if (o.isInitialized())
                  __LOG__(
                    3
                  )`WAM instance for channel ${t} has already been initialized`;
                else {
                  null == this.AP &&
                    (this.AP = new (class {
                      constructor(t) {
                        (this.AL = new Map()), (this.AM = t);
                      }
                      AN(t, e) {
                        null == e || 0 === e || e < 0
                          ? this.AL.set(t, "uninitialized")
                          : this.AL.set(t, e);
                      }
                      initializeForChannel(t, e) {
                        e.forEach((e, n) => {
                          var r;
                          if ("regular" === t && "regular" === n) this.AN(n, e);
                          else if ("private" === t && "regular" !== n)
                            this.AN(n, e);
                          else if (
                            "private" !== t ||
                            (null == (r = this.AM)
                              ? void 0
                              : r.multipleSequences)
                          ) {
                            var i;
                            __LOG__(
                              4
                            )`SequenceNumberGenerator::initializeForChannel: Incorrect combination of parameters: ${t} ${n} ${
                              null == (i = this.AM)
                                ? void 0
                                : i.multipleSequences
                            }`;
                          } else this.AN(n, e);
                        });
                      }
                      next(t) {
                        var e,
                          n = this.AL.get(t);
                        return (
                          (null == n ||
                            "uninitialized" === n ||
                            (e = n + 1) > 65535) &&
                            (e = 1),
                          this.AL.set(t, e),
                          e
                        );
                      }
                    })(i));
                  var u = this.AP;
                  this.AP.initializeForChannel(t, n),
                    o.initialize(e, (t) => u.next(t), r, i);
                }
              }
              deinitialize() {
                this.AO.forEach((t, e) => {
                  t.isInitialized() &&
                    (__LOG__(2)`WamManager: Deinitializing WAM Channel ${e}`,
                    t.deinitialize());
                }),
                  (this.AP = null);
              }
              enqueueEvent(t, e, n, r, i, o, u) {
                this.getWamInstance(t).enqueueEvent(e, n, r, i, o, u);
              }
              enqueueAttributesUpdate(t, e) {
                this.getWamInstance(t).enqueueAttributesUpdate(e);
              }
              updatePrivateStatsIds(t) {
                this.getWamInstance("private").updatePrivateStatsIds(t);
              }
              forceFlushBuffers() {
                this.AO.forEach((t) => {
                  t.forceSerializePending();
                });
              }
              rotateBuffers() {
                this.AO.forEach((t) => {
                  t.finalizeBuffers.forceRunNow();
                });
              }
            })()),
          y
        );
      }
      function _() {}
      function w(t, e, n, r, i) {
        b().initialize(n, t, e, r, i);
      }
      function k() {
        b().deinitialize();
      }
      function C(t, e, n, r, i) {
        var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          u = Date.now();
        b().enqueueEvent(t, e, u, n, (0, m.a)(r, i), o);
      }
      function E(t, e, n, r, i) {
        var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          u = Date.now();
        return new Promise((a) => {
          b().enqueueEvent(t, e, u, n, (0, m.a)(r, i), o, a);
        });
      }
      function S(t, e) {
        var n = (0, m.c)(t);
        if (null != n) {
          var r = n.deltaRegular,
            i = n.deltaPrivate;
          r.size > 0 && b().enqueueAttributesUpdate("regular", r),
            i.size > 0 && b().enqueueAttributesUpdate("private", i);
        }
      }
      function A(t) {
        b().updatePrivateStatsIds(t);
      }
      function I() {
        b().forceFlushBuffers();
      }
      function O() {
        b().rotateBuffers();
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return a;
        });
      var r = n(267);
      function i(t) {
        var e = null,
          n = () => (
            e ||
              (e = (0, r.a)(t).finally(() => {
                e = null;
              })),
            e
          );
        return (n.isPending = () => !!e), n;
      }
      function o(t, e) {
        var n = new Map();
        return (r) => {
          var i,
            o = t(r),
            u = n.get(o);
          if (u) return u;
          try {
            i = Promise.resolve(e(r));
          } catch (t) {
            i = Promise.reject(t);
          }
          var a = i.finally(() => {
            n.delete(o);
          });
          return n.set(o, a), a;
        };
      }
      var u = new Set();
      function a(t) {
        u.add(t),
          t.finally(() => {
            u.delete(t);
          });
      }
    },
    function (t, e, n) {
      function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return s;
      }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return h;
        });
      var r = n(27),
        i = n.n(r),
        o = n(266),
        u = n(128),
        a = n(3),
        s = class {
          constructor(t) {
            this.feature = t;
          }
          toString() {
            return "RequiresPage: " + this.feature;
          }
        },
        c = class {
          constructor(t) {
            this.backoffOptions = t;
          }
          toString() {
            return "RetryOnBackoff";
          }
        },
        l = class {
          constructor(t) {
            this.result = t;
          }
        },
        f = "$unstarted",
        d = "$finished",
        h = class {
          constructor(t) {
            var e = t.isRestartAfterCrash,
              n = t.accessors,
              r = t.unfinishedJobEntries,
              i = new Map(),
              o = r.then((t) => {
                var r = [],
                  o = [];
                return (
                  t.forEach((t) => {
                    t.stepHardStartCountAfterTimeout >= 5
                      ? r.push(t)
                      : o.push(t);
                  }),
                  Promise.all(
                    r.map((t) => {
                      var e;
                      return (
                        __LOG__(4)`${
                          ((e = t), `[Job ${e.type}] `)
                        }: stuck on the step ${t.step}, aborting the job`,
                        SEND_LOGS("job-stuck-" + t.type),
                        n.deletePersistedJob(t.jobId)
                      );
                    })
                  ).then(() => {
                    o.forEach((t) => {
                      i.has(t.jobId) ||
                        (__LOG__(2)`${p(t)}: restarting`,
                        i.set(t.jobId, this.CS(t, e)));
                    });
                  })
                );
              });
            (this.implementationLoaders = new Map()),
              (this.implementations = new Map()),
              (this.stepBlockers = new WeakMap()),
              (this.accessors = n),
              (this.activeJobs = i),
              (this.initialJobsPromise = o),
              (this.listeners = t.listeners),
              (this.deprecatedJobs = t.deprecatedJobs);
          }
          loadAndRunJobFromId(t) {
            var e = this.activeJobs.get(t);
            if (null != e) return e;
            var n = this.CT(t);
            return this.activeJobs.set(t, n), n;
          }
          CT(t) {
            var e = this;
            return i()(function* () {
              var n = e.initialJobsPromise,
                r = e.accessors;
              yield n;
              var i = yield r.readPersistedJob(t);
              return i
                ? e.CS(i, !1)
                : (__LOG__(4)`No entry for job ${t}`,
                  SEND_LOGS("missing-job-entry"),
                  null);
            })();
          }
          CU(t) {
            var e = this.implementations,
              n = this.implementationLoaders,
              r = e.get(t);
            if (r) return r;
            var i = n.get(t);
            if (!i) return null;
            var o = i();
            return e.set(t, o), o;
          }
          CV(t, e) {
            if (null == e || 0 === e.length) return Promise.resolve();
            var n = this.stepBlockers,
              r = n.get(e);
            return (
              null == r &&
                ((r = (0, o.c)(
                  e.map((t) => t()),
                  v
                )),
                n.set(e, r)),
              r(t)
            );
          }
          CW(t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = t.step,
              o = e.findIndex((t) => t.stepName === i),
              u = e[o].info(t.current, t.original, m(t, n)),
              s = u.requirements,
              c = u.code,
              f = this.CV(t, s);
            return (
              r && (f = f.then(r)),
              f
                .then(
                  () => (
                    __LOG__(2)`${g(t)}: running step`,
                    c(t.current, t.original, m(t, n))
                  )
                )
                .then((r) => {
                  if (r instanceof l)
                    return __LOG__(2)`${g(t)}: InterruptJob`, r.result;
                  var i = o + 1;
                  if (i >= e.length) return r;
                  var u = e[i];
                  return (
                    (t.step = u.stepName),
                    (t.current = r),
                    (t.stepHardStartCountAfterTimeout = 0),
                    (t.stepFirstStartTime = (0, a.E)()),
                    (t.stepUnexpectedErrorCount = 0),
                    (t.waitUntil = null),
                    (t.backedOffCount = 0),
                    this.accessors
                      .updatePersistedJob(t)
                      .then(() => this.CW(t, e, n))
                  );
                })
            );
          }
          CS(t, e) {
            var n = this;
            return i()(function* () {
              var r,
                o = n.accessors,
                l = n.activeJobs,
                h = n.deprecatedJobs,
                v = n.listeners,
                y = v.onJobFinished,
                b = v.onJobStarted,
                _ = yield n.CU(t.type),
                w = h[t.type];
              if (!_) {
                if (!w)
                  return (
                    __LOG__(
                      4
                    )`No implementation for ${t.type}. Maybe it should have been put to the deprecated list?`,
                    SEND_LOGS("missing-job-implementation"),
                    yield o.deletePersistedJob(t.jobId),
                    null
                  );
                if ("NOOP" === w)
                  return (
                    __LOG__(
                      3
                    )`No implementation for deprecated ${t.type}, job deleted`,
                    yield o.deletePersistedJob(t.jobId),
                    null
                  );
                _ = yield w();
              }
              var k = _;
              w && __LOG__(2)`Running deprecated job ${t.type}`;
              var C = null != (r = t.stepFirstStartTime) ? r : (0, a.E)();
              if (
                ((t.stepFirstStartTime = C),
                (t.stepUnexpectedErrorCount = t.stepUnexpectedErrorCount || 0),
                (t.backedOffCount = t.backedOffCount || 0),
                t.step === d)
              ) {
                var E = t.waitUntil,
                  S = (0, a.z)(C);
                return (
                  null != E &&
                    (0, a.p)(E) &&
                    S > 0 &&
                    (__LOG__(2)`${p(t)}: skew detected, adjusting accordingly`,
                    (E = (0, a.j)(E - S)),
                    (0, a.p)(E) &&
                      ((t.stepFirstStartTime = (0, a.j)(C - S)),
                      (t.waitUntil = E),
                      yield n.accessors.updatePersistedJob(t))),
                  (null != E && (0, a.p)(E)) ||
                    (__LOG__(2)`${p(
                      t
                    )}: removing completed, expired job from db`,
                    yield o.deletePersistedJob(t.jobId)),
                  l.delete(t.jobId),
                  t.current
                );
              }
              var A =
                t.step !== f ? _.find((e) => e.stepName === t.step) : _[0];
              if (!A)
                return (
                  __LOG__(4)`No implementation for ${t.type}.${t.step}`,
                  SEND_LOGS("missing-job-step"),
                  yield o.deletePersistedJob(t.jobId),
                  null
                );
              t.step = A.stepName;
              var I = () => {
                  var r = t.waitUntil,
                    i = Promise.resolve();
                  if (null != r) {
                    var o = (0, a.l)(a.b);
                    r > o
                      ? (__LOG__(2)`${g(t)}: trim wait from ${r} to ${o}`,
                        (t.waitUntil = o),
                        (i = n.accessors
                          .updatePersistedJob(t)
                          .then(() => (0, a.k)(o))))
                      : (__LOG__(2)`${g(t)}: delaying until ${r}`,
                        (i = (0, a.k)(r)));
                  }
                  return i.then(() =>
                    n
                      .CW(
                        t,
                        k,
                        e,
                        () => (
                          (t.waitUntil = null),
                          (0, a.n)(C, a.b) ||
                            t.stepHardStartCountAfterTimeout++,
                          n.accessors.updatePersistedJob(t)
                        )
                      )
                      .catch((e) => {
                        if (e instanceof s)
                          return (
                            __LOG__(2)`${g(t)}: requires page`,
                            t.stepHardStartCountAfterTimeout > 0 &&
                              (--t.stepHardStartCountAfterTimeout,
                              n.accessors.updatePersistedJob(t)),
                            new Promise(() => {})
                          );
                        if (e instanceof c) {
                          __LOG__(2)`${g(t)}: RetryOnBackoff`;
                          var r = (0, u.c)(
                            ++t.backedOffCount,
                            e.backoffOptions
                          );
                          return (
                            (t.waitUntil = (0, a.l)(Math.ceil(r / 1e3))),
                            t.stepHardStartCountAfterTimeout > 0 &&
                              --t.stepHardStartCountAfterTimeout,
                            n.accessors.updatePersistedJob(t).then(I)
                          );
                        }
                        if (t.stepUnexpectedErrorCount < 1)
                          return (
                            __LOG__(3)`${g(t)}: Unhandled exception. Tried ${
                              t.stepUnexpectedErrorCount
                            } times`,
                            t.stepUnexpectedErrorCount++,
                            n.accessors.updatePersistedJob(t).then(I)
                          );
                        throw e;
                      })
                  );
                },
                O = I(),
                P = O.then(
                  (function () {
                    var e = i()(function* (e) {
                      __LOG__(2)`${g(t)}: finished job`;
                      var r = null;
                      try {
                        r = y(t.jobId, t.type, t.original, e);
                      } catch (e) {
                        __LOG__(
                          4
                        )`onJobFinished for ${t.type} threw exception ${e}`,
                          SEND_LOGS("onJobFinished-threw");
                      }
                      null != r && r > 0
                        ? ((t.waitUntil = (0, a.l)(Math.ceil(r / 1e3))),
                          (t.step = d),
                          (t.current = e),
                          (t.stepFirstStartTime = (0, a.E)()),
                          yield n.accessors.updatePersistedJob(t))
                        : (yield o.deletePersistedJob(t.jobId),
                          l.delete(t.jobId));
                    });
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  (function () {
                    var n = i()(function* (n) {
                      __LOG__(4)`${t.type} failed with error ${n}`,
                        SEND_LOGS("job-threw-exception-" + t.type);
                      var r = k.find((e) => e.stepName === t.step);
                      if (r) {
                        var i = r.info(t.current, t.original, m(t, e));
                        null != i.stopRetryIf &&
                          (yield i.stopRetryIf.onStopRetry(
                            t.current,
                            t.original,
                            m(t, e)
                          ));
                      } else __LOG__(4)`${t.type}: ${t.step} step not found`;
                      yield o.deletePersistedJob(t.jobId), l.delete(t.jobId);
                    });
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              try {
                b(t.jobId, t.type, t.original);
              } catch (e) {
                __LOG__(4)`onJobStarted for ${t.type} threw exception ${e}`,
                  SEND_LOGS("onJobStarted-threw");
              }
              return P.then(() => O);
            })();
          }
          addPersistedJobImplementation(t, e) {
            var n = this.implementationLoaders,
              r = this.deprecatedJobs;
            if (n.has(t))
              return (
                __LOG__(4)`addPersistedJobImplementation called twice for ${t}`,
                void SEND_LOGS("repeat-job-loader")
              );
            r && r[t], n.set(t, e);
          }
          fireAndForget(t) {
            this.accessors.maybeCreateJob(t).then((t) => {
              var e = t.id;
              return this.loadAndRunJobFromId(e);
            });
          }
          waitUntilPersisted(t) {
            return this.accessors.maybeCreateJob(t).then((t) => {
              var e = t.id;
              this.loadAndRunJobFromId(e);
            });
          }
          waitUntilCompleted(t) {
            return this.accessors.maybeCreateJob(t).then((t) => {
              var e = t.id;
              return this.loadAndRunJobFromId(e);
            });
          }
        };
      function p(t) {
        return `Job[${t.jobId}] (${t.type})`;
      }
      function g(t) {
        return `Job[${t.jobId}] (${t.type}.${t.step})`;
      }
      function v(t, e, n) {
        "unsatisfiable" === t
          ? __LOG__(2)`${g(n)} halting because of ${e}`
          : "unsatisfied" === t && __LOG__(2)`${g(n)} waiting on ${e}`;
      }
      function m(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return { jobStartTime: t.startTime, afterCrash: e, interruptJob: y };
      }
      function y(t) {
        return new l(t);
      }
    },
    ,
    ,
    function (t, e, n) {
      function r(t, e) {
        return (n) => {
          if (Array.isArray(t) ? t.some((t) => n instanceof t) : n instanceof t)
            return e(n);
          throw n;
        };
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var r = n(125),
        i = n(289),
        o = n(5),
        u = new Map();
      function a(t, e) {
        var n = () => {
          var n = new r.a(t);
          return e(n), n;
        };
        return (
          u.set(t, () => {
            var r = new (class {
              constructor(t, e) {
                (this.name = t), (this.versions = []), (this.initializer = e);
              }
              version(t) {
                var e = new (class {
                  constructor(t) {
                    this.version = t;
                  }
                  stores(t) {
                    return this;
                  }
                  upgrade(t) {
                    return this;
                  }
                })(t);
                return this.versions.push(e), e;
              }
              migrate() {
                var t = this.initializer();
                return (0, o.i)(t.open()).then(() => t.close());
              }
            })(t, n);
            return e(r), r;
          }),
          n
        );
      }
      function s() {
        u.forEach((t, e) => {
          var n = t(),
            r = n.versions.map((t) =>
              (function (t, e) {
                return `indexeddb_${t}_${e}`;
              })(e, t.version)
            );
          (0, i.e)(
            new (class {
              constructor() {
                (this.type = "batch"),
                  (this.names = r),
                  (this.isServiceWorkerFriendly = !0);
              }
              run() {
                var t = n.versions.reduce((t, e) => {
                  var n = e.version;
                  return Math.max(t, n);
                }, -1);
                return (
                  __LOG__(2)`migrating database ${e} to version ${t}`,
                  n.migrate().then(() => {
                    __LOG__(
                      2
                    )`finished migrating database ${e} to version ${t}`;
                  })
                );
              }
            })()
          );
        });
      }
    },
    ,
    function (t, e, n) {
      (function (t) {
        var n = Object.keys,
          r = Array.isArray,
          i =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : t;
        function o(t, e) {
          return (
            "object" != typeof e ||
              n(e).forEach(function (n) {
                t[n] = e[n];
              }),
            t
          );
        }
        var u = Object.getPrototypeOf,
          a = {}.hasOwnProperty;
        function s(t, e) {
          return a.call(t, e);
        }
        function c(t, e) {
          "function" == typeof e && (e = e(u(t))),
            n(e).forEach(function (n) {
              f(t, n, e[n]);
            });
        }
        var l = Object.defineProperty;
        function f(t, e, n, r) {
          l(
            t,
            e,
            o(
              n && s(n, "get") && "function" == typeof n.get
                ? { get: n.get, set: n.set, configurable: !0 }
                : { value: n, configurable: !0, writable: !0 },
              r
            )
          );
        }
        function d(t) {
          return {
            from: function (e) {
              return (
                (t.prototype = Object.create(e.prototype)),
                f(t.prototype, "constructor", t),
                { extend: c.bind(null, t.prototype) }
              );
            },
          };
        }
        var h = Object.getOwnPropertyDescriptor,
          p = [].slice;
        function g(t, e, n) {
          return p.call(t, e, n);
        }
        function v(t, e) {
          return e(t);
        }
        function m(t) {
          if (!t) throw new Error("Assertion Failed");
        }
        function y(t) {
          i.setImmediate ? setImmediate(t) : setTimeout(t, 0);
        }
        function b(t, e) {
          return t.reduce(function (t, n, r) {
            var i = e(n, r);
            return i && (t[i[0]] = i[1]), t;
          }, {});
        }
        function _(t, e, n) {
          try {
            t.apply(null, n);
          } catch (t) {
            e && e(t);
          }
        }
        function w(t, e) {
          if (s(t, e)) return t[e];
          if (!e) return t;
          if ("string" != typeof e) {
            for (var n = [], r = 0, i = e.length; r < i; ++r) {
              var o = w(t, e[r]);
              n.push(o);
            }
            return n;
          }
          var u = e.indexOf(".");
          if (-1 !== u) {
            var a = t[e.substr(0, u)];
            return void 0 === a ? void 0 : w(a, e.substr(u + 1));
          }
        }
        function k(t, e, n) {
          if (
            t &&
            void 0 !== e &&
            (!("isFrozen" in Object) || !Object.isFrozen(t))
          )
            if ("string" != typeof e && "length" in e) {
              m("string" != typeof n && "length" in n);
              for (var r = 0, i = e.length; r < i; ++r) k(t, e[r], n[r]);
            } else {
              var o = e.indexOf(".");
              if (-1 !== o) {
                var u = e.substr(0, o),
                  a = e.substr(o + 1);
                if ("" === a) void 0 === n ? delete t[u] : (t[u] = n);
                else {
                  var s = t[u];
                  s || (s = t[u] = {}), k(s, a, n);
                }
              } else void 0 === n ? delete t[e] : (t[e] = n);
            }
        }
        function C(t) {
          var e = {};
          for (var n in t) s(t, n) && (e[n] = t[n]);
          return e;
        }
        var E = [].concat;
        function S(t) {
          return E.apply([], t);
        }
        var A = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
          .split(",")
          .concat(
            S(
              [8, 16, 32, 64].map(function (t) {
                return ["Int", "Uint", "Float"].map(function (e) {
                  return e + t + "Array";
                });
              })
            )
          )
          .filter(function (t) {
            return i[t];
          })
          .map(function (t) {
            return i[t];
          });
        function I(t) {
          if (!t || "object" != typeof t) return t;
          var e;
          if (r(t)) {
            e = [];
            for (var n = 0, i = t.length; n < i; ++n) e.push(I(t[n]));
          } else if (A.indexOf(t.constructor) >= 0) e = t;
          else
            for (var o in ((e = t.constructor
              ? Object.create(t.constructor.prototype)
              : {}),
            t))
              s(t, o) && (e[o] = I(t[o]));
          return e;
        }
        function O(t, e, r, i) {
          return (
            (r = r || {}),
            (i = i || ""),
            n(t).forEach(function (n) {
              if (s(e, n)) {
                var o = t[n],
                  u = e[n];
                "object" == typeof o &&
                "object" == typeof u &&
                o &&
                u &&
                "" + o.constructor == "" + u.constructor
                  ? O(o, u, r, i + n + ".")
                  : o !== u && (r[i + n] = e[n]);
              } else r[i + n] = void 0;
            }),
            n(e).forEach(function (n) {
              s(t, n) || (r[i + n] = e[n]);
            }),
            r
          );
        }
        var P = "undefined" != typeof Symbol && Symbol.iterator,
          D = P
            ? function (t) {
                var e;
                return null != t && (e = t[P]) && e.apply(t);
              }
            : function () {
                return null;
              },
          x = {};
        function B(t) {
          var e, n, i, o;
          if (1 === arguments.length) {
            if (r(t)) return t.slice();
            if (this === x && "string" == typeof t) return [t];
            if ((o = D(t))) {
              for (n = []; !(i = o.next()).done; ) n.push(i.value);
              return n;
            }
            if (null == t) return [t];
            if ("number" == typeof (e = t.length)) {
              for (n = new Array(e); e--; ) n[e] = t[e];
              return n;
            }
            return [t];
          }
          for (e = arguments.length, n = new Array(e); e--; )
            n[e] = arguments[e];
          return n;
        }
        var T =
          "undefined" != typeof location &&
          /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function N(t, e) {
          (T = t), (M = e);
        }
        var M = function () {
            return !0;
          },
          j = !new Error("").stack;
        function L() {
          if (j)
            try {
              throw (L.arguments, new Error());
            } catch (t) {
              return t;
            }
          return new Error();
        }
        function G(t, e) {
          var n = t.stack;
          return n
            ? ((e = e || 0),
              0 === n.indexOf(t.name) &&
                (e += (t.name + t.message).split("\n").length),
              n
                .split("\n")
                .slice(e)
                .filter(M)
                .map(function (t) {
                  return "\n" + t;
                })
                .join(""))
            : "";
        }
        var R = [
            "Unknown",
            "Constraint",
            "Data",
            "TransactionInactive",
            "ReadOnly",
            "Version",
            "NotFound",
            "InvalidState",
            "InvalidAccess",
            "Abort",
            "Timeout",
            "QuotaExceeded",
            "Syntax",
            "DataClone",
          ],
          $ = [
            "Modify",
            "Bulk",
            "OpenFailed",
            "VersionChange",
            "Schema",
            "Upgrade",
            "InvalidTable",
            "MissingAPI",
            "NoSuchDatabase",
            "InvalidArgument",
            "SubTransaction",
            "Unsupported",
            "Internal",
            "DatabaseClosed",
            "PrematureCommit",
            "ForeignAwait",
          ].concat(R),
          K = {
            VersionChanged:
              "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
          };
        function U(t, e) {
          (this._e = L()), (this.name = t), (this.message = e);
        }
        function F(t, e, n, r) {
          (this._e = L()),
            (this.failures = e),
            (this.failedKeys = r),
            (this.successCount = n);
        }
        function q(t, e) {
          (this._e = L()),
            (this.name = "BulkError"),
            (this.failures = e),
            (this.message = (function (t, e) {
              return (
                t +
                ". Errors: " +
                e
                  .map(function (t) {
                    return t.toString();
                  })
                  .filter(function (t, e, n) {
                    return n.indexOf(t) === e;
                  })
                  .join("\n")
              );
            })(t, e));
        }
        d(U)
          .from(Error)
          .extend({
            stack: {
              get: function () {
                return (
                  this._stack ||
                  (this._stack =
                    this.name + ": " + this.message + G(this._e, 2))
                );
              },
            },
            toString: function () {
              return this.name + ": " + this.message;
            },
          }),
          d(F).from(U),
          d(q).from(U);
        var z = $.reduce(function (t, e) {
            return (t[e] = e + "Error"), t;
          }, {}),
          W = U,
          J = $.reduce(function (t, e) {
            var n = e + "Error";
            function r(t, r) {
              (this._e = L()),
                (this.name = n),
                t
                  ? "string" == typeof t
                    ? ((this.message = t), (this.inner = r || null))
                    : "object" == typeof t &&
                      ((this.message = t.name + " " + t.message),
                      (this.inner = t))
                  : ((this.message = K[e] || n), (this.inner = null));
            }
            return d(r).from(W), (t[e] = r), t;
          }, {});
        (J.Syntax = SyntaxError), (J.Type = TypeError), (J.Range = RangeError);
        var H = R.reduce(function (t, e) {
            return (t[e + "Error"] = J[e]), t;
          }, {}),
          V = $.reduce(function (t, e) {
            return (
              -1 === ["Syntax", "Type", "Range"].indexOf(e) &&
                (t[e + "Error"] = J[e]),
              t
            );
          }, {});
        function Y() {}
        function X(t) {
          return t;
        }
        function Z(t, e) {
          return null == t || t === X
            ? e
            : function (n) {
                return e(t(n));
              };
        }
        function Q(t, e) {
          return function () {
            t.apply(this, arguments), e.apply(this, arguments);
          };
        }
        function tt(t, e) {
          return t === Y
            ? e
            : function () {
                var n = t.apply(this, arguments);
                void 0 !== n && (arguments[0] = n);
                var r = this.onsuccess,
                  i = this.onerror;
                (this.onsuccess = null), (this.onerror = null);
                var o = e.apply(this, arguments);
                return (
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? Q(r, this.onsuccess)
                      : r),
                  i && (this.onerror = this.onerror ? Q(i, this.onerror) : i),
                  void 0 !== o ? o : n
                );
              };
        }
        function et(t, e) {
          return t === Y
            ? e
            : function () {
                t.apply(this, arguments);
                var n = this.onsuccess,
                  r = this.onerror;
                (this.onsuccess = this.onerror = null),
                  e.apply(this, arguments),
                  n &&
                    (this.onsuccess = this.onsuccess
                      ? Q(n, this.onsuccess)
                      : n),
                  r && (this.onerror = this.onerror ? Q(r, this.onerror) : r);
              };
        }
        function nt(t, e) {
          return t === Y
            ? e
            : function (n) {
                var r = t.apply(this, arguments);
                o(n, r);
                var i = this.onsuccess,
                  u = this.onerror;
                (this.onsuccess = null), (this.onerror = null);
                var a = e.apply(this, arguments);
                return (
                  i &&
                    (this.onsuccess = this.onsuccess
                      ? Q(i, this.onsuccess)
                      : i),
                  u && (this.onerror = this.onerror ? Q(u, this.onerror) : u),
                  void 0 === r ? (void 0 === a ? void 0 : a) : o(r, a)
                );
              };
        }
        function rt(t, e) {
          return t === Y
            ? e
            : function () {
                return (
                  !1 !== e.apply(this, arguments) && t.apply(this, arguments)
                );
              };
        }
        function it(t, e) {
          return t === Y
            ? e
            : function () {
                var n = t.apply(this, arguments);
                if (n && "function" == typeof n.then) {
                  for (
                    var r = this, i = arguments.length, o = new Array(i);
                    i--;

                  )
                    o[i] = arguments[i];
                  return n.then(function () {
                    return e.apply(r, o);
                  });
                }
                return e.apply(this, arguments);
              };
        }
        (V.ModifyError = F), (V.DexieError = U), (V.BulkError = q);
        var ot = {},
          ut = (function () {
            try {
              return new Function(
                "let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];"
              )();
            } catch (e) {
              var t = i.Promise;
              return t ? [t.resolve(), t.prototype, t.resolve()] : [];
            }
          })(),
          at = ut[0],
          st = ut[1],
          ct = ut[2],
          lt = st && st.then,
          ft = at && at.constructor,
          dt = ut[3],
          ht = !!ct,
          pt = !1,
          gt = ct
            ? function () {
                ct.then(Lt);
              }
            : i.setImmediate
            ? setImmediate.bind(null, Lt)
            : i.MutationObserver
            ? function () {
                var t = document.createElement("div");
                new MutationObserver(function () {
                  Lt(), (t = null);
                }).observe(t, { attributes: !0 }),
                  t.setAttribute("i", "1");
              }
            : function () {
                setTimeout(Lt, 0);
              },
          vt = function (t, e) {
            St.push([t, e]), yt && (gt(), (yt = !1));
          },
          mt = !0,
          yt = !0,
          bt = [],
          _t = [],
          wt = null,
          kt = X,
          Ct = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: ae,
            pgp: !1,
            env: {},
            finalize: function () {
              this.unhandleds.forEach(function (t) {
                try {
                  ae(t[0], t[1]);
                } catch (t) {}
              });
            },
          },
          Et = Ct,
          St = [],
          At = 0,
          It = [];
        function Ot(t) {
          if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
          (this._listeners = []), (this.onuncatched = Y), (this._lib = !1);
          var e = (this._PSD = Et);
          if (
            (T &&
              ((this._stackHolder = L()),
              (this._prev = null),
              (this._numPrev = 0)),
            "function" != typeof t)
          ) {
            if (t !== ot) throw new TypeError("Not a function");
            return (
              (this._state = arguments[1]),
              (this._value = arguments[2]),
              void (!1 === this._state && Bt(this, this._value))
            );
          }
          (this._state = null), (this._value = null), ++e.ref, xt(this, t);
        }
        var Pt = {
          get: function () {
            var t = Et,
              e = Jt;
            function n(n, r) {
              var i = this,
                o = !t.global && (t !== Et || e !== Jt);
              o && Xt();
              var u = new Ot(function (e, u) {
                Nt(i, new Dt(ie(n, t, o), ie(r, t, o), e, u, t));
              });
              return T && jt(u, this), u;
            }
            return (n.prototype = ot), n;
          },
          set: function (t) {
            f(
              this,
              "then",
              t && t.prototype === ot
                ? Pt
                : {
                    get: function () {
                      return t;
                    },
                    set: Pt.set,
                  }
            );
          },
        };
        function Dt(t, e, n, r, i) {
          (this.onFulfilled = "function" == typeof t ? t : null),
            (this.onRejected = "function" == typeof e ? e : null),
            (this.resolve = n),
            (this.reject = r),
            (this.psd = i);
        }
        function xt(t, e) {
          try {
            e(function (e) {
              if (null === t._state) {
                if (e === t)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                var n = t._lib && Gt();
                e && "function" == typeof e.then
                  ? xt(t, function (t, n) {
                      e instanceof Ot ? e._then(t, n) : e.then(t, n);
                    })
                  : ((t._state = !0), (t._value = e), Tt(t)),
                  n && Rt();
              }
            }, Bt.bind(null, t));
          } catch (e) {
            Bt(t, e);
          }
        }
        function Bt(t, e) {
          if ((_t.push(e), null === t._state)) {
            var n = t._lib && Gt();
            (e = kt(e)),
              (t._state = !1),
              (t._value = e),
              T &&
                null !== e &&
                "object" == typeof e &&
                !e._promise &&
                _(function () {
                  var n = (function t(e, n) {
                    var r;
                    return h(e, n) || ((r = u(e)) && t(r, n));
                  })(e, "stack");
                  (e._promise = t),
                    f(e, "stack", {
                      get: function () {
                        return pt
                          ? n && (n.get ? n.get.apply(e) : n.value)
                          : t.stack;
                      },
                    });
                }),
              (function (t) {
                bt.some(function (e) {
                  return e._value === t._value;
                }) || bt.push(t);
              })(t),
              Tt(t),
              n && Rt();
          }
        }
        function Tt(t) {
          var e = t._listeners;
          t._listeners = [];
          for (var n = 0, r = e.length; n < r; ++n) Nt(t, e[n]);
          var i = t._PSD;
          --i.ref || i.finalize(),
            0 === At &&
              (++At,
              vt(function () {
                0 == --At && $t();
              }, []));
        }
        function Nt(t, e) {
          if (null !== t._state) {
            var n = t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return (t._state ? e.resolve : e.reject)(t._value);
            ++e.psd.ref, ++At, vt(Mt, [n, t, e]);
          } else t._listeners.push(e);
        }
        function Mt(t, e, n) {
          try {
            wt = e;
            var r,
              i = e._value;
            e._state
              ? (r = t(i))
              : (_t.length && (_t = []),
                (r = t(i)),
                -1 === _t.indexOf(i) &&
                  (function (t) {
                    for (var e = bt.length; e; )
                      if (bt[--e]._value === t._value)
                        return void bt.splice(e, 1);
                  })(e)),
              n.resolve(r);
          } catch (t) {
            n.reject(t);
          } finally {
            (wt = null), 0 == --At && $t(), --n.psd.ref || n.psd.finalize();
          }
        }
        function jt(t, e) {
          var n = e ? e._numPrev + 1 : 0;
          n < 100 && ((t._prev = e), (t._numPrev = n));
        }
        function Lt() {
          Gt() && Rt();
        }
        function Gt() {
          var t = mt;
          return (mt = !1), (yt = !1), t;
        }
        function Rt() {
          var t, e, n;
          do {
            for (; St.length > 0; )
              for (t = St, St = [], n = t.length, e = 0; e < n; ++e) {
                var r = t[e];
                r[0].apply(null, r[1]);
              }
          } while (St.length > 0);
          (mt = !0), (yt = !0);
        }
        function $t() {
          var t = bt;
          (bt = []),
            t.forEach(function (t) {
              t._PSD.onunhandled.call(null, t._value, t);
            });
          for (var e = It.slice(0), n = e.length; n; ) e[--n]();
        }
        function Kt(t) {
          return new Ot(ot, !1, t);
        }
        function Ut(t, e) {
          var n = Et;
          return function () {
            var r = Gt(),
              i = Et;
            try {
              return ee(n, !0), t.apply(this, arguments);
            } catch (t) {
              e && e(t);
            } finally {
              ee(i, !1), r && Rt();
            }
          };
        }
        c(Ot.prototype, {
          then: Pt,
          _then: function (t, e) {
            Nt(this, new Dt(null, null, t, e, Et));
          },
          catch: function (t) {
            if (1 === arguments.length) return this.then(null, t);
            var e = arguments[0],
              n = arguments[1];
            return "function" == typeof e
              ? this.then(null, function (t) {
                  return t instanceof e ? n(t) : Kt(t);
                })
              : this.then(null, function (t) {
                  return t && t.name === e ? n(t) : Kt(t);
                });
          },
          finally: function (t) {
            return this.then(
              function (e) {
                return t(), e;
              },
              function (e) {
                return t(), Kt(e);
              }
            );
          },
          stack: {
            get: function () {
              if (this._stack) return this._stack;
              try {
                pt = !0;
                var t = (function t(e, n, r) {
                  if (n.length === r) return n;
                  var i = "";
                  if (!1 === e._state) {
                    var o,
                      u,
                      a = e._value;
                    null != a
                      ? ((o = a.name || "Error"),
                        (u = a.message || a),
                        (i = G(a, 0)))
                      : ((o = a), (u = "")),
                      n.push(o + (u ? ": " + u : "") + i);
                  }
                  return (
                    T &&
                      ((i = G(e._stackHolder, 2)) &&
                        -1 === n.indexOf(i) &&
                        n.push(i),
                      e._prev && t(e._prev, n, r)),
                    n
                  );
                })(this, [], 20).join("\nFrom previous: ");
                return null !== this._state && (this._stack = t), t;
              } finally {
                pt = !1;
              }
            },
          },
          timeout: function (t, e) {
            var n = this;
            return t < 1 / 0
              ? new Ot(function (r, i) {
                  var o = setTimeout(function () {
                    return i(new J.Timeout(e));
                  }, t);
                  n.then(r, i).finally(clearTimeout.bind(null, o));
                })
              : this;
          },
        }),
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            f(Ot.prototype, Symbol.toStringTag, "Promise"),
          (Ct.env = ne()),
          c(Ot, {
            all: function () {
              var t = B.apply(null, arguments).map(Zt);
              return new Ot(function (e, n) {
                0 === t.length && e([]);
                var r = t.length;
                t.forEach(function (i, o) {
                  return Ot.resolve(i).then(function (n) {
                    (t[o] = n), --r || e(t);
                  }, n);
                });
              });
            },
            resolve: function (t) {
              if (t instanceof Ot) return t;
              if (t && "function" == typeof t.then)
                return new Ot(function (e, n) {
                  t.then(e, n);
                });
              var e = new Ot(ot, !0, t);
              return jt(e, wt), e;
            },
            reject: Kt,
            race: function () {
              var t = B.apply(null, arguments).map(Zt);
              return new Ot(function (e, n) {
                t.map(function (t) {
                  return Ot.resolve(t).then(e, n);
                });
              });
            },
            PSD: {
              get: function () {
                return Et;
              },
              set: function (t) {
                return (Et = t);
              },
            },
            newPSD: Vt,
            usePSD: re,
            scheduler: {
              get: function () {
                return vt;
              },
              set: function (t) {
                vt = t;
              },
            },
            rejectionMapper: {
              get: function () {
                return kt;
              },
              set: function (t) {
                kt = t;
              },
            },
            follow: function (t, e) {
              return new Ot(function (n, r) {
                return Vt(
                  function (e, n) {
                    var r = Et;
                    (r.unhandleds = []),
                      (r.onunhandled = n),
                      (r.finalize = Q(function () {
                        var t = this;
                        It.push(function r() {
                          0 === t.unhandleds.length ? e() : n(t.unhandleds[0]),
                            It.splice(It.indexOf(r), 1);
                        }),
                          ++At,
                          vt(function () {
                            0 == --At && $t();
                          }, []);
                      }, r.finalize)),
                      t();
                  },
                  e,
                  n,
                  r
                );
              });
            },
          });
        var Ft = { awaits: 0, echoes: 0, id: 0 },
          qt = 0,
          zt = [],
          Wt = 0,
          Jt = 0,
          Ht = 0;
        function Vt(t, e, n, r) {
          var i = Et,
            u = Object.create(i);
          (u.parent = i), (u.ref = 0), (u.global = !1), (u.id = ++Ht);
          var a = Ct.env;
          (u.env = ht
            ? {
                Promise: Ot,
                PromiseProp: { value: Ot, configurable: !0, writable: !0 },
                all: Ot.all,
                race: Ot.race,
                resolve: Ot.resolve,
                reject: Ot.reject,
                nthen: oe(a.nthen, u),
                gthen: oe(a.gthen, u),
              }
            : {}),
            e && o(u, e),
            ++i.ref,
            (u.finalize = function () {
              --this.parent.ref || this.parent.finalize();
            });
          var s = re(u, t, n, r);
          return 0 === u.ref && u.finalize(), s;
        }
        function Yt() {
          return Ft.id || (Ft.id = ++qt), ++Ft.awaits, (Ft.echoes += 7), Ft.id;
        }
        function Xt(t) {
          !Ft.awaits ||
            (t && t !== Ft.id) ||
            (0 == --Ft.awaits && (Ft.id = 0), (Ft.echoes = 7 * Ft.awaits));
        }
        function Zt(t) {
          return Ft.echoes && t && t.constructor === ft
            ? (Yt(),
              t.then(
                function (t) {
                  return Xt(), t;
                },
                function (t) {
                  return Xt(), se(t);
                }
              ))
            : t;
        }
        function Qt(t) {
          ++Jt,
            (Ft.echoes && 0 != --Ft.echoes) || (Ft.echoes = Ft.id = 0),
            zt.push(Et),
            ee(t, !0);
        }
        function te() {
          var t = zt[zt.length - 1];
          zt.pop(), ee(t, !1);
        }
        function ee(t, e) {
          var n,
            r = Et;
          if (
            ((e
              ? !Ft.echoes || (Wt++ && t === Et)
              : !Wt || (--Wt && t === Et)) ||
              ((n = e ? Qt.bind(null, t) : te), lt.call(at, n)),
            t !== Et && ((Et = t), r === Ct && (Ct.env = ne()), ht))
          ) {
            var o = Ct.env.Promise,
              u = t.env;
            (st.then = u.nthen),
              (o.prototype.then = u.gthen),
              (r.global || t.global) &&
                (Object.defineProperty(i, "Promise", u.PromiseProp),
                (o.all = u.all),
                (o.race = u.race),
                (o.resolve = u.resolve),
                (o.reject = u.reject));
          }
        }
        function ne() {
          var t = i.Promise;
          return ht
            ? {
                Promise: t,
                PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
                all: t.all,
                race: t.race,
                resolve: t.resolve,
                reject: t.reject,
                nthen: st.then,
                gthen: t.prototype.then,
              }
            : {};
        }
        function re(t, e, n, r, i) {
          var o = Et;
          try {
            return ee(t, !0), e(n, r, i);
          } finally {
            ee(o, !1);
          }
        }
        function ie(t, e, n) {
          return "function" != typeof t
            ? t
            : function () {
                var r = Et;
                n && Yt(), ee(e, !0);
                try {
                  return t.apply(this, arguments);
                } finally {
                  ee(r, !1);
                }
              };
        }
        function oe(t, e) {
          return function (n, r) {
            return t.call(this, ie(n, e, !1), ie(r, e, !1));
          };
        }
        var ue = "unhandledrejection";
        function ae(t, e) {
          var n;
          try {
            n = e.onuncatched(t);
          } catch (t) {}
          if (!1 !== n)
            try {
              var r,
                u = { promise: e, reason: t };
              if (
                (i.document && document.createEvent
                  ? ((r = document.createEvent("Event")).initEvent(ue, !0, !0),
                    o(r, u))
                  : i.CustomEvent &&
                    o((r = new CustomEvent(ue, { detail: u })), u),
                r &&
                  i.dispatchEvent &&
                  (dispatchEvent(r),
                  !i.PromiseRejectionEvent && i.onunhandledrejection))
              )
                try {
                  i.onunhandledrejection(r);
                } catch (t) {}
              r.defaultPrevented ||
                console.warn("Unhandled rejection: " + (t.stack || t));
            } catch (t) {}
        }
        var se = Ot.reject;
        function ce(t) {
          var e = {},
            i = function (n, r) {
              if (r) {
                for (var i = arguments.length, o = new Array(i - 1); --i; )
                  o[i - 1] = arguments[i];
                return e[n].subscribe.apply(null, o), t;
              }
              if ("string" == typeof n) return e[n];
            };
          i.addEventType = a;
          for (var o = 1, u = arguments.length; o < u; ++o) a(arguments[o]);
          return i;
          function a(t, n, r) {
            if ("object" == typeof t) return s(t);
            n || (n = rt), r || (r = Y);
            var o = {
              subscribers: [],
              fire: r,
              subscribe: function (t) {
                -1 === o.subscribers.indexOf(t) &&
                  (o.subscribers.push(t), (o.fire = n(o.fire, t)));
              },
              unsubscribe: function (t) {
                (o.subscribers = o.subscribers.filter(function (e) {
                  return e !== t;
                })),
                  (o.fire = o.subscribers.reduce(n, r));
              },
            };
            return (e[t] = i[t] = o), o;
          }
          function s(t) {
            n(t).forEach(function (e) {
              var n = t[e];
              if (r(n)) a(e, t[e][0], t[e][1]);
              else {
                if ("asap" !== n)
                  throw new J.InvalidArgument("Invalid event config");
                var i = a(e, X, function () {
                  for (var t = arguments.length, e = new Array(t); t--; )
                    e[t] = arguments[t];
                  i.subscribers.forEach(function (t) {
                    y(function () {
                      t.apply(null, e);
                    });
                  });
                });
              }
            });
          }
        }
        var le,
          fe = "{version}",
          de = String.fromCharCode(65535),
          he = (function () {
            try {
              return IDBKeyRange.only([[]]), [[]];
            } catch (t) {
              return de;
            }
          })(),
          pe = -1 / 0,
          ge =
            "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
          ve = "String expected.",
          me = [],
          ye =
            "undefined" != typeof navigator &&
            /(MSIE|Trident|Edge)/.test(navigator.userAgent),
          be = ye,
          _e = ye,
          we = function (t) {
            return !/(dexie\.js|dexie\.min\.js)/.test(t);
          };
        function ke(t, e) {
          var u,
            a,
            l,
            d,
            h,
            p = ke.dependencies,
            y = o(
              {
                addons: ke.addons,
                autoOpen: !0,
                indexedDB: p.indexedDB,
                IDBKeyRange: p.IDBKeyRange,
              },
              e
            ),
            E = y.addons,
            A = y.autoOpen,
            P = y.indexedDB,
            D = y.IDBKeyRange,
            N = (this._dbSchema = {}),
            M = [],
            j = [],
            R = {},
            $ = null,
            K = null,
            U = !1,
            z = null,
            W = !1,
            H = "readonly",
            V = "readwrite",
            Q = this,
            rt = new Ot(function (t) {
              u = t;
            }),
            ot = new Ot(function (t, e) {
              a = e;
            }),
            ut = !0,
            at = !!Te(P);
          function st(t) {
            (this._cfg = {
              version: t,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null,
            }),
              this.stores({});
          }
          function ct(t, e, n, r) {
            var i = t.db.createObjectStore(
              e,
              n.keyPath
                ? { keyPath: n.keyPath, autoIncrement: n.auto }
                : { autoIncrement: n.auto }
            );
            return (
              r.forEach(function (t) {
                lt(i, t);
              }),
              i
            );
          }
          function lt(t, e) {
            t.createIndex(e.name, e.keyPath, {
              unique: e.unique,
              multiEntry: e.multi,
            });
          }
          function ht(t, e, n) {
            var r = arguments.length;
            if (r < 2) throw new J.InvalidArgument("Too few arguments");
            for (var i = new Array(r - 1); --r; ) i[r - 1] = arguments[r];
            n = i.pop();
            var o = S(i);
            return [t, o, n];
          }
          function pt(t, e, n) {
            (this.name = t),
              (this.schema = e),
              (this._tx = n),
              (this.hook = R[t]
                ? R[t].hook
                : ce(null, {
                    creating: [tt, Y],
                    reading: [Z, X],
                    updating: [nt, Y],
                    deleting: [et, Y],
                  }));
          }
          function gt(t, e, n) {
            return (n ? Ie : Se)(function (n) {
              t.push(n), e && e();
            });
          }
          function vt(t, e, n, r, i) {
            return new Ot(function (o, u) {
              var a = n.length,
                s = a - 1;
              if (0 === a) return o();
              if (r) {
                var c,
                  l = Ie(u),
                  f = Ee(null);
                _(
                  function () {
                    for (var r = 0; r < a; ++r) {
                      c = { onsuccess: null, onerror: null };
                      var u = n[r];
                      i.call(c, u[0], u[1], e);
                      var d = t.delete(u[0]);
                      (d._hookCtx = c),
                        (d.onerror = l),
                        (d.onsuccess = r === s ? Ee(o) : f);
                    }
                  },
                  function (t) {
                    throw (c.onerror && c.onerror(t), t);
                  }
                );
              } else
                for (var d = 0; d < a; ++d) {
                  var h = t.delete(n[d]);
                  (h.onerror = Se(u)),
                    d === s &&
                      (h.onsuccess = Ut(function () {
                        return o();
                      }));
                }
            });
          }
          function mt(t, e, n, r) {
            var i = this;
            (this.db = Q),
              (this.mode = t),
              (this.storeNames = e),
              (this.idbtrans = null),
              (this.on = ce(this, "complete", "error", "abort")),
              (this.parent = r || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new Ot(function (t, e) {
                (i._resolve = t), (i._reject = e);
              })),
              this._completion.then(
                function () {
                  (i.active = !1), i.on.complete.fire();
                },
                function (t) {
                  var e = i.active;
                  return (
                    (i.active = !1),
                    i.on.error.fire(t),
                    i.parent
                      ? i.parent._reject(t)
                      : e && i.idbtrans && i.idbtrans.abort(),
                    se(t)
                  );
                }
              );
          }
          function yt(t, e, n) {
            this._ctx = { table: t, index: ":id" === e ? null : e, or: n };
          }
          function bt(t, e) {
            var n = null,
              r = null;
            if (e)
              try {
                n = e();
              } catch (t) {
                r = t;
              }
            var i = t._ctx,
              o = i.table;
            this._ctx = {
              table: o,
              index: i.index,
              isPrimKey:
                !i.index ||
                (o.schema.primKey.keyPath && i.index === o.schema.primKey.name),
              range: n,
              keysOnly: !1,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: r,
              or: i.or,
              valueMapper: o.hook.reading.fire,
            };
          }
          function _t(t, e) {
            return (
              !(t.filter || t.algorithm || t.or) &&
              (e ? t.justLimit : !t.replayFilter)
            );
          }
          function wt(t, e) {
            return t._cfg.version - e._cfg.version;
          }
          function kt(t, e, n) {
            e.forEach(function (e) {
              var r = n[e];
              t.forEach(function (t) {
                e in t ||
                  (t === mt.prototype || t instanceof mt
                    ? f(t, e, {
                        get: function () {
                          return this.table(e);
                        },
                      })
                    : (t[e] = new pt(e, r)));
              });
            });
          }
          function Ct(t, e, n, r, i, o) {
            var u = Ut(
              o
                ? function (t, e, r) {
                    return n(o(t), e, r);
                  }
                : n,
              i
            );
            t.onerror || (t.onerror = Se(i)),
              (t.onsuccess = (function (t, e) {
                return function () {
                  try {
                    t.apply(this, arguments);
                  } catch (t) {
                    e(t);
                  }
                };
              })(
                e
                  ? function () {
                      var n = t.result;
                      if (n) {
                        var o = function () {
                          n.continue();
                        };
                        e(
                          n,
                          function (t) {
                            o = t;
                          },
                          r,
                          i
                        ) &&
                          u(n.value, n, function (t) {
                            o = t;
                          }),
                          o();
                      } else r();
                    }
                  : function () {
                      var e = t.result;
                      if (e) {
                        var n = function () {
                          e.continue();
                        };
                        u(e.value, e, function (t) {
                          n = t;
                        }),
                          n();
                      } else r();
                    },
                i
              ));
          }
          function St(t, e) {
            return P.cmp(t, e);
          }
          function At(t, e) {
            return St(t, e) > 0 ? t : e;
          }
          function It(t, e) {
            return P.cmp(t, e);
          }
          function Pt(t, e) {
            return P.cmp(e, t);
          }
          function Dt(t, e) {
            return t < e ? -1 : t === e ? 0 : 1;
          }
          function xt(t, e) {
            return t > e ? -1 : t === e ? 0 : 1;
          }
          function Bt(t, e) {
            return t
              ? e
                ? function () {
                    return t.apply(this, arguments) && e.apply(this, arguments);
                  }
                : t
              : e;
          }
          function Tt(t, e) {
            for (var n = e.db.objectStoreNames, r = 0; r < n.length; ++r) {
              var o = n[r],
                u = e.objectStore(o);
              l = "getAll" in u;
              for (var a = 0; a < u.indexNames.length; ++a) {
                var s = u.indexNames[a],
                  c = u.index(s).keyPath,
                  f = "string" == typeof c ? c : "[" + g(c).join("+") + "]";
                if (t[o]) {
                  var d = t[o].idxByName[f];
                  d && (d.name = s);
                }
              }
            }
            /Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              i.WorkerGlobalScope &&
              i instanceof i.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (l = !1);
          }
          function Nt(t) {
            Q.on("blocked").fire(t),
              me
                .filter(function (t) {
                  return t.name === Q.name && t !== Q && !t._vcFired;
                })
                .map(function (e) {
                  return e.on("versionchange").fire(t);
                });
          }
          (this.version = function (t) {
            if ($ || U)
              throw new J.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, t);
            var e = M.filter(function (e) {
              return e._cfg.version === t;
            })[0];
            return e || ((e = new st(t)), M.push(e), M.sort(wt), (ut = !1), e);
          }),
            o(st.prototype, {
              stores: function (t) {
                this._cfg.storesSource = this._cfg.storesSource
                  ? o(this._cfg.storesSource, t)
                  : t;
                var e = {};
                M.forEach(function (t) {
                  o(e, t._cfg.storesSource);
                });
                var r = (this._cfg.dbschema = {});
                return (
                  this._parseStoresSpec(e, r),
                  (N = Q._dbSchema = r),
                  [R, Q, mt.prototype].forEach(function (t) {
                    for (var e in t) t[e] instanceof pt && delete t[e];
                  }),
                  kt([R, Q, mt.prototype, this._cfg.tables], n(r), r),
                  (j = n(r)),
                  this
                );
              },
              upgrade: function (t) {
                return (this._cfg.contentUpgrade = t), this;
              },
              _parseStoresSpec: function (t, e) {
                n(t).forEach(function (n) {
                  if (null !== t[n]) {
                    var i = {},
                      o = (function (t) {
                        var e = [];
                        return (
                          t.split(",").forEach(function (t) {
                            var n = (t = t.trim()).replace(/([&*]|\+\+)/g, ""),
                              i = /^\[/.test(n)
                                ? n.match(/^\[(.*)\]$/)[1].split("+")
                                : n;
                            e.push(
                              new De(
                                n,
                                i || null,
                                /\&/.test(t),
                                /\*/.test(t),
                                /\+\+/.test(t),
                                r(i),
                                /\./.test(t)
                              )
                            );
                          }),
                          e
                        );
                      })(t[n]),
                      u = o.shift();
                    if (u.multi)
                      throw new J.Schema("Primary key cannot be multi-valued");
                    u.keyPath && k(i, u.keyPath, u.auto ? 0 : u.keyPath),
                      o.forEach(function (t) {
                        if (t.auto)
                          throw new J.Schema(
                            "Only primary key can be marked as autoIncrement (++)"
                          );
                        if (!t.keyPath)
                          throw new J.Schema(
                            "Index must have a name and cannot be an empty string"
                          );
                        k(
                          i,
                          t.keyPath,
                          t.compound
                            ? t.keyPath.map(function () {
                                return "";
                              })
                            : ""
                        );
                      }),
                      (e[n] = new xe(n, u, o, i));
                  }
                });
              },
            }),
            (this._allTables = R),
            (this._createTransaction = function (t, e, n, r) {
              return new mt(t, e, n, r);
            }),
            (this._whenReady = function (t) {
              return W || Et.letThrough
                ? t()
                : new Ot(function (t, e) {
                    if (!U) {
                      if (!A) return void e(new J.DatabaseClosed());
                      Q.open().catch(Y);
                    }
                    rt.then(t, e);
                  }).then(t);
            }),
            (this.verno = 0),
            (this.open = function () {
              if (U || $)
                return rt.then(function () {
                  return K ? se(K) : Q;
                });
              T && (ot._stackHolder = L()), (U = !0), (K = null), (W = !1);
              var e = u,
                r = null;
              return Ot.race([
                ot,
                new Ot(function (e, i) {
                  if (!P)
                    throw new J.MissingAPI(
                      "indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill."
                    );
                  var o = ut ? P.open(t) : P.open(t, Math.round(10 * Q.verno));
                  if (!o) throw new J.MissingAPI("IndexedDB API not available");
                  (o.onerror = Se(i)),
                    (o.onblocked = Ut(Nt)),
                    (o.onupgradeneeded = Ut(function (e) {
                      if (((r = o.transaction), ut && !Q._allowEmptyDB)) {
                        (o.onerror = Oe), r.abort(), o.result.close();
                        var u = P.deleteDatabase(t);
                        u.onsuccess = u.onerror = Ut(function () {
                          i(
                            new J.NoSuchDatabase(
                              "Database " + t + " doesnt exist"
                            )
                          );
                        });
                      } else
                        (r.onerror = Se(i)),
                          (function (t, e, r) {
                            var i = Q._createTransaction(V, j, N);
                            i.create(e), i._completion.catch(r);
                            var o = i._reject.bind(i);
                            Vt(function () {
                              (Et.trans = i),
                                0 === t
                                  ? (n(N).forEach(function (t) {
                                      ct(e, t, N[t].primKey, N[t].indexes);
                                    }),
                                    Ot.follow(function () {
                                      return Q.on.populate.fire(i);
                                    }).catch(o))
                                  : (function (t, e, r) {
                                      var i = [],
                                        o = M.filter(function (e) {
                                          return e._cfg.version === t;
                                        })[0];
                                      if (!o)
                                        throw new J.Upgrade(
                                          "Dexie specification of currently installed DB version is missing"
                                        );
                                      N = Q._dbSchema = o._cfg.dbschema;
                                      var u = !1;
                                      return (
                                        M.filter(function (e) {
                                          return e._cfg.version > t;
                                        }).forEach(function (t) {
                                          i.push(function () {
                                            var n = N,
                                              i = t._cfg.dbschema;
                                            Tt(n, r),
                                              Tt(i, r),
                                              (N = Q._dbSchema = i);
                                            var o = (function (t, e) {
                                              var n = {
                                                del: [],
                                                add: [],
                                                change: [],
                                              };
                                              for (var r in t)
                                                e[r] || n.del.push(r);
                                              for (r in e) {
                                                var i = t[r],
                                                  o = e[r];
                                                if (i) {
                                                  var u = {
                                                    name: r,
                                                    def: o,
                                                    recreate: !1,
                                                    del: [],
                                                    add: [],
                                                    change: [],
                                                  };
                                                  if (
                                                    i.primKey.src !==
                                                    o.primKey.src
                                                  )
                                                    (u.recreate = !0),
                                                      n.change.push(u);
                                                  else {
                                                    var a = i.idxByName,
                                                      s = o.idxByName;
                                                    for (var c in a)
                                                      s[c] || u.del.push(c);
                                                    for (c in s) {
                                                      var l = a[c],
                                                        f = s[c];
                                                      l
                                                        ? l.src !== f.src &&
                                                          u.change.push(f)
                                                        : u.add.push(f);
                                                    }
                                                    (u.del.length > 0 ||
                                                      u.add.length > 0 ||
                                                      u.change.length > 0) &&
                                                      n.change.push(u);
                                                  }
                                                } else n.add.push([r, o]);
                                              }
                                              return n;
                                            })(n, i);
                                            if (
                                              (o.add.forEach(function (t) {
                                                ct(
                                                  r,
                                                  t[0],
                                                  t[1].primKey,
                                                  t[1].indexes
                                                );
                                              }),
                                              o.change.forEach(function (t) {
                                                if (t.recreate)
                                                  throw new J.Upgrade(
                                                    "Not yet support for changing primary key"
                                                  );
                                                var e = r.objectStore(t.name);
                                                t.add.forEach(function (t) {
                                                  lt(e, t);
                                                }),
                                                  t.change.forEach(function (
                                                    t
                                                  ) {
                                                    e.deleteIndex(t.name),
                                                      lt(e, t);
                                                  }),
                                                  t.del.forEach(function (t) {
                                                    e.deleteIndex(t);
                                                  });
                                              }),
                                              t._cfg.contentUpgrade)
                                            )
                                              return (
                                                (u = !0),
                                                Ot.follow(function () {
                                                  t._cfg.contentUpgrade(e);
                                                })
                                              );
                                          }),
                                            i.push(function (e) {
                                              (u && be) ||
                                                (function (t, e) {
                                                  for (
                                                    var n = 0;
                                                    n <
                                                    e.db.objectStoreNames
                                                      .length;
                                                    ++n
                                                  ) {
                                                    var r =
                                                      e.db.objectStoreNames[n];
                                                    null == t[r] &&
                                                      e.db.deleteObjectStore(r);
                                                  }
                                                })(t._cfg.dbschema, e);
                                            });
                                        }),
                                        (function t() {
                                          return i.length
                                            ? Ot.resolve(
                                                i.shift()(e.idbtrans)
                                              ).then(t)
                                            : Ot.resolve();
                                        })().then(function () {
                                          (function (t, e) {
                                            n(t).forEach(function (n) {
                                              e.db.objectStoreNames.contains(
                                                n
                                              ) ||
                                                ct(
                                                  e,
                                                  n,
                                                  t[n].primKey,
                                                  t[n].indexes
                                                );
                                            });
                                          })(N, r);
                                        })
                                      );
                                    })(t, i, e).catch(o);
                            });
                          })(
                            (e.oldVersion > Math.pow(2, 62)
                              ? 0
                              : e.oldVersion) / 10,
                            r,
                            i
                          );
                    }, i)),
                    (o.onsuccess = Ut(function () {
                      if (((r = null), ($ = o.result), me.push(Q), ut))
                        (function () {
                          if (
                            ((Q.verno = $.version / 10),
                            (Q._dbSchema = N = {}),
                            0 !== (j = g($.objectStoreNames, 0)).length)
                          ) {
                            var t = $.transaction(Be(j), "readonly");
                            j.forEach(function (e) {
                              for (
                                var n = t.objectStore(e),
                                  r = n.keyPath,
                                  i =
                                    r &&
                                    "string" == typeof r &&
                                    -1 !== r.indexOf("."),
                                  o = new De(
                                    r,
                                    r || "",
                                    !1,
                                    !1,
                                    !!n.autoIncrement,
                                    r && "string" != typeof r,
                                    i
                                  ),
                                  u = [],
                                  a = 0;
                                a < n.indexNames.length;
                                ++a
                              ) {
                                var s = n.index(n.indexNames[a]);
                                i =
                                  (r = s.keyPath) &&
                                  "string" == typeof r &&
                                  -1 !== r.indexOf(".");
                                var c = new De(
                                  s.name,
                                  r,
                                  !!s.unique,
                                  !!s.multiEntry,
                                  !1,
                                  r && "string" != typeof r,
                                  i
                                );
                                u.push(c);
                              }
                              N[e] = new xe(e, o, u, {});
                            }),
                              kt([R], n(N), N);
                          }
                        })();
                      else if ($.objectStoreNames.length > 0)
                        try {
                          Tt(N, $.transaction(Be($.objectStoreNames), H));
                        } catch (t) {}
                      ($.onversionchange = Ut(function (t) {
                        (Q._vcFired = !0), Q.on("versionchange").fire(t);
                      })),
                        at ||
                          "__dbnames" === t ||
                          le.dbnames.put({ name: t }).catch(Y),
                        e();
                    }, i));
                }),
              ])
                .then(function () {
                  return (
                    (z = []),
                    Ot.resolve(ke.vip(Q.on.ready.fire)).then(function t() {
                      if (z.length > 0) {
                        var e = z.reduce(it, Y);
                        return (z = []), Ot.resolve(ke.vip(e)).then(t);
                      }
                    })
                  );
                })
                .finally(function () {
                  z = null;
                })
                .then(function () {
                  return (U = !1), Q;
                })
                .catch(function (t) {
                  try {
                    r && r.abort();
                  } catch (t) {}
                  return (U = !1), Q.close(), se((K = t));
                })
                .finally(function () {
                  (W = !0), e();
                });
            }),
            (this.close = function () {
              var t = me.indexOf(Q);
              if ((t >= 0 && me.splice(t, 1), $)) {
                try {
                  $.close();
                } catch (t) {}
                $ = null;
              }
              (A = !1),
                (K = new J.DatabaseClosed()),
                U && a(K),
                (rt = new Ot(function (t) {
                  u = t;
                })),
                (ot = new Ot(function (t, e) {
                  a = e;
                }));
            }),
            (this.delete = function () {
              var e = arguments.length > 0;
              return new Ot(function (n, r) {
                if (e)
                  throw new J.InvalidArgument(
                    "Arguments not allowed in db.delete()"
                  );
                function i() {
                  Q.close();
                  var e = P.deleteDatabase(t);
                  (e.onsuccess = Ut(function () {
                    at || le.dbnames.delete(t).catch(Y), n();
                  })),
                    (e.onerror = Se(r)),
                    (e.onblocked = Nt);
                }
                U ? rt.then(i) : i();
              });
            }),
            (this.backendDB = function () {
              return $;
            }),
            (this.isOpen = function () {
              return null !== $;
            }),
            (this.hasBeenClosed = function () {
              return K && K instanceof J.DatabaseClosed;
            }),
            (this.hasFailed = function () {
              return null !== K;
            }),
            (this.dynamicallyOpened = function () {
              return ut;
            }),
            (this.name = t),
            c(this, {
              tables: {
                get: function () {
                  return n(R).map(function (t) {
                    return R[t];
                  });
                },
              },
            }),
            (this.on = ce(this, "populate", "blocked", "versionchange", {
              ready: [it, Y],
            })),
            (this.on.ready.subscribe = v(this.on.ready.subscribe, function (t) {
              return function (e, n) {
                ke.vip(function () {
                  W
                    ? (K || Ot.resolve().then(e), n && t(e))
                    : z
                    ? (z.push(e), n && t(e))
                    : (t(e),
                      n ||
                        t(function t() {
                          Q.on.ready.unsubscribe(e), Q.on.ready.unsubscribe(t);
                        }));
                });
              };
            })),
            (this.transaction = function () {
              var t = ht.apply(this, arguments);
              return this._transaction.apply(this, t);
            }),
            (this._transaction = function (t, e, n) {
              var r = Et.trans;
              (r && r.db === Q && -1 === t.indexOf("!")) || (r = null);
              var i = -1 !== t.indexOf("?");
              t = t.replace("!", "").replace("?", "");
              try {
                var o = e.map(function (t) {
                  var e = t instanceof pt ? t.name : t;
                  if ("string" != typeof e)
                    throw new TypeError(
                      "Invalid table argument to Dexie.transaction(). Only Table or String are allowed"
                    );
                  return e;
                });
                if ("r" == t || t == H) t = H;
                else {
                  if ("rw" != t && t != V)
                    throw new J.InvalidArgument(
                      "Invalid transaction mode: " + t
                    );
                  t = V;
                }
                if (r) {
                  if (r.mode === H && t === V) {
                    if (!i)
                      throw new J.SubTransaction(
                        "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY"
                      );
                    r = null;
                  }
                  r &&
                    o.forEach(function (t) {
                      if (r && -1 === r.storeNames.indexOf(t)) {
                        if (!i)
                          throw new J.SubTransaction(
                            "Table " +
                              t +
                              " not included in parent transaction."
                          );
                        r = null;
                      }
                    }),
                    i && r && !r.active && (r = null);
                }
              } catch (t) {
                return r
                  ? r._promise(null, function (e, n) {
                      n(t);
                    })
                  : se(t);
              }
              return r
                ? r._promise(t, u, "lock")
                : Et.trans
                ? re(Et.transless, function () {
                    return Q._whenReady(u);
                  })
                : Q._whenReady(u);
              function u() {
                return Ot.resolve().then(function () {
                  var e,
                    i = Et.transless || Et,
                    u = Q._createTransaction(t, o, N, r),
                    a = { trans: u, transless: i };
                  r ? (u.idbtrans = r.idbtrans) : u.create(),
                    n.constructor === dt && Yt();
                  var s = Ot.follow(function () {
                    if ((e = n.call(u, u)))
                      if (e.constructor === ft) {
                        var t = Xt.bind(null, null);
                        e.then(t, t);
                      } else
                        "function" == typeof e.next &&
                          "function" == typeof e.throw &&
                          (e = Pe(e));
                  }, a);
                  return (e && "function" == typeof e.then
                    ? Ot.resolve(e).then(function (t) {
                        return u.active
                          ? t
                          : se(
                              new J.PrematureCommit(
                                "Transaction committed too early. See http://bit.ly/2kdckMn"
                              )
                            );
                      })
                    : s.then(function () {
                        return e;
                      })
                  )
                    .then(function (t) {
                      return (
                        r && u._resolve(),
                        u._completion.then(function () {
                          return t;
                        })
                      );
                    })
                    .catch(function (t) {
                      return u._reject(t), se(t);
                    });
                });
              }
            }),
            (this.table = function (t) {
              if (!s(R, t))
                throw new J.InvalidTable("Table " + t + " does not exist");
              return R[t];
            }),
            c(pt.prototype, {
              _trans: function (t, e, n) {
                var r = this._tx || Et.trans;
                return r && r.db === Q
                  ? r === Et.trans
                    ? r._promise(t, e, n)
                    : Vt(
                        function () {
                          return r._promise(t, e, n);
                        },
                        { trans: r, transless: Et.transless || Et }
                      )
                  : (function t(e, n, r) {
                      if (W || Et.letThrough) {
                        var i = Q._createTransaction(e, n, N);
                        try {
                          i.create();
                        } catch (t) {
                          return se(t);
                        }
                        return i
                          ._promise(e, function (t, e) {
                            return Vt(function () {
                              return (Et.trans = i), r(t, e, i);
                            });
                          })
                          .then(function (t) {
                            return i._completion.then(function () {
                              return t;
                            });
                          });
                      }
                      if (!U) {
                        if (!A) return se(new J.DatabaseClosed());
                        Q.open().catch(Y);
                      }
                      return rt.then(function () {
                        return t(e, n, r);
                      });
                    })(t, [this.name], e);
              },
              _idbstore: function (t, e, n) {
                var r = this.name;
                return this._trans(
                  t,
                  function (t, n, i) {
                    if (-1 === i.storeNames.indexOf(r))
                      throw new J.NotFound(
                        "Table" + r + " not part of transaction"
                      );
                    return e(t, n, i.idbtrans.objectStore(r), i);
                  },
                  n
                );
              },
              get: function (t, e) {
                if (t && t.constructor === Object)
                  return this.where(t).first(e);
                var n = this;
                return this._idbstore(H, function (e, r, i) {
                  var o = i.get(t);
                  (o.onerror = Se(r)),
                    (o.onsuccess = Ut(function () {
                      e(n.hook.reading.fire(o.result));
                    }, r));
                }).then(e);
              },
              where: function (t) {
                if ("string" == typeof t) return new yt(this, t);
                if (r(t)) return new yt(this, "[" + t.join("+") + "]");
                var e = n(t);
                if (1 === e.length) return this.where(e[0]).equals(t[e[0]]);
                var i = this.schema.indexes
                  .concat(this.schema.primKey)
                  .filter(function (t) {
                    return (
                      t.compound &&
                      e.every(function (e) {
                        return t.keyPath.indexOf(e) >= 0;
                      }) &&
                      t.keyPath.every(function (t) {
                        return e.indexOf(t) >= 0;
                      })
                    );
                  })[0];
                if (i && he !== de)
                  return this.where(i.name).equals(
                    i.keyPath.map(function (e) {
                      return t[e];
                    })
                  );
                i ||
                  console.warn(
                    "The query " +
                      JSON.stringify(t) +
                      " on " +
                      this.name +
                      " would benefit of a compound index [" +
                      e.join("+") +
                      "]"
                  );
                var o = this.schema.idxByName,
                  u = e.reduce(
                    function (e, n) {
                      return [
                        e[0] || o[n],
                        e[0] || !o[n]
                          ? Bt(e[1], function (e) {
                              return "" + w(e, n) == "" + t[n];
                            })
                          : e[1],
                      ];
                    },
                    [null, null]
                  ),
                  a = u[0];
                return a
                  ? this.where(a.name).equals(t[a.keyPath]).filter(u[1])
                  : i
                  ? this.filter(u[1])
                  : this.where(e).equals("");
              },
              count: function (t) {
                return this.toCollection().count(t);
              },
              offset: function (t) {
                return this.toCollection().offset(t);
              },
              limit: function (t) {
                return this.toCollection().limit(t);
              },
              reverse: function () {
                return this.toCollection().reverse();
              },
              filter: function (t) {
                return this.toCollection().and(t);
              },
              each: function (t) {
                return this.toCollection().each(t);
              },
              toArray: function (t) {
                return this.toCollection().toArray(t);
              },
              orderBy: function (t) {
                return new bt(new yt(this, r(t) ? "[" + t.join("+") + "]" : t));
              },
              toCollection: function () {
                return new bt(new yt(this));
              },
              mapToClass: function (t, e) {
                this.schema.mappedClass = t;
                var n = Object.create(t.prototype);
                e && Ce(n, e), (this.schema.instanceTemplate = n);
                var r = function (e) {
                  if (!e) return e;
                  var n = Object.create(t.prototype);
                  for (var r in e)
                    if (s(e, r))
                      try {
                        n[r] = e[r];
                      } catch (t) {}
                  return n;
                };
                return (
                  this.schema.readHook &&
                    this.hook.reading.unsubscribe(this.schema.readHook),
                  (this.schema.readHook = r),
                  this.hook("reading", r),
                  t
                );
              },
              defineClass: function (t) {
                return this.mapToClass(ke.defineClass(t), t);
              },
              bulkDelete: function (t) {
                return this.hook.deleting.fire === Y
                  ? this._idbstore(V, function (e, n, r, i) {
                      e(vt(r, i, t, !1, Y));
                    })
                  : this.where(":id")
                      .anyOf(t)
                      .delete()
                      .then(function () {});
              },
              bulkPut: function (t, e) {
                var n = this;
                return this._idbstore(
                  V,
                  function (r, i, o) {
                    if (!o.keyPath && !n.schema.primKey.auto && !e)
                      throw new J.InvalidArgument(
                        "bulkPut() with non-inbound keys requires keys array in second argument"
                      );
                    if (o.keyPath && e)
                      throw new J.InvalidArgument(
                        "bulkPut(): keys argument invalid on tables with inbound keys"
                      );
                    if (e && e.length !== t.length)
                      throw new J.InvalidArgument(
                        "Arguments objects and keys must have the same length"
                      );
                    if (0 === t.length) return r();
                    var u,
                      a,
                      s = function (t) {
                        0 === c.length
                          ? r(t)
                          : i(
                              new q(
                                n.name +
                                  ".bulkPut(): " +
                                  c.length +
                                  " of " +
                                  l +
                                  " operations failed",
                                c
                              )
                            );
                      },
                      c = [],
                      l = t.length,
                      f = n;
                    if (
                      n.hook.creating.fire === Y &&
                      n.hook.updating.fire === Y
                    ) {
                      a = gt(c);
                      for (var d = 0, h = t.length; d < h; ++d)
                        (u = e ? o.put(t[d], e[d]) : o.put(t[d])).onerror = a;
                      (u.onerror = gt(c, s)), (u.onsuccess = Ae(s));
                    } else {
                      var p =
                          e ||
                          (o.keyPath &&
                            t.map(function (t) {
                              return w(t, o.keyPath);
                            })),
                        g =
                          p &&
                          b(p, function (e, n) {
                            return null != e && [e, t[n]];
                          });
                      (p
                        ? f
                            .where(":id")
                            .anyOf(
                              p.filter(function (t) {
                                return null != t;
                              })
                            )
                            .modify(function () {
                              (this.value = g[this.primKey]),
                                (g[this.primKey] = null);
                            })
                            .catch(F, function (t) {
                              c = t.failures;
                            })
                            .then(function () {
                              for (
                                var n = [], r = e && [], i = p.length - 1;
                                i >= 0;
                                --i
                              ) {
                                var o = p[i];
                                (null == o || g[o]) &&
                                  (n.push(t[i]),
                                  e && r.push(o),
                                  null != o && (g[o] = null));
                              }
                              return (
                                n.reverse(), e && r.reverse(), f.bulkAdd(n, r)
                              );
                            })
                            .then(function (t) {
                              var e = p[p.length - 1];
                              return null != e ? e : t;
                            })
                        : f.bulkAdd(t)
                      )
                        .then(s)
                        .catch(q, function (t) {
                          (c = c.concat(t.failures)), s();
                        })
                        .catch(i);
                    }
                  },
                  "locked"
                );
              },
              bulkAdd: function (t, e) {
                var n = this,
                  r = this.hook.creating.fire;
                return this._idbstore(V, function (i, o, u, a) {
                  if (!u.keyPath && !n.schema.primKey.auto && !e)
                    throw new J.InvalidArgument(
                      "bulkAdd() with non-inbound keys requires keys array in second argument"
                    );
                  if (u.keyPath && e)
                    throw new J.InvalidArgument(
                      "bulkAdd(): keys argument invalid on tables with inbound keys"
                    );
                  if (e && e.length !== t.length)
                    throw new J.InvalidArgument(
                      "Arguments objects and keys must have the same length"
                    );
                  if (0 === t.length) return i();
                  function s(t) {
                    0 === d.length
                      ? i(t)
                      : o(
                          new q(
                            n.name +
                              ".bulkAdd(): " +
                              d.length +
                              " of " +
                              h +
                              " operations failed",
                            d
                          )
                        );
                  }
                  var c,
                    l,
                    f,
                    d = [],
                    h = t.length;
                  if (r !== Y) {
                    var p,
                      g = u.keyPath;
                    (l = gt(d, null, !0)),
                      (f = Ee(null)),
                      _(
                        function () {
                          for (var n = 0, i = t.length; n < i; ++n) {
                            p = { onerror: null, onsuccess: null };
                            var o = e && e[n],
                              s = t[n],
                              d = e ? o : g ? w(s, g) : void 0,
                              h = r.call(p, d, s, a);
                            null == d &&
                              null != h &&
                              (g ? k((s = I(s)), g, h) : (o = h)),
                              ((c =
                                null != o
                                  ? u.add(s, o)
                                  : u.add(s))._hookCtx = p),
                              n < i - 1 &&
                                ((c.onerror = l),
                                p.onsuccess && (c.onsuccess = f));
                          }
                        },
                        function (t) {
                          throw (p.onerror && p.onerror(t), t);
                        }
                      ),
                      (c.onerror = gt(d, s, !0)),
                      (c.onsuccess = Ee(s));
                  } else {
                    l = gt(d);
                    for (var v = 0, m = t.length; v < m; ++v)
                      (c = e ? u.add(t[v], e[v]) : u.add(t[v])).onerror = l;
                    (c.onerror = gt(d, s)), (c.onsuccess = Ae(s));
                  }
                });
              },
              add: function (t, e) {
                var n = this.hook.creating.fire;
                return this._idbstore(V, function (r, i, o, u) {
                  var a = { onsuccess: null, onerror: null };
                  if (n !== Y) {
                    var s =
                        null != e ? e : o.keyPath ? w(t, o.keyPath) : void 0,
                      c = n.call(a, s, t, u);
                    null == s &&
                      null != c &&
                      (o.keyPath ? k(t, o.keyPath, c) : (e = c));
                  }
                  try {
                    var l = null != e ? o.add(t, e) : o.add(t);
                    (l._hookCtx = a),
                      (l.onerror = Ie(i)),
                      (l.onsuccess = Ee(function (e) {
                        var n = o.keyPath;
                        n && k(t, n, e), r(e);
                      }));
                  } catch (t) {
                    throw (a.onerror && a.onerror(t), t);
                  }
                });
              },
              put: function (t, e) {
                var n = this,
                  r = this.hook.creating.fire,
                  i = this.hook.updating.fire;
                if (r !== Y || i !== Y) {
                  var o = this.schema.primKey.keyPath,
                    u = void 0 !== e ? e : o && w(t, o);
                  return null == u
                    ? this.add(t)
                    : ((t = I(t)),
                      this._trans(
                        V,
                        function () {
                          return n
                            .where(":id")
                            .equals(u)
                            .modify(function () {
                              this.value = t;
                            })
                            .then(function (r) {
                              return 0 === r ? n.add(t, e) : u;
                            });
                        },
                        "locked"
                      ));
                }
                return this._idbstore(V, function (n, r, i) {
                  var o = void 0 !== e ? i.put(t, e) : i.put(t);
                  (o.onerror = Se(r)),
                    (o.onsuccess = Ut(function (e) {
                      var r = i.keyPath;
                      r && k(t, r, e.target.result), n(o.result);
                    }));
                });
              },
              delete: function (t) {
                return this.hook.deleting.subscribers.length
                  ? this.where(":id").equals(t).delete()
                  : this._idbstore(V, function (e, n, r) {
                      var i = r.delete(t);
                      (i.onerror = Se(n)),
                        (i.onsuccess = Ut(function () {
                          e(i.result);
                        }));
                    });
              },
              clear: function () {
                return this.hook.deleting.subscribers.length
                  ? this.toCollection().delete()
                  : this._idbstore(V, function (t, e, n) {
                      var r = n.clear();
                      (r.onerror = Se(e)),
                        (r.onsuccess = Ut(function () {
                          t(r.result);
                        }));
                    });
              },
              update: function (t, e) {
                if ("object" != typeof e || r(e))
                  throw new J.InvalidArgument(
                    "Modifications must be an object."
                  );
                if ("object" != typeof t || r(t))
                  return this.where(":id").equals(t).modify(e);
                n(e).forEach(function (n) {
                  k(t, n, e[n]);
                });
                var i = w(t, this.schema.primKey.keyPath);
                return void 0 === i
                  ? se(
                      new J.InvalidArgument(
                        "Given object does not contain its primary key"
                      )
                    )
                  : this.where(":id").equals(i).modify(e);
              },
            }),
            c(mt.prototype, {
              _lock: function () {
                return (
                  m(!Et.global),
                  ++this._reculock,
                  1 !== this._reculock || Et.global || (Et.lockOwnerFor = this),
                  this
                );
              },
              _unlock: function () {
                if ((m(!Et.global), 0 == --this._reculock))
                  for (
                    Et.global || (Et.lockOwnerFor = null);
                    this._blockedFuncs.length > 0 && !this._locked();

                  ) {
                    var t = this._blockedFuncs.shift();
                    try {
                      re(t[1], t[0]);
                    } catch (t) {}
                  }
                return this;
              },
              _locked: function () {
                return this._reculock && Et.lockOwnerFor !== this;
              },
              create: function (t) {
                var e = this;
                if (!this.mode) return this;
                if ((m(!this.idbtrans), !t && !$))
                  switch (K && K.name) {
                    case "DatabaseClosedError":
                      throw new J.DatabaseClosed(K);
                    case "MissingAPIError":
                      throw new J.MissingAPI(K.message, K);
                    default:
                      throw new J.OpenFailed(K);
                  }
                if (!this.active) throw new J.TransactionInactive();
                return (
                  m(null === this._completion._state),
                  ((t = this.idbtrans =
                    t ||
                    $.transaction(Be(this.storeNames), this.mode)).onerror = Ut(
                    function (n) {
                      Oe(n), e._reject(t.error);
                    }
                  )),
                  (t.onabort = Ut(function (n) {
                    Oe(n),
                      e.active && e._reject(new J.Abort(t.error)),
                      (e.active = !1),
                      e.on("abort").fire(n);
                  })),
                  (t.oncomplete = Ut(function () {
                    (e.active = !1), e._resolve();
                  })),
                  this
                );
              },
              _promise: function (t, e, n) {
                var r = this;
                if (t === V && this.mode !== V)
                  return se(new J.ReadOnly("Transaction is readonly"));
                if (!this.active) return se(new J.TransactionInactive());
                if (this._locked())
                  return new Ot(function (i, o) {
                    r._blockedFuncs.push([
                      function () {
                        r._promise(t, e, n).then(i, o);
                      },
                      Et,
                    ]);
                  });
                if (n)
                  return Vt(function () {
                    var t = new Ot(function (t, n) {
                      r._lock();
                      var i = e(t, n, r);
                      i && i.then && i.then(t, n);
                    });
                    return (
                      t.finally(function () {
                        return r._unlock();
                      }),
                      (t._lib = !0),
                      t
                    );
                  });
                var i = new Ot(function (t, n) {
                  var i = e(t, n, r);
                  i && i.then && i.then(t, n);
                });
                return (i._lib = !0), i;
              },
              _root: function () {
                return this.parent ? this.parent._root() : this;
              },
              waitFor: function (t) {
                var e = this._root();
                if (((t = Ot.resolve(t)), e._waitingFor))
                  e._waitingFor = e._waitingFor.then(function () {
                    return t;
                  });
                else {
                  (e._waitingFor = t), (e._waitingQueue = []);
                  var n = e.idbtrans.objectStore(e.storeNames[0]);
                  (function t() {
                    for (++e._spinCount; e._waitingQueue.length; )
                      e._waitingQueue.shift()();
                    e._waitingFor && (n.get(-1 / 0).onsuccess = t);
                  })();
                }
                var r = e._waitingFor;
                return new Ot(function (n, i) {
                  t.then(
                    function (t) {
                      return e._waitingQueue.push(Ut(n.bind(null, t)));
                    },
                    function (t) {
                      return e._waitingQueue.push(Ut(i.bind(null, t)));
                    }
                  ).finally(function () {
                    e._waitingFor === r && (e._waitingFor = null);
                  });
                });
              },
              abort: function () {
                this.active && this._reject(new J.Abort()), (this.active = !1);
              },
              tables: {
                get:
                  ((d = "Transaction.tables"),
                  (h = function () {
                    return R;
                  }),
                  function () {
                    return (
                      console.warn(
                        d +
                          " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " +
                          G(L(), 1)
                      ),
                      h.apply(this, arguments)
                    );
                  }),
              },
              table: function (t) {
                return new pt(t, Q.table(t).schema, this);
              },
            }),
            c(yt.prototype, function () {
              function t(t, e, n) {
                var r = t instanceof yt ? new bt(t) : t;
                return (r._ctx.error = n ? new n(e) : new TypeError(e)), r;
              }
              function e(t) {
                return new bt(t, function () {
                  return D.only("");
                }).limit(0);
              }
              function n(t, e, n, r, i, o) {
                for (
                  var u = Math.min(t.length, r.length), a = -1, s = 0;
                  s < u;
                  ++s
                ) {
                  var c = e[s];
                  if (c !== r[s])
                    return i(t[s], n[s]) < 0
                      ? t.substr(0, s) + n[s] + n.substr(s + 1)
                      : i(t[s], r[s]) < 0
                      ? t.substr(0, s) + r[s] + n.substr(s + 1)
                      : a >= 0
                      ? t.substr(0, a) + e[a] + n.substr(a + 1)
                      : null;
                  i(t[s], c) < 0 && (a = s);
                }
                return u < r.length && "next" === o
                  ? t + n.substr(t.length)
                  : u < t.length && "prev" === o
                  ? t.substr(0, n.length)
                  : a < 0
                  ? null
                  : t.substr(0, a) + r[a] + n.substr(a + 1);
              }
              function r(e, r, i, o) {
                var u,
                  a,
                  s,
                  c,
                  l,
                  f,
                  d,
                  h = i.length;
                if (
                  !i.every(function (t) {
                    return "string" == typeof t;
                  })
                )
                  return t(e, ve);
                function p(t) {
                  (u = (function (t) {
                    return "next" === t
                      ? function (t) {
                          return t.toUpperCase();
                        }
                      : function (t) {
                          return t.toLowerCase();
                        };
                  })(t)),
                    (a = (function (t) {
                      return "next" === t
                        ? function (t) {
                            return t.toLowerCase();
                          }
                        : function (t) {
                            return t.toUpperCase();
                          };
                    })(t)),
                    (s = "next" === t ? Dt : xt);
                  var e = i
                    .map(function (t) {
                      return { lower: a(t), upper: u(t) };
                    })
                    .sort(function (t, e) {
                      return s(t.lower, e.lower);
                    });
                  (c = e.map(function (t) {
                    return t.upper;
                  })),
                    (l = e.map(function (t) {
                      return t.lower;
                    })),
                    (f = t),
                    (d = "next" === t ? "" : o);
                }
                p("next");
                var g = new bt(e, function () {
                  return D.bound(c[0], l[h - 1] + o);
                });
                g._ondirectionchange = function (t) {
                  p(t);
                };
                var v = 0;
                return (
                  g._addAlgorithm(function (t, e, i) {
                    var o = t.key;
                    if ("string" != typeof o) return !1;
                    var u = a(o);
                    if (r(u, l, v)) return !0;
                    for (var p = null, g = v; g < h; ++g) {
                      var m = n(o, u, c[g], l[g], s, f);
                      null === m && null === p
                        ? (v = g + 1)
                        : (null === p || s(p, m) > 0) && (p = m);
                    }
                    return (
                      e(
                        null !== p
                          ? function () {
                              t.continue(p + d);
                            }
                          : i
                      ),
                      !1
                    );
                  }),
                  g
                );
              }
              return {
                between: function (n, r, i, o) {
                  (i = !1 !== i), (o = !0 === o);
                  try {
                    return St(n, r) > 0 ||
                      (0 === St(n, r) && (i || o) && (!i || !o))
                      ? e(this)
                      : new bt(this, function () {
                          return D.bound(n, r, !i, !o);
                        });
                  } catch (e) {
                    return t(this, ge);
                  }
                },
                equals: function (t) {
                  return new bt(this, function () {
                    return D.only(t);
                  });
                },
                above: function (t) {
                  return new bt(this, function () {
                    return D.lowerBound(t, !0);
                  });
                },
                aboveOrEqual: function (t) {
                  return new bt(this, function () {
                    return D.lowerBound(t);
                  });
                },
                below: function (t) {
                  return new bt(this, function () {
                    return D.upperBound(t, !0);
                  });
                },
                belowOrEqual: function (t) {
                  return new bt(this, function () {
                    return D.upperBound(t);
                  });
                },
                startsWith: function (e) {
                  return "string" != typeof e
                    ? t(this, ve)
                    : this.between(e, e + de, !0, !0);
                },
                startsWithIgnoreCase: function (t) {
                  return "" === t
                    ? this.startsWith(t)
                    : r(
                        this,
                        function (t, e) {
                          return 0 === t.indexOf(e[0]);
                        },
                        [t],
                        de
                      );
                },
                equalsIgnoreCase: function (t) {
                  return r(
                    this,
                    function (t, e) {
                      return t === e[0];
                    },
                    [t],
                    ""
                  );
                },
                anyOfIgnoreCase: function () {
                  var t = B.apply(x, arguments);
                  return 0 === t.length
                    ? e(this)
                    : r(
                        this,
                        function (t, e) {
                          return -1 !== e.indexOf(t);
                        },
                        t,
                        ""
                      );
                },
                startsWithAnyOfIgnoreCase: function () {
                  var t = B.apply(x, arguments);
                  return 0 === t.length
                    ? e(this)
                    : r(
                        this,
                        function (t, e) {
                          return e.some(function (e) {
                            return 0 === t.indexOf(e);
                          });
                        },
                        t,
                        de
                      );
                },
                anyOf: function () {
                  var n = B.apply(x, arguments),
                    r = It;
                  try {
                    n.sort(r);
                  } catch (e) {
                    return t(this, ge);
                  }
                  if (0 === n.length) return e(this);
                  var i = new bt(this, function () {
                    return D.bound(n[0], n[n.length - 1]);
                  });
                  i._ondirectionchange = function (t) {
                    (r = "next" === t ? It : Pt), n.sort(r);
                  };
                  var o = 0;
                  return (
                    i._addAlgorithm(function (t, e, i) {
                      for (var u = t.key; r(u, n[o]) > 0; )
                        if (++o === n.length) return e(i), !1;
                      return (
                        0 === r(u, n[o]) ||
                        (e(function () {
                          t.continue(n[o]);
                        }),
                        !1)
                      );
                    }),
                    i
                  );
                },
                notEqual: function (t) {
                  return this.inAnyRange(
                    [
                      [pe, t],
                      [t, he],
                    ],
                    { includeLowers: !1, includeUppers: !1 }
                  );
                },
                noneOf: function () {
                  var e = B.apply(x, arguments);
                  if (0 === e.length) return new bt(this);
                  try {
                    e.sort(It);
                  } catch (e) {
                    return t(this, ge);
                  }
                  var n = e.reduce(function (t, e) {
                    return t ? t.concat([[t[t.length - 1][1], e]]) : [[pe, e]];
                  }, null);
                  return (
                    n.push([e[e.length - 1], he]),
                    this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 })
                  );
                },
                inAnyRange: function (n, r) {
                  if (0 === n.length) return e(this);
                  if (
                    !n.every(function (t) {
                      return (
                        void 0 !== t[0] &&
                        void 0 !== t[1] &&
                        It(t[0], t[1]) <= 0
                      );
                    })
                  )
                    return t(
                      this,
                      "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                      J.InvalidArgument
                    );
                  var i,
                    o = !r || !1 !== r.includeLowers,
                    u = r && !0 === r.includeUppers,
                    a = It;
                  function s(t, e) {
                    return a(t[0], e[0]);
                  }
                  try {
                    (i = n.reduce(function (t, e) {
                      for (var n = 0, r = t.length; n < r; ++n) {
                        var i = t[n];
                        if (St(e[0], i[1]) < 0 && St(e[1], i[0]) > 0) {
                          (i[0] = St((o = i[0]), (u = e[0])) < 0 ? o : u),
                            (i[1] = At(i[1], e[1]));
                          break;
                        }
                      }
                      var o, u;
                      return n === r && t.push(e), t;
                    }, [])).sort(s);
                  } catch (e) {
                    return t(this, ge);
                  }
                  var c = 0,
                    l = u
                      ? function (t) {
                          return It(t, i[c][1]) > 0;
                        }
                      : function (t) {
                          return It(t, i[c][1]) >= 0;
                        },
                    f = o
                      ? function (t) {
                          return Pt(t, i[c][0]) > 0;
                        }
                      : function (t) {
                          return Pt(t, i[c][0]) >= 0;
                        },
                    d = l,
                    h = new bt(this, function () {
                      return D.bound(i[0][0], i[i.length - 1][1], !o, !u);
                    });
                  return (
                    (h._ondirectionchange = function (t) {
                      "next" === t ? ((d = l), (a = It)) : ((d = f), (a = Pt)),
                        i.sort(s);
                    }),
                    h._addAlgorithm(function (t, e, n) {
                      for (var r = t.key; d(r); )
                        if (++c === i.length) return e(n), !1;
                      return (
                        !!(function (t) {
                          return !l(t) && !f(t);
                        })(r) ||
                        (0 === St(r, i[c][1]) ||
                          0 === St(r, i[c][0]) ||
                          e(function () {
                            a === It
                              ? t.continue(i[c][0])
                              : t.continue(i[c][1]);
                          }),
                        !1)
                      );
                    }),
                    h
                  );
                },
                startsWithAnyOf: function () {
                  var n = B.apply(x, arguments);
                  return n.every(function (t) {
                    return "string" == typeof t;
                  })
                    ? 0 === n.length
                      ? e(this)
                      : this.inAnyRange(
                          n.map(function (t) {
                            return [t, t + de];
                          })
                        )
                    : t(this, "startsWithAnyOf() only works with strings");
                },
              };
            }),
            c(bt.prototype, function () {
              function t(t, e) {
                t.filter = Bt(t.filter, e);
              }
              function e(t, e, n) {
                var r = t.replayFilter;
                (t.replayFilter = r
                  ? function () {
                      return Bt(r(), e());
                    }
                  : e),
                  (t.justLimit = n && !r);
              }
              function r(t, e) {
                if (t.isPrimKey) return e;
                var n = t.table.schema.idxByName[t.index];
                if (!n)
                  throw new J.Schema(
                    "KeyPath " +
                      t.index +
                      " on object store " +
                      e.name +
                      " is not indexed"
                  );
                return e.index(n.name);
              }
              function i(t, e) {
                var n = r(t, e);
                return t.keysOnly && "openKeyCursor" in n
                  ? n.openKeyCursor(t.range || null, t.dir + t.unique)
                  : n.openCursor(t.range || null, t.dir + t.unique);
              }
              function u(t, e, n, r, o) {
                var u = t.replayFilter
                  ? Bt(t.filter, t.replayFilter())
                  : t.filter;
                t.or
                  ? (function () {
                      var a = {},
                        c = 0;
                      function l() {
                        2 == ++c && n();
                      }
                      function f(t, n, i) {
                        if (!u || u(n, i, l, r)) {
                          var o = n.primaryKey,
                            c = "" + o;
                          "[object ArrayBuffer]" === c &&
                            (c = "" + new Uint8Array(o)),
                            s(a, c) || ((a[c] = !0), e(t, n, i));
                        }
                      }
                      t.or._iterate(f, l, r, o),
                        Ct(
                          i(t, o),
                          t.algorithm,
                          f,
                          l,
                          r,
                          !t.keysOnly && t.valueMapper
                        );
                    })()
                  : Ct(
                      i(t, o),
                      Bt(t.algorithm, u),
                      e,
                      n,
                      r,
                      !t.keysOnly && t.valueMapper
                    );
              }
              return {
                _read: function (t, e) {
                  var n = this._ctx;
                  return n.error
                    ? n.table._trans(null, se.bind(null, n.error))
                    : n.table._idbstore(H, t).then(e);
                },
                _write: function (t) {
                  var e = this._ctx;
                  return e.error
                    ? e.table._trans(null, se.bind(null, e.error))
                    : e.table._idbstore(V, t, "locked");
                },
                _addAlgorithm: function (t) {
                  var e = this._ctx;
                  e.algorithm = Bt(e.algorithm, t);
                },
                _iterate: function (t, e, n, r) {
                  return u(this._ctx, t, e, n, r);
                },
                clone: function (t) {
                  var e = Object.create(this.constructor.prototype),
                    n = Object.create(this._ctx);
                  return t && o(n, t), (e._ctx = n), e;
                },
                raw: function () {
                  return (this._ctx.valueMapper = null), this;
                },
                each: function (t) {
                  var e = this._ctx;
                  return this._read(function (n, r, i) {
                    u(e, t, n, r, i);
                  });
                },
                count: function (t) {
                  var e = this._ctx;
                  if (_t(e, !0))
                    return this._read(function (t, n, i) {
                      var o = r(e, i),
                        u = e.range ? o.count(e.range) : o.count();
                      (u.onerror = Se(n)),
                        (u.onsuccess = function (n) {
                          t(Math.min(n.target.result, e.limit));
                        });
                    }, t);
                  var n = 0;
                  return this._read(function (t, r, i) {
                    u(
                      e,
                      function () {
                        return ++n, !1;
                      },
                      function () {
                        t(n);
                      },
                      r,
                      i
                    );
                  }, t);
                },
                sortBy: function (t, e) {
                  var n = t.split(".").reverse(),
                    r = n[0],
                    i = n.length - 1;
                  function o(t, e) {
                    return e ? o(t[n[e]], e - 1) : t[r];
                  }
                  var u = "next" === this._ctx.dir ? 1 : -1;
                  function a(t, e) {
                    var n = o(t, i),
                      r = o(e, i);
                    return n < r ? -u : n > r ? u : 0;
                  }
                  return this.toArray(function (t) {
                    return t.sort(a);
                  }).then(e);
                },
                toArray: function (t) {
                  var e = this._ctx;
                  return this._read(function (t, n, i) {
                    if (l && "next" === e.dir && _t(e, !0) && e.limit > 0) {
                      var o = e.table.hook.reading.fire,
                        a = r(e, i),
                        s =
                          e.limit < 1 / 0
                            ? a.getAll(e.range, e.limit)
                            : a.getAll(e.range);
                      (s.onerror = Se(n)),
                        (s.onsuccess = Ae(
                          o === X
                            ? t
                            : function (e) {
                                try {
                                  t(e.map(o));
                                } catch (t) {
                                  n(t);
                                }
                              }
                        ));
                    } else {
                      var c = [];
                      u(
                        e,
                        function (t) {
                          c.push(t);
                        },
                        function () {
                          t(c);
                        },
                        n,
                        i
                      );
                    }
                  }, t);
                },
                offset: function (t) {
                  var n = this._ctx;
                  return (
                    t <= 0 ||
                      ((n.offset += t),
                      _t(n)
                        ? e(n, function () {
                            var e = t;
                            return function (t, n) {
                              return (
                                0 === e ||
                                (1 === e
                                  ? (--e, !1)
                                  : (n(function () {
                                      t.advance(e), (e = 0);
                                    }),
                                    !1))
                              );
                            };
                          })
                        : e(n, function () {
                            var e = t;
                            return function () {
                              return --e < 0;
                            };
                          })),
                    this
                  );
                },
                limit: function (t) {
                  return (
                    (this._ctx.limit = Math.min(this._ctx.limit, t)),
                    e(
                      this._ctx,
                      function () {
                        var e = t;
                        return function (t, n, r) {
                          return --e <= 0 && n(r), e >= 0;
                        };
                      },
                      !0
                    ),
                    this
                  );
                },
                until: function (e, n) {
                  return (
                    t(this._ctx, function (t, r, i) {
                      return !e(t.value) || (r(i), n);
                    }),
                    this
                  );
                },
                first: function (t) {
                  return this.limit(1)
                    .toArray(function (t) {
                      return t[0];
                    })
                    .then(t);
                },
                last: function (t) {
                  return this.reverse().first(t);
                },
                filter: function (e) {
                  return (
                    t(this._ctx, function (t) {
                      return e(t.value);
                    }),
                    (function (t, e) {
                      t.isMatch = Bt(t.isMatch, e);
                    })(this._ctx, e),
                    this
                  );
                },
                and: function (t) {
                  return this.filter(t);
                },
                or: function (t) {
                  return new yt(this._ctx.table, t, this);
                },
                reverse: function () {
                  return (
                    (this._ctx.dir =
                      "prev" === this._ctx.dir ? "next" : "prev"),
                    this._ondirectionchange &&
                      this._ondirectionchange(this._ctx.dir),
                    this
                  );
                },
                desc: function () {
                  return this.reverse();
                },
                eachKey: function (t) {
                  var e = this._ctx;
                  return (
                    (e.keysOnly = !e.isMatch),
                    this.each(function (e, n) {
                      t(n.key, n);
                    })
                  );
                },
                eachUniqueKey: function (t) {
                  return (this._ctx.unique = "unique"), this.eachKey(t);
                },
                eachPrimaryKey: function (t) {
                  var e = this._ctx;
                  return (
                    (e.keysOnly = !e.isMatch),
                    this.each(function (e, n) {
                      t(n.primaryKey, n);
                    })
                  );
                },
                keys: function (t) {
                  var e = this._ctx;
                  e.keysOnly = !e.isMatch;
                  var n = [];
                  return this.each(function (t, e) {
                    n.push(e.key);
                  })
                    .then(function () {
                      return n;
                    })
                    .then(t);
                },
                primaryKeys: function (t) {
                  var e = this._ctx;
                  if (l && "next" === e.dir && _t(e, !0) && e.limit > 0)
                    return this._read(function (t, n, i) {
                      var o = r(e, i),
                        u =
                          e.limit < 1 / 0
                            ? o.getAllKeys(e.range, e.limit)
                            : o.getAllKeys(e.range);
                      (u.onerror = Se(n)), (u.onsuccess = Ae(t));
                    }).then(t);
                  e.keysOnly = !e.isMatch;
                  var n = [];
                  return this.each(function (t, e) {
                    n.push(e.primaryKey);
                  })
                    .then(function () {
                      return n;
                    })
                    .then(t);
                },
                uniqueKeys: function (t) {
                  return (this._ctx.unique = "unique"), this.keys(t);
                },
                firstKey: function (t) {
                  return this.limit(1)
                    .keys(function (t) {
                      return t[0];
                    })
                    .then(t);
                },
                lastKey: function (t) {
                  return this.reverse().firstKey(t);
                },
                distinct: function () {
                  var e = this._ctx,
                    n = e.index && e.table.schema.idxByName[e.index];
                  if (!n || !n.multi) return this;
                  var r = {};
                  return (
                    t(this._ctx, function (t) {
                      var e = t.primaryKey.toString(),
                        n = s(r, e);
                      return (r[e] = !0), !n;
                    }),
                    this
                  );
                },
                modify: function (t) {
                  var e = this,
                    r = this._ctx.table.hook,
                    i = r.updating.fire,
                    u = r.deleting.fire;
                  return this._write(function (r, a, c, l) {
                    var f;
                    if ("function" == typeof t)
                      f =
                        i === Y && u === Y
                          ? t
                          : function (e) {
                              var r = I(e);
                              if (!1 === t.call(this, e, this)) return !1;
                              if (s(this, "value")) {
                                var o = O(r, this.value),
                                  a = i.call(this, o, this.primKey, r, l);
                                a &&
                                  ((e = this.value),
                                  n(a).forEach(function (t) {
                                    k(e, t, a[t]);
                                  }));
                              } else u.call(this, this.primKey, e, l);
                            };
                    else if (i === Y) {
                      var d = n(t),
                        h = d.length;
                      f = function (e) {
                        for (var n = !1, r = 0; r < h; ++r) {
                          var i = d[r],
                            o = t[i];
                          w(e, i) !== o && (k(e, i, o), (n = !0));
                        }
                        return n;
                      };
                    } else {
                      var p = t;
                      (t = C(p)),
                        (f = function (e) {
                          var r = !1,
                            u = i.call(this, t, this.primKey, I(e), l);
                          return (
                            u && o(t, u),
                            n(t).forEach(function (n) {
                              var i = t[n];
                              w(e, n) !== i && (k(e, n, i), (r = !0));
                            }),
                            u && (t = C(p)),
                            r
                          );
                        });
                    }
                    var g = 0,
                      v = 0,
                      m = !1,
                      y = [],
                      b = [],
                      E = null;
                    function S(t) {
                      return (
                        t && (y.push(t), b.push(E)),
                        a(new F("Error modifying one or more objects", y, v, b))
                      );
                    }
                    function A() {
                      m && v + y.length === g && (y.length > 0 ? S() : r(v));
                    }
                    e.clone()
                      .raw()
                      ._iterate(
                        function (t, e) {
                          E = e.primaryKey;
                          var n = {
                            primKey: e.primaryKey,
                            value: t,
                            onsuccess: null,
                            onerror: null,
                          };
                          function r(t) {
                            return y.push(t), b.push(n.primKey), A(), !0;
                          }
                          if (!1 !== f.call(n, t, n)) {
                            var i = !s(n, "value");
                            ++g,
                              _(function () {
                                var t = i ? e.delete() : e.update(n.value);
                                (t._hookCtx = n),
                                  (t.onerror = Ie(r)),
                                  (t.onsuccess = Ee(function () {
                                    ++v, A();
                                  }));
                              }, r);
                          } else n.onsuccess && n.onsuccess(n.value);
                        },
                        function () {
                          (m = !0), A();
                        },
                        S,
                        c
                      );
                  });
                },
                delete: function () {
                  var t = this,
                    e = this._ctx,
                    n = e.range,
                    r = e.table.hook.deleting.fire,
                    i = r !== Y;
                  if (!i && _t(e) && ((e.isPrimKey && !_e) || !n))
                    return this._write(function (t, e, r) {
                      var i = Se(e),
                        o = n ? r.count(n) : r.count();
                      (o.onerror = i),
                        (o.onsuccess = function () {
                          var u = o.result;
                          _(
                            function () {
                              var e = n ? r.delete(n) : r.clear();
                              (e.onerror = i),
                                (e.onsuccess = function () {
                                  return t(u);
                                });
                            },
                            function (t) {
                              return e(t);
                            }
                          );
                        });
                    });
                  var o = i ? 2e3 : 1e4;
                  return this._write(function (n, u, a, s) {
                    var c = 0,
                      l = t
                        .clone({ keysOnly: !e.isMatch && !i })
                        .distinct()
                        .limit(o)
                        .raw(),
                      f = [];
                    n(
                      (function t() {
                        return l
                          .each(
                            i
                              ? function (t, e) {
                                  f.push([e.primaryKey, e.value]);
                                }
                              : function (t, e) {
                                  f.push(e.primaryKey);
                                }
                          )
                          .then(function () {
                            return (
                              i
                                ? f.sort(function (t, e) {
                                    return It(t[0], e[0]);
                                  })
                                : f.sort(It),
                              vt(a, s, f, i, r)
                            );
                          })
                          .then(function () {
                            var e = f.length;
                            return (c += e), (f = []), e < o ? c : t();
                          });
                      })()
                    );
                  });
                },
              };
            }),
            o(this, {
              Collection: bt,
              Table: pt,
              Transaction: mt,
              Version: st,
              WhereClause: yt,
            }),
            Q.on("versionchange", function (t) {
              t.newVersion > 0
                ? console.warn(
                    "Another connection wants to upgrade database '" +
                      Q.name +
                      "'. Closing db now to resume the upgrade."
                  )
                : console.warn(
                    "Another connection wants to delete database '" +
                      Q.name +
                      "'. Closing db now to resume the delete request."
                  ),
                Q.close();
            }),
            Q.on("blocked", function (t) {
              !t.newVersion || t.newVersion < t.oldVersion
                ? console.warn("Dexie.delete('" + Q.name + "') was blocked")
                : console.warn(
                    "Upgrade '" +
                      Q.name +
                      "' blocked by other connection holding version " +
                      t.oldVersion / 10
                  );
            }),
            E.forEach(function (t) {
              t(Q);
            });
        }
        function Ce(t, e) {
          return (
            n(e).forEach(function (n) {
              var i = (function t(e) {
                if ("function" == typeof e) return new e();
                if (r(e)) return [t(e[0])];
                if (e && "object" == typeof e) {
                  var n = {};
                  return Ce(n, e), n;
                }
                return e;
              })(e[n]);
              t[n] = i;
            }),
            t
          );
        }
        function Ee(t) {
          return Ut(function (e) {
            var n = e.target,
              r = n._hookCtx,
              i = r.value || n.result,
              o = r && r.onsuccess;
            o && o(i), t && t(i);
          }, t);
        }
        function Se(t) {
          return Ut(function (e) {
            return Oe(e), t(e.target.error), !1;
          });
        }
        function Ae(t) {
          return Ut(function (e) {
            t(e.target.result);
          });
        }
        function Ie(t) {
          return Ut(function (e) {
            var n = e.target,
              r = n.error,
              i = n._hookCtx,
              o = i && i.onerror;
            return o && o(r), Oe(e), t(r), !1;
          });
        }
        function Oe(t) {
          t.stopPropagation && t.stopPropagation(),
            t.preventDefault && t.preventDefault();
        }
        function Pe(t) {
          var e = function (e) {
              return t.next(e);
            },
            n = o(e),
            i = o(function (e) {
              return t.throw(e);
            });
          function o(t) {
            return function (e) {
              var o = t(e),
                u = o.value;
              return o.done
                ? u
                : u && "function" == typeof u.then
                ? u.then(n, i)
                : r(u)
                ? Ot.all(u).then(n, i)
                : n(u);
            };
          }
          return o(e)();
        }
        function De(t, e, n, r, i, o, u) {
          (this.name = t),
            (this.keyPath = e),
            (this.unique = n),
            (this.multi = r),
            (this.auto = i),
            (this.compound = o),
            (this.dotted = u);
          var a =
            "string" == typeof e ? e : e && "[" + [].join.call(e, "+") + "]";
          this.src = (n ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + a;
        }
        function xe(t, e, n, r) {
          (this.name = t),
            (this.primKey = e || new De()),
            (this.indexes = n || [new De()]),
            (this.instanceTemplate = r),
            (this.mappedClass = null),
            (this.idxByName = b(n, function (t) {
              return [t.name, t];
            }));
        }
        function Be(t) {
          return 1 === t.length ? t[0] : t;
        }
        function Te(t) {
          var e = t && (t.getDatabaseNames || t.webkitGetDatabaseNames);
          return e && e.bind(t);
        }
        N(T, we),
          c(ke, V),
          c(ke, {
            delete: function (t) {
              var e = new ke(t),
                n = e.delete();
              return (
                (n.onblocked = function (t) {
                  return e.on("blocked", t), this;
                }),
                n
              );
            },
            exists: function (t) {
              return new ke(t)
                .open()
                .then(function (t) {
                  return t.close(), !0;
                })
                .catch(ke.NoSuchDatabaseError, function () {
                  return !1;
                });
            },
            getDatabaseNames: function (t) {
              var e = Te(ke.dependencies.indexedDB);
              return e
                ? new Ot(function (t, n) {
                    var r = e();
                    (r.onsuccess = function (e) {
                      t(g(e.target.result, 0));
                    }),
                      (r.onerror = Se(n));
                  }).then(t)
                : le.dbnames.toCollection().primaryKeys(t);
            },
            defineClass: function () {
              return function (t) {
                t && o(this, t);
              };
            },
            applyStructure: Ce,
            ignoreTransaction: function (t) {
              return Et.trans ? re(Et.transless, t) : t();
            },
            vip: function (t) {
              return Vt(function () {
                return (Et.letThrough = !0), t();
              });
            },
            async: function (t) {
              return function () {
                try {
                  var e = Pe(t.apply(this, arguments));
                  return e && "function" == typeof e.then ? e : Ot.resolve(e);
                } catch (t) {
                  return se(t);
                }
              };
            },
            spawn: function (t, e, n) {
              try {
                var r = Pe(t.apply(n, e || []));
                return r && "function" == typeof r.then ? r : Ot.resolve(r);
              } catch (t) {
                return se(t);
              }
            },
            currentTransaction: {
              get: function () {
                return Et.trans || null;
              },
            },
            waitFor: function (t, e) {
              var n = Ot.resolve(
                "function" == typeof t ? ke.ignoreTransaction(t) : t
              ).timeout(e || 6e4);
              return Et.trans ? Et.trans.waitFor(n) : n;
            },
            Promise: Ot,
            debug: {
              get: function () {
                return T;
              },
              set: function (t) {
                N(
                  t,
                  "dexie" === t
                    ? function () {
                        return !0;
                      }
                    : we
                );
              },
            },
            derive: d,
            extend: o,
            props: c,
            override: v,
            Events: ce,
            getByKeyPath: w,
            setByKeyPath: k,
            delByKeyPath: function (t, e) {
              "string" == typeof e
                ? k(t, e, void 0)
                : "length" in e &&
                  [].map.call(e, function (e) {
                    k(t, e, void 0);
                  });
            },
            shallowClone: C,
            deepClone: I,
            getObjectDiff: O,
            asap: y,
            maxKey: he,
            minKey: pe,
            addons: [],
            connections: me,
            MultiModifyError: J.Modify,
            errnames: z,
            IndexSpec: De,
            TableSchema: xe,
            dependencies: (function () {
              try {
                return {
                  indexedDB:
                    i.indexedDB ||
                    i.mozIndexedDB ||
                    i.webkitIndexedDB ||
                    i.msIndexedDB,
                  IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange,
                };
              } catch (t) {
                return { indexedDB: null, IDBKeyRange: null };
              }
            })(),
            semVer: fe,
            version: fe
              .split(".")
              .map(function (t) {
                return parseInt(t);
              })
              .reduce(function (t, e, n) {
                return t + e / Math.pow(10, 2 * n);
              }),
            default: ke,
            Dexie: ke,
          }),
          (Ot.rejectionMapper = function (t, e) {
            if (
              !t ||
              t instanceof U ||
              t instanceof TypeError ||
              t instanceof SyntaxError ||
              !t.name ||
              !H[t.name]
            )
              return t;
            var n = new H[t.name](e || t.message, t);
            return (
              "stack" in t &&
                f(n, "stack", {
                  get: function () {
                    return this.inner.stack;
                  },
                }),
              n
            );
          }),
          (le = new ke("__dbnames")).version(1).stores({ dbnames: "name" }),
          (function () {
            var t = "Dexie.DatabaseNames";
            try {
              void 0 !== typeof localStorage &&
                void 0 !== i.document &&
                (JSON.parse(localStorage.getItem(t) || "[]").forEach(function (
                  t
                ) {
                  return le.dbnames.put({ name: t }).catch(Y);
                }),
                localStorage.removeItem(t));
            } catch (t) {}
          })(),
          (e.a = ke);
      }.call(this, n(358)));
    },
    ,
    ,
    function (t, e, n) {
      function r(t, e) {
        if (0 === t) return 0;
        for (var n = a(e.algo), r = 1; r < t; r++) n();
        return u(e, n());
      }
      function i(t) {
        var e = t.relativeDelay,
          n = void 0 !== e && e,
          r = null,
          i = a(t.algo);
        return function () {
          if (null == r) return (r = n ? Date.now() : 0), 0;
          var e = u(t, i());
          if (n) {
            var o = Date.now(),
              a = o - r;
            a > 0 && (e = Math.max(0, e - a)), (r = o);
          }
          return e;
        };
      }
      function o(t) {
        var e = i(t);
        return function (t) {
          return new Promise((n) => {
            var r = e();
            r > 0 ? setTimeout(n, r, t) : n(t);
          });
        };
      }
      function u(t, e) {
        var n = t.max,
          r = t.min,
          i = t.jitter,
          o = void 0 === i ? 0.1 : i,
          u = e;
        return (
          null != n && u > n && (u = n),
          null != r && u < r && (u = r),
          0 !== o && (u = Math.ceil(u * (1 + o * Math.random()))),
          u
        );
      }
      function a(t) {
        switch (t.type) {
          case "fibonacci":
            return (function (t) {
              var e = t.second - t.first,
                n = t.first - e;
              return function () {
                var t = e + n;
                return (n = e), (e = t), t;
              };
            })(t);
          case "exponential":
            return (function (t) {
              var e = t.base,
                n = void 0 === e ? 2 : e,
                r = t.first;
              return function () {
                var t = r;
                return (r *= n), t;
              };
            })(t);
          case "constant":
            return (function (t) {
              var e = t.delay;
              return function () {
                return e;
              };
            })(t);
          case "adjust":
            return (function (t) {
              var e = t.toMs,
                n = a(t.backoff);
              return function () {
                return e(n());
              };
            })(t);
          default:
            throw new Error("makeTimeFunc unrecognized backoff " + t.type);
        }
      }
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n(3);
      function i(t) {
        return t;
      }
      function o(t, e) {
        return t ? "outgoing" : "connected" !== e ? "missed" : "incoming";
      }
      function u(t, e, n) {
        return `${(0, r.t)(t)}-${e}-${n}`;
      }
      var a = { CELLULAR: 1, WIFI: 2, NONE: 3 };
    },
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "makeBridge", function () {
          return f;
        }),
        n.d(e, "attachBatchedPortal", function () {
          return d;
        }),
        n.d(e, "maybeAttachVoipPortal", function () {
          return h;
        }),
        n.d(e, "killVoipPortalAndSendPendingToBridge", function () {
          return p;
        }),
        n.d(e, "warnOnMissingHandlers", function () {
          return g;
        });
      var r = n(309),
        i = n(21);
      function o(t, e) {
        var n = t.length - 1,
          r = t[n];
        if (
          "result" === r.type ||
          "result" === e.type ||
          r.content.name !== e.content.name
        )
          return t.push(e), t;
        switch (e.content.name) {
          case "msgMediaStatusUpdated":
            var i = u(r),
              o = u(e);
            return i.msgId === o.msgId ? (t[n] = e) : t.push(e), t;
          case "msgsReceived":
            var s = u(r),
              c = u(e);
            return (
              a(s.newMsgs, c.newMsgs),
              a(s.changedMsgs, c.changedMsgs),
              a(s.affectedChats, c.affectedChats),
              t
            );
          case "loadAvatars":
            var l = u(r),
              f = u(e);
            return a(l.jids, f.jids), t;
          case "avatarsUpdated":
            var d = u(r),
              h = u(e);
            return (
              d.changed && h.changed
                ? a(d.changed, h.changed)
                : h.changed && (d.changed = h.changed),
              d.cleared && h.cleared
                ? a(d.cleared, h.cleared)
                : h.cleared && (d.cleared = h.cleared),
              t
            );
        }
        return t.push(e), t;
      }
      function u(t) {
        return t.content.arg;
      }
      function a(t, e) {
        t.push.apply(t, e);
      }
      var s = n(70),
        c = n(115),
        l = class extends r.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)), (this.N = null), (this.O = null), t
            );
          }
          setNamespaceHandler(t, e) {
            "voip" === t && "sw" === this.N
              ? (this.O = e)
              : (super.setNamespaceHandler(t, e),
                "voip" === t && (this.N = "locked"));
          }
        };
      function f() {
        return new l();
      }
      function d(t, e) {
        return (function (t, e, n) {
          return new (class {
            constructor(t, e, n) {
              (this.port = null),
                (this.g = 1),
                (this.openRequests = new Map()),
                (this.f = t),
                (this.sendStream = new (class {
                  constructor(t, e) {
                    (this.Bx = null),
                      (this.CA = 20),
                      (this.CB = Date.now()),
                      (this.CC = new s.a(() => {
                        var t = this.Bx;
                        null != t && ((this.Bx = null), this.By(t));
                      })),
                      (this.By = e),
                      (this.Bz = t);
                  }
                  addEvent(t) {
                    var e = this.Bx;
                    if (
                      ((this.Bx = e ? this.Bz(e, t) : [t]),
                      !this.CC.isScheduled())
                    ) {
                      var n,
                        r = this.CA;
                      if (r < 1) {
                        var i = Date.now(),
                          o = Math.max(i - this.CB, 0) / 1e3;
                        (r = Math.min(r + o, 20)), (this.CA = r), (this.CB = i);
                      }
                      r >= 1
                        ? ((n = 0), (this.CA = r - 1))
                        : ((n = Math.ceil(1e3 * (1 - r))), (this.CA = 0)),
                        this.CC.onOrBefore(n);
                    }
                  }
                  cancel() {
                    (this.Bx = null), this.CC.cancel();
                  }
                })(e, (t) => {
                  this.h(t);
                })),
                n.forEach((e) => {
                  t.setNamespaceHandler(e, this.i(e));
                });
            }
            setPort(t) {
              __LOG__(2)`Bridge updating port`,
                (this.port = t),
                this.sendStream.cancel(),
                (t.onmessage = (e) => {
                  if (this.port === t) {
                    var n = e.data;
                    n && n.forEach((e) => this.j(t, e));
                  } else __LOG__(3)`Bridge received msg on old port`;
                }),
                this.openRequests.forEach((t) => {
                  var e = t.request;
                  __LOG__(2)`Bridge sending ${e.name} across (delayed)`,
                    this.sendStream.addEvent({ type: "request", content: e });
                });
            }
            getBridge() {
              return this.f;
            }
            i(t) {
              return (e, n, r, i) => {
                this.k(t, e, n, r, i);
              };
            }
            k(t, e, n, r, i) {
              var o = this.g++,
                u = {
                  requestId: o,
                  expectsResponse: !!r,
                  namespace: t,
                  name: e,
                  arg: n,
                  silentLog: i,
                };
              this.openRequests.set(o, { request: u, resolver: r }),
                this.sendStream.addEvent({ type: "request", content: u });
            }
            l(t, e) {
              t === this.port &&
                this.sendStream.addEvent({ type: "result", content: e });
            }
            h(t) {
              var e = this.port;
              e
                ? e.postMessage(t)
                : __LOG__(2)`Bridge queuing ${t.length} msgs`;
            }
            j(t, e) {
              if ("request" === e.type) {
                var n = e.content,
                  r = n.namespace,
                  i = n.name,
                  o = n.requestId,
                  u = n.arg,
                  a = n.expectsResponse,
                  s = n.silentLog;
                s || __LOG__(2)`Bridge ${o} request for ${i}`;
                var l = this.f;
                if (a) {
                  var f = l.sendAndReceive(r, i, u, s).then(
                    (e) => {
                      this.l(t, {
                        requestId: o,
                        type: "success",
                        result: e,
                        silentLog: s,
                      });
                    },
                    (e) => {
                      this.l(t, {
                        requestId: o,
                        type: "error",
                        result: String(e),
                        silentLog: s,
                      });
                    }
                  );
                  (0, c.c)(f);
                } else
                  l.fireAndForget(r, i, u, s),
                    t.postMessage([
                      {
                        type: "result",
                        content: {
                          requestId: o,
                          type: "handled",
                          silentLog: s,
                        },
                      },
                    ]);
              } else {
                e.type;
                var d = e.content,
                  h = d.requestId,
                  p = d.type,
                  g = d.result;
                d.silentLog || __LOG__(2)`Bridge ${h} response of ${p}`;
                var v = this.openRequests.get(h);
                if (!v) return void __LOG__(3)`Bridge unrecognized result ${h}`;
                switch (p) {
                  case "success":
                  case "error":
                    this.openRequests.delete(h),
                      v.resolver
                        ? v.resolver(
                            "success" === p ? g : Promise.reject(new Error(g))
                          )
                        : __LOG__(4)`Bridge unexpected result to cast`;
                    break;
                  case "handled":
                    v.resolver
                      ? __LOG__(4)`Bridge unexpected non-result to call`
                      : this.openRequests.delete(h);
                }
              }
            }
          })(t, n, e);
        })(t, e, o);
      }
      function h(t) {
        var e = t;
        if (null == e.N) {
          var n = d(t, ["voip"]);
          return (e.N = "sw"), n;
        }
      }
      function p(t) {
        var e = t.getBridge();
        if ("sw" !== e.N)
          return (
            __LOG__(
              4
            )`killVoipPortalAndSendPendingToBridge called without locking it to SW`,
            void SEND_LOGS("kill-voip-portal")
          );
        var n =
          e.O ||
          (() => {
            throw new Error("Bridge nextVoipHandler not set");
          });
        (e.N = null),
          (e.O = null),
          e.setNamespaceHandler("voip", n),
          (function (t) {
            var e;
            null == (e = t.port) || e.close(),
              (t.port = null),
              t.sendStream.cancel();
            var n = t.openRequests;
            t.openRequests = new Map();
            var r = t.getBridge();
            n.forEach((t) => {
              var e = t.request,
                n = t.resolver,
                i = e.namespace,
                o = e.name,
                u = e.arg,
                a = e.silentLog;
              __LOG__(2)`absorbPortal: transferring request #${e.requestId}`,
                n
                  ? n(r.sendAndReceive(i, o, u, a))
                  : r.fireAndForget(i, o, u, a);
            });
          })(t);
      }
      function g(t) {
        var e = (0, i.m)([
            "backend",
            "basic",
            "debug",
            "event",
            "page",
            "registration",
            "regPage",
            "voip",
          ]),
          n = (0, i.m)(["debug", "registration", ...t.getHandledNamespaces()]);
        n.length > e.length &&
          __LOG__(
            4
          )`warnOnMissingHandlers: list of handlers incomplete, please update`;
        var r = (0, i.n)(e, n);
        r.length > 0 && __LOG__(3)`Bridge missing handlers for ${r}`;
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return s;
        });
      var r = n(2);
      function i(t, e, n) {
        var r = [];
        return t && r.push(t), r.push(e), n && r.push(n), r.join("\n");
      }
      function o(t, e) {
        return `${t ? `**${t}**\n` : ""}${e}`;
      }
      function u(t, e) {
        return t ? `${t}\n\n${e}` : e;
      }
      function a(t) {
        if (null == t) return "text";
        switch (t.type) {
          case r.f.IMAGE:
            return "image";
          case r.f.VIDEO:
            return "video";
          case r.f.LOCATION:
            return "location";
          default:
            return t.type, "document";
        }
      }
      function s(t) {
        return null == t ? "text" : t.type;
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return f;
      }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return m;
        });
      var r = n(9),
        i = n.n(r),
        o = n(36),
        u = n(6),
        a = n(3),
        s = n(49),
        c = n(16),
        l = 4 * a.d;
      function f() {
        var t = u.B.get();
        if ("REQUESTING_CODE" === t.type && t.state) {
          var e = t.state;
          if (
            (e.requestTime && !(0, a.n)(e.requestTime, l)) ||
            ("CODE_VERIFY_ERROR" === e.type &&
              ("missing" === e.reason || "stale" === e.reason))
          ) {
            var n = {
              type: "ENTERING_PHONE_NUMBER",
              prefill: { country: t.country, localNumber: t.localNumber },
            };
            return u.B.set(n).then(() => ({
              state: "unregistered",
              registrationAlert: u.A.get(),
              registrationStore: n,
            }));
          }
        }
        return {
          state: "unregistered",
          registrationAlert: u.A.get(),
          registrationStore: t,
        };
      }
      function d() {
        var t = u.K.get();
        if ("disabled" === t.status)
          return { reminder: { shouldRemind: !1 }, isEnabled: !1 };
        var e = !(0, a.p)(t.nextTime),
          n = e ? { shouldRemind: e, hasError: !1 } : { shouldRemind: e };
        return { isEnabled: !0, hasEmail: t.hasEmail, reminder: n };
      }
      function h() {
        return {
          jid: u.r.get(),
          pushname: u.z.get(),
          about: u.a.get() || void 0,
          twoFactor: d(),
        };
      }
      function p(t, e) {
        var n = i()(t, 5),
          r = n[0],
          a = n[1],
          l = n[2],
          f = n[3],
          d = n[4],
          p = u.j.get(),
          g = u.M.get(),
          v = {},
          m = u.f.get();
        l.forEach((t) => (v[t] = !0));
        var y,
          b,
          _,
          w,
          k = (0, c.a)(e),
          C = (0, s.f)(f),
          E = C.received,
          S = C.sent,
          A = u.J.get().status,
          I = "inactive";
        return (
          "pending" === u.e.get() &&
            r.length > 0 &&
            !r.some((t) => 0 !== t.msgInfo.unreadMsgCount) &&
            (I = "pending"),
          {
            state: "registered",
            user: h(),
            chats: r,
            contacts: a,
            settings: p,
            verboseSecurity: g,
            blocked: v,
            clockSkew: m,
            serverProps: (0, o.o)(u.E.get()),
            receivedGroupInviteRevokes: E,
            sentGroupInviteRevokes: S,
            hasVoip: u.n.get(),
            status:
              ((y = u.F.get()),
              (b = y.tabLastOpened),
              (_ = y.firstTimePost),
              (w = {}),
              b && (w.tabLastOpened = b),
              null == _ && (w.showDialogOnFirstSend = !0),
              w),
            jobs: k,
            userNotice: d,
            profilePhotoScreenState: I,
            tosAccepted: A,
          }
        );
      }
      function g() {
        return { state: "deleting" };
      }
      function v() {
        var t = u.f.get(),
          e = u.I.get();
        return null == e
          ? {
              state: "tempBanned",
              clockSkew: t,
              code: "100",
              until: (0, a.E)(),
              duration: 1,
            }
          : {
              state: "tempBanned",
              clockSkew: t,
              code: e.code,
              until: e.until,
              duration: e.duration,
            };
      }
      function m(t) {
        return { state: "error", errorType: t };
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return u;
      }),
        n.d(e, "f", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return d;
        });
      var r = n(23),
        i = n(7),
        o = n(87);
      function u(t) {
        var e = [
            ...(0, r.a)("system_msg_numbers_fb_branded").split(","),
            ...(0, r.a)("system_msg_numbers_fb_inc").split(","),
          ],
          n = (0, i.u)(t);
        return e.includes(n);
      }
      function a(t) {
        var e = (0, r.a)("in_app_support_v2_numbers").split(","),
          n = (0, i.u)(t);
        return e.includes(n);
      }
      function s(t) {
        return null != t.verifiedInfo && f(t.verifiedInfo.bsp);
      }
      function c(t) {
        return !t.verifiedInfo || l(t.verifiedInfo);
      }
      function l(t) {
        return !t.isApi || null == t.bsp || f(t.bsp);
      }
      function f(t) {
        return (
          null == t || (t.actors === o.a.SELF && t.host === o.b.ON_PREMISE)
        );
      }
      function d(t, e) {
        var n = t.actors,
          r = t.host;
        if (n === o.a.SELF && r === o.b.ON_PREMISE) return e.SO();
        if (n === o.a.SELF && r === o.b.FB) return e.SF();
        if (n === o.a.BSP && r === o.b.ON_PREMISE) return e.BO();
        if (n === o.a.BSP && r === o.b.FB) return e.BF();
        throw Error("Unreachable code switchOnBspInfo");
      }
      n.d(e, "a", function () {
        return o.b;
      });
    },
    function (t, e, n) {
      n.r(e),
        n.d(e, "asPrivateStatsSequenceId", function () {
          return h;
        }),
        n.d(e, "getWamTable", function () {
          return m;
        }),
        n.d(e, "redeemPrivateStatsToken", function () {
          return y;
        }),
        n.d(e, "savePrivateStatsToken", function () {
          return b;
        }),
        n.d(e, "privateStatsKillSwitchGetBlockedToken", function () {
          return _;
        }),
        n.d(e, "privateStatsKillSwitchSet", function () {
          return w;
        }),
        n.d(e, "submitInitialAttributes", function () {
          return k;
        }),
        n.d(e, "startWamStore", function () {
          return A;
        }),
        n.d(e, "setContextImplementations", function () {
          return I;
        }),
        n.d(e, "closeWamStore", function () {
          return O;
        }),
        n.d(e, "waitForPrivateChannelSetup", function () {
          return P;
        }),
        n.d(e, "isPrivateChannelSetup", function () {
          return D;
        });
      var r = n(170),
        i = n(5),
        o = n(123),
        u = n(245),
        a = n(6),
        s = n(3),
        c = n(61),
        l = n(23),
        f = n(14),
        d = { frontend: 31, backend: 179 };
      function h(t, e) {
        return "null-psid" === t || f.F.some((e) => e.keyHashInt === t)
          ? `seq-${t}-${e}`
          : null;
      }
      var p = (0, o.a)("wam-dev-4", function (t) {
          t.version(1).stores({ buffers: "key, streamId", meta: "streamId" }),
            t.version(2).stores({ psMeta: "key" });
        }),
        g = class extends i.b {
          constructor() {
            super(p);
          }
        },
        v = null;
      function m() {
        return v || (v = new g()), v;
      }
      function y(t) {
        var e = m();
        return e.transact("rw", ["psMeta"], () =>
          e.stores.psMeta.get({ key: "token" }).then((n) => {
            if (!n) return null;
            if (
              !t(
                { redeemCount: n.redeemCount, creationTs: n.creationTs },
                {
                  maxExpirySeconds: a.E.get().privateStatsTokenMaxExpirySeconds,
                  maxRedeemCount: (0, l.a)(
                    "kaios_privatestats_max_token_redeem_count"
                  ),
                }
              )
            )
              return null;
            var r = Object.assign({}, n, { redeemCount: n.redeemCount + 1 });
            return e.stores.psMeta.put(r).then(() => n.token);
          })
        );
      }
      function b(t) {
        var e = m();
        return e.transact("rw", ["psMeta"], () => {
          var n = {
            key: "token",
            token: t,
            creationTs: (0, s.E)(),
            redeemCount: 1,
          };
          return e.stores.psMeta.put(n).then(() => {});
        });
      }
      function _() {
        return Promise.resolve(a.w.get());
      }
      function w(t) {
        return a.w.set(t).then(() => {});
      }
      function k() {
        WAM.logAttributes([
          ["regular", "private"],
          11,
          0,
          14,
          ["regular", "private"],
          1657,
          0,
          4,
          ["regular"],
          6275,
          0,
          2,
          ["regular", "private"],
          21,
          1,
          !1,
          ["regular", "private"],
          17,
          2,
          "2.2218.5",
        ]);
      }
      var C = new c.a(),
        E = new c.a(),
        S = {
          getStreamId: function (t) {
            return d[t];
          },
          saveBuffer: (t, e, n) => {
            var r = m();
            return r.transact("rw", ["buffers", "meta"], () => {
              var o = [r.stores.buffers.put(e)];
              return (
                "regular" === n && o.push(r.stores.meta.put(t)),
                (0, i.c)(o).then((t) => {})
              );
            });
          },
          finishBuffer: (t) => {
            var e = m();
            return e.transact("rw", ["buffers"], () =>
              e.stores.buffers
                .where("streamId")
                .equals(t)
                .modify({ finished: !0 })
                .then(() => {})
            );
          },
          getStartingSequenceNumbers: (t, e) => {
            var n = m();
            return n.transact("r", ["meta"], () =>
              n.stores.meta.get({ streamId: e }).then((t) => {
                var e = new Map();
                return (
                  e.set("regular", null == t ? void 0 : t.sequenceNumber), e
                );
              })
            );
          },
          getBuffers: () => (0, i.i)(m().stores.buffers.toArray()),
          removeBufferByKey: (t) => (0, i.i)(m().stores.buffers.delete(t)),
          nukeMetrics: () =>
            (0, i.i)(m().stores.delete()).then(() => {
              v = null;
            }),
          updatePrivateStatsIds: function () {
            return C.promise.then((t) =>
              t
                .getPrivateStatsIds()
                .then(
                  (t) => (
                    WAM.logAttributes([
                      ["private"],
                      6833,
                      2,
                      (0, u.a)(a.r.get()),
                    ]),
                    Promise.resolve().then(E.resolve()),
                    t
                  )
                )
            );
          },
          redeemPrivateStatsToken: y,
          savePrivateStatsToken: b,
          privateStatsKillSwitchGetBlockedToken: _,
          privateStatsKillSwitchSet: w,
        };
      function A() {
        (0, r.j)(S);
      }
      function I(t) {
        C.resolve(t);
      }
      function O() {
        v && v.close(), (0, r.a)(), (E = new c.a()), (C = new c.a());
      }
      function P() {
        return E.promise;
      }
      function D() {
        return E.resolveWasCalled();
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r.b;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return g;
        }),
        n.d(e, "f", function () {
          return m;
        });
      var r = n(145),
        i = new Map([
          [129335, 0],
          [129336, 1],
          [129337, 1],
          [128675, 1],
          [128373, 1],
          [128582, 0],
          [128583, 1],
          [128581, 0],
          [128111, 0],
          [128110, 1],
          [129318, 1],
          [128113, 1],
          [129496, 0],
          [128115, 1],
          [128694, 1],
          [128119, 1],
          [129502, 0],
          [127940, 1],
          [127939, 1],
          [129495, 0],
          [129494, 1],
          [9977, 1],
          [129503, 0],
          [128129, 0],
          [128130, 1],
          [128692, 1],
          [128693, 1],
          [128134, 0],
          [128135, 0],
          [129501, 1],
          [129498, 0],
          [129500, 0],
          [129499, 0],
          [127947, 1],
          [127948, 1],
          [127946, 1],
          [128589, 0],
          [128590, 0],
          [128587, 0],
          [129497, 0],
          [129340, 1],
          [129341, 1],
          [129342, 0],
        ]),
        o = new RegExp("️", "g");
      function u(t) {
        return t > 65535 ? 2 : 1;
      }
      var a = (1 << r.d) - 1;
      function s(t) {
        var e = r.h[t];
        if (null == e) return null;
        var n = e & a,
          i = e >> r.d;
        return {
          chunkId: n,
          remapped: i ? String.fromCodePoint(r.a + i - 1) : t,
        };
      }
      var c = [127995, 127996, 127997, 127998, 127999],
        l = c.map((t) => String.fromCodePoint(t)).join("|"),
        f = new RegExp(l + "|️", "g");
      function d(t) {
        return t.replace(f, "");
      }
      function h(t) {
        if (!t) return null;
        var e = t.codePointAt(0),
          n = i.get(e);
        if (null == n) return null;
        var r = u(e),
          o = t.codePointAt(r);
        return null == o ? n : !c.includes(o) || r + u(o) < t.length ? null : n;
      }
      function p(t, e) {
        var n,
          i = 0,
          a = 0,
          s = e,
          c = 0,
          l = null;
        do {
          var f = t.codePointAt(s);
          if (65039 === f) c += 1;
          else {
            var d = r.g[i - c];
            if (null != d && !d.has(f)) break;
          }
          i++, (s += u(f));
          var p = t.substr(e, s - e),
            g = c > 0 ? ((n = p) ? n.replace(o, "") : n) : p;
          if (g in r.h) (l = g), (a = p.length);
          else {
            var v = h(g);
            if (null != v) {
              var m = g + (1 === v ? "‍♂" : "‍♀");
              m in r.h && ((l = m), (a = p.length));
            }
          }
        } while (s < t.length && i - c < r.c);
        return l ? { emojiNormalized: l, maxEmojiCodeunits: a } : null;
      }
      function g(t, e) {
        var n = p(t, e);
        if (!n) return null;
        var r = n.emojiNormalized,
          i = n.maxEmojiCodeunits;
        if (r) {
          var o = s(r);
          return o
            ? {
                normalizedRemapped: o.remapped,
                normalized: r,
                originalLength: i,
                chunkId: o.chunkId,
              }
            : (__LOG__(
                4
              )`Error while parsing emoji, expected emoji not found in emojiToChunk`,
              SEND_LOGS("unexpected-emoji-parsing-error"),
              null);
        }
        return null;
      }
      var v = null;
      function m(t) {
        return t.replace(r.f, (t) => {
          return (
            (e = t),
            v ||
              (v = (function () {
                var t = {};
                for (var e in r.h) {
                  var n = s(e);
                  if (n) {
                    var i = n.remapped;
                    i !== e && (t[i] = e);
                  } else
                    __LOG__(
                      4
                    )`Error while parsing emoji, expected emoji not found in emojiToChunk`,
                      SEND_LOGS("unexpected-emoji-parsing-error");
                }
                return t;
              })()),
            v[e] ||
              (__LOG__(
                4
              )`Cannot map back codepoint [${e}] (codepoint at 0 is ${e.codePointAt(
                0
              )})`,
              SEND_LOGS("emoji-cannon-unmap-pua-codepoint"),
              e)
          );
          var e;
        });
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return l;
        });
      var r = "https://kaios.whatsapp.net/static/v1/emoji/160/",
        i = 7,
        o = new RegExp(
          "[#*0-9©®‼⁉™ℹ↔-↙↩↪⌚⌛⌨⏏⏩-⏳⏸-⏺Ⓜ▪▫▶◀◻-◾☀-☄☎☑☔☕☘☝☠☢☣☦☪☮☯☸-☺♀♂♈-♓♟♠♣♥♦♨♻♾♿⚒-⚗⚙⚛⚜⚠⚡⚧⚪⚫⚰⚱⚽⚾⛄⛅⛈⛎⛏⛑⛓⛔⛩⛪⛰-⛵⛷-⛺⛽✂✅✈-✍✏✒✔✖✝✡✨✳✴❄❇❌❎❓-❕❗❣❤➕-➗➡➰➿⤴⤵⬅-⬇⬛⬜⭐⭕〰〽㊗㊙\ud83c-\ud83e]",
          "g"
        ),
        u = new RegExp("[-]", "g"),
        a = 6,
        s = 57344,
        c = [
          null,
          new Set([
            8205,
            8419,
            127462,
            127463,
            127464,
            127465,
            127466,
            127467,
            127468,
            127469,
            127470,
            127471,
            127472,
            127473,
            127474,
            127475,
            127476,
            127477,
            127478,
            127479,
            127480,
            127481,
            127482,
            127483,
            127484,
            127485,
            127486,
            127487,
            127995,
            127996,
            127997,
            127998,
            127999,
            917607,
            917621,
          ]),
          new Set([
            8205,
            9760,
            9792,
            9794,
            9877,
            9878,
            9895,
            9992,
            10052,
            10084,
            11035,
            127752,
            127787,
            127806,
            127859,
            127868,
            127876,
            127891,
            127908,
            127912,
            127979,
            127981,
            128102,
            128103,
            128104,
            128105,
            128168,
            128171,
            128187,
            128188,
            128293,
            128295,
            128300,
            128488,
            128640,
            128658,
            128999,
            129309,
            129455,
            129456,
            129457,
            129458,
            129459,
            129466,
            129468,
            129469,
            129657,
            917602,
            917619,
          ]),
          new Set([
            8205,
            9792,
            9794,
            9877,
            9878,
            9992,
            127806,
            127859,
            127868,
            127876,
            127891,
            127908,
            127912,
            127979,
            127981,
            128187,
            128188,
            128295,
            128300,
            128640,
            128658,
            129309,
            129455,
            129456,
            129457,
            129458,
            129459,
            129468,
            129469,
            917605,
            917619,
            917620,
            917623,
          ]),
          new Set([
            8205,
            11035,
            128102,
            128103,
            128104,
            128105,
            128139,
            129489,
            917603,
            917612,
            917614,
            917624,
          ]),
          new Set([
            8205,
            128104,
            128105,
            129489,
            917607,
            917619,
            917620,
            917631,
          ]),
          new Set([
            127995,
            127996,
            127997,
            127998,
            127999,
            128102,
            128103,
            128104,
            128105,
            128999,
            917631,
          ]),
        ],
        l = {
          "😂": 0,
          "😍": 0,
          "❤": 0,
          "😊": 0,
          "😘": 0,
          "😅": 0,
          "😁": 0,
          "😭": 0,
          "🙏": 0,
          "🙏🏻": 64,
          "🙏🏼": 128,
          "🙏🏽": 192,
          "🙏🏾": 256,
          "🙏🏿": 320,
          "💔": 0,
          "😎": 0,
          "💕": 0,
          "🎂": 0,
          "🤣": 0,
          "😆": 0,
          "😋": 0,
          "😢": 0,
          "😇": 0,
          "😉": 0,
          "💖": 0,
          "👌": 0,
          "👌🏻": 384,
          "👌🏼": 448,
          "👌🏽": 512,
          "👌🏾": 576,
          "👌🏿": 640,
          "😔": 0,
          "😏": 0,
          "😌": 0,
          "🔥": 0,
          "🎉": 0,
          "✌": 1,
          "✌🏻": 705,
          "✌🏼": 769,
          "✌🏽": 833,
          "✌🏾": 897,
          "✌🏿": 961,
          "🙄": 1,
          "😀": 1,
          "😪": 1,
          "🤗": 1,
          "💪": 1,
          "💪🏻": 1025,
          "💪🏼": 1089,
          "💪🏽": 1153,
          "💪🏾": 1217,
          "💪🏿": 1281,
          "😄": 1,
          "♥": 1,
          "💞": 1,
          "😒": 1,
          "😑": 1,
          "☺": 1,
          "😜": 1,
          "😃": 1,
          "🥲": 1,
          "🙂": 1,
          "🙃": 1,
          "🥰": 1,
          "😗": 1,
          "😙": 1,
          "😚": 1,
          "😛": 1,
          "😝": 1,
          "🤪": 1,
          "🤨": 1,
          "🧐": 1,
          "🤓": 1,
          "🥸": 1,
          "🤩": 1,
          "🥳": 1,
          "😞": 1,
          "😟": 1,
          "😕": 1,
          "🙁": 1,
          "☹": 1,
          "😣": 1,
          "😖": 1,
          "😫": 1,
          "😩": 1,
          "🥺": 1,
          "😤": 1,
          "😠": 1,
          "😡": 1,
          "🤬": 1,
          "🤯": 1,
          "😳": 1,
          "🥵": 1,
          "🥶": 1,
          "😶‍🌫": 1345,
          "😱": 1,
          "😨": 1,
          "😰": 1,
          "😥": 1,
          "😓": 1,
          "🤔": 1,
          "🤭": 1,
          "🤫": 1,
          "🤥": 1,
          "😶": 1,
          "😐": 1,
          "😬": 1,
          "😯": 1,
          "😦": 1,
          "😧": 1,
          "😮": 1,
          "😲": 2,
          "🥱": 2,
          "😴": 2,
          "🤤": 2,
          "😮‍💨": 1410,
          "😵": 2,
          "😵‍💫": 1474,
          "🤐": 2,
          "🥴": 2,
          "🤢": 2,
          "🤮": 2,
          "🤧": 2,
          "😷": 2,
          "🤒": 2,
          "🤕": 2,
          "🤑": 2,
          "🤠": 2,
          "😈": 2,
          "👿": 2,
          "👹": 2,
          "👺": 2,
          "🤡": 2,
          "💩": 2,
          "👻": 2,
          "💀": 2,
          "☠": 2,
          "👽": 2,
          "👾": 2,
          "🤖": 2,
          "🎃": 2,
          "😺": 2,
          "😸": 2,
          "😹": 2,
          "😻": 2,
          "😼": 2,
          "😽": 2,
          "🙀": 2,
          "😿": 2,
          "😾": 2,
          "🤲": 2,
          "🤲🏻": 1538,
          "🤲🏼": 1602,
          "🤲🏽": 1666,
          "🤲🏾": 1730,
          "🤲🏿": 1794,
          "👐": 2,
          "👐🏻": 1858,
          "👐🏼": 1922,
          "👐🏽": 1986,
          "👐🏾": 2050,
          "👐🏿": 2114,
          "🙌": 2,
          "🙌🏻": 2178,
          "🙌🏼": 2242,
          "🙌🏽": 2306,
          "🙌🏾": 2370,
          "🙌🏿": 2434,
          "👏": 2,
          "👏🏻": 2498,
          "👏🏼": 2562,
          "👏🏽": 2626,
          "👏🏾": 2690,
          "👏🏿": 2754,
          "🤝": 2,
          "🤝🏻": 2818,
          "🤝🏼": 2882,
          "🤝🏽": 2946,
          "🤝🏾": 3010,
          "🤝🏿": 3074,
          "👍": 2,
          "👍🏻": 3138,
          "👍🏼": 3202,
          "👍🏽": 3266,
          "👍🏾": 3330,
          "👍🏿": 3394,
          "👎": 3,
          "👎🏻": 3459,
          "👎🏼": 3523,
          "👎🏽": 3587,
          "👎🏾": 3651,
          "👎🏿": 3715,
          "👊": 3,
          "👊🏻": 3779,
          "👊🏼": 3843,
          "👊🏽": 3907,
          "👊🏾": 3971,
          "👊🏿": 4035,
          "✊": 3,
          "✊🏻": 4099,
          "✊🏼": 4163,
          "✊🏽": 4227,
          "✊🏾": 4291,
          "✊🏿": 4355,
          "🤛": 3,
          "🤛🏻": 4419,
          "🤛🏼": 4483,
          "🤛🏽": 4547,
          "🤛🏾": 4611,
          "🤛🏿": 4675,
          "🤜": 3,
          "🤜🏻": 4739,
          "🤜🏼": 4803,
          "🤜🏽": 4867,
          "🤜🏾": 4931,
          "🤜🏿": 4995,
          "🤞": 3,
          "🤞🏻": 5059,
          "🤞🏼": 5123,
          "🤞🏽": 5187,
          "🤞🏾": 5251,
          "🤞🏿": 5315,
          "🤟": 3,
          "🤟🏻": 5379,
          "🤟🏼": 5443,
          "🤟🏽": 5507,
          "🤟🏾": 5571,
          "🤟🏿": 5635,
          "🤘": 3,
          "🤘🏻": 5699,
          "🤘🏼": 5763,
          "🤘🏽": 5827,
          "🤘🏾": 5891,
          "🤘🏿": 5955,
          "🤌": 3,
          "🤌🏻": 6019,
          "🤌🏼": 6083,
          "🤌🏽": 6147,
          "🤌🏾": 6211,
          "🤌🏿": 6275,
          "🤏": 3,
          "🤏🏻": 6339,
          "🤏🏼": 6403,
          "🤏🏽": 6467,
          "🤏🏾": 6531,
          "🤏🏿": 6595,
          "👈": 3,
          "👈🏻": 6659,
          "👈🏼": 6723,
          "👈🏽": 6787,
          "👈🏾": 6851,
          "👈🏿": 6915,
          "👉": 3,
          "👉🏻": 6979,
          "👉🏼": 7043,
          "👉🏽": 7107,
          "👉🏾": 7171,
          "👉🏿": 7235,
          "👆": 4,
          "👆🏻": 7300,
          "👆🏼": 7364,
          "👆🏽": 7428,
          "👆🏾": 7492,
          "👆🏿": 7556,
          "👇": 4,
          "👇🏻": 7620,
          "👇🏼": 7684,
          "👇🏽": 7748,
          "👇🏾": 7812,
          "👇🏿": 7876,
          "☝": 4,
          "☝🏻": 7940,
          "☝🏼": 8004,
          "☝🏽": 8068,
          "☝🏾": 8132,
          "☝🏿": 8196,
          "✋": 4,
          "✋🏻": 8260,
          "✋🏼": 8324,
          "✋🏽": 8388,
          "✋🏾": 8452,
          "✋🏿": 8516,
          "🤚": 4,
          "🤚🏻": 8580,
          "🤚🏼": 8644,
          "🤚🏽": 8708,
          "🤚🏾": 8772,
          "🤚🏿": 8836,
          "🖐": 4,
          "🖐🏻": 8900,
          "🖐🏼": 8964,
          "🖐🏽": 9028,
          "🖐🏾": 9092,
          "🖐🏿": 9156,
          "🖖": 4,
          "🖖🏻": 9220,
          "🖖🏼": 9284,
          "🖖🏽": 9348,
          "🖖🏾": 9412,
          "🖖🏿": 9476,
          "👋": 4,
          "👋🏻": 9540,
          "👋🏼": 9604,
          "👋🏽": 9668,
          "👋🏾": 9732,
          "👋🏿": 9796,
          "🤙": 4,
          "🤙🏻": 9860,
          "🤙🏼": 9924,
          "🤙🏽": 9988,
          "🤙🏾": 10052,
          "🤙🏿": 10116,
          "🦾": 4,
          "🖕": 4,
          "🖕🏻": 10180,
          "🖕🏼": 10244,
          "🖕🏽": 10308,
          "🖕🏾": 10372,
          "🖕🏿": 10436,
          "✍": 4,
          "✍🏻": 10500,
          "✍🏼": 10564,
          "✍🏽": 10628,
          "✍🏾": 10692,
          "✍🏿": 10756,
          "🦶": 4,
          "🦶🏻": 10820,
          "🦶🏼": 10884,
          "🦶🏽": 10948,
          "🦶🏾": 11012,
          "🦶🏿": 11076,
          "🦵": 5,
          "🦵🏻": 11141,
          "🦵🏼": 11205,
          "🦵🏽": 11269,
          "🦵🏾": 11333,
          "🦵🏿": 11397,
          "🦿": 5,
          "💄": 5,
          "💋": 5,
          "👄": 5,
          "🦷": 5,
          "👅": 5,
          "👂": 5,
          "👂🏻": 11461,
          "👂🏼": 11525,
          "👂🏽": 11589,
          "👂🏾": 11653,
          "👂🏿": 11717,
          "🦻": 5,
          "🦻🏻": 11781,
          "🦻🏼": 11845,
          "🦻🏽": 11909,
          "🦻🏾": 11973,
          "🦻🏿": 12037,
          "👃": 5,
          "👃🏻": 12101,
          "👃🏼": 12165,
          "👃🏽": 12229,
          "👃🏾": 12293,
          "👃🏿": 12357,
          "👣": 5,
          "👁": 5,
          "👀": 5,
          "🫀": 5,
          "🫁": 5,
          "🧠": 5,
          "🗣": 5,
          "👤": 5,
          "👥": 5,
          "🫂": 5,
          "👶": 5,
          "👶🏻": 12421,
          "👶🏼": 12485,
          "👶🏽": 12549,
          "👶🏾": 12613,
          "👶🏿": 12677,
          "👧": 5,
          "👧🏻": 12741,
          "👧🏼": 12805,
          "👧🏽": 12869,
          "👧🏾": 12933,
          "👧🏿": 12997,
          "🧒": 5,
          "🧒🏻": 13061,
          "🧒🏼": 13125,
          "🧒🏽": 13189,
          "🧒🏾": 13253,
          "🧒🏿": 13317,
          "👦": 5,
          "👦🏻": 13381,
          "👦🏼": 13445,
          "👦🏽": 13509,
          "👦🏾": 13573,
          "👦🏿": 13637,
          "👩": 5,
          "👩🏻": 13701,
          "👩🏼": 13765,
          "👩🏽": 13829,
          "👩🏾": 13893,
          "👩🏿": 13957,
          "🧑": 6,
          "🧑🏻": 14022,
          "🧑🏼": 14086,
          "🧑🏽": 14150,
          "🧑🏾": 14214,
          "🧑🏿": 14278,
          "👨": 6,
          "👨🏻": 14342,
          "👨🏼": 14406,
          "👨🏽": 14470,
          "👨🏾": 14534,
          "👨🏿": 14598,
          "👩🏻‍🦱": 14662,
          "👩🏼‍🦱": 14726,
          "👩🏽‍🦱": 14790,
          "👩🏾‍🦱": 14854,
          "👩🏿‍🦱": 14918,
          "👩‍🦱": 14982,
          "🧑🏻‍🦱": 15046,
          "🧑🏼‍🦱": 15110,
          "🧑🏽‍🦱": 15174,
          "🧑🏾‍🦱": 15238,
          "🧑🏿‍🦱": 15302,
          "🧑‍🦱": 15366,
          "👨🏻‍🦱": 15430,
          "👨🏼‍🦱": 15494,
          "👨🏽‍🦱": 15558,
          "👨🏾‍🦱": 15622,
          "👨🏿‍🦱": 15686,
          "👨‍🦱": 15750,
          "👩🏻‍🦰": 15814,
          "👩🏼‍🦰": 15878,
          "👩🏽‍🦰": 15942,
          "👩🏾‍🦰": 16006,
          "👩🏿‍🦰": 16070,
          "👩‍🦰": 16134,
          "🧑🏻‍🦰": 16198,
          "🧑🏼‍🦰": 16262,
          "🧑🏽‍🦰": 16326,
          "🧑🏾‍🦰": 16390,
          "🧑🏿‍🦰": 16454,
          "🧑‍🦰": 16518,
          "👨🏻‍🦰": 16582,
          "👨🏼‍🦰": 16646,
          "👨🏽‍🦰": 16710,
          "👨🏾‍🦰": 16774,
          "👨🏿‍🦰": 16838,
          "👨‍🦰": 16902,
          "👱🏻‍♀": 16966,
          "👱🏻‍♂": 17030,
          "👱🏼‍♀": 17094,
          "👱🏼‍♂": 17158,
          "👱🏽‍♀": 17222,
          "👱🏽‍♂": 17286,
          "👱🏾‍♀": 17350,
          "👱🏾‍♂": 17414,
          "👱🏿‍♀": 17478,
          "👱🏿‍♂": 17542,
          "👱‍♀": 17606,
          "👱‍♂": 17670,
          "👩🏻‍🦳": 17734,
          "👩🏼‍🦳": 17798,
          "👩🏽‍🦳": 17862,
          "👩🏾‍🦳": 17926,
          "👩🏿‍🦳": 17990,
          "👩‍🦳": 18054,
          "🧑🏻‍🦳": 18118,
          "🧑🏼‍🦳": 18182,
          "🧑🏽‍🦳": 18246,
          "🧑🏾‍🦳": 18310,
          "🧑🏿‍🦳": 18374,
          "🧑‍🦳": 18438,
          "👨🏻‍🦳": 18503,
          "👨🏼‍🦳": 18567,
          "👨🏽‍🦳": 18631,
          "👨🏾‍🦳": 18695,
          "👨🏿‍🦳": 18759,
          "👨‍🦳": 18823,
          "👩🏻‍🦲": 18887,
          "👩🏼‍🦲": 18951,
          "👩🏽‍🦲": 19015,
          "👩🏾‍🦲": 19079,
          "👩🏿‍🦲": 19143,
          "👩‍🦲": 19207,
          "🧑🏻‍🦲": 19271,
          "🧑🏼‍🦲": 19335,
          "🧑🏽‍🦲": 19399,
          "🧑🏾‍🦲": 19463,
          "🧑🏿‍🦲": 19527,
          "🧑‍🦲": 19591,
          "👨🏻‍🦲": 19655,
          "👨🏼‍🦲": 19719,
          "👨🏽‍🦲": 19783,
          "👨🏾‍🦲": 19847,
          "👨🏿‍🦲": 19911,
          "👨‍🦲": 19975,
          "🧔": 7,
          "🧔🏻": 20039,
          "🧔🏻‍♀": 20103,
          "🧔🏼": 20167,
          "🧔🏼‍♀": 20231,
          "🧔🏽": 20295,
          "🧔🏽‍♀": 20359,
          "🧔🏾": 20423,
          "🧔🏾‍♀": 20487,
          "🧔🏿": 20551,
          "🧔🏿‍♀": 20615,
          "🧔‍♀": 20679,
          "👵": 7,
          "👵🏻": 20743,
          "👵🏼": 20807,
          "👵🏽": 20871,
          "👵🏾": 20935,
          "👵🏿": 20999,
          "🧓": 7,
          "🧓🏻": 21063,
          "🧓🏼": 21127,
          "🧓🏽": 21191,
          "🧓🏾": 21255,
          "🧓🏿": 21319,
          "👴": 7,
          "👴🏻": 21383,
          "👴🏼": 21447,
          "👴🏽": 21511,
          "👴🏾": 21575,
          "👴🏿": 21639,
          "👲": 7,
          "👲🏻": 21703,
          "👲🏼": 21767,
          "👲🏽": 21831,
          "👲🏾": 21895,
          "👲🏿": 21959,
          "👳🏻‍♀": 22023,
          "👳🏻‍♂": 22087,
          "👳🏼‍♀": 22151,
          "👳🏼‍♂": 22215,
          "👳🏽‍♀": 22279,
          "👳🏽‍♂": 22343,
          "👳🏾‍♀": 22407,
          "👳🏾‍♂": 22471,
          "👳🏿‍♀": 22535,
          "👳🏿‍♂": 22599,
          "👳‍♀": 22663,
          "👳‍♂": 22727,
          "🧕": 8,
          "🧕🏻": 22792,
          "🧕🏼": 22856,
          "🧕🏽": 22920,
          "🧕🏾": 22984,
          "🧕🏿": 23048,
          "👮🏻‍♀": 23112,
          "👮🏻‍♂": 23176,
          "👮🏼‍♀": 23240,
          "👮🏼‍♂": 23304,
          "👮🏽‍♀": 23368,
          "👮🏽‍♂": 23432,
          "👮🏾‍♀": 23496,
          "👮🏾‍♂": 23560,
          "👮🏿‍♀": 23624,
          "👮🏿‍♂": 23688,
          "👮‍♀": 23752,
          "👮‍♂": 23816,
          "👷🏻‍♀": 23880,
          "👷🏻‍♂": 23944,
          "👷🏼‍♀": 24008,
          "👷🏼‍♂": 24072,
          "👷🏽‍♀": 24136,
          "👷🏽‍♂": 24200,
          "👷🏾‍♀": 24264,
          "👷🏾‍♂": 24328,
          "👷🏿‍♀": 24392,
          "👷🏿‍♂": 24456,
          "👷‍♀": 24520,
          "👷‍♂": 24584,
          "💂🏻‍♀": 24648,
          "💂🏻‍♂": 24712,
          "💂🏼‍♀": 24776,
          "💂🏼‍♂": 24840,
          "💂🏽‍♀": 24904,
          "💂🏽‍♂": 24968,
          "💂🏾‍♀": 25032,
          "💂🏾‍♂": 25096,
          "💂🏿‍♀": 25160,
          "💂🏿‍♂": 25224,
          "💂‍♀": 25288,
          "💂‍♂": 25352,
          "🕵🏻‍♀": 25416,
          "🕵🏻‍♂": 25480,
          "🕵🏼‍♀": 25544,
          "🕵🏼‍♂": 25608,
          "🕵🏽‍♀": 25672,
          "🕵🏽‍♂": 25736,
          "🕵🏾‍♀": 25800,
          "🕵🏾‍♂": 25864,
          "🕵🏿‍♀": 25928,
          "🕵🏿‍♂": 25992,
          "🕵‍♀": 26056,
          "🕵‍♂": 26120,
          "👩🏻‍⚕": 26184,
          "👩🏼‍⚕": 26248,
          "👩🏽‍⚕": 26312,
          "👩🏾‍⚕": 26376,
          "👩🏿‍⚕": 26440,
          "👩‍⚕": 26504,
          "🧑🏻‍⚕": 26568,
          "🧑🏼‍⚕": 26632,
          "🧑🏽‍⚕": 26696,
          "🧑🏾‍⚕": 26760,
          "🧑🏿‍⚕": 26824,
          "🧑‍⚕": 26888,
          "👨🏻‍⚕": 26952,
          "👨🏼‍⚕": 27016,
          "👨🏽‍⚕": 27080,
          "👨🏾‍⚕": 27144,
          "👨🏿‍⚕": 27208,
          "👨‍⚕": 27272,
          "👩🏻‍🌾": 27337,
          "👩🏼‍🌾": 27401,
          "👩🏽‍🌾": 27465,
          "👩🏾‍🌾": 27529,
          "👩🏿‍🌾": 27593,
          "👩‍🌾": 27657,
          "🧑🏻‍🌾": 27721,
          "🧑🏼‍🌾": 27785,
          "🧑🏽‍🌾": 27849,
          "🧑🏾‍🌾": 27913,
          "🧑🏿‍🌾": 27977,
          "🧑‍🌾": 28041,
          "👨🏻‍🌾": 28105,
          "👨🏼‍🌾": 28169,
          "👨🏽‍🌾": 28233,
          "👨🏾‍🌾": 28297,
          "👨🏿‍🌾": 28361,
          "👨‍🌾": 28425,
          "👩🏻‍🍳": 28489,
          "👩🏼‍🍳": 28553,
          "👩🏽‍🍳": 28617,
          "👩🏾‍🍳": 28681,
          "👩🏿‍🍳": 28745,
          "👩‍🍳": 28809,
          "🧑🏻‍🍳": 28873,
          "🧑🏼‍🍳": 28937,
          "🧑🏽‍🍳": 29001,
          "🧑🏾‍🍳": 29065,
          "🧑🏿‍🍳": 29129,
          "🧑‍🍳": 29193,
          "👨🏻‍🍳": 29257,
          "👨🏼‍🍳": 29321,
          "👨🏽‍🍳": 29385,
          "👨🏾‍🍳": 29449,
          "👨🏿‍🍳": 29513,
          "👨‍🍳": 29577,
          "👩🏻‍🎓": 29641,
          "👩🏼‍🎓": 29705,
          "👩🏽‍🎓": 29769,
          "👩🏾‍🎓": 29833,
          "👩🏿‍🎓": 29897,
          "👩‍🎓": 29961,
          "🧑🏻‍🎓": 30025,
          "🧑🏼‍🎓": 30089,
          "🧑🏽‍🎓": 30153,
          "🧑🏾‍🎓": 30217,
          "🧑🏿‍🎓": 30281,
          "🧑‍🎓": 30345,
          "👨🏻‍🎓": 30409,
          "👨🏼‍🎓": 30473,
          "👨🏽‍🎓": 30537,
          "👨🏾‍🎓": 30601,
          "👨🏿‍🎓": 30665,
          "👨‍🎓": 30729,
          "👩🏻‍🎤": 30793,
          "👩🏼‍🎤": 30857,
          "👩🏽‍🎤": 30921,
          "👩🏾‍🎤": 30985,
          "👩🏿‍🎤": 31049,
          "👩‍🎤": 31113,
          "🧑🏻‍🎤": 31177,
          "🧑🏼‍🎤": 31241,
          "🧑🏽‍🎤": 31305,
          "🧑🏾‍🎤": 31369,
          "🧑🏿‍🎤": 31433,
          "🧑‍🎤": 31497,
          "👨🏻‍🎤": 31561,
          "👨🏼‍🎤": 31625,
          "👨🏽‍🎤": 31689,
          "👨🏾‍🎤": 31753,
          "👨🏿‍🎤": 31817,
          "👨‍🎤": 31881,
          "👩🏻‍🏫": 31946,
          "👩🏼‍🏫": 32010,
          "👩🏽‍🏫": 32074,
          "👩🏾‍🏫": 32138,
          "👩🏿‍🏫": 32202,
          "👩‍🏫": 32266,
          "🧑🏻‍🏫": 32330,
          "🧑🏼‍🏫": 32394,
          "🧑🏽‍🏫": 32458,
          "🧑🏾‍🏫": 32522,
          "🧑🏿‍🏫": 32586,
          "🧑‍🏫": 32650,
          "👨🏻‍🏫": 32714,
          "👨🏼‍🏫": 32778,
          "👨🏽‍🏫": 32842,
          "👨🏾‍🏫": 32906,
          "👨🏿‍🏫": 32970,
          "👨‍🏫": 33034,
          "👩🏻‍🏭": 33098,
          "👩🏼‍🏭": 33162,
          "👩🏽‍🏭": 33226,
          "👩🏾‍🏭": 33290,
          "👩🏿‍🏭": 33354,
          "👩‍🏭": 33418,
          "🧑🏻‍🏭": 33482,
          "🧑🏼‍🏭": 33546,
          "🧑🏽‍🏭": 33610,
          "🧑🏾‍🏭": 33674,
          "🧑🏿‍🏭": 33738,
          "🧑‍🏭": 33802,
          "👨🏻‍🏭": 33866,
          "👨🏼‍🏭": 33930,
          "👨🏽‍🏭": 33994,
          "👨🏾‍🏭": 34058,
          "👨🏿‍🏭": 34122,
          "👨‍🏭": 34186,
          "👩🏻‍💻": 34250,
          "👩🏼‍💻": 34314,
          "👩🏽‍💻": 34378,
          "👩🏾‍💻": 34442,
          "👩🏿‍💻": 34506,
          "👩‍💻": 34570,
          "🧑🏻‍💻": 34634,
          "🧑🏼‍💻": 34698,
          "🧑🏽‍💻": 34762,
          "🧑🏾‍💻": 34826,
          "🧑🏿‍💻": 34890,
          "🧑‍💻": 34954,
          "👨🏻‍💻": 35018,
          "👨🏼‍💻": 35082,
          "👨🏽‍💻": 35146,
          "👨🏾‍💻": 35210,
          "👨🏿‍💻": 35274,
          "👨‍💻": 35338,
          "👩🏻‍💼": 35402,
          "👩🏼‍💼": 35466,
          "👩🏽‍💼": 35530,
          "👩🏾‍💼": 35594,
          "👩🏿‍💼": 35658,
          "👩‍💼": 35722,
          "🧑🏻‍💼": 35786,
          "🧑🏼‍💼": 35850,
          "🧑🏽‍💼": 35914,
          "🧑🏾‍💼": 35978,
          "🧑🏿‍💼": 36042,
          "🧑‍💼": 36106,
          "👨🏻‍💼": 36170,
          "👨🏼‍💼": 36234,
          "👨🏽‍💼": 36298,
          "👨🏾‍💼": 36362,
          "👨🏿‍💼": 36426,
          "👨‍💼": 36490,
          "👩🏻‍🔧": 36555,
          "👩🏼‍🔧": 36619,
          "👩🏽‍🔧": 36683,
          "👩🏾‍🔧": 36747,
          "👩🏿‍🔧": 36811,
          "👩‍🔧": 36875,
          "🧑🏻‍🔧": 36939,
          "🧑🏼‍🔧": 37003,
          "🧑🏽‍🔧": 37067,
          "🧑🏾‍🔧": 37131,
          "🧑🏿‍🔧": 37195,
          "🧑‍🔧": 37259,
          "👨🏻‍🔧": 37323,
          "👨🏼‍🔧": 37387,
          "👨🏽‍🔧": 37451,
          "👨🏾‍🔧": 37515,
          "👨🏿‍🔧": 37579,
          "👨‍🔧": 37643,
          "👩🏻‍🔬": 37707,
          "👩🏼‍🔬": 37771,
          "👩🏽‍🔬": 37835,
          "👩🏾‍🔬": 37899,
          "👩🏿‍🔬": 37963,
          "👩‍🔬": 38027,
          "🧑🏻‍🔬": 38091,
          "🧑🏼‍🔬": 38155,
          "🧑🏽‍🔬": 38219,
          "🧑🏾‍🔬": 38283,
          "🧑🏿‍🔬": 38347,
          "🧑‍🔬": 38411,
          "👨🏻‍🔬": 38475,
          "👨🏼‍🔬": 38539,
          "👨🏽‍🔬": 38603,
          "👨🏾‍🔬": 38667,
          "👨🏿‍🔬": 38731,
          "👨‍🔬": 38795,
          "👩🏻‍🎨": 38859,
          "👩🏼‍🎨": 38923,
          "👩🏽‍🎨": 38987,
          "👩🏾‍🎨": 39051,
          "👩🏿‍🎨": 39115,
          "👩‍🎨": 39179,
          "🧑🏻‍🎨": 39243,
          "🧑🏼‍🎨": 39307,
          "🧑🏽‍🎨": 39371,
          "🧑🏾‍🎨": 39435,
          "🧑🏿‍🎨": 39499,
          "🧑‍🎨": 39563,
          "👨🏻‍🎨": 39627,
          "👨🏼‍🎨": 39691,
          "👨🏽‍🎨": 39755,
          "👨🏾‍🎨": 39819,
          "👨🏿‍🎨": 39883,
          "👨‍🎨": 39947,
          "👩🏻‍🚒": 40011,
          "👩🏼‍🚒": 40075,
          "👩🏽‍🚒": 40139,
          "👩🏾‍🚒": 40203,
          "👩🏿‍🚒": 40267,
          "👩‍🚒": 40331,
          "🧑🏻‍🚒": 40395,
          "🧑🏼‍🚒": 40459,
          "🧑🏽‍🚒": 40523,
          "🧑🏾‍🚒": 40587,
          "🧑🏿‍🚒": 40651,
          "🧑‍🚒": 40715,
          "👨🏻‍🚒": 40779,
          "👨🏼‍🚒": 40843,
          "👨🏽‍🚒": 40907,
          "👨🏾‍🚒": 40971,
          "👨🏿‍🚒": 41035,
          "👨‍🚒": 41099,
          "👩🏻‍✈": 41164,
          "👩🏼‍✈": 41228,
          "👩🏽‍✈": 41292,
          "👩🏾‍✈": 41356,
          "👩🏿‍✈": 41420,
          "👩‍✈": 41484,
          "🧑🏻‍✈": 41548,
          "🧑🏼‍✈": 41612,
          "🧑🏽‍✈": 41676,
          "🧑🏾‍✈": 41740,
          "🧑🏿‍✈": 41804,
          "🧑‍✈": 41868,
          "👨🏻‍✈": 41932,
          "👨🏼‍✈": 41996,
          "👨🏽‍✈": 42060,
          "👨🏾‍✈": 42124,
          "👨🏿‍✈": 42188,
          "👨‍✈": 42252,
          "👩🏻‍🚀": 42316,
          "👩🏼‍🚀": 42380,
          "👩🏽‍🚀": 42444,
          "👩🏾‍🚀": 42508,
          "👩🏿‍🚀": 42572,
          "👩‍🚀": 42636,
          "🧑🏻‍🚀": 42700,
          "🧑🏼‍🚀": 42764,
          "🧑🏽‍🚀": 42828,
          "🧑🏾‍🚀": 42892,
          "🧑🏿‍🚀": 42956,
          "🧑‍🚀": 43020,
          "👨🏻‍🚀": 43084,
          "👨🏼‍🚀": 43148,
          "👨🏽‍🚀": 43212,
          "👨🏾‍🚀": 43276,
          "👨🏿‍🚀": 43340,
          "👨‍🚀": 43404,
          "👩🏻‍⚖": 43468,
          "👩🏼‍⚖": 43532,
          "👩🏽‍⚖": 43596,
          "👩🏾‍⚖": 43660,
          "👩🏿‍⚖": 43724,
          "👩‍⚖": 43788,
          "🧑🏻‍⚖": 43852,
          "🧑🏼‍⚖": 43916,
          "🧑🏽‍⚖": 43980,
          "🧑🏾‍⚖": 44044,
          "🧑🏿‍⚖": 44108,
          "🧑‍⚖": 44172,
          "👨🏻‍⚖": 44236,
          "👨🏼‍⚖": 44300,
          "👨🏽‍⚖": 44364,
          "👨🏾‍⚖": 44428,
          "👨🏿‍⚖": 44492,
          "👨‍⚖": 44556,
          "👰": 12,
          "👰🏻": 44620,
          "👰🏻‍♀": 44684,
          "👰🏻‍♂": 44748,
          "👰🏼": 44812,
          "👰🏼‍♀": 44876,
          "👰🏼‍♂": 44940,
          "👰🏽": 45004,
          "👰🏽‍♀": 45068,
          "👰🏽‍♂": 45132,
          "👰🏾": 45196,
          "👰🏾‍♀": 45260,
          "👰🏾‍♂": 45324,
          "👰🏿": 45388,
          "👰🏿‍♀": 45452,
          "👰🏿‍♂": 45516,
          "👰‍♀": 45580,
          "👰‍♂": 45644,
          "🤵": 13,
          "🤵🏻": 45709,
          "🤵🏻‍♀": 45773,
          "🤵🏻‍♂": 45837,
          "🤵🏼": 45901,
          "🤵🏼‍♀": 45965,
          "🤵🏼‍♂": 46029,
          "🤵🏽": 46093,
          "🤵🏽‍♀": 46157,
          "🤵🏽‍♂": 46221,
          "🤵🏾": 46285,
          "🤵🏾‍♀": 46349,
          "🤵🏾‍♂": 46413,
          "🤵🏿": 46477,
          "🤵🏿‍♀": 46541,
          "🤵🏿‍♂": 46605,
          "🤵‍♀": 46669,
          "🤵‍♂": 46733,
          "👸": 13,
          "👸🏻": 46797,
          "👸🏼": 46861,
          "👸🏽": 46925,
          "👸🏾": 46989,
          "👸🏿": 47053,
          "🤴": 13,
          "🤴🏻": 47117,
          "🤴🏼": 47181,
          "🤴🏽": 47245,
          "🤴🏾": 47309,
          "🤴🏿": 47373,
          "🥷": 13,
          "🥷🏻": 47437,
          "🥷🏼": 47501,
          "🥷🏽": 47565,
          "🥷🏾": 47629,
          "🥷🏿": 47693,
          "🦸🏻‍♀": 47757,
          "🦸🏻‍♂": 47821,
          "🦸🏼‍♀": 47885,
          "🦸🏼‍♂": 47949,
          "🦸🏽‍♀": 48013,
          "🦸🏽‍♂": 48077,
          "🦸🏾‍♀": 48141,
          "🦸🏾‍♂": 48205,
          "🦸🏿‍♀": 48269,
          "🦸🏿‍♂": 48333,
          "🦸‍♀": 48397,
          "🦸‍♂": 48461,
          "🦹🏻‍♀": 48525,
          "🦹🏻‍♂": 48589,
          "🦹🏼‍♀": 48653,
          "🦹🏼‍♂": 48717,
          "🦹🏽‍♀": 48781,
          "🦹🏽‍♂": 48845,
          "🦹🏾‍♀": 48909,
          "🦹🏾‍♂": 48973,
          "🦹🏿‍♀": 49037,
          "🦹🏿‍♂": 49101,
          "🦹‍♀": 49165,
          "🦹‍♂": 49229,
          "🤶": 13,
          "🤶🏻": 49293,
          "🤶🏼": 49357,
          "🤶🏽": 49421,
          "🤶🏾": 49485,
          "🤶🏿": 49549,
          "🧑🏻‍🎄": 49613,
          "🧑🏼‍🎄": 49677,
          "🧑🏽‍🎄": 49741,
          "🧑🏾‍🎄": 49805,
          "🧑🏿‍🎄": 49869,
          "🧑‍🎄": 49933,
          "🎅": 14,
          "🎅🏻": 49998,
          "🎅🏼": 50062,
          "🎅🏽": 50126,
          "🎅🏾": 50190,
          "🎅🏿": 50254,
          "🧙🏻‍♀": 50318,
          "🧙🏻‍♂": 50382,
          "🧙🏼‍♀": 50446,
          "🧙🏼‍♂": 50510,
          "🧙🏽‍♀": 50574,
          "🧙🏽‍♂": 50638,
          "🧙🏾‍♀": 50702,
          "🧙🏾‍♂": 50766,
          "🧙🏿‍♀": 50830,
          "🧙🏿‍♂": 50894,
          "🧙‍♀": 50958,
          "🧙‍♂": 51022,
          "🧝🏻‍♀": 51086,
          "🧝🏻‍♂": 51150,
          "🧝🏼‍♀": 51214,
          "🧝🏼‍♂": 51278,
          "🧝🏽‍♀": 51342,
          "🧝🏽‍♂": 51406,
          "🧝🏾‍♀": 51470,
          "🧝🏾‍♂": 51534,
          "🧝🏿‍♀": 51598,
          "🧝🏿‍♂": 51662,
          "🧝‍♀": 51726,
          "🧝‍♂": 51790,
          "🧛🏻‍♀": 51854,
          "🧛🏻‍♂": 51918,
          "🧛🏼‍♀": 51982,
          "🧛🏼‍♂": 52046,
          "🧛🏽‍♀": 52110,
          "🧛🏽‍♂": 52174,
          "🧛🏾‍♀": 52238,
          "🧛🏾‍♂": 52302,
          "🧛🏿‍♀": 52366,
          "🧛🏿‍♂": 52430,
          "🧛‍♀": 52494,
          "🧛‍♂": 52558,
          "🧟‍♀": 52622,
          "🧟‍♂": 52686,
          "🧞‍♀": 52750,
          "🧞‍♂": 52814,
          "🧜🏻‍♀": 52878,
          "🧜🏻‍♂": 52942,
          "🧜🏼‍♀": 53006,
          "🧜🏼‍♂": 53070,
          "🧜🏽‍♀": 53134,
          "🧜🏽‍♂": 53198,
          "🧜🏾‍♀": 53262,
          "🧜🏾‍♂": 53326,
          "🧜🏿‍♀": 53390,
          "🧜🏿‍♂": 53454,
          "🧜‍♀": 53518,
          "🧜‍♂": 53582,
          "🧚🏻‍♀": 53646,
          "🧚🏻‍♂": 53710,
          "🧚🏼‍♀": 53774,
          "🧚🏼‍♂": 53838,
          "🧚🏽‍♀": 53902,
          "🧚🏽‍♂": 53966,
          "🧚🏾‍♀": 54030,
          "🧚🏾‍♂": 54094,
          "🧚🏿‍♀": 54158,
          "🧚🏿‍♂": 54222,
          "🧚‍♀": 54286,
          "🧚‍♂": 54350,
          "👼": 15,
          "👼🏻": 54415,
          "👼🏼": 54479,
          "👼🏽": 54543,
          "👼🏾": 54607,
          "👼🏿": 54671,
          "🤰": 15,
          "🤰🏻": 54735,
          "🤰🏼": 54799,
          "🤰🏽": 54863,
          "🤰🏾": 54927,
          "🤰🏿": 54991,
          "🤱": 15,
          "🤱🏻": 55055,
          "🤱🏼": 55119,
          "🤱🏽": 55183,
          "🤱🏾": 55247,
          "🤱🏿": 55311,
          "👩🏻‍🍼": 55375,
          "👩🏼‍🍼": 55439,
          "👩🏽‍🍼": 55503,
          "👩🏾‍🍼": 55567,
          "👩🏿‍🍼": 55631,
          "👩‍🍼": 55695,
          "🧑🏻‍🍼": 55759,
          "🧑🏼‍🍼": 55823,
          "🧑🏽‍🍼": 55887,
          "🧑🏾‍🍼": 55951,
          "🧑🏿‍🍼": 56015,
          "🧑‍🍼": 56079,
          "👨🏻‍🍼": 56143,
          "👨🏼‍🍼": 56207,
          "👨🏽‍🍼": 56271,
          "👨🏾‍🍼": 56335,
          "👨🏿‍🍼": 56399,
          "👨‍🍼": 56463,
          "🙇🏻‍♀": 56527,
          "🙇🏻‍♂": 56591,
          "🙇🏼‍♀": 56655,
          "🙇🏼‍♂": 56719,
          "🙇🏽‍♀": 56783,
          "🙇🏽‍♂": 56847,
          "🙇🏾‍♀": 56911,
          "🙇🏾‍♂": 56975,
          "🙇🏿‍♀": 57039,
          "🙇🏿‍♂": 57103,
          "🙇‍♀": 57167,
          "🙇‍♂": 57231,
          "💁🏻‍♀": 57295,
          "💁🏻‍♂": 57359,
          "💁🏼‍♀": 57423,
          "💁🏼‍♂": 57487,
          "💁🏽‍♀": 57551,
          "💁🏽‍♂": 57615,
          "💁🏾‍♀": 57679,
          "💁🏾‍♂": 57743,
          "💁🏿‍♀": 57807,
          "💁🏿‍♂": 57871,
          "💁‍♀": 57935,
          "💁‍♂": 57999,
          "🙅🏻‍♀": 58063,
          "🙅🏻‍♂": 58127,
          "🙅🏼‍♀": 58191,
          "🙅🏼‍♂": 58255,
          "🙅🏽‍♀": 58319,
          "🙅🏽‍♂": 58383,
          "🙅🏾‍♀": 58447,
          "🙅🏾‍♂": 58511,
          "🙅🏿‍♀": 58575,
          "🙅🏿‍♂": 58639,
          "🙅‍♀": 58703,
          "🙅‍♂": 58767,
          "🙆🏻‍♀": 58832,
          "🙆🏻‍♂": 58896,
          "🙆🏼‍♀": 58960,
          "🙆🏼‍♂": 59024,
          "🙆🏽‍♀": 59088,
          "🙆🏽‍♂": 59152,
          "🙆🏾‍♀": 59216,
          "🙆🏾‍♂": 59280,
          "🙆🏿‍♀": 59344,
          "🙆🏿‍♂": 59408,
          "🙆‍♀": 59472,
          "🙆‍♂": 59536,
          "🙋🏻‍♀": 59600,
          "🙋🏻‍♂": 59664,
          "🙋🏼‍♀": 59728,
          "🙋🏼‍♂": 59792,
          "🙋🏽‍♀": 59856,
          "🙋🏽‍♂": 59920,
          "🙋🏾‍♀": 59984,
          "🙋🏾‍♂": 60048,
          "🙋🏿‍♀": 60112,
          "🙋🏿‍♂": 60176,
          "🙋‍♀": 60240,
          "🙋‍♂": 60304,
          "🧏": 16,
          "🧏🏻": 60368,
          "🧏🏻‍♀": 60432,
          "🧏🏻‍♂": 60496,
          "🧏🏼": 60560,
          "🧏🏼‍♀": 60624,
          "🧏🏼‍♂": 60688,
          "🧏🏽": 60752,
          "🧏🏽‍♀": 60816,
          "🧏🏽‍♂": 60880,
          "🧏🏾": 60944,
          "🧏🏾‍♀": 61008,
          "🧏🏾‍♂": 61072,
          "🧏🏿": 61136,
          "🧏🏿‍♀": 61200,
          "🧏🏿‍♂": 61264,
          "🧏‍♀": 61328,
          "🧏‍♂": 61392,
          "🤦🏻‍♀": 61456,
          "🤦🏻‍♂": 61520,
          "🤦🏼‍♀": 61584,
          "🤦🏼‍♂": 61648,
          "🤦🏽‍♀": 61712,
          "🤦🏽‍♂": 61776,
          "🤦🏾‍♀": 61840,
          "🤦🏾‍♂": 61904,
          "🤦🏿‍♀": 61968,
          "🤦🏿‍♂": 62032,
          "🤦‍♀": 62096,
          "🤦‍♂": 62160,
          "🤷🏻‍♀": 62224,
          "🤷🏻‍♂": 62288,
          "🤷🏼‍♀": 62352,
          "🤷🏼‍♂": 62416,
          "🤷🏽‍♀": 62480,
          "🤷🏽‍♂": 62544,
          "🤷🏾‍♀": 62608,
          "🤷🏾‍♂": 62672,
          "🤷🏿‍♀": 62736,
          "🤷🏿‍♂": 62800,
          "🤷‍♀": 62864,
          "🤷‍♂": 62928,
          "🙎🏻‍♀": 62993,
          "🙎🏻‍♂": 63057,
          "🙎🏼‍♀": 63121,
          "🙎🏼‍♂": 63185,
          "🙎🏽‍♀": 63249,
          "🙎🏽‍♂": 63313,
          "🙎🏾‍♀": 63377,
          "🙎🏾‍♂": 63441,
          "🙎🏿‍♀": 63505,
          "🙎🏿‍♂": 63569,
          "🙎‍♀": 63633,
          "🙎‍♂": 63697,
          "🙍🏻‍♀": 63761,
          "🙍🏻‍♂": 63825,
          "🙍🏼‍♀": 63889,
          "🙍🏼‍♂": 63953,
          "🙍🏽‍♀": 64017,
          "🙍🏽‍♂": 64081,
          "🙍🏾‍♀": 64145,
          "🙍🏾‍♂": 64209,
          "🙍🏿‍♀": 64273,
          "🙍🏿‍♂": 64337,
          "🙍‍♀": 64401,
          "🙍‍♂": 64465,
          "💇🏻‍♀": 64529,
          "💇🏻‍♂": 64593,
          "💇🏼‍♀": 64657,
          "💇🏼‍♂": 64721,
          "💇🏽‍♀": 64785,
          "💇🏽‍♂": 64849,
          "💇🏾‍♀": 64913,
          "💇🏾‍♂": 64977,
          "💇🏿‍♀": 65041,
          "💇🏿‍♂": 65105,
          "💇‍♀": 65169,
          "💇‍♂": 65233,
          "💆🏻‍♀": 65297,
          "💆🏻‍♂": 65361,
          "💆🏼‍♀": 65425,
          "💆🏼‍♂": 65489,
          "💆🏽‍♀": 65553,
          "💆🏽‍♂": 65617,
          "💆🏾‍♀": 65681,
          "💆🏾‍♂": 65745,
          "💆🏿‍♀": 65809,
          "💆🏿‍♂": 65873,
          "💆‍♀": 65937,
          "💆‍♂": 66001,
          "🧖": 17,
          "🧖🏻‍♀": 66065,
          "🧖🏻‍♂": 66129,
          "🧖🏼‍♀": 66193,
          "🧖🏼‍♂": 66257,
          "🧖🏽‍♀": 66321,
          "🧖🏽‍♂": 66385,
          "🧖🏾‍♀": 66449,
          "🧖🏾‍♂": 66513,
          "🧖🏿‍♀": 66577,
          "🧖🏿‍♂": 66641,
          "🧖‍♀": 66705,
          "🧖‍♂": 66769,
          "💅": 17,
          "💅🏻": 66833,
          "💅🏼": 66897,
          "💅🏽": 66961,
          "💅🏾": 67025,
          "💅🏿": 67089,
          "🤳": 17,
          "🤳🏻": 67153,
          "🤳🏼": 67217,
          "🤳🏽": 67281,
          "🤳🏾": 67345,
          "🤳🏿": 67409,
          "💃": 18,
          "💃🏻": 67474,
          "💃🏼": 67538,
          "💃🏽": 67602,
          "💃🏾": 67666,
          "💃🏿": 67730,
          "🕺": 18,
          "🕺🏻": 67794,
          "🕺🏼": 67858,
          "🕺🏽": 67922,
          "🕺🏾": 67986,
          "🕺🏿": 68050,
          "👯🏻‍♀": 68114,
          "👯🏻‍♂": 68178,
          "👯🏼‍♀": 68242,
          "👯🏼‍♂": 68306,
          "👯🏽‍♀": 68370,
          "👯🏽‍♂": 68434,
          "👯🏾‍♀": 68498,
          "👯🏾‍♂": 68562,
          "👯🏿‍♀": 68626,
          "👯🏿‍♂": 68690,
          "👯‍♀": 68754,
          "👯‍♂": 68818,
          "🕴": 18,
          "🕴🏻": 68882,
          "🕴🏼": 68946,
          "🕴🏽": 69010,
          "🕴🏾": 69074,
          "🕴🏿": 69138,
          "👩🏻‍🦽": 69202,
          "👩🏼‍🦽": 69266,
          "👩🏽‍🦽": 69330,
          "👩🏾‍🦽": 69394,
          "👩🏿‍🦽": 69458,
          "👩‍🦽": 69522,
          "🧑🏻‍🦽": 69586,
          "🧑🏼‍🦽": 69650,
          "🧑🏽‍🦽": 69714,
          "🧑🏾‍🦽": 69778,
          "🧑🏿‍🦽": 69842,
          "🧑‍🦽": 69906,
          "👨🏻‍🦽": 69970,
          "👨🏼‍🦽": 70034,
          "👨🏽‍🦽": 70098,
          "👨🏾‍🦽": 70162,
          "👨🏿‍🦽": 70226,
          "👨‍🦽": 70290,
          "👩🏻‍🦼": 70354,
          "👩🏼‍🦼": 70418,
          "👩🏽‍🦼": 70482,
          "👩🏾‍🦼": 70546,
          "👩🏿‍🦼": 70610,
          "👩‍🦼": 70674,
          "🧑🏻‍🦼": 70738,
          "🧑🏼‍🦼": 70802,
          "🧑🏽‍🦼": 70866,
          "🧑🏾‍🦼": 70930,
          "🧑🏿‍🦼": 70994,
          "🧑‍🦼": 71058,
          "👨🏻‍🦼": 71122,
          "👨🏼‍🦼": 71186,
          "👨🏽‍🦼": 71250,
          "👨🏾‍🦼": 71314,
          "👨🏿‍🦼": 71378,
          "👨‍🦼": 71442,
          "🚶": 19,
          "🚶🏻‍♀": 71507,
          "🚶🏻‍♂": 71571,
          "🚶🏼‍♀": 71635,
          "🚶🏼‍♂": 71699,
          "🚶🏽‍♀": 71763,
          "🚶🏽‍♂": 71827,
          "🚶🏾‍♀": 71891,
          "🚶🏾‍♂": 71955,
          "🚶🏿‍♀": 72019,
          "🚶🏿‍♂": 72083,
          "🚶‍♀": 72147,
          "🚶‍♂": 72211,
          "👩🏻‍🦯": 72275,
          "👩🏼‍🦯": 72339,
          "👩🏽‍🦯": 72403,
          "👩🏾‍🦯": 72467,
          "👩🏿‍🦯": 72531,
          "👩‍🦯": 72595,
          "🧑🏻‍🦯": 72659,
          "🧑🏼‍🦯": 72723,
          "🧑🏽‍🦯": 72787,
          "🧑🏾‍🦯": 72851,
          "🧑🏿‍🦯": 72915,
          "🧑‍🦯": 72979,
          "👨🏻‍🦯": 73043,
          "👨🏼‍🦯": 73107,
          "👨🏽‍🦯": 73171,
          "👨🏾‍🦯": 73235,
          "👨🏿‍🦯": 73299,
          "👨‍🦯": 73363,
          "🧎": 19,
          "🧎🏻": 73427,
          "🧎🏻‍♀": 73491,
          "🧎🏻‍♂": 73555,
          "🧎🏼": 73619,
          "🧎🏼‍♀": 73683,
          "🧎🏼‍♂": 73747,
          "🧎🏽": 73811,
          "🧎🏽‍♀": 73875,
          "🧎🏽‍♂": 73939,
          "🧎🏾": 74003,
          "🧎🏾‍♀": 74067,
          "🧎🏾‍♂": 74131,
          "🧎🏿": 74195,
          "🧎🏿‍♀": 74259,
          "🧎🏿‍♂": 74323,
          "🧎‍♀": 74387,
          "🧎‍♂": 74451,
          "🏃": 19,
          "🏃🏻‍♀": 74515,
          "🏃🏻‍♂": 74579,
          "🏃🏼‍♀": 74643,
          "🏃🏼‍♂": 74707,
          "🏃🏽‍♀": 74771,
          "🏃🏽‍♂": 74835,
          "🏃🏾‍♀": 74899,
          "🏃🏾‍♂": 74963,
          "🏃🏿‍♀": 75027,
          "🏃🏿‍♂": 75091,
          "🏃‍♀": 75155,
          "🏃‍♂": 75219,
          "🧍": 20,
          "🧍🏻": 75284,
          "🧍🏻‍♀": 75348,
          "🧍🏻‍♂": 75412,
          "🧍🏼": 75476,
          "🧍🏼‍♀": 75540,
          "🧍🏼‍♂": 75604,
          "🧍🏽": 75668,
          "🧍🏽‍♀": 75732,
          "🧍🏽‍♂": 75796,
          "🧍🏾": 75860,
          "🧍🏾‍♀": 75924,
          "🧍🏾‍♂": 75988,
          "🧍🏿": 76052,
          "🧍🏿‍♀": 76116,
          "🧍🏿‍♂": 76180,
          "🧍‍♀": 76244,
          "🧍‍♂": 76308,
          "👫": 20,
          "👫🏻": 76372,
          "👫🏼": 76436,
          "👫🏽": 76500,
          "👫🏾": 76564,
          "👫🏿": 76628,
          "👭": 20,
          "👭🏻": 76692,
          "👭🏼": 76756,
          "👭🏽": 76820,
          "👭🏾": 76884,
          "👭🏿": 76948,
          "👬": 20,
          "👬🏻": 77012,
          "👬🏼": 77076,
          "👬🏽": 77140,
          "👬🏾": 77204,
          "👬🏿": 77268,
          "👩‍❤‍👨": 77332,
          "👩‍❤‍👩": 77396,
          "💑": 20,
          "👨‍❤‍👨": 77460,
          "👩‍❤‍💋‍👨": 77524,
          "👩‍❤‍💋‍👩": 77588,
          "💏": 20,
          "👨‍❤‍💋‍👨": 77652,
          "👨‍👩‍👦": 77716,
          "👨‍👩‍👧": 77780,
          "👨‍👩‍👧‍👦": 77844,
          "👨‍👩‍👦‍👦": 77908,
          "👨‍👩‍👧‍👧": 77972,
          "👩‍👩‍👦": 78036,
          "👩‍👩‍👧": 78100,
          "👩‍👩‍👧‍👦": 78164,
          "👩‍👩‍👦‍👦": 78228,
          "👩‍👩‍👧‍👧": 78292,
          "👨‍👨‍👦": 78356,
          "👨‍👨‍👧": 78420,
          "👨‍👨‍👧‍👦": 78484,
          "👨‍👨‍👦‍👦": 78548,
          "👨‍👨‍👧‍👧": 78612,
          "👩‍👦": 78676,
          "👩‍👧": 78740,
          "👩‍👧‍👦": 78804,
          "👩‍👦‍👦": 78868,
          "👩‍👧‍👧": 78932,
          "👨‍👦": 78996,
          "👨‍👧": 79060,
          "👨‍👧‍👦": 79124,
          "👨‍👦‍👦": 79188,
          "👨‍👧‍👧": 79252,
          "🪢": 20,
          "🧶": 20,
          "🧵": 20,
          "🪡": 20,
          "🧥": 20,
          "🥼": 20,
          "🦺": 21,
          "👚": 21,
          "👕": 21,
          "👖": 21,
          "🩲": 21,
          "🩳": 21,
          "👔": 21,
          "👗": 21,
          "👙": 21,
          "🩱": 21,
          "👘": 21,
          "🥻": 21,
          "🩴": 21,
          "🥿": 21,
          "👠": 21,
          "👡": 21,
          "👢": 21,
          "👞": 21,
          "👟": 21,
          "🥾": 21,
          "🧦": 21,
          "🧤": 21,
          "🧣": 21,
          "🎩": 21,
          "🧢": 21,
          "👒": 21,
          "🎓": 21,
          "⛑": 21,
          "🪖": 21,
          "👑": 21,
          "💍": 21,
          "👝": 21,
          "👛": 21,
          "👜": 21,
          "💼": 21,
          "🎒": 21,
          "🧳": 21,
          "👓": 21,
          "🕶": 21,
          "🥽": 21,
          "🌂": 21,
          "🐶": 21,
          "🐱": 21,
          "🐭": 21,
          "🐹": 21,
          "🐰": 21,
          "🦊": 21,
          "🐻": 21,
          "🐼": 21,
          "🐻‍❄": 79317,
          "🐨": 21,
          "🐯": 21,
          "🦁": 21,
          "🐮": 21,
          "🐷": 21,
          "🐽": 21,
          "🐸": 21,
          "🐵": 21,
          "🙈": 21,
          "🙉": 21,
          "🙊": 21,
          "🐒": 21,
          "🐔": 21,
          "🐧": 21,
          "🐦": 21,
          "🐤": 21,
          "🐣": 21,
          "🐥": 21,
          "🦆": 21,
          "🦅": 21,
          "🦉": 21,
          "🦇": 21,
          "🐺": 21,
          "🐗": 21,
          "🐴": 21,
          "🦄": 22,
          "🐝": 22,
          "🪱": 22,
          "🐛": 22,
          "🦋": 22,
          "🐌": 22,
          "🐞": 22,
          "🐜": 22,
          "🪰": 22,
          "🪲": 22,
          "🪳": 22,
          "🦟": 22,
          "🦗": 22,
          "🕷": 22,
          "🕸": 22,
          "🦂": 22,
          "🐢": 22,
          "🐍": 22,
          "🦎": 22,
          "🦖": 22,
          "🦕": 22,
          "🐙": 22,
          "🦑": 22,
          "🦐": 22,
          "🦞": 22,
          "🦀": 22,
          "🐡": 22,
          "🐠": 22,
          "🐟": 22,
          "🐬": 22,
          "🐳": 22,
          "🐋": 22,
          "🦈": 22,
          "🦭": 22,
          "🐊": 22,
          "🐅": 22,
          "🐆": 22,
          "🦓": 22,
          "🦍": 22,
          "🦧": 22,
          "🦣": 22,
          "🐘": 22,
          "🦛": 22,
          "🦏": 22,
          "🐪": 22,
          "🐫": 22,
          "🦒": 22,
          "🦘": 22,
          "🦬": 22,
          "🐃": 22,
          "🐂": 22,
          "🐄": 22,
          "🐎": 22,
          "🐖": 22,
          "🐏": 22,
          "🐑": 22,
          "🦙": 22,
          "🐐": 22,
          "🦌": 22,
          "🐕": 22,
          "🐩": 22,
          "🦮": 22,
          "🐕‍🦺": 79382,
          "🐈": 22,
          "🐈‍⬛": 79446,
          "🪶": 22,
          "🐓": 22,
          "🦃": 22,
          "🦤": 22,
          "🦚": 22,
          "🦜": 22,
          "🦢": 22,
          "🦩": 22,
          "🕊": 22,
          "🐇": 22,
          "🦝": 23,
          "🦨": 23,
          "🦡": 23,
          "🦫": 23,
          "🦦": 23,
          "🦥": 23,
          "🐁": 23,
          "🐀": 23,
          "🐿": 23,
          "🦔": 23,
          "🐾": 23,
          "🐉": 23,
          "🐲": 23,
          "🌵": 23,
          "🎄": 23,
          "🌲": 23,
          "🌳": 23,
          "🌴": 23,
          "🪵": 23,
          "🌱": 23,
          "🌿": 23,
          "☘": 23,
          "🍀": 23,
          "🎍": 23,
          "🪴": 23,
          "🎋": 23,
          "🍃": 23,
          "🍂": 23,
          "🍁": 23,
          "🍄": 23,
          "🐚": 23,
          "🪨": 23,
          "🌾": 23,
          "💐": 23,
          "🌷": 23,
          "🌹": 23,
          "🥀": 23,
          "🌺": 23,
          "🌸": 23,
          "🌼": 23,
          "🌻": 23,
          "🌞": 23,
          "🌝": 23,
          "🌛": 23,
          "🌜": 23,
          "🌚": 23,
          "🌕": 23,
          "🌖": 23,
          "🌗": 23,
          "🌘": 23,
          "🌑": 23,
          "🌒": 23,
          "🌓": 23,
          "🌔": 23,
          "🌙": 23,
          "🌎": 23,
          "🌍": 23,
          "🌏": 23,
          "🪐": 23,
          "💫": 23,
          "⭐": 23,
          "🌟": 23,
          "✨": 23,
          "⚡": 23,
          "☄": 23,
          "💥": 23,
          "🌪": 23,
          "🌈": 23,
          "☀": 23,
          "🌤": 23,
          "⛅": 23,
          "🌥": 23,
          "☁": 23,
          "🌦": 23,
          "🌧": 23,
          "⛈": 24,
          "🌩": 24,
          "🌨": 24,
          "❄": 24,
          "☃": 24,
          "⛄": 24,
          "🌬": 24,
          "💨": 24,
          "💧": 24,
          "💦": 24,
          "☔": 24,
          "☂": 24,
          "🌊": 24,
          "🌫": 24,
          "🍏": 24,
          "🍎": 24,
          "🍐": 24,
          "🍊": 24,
          "🍋": 24,
          "🍌": 24,
          "🍉": 24,
          "🍇": 24,
          "🍓": 24,
          "🫐": 24,
          "🍈": 24,
          "🍒": 24,
          "🍑": 24,
          "🥭": 24,
          "🍍": 24,
          "🥥": 24,
          "🥝": 24,
          "🍅": 24,
          "🍆": 24,
          "🥑": 24,
          "🥦": 24,
          "🥬": 24,
          "🥒": 24,
          "🌶": 24,
          "🫑": 24,
          "🌽": 24,
          "🥕": 24,
          "🫒": 24,
          "🧄": 24,
          "🧅": 24,
          "🥔": 24,
          "🍠": 24,
          "🥐": 24,
          "🥯": 24,
          "🍞": 24,
          "🥖": 24,
          "🥨": 24,
          "🧀": 24,
          "🥚": 24,
          "🍳": 24,
          "🧈": 24,
          "🥞": 24,
          "🧇": 24,
          "🥓": 24,
          "🥩": 24,
          "🍗": 24,
          "🍖": 24,
          "🦴": 24,
          "🌭": 24,
          "🍔": 24,
          "🍟": 24,
          "🍕": 24,
          "🫓": 24,
          "🥪": 24,
          "🥙": 24,
          "🧆": 24,
          "🌮": 24,
          "🌯": 24,
          "🫔": 24,
          "🥗": 24,
          "🥘": 24,
          "🫕": 25,
          "🥫": 25,
          "🍝": 25,
          "🍜": 25,
          "🍲": 25,
          "🍛": 25,
          "🍣": 25,
          "🍱": 25,
          "🥟": 25,
          "🦪": 25,
          "🍤": 25,
          "🍙": 25,
          "🍚": 25,
          "🍘": 25,
          "🍥": 25,
          "🥠": 25,
          "🥮": 25,
          "🍢": 25,
          "🍡": 25,
          "🍧": 25,
          "🍨": 25,
          "🍦": 25,
          "🥧": 25,
          "🧁": 25,
          "🍰": 25,
          "🍮": 25,
          "🍭": 25,
          "🍬": 25,
          "🍫": 25,
          "🍿": 25,
          "🍩": 25,
          "🍪": 25,
          "🌰": 25,
          "🥜": 25,
          "🍯": 25,
          "🥛": 25,
          "🍼": 25,
          "🫖": 25,
          "☕": 25,
          "🍵": 25,
          "🧃": 25,
          "🥤": 25,
          "🧋": 25,
          "🍶": 25,
          "🍺": 25,
          "🍻": 25,
          "🥂": 25,
          "🍷": 25,
          "🥃": 25,
          "🍸": 25,
          "🍹": 25,
          "🧉": 25,
          "🍾": 25,
          "🧊": 25,
          "🥄": 25,
          "🍴": 25,
          "🍽": 25,
          "🥣": 25,
          "🥡": 25,
          "🥢": 25,
          "🧂": 25,
          "⚽": 25,
          "🏀": 25,
          "🏈": 25,
          "⚾": 25,
          "🥎": 25,
          "🎾": 25,
          "🏐": 25,
          "🏉": 25,
          "🥏": 25,
          "🎱": 25,
          "🪀": 25,
          "🏓": 25,
          "🏸": 25,
          "🏒": 25,
          "🏑": 26,
          "🥍": 26,
          "🏏": 26,
          "🪃": 26,
          "🥅": 26,
          "⛳": 26,
          "🪁": 26,
          "🏹": 26,
          "🎣": 26,
          "🤿": 26,
          "🥊": 26,
          "🥋": 26,
          "🎽": 26,
          "🛹": 26,
          "🛼": 26,
          "🛷": 26,
          "⛸": 26,
          "🥌": 26,
          "🎿": 26,
          "⛷": 26,
          "🏂": 26,
          "🪂": 26,
          "🏋🏻‍♀": 79514,
          "🏋🏻‍♂": 79578,
          "🏋🏼‍♀": 79642,
          "🏋🏼‍♂": 79706,
          "🏋🏽‍♀": 79770,
          "🏋🏽‍♂": 79834,
          "🏋🏾‍♀": 79898,
          "🏋🏾‍♂": 79962,
          "🏋🏿‍♀": 80026,
          "🏋🏿‍♂": 80090,
          "🏋‍♀": 80154,
          "🏋‍♂": 80218,
          "🤼": 26,
          "🤼‍♀": 80282,
          "🤼‍♂": 80346,
          "🤸": 26,
          "🤸🏻‍♀": 80410,
          "🤸🏻‍♂": 80474,
          "🤸🏼‍♀": 80538,
          "🤸🏼‍♂": 80602,
          "🤸🏽‍♀": 80666,
          "🤸🏽‍♂": 80730,
          "🤸🏾‍♀": 80794,
          "🤸🏾‍♂": 80858,
          "🤸🏿‍♀": 80922,
          "🤸🏿‍♂": 80986,
          "🤸‍♀": 81050,
          "🤸‍♂": 81114,
          "⛹": 26,
          "⛹🏻‍♀": 81178,
          "⛹🏻‍♂": 81242,
          "⛹🏼‍♀": 81306,
          "⛹🏼‍♂": 81370,
          "⛹🏽‍♀": 81434,
          "⛹🏽‍♂": 81498,
          "⛹🏾‍♀": 81562,
          "⛹🏾‍♂": 81626,
          "⛹🏿‍♀": 81690,
          "⛹🏿‍♂": 81754,
          "⛹‍♀": 81818,
          "⛹‍♂": 81882,
          "🤺": 26,
          "🤾": 27,
          "🤾🏻‍♀": 81947,
          "🤾🏻‍♂": 82011,
          "🤾🏼‍♀": 82075,
          "🤾🏼‍♂": 82139,
          "🤾🏽‍♀": 82203,
          "🤾🏽‍♂": 82267,
          "🤾🏾‍♀": 82331,
          "🤾🏾‍♂": 82395,
          "🤾🏿‍♀": 82459,
          "🤾🏿‍♂": 82523,
          "🤾‍♀": 82587,
          "🤾‍♂": 82651,
          "🏌": 27,
          "🏌🏻‍♀": 82715,
          "🏌🏻‍♂": 82779,
          "🏌🏼‍♀": 82843,
          "🏌🏼‍♂": 82907,
          "🏌🏽‍♀": 82971,
          "🏌🏽‍♂": 83035,
          "🏌🏾‍♀": 83099,
          "🏌🏾‍♂": 83163,
          "🏌🏿‍♀": 83227,
          "🏌🏿‍♂": 83291,
          "🏌‍♀": 83355,
          "🏌‍♂": 83419,
          "🏇": 27,
          "🏇🏻": 83483,
          "🏇🏼": 83547,
          "🏇🏽": 83611,
          "🏇🏾": 83675,
          "🏇🏿": 83739,
          "🧘": 27,
          "🧘🏻‍♀": 83803,
          "🧘🏻‍♂": 83867,
          "🧘🏼‍♀": 83931,
          "🧘🏼‍♂": 83995,
          "🧘🏽‍♀": 84059,
          "🧘🏽‍♂": 84123,
          "🧘🏾‍♀": 84187,
          "🧘🏾‍♂": 84251,
          "🧘🏿‍♀": 84315,
          "🧘🏿‍♂": 84379,
          "🧘‍♀": 84443,
          "🧘‍♂": 84507,
          "🏄": 27,
          "🏄🏻‍♀": 84571,
          "🏄🏻‍♂": 84635,
          "🏄🏼‍♀": 84699,
          "🏄🏼‍♂": 84763,
          "🏄🏽‍♀": 84827,
          "🏄🏽‍♂": 84891,
          "🏄🏾‍♀": 84955,
          "🏄🏾‍♂": 85019,
          "🏄🏿‍♀": 85083,
          "🏄🏿‍♂": 85147,
          "🏄‍♀": 85211,
          "🏄‍♂": 85275,
          "🏊": 27,
          "🏊🏻‍♀": 85339,
          "🏊🏻‍♂": 85403,
          "🏊🏼‍♀": 85467,
          "🏊🏼‍♂": 85531,
          "🏊🏽‍♀": 85595,
          "🏊🏽‍♂": 85659,
          "🏊🏾‍♀": 85723,
          "🏊🏾‍♂": 85787,
          "🏊🏿‍♀": 85851,
          "🏊🏿‍♂": 85915,
          "🏊‍♀": 85979,
          "🏊‍♂": 86043,
          "🤽": 28,
          "🤽🏻‍♀": 86108,
          "🤽🏻‍♂": 86172,
          "🤽🏼‍♀": 86236,
          "🤽🏼‍♂": 86300,
          "🤽🏽‍♀": 86364,
          "🤽🏽‍♂": 86428,
          "🤽🏾‍♀": 86492,
          "🤽🏾‍♂": 86556,
          "🤽🏿‍♀": 86620,
          "🤽🏿‍♂": 86684,
          "🤽‍♀": 86748,
          "🤽‍♂": 86812,
          "🚣": 28,
          "🚣🏻‍♀": 86876,
          "🚣🏻‍♂": 86940,
          "🚣🏼‍♀": 87004,
          "🚣🏼‍♂": 87068,
          "🚣🏽‍♀": 87132,
          "🚣🏽‍♂": 87196,
          "🚣🏾‍♀": 87260,
          "🚣🏾‍♂": 87324,
          "🚣🏿‍♀": 87388,
          "🚣🏿‍♂": 87452,
          "🚣‍♀": 87516,
          "🚣‍♂": 87580,
          "🧗": 28,
          "🧗🏻‍♀": 87644,
          "🧗🏻‍♂": 87708,
          "🧗🏼‍♀": 87772,
          "🧗🏼‍♂": 87836,
          "🧗🏽‍♀": 87900,
          "🧗🏽‍♂": 87964,
          "🧗🏾‍♀": 88028,
          "🧗🏾‍♂": 88092,
          "🧗🏿‍♀": 88156,
          "🧗🏿‍♂": 88220,
          "🧗‍♀": 88284,
          "🧗‍♂": 88348,
          "🚵": 28,
          "🚵🏻‍♀": 88412,
          "🚵🏻‍♂": 88476,
          "🚵🏼‍♀": 88540,
          "🚵🏼‍♂": 88604,
          "🚵🏽‍♀": 88668,
          "🚵🏽‍♂": 88732,
          "🚵🏾‍♀": 88796,
          "🚵🏾‍♂": 88860,
          "🚵🏿‍♀": 88924,
          "🚵🏿‍♂": 88988,
          "🚵‍♀": 89052,
          "🚵‍♂": 89116,
          "🚴": 28,
          "🚴🏻‍♀": 89180,
          "🚴🏻‍♂": 89244,
          "🚴🏼‍♀": 89308,
          "🚴🏼‍♂": 89372,
          "🚴🏽‍♀": 89436,
          "🚴🏽‍♂": 89500,
          "🚴🏾‍♀": 89564,
          "🚴🏾‍♂": 89628,
          "🚴🏿‍♀": 89692,
          "🚴🏿‍♂": 89756,
          "🚴‍♀": 89820,
          "🚴‍♂": 89884,
          "🏆": 28,
          "🥇": 28,
          "🥈": 28,
          "🥉": 28,
          "🏅": 28,
          "🎖": 28,
          "🏵": 28,
          "🎗": 28,
          "🎫": 28,
          "🎟": 28,
          "🎪": 29,
          "🤹🏻‍♀": 89949,
          "🤹🏻‍♂": 90013,
          "🤹🏼‍♀": 90077,
          "🤹🏼‍♂": 90141,
          "🤹🏽‍♀": 90205,
          "🤹🏽‍♂": 90269,
          "🤹🏾‍♀": 90333,
          "🤹🏾‍♂": 90397,
          "🤹🏿‍♀": 90461,
          "🤹🏿‍♂": 90525,
          "🤹‍♀": 90589,
          "🤹‍♂": 90653,
          "🎭": 29,
          "🩰": 29,
          "🎨": 29,
          "🎬": 29,
          "🎤": 29,
          "🎧": 29,
          "🎼": 29,
          "🎹": 29,
          "🥁": 29,
          "🪘": 29,
          "🎷": 29,
          "🎺": 29,
          "🪗": 29,
          "🎸": 29,
          "🪕": 29,
          "🎻": 29,
          "🎲": 29,
          "♟": 29,
          "🎯": 29,
          "🎳": 29,
          "🎮": 29,
          "🎰": 29,
          "🧩": 29,
          "🚗": 29,
          "🚕": 29,
          "🚙": 29,
          "🚌": 29,
          "🚎": 29,
          "🏎": 29,
          "🚓": 29,
          "🚑": 29,
          "🚒": 29,
          "🚐": 29,
          "🛻": 29,
          "🚚": 29,
          "🚛": 29,
          "🚜": 29,
          "🦯": 29,
          "🦽": 29,
          "🦼": 29,
          "🛴": 29,
          "🚲": 29,
          "🛵": 29,
          "🏍": 29,
          "🛺": 29,
          "🚨": 29,
          "🚔": 29,
          "🚍": 29,
          "🚘": 29,
          "🚖": 29,
          "🚡": 29,
          "🚠": 29,
          "🚟": 29,
          "🚃": 29,
          "🚋": 29,
          "🚞": 29,
          "🚝": 29,
          "🚄": 29,
          "🚅": 29,
          "🚈": 29,
          "🚂": 29,
          "🚆": 29,
          "🚇": 30,
          "🚊": 30,
          "🚉": 30,
          "✈": 30,
          "🛫": 30,
          "🛬": 30,
          "🛩": 30,
          "💺": 30,
          "🛰": 30,
          "🚀": 30,
          "🛸": 30,
          "🚁": 30,
          "🛶": 30,
          "⛵": 30,
          "🚤": 30,
          "🛥": 30,
          "🛳": 30,
          "⛴": 30,
          "🚢": 30,
          "⚓": 30,
          "🪝": 30,
          "⛽": 30,
          "🚧": 30,
          "🚦": 30,
          "🚥": 30,
          "🚏": 30,
          "🗺": 30,
          "🗿": 30,
          "🗽": 30,
          "🗼": 30,
          "🏰": 30,
          "🏯": 30,
          "🏟": 30,
          "🎡": 30,
          "🎢": 30,
          "🎠": 30,
          "⛲": 30,
          "⛱": 30,
          "🏖": 30,
          "🏝": 30,
          "🏜": 30,
          "🌋": 30,
          "⛰": 30,
          "🏔": 30,
          "🗻": 30,
          "🏕": 30,
          "⛺": 30,
          "🛖": 30,
          "🏠": 30,
          "🏡": 30,
          "🏘": 30,
          "🏚": 30,
          "🏗": 30,
          "🏭": 30,
          "🏢": 30,
          "🏬": 30,
          "🏣": 30,
          "🏤": 30,
          "🏥": 30,
          "🏦": 30,
          "🏨": 30,
          "🏪": 30,
          "🏫": 30,
          "🏩": 30,
          "💒": 30,
          "🏛": 30,
          "⛪": 30,
          "🕌": 30,
          "🕍": 30,
          "🛕": 30,
          "🕋": 30,
          "⛩": 30,
          "🛤": 30,
          "🛣": 30,
          "🗾": 30,
          "🎑": 31,
          "🏞": 31,
          "🌅": 31,
          "🌄": 31,
          "🌠": 31,
          "🎇": 31,
          "🎆": 31,
          "🌇": 31,
          "🌆": 31,
          "🏙": 31,
          "🌃": 31,
          "🌌": 31,
          "🌉": 31,
          "🌁": 31,
          "⌚": 31,
          "📱": 31,
          "📲": 31,
          "💻": 31,
          "⌨": 31,
          "🖥": 31,
          "🖨": 31,
          "🖱": 31,
          "🖲": 31,
          "🕹": 31,
          "🗜": 31,
          "💽": 31,
          "💾": 31,
          "💿": 31,
          "📀": 31,
          "📼": 31,
          "📷": 31,
          "📸": 31,
          "📹": 31,
          "🎥": 31,
          "📽": 31,
          "🎞": 31,
          "📞": 31,
          "☎": 31,
          "📟": 31,
          "📠": 31,
          "📺": 31,
          "📻": 31,
          "🎙": 31,
          "🎚": 31,
          "🎛": 31,
          "🧭": 31,
          "⏱": 31,
          "⏲": 31,
          "⏰": 31,
          "🕰": 31,
          "⌛": 31,
          "⏳": 31,
          "📡": 31,
          "🔋": 31,
          "🔌": 31,
          "💡": 31,
          "🔦": 31,
          "🕯": 31,
          "🪔": 31,
          "🧯": 31,
          "🛢": 31,
          "💸": 31,
          "💵": 31,
          "💴": 31,
          "💶": 31,
          "💷": 31,
          "🪙": 31,
          "💰": 31,
          "💳": 31,
          "💎": 31,
          "⚖": 31,
          "🪜": 31,
          "🧰": 31,
          "🪛": 31,
          "🔧": 31,
          "🔨": 32,
          "⚒": 32,
          "🛠": 32,
          "⛏": 32,
          "🪚": 32,
          "🔩": 32,
          "⚙": 32,
          "🪤": 32,
          "🧱": 32,
          "⛓": 32,
          "🧲": 32,
          "🔫": 32,
          "💣": 32,
          "🧨": 32,
          "🪓": 32,
          "🔪": 32,
          "🗡": 32,
          "⚔": 32,
          "🛡": 32,
          "🚬": 32,
          "⚰": 32,
          "🪦": 32,
          "⚱": 32,
          "🏺": 32,
          "🔮": 32,
          "📿": 32,
          "🧿": 32,
          "💈": 32,
          "⚗": 32,
          "🔭": 32,
          "🔬": 32,
          "🕳": 32,
          "🩹": 32,
          "🩺": 32,
          "💊": 32,
          "💉": 32,
          "🩸": 32,
          "🧬": 32,
          "🦠": 32,
          "🧫": 32,
          "🧪": 32,
          "🌡": 32,
          "🧹": 32,
          "🪠": 32,
          "🧺": 32,
          "🧻": 32,
          "🚽": 32,
          "🚰": 32,
          "🚿": 32,
          "🛁": 32,
          "🛀": 32,
          "🛀🏻": 90720,
          "🛀🏼": 90784,
          "🛀🏽": 90848,
          "🛀🏾": 90912,
          "🛀🏿": 90976,
          "🧼": 32,
          "🪥": 32,
          "🪒": 32,
          "🧽": 32,
          "🪣": 32,
          "🧴": 32,
          "🛎": 32,
          "🔑": 32,
          "🗝": 32,
          "🚪": 32,
          "🪑": 32,
          "🛋": 32,
          "🛏": 32,
          "🛌": 32,
          "🛌🏻": 91040,
          "🛌🏼": 91104,
          "🛌🏽": 91168,
          "🛌🏾": 91232,
          "🛌🏿": 91296,
          "🧸": 33,
          "🪆": 33,
          "🖼": 33,
          "🪞": 33,
          "🪟": 33,
          "🛍": 33,
          "🛒": 33,
          "🎁": 33,
          "🎈": 33,
          "🎏": 33,
          "🎀": 33,
          "🪄": 33,
          "🪅": 33,
          "🎊": 33,
          "🎎": 33,
          "🏮": 33,
          "🎐": 33,
          "🧧": 33,
          "✉": 33,
          "📩": 33,
          "📨": 33,
          "📧": 33,
          "💌": 33,
          "📥": 33,
          "📤": 33,
          "📦": 33,
          "🏷": 33,
          "🪧": 33,
          "📪": 33,
          "📫": 33,
          "📬": 33,
          "📭": 33,
          "📮": 33,
          "📯": 33,
          "📜": 33,
          "📃": 33,
          "📄": 33,
          "📑": 33,
          "🧾": 33,
          "📊": 33,
          "📈": 33,
          "📉": 33,
          "🗒": 33,
          "🗓": 33,
          "📆": 33,
          "📅": 33,
          "🗑": 33,
          "📇": 33,
          "🗃": 33,
          "🗳": 33,
          "🗄": 33,
          "📋": 33,
          "📁": 33,
          "📂": 33,
          "🗂": 33,
          "🗞": 33,
          "📰": 33,
          "📓": 33,
          "📔": 33,
          "📒": 33,
          "📕": 33,
          "📗": 33,
          "📘": 33,
          "📙": 33,
          "📚": 33,
          "📖": 33,
          "🔖": 33,
          "🧷": 33,
          "🔗": 33,
          "📎": 33,
          "🖇": 33,
          "📐": 33,
          "📏": 33,
          "🧮": 33,
          "📌": 33,
          "📍": 34,
          "✂": 34,
          "🖊": 34,
          "🖋": 34,
          "✒": 34,
          "🖌": 34,
          "🖍": 34,
          "📝": 34,
          "✏": 34,
          "🔍": 34,
          "🔎": 34,
          "🔏": 34,
          "🔐": 34,
          "🔒": 34,
          "🔓": 34,
          "🧡": 34,
          "💛": 34,
          "💚": 34,
          "💙": 34,
          "💜": 34,
          "🖤": 34,
          "🤍": 34,
          "🤎": 34,
          "❤‍🔥": 91362,
          "❤‍🩹": 91426,
          "❣": 34,
          "💓": 34,
          "💗": 34,
          "💘": 34,
          "💝": 34,
          "💟": 34,
          "☮": 34,
          "✝": 34,
          "☪": 34,
          "🕉": 34,
          "☸": 34,
          "✡": 34,
          "🔯": 34,
          "🕎": 34,
          "☯": 34,
          "☦": 34,
          "🛐": 34,
          "⛎": 34,
          "♈": 34,
          "♉": 34,
          "♊": 34,
          "♋": 34,
          "♌": 34,
          "♍": 34,
          "♎": 34,
          "♏": 34,
          "♐": 34,
          "♑": 34,
          "♒": 34,
          "♓": 34,
          "🆔": 34,
          "⚛": 34,
          "🉑": 34,
          "☢": 34,
          "☣": 34,
          "📴": 34,
          "📳": 34,
          "🈶": 34,
          "🈚": 34,
          "🈸": 34,
          "🈺": 34,
          "🈷": 34,
          "✴": 34,
          "🆚": 34,
          "💮": 34,
          "🉐": 34,
          "㊙": 34,
          "㊗": 34,
          "🈴": 34,
          "🈵": 34,
          "🈹": 35,
          "🈲": 35,
          "🅰": 35,
          "🅱": 35,
          "🆎": 35,
          "🆑": 35,
          "🅾": 35,
          "🆘": 35,
          "❌": 35,
          "⭕": 35,
          "🛑": 35,
          "⛔": 35,
          "📛": 35,
          "🚫": 35,
          "💯": 35,
          "💢": 35,
          "♨": 35,
          "🚷": 35,
          "🚯": 35,
          "🚳": 35,
          "🚱": 35,
          "🔞": 35,
          "📵": 35,
          "🚭": 35,
          "❗": 35,
          "❕": 35,
          "❓": 35,
          "❔": 35,
          "‼": 35,
          "⁉": 35,
          "🔅": 35,
          "🔆": 35,
          "〽": 35,
          "⚠": 35,
          "🚸": 35,
          "🔱": 35,
          "⚜": 35,
          "🔰": 35,
          "♻": 35,
          "✅": 35,
          "🈯": 35,
          "💹": 35,
          "❇": 35,
          "✳": 35,
          "❎": 35,
          "🌐": 35,
          "💠": 35,
          "Ⓜ": 35,
          "🌀": 35,
          "💤": 35,
          "🏧": 35,
          "🚾": 35,
          "♿": 35,
          "🅿": 35,
          "🛗": 35,
          "🈳": 35,
          "🈂": 35,
          "🛂": 35,
          "🛃": 35,
          "🛄": 35,
          "🛅": 35,
          "🚹": 35,
          "🚺": 35,
          "🚼": 35,
          "⚧": 35,
          "🚻": 35,
          "🚮": 35,
          "🎦": 35,
          "📶": 35,
          "🈁": 35,
          "🔣": 35,
          ℹ: 35,
          "🔤": 35,
          "🔡": 35,
          "🔠": 35,
          "🆖": 36,
          "🆗": 36,
          "🆙": 36,
          "🆒": 36,
          "🆕": 36,
          "🆓": 36,
          "0⃣": 91492,
          "1⃣": 91556,
          "2⃣": 91620,
          "3⃣": 91684,
          "4⃣": 91748,
          "5⃣": 91812,
          "6⃣": 91876,
          "7⃣": 91940,
          "8⃣": 92004,
          "9⃣": 92068,
          "🔟": 36,
          "🔢": 36,
          "#⃣": 92132,
          "*⃣": 92196,
          "⏏": 36,
          "▶": 36,
          "⏸": 36,
          "⏯": 36,
          "⏹": 36,
          "⏺": 36,
          "⏭": 36,
          "⏮": 36,
          "⏩": 36,
          "⏪": 36,
          "⏫": 36,
          "⏬": 36,
          "◀": 36,
          "🔼": 36,
          "🔽": 36,
          "➡": 36,
          "⬅": 36,
          "⬆": 36,
          "⬇": 36,
          "↗": 36,
          "↘": 36,
          "↙": 36,
          "↖": 36,
          "↕": 36,
          "↔": 36,
          "↪": 36,
          "↩": 36,
          "⤴": 36,
          "⤵": 36,
          "🔀": 36,
          "🔁": 36,
          "🔂": 36,
          "🔄": 36,
          "🔃": 36,
          "🎵": 36,
          "🎶": 36,
          "➕": 36,
          "➖": 36,
          "➗": 36,
          "✖": 36,
          "♾": 36,
          "💲": 36,
          "💱": 36,
          "™": 36,
          "©": 36,
          "®": 36,
          "👁‍🗨": 92260,
          "🔚": 36,
          "🔙": 36,
          "🔛": 36,
          "🔝": 36,
          "🔜": 36,
          "〰": 36,
          "➰": 36,
          "➿": 36,
          "✔": 37,
          "☑": 37,
          "🔘": 37,
          "🔴": 37,
          "🟠": 37,
          "🟡": 37,
          "🟢": 37,
          "🔵": 37,
          "🟣": 37,
          "⚫": 37,
          "⚪": 37,
          "🟤": 37,
          "🔺": 37,
          "🔻": 37,
          "🔸": 37,
          "🔹": 37,
          "🔶": 37,
          "🔷": 37,
          "🔳": 37,
          "🔲": 37,
          "▪": 37,
          "▫": 37,
          "◾": 37,
          "◽": 37,
          "◼": 37,
          "◻": 37,
          "🟥": 37,
          "🟧": 37,
          "🟨": 37,
          "🟩": 37,
          "🟦": 37,
          "🟪": 37,
          "⬛": 37,
          "⬜": 37,
          "🟫": 37,
          "🔈": 37,
          "🔇": 37,
          "🔉": 37,
          "🔊": 37,
          "🔔": 37,
          "🔕": 37,
          "📣": 37,
          "📢": 37,
          "💬": 37,
          "💭": 37,
          "🗯": 37,
          "♠": 37,
          "♣": 37,
          "♦": 37,
          "🃏": 37,
          "🎴": 37,
          "🀄": 37,
          "🕐": 37,
          "🕑": 37,
          "🕒": 37,
          "🕓": 37,
          "🕔": 37,
          "🕕": 37,
          "🕖": 37,
          "🕗": 37,
          "🕘": 37,
          "🕙": 37,
          "🕚": 37,
          "🕛": 37,
          "🕜": 37,
          "🕝": 37,
          "🕞": 37,
          "🕟": 37,
          "🕠": 37,
          "🕡": 37,
          "🕢": 37,
          "🕣": 37,
          "🕤": 37,
          "🕥": 37,
          "🕦": 37,
          "🕧": 38,
          "🏳": 38,
          "🏴": 38,
          "🏴‍☠": 92326,
          "🏁": 38,
          "🚩": 38,
          "🏳‍🌈": 92390,
          "🏳‍⚧": 92454,
          "🏳‍🟧‍⬛‍🟧": 92518,
          "🇺🇳": 92582,
          "🇦🇫": 92646,
          "🇦🇽": 92710,
          "🇦🇱": 92774,
          "🇩🇿": 92838,
          "🇦🇸": 92902,
          "🇦🇩": 92966,
          "🇦🇴": 93030,
          "🇦🇮": 93094,
          "🇦🇶": 93158,
          "🇦🇬": 93222,
          "🇦🇷": 93286,
          "🇦🇲": 93350,
          "🇦🇼": 93414,
          "🇦🇺": 93478,
          "🇦🇹": 93542,
          "🇦🇿": 93606,
          "🇧🇸": 93670,
          "🇧🇭": 93734,
          "🇧🇩": 93798,
          "🇧🇧": 93862,
          "🇧🇾": 93926,
          "🇧🇪": 93990,
          "🇧🇿": 94054,
          "🇧🇯": 94118,
          "🇧🇲": 94182,
          "🇧🇹": 94246,
          "🇧🇴": 94310,
          "🇧🇦": 94374,
          "🇧🇼": 94438,
          "🇧🇷": 94502,
          "🇻🇬": 94566,
          "🇧🇳": 94630,
          "🇧🇬": 94694,
          "🇧🇫": 94758,
          "🇧🇮": 94822,
          "🇰🇭": 94886,
          "🇨🇲": 94950,
          "🇨🇦": 95014,
          "🇮🇨": 95078,
          "🇨🇻": 95142,
          "🇧🇶": 95206,
          "🇰🇾": 95270,
          "🇨🇫": 95334,
          "🇹🇩": 95398,
          "🇮🇴": 95462,
          "🇨🇱": 95526,
          "🇨🇳": 95590,
          "🇨🇽": 95654,
          "🇨🇨": 95718,
          "🇨🇴": 95782,
          "🇰🇲": 95846,
          "🇨🇬": 95910,
          "🇨🇩": 95974,
          "🇨🇰": 96038,
          "🇨🇷": 96102,
          "🇨🇮": 96166,
          "🇭🇷": 96230,
          "🇨🇺": 96294,
          "🇨🇼": 96358,
          "🇨🇾": 96422,
          "🇨🇿": 96486,
          "🇩🇰": 96550,
          "🇩🇯": 96614,
          "🇩🇲": 96678,
          "🇩🇴": 96742,
          "🇪🇨": 96807,
          "🇪🇬": 96871,
          "🇸🇻": 96935,
          "🇬🇶": 96999,
          "🇪🇷": 97063,
          "🇪🇪": 97127,
          "🇸🇿": 97191,
          "🇪🇹": 97255,
          "🇪🇺": 97319,
          "🇫🇰": 97383,
          "🇫🇴": 97447,
          "🇫🇯": 97511,
          "🇫🇮": 97575,
          "🇫🇷": 97639,
          "🇬🇫": 97703,
          "🇵🇫": 97767,
          "🇹🇫": 97831,
          "🇬🇦": 97895,
          "🇬🇲": 97959,
          "🇬🇪": 98023,
          "🇩🇪": 98087,
          "🇬🇭": 98151,
          "🇬🇮": 98215,
          "🇬🇷": 98279,
          "🇬🇱": 98343,
          "🇬🇩": 98407,
          "🇬🇵": 98471,
          "🇬🇺": 98535,
          "🇬🇹": 98599,
          "🇬🇬": 98663,
          "🇬🇳": 98727,
          "🇬🇼": 98791,
          "🇬🇾": 98855,
          "🇭🇹": 98919,
          "🇭🇳": 98983,
          "🇭🇰": 99047,
          "🇭🇺": 99111,
          "🇮🇸": 99175,
          "🇮🇳": 99239,
          "🇮🇩": 99303,
          "🇮🇷": 99367,
          "🇮🇶": 99431,
          "🇮🇪": 99495,
          "🇮🇲": 99559,
          "🇮🇱": 99623,
          "🇮🇹": 99687,
          "🇯🇲": 99751,
          "🇯🇵": 99815,
          "🎌": 39,
          "🇯🇪": 99879,
          "🇯🇴": 99943,
          "🇰🇿": 100007,
          "🇰🇪": 100071,
          "🇰🇮": 100135,
          "🇽🇰": 100199,
          "🇰🇼": 100263,
          "🇰🇬": 100327,
          "🇱🇦": 100391,
          "🇱🇻": 100455,
          "🇱🇧": 100519,
          "🇱🇸": 100583,
          "🇱🇷": 100647,
          "🇱🇾": 100711,
          "🇱🇮": 100775,
          "🇱🇹": 100839,
          "🇱🇺": 100903,
          "🇲🇴": 100967,
          "🇲🇬": 101031,
          "🇲🇼": 101095,
          "🇲🇾": 101159,
          "🇲🇻": 101223,
          "🇲🇱": 101287,
          "🇲🇹": 101351,
          "🇲🇭": 101415,
          "🇲🇶": 101479,
          "🇲🇷": 101544,
          "🇲🇺": 101608,
          "🇾🇹": 101672,
          "🇲🇽": 101736,
          "🇫🇲": 101800,
          "🇲🇩": 101864,
          "🇲🇨": 101928,
          "🇲🇳": 101992,
          "🇲🇪": 102056,
          "🇲🇸": 102120,
          "🇲🇦": 102184,
          "🇲🇿": 102248,
          "🇲🇲": 102312,
          "🇳🇦": 102376,
          "🇳🇷": 102440,
          "🇳🇵": 102504,
          "🇳🇱": 102568,
          "🇳🇨": 102632,
          "🇳🇿": 102696,
          "🇳🇮": 102760,
          "🇳🇪": 102824,
          "🇳🇬": 102888,
          "🇳🇺": 102952,
          "🇳🇫": 103016,
          "🇰🇵": 103080,
          "🇲🇰": 103144,
          "🇲🇵": 103208,
          "🇳🇴": 103272,
          "🇴🇲": 103336,
          "🇵🇰": 103400,
          "🇵🇼": 103464,
          "🇵🇸": 103528,
          "🇵🇦": 103592,
          "🇵🇬": 103656,
          "🇵🇾": 103720,
          "🇵🇪": 103784,
          "🇵🇭": 103848,
          "🇵🇳": 103912,
          "🇵🇱": 103976,
          "🇵🇹": 104040,
          "🇵🇷": 104104,
          "🇶🇦": 104168,
          "🇷🇪": 104232,
          "🇷🇴": 104296,
          "🇷🇺": 104360,
          "🇷🇼": 104424,
          "🇼🇸": 104488,
          "🇸🇲": 104552,
          "🇸🇹": 104616,
          "🇸🇦": 104680,
          "🇸🇳": 104744,
          "🇷🇸": 104808,
          "🇸🇨": 104872,
          "🇸🇱": 104936,
          "🇸🇬": 105e3,
          "🇸🇽": 105064,
          "🇸🇰": 105128,
          "🇸🇮": 105192,
          "🇬🇸": 105256,
          "🇸🇧": 105320,
          "🇸🇴": 105384,
          "🇿🇦": 105448,
          "🇰🇷": 105512,
          "🇸🇸": 105576,
          "🇪🇸": 105640,
          "🇱🇰": 105704,
          "🇧🇱": 105768,
          "🇸🇭": 105832,
          "🇰🇳": 105896,
          "🇱🇨": 105960,
          "🇵🇲": 106024,
          "🇻🇨": 106088,
          "🇸🇩": 106152,
          "🇸🇷": 106216,
          "🇸🇪": 106280,
          "🇨🇭": 106345,
          "🇸🇾": 106409,
          "🇹🇼": 106473,
          "🇹🇯": 106537,
          "🇹🇿": 106601,
          "🇹🇭": 106665,
          "🇹🇱": 106729,
          "🇹🇬": 106793,
          "🇹🇰": 106857,
          "🇹🇴": 106921,
          "🇹🇹": 106985,
          "🇹🇳": 107049,
          "🇹🇷": 107113,
          "🇹🇲": 107177,
          "🇹🇨": 107241,
          "🇹🇻": 107305,
          "🇻🇮": 107369,
          "🇺🇬": 107433,
          "🇺🇦": 107497,
          "🇦🇪": 107561,
          "🇬🇧": 107625,
          "🏴󠁧󠁢󠁥󠁮󠁧󠁿": 107689,
          "🏴󠁧󠁢󠁳󠁣󠁴󠁿": 107753,
          "🏴󠁧󠁢󠁷󠁬󠁳󠁿": 107817,
          "🇺🇸": 107881,
          "🏴󠁵󠁳󠁴󠁸󠁿": 107945,
          "🇺🇾": 108009,
          "🇺🇿": 108073,
          "🇻🇺": 108137,
          "🇻🇦": 108201,
          "🇻🇪": 108265,
          "🇻🇳": 108329,
          "🇼🇫": 108393,
          "🇪🇭": 108457,
          "🇾🇪": 108521,
          "🇿🇲": 108585,
          "🇿🇼": 108649,
          "🇦🇨": 108713,
          "🇧🇻": 108777,
          "🇨🇵": 108841,
          "🇩🇬": 108905,
          "🇪🇦": 108969,
          "🇭🇲": 109033,
          "🇲🇫": 109097,
          "🇸🇯": 109161,
          "🇹🇦": 109225,
          "🇺🇲": 109289,
          "🏻": 41,
          "🏼": 41,
          "🏽": 41,
          "🏾": 41,
          "🏿": 41,
          "👨🏼‍🤝‍👨🏻": 109353,
          "👨🏽‍🤝‍👨🏻": 109417,
          "👨🏾‍🤝‍👨🏻": 109481,
          "👨🏿‍🤝‍👨🏻": 109545,
          "👨🏽‍🤝‍👨🏼": 109609,
          "👨🏾‍🤝‍👨🏼": 109673,
          "👨🏿‍🤝‍👨🏼": 109737,
          "👨🏾‍🤝‍👨🏽": 109801,
          "👨🏿‍🤝‍👨🏽": 109865,
          "👨🏿‍🤝‍👨🏾": 109929,
          "👩🏻‍🤝‍👨🏼": 109993,
          "👩🏽‍🤝‍👨🏼": 110057,
          "👩🏾‍🤝‍👨🏼": 110121,
          "👩🏿‍🤝‍👨🏼": 110185,
          "👩🏻‍🤝‍👨🏽": 110249,
          "👩🏼‍🤝‍👨🏽": 110313,
          "👩🏾‍🤝‍👨🏽": 110377,
          "👩🏿‍🤝‍👨🏽": 110441,
          "👩🏻‍🤝‍👨🏾": 110505,
          "👩🏼‍🤝‍👨🏾": 110569,
          "👩🏽‍🤝‍👨🏾": 110633,
          "👩🏿‍🤝‍👨🏾": 110697,
          "👩🏻‍🤝‍👨🏿": 110762,
          "👩🏼‍🤝‍👨🏿": 110826,
          "👩🏽‍🤝‍👨🏿": 110890,
          "👩🏾‍🤝‍👨🏿": 110954,
          "👩🏼‍🤝‍👨🏻": 111018,
          "👩🏽‍🤝‍👨🏻": 111082,
          "👩🏾‍🤝‍👨🏻": 111146,
          "👩🏿‍🤝‍👨🏻": 111210,
          "👩🏼‍🤝‍👩🏻": 111274,
          "👩🏽‍🤝‍👩🏻": 111338,
          "👩🏾‍🤝‍👩🏻": 111402,
          "👩🏿‍🤝‍👩🏻": 111466,
          "👩🏽‍🤝‍👩🏼": 111530,
          "👩🏾‍🤝‍👩🏼": 111594,
          "👩🏿‍🤝‍👩🏼": 111658,
          "👩🏾‍🤝‍👩🏽": 111722,
          "👩🏿‍🤝‍👩🏽": 111786,
          "👩🏿‍🤝‍👩🏾": 111850,
          "👪": 42,
          "🗨": 42,
          "🧑🏻‍🤝‍🧑🏻": 111914,
          "🧑🏼‍🤝‍🧑🏻": 111978,
          "🧑🏽‍🤝‍🧑🏻": 112042,
          "🧑🏾‍🤝‍🧑🏻": 112106,
          "🧑🏿‍🤝‍🧑🏻": 112170,
          "🧑🏼‍🤝‍🧑🏼": 112234,
          "🧑🏽‍🤝‍🧑🏼": 112298,
          "🧑🏾‍🤝‍🧑🏼": 112362,
          "🧑🏿‍🤝‍🧑🏼": 112426,
          "🧑🏽‍🤝‍🧑🏽": 112490,
          "🧑🏾‍🤝‍🧑🏽": 112554,
          "🧑🏿‍🤝‍🧑🏽": 112618,
          "🧑🏾‍🤝‍🧑🏾": 112682,
          "🧑🏿‍🤝‍🧑🏾": 112746,
          "🧑🏿‍🤝‍🧑🏿": 112810,
          "🧑‍🤝‍🧑": 112874,
          "♀": 42,
          "♂": 42,
          "⚕": 42,
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "f", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return f;
        });
      var r = n(9),
        i = n.n(r);
      function o(t) {
        return null == t ? 86400 : Math.max(600, Math.min(604800, t));
      }
      function u(t) {
        var e = [];
        return (
          Object.keys(t).forEach((n) => {
            var r = i()(t[n], 2),
              o = r[0],
              u = r[1];
            "number" == typeof o &&
              e.push({ configName: n, configCode: o, configDefault: u });
          }),
          e
        );
      }
      function a(t, e) {
        var n = t[e][0];
        return "number" == typeof n ? n : null;
      }
      function s(t, e) {
        var n = new Map();
        e.forEach((t) => {
          var e = t.configCode,
            r = t.configValue,
            i = t.configExpoKey;
          n.set(e, { configValue: r, configExpoKey: i });
        });
        var r = {},
          i = {};
        return (
          u(t).forEach((t) => {
            var e = t.configName,
              o = t.configCode,
              u = t.configDefault,
              a = n.get(o);
            if (null != a) {
              var s = a.configValue,
                c = a.configExpoKey,
                l = (function (t, e) {
                  switch (typeof e) {
                    case "boolean":
                      return "1" === t;
                    case "number":
                      return parseFloat(t);
                    case "string":
                      return t;
                    default:
                      return (
                        __LOG__(3)`parseValue: unsure how to read ${t}`, null
                      );
                  }
                })(s, u);
              null != l && (r[e] = l), (i[o] = null != c ? c : null);
            }
          }),
          { values: r, expoKeys: i }
        );
      }
      function c(t, e, n) {
        var r = Object.assign({}, e, t),
          i = {};
        return (
          Object.keys(r).forEach((t) => {
            null != n[t]
              ? (i[t] = r[t])
              : __LOG__(2)`maybeUpdatePropValues: deleting config ${t}`;
          }),
          i
        );
      }
      function l(t, e, n) {
        var r = Object.assign({}, e, t),
          i = {},
          o = u(n).map((t) => t.configCode),
          a = new Set(o),
          s = new Set();
        return (
          Object.keys(r).forEach((t) => {
            var n = parseInt(t, 10),
              o = e ? e[n] : null;
            a.has(n)
              ? (r[n] !== o &&
                  (__LOG__(
                    2
                  )`maybeUpdateExpoKeys: config_expo_key ${n} changed`,
                  null != o && o.trim() && s.add(o)),
                (i[n] = r[n]))
              : (__LOG__(2)`maybeUpdateExpoKeys: deleting config_expo_key ${n}`,
                null != o && o.trim() && s.add(o));
          }),
          { propExpoKeys: i, expoKeysToDelete: s }
        );
      }
      function f(t, e) {
        if (null != e) {
          var n = e;
          if (
            (t.forEach((t) => {
              n.delete(t);
            }),
            0 !== n.size)
          )
            return { internalExpoKeys: n, expoKeyStr: Array.from(n).join(",") };
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = { INT: 0, BOOL: 1, STRING: 2, FLOAT: 3 };
    },
    function (t, e, n) {
      n.d(e, "f", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "e", function () {
          return f;
        });
      var r = n(153),
        i = null;
      function o(t) {
        if (i) return i;
        throw new Error(`abProps::${t} called before startAbProps`);
      }
      function u(t, e) {
        null == i && (i = { db: t, config: e });
      }
      function a() {
        return o("getHash").db.getHash();
      }
      function s() {
        return o("getRefreshSecs")
          .db.getRefreshSecs()
          .then((t) => (0, r.f)(t));
      }
      function c() {
        return o("getConfig").config;
      }
      function l() {
        return o("getAbProps").db.getAbProps();
      }
      function f(t) {
        return o("getAbProps").db.setAbProps(t);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "j", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "g", function () {
          return v;
        }),
        n.d(e, "i", function () {
          return m;
        }),
        n.d(e, "e", function () {
          return y;
        }),
        n.d(e, "f", function () {
          return b;
        }),
        n.d(e, "h", function () {
          return _;
        }),
        n.d(e, "d", function () {
          return w;
        });
      var r,
        i = n(3),
        o = n(114),
        u = n(212),
        a = null,
        s = null;
      function c(t) {
        if (s) return s;
        throw new Error(`WamStorage::${t} called before startWamStorage`);
      }
      function l(t) {
        null == s
          ? (s = t)
          : (__LOG__(3)`startWamStorage: called again`,
            SEND_LOGS("startWamStorage"));
      }
      function f() {
        (0, o.a)(), null != r && r.close(), (s = null), (a = null);
      }
      function d(t, e, n, i) {
        var s = c("initializeWAMSink"),
          l =
            (null == r &&
              (r = new (class {
                constructor() {
                  (this.as = new Map()), (this.at = new Map());
                }
                getChannelInitialized(t) {
                  return this.at.get(t) || !1;
                }
                setChannelInitialized(t) {
                  this.at.set(t, !0);
                }
                isSinkBusy(t) {
                  return this.as.get(t) || !1;
                }
                setSinkBusy(t, e) {
                  this.as.set(t, e);
                }
                close() {
                  this.as.forEach((t, e) => {
                    this.as.set(e, !1);
                  }),
                    this.at.forEach((t, e) => {
                      this.at.set(e, !1);
                    });
                }
              })()),
            r);
        if (l.getChannelInitialized(e)) return Promise.resolve();
        l.setChannelInitialized(e);
        var f = s.getStreamId(t),
          d = {
            putBuffer(t, r, i, o) {
              if (l.isSinkBusy(e))
                return (
                  __LOG__(
                    3
                  )`WamStorage: Sink flush did not happen within timeout, buffer is not saved`,
                  Promise.resolve()
                );
              l.setSinkBusy(e, !0);
              var a = (0, u.b)(t, e, f, r, i),
                c = a.bufferKey,
                d = a.meta,
                h = a.bufferRow;
              return s
                .saveBuffer(d, h, o)
                .then(() => {
                  var e = [t.streamId, t.sequenceNumber];
                  __LOG__(2)`WamStorage: Successfully put buffer ${e} to sink`,
                    i &&
                      (n(),
                      __LOG__(
                        2
                      )`WamStorage: Buffer ${c} is scheduled for send`);
                })
                .finally(() => {
                  l.setSinkBusy(e, !1);
                });
            },
          };
        return (
          null == a && (a = s.finishBuffer(f)),
          a
            .then(() => {
              if (s.getStartingSequenceNumbers)
                return (
                  s.getStartingSequenceRow, s.getStartingSequenceNumbers(e, f)
                );
              if (
                (s.getStartingSequenceRow,
                null == i ? void 0 : i.multipleSequences)
              )
                throw new Error(
                  "getStartingSequenceRow must not used when enabling support for multiple sequences"
                );
              return s.getStartingSequenceRow(f).then((t) => {
                var e = (0, u.e)(t),
                  n = new Map();
                return n.set("regular", e), n;
              });
            })
            .then((t) => {
              (0, o.d)(f, t, e, d, i),
                "private" === e &&
                  s.updatePrivateStatsIds &&
                  s.updatePrivateStatsIds().then(o.i);
            })
        );
      }
      function h(t) {
        return c("getFinishedStreamBuffers")
          .getBuffers()
          .then((e) => (0, u.d)(t, e));
      }
      var p = i.b,
        g = (t, e) => {
          var n = {
            maxRedeemCount:
              null != (null == e ? void 0 : e.maxRedeemCount) &&
              0 !== e.maxRedeemCount
                ? e.maxRedeemCount
                : 64,
            maxExpirySeconds:
              null != (null == e ? void 0 : e.maxExpirySeconds) &&
              0 !== e.maxExpirySeconds
                ? e.maxExpirySeconds
                : p,
          };
          return (0, i.n)(t.creationTs, n.maxExpirySeconds)
            ? !(
                t.redeemCount >= n.maxRedeemCount &&
                (__LOG__(
                  2
                )`The private stats token was redeemed maximum number of time. The client shall re-issue a new one`,
                1)
              )
            : (__LOG__(
                2
              )`The private stats token expired. The client shall re-issue a new one`,
              !1);
        };
      function v() {
        var t = c("getPrivateStatsToken");
        if (!t.redeemPrivateStatsToken)
          throw new Error("redeemPrivateStatsToken not implemented for WAM DB");
        return t.redeemPrivateStatsToken(g);
      }
      function m(t) {
        var e = c("savePrivateStatsToken");
        if (!e.savePrivateStatsToken)
          throw new Error("savePrivateStatsToken not implemented for WAM DB");
        return e.savePrivateStatsToken(t);
      }
      function y() {
        var t = c("privateStatsKillSwitchGetBlockedToken");
        if (!t.privateStatsKillSwitchGetBlockedToken)
          throw new Error(
            "privateStatsKillSwitchGetBlockedToken not implemented for WAM DB"
          );
        return t.privateStatsKillSwitchGetBlockedToken();
      }
      function b(t) {
        var e = c("privateStatsKillSwitchSet");
        if (!e.privateStatsKillSwitchSet)
          throw new Error(
            "privateStatsKillSwitchSet not implemented for WAM DB"
          );
        return e.privateStatsKillSwitchSet(t);
      }
      function _(t) {
        return c("removeBufferByKey").removeBufferByKey(t);
      }
      function w() {
        return c("nukeMetrics").nukeMetrics();
      }
    },
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "log", function () {
          return a;
        }),
        n.d(e, "logAsync", function () {
          return s;
        }),
        n.d(e, "initializeWAMSink", function () {
          return c;
        });
      var r = n(114),
        i = n(142),
        o = n(170),
        u = n(23);
      function a(t, e, n, o, u, a, s) {
        "private" !== t || (0, i.isPrivateChannelSetup)()
          ? (0, r.e)(t, e, n, o, u, a, s)
          : (0, i.waitForPrivateChannelSetup)().then(() => {
              (0, r.e)(t, e, n, o, u, a, s);
            });
      }
      function s(t, e, n, o, u, a, s) {
        return "private" !== t || (0, i.isPrivateChannelSetup)()
          ? (0, r.f)(t, e, n, o, u, a, s)
          : (0, i.waitForPrivateChannelSetup)().then(() =>
              (0, r.f)(t, e, n, o, u, a, s)
            );
      }
      function c(t, e, n) {
        var r = (0, u.a)("kaios_privatestats_phase3_m2_enabled")
          ? { multipleSequences: !0 }
          : void 0;
        return (0, o.c)(t, e, n, r);
      }
      n.d(e, "enableDebugMode", function () {
        return r.b;
      }),
        n.d(e, "initializeWAM", function () {
          return r.d;
        }),
        n.d(e, "deinitializeWAM", function () {
          return r.a;
        }),
        n.d(e, "logAttributes", function () {
          return r.g;
        }),
        n.d(e, "forceFlushBuffers", function () {
          return r.c;
        }),
        n.d(e, "rotateBuffers", function () {
          return r.h;
        });
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return v;
      }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "c", function () {
          return _;
        });
      var r = n(20),
        i = n(36),
        o = n(10),
        u = n(41),
        a = n(3),
        s = n(69),
        c = n(287),
        l = n(31),
        f = n.n(l),
        d = n(108),
        h = n(93),
        p = n(135),
        g = n(80);
      function v(t) {
        return (0, u.m)(u.g, (0, u.n)(t));
      }
      function m(t) {
        var e = t.affectedChats,
          n = t.newMsgs,
          r = t.changedMsgs,
          i = t.type,
          s = t.contacts,
          c = t.activeChatId,
          l = t.settings,
          d = t.user,
          h = t.fireAndForget;
        return (0, u.l)(u.g).then((t) => {
          var p = (function (t, e, n, r, i, u, a, s) {
              for (
                var c = {},
                  l = (0, o.s)(t, (t) => t.id),
                  f = (0, o.s)(a, (t) => t.data.chatId),
                  d = e.length - 1;
                d >= 0;
                d--
              ) {
                var h = e[d];
                if (h.chatId !== i && !c[h.chatId]) {
                  var p = l[h.chatId];
                  if (!p) {
                    __LOG__(4)`No chat found for notification ${h.chatId}`,
                      SEND_LOGS("no-chat-found", 0.01);
                    continue;
                  }
                  var g = y(h, p, r, u, s);
                  g && (c[h.chatId] = g);
                }
              }
              for (var v = n.length - 1; v >= 0; v--) {
                var m = n[v],
                  b = m.msg,
                  _ = l[b.chatId];
                if (_) {
                  if (m.recent && !c[b.chatId] && b.chatId !== i) {
                    var w = y(b, _, r, u, s);
                    w && (c[b.chatId] = w);
                  } else if ("revoked" === b.content.type) {
                    var k = c[b.chatId];
                    if (k && k.hasPreview && k.msgId === b.id)
                      delete c[b.chatId];
                    else if (!k && f[_.id]) {
                      var C = f[_.id],
                        E = C.data,
                        S = E.msgId;
                      E.hasPreview && S === b.id && C.close();
                    }
                  }
                } else
                  __LOG__(4)`No chat found for notification ${b.chatId}`,
                    SEND_LOGS("no-chat-found", 0.01);
              }
              return (0, o.x)(c);
            })(e, n, r, s, c, l, t, d),
            g = [];
          return (
            p.forEach((t) => {
              if (!t.silent)
                switch (i) {
                  case "short":
                    g.push(
                      (function (t) {
                        var e = t.chatId,
                          n = {
                            body: t.body,
                            tag: (0, u.n)(e),
                            silent: t.silent,
                            data: void 0,
                          };
                        return (
                          (0, u.q)(t.title, n), { chatId: e, ts: (0, a.E)() }
                        );
                      })(t)
                    );
                    break;
                  case "alert":
                    g.push(
                      (function (t) {
                        var e = t.chatId;
                        return (0, u.p)(t.title, {
                          body: t.body,
                          data: {
                            action: u.g,
                            chatId: e,
                            msgId: t.msgId,
                            count: t.count,
                            hasPreview: t.hasPreview,
                          },
                          tag: (0, u.n)(e),
                          silent: t.silent,
                        }).then(() => ({ chatId: e, ts: (0, a.E)() }));
                      })(t)
                    );
                    break;
                  default:
                    (0, f.a)(i);
                }
            }),
            Promise.all(g).then((t) => {
              t.length > 0 &&
                h("backend", "chatsNotified", { chatNotifications: t });
            })
          );
        });
      }
      function y(t, e, n, o, s) {
        if (e) {
          if ("GROUP" === e.type) {
            if (!o.showGroups) return;
            if (
              (0, i.k)(e) &&
              !(function (t, e) {
                return null != t.mentionedJids && t.mentionedJids.includes(e);
              })(t, s.jid)
            )
              return;
          }
          if ("ONE_TO_ONE" === e.type) {
            if (!o.showOneToOne) return;
            if ((0, i.k)(e)) return;
          }
          var c = t.meta;
          if (!c.fromMe) {
            var l = c.author;
            if (l) {
              var d = (function (t) {
                switch (t.type) {
                  case "vcard":
                  case "text":
                  case "image":
                  case "sticker":
                  case "video":
                  case "gif":
                  case "voice":
                  case "location":
                  case "group_invite":
                  case "document":
                  case "revoked":
                  case "rich_hsm":
                    return t;
                  case "gp2":
                  case "biz":
                  case "futureproof":
                  case "ciphertext":
                  case "placeholder":
                  case "keyschanged":
                  case "privacy":
                  case "ephemeral_change":
                  case "ephemeral_change_fail":
                  case "default-disappearing-mode":
                  case "contact_block_change":
                    return;
                  default:
                    return (0, f.a)(t);
                }
              })(t.content);
              if (d)
                return "GROUP" === e.type
                  ? (function (t, e, n, i, o, s, c) {
                      var l = i.msgInfo.unreadMsgCount,
                        f = i.groupInfo.title,
                        d = k(i, s),
                        h =
                          d ||
                          (0, r.k)([
                            (0, r.m)((0, u.o)(o, t)),
                            (0, r.m)(_(n, o, e.mentionedJids, c)),
                            9,
                          ]),
                        p = (function (t) {
                          return (
                            null != t.lastNotified &&
                            (0, a.n)(
                              t.lastNotified,
                              (function (t) {
                                if ("GROUP" !== t.type) return 0;
                                var e = t.groupInfo.participants.length;
                                return Math.min(120, 30 + 5 * e);
                              })(t)
                            )
                          );
                        })(i);
                      return {
                        chatId: i.id,
                        msgId: e.id,
                        title: f,
                        body: h,
                        silent: p,
                        count: l,
                        hasPreview: null == d,
                      };
                    })(l, t, d, e, n, o, s)
                  : (function (t, e, n, r, i, o, a) {
                      var s = r.msgInfo.unreadMsgCount,
                        c = (0, u.o)(i, t),
                        l = k(r, o),
                        f = l || _(n, i, e.mentionedJids, a);
                      return {
                        chatId: r.id,
                        msgId: e.id,
                        title: c,
                        body: f,
                        count: s,
                        hasPreview: null == l,
                      };
                    })(l, t, d, e, n, o, s);
            }
          }
        } else __LOG__(4)`Somehow msg ${t.id} notified without a chat`;
      }
      function b(t, e, n, r) {
        return (0, h.c)((0, d.c)(t), (0, h.e)(t, n), e, r);
      }
      function _(t, e, n, i) {
        switch (t.type) {
          case "vcard":
            return (
              "👤 " +
              w(
                t.total,
                t.contacts.map((t) => t.displayName)
              )
            );
          case "text":
            return b(t.text, e, n, i);
          case "sticker":
            return "📃 " + (0, r.k)(886);
          case "image":
            return null != t.viewOnceState
              ? "① " + (0, r.k)(972)
              : "📷 " + (t.caption ? b(t.caption, e, n, i) : (0, r.k)(586));
          case "video":
            return null != t.viewOnceState
              ? "① " + (0, r.k)(973)
              : "🎥 " + (t.caption ? b(t.caption, e, n, i) : (0, r.k)(964));
          case "gif":
            return "🎁 " + (t.caption ? b(t.caption, e, n, i) : (0, r.k)(337));
          case "voice":
            return t.isPtt
              ? "🎤 " + (0, r.k)([(0, s.b)(t.duration), 256])
              : "🎵 " + (0, r.k)([(0, s.b)(t.duration), 8]);
          case "location":
            return "📍 " + (t.name ? (0, d.c)(t.name) : (0, r.k)(481));
          case "group_invite":
            return "👥 " + (t.caption ? (0, d.c)(t.caption) : (0, r.k)(464));
          case "rich_hsm":
            var o = t.richContent,
              u = b((0, p.c)(t.title, t.content, null), e, n, i);
            return o
              ? "image" === o.type
                ? "📷 " + u
                : "video" === o.type
                ? "🎥 " + u
                : "document" === o.type
                ? "📄 " + u
                : (o.type, "📍 " + u)
              : u;
          case "document":
            return t.isVCard && t.pages && t.fileName
              ? "👤 " + w(t.pages, [(0, g.i)(t.fileName)])
              : "📄 " + (0, c.a)(t);
          default:
            return t.type, (0, r.k)(545);
        }
      }
      function w(t, e) {
        return (0, i.n)(t, e, {
          onEmpty: "",
          onSingleContact: (t) => t,
          onOneAndOthers: (t, e) => (0, r.k)([e, t, 252]),
          onOthers: (t) => (0, r.k)([t, 253]),
        });
      }
      function k(t, e) {
        return t.msgInfo.unreadMsgCount > 99
          ? (0, r.k)(956)
          : !e.showPreviews || t.msgInfo.unreadMsgCount > 1
          ? (0, r.k)([t.msgInfo.unreadMsgCount, 250])
          : void 0;
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      function r(t) {
        var e,
          n,
          r = !1;
        return function (i) {
          return (r && i === n) || ((e = t(i)), (n = i), (r = !0)), e;
        };
      }
      function i(t) {
        var e,
          n,
          r,
          i = !1;
        return function (o, u) {
          return (
            (i && o === n && u === r) ||
              ((e = t(o, u)), (n = o), (r = u), (i = !0)),
            e
          );
        };
      }
      function o(t) {
        var e,
          n,
          r,
          i,
          o = !1;
        return function (u, a, s) {
          return (
            (o && u === n && a === r && s === i) ||
              ((e = t(u, a, s)), (n = u), (r = a), (i = s), (o = !0)),
            e
          );
        };
      }
      function u(t) {
        var e,
          n,
          r,
          i,
          o,
          u = !1;
        return function (a, s, c, l) {
          return (
            (u && a === n && s === r && c === i && l === o) ||
              ((e = t(a, s, c, l)),
              (n = a),
              (r = s),
              (i = c),
              (o = l),
              (u = !0)),
            e
          );
        };
      }
      function a(t) {
        var e,
          n,
          r,
          i,
          o,
          u,
          a = !1;
        return function (s, c, l, f, d) {
          return (
            (a && s === n && c === r && l === i && f === o && d === u) ||
              ((e = t(s, c, l, f, d)),
              (n = s),
              (r = c),
              (i = l),
              (o = f),
              (u = d),
              (a = !0)),
            e
          );
        };
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return a;
        });
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return u;
        });
      var r = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
      function i(t) {
        var e = t.match(r);
        return e ? e.length : 0;
      }
      function o(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = t.match(r);
        return i ? i.slice(Math.max(0, e), Math.max(0, n)).join("") : "";
      }
      function u(t) {
        return t.match(r) || [];
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return c;
        });
      var r = n(14),
        i = "keyValuePairs",
        o = "me",
        u = "deleting",
        a = "tempBan",
        s = "clockSkew";
      function c() {
        var t;
        return new Promise((e, n) => {
          ((t = self.indexedDB.open(r.p, 10)).onerror = (t) => {
            n(new Error("getInfoTable failed to load"));
          }),
            (t.onsuccess = e),
            (t.onupgradeneeded = (t) => {
              try {
                var e = t.target.result;
                (e.onerror = (t) => {
                  n(new Error("getInfoTable failed to init"));
                }),
                  e.createObjectStore(i, { keyPath: "key" });
              } catch (t) {
                n(t);
              }
            });
        }).then(() => {
          var e = t.result;
          return (
            (e.onversionchange = () => {
              e.close();
            }),
            new (class {
              constructor(t) {
                this.BC = t;
              }
              readAllEntries() {
                return (
                  (t = this),
                  new Promise((n, r) => {
                    var o = new Map(),
                      u = t.BC.transaction(i, "readonly");
                    ((e = u.objectStore(i).getAll()).onsuccess = (t) => {
                      try {
                        for (
                          var e = t.target.result, i = 0;
                          i < e.length;
                          i++
                        ) {
                          var u = e[i];
                          o.set(u.key, u.value);
                        }
                        n(o);
                      } catch (t) {
                        r(t);
                      }
                    }),
                      (e.onerror = () => {
                        r(new Error("readAllEntries failed"));
                      });
                  })
                );
                var t, e;
              }
              get(t) {
                var e;
                return new Promise((n, r) => {
                  var o = (e = this.BC.transaction(i, "readonly"))
                    .objectStore(i)
                    .get(t);
                  (e.oncomplete = () => {
                    o.result ? n(o.result.value) : n();
                  }),
                    (e.onerror = () => {
                      r(new Error("InfoTable.store failed for " + t));
                    });
                });
              }
              putOrDelete(t, e) {
                var n;
                return new Promise((r, o) => {
                  var u = (n = this.BC.transaction(i, "readwrite")).objectStore(
                    i
                  );
                  void 0 !== e ? u.put({ key: t, value: e }) : u.delete(t),
                    (n.oncomplete = () => {
                      r();
                    }),
                    (n.onerror = () => {
                      o(new Error("InfoTable.store failed for " + t));
                    });
                });
              }
              close() {
                this.BC.close();
              }
              destroyDb() {
                var t;
                return new Promise((e, n) => {
                  this.BC.close(),
                    ((t = self.indexedDB.deleteDatabase(
                      r.p
                    )).onsuccess = () => {
                      e();
                    }),
                    (t.onerror = () => {
                      n(new Error("InfoTable.deleteAll failed"));
                    });
                });
              }
            })(e)
          );
        });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = {
        in_app_support_v2_enabled: [233, !1],
        in_app_support_v2_locale_langs: [379, ""],
        in_app_support_v2_numbers: [390, ""],
        in_app_support_v2_number_prefixes: [1031, "15517868"],
        in_app_support_v2_jump_to_group: [819, !1],
        in_app_support_v2_jump_to_group_wait_time_in_ms: [974, 5e3],
        upload_status_thumb_mms_enabled: [246, !1],
        upload_document_thumb_mms_enabled: [247, !1],
        download_status_thumb_mms_enabled: [249, !1],
        download_document_thumb_mms_enabled: [250, !1],
        send_status_thumb_in_message_disabled: [252, !1],
        send_document_thumb_in_message_disabled: [253, !1],
        send_link_thumb_in_message_disabled: [254, !1],
        md_icdc_enabled: [309, !1],
        md_icdc_hash_length: [310, 10],
        important_messages: [363, !1],
        ephemeral_media_private: [382, !1],
        ephemeral_24h_duration: [407, !1],
        disappearing_mode: [536, !1],
        ephemeral_allow_group_members: [432, !1],
        num_days_key_index_list_expiration: [730, 35],
        num_days_before_device_expiry_check: [731, 7],
        in_app_ban_appeals_enabled: [622, !1],
        status_psa_expiration: [696, !1],
        ptt_conversation_waveform: [637, !1],
        ptt_waveform_send: [746, !1],
        adv_v2_m4_m5: [753, !1],
        adv_v2_m6: [903, !1],
        tos_3_client_gating_biz_initiated_enabled: [953, !1],
        tos_3_client_gating_enabled: [791, !1],
        tos_3_client_force_fetch_enabled: [792, !1],
        tos_client_state_fetch_enabled: [877, !1],
        tos_client_state_force_fetch_enabled: [878, !1],
        tos_client_state_fetch_iteration: [908, 0],
        country_client_gating_enabled: [1105, !1],
        system_msg_numbers_fb_branded: [
          1035,
          "16505434800,16503130062,16507885324,16508620604,16504228206,447710173736,16315551023,16505361212,16508129150,16315555102,16315558723,16505212669,16507885280,19032707825,0",
        ],
        system_msg_numbers_fb_inc: [1036, ""],
        trusted_contacts: [794, !1],
        trusted_contacts_sender: [995, !1],
        trusted_contacts_ti: [922, !1],
        tctoken_duration: [865, 604800],
        tctoken_num_buckets: [909, 4],
        tctoken_duration_sender: [996, 604800],
        tctoken_num_buckets_sender: [997, 4],
        reactions_receive: [827, !1],
        reactions_send: [828, !1],
        reactions_announcement_only: [1150, !1],
        reaction_cleanup_days: [987, 31],
        reactions_chat_preview: [1605, !1],
        parent_group_view_enabled: [982, !1],
        parent_group_create_enabled: [1173, !1],
        parent_group_query_ts: [1228, 0],
        parent_group_link_limit: [1238, 0],
        cadmin_self_demote: [1286, !1],
        dev_prop_string: [1064, ""],
        dev_prop_boolean: [1065, !1],
        dev_prop_int: [1066, 0],
        dev_prop_float: [1067, 0],
        order_details_from_cart_enabled: [1107, !1],
        order_details_custom_item_enabled: [1176, !1],
        growth_lock_v0_enabled: [1204, !1],
        image_max_edge: [1576, 1280],
        image_max_kbytes: [1577, 1024],
        image_quality_2: [1578, 80],
        status_image_max_edge: [1580, 1080],
        status_image_quality: [1581, 55],
        ephemeral_messages_allowed_values: [301, "604800"],
        frequently_forwarded_threshold: [302, 5],
        gif_search_enabled: [303, !1],
        kaios_privatestats_max_token_redeem_count: [1175, 64],
        kaios_privatestats_phase3_enabled: [1014, !1],
        kaios_privatestats_phase3_m2_enabled: [1145, !1],
        logger_memory_lines_threshold: [876, 1e3],
        mms4_media_retry_notification_encryption_enabled: [338, !1],
        multicast_limit_global: [339, 2],
        profile_photo_privacy_setting_on_registration: [497, !1],
        send_media_editor: [716, !1],
        voip_call_from_conversation: [380, !0],
        voip_ga_position_in_conversation: [615, "right"],
        test_bool: [171, !1],
        test_int: [172, 0],
        test_string: [173, "kaios_experiment_test_string"],
        test_float: [174, 1],
        stop_abprops_traffic_in_serverprops_response: [315, !1],
        bsp_receipt: [373, !1],
        upload_link_thumb_mms_enabled: [248, !1],
        download_link_thumb_mms_enabled: [251, !1],
        tam_attachment_cache_compaction_enabled: [838, !1],
        business_threads_logging_enabled: [853, !1],
        no_delete_message_time_limit: [1011, !1],
        admin_revoke_receiver: [1177, !1],
        admin_revoke_sender: [1292, !1],
        admin_revoke_history_sync_consumer: [1245, !1],
        admin_hfm_toggle: [1021, !1],
        poll_creation_enabled: [1394, !1],
        poll_receiving_enabled: [1395, !1],
        poll_name_length: [1406, 255],
        poll_option_length: [1407, 100],
        poll_option_count: [1408, 12],
        poll_offline_accuracy: [1409, 30],
        poll_cleanup_days: [1410, 90],
        poll_vote_processing_enabled: [1541, !1],
        keepable_disappearing_messages: [1504, !1],
        green_alert_modal_deep_link_enabled: [728, !1],
        client_group_participants_limit: [618, 257],
        privacy_allow_contacts_except: [808, !1],
        keep_in_chat_receiver: [1352, !1],
        keep_in_chat_sender: [1353, !1],
        trusted_contacts_reciprocity: [1437, !1],
        trusted_contacts_chat_state_optimization: [1566, "old"],
      };
      function i(t) {
        return r[t][1];
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n(128),
        i = { algo: { type: "fibonacci", first: 500, second: 2500 } };
      function o() {
        if (self.registration) return Promise.resolve(self.registration);
        var t = navigator.serviceWorker;
        return t
          ? t
              .getRegistration("./")
              .then(
                (e) =>
                  e ||
                  (__LOG__(2)`getPushEndpoint Registering serviceWorker`,
                  t.register("./serviceWorker.js", { scope: "./" }))
              )
          : Promise.reject(new Error("navigator.serviceWorker is undefined"));
      }
      function u() {
        return o().then((t) =>
          (function t(e, n) {
            return e()
              .then(() => n.pushManager.subscribe())
              .catch(
                (r) => (
                  __LOG__(2)`Error while subscribing to push manager: ${r}`,
                  t(e, n)
                )
              );
          })((0, r.a)(i), t).then((t) => {
            var e = t.toJSON();
            return {
              endpoint: e.endpoint,
              auth: e.keys.auth,
              p256dh: e.keys.p256dh,
            };
          })
        );
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "f", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return h;
        });
      var r = n(21),
        i = n(14),
        o = [
          "sync",
          "abProps",
          "serverProps",
          "rotateKey",
          "deleteDeadMedia",
          "sendMetrics",
          "sendAnonymousMetrics",
          "purgeExpiredStatus",
          "dailyWAM",
          "deleteExpiredPreKeys",
          "purgeContactsLastKnownName",
          "decodeFutureProofEphemeral",
          "deleteExpiredDevices",
          "timeTransitionCurrentUserNotice",
          "rotatePrivateStatsIds",
          "deleteExpiredOrphanedStanzas",
          "deleteExpiredPrivacyTokens",
        ],
        u = {
          abKey: null,
          ephemeralPruningEnabled: !0,
          ephemeralMessagesAllowedValues: new Set([604800]),
          frequentlyForwardedGroupSetting: !1,
          frequentlyForwardedMax: 1,
          frequentlyForwardedMessages: !1,
          frequentlyForwardedThreshold: 5,
          gifProvider: 0,
          groupInviteSending: 0,
          groupJoinPermissions: 0,
          hash: null,
          maxKeys: 200,
          maxParticipants: 257,
          maxSubject: 25,
          mdBlocklistV2: !1,
          mmsHotContentTimespan: 0,
          mmsResumeCheckChatd: !1,
          mmsVCacheAggregationEnabled: !1,
          multicastLimitGlobal: 2,
          prekeyExpirationDays: 60,
          serverPropsVersion: 0,
          statusVideoMaxDuration: 30,
          viewOnceRead: !1,
          viewOnceWrite: !1,
          voiceCallEnabled: !1,
          kaiosVoiceCallEnabled512: !1,
          kaiosVoiceCallEnabled512Jio: !1,
          kaiosVoiceCallEnabled256: !1,
          kaiosVoiceLogsEnabled: !1,
          mms4ServerErrorReceiptEncryptionEnabled: !1,
          mms4MediaRetryNotificationEncryptionEnabled: !1,
          mmsVcardAutodownloadSizeKb: 1e3,
          vcardAsDocumentSizeKb: 1e3,
          vcardMaxSizeKb: 1e3,
          userNotice: !1,
          privateStatsTokenMaxExpirySeconds: i.G,
        },
        a = (0, r.m)(["audio", "photos", "videos", "documents"]),
        s = {
          autodownloadMobile: (0, r.l)("photos"),
          autodownloadWifi: a,
          autodownloadRoaming: (0, r.f)(),
        },
        c = {
          lastSeen: "last",
          profilePhoto: "profile",
          readReceipts: "readreceipts",
          about: "status",
          groupAdd: "groupadd",
        },
        l = ["all", "contacts", "none"],
        f = {
          about: l,
          lastSeen: l,
          profilePhoto: l,
          readReceipts: ["all", "none"],
        },
        d = {
          about: "all",
          lastSeen: "all",
          profilePhoto: "all",
          readReceipts: "all",
          disappearingMsgsDefaultTimer: i.i,
        },
        h = Object.assign(
          {},
          d,
          { groupAdd: "all" },
          {
            showOneToOne: !0,
            showGroups: !0,
            showPreviews: !0,
            showReactions: !0,
          },
          s,
          { saveMediaToPhoneStorage: !1, pttPlaybackRate: "1x" }
        );
    },
    function (t, e, n) {
      n.r(e),
        n.d(e, "loadInfoStore", function () {
          return o;
        });
      var r = n(190),
        i = n(6);
      function o() {
        return (0, r.e)().then((t) =>
          (0, i.S)(t).then((t) => ({
            appMode: t,
            appBuild: i.d.get(),
            lang: i.o.get(),
          }))
        );
      }
      n.d(e, "DEVICE_INFO", function () {
        return i.h;
      }),
        n.d(e, "SERVER_PROPS", function () {
          return i.E;
        }),
        n.d(e, "AB_PROPS", function () {
          return i.b;
        });
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(6);
      function i(t) {
        var e = new RegExp(
          /^(?:https:\/\/wa.me\/|whatsapp:\/\/)tos\/?(\d+)(?:\?.*)?$/,
          "i"
        ).exec(t);
        if (!e) return null;
        var n = e[1],
          r = parseInt(n, 10);
        return isNaN(r) ? null : r;
      }
      function o() {
        return r.E.get().userNotice;
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n(6);
      function i(t) {
        t.kaiosVoiceCallEnabled512;
        var e = t.kaiosVoiceCallEnabled256,
          n = t.kaiosVoiceCallEnabled512Jio,
          i = r.l.get();
        return null != i && (i >= 512 ? n : n && e);
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n(41),
        i = n(57),
        o = n(20),
        u = n(40);
      function a(t, e, n) {
        var a = null != t ? (0, u.b)(t) : null,
          s = null != a ? a : (0, i.d)(t.jid),
          c = { body: (0, o.k)(98), data: { action: r.e }, tag: (0, r.j)(e) };
        ("short" === n ? r.q : r.p)(s, c);
      }
      function s() {
        (0, r.l)(r.e).then((t) => {
          t.forEach((t) => {
            t.close();
          });
        });
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return g;
        });
      var r = n(93),
        i = n(20),
        o = n(176),
        u = n(39),
        a = n(10),
        s = n(41);
      function c(t, e, n, a, c, p, g) {
        if (p.showReactions) {
          var v = t.author;
          return (0, s.m)(s.f, (0, s.k)(n.id)).then((m) => {
            if (null == t.text) {
              var y = m[0];
              return y ? h([e.id], v, n, y, a, p) : void 0;
            }
            var b,
              _ = { id: t.id, text: t.text, author: v, msgId: t.msgId },
              w = m.length > 0 ? m[0].data : void 0;
            if ("ONE_TO_ONE" === n.type) {
              if (w && "ONE_TO_ONE" !== w.type) return;
              b = (function (t, e, n, a, c, f, d) {
                var h = n.id,
                  p = t.author,
                  g = t.id,
                  v = e.id,
                  m = d ? d.reactions : {};
                if (m[v] !== g) {
                  m[v] = g;
                  var y = Object.keys(m).length;
                  if (0 !== y)
                    return 1 === y && f.showPreviews
                      ? (function (t, e, n, a, c) {
                          var l = (0, s.o)(a, t.author),
                            f = (0, s.k)(n),
                            d = t.text;
                          if ((0, u.l)(e.content)) {
                            var h = (0, o.c)(e.content, a, e.mentionedJids, c),
                              p = {};
                            return (
                              (p[e.id] = t.id),
                              {
                                title: l,
                                options: {
                                  body: (0, i.k)([
                                    (0, i.m)(h),
                                    (0, r.b)(d),
                                    186,
                                  ]),
                                  data: {
                                    chatId: n,
                                    type: "ONE_TO_ONE",
                                    reactions: p,
                                    action: s.f,
                                  },
                                  tag: f,
                                },
                              }
                            );
                          }
                        })(t, e, h, a, c)
                      : l(h, p, m, a);
                } else __LOG__(3)`Reaction was already notified`;
              })(_, e, n, a, c, p, w);
            } else {
              if (w && "GROUP" !== w.type) return;
              b = (function (t, e, n, r, i, o, u) {
                var a = e.id,
                  s = t.id,
                  c = t.author,
                  l = o.showPreviews
                    ? { dbReaction: t, msg: e, user: i }
                    : "no-content";
                if (null == u) {
                  var h = {};
                  return (h[e.id] = t.id), f(l, c, h, n, r);
                }
                var p = u.reactions;
                return p[c] && p[c][a] === s
                  ? void __LOG__(3)`Reaction was already notified`
                  : (p[c] || (p[c] = {}),
                    (p[c][a] = s),
                    1 === Object.keys(p).length && o.showPreviews
                      ? f(l, c, p[c], n, r)
                      : d(o.showPreviews ? c : "no-author", p, n, r));
              })(_, e, n, a, c, p, w);
            }
            if (b) {
              if ((__LOG__(2)`Notify new reaction`, "short" !== g))
                return (0, s.p)(b.title, b.options);
              (0, s.q)(b.title, b.options);
            } else __LOG__(3)`Invalid reaction notification`;
          });
        }
      }
      function l(t, e, n, r) {
        var o = (0, s.o)(r, e),
          u = (0, s.k)(t),
          a = Object.keys(n).length;
        return {
          title: o,
          options: {
            body: a <= 99 ? (0, i.k)([a, 185]) : (0, i.k)(618),
            data: { chatId: t, type: "ONE_TO_ONE", reactions: n, action: s.f },
            tag: u,
          },
        };
      }
      function f(t, e, n, a, c) {
        var l,
          f = (0, s.o)(c, e),
          d = (0, i.k)([(0, i.m)(f), (0, i.m)(a.groupInfo.title), 184]),
          h = a.id,
          p = (0, s.k)(h),
          g = Object.keys(n).length;
        if (0 !== g) {
          l =
            1 === g && "no-content" !== t
              ? (function (t, e, n, a) {
                  var s = t.text;
                  if ((0, u.l)(e.content)) {
                    var c = (0, o.c)(e.content, n, e.mentionedJids, a);
                    return (0, i.k)([(0, i.m)(c), (0, r.b)(s), 182]);
                  }
                })(t.dbReaction, t.msg, c, t.user)
              : g <= 99
              ? (0, i.k)([g, 183])
              : (0, i.k)(617);
          var v = {};
          return (
            (v[e] = n),
            {
              title: d,
              options: {
                body: l,
                data: { chatId: h, type: "GROUP", reactions: v, action: s.f },
                tag: p,
              },
            }
          );
        }
      }
      function d(t, e, n, r) {
        var o,
          u = n.id,
          a = (0, s.k)(u),
          c = n.groupInfo.title,
          l = Object.keys(e).length;
        if ("no-author" === t) o = l <= 99 ? (0, i.k)([l, 181]) : (0, i.k)(616);
        else {
          var f = (0, s.o)(r, t);
          o =
            l - 1 <= 99
              ? (0, i.k)([(0, i.m)(f), l - 1, 180])
              : (0, i.k)([(0, i.m)(f), 179]);
        }
        return {
          title: c,
          options: {
            body: o,
            data: { chatId: u, type: "GROUP", reactions: e, action: s.f },
            tag: a,
          },
        };
      }
      function h(t, e, n, r, i, o) {
        var u, c;
        if ("ONE_TO_ONE" === r.data.type && "ONE_TO_ONE" === n.type) {
          var h = (function (t, e, n, r, i) {
            var o = e.reactions,
              u = e.chatId,
              a = 0;
            if (
              (t.forEach((t) => {
                null != o[t] && (delete o[t], a++);
              }),
              0 !== a)
            ) {
              if (0 !== Object.keys(o).length) return l(u, r.jid, o, i);
              n.close();
            }
          })(t, r.data, r, n, i);
          if (!h) return;
          (c = h.title), (u = h.options);
        } else {
          if ("GROUP" !== r.data.type || "GROUP" !== n.type)
            return void __LOG__(
              4
            )`Wrong combination of chat & notification types`;
          var p = (function (t, e, n, r, i, o, u) {
            var s,
              c = n.reactions;
            s = "all" === e ? (0, a.w)(c) : [e];
            var l = 0;
            if (
              (s.forEach((e) => {
                var n = c[e];
                t.forEach((t) => {
                  null != n[t] &&
                    (delete n[t],
                    l++,
                    0 === Object.keys(n).length && delete c[e]);
                });
              }),
              0 !== l)
            ) {
              var h = (0, a.w)(c);
              return 0 === h.length
                ? void r.close()
                : 1 === h.length && u.showPreviews
                ? f("no-content", h[0], c[h[0]], i, o)
                : d("no-author", c, i, o);
            }
          })(t, e, r.data, r, n, i, o);
          if (!p) return;
          (c = p.title), (u = p.options);
        }
        u &&
          (__LOG__(2)`Update existing reaction notification`, (0, s.q)(c, u));
      }
      function p(t) {
        return (0, s.m)(s.f, (0, s.k)(t))
          .then((t) => t.forEach((t) => t.close()))
          .catch((t) => {
            __LOG__(4)`closeChatReactionNotifications sw error: ${t}`;
          });
      }
      function g(t, e, n, r) {
        return (0, s.m)(s.f, (0, s.k)(t.id))
          .then((i) =>
            i.forEach((i) => {
              h(e, "all", t, i, n, r);
            })
          )
          .catch((t) => {
            __LOG__(4)`closeMsgsReactionNotifications sw error: ${t}`;
          });
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return d;
        });
      var r = n(9),
        i = n.n(r),
        o = n(43),
        u = n(161),
        a = {
          [u.a.INT]: "number",
          [u.a.FLOAT]: "number",
          [u.a.STRING]: "string",
          [u.a.BOOL]: "boolean",
        };
      function s(t, e) {
        if (null == e || 0 === e.length) return t;
        for (var n = new Map(), r = 0; r < t.length; r += 3) {
          var o = t[r];
          n.set(o, r);
        }
        for (var u = 0; u < e.length; ++u) {
          var s = i()(e[u], 3),
            c = s[0],
            l = s[1],
            f = s[2];
          if (null != f) {
            var d = n.get(c);
            if (null != d && void 0 !== t[d + 2]) continue;
            a[l] === typeof f &&
              (null == d
                ? (n.set(c, t.length), t.push(c, l, f))
                : (t[d + 2] = f));
          }
        }
        return t;
      }
      function c(t) {
        for (var e = new Map(), n = new Map(), r = 0; r < t.length; r += 4) {
          var i = t[r],
            o = t[r + 1],
            a = t[r + 2],
            s = t[r + 3];
          if (a === u.a.FLOAT)
            throw new Error(
              "Float attributes are currently not supported in runtime"
            );
          if (!Array.isArray(i))
            return (
              __LOG__(4)`logAttributes WAM channel is not an array`,
              void SEND_LOGS("wam-log-attributes")
            );
          i.includes("regular") && e.set(o, s),
            i.includes("private") && n.set(o, s);
        }
        return { deltaRegular: e, deltaPrivate: n };
      }
      function l(t, e) {
        var n = [];
        return (
          e.forEach((e) => {
            var r = e.channel;
            if (null == r) {
              if ("regular" !== t) return;
            } else if (r !== t) return;
            if (e.finished) {
              var i = new Uint8Array((0, o.b)(e.buffer)),
                u = e.key;
              n.push({ key: u, content: i });
            }
          }),
          n
        );
      }
      function f(t, e, n, r, i) {
        var u = (function (t) {
          return JSON.stringify([t.streamId, t.sequenceNumber, t.channel]);
        })(t);
        return {
          bufferKey: u,
          meta: { streamId: t.streamId, sequenceNumber: t.sequenceNumber },
          bufferRow: {
            key: u,
            channel: e,
            streamId: n,
            buffer: (0, o.d)(r),
            finished: i,
          },
        };
      }
      function d(t) {
        var e = null;
        return t && (e = t.sequenceNumber), e;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      function r(t) {
        return "string" == typeof t ? t.trim() : null;
      }
      function i(t) {
        var e = null,
          n = null;
        return (
          Array.isArray(t.givenName) && (n = r(t.givenName[0])),
          Array.isArray(t.name) && (e = r(t.name[0])),
          e || (e = n),
          !e && Array.isArray(t.familyName) && (e = r(t.familyName[0])),
          { fullName: e, shortName: n }
        );
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      });
      var r = {
          fub: ["237", "235", "234"],
          af: ["237", "27"],
          agq: ["237"],
          yay: ["234"],
          bss: ["237"],
          agg: ["675"],
          ast: ["34"],
          avu: ["243", "211"],
          az: ["994"],
          bkc: ["237", "241"],
          ksf: ["237"],
          bfd: ["237"],
          bjt: ["221"],
          bcn: ["234"],
          bas: ["237"],
          bsq: ["231"],
          bkv: ["234"],
          bom: ["234"],
          btt: ["234"],
          bin: ["234"],
          bmq: ["226", "223"],
          bs: ["387", "385", "383", "382", "381"],
          fue: ["229", "228"],
          br: ["33"],
          bys: ["234"],
          bwr: ["234"],
          cky: ["234"],
          ca: ["376", "33", "39", "34"],
          tzm: ["212"],
          fuq: ["234"],
          ckl: ["234"],
          asg: ["234"],
          co: ["33", "39"],
          crh: ["7"],
          hr: ["387", "385", "383", "382", "381"],
          mfn: ["234"],
          cs: ["420", "421"],
          dbq: ["237", "234"],
          dnj: ["225", "231"],
          dzg: ["235", "227"],
          ddn: ["229"],
          dgh: ["234"],
          dow: ["237"],
          dua: ["229"],
          nl: ["297", "32", "599", "31", "1", "597"],
          igb: ["234"],
          etr: ["675"],
          enn: ["234"],
          kgy: ["675"],
          et: ["372"],
          ich: ["234"],
          ee: ["229", "233", "228"],
          ewo: ["237"],
          fo: ["298"],
          fmp: ["237"],
          fi: ["358", "46"],
          fr: [
            "32",
            "229",
            "226",
            "257",
            "237",
            "1",
            "236",
            "242",
            "243",
            "235",
            "269",
            "253",
            "240",
            "33",
            "241",
            "509",
            "225",
            "352",
            "261",
            "223",
            "377",
            "227",
            "250",
            "221",
            "248",
            "41",
            "228",
            "678",
          ],
          fur: ["39"],
          ff: ["237", "224", "222", "221"],
          gaj: ["675"],
          gl: ["34"],
          gby: ["234"],
          gba: ["236"],
          gmm: ["237"],
          de: ["43", "32", "49", "423", "352", "41"],
          tof: ["675"],
          god: ["225"],
          ank: ["234"],
          gkn: ["234"],
          gux: ["229", "226", "227", "228"],
          gde: ["237", "234"],
          gkp: ["224"],
          kl: ["299"],
          jgk: ["234"],
          ha: ["229", "237", "235", "233", "225", "227", "234", "249", "228"],
          haw: ["1"],
          hbb: ["234"],
          hu: ["36"],
          dud: ["234"],
          jab: ["234"],
          iby: ["234"],
          is: ["354"],
          idu: ["234"],
          ig: ["240"],
          ige: ["234"],
          ikx: ["256"],
          ikk: ["234"],
          ikq: ["234"],
          smn: ["358"],
          ga: ["353", "44"],
          atg: ["234"],
          izi: ["234"],
          dyo: ["220", "221"],
          jbu: ["237", "234"],
          kab: ["213"],
          kea: ["238"],
          tbd: ["675"],
          hig: ["234"],
          kai: ["234"],
          kkj: ["237", "236", "242"],
          kzr: ["237", "235"],
          naq: ["264"],
          geb: ["675"],
          okr: ["234"],
          ksh: ["49"],
          ses: ["223"],
          khq: ["223"],
          kun: ["291", "251"],
          kup: ["675"],
          kub: ["237", "234"],
          kpe: ["224", "231"],
          nmg: ["237", "240"],
          ku: ["963", "90"],
          lkt: ["1"],
          hia: ["234"],
          lag: ["255"],
          lv: ["371"],
          lmp: ["237"],
          ln: ["242", "243"],
          liv: [],
          lt: ["370"],
          yaz: ["234"],
          nds: ["55", "49", "31"],
          dsb: ["49"],
          lu: ["243"],
          lb: ["32", "33", "49", "352"],
          mda: ["234"],
          mb: ["261"],
          mt: ["356"],
          mi: ["64"],
          arn: ["56"],
          mas: ["254", "255"],
          ffm: ["223"],
          mql: ["229", "228"],
          mbo: ["237"],
          mbu: ["234"],
          mif: ["237"],
          mzm: ["234"],
          mua: ["237", "235"],
          sur: ["234"],
          nv: ["1"],
          anc: ["234"],
          nnh: ["237"],
          jgo: ["237"],
          fuv: ["237", "234"],
          nin: ["234"],
          dgi: ["226"],
          se: ["358", "46", "47"],
          nso: ["27"],
          ann: ["234"],
          oc: ["33", "39", "377", "34"],
          pbi: ["237"],
          pip: ["234"],
          pl: ["48"],
          pt: [
            "244",
            "55",
            "238",
            "240",
            "245",
            "853",
            "258",
            "351",
            "239",
            "670",
          ],
          prg: [],
          fuf: ["224", "223", "221", "232"],
          qu: ["54", "591", "57", "593", "51"],
          ro: ["373", "40"],
          cla: ["234"],
          sav: ["221"],
          sg: ["236", "235", "243"],
          gd: ["44"],
          seh: ["258"],
          sr: ["387", "385", "383", "382", "381"],
          sh: ["387", "385", "383", "382", "381"],
          srr: ["220", "221"],
          sch: ["39"],
          sld: ["226"],
          sms: ["358"],
          sk: ["420", "421"],
          sl: ["386"],
          sok: ["235"],
          es: [
            "54",
            "501",
            "591",
            "56",
            "57",
            "506",
            "53",
            "593",
            "503",
            "240",
            "502",
            "504",
            "52",
            "505",
            "507",
            "595",
            "51",
            "34",
            "1",
            "598",
            "58",
          ],
          srn: ["597"],
          gsw: ["43", "33", "49", "423", "41"],
          shi: ["212"],
          tal: ["234"],
          tmh: ["223"],
          taq: ["226", "223"],
          tan: ["234"],
          twq: ["227"],
          blt: ["856", "84"],
          yer: ["234"],
          tuq: ["235", "218", "227", "234"],
          ttr: ["234"],
          tik: ["237"],
          to: ["676"],
          dts: ["223"],
          kdl: ["234"],
          tsw: ["234"],
          tr: ["90"],
          tk: ["993"],
          hsb: ["49"],
          vai: ["231", "232"],
          vi: ["855", "84"],
          vo: [],
          vut: ["237", "234"],
          wja: ["234"],
          wa: ["32"],
          wae: ["43", "39", "423", "41"],
          wji: ["234"],
          cy: ["44"],
          fy: ["31"],
          fuh: ["229", "226", "227"],
          yba: ["234"],
          yav: ["237"],
          yle: ["675"],
          yll: ["675"],
          yo: ["229", "234"],
          dje: ["227"],
          gnd: ["237"],
        },
        i = n(182),
        o = {
          í: [
            "ast",
            "ksf",
            "bas",
            "ca",
            "cs",
            "dua",
            "nl",
            "ee",
            "ewo",
            "fo",
            "fr",
            "gl",
            "kl",
            "hu",
            "is",
            "ga",
            "dyo",
            "kea",
            "kkj",
            "nmg",
            "lkt",
            "lag",
            "ln",
            "lu",
            "mas",
            "nnh",
            "jgo",
            "pt",
            "qu",
            "seh",
            "sk",
            "es",
            "to",
            "vai",
            "vi",
            "wae",
            "cy",
            "fy",
            "yav",
            "yo",
          ],
          î: [
            "af",
            "agq",
            "bss",
            "bfd",
            "bas",
            "bkv",
            "btt",
            "nl",
            "igb",
            "ewo",
            "fr",
            "fur",
            "gaj",
            "gby",
            "kl",
            "jab",
            "atg",
            "jbu",
            "kkj",
            "naq",
            "ksh",
            "ku",
            "nmb",
            "lmp",
            "ln",
            "mda",
            "mg",
            "mas",
            "mzm",
            "jgo",
            "nin",
            "ann",
            "ro",
            "sg",
            "scn",
            "srn",
            "yer",
            "tr",
            "wa",
            "cy",
            "yav",
            "yle",
          ],
          ü: [
            "agg",
            "ast",
            "az",
            "br",
            "ca",
            "co",
            "cs",
            "nl",
            "etr",
            "et",
            "fr",
            "gl",
            "de",
            "tof",
            "god",
            "hu",
            "tbd",
            "geb",
            "ksh",
            "kup",
            "nds",
            "lb",
            "arn",
            "oc",
            "sg",
            "sk",
            "es",
            "gsw",
            "dts",
            "tr",
            "tk",
            "vo",
            "wa",
            "wae",
            "fy",
            "yll",
          ],
          ċ: ["mt"],
          ī: [
            "agq",
            "bss",
            "bfd",
            "bas",
            "bkv",
            "btt",
            "ddn",
            "igb",
            "kjy",
            "ich",
            "gux",
            "haw",
            "jab",
            "iby",
            "idu",
            "jbu",
            "kub",
            "nmg",
            "lv",
            "mda",
            "mi",
            "mas",
            "mql",
            "nin",
            "prg",
            "gd",
            "to",
            "yba",
            "yav",
          ],
          ı: ["az", "crh", "tr"],
          ļ: ["lv"],
          ł: ["dsb", "nv", "pl", "hsb"],
          š: [
            "bs",
            "hr",
            "cs",
            "dzg",
            "et",
            "fi",
            "smn",
            "geb",
            "khq",
            "ses",
            "kun",
            "lkt",
            "lv",
            "lt",
            "dsb",
            "se",
            "nso",
            "prg",
            "sr",
            "sh",
            "sms",
            "sk",
            "sl",
            "taq",
            "twq",
            "tuq",
            "hsb",
            "wqe",
            "dje",
          ],
          ƙ: [
            "ckl",
            "ank",
            "ha",
            "ikx",
            "kai",
            "hia",
            "mbu",
            "anc",
            "nin",
            "pip",
            "tal",
            "tan",
            "wja",
            "wji",
          ],
          ǀ: ["naq"],
          ǁ: ["naq"],
          ȯ: ["liv"],
          ɑ: ["fmp", "dud", "tmh"],
          ɓ: [
            "fub",
            "yay",
            "bkc",
            "bjt",
            "bcn",
            "bas",
            "bsq",
            "bmq",
            "fue",
            "bys",
            "bwr",
            "cky",
            "fuq",
            "ckl",
            "asg",
            "dbq",
            "dnj",
            "dgh",
            "dow",
            "dua",
            "enn",
            "ff",
            "gby",
            "gba",
            "gmm",
            "ank",
            "gde",
            "gkp",
            "jgk",
            "ha",
            "hbb",
            "ikx",
            "kkj",
            "hig",
            "kzr",
            "kai",
            "kpe",
            "nmg",
            "hia",
            "ffm",
            "mbo",
            "mbu",
            "mif",
            "mzm",
            "mua",
            "sur",
            "anc",
            "fuv",
            "nin",
            "dgi",
            "pbi",
            "pip",
            "fuf",
            "cla",
            "sav",
            "srr",
            "sld",
            "sok",
            "tal",
            "tan",
            "yer",
            "ttr",
            "tik",
            "kdl",
            "tsw",
            "vai",
            "vut",
            "wja",
            "wji",
            "fuh",
            "gnd",
          ],
          ḍ: ["tzm", "kab", "okr", "shi", "tmh", "taq"],
          ṛ: ["tzm", "kab", "shi"],
          ṭ: ["tzm", "kab", "shi", "tmh", "taq"],
          ẉ: [],
          ạ: ["izi", "yaz", "blt", "vi"],
          ẹ: [
            "yay",
            "bom",
            "bin",
            "mfn",
            "dzg",
            "igb",
            "enn",
            "gkn",
            "iby",
            "ikk",
            "ikw",
            "izi",
            "okr",
            "yaz",
            "blt",
            "tan",
            "tuq",
            "vi",
            "yo",
          ],
          ị: [
            "avu",
            "mfn",
            "igb",
            "enn",
            "iby",
            "ig",
            "ige",
            "ikk",
            "ikw",
            "izi",
            "okr",
            "blt",
            "tan",
            "vi",
          ],
        },
        u = new Set([
          "abq",
          "ab",
          "ady",
          "av",
          "az",
          "ba",
          "be",
          "bs",
          "bg",
          "bua",
          "ce",
          "ckt",
          "cu",
          "cv",
          "crh",
          "dar",
          "dng",
          "myv",
          "evn",
          "gag",
          "inh",
          "kbd",
          "xal",
          "krc",
          "kaa",
          "kk",
          "kjh",
          "kca",
          "ky",
          "kv",
          "koi",
          "kpy",
          "kum",
          "lbe",
          "lez",
          "mk",
          "mns",
          "chm",
          "mdf",
          "mn",
          "ttt",
          "gld",
          "yrk",
          "nog",
          "os",
          "ru",
          "rue",
          "sr",
          "sh",
          "cjs",
          "alt",
          "tab",
          "tg",
          "tt",
          "tkr",
          "tk",
          "tyv",
          "ude",
          "udm",
          "uk",
          "uz",
          "mrj",
          "sah",
        ]),
        a = new Set([
          "374",
          "994",
          "375",
          "387",
          "359",
          "995",
          "7",
          "383",
          "996",
          "389",
          "373",
          "976",
          "382",
          "381",
          "992",
          "993",
          "380",
          "998",
        ]);
      function s(t) {
        return a.has(t);
      }
      function c(t) {
        return "авгекмнорстухшщьѕіјѡѵүһӏԁԛԝԧꚙ".includes(t);
      }
      var l = new RegExp("^[a-z0-9-]+$"),
        f = n(57),
        d = /^(?:https?:\/\/)?([^/?#]+)(?:[/?#]|$)/i;
      function h(t, e, n, a) {
        var h = t.match(d),
          p = h && h[1];
        if (null == p) return null;
        var g = (0, f.g)(n);
        return (function (t, e, n, a) {
          var f,
            d = t.split("."),
            h = !1;
          if (
            (d.forEach((t) => {
              if ((h = !t.match(l))) {
                if (f) return null;
                f = t;
              }
            }),
            null == f || h)
          )
            return null;
          for (var p = [], g = !0, v = (0, i.c)(f), m = 0; m < v.length; m++) {
            var y = v[m];
            if (!(g = g && c(y)) && o[y]) {
              if (p.length >= 2) return null;
              p.push(y);
            }
          }
          if (g)
            return s(n) ||
              s(e) ||
              a.some((t) =>
                (function (t) {
                  return u.has(t);
                })(t)
              )
              ? null
              : new Set(v);
          if (!p.length) return null;
          var b = p.filter((t) => {
            var i = o[t];
            if (null == i) return !1;
            if (a.some((t) => i.includes(t))) return !1;
            for (var u = new Set(), s = 0; s < i.length; s++) {
              var c = r[i[s]];
              if (null != c) for (var l = 0; l < c.length; l++) u.add(c[l]);
            }
            return !u.has(n) && !u.has(e);
          });
          return b.length ? new Set(b) : null;
        })(
          p,
          "whatsapp" === e ? "" : (0, f.g)(e),
          g,
          a.map((t) => t.toLowerCase())
        );
      }
    },
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "initPolyfill", function () {
          return o;
        }),
        n.d(e, "initLanguage", function () {
          return u;
        });
      var r = n(20),
        i = null;
      function o() {
        return (
          i ||
            (i = n
              .e(70)
              .then(n.t.bind(null, 448, 7))
              .then(() => n(429)(`./${(0, r.d)().lg}.js`))
              .then(() => {
                var t = Intl.__disableRegExpRestore;
                t && t();
              })),
          i
        );
      }
      function u(t) {
        return (
          (0, r.e)(t),
          n(430)(`./${(0, r.d)().langTag}.js`).then((t) => {
            (0, r.n)(t.default);
          })
        );
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n(82),
        i = (t, e, n) => {
          var i = null,
            o = null,
            u = new Promise((t, u) => {
              (o = u),
                (i = setTimeout(() => {
                  u(new r.b(n)), clearTimeout(i);
                }, e));
            });
          return Promise.race([t, u]).finally(() => {
            o && o(new Error()), clearTimeout(i);
          });
        };
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var r = n(7),
        i = [];
      (i[34] = "ES"),
        (i[49] = "DE"),
        (i[52] = "MX"),
        (i[44] = "GB"),
        (i[966] = "SA"),
        (i[39] = "IT"),
        (i[93] = "AF"),
        (i[355] = "AL"),
        (i[213] = "DZ"),
        (i[376] = "AD"),
        (i[244] = "AO"),
        (i[54] = "AR"),
        (i[374] = "AM"),
        (i[297] = "AW"),
        (i[61] = "AU"),
        (i[43] = "AT"),
        (i[994] = "AZ"),
        (i[973] = "BH"),
        (i[880] = "BD"),
        (i[375] = "BY"),
        (i[32] = "BE"),
        (i[501] = "BZ"),
        (i[229] = "BJ"),
        (i[975] = "BT"),
        (i[591] = "BO"),
        (i[387] = "BA"),
        (i[267] = "BW"),
        (i[55] = "BR"),
        (i[246] = "IO"),
        (i[673] = "BN"),
        (i[359] = "BG"),
        (i[226] = "BF"),
        (i[257] = "BI"),
        (i[225] = "CI"),
        (i[855] = "KH"),
        (i[237] = "CM"),
        (i[238] = "CV"),
        (i[236] = "CF"),
        (i[235] = "TD"),
        (i[56] = "CL"),
        (i[86] = "CN"),
        (i[57] = "CO"),
        (i[269] = "KM"),
        (i[242] = "CG"),
        (i[243] = "CD"),
        (i[682] = "CK"),
        (i[506] = "CR"),
        (i[385] = "HR"),
        (i[53] = "CU"),
        (i[599] = "CW"),
        (i[357] = "CY"),
        (i[420] = "CZ"),
        (i[45] = "DK"),
        (i[253] = "DJ"),
        (i[593] = "EC"),
        (i[20] = "EG"),
        (i[503] = "SV"),
        (i[240] = "GQ"),
        (i[291] = "ER"),
        (i[372] = "EE"),
        (i[251] = "ET"),
        (i[298] = "FO"),
        (i[679] = "FJ"),
        (i[358] = "FI"),
        (i[33] = "FR"),
        (i[594] = "GF"),
        (i[689] = "PF"),
        (i[241] = "GA"),
        (i[220] = "GM"),
        (i[995] = "GE"),
        (i[233] = "GH"),
        (i[350] = "GI"),
        (i[30] = "GR"),
        (i[299] = "GL"),
        (i[590] = "GP"),
        (i[502] = "GT"),
        (i[224] = "GN"),
        (i[245] = "GW"),
        (i[592] = "GY"),
        (i[509] = "HT"),
        (i[504] = "HN"),
        (i[852] = "HK"),
        (i[36] = "HU"),
        (i[354] = "IS"),
        (i[91] = "IN"),
        (i[62] = "ID"),
        (i[98] = "IR"),
        (i[964] = "IQ"),
        (i[353] = "IE"),
        (i[972] = "IL"),
        (i[81] = "JP"),
        (i[962] = "JO"),
        (i[254] = "KE"),
        (i[965] = "KW"),
        (i[996] = "KG"),
        (i[856] = "LA"),
        (i[371] = "LV"),
        (i[961] = "LB"),
        (i[266] = "LS"),
        (i[231] = "LR"),
        (i[218] = "LY"),
        (i[423] = "LI"),
        (i[370] = "LT"),
        (i[352] = "LU"),
        (i[853] = "MO"),
        (i[389] = "MK"),
        (i[261] = "MG"),
        (i[265] = "MW"),
        (i[60] = "MY"),
        (i[960] = "MV"),
        (i[223] = "ML"),
        (i[356] = "MT"),
        (i[692] = "MH"),
        (i[596] = "MQ"),
        (i[222] = "MR"),
        (i[230] = "MU"),
        (i[691] = "FM"),
        (i[373] = "MD"),
        (i[377] = "MC"),
        (i[976] = "MN"),
        (i[382] = "ME"),
        (i[212] = "MA"),
        (i[258] = "MZ"),
        (i[95] = "MM"),
        (i[264] = "NA"),
        (i[674] = "NR"),
        (i[977] = "NP"),
        (i[31] = "NL"),
        (i[687] = "NC"),
        (i[64] = "NZ"),
        (i[505] = "NI"),
        (i[227] = "NE"),
        (i[234] = "NG"),
        (i[672] = "NF"),
        (i[850] = "KP"),
        (i[47] = "NO"),
        (i[968] = "OM"),
        (i[92] = "PK"),
        (i[680] = "PW"),
        (i[970] = "PS"),
        (i[507] = "PA"),
        (i[675] = "PG"),
        (i[595] = "PY"),
        (i[51] = "PE"),
        (i[63] = "PH"),
        (i[48] = "PL"),
        (i[351] = "PT"),
        (i[974] = "QA"),
        (i[40] = "RO"),
        (i[7] = "RU"),
        (i[250] = "RW"),
        (i[262] = "RE"),
        (i[508] = "PM"),
        (i[685] = "WS"),
        (i[378] = "SM"),
        (i[221] = "SN"),
        (i[381] = "RS"),
        (i[248] = "SC"),
        (i[232] = "SL"),
        (i[65] = "SG"),
        (i[421] = "SK"),
        (i[386] = "SI"),
        (i[677] = "SB"),
        (i[252] = "SO"),
        (i[27] = "ZA"),
        (i[82] = "KR"),
        (i[211] = "SS"),
        (i[94] = "LK"),
        (i[249] = "SD"),
        (i[597] = "SR"),
        (i[268] = "SZ"),
        (i[46] = "SE"),
        (i[41] = "CH"),
        (i[963] = "SY"),
        (i[239] = "ST"),
        (i[886] = "TW"),
        (i[992] = "TJ"),
        (i[255] = "TZ"),
        (i[66] = "TH"),
        (i[670] = "TL"),
        (i[228] = "TG"),
        (i[676] = "TO"),
        (i[216] = "TN"),
        (i[90] = "TR"),
        (i[993] = "TM"),
        (i[256] = "UG"),
        (i[380] = "UA"),
        (i[971] = "AE"),
        (i[1] = "US"),
        (i[598] = "UY"),
        (i[998] = "UZ"),
        (i[678] = "VU"),
        (i[58] = "VE"),
        (i[84] = "VN"),
        (i[681] = "WF"),
        (i[967] = "YE"),
        (i[260] = "ZM"),
        (i[263] = "ZW"),
        (i[383] = "XK");
      var o = i,
        u = n(57);
      function a(t) {
        var e = (0, u.g)(t),
          n = parseInt(e, 10);
        if (!Number.isNaN(n)) return o[n];
        __LOG__(
          3
        )`extractISOCountryCode: could not extract country code for jid`;
      }
      function s(t) {
        var e = (0, r.u)(t),
          n = (0, u.b)(e),
          i = parseInt(n, 10);
        if (!Number.isNaN(i)) {
          var a = e.substring(n.length);
          return { country: { cc: n, iso: o[i] }, localNumber: a };
        }
        __LOG__(
          3
        )`extractPhoneInfoFromJid: could not extract country code for jid`;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        });
      var r = class {
          constructor(t) {
            (this.DJ = Promise.resolve()),
              (this.DK = !0),
              (this.DL = null),
              (this.DM = () => {
                var t = this.DL;
                if (null != t)
                  return (this.DL = null), Promise.all(t).then(this.DM);
                this.DK = !0;
              }),
              (this.name = t);
          }
          addBlocker(t) {
            var e = t.catch((t) => {
              __LOG__(4)`JobRequirement[${this.name}] blocker errored ${t}`,
                SEND_LOGS("job-blocker-rejected");
            });
            if (this.DK)
              (this.DK = !1),
                (this.DJ = Promise.all([this.DJ, e]).then(this.DM));
            else {
              var n = this.DL;
              null != n ? n.push(e) : (this.DL = [e]);
            }
          }
          waitUntilSatisfied() {
            return this.DJ;
          }
          isSatisfied() {
            return this.DK;
          }
          isSatisfiable() {
            return !0;
          }
        },
        i = class extends r {
          constructor(t) {
            super(t), super.addBlocker(new Promise(() => {}));
          }
          addBlocker() {}
          isSatisfiable() {
            return !1;
          }
        };
      function o(t, e) {
        var n = t.filter((t) => !t.isSatisfiable());
        if (n.length > 0) {
          var r = n.map((t) => t.name);
          return (t) => (
            null == e || e("unsatisfiable", r, t), n[0].waitUntilSatisfied()
          );
        }
        var i = t.map(() => Promise.resolve()),
          o = Promise.resolve(),
          u = null,
          a = () => {
            if (!i.every((e, n) => e === t[n].waitUntilSatisfied())) {
              var e = [],
                n = t.map((t) => {
                  var n = t.waitUntilSatisfied();
                  return (
                    t.isSatisfied() ||
                      (e.push(t.name),
                      n.then(() => {
                        var n = e.indexOf(t.name);
                        e.splice(n, 1);
                      })),
                    n
                  );
                });
              return (i = n), (u = e), Promise.all(n).then(a);
            }
            u = null;
          };
        return (t) => {
          if (null == u) {
            var n = a();
            null != n && (o = o.then(() => n));
          }
          return (
            null == e || e(null == u ? "satisfied" : "unsatisfied", u, t), o
          );
        };
      }
    },
    function (t, e, n) {
      function r(t, e) {
        try {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            r[i - 2] = arguments[i];
          return Promise.resolve(t.apply(e, r));
        } catch (t) {
          return Promise.reject(t);
        }
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(15),
        i = n(20);
      function o(t) {
        var e;
        return (
          null != (null == t || null == (e = t.duration) ? void 0 : e.repeat)
        );
      }
      function u(t) {
        return 0 === t || 1 === t || 2 === t || 3 === t || 4 === t || 5 === t
          ? t
          : null;
      }
      function a(t) {
        try {
          var e = decodeURIComponent(t);
          return e.startsWith("https://")
            ? { type: "open-link", url: e }
            : (__LOG__(4)`parseUserNoticeLink: links should use HTTPS, ${e}`,
              { type: "invalid" });
        } catch (e) {
          return (
            __LOG__(4)`parseUserNoticeLink: invalid link url, ${t}`,
            { type: "invalid" }
          );
        }
      }
      function s(t) {
        return {
          svgIcon: t.icon.svg,
          title: t.title,
          body: t.body,
          bullets: t.bullets,
          footer: t.footer,
          acceptLabel: t.acceptLabel,
        };
      }
      function c(t) {
        var e = t.currentState,
          n = t.content,
          u = t.snoozed;
        if (null != n)
          if (u)
            __LOG__(
              2
            )`User notice component is snoozed, will repeat showing it again according to 'repeat' in timing object`;
          else {
            var c,
              l = n.banner,
              f = n.nonBlockingModal,
              d = n.blockingModal,
              h = n.version,
              p = (0, i.f)(n.lglc.lg) ? "rtl" : "ltr";
            switch (e) {
              case r.q.TRIGGERED:
              case r.q.FETCHED:
                return;
              case r.q.BANNER_SHOW:
                if (null == l)
                  return void __LOG__(
                    4
                  )`dbUserNoticeToUserNotice: state wants to show the banner but there is none`;
                var g,
                  v = l.actionURL;
                if ("whatsapp:user-notice?action=open-modal" === v) {
                  var m,
                    y = !1;
                  null != f ? (m = s(f)) : null != d && ((m = s(d)), (y = !0)),
                    m
                      ? (g = {
                          type: "open-modal",
                          modal: {
                            type: "modal",
                            id: t.id,
                            shouldLogWhenDisplayed: !1,
                            content: m,
                            blocking: y,
                            direction: p,
                            version: h,
                          },
                        })
                      : (__LOG__(
                          4
                        )`dbUserNoticeToUserNotice: banner has an open-modal action but no modal content`,
                        (g = { type: "invalid" }));
                } else g = a(v);
                return {
                  type: "banner",
                  id: t.id,
                  shouldLogWhenDisplayed: o(null == l ? void 0 : l.timing),
                  action: g,
                  content: ((c = l), { svgIcon: c.icon.svg, text: c.text }),
                  direction: p,
                  version: h,
                };
              case r.q.NON_BLOCKING_MODAL_SHOW:
                return null == f
                  ? void __LOG__(
                      4
                    )`dbUserNoticeToUserNotice: state wants to show the non-blocking modal but there is none`
                  : {
                      type: "modal",
                      id: t.id,
                      shouldLogWhenDisplayed: o(null == f ? void 0 : f.timing),
                      content: s(f),
                      blocking: !1,
                      direction: p,
                      version: h,
                    };
              case r.q.BLOCKING_MODAL_SHOW:
                return null == d
                  ? void __LOG__(
                      4
                    )`dbUserNoticeToUserNotice: state wants to show the blocking modal but there is none`
                  : {
                      type: "modal",
                      id: t.id,
                      shouldLogWhenDisplayed: o(null == d ? void 0 : d.timing),
                      content: s(d),
                      blocking: !0,
                      direction: p,
                      version: h,
                    };
              default:
                return;
            }
          }
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(31),
        i = n.n(r),
        o = n(20),
        u = n(108),
        a = n(80),
        s = {
          "application/pdf": "pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            "docx",
        };
      function c(t) {
        return s[t] || null;
      }
      function l(t, e) {
        return t.fileName
          ? e
            ? (0, u.c)((0, a.i)(t.fileName))
            : (0, u.c)(t.fileName)
          : (function (t) {
              if (!t) return (0, o.k)(240);
              switch (t) {
                case "pdf":
                  return "PDF";
                case "docx":
                  return "DOCX";
                default:
                  return (0, i.a)(t);
              }
            })(c(t.mimetype));
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return h;
        });
      var r = n(125),
        i = n(5),
        o = class extends i.b {
          constructor() {
            super(() => {
              var t = new r.a("wa-migrations-1");
              return t.version(1).stores({ migrations: "name" }), t;
            }, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]);
          }
        };
      function u(t) {
        var e;
        return (
          "simple" === t.type ? (e = [t.name]) : (t.type, (e = t.names)), e
        );
      }
      var a = null;
      function s(t) {
        if (a) return a;
        throw new Error(
          `MigrationsRegistry::${t} called before migrations are initialized`
        );
      }
      function c() {
        a ||
          (a = new (class {
            constructor() {
              (this.Ab = new o()), (this.Ac = new Set()), (this.Ad = []);
            }
            Ae(t) {
              this.Ad.push(t);
            }
            Af() {
              for (var t = this.Ad, e = [], n = 0; n < t.length; ++n) {
                var r = t[n];
                u(r).some((t) => !this.Ac.has(t)) && e.push(r);
              }
              return e;
            }
            Ag() {
              return (0, i.i)(this.Ab.stores.migrations.toArray()).then((t) => {
                t.forEach((t) => {
                  this.Ac.add(t.name);
                });
              });
            }
            Ah(t) {
              return this.Ab.transact("rw", ["migrations"], () => {
                var e = t.map((t) =>
                  this.Ab.stores.migrations
                    .get(t)
                    .then((e) => ({ row: e, name: t }))
                );
                return (0, i.c)(e)
                  .then((t) => {
                    var e = t.map((t) => {
                      var e = t.row,
                        n = t.name;
                      return null != e
                        ? { name: e.name, applied: !0 }
                        : { name: n, applied: !0 };
                    });
                    return this.Ab.stores.migrations.bulkPut(e);
                  })
                  .then(() => {});
              });
            }
          })());
      }
      function l(t) {
        s("registerMigration").Ae(t);
      }
      function f() {
        return s("collectAppliedMigrations").Ag();
      }
      function d() {
        var t = new o(!1);
        return (0, i.i)(t.stores.delete());
      }
      function h(t) {
        var e = s("prepareMigration"),
          n = e.Af();
        return 0 === n.length
          ? null
          : (t) =>
              n.reduce(
                (n, r) => n.then(() => r.run(t)).then(() => e.Ah(u(r))),
                Promise.resolve()
              );
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "BaseContentTable", function () {
          return w;
        });
      var r = n(9),
        i = n.n(r),
        o = n(10),
        u = n(7),
        a = n(5),
        s = n(49),
        c = n(82),
        l = n(3),
        f = n(21),
        d = n(295),
        h = n(6),
        p = n(26),
        g = n(284),
        v = n(202),
        m = n(123),
        y = n(14),
        b = (0, m.a)(y.g, function (t) {
          t
            .version(1)
            .stores({
              meta: "key",
              msgs: "++rowId, &id, externalId, type",
              chats: "++id, &jid",
              contacts: "jid, phonebookPhone",
              groups: "jid",
              receipts: "msgId, chat, sent",
              media: "++mediaId, &plaintextHash, *msgIds",
              previews: "previewId",
            }),
            t
              .version(2)
              .stores({ groupParticipantsInfo: "jid, *participants" }),
            t
              .version(3)
              .stores({
                msgs: "++rowId, &id, externalId, type, starred, [id+starred]",
              }),
            t.version(4),
            t
              .version(5)
              .stores({
                msgs:
                  "++rowId, &id, externalId, type, starred, [id+starred], validUntil",
              }),
            t
              .version(6)
              .stores({
                authors: "++id, &jid, sortBy",
                status: "++rowId, &id, externalId, ts, author, altIndex",
              }),
            t.version(7).stores({ callLogs: "++id, callId, ts" }),
            t
              .version(8)
              .stores({
                favoriteGifs: "++id, &plaintextHash, [gifAttribution+gifId]",
              }),
            t
              .version(9)
              .stores({
                msgs:
                  "++rowId, &id, externalId, type, starred, [id+starred], validUntil, viewOnceExpiration",
              }),
            t
              .version(10)
              .stores({
                orphanedStanzas: "++id, externalId, type, chatJid, author, ts",
              }),
            t
              .version(11)
              .stores({
                reactions:
                  "++id, msgId, externalId, author, senderTimestampMs, &idx",
              }),
            t
              .version(12)
              .stores({ privacyTokens: "++id, jid, type, ts, [type+ts]" });
        }),
        _ = n(51),
        w = class extends a.b {
          constructor() {
            super(b),
              (this.BF = (t) => {
                var e = [],
                  n = [];
                return (
                  t.forEach((t) => {
                    var r = (0, d.a)(t, h.r.get());
                    e.push(r), r !== t && n.push(r);
                  }),
                  n.length > 0
                    ? (__LOG__(3)`Fixing participantInfo`,
                      SEND_LOGS("fix-participants-info"),
                      this.stores.groupParticipantsInfo
                        .bulkPut(n)
                        .then(() => e))
                    : (0, a.e)(e)
                );
              });
          }
          getPreview(t) {
            var e = this.stores.previews.get(t).then((t) => t && t.preview);
            return (0, a.i)(e);
          }
          getBlocklist() {
            return (0, p.d)(this.stores.meta, p.a.BLOCKED).then((t) =>
              t ? t.value : (0, f.f)()
            );
          }
          getBlocklistDHash() {
            return (0, p.d)(this.stores.meta, p.a.BLOCKLIST_DHASH).then((t) =>
              t ? t.value : null
            );
          }
          getBlocklistAndDHash() {
            return this.transact("r", ["meta"], () =>
              (0, a.c)([
                (0, p.d)(this.stores.meta, p.a.BLOCKED),
                (0, p.d)(this.stores.meta, p.a.BLOCKLIST_DHASH),
              ]).then((t) => {
                var e = i()(t, 2),
                  n = e[0],
                  r = e[1];
                return {
                  users: n ? n.value : (0, f.f)(),
                  dhash: r ? r.value : null,
                };
              })
            );
          }
          getGroupInviteRevokes() {
            return (0, p.d)(
              this.stores.meta,
              p.a.GROUP_INVITE_REVOKES
            ).then((t) => (t ? t.value : []));
          }
          getParticipantsInfoWithUserInTransaction(t) {
            return (0, a.k)(this.stores.groupParticipantsInfo, "participants")
              .equals(t)
              .toArray()
              .then(this.BF);
          }
          checkStarredIndexMissing() {
            return (0, a.i)(
              this.stores.msgs
                .orderBy("starred")
                .first()
                .then(() => !1)
                .catch(() => !0)
            );
          }
          getChats() {
            var t = this.stores.groups.toArray();
            return (0, a.c)([
              t,
              this.stores.groupParticipantsInfo.toArray().then(this.BF),
              this.stores.chats.toArray(),
            ]).then((t) => {
              var e = i()(t, 3),
                n = e[0],
                r = e[1],
                a = e[2],
                c = (0, o.s)(n, (t) => t.jid),
                l = {};
              r.forEach((t) => {
                var e = (0, s.g)(t);
                e && (l[e.jid] = e);
              }),
                __LOG__(2)`getEverything loaded chats and groups`;
              var f = [];
              return (
                a.forEach((t) => {
                  var e = (0, u.p)(t.jid);
                  if (e) {
                    var n = c[e],
                      r = l[e];
                    if (!n || !r)
                      return (
                        __LOG__(4)`Group info not found for group  ${e}`,
                        void SEND_LOGS("group-without-info", 0.001)
                      );
                    "parent" !== n.communityInfo &&
                      f.push(
                        (0, _.a)(t, { groupInfo: n, participantsInfo: r })
                      );
                  } else f.push((0, _.a)(t));
                }),
                f
              );
            });
          }
          getDbUserNotice() {
            return h.m.get() && (0, v.b)()
              ? (0, p.d)(this.stores.meta, p.a.USER_NOTICE).then((t) =>
                  null == t ? void 0 : t.value
                )
              : (0, a.e)(void 0);
          }
          getEverything() {
            var t = performance.now();
            return this.transact(
              "rw",
              [
                "chats",
                "msgs",
                "contacts",
                "groups",
                "groupParticipantsInfo",
                "meta",
              ],
              () => {
                var e = this.stores.contacts.toArray(),
                  n = this.getChats(),
                  r = this.getBlocklist(),
                  i = this.getGroupInviteRevokes(),
                  o = this.getDbUserNotice().then((t) =>
                    t ? (0, g.b)(t) : void 0
                  );
                return (0, a.c)([n, e, r, i, o]).then((e) => {
                  var n = performance.now() - t,
                    r = e[0].length,
                    i = e[1].length;
                  return (
                    __LOG__(2)`getEverything ${n}ms, ${r} chats, ${i} contacts`,
                    e
                  );
                });
              }
            );
          }
          loadDbMsgRange(t, e, n) {
            return n.start <= 0 && 0 < n.end
              ? this.transact("r", ["chats", "msgs"], () =>
                  this.stores.chats.get(t).then((t) => {
                    if (!t) return null;
                    var r = t.newest,
                      o = t.oldest;
                    if (!r || !o) return null;
                    var u = "beginning" === e ? o : e,
                      s = n.end > 1,
                      c = n.start < 0,
                      l = c ? n.end - 1 : n.end,
                      f = 1 - n.start;
                    return (0, a.c)([
                      s
                        ? this.stores.msgs
                            .where("id")
                            .between(o, u, !0, !c)
                            .reverse()
                            .limit(l)
                            .toArray()
                        : [],
                      c
                        ? this.stores.msgs
                            .where("id")
                            .between(u, r, !0, !0)
                            .limit(f)
                            .toArray()
                        : [],
                    ]).then((t) => {
                      var e = i()(t, 2),
                        n = e[0],
                        u = e[1];
                      u.reverse();
                      var a = [...u, ...n];
                      return {
                        dbMsgs: a,
                        containsOldest:
                          a.length > 0 && a[a.length - 1].id === o,
                        containsNewest: a.length > 0 && a[0].id === r,
                      };
                    });
                  })
                )
              : (__LOG__(
                  4
                )`loadDbMsgRange invalid range [${n.start}, ${n.end})`,
                Promise.resolve());
          }
          updateLastAppWrite() {
            return this.stores.meta
              .put({ key: p.a.APPWRITE_META_KEY, value: (0, l.F)() })
              .catch(c.g);
          }
        };
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(3),
        i = n(7);
      function o(t, e) {
        if (t.knowsSenderKey instanceof Map) return t;
        var n = new Uint8Array(t.knowsSenderKey),
          o = new Map();
        return (
          t.participants.forEach((t, r) => {
            t !== e &&
              o.set(
                (0, i.e)(t),
                ((t) => !!(n[Math.floor(t / 8)] & (1 << t % 8)))(r)
              );
          }),
          Object.assign({}, t, {
            rotateSenderKey: !1,
            senderKeyTimestamp: (0, r.x)(4 * Math.random() * r.g),
            knowsSenderKey: o,
          })
        );
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = { sentinel: "RESPONSE_NAMESPACE" },
        i = { sentinel: "NOT_HANDLED" },
        o = class {
          constructor() {
            var t = this;
            (this.W = Promise.resolve()),
              (this.X = new Map()),
              (this.Y = 0),
              (this.Z = null),
              (this.a = null),
              (this.b = null),
              (this.fireAndForget = function (e, n, r) {
                var i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                t.d(e, n, r, null, i);
              }),
              (this.sendAndReceive = function (e, n, i) {
                var o =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                return new Promise((u, a) => {
                  t.d(
                    e,
                    n,
                    i,
                    (e) => {
                      try {
                        var n = s(e);
                        n
                          ? n.call(
                              e,
                              (e) => {
                                t.d(r, "", e, u, o);
                              },
                              (e) => {
                                t.d(r, "", e, a, !1);
                              }
                            )
                          : t.d(r, "", e, u, o);
                      } catch (e) {
                        t.d(r, "", e, a, !1);
                      }
                    },
                    o
                  );
                });
              }),
              (this.c = () => {
                var t = this.a;
                if (t) {
                  for (var e, n = this.X; t && !(e = u(n, t)); )
                    this.a = t = t.nextRoute;
                  if (t && e) {
                    var r = this.e(e, t),
                      o = !0;
                    if (r !== i) {
                      var a = t.prevRoute,
                        s = t.nextRoute;
                      this.a === t && (this.a = s),
                        a ? (a.nextRoute = s) : (this.Z = s),
                        s ? (s.prevRoute = a) : ((o = !1), (this.b = a));
                    }
                    return o && this.W.then(this.c), r;
                  }
                }
              });
          }
          hasHandlerForNamespace(t) {
            return this.X.has(t);
          }
          getHandledNamespaces() {
            return Array.from(this.X.keys());
          }
          setNamespaceHandler(t, e) {
            var n = this.X,
              r = n.get(t);
            if (r !== e && (++this.Y, n.set(t, e), !r)) {
              var i = this.Z;
              i && (this.a || this.W.then(this.c), (this.a = i));
            }
          }
          setHandlers(t, e) {
            this.setNamespaceHandler(t, function (t, n, r) {
              var i = e[t](n);
              r && r(i);
            });
          }
          d(t, e, n, r, i) {
            var o = this.b,
              a = {
                namespace: t,
                route: e,
                arg: n,
                resolver: r,
                prevRoute: o,
                nextRoute: null,
                silentLog: i,
              };
            this.b = a;
            var s = !0;
            o ? ((o.nextRoute = a), (s = !this.a)) : (this.Z = a),
              s && u(this.X, a) && ((this.a = a), this.W.then(this.c));
          }
          e(t, e) {
            var n = e.route,
              r = e.arg,
              o = e.resolver,
              u = e.silentLog,
              a = this.Y,
              s = null,
              c = null;
            try {
              s = t(n, r, o, u);
            } catch (t) {
              c = Promise.reject(t);
            }
            if (s === i) {
              if (a !== this.Y) return i;
              c = Promise.reject(
                new Error(
                  "DynamicRouter: NOT_HANDLED can only be used when updating handlers"
                )
              );
            }
            return o ? void (c && o(c)) : c;
          }
        };
      function u(t, e) {
        var n = e.namespace;
        return n === r ? a : t.get(n);
      }
      function a(t, e, n) {
        n(e);
      }
      function s(t) {
        if (null != t && ("object" == typeof t || "function" == typeof t)) {
          var e = t.then;
          return "function" == typeof e ? e : null;
        }
        return null;
      }
    },
    ,
    ,
    function (t, e, n) {
      function r(t, e) {
        if (t === e) return !0;
        if (!t || !e || ("object" != typeof t && "object" != typeof e))
          return !1;
        var n = Array.isArray(t);
        if (n !== Array.isArray(e)) return !1;
        var i = !0;
        if (n) {
          var o = t.length;
          if (o !== e.length) return !1;
          for (var u = 0; i && u < o; u++) i = r(t[u], e[u]);
          return i;
        }
        for (var a = Object.keys(t), s = 0; i && s < a.length; s++) {
          var c = a[s];
          i = e.propertyIsEnumerable(c) && r(t[c], e[c]);
        }
        return i && Object.keys(e).length === a.length;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(20),
        i = n(41),
        o = n(31),
        u = n.n(o);
      function a(t) {
        var e = (0, r.k)(982),
          n = { body: (0, r.k)(325), data: { action: i.h }, tag: i.i };
        switch (t) {
          case "short":
            return (0, i.q)(e, n), Promise.resolve();
          case "alert":
            return (0, i.p)(e, n);
          default:
            return (0, u.a)(t);
        }
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n(70),
        i = class {
          constructor(t) {
            (this.onmessage = null),
              (this.t = () => {}),
              (this.u = null),
              (this.v = !1),
              (this.w = !1),
              (this.x = new r.a(() => {
                __LOG__(
                  2
                )`MonitoredBroadcastChannel watchdog triggered by silence`,
                  this.close(),
                  this.w || this.t();
              }));
            var e = new BroadcastChannel(t);
            (this.s = e),
              (e.onmessage = (t) => {
                this.y(t);
              });
          }
          postMessage(t) {
            (this.v = !0), this.s.postMessage(t);
          }
          startMonitoring(t) {
            var e = t.onTimeout;
            (this.t = e),
              null == this.u &&
                (__LOG__(2)`MonitoredBroadcastChannel.startMonitoring`,
                (this.v = !1),
                (this.u = setInterval(() => {
                  this.v || this.s.postMessage("wa-ping"), (this.v = !1);
                }, 500)),
                this.z());
          }
          close() {
            __LOG__(2)`MonitoredBroadcastChannel closing`;
            var t = this.u;
            null != t && ((this.u = null), clearInterval(t), this.x.cancel()),
              this.s.close();
          }
          silenceChannel() {
            this.w = !0;
          }
          y(t) {
            if ((this.z(), "wa-ping" !== t.data)) {
              var e = this.w ? null : this.onmessage;
              e && e(t);
            }
          }
          z() {
            this.x.debounce(3e3);
          }
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    ,
    ,
    ,
    function (t, e, n) {
      function r() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      }
      function i(t, e) {
        return "@me" === t.jid
          ? e.authorMe(t)
          : "@psa" === t.jid
          ? e.authorPsa(t)
          : e.authorUser(t);
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "default", function () {
          return b;
        });
      var r,
        i,
        o = "undefined" != typeof Promise ? Promise : null,
        u = "function" == typeof setImmediate ? setImmediate : null,
        a = 0,
        s = [],
        c = [],
        l = [],
        f = { sentinel: "CONTINUE_AS_IF_NO_HANDLER" },
        d = { sentinel: "RETRY_ASYNCHRONOUSLY" },
        h = { sentinel: "TO_STRING" },
        p = { sentinel: "DID_ERROR" },
        g = null,
        v = [],
        m = 128,
        y = "undefined" == typeof self ? void 0 : self;
      function b(t, e) {
        (this.A = 0),
          (this.B = void 0),
          (this.C = void 0),
          (this.D = void 0),
          (this.E = void 0),
          (this.F = 0),
          (this.G = void 0),
          (this.x = void 0),
          (this.H = null),
          (this.I = void 0),
          (this.J = void 0),
          (this.K = void 0),
          (this.control = void 0),
          e && (this.E = e.this),
          "function" == typeof t &&
            ((this.C = t),
            (this.A |= 4),
            (this.A |= 256),
            K(
              t,
              this.E,
              (t) => D(this, 0, !0, !1, t),
              (t) => D(this, 0, !1, !1, t)
            ));
      }
      function _(t) {
        if (void 0 === t) return r;
        if (O(t)) return t;
        var e = new b();
        return D(e, 0, !0, !1, t), q(e, 512), e;
      }
      function w(t) {
        var e = new b();
        return (e.B = t), q(e, 514), v.push(e), e;
      }
      function k(t) {
        var e = "";
        if (t.A & m) e = (t.C || t.D).call(t.E, h);
        else if (t.G) e = `.addRawControl(${t.G.name}, ${t.G.foo})`;
        else if (16 & t.A) e = `.endWithControls(${Object.keys(t.control)})`;
        else if (512 & t.A)
          e =
            1 & t.A
              ? `Promise.resolve(${void 0 === t.B ? "" : t.B})`
              : `Promise.reject(${void 0 === t.B ? "" : t.B})`;
        else if (256 & t.A)
          switch (3 & t.A) {
            case 2:
            case 0:
            case 1:
              e = `new Promise(${t.C})`;
          }
        else
          t.C && t.D
            ? (e = `.then(${t.C}, ${t.D})`)
            : t.C
            ? (e = `.then(${t.C})`)
            : t.D && (e = `.catch(${t.D})`);
        return e;
      }
      function C(t) {
        (this.message = t), (this.stack = new Error(t || this.name).stack);
      }
      function E() {
        var t, e;
        0 === a &&
          (c.length || v.length) &&
          ((a = 1),
          i ||
            ((e = 0),
            (i =
              "undefined" == typeof MutationObserver ||
              (y && y.navigator && y.navigator.standalone)
                ? o
                  ? function () {
                      o.resolve().then(G);
                    }
                  : "function" == typeof u
                  ? function () {
                      u(G);
                    }
                  : function () {
                      setTimeout(G, 0);
                    }
                : ((t = document.createTextNode("")),
                  new MutationObserver(G).observe(t, { characterData: !0 }),
                  function () {
                    t.data = e = 1 - e;
                  }))),
          i());
      }
      function S(t, e) {
        q(t, 8),
          (e.I = t),
          t.K
            ? t.K.push(e)
            : t.J
            ? ((t.K = [t.J, e]), (t.J = void 0))
            : (t.J = e);
      }
      function A(t) {
        if (t && ("object" == typeof t || "function" == typeof t)) {
          var e;
          try {
            e = t.then;
          } catch (t) {
            return (g = t), p;
          }
          if ("function" == typeof e) return e;
        }
      }
      function I(t) {
        if (!t || O(t)) return t;
        var e = A(t);
        if (e === p) return w(g);
        if (e) {
          var n = new b(function (n, r) {
            e.call(t, n, r);
          });
          return (n.H = t), n;
        }
        return t;
      }
      function O(t) {
        return t instanceof b;
      }
      function P(t, e, n) {
        var r,
          i,
          o,
          u,
          a = O((t = I(t))),
          s = !1;
        if (a) {
          if (!(3 & t.A)) return q(t.then(e, n), 32);
          q(t, 8),
            (s = !!(64 & t.A)),
            (o = t.E),
            (r = 1 & t.A ? e : n),
            (i = t.B);
        } else (r = e), (i = t);
        if (!r) return _(t).then();
        if ((i = F(r, o, i, !0)) === p) u = w(g);
        else {
          if (i === d) return _(t).then(e, n);
          if (i === f) return a ? t.then() : _(t);
          u = _(i);
        }
        return (
          s && (u = u.cancellable()), void 0 !== o && ((u = u.then()).E = o), u
        );
      }
      function D(t, e, n, r, i) {
        if (e === t.F) {
          var o = ++t.F;
          if ((q(t, 4), (t.H = null), n))
            if (i === t)
              (t.I = void 0),
                M(t, !1, r, new TypeError("promise resolved to itself"));
            else if (O(i)) {
              var u = 3 & i.A;
              0 === u
                ? S(i, t)
                : ((t.I = i), q(t, 1024), q(i, 8), M(t, 1 === u, r, i.B));
            } else {
              var a = A(i);
              a === p
                ? ((t.I = void 0), M(t, !1, r, g))
                : a
                ? ((t.I = void 0),
                  (t.H = i),
                  K(
                    a,
                    i,
                    (e) => D(t, o, !0, !1, e),
                    (e) => D(t, o, !1, !1, e)
                  ))
                : M(t, !0, r, i);
            }
          else M(t, !1, r, i);
        }
      }
      function x(t, e, n, r, i) {
        e === t.F && (B(t), D(t, e, n, r, i));
      }
      function B(t) {
        if (t.I) {
          var e = t.I;
          if (((t.I = void 0), e.J === t)) e.J = void 0;
          else if (e.K) {
            for (var n = e.K, r = 0; r < n.length; r++)
              if (n[r] === t) {
                n.splice(r, 1);
                break;
              }
            0 === n.length && (e.K = void 0);
          }
        }
      }
      function T(t) {
        if (null == t) throw new Error("Invalid .catch guard " + t);
        if ("function" == typeof t) return t;
        if ("object" == typeof t)
          throw new Error("Object guards in .catch are currently unsupported");
        return function (e) {
          return e === t;
        };
      }
      function N(t, e) {
        return function (n, r) {
          return n === h
            ? `.catch(..., ${e})`
            : t &&
              !(function (t, e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (r === Error || r.prototype instanceof Error) {
                    if (e instanceof r) return !0;
                  } else if (r(e)) return !0;
                }
                return !1;
              })(t, n)
            ? f
            : r
            ? d
            : e.call(this, n);
        };
      }
      function M(t, e, n, r) {
        if ((q(t, 4 | (e ? 1 : 2)), (t.B = r), t.J))
          j(t.J, e, n, r), (t.J = void 0);
        else if (t.K) {
          var i = t.K;
          t.K = void 0;
          for (var o = 0; o < i.length; o++) j(i[o], e, n, r);
        } else e || 8 & t.A || v.push(t);
      }
      function j(t, e, n, r) {
        t.F++;
        var i = U(t, e);
        if (i && 32 & t.A) {
          q(t, 4);
          var o = F(i, t.E, r, !0);
          if (o !== d)
            return void (o === p
              ? ((t.I = void 0), M(t, !1, n, g))
              : o === f
              ? M(t, e, n, r)
              : ((t.I = void 0), D(t, t.F, !0, n, o)));
          t.A &= -5;
        }
        i ? ((n ? l : c).push(t), E()) : M(t, e, n, r);
      }
      function L(t, e) {
        for (; 0 !== t.length; ) e.push(t.pop());
      }
      function G() {
        for (; 0 !== s.length || 0 !== c.length; ) {
          0 === s.length && L(c, s);
          var t = s.pop(),
            e = t.I,
            n = !!(e && 1 & e.A),
            r = e && e.B,
            i = U(t, n);
          if ((q(t, 4), i)) {
            var o = void 0;
            do {
              o = F(i, t.E, r, !1);
            } while (o === d);
            o === p
              ? ((r = g), (n = !1), (t.I = void 0))
              : o !== f && ((r = o), (n = !0), (t.I = void 0));
          }
          3 & t.A || (D(t, t.F, n, !0, r), L(l, s));
        }
        for (a--; 0 !== v.length; ) {
          var u = v.pop();
          8 & u.A || $(u, u.B);
        }
      }
      (b.resolve = _),
        (b.reject = w),
        (b.prototype.then = function (t, e) {
          "function" != typeof t && (t = void 0),
            "function" != typeof e && (e = void 0);
          var n = new b();
          (n.C = t), (n.D = e), (n.E = this.E), 64 & this.A && q(n, 64);
          var r = 3 & this.A;
          return (
            0 === r
              ? S(this, n)
              : (q(this, 8),
                (1 === r ? t : e)
                  ? ((n.I = this), c.push(n), E())
                  : ((n.I = this),
                    q(n, r),
                    (n.B = this.B),
                    2 === r && v.push(n))),
            n
          );
        }),
        (b.prototype.catch = function (t) {
          var e = arguments.length - 1;
          if (0 === e) return this.then(void 0, t);
          for (var n = new Array(e), r = 0; r < e; r++) n[r] = T(arguments[r]);
          var i = N(n, arguments[e]),
            o = P(this, void 0, i);
          return o.D && q(o, m), o;
        }),
        (b.all = function (t) {
          return new b(function (e, n) {
            var r = t.length;
            if (0 !== r)
              for (var i = new Array(t.length), o = 0; o < t.length; o++)
                i[o] = P(t[o], u, n);
            else e([]);
            function u(t) {
              if (0 == --r) {
                for (var n = [], o = 0; o < i.length; o++) {
                  var u = i[o];
                  n.push(u && 3 & u.A ? u.B : t);
                }
                e(n);
              }
              return t;
            }
          });
        }),
        (b.allSettled = function (t) {
          return new b(function (e, n) {
            var r = Array.from(t),
              i = r.length;
            if (0 !== i)
              for (
                var o = new Array(r.length), u = c(!1), a = c(!0), s = 0;
                s < r.length;
                s++
              )
                o[s] = P(r[s], u, a);
            else e([]);
            function c(t) {
              return function (n) {
                var r = t
                  ? { status: "rejected", reason: n }
                  : { status: "fulfilled", value: n };
                if (0 == --i) {
                  for (var u = [], a = 0; a < o.length; a++) {
                    var s = o[a];
                    u.push(s && 3 & s.A ? s.B : r);
                  }
                  e(u);
                }
                return r;
              };
            }
          });
        }),
        (b.race = function (t) {
          var e = I(t);
          if (O(e)) {
            var n = e.then((t) => b.race(t));
            return (n.E = void 0), (n.A &= -65), n;
          }
          return new b(function (t, n) {
            for (var r = 0; r < e.length; r++) {
              var i = I(e[r]);
              if (!O(i) || 3 & i.A)
                for (t(i), r++; r < e.length; r++) {
                  var o = e[r];
                  O(o) && q(o, 8);
                }
              else i.then(t, n);
            }
          });
        }),
        (b.prototype.toString = function () {
          for (var t, e = [], n = this, r = !1; n; n = n.I) {
            (t = n),
              !r &&
                3 & n.A &&
                ((r = !0),
                512 & n.A ||
                  (1 & n.A
                    ? e.push(`[resolved value: ${n.B}]`)
                    : e.push(`[rejected reason: ${n.B}]`)));
            var i = k(n);
            1024 & n.A && (i = "~" + i), e.push(i);
          }
          return (
            e.reverse(), 768 & t.A || (e[0] = "[Promise]" + e[0]), e.join("\n")
          );
        }),
        (b.prototype.finally = function (t) {
          function e(e) {
            return e === h ? `.finally(${t})` : (t.call(this), f);
          }
          return q(this.then(e, e), m);
        }),
        (C.prototype = Object.create(Error.prototype, {
          name: { value: "AbortError" },
        })),
        (b.CancellationError = C),
        (b.prototype.cancellable = function () {
          return q(this.then(), 64);
        }),
        (b.prototype.cancel = function (t) {
          for (var e, n = this; n && !(3 & n.A); n = n.I) 64 & n.A && (e = n);
          if (e)
            if ((void 0 === t && (t = new C()), U(e, !1))) {
              var r = new b();
              B(e), S(r, e), x(r, 0, !1, !1, t);
            } else x(e, e.F, !1, !1, t);
        });
      var R =
        null == (null == y ? void 0 : y.dispatchEvent)
          ? null
          : class extends Event {
              constructor(t, e) {
                super(t, { cancelable: !0 }),
                  Object.defineProperties(this, {
                    promise: { value: e.promise, enumerable: !0 },
                    reason: { value: e.reason, enumerable: !0 },
                  });
              }
            };
      function $(t, e) {
        if (null != (null == y ? void 0 : y.dispatchEvent)) {
          var n = new R("unhandledrejection", { promise: t, reason: e });
          if (
            (y.dispatchEvent(n),
            !y.PromiseRejectionEvent && y.onunhandledrejection)
          )
            try {
              y.onunhandledrejection(n);
            } catch (t) {}
        } else
          "undefined" != typeof process && null != process.emit
            ? process.emit("unhandledRejection", e, t)
            : console.error("StackPromise did not catch " + e, t, e);
      }
      function K(t, e, n, r) {
        try {
          t.call(e, n, r);
        } catch (t) {
          r(t);
        }
      }
      function U(t, e) {
        if (!(4 & t.A)) return e ? t.C : t.D;
      }
      function F(t, e, n, r) {
        try {
          return r ? t.call(e, n, !0) : t.call(e, n);
        } catch (t) {
          return (g = t), p;
        }
      }
      function q(t, e) {
        return (t.A |= e), t;
      }
      D((r = new b()), 0, !0, !1, void 0);
    },
    function (t, e, n) {
      n.r(e),
        n.d(e, "getHash", function () {
          return a;
        }),
        n.d(e, "getRefreshSecs", function () {
          return s;
        }),
        n.d(e, "startAbPropsStore", function () {
          return d;
        });
      var r = n(6),
        i = n(162),
        o = n(191),
        u = n(23);
      function a() {
        var t,
          e = (null == (t = r.b.get()) ? void 0 : t.hash) || null;
        return Promise.resolve(e);
      }
      function s() {
        var t;
        return Promise.resolve(null == (t = r.b.get()) ? void 0 : t.refresh);
      }
      function c(t) {
        if (!t) return {};
        var e = {};
        return (
          Object.keys(t).forEach((n) => {
            var r = t[n];
            null != r && (e[n] = r);
          }),
          e
        );
      }
      function l(t) {
        if (!t) return {};
        var e = {};
        return (
          Object.keys(t).forEach((n) => {
            null != o.a[n] && (e[n] = t[n]);
          }),
          e
        );
      }
      var f = {
        getHash: a,
        getRefreshSecs: s,
        getAbProps: () => {
          var t = r.b.get();
          return Promise.resolve({
            abKey: t.abKey,
            hash: t.hash,
            refresh: t.refresh,
            lastSyncTime: t.lastSyncTime,
            propValues: c(t.propValues),
            propExpoKeys: t.propExpoKeys,
            internalExpoKeys: t.internalExpoKeys,
            expoKeyStr: t.expoKeyStr,
            overridePropValues: c(t.overridePropValues),
          });
        },
        setAbProps: (t) =>
          r.b
            .set({
              abKey: t.abKey,
              hash: t.hash,
              refresh: t.refresh,
              lastSyncTime: t.lastSyncTime,
              propValues: l(t.propValues),
              propExpoKeys: t.propExpoKeys,
              internalExpoKeys: t.internalExpoKeys,
              expoKeyStr: t.expoKeyStr,
            })
            .then(() => (0, u.f)()),
      };
      function d() {
        __LOG__(2)`Starting ABProps store`, (0, i.f)(f, o.a);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) return t;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var u, a = t[Symbol.iterator]();
              !(r = (u = a.next()).done) &&
              (n.push(u.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        }
      };
    },
    function (t, e, n) {
      var r = n(427);
      t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      };
    },
    function (t, e) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    function (t, e, n) {
      var r = {
        "./bn.js": [449, 166],
        "./en.js": [450, 167],
        "./gu.js": [451, 168],
        "./hi.js": [452, 169],
        "./kn.js": [453, 170],
        "./ml.js": [454, 171],
        "./mr.js": [455, 172],
        "./pa.js": [456, 173],
        "./ta.js": [457, 174],
        "./te.js": [458, 175],
        "./ur.js": [459, 176],
      };
      function i(t) {
        if (!n.o(r, t))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = r[t],
          i = e[0];
        return n.e(e[1]).then(function () {
          return n.t(i, 7);
        });
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 429),
        (t.exports = i);
    },
    function (t, e, n) {
      var r = {
        "./bn.js": [460, 143],
        "./en.js": [461, 144],
        "./gu.js": [462, 145],
        "./hi.js": [463, 146],
        "./kn.js": [464, 147],
        "./ml.js": [465, 148],
        "./mr.js": [466, 149],
        "./pa.js": [467, 150],
        "./ta.js": [468, 151],
        "./te.js": [469, 152],
        "./ur.js": [470, 153],
      };
      function i(t) {
        if (!n.o(r, t))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = r[t],
          i = e[0];
        return n.e(e[1]).then(function () {
          return n(i);
        });
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 430),
        (t.exports = i);
    },
  ],
]);
