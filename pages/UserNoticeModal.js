"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [27],
  {
    499: function (t, e, s) {
      s.d(e, "a", function () {
        return d;
      });
      var i = s(1),
        n = (s(13), s(56)),
        o = s(76),
        l = s(384);
      function r(t, e) {
        for (var s = 0, i = t.length; s < i; ++s)
          if (t[s].dataset.id === e) return s;
        return -1;
      }
      function a(t, e) {
        var s = t[e.index];
        if (null != s && s.dataset.id === e.id) return s;
        var i = r(t, e.id);
        return i < 0 ? null : t[i];
      }
      var d = class extends n.a {
        constructor() {
          var t;
          return (
            (t = super(...arguments)),
            (this.state = { selected: null, onTop: !0 }),
            (this.St = null),
            (this.Sw = (t) => {
              this.St = t;
              var e = this.props.setRef;
              e && e(t);
            }),
            (this.Sx = () => {
              var t = this.St;
              null != t &&
                ((null != this.props.topSelectedCallback &&
                  this.state.onTop &&
                  null == this.state.selected) ||
                  this.Su(t, "previous") ||
                  (t.scrollTop > 0
                    ? ((t.scrollTop -= o.o),
                      t.scrollTop < 1 &&
                        !this.state.onTop &&
                        this.setState({ onTop: !0 }),
                      !this.Su(t, "previous") &&
                        null != this.props.topSelectedCallback &&
                        t.scrollTop < 1 &&
                        this.Sv())
                    : null != this.props.topSelectedCallback && this.Sv()));
            }),
            (this.Sy = () => {
              var t = this.St;
              null != t &&
                (this.Su(t, "next") ||
                  (t.scrollTop < t.scrollHeight - t.offsetHeight &&
                    ((t.scrollTop += o.o),
                    t.scrollTop > 0 &&
                      this.state.onTop &&
                      this.setState({ onTop: !1 }),
                    this.Su(t, "next"))));
            }),
            t
          );
        }
        componentDidMount() {
          var t = this.St;
          null != t &&
            ((this.Ss = t.getElementsByTagName("a")),
            null != this.props.topSelectedCallback ||
              this.props.disabled ||
              this.Su(t, "next"),
            super.componentDidMount());
        }
        componentDidUpdate(t, e) {
          var s = this.St;
          if (null != s) {
            var i = this.props.disabled;
            i !== t.disabled && (i ? this.Sv() : this.Su(s, "next")),
              ((s.scrollTop >= 1 && this.state.onTop) ||
                (s.scrollTop < 1 && !this.state.onTop)) &&
                this.setState({ onTop: s.scrollTop < 1 });
          }
          var n = this.state.selected,
            o = n ? a(this.Ss, n) : null;
          n && (o ? o.classList.add("NQ") : this.setState({ selected: null }));
          var l = e.selected;
          if (l && l.id !== (null == n ? void 0 : n.id)) {
            var r = a(this.Ss, l);
            r && r.classList.remove("NQ");
          }
          if (null != this.props.topSelectedCallback) {
            var d = this.state.onTop && null == this.state.selected;
            (null == t.topSelectedCallback ||
              (e.onTop && null == e.selected) !== d) &&
              this.props.topSelectedCallback(d);
          }
          super.componentDidUpdate(t, e);
        }
        Sv() {
          null != this.state.selected && this.setState({ selected: null });
        }
        Su(t, e) {
          var s = this.Ss;
          if (0 === s.length) return this.Sv(), !1;
          var i = null,
            n = this.state.selected;
          if (null != n) {
            var o = a(this.Ss, n);
            null != o &&
              p(t, o) &&
              (i = (function (t, e) {
                return t[e.index].dataset.id === e.id ? e.index : r(t, e.id);
              })(this.Ss, n)) < 0 &&
              (i = null);
          }
          var l = null;
          if ("next" === e)
            for (var d = null != i ? i + 1 : 0; d < s.length; d++) {
              if (p(t, s[d])) {
                l = { id: s[d].dataset.id, index: d };
                break;
              }
              if (null != i) break;
            }
          else if ("previous" === e)
            for (var h = null != i ? i - 1 : s.length - 1; h >= 0; h--) {
              if (p(t, s[h])) {
                l = { id: s[h].dataset.id, index: h };
                break;
              }
              if (null != i) break;
            }
          return null == l
            ? (null != n && null == i && this.Sv(), !1)
            : (this.setState({ selected: l }), !0);
        }
        addSoftKeys(t, e) {
          if (!this.props.disabled) {
            t.setUpDownArrows(this.Sx, this.Sy);
            var s = this.state.selected;
            if (s) {
              var i = a(this.Ss, s);
              null != i && this.props.addLinkSoftkeys(t, e, i);
            }
          }
        }
        render() {
          return (0, i.f)(
            1,
            "div",
            l.a,
            this.props.children,
            0,
            null,
            null,
            this.Sw
          );
        }
      };
      function p(t, e) {
        var s = t.offsetHeight,
          i = t.scrollTop,
          n = e.offsetHeight,
          o = e,
          l = 0;
        do {
          o instanceof HTMLElement
            ? ((l += o.offsetTop), (o = o.offsetParent))
            : (__LOG__(3)`Found non HTML element in DOM`, (o = null));
        } while (o && o !== t);
        return o
          ? !(l + n - 16 < i || l + 16 > i + s)
          : (__LOG__(3)`Processed anchor not in container?`, !1);
      }
    },
    506: function (t, e, s) {
      s.r(e);
      var i = s(1),
        n = (s(13), s(186)),
        o = s(519),
        l = s(56),
        r = (s(274), s(54)),
        a = s(256),
        d = class extends l.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Dc = (t) => {
                (0, n.d)(t);
                var e = this.props.modal;
                WAM.log("regular", 2472, void 0, [
                  1,
                  0,
                  e.id,
                  2,
                  0,
                  e.version,
                  3,
                  0,
                  4,
                ]);
              }),
              (this.Dd = () => {
                var t = this.props.modal;
                WAM.log("regular", 2472, void 0, [
                  1,
                  0,
                  t.id,
                  2,
                  0,
                  t.version,
                  3,
                  0,
                  t.blocking ? 8 : 5,
                ]);
              }),
              t
            );
          }
          componentDidMount() {
            var t = this.props,
              e = t.backend,
              s = t.modal;
            (0, a.b)(e, s), super.componentDidMount();
          }
          addSoftKeys(t, e) {
            var s = this.props.modal;
            s.blocking || (t.setBack(this.Dc), t.setLeftLabel(758, this.Dc)),
              t.dangerouslySetCenterRawString(s.content.acceptLabel, () => {
                (0, n.d)(e),
                  (0, n.c)(
                    e,
                    s.id,
                    s.version,
                    s.blocking ? "blocking-modal" : "non-blocking-modal"
                  );
              });
          }
          render() {
            var t = this.props.modal,
              e = t.content,
              s = t.direction;
            return (0, i.b)(2, o.a, {
              content: e,
              direction: s,
              onLinkOpen: this.Dd,
            });
          }
        };
      e.default = (0, r.j)((0, l.e)(d));
    },
    519: function (t, e, s) {
      var i = s(1),
        n = s(13),
        o = s(284),
        l = s(186),
        r = s(499),
        a =
          (s(274),
          class extends n.a {
            constructor() {
              var t;
              return (
                (t = super(...arguments)),
                (this.Sl = 0),
                (this.Sm = !1),
                (this.Sn = (t, e, s) => {
                  t.setRightLabel(797, () => {
                    var t = s.getAttribute("href");
                    if (t) {
                      var i = (0, o.c)(t);
                      "invalid" !== i.type &&
                        (i.type,
                        (0, l.f)(e, i, () => {
                          this.Sm &&
                            this.props.onLinkOpen &&
                            this.props.onLinkOpen();
                        }));
                    }
                  });
                }),
                (this.So = () => "" + ++this.Sl),
                t
              );
            }
            shouldComponentUpdate(t, e) {
              var s = this.props;
              return (
                s !== t &&
                (s.content !== t.content ||
                  s.direction !== t.direction ||
                  s.onLinkOpen !== t.onLinkOpen)
              );
            }
            componentDidMount() {
              (this.Sm = !0), (this.Sl = 0);
            }
            componentDidUpdate(t) {
              this.Sl = 0;
            }
            componentWillUnmount() {
              this.Sm = !1;
            }
            render() {
              var t = this.props,
                e = t.content,
                s = t.direction;
              return (0, i.b)(2, r.a, {
                addLinkSoftkeys: this.Sn,
                disabled: !1,
                children: (0, i.f)(
                  1,
                  "div",
                  "Mb GG GC",
                  [
                    (0, i.f)(
                      1,
                      "div",
                      "Mc",
                      [
                        (0, i.f)(
                          1,
                          "div",
                          "Md",
                          (0, i.b)(2, l.a, { svgIcon: e.svgIcon }),
                          2
                        ),
                        (0, i.f)(
                          1,
                          "div",
                          "Me",
                          (0, i.b)(2, l.b, {
                            text: e.title,
                            getNextLinkId: this.So,
                          }),
                          2,
                          { dir: s }
                        ),
                      ],
                      4
                    ),
                    (0, i.f)(
                      1,
                      "div",
                      "Mf",
                      [
                        e.body
                          ? (0, i.f)(
                              1,
                              "div",
                              "Mg",
                              (0, i.b)(2, l.b, {
                                text: e.body,
                                getNextLinkId: this.So,
                              }),
                              2,
                              { dir: s }
                            )
                          : null,
                        e.bullets.map((t, e) =>
                          (0, i.f)(
                            1,
                            "div",
                            "Mh",
                            (0, i.b)(2, l.b, {
                              text: t,
                              getNextLinkId: this.So,
                            }),
                            2,
                            { dir: s },
                            "" + e
                          )
                        ),
                        e.footer
                          ? (0, i.f)(
                              1,
                              "div",
                              "Mi",
                              (0, i.b)(2, l.b, {
                                text: e.footer,
                                getNextLinkId: this.So,
                              }),
                              2,
                              { dir: s }
                            )
                          : null,
                      ],
                      0
                    ),
                  ],
                  4
                ),
              });
            }
          });
      e.a = a;
    },
  },
]);
