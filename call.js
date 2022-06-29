"use strict";
(function (e) {
  function n(n) {
    for (
      var a, o, i = n[0], s = n[1], u = n[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (o = i[d]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
        (r[o] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (c && c(n); f.length; ) f.shift()();
    return l.push.apply(l, u || []), t();
  }
  function t() {
    for (var e, n = 0; n < l.length; n++) {
      for (var t = l[n], a = !0, i = 1; i < t.length; i++) {
        var s = t[i];
        0 !== r[s] && (a = !1);
      }
      a && (l.splice(n--, 1), (e = o((o.s = t[0]))));
    }
    return e;
  }
  var a = {},
    r = { 32: 0 },
    l = [];
  function o(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = e),
    (o.c = a),
    (o.d = function (e, n, t) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            t,
            a,
            function (n) {
              return e[n];
            }.bind(null, a)
          );
      return t;
    }),
    (o.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = "/");
  var i = (self.webpackJsonp = self.webpackJsonp || []),
    s = i.push.bind(i);
  (i.push = n), (i = i.slice());
  for (var u = 0; u < i.length; u++) n(i[u]);
  var c = s;
  l.push([442, 10, 16]), t();
})({
  306: function (e, n, t) {
    var a = t(1);
    t(13),
      (n.a = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          [
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M5.218 8.924a13.465 13.465 0 005.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214a10.14 10.14 0 003.173.507c.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C8.764 18 2 11.236 2 2.889 2 2.4 2.4 2 2.889 2H6c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.892.892 0 01-.223.907L5.218 8.924z",
            }),
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M10.905 8.846a.53.53 0 01-.75-.002.535.535 0 01-.002-.752l4.928-5.021h-2.876a.535.535 0 010-1.071h4.297c.275 0 .498.223.498.498V6.9a.527.527 0 11-1.054 0V3.83l-5.04 5.016z",
            }),
          ],
          4,
          { viewBox: "0 0 20 20" }
        );
      });
  },
  336: function (e, n, t) {
    var a = t(1);
    t(13),
      (n.a = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          [
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M5.218 8.924a13.465 13.465 0 005.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214a10.14 10.14 0 003.173.507c.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C8.764 18 2 11.236 2 2.889 2 2.4 2.4 2 2.889 2H6c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.892.892 0 01-.223.907L5.218 8.924z",
            }),
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M16.095 2.154a.53.53 0 01.75.002.535.535 0 01.002.752L11.919 7.93h2.876a.535.535 0 010 1.071h-4.297A.498.498 0 0110 8.502V4.1a.527.527 0 111.054 0v3.07l5.04-5.016z",
            }),
          ],
          4,
          { viewBox: "0 0 20 20" }
        );
      });
  },
  442: function (e, n, t) {
    t.r(n);
    var a = t(1),
      r = t(13);
    function l(e) {
      var n;
      null == (n = self.opener) || n.postMessage(e, "*");
    }
    function o(e, n) {
      l({ action: "log", type: e, message: n });
    }
    function i(e) {
      l({ action: "command", command: e });
    }
    function s(e) {
      return function (n) {
        for (var t = [], a = 1, r = arguments.length; a < r; ++a)
          t[a - 1] = arguments[a];
        var l = u(n, t);
        return o(e, l), l;
      };
    }
    function u(e, n) {
      for (var t = [e[0]], a = 0; a < n.length; a++)
        t.push(
          "string" == typeof (r = n[a])
            ? `'${r}'`
            : r && "object" == typeof r
            ? Array.isArray(r)
              ? `[${r.join(",")}]`
              : r instanceof Uint8Array
              ? `<<Uint8Array: ${r.length} bytes>>`
              : r.toString === Object.prototype.toString
              ? JSON.stringify(r, (e, n) => (e ? String(n) : n))
              : String(r)
            : String(r),
          e[a + 1]
        );
      var r;
      return t.join("");
    }
    var c = t(178),
      d = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          [
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M7.166 12.667c-.055.002-.11.002-.166.002a5.83 5.83 0 01-2.666-.644l-.188-.097-2.488.582.459-2.491-.107-.18a5.699 5.699 0 01-.793-2.738c-.091-3.16 2.428-5.804 5.617-5.895.056-.002.112-.002.168-.002 3.114 0 5.691 2.464 5.781 5.568.092 3.16-2.428 5.804-5.617 5.895m6.83-5.984a6.86 6.86 0 00-2.15-4.753A7.04 7.04 0 007.04 0h-.034A6.989 6.989 0 001.91 2.174 6.856 6.856 0 00.003 7.135a6.9 6.9 0 00.855 3.13l-.62 3.672a.053.053 0 00.064.06l3.665-.808a7.062 7.062 0 003.234.681 6.985 6.985 0 005.052-2.349 6.904 6.904 0 001.742-4.838",
            }),
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M4.548 3.585c-.118 0-.3.042-.458.204-.166.17-.63.577-.657 1.434-.026.858.575 1.705.658 1.824.084.119 1.15 1.968 2.904 2.72 1.032.443 1.486.52 1.777.52.12 0 .213-.014.307-.02.321-.019 1.047-.389 1.205-.791.158-.403.17-.751.128-.825-.042-.074-.157-.122-.329-.214-.172-.092-1.018-.54-1.177-.603a.53.53 0 00-.187-.049c-.071 0-.136.033-.209.124a12.49 12.49 0 01-.574.666.26.26 0 01-.19.088.462.462 0 01-.192-.051c-.206-.096-.727-.299-1.377-.912a5.25 5.25 0 01-.935-1.237c-.096-.177-.002-.269.088-.353.081-.075.181-.198.272-.297.09-.099.121-.17.183-.285.062-.114.036-.217-.005-.305-.04-.089-.354-.96-.499-1.31-.122-.294-.26-.304-.384-.313-.101-.007-.218-.01-.334-.014a.5.5 0 00-.015 0",
            }),
          ],
          4,
          { viewBox: "0 0 14 14" }
        );
      },
      f = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          (0, a.f)(
            32,
            "g",
            null,
            [
              (0, a.f)(32, "path", null, null, 1, {
                d:
                  "M6.022 10.656a16.832 16.832 0 007.322 7.322l2.445-2.445c.3-.3.744-.4 1.133-.266 1.245.41 2.59.633 3.967.633.611 0 1.111.5 1.111 1.111v3.878C22 21.5 21.5 22 20.889 22 10.456 22 2 13.544 2 3.111 2 2.5 2.5 2 3.111 2H7c.611 0 1.111.5 1.111 1.111 0 1.389.222 2.722.633 3.967.123.389.034.822-.277 1.133l-2.445 2.445z",
              }),
              (0, a.f)(32, "path", null, null, 1, {
                d:
                  "M17 10.8a3.8 3.8 0 100-7.6 3.8 3.8 0 000 7.6zm0 1.2a5 5 0 110-10 5 5 0 010 10z",
              }),
              (0, a.f)(32, "path", null, null, 1, {
                d:
                  "M13.588 4.578a.7.7 0 11.99-.99l5.834 5.834a.7.7 0 11-.99.99l-5.834-5.834z",
              }),
            ],
            4,
            { "fill-rule": "nonzero" }
          ),
          2,
          { viewBox: "0 0 24 24" }
        );
      },
      h = t(22),
      v = t.n(h);
    function p(e) {
      var n = e.children,
        t = e.icon,
        l = e.state,
        o = e.status,
        i = e.uri;
      return (0, a.f)(
        1,
        "div",
        "WU",
        [
          (0, a.f)(
            1,
            "div",
            "Wa",
            [
              (0, a.f)(
                1,
                "div",
                "Wc",
                null == i
                  ? null
                  : (0, a.f)(1, "img", "Wd", null, 1, { src: i }),
                0,
                {
                  style: r.h({
                    backgroundImage: "url('/icons/avatarOneToOne.svg')",
                  }),
                }
              ),
              (0, a.f)(
                1,
                "div",
                (0, v.a)("We", "ending" === l && "Wg"),
                [
                  (0, a.f)(1, "div", "Wf", t, 0),
                  (0, a.f)(1, "div", "Wh", o, 0),
                ],
                4
              ),
            ],
            4
          ),
          (0, a.f)(1, "div", "Wb", n, 0),
        ],
        4
      );
    }
    function m(e) {
      var n = e.name,
        t = e.phone,
        r = e.icon,
        l = e.brand,
        o = e.state,
        i = e.status,
        s = e.uri;
      return (0, a.b)(2, p, {
        icon: r,
        status: i,
        state: o,
        uri: s,
        children: [
          (0, a.f)(1, "div", "Wi GI GE", null == n ? t : n, 0),
          (0, a.f)(
            1,
            "div",
            "Wj GG GC GI GE",
            [
              (0, a.b)(2, d, { className: "Wk" }),
              (0, a.e)(" "),
              (0, a.f)(1, "span", null, l, 0),
            ],
            4
          ),
        ],
      });
    }
    function b(e) {
      var n = e.description,
        t = e.title;
      return (0, a.f)(
        1,
        "div",
        "WV",
        (0, a.f)(
          1,
          "div",
          "WW",
          [
            (0, a.b)(2, f, { className: "WX" }),
            (0, a.f)(1, "div", "WY GF GC", t, 0),
            (0, a.f)(1, "div", "WZ GG GC", null == n ? null : n, 0),
          ],
          4
        ),
        2
      );
    }
    var g = t(55);
    function y(e) {
      var n,
        t = e.element,
        r = e.className;
      return null == t
        ? null
        : (0, a.f)(1, "span", r, null != (n = t.label) ? n : t.icon, 0);
    }
    function k(e) {
      var n = e.left,
        t = e.center,
        r = e.right;
      return (0, a.f)(
        1,
        "div",
        "WP",
        [
          (0, a.b)(2, y, { element: n, className: "WR WQ" }),
          (0, a.b)(2, y, { element: t, className: "WS WQ" }),
          (0, a.b)(2, y, { element: r, className: "WT WQ" }),
        ],
        4
      );
    }
    function w(e) {
      null != e && e();
    }
    function O(e) {
      null != e && e.action();
    }
    var C = class extends r.a {
        constructor() {
          var e;
          return (
            (e = super(...arguments)),
            (this.ref = r.e()),
            (this.handleKeyDown = (e) => {
              var n = (0, g.m)(e),
                t = this.props.softKeys;
              switch (n) {
                case g.k:
                  return O(t.left);
                case g.j:
                  return O(t.center);
                case g.l:
                  return O(t.right);
                case g.d:
                  return w(t.onArrowUp);
                case g.a:
                  return w(t.onArrowDown);
                case g.f:
                  return w(t.onCall);
                case g.g:
                  return w(t.onEndCall);
                case g.e:
                  return w(t.onBack);
                case g.h:
                  return w(t.onHeadsetHook);
                default:
                  return;
              }
            }),
            e
          );
        }
        shouldComponentUpdate(e, n) {
          var t = this.props;
          return (
            t !== e && (t.softKeys !== e.softKeys || t.children !== e.children)
          );
        }
        componentDidMount() {
          this.ref.current && this.ref.current.focus();
        }
        render() {
          var e = this.props.softKeys,
            n = e.left,
            t = e.center,
            r = e.right;
          return (0, a.f)(
            1,
            "div",
            "WN",
            [
              (0, a.f)(1, "div", "WO", this.props.children, 0),
              (0, a.b)(2, k, { left: n, center: t, right: r }),
            ],
            4,
            { tabIndex: "1", onKeyDown: this.handleKeyDown },
            null,
            this.ref
          );
        }
      },
      M = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          (0, a.f)(32, "path", null, null, 1, {
            d:
              "M16.2 7.75c-2.683-.873-5.706-.867-8.396 0v2.766c0 .34-.195.647-.49.792a10.14 10.14 0 00-2.602 1.886.892.892 0 01-1.257 0L1.26 11a.892.892 0 010-1.257c5.902-5.902 15.58-5.902 21.483 0a.892.892 0 010 1.257l-2.2 2.2a.892.892 0 01-1.257 0 10.098 10.098 0 00-2.602-1.886.892.892 0 01-.484-.798V7.75z",
          }),
          2,
          { viewBox: "0 0 24 20" }
        );
      },
      S = t(336),
      W = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          (0, a.f)(32, "path", null, null, 1, {
            d:
              "M13.204 15.337c-.681.379-1.365.646-2.023.756v2.472a.68.68 0 01-.683.688h-.995a.69.69 0 01-.683-.688v-2.478c-3.153-.592-5.568-3.355-5.568-6.56v-.254h2.176v.253c0 2.6 2.099 4.578 4.665 4.578.552 0 1.13-.111 1.689-.314l-1.205-1.23a2.02 2.02 0 01-.577.061c-1.718 0-3.037-1.345-3.037-3.095v-.56l-4.889-4.99a1.137 1.137 0 01-.003-1.59 1.095 1.095 0 011.573.005l14.281 14.58c.434.443.435 1.15.005 1.59a1.095 1.095 0 01-1.574-.006l-3.152-3.218zm-.167-11.495v6.494L7.035 4.209l-.072-.177v-.19C6.963 2.093 8.282.747 10 .747c1.719 0 3.037 1.346 3.037 3.095zm1.628 5.431h2.084v.253c0 1.196-.297 2.283-.876 3.17l-.173.264-1.44-1.472.047-.146c.239-.73.358-1.28.358-1.816v-.253z",
          }),
          2,
          { viewBox: "0 0 20 20" }
        );
      },
      j = t(306),
      A = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          [
            (0, a.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M6 5H2.1C1.5 5 1 5.5 1 6.1v3.7c0 .7.5 1.2 1.1 1.2H6l4.9 4.3c.4.4 1.1.1 1.1-.5V1.2c0-.6-.7-.9-1.1-.5L6 5z",
              "clip-rule": "evenodd",
            }),
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "m18 6.9 2-2s.5-.4 1 0c.5.5.1 1 .1 1l-2 2 2 2s.5.5 0 1.1c-.5.5-1.1.1-1.1.1l-2-2-2 2s-.7.5-1.2-.1c-.4-.5 0-1.1 0-1.1l1.9-2-2-2s-.4-.7.1-1.1c.6-.5 1.1 0 1.1 0L18 6.9z",
            }),
          ],
          4,
          { x: "0", y: "0", viewBox: "0 0 23 16" }
        );
      },
      E = (e) => {
        var n = e.className;
        return (0, a.f)(
          32,
          "svg",
          n,
          [
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M18.333.667a.81.81 0 00-.162 1.15c2.865 3.698 2.865 8.668 0 12.366a.809.809 0 00.16 1.15c.152.112.33.167.506.167a.843.843 0 00.67-.325c3.324-4.291 3.324-10.059 0-14.35a.85.85 0 00-1.174-.158z",
            }),
            (0, a.f)(32, "path", null, null, 1, {
              d:
                "M15.015 3.17a.836.836 0 00-.15 1.152c1.664 2.234 1.663 5.122 0 7.355a.838.838 0 00.148 1.153.785.785 0 001.123-.154 7.778 7.778 0 00.002-9.353.786.786 0 00-1.123-.153M5.993 5h-3.9C1.488 5 .994 5.517.994 6.15L1 9.85c0 .633.494 1.15 1.097 1.15h3.896l4.869 4.327c.445.397 1.133.067 1.133-.546V1.219c0-.614-.69-.944-1.135-.544L5.993 5z",
            }),
          ],
          4,
          { viewBox: "0 0 23 16" }
        );
      };
    function L(e) {
      return () => i(e);
    }
    function z(e) {
      var n = e.data,
        t = e.icon,
        r = e.l10n,
        l = e.softKeys,
        o = n.name,
        i = n.phone,
        s = n.state,
        u = n.status,
        c = n.uri;
      return (0, a.b)(2, C, {
        softKeys: l || {},
        children: (0, a.b)(2, m, {
          brand: r.brand,
          icon: t,
          name: o,
          phone: i,
          state: s,
          status: u,
          uri: c,
        }),
      });
    }
    function N(e) {
      return new Promise((n, t) => {
        var a = navigator.mozSettings.createLock().get(e);
        (a.onsuccess = () => {
          var t = a.result;
          n(null != t ? t[e] : null);
        }),
          (a.onerror = () => t(a.error || "unknown"));
      });
    }
    var B = [750, 1500],
      x = B.reduce((e, n) => e + n, 0),
      I = class extends r.b {
        constructor() {
          var e;
          return (
            (e = super(...arguments)),
            (this.m = !1),
            (this.n = r.e()),
            (this.vibrationIntervalId = null),
            (this.state = { ringtone: null, muted: !1 }),
            (this.muteRingtoneAndVibration = () => {
              this.setState({ muted: !0 });
            }),
            e
          );
        }
        componentDidMount() {
          (this.m = !0), this.maybeVibrate(), this.retreiveRingtoneUrl();
        }
        componentDidUpdate(e, n) {
          var t = n.ringtone,
            a = this.state,
            r = a.ringtone;
          a.muted &&
            (navigator.vibrate(0), clearInterval(this.vibrationIntervalId));
          var l = this.n.current;
          null != r &&
            r !== t &&
            null !== l &&
            (l.mozAudioChannelType = "notification");
        }
        componentWillUnmount() {
          (this.m = !1),
            null != this.state.ringtone &&
              URL.revokeObjectURL(this.state.ringtone),
            navigator.vibrate(0),
            clearInterval(this.vibrationIntervalId);
        }
        retreiveRingtoneUrl() {
          N("dialer.ringtone")
            .then((e) => (e instanceof Blob ? e : null))
            .then((e) => {
              if (this.m && null != e) {
                var n = URL.createObjectURL(e);
                this.setState({ ringtone: n });
              }
            });
        }
        maybeVibrate() {
          N("vibration.enabled")
            .then((e) => !!e)
            .then((e) => {
              this.m &&
                e &&
                (navigator.vibrate(B),
                (this.vibrationIntervalId = setInterval(
                  () => navigator.vibrate(B),
                  x
                )));
            });
        }
        render() {
          var e = this.props.l10n,
            n = {
              left: { label: e.accept, action: L("accept") },
              onCall: L("accept"),
              right: { label: e.reject, action: L("reject") },
              onEndCall: L("reject"),
              onBack: L("reject"),
              onArrowDown: this.muteRingtoneAndVibration,
              onHeadsetHook: L("accept"),
            },
            t = this.state,
            r = t.ringtone,
            l = t.muted;
          return (0, a.c)(
            [
              (0, a.b)(2, z, {
                data: this.props.data,
                l10n: this.props.l10n,
                icon: (0, a.b)(2, S.a),
                softKeys: n,
              }),
              null != r &&
                !l &&
                (0, a.f)(
                  1,
                  "audio",
                  null,
                  null,
                  1,
                  { src: r, autoPlay: !0, loop: !0 },
                  null,
                  this.n
                ),
            ],
            0
          );
        }
      };
    function U(e) {
      var n = {
        right: { label: e.l10n.end, action: L("end") },
        onEndCall: L("end"),
        onBack: L("end"),
        onHeadsetHook: L("end"),
      };
      return (0, a.b)(2, z, {
        data: e.data,
        l10n: e.l10n,
        icon: (0, a.b)(2, j.a),
        softKeys: n,
      });
    }
    function D(e) {
      var n = e.children,
        t = e.hidden;
      return (0, a.f)(
        1,
        "div",
        "B",
        (0, a.f)(1, "span", (0, v.a)("C", !t && "D"), n, 0),
        2
      );
    }
    function K(e) {
      return e ? (0, a.b)(2, j.a) : (0, a.b)(2, S.a);
    }
    var R = class extends r.b {
      constructor() {
        var e;
        return (
          (e = super(...arguments)),
          (this.o = null),
          (this.p = null),
          (this.q = null),
          (this.state = { isSpeakerOn: !1, showSpeakerBanner: !1 }),
          e
        );
      }
      componentDidMount() {
        this.r(!1);
        var e = navigator.mozAudioChannelManager;
        e && (e.volumeControlChannel = "telephony"),
          null != window.AudioChannelClient &&
            ((this.p = new window.AudioChannelClient("telephony")),
            this.p.requestChannel()),
          null == this.q && (this.q = navigator.requestWakeLock("cpu"));
      }
      componentDidUpdate(e, n) {
        n.isSpeakerOn !== this.state.isSpeakerOn &&
          (clearTimeout(this.o),
          this.setState({ showSpeakerBanner: !0 }),
          (this.o = setTimeout(() => {
            this.setState({ showSpeakerBanner: !1 });
          }, 2e3)));
      }
      componentWillUnmount() {
        clearTimeout(this.o),
          this.r(!1),
          null != this.p && this.p.abandonChannel();
        var e = navigator.mozAudioChannelManager;
        e && (e.volumeControlChannel = "content"),
          null != this.q && this.q.unlock();
      }
      r(e) {
        var n = navigator.mozTelephony;
        n && (n.speakerEnabled = e);
      }
      setSpeakerState(e) {
        this.setState({ isSpeakerOn: e }, () => this.r(e));
      }
      computeSoftKeys() {
        var e = this.props,
          n = e.data,
          t = e.l10n,
          r = n.isLocallyMuted,
          l = this.state.isSpeakerOn;
        return {
          left: {
            label: r ? t.unmute : t.mute,
            action: L(r ? "unmute" : "mute"),
          },
          center: {
            icon: l
              ? (0, a.b)(2, A, { className: "A" })
              : (0, a.b)(2, E, { className: "A" }),
            action: () => this.setSpeakerState(!l),
          },
          right: { label: t.end, action: L("end") },
          onEndCall: L("end"),
          onBack: L("end"),
          onArrowUp: () => navigator.volumeManager.requestUp(),
          onArrowDown: () => navigator.volumeManager.requestDown(),
          onHeadsetHook: L("end"),
        };
      }
      render() {
        var e = this.props,
          n = e.data,
          t = e.l10n,
          r = t.speakerOn,
          l = t.speakerOff,
          o = n.isCaller,
          i = n.isLocallyMuted ? (0, a.b)(2, W, { className: "E" }) : K(o),
          s = this.state,
          u = s.isSpeakerOn,
          c = s.showSpeakerBanner;
        return (0, a.c)(
          [
            (0, a.b)(2, z, {
              data: n,
              l10n: t,
              icon: i,
              softKeys: this.computeSoftKeys(),
            }),
            (0, a.b)(2, D, { hidden: c, children: u ? r : l }),
          ],
          4
        );
      }
    };
    function G(e) {
      return (0, a.b)(2, z, {
        data: e.data,
        l10n: e.l10n,
        icon: (0, a.b)(2, M),
      });
    }
    function H(e) {
      var n = e.data,
        t = e.l10n;
      return (0, a.b)(2, z, {
        data: n,
        l10n: t,
        icon: K(n.isCaller),
        softKeys: {
          onBack: L("closeImmediatelyAndEnd"),
          onEndCall: L("closeImmediatelyAndEnd"),
          right: { label: t.end, action: L("closeImmediatelyAndEnd") },
        },
      });
    }
    function V(e) {
      var n = e.data,
        t = e.l10n,
        r = t.errorTitle,
        l = t.ok;
      return (0, a.c)(
        [
          (0, a.b)(2, z, {
            data: Object.assign({}, n, { status: r }),
            l10n: t,
            icon: (0, a.b)(2, j.a),
            softKeys: {
              center: { label: l, action: L("clearError") },
              onEndCall: L("clearError"),
              onBack: L("clearError"),
            },
          }),
          (0, a.b)(2, b, { title: r, description: n.status }),
        ],
        4
      );
    }
    function P(e) {
      switch (e.data.state) {
        case "incoming":
          return (0, a.i)((0, a.b)(2, I, Object.assign({}, e)));
        case "outgoing":
          return (0, a.i)((0, a.b)(2, U, Object.assign({}, e)));
        case "ongoing":
          return (0, a.i)((0, a.b)(2, R, Object.assign({}, e)));
        case "ending":
          return (0, a.i)((0, a.b)(2, G, Object.assign({}, e)));
        case "loading":
          return (0, a.i)((0, a.b)(2, H, Object.assign({}, e)));
        default:
          return e.data.state, (0, a.i)((0, a.b)(2, V, Object.assign({}, e)));
      }
    }
    function T(e) {
      return null != e && "object" == typeof e;
    }
    function q(e) {
      return "string" == typeof e;
    }
    function _(e) {
      return "boolean" == typeof e;
    }
    function J(e) {
      return q(e) || null == e;
    }
    function Q(e) {
      if (T(e)) {
        var n = (function (e) {
          var n = c.c.indexOf(e);
          if (-1 !== n) return c.c[n];
        })(e.state);
        if (null != n) {
          var t = e.isCaller,
            a = e.isLocallyMuted,
            r = e.phone,
            l = e.status,
            o = e.name,
            i = e.uri;
          if (_(t) && _(a) && q(r) && J(l) && J(o) && J(i))
            return {
              state: n,
              isCaller: t,
              isLocallyMuted: a,
              status: l,
              name: o,
              phone: r,
              uri: i,
            };
        }
      }
    }
    var $ = class extends r.b {
      constructor(e) {
        super(e),
          (this.onMessage = (e) => {
            if (e.origin === self.location.origin && null != e.data) {
              var n = Q(e.data);
              null != n && this.setState(n);
            }
          }),
          (this.state = e.data);
      }
      componentDidMount() {
        i("ready"), self.addEventListener("message", this.onMessage);
      }
      componentWillUnmount() {
        self.removeEventListener("message", this.onMessage);
      }
      render() {
        return (0, a.b)(2, P, { data: this.state, l10n: this.props.l10n });
      }
    };
    (self.LOG = s("log")),
      (self.WARN = s("warn")),
      (self.ERROR = s("error")),
      (self.DEV = s("info")),
      (self.DEV_XMPP = s("info"));
    var X = localStorage.getItem(c.b),
      F = null;
    if (null != X)
      try {
        F = (function (e) {
          if (T(e)) {
            var n = e.isRtl;
            if ("boolean" == typeof n) {
              var t = Q(e.data);
              if (null != t) {
                var a = (function (e) {
                  if (T(e)) {
                    var n = e.brand,
                      t = e.accept,
                      a = e.reject,
                      r = e.end,
                      l = e.mute,
                      o = e.unmute,
                      i = e.speakerOn,
                      s = e.speakerOff,
                      u = e.ok,
                      c = e.errorTitle;
                    if (
                      q(n) &&
                      q(t) &&
                      q(a) &&
                      q(r) &&
                      q(l) &&
                      q(o) &&
                      q(i) &&
                      q(s) &&
                      q(u) &&
                      q(c)
                    )
                      return {
                        brand: n,
                        accept: t,
                        reject: a,
                        end: r,
                        mute: l,
                        unmute: o,
                        speakerOn: i,
                        speakerOff: s,
                        ok: u,
                        errorTitle: c,
                      };
                  }
                })(e.l10n);
                if (null != a) return { isRtl: n, data: t, l10n: a };
              }
            }
          }
        })(JSON.parse(X));
      } catch (e) {}
    if (null == F)
      l({
        action: "error",
        message: "Call window could not read initial data on DOMContentLoaded",
      });
    else {
      var Y = F.isRtl ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", Y);
      var Z = document.getElementById("root");
      if (!Z) throw new Error("No root");
      r.g((0, a.b)(2, $, { l10n: F.l10n, data: F.data }), Z);
    }
  },
});
