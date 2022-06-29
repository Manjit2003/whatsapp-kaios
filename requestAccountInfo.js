"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [164],
  {
    654: function (e, t, r) {
      r.r(t);
      var o = r(1),
        a = (r(13), r(22)),
        n = r.n(a),
        s = r(31),
        d = r.n(s),
        i = r(3),
        l = r(69),
        p = r(85),
        c = r(165),
        u = r(48),
        b = r(54),
        h = r(19),
        f = r(351),
        g = r(140),
        m = r(231),
        R = r(112),
        w = r(56),
        v = r(164),
        D = r(18),
        V = r(272),
        x = r(299),
        C = r(505),
        y = r(300),
        B = r(491),
        k = (e) => {
          var t = e.className;
          return (0, o.f)(
            32,
            "svg",
            t,
            (0, o.f)(32, "path", null, null, 1, {
              d:
                "M23.04 19.53a3.25 3.25 0 00-3.564.204l-7.658-4.42c.014-.122.037-.24.037-.364s-.023-.242-.037-.363l7.658-4.42a3.254 3.254 0 10-1.295-2.242l-7.65 4.417c-.54-.4-1.2-.647-1.93-.647a3.256 3.256 0 00.01 6.51c.727 0 1.39-.245 1.93-.646l7.65 4.41c-.14 1.25.45 2.52 1.607 3.19a3.26 3.26 0 004.446-1.19 3.26 3.26 0 00-1.19-4.45z",
            }),
            2,
            { viewBox: "0 0 30 30" }
          );
        },
        S = "Tn GH GC",
        F = (0, r(45).k)("downloads/whatsapp/My account info.zip"),
        L = {
          unknown: ["intro", "waiting"],
          none: [
            "intro",
            "requestButton",
            "beforeDownloadReadyFooterPart1",
            "beforeDownloadReadyFooterPart2",
          ],
          pending: [
            "intro",
            "pending",
            "beforeDownloadReadyFooterPart1",
            "beforeDownloadReadyFooterPart2",
          ],
          available: ["intro", "downloadButton", "afterDownloadReadyFooter"],
          downloading: ["intro", "downloading", "afterDownloadReadyFooter"],
          downloaded: ["intro", "exportButton", "deleteButton"],
          error: ["intro"],
        },
        G = {
          request_failed: 319,
          delete_failed: 317,
          download_failed: 318,
          download_expired: 320,
        },
        j = (e) => {
          var t = e.selected,
            r = e.className,
            a = e.children;
          return (0, o.b)(2, g.b.div, {
            hasFocusPriority: t,
            className: (0, n.a)(r, "Tk", t && "Tl"),
            children: a,
          });
        },
        z = class extends w.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Vg = (e, t) => {
                switch (e) {
                  case "intro":
                    return this.VV(t);
                  case "waiting":
                    return this.VW(t);
                  case "requestButton":
                    return this.VX(t);
                  case "pending":
                    return this.VY(t);
                  case "downloadButton":
                    return this.VZ(t);
                  case "downloading":
                    return this.Va(t);
                  case "exportButton":
                    return this.Vb(t);
                  case "deleteButton":
                    return this.Vc(t);
                  case "afterDownloadReadyFooter":
                    return this.Vd(t);
                  case "beforeDownloadReadyFooterPart1":
                    return this.Ve(t);
                  case "beforeDownloadReadyFooterPart2":
                    return this.Vf(t);
                  default:
                    return (0, d.a)(e);
                }
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.gdprReport !== e.gdprReport;
          }
          componentDidMount() {
            E(this.props.backend), super.componentDidMount();
          }
          componentDidUpdate(e, t, r) {
            "error" !== e.gdprReport.status &&
              "error" === this.props.gdprReport.status &&
              (0, h.e)({
                title: 229,
                text: G[this.props.gdprReport.reason],
                onClose: () => {
                  E(this.props.backend);
                },
              }),
              super.componentDidUpdate(e, t, r);
          }
          addSoftKeys(e) {
            e.setLeftAsBack();
          }
          VV(e) {
            return (0, o.b)(2, N, { selected: e });
          }
          VW(e) {
            return (0, o.b)(2, R.k, {
              selected: e,
              children: (0, o.b)(2, v.a),
            });
          }
          VX(e) {
            return (0, o.b)(2, T, { selected: e });
          }
          VY(e) {
            return "pending" === this.props.gdprReport.status
              ? (0, o.b)(2, R.j, {
                  title: 314,
                  subtitle: [
                    (0, l.i)(
                      this.props.gdprReport.availabilityDate,
                      "fulldate"
                    ),
                    81,
                  ],
                  icon: (0, o.b)(2, x.a),
                  selected: e,
                  disabled: !0,
                  borderBottom: !0,
                })
              : null;
          }
          VZ(e) {
            if ("available" === this.props.gdprReport.status) {
              var t = this.props.gdprReport,
                r = t.creationDate,
                a = t.expirationDate,
                n = t.metadata,
                s = t.size;
              return (0, o.b)(2, U, {
                creationDate: r,
                expirationDate: a,
                metadata: n,
                size: s,
                selected: e,
              });
            }
            return null;
          }
          Va(e) {
            return (0, o.b)(2, R.j, {
              title: 308,
              icon: (0, o.b)(2, x.a),
              selected: e,
              disabled: !0,
              borderBottom: !0,
            });
          }
          Vb(e) {
            return "downloaded" === this.props.gdprReport.status
              ? (0, o.b)(2, P, {
                  blob: this.props.gdprReport.blob,
                  creationDate: this.props.gdprReport.creationDate,
                  selected: e,
                })
              : null;
          }
          Vc(e) {
            return (0, o.b)(2, K, { selected: e });
          }
          Vd(e) {
            var t = this.props.gdprReport;
            if ("available" === t.status || "downloading" === t.status) {
              var r = (0, l.i)(t.expirationDate, "fulldate");
              return (0, o.b)(2, j, {
                selected: e,
                className: S,
                children: (0, o.b)(2, D.b, { l10n: [r, 84] }),
              });
            }
            return null;
          }
          Ve(e) {
            var t,
              r,
              a,
              n = this.props.gdprReport,
              s =
                "pending" === n.status
                  ? ((t = (0, i.E)()),
                    (r = n.availabilityDate),
                    (a = Math.round((r - t) / i.b)),
                    Math.max(Math.min(a, 3), 1))
                  : 3;
            return (0, o.b)(2, j, {
              selected: e,
              className: S,
              children: (0, o.b)(2, D.b, { l10n: [s, 83] }),
            });
          }
          Vf(e) {
            return (0, o.b)(2, j, {
              selected: e,
              className: S,
              children: (0, o.b)(2, D.b, { l10n: 323 }),
            });
          }
          render() {
            var e,
              t = ((e = this.props.gdprReport.status), L[e]);
            return (0, o.b)(2, V.a, {
              title: (0, o.b)(2, D.b, { l10n: 732 }),
              children: (0, o.b)(2, m.a, {
                className: "Tj",
                items: t,
                keyOf: M,
                renderItem: this.Vg,
              }),
            });
          }
        };
      function M(e) {
        return e;
      }
      t.default = (0, b.c)((0, w.e)(z), (e, t) => ({
        gdprReport: e.gdprReport || { status: "unknown" },
        backend: t,
      }));
      var N = class extends w.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(785, () => (0, c.y)(t, c.k));
          }
          render() {
            return (0, o.b)(2, j, {
              selected: this.props.selected,
              className: "Tm GG GC",
              children: (0, o.b)(2, D.b, { l10n: 324 }),
            });
          }
        },
        T = class extends w.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(818, t.requestGdprReport);
          }
          render() {
            return (0, o.b)(2, R.j, {
              title: 312,
              icon: (0, o.b)(2, y.a),
              selected: this.props.selected,
              borderBottom: !0,
            });
          }
        },
        U = class extends w.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.creationDate !== e.creationDate ||
                r.expirationDate !== e.expirationDate ||
                r.metadata !== e.metadata ||
                r.selected !== e.selected ||
                r.size !== e.size)
            );
          }
          addSoftKeys(e) {
            e.setCenterLabel(818, (e) => {
              e.fireAndForget("backend", "downloadGdprReport", {
                reportCreationTime: this.props.creationDate,
                gdprReportMetadata: this.props.metadata,
              });
            });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = e.expirationDate,
              a = e.size,
              n = (0, o.c)(
                [
                  (0, o.f)(1, "span", null, (0, l.i)(r, "fulldateShort"), 0),
                  u.a,
                  (0, o.b)(2, f.a, { size: a }),
                ],
                0
              );
            return (0, o.b)(2, R.j, {
              title: 313,
              rawSubtitle: n,
              icon: (0, o.b)(2, B.a),
              selected: t,
              borderBottom: !0,
            });
          }
        },
        P = class extends w.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.exportReportToFile = (e) => {
                var t = this.props.blob;
                (0, h.f)({
                  title: 311,
                  text: 310,
                  onConfirm: () => {
                    this.saveReport(t, e);
                  },
                  onCancel: "CLOSE",
                });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.blob !== e.blob ||
                r.creationDate !== e.creationDate ||
                r.selected !== e.selected)
            );
          }
          saveReport(e, t) {
            (0, p.o)(e, F)
              .then((e) =>
                (0, h.g)({
                  title: 322,
                  text: [e, 82],
                  center: 796,
                  onSoftCenter: "CLOSE",
                  onBack: "CLOSE",
                  right: 785,
                  onSoftRight: () => (0, c.y)(t, c.j),
                })
              )
              .catch(() => (0, h.e)({ title: 229, text: 321 }));
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(818, () => {
              this.exportReportToFile(t);
            });
          }
          render() {
            var e = this.props,
              t = e.creationDate,
              r = e.selected;
            return (0, o.b)(2, R.j, {
              title: 309,
              rawSubtitle: (0, l.i)(t, "fulldate"),
              icon: (0, o.b)(2, k),
              selected: r,
              borderBottom: !0,
            });
          }
        },
        K = class extends w.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(818, () => {
              (0, h.f)({
                title: 316,
                text: 315,
                onConfirm: t.deleteGdprReport,
                onCancel: "CLOSE",
              });
            });
          }
          render() {
            var e = this.props.selected;
            return (0, o.b)(2, R.j, {
              title: 307,
              icon: (0, o.b)(2, C.a),
              selected: e,
              danger: !0,
              borderBottom: !0,
            });
          }
        };
      function E(e) {
        e.fireAndForget("backend", "getGdprReportStatus", {});
      }
    },
  },
]);
