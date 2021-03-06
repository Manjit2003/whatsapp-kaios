"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [69],
  {
    375: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var a = i(0),
        n = {},
        r = {};
      (n.internalSpec = {
        publicKey: [1, a.d.BYTES],
        identifier: [2, a.d.BYTES],
      }),
        (r.internalSpec = {
          version: [1, a.d.UINT32],
          localFingerprint: [2, a.d.MESSAGE, n],
          remoteFingerprint: [3, a.d.MESSAGE, n],
        });
    },
    659: function (t, e, i) {
      i.r(e);
      var a = i(1),
        n = (i(13), i(54)),
        r = i(474),
        s = i(507),
        o = i(18),
        l = i(32),
        d = i(56),
        c = i(346),
        h = i(480),
        u = i(490),
        p = i(19);
      function v(t) {
        for (var e = [], i = 0; i < t.length; ++i)
          e.push(String.fromCharCode(t[i]));
        return e.join("");
      }
      var V = class extends d.a {
        constructor(t, e) {
          super(t, e),
            (this.Vq = !1),
            (this.state = { identityVerificationData: null, loading: !0 });
        }
        componentDidMount() {
          (this.Vq = !0), this.Vr(), super.componentDidMount();
        }
        componentWillUnmount() {
          (this.Vq = !1), super.componentWillUnmount();
        }
        componentDidUpdate(t, e) {
          var i = this.props.update;
          if (i && i !== t.update) {
            var a = this.props,
              n = a.contacts,
              r = a.jid,
              s = (0, l.e)(n, r);
            (0, p.e)({ title: [s, 141], text: [s, 140] }), this.Vr();
          }
          super.componentDidUpdate(t, e);
        }
        Vr() {
          this.setState({ loading: !0 });
          var t = this.props,
            e = t.backend,
            i = t.jid,
            a = t.update,
            n = this;
          e.getIdentityVerificationData(i).then((t) => {
            n.Vq &&
              n.props.update === a &&
              n.setState({ identityVerificationData: t, loading: !1 });
          });
        }
        Vs(t) {
          var e = t.length;
          if (60 !== e)
            return (
              __LOG__(
                4
              )`Security Code length mismatch! Expected ${60} got ${e}`,
              null
            );
          for (var i = [], n = 0; n < 60; n += 10)
            i.push(
              (0, a.f)(
                1,
                "div",
                null,
                [t.slice(n, n + 5), c.c, t.slice(n + 5, n + 10)],
                0,
                null,
                "digits-" + n
              )
            );
          return i;
        }
        addSoftKeys(t, e) {
          t.setLeftAsBack(),
            null != this.state.identityVerificationData &&
              t.setRightLabel(675, () => {
                null != this.state.identityVerificationData &&
                  (0, u.a)(
                    e,
                    this.props.jid,
                    this.state.identityVerificationData
                  );
              });
        }
        Vt() {
          var t = this.props,
            e = t.contacts,
            i = t.jid,
            n = (0, l.e)(e, i);
          return (0, a.b)(2, o.b, { l10n: [n, 144] });
        }
        Vu(t, e) {
          var i = 0,
            n = t[e];
          n && n.devices && n.devices.length > 0 && (i = n.devices.length - 1);
          var r = (0, l.e)(t, e);
          return 0 === i
            ? (0, a.b)(2, o.b, { l10n: [r, 142] })
            : (0, a.b)(2, o.b, { l10n: [i, r, 143] });
        }
        render() {
          var t = this.state,
            e = t.loading,
            i = t.identityVerificationData;
          if (e) return (0, a.b)(2, h.a, { title: 442, subtitle: 443 });
          var n = null;
          if (null == i) n = (0, a.f)(1, "div", "TJ", this.Vt(), 0);
          else {
            var l = i.qrCodeData,
              d = i.digitsCodeData,
              c = this.props,
              u = c.jid,
              p = c.contacts;
            n = (0, a.f)(
              1,
              "div",
              "TH",
              [
                (0, a.f)(
                  1,
                  "div",
                  "TK",
                  (0, a.b)(2, s.a, { className: "TL", data: v(l) }),
                  2
                ),
                (0, a.f)(1, "div", "TM", this.Vs(d), 0),
                (0, a.f)(1, "div", "TI", this.Vu(p, u), 0),
              ],
              4
            );
          }
          return (0, a.b)(2, r.a, {
            title: (0, a.b)(2, o.b, { l10n: 442 }),
            children: n,
          });
        }
      };
      e.default = (0, n.c)((0, d.e)(V), (t, e, i) => {
        var a = t.contacts;
        return Object.assign({}, i, { contacts: a, backend: e });
      });
    },
    660: function (t, e, i) {
      i.r(e);
      var a = i(1),
        n = (i(13), i(514)),
        r = i.n(n),
        s = i(67),
        o = i(375),
        l = i(19),
        d = i(56),
        c = i(18),
        h = i(477),
        u = i(32),
        p = i(272),
        v = i(54),
        V = class extends d.a {
          constructor(t, e) {
            super(t, e),
              (this.Vh = !1),
              (this.Vk = null),
              (this.Vn = () => {
                var t;
                if (null != this.Vi && this.Vi.videoWidth > 0) {
                  var e = this.Vi.videoWidth,
                    i = this.Vi.videoHeight;
                  if (null == this.Vj) {
                    var a = document.createElement("canvas");
                    (a.width = e), (a.height = i);
                    var n = a.getContext("2d", { willReadFrequently: !0 });
                    this.Vj = n;
                  }
                  try {
                    this.Vj.drawImage(this.Vi, 0, 0, e, i);
                    var s = this.Vj.getImageData(0, 0, e, i);
                    t = (0, r.a)(s.data, s.width, s.height, {
                      inversionAttempts: "dontInvert",
                    });
                  } catch (t) {}
                }
                (null != t && this.Vo(t)) || this.Vm();
              }),
              (this.Vo = (t) => {
                var e = this.props.identityVerificationData.remoteQRCodeData;
                try {
                  var i = (0, s.a)(o.a, Uint8Array.from(t.binaryData));
                  if (null == i || null == i.localFingerprint) return !1;
                } catch (t) {
                  return !1;
                }
                return (
                  (function (t, e) {
                    if (t.length !== e.length) return !1;
                    for (var i = 0; i <= t.length; i++)
                      if (t[i] !== e[i]) return !1;
                    return !0;
                  })(Array.from(t.binaryData), Array.from(e))
                    ? (0, l.e)({
                        title: 441,
                        text: 440,
                        onClose: this.props.backend.goBack,
                      })
                    : (0, l.e)({
                        title: 438,
                        text: [
                          (0, u.e)(this.props.contacts, this.props.jid),
                          145,
                        ],
                        onClose: () => {
                          this.Vm();
                        },
                      }),
                  !0
                );
              }),
              (this.Vp = (t) => {
                if (null != t) {
                  var e = this.state.stream;
                  (this.Vi = t),
                    "ready" === e.type
                      ? (t.srcObject = e.value)
                      : (__LOG__(4)`Started capturing but stream is not ready`,
                        SEND_LOGS("qr-unready-stream"));
                }
              }),
              (this.state = {
                identityVerificationData: null,
                stream: { type: "loading" },
              });
          }
          componentDidMount() {
            (this.Vh = !0), this.Vl(), super.componentDidMount();
          }
          componentWillUnmount() {
            (this.Vh = !1), this.Vk && cancelAnimationFrame(this.Vk);
            var t = this.state.stream;
            "ready" === t.type &&
              t.value.getTracks().forEach((t) => {
                t.stop();
              }),
              super.componentWillUnmount();
          }
          Vl() {
            (null != navigator.mediaDevices &&
            navigator.mediaDevices.getUserMedia
              ? Promise.resolve(
                  navigator.mediaDevices.getUserMedia({ video: !0 })
                )
              : Promise.reject("Recording not supported")
            )
              .then((t) => {
                this.Vh &&
                  (this.setState({ stream: { type: "ready", value: t } }),
                  this.Vm());
              })
              .catch(() => {
                this.Vh && this.setState({ stream: { type: "error" } });
              });
          }
          Vm() {
            this.Vk = requestAnimationFrame(this.Vn);
          }
          addSoftKeys(t) {
            var e = this.state.stream;
            "error" === e.type || (e.type, t.setFull(780));
          }
          render() {
            var t = this.state.stream,
              e = null;
            return (
              "loading" === t.type
                ? (e = (0, a.b)(2, h.a))
                : "error" === t.type ||
                  (t.type,
                  (e = (0, a.f)(
                    1,
                    "video",
                    "TG",
                    null,
                    1,
                    { autoPlay: !0, playsInline: !0 },
                    null,
                    this.Vp
                  ))),
              (0, a.b)(2, p.a, {
                title: (0, a.b)(2, c.b, { l10n: 439 }),
                children: e,
              })
            );
          }
        };
      e.default = (0, v.c)((0, d.e)(V), (t, e, i) => {
        var a = t.contacts;
        return Object.assign({}, i, { contacts: a, backend: e });
      });
    },
  },
]);
