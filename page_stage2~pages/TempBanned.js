"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [25],
  {
    476: function (t, e, n) {
      function r(t) {
        t.goBack();
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    520: function (t, e, n) {
      n.r(e);
      var r = n(1),
        a = (n(13), n(3)),
        i = n(474),
        s = n(18),
        o = n(361),
        u = n(159),
        c = n(6),
        l = n(165),
        d = n(476),
        p = n(56),
        h = n(54),
        m = class extends p.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.FW = null),
              (this.state = { remaining: 0 }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t &&
                (n.until !== t.until ||
                  n.code !== t.code ||
                  n.duration !== t.duration)) ||
              (r !== e && r.remaining !== e.remaining)
            );
          }
          static getDerivedStateFromProps(t, e) {
            return { remaining: (0, a.z)(t.until) };
          }
          componentDidMount() {
            (this.FW = setInterval(() => {
              var t = (0, a.z)(this.props.until);
              t <= 0 && self.location.reload(!0),
                this.setState({ remaining: t });
            }, 1e3)),
              super.componentDidMount();
          }
          componentWillUnmount() {
            null != this.FW && clearInterval(this.FW),
              super.componentWillUnmount();
          }
          addSoftKeys(t, e) {
            t.setCenterLabel(785, () => (0, l.y)(e, l.e)), t.setBack(d.a);
          }
          render() {
            var t = 902,
              e = (0, r.b)(2, u.a, { jid: c.r.get() });
            switch (this.props.code) {
              case "101":
                t = [e, 234];
                break;
              case "102":
                t = 904;
                break;
              case "103":
                t = [e, 233];
                break;
              case "104":
                t = 903;
                break;
              case "106":
                t = 901;
            }
            var n = this.state.remaining,
              l = Math.floor(n / a.d);
            n -= l * a.d;
            var d = Math.floor(n / 60),
              p = n - 60 * d,
              h = `${l < 10 ? "0" : ""}${l}:${d < 10 ? "0" : ""}${d}:${
                p < 10 ? "0" : ""
              }${p}`;
            return (0, r.b)(2, i.a, {
              title: (0, r.b)(2, s.b, { l10n: 982 }),
              children: (0, r.f)(
                1,
                "div",
                "AE",
                [
                  (0, r.b)(2, s.b, {
                    className: "AI GG GC",
                    l10n: [(0, r.b)(2, s.b, { l10n: t }), 235],
                  }),
                  (0, r.f)(
                    1,
                    "div",
                    "AF",
                    [
                      (0, r.b)(2, o.a, {
                        className: "AG GJ",
                        theme: "red",
                        countdown: !0,
                        progress: this.state.remaining / this.props.duration,
                        strokeWidth: 2,
                        radius: 38,
                        backgroundCircle: !0,
                      }),
                      (0, r.f)(1, "div", "AH GG GC GJ", h, 0),
                    ],
                    4
                  ),
                ],
                4
              ),
            });
          }
        };
      e.default = (0, h.i)((0, p.e)(m), (t, e, n) => ({
        until: t.until,
        code: t.code,
        duration: t.duration,
      }));
    },
  },
]);
