"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [160],
  {
    489: function (t, e, a) {
      var s = a(13),
        r = a(48),
        i = class extends s.a {
          shouldComponentUpdate(t, e) {
            var a = this.props;
            return (
              a !== t &&
              (a.caption !== t.caption || a.formatting !== t.formatting)
            );
          }
          render() {
            var t = this.props,
              e = t.caption,
              a = t.formatting;
            return (0, r.d)(e, a);
          }
        };
      e.a = i;
    },
    653: function (t, e, a) {
      a.r(e),
        a.d(e, "AppPlayer", function () {
          return A;
        });
      var s = a(1),
        r = a(13),
        i = a(22),
        n = a.n(i),
        o = a(56),
        p = a(140),
        l = a(148),
        d = a(498),
        u = a(359),
        h = a(275),
        c = a(489),
        m = a(146),
        y = a(19),
        I = a(478),
        g = a(253),
        v = a(54),
        P = a(92),
        b = class extends r.a {
          shouldComponentUpdate(t, e) {
            var a = this.props;
            return (
              a !== t &&
              (a.uri !== t.uri ||
                a.player !== t.player ||
                a.initialTime !== t.initialTime ||
                a.chatJid !== t.chatJid ||
                a.currentMsg !== t.currentMsg ||
                a.nextMsg !== t.nextMsg ||
                a.pttPlaybackRate !== t.pttPlaybackRate)
            );
          }
          constructor(t) {
            var e, a, s, r;
            super(t), (this.In = !1);
            var i = new u.a(this);
            i.enableWarnIfMuted(),
              i.seekTo(t.initialTime),
              i.setPlaying(!t.player.paused),
              "voice" ===
                (null == (e = t.currentMsg) || null == (a = e.msg)
                  ? void 0
                  : a.content.type) &&
                (null == (s = t.currentMsg) || null == (r = s.msg)
                  ? void 0
                  : r.content.isPtt) &&
                i.setPlaybackRate(t.pttPlaybackRate),
              (this.Im = i);
          }
          componentDidMount() {
            this.In = !0;
          }
          componentDidUpdate(t) {
            var e = this.props.player;
            this.Im.setPlaying(!e.paused),
              e.paused && this.Im.seekTo(this.props.initialTime);
          }
          componentWillUnmount() {
            this.In = !1;
          }
          handleCanPlay() {
            var t = this.props,
              e = t.player,
              a = t.backend,
              s = e.commonMsgId;
            a.dispatch({ type: "LOADED_MEDIA", commonMsgId: s });
          }
          handlePlay() {}
          handlePause() {}
          handleTimeUpdate(t) {
            var e = this.props,
              a = e.player;
            e.backend.dispatch({
              type: "UPDATE_MEDIA",
              commonMsgId: a.commonMsgId,
              currentTime: t,
            });
          }
          handlePlaybackRateChange(t) {
            this.props.backend.updateGeneralSettings({ pttPlaybackRate: t }),
              this.Im.setPlaybackRate(t);
          }
          autoPlayVoiceMsg(t, e, a, s, r) {
            var i = s.mediaStatus;
            if ("voice" === s.type && "ready" === i.type) {
              (0, g.e)(a, r, t);
              var n = {
                type: "audio",
                commonMsgId: a.id,
                duration: s.duration || 0,
                contentRef: i.ref,
                paused: !1,
                loading: !0,
                autoPlay: !0,
              };
              t.dispatch({ type: "SELECT_MSG", item: e }),
                t.dispatch({ type: "RESET_MEDIA_TIME", commonMsgId: a.id }),
                t.dispatch({ type: "PLAY_MEDIA", player: n });
            }
          }
          playPttTone(t, e) {
            switch (t) {
              case "between":
                var a = new Audio("/static_media/between-ptts-tone.opus");
                a.addEventListener("ended", () => {
                  this.In && (0, P.i)() && e();
                }),
                  a.addEventListener("canplaythrough", () => {
                    this.In && (0, P.i)() && a.play();
                  });
                break;
              default:
                var s = new Audio("/static_media/end-of-ptts-tone.opus");
                s.addEventListener("ended", () => {
                  this.In && (0, P.i)() && e();
                }),
                  s.addEventListener("canplaythrough", () => {
                    this.In && (0, P.i)() && s.play();
                  });
            }
          }
          maybeAutoPlayNextMsg() {
            var t,
              e = this.props,
              a = e.backend,
              s = e.player,
              r = e.currentMsg,
              i = e.nextMsg,
              n = e.chatJid;
            if (r)
              if (i) {
                var o = r.msg,
                  p = i.msg;
                (null == o ? void 0 : o.content.isPtt) &&
                (null == p || null == (t = p.content) ? void 0 : t.isPtt) &&
                p.meta.author === o.meta.author
                  ? this.playPttTone("between", () => {
                      n &&
                        "voice" === i.type &&
                        this.autoPlayVoiceMsg(a, i, p, i.content, n);
                    })
                  : (null == o ? void 0 : o.content.isPtt) &&
                    s.autoPlay &&
                    o.id === s.commonMsgId &&
                    this.playPttTone("end", () => {
                      a.dispatch({ type: "STOP_MEDIA", commonMsgId: o.id });
                    });
              } else
                __LOG__(
                  2
                )`maybeAutoPlayNextMsg no next msg to autoplay, current msg: ${
                  null == r ? void 0 : r.key
                }`;
            else
              __LOG__(
                2
              )`maybeAutoPlayNextMsg no current msg to autoplay, current msg: ${
                null == r ? void 0 : r.key
              }`;
          }
          handleEnded() {
            var t = this.props;
            this.maybeAutoPlayNextMsg(),
              t.backend.dispatch({
                type: "END_MEDIA",
                commonMsgId: this.props.player.commonMsgId,
              });
          }
          mediaDuration() {
            return this.props.player.duration;
          }
          pause() {
            var t = this.props,
              e = t.backend,
              a = t.player;
            this.Im.setPlaying(!1),
              e.dispatch({ type: "PAUSE_MEDIA", commonMsgId: a.commonMsgId });
          }
          Io() {
            var t = this.props,
              e = t.backend,
              a = t.player;
            this.Im.setPlaying(!1),
              e.dispatch({ type: "STOP_MEDIA", commonMsgId: a.commonMsgId });
          }
          Ip(t) {
            var e = this.props,
              a = e.player,
              s = e.backend;
            a.paused
              ? s.dispatch({
                  type: "TOWARD_MEDIA",
                  commonMsgId: a.commonMsgId,
                  duration: a.duration,
                  direction: t,
                })
              : this.Im.seekToward(t);
          }
          render() {
            var t,
              e,
              a = this.props,
              r = a.player,
              i = a.uri,
              n = a.currentMsg,
              o = a.pttPlaybackRate,
              p =
                "voice" ===
                  (null == n || null == (t = n.msg)
                    ? void 0
                    : t.content.type) &&
                (null == n || null == (e = n.msg) ? void 0 : e.content.isPtt);
            return (0, s.c)(
              [
                r.paused
                  ? null
                  : (0, s.b)(2, k, {
                      player: this,
                      isPtt: p,
                      pttPlaybackRate: o,
                    }),
                i &&
                  (0, s.f)(
                    1,
                    "audio",
                    null,
                    null,
                    1,
                    { src: i, preload: "metadata" },
                    null,
                    this.Im.ref
                  ),
              ],
              0
            );
          }
        },
        M = (0, v.c)(b, (t, e, a) => {
          var s = t.msglist,
            r = t.player,
            i = t.settings,
            n = null,
            o = null,
            p = null;
          if (s) {
            var l = s.items,
              d = l.findIndex((t) => {
                var e;
                return (
                  t.key === (null == (e = r.active) ? void 0 : e.commonMsgId)
                );
              });
            n = l[d];
            var u = d + 1;
            (o = u > -1 ? l[u] : null), (p = s.chat.jid);
          }
          var h = i.pttPlaybackRate;
          return Object.assign({}, a, {
            currentMsg: n,
            nextMsg: o,
            chatJid: p,
            pttPlaybackRate: h,
          });
        }),
        f = class extends o.a {
          shouldComponentUpdate(t, e) {
            var a = this.props;
            return (
              a !== t &&
              (a.player !== t.player ||
                a.isPtt !== t.isPtt ||
                a.pttPlaybackRate !== t.pttPlaybackRate)
            );
          }
          addSoftKeys(t, e) {
            var a,
              s = this.props,
              r = s.player,
              i = s.isPtt,
              n = s.pttPlaybackRate;
            t.setLeftRightArrows(
              () => {
                r.Ip("backward");
              },
              () => {
                r.Ip("forward");
              }
            ),
              t.setUpDownArrows(l.i, l.h),
              t.setCenterLabel(798, () => {
                r.pause();
              }),
              t.setLeftLabel(814, () => {
                r.Ip("rewind");
              }),
              (a = "1x" === n ? 752 : "1.5x" === n ? 753 : 751),
              i
                ? t.setRightLabel(a, () =>
                    r.handlePlaybackRateChange(this.getNextSpeedValue(n))
                  )
                : t.setRightLabel(828, () => {
                    r.Io();
                  });
          }
          getNextSpeedValue(t) {
            var e = ["1x", "1.5x", "2x"];
            return e[(e.findIndex((e) => e === t) + 1) % e.length];
          }
          render() {
            return (0, s.b)(2, p.b.div, { hasFocusPriority: !0 });
          }
        },
        k = (0, o.e)(f);
      function E(t) {
        return t.playSideways;
      }
      var w = class extends o.a {
          shouldComponentUpdate(t, e) {
            var a = this.props,
              s = this.state;
            return (
              (a !== t &&
                (a.uri !== t.uri ||
                  a.player !== t.player ||
                  a.isGif !== t.isGif)) ||
              (s !== e &&
                (s.paused !== e.paused ||
                  s.currentTime !== e.currentTime ||
                  s.showProgressBar !== e.showProgressBar))
            );
          }
          constructor(t, e) {
            super(t, e),
              (this.Ir = null),
              (this.Is = () => {
                this.Im.setPlaying(!0);
              }),
              (this.pause = () => {
                this.It(), this.Im.setPlaying(!1);
              }),
              (this.Io = () => {
                var t = this.props,
                  e = t.backend,
                  a = t.player;
                this.Im.setPlaying(!1),
                  e.dispatch({
                    type: "STOP_MEDIA",
                    commonMsgId: a.commonMsgId,
                  });
              }),
              (this.Iu = () => {
                this.It(), this.Im.seekToward("backward");
              }),
              (this.Iv = () => {
                this.It(), this.Im.seekToward("forward");
              }),
              (this.state = {
                paused: !1,
                currentTime: 0,
                showProgressBar: !1,
              }),
              (this.Iq = t.player.duration);
            var a = new u.a(this);
            t.isGif || a.enableWarnIfMuted(), a.setPlaying(!0), (this.Im = a);
          }
          componentDidMount() {
            (0, l.d)(document.documentElement), super.componentDidMount();
          }
          componentWillUnmount() {
            this.props.player,
              (0, l.c)() && (0, l.a)(),
              this.Ir && clearTimeout(this.Ir),
              this.props.player.onClose && this.props.player.onClose(),
              super.componentWillUnmount();
          }
          handleCanPlay() {
            var t = this.props,
              e = t.player,
              a = t.backend,
              s = e.commonMsgId,
              r = this.Im.getDuration();
            null != r && (this.Iq = r),
              a.dispatch({ type: "LOADED_MEDIA", commonMsgId: s });
          }
          handlePlay() {
            this.props.player, this.setState({ paused: !1 });
          }
          handlePause() {
            this.props.player, this.setState({ paused: !0 });
          }
          handleTimeUpdate(t) {
            var e = this.props;
            if ((e.player, !e.isGif)) {
              var a = this.state,
                s = a.showProgressBar,
                r = a.paused;
              (s || r) && this.setState({ currentTime: t });
            }
          }
          handleEnded() {
            this.props.player;
            var t = this.Im.current;
            null != t
              ? this.setState({ paused: !0, currentTime: t.currentTime })
              : this.setState({ paused: !0 });
          }
          mediaDuration() {
            return this.props.player.duration;
          }
          It() {
            this.Ir && clearTimeout(this.Ir),
              this.setState((t) => {
                var e = this.Im.current;
                return e
                  ? { showProgressBar: !0, currentTime: e.currentTime }
                  : { showProgressBar: !0 };
              }),
              (this.Ir = setTimeout(() => {
                this.setState({ showProgressBar: !1 });
              }, 1e3));
          }
          addSoftKeys(t, e) {
            var a = this.props,
              s = a.player,
              r = a.isGif;
            if ((t.setBack(this.Io), s.loading)) t.setFull(788);
            else if ((t.hide(), !r)) {
              this.state.paused
                ? t.setCenterLabel(801, this.Is)
                : t.setCenterLabel(798, this.pause),
                E(s)
                  ? (t.setLeftRightArrows(l.h, l.i),
                    t.setUpDownArrows(this.Iu, this.Iv))
                  : (t.setLeftRightArrows(this.Iu, this.Iv),
                    t.setUpDownArrows(l.i, l.h));
              var i = this.Iw();
              i &&
                t.setRightOptions(() => {
                  (0, y.j)(i);
                });
            }
          }
          Ix(t) {
            var e = this.state.paused;
            return (0, s.f)(
              1,
              "div",
              (0, n.a)("Eh", t && "Ei", !e && "Ep"),
              (0, s.b)(2, I.a),
              2
            );
          }
          Iy(t, e) {
            var a = this.state,
              r = a.showProgressBar,
              i = a.currentTime,
              n = a.paused,
              o = !r && !n,
              p = i / this.Iq;
            return (0, s.b)(2, d.a, {
              progress: p,
              hidden: o,
              playSideways: e,
              withOptions: null != this.Iw(),
            });
          }
          Iz(t) {
            var e = this.props.player,
              a = e.caption,
              r = e.captionFormatting,
              i = this.state,
              o = i.showProgressBar,
              p = i.paused;
            return !a || p || o
              ? null
              : (0, s.b)(2, h.a, {
                  textClassName: (0, n.a)("Eq GF GC", t ? "Es" : "Er"),
                  maxLineClassName: "Et",
                  truncated: !0,
                  children: (0, s.b)(2, c.a, { caption: a, formatting: r }),
                });
          }
          Iw() {
            var t = this.props.player,
              e = t.onMsgInfo,
              a = t.onReportContact,
              r = t.caption,
              i = t.captionFormatting;
            if (null == e && null == a && null == r) return null;
            var n = new m.a();
            return (
              null != e && n.add(185, e),
              null != a && n.add(632, a),
              null != r &&
                n.add(966, () => {
                  (0, y.h)(
                    {
                      title: 110,
                      onBack: "CLOSE",
                      onSoftCenter: "CLOSE",
                      center: 796,
                    },
                    (0, s.b)(2, c.a, { caption: r, formatting: i })
                  );
                }),
              n
            );
          }
          JA() {
            var t = this.props,
              e = t.player;
            if (!t.isGif && !e.loading) {
              var a = E(e);
              return (0, s.c)([this.Ix(a), this.Iy(e, a), this.Iz(a)], 0);
            }
          }
          render() {
            var t = this.props,
              e = t.player,
              a = t.isGif,
              r = t.uri,
              i = E(e),
              o = !1,
              l = "Eo";
            switch ((e.rotation || 0) + (i ? 90 : 0)) {
              case 90:
                (o = "Ek"), (l = "En");
                break;
              case 180:
                o = "El";
                break;
              case 270:
                (o = "Em"), (l = "En");
            }
            return (0, s.f)(
              1,
              "div",
              (0, n.a)("Ej", e.loading && "Ep"),
              [
                r
                  ? (0, s.b)(2, p.b.video, {
                      hasFocusPriority: !0,
                      innerRef: this.Im.ref,
                      src: r,
                      className: (0, n.a)(o, l),
                      preload: "metadata",
                      muted: a,
                      loop: a,
                    })
                  : (0, s.b)(2, p.b.div, { hasFocusPriority: !0 }),
                this.JA(),
              ],
              0
            );
          }
        },
        T = (0, o.e)(w),
        A = (0, a(280).c)({
          getContentRef: (t) => t.active.contentRef,
          getId: (t) => t.active.commonMsgId,
          render(t, e) {
            var a = t.active,
              r = t.backend,
              i = a.commonMsgId;
            return "audio" === a.type
              ? (0, s.b)(
                  2,
                  M,
                  { player: a, initialTime: t.initialTime, backend: r, uri: e },
                  i
                )
              : (a.type,
                (0, s.b)(
                  2,
                  T,
                  { player: a, backend: r, isGif: "gif" === a.type, uri: e },
                  i
                ));
          },
        });
    },
  },
]);
