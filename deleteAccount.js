"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [45],
  {
    651: function (e, t, r) {
      r.r(t),
        r.d(t, "DeleteAccount", function () {
          return _;
        }),
        r.d(t, "DeleteAccountCountrySelector", function () {
          return a;
        });
      var n = r(1),
        s = r(13),
        o = r(482),
        c = r(476),
        u = r(521),
        a = class extends s.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.JQ = (e, t) => {
                e.updateScreen(this.props.fromScreenId, {
                  type: "DELETE_ACCOUNT",
                  props: { country: t },
                }),
                  (0, c.a)(e);
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.defaultCountry !== e.defaultCountry ||
                r.fromScreenId !== e.fromScreenId)
            );
          }
          render() {
            var e = (0, o.b)();
            return (0, n.b)(2, u.a, {
              countries: e,
              onBack: c.a,
              onCancel: c.a,
              onSelect: this.JQ,
            });
          }
        },
        i = r(22),
        p = r.n(i),
        l = r(54),
        h = r(31),
        d = r.n(h),
        y = r(7),
        b = r(57),
        m = r(19),
        f = r(517),
        C = r(140),
        N = r(345),
        v = r(18),
        J = r(272),
        S = r(231),
        I = r(56),
        O = r(512),
        T = r(347),
        g = "Gj",
        G = ["description", "countrySelector", "numberInput"],
        E = class extends I.a {
          constructor(e, t) {
            super(e, t),
              (this.JR = s.e()),
              (this.JS = () => {
                var e = this.props.country;
                if (e && e.iso) {
                  var t,
                    r = (0, b.g)(this.props.user);
                  r && (t = (0, y.u)(this.props.user).substr(r.length)),
                    r && r === e.cc && t === this.state.phoneNumber
                      ? (0, m.f)({
                          title: 212,
                          text: 211,
                          confirm: 769,
                          onConfirm: () => {
                            this.props.backend.deleteAccount();
                          },
                        })
                      : this.JT(215);
                } else this.JT(456);
              }),
              (this.JT = (e) => {
                (0, m.e)({ title: 229, text: e });
              }),
              (this.JU = (e) => {
                var t = (0, b.a)(e.trim()),
                  r = this.props.country;
                if (r && t.startsWith(r.cc)) {
                  var n = t.slice(r.cc.length);
                  (0, b.f)(r.cc, n) &&
                    (__LOG__(2)`EnteringPhoneNumber dropping the country code`,
                    (t = n));
                }
                this.setState({ phoneNumber: t });
              }),
              (this.JV = (e, t) => {
                switch (e) {
                  case "description":
                    return (0, n.b)(2, C.b.div, {
                      hasFocusPriority: t,
                      className: (0, p.a)("Ge", t && "Gk"),
                      children: (0, n.b)(2, v.b, { l10n: 213 }),
                    });
                  case "countrySelector":
                    return (0, n.b)(2, k, {
                      selected: t,
                      country: this.props.country,
                      onlyOneCountry: this.props.onlyOneCountry,
                      screenId: this.props.screenId,
                    });
                  case "numberInput":
                    return (0, n.f)(
                      1,
                      "div",
                      (0, p.a)("Gh", t && g),
                      (0, n.b)(2, N.a, {
                        type: "tel",
                        hasFocusPriority: t,
                        placeholder: 214,
                        onChange: this.JU,
                      }),
                      2
                    );
                  default:
                    return (0, d.a)(e);
                }
              }),
              (this.state = { phoneNumber: "", start: "description" });
          }
          componentDidUpdate(e, t, r) {
            null != this.props.country &&
              null != this.JR.current &&
              this.JR.current.goTo("numberInput"),
              super.componentDidUpdate(e, t, r);
          }
          addSoftKeys(e, t) {
            var r = this.state.phoneNumber;
            e.addCancel(),
              null != this.props.country &&
                "" !== r &&
                e.setRightLabel(769, this.JS);
          }
          render() {
            return (0, n.b)(2, J.a, {
              title: (0, n.b)(2, v.b, { l10n: 218 }),
              children: (0, n.b)(
                2,
                S.a,
                {
                  className: "Gd",
                  items: G,
                  keyOf: U,
                  renderItem: this.JV,
                  start: { item: this.state.start, scrollFromTop: "end" },
                },
                null,
                this.JR
              ),
            });
          }
        };
      function U(e) {
        return e;
      }
      var _ = (0, l.f)(
          (0, I.e)(E),
          (e, t) => ({
            screenId: t.screenId,
            country: t.country,
            user: e.user.jid,
          }),
          (e, t) => {
            var r = (0, o.b)(),
              n = 1 === r.length;
            return {
              screenId: e.screenId,
              user: e.user,
              country: n ? r[0] : e.country,
              onlyOneCountry: n,
              backend: t,
            };
          }
        ),
        k = class extends I.b {
          addSoftKeys(e, t) {
            this.props.onlyOneCountry ||
              e.setCenterLabel(818, () => {
                t.openScreen("DELETE_ACCOUNT_COUNTRY_SELECTOR", {
                  defaultCountry: this.props.country,
                  fromScreenId: this.props.screenId,
                });
              });
          }
          renderCountryName(e) {
            var t = this.props.country;
            return t && t.cc
              ? (0, n.f)(
                  1,
                  "span",
                  null,
                  [
                    (0, n.b)(2, f.a, { className: "Gi", cc: t.cc }),
                    " ",
                    (0, n.b)(2, O.a, { iso: t.iso, className: e ? g : "" }),
                  ],
                  0
                )
              : (0, n.b)(2, v.b, { l10n: 132, className: e ? g : "" });
          }
          render() {
            var e = this.props,
              t = e.onlyOneCountry,
              r = e.selected;
            return t
              ? (0, n.f)(
                  1,
                  "div",
                  (0, p.a)("Gf", r && g),
                  this.renderCountryName(r),
                  0
                )
              : (0, n.b)(2, C.b.div, {
                  hasFocusPriority: r,
                  className: (0, p.a)("Gf", r && g),
                  children: [
                    this.renderCountryName(r),
                    (0, n.b)(2, T.a, { className: "Gg" }),
                  ],
                });
          }
        };
    },
  },
]);
