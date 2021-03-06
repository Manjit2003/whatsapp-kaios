"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [30],
  {
    496: function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return s;
        });
      var a = i(19);
      function n(t, e) {
        (0, a.i)({ title: 142 }),
          t.fireAndForget("backend", "registerCompanionDevice", {
            qrString: e,
          });
      }
      function s(t) {
        t.fireAndForget("backend", "loadCompanions", {});
      }
    },
    662: function (t, e, i) {
      i.r(e);
      var a = i(1),
        n = (i(13), i(514)),
        s = i.n(n),
        r = i(54),
        o = i(56),
        d = i(18),
        h = i(477),
        l = i(272),
        c = i(496),
        u = class extends o.a {
          constructor(t, e) {
            super(t, e),
              (this.VC = !1),
              (this.VF = null),
              (this.VI = () => {
                var t;
                if (null != this.VD && this.VD.videoWidth > 0) {
                  var e = this.VD.videoWidth,
                    i = this.VD.videoHeight;
                  if (null == this.VE) {
                    var a = document.createElement("canvas");
                    (a.width = e), (a.height = i);
                    var n = a.getContext("2d", { willReadFrequently: !0 });
                    this.VE = n;
                  }
                  try {
                    this.VE.drawImage(this.VD, 0, 0, e, i);
                    var r = this.VE.getImageData(0, 0, e, i);
                    t = (0, s.a)(r.data, r.width, r.height, {
                      inversionAttempts: "dontInvert",
                    });
                  } catch (t) {}
                }
                null == t ? this.VH() : (0, c.b)(this.props.backend, t.data);
              }),
              (this.VJ = (t) => {
                if (null != t) {
                  var e = this.state.stream;
                  (this.VD = t),
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
            (this.VC = !0), this.VG(), super.componentDidMount();
          }
          componentWillUnmount() {
            (this.VC = !1), this.VF && cancelAnimationFrame(this.VF);
            var t = this.state.stream;
            "ready" === t.type &&
              t.value.getTracks().forEach((t) => {
                t.stop();
              }),
              super.componentWillUnmount();
          }
          VG() {
            (null != navigator.mediaDevices &&
            navigator.mediaDevices.getUserMedia
              ? Promise.resolve(
                  navigator.mediaDevices.getUserMedia({ video: !0 })
                )
              : Promise.reject("Recording not supported")
            )
              .then((t) => {
                this.VC &&
                  (this.setState({ stream: { type: "ready", value: t } }),
                  this.VH());
              })
              .catch(() => {
                this.VC && this.setState({ stream: { type: "error" } });
              });
          }
          VH() {
            this.VF = requestAnimationFrame(this.VI);
          }
          addSoftKeys(t, e) {
            t.setLeftAsBack();
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
                    "TR",
                    null,
                    1,
                    { autoPlay: !0, playsInline: !0 },
                    null,
                    this.VJ
                  ))),
              (0, a.b)(2, l.a, {
                title: (0, a.b)(2, d.b, { l10n: 439 }),
                children: e,
              })
            );
          }
        };
      e.default = (0, r.j)((0, o.e)(u));
    },
  },
]);
