"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [33],
  {
    0: function (e, a, r) {
      r.d(a, "b", function () {
        return n;
      }),
        r.d(a, "e", function () {
          return t;
        }),
        r.d(a, "d", function () {
          return s;
        }),
        r.d(a, "a", function () {
          return c;
        }),
        r.d(a, "c", function () {
          return i;
        });
      var n = { REPEATED: 64, PACKED: 128, REQUIRED: 256 },
        t = 31,
        s = {
          INT32: 1,
          INT64: 2,
          UINT32: 3,
          UINT64: 4,
          SINT32: 5,
          SINT64: 6,
          BOOL: 7,
          ENUM: 8,
          FIXED64: 9,
          SFIXED64: 10,
          DOUBLE: 11,
          STRING: 12,
          BYTES: 13,
          MESSAGE: 14,
          FIXED32: 15,
          SFIXED32: 16,
          FLOAT: 17,
        },
        c = { VARINT: 0, BIT64: 1, BINARY: 2, BIT32: 5 },
        i = {
          ONEOF: "__oneofs__",
          RESERVED: "__reserved__",
          RESERVED_TAGS: "tags",
          RESERVED_FIELDS: "fields",
        };
    },
    495: function (e, a, r) {
      r.d(a, "a", function () {
        return t;
      }),
        r.d(a, "b", function () {
          return s;
        });
      var n = r(0),
        t = {
          UNKNOWN: 0,
          CHROME: 1,
          FIREFOX: 2,
          IE: 3,
          OPERA: 4,
          SAFARI: 5,
          EDGE: 6,
          DESKTOP: 7,
          IPAD: 8,
          ANDROID_TABLET: 9,
          OHANA: 10,
          ALOHA: 11,
          CATALINA: 12,
          TCL_TV: 13,
        },
        s = {},
        c = {};
      (s.internalSpec = {
        os: [1, n.d.STRING],
        version: [2, n.d.MESSAGE, c],
        platformType: [3, n.d.ENUM, t],
        requireFullSync: [4, n.d.BOOL],
      }),
        (c.internalSpec = {
          primary: [1, n.d.UINT32],
          secondary: [2, n.d.UINT32],
          tertiary: [3, n.d.UINT32],
          quaternary: [4, n.d.UINT32],
          quinary: [5, n.d.UINT32],
        });
    },
    496: function (e, a, r) {
      r.d(a, "b", function () {
        return t;
      }),
        r.d(a, "a", function () {
          return s;
        });
      var n = r(19);
      function t(e, a) {
        (0, n.i)({ title: 142 }),
          e.fireAndForget("backend", "registerCompanionDevice", {
            qrString: a,
          });
      }
      function s(e) {
        e.fireAndForget("backend", "loadCompanions", {});
      }
    },
    644: function (e, a, r) {
      r.r(a);
      var n = r(1),
        t = (r(13), r(18)),
        s = r(54),
        c = r(56),
        i = r(272),
        o = r(231),
        E = r(112),
        d = r(496),
        u = r(495),
        I = r(477),
        b = "Mac OS",
        f = "Windows",
        p = "Chrome",
        A = "Firefox",
        l = "Edge",
        O = "Opera",
        T = class extends c.a {
          constructor(e, a) {
            super(e, a),
              (this.VK = () => (0, n.b)(2, t.b, { l10n: 141 })),
              (this.VL = (e, a, r) => {
                var t = this.props.companions;
                return (
                  (t = null != t ? t : []),
                  (0, n.b)(2, S, { companion: t[r], selected: a })
                );
              });
          }
          componentDidMount() {
            (0, d.a)(this.props.backend), super.componentDidMount();
          }
          addSoftKeys(e, a) {
            this.props.companions
              ? (e.setLeftAsBack(),
                e.setCenterLabel(754, (e) => {
                  e.openScreen("ADD_COMPANION_DEVICE");
                }))
              : (e.setFull(788), e.setBack(a.goBack));
          }
          render() {
            var e,
              a = this.props.companions;
            if (a) {
              var r = a.map((e) => e.deviceId);
              e = (0, n.b)(2, o.a, {
                items: r,
                keyOf: R,
                renderItem: this.VL,
                emptyLabel: 143,
              });
            } else e = (0, n.b)(2, I.a);
            return (0, n.b)(2, i.a, { title: this.VK(), children: e });
          }
        };
      function R(e) {
        return e.toString();
      }
      function S(e) {
        var a,
          r,
          t = e.companion,
          s = e.selected,
          c = t.os,
          i = t.platformType;
        switch (c) {
          case b:
            switch (i) {
              case u.a.CHROME:
                (a = p), (r = b);
                break;
              case u.a.FIREFOX:
                (a = A), (r = b);
                break;
              case u.a.SAFARI:
                (a = "Safari"), (r = b);
                break;
              case u.a.OPERA:
                (a = O), (r = b);
                break;
              default:
                a = b;
            }
            break;
          case f:
            switch (i) {
              case u.a.CHROME:
                (a = p), (r = f);
                break;
              case u.a.FIREFOX:
                (a = A), (r = f);
                break;
              case u.a.OPERA:
                (a = O), (r = f);
                break;
              case u.a.EDGE:
                (a = l), (r = f);
                break;
              case u.a.IE:
                (a = "IE"), (r = f);
                break;
              default:
                a = f;
            }
            break;
          default:
            switch (i) {
              case u.a.ANDROID_TABLET:
                a = "Android";
                break;
              case u.a.IPAD:
                a = "iPad";
                break;
              case u.a.CHROME:
                a = p;
                break;
              case u.a.FIREFOX:
                a = A;
                break;
              case u.a.OPERA:
                a = O;
                break;
              case u.a.EDGE:
                a = l;
                break;
              case u.a.IE:
                a = "IE";
                break;
              default:
                a = "??_(???)_/??";
            }
        }
        return (0, n.b)(2, E.a, {
          rawTitle: a,
          rawSubtitle: r,
          selected: s,
          borderBottom: !0,
        });
      }
      a.default = (0, s.j)((0, c.e)(T));
    },
  },
]);
