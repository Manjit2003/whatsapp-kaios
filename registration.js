"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [163],
  {
    646: function (e, t, r) {
      r.r(t);
      var s = r(1),
        n = r(13),
        a = r(54),
        l = r(31),
        o = r.n(l),
        i = r(19),
        c = r(502),
        u = r(480),
        d = r(272),
        p = r(18),
        b = r.p + "b81d176c573bc5c8ca7d11f14ef5b798.png",
        h = r(164),
        f = r(56),
        m = r(472),
        v = class extends f.a {
          addSoftKeys(e, t) {
            e.setBack(m.e),
              this.props.onSkip
                ? e.setRightLabel(826, this.props.onSkip)
                : e.setFull(827);
          }
          render() {
            return (0, s.b)(2, d.a, {
              children: (0, s.f)(
                1,
                "div",
                "FU",
                [
                  (0, s.f)(
                    1,
                    "div",
                    "FV",
                    [
                      (0, s.f)(1, "div", "FW", (0, s.b)(2, h.a), 2),
                      (0, s.f)(
                        1,
                        "div",
                        "FX",
                        (0, s.b)(2, p.b, { l10n: this.props.label }),
                        2
                      ),
                    ],
                    4
                  ),
                  (0, s.f)(
                    1,
                    "div",
                    "FY",
                    (0, s.f)(1, "img", "FZ", null, 1, { src: b }),
                    2
                  ),
                ],
                4
              ),
            });
          }
        },
        y = (0, f.e)(v),
        C = r(521),
        g = r(482);
      function A() {
        return (0, s.b)(2, C.a, {
          countries: (0, g.b)(),
          onBack: m.e,
          onCancel: m.j,
          onSelect: m.v,
        });
      }
      var N = r(474),
        _ = r(165),
        E =
          (r(127),
          class extends f.a {
            addSoftKeys(e, t) {
              e.setLeftLabel(830, () => (0, _.y)(t, _.u)),
                e.setRightLabel(756, () => {
                  (0, m.b)(t, !1);
                });
            }
            render() {
              return (0, s.b)(2, N.a, {
                title: (0, s.b)(2, p.b, { l10n: 982 }),
                children: (0, s.f)(
                  1,
                  "div",
                  "Cd",
                  [
                    (0, s.f)(
                      1,
                      "div",
                      "Ce",
                      (0, s.f)(1, "img", null, null, 1, { src: b }),
                      2
                    ),
                    (0, s.f)(
                      1,
                      "div",
                      "Cf",
                      (0, s.b)(2, p.b, { l10n: 981 }),
                      2
                    ),
                    (0, s.f)(
                      1,
                      "div",
                      "Cg",
                      (0, s.b)(2, p.b, { l10n: 980 }),
                      2
                    ),
                  ],
                  4
                ),
              });
            }
          }),
        S = (0, f.e)(E),
        G = r(286),
        L = r(118),
        F = class extends f.a {
          addSoftKeys(e) {
            var t = this.props.error;
            "old_version" === t.reason
              ? (e.setLeftLabel(777, L.closeApp), e.setRightLabel(829, G.b))
              : (e.setCenterLabel(766, (e) => {
                  (0, m.l)(e, "blocked", `${t.cc}${t.localNumber}`);
                }),
                "blocked" === t.reason &&
                  (e.setLeftLabel(761, m.j),
                  e.setRightLabel(785, (e) => {
                    (0, _.y)(e, _.e);
                  }))),
              e.setBack(m.e);
          }
          render() {
            var e;
            switch (this.props.error.reason) {
              case "bad_param":
                e = 660;
                break;
              case "old_version":
                e = 294;
                break;
              case "bad_token":
                e = 246;
                break;
              case "blocked":
                e = 648;
                break;
              default:
                e = 660;
            }
            return (0, s.b)(2, d.a, {
              children: (0, s.f)(
                1,
                "div",
                "Ca",
                [
                  (0, s.f)(1, "div", "Cb", (0, s.b)(2, p.b, { l10n: 229 }), 2),
                  (0, s.f)(1, "div", "Cc", (0, s.b)(2, p.b, { l10n: e }), 2),
                ],
                4
              ),
            });
          }
        },
        R = (0, a.h)((0, f.e)(F), (e) => {
          var t = e.reg;
          if ("BLOCKED" === t.type) return { error: t.error };
        }),
        k = r(3),
        x = r(146),
        w = r(76),
        O = r(231),
        I = r(112),
        D = r(487),
        W = (e) => {
          var t = e.className;
          return (0, s.f)(
            32,
            "svg",
            t,
            [
              (0, s.f)(32, "circle", null, null, 1, {
                cx: "25.355",
                cy: "25.355",
                r: "25.355",
                fill: "#D2EDE5",
              }),
              (0, s.f)(32, "rect", null, null, 1, {
                width: "19.389",
                height: "33.31",
                x: "15.909",
                y: "8.949",
                fill: "#AAE1DB",
                rx: "6",
              }),
              (0, s.f)(32, "rect", null, null, 1, {
                width: "16.406",
                height: "24.858",
                x: "17.401",
                y: "12.926",
                fill: "#F3F8F7",
                rx: "3",
              }),
              (0, s.f)(32, "ellipse", null, null, 1, {
                cx: "25.428",
                cy: "21.378",
                fill: "#1DC3B4",
                rx: "2.813",
                ry: "2.784",
              }),
              (0, s.f)(32, "ellipse", null, null, 1, {
                cx: "25.428",
                cy: "28.088",
                fill: "#1DC3B4",
                rx: "4.923",
                ry: "3.23",
              }),
              (0, s.f)(32, "circle", null, null, 1, {
                cx: "41.762",
                cy: "41.762",
                r: "9.438",
                fill: "#fff",
              }),
              (0, s.f)(32, "path", null, null, 1, {
                fill: "#FF1F37",
                "fill-rule": "evenodd",
                d:
                  "M41.762 31.818c-5.489 0-9.944 4.455-9.944 9.944 0 5.488 4.455 9.943 9.944 9.943 5.488 0 9.943-4.455 9.943-9.943 0-5.49-4.455-9.944-9.943-9.944zm-7.955 9.943a7.952 7.952 0 017.954-7.954c1.84 0 3.53.626 4.872 1.68L35.487 46.634a7.858 7.858 0 01-1.68-4.873zm3.083 6.275a7.858 7.858 0 004.872 1.68 7.952 7.952 0 007.955-7.954 7.86 7.86 0 00-1.68-4.872L36.89 48.036z",
                "clip-rule": "evenodd",
              }),
            ],
            4,
            { fill: "none", viewBox: "0 0 56 53" }
          );
        },
        P = (e) => {
          var t = e.className;
          return (0, s.f)(
            32,
            "svg",
            t,
            [
              (0, s.f)(32, "circle", null, null, 1, {
                cx: "26",
                cy: "25.5",
                r: "25.5",
                fill: "#D2EDE5",
              }),
              (0, s.f)(32, "rect", null, null, 1, {
                width: "19.5",
                height: "33.5",
                x: "16.5",
                y: "9",
                fill: "#AAE1DB",
                rx: "6",
              }),
              (0, s.f)(32, "rect", null, null, 1, {
                width: "16.5",
                height: "25",
                x: "18",
                y: "13",
                fill: "#F3F8F7",
                rx: "3",
              }),
              (0, s.f)(32, "ellipse", null, null, 1, {
                cx: "26.073",
                cy: "21.5",
                fill: "#1DC3B4",
                rx: "2.829",
                ry: "2.8",
              }),
              (0, s.f)(32, "ellipse", null, null, 1, {
                cx: "26.073",
                cy: "28.248",
                fill: "#1DC3B4",
                rx: "4.951",
                ry: "3.248",
              }),
              (0, s.f)(32, "circle", null, null, 1, {
                cx: "42.5",
                cy: "42",
                r: "11",
                fill: "#fff",
              }),
              (0, s.f)(32, "path", null, null, 1, {
                fill: "#1BC4B1",
                d:
                  "M42.5 32c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z",
              }),
              (0, s.f)(32, "path", null, null, 1, {
                fill: "#fff",
                d: "m40.8 46.8-4.6-4.5 1.8-1.8 2.8 2.8 6.5-6.6 1.8 1.8z",
              }),
            ],
            4,
            { viewBox: "0 0 54 53" }
          );
        },
        T = r(22),
        B = r.n(T),
        U = "CL GF GC",
        M = "CM GG GC",
        K = r(285),
        j = r(276),
        z = r(159),
        V = class extends n.a {
          componentDidMount() {
            var e = this.props,
              t = e.backend,
              r = e.banAppealLastSync;
            (r && (0, k.n)(r, w.a)) || (0, m.f)(t),
              this.maybeShowBanAppealError();
          }
          componentDidUpdate(e) {
            this.maybeShowBanAppealError(e);
          }
          maybeShowBanAppealError(e) {
            var t = this.props,
              r = t.backend,
              s = t.error,
              n = null == e ? void 0 : e.error;
            null == s ||
              (n && n.type === s.type) ||
              (function (e, t) {
                switch (t.reason) {
                  case "network_error":
                    (0, i.e)({ text: 253, onClose: () => (0, m.c)(e) });
                    break;
                  default:
                    t.reason,
                      (0, i.e)({ text: 263, onClose: () => (0, m.c)(e) });
                }
              })(r, s);
          }
          render() {
            var e = this.props,
              t = e.banAppealState,
              r = e.banAppealContent,
              n = e.country,
              a = e.localNumber,
              l = null;
            switch (t.state) {
              case "banned":
                l = (0, s.b)(2, Z);
                break;
              case "unbanned":
                l = (0, s.b)(2, J, {
                  country: n,
                  localNumber: a,
                  reason: t.reason,
                  reasonUrl: t.reasonUrl,
                });
                break;
              case "in_review":
                l = (0, s.b)(2, q);
                break;
              default:
                t.state, (l = (0, s.b)(2, Y, { banAppealContent: r }));
            }
            return (0, s.b)(2, d.a, { children: l });
          }
        },
        $ = (0, a.h)((0, f.e)(V), (e, t) => {
          var r = e.reg;
          if ("BAN_APPEAL" === r.type)
            return {
              backend: t,
              banAppealReason: r.banAppeal.banReason,
              banAppealState: r.banAppeal.banAppealState,
              banAppealContent: r.banAppeal.banAppealContent,
              banAppealLastSync: r.banAppeal.banAppealLastSync,
              localNumber: r.localNumber,
              country: r.country,
              error: r.error,
            };
        }),
        Q = class extends f.b {
          addSoftKeys(e, t) {
            e.setCenterLabel(785, () => {
              (0, _.y)(t, _.u);
            });
          }
          render() {
            var e = this.props.selected;
            return (0, s.b)(2, I.o, {
              selected: e,
              text: [
                (0, s.b)(2, p.b, {
                  l10n: 46,
                  className: (0, B.a)(e ? "CF" : "CG GM"),
                }),
                11,
              ],
            });
          }
        },
        Y = class extends f.a {
          shouldComponentUpdate(e, t) {
            var r = this.props,
              s = this.state;
            return (
              (r !== e && r.banAppealContent !== e.banAppealContent) ||
              (s !== t && s.content !== t.content)
            );
          }
          constructor(e, t) {
            super(e, t),
              (this.ITEMS = ["terms", "content"]),
              (this.Gm = (e) => {
                this.setState({ content: e });
              }),
              (this.Gn = (e, t) => {
                switch (e) {
                  case "terms":
                    return (0, s.b)(2, Q, { selected: t });
                  case "content":
                    var r = this.props.banAppealContent;
                    return (0, s.b)(2, I.h, {
                      selected: t,
                      children: (0, s.b)(2, D.a, {
                        rows: w.e ? 3 : 4,
                        hasFocusPriority: t,
                        placeholder: 44,
                        onChange: this.Gm,
                        defaultValue: r,
                      }),
                    });
                }
              }),
              (this.state = { content: e.banAppealContent || "" });
          }
          addSoftKeys(e, t) {
            var r = this.state.content;
            e.setCenterLabel(41, () => {
              t.spinUntilReadyOverlay(
                (0, m.u)(t, r).then(() => null),
                { title: 45, left: void 0, onSoftLeft: void 0, close: () => {} }
              );
            }),
              X(e, t),
              e.setBack(() => {
                (0, m.h)(t, r);
              });
          }
          render() {
            return (0, s.b)(2, O.a, {
              items: this.ITEMS,
              renderItem: this.Gn,
              keyOf: H,
              preventLoop: !0,
            });
          }
        };
      function H(e) {
        return e;
      }
      var q = class extends f.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.ITEMS = ["terms", "content"]),
              (this.Gn = (e, t) => {
                switch (e) {
                  case "terms":
                    return (0, s.b)(2, Q, { selected: t });
                  case "content":
                    return (0, s.b)(2, I.a, {
                      title: 43,
                      subtitle: 42,
                      selected: t,
                    });
                }
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            return !1;
          }
          addSoftKeys(e, t) {
            X(e, t),
              e.setBack(() => {
                (0, m.h)(t);
              });
          }
          render() {
            return (0, s.b)(2, O.a, {
              items: this.ITEMS,
              renderItem: this.Gn,
              keyOf: H,
              preventLoop: !0,
            });
          }
        },
        J = class extends f.a {
          addSoftKeys(e, t) {
            var r = this.props,
              n = r.country,
              a = r.localNumber,
              l = r.reason,
              o = r.reasonUrl;
            e.setCenterLabel(796, () => {
              (function (e, t, r) {
                (0, i.g)({
                  text: [
                    (0, s.b)(
                      2,
                      z.b,
                      { phone: `${t.cc}${r}`, bold: !0 },
                      "phone"
                    ),
                    12,
                  ],
                  left: 774,
                  onSoftLeft: () => {
                    ee(e);
                  },
                  center: 823,
                  onSoftCenter: () => {
                    (0, m.p)(e, t, r, void 0, "sms");
                  },
                });
              })(t, n, a);
            }),
              X(e, t),
              "oops" === l
                ? e.setLeftLabel(51, () => {
                    (0, _.y)(t, _.n);
                  })
                : e.setLeftLabel(785, () => {
                    o ? (0, j.a)(t, o) : (0, _.y)(t, _.r);
                  });
          }
          render() {
            var e = "oops" === this.props.reason ? 47 : 48,
              t = P;
            return (0, s.b)(2, K.a, {
              children: (0, s.f)(
                1,
                "div",
                "CH",
                (0, s.f)(
                  1,
                  "div",
                  "CI",
                  [
                    (0, s.f)(
                      1,
                      "div",
                      "CK",
                      (0, s.b)(2, t, { className: "CJ" }),
                      2
                    ),
                    (0, s.f)(1, "div", U, (0, s.b)(2, p.b, { l10n: 49 }), 2),
                    (0, s.f)(1, "div", M, (0, s.b)(2, p.b, { l10n: e }), 2),
                  ],
                  4
                ),
                2
              ),
            });
          }
        },
        Z = class extends f.a {
          addSoftKeys(e, t) {
            e.setCenterLabel(38, () => {
              (0, m.j)(t);
            });
          }
          render() {
            var e = W;
            return (0, s.b)(2, K.a, {
              children: (0, s.f)(
                1,
                "div",
                "CH",
                (0, s.f)(
                  1,
                  "div",
                  "CI",
                  [
                    (0, s.f)(
                      1,
                      "div",
                      "CK",
                      (0, s.b)(2, e, { className: "CJ" }),
                      2
                    ),
                    (0, s.f)(1, "div", U, (0, s.b)(2, p.b, { l10n: 40 }), 2),
                    (0, s.f)(1, "div", M, (0, s.b)(2, p.b, { l10n: 39 }), 2),
                  ],
                  4
                ),
                2
              ),
            });
          }
        };
      function X(e, t, r) {
        e.setRightOptions(() => {
          var e = new x.a("NO_TITLE");
          e.add(37, "skip-confirm" === r ? m.j : ee, t), (0, i.j)(e);
        });
      }
      function ee(e) {
        (0, i.g)({
          text: 36,
          center: 774,
          onSoftCenter: () => {
            (0, m.j)(e);
          },
          left: 761,
          onSoftLeft: "CLOSE",
        });
      }
      var te = class extends f.a {
        componentDidMount() {
          var e = this.props,
            t = e.backend,
            r = e.banAppealLastSync;
          (r && (0, k.n)(r, w.a)) || (0, m.f)(t), super.componentDidMount();
        }
        addSoftKeys(e, t) {
          var r =
            "no_appeal_opened" === this.props.banAppealState.state ? 34 : 50;
          e.setCenterLabel(r, (e) => {
            (0, m.g)(e);
          }),
            (function (e, t) {
              e.setRightOptions(() => {
                var e = new x.a("NO_TITLE");
                e.add(37, () => {
                  ee(t);
                }),
                  (0, i.j)(e);
              });
            })(e, t);
        }
        render() {
          return re(this.props.banReason);
        }
      };
      function re(e) {
        var t =
          "spam" === e
            ? (0, s.b)(2, p.b, { l10n: 33 })
            : (0, s.b)(2, p.b, { l10n: 32 });
        return (0, s.b)(2, d.a, {
          children: (0, s.f)(
            1,
            "div",
            "IM",
            (0, s.f)(
              1,
              "div",
              "IN",
              [
                (0, s.f)(
                  1,
                  "div",
                  "IP",
                  (0, s.b)(2, W, { className: "IO" }),
                  2
                ),
                (0, s.f)(1, "div", "IQ GF GC", t, 0),
                (0, s.f)(
                  1,
                  "div",
                  "IR GG GC",
                  (0, s.b)(2, p.b, { l10n: 35 }),
                  2
                ),
              ],
              4
            ),
            2
          ),
        });
      }
      var se = (0, a.h)((0, f.e)(te), (e, t) => {
          var r = e.reg;
          if ("BLOCKED_BAN_APPEAL" === r.type)
            return {
              backend: t,
              localNumber: r.localNumber,
              country: r.country,
              banReason: r.banAppeal.banReason,
              banAppealState: r.banAppeal.banAppealState,
              banAppealLastSync: r.banAppeal.banAppealLastSync,
            };
        }),
        ne = class extends f.a {
          addSoftKeys(e, t) {
            e.setCenterLabel(34, (e) => {
              var t = this.props,
                r = t.country,
                n = t.localNumber,
                a = t.banReason;
              (0, i.f)({
                text: [
                  (0, s.b)(2, z.b, { phone: `${r.cc}${n}`, bold: !0 }, "phone"),
                  10,
                ],
                confirm: 823,
                onConfirm: () => {
                  (0, m.q)(e, r, n, "sms", a);
                },
              });
            }),
              (function (e, t) {
                e.setRightOptions(() => {
                  var e = new x.a("NO_TITLE");
                  e.add(37, () => {
                    (0, m.j)(t);
                  }),
                    (0, i.j)(e);
                });
              })(e, t);
          }
          render() {
            return re(this.props.banReason);
          }
        },
        ae = (0, a.h)((0, f.e)(ne), (e, t) => {
          var r = e.reg;
          if ("BLOCKED_BAN_APPEAL_PRE" === r.type)
            return {
              backend: t,
              localNumber: r.localNumber,
              country: r.country,
              banReason: r.banReason,
            };
        }),
        le = class extends f.a {
          addSoftKeys(e, t) {
            e.setLeftLabel(794, m.o),
              e.setRightLabel(796, () => {
                var e = this.props,
                  r = e.country,
                  s = e.localNumber,
                  n = e.maskedPhoneNumber;
                (0, m.a)(t, r, s, n);
              }),
              e.setBack(m.e);
          }
          render() {
            var e = this.props.maskedPhoneNumber;
            return (0, s.b)(2, N.a, {
              children: (0, s.f)(
                1,
                "div",
                "Ch",
                [
                  (0, s.f)(
                    1,
                    "div",
                    "Ci GF GC",
                    (0, s.b)(2, p.b, { l10n: 582 }),
                    2
                  ),
                  (0, s.b)(
                    2,
                    z.b,
                    { phone: e, className: "Cj GF GC" },
                    "phone"
                  ),
                  (0, s.f)(
                    1,
                    "div",
                    "Ck GG GC",
                    (0, s.b)(2, p.b, { l10n: 583 }),
                    2
                  ),
                  (0, s.f)(
                    1,
                    "div",
                    "Cl GH GC",
                    (0, s.b)(2, p.b, { l10n: 585 }),
                    2
                  ),
                ],
                8
              ),
            });
          }
        },
        oe = (0, a.h)((0, f.e)(le), (e, t) => {
          var r = e.reg;
          if ("CONFIRM_FOUND_PHONE_NUMBER" === r.type)
            return {
              country: r.country,
              localNumber: r.localNumber,
              maskedPhoneNumber: r.maskedPhoneNumber,
            };
        });
      function ie() {
        return (0, s.b)(2, y, { label: 584, onSkip: m.o });
      }
      var ce = r(517),
        ue = r(69),
        de = r(140),
        pe = r(488),
        be = r(364),
        he = r(493),
        fe = (e) => {
          var t = e.className;
          return (0, s.f)(
            32,
            "svg",
            t,
            (0, s.f)(32, "path", null, null, 1, {
              d:
                "M4.965 8.092a11.361 11.361 0 004.943 4.943l1.65-1.65a.746.746 0 01.764-.18c.84.277 1.748.428 2.678.428.412 0 .75.337.75.75V15c0 .412-.338.75-.75.75C7.957 15.75 2.25 10.043 2.25 3c0-.413.337-.75.75-.75h2.625c.412 0 .75.337.75.75 0 .938.15 1.838.428 2.678a.753.753 0 01-.188.764l-1.65 1.65z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        },
        me = r(500),
        ve = "CP",
        ye = "CW",
        Ce = class extends f.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Go = null),
              (this.Gp = { item: "inputCode", scrollFromTop: "none" }),
              (this.Gs = (e) => {
                var t = this.props,
                  r = t.backend,
                  s = t.localNumber,
                  n = t.country,
                  a = t.maskedPhoneNumber,
                  l = t.flow,
                  o = { iso: n.iso, cc: n.cc.replace("+", "") };
                switch (l) {
                  case "ban-appeal":
                    (0, m.q)(r, o, s, e);
                    break;
                  default:
                    (0, m.p)(r, o, s, a, e);
                }
              }),
              (this.Gt = (e) => {
                var t = this.props,
                  r = t.backend;
                switch (t.flow) {
                  case "ban-appeal":
                    (0, m.n)(r, e);
                    break;
                  default:
                    (0, m.m)(r, e);
                }
              }),
              (this.Gu = (e, t) => {
                var r = this.props;
                switch (e) {
                  case "text":
                    return (0, s.b)(2, Ae, {
                      selected: t,
                      country: r.country,
                      displayNumber: r.displayNumber,
                    });
                  case "inputCode":
                    return (0, s.b)(2, Ne, {
                      selected: t,
                      retryAfter: r.codeGuessRetryAfter,
                      sendCode: this.Gt,
                    });
                  case "sms":
                    return (0, s.b)(2, _e, {
                      method: "sms",
                      selected: t,
                      resend: this.Gs,
                      wait: r.smsWait,
                    });
                  case "voice":
                    return (0, s.b)(2, _e, {
                      method: "voice",
                      selected: t,
                      resend: this.Gs,
                      wait: r.voiceWait,
                    });
                  default:
                    return (0, o.a)(e);
                }
              }),
              e
            );
          }
          componentDidMount() {
            this.Gq(void 0), this.Gr(), super.componentDidMount();
          }
          componentDidUpdate(e) {
            this.Gq(e.error), this.Gr(), super.componentDidUpdate(e);
          }
          componentWillUnmount() {
            this.Go && (self.clearTimeout(this.Go), (this.Go = null)),
              super.componentWillUnmount();
          }
          Gq(e) {
            var t = this.props,
              r = t.error,
              n = t.methods;
            if (null != r && r !== e) {
              var a = (function (e, t, r) {
                switch (e.type) {
                  case "CODE_VERIFY_ERROR":
                    return (function (e, t) {
                      var r = e.reason;
                      switch (r) {
                        case "network_error":
                          return Ee(253);
                        case "too_many_guesses":
                        case "mismatch":
                          if (null != e.retryAfter) {
                            var n = (0, k.z)(e.retryAfter);
                            return Ee(
                              n > 0
                                ? [(0, s.b)(2, be.a, { seconds: n }), 190]
                                : 651,
                              653
                            );
                          }
                          return Ee(652, 653);
                        case "temporarily_unavailable":
                          if (null != e.retryAfter) {
                            var a = (0, k.z)(e.retryAfter);
                            return Ee(
                              a > 0
                                ? [(0, s.b)(2, be.a, { seconds: a }), 191]
                                : 659
                            );
                          }
                          return Ee(659);
                        case "stale":
                          return Ee(658);
                        case "missing":
                          return t.includes("call") ? Ee(655) : Ee(654);
                        case "guessed_too_fast":
                          if (null != e.retryAfter) {
                            var l = (0, k.z)(e.retryAfter);
                            return Ee(
                              l > 0
                                ? [(0, s.b)(2, be.a, { seconds: l }), 59]
                                : 263
                            );
                          }
                          return Ee(263);
                        default:
                          __LOG__(4)`Unrecognized error code ${r}`;
                      }
                    })(e, t);
                  case "CODE_REQUEST_ERROR":
                    return (function (e, t, r) {
                      var n = t.includes("sms"),
                        a = t.includes("voice"),
                        l = null != e.retryAfter ? (0, k.z)(e.retryAfter) : -1,
                        o = null != e.smsWait ? (0, k.z)(e.smsWait) : -1,
                        i = null != e.voiceWait ? (0, k.z)(e.voiceWait) : -1;
                      switch (e.reason) {
                        case "temporarily_unavailable":
                          return Ee(
                            l > 0
                              ? [(0, s.b)(2, be.a, { seconds: l }), 191]
                              : 659
                          );
                        case "too_recent":
                          return Ee(
                            l > 0
                              ? [(0, s.b)(2, be.a, { seconds: l }), 67]
                              : 262
                          );
                        case "provider_timeout":
                          switch (e.method) {
                            case "voice":
                              return Ee(
                                i > 0
                                  ? [(0, s.b)(2, be.a, { seconds: l }), 69]
                                  : 265
                              );
                            default:
                              return (
                                e.method,
                                Ee(
                                  o > 0
                                    ? [(0, s.b)(2, be.a, { seconds: o }), 61]
                                    : 255
                                )
                              );
                          }
                        case "provider_unroutable":
                        case "no_routes":
                          switch (e.method) {
                            case "voice":
                              return Ee(
                                i > 0
                                  ? [(0, s.b)(2, be.a, { seconds: i }), 70]
                                  : 266
                              );
                            default:
                              e.method;
                              var c = {
                                title: 229,
                                center: 796,
                                onSoftCenter: "CLOSE",
                                text:
                                  o > 0
                                    ? [(0, s.b)(2, be.a, { seconds: o }), 62]
                                    : 256,
                              };
                              return (
                                a &&
                                  i <= 0 &&
                                  ((c.right = 650), (c.onSoftRight = r)),
                                { dialog: c }
                              );
                          }
                        case "too_many":
                          switch (e.method) {
                            case "voice":
                              return Ee(
                                o > 0
                                  ? [(0, s.b)(2, be.a, { seconds: o }), 71]
                                  : 267
                              );
                            default:
                              e.method;
                              var u = {
                                title: 229,
                                center: 796,
                                onSoftCenter: "CLOSE",
                                text: a
                                  ? i > 0
                                    ? [(0, s.b)(2, be.a, { seconds: i }), 64]
                                    : 257
                                  : o
                                  ? [(0, s.b)(2, be.a, { seconds: o }), 63]
                                  : 261,
                              };
                              return (
                                a &&
                                  i <= 0 &&
                                  ((u.right = 650), (u.onSoftRight = r)),
                                { dialog: u }
                              );
                          }
                        case "next_method":
                          if (!n && !a)
                            return (
                              __LOG__(
                                4
                              )`next_method received while no more methods are available`,
                              null
                            );
                          switch (e.method) {
                            case "voice":
                              return Ee(
                                o > 0
                                  ? [(0, s.b)(2, be.a, { seconds: o }), 68]
                                  : 264
                              );
                            default:
                              e.method;
                              var d = {
                                title: 229,
                                center: 796,
                                onSoftCenter: "CLOSE",
                                text:
                                  i > 0
                                    ? [(0, s.b)(2, be.a, { seconds: i }), 60]
                                    : 254,
                              };
                              return (
                                i <= 0 &&
                                  ((d.right = 650), (d.onSoftRight = r)),
                                { dialog: d }
                              );
                          }
                        case "network_error":
                          return Ee(253);
                        default:
                          return Ee(263);
                      }
                    })(e, t, r);
                }
              })(r, n, () => this.Gs("voice"));
              a && (a.isAlert ? (0, i.e)(a.alert) : (0, i.g)(a.dialog));
            }
          }
          Gr() {
            var e, t, r, s;
            this.Go ||
              ((t = (e = this.props).codeGuessRetryAfter),
              (r = e.smsWait),
              (s = e.voiceWait),
              (Fe(r) || Fe(s) || Fe(t)) &&
                (this.Go = self.setTimeout(() => {
                  (this.Go = null), this.setState({}), this.Gr();
                }, 1e3)));
          }
          addSoftKeys(e, t) {
            e.setLeftLabel(779, () => {
              (0, i.j)(
                (0, he.a)(
                  t,
                  _.o,
                  "verify-sms",
                  `${this.props.country.cc}${this.props.displayNumber}`
                )
              );
            }),
              e.setBack(() => {
                (0, m.e)(t);
              });
          }
          render() {
            return (0, s.b)(2, d.a, {
              children: (0, s.b)(2, O.a, {
                items: this.props.orderedItemIds,
                keyOf: Se,
                renderItem: this.Gu,
                start: this.Gp,
                preventLoop: !0,
              }),
            });
          }
        },
        ge = (0, a.h)((0, f.e)(Ce), (e, t, r) => {
          var s = e.reg,
            n = r.flow;
          if (
            "REQUESTING_CODE" === s.type ||
            "REQUESTING_CODE_BAN_APPEAL" === s.type
          ) {
            var a,
              l = s.state,
              o =
                !l ||
                ("CODE_VERIFY_ERROR" !== l.type &&
                  "CODE_REQUEST_ERROR" !== l.type)
                  ? null
                  : l,
              i = o && "CODE_VERIFY_ERROR" === o.type ? o.retryAfter : null,
              c = null == l ? void 0 : l.smsWait,
              u = null == l ? void 0 : l.voiceWait;
            return (
              "REQUESTING_CODE" === s.type
                ? (a = ["sms", "voice"])
                : (s.type, (a = ["sms"])),
              {
                country: s.country,
                localNumber: s.localNumber,
                maskedPhoneNumber: s.maskedPhoneNumber || void 0,
                displayNumber: s.maskedPhoneNumber || s.localNumber,
                smsWait: c,
                voiceWait: u,
                codeGuessRetryAfter: i,
                error: o,
                orderedItemIds: ["text", "inputCode"].concat(a),
                methods: a,
                backend: t,
                flow: n,
              }
            );
          }
        }),
        Ae = class extends f.b {
          addSoftKeys(e, t) {
            e.setCenterLabel(774, () => {
              (0, m.j)(t);
            });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = e.country,
              n = e.displayNumber,
              a = `${r.cc}${n}`;
            return (0, s.b)(2, de.b.div, {
              hasFocusPriority: t,
              className: (0, B.a)(ye, "CX"),
              children: [
                (0, s.f)(
                  1,
                  "div",
                  "CN GF GC",
                  (0, s.b)(2, p.b, {
                    l10n: [(0, s.b)(2, z.b, { phone: a }, "phone"), 193],
                  }),
                  2
                ),
                (0, s.f)(
                  1,
                  "div",
                  "CO GG GC",
                  (0, s.b)(2, p.b, {
                    l10n: [
                      (0, s.b)(
                        2,
                        z.b,
                        { phone: a, className: (0, B.a)(t && ve, "CQ") },
                        "phone"
                      ),
                      194,
                    ],
                  }),
                  2
                ),
              ],
            });
          }
        },
        Ne = class extends f.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { code: null }),
              (this.Gv = (e) => {
                this.setState({ code: e.isCompleted ? e.code : null });
              }),
              e
            );
          }
          addSoftKeys(e, t) {
            var r = this.props,
              s = r.retryAfter,
              n = r.sendCode,
              a = this.state.code;
            null == a ||
              Ge(s) ||
              e.setRightLabel(823, () => {
                n(a);
              });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = Le(e.retryAfter);
            return (0, s.f)(
              1,
              "div",
              (0, B.a)(ye, "CX", t && ve),
              [
                (0, s.b)(2, pe.a, {
                  hasFocusPriority: t,
                  selected: t,
                  onChange: this.Gv,
                }),
                r > 0
                  ? (0, s.f)(
                      1,
                      "div",
                      "CY",
                      (0, s.b)(2, p.b, {
                        className: "CZ GG GC",
                        l10n: [(0, ue.b)(r), 192],
                      }),
                      2
                    )
                  : null,
              ],
              0
            );
          }
        },
        _e = class extends f.b {
          addSoftKeys(e, t) {
            var r = this.props,
              s = r.method,
              n = r.wait,
              a = r.resend;
            if (!Ge(n)) {
              var l = "sms" === s ? 657 : 650;
              e.setCenterLabel(l, () => {
                a(s);
              });
            }
          }
          render() {
            var e,
              t,
              r = this.props,
              n = r.selected,
              a = r.method,
              l = Le(r.wait),
              o = l > 0;
            return (
              "sms" === a
                ? ((e = me.a), (t = (0, s.b)(2, p.b, { l10n: 656 })))
                : ((e = fe), (t = (0, s.b)(2, p.b, { l10n: 649 }))),
              (0, s.b)(2, de.b.div, {
                hasFocusPriority: n,
                className: (0, B.a)(ye, n && ve),
                children: [
                  (0, s.b)(2, e, { className: (0, B.a)("CT", o && "CS") }),
                  (0, s.f)(
                    1,
                    "div",
                    (0, B.a)("CR GF GC", o && "CS"),
                    [
                      (0, s.f)(1, "div", "CV", t, 0),
                      l > 0 ? (0, s.f)(1, "div", "CU", (0, ue.b)(l), 0) : null,
                    ],
                    0
                  ),
                ],
              })
            );
          }
        };
      function Ee(e, t) {
        return { isAlert: !0, alert: { title: t || 229, text: e } };
      }
      function Se(e) {
        return e;
      }
      function Ge(e) {
        return null != e && (0, k.p)(e);
      }
      function Le(e) {
        return null == e ? 0 : (0, k.z)(e);
      }
      function Fe(e) {
        return null != e && (0, k.p)(e);
      }
      var Re = ["text", "inputCode"],
        ke = class extends f.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Fc = { item: "inputCode", scrollFromTop: "start" }),
              (this.Fh = () => {
                var e = this.props.emailWait;
                null == e || (0, k.p)(e)
                  ? this.Fi(936)
                  : (0, m.s)(this.props.backend);
              }),
              (this.Fj = () => {
                var e = this.props,
                  t = e.wipeType,
                  r = e.wipeToken;
                if (null != t && null != r) {
                  var s = "full" === t ? 933 : 934;
                  (0, i.f)({
                    title: 935,
                    text: s,
                    confirm: 810,
                    onConfirm: () => {
                      this.Fk(r);
                    },
                  });
                }
              }),
              (this.Fk = (e) => {
                (0, i.f)({
                  title: 935,
                  text: 932,
                  confirm: 810,
                  onConfirm: () => {
                    (0, m.r)(this.props.backend, e);
                  },
                });
              }),
              (this.Fg = () => {
                var e = this.props.wipeWait;
                if (e && (0, k.p)(e)) {
                  var t = (0, s.b)(2, be.a, { seconds: (0, k.z)(e) });
                  (0, i.f)({
                    title: 925,
                    text: [t, 242],
                    confirm: 824,
                    onConfirm: this.Fh,
                  });
                } else
                  (0, i.g)({
                    title: 925,
                    text: 924,
                    center: 824,
                    onSoftCenter: this.Fh,
                    right: 810,
                    onSoftRight: this.Fj,
                    left: 761,
                    onSoftLeft: "CLOSE",
                  });
              }),
              (this.Fl = (e, t) =>
                "text" === e
                  ? (0, s.b)(2, Oe, { selected: t, handleForgotPin: this.Fg })
                  : (0, s.b)(2, Ie, {
                      selected: t,
                      guessWait: this.props.guessWait,
                      guessesLeft: this.props.guessesLeft,
                    })),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.country !== e.country ||
                r.localNumber !== e.localNumber ||
                r.code !== e.code ||
                r.guessWait !== e.guessWait ||
                r.guessesLeft !== e.guessesLeft ||
                r.emailWait !== e.emailWait ||
                r.wipeWait !== e.wipeWait ||
                r.wipeType !== e.wipeType ||
                r.wipeToken !== e.wipeToken ||
                r.error !== e.error)
            );
          }
          componentDidMount() {
            this.Fd(void 0), super.componentDidMount();
          }
          componentDidUpdate(e) {
            this.Fd(e.error), super.componentDidUpdate(e);
          }
          Fd(e) {
            var t = this.props.error;
            if (null != t && t !== e) {
              var r = this.Fe(t);
              r && ("dialog" === r.type ? this.Ff(r.props) : (0, i.e)(r.props));
            }
          }
          Ff(e) {
            (0, i.g)(
              Object.assign({}, e, { center: 796, onSoftCenter: "CLOSE" })
            );
          }
          Fe(e) {
            var t,
              r = De(this.props.guessWait);
            switch (e.reason) {
              case "unknown":
                t = 263;
                break;
              case "network_error":
                t = 253;
                break;
              case "temporarily_unavailable":
              case "guessed_too_fast":
                t = r > 0 ? [(0, s.b)(2, be.a, { seconds: r }), 191] : 659;
                break;
              case "too_many_guesses":
                t = 927;
                break;
              case "mismatch":
                if (e.pin && e.pin.join("") === this.props.code.join(""))
                  return {
                    type: "dialog",
                    props: {
                      title: 229,
                      text: 931,
                      right: 778,
                      onSoftRight: this.Fg,
                    },
                  };
                t = 929;
                break;
              case "reset_too_soon":
                t = 936;
                break;
              case "email_sent":
                return { type: "alert", props: { title: 230, text: 921 } };
            }
            return t ? { type: "alert", props: { title: 229, text: t } } : null;
          }
          Fi(e) {
            (0, i.e)({ title: 229, text: e });
          }
          addSoftKeys(e, t) {
            e.setRightLabel(766, () => {
              var e = this.props.country.cc + this.props.localNumber;
              (0, i.j)((0, he.a)(t, _.d, "register-2fa", e));
            }),
              e.setBack(() => {
                (0, m.e)(t);
              });
          }
          render() {
            return (0, s.b)(2, d.a, {
              children: (0, s.b)(2, O.a, {
                items: Re,
                keyOf: we,
                renderItem: this.Fl,
                start: this.Fc,
              }),
            });
          }
        },
        xe = (0, a.h)((0, f.e)(ke), (e, t) => {
          var r = e.reg;
          if ("TWO_FACTOR" === r.type) {
            var s = r.state,
              n = s && "TWO_FACTOR_ERROR" === s.type ? s : null;
            return {
              country: r.country,
              localNumber: r.localNumber,
              guessWait: s ? s.guessWait : null,
              guessesLeft: s ? s.guessesLeft : null,
              wipeWait: s ? s.wipeWait : null,
              wipeType: s ? s.wipeType : null,
              wipeToken: s ? s.wipeToken : null,
              emailWait: s ? s.emailWait : null,
              error: n,
              code: r.code,
              backend: t,
            };
          }
        });
      function we(e) {
        return e;
      }
      var Oe = class extends f.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.selected !== e.selected ||
                r.handleForgotPin !== e.handleForgotPin)
            );
          }
          addSoftKeys(e) {
            e.setCenterLabel(778, this.props.handleForgotPin);
          }
          render() {
            var e = this.props.selected,
              t = (0, s.b)(2, p.b, {
                l10n: 928,
                className: (0, B.a)(e && "Ah", "Ai"),
              }),
              r = (0, s.b)(2, p.b, { l10n: 930, className: "Aj" });
            return (0, s.b)(2, de.b.div, {
              hasFocusPriority: e,
              className: "Ak",
              children: [
                (0, s.f)(
                  1,
                  "div",
                  "Af GF GC",
                  (0, s.b)(2, p.b, { l10n: 946 }),
                  2
                ),
                (0, s.f)(
                  1,
                  "div",
                  "Ag GG GC",
                  (0, s.b)(2, p.b, { l10n: [t, r, 243] }),
                  2
                ),
              ],
            });
          }
        },
        Ie = class extends f.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Fm = null),
              (this.state = {
                guessWait: null,
                remainingSeconds: 0,
                pin: null,
              }),
              (this.Fq = (e) => {
                this.setState({ pin: e.isCompleted ? e.code : null });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props,
              s = this.state;
            return (
              (r !== e &&
                (r.selected !== e.selected ||
                  r.guessWait !== e.guessWait ||
                  r.guessesLeft !== e.guessesLeft)) ||
              (s !== t &&
                (s.guessWait !== t.guessWait ||
                  s.remainingSeconds !== t.remainingSeconds ||
                  s.pin !== t.pin))
            );
          }
          static getDerivedStateFromProps(e, t) {
            var r = e.guessWait;
            return r !== t.guessWait
              ? { guessWait: r, remainingSeconds: De(r) }
              : null;
          }
          componentDidMount() {
            this.Fn(), super.componentDidMount();
          }
          componentDidUpdate(e, t) {
            this.Fn(), super.componentDidUpdate(e, t);
          }
          componentWillUnmount() {
            this.Fo(), super.componentWillUnmount();
          }
          Fn() {
            this.state.remainingSeconds > 0
              ? null == this.Fm &&
                (this.Fm = setInterval(() => {
                  this.Fp();
                }, 1e3))
              : this.Fo();
          }
          Fo() {
            var e = this.Fm;
            e && ((this.Fm = null), clearInterval(e));
          }
          Fp() {
            var e = this.state.guessWait;
            this.setState((t) =>
              e !== t.guessWait
                ? null
                : { remainingSeconds: Math.max(t.remainingSeconds - 1, 0) }
            );
          }
          addSoftKeys(e, t) {
            var r = this.state,
              s = r.pin,
              n = r.remainingSeconds;
            null != s &&
              0 === n &&
              e.setCenterLabel(776, () => {
                0 === this.props.guessesLeft
                  ? (0, i.e)({ title: 229, text: 927 })
                  : (0, m.x)(t, s);
              });
          }
          render() {
            var e = this.props.selected,
              t = this.state.remainingSeconds,
              r =
                t > 0
                  ? (0, s.b)(2, p.b, {
                      l10n: [(0, s.b)(2, be.a, { seconds: t }), 192],
                    })
                  : null;
            return (0, s.f)(
              1,
              "div",
              (0, B.a)("Ak", e && "Ah"),
              [
                r,
                (0, s.b)(2, pe.a, {
                  hasFocusPriority: e,
                  selected: e,
                  onChange: this.Fq,
                }),
              ],
              0
            );
          }
        };
      function De(e) {
        return null == e ? 0 : (0, k.z)(e);
      }
      var We = class extends n.a {
        componentDidMount() {
          (function (e, t) {
            if (null != t) {
              var r = null,
                s = 229;
              switch (t) {
                case "deregistered":
                  r = 227;
                  break;
                case "banned":
                  r = 648;
                  break;
                case "deleted":
                  (s = 226), (r = 225);
              }
              null != r &&
                ((0, i.e)({
                  title: s,
                  text: r,
                  onClose: (e) => {
                    e.fireAndForget("registration", "acceptRegAlert", {});
                  },
                }),
                e.dispatch({ type: "REG_ALERT_SHOWN" }));
            }
          })(this.props.backend, this.props.alert);
        }
        render() {
          var e = this.props,
            t = e.loading,
            r = e.type,
            n = e.contactUs;
          return null != t
            ? (0, s.i)((0, s.b)(2, u.b, Object.assign({}, t)))
            : (0, s.c)([Te(r), Pe(n)], 0);
        }
      };
      function Pe(e) {
        return null != e ? (0, s.f)(1, "div", "AD", (0, s.b)(2, c.a), 2) : null;
      }
      function Te(e) {
        switch (e) {
          case "UNINITIALIZED":
            return (0, s.b)(2, S);
          case "QUERYING_JIO_HEADERS":
            return (0, s.b)(2, ie);
          case "CONFIRM_FOUND_PHONE_NUMBER":
            return (0, s.b)(2, oe);
          case "ENTERING_PHONE_NUMBER":
            return (0, s.b)(2, ce.b);
          case "REQUESTING_CODE":
            return (0, s.b)(2, ge, { flow: "reg" });
          case "TWO_FACTOR":
            return (0, s.b)(2, xe);
          case "BLOCKED":
            return (0, s.b)(2, R);
          case "BLOCKED_BAN_APPEAL":
            return (0, s.b)(2, se);
          case "SENDING_SMS":
            return (0, s.b)(2, y, { label: 661 });
          case "SENDING_VOICE":
            return (0, s.b)(2, y, { label: 662 });
          case "VERIFYING":
            return (0, s.b)(2, y, { label: 963 });
          case "RESETTING":
            return (0, s.b)(2, y, { label: 937 });
          case "SENDING_EMAIL":
            return (0, s.b)(2, y, { label: 938 });
          case "INITIALIZING":
            return (0, s.b)(2, y, { label: 454 });
          case "COUNTRY_SELECT":
            return (0, s.b)(2, A);
          case "SENDING_SMS_BAN_APPEAL":
            return (0, s.b)(2, y, { label: 661 });
          case "SENDING_VOICE_BAN_APPEAL":
            return (0, s.b)(2, y, { label: 662 });
          case "VERIFYING_SMS_BAN_APPEAL":
            return (0, s.b)(2, y, { label: 963 });
          case "REQUESTING_CODE_BAN_APPEAL":
            return (0, s.b)(2, ge, { flow: "ban-appeal" });
          case "BAN_APPEAL":
            return (0, s.b)(2, $);
          case "BLOCKED_BAN_APPEAL_PRE":
            return (0, s.b)(2, ae);
          default:
            (0, o.a)(e);
        }
      }
      t.default = (0, a.h)(We, (e, t) => {
        var r = e.reg,
          s = e.contactUs,
          n = e.loading,
          a = e.alert;
        return { type: r.type, alert: a, contactUs: s, loading: n, backend: t };
      });
    },
  },
]);
