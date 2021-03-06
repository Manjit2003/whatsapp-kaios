"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [165],
  {
    661: function (e, t, s) {
      s.r(t);
      var n = s(1),
        r = (s(13), s(54)),
        i = s(18),
        a = s(522),
        l = s(481),
        o = s(20),
        c = s(22),
        h = s.n(c),
        d = s(475),
        u = s(272),
        p = s(479),
        f = s(516),
        v = s(56),
        g = s(231),
        V = s(181),
        b = s(19),
        w = s(477),
        m = s(122),
        M = s(35),
        S = { success: 1, error: 5, cancel: 2 },
        P = class extends v.a {
          constructor(e, t) {
            super(e, t),
              (this.VR = (e) => {
                var t = this.state.isSending,
                  s = this.props,
                  n = s.backend,
                  r = s.jid,
                  i = s.actionAfterSending;
                if (!t) {
                  this.VO = Date.now();
                  var a = e.lat,
                    o = e.lng,
                    c = e.name,
                    h = e.address,
                    u = e.url;
                  this.setState({ isSending: !0 });
                  var f = self.innerWidth,
                    v = self.innerHeight,
                    g = Math.max(v, f);
                  (0, l.c)(a, o, g, g)
                    .then((e) => {
                      if (!this.VM) throw new p.d();
                      return (0, M.k)(e);
                    })
                    .then((e) => {
                      if (!this.VM) throw new p.d();
                      if (!e.ok)
                        throw new Error(
                          "fetch blob failed: status " + e.status
                        );
                      return e.blob();
                    })
                    .then((e) => {
                      if (!this.VM) throw new p.d();
                      return (0, d.cropAndResizeSquareBlob)(e, 100);
                    })
                    .then((e) => {
                      if (!this.VM) throw new p.d();
                      this.VS({ result: "success" }),
                        n.sendLocationMsg({
                          jid: r,
                          lat: a,
                          lng: o,
                          preview: e,
                          name: c,
                          address: h,
                          url: u,
                        }),
                        (0, V.a)(n, i);
                    })
                    .catch((0, m.a)(p.d, () => {}))
                    .catch((e) => {
                      this.VM &&
                        (__LOG__(
                          4
                        )`Unable to fetch location preview when sending place: ${e}`,
                        this.VS({ result: "error", errMsg: String(e) }),
                        (0, b.e)({
                          title: 229,
                          text: 699,
                          onClose: this.props.backend.closeAllScreens,
                        }));
                    });
                }
              }),
              (this.VT = () => {
                var e = this.state,
                  t = e.resultingPlaces,
                  s = e.isSending;
                t
                  ? s && this.VS({ result: "cancel" })
                  : this.VQ({ result: "cancel" }),
                  this.props.backend.goBack();
              }),
              (this.VU = (e, t) => {
                if (!this.state.resultingPlaces) return null;
                var s = this.state.resultingPlaces.places[e];
                return s
                  ? (0, n.b)(2, D, {
                      place: s,
                      selected: t,
                      sendPlace: this.VR,
                    })
                  : null;
              }),
              (this.VM = !1),
              (this.VN = null),
              (this.VO = null),
              (this.state = { resultingPlaces: void 0, isSending: !1 });
          }
          componentDidMount() {
            this.VM = !0;
            var e = this.props,
              t = e.lat,
              s = e.lng;
            this.VP(t, s), super.componentDidMount();
          }
          componentWillUnmount() {
            (this.VM = !1), super.componentWillUnmount();
          }
          VP(e, t) {
            (this.VN = Date.now()),
              (0, M.k)(
                (function (e, t) {
                  return (0, a.b)(
                    "https://api.foursquare.com/v2/venues/search",
                    {
                      client_secret:
                        "PFUJY2FLEXYLBCXHERGFZIQVW501IVXCXMXSHXNDWDIXUQAT",
                      client_id:
                        "XQJA0HW2Y1HIYPN2DBMWR3DPPDTHW2E1V33PLAFVRJFEMJS1",
                      v: "20140601",
                      ll: e + "," + t,
                      radius: 1500,
                      limit: 40,
                    }
                  ).toString();
                })(e, t)
              )
                .then((e) => {
                  if (!this.VM) throw new p.d();
                  if (!e.ok)
                    throw new Error(
                      "fetch location api failed: status " + e.status
                    );
                  return e.json();
                })
                .then((e) => {
                  var t = e.response;
                  if (!this.VM) throw new p.d();
                  var s = t.venues,
                    n = {},
                    r = [];
                  s.forEach((e) => {
                    var t = (function (e) {
                      var t = e.location,
                        s = e.name,
                        n = e.id,
                        r = e.url,
                        i = e.categories;
                      if (t && s && n) {
                        var a = t.lat,
                          l = t.lng;
                        if (a && l) {
                          var c = t.city,
                            h = t.country,
                            d = t.state,
                            u = t.address,
                            p = t.postalCode,
                            f = t.distance,
                            v = [],
                            g = void 0;
                          if (
                            (u && C(u) && v.push(u),
                            c && C(c) && v.push(c),
                            d && C(d) && v.push(d),
                            p && C(p) && v.push(p),
                            h && C(h) && v.push(h),
                            i)
                          )
                            for (var V = 0; V < i.length; V++) {
                              var b = i[V],
                                w = b.primary,
                                m = b.icon;
                              if (w && m && m.prefix) {
                                g = m.prefix + "64.png";
                                break;
                              }
                            }
                          return {
                            id: n,
                            placeContent: {
                              lat: a,
                              lng: l,
                              name: s,
                              url: r,
                              address:
                                v.length > 0 ? (0, o.h)(v).join("") : void 0,
                              icon: g,
                              distance: "number" == typeof f && f > 0 ? f : 0,
                            },
                          };
                        }
                      }
                    })(e);
                    if (t) {
                      var s = t.id,
                        i = t.placeContent;
                      (n[s] = i), r.push(s);
                    }
                  }),
                    r.sort((e, t) => n[e].distance - n[t].distance),
                    this.setState({ resultingPlaces: { ids: r, places: n } }),
                    this.VQ({ result: "success", count: r.length });
                })
                .catch((0, m.a)(p.d, () => {}))
                .catch((e) => {
                  this.VM &&
                    (__LOG__(4)`Unable to retrieve nearby places: ${e}`,
                    this.VQ({ result: "error" }),
                    (0, b.e)({
                      title: 229,
                      text: 479,
                      onClose: this.props.backend.goBack,
                    }));
                });
          }
          VQ(e) {
            var t = e.result,
              s = e.count,
              n = Date.now();
            this.VN &&
              WAM.log("regular", 834, void 0, [
                3,
                0,
                S[t],
                8,
                3,
                s,
                9,
                0,
                Math.floor(n - this.VN),
                1,
                0,
                2,
              ]);
          }
          VS(e) {
            var t = e.result,
              s = e.errMsg,
              n = Date.now();
            this.VO &&
              WAM.log("regular", 1760, void 0, [
                1,
                0,
                f.a[t],
                2,
                0,
                Math.floor(n - this.VO),
                4,
                0,
                2,
                3,
                2,
                s || null,
              ]);
          }
          addSoftKeys(e, t) {
            var s = this.state,
              n = s.resultingPlaces,
              r = s.isSending;
            !n || r
              ? (e.setFull(r ? 825 : 788), e.setBack(this.VT))
              : e.setLeftAsBack();
          }
          render() {
            var e,
              t = this.state,
              s = t.resultingPlaces,
              r = t.isSending;
            return (
              (e =
                !s || r
                  ? (0, n.b)(2, w.a)
                  : (0, n.b)(2, g.c, {
                      className: "Sz",
                      items: s.ids,
                      keyOf: k,
                      estimatedItemHeight: 61,
                      emptyLabel: 588,
                      renderItem: this.VU,
                    })),
              (0, n.b)(2, u.a, {
                title: (0, n.b)(2, i.b, { l10n: 698 }),
                children: e,
              })
            );
          }
        };
      function k(e) {
        return e;
      }
      function C(e) {
        return "string" == typeof e && "" !== e;
      }
      t.default = (0, r.j)((0, v.e)(P));
      var D = class extends v.b {
        shouldComponentUpdate(e, t) {
          var s = this.props;
          return (
            s !== e &&
            (s.selected !== e.selected ||
              s.place !== e.place ||
              s.sendPlace !== e.sendPlace)
          );
        }
        addSoftKeys(e, t) {
          var s = this.props,
            n = s.place,
            r = s.sendPlace;
          e.setCenterLabel(823, () => {
            r(n);
          });
        }
        render() {
          var e = this.props,
            t = e.selected,
            s = e.place;
          return (0, n.f)(
            1,
            "div",
            (0, h.a)("TA", t && "TF"),
            [
              (0, n.f)(
                1,
                "div",
                null,
                (0, n.f)(1, "img", "TB", null, 1, { src: s.icon }),
                2
              ),
              (0, n.f)(
                1,
                "div",
                "TC",
                [
                  (0, n.f)(1, "div", "TD GF GC GI GE", s.name, 0),
                  (0, n.f)(1, "div", "TE GG GC GI GE", s.address, 0),
                ],
                4
              ),
            ],
            4
          );
        }
      };
    },
  },
]);
