"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [26, 159],
  {
    472: function (t, e, n) {
      n.d(e, "k", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "o", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "w", function () {
          return c;
        }),
        n.d(e, "p", function () {
          return h;
        }),
        n.d(e, "v", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "m", function () {
          return g;
        }),
        n.d(e, "x", function () {
          return m;
        }),
        n.d(e, "s", function () {
          return b;
        }),
        n.d(e, "r", function () {
          return y;
        }),
        n.d(e, "l", function () {
          return L;
        }),
        n.d(e, "t", function () {
          return A;
        }),
        n.d(e, "e", function () {
          return F;
        }),
        n.d(e, "q", function () {
          return K;
        }),
        n.d(e, "n", function () {
          return x;
        }),
        n.d(e, "f", function () {
          return C;
        }),
        n.d(e, "u", function () {
          return P;
        }),
        n.d(e, "h", function () {
          return N;
        }),
        n.d(e, "g", function () {
          return S;
        }),
        n.d(e, "c", function () {
          return k;
        });
      var i = n(118),
        r = n(19),
        s = n(504);
      function a(t) {
        t.fireAndForget("registration", "goToWelcomeScreen", {});
      }
      function o(t, e) {
        t.spinUntilReadyOverlay(new Promise(() => {})),
          t.fireAndForget("registration", "acceptPolicy", {
            queryJioHeaders: e,
          });
      }
      function u(t) {
        t.fireAndForget("registration", "rejectFoundPhoneNumber", {});
      }
      function l(t, e, n, i) {
        t.fireAndForget("registration", "acceptFoundPhoneNumber", {
          country: e,
          localNumber: n,
          maskedPhoneNumber: i,
        });
      }
      function c(t, e, n) {
        t.fireAndForget("registration", "verifyPhoneExists", {
          localNumber: n,
          country: e,
        });
      }
      function h(t, e, n, i, r) {
        t.fireAndForget("registration", "requestCode", {
          country: e,
          localNumber: n,
          maskedPhoneNumber: i,
          method: r,
        });
      }
      function d(t, e) {
        t.fireAndForget("registration", "updateCountry", { country: e });
      }
      function f(t, e) {
        t.fireAndForget("registration", "goToCountrySelect", {
          phoneNumber: e,
        });
      }
      function p(t) {
        t.fireAndForget("registration", "goToEditPhoneNumber", {});
      }
      function v(t) {
        t.fireAndForget("registration", "clearPhoneNumberStatus", {});
      }
      function g(t, e) {
        t.fireAndForget("registration", "registerWithCode", { code: e });
      }
      function m(t, e) {
        t.fireAndForget("registration", "verifyTwoFactor", { pin: e });
      }
      function b(t) {
        t.fireAndForget("registration", "sendForgotPINEmail", {});
      }
      function y(t, e) {
        t.fireAndForget("registration", "resetAccount", { token: e });
      }
      function L(t, e, n) {
        t.dispatch({ type: "OPEN_CONTACT_US", context: e, phoneNumber: n });
      }
      function A(t, e, n, i, r) {
        t.dispatch({ type: "OPEN_SPINNER", title: 435, subtitle: 169 }),
          (0, s.a)(t, e, n, i, r).then(() => {
            t.goBack(), t.dispatch({ type: "CLOSE_SPINNER" });
          });
      }
      function F(t) {
        (0, r.f)({
          title: 982,
          text: 290,
          onCancel: r.a,
          onConfirm: i.closeApp,
        });
      }
      function K(t, e, n, i, r) {
        t.fireAndForget("registration", "requestCodeBanAppeal", {
          country: e,
          localNumber: n,
          method: i,
          banInfo: r ? { banReason: r } : void 0,
        });
      }
      function x(t, e) {
        t.fireAndForget("registration", "registerWithCodeBanAppeal", {
          code: e,
        });
      }
      function C(t) {
        t.fireAndForget("registration", "fetchBanAppealStatus", {});
      }
      function P(t, e) {
        return t.sendAndReceive("registration", "submitBanAppeal", {
          content: e,
        });
      }
      function N(t, e) {
        return t.sendAndReceive("registration", "goToBanAppealBlocked", {
          content: e,
        });
      }
      function S(t) {
        return t.sendAndReceive("registration", "goToBanAppeal", {});
      }
      function k(t) {
        t.fireAndForget("registration", "clearBanAppealErrorStatus", {});
      }
    },
    474: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var i = n(1),
        r = (n(13), n(285)),
        s = n(272);
      function a(t) {
        return (0, i.b)(2, s.a, {
          title: t.title,
          children: (0, i.b)(2, r.a, { children: t.children }),
        });
      }
    },
    480: function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      });
      var i = n(1),
        r = (n(13), n(272)),
        s = n(164),
        a = n(18),
        o = n(56),
        u = class extends o.a {
          addSoftKeys(t) {
            var e = this.props.onExit;
            e ? (t.setBack(e), t.setOnEndCall(e)) : t.setFull(827);
          }
          render() {
            var t = this.props,
              e = t.title,
              n = t.subtitle,
              o = e ? (0, i.b)(2, a.b, { l10n: e }) : null;
            return (0, i.b)(2, r.a, {
              title: o,
              children: (0, i.f)(
                1,
                "div",
                "BF",
                [
                  (0, i.b)(2, s.a),
                  (0, i.f)(
                    1,
                    "div",
                    "BG GH GC",
                    n ? (0, i.b)(2, a.b, { l10n: n }) : null,
                    0
                  ),
                ],
                4
              ),
            });
          }
        };
      e.b = (0, o.e)(u);
    },
    487: function (t, e, n) {
      var i = n(1),
        r = n(13),
        s = n(22),
        a = n.n(s),
        o = n(140),
        u = n(20),
        l = n(55),
        c = n(182),
        h = n(48),
        d = n(143),
        f = class extends r.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.className !== t.className ||
                n.hasFocusPriority !== t.hasFocusPriority ||
                n.placeholder !== t.placeholder ||
                n.rows !== t.rows ||
                n.cols !== t.cols ||
                n.onChange !== t.onChange ||
                n.innerRef !== t.innerRef ||
                n.invalid !== t.invalid ||
                n.defaultValue !== t.defaultValue)
            );
          }
          constructor(t) {
            super(t),
              (this.Kv = 0),
              (this.Kw = 0),
              (this.Kx = null),
              (this.Ky = null),
              (this.Kz = null),
              (this.LA = !1),
              (this.LB = null),
              (this.LC = ""),
              (this.LD = null),
              (this.LH = (t) => {
                if (((this.Kx = t), t)) {
                  this.LC = t.value;
                  var e = Object.getPrototypeOf(t);
                  (this.LD = Object.getOwnPropertyDescriptor(e, "value").set),
                    this.props.innerRef && this.props.innerRef(t);
                } else this.LD = null;
              }),
              (this.LK = () => {
                this.LL();
                var t = new Event("focus_input", { bubbles: !0 });
                this.Kx && this.Kx.dispatchEvent(t);
              }),
              (this.LL = () => {
                null != this.Kx && this.Kx.setSelectionRange(this.Kv, this.Kw);
              }),
              (this.LJ = () => {
                null != this.Kx &&
                  ((this.Kv = this.Kx.selectionStart),
                  (this.Kw = this.Kx.selectionEnd));
              }),
              (this.LM = (t) => {
                var e = t.target.value;
                if (this.LC !== e) {
                  0 === e.length &&
                    0 !== this.LC.length &&
                    (this.Ky = requestAnimationFrame(() => {
                      t.target.blur();
                    })),
                    (this.LC = e);
                  var n = this.LA ? (0, d.f)(e) : e;
                  this.props.onChange && this.props.onChange(n, t);
                }
              }),
              (this.LN = (t) => {
                (0, l.m)(t) === l.e && "" !== t.target.value
                  ? t.stopPropagation()
                  : this.LI(t);
              }),
              (this.LO = (t) => {
                (0, l.m)(t) === l.f
                  ? ((this.Ky = requestAnimationFrame(() => {
                      t.target.blur();
                    })),
                    t.preventDefault(),
                    t.stopPropagation())
                  : this.LI(t);
              });
            var e = t.defaultValue;
            if (e) {
              var n = (0, h.e)(e),
                i = n.normalizedText,
                r = n.fontFamily;
              (this.LB = i), (this.Kz = r), (this.LA = i !== e);
            }
          }
          componentDidMount() {
            this.Kx && null != this.Kz && (this.Kx.style.fontFamily = this.Kz);
          }
          componentWillUnmount() {
            null != this.Ky && cancelAnimationFrame(this.Ky);
          }
          pasteText(t) {
            if (null != this.Kx) {
              var e = (0, h.e)(t).normalizedText,
                n = this.LA || e !== t,
                i = this.LE(),
                r = this.LF(),
                s = i.substring(0, r.start) + e,
                a = s + i.substring(r.end),
                o = s.length;
              this.setValue(n ? (0, d.f)(a) : a), this.LG(o);
            }
          }
          LE() {
            var t;
            return (null == (t = this.Kx) ? void 0 : t.value) || "";
          }
          setValue(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = this.Kx,
              r = this.LD;
            if (null != i && null != r && i.value !== t) {
              var s = (0, h.e)(t),
                a = s.normalizedText,
                o = s.fontFamily;
              if (
                ((this.LA = a !== t),
                (this.Kz = o),
                (i.style.fontFamily = o),
                r.call(i, a),
                this.LG(e ? 0 : a.length),
                !n)
              ) {
                var u = new Event("input", { bubbles: !0 });
                i.dispatchEvent(u);
              }
            }
          }
          LI(t) {
            var e = (0, l.m)(t),
              n = this.Kx ? this.Kx.selectionStart : 0;
            e === l.a
              ? n < (t.target.value ? (0, c.a)(t.target.value) : 0) &&
                t.stopPropagation()
              : e === l.d && n > 0 && t.stopPropagation();
          }
          LF() {
            return null == this.Kx
              ? { start: 0, end: 0 }
              : { start: this.Kx.selectionStart, end: this.Kx.selectionEnd };
          }
          LG(t) {
            null != this.Kx &&
              ((this.Kx.selectionStart = t),
              (this.Kx.selectionEnd = t),
              this.LJ());
          }
          render() {
            var t = this.props,
              e = t.className,
              n = t.cols,
              r = t.hasFocusPriority,
              s = t.invalid,
              l = t.placeholder,
              c = t.rows;
            return (0, i.b)(2, o.b.textarea, {
              innerRef: this.LH,
              hasFocusPriority: r,
              placeholder: l ? (0, u.k)(l) : void 0,
              rows: c,
              cols: n,
              onInput: this.LM,
              onKeyDown: this.LO,
              className: (0, a.a)("Io", s && "Ip", e),
              defaultValue: this.LB,
              onNativeFocus: this.LK,
              onNativeBlur: this.LJ,
            });
          }
        };
      e.a = f;
    },
    488: function (t, e, n) {
      var i = n(1),
        r = n(13),
        s = n(18),
        a = n(345),
        o = n(55),
        u = n(22),
        l = n.n(u),
        c = /^[0-9]{0,6}$/,
        h = class extends r.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Hl = r.e()),
              (this.state = { code: "", dirty: !1 }),
              (this.Ho = (t) => {
                switch (t.key) {
                  case o.d:
                  case o.a:
                  case o.b:
                  case o.c:
                    t.preventDefault();
                }
              }),
              (this.Hn = () => {
                var t = (function (t) {
                  if (d(t)) {
                    var e = Array.from(t).map((t) => parseInt(t, 10));
                    return [e[0], e[1], e[2], e[3], e[4], e[5]];
                  }
                  return null;
                })(this.state.code);
                t
                  ? this.props.onChange({ isCompleted: !0, code: t })
                  : this.props.onChange({ isCompleted: !1 });
              }),
              (this.reset = () => {
                this.setState({ code: "" }, () => {
                  this.Hl.current && this.Hl.current.setValue("", !1, !0),
                    this.Hn();
                });
              }),
              (this.Hp = (t, e) => {
                c.test(t)
                  ? this.setState({ code: t, dirty: !0 }, this.Hn)
                  : (e.target.value = this.state.code);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props,
              i = this.state;
            return (
              (n !== t &&
                (n.onChange !== t.onChange ||
                  n.selected !== t.selected ||
                  n.hasFocusPriority !== t.hasFocusPriority ||
                  n.defaultValue !== t.defaultValue)) ||
              (i !== e && (i.code !== e.code || i.dirty !== e.dirty))
            );
          }
          componentDidMount() {
            this.Hm();
          }
          componentDidUpdate(t) {
            var e = this.props.defaultValue;
            t.defaultValue === e ||
              this.state.dirty ||
              (null == e ? this.reset() : this.Hm());
          }
          Hm() {
            var t = this.props.defaultValue;
            if (null != t) {
              var e = t.join("");
              d(e) &&
                (this.setState({ code: e }, this.Hn),
                this.Hl.current && this.Hl.current.setValue(e, !1, !0));
            }
          }
          render() {
            for (var t = [], e = 0; e < 6; ++e) {
              var n = this.state.code[e];
              t.push(
                (0, i.f)(
                  1,
                  "div",
                  "Bu",
                  n
                    ? (0, i.f)(1, "span", null, n, 0)
                    : (0, i.f)(1, "div", "Bv"),
                  0,
                  null,
                  e
                )
              );
            }
            return (0, i.f)(
              1,
              "div",
              (0, l.a)("Bs", this.props.selected && "Br"),
              [
                (0, i.b)(2, s.b, { l10n: 455, className: "Bq" }),
                (0, i.f)(1, "div", "Bt", t, 0),
                (0, i.b)(
                  2,
                  a.a,
                  {
                    type: "tel",
                    className: "Bw",
                    hasFocusPriority: this.props.hasFocusPriority,
                    onChange: this.Hp,
                  },
                  null,
                  this.Hl
                ),
              ],
              4,
              { onKeyDown: this.Ho }
            );
          }
        };
      function d(t) {
        return 6 === t.length && c.test(t);
      }
      e.a = h;
    },
    500: function (t, e, n) {
      var i = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, i.f)(
            32,
            "svg",
            e,
            (0, i.f)(32, "path", null, null, 1, {
              d:
                "M15 1.5H3c-.825 0-1.492.675-1.492 1.5L1.5 16.5l3-3H15c.825 0 1.5-.675 1.5-1.5V3c0-.825-.675-1.5-1.5-1.5zM6.75 8.25h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    502: function (t, e, n) {
      var i = n(1),
        r = n(13),
        s = n(487),
        a = n(112),
        o = n(345),
        u = n(18),
        l = n(54),
        c = n(56),
        h = n(272),
        d = n(231),
        f = n(31),
        p = n.n(f),
        v = n(113),
        g = n(503),
        m = n(472),
        b = n(19),
        y = n(504),
        L = class extends c.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { feedback: "" }),
              (this.LP = () => this.state.feedback.trim()),
              (this.LQ = () => "" !== this.LP()),
              (this.LR = () => this.LP().length >= 5),
              (this.LS = (t) => {
                this.setState({ feedback: t });
              }),
              t
            );
          }
          addSoftKeys() {}
          render() {
            var t = this.props.selected;
            return (0, i.b)(2, a.h, {
              label: 160,
              selected: t,
              children: (0, i.b)(2, s.a, {
                placeholder: 166,
                hasFocusPriority: t,
                rows: 4,
                onChange: this.LS,
              }),
            });
          }
        },
        A = ["jiophonecare@jiophone.com", "care@mylyf.com", "care@jio.com"],
        F = class extends c.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { email: { value: "", invalid: !1, dirty: !1 } }),
              (this.getValue = () => this.state.email.value.trim()),
              (this.hasValue = () => "" !== this.getValue()),
              (this.setDirty = () => {
                this.setState((t) => {
                  var e = t.email;
                  return { email: Object.assign({}, e, { dirty: !0 }) };
                });
              }),
              (this.isValid = () => !this.state.email.invalid),
              (this.handleEmailChange = (t) => {
                var e = t.trim(),
                  n = (0, g.a)(e) && !A.includes(e);
                this.setState((t) => ({
                  email: { value: e, invalid: !n, dirty: t.email.dirty },
                }));
              }),
              t
            );
          }
          addSoftKeys() {}
          componentDidUpdate(t, e, n) {
            !this.props.selected &&
              t.selected &&
              this.hasValue() &&
              this.setDirty(),
              super.componentDidUpdate(t, e, n);
          }
          render() {
            var t = this.props.selected,
              e = this.state.email;
            return (0, i.b)(2, a.h, {
              label: 158,
              selected: t,
              children: (0, i.b)(2, o.a, {
                type: "email",
                hasFocusPriority: t,
                placeholder: 159,
                invalid: e.dirty && e.invalid,
                onChange: this.handleEmailChange,
              }),
            });
          }
        },
        K = ["feedback", "email"],
        x = class extends c.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.feedbackRef = r.e()),
              (this.emailRef = r.e()),
              (this.maybeSendFeedback = () => {
                var t = this.emailRef.current,
                  e = this.feedbackRef.current;
                if (t && e) {
                  var n = t.getValue(),
                    i = e.LP();
                  if (!t.isValid())
                    return (
                      (0, b.e)({ title: 163, text: A.includes(n) ? 161 : 162 }),
                      void t.setDirty()
                    );
                  e.LR()
                    ? ((0, v.crashlog)("Uploading logs", "Contact Us"),
                      __LOG__(2)`Email: ${n}, feedback: ${i}`,
                      this.props.sendLogs(i, n))
                    : (0, b.e)({ title: 165, text: 164 });
                }
              }),
              (this.renderItem = (t, e) => {
                switch (t) {
                  case "email":
                    return (0, i.b)(2, F, { selected: e }, null, this.emailRef);
                  case "feedback":
                    return (0, i.b)(
                      2,
                      L,
                      { selected: e },
                      null,
                      this.feedbackRef
                    );
                  default:
                    return (0, p.a)(t);
                }
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return n !== t && n.sendLogs !== t.sendLogs;
          }
          addSoftKeys(t, e) {
            t.setLeftAsBack();
            var n = this.emailRef.current,
              i = this.feedbackRef.current;
            if (n && i) {
              var r = i.LQ(),
                s = n.hasValue();
              r && s && t.setRightLabel(823, this.maybeSendFeedback);
            }
          }
          render() {
            return (0, i.b)(2, h.a, {
              title: (0, i.b)(2, u.b, { l10n: 167 }),
              children: (0, i.b)(2, d.a, {
                items: K,
                keyOf: C,
                renderItem: this.renderItem,
              }),
            });
          }
        };
      function C(t) {
        return t;
      }
      e.a = (0, l.e)((0, c.e)(x), (t, e) => {
        var n;
        if (t.reg) {
          if (!t.contactUs) return null;
          var i = t.contactUs,
            r = i.phoneNumber,
            s = i.context;
          n = (t, n) => {
            (0, m.t)(e, t, n, s, r);
          };
        } else
          n = (t, n) => {
            (function (t, e, n) {
              var i = (0, y.a)(t, e, n, "settings/about").then(() => t.goBack);
              t.spinUntilReady(i, 435, 169);
            })(e, t, n);
          };
        return { backend: e, sendLogs: n };
      });
    },
    503: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var i = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))+$/;
      function r(t) {
        return i.test(t);
      }
      function s(t) {
        return null != t && r(t) ? t : null;
      }
    },
    504: function (t, e, n) {
      function i(t, e, n, i, r) {
        return t.sendAndReceive("basic", "sendSupportRequest", {
          requestText: e,
          email: n,
          context: i,
          regPhoneNumber: r,
        });
      }
      n.d(e, "a", function () {
        return i;
      });
    },
  },
]);
