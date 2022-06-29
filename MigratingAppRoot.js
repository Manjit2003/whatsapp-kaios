"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [29],
  {
    471: function (e, t, n) {
      n.r(t),
        n.d(t, "claimHtml", function () {
          return w;
        });
      var s = n(1),
        a = n(13),
        r = n(56),
        i = n(140),
        o = n(147),
        l = n(54),
        c = n(397),
        d = n(251),
        h = n(164),
        p = n(18),
        u = n(246),
        b = n(391),
        f =
          (n(337),
          class extends r.a {
            addSoftKeys(e) {
              var t = this.props,
                n = t.failed,
                s = t.onEscapeAttempt;
              n
                ? (e.setCenterLabel(812, v),
                  e.setLeftLabel(777, _),
                  e.setBack(_),
                  e.setOnEndCall(_))
                : (e.setFull(827), e.setBack(s), e.setOnEndCall(s));
            }
            render() {
              return (0, s.f)(
                1,
                "div",
                "F",
                [
                  (0, s.f)(1, "img", null, null, 1, {
                    src: "/icons/whatsapp_84.png",
                  }),
                  this.props.failed
                    ? (0, s.b)(2, p.b, { l10n: 508 })
                    : (0, s.c)(
                        [
                          (0, s.b)(2, p.b, { l10n: 510, className: "H" }),
                          (0, s.b)(2, h.a, { className: "I" }),
                        ],
                        4
                      ),
                ],
                0
              );
            }
          }),
        m = (0, r.e)(f),
        g = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { showExitWarning: !1 }),
              (this.L = () => {
                this.setState({ showExitWarning: !0 });
              }),
              (this.M = () => {
                this.setState({ showExitWarning: !1 });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props,
              s = this.state;
            return (
              (n !== e && n.failed !== e.failed) ||
              (s !== t && s.showExitWarning !== t.showExitWarning)
            );
          }
          render() {
            var e = this.props.failed,
              t =
                !e && this.state.showExitWarning
                  ? (0, s.b)(2, c.b, {
                      content: (0, s.b)(2, u.a, {
                        text: 509,
                        center: 796,
                        onSoftCenter: () => {},
                        onBack: () => {},
                        onEndCall: () => {},
                        close: this.M,
                      }),
                    })
                  : null;
            return (0, s.b)(2, i.b.div, {
              hasFocusPriority: !0,
              className: "G",
              children: (0, s.b)(2, d.a, {
                children: [
                  (0, s.b)(2, m, { failed: e, onEscapeAttempt: this.L }),
                  t,
                ],
              }),
            });
          }
        },
        E = !1;
      function w(e) {
        return (
          __LOG__(2)`MigratingApp:claimHtml`,
          new Promise((t) => {
            var n = new Promise((e) => {
                requestAnimationFrame(e), (0, b.a)();
              })
                .then(() => e())
                .then(v)
                .catch((e) => {
                  __LOG__(4)`Error while migrating db ${e}`,
                    SEND_LOGS("migration-failed"),
                    (E = !0),
                    t({ mode: "error", reason: "corrupted" });
                }),
              r = document.createElement("div");
            (r.id = "migration-root"),
              document.body.insertBefore(r, document.body.firstChild),
              a.g(
                (0, s.b)(2, l.a, {
                  backend: { getStoreState: () => null },
                  store: { subscribe: () => {} },
                  children: (0, s.b)(2, i.a, {
                    children: (0, s.b)(2, o.a, {
                      promise: n,
                      fallback: () => (0, s.b)(2, g, { failed: !1 }),
                      render: () => (0, s.b)(2, g, { failed: E }),
                      props: null,
                    }),
                  }),
                }),
                r
              );
          })
        );
      }
      function _() {
        self.open("", "_parent", ""), self.close();
      }
      function v() {
        self.location.reload(!0);
      }
    },
  },
]);
