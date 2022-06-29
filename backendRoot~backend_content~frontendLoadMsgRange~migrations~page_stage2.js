"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [0],
  {
    217: function (e, r, t) {
      t.d(r, "k", function () {
        return p;
      }),
        t.d(r, "d", function () {
          return m;
        }),
        t.d(r, "a", function () {
          return v;
        }),
        t.d(r, "i", function () {
          return _;
        }),
        t.d(r, "c", function () {
          return B;
        }),
        t.d(r, "b", function () {
          return P;
        }),
        t.d(r, "h", function () {
          return $;
        }),
        t.d(r, "g", function () {
          return G;
        }),
        t.d(r, "j", function () {
          return U;
        }),
        t.d(r, "m", function () {
          return K;
        }),
        t.d(r, "e", function () {
          return z;
        }),
        t.d(r, "f", function () {
          return V;
        }),
        t.d(r, "l", function () {
          return W;
        });
      var n = t(9),
        a = t.n(n),
        i = t(15),
        u = t(7),
        o = t(10),
        s = t(40),
        c = t(25),
        f = "BEGIN:VCARD",
        l = "END:VCARD";
      function p(e) {
        var r = new Set();
        return (
          e.forEach((e) => {
            e.phoneNumbers &&
              e.phoneNumbers.forEach((e) => {
                e.formattedNumber && r.add(e.formattedNumber);
              });
          }),
          r
        );
      }
      function d(e) {
        return (
          e.formattedContactName ||
          (e.firstName && e.lastName
            ? `${e.firstName} ${e.lastName}`
            : void 0) ||
          e.firstName ||
          e.lastName ||
          e.nickname ||
          (function (e) {
            var r;
            return e.phoneNumbers
              ? null == (r = e.phoneNumbers[0])
                ? void 0
                : r.formattedNumber
              : null;
          })(e) ||
          (function (e) {
            var r;
            return e.emails
              ? null == (r = e.emails[0])
                ? void 0
                : r.value
              : null;
          })(e) ||
          "-"
        );
      }
      function m(e) {
        return d(e);
      }
      function v(e, r) {
        var t = r.reduce(
            (e, r) => (r.phonebookPhone && (e[r.phonebookPhone] = r), e),
            {}
          ),
          n = 1,
          a = [];
        a.push(f),
          a.push(T("VERSION", "3.0")),
          a.push(
            T(
              "N",
              R([e.lastName, e.firstName, e.middleName, e.prefix, e.suffix])
            )
          ),
          a.push(T("FN", d(e))),
          e.nickname && a.push(T("NICKNAME", e.nickname)),
          e.phoneticFirstName &&
            a.push(T("X-PHONETIC-FIRST-NAME", e.phoneticFirstName)),
          e.phoneticLastName &&
            a.push(T("X-PHONETIC-LAST-NAME", e.phoneticLastName)),
          (e.company || e.department) &&
            a.push(T("ORG", R([e.company, e.department]))),
          e.jobTitle && a.push(T("TITLE", e.jobTitle));
        var i = e.bizName;
        e.phoneNumbers &&
          e.phoneNumbers.forEach((e) => {
            var r,
              u = e.label,
              o = t[e.formattedNumber];
            (i =
              i ||
              (null == o || null == (r = o.verifiedInfo) ? void 0 : r.name)),
              u
                ? (a.push(A(N(e, o), n, e.formattedNumber, u)), n++)
                : a.push(T(N(e, o), e.formattedNumber));
          }),
          e.emails &&
            e.emails.forEach((e) => {
              var r = e.label;
              r
                ? (a.push(A(y(e), n, e.value, r)), n++)
                : a.push(T(y(e), e.value));
            }),
          e.addresses &&
            e.addresses.forEach((e) => {
              var r = e.label,
                t = R(["", "", e.street, e.city, e.state, e.zip, e.country]);
              r ? a.push(A(E(e), n, t, r)) : a.push(I(n, E(e), t)),
                e.countryCode && a.push(I(n, "X-ABADR", e.countryCode)),
                n++;
            }),
          e.urls &&
            e.urls.forEach((e) => {
              var r = e.label,
                t = e.value;
              r ? (a.push(A(h(e), n, t, r)), n++) : a.push(T(h(e), t));
            }),
          e.ims &&
            e.ims.forEach((e) => {
              var r = e.label,
                t = e.userId;
              r ? (a.push(A(b(e), n, t, r)), n++) : a.push(T(b(e), t));
            });
        var u = e.birthday;
        if (u) {
          var o = (function (e) {
            var r = new Date(e);
            if (isNaN(r)) {
              if (8 !== e.length) return null;
              r = new Date(
                parseInt(e.substring(0, 4), 10),
                parseInt(e.substring(4, 6), 10) - 1,
                parseInt(e.substring(6, 8), 10)
              );
            }
            return r;
          })(u);
          o &&
            !isNaN(o) &&
            a.push(
              T(
                { key: "BDAY", extras: { type: "date" } },
                o ? o.toISOString().slice(0, 10) : u
              )
            );
        }
        var s = e.photo;
        return (
          s && a.push(T({ key: "PHOTO", extras: { BASE64: "" } }, s)),
          i && a.push(T("X-WA-BIZ-NAME", i)),
          a.push(l),
          a.join("\n")
        );
      }
      function N(e, r) {
        var t = {};
        return (
          e.type &&
            ("_HOMEFAX" === e.type
              ? (t.type = "HOME;type=FAX")
              : "_WORKFAX" === e.type
              ? (t.type = "WORK;type=FAX")
              : (t.type = e.type)),
          e.jid ? (t.waid = (0, u.u)(e.jid)) : r && (t.waid = (0, u.u)(r.jid)),
          { key: "TEL", extras: t }
        );
      }
      function y(e) {
        var r = {};
        return (
          e.type ? (r.type = "INTERNET;type=" + e.type) : (r.type = "INTERNET"),
          { key: "EMAIL", extras: r }
        );
      }
      function h(e) {
        var r = {};
        return e.type && (r.type = e.type), { key: "URL", extras: r };
      }
      function b(e) {
        var r = {};
        return (
          e.type && (r.type = e.type),
          { serviceKey: "X-" + e.service, extras: r }
        );
      }
      function E(e) {
        var r = {};
        return e.type && (r.type = e.type), { key: "ADR", extras: r };
      }
      function A(e, r, t, n) {
        return I(r, e, t) + "\n" + I(r, "X-ABLabel", n);
      }
      function O(e) {
        if ("string" == typeof e) return e;
        var r = (0, o.v)(e.extras).map((e) => {
            var r = a()(e, 2),
              t = r[0],
              n = r[1];
            return n ? `${t}=${n}` : t;
          }),
          t = e.key || e.serviceKey;
        return 0 === r.length ? t : `${t};${r.join(";")}`;
      }
      function I(e, r, t) {
        return `item${e}.${O(r)}:${t}`;
      }
      function T(e, r) {
        return `${O(e)}:${r}`;
      }
      function R(e) {
        return e.join(";");
      }
      var k = /\r\n|\r|\n/,
        x = /^([^:]+):(.*)$/,
        C = /^([^.]+)\.(.*)$/;
      function _(e) {
        var r = e.split(k),
          t = { version: void 0 },
          n = [],
          a = {},
          u = [],
          o = {};
        return (
          r.forEach((e) => {
            if (e !== f && e !== l) {
              var r = x.exec(e);
              if (r) {
                var s = r[1],
                  c = r[2].split(";"),
                  p = C.exec(s);
                p && (s = p[2]);
                var d = (function (e) {
                    var r = w.exec(e);
                    return r ? i.l.find((e) => e === r[1]) : null;
                  })(s),
                  m = null;
                if (!d) {
                  if (
                    !(m = (function (e) {
                      if ("X-ABLabel" === e || "X-ABADR" === e) return null;
                      var r = X.exec(e);
                      return r ? r[1] : null;
                    })(s))
                  )
                    return;
                  var v = L(c, 0);
                  if (!v) return;
                  var N = { type: j(s) || void 0, service: m, userId: v };
                  return (
                    p &&
                      (a[p[1]] = (e) => {
                        N.label = e;
                      }),
                    t.ims || (t.ims = []),
                    void t.ims.push(N)
                  );
                }
                if (
                  (function (e) {
                    switch (e) {
                      case "TEL":
                      case "EMAIL":
                      case "URL":
                      case "ADR":
                      case "_IM":
                      case "X-ABADR":
                      case "X-ABLabel":
                        return !0;
                    }
                    return !1;
                  })(d)
                )
                  switch (d) {
                    case "X-ABLabel":
                      p && n.push({ reference: p[1], value: L(c, 0) || "" });
                      break;
                    case "X-ABADR":
                      p && u.push({ reference: p[1], value: L(c, 0) || "" });
                      break;
                    case "TEL":
                      var y = L(c, 0);
                      if (y) {
                        var h = {
                          type: H(s) || void 0,
                          jid: D(s) || void 0,
                          formattedNumber: y,
                          label: S(s) || void 0,
                        };
                        p &&
                          (a[p[1]] = (e) => {
                            h.label = e;
                          }),
                          t.phoneNumbers || (t.phoneNumbers = []),
                          t.phoneNumbers.push(h);
                      }
                      break;
                    case "EMAIL":
                      var b = L(c, 0);
                      if (b) {
                        var E = {
                          type: j(s) || void 0,
                          value: b,
                          label: M(s) || void 0,
                        };
                        p &&
                          (a[p[1]] = (e) => {
                            E.label = e;
                          }),
                          t.emails || (t.emails = []),
                          t.emails.push(E);
                      }
                      break;
                    case "URL":
                      var A = L(c, 0);
                      if (A) {
                        var O = { type: j(s) || void 0, value: A };
                        p &&
                          (a[p[1]] = (e) => {
                            O.label = e;
                          }),
                          t.urls || (t.urls = []),
                          t.urls.push(O);
                      }
                      break;
                    case "ADR":
                      var I = {
                        type: j(s) || void 0,
                        street: L(c, 2),
                        city: L(c, 3),
                        state: L(c, 4),
                        zip: L(c, 5),
                        country: L(c, 6),
                        label: F(s) || void 0,
                      };
                      p &&
                        ((a[p[1]] = (e) => {
                          I.label = e;
                        }),
                        (o[p[1]] = (e) => {
                          I.countryCode = e;
                        })),
                        t.addresses || (t.addresses = []),
                        t.addresses.push(I);
                      break;
                    default:
                      __LOG__(2)`Unknown name for multi field: ${d}`;
                  }
                else
                  switch (d) {
                    case "N":
                      (t.lastName = L(c, 0)),
                        (t.firstName = L(c, 1)),
                        (t.middleName = L(c, 2)),
                        (t.prefix = L(c, 3)),
                        (t.suffix = L(c, 4));
                      break;
                    case "FN":
                      t.formattedContactName = L(c, 0);
                      break;
                    case "NICKNAME":
                      t.nickname = L(c, 0);
                      break;
                    case "VERSION":
                      t.version = L(c, 0);
                      break;
                    case "X-PHONETIC-FIRST-NAME":
                      t.phoneticFirstName = L(c, 0);
                      break;
                    case "X-PHONETIC-LAST-NAME":
                      t.phoneticLastName = L(c, 0);
                      break;
                    case "X-WA-BIZ-NAME":
                      t.bizName = L(c, 0);
                      break;
                    case "ORG":
                      (t.company = L(c, 0)), (t.department = L(c, 1));
                      break;
                    case "TITLE":
                      t.jobTitle = L(c, 0);
                      break;
                    case "BDAY":
                      t.birthday = L(c, 0);
                      break;
                    case "PHOTO":
                      t.photo = L(c, 0);
                      break;
                    default:
                      __LOG__(2)`Unknown name: ${d}`;
                  }
              }
            }
          }),
          n.forEach((e) => {
            a[e.reference] && a[e.reference](e.value);
          }),
          u.forEach((e) => {
            o[e.reference] && o[e.reference](e.value);
          }),
          t
        );
      }
      function L(e, r) {
        return e[r] || void 0;
      }
      var X = /^X-([^;]+)(;.*)?$/,
        w = /^([^;]+)(;.*)?$/,
        g = /;waid=(\d+)(;.*)?$/;
      function D(e) {
        var r = g.exec(e);
        return r ? (0, u.B)(r[1]) : null;
      }
      function j(e) {
        for (
          var r = /;type=([^;]+)/gi,
            t = r.exec(e),
            n = function () {
              var n = t[1],
                a = i.m.find((e) => e === n);
              if (a) return { v: a };
              t = r.exec(e);
            };
          null != t;

        ) {
          var a = n();
          if ("object" == typeof a) return a.v;
        }
        return null;
      }
      function M(e) {
        for (var r = /;type=([^;]+)/gi, t = r.exec(e); null != t; ) {
          var n = t[1];
          if (!i.m.includes(n) && "INTERNET" !== n) return n;
          t = r.exec(e);
        }
        return null;
      }
      function F(e) {
        var r = /;type=([^;]+)/gi.exec(e);
        if (null != r) {
          var t = r[1];
          if (!i.m.includes(t)) return t;
        }
        return null;
      }
      function S(e) {
        var r = /;type=([^;]+)/gi.exec(e);
        if (null != r) {
          var t = r[1];
          if (!i.k.includes(t) && !i.f.includes(t)) return t;
        }
        return null;
      }
      function H(e) {
        var r = /;type=([^;]+)/gi,
          t = r.exec(e),
          n = null,
          a = !1;
        if (null != t) {
          var u = t[1];
          if (i.f.includes(u)) {
            switch (u) {
              case "fax-home":
                n = "_HOMEFAX";
                break;
              case "fax-office":
                n = "_WORKFAX";
            }
            return n;
          }
        }
        for (
          var o = function () {
            var u = t,
              o = i.k.find((e) => e === u[1]);
            o ? (n = o) : "FAX" === u[1] && (a = !0), (t = r.exec(e));
          };
          null != t;

        )
          o();
        return (
          a &&
            ("HOME" === n
              ? (n = "_HOMEFAX")
              : "WORK" === n && (n = "_WORKFAX")),
          n
        );
      }
      function B(e) {
        var r = e.phoneNumbers || [],
          t = r.find((e) => e.jid && e.formattedNumber);
        return null != t ? t : r.find((e) => e.formattedNumber);
      }
      function P(e, r) {
        var t = B(e);
        return t && t.jid ? (0, s.c)(t.jid, r) : null;
      }
      function $(e) {
        if (!e.phoneNumbers) return null;
        var r = e.phoneNumbers.find((e) => e.jid);
        return r && r.jid ? r.jid : null;
      }
      function G(e, r) {
        var t = e.contact,
          n = { version: "3.0" },
          a = (e, r) => {
            e && e.length > 0 && (n[r] = e[0]);
          };
        if (
          (a(t.givenName, "firstName"),
          a(t.additionalName, "middleName"),
          a(t.familyName, "lastName"),
          a(t.name, "formattedContactName"),
          a(t.jobTitle, "jobTitle"),
          a(t.honorificPrefix, "prefix"),
          a(t.honorificSuffix, "suffix"),
          a(t.org, "company"),
          t.tel)
        ) {
          var i,
            u = [];
          t.tel.forEach((t) => {
            var n,
              a,
              o = t.value,
              s = e.userJids.get(o);
            s
              ? ((i =
                  i ||
                  (null == (n = r[s]) || null == (a = n.verifiedInfo)
                    ? void 0
                    : a.name)),
                u.push({ formattedNumber: o, jid: s }))
              : u.push({ formattedNumber: o });
          }),
            (n.phoneNumbers = u),
            null != i && (n.bizName = i);
        }
        if (
          (t.email && (n.emails = t.email.map((e) => ({ value: e.value }))),
          t.adr &&
            (n.addresses = t.adr.map((e) => ({
              street: e.streetAddress,
              zip: e.postalCode,
              city: e.locality,
              state: e.region,
              country: e.countryName,
            }))),
          t.bday)
        ) {
          var o = new Date(+t.bday),
            s = o.getMonth() + 1,
            c = o.getDate();
          n.birthday = [
            o.getFullYear(),
            s < 10 ? "0" + s : s,
            c < 10 ? "0" + c : c,
          ].join("-");
        }
        return n;
      }
      function U(e, r) {
        return (0, o.h)(e).then((t) => {
          var n = new c.a(t)
            .readString(e.size)
            .split(l)
            .filter((e) => "" !== e.trim());
          return (null == r ? n : n.slice(0, r)).map(_);
        });
      }
      function K(e, r) {
        var t = e.displayName,
          n = r.displayName;
        return t && n ? t.localeCompare(n) : t ? -1 : n ? 1 : 0;
      }
      function z(e) {
        return W(
          e.map((e) => ({
            displayName: m(e),
            jid: $(e) || void 0,
            photo: e.photo,
            bizName: e.bizName,
          }))
        );
      }
      function V(e) {
        return W(e).map((e) => {
          var r = e.displayName,
            t = _(e.vcard);
          return {
            displayName: r,
            jid: $(t) || void 0,
            photo: t.photo,
            bizName: t.bizName,
          };
        });
      }
      function W(e) {
        return e.slice().sort(K).slice(0, 3);
      }
    },
    79: function (e, r, t) {
      t.d(r, "a", function () {
        return c;
      }),
        t.d(r, "b", function () {
          return f;
        }),
        t.d(r, "c", function () {
          return l;
        }),
        t.d(r, "e", function () {
          return p;
        }),
        t.d(r, "d", function () {
          return d;
        });
      var n = t(6),
        a = t(10),
        i = t(2),
        u = t(31),
        o = t.n(u),
        s = t(3),
        c = "active";
      function f(e) {
        return (
          e.type === i.f.IMAGE ||
          e.type === i.f.VIDEO ||
          (e.type !== i.f.TEXT &&
            e.type !== i.f.CIPHERTEXT &&
            e.type !== i.f.VCARD &&
            e.type !== i.f.PTT &&
            e.type !== i.f.AUDIO &&
            e.type !== i.f.GIF &&
            e.type !== i.f.RICH_HSM &&
            e.type !== i.f.LOCATION &&
            e.type !== i.f.EXTENDED_TEXT &&
            e.type !== i.f.IDENTITY_CHANGE &&
            e.type !== i.f.PRIVACY_CHANGE &&
            e.type !== i.f.MD_PLACEHOLDER &&
            e.type !== i.f.FUTUREPROOF &&
            e.type !== i.f.GROUP_NOTIFICATION &&
            e.type !== i.f.BUSINESS_NOTIFICATION &&
            e.type !== i.f.EPHEMERAL &&
            e.type !== i.f.CONTACT_BLOCK_CHANGE &&
            e.type !== i.f.GROUP_INVITE &&
            e.type !== i.f.DOCUMENT &&
            e.type !== i.f.HSM_BUTTON_REPLY &&
            e.type !== i.f.REVOKED &&
            e.type !== i.f.IMAGE &&
            e.type !== i.f.STICKER &&
            e.type !== i.f.VIDEO &&
            (0, o.a)(e.type))
        );
      }
      function l(e) {
        return (
          !!n.E.get().viewOnceWrite &&
          (function (e) {
            switch (e.type) {
              case "image":
              case "video":
                return !0;
              default:
                return !1;
            }
          })(e)
        );
      }
      function p(e) {
        if (!n.E.get().viewOnceWrite) return e;
        switch (e.type) {
          case "image":
          case "video":
            return (0, a.j)(e, { viewOnce: !0 });
          default:
            return e;
        }
      }
      function d(e) {
        return "active" === e.viewOnceState &&
          null != e.viewOnceExpiration &&
          e.viewOnceExpiration < (0, s.E)()
          ? "expired"
          : e.viewOnceState
          ? e.viewOnceState
          : (__LOG__(3)`maybeExpireViewOnceState Expected view once message`,
            "active");
      }
    },
  },
]);
