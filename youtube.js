"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [180],
  {
    492: function (t, e, s) {
      s.d(e, "b", function () {
        return r;
      }),
        s.d(e, "a", function () {
          return o;
        });
      var i = s(35),
        a = new RegExp("^[a-zA-Z0-9_-]{11,50}$");
      function r(t) {
        return a.test(t);
      }
      var n = new RegExp("^/([a-zA-Z0-9_-]{11,50})$");
      function o(t) {
        var e = (0, i.i)(t);
        if (!e) return null;
        var s = e.hostname,
          a = e.searchParams,
          o = e.pathname,
          l = s.toLowerCase();
        if ("www.youtube.com" === l) {
          var h = a.get("v");
          return h && r(h) ? h : null;
        }
        if ("youtu.be" === l) {
          var u = o.match(n);
          if (u) return u[1];
        }
        return null;
      }
    },
    648: function (t, e, s) {
      s.r(e);
      var i = s(1),
        a = s(13),
        r = s(22),
        n = s.n(r),
        o = s(20),
        l = s(140),
        h = s(164),
        u = s(498);
      function c(t) {
        var e = t.playSideways,
          s = t.hidden,
          a = t.elements;
        return (0, i.f)(
          1,
          "div",
          (0, n.a)("Ih", e ? "Ij" : "Ii", s && "In"),
          (0, i.f)(
            1,
            "div",
            "Ik",
            a.map((t) => (0, i.b)(2, d, { icon: t.icon, tag: t.tag }, t.tag)),
            0
          ),
          2
        );
      }
      function d(t) {
        var e = t.icon,
          s = t.tag;
        return (0, i.f)(
          1,
          "div",
          "Il",
          [(0, i.f)(1, "div", null, e, 0), (0, i.f)(1, "div", "Im", s, 0)],
          4
        );
      }
      var H = s(478),
        p = (t) => {
          var e = t.className;
          return (0, i.f)(
            32,
            "svg",
            e,
            (0, i.f)(32, "path", null, null, 1, {
              fill: "#231F20",
              d:
                "M27.1 4.66h-4.51l1.67-1.67c.68-.68.68-1.79 0-2.47s-1.79-.68-2.47 0l-4.74 4.74c-.33.33-.51.77-.51 1.24s.18.91.51 1.24l4.74 4.74c.34.34.79.51 1.24.51s.9-.17 1.24-.51c.68-.68.68-1.79 0-2.47l-1.84-1.84h4.68c5.93 0 10.75 4.82 10.75 10.75 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c-.01-7.86-6.4-14.26-14.26-14.26zm.4 11.25h-24c-1.93 0-3.5 1.57-3.5 3.5V34.4c0 1.93 1.57 3.5 3.5 3.5h24c1.93 0 3.5-1.57 3.5-3.5V19.42c0-1.94-1.57-3.51-3.5-3.51zm-.5 18H4v-14h23v14z",
            }),
            2,
            { x: "0", y: "0", viewBox: "0 0 41.35 37.91" }
          );
        },
        m = s(19),
        v = s(55),
        f = s(183),
        y = s(475),
        w = s(492),
        g = s(76),
        b = 0,
        S = /[a-zA-Z]{2,3}/,
        I = "_kaios",
        T = class extends a.a {
          shouldComponentUpdate(t, e) {
            var s = this.props,
              i = this.state;
            return (
              (s !== t && s.videoId !== t.videoId) ||
              (i !== e &&
                (i.duration !== e.duration ||
                  i.currentTime !== e.currentTime ||
                  i.playerState !== e.playerState ||
                  i.error !== e.error ||
                  i.isInitallyOnline !== e.isInitallyOnline ||
                  i.showControls !== e.showControls ||
                  i.playSideways !== e.playSideways))
            );
          }
          constructor(t) {
            super(t),
              (this.HD = null),
              (this.HE = "youtube-player-" + b++),
              (this.HF = a.e()),
              (this.HG = null),
              (this.HH = null),
              (this.HI = !1),
              (this.HJ = new Set()),
              (this.HK = null),
              (this.HS = (t) => {
                this.HD = t;
              }),
              (this.HV = () => {
                this.HU({ event: "listening" });
              }),
              (this.HR = () => {
                null != document.fullscreenElement
                  ? ((this.HI = !0), document.exitFullscreen())
                  : this.He();
              }),
              (this.He = () => {
                this.props.backend.dispatch({ type: "STOP_YOUTUBE_VIDEO" });
              }),
              (this.HM = (t) => {
                if ("https://www.youtube.com" === t.origin) {
                  if ("string" == typeof t.data)
                    try {
                      var e = JSON.parse(t.data);
                      if (e.id !== this.HE) return;
                      switch (e.event) {
                        case "initialDelivery":
                          var s = e.info,
                            i = null == s.videoData.video_id;
                          this.setState({
                            duration: s.duration,
                            currentTime: s.currentTime,
                            playerState: s.playerState,
                            error: i,
                          });
                          break;
                        case "infoDelivery":
                          if (!e.info) return;
                          var a = e.info,
                            r = a.currentTime,
                            n = a.playerState;
                          null != r && this.setState({ currentTime: r }),
                            null != n && this.setState({ playerState: n });
                      }
                    } catch (t) {
                      __LOG__(
                        2
                      )`YoutubeVideo: Error parsing message from Youtube (${t})`;
                    }
                } else this.HJ.add(t.origin);
              }),
              (this.HL = () => {
                null == document.fullscreenElement && this.HI && this.He();
              }),
              (this.Hf = (t) => {
                switch ((0, v.m)(t)) {
                  case v.e:
                    t.preventDefault(), this.HR();
                    break;
                  case v.d:
                    this.Hc();
                    break;
                  case v.a:
                    this.Hd();
                    break;
                  case v.b:
                    this.Hb();
                    break;
                  case v.c:
                    this.Ha();
                    break;
                  case v.j:
                    1 === this.state.playerState
                      ? this.HX()
                      : (2 !== this.state.playerState &&
                          0 !== this.state.playerState &&
                          5 !== this.state.playerState) ||
                        this.HW();
                    break;
                  case "w":
                  case "1":
                    this.HY();
                }
              }),
              (this.state = {
                duration: null,
                currentTime: null,
                playerState: -1,
                error: !1,
                isInitallyOnline: navigator.onLine,
                showControls: !1,
                playSideways: !1,
              });
          }
          componentDidMount() {
            (this.HH = (0, y.lockVideoProcessing)()),
              document.addEventListener("fullscreenchange", this.HL),
              this.state.isInitallyOnline
                ? (document.fullscreenEnabled &&
                    null != this.HD &&
                    this.HD.requestFullscreen(),
                  (this.HG = this.HF.current),
                  self.addEventListener("message", this.HM),
                  this.HN())
                : this.HO(985);
          }
          componentDidUpdate(t, e) {
            this.props.videoId !== t.videoId
              ? (this.HP(), this.HN(), this.setState({ error: !1 }), this.HQ())
              : !0 === this.state.error &&
                !1 === e.error &&
                (this.HP(), this.HO(984));
          }
          componentWillUnmount() {
            if (
              (document.removeEventListener("fullscreenchange", this.HL),
              this.HH && this.HH.resolve(),
              this.HP(),
              (this.HG = null),
              self.removeEventListener("message", this.HM),
              this.HJ.size > 0)
            ) {
              var t = Array.from(this.HJ).join(",");
              __LOG__(
                4
              )`YoutubeVideo: Message received from suspicious origin ${t}`,
                SEND_LOGS("postmessage-suspicious-origin");
            } else
              __LOG__(
                2
              )`YoutubeVideo: No message received with suspicious origin`;
            this.HK && clearTimeout(this.HK);
          }
          HN() {
            (0, w.b)(this.props.videoId) || this.HO(984);
          }
          HO(t) {
            (0, m.e)({ title: 229, text: t, onClose: () => this.HR() });
          }
          HT(t, e) {
            var s = this.HE;
            null != t &&
              null != t.contentWindow &&
              t.contentWindow.postMessage(
                JSON.stringify(Object.assign({}, e, { id: s })),
                "https://www.youtube.com/"
              );
          }
          HU(t) {
            this.HT(this.HF.current, t);
          }
          HW() {
            this.HU({ event: "command", func: "playVideo", args: [] });
          }
          HX() {
            this.HU({ event: "command", func: "pauseVideo", args: [] }),
              this.HQ();
          }
          HY() {
            this.setState((t) => ({ playSideways: !t.playSideways }));
          }
          HZ(t) {
            var e = this.state,
              s = e.duration,
              i = e.currentTime;
            if (null != s && null != i) {
              var a = (0, f.c)(i, s, t);
              this.HU({ event: "command", func: "seekTo", args: [a] }),
                this.HQ();
            }
          }
          Ha() {
            this.HZ("forward");
          }
          Hb() {
            this.HZ("backward");
          }
          HP() {
            this.HT(this.HG, { event: "command", func: "destroy", args: [] }),
              (this.HG = this.HF.current);
          }
          Hc() {
            navigator.volumeManager.requestUp();
          }
          Hd() {
            navigator.volumeManager.requestDown();
          }
          HQ() {
            this.HK && clearTimeout(this.HK),
              this.setState({ showControls: !0 }),
              (this.HK = setTimeout(() => {
                this.setState({ showControls: !1 });
              }, 1e3));
          }
          Hg() {
            if (
              null === this.state.currentTime ||
              void 0 === this.state.currentTime ||
              null === this.state.duration ||
              void 0 === this.state.duration
            )
              return null;
            var t = !this.state.showControls && 1 === this.state.playerState,
              e = this.state.currentTime / this.state.duration;
            return (0, i.c)(
              [
                (0, i.b)(2, c, {
                  playSideways: this.state.playSideways,
                  hidden: t,
                  elements: [
                    {
                      icon: (0, i.f)(1, "div", "BD", (0, i.b)(2, p), 2),
                      tag: "1",
                    },
                  ],
                }),
                (0, i.b)(2, u.a, {
                  progress: e,
                  playSideways: this.state.playSideways,
                  hidden: t,
                }),
              ],
              4
            );
          }
          render() {
            var t = (function (t) {
                var e = t;
                e.endsWith(I) && (e = e.slice(0, -I.length));
                var s = (0, o.d)().lg;
                if (!(0, w.b)(e) || !S.test(s)) return null;
                var i = new URL("https://www.youtube.com");
                return (
                  (i.pathname = "/embed/" + e),
                  (i.search =
                    "autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&vq=small"),
                  i.searchParams.set("hl", s),
                  i.toString()
                );
              })(this.props.videoId),
              e = this.state,
              s = e.error,
              a = e.isInitallyOnline,
              r = e.playerState,
              u = e.duration,
              c = e.playSideways,
              d = s || !a || !(2 === r),
              p = s || !a || !((-1 === r && 0 !== u) || 3 === r);
            return (0, i.b)(2, l.b.div, {
              className: (0, n.a)("Az", c && "BB"),
              hasFocusPriority: !0,
              onKeyDown: this.Hf,
              innerRef: this.HS,
              tabIndex: "1",
              children: [
                !s && t && a
                  ? (0, i.f)(
                      1,
                      "iframe",
                      "BA",
                      null,
                      1,
                      {
                        width: g.n + "px",
                        height: g.l + "px",
                        id: this.HE,
                        src: t,
                        frameBorder: "0",
                        sandbox: "allow-scripts allow-same-origin",
                        referrerPolicy: "origin",
                        onLoad: this.HV,
                      },
                      null,
                      this.HF
                    )
                  : null,
                (0, i.f)(
                  1,
                  "div",
                  (0, n.a)("BC", d && "BE"),
                  (0, i.b)(2, H.a),
                  2
                ),
                (0, i.f)(
                  1,
                  "div",
                  (0, n.a)("BC", p && "BE"),
                  (0, i.b)(2, h.a),
                  2
                ),
                this.Hg(),
              ],
            });
          }
        };
      e.default = T;
    },
  },
]);
