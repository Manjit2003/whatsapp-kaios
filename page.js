"use strict";
(function (e) {
  function t(t) {
    for (
      var r, a, o = t[0], l = t[1], c = t[2], u = 0, h = [];
      u < o.length;
      u++
    )
      (a = o[u]),
        Object.prototype.hasOwnProperty.call(s, a) && s[a] && h.push(s[a][0]),
        (s[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (d && d(t); h.length; ) h.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
        var l = n[a];
        0 !== s[l] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 157: 0 },
    s = { 157: 0 },
    i = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [];
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        {
          12: 1,
          17: 1,
          25: 1,
          26: 1,
          27: 1,
          29: 1,
          30: 1,
          45: 1,
          69: 1,
          154: 1,
          158: 1,
          160: 1,
          163: 1,
          164: 1,
          165: 1,
          180: 1,
        }[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r = e + ".css",
                s = o.p + r,
                i = document.getElementsByTagName("link"),
                l = 0;
              l < i.length;
              l++
            ) {
              var c =
                (d = i[l]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (c === r || c === s)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (l = 0; l < u.length; l++) {
              var d;
              if ((c = (d = u[l]).getAttribute("data-href")) === r || c === s)
                return t();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = t),
              (h.onerror = function (t) {
                var r = (t && t.target && t.target.src) || s,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[e],
                  h.parentNode.removeChild(h),
                  n(i);
              }),
              (h.href = s),
              document.getElementsByTagName("head")[0].appendChild(h);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var n = s[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = s[e] = [t, r];
        });
        t.push((n[2] = r));
        var i,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          o.nc && l.setAttribute("nonce", o.nc),
          (l.src = (function (e) {
            return (
              o.p +
              "" +
              ({
                0: "backendRoot~backend_content~frontendLoadMsgRange~migrations~page_stage2",
                1: "handlers/aboutNotification~handlers/businessNotification~handlers/contactsNotification~handlers/hand~78c34780",
                2: "jobs/setStatusSettings",
                3: "backendRoot~backend_content~frontendLoadMsgRange~migrations",
                4: "backendRoot~backend_content~identity~migrations",
                5: "handlers/handleAccountSyncNotification~handlers/msgReceipt~jobs/reuploadMedia~jobs/uploadMedia",
                6: "handlers/mediaRetry~handlers/msgReceipt~jobs/requestReupload~jobs/reuploadMedia",
                8: "backendRoot~backend_content~migrations",
                9: "backendRoot~backend_content~page_stage2",
                11: "imageConverters",
                12: "page_stage2~player~youtube",
                13: "addCompanionDeviceScreen~identity",
                15: "backend_content",
                17: "deleteAccount~registration",
                18: "handlers/handleAccountSyncNotification~handlers/msgReceipt",
                19: "handlers/infoBulletin",
                20: "jobs/revokeGroupInvitations",
                21: "jobs/sendMediaMsg~jobs/sendMediaMsgs",
                22: "jobs/sendProfilePicture",
                23: "jobs/sendWrittenMsg",
                24: "jobs/uploadMedia",
                25: "page_stage2~pages/TempBanned",
                26: "page_stage2~registration",
                27: "pages/UserNoticeModal",
                29: "MigratingAppRoot",
                30: "addCompanionDeviceScreen",
                33: "companionDevicesScreen",
                34: "countries/bn",
                35: "countries/en",
                36: "countries/gu",
                37: "countries/hi",
                38: "countries/kn",
                39: "countries/ml",
                40: "countries/mr",
                41: "countries/pa",
                42: "countries/ta",
                43: "countries/te",
                44: "countries/ur",
                45: "deleteAccount",
                46: "frontendLoadMsgRange",
                47: "gzip",
                48: "handlers/aboutNotification",
                49: "handlers/businessNotification",
                50: "handlers/call",
                51: "handlers/chatState",
                52: "handlers/contactsNotification",
                53: "handlers/error",
                54: "handlers/gdprNotification",
                55: "handlers/groupNotification",
                56: "handlers/handleAccountSyncNotification",
                57: "handlers/handleDevicesNotification",
                58: "handlers/handleDigestNotification",
                59: "handlers/handleDisappearingModeNotification",
                60: "handlers/handlePSANotification",
                61: "handlers/handlePrivacyTokenNotification",
                62: "handlers/mediaRetry",
                63: "handlers/msgReceipt",
                64: "handlers/presence",
                65: "handlers/profilePicNotification",
                66: "handlers/retryRequest",
                67: "handlers/serverNotification",
                68: "handlers/streamError",
                69: "identity",
                70: "intl",
                71: "jobs/acceptGroupAddRequest",
                72: "jobs/addGroupParticipants",
                73: "jobs/blockUser",
                74: "jobs/clearAllCallLogs",
                75: "jobs/convertFutureproofMessage",
                76: "jobs/createGroup",
                77: "jobs/createMissedCallLog",
                78: "jobs/deleteCallLogs",
                79: "jobs/deleteChat",
                80: "jobs/deleteChatMsgs",
                81: "jobs/deleteExpiredDevices",
                82: "jobs/deleteExpiredPreKeys",
                83: "jobs/deleteGdprReport",
                84: "jobs/deleteMsgsFromStorageSetting",
                85: "jobs/deleteTwoFactor",
                86: "jobs/demoteGroupParticipants",
                87: "jobs/downloadMedia",
                88: "jobs/finalizeCallLog",
                89: "jobs/forwardMsgs",
                90: "jobs/getAbout",
                91: "jobs/gifs",
                92: "jobs/joinGroupViaInvite",
                93: "jobs/keepMessagesFromChat",
                94: "jobs/markChatAsRead",
                95: "jobs/markGroupAsMessaged",
                96: "jobs/markPlayed",
                97: "jobs/markStatusAsSeen",
                98: "jobs/processFutureProofMsgs",
                99: "jobs/promoteGroupParticipants",
                100: "jobs/queryDirtyInfo",
                101: "jobs/quickReplyToHsm",
                102: "jobs/removeDeadMediaContent",
                103: "jobs/removeGroupParticipants",
                104: "jobs/reportGroupSpam",
                105: "jobs/reportUserSpam",
                106: "jobs/requestGdprReport",
                107: "jobs/requestPreKeyDigest",
                108: "jobs/requestReupload",
                109: "jobs/resendWrittenRevokeMsg",
                110: "jobs/retryMsg",
                111: "jobs/reuploadMedia",
                112: "jobs/revokeMsg",
                113: "jobs/rotateKey",
                114: "jobs/saveKeyChange",
                115: "jobs/sendAnonymousMetrics",
                116: "jobs/sendEphemeralSyncResponse",
                117: "jobs/sendMediaMsg",
                118: "jobs/sendMediaMsgs",
                119: "jobs/sendMetrics",
                120: "jobs/sendMsg",
                121: "jobs/sendProfilePushName",
                122: "jobs/sendReaction",
                123: "jobs/sendTrustedContactSenderToken",
                124: "jobs/sendVCardMsg",
                125: "jobs/senderBackfill",
                126: "jobs/setAbout",
                127: "jobs/setBlocklistV2",
                128: "jobs/setGroupAnnouncement",
                129: "jobs/setGroupDescription",
                130: "jobs/setGroupEphemeralSetting",
                131: "jobs/setGroupLocked",
                132: "jobs/setGroupParticipants",
                133: "jobs/setGroupSubject",
                134: "jobs/setMsgBg",
                135: "jobs/setOneToOneEphemeralSetting",
                136: "jobs/setTwoFactor",
                137: "jobs/starMessagesFromChat",
                138: "jobs/syncUserNoticeState",
                139: "jobs/tosGating",
                140: "jobs/updateChatWallpaper",
                141: "jobs/updateContactPHash",
                142: "jobs/updateGeneralSettings",
                143: "langs/bn-js",
                144: "langs/en-js",
                145: "langs/gu-js",
                146: "langs/hi-js",
                147: "langs/kn-js",
                148: "langs/ml-js",
                149: "langs/mr-js",
                150: "langs/pa-js",
                151: "langs/ta-js",
                152: "langs/te-js",
                153: "langs/ur-js",
                154: "licenses",
                155: "migrations",
                158: "page_stage2",
                159: "pages/TempBanned",
                160: "player",
                161: "queryBusinessProfile",
                162: "queryCommunitiesSubGroups",
                163: "registration",
                164: "requestAccountInfo",
                165: "sendPlace",
                166: "vendors/intl-locales-bn-js",
                167: "vendors/intl-locales-en-js",
                168: "vendors/intl-locales-gu-js",
                169: "vendors/intl-locales-hi-js",
                170: "vendors/intl-locales-kn-js",
                171: "vendors/intl-locales-ml-js",
                172: "vendors/intl-locales-mr-js",
                173: "vendors/intl-locales-pa-js",
                174: "vendors/intl-locales-ta-js",
                175: "vendors/intl-locales-te-js",
                176: "vendors/intl-locales-ur-js",
                177: "wa-media",
                178: "webp/backend",
                179: "webp/frontend",
                180: "youtube",
              }[e] || e) +
              ".js"
            );
          })(e));
        var c = new Error();
        i = function (t) {
          (l.onerror = l.onload = null), clearTimeout(u);
          var n = s[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = r),
                (c.request = a),
                n[1](c);
            }
            s[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          i({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = i), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (self.webpackJsonp = self.webpackJsonp || []),
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var d = c;
  i.push([422, 10, 14, 16]), n();
})(
  Array(18).concat([
    function (e, t, n) {
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return h;
        });
      var r = n(1),
        a = (n(13), n(20)),
        s = n(69),
        i = n(31),
        o = n.n(i),
        l = n(200);
      function c(e) {
        var t = e.l10n,
          n = (0, a.j)(t);
        if (e.spacerSize) {
          var s = p(e.spacerSize);
          "string" == typeof n ? (n = [n, s]) : n.push(s);
        }
        var i = e.className;
        return i ? (0, r.f)(1, "span", i, n, 0) : n;
      }
      c.displayName = "Text";
      var u = c;
      function d(e) {
        var t = s.d(e.unix);
        switch (t) {
          case "TODAY":
            return e.withoutTime
              ? (0, r.b)(2, u, { l10n: 908 })
              : (0, r.b)(2, u, { l10n: [s.i(e.unix, "time"), 240] });
          case "YESTERDAY":
            return e.withoutTime
              ? (0, r.b)(2, u, { l10n: 983 })
              : (0, r.b)(2, u, { l10n: [s.i(e.unix, "time"), 258] });
          case "LONG_AGO":
            return s.i(e.unix, e.withoutTime ? "date" : "dateAndTime");
          default:
            return (0, o.a)(t);
        }
      }
      function h(e) {
        return e === l.a ? null : p(e);
      }
      function p(e) {
        var t = e === l.b ? "a" : e === l.c ? "b" : "c";
        return (0, r.f)(1, "span", t);
      }
      d.displayName = "DateTimeText";
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return b;
        }),
        n.d(t, "i", function () {
          return _;
        }),
        n.d(t, "h", function () {
          return S;
        }),
        n.d(t, "k", function () {
          return E;
        }),
        n.d(t, "j", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "l", function () {
          return D;
        }),
        n.d(t, "d", function () {
          return L;
        });
      var r = n(1),
        a = (n(13), n(246)),
        s = (n(146), n(22)),
        i = n.n(s),
        o = n(231),
        l = n(18),
        c = n(112),
        u = n(56),
        d = class extends u.a {
          constructor(e, t) {
            var n, a, s;
            super(e, t),
              (this.GY = () => {
                this.props.closeOverlay();
              }),
              (this.GZ = () => {
                this.props.onSave(this.state.items), this.props.closeOverlay();
              }),
              (this.Gb = (e) => {
                if (e.scrolling) {
                  var t = e.item;
                  return new Promise((e) => {
                    this.setState({ currentIdx: t }, e);
                  });
                }
                return Promise.resolve();
              }),
              (this.Gc = (e, t) => {
                var n = this.state.items[e],
                  a = (0, i.a)("AP", t ? "AQ" : null);
                return (0, r.f)(
                  1,
                  "div",
                  a,
                  (0, r.b)(2, c.d, {
                    title: n.label,
                    checked: n.checked,
                    selected: t,
                  }),
                  2
                );
              }),
              (this.GW = this.props.defaultItems.map((e, t) => t)),
              (this.GX =
                ((n = this.props.defaultItems),
                (a = this.props.selectedKey),
                -1 !== (s = n.findIndex((e) => e.key === a))
                  ? { item: s, scrollFromTop: "start" }
                  : null)),
              (this.state = {
                currentIdx: null,
                items: this.props.defaultItems,
              });
          }
          addSoftKeys(e, t) {
            var n = this.state.currentIdx;
            if (
              (e.setBack(this.GY),
              e.setLeftLabel(761, this.GY),
              e.setRightLabel(this.props.save || 816, this.GZ),
              null != n)
            ) {
              var r = this.state.items,
                a = this.props.centerKeys;
              r[n].checked
                ? e.setCenterLabel((null == a ? void 0 : a.off) || 771, () => {
                    this.Ga(n, !1);
                  })
                : e.setCenterLabel((null == a ? void 0 : a.on) || 775, () => {
                    this.Ga(n, !0);
                  });
            }
          }
          Ga(e, t) {
            this.setState((n) => ({
              items: n.items.map((n, r) =>
                r === e ? { key: n.key, label: n.label, checked: t } : n
              ),
            }));
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              "AL X",
              [
                (0, r.f)(
                  1,
                  "div",
                  "AM Y GF GC",
                  (0, r.b)(2, l.b, { l10n: this.props.title }),
                  2
                ),
                (0, r.f)(
                  1,
                  "div",
                  "AN AT Z",
                  (0, r.b)(2, o.a, {
                    items: this.GW,
                    keyOf: h,
                    start: this.GX,
                    renderItem: this.Gc,
                    onStatus: this.Gb,
                    className: "AO AU",
                  }),
                  2
                ),
              ],
              4
            );
          }
        };
      function h(e) {
        return String(e);
      }
      var p = n(164);
      function f() {
        k(null);
      }
      function g(e) {
        return k(e);
      }
      function v(e) {
        return b({
          title: e.title,
          text: e.text,
          center: 796,
          onSoftCenter: e.onClose || "CLOSE",
          onBack: e.onClose || "CLOSE",
          onEndCall: e.onEndCall,
        });
      }
      function m(e) {
        return b({
          title: e.title,
          text: e.text,
          center: e.confirm || 796,
          onSoftCenter: e.onConfirm,
          left: e.cancel || 761,
          onSoftLeft: e.onCancel || "CLOSE",
          onBack: e.onCancel || "CLOSE",
          onEndCall: e.onEndCall,
        });
      }
      function b(e) {
        return k(
          (0, r.b)(2, a.a, {
            title: e.title,
            onBack: e.onBack || "CLOSE",
            onEndCall: e.onEndCall,
            left: e.left,
            leftIcon: e.leftIcon,
            onSoftLeft: e.onSoftLeft,
            center: e.center,
            centerIcon: e.centerIcon,
            onSoftCenter: e.onSoftCenter,
            right: e.right,
            rightIcon: e.rightIcon,
            onSoftRight: e.onSoftRight,
            full: e.full,
            text: e.text,
            close: e.close || f,
          })
        );
      }
      function _(e) {
        return k(
          (0, r.b)(2, a.a, {
            title: e.title,
            onBack: e.onBack || "CLOSE",
            onEndCall: e.onEndCall,
            left: e.left,
            leftIcon: e.leftIcon,
            onSoftLeft: e.onSoftLeft,
            center: e.center,
            centerIcon: e.centerIcon,
            onSoftCenter: e.onSoftCenter,
            right: e.right,
            rightIcon: e.rightIcon,
            onSoftRight: e.onSoftRight,
            full: e.full,
            close: e.close || f,
            children: (0, r.b)(2, p.a, { type: "dialog" }),
          })
        );
      }
      function S(e, t) {
        return k(
          (0, r.b)(2, a.a, {
            title: e.title,
            onBack: e.onBack || "CLOSE",
            onEndCall: e.onEndCall,
            left: e.left,
            leftIcon: e.leftIcon,
            onSoftLeft: e.onSoftLeft,
            center: e.center,
            centerIcon: e.centerIcon,
            onSoftCenter: e.onSoftCenter,
            right: e.right,
            rightIcon: e.rightIcon,
            onSoftRight: e.onSoftRight,
            close: e.close || f,
            children: t,
          })
        );
      }
      function E(e) {
        return k(
          (0, r.b)(2, d, {
            title: e.title,
            defaultItems: e.defaultItems,
            centerKeys: e.centerKeys,
            selectedKey: e.selectedKey,
            save: e.save,
            onSave: e.onSave,
            closeOverlay: f,
          })
        );
      }
      function y(e) {
        return k(e.buildMenu(f));
      }
      var I,
        O = 0;
      function A(e, t) {
        if (
          (__LOG__(
            3
          )`Overlay.update should have been overriden before being called. id ${O}`,
          null != e)
        )
          return (I = e), ++O;
        I = null;
      }
      var C = A;
      function k(e) {
        return C(e);
      }
      function w(e) {
        (C = e), I && (C(I, O), (I = null));
      }
      function D() {
        (C = A), (I = null);
      }
      function L() {
        return ++O;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "e", function () {
        return c;
      }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "k", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "l", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return S;
        }),
        n.d(t, "a", function () {
          return I;
        });
      var r = n(1),
        a = (n(13), n(10)),
        s = n(40),
        i = n(159),
        o = n(48),
        l = n(18);
      function c(e, t) {
        var n = e[t],
          a = n && (0, s.a)(n);
        return a ? (0, o.b)(a) : (0, r.b)(2, i.a, { jid: t });
      }
      function u(e, t) {
        var n = e[t],
          a = n && (0, s.b)(n);
        return a ? (0, o.b)(a) : (0, r.b)(2, i.a, { jid: t });
      }
      function d(e) {
        var t = (0, s.g)(e);
        return t ? (0, o.b)(t) : (0, r.b)(2, i.a, { jid: e.jid });
      }
      function h(e) {
        return e.fullName || e.shortName || (0, s.g)(e)
          ? null
          : e.pushname || (e.verifiedInfo && e.verifiedInfo.name) || null;
      }
      function p(e, t) {
        var n = e[t];
        return n && h(n);
      }
      function f(e) {
        var t = [];
        return (
          (0, a.x)(e).forEach((e) => {
            e && (0, s.k)(e) && !(0, s.l)(e) && t.push(e);
          }),
          t.sort(b),
          t
        );
      }
      function g(e, t, n) {
        var r = [];
        return (
          (0, a.x)(e).forEach((e) => {
            e && (!n || n(e)) && (0, s.k)(e) && (0, s.l)(e) && r.push(e);
          }),
          r.sort(t),
          r
        );
      }
      function v(e, t) {
        return g(e, b, t);
      }
      function m(e) {
        var t = new Set(e.admins);
        return (e, n) => {
          var r = t.has(e.jid);
          return r === t.has(n.jid) ? b(e, n) : r ? -1 : 1;
        };
      }
      function b(e, t) {
        var n = e.fullName || e.shortName,
          r = t.fullName || t.shortName;
        return n && r
          ? n.localeCompare(r)
          : n
          ? -1
          : r
          ? 1
          : e.jid < t.jid
          ? -1
          : e.jid === t.jid
          ? 0
          : 1;
      }
      var _ = {};
      function S(e) {
        var t,
          n,
          r,
          a,
          s = e.toString();
        return (
          null == _[s] &&
            (_[s] =
              ((t = (function (e) {
                for (var t = 0, n = 0; n < e.length; ++n)
                  t = ((t << 5) - t + e.charCodeAt(n)) & 65535;
                return t;
              })(s)),
              (n = Math.abs(t) / 65536),
              (a = 0.8 - (r = 1.8 * 0.4)),
              "#" +
                (
                  (Math.floor(255 * E(a, r, n + 1 / 3)) << 16) |
                  (Math.floor(255 * E(a, r, n)) << 8) |
                  Math.floor(255 * E(a, r, n - 1 / 3))
                )
                  .toString(16)
                  .padStart(6, "0"))),
          _[s]
        );
      }
      function E(e, t, n) {
        var r = n;
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? e + 6 * (t - e) * r
            : r < 0.5
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
        );
      }
      var y = { short: s.b, long: s.a, status: s.d };
      function I(e) {
        var t = e.className;
        if ("@me" === e.jid || (e.contact && "@me" === e.contact.jid))
          return (0, r.f)(1, "span", t, (0, r.b)(2, l.b, { l10n: 168 }), 2, {
            dir: "auto",
          });
        var n = e.jid ? e.contacts[e.jid] : e.contact;
        if (null == n) {
          var a = e.jid || "";
          return (0, r.b)(2, i.a, { jid: a, className: t });
        }
        var s = y[e.prefer || "long"](n);
        return s
          ? (0, r.f)(1, "span", t, s, 0, { dir: "auto" })
          : (0, r.b)(2, i.a, { jid: n.jid, className: t });
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "d", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return A;
        });
      var r = n(1),
        a = n(13),
        s = n(93),
        i = n(31),
        o = n.n(i),
        l = n(159),
        c = n(143),
        u = n(14),
        d = n(7),
        h = n(54),
        p = n(20),
        f = (0, r.f)(1, "span", "DG", "•", 16),
        g = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.jid !== e.jid ||
                n.contacts !== e.contacts ||
                n.user !== e.user)
            );
          }
          render() {
            var e = this.props,
              t = e.jid,
              n = e.contacts,
              a = e.user,
              i = (0, s.d)(t, n, a);
            return i.name ? y(i.name) : (0, r.b)(2, l.a, { jid: t });
          }
        },
        v = (0, h.c)(g, (e, t, n) => ({
          jid: n.jid,
          user: e.user,
          contacts: e.contacts,
        }));
      function m(e, t, n) {
        var s = { fontFamily: "Emoji" + t };
        return (0, r.f)(1, "span", "DF", e, 0, { style: a.h(s) }, n);
      }
      function b(e, t, n, a, s) {
        switch (t.type) {
          case "bold":
            return (0, r.f)(
              1,
              "strong",
              null,
              a(e, t.children, b, s),
              0,
              null,
              n
            );
          case "italic":
            return (0, r.f)(1, "em", null, a(e, t.children, b, s), 0, null, n);
          case "strikethrough":
            return (0, r.f)(1, "del", null, a(e, t.children, b, s), 0, null, n);
          case "code":
            return (0, r.f)(
              1,
              "code",
              null,
              a(e, t.children, b, s),
              0,
              null,
              n
            );
          case "mention":
            return (function (e, t, n) {
              var a = `${u.T}${(0, d.u)(e)}`;
              return (0, r.f)(
                1,
                "span",
                null,
                [
                  (0, r.f)(1, "span", "mentionAt", "@", 16),
                  (0, r.f)(1, "a", "DH", (0, r.b)(2, v, { jid: e }), 2, {
                    href: a,
                    "data-content-type": "mention",
                    "data-id": "mention" + t,
                  }),
                ],
                4,
                null,
                t
              );
            })(t.jid, n);
          case "emoji":
            return m(t.normalizedRemapped, t.chunkId, n);
          case "link":
            return (0, r.f)(
              1,
              "a",
              "DH",
              a(e, t.children, b, s),
              0,
              {
                href: t.href,
                "data-id": t.id,
                "data-matched-text": t.matchedText,
              },
              n
            );
          case "phoneNumber":
            return (null == s ? void 0 : s.skipPhoneNumbers)
              ? a(e, t.children, b, s)
              : (0, r.f)(
                  1,
                  "a",
                  "DH",
                  a(e, t.children, b, s),
                  0,
                  {
                    "data-id": t.id,
                    "data-content-type": "phoneNumber",
                    "data-matched-text": t.matchedText,
                    "data-matched-phone-number": t.phoneNumber,
                  },
                  n
                );
          default:
            return (0, o.a)(t.type);
        }
      }
      function _(e, t, n) {
        return t && t.styles ? (0, s.a)(e, t.styles, b, n) : e;
      }
      function S(e) {
        var t = [],
          n = null,
          r = c.a;
        for (r.lastIndex = 0; null != (n = r.exec(e)) && n; ) {
          var a = (0, c.e)(e, n.index);
          if (null != a) {
            var s = a.normalized,
              i = a.normalizedRemapped,
              o = a.originalLength,
              l = a.chunkId;
            (r.lastIndex = n.index + o),
              t.push({
                normalized: s,
                normalizedRemapped: i,
                chunkId: l,
                originalLength: o,
                start: n.index,
              });
          }
        }
        return t;
      }
      function E(e) {
        var t = S(e);
        return t.length > 1
          ? (0, r.f)(1, "span", null, "□", 0)
          : t.length < 1
          ? e
          : I(e, t);
      }
      function y(e) {
        var t = S(e);
        return t.length < 1 ? e : I(e, t);
      }
      function I(e, t) {
        for (var n = [], r = 0, a = 0; a < t.length; ++a) {
          var s = t[a],
            i = s.normalizedRemapped,
            o = s.originalLength,
            l = s.chunkId,
            c = s.start;
          r !== c && n.push(e.substring(r, c)),
            n.push(m(i, l, i + a.toString())),
            (r = c + o);
        }
        return r < e.length && n.push(e.substring(r)), n;
      }
      function O(e) {
        for (var t = [], n = [], r = S(e), a = 0, s = 0; s < r.length; ++s) {
          var i = r[s],
            o = i.originalLength,
            l = i.chunkId,
            c = i.start,
            u = i.normalizedRemapped;
          n.push(e.substring(a, c)),
            n.push(u),
            (a = c + o),
            t.push("Emoji" + l);
        }
        n.push(e.substring(a));
        var d = [...t, "'Open Sans'", "sans-serif"].join(", ");
        return { normalizedText: n.join(""), fontFamily: d };
      }
      function A(e) {
        return (0, p.k)([e, 177]);
      }
    },
    ,
    function (e, t, n) {
      function r(e) {
        return 0 === e.screens.length && !e.msglist;
      }
      function a(e) {
        return "main" === e.mode ? e : null;
      }
      function s(e, t, n) {
        var r, a;
        return null == (r = e.jobs) || null == (a = r[t]) ? void 0 : a[n];
      }
      function i(e, t) {
        var n;
        return null == (n = e.jobs) ? void 0 : n[t];
      }
      function o(e) {
        return !!e && "finished" !== e.step.status && "error" !== e.step.status;
      }
      function l(e) {
        if (e && "finished" === e.step.status) return e.step.result;
      }
      function c(e) {
        return null == e ? void 0 : e.jobIn;
      }
      function u(e) {
        return e.chatlist.orderedChatIds.reduce(
          (t, n) => t + (e.chatlist.chats[n].chatBackgroundSettings ? 1 : 0),
          0
        );
      }
      n.d(t, "e", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return s;
        }),
        n.d(t, "h", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return u;
        });
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "e", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "j", function () {
          return p;
        }),
        n.d(t, "h", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return g;
        }),
        n.d(t, "i", function () {
          return v;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "f", function () {
          return b;
        }),
        n.d(t, "g", function () {
          return _;
        });
      var r = n(1),
        a = n(13),
        s = n(10),
        i = a.c({}),
        o = a.c({}),
        l = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return n !== e && n.of !== e.of;
          }
          render() {
            return this.props.of;
          }
        },
        c = class extends a.a {
          constructor(e) {
            super(e), (this.unsubscribe = null);
            var t = e.backend;
            this.state = { backend: t, store: t.getStoreState() };
          }
          componentDidMount() {
            this.unsubscribe = this.props.store.subscribe(() => {
              this.setState({ store: this.props.backend.getStoreState() });
            });
          }
          componentWillUnmount() {
            this.unsubscribe && this.unsubscribe();
          }
          render() {
            return (0, r.b)(2, i.Provider, {
              value: this.state,
              children: (0, r.b)(2, l, { of: this.props.children }),
            });
          }
        };
      function u(e) {
        return (0, r.b)(2, o.Provider, {
          value: e.backend,
          children: (0, r.i)((0, r.b)(2, c, Object.assign({}, e))),
        });
      }
      function d(e, t) {
        return class extends a.a {
          constructor() {
            var n;
            return (
              (n = super(...arguments)),
              (this.BY = (n) => {
                var a = t(n.store, n.backend, this.props);
                return a
                  ? (0, r.i)((0, r.b)(2, e, Object.assign({}, a)))
                  : null;
              }),
              n
            );
          }
          displayName(e) {
            return `ReduxComponent(${e})`;
          }
          render() {
            return (0, r.b)(2, i.Consumer, { children: this.BY });
          }
        };
      }
      function h(e, t) {
        return class extends a.a {
          constructor() {
            var n;
            return (
              (n = super(...arguments)),
              (this.BY = (n) =>
                (0, r.i)((0, r.b)(2, e, Object.assign({}, t(n, this.props))))),
              n
            );
          }
          displayName(e) {
            return `ApiComponent(${e})`;
          }
          render() {
            return (0, r.b)(2, o.Consumer, { children: this.BY });
          }
        };
      }
      function p(e) {
        return h(e, (e, t) => Object.assign({}, t, { backend: e }));
      }
      function f(e, t) {
        return d(e, (e, n, r) => ("reg" === e.mode ? t(e, n, r) : null));
      }
      function g(e, t) {
        return d(e, (e, n, r) => ("main" === e.mode ? t(e, n, r) : null));
      }
      function v(e, t) {
        return d(e, (e, n, r) => ("tempBanned" === e.mode ? t(e, n, r) : null));
      }
      function m(e, t) {
        return d(e, (e, n, r) => ("error" === e.mode ? t(e, n, r) : null));
      }
      function b(e, t, n) {
        return class extends a.a {
          constructor() {
            var a;
            return (
              (a = super(...arguments)),
              (this.BZ = null),
              (this.Ba = null),
              (this.BY = (a) => {
                var i = a.store,
                  o = "main" === i.mode ? t(i, this.props) : null,
                  l = this.BZ;
                if (o) {
                  if (!l || !(0, s.r)(o, l)) {
                    var c = n(o, a.backend);
                    (this.Ba = c
                      ? (0, r.i)((0, r.b)(2, e, Object.assign({}, c)))
                      : null),
                      (this.BZ = o);
                  }
                } else (this.BZ = null), (this.Ba = null);
                return this.Ba;
              }),
              a
            );
          }
          displayName(e) {
            return `MemoizedReduxComponent(${e})`;
          }
          render() {
            return (0, r.b)(2, i.Consumer, { children: this.BY });
          }
        };
      }
      function _(e, t, n) {
        var r = b(e, t, n);
        return class extends r {
          shouldComponentUpdate() {
            return !1;
          }
        };
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return m.b;
      }),
        n.d(t, "a", function () {
          return m.a;
        }),
        n.d(t, "c", function () {
          return m.c;
        }),
        n.d(t, "d", function () {
          return f.b;
        }),
        n.d(t, "e", function () {
          return D;
        }),
        n.d(t, "f", function () {
          return M;
        });
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(54),
        l = n(18),
        c = n(140),
        u = n(55),
        d = n(70),
        h = n(151),
        p = n(234),
        f = n(274),
        g = n(14),
        v = n(148),
        m = n(277);
      function b() {}
      function _() {}
      var S = ["standard"],
        E = null,
        y = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { smallFont: !1, softKeys: null }),
              (this.barDiv = null),
              (this.setBarDiv = (e) => {
                this.barDiv = e;
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e && n.hidden !== e.hidden) ||
              (r !== t &&
                (r.smallFont !== t.smallFont || r.softKeys !== t.softKeys))
            );
          }
          componentDidUpdate() {
            this.Bm();
          }
          Bm() {
            if (!this.state.smallFont) {
              var e = this.barDiv;
              if (null != e)
                try {
                  for (
                    var t = e.getBoundingClientRect(),
                      n = e.children,
                      r = 0,
                      a = 0;
                    a < n.length;
                    ++a
                  ) {
                    var s = n[a].children[0];
                    null != s && (r += s.getBoundingClientRect().width);
                  }
                  t.width < r + 15 && this.setState({ smallFont: !0 });
                } catch (e) {
                  __LOG__(4)`Failed to compute small font softkeys ${e}`;
                }
            }
          }
          render() {
            var e = this.state.softKeys;
            if (!e) return (0, r.f)(1, "div", "f");
            var t = this.props.hidden || e.hidden,
              n = this.state.smallFont,
              a = t || n ? (0, i.a)("f", n && "g", t && "r") : "f",
              s = null;
            if (null != e.full)
              s = (0, r.f)(
                1,
                "div",
                "n",
                (0, r.b)(2, l.b, { l10n: e.full }),
                2
              );
            else {
              var o = T(
                  "j h",
                  e.center,
                  e.centerIcon,
                  e.centerRawString,
                  e.onSoftCenter
                ),
                c = T("i h", e.left, e.leftIcon, e.leftRawString, e.onSoftLeft),
                u = T(
                  "k h",
                  e.right,
                  e.rightIcon,
                  e.rightRawString,
                  e.onSoftRight
                );
              s = (0, r.c)([c, o, u], 0);
            }
            return (0, r.f)(1, "div", a, s, 0, null, null, this.setBarDiv);
          }
        };
      function I() {
        (0, v.f)("transparent");
      }
      function O() {
        (0, v.f)(g.a);
      }
      var A = 0,
        C = [];
      function k() {
        return C.length > 0 && C[C.length - 1].fullscreen;
      }
      var w = class extends a.a {
        constructor() {
          var e;
          return (
            (e = super(...arguments)),
            (this.Bn = ++A),
            (this.holdTimer = new d.a(() => this.Bo())),
            (this.isHolding = !1),
            (this.bar = null),
            (this.Br = (e) => {
              this.bar = e;
            }),
            (this.Bs = (e) => {
              (0, h.e)();
              var t = this.Bp("handleKeyDown"),
                n = (0, u.m)(e);
              if (n !== u.i)
                if (E) {
                  switch (n) {
                    case u.c:
                    case u.d:
                    case u.b:
                    case u.a:
                      __LOG__(2)`SoftKeys ignoring arrow on hold`;
                      break;
                    default:
                      M();
                  }
                  e.preventDefault();
                } else
                  t &&
                    (n === u.j && t.onHoldCenter
                      ? ((E = this),
                        e.preventDefault(),
                        this.holdTimer.onOrBefore(300))
                      : L(t, this.props.backend, n, e));
              else
                (e.target instanceof Element &&
                  ("INPUT" === e.target.tagName ||
                    "TEXTAREA" === e.target.tagName)) ||
                  e.preventDefault();
            }),
            e
          );
        }
        componentDidMount() {
          var e, t, n;
          this.props.overlay ||
            ((t = {
              id: this.Bn,
              fullscreen: null != (e = this.props.fullscreen) && e,
            }),
            (n = k()),
            t.fullscreen && !n ? I() : n && !t.fullscreen && O(),
            C.push(t));
        }
        componentWillUnmount() {
          this.holdTimer.cancel(),
            this === E && (E = null),
            this.props.overlay ||
              (function (e) {
                for (var t = C.length - 1, n = null, r = 0, a = t; a >= 0; --a)
                  if (C[a].id === e) {
                    (n = C[a]), (r = a);
                    break;
                  }
                if (null == n)
                  return (
                    __LOG__(2)`Screen stack: id: ${e}, stack: ${C.map(
                      (e) => e.id
                    )}`,
                    __LOG__(
                      4
                    )`Trying to remove a screen from the stack but could not find it. This should never happen.`,
                    void SEND_LOGS("softkeys-stack-empty", 0.01)
                  );
                if (r === t) {
                  C.pop();
                  var s = k();
                  n.fullscreen && !s ? O() : s && !n.fullscreen && I();
                } else C.splice(r, 1);
              })(this.Bn);
        }
        Bo() {
          var e = this.Bp("handleHoldCenter"),
            t = null == e ? void 0 : e.onHoldCenter;
          t
            ? (t(this.props.backend), (this.isHolding = !0))
            : this === E && (E = null);
        }
        Bq() {
          var e = this.Bp("handleReleaseHoldCenter");
          if (this.isHolding) {
            this.isHolding = !1;
            var t = null == e ? void 0 : e.onReleaseHoldCenter;
            t && t(this.props.backend);
          } else
            this.holdTimer.cancel(), e && L(e, this.props.backend, u.j, null);
        }
        Bp(e) {
          var t,
            n = null == (t = this.bar) ? void 0 : t.state.softKeys;
          return (
            n ||
              (__LOG__(4)`SoftKeys ${e} while mid-render`,
              SEND_LOGS("softkeys-mid-render-" + e)),
            n
          );
        }
        render() {
          var e = this.props;
          return (0, r.b)(2, c.b.div, {
            className: (0, i.a)("d", e.fullscreen && "o", e.overlay && "s"),
            tabIndex: "1",
            hasFocusPriority: e.overlay || !!e.hasFocusPriority,
            onKeyDown: this.Bs,
            onKeyUp: N,
            children: [
              (0, r.f)(1, "div", "e", e.children, 0),
              (0, r.b)(2, y, { hidden: e.hidden }, null, this.Br),
            ],
          });
        }
      };
      function D(e, t) {
        var n,
          s = class extends a.a {
            constructor() {
              var e;
              return (
                (e = super(...arguments)),
                (this.Bt = 0),
                (this.Bu = 0),
                (this.Bv = a.e()),
                (this.Bw = a.e()),
                (this.updateSoftKeysOnBar = (e, n) => {
                  var r,
                    a = null == (r = this.Bv.current) ? void 0 : r.bar;
                  if (!a)
                    return (
                      __LOG__(4)`SoftKeys updateSoftKeysOnBar while no ref!`,
                      void SEND_LOGS("no-softkeys-ref-2")
                    );
                  for (
                    var s = this.props.backend,
                      i = new f.a(),
                      o = (null == t ? void 0 : t.order) || S,
                      l = 0;
                    l < o.length;
                    l++
                  ) {
                    var c = o[l];
                    if ("standard" === c)
                      for (var u = 0; u < e.length; u++) e[u].addSoftKeys(i, s);
                    else {
                      var d = n.get(c);
                      null != d && d.addSoftKeys(i, s);
                    }
                  }
                  var h = ++this.Bt,
                    p = i.getAttachment();
                  p &&
                    p.setOnDirty(() => {
                      if (h === this.Bt) {
                        var e = this.Bw.current;
                        e && e.markDirty();
                      }
                    }),
                    a.setState({ softKeys: i.makeSoftKeys() });
                }),
                e
              );
            }
            render() {
              var n = this.props,
                a = n.props,
                s = n.backend;
              return (0, r.b)(
                2,
                p.c,
                {
                  onSelectionUpdate: this.updateSoftKeysOnBar,
                  children: (0, r.b)(
                    2,
                    w,
                    {
                      backend: s,
                      fullscreen: (null == t ? void 0 : t.fullscreen) || !1,
                      hidden: (null == t ? void 0 : t.hidden) || !1,
                      overlay: (null == t ? void 0 : t.overlay) || !1,
                      hasFocusPriority: !!a.hasFocusPriority,
                      children: (0, r.i)((0, r.b)(2, e, Object.assign({}, a))),
                    },
                    null,
                    this.Bv
                  ),
                },
                null,
                this.Bw
              );
            }
          };
        return (
          (s.displayName = `SoftKeysHOC(${
            ((n = e), n.displayName || n.name || "UNNAMED")
          })`),
          (0, o.b)(s, (e, t) => ({ props: t, backend: e }))
        );
      }
      function L(e, t, n, r) {
        var a = (function (e, t, n) {
          switch (t) {
            case u.k:
              return e.left || e.leftIcon || e.leftRawString
                ? e.onSoftLeft
                : null;
            case u.l:
              return e.right || e.rightIcon || e.rightRawString
                ? e.onSoftRight
                : null;
            case u.j:
              return e.center || e.centerIcon || e.centerRawString
                ? e.onSoftCenter
                : null;
            case u.d:
              return e.onArrowUp;
            case u.a:
              return e.onArrowDown;
            case u.c:
              return e.onArrowRight;
            case u.b:
              return e.onArrowLeft;
            case u.g:
              return e.onEndCall;
            case u.f:
              return e.onCall;
            case u.e:
              return n && n.repeat ? null : e.onBack;
            default:
              return null;
          }
        })(e, n, r);
        a === b
          ? __LOG__(
              3
            )`SoftKeys received ${n} despite handler being set to "HANDLED_WITHIN"`
          : a === _
          ? n !== u.j
            ? __LOG__(4)`SoftKeys HANDLED_BY_HOLD for ${n} instead of center`
            : e.onHoldCenter
            ? r && r.preventDefault()
            : __LOG__(4)`SoftKeys HANDLED_BY_HOLD while no hold handler`
          : a && (r && r.preventDefault(), a(t)),
          n === u.e && e.disableExit && r && r.preventDefault();
      }
      function T(e, t, n, a, s) {
        return (
          (t || n || a) && !s && (e += " l"),
          (0, r.f)(
            1,
            "div",
            e,
            t ? (0, r.b)(2, l.b, { className: "m", l10n: t }) : n || a || null,
            0
          )
        );
      }
      function N(e) {
        E && (0, u.m)(e) === u.j && M();
      }
      function M() {
        if (E) {
          var e = E;
          (E = null), e.Bq();
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "j", function () {
          return u;
        }),
        n.d(t, "l", function () {
          return d;
        }),
        n.d(t, "k", function () {
          return h;
        }),
        n.d(t, "e", function () {
          return p;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return v;
        }),
        n.d(t, "h", function () {
          return b;
        }),
        n.d(t, "g", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return E;
        }),
        n(13);
      var r = { none: !0 },
        a = { searching: !0 };
      function s(e) {
        return e.filteredItems || e.items;
      }
      function i(e) {
        return null == e.debounce ? 300 : e.debounce;
      }
      function o(e, t, n) {
        var r = n(t);
        return e.findIndex((e) => r === n(e));
      }
      function l(e) {
        return { scrolling: !0, item: e[0], index: 0, goingDown: !0 };
      }
      function c(e, t) {
        if (e.items !== t.items) {
          var n = e.items,
            a = { items: n, filteredItems: void 0, status: void 0 };
          null != t.filteredItems &&
            ("" === t.searchInput || null == e.search
              ? (a.filteredItems = null)
              : (a.filteredItems = e.search.filter(t.searchInput, n)));
          var i = s(a),
            c = (function (e, t, n) {
              if (0 === n.length) return r;
              if (e.searching) return null != t.search ? e : l(n);
              if (e.none) return l(n);
              var a = t.keyOf,
                s = e.index,
                i = -1;
              return (
                -1 ===
                  (i =
                    s < n.length && a(e.item) === a(n[s])
                      ? s
                      : o(n, e.item, a)) &&
                  (i = Math.min(e.index, n.length - 1)),
                { scrolling: !0, item: n[i], index: i, goingDown: e.goingDown }
              );
            })(t.status, e, i);
          return (a.status = c), a;
        }
        return null;
      }
      function u(e) {
        var t = e.items;
        return {
          status: (function (e, t, n, s) {
            var i;
            return (i =
              0 === n.length
                ? -1
                : null != e
                ? o(n, e.item, s)
                : null != t
                ? -1
                : 0) > -1
              ? { scrolling: !0, item: n[i], index: i, goingDown: !0 }
              : null == t || 0 === n.length
              ? r
              : a;
          })(e.start, e.search, t, e.keyOf),
          searchInput: "",
          items: t,
          filteredItems: null,
          anchor: "beginning",
        };
      }
      function d(e, t, n) {
        e !== t && n && n(e);
      }
      function h(e) {
        return null != e.filteredItems;
      }
      function p(e) {
        return e.scrolling ? e.item : null;
      }
      function f(e) {
        return null == e.search || e.frozen ? null : { status: a };
      }
      function g(e, t, n) {
        return { status: { scrolling: !0, item: e, index: t, goingDown: n } };
      }
      function v(e, t, n) {
        if (!n.frozen) {
          var r = o(s(t), e, n.keyOf);
          if (-1 !== r) {
            var a = t.status;
            return g(e, r, !a.scrolling || r >= a.index);
          }
        }
      }
      function m(e, t) {
        if (!t.frozen) {
          if (e.status.scrolling && null != t.search) return f(t);
          var n = s(e)[0];
          if (null != n)
            return Object.assign({}, g(n, 0, !0), { anchor: "beginning" });
        }
      }
      function b(e, t) {
        if (!t.frozen) {
          var n = e.status;
          if (!n.searching)
            if (n.scrolling && 0 === n.index) {
              var r = t.search,
                a = t.preventLoop;
              if (null != r) return f(t);
              if (!0 !== a)
                return (function (e, t) {
                  if (!t.frozen) {
                    var n = s(e),
                      r = n[n.length - 1];
                    if (null != r)
                      return Object.assign({}, g(r, n.length - 1, !0), {
                        anchor: "end",
                      });
                  }
                })(e, t);
            } else if (n.scrolling) {
              var i = n.index - 1,
                o = s(e)[i];
              return null == o
                ? void __LOG__(
                    3
                  )`Could not find an item while going to previous one`
                : g(o, i, !1);
            }
        }
      }
      function _(e, t) {
        if (!t.frozen) {
          var n = e.status,
            r = t.search,
            a = t.preventLoop;
          if (n.searching) return m(e, t);
          if (!n.scrolling) return n.none, null != r ? f(t) : m(e, t);
          var i = n.index + 1,
            o = s(e)[i];
          return null != o
            ? g(o, i, !0)
            : null == r && !0 !== a
            ? m(e, t)
            : void 0;
        }
      }
      function S(e, t, n) {
        if (e === t) return !0;
        for (var r = !0, a = Object.keys(e), s = 0; r && s < a.length; s++) {
          var i = a[s];
          i !== n && (r = t.propertyIsEnumerable(i) && e[i] === t[i]);
        }
        return r && Object.keys(t).length === a.length;
      }
      function E(e, t) {
        return (
          !S(e.prev, e.next, e.specificField) ||
          !S(e.prev[e.specificField], e.next[e.specificField]) ||
          (null != t &&
            (null != t.next
              ? null == t.prev || !S(t.prev, t.next)
              : null != t.prev))
        );
      }
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "n", function () {
        return r;
      }),
        n.d(t, "l", function () {
          return a;
        }),
        n.d(t, "m", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "p", function () {
          return l;
        }),
        n.d(t, "q", function () {
          return c;
        }),
        n.d(t, "i", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "j", function () {
          return h;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "k", function () {
          return f;
        }),
        n.d(t, "o", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "a", function () {
          return _;
        });
      var r = self.innerWidth,
        a = self.innerHeight,
        s = a / r,
        i = r > a,
        o = !i && !navigator.largeTextEnabled,
        l = 30,
        c = 26,
        u = 0.8 * r,
        d = (a > 250 ? 0.5 : 0.4) * a,
        h = 50,
        p = d / u,
        f = a > r ? 128 : 96,
        g = 25,
        v = 64,
        m = 52,
        b = 61,
        _ = 300;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "g", function () {
        return c;
      }),
        n.d(t, "h", function () {
          return d;
        }),
        n.d(t, "l", function () {
          return h;
        }),
        n.d(t, "k", function () {
          return p;
        }),
        n.d(t, "m", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "o", function () {
          return m;
        }),
        n.d(t, "n", function () {
          return b;
        }),
        n.d(t, "j", function () {
          return _;
        }),
        n.d(t, "i", function () {
          return S;
        }),
        n.d(t, "p", function () {
          return E;
        }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "a", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return A;
        });
      var r = n(9),
        a = n.n(r),
        s = n(80),
        i = n(34),
        o = n(45);
      function l(e) {
        return navigator.getDeviceStorage(e);
      }
      function c(e) {
        return e ? `${String(e)}: ${e.name} - ${e.message}` : "<unknown error>";
      }
      function u(e) {
        __LOG__(
          2
        )`DeviceStorage properties: lowDiskSpace=${e.lowDiskSpace} isRemovable=${e.isRemovable} canBeMounted=${e.canBeMounted} canBeFormatted=${e.canBeFormatted} default=${e.default} storagePath=${e.storagePath} storageName=${e.storageName}`;
      }
      function d() {
        return (
          performance.now(),
          Promise.all([
            p("apps"),
            f("apps"),
            p("sdcard"),
            f("sdcard"),
            f("videos"),
          ]).then((e) => {
            var t = a()(e, 5),
              n = t[0],
              r = t[1],
              s = t[2],
              i = t[3],
              o = t[4];
            return (
              performance.now(),
              {
                storageAvailSize: n,
                storageTotalSize: n + r,
                externalStorageAvailSize: s,
                externalStorageTotalSize: s + i,
                videoFolderSize: o,
              }
            );
          })
        );
      }
      function h() {
        var e = C();
        return new Promise((t, n) => {
          var r = e.storageStatus();
          (r.onsuccess = function () {
            var e = r.result;
            e ? t(e) : n(new Error("Undefined device storage status"));
          }),
            (r.onerror = function () {
              u(e),
                __LOG__(4)`Unable to get device storage status: ${c(r.error)}`,
                n(new Error("Unable to get device storage status"));
            });
        });
      }
      function p(e) {
        var t = l(e),
          n = t.freeSpace();
        return new Promise((r, a) => {
          (n.onsuccess = function () {
            r(n.result || 0);
          }),
            (n.onerror = function () {
              u(t),
                __LOG__(
                  4
                )`Unable to get amount of the free space in area ${e}: ${c(
                  n.error
                )}`,
                a(new Error("Unable to get the amount of free space"));
            });
        });
      }
      function f(e) {
        var t = l(e),
          n = t.usedSpace();
        return new Promise((r, a) => {
          (n.onsuccess = function () {
            r(n.result || 0);
          }),
            (n.onerror = function () {
              u(t),
                __LOG__(
                  4
                )`Unable to get amount of the used space in area ${e}: ${c(
                  n.error
                )}`,
                a(new Error("Unable to get the amount of used space"));
            });
        });
      }
      function g(e) {
        var t = C();
        return (0, o.h)(t.storageName, e);
      }
      function v(e) {
        return new Promise((t, n) => {
          var r = k(e);
          if (!r)
            return (
              __LOG__(3)`deletePath: storage for path ${e} not found`, void t()
            );
          var a = r.storage,
            s = r.relativePath,
            i = a.delete(s);
          (i.onsuccess = () => {
            __LOG__(2)`Successfully removed path ${e} / ${s}`, t();
          }),
            (i.onerror = () => {
              u(a);
              var t = i.error;
              __LOG__(4)`Failed to remove file ${e}: ${c(t)}`,
                n(new Error("Failed to remove file"));
            });
        });
      }
      function m(e, t) {
        var n = C();
        return new Promise((r, a) => {
          var s = n.delete(t);
          (s.onsuccess = function () {
            var s;
            __LOG__(2)`File ${t} deleted`,
              ((s = n.addNamed(e, t)).onsuccess = function () {
                __LOG__(
                  2
                )`File ${t} successfully wrote on the ${n.storageName} storage area`,
                  r((0, o.h)(n.storageName, t));
              }),
              (s.onerror = function () {
                u(n),
                  __LOG__(4)`Unable to write file ${t} on the ${
                    n.storageName
                  } storage area: ${c(s.error)}`,
                  a(
                    new Error(
                      `Unable to write file on the ${n.storageName} storage area`
                    )
                  );
              });
          }),
            (s.onerror = function () {
              u(n),
                __LOG__(4)`Unable to delete file ${t}: ${c(s.error)}`,
                a(new Error("Unable to delete the file"));
            });
        });
      }
      function b(e, t) {
        return new Promise((n, r) => {
          var a = k(e);
          if (!a)
            return (
              __LOG__(3)`putBlobToPhoneStorage: Storage for path ${e} is gone`,
              void n()
            );
          var s = a.storage,
            i = a.relativePath,
            l = s.addNamed(t, i);
          (l.onsuccess = () => {
            __LOG__(2)`Successfully put blob to phone storage at ${e}`,
              n((0, o.h)(s.storageName, i));
          }),
            (l.onerror = () => {
              u(s);
              var t = l.error;
              __LOG__(4)`Failed to put blob to device storage ${c(
                t
              )} at path ${e}`,
                r(new Error("Failed to put blob to device storage"));
            });
        });
      }
      function _(e) {
        return new Promise((t, n) => {
          var r = k(e);
          if (r) {
            var a = r.storage,
              s = r.relativePath,
              i = a.get(s);
            (i.onsuccess = () => t(i.result)),
              (i.onerror = () => {
                var r = i.error;
                r && "NotFoundError" === r.name
                  ? t(null)
                  : (u(a),
                    __LOG__(
                      4
                    )`Failed to get file from device storage at ${e}: ${c(r)}`,
                    n(new Error("Failed to get file from device storage")));
              });
          } else __LOG__(3)`Storage for file ${e} was not found.`;
        });
      }
      function S(e) {
        return _(e);
      }
      function E(e) {
        return _(e).then((e) => null != e);
      }
      function y() {
        var e = (0, o.k)(`${s.e}/${(0, i.l)(16)}`),
          t = C();
        return new Promise((n, r) => {
          var a = t.addNamed(new Blob([]), e);
          (a.onsuccess = () => {
            __LOG__(2)`Successfully created temporary file ${e}`,
              n((0, o.h)(t.storageName, e));
          }),
            (a.onerror = () => {
              u(t);
              var n = a.error;
              __LOG__(4)`Failed to create temporary file at path ${e}: ${c(n)}`,
                r(new Error("Failed to create temporary file"));
            });
        });
      }
      function I() {
        var e = navigator
          .getDeviceStorages("sdcard")
          .map((e) => v((0, o.h)(e.storageName, s.e)));
        return Promise.all(e).then(() => {});
      }
      function O(e, t) {
        return new Promise((n, r) => {
          var a = k(t);
          if (!a) throw Error(`Path ${t} gone while trying to append content`);
          var s = a.storage,
            i = a.relativePath,
            o = s.appendNamed(e, i);
          (e = null),
            o
              ? ((o.onerror = () => {
                  u(s);
                  var e = o.error;
                  __LOG__(4)`Failed to append blob to file: ${c(
                    e
                  )} at path ${t}`,
                    r(new Error("Failed to append blob to file"));
                }),
                (o.onsuccess = () => {
                  n();
                }))
              : r(
                  new Error(
                    "Unexpected situation occured during appendNamed initialization"
                  )
                );
        });
      }
      function A() {
        __LOG__(3)`Deleting all incoming status media files from all storages`;
        var e = navigator.getDeviceStorages("sdcard").map((e) => () =>
          new Promise((t) => {
            var n = e.storageName,
              r = e.enumerate(s.d),
              a = [];
            r.onsuccess = function () {
              if (this.result) {
                var e = this.result.name;
                if (e.startsWith(`/${n}/${s.d}/`)) {
                  if (
                    (function (e, t) {
                      return (
                        t.startsWith(`/${e}/${s.a}`) ||
                        (t.startsWith(`/${e}/${s.b}`) &&
                          !t.startsWith(`/${e}/${s.c}`))
                      );
                    })(n, e)
                  ) {
                    var r = (0, o.f)(e);
                    r && a.push(v(r));
                  }
                } else
                  __LOG__(
                    4
                  )`Enumerate function returned a file outside of the WhatsApp folder`,
                    SEND_LOGS("delete-all-storage-files-wrong-file");
                this.continue();
              } else t(Promise.all(a));
            };
          })
        );
        return Promise.all(e).then(() => {});
      }
      function C() {
        return navigator.getDeviceStorage("sdcard");
      }
      function k(e) {
        var t,
          n = (0, o.o)(e),
          r = n.storageName,
          a = n.relativePath,
          s = navigator.getDeviceStorages("sdcard");
        if (r) {
          if (!(t = s.find((e) => r === e.storageName)))
            return void __LOG__(3)`Storage ${r} not found`;
        } else {
          var i = s.find((e) => e.default);
          if (!i) throw new Error("No default storage found");
          t = i;
        }
        return { storage: t, relativePath: a };
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "k", function () {
        return b;
      }),
        n.d(t, "a", function () {
          return _;
        }),
        n.d(t, "f", function () {
          return S;
        }),
        n.d(t, "g", function () {
          return E;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "b", function () {
          return I;
        }),
        n.d(t, "i", function () {
          return A;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "h", function () {
          return k;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "j", function () {
          return M;
        });
      var r,
        a = n(7),
        s = n(70),
        i = n(3),
        o = n(50),
        l = n(6),
        c = n(207),
        u = 25e3,
        d = new Map(),
        h = new Map(),
        p = new Map(),
        f = new Set(),
        g = "available",
        v = new s.a(() => {
          D("unavailable");
        }),
        m = !0;
      function b(e) {
        (r = e)(g);
      }
      function _(e, t, n, r) {
        return (
          __LOG__(2)`handleChatStatus status for ${r}`,
          (0, a.x)(t, {
            user: (t) =>
              (function (e, t, n) {
                var r = d.get(t);
                r ||
                  ((r = new (class {
                    constructor(e) {
                      (this.JF = new s.a(() => {
                        (this.JC = "idle"), this.JD(this.JC);
                      })),
                        (this.JC = "idle"),
                        (this.JD = e);
                    }
                    JE(e) {
                      var t = this.JC;
                      switch (e) {
                        case "recording_audio":
                        case "typing":
                          (this.JC = e), this.JF.debounce(u);
                          break;
                        case "paused":
                          (this.JC = "idle"), this.JF.cancel();
                      }
                      t !== this.JC && this.JD(this.JC);
                    }
                  })((n) => L(e, t, null, n))),
                  d.set(t, r)),
                  r.JE(n);
              })(e, t, r),
            group: (t) =>
              (function (e, t, n, r) {
                if (n) {
                  var a = h.get(t);
                  a ||
                    ((a = new (class {
                      constructor(e) {
                        (this.JG = []), (this.JD = e);
                      }
                      JH(e) {
                        this.JG[e].timer.cancel(),
                          this.JG.splice(e, 1),
                          this.JG.length === e &&
                            (0 === this.JG.length
                              ? this.JD(null, "idle")
                              : this.JD(
                                  this.JG[e - 1].participant,
                                  this.JG[e - 1].state
                                ));
                      }
                      JF(e) {
                        var t = this.JI(e);
                        -1 !== t && this.JH(t);
                      }
                      JI(e) {
                        return this.JG.findIndex((t) => t.participant === e);
                      }
                      JE(e, t) {
                        var n = this.JI(e);
                        if (-1 !== n)
                          if ("paused" === t) this.JH(n);
                          else {
                            var r = this.JG[n].state;
                            this.JG[n].timer.debounce(u);
                            var a = t;
                            (this.JG[n].state = a),
                              n === this.JG.length - 1 &&
                                r !== a &&
                                this.JD(this.JG[n].participant, a);
                          }
                        else if ("paused" !== t) {
                          var i = new s.a(() => this.JF(e)),
                            o = t;
                          i.debounce(u),
                            this.JG.push({
                              participant: e,
                              state: t,
                              timer: i,
                            }),
                            this.JD(e, o);
                        }
                      }
                    })((n, r) => L(e, t, n, r))),
                    h.set(t, a)),
                    a.JE(n, r);
                }
              })(e, t, n, r),
          })
        );
      }
      function S(e, t, n, r) {
        var s = (0, a.q)(t),
          l = (0, a.p)(t);
        if (s) {
          switch (n) {
            case "available":
              p.set(s, "online");
              break;
            case "unavailable":
              "deny" === r || "error" === r || "none" === r
                ? p.set(s, null)
                : p.set(s, null != r ? r : (0, i.E)());
              break;
            default:
              p.delete(s), T(e, s);
          }
          G(e, s, p.get(s));
        } else if (l)
          switch (n) {
            case "available":
              f.add(l);
              break;
            case "unavailable":
              break;
            case "unsubscribe":
              f.delete(l);
              var c = (0, o.a)(e.getStoreState());
              if (!c) return;
              var u = c.screens[c.screens.length - 1];
              null != (null == u ? void 0 : u.screen) &&
                "GROUP_INFO" === u.screen.type &&
                u.screen.props.chat.jid === l &&
                N(e, l);
          }
      }
      function E(e, t) {
        T(e, t);
      }
      function y(e, t, n) {
        if ((n && n.forEach((e) => p.delete(e)), t)) {
          var r = O(e);
          r && t.some((e) => e.jid === r.jid) && N(e, r.jid);
        }
      }
      function I(e, t) {
        "online" !== p.get(t) && (p.delete(t), T(e, t), G(e, t, null));
      }
      function O(e) {
        var t = e.getStoreState();
        return (t.user && t.msglist && t.msglist.chat) || null;
      }
      function A() {
        return m;
      }
      function C() {
        p.clear();
      }
      function k(e, t) {
        switch (t) {
          case "visible":
            (m = !0), v.cancel(), D("available");
            var n = O(e);
            n && e.markChatAsRead(n.id),
              (function (e) {
                var t,
                  n = (0, o.a)(e.getStoreState());
                return (
                  "calls" ===
                  (null == n || null == (t = n.tab) ? void 0 : t.key)
                );
              })(e) && (0, c.a)();
            break;
          case "hidden":
            (m = !1), v.onOrBefore(15e3);
            break;
          case "prerender":
            break;
          default:
            m = !1;
        }
      }
      function w(e) {
        v.cancel(),
          D(
            "hidden" === document.visibilityState ? "unavailable" : "available",
            "silent"
          ),
          r && r(g);
        var t = O(e);
        t && t.jid !== l.r.get() && N(e, t.jid);
      }
      function D(e, t) {
        if (e !== g) {
          if (((g = e), "silent" === t)) return;
          r
            ? r(e)
            : __LOG__(2)`PresenceManger squelching presence update: ${e}`;
        }
      }
      function L(e, t, n, r) {
        e.dispatch({
          type: "CHAT_STATE",
          jid: t,
          participant: n,
          chatState: r,
        });
      }
      function T(e, t) {
        var n = O(e);
        n && n.jid === t && N(e, t);
      }
      function N(e, t) {
        e.fireAndForget("backend", "sendPresenceSubscription", { jid: t });
      }
      function M(e, t) {
        (function (e) {
          return (
            e !== l.r.get() &&
            !(0, a.x)(e, { user: (e) => p.has(e), group: (e) => f.has(e) })
          );
        })(t) && N(e, t);
      }
      function G(e, t, n) {
        e.dispatch({
          type: "PRESENCE",
          jid: t,
          presence: void 0 !== n ? n : null,
        });
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.r(t),
        n.d(t, "setAppLaunchDestination", function () {
          return o;
        }),
        n.d(t, "getAppLaunchDestination", function () {
          return l;
        }),
        n.d(t, "setBridge", function () {
          return c;
        }),
        n.d(t, "getBridge", function () {
          return u;
        }),
        n.d(t, "makeBackendRequestId", function () {
          return d;
        }),
        n.d(t, "hasBackendWorkerStarted", function () {
          return h;
        }),
        n.d(t, "setBackendWorkedStarted", function () {
          return p;
        });
      var r,
        a = null,
        s = 1,
        i = !1;
      function o(e) {
        a = e;
      }
      function l() {
        return a;
      }
      function c(e) {
        r = e;
      }
      function u() {
        return r;
      }
      function d() {
        return s++;
      }
      function h() {
        return i;
      }
      function p() {
        i = !0;
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return p;
        });
      var r = n(208),
        a = n(50),
        s = n(7),
        i = n(296),
        o = n(19),
        l = n(57),
        c = n(204);
      function u(e, t, n, r, a) {
        (0, s.x)(t, {
          user: (t) => {
            (function (e, t, n, r, a) {
              var s = e.getCache().chatFromJid(t);
              s ? p(e, s.id, n, r, a) : h(e, t, n, r, a);
            })(e, t, n, r, a);
          },
          group: (t) => {
            (function (e, t, n, r, a) {
              var s = e.getCache().chatFromJid(t);
              s
                ? p(e, s.id, n, r, a)
                : __LOG__(4)`_openChatWithGroup: does not exist`;
            })(e, t, n, r, a);
          },
        });
      }
      function d(e, t, n, r, i) {
        var c = e.getCache().chatFromJid(t);
        if (c) p(e, c.id, n, r, i);
        else {
          var u = (0, a.a)(e.getStoreState());
          if (u) {
            var d = u.contacts[t];
            if (d && null != d.phonebookPhone) h(e, t, n, r, i);
            else {
              var f = (0, s.u)(t),
                g = e
                  .sendAndReceive("backend", "contactQuerySync", {
                    rawPhoneNumber: f,
                  })
                  .then((a) =>
                    "not-found" === a
                      ? () => {
                          (0, o.e)({ text: [(0, l.c)(f), 165] });
                        }
                      : "offline" === a
                      ? () => {
                          (0, o.e)({ title: 559, text: [(0, l.c)(f), 164] });
                        }
                      : "invalid" === a
                      ? () => {
                          (0, o.e)({ text: 558 });
                        }
                      : () => (h(e, t, n, r, i), "dontClose")
                  );
              e.spinUntilReadyOverlay(g, { title: 169 });
            }
          }
        }
      }
      function h(e, t, n, r, a) {
        return Promise.resolve()
          .then(
            () =>
              e.getCache().chatFromJid(t) ||
              e
                .sendAndReceive("backend", "createChat", { jid: t })
                .then((t) => {
                  var n = t.chatId,
                    r = e.getCache().chatFromId(n);
                  if (!r)
                    throw (
                      (__LOG__(4)`openChatWithContact failed to create chat`,
                      new Error("openChatWithContact"))
                    );
                  return r;
                })
          )
          .then((t) => {
            p(e, t.id, n, r, a);
          });
      }
      function p(e, t, n, a, s) {
        (0, r.b)(e, t, () => {
          var r = e.getCache().chatFromId(t);
          r
            ? (a && (0, c.d)(e, r.jid, a),
              i.b(e, r, n, null != s ? s : "withoutComposeBoxOpened"))
            : __LOG__(4)`openChat: chat #${t} does not exist`;
        });
      }
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return y;
      }),
        n.d(t, "a", function () {
          return I;
        });
      var r = n(1),
        a = n(13),
        s = n(7),
        i = n(54),
        o = n(22),
        l = n.n(o),
        c = n(74),
        u = n(149),
        d = n(310),
        h = n(280),
        p = n(311),
        f = n(174),
        g = n(232),
        v = n(325),
        m = n(387),
        b = n(388),
        _ = (0, r.b)(2, m.a, { className: "FF" }),
        S = (0, r.b)(2, b.a, { className: "FF" }),
        E = { user: () => _, group: () => S };
      function y(e) {
        return (0, r.f)(1, "div", e, _, 0);
      }
      function I(e) {
        return (0, r.f)(1, "div", e, S, 0);
      }
      var O = new p.a({
          idealMaxSize: 10,
          generator: (e) => {
            return ((t = e.jid),
            (n = e.photoId),
            (r = e.type),
            ("thumb" === r
              ? (0, c.getProfilePicTable)().getThumb(t)
              : (0, c.getProfilePicTable)().getIcon(t)
            ).then((e) => (e && e.photoId === n ? e.image : null))).then(
              (e) => e && (0, u.a)(e)
            );
            var t, n, r;
          },
          destroyer(e) {
            e.then((e) => e && (0, u.b)(e));
          },
          serializer: (e) => `${e.jid}/${e.photoId}/${e.type}`,
        }),
        A = (0, h.d)({
          render: (e, t) =>
            t
              ? (0, r.f)(1, "img", "FG", null, 1, { src: t })
              : e.fallback || null,
          allocatePromise: (e) => O.createOrRetain(e),
          deallocate(e, t) {
            O.release(t);
          },
        }),
        C = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e &&
                (n.jid !== e.jid ||
                  n.type !== e.type ||
                  n.className !== e.className ||
                  n.fallback !== e.fallback ||
                  n.invite !== e.invite ||
                  n.addRequest !== e.addRequest ||
                  n.avatarPlacement !== e.avatarPlacement ||
                  n.ephemeral !== e.ephemeral ||
                  n.avatar !== e.avatar ||
                  n.renderFast !== e.renderFast)) ||
              (r !== t && r.cachedUri !== t.cachedUri)
            );
          }
          constructor(e) {
            super(e), (this.state = { cachedUri: (0, d.a)(e.jid) });
          }
          componentDidMount() {
            this.JB();
          }
          componentDidUpdate() {
            this.JB();
          }
          componentWillUnmount() {
            this.state.cachedUri && (0, u.b)(this.state.cachedUri);
          }
          JB() {
            var e = this.props,
              t = e.jid,
              n = e.renderFast,
              r = e.avatar,
              a = e.invite,
              i = e.addRequest,
              o = e.backend;
            if (!n && null == r) {
              var l = (0, s.p)(t);
              l && a
                ? (0, f.d)(o, l, a)
                : l && i
                ? (0, f.c)(o, l, i)
                : (0, f.b)(o, t);
            }
          }
          render() {
            var e = this.props,
              t = e.avatar,
              n = e.className,
              i = e.jid,
              o = e.type,
              c = e.fallback,
              u = e.avatarPlacement,
              d = e.ephemeral,
              h =
                (t && "loaded" === t.status && null == t.photoId) ||
                "icon" !== o
                  ? null
                  : this.state.cachedUri,
              p = null;
            t &&
              "loaded" === t.status &&
              null != t.photoId &&
              (p = (0, r.b)(2, A, {
                jid: i,
                photoId: t.photoId,
                type: o,
                fallback: c,
              }));
            var f = null;
            d &&
              (f =
                "chatHeader" === u
                  ? (0, r.b)(2, v.a, { className: (0, l.a)("FI", "FH") })
                  : (0, r.b)(2, v.a, { className: "FH" }));
            var g = null,
              m = null;
            h ? (g = { backgroundImage: `url('${h}')` }) : (m = (0, s.x)(i, E));
            var b = (0, r.f)(1, "div", (0, l.a)("FE", n), p || c || m, 0, {
              style: a.h(g),
            });
            return null == f ? b : (0, r.f)(1, "div", "FD", [b, f], 0);
          }
        };
      t.c = (0, i.c)(C, (e, t, n) => {
        var r = !1,
          a = "@me" === n.jid ? e.user.jid : n.jid;
        if (null != n.ephemeral)
          if ("ONE_TO_ONE" === n.ephemeral) {
            var i = (0, s.q)(a);
            null != i && (r = (0, g.d)(i, e.contacts));
          } else r = n.ephemeral > 0;
        return {
          jid: a,
          avatar: e.avatars[a],
          type: n.type || "icon",
          className: n.className,
          fallback: n.fallback,
          renderFast: e.renderFast,
          invite: n.invite,
          addRequest: n.addRequest,
          backend: t,
          avatarPlacement: n.avatarPlacement || "default",
          ephemeral: r,
        };
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return g;
      }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "k", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "j", function () {
          return E;
        }),
        n.d(t, "h", function () {
          return y;
        }),
        n.d(t, "i", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return O;
        }),
        n.d(t, "d", function () {
          return A;
        }),
        n.d(t, "g", function () {
          return C;
        }),
        n.d(t, "f", function () {
          return k;
        }),
        n.d(t, "l", function () {
          return w;
        });
      var r = n(61),
        a = n(3),
        s = n(312),
        i = n(14),
        o = n(286),
        l = n(92),
        c = n(19),
        u = n(290),
        d = n(202),
        h = n(23),
        p = n(369),
        f = "ActivityCanceled",
        g = "mailto:",
        v = null;
      function m(e) {
        e.dispatch({ type: "ACTIVITY_END" }),
          e.fireAndForget("backend", "setActivityInProgress", { name: null });
      }
      function b(e) {
        (v = null), (0, l.h)(e, "visible"), m(e);
      }
      function _(e, t) {
        if (null != v)
          return (
            (null == v.data ||
              null == v.ts ||
              v.data.name !== t.name ||
              !(0, s.a)(v.data.data, t.data) ||
              (0, a.v)(v.ts) > 1e3) &&
              (__LOG__(
                4
              )`Activity launched while another activity is currently active`,
              SEND_LOGS(
                "Activity launched while another activity is currently active"
              )),
            Promise.resolve()
          );
        var n = { data: t, ts: (0, a.u)(), resolvable: new r.a() };
        (v = n),
          (0, l.h)(e, "hidden"),
          (function (e, t) {
            e.dispatch({ type: "ACTIVITY_START" }),
              e.fireAndForget("backend", "setActivityInProgress", { name: t });
          })(e, t.name),
          e.getStoreState(),
          __LOG__(2)`Creating new ${t.name} activity`;
        var i = new Promise((e, n) => {
          var r = new self.MozActivity(t);
          v && (v.ref = r),
            (r.onsuccess = (t) => e(t.target.result)),
            (r.onerror = (e) => n(e.target.error));
        });
        return Promise.race([i, n.resolvable.promise])
          .then((t) => (b(e), t))
          .catch((n) => {
            if ((b(e), n && n.name === f))
              return __LOG__(2)`User cancelled ${t.name} activity`, null;
            if (n && "NO_PROVIDER" === n.name) {
              if ("maps" === t.name || "JioCloudShare" === t.name)
                return (
                  __LOG__(
                    2
                  )`No provider for ${t.name}, falling back to browser`,
                  _(e, { name: "view", data: { type: "url", url: t.data.url } })
                );
              if ("camera-pick" === t.name)
                return (
                  __LOG__(
                    2
                  )`No provider for ${t.name}, falling back to regular pick`,
                  _(e, { name: "pick", data: t.data })
                );
              if (
                "view" === t.name &&
                "url" === t.data.type &&
                t.data.url &&
                t.data.url.toLowerCase().startsWith(g)
              )
                (0, c.e)({ title: 229, text: 535 });
              else {
                if ("open" === t.name && "application/pdf" === t.data.type)
                  return _(e, {
                    name: "view",
                    data: { type: t.data.type, blob: t.data.blob },
                  });
                "view" === t.name && "application/pdf" === t.data.type
                  ? (0, c.g)({
                      title: 229,
                      text: 537,
                      left: 765,
                      onSoftLeft: "CLOSE",
                      right: 829,
                      onSoftRight: () => {
                        (0, o.a)(e);
                      },
                    })
                  : ("view" !== t.name && "open" !== t.name) ||
                    (0, c.e)({ title: 229, text: 533 });
              }
            }
            return (
              __LOG__(3)`Error was thrown while running activity ${t.name}: ${
                n && n.name
              } ${n && n.message}`,
              null
            );
          });
      }
      function S() {
        v && v.resolvable
          ? v.resolvable.reject({ name: f })
          : __LOG__(4)`cancelCurrentActivity called without a resolvable`;
      }
      function E(e, t, n) {
        var r = Array.isArray(t)
          ? t.some((e) => e.includes("video"))
          : t.includes("video");
        return (
          r && (0, u.d)(),
          _(
            e,
            n
              ? { name: "camera-pick", data: { type: t } }
              : { name: "pick", data: { type: t } }
          ).then(
            (e) => {
              if ((r && (0, u.b)(), !e)) return null;
              var t = e.blob;
              return t
                ? (__LOG__(2)`pickMedia returned blob of size ${t.size}`, t)
                : (__LOG__(4)`pickMedia did not return blob!`,
                  SEND_LOGS("pick-media-undefined", 0.001),
                  null);
            },
            (e) => {
              throw (r && (0, u.b)(), e);
            }
          )
        );
      }
      function y(e) {
        _(e, {
          name: "configure",
          data: { target: "device", section: "geolocation" },
        });
      }
      function I(e) {
        _(e, {
          name: "configure",
          data: { target: "device", section: "appPermissions" },
        });
      }
      function O(e, t) {
        return _(e, {
          name: "new",
          data: { type: "webcontacts/contact", params: t },
        });
      }
      function A(e, t) {
        return _(e, {
          name: "dial",
          data: { type: "webtelephony/number", number: t },
        });
      }
      function C(e, t, n) {
        _(e, { name: "open", data: { type: n, blob: t } });
      }
      function k(e, t) {
        if (!(0, h.a)("green_alert_modal_deep_link_enabled"))
          return __LOG__(2)`activities: opening ToS deeplinks disabled`, !1;
        var n = e.toLowerCase(),
          r = (0, d.a)(n);
        return null != r
          ? (r === i.S
              ? (0, p.a)(t, r)
              : (__LOG__(
                  3
                )`activities: attempt to open ToS link failed, invalid id`,
                (0, c.e)({ title: 229, text: 457 })),
            !0)
          : (__LOG__(
              3
            )`activities: attempt to open ToS link failed, invalid ToS URL format`,
            !1);
      }
      function w(e, t, n) {
        _(e, {
          name: "new",
          data: {
            type: "websms/sms",
            number: t,
            body: n,
            appname: "notWhatsApp",
          },
        });
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "g", function () {
        return D;
      }),
        n.d(t, "n", function () {
          return L;
        }),
        n.d(t, "o", function () {
          return T;
        }),
        n.d(t, "k", function () {
          return N;
        }),
        n.d(t, "l", function () {
          return M;
        }),
        n.d(t, "h", function () {
          return G;
        }),
        n.d(t, "i", function () {
          return R;
        }),
        n.d(t, "c", function () {
          return j;
        }),
        n.d(t, "a", function () {
          return x;
        }),
        n.d(t, "b", function () {
          return P;
        }),
        n.d(t, "d", function () {
          return U;
        }),
        n.d(t, "e", function () {
          return F;
        }),
        n.d(t, "j", function () {
          return B;
        }),
        n.d(t, "f", function () {
          return V;
        }),
        n.d(t, "m", function () {
          return J;
        });
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a),
        i = "BR GI GE",
        o = "BS",
        l = "BT GF GC",
        c = "BU GG GC",
        u = "BV GK",
        d = "BW",
        h = "BX",
        p = "BY",
        f = "Ba GG GC",
        g = "Bp GK",
        v = n(18),
        m = n(20),
        b = n(103),
        _ = n(160),
        S = n(254),
        E = n(32),
        y = n(172),
        I = n(54),
        O = n(140),
        A = n(14);
      function C(e, t, n) {
        var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return (0, r.f)(1, "div", (0, s.a)(h, t && p, a && d, n), e, 0);
      }
      function k(e, t, n) {
        return (0, r.b)(2, O.b.div, {
          hasFocusPriority: t,
          className: (0, s.a)(h, t && p, n),
          children: e,
        });
      }
      function w(e) {
        return (t, n) => e(t, n, k);
      }
      function D(e) {
        var t = e.text,
          n = e.className;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)("BZ GG GC GI GE", n),
          t ? (0, r.b)(2, v.b, { l10n: t }) : null,
          0
        );
      }
      function L(e, t) {
        var n = e.text,
          a = e.selected,
          i = e.className,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
          l = (0, r.b)(2, v.b, { l10n: n });
        return o(l, a, (0, s.a)(i, f));
      }
      var T = w(L);
      function N(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
        return n(e.children, e.selected, e.className);
      }
      var M = w(N);
      function G(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
          a = (0, r.c)(
            [
              e.label
                ? (0, r.b)(2, v.b, { className: "BP", l10n: e.label })
                : null,
              e.children,
            ],
            0
          );
        return n(a, e.selected, (0, s.a)("Bh", e.className));
      }
      var R = w(G);
      function j(e) {
        var t = e.title,
          n = e.subtitle;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)("Bc", e.className),
          [
            t
              ? (0, r.b)(2, v.b, { className: l, l10n: t })
              : (0, r.f)(
                  1,
                  "span",
                  (0, s.a)(l, e.ellipsis && i),
                  e.rawTitle,
                  0
                ),
            n
              ? (0, r.b)(2, v.b, { className: c, l10n: n })
              : e.rawSubtitle
              ? (0, r.f)(
                  1,
                  "span",
                  (0, s.a)(c, e.ellipsis && i),
                  e.rawSubtitle,
                  0
                )
              : null,
          ],
          0
        );
      }
      function x(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
          a = (0, r.c)(
            [
              (0, r.b)(2, j, {
                title: e.title,
                rawTitle: e.rawTitle,
                subtitle: e.subtitle,
                rawSubtitle: e.rawSubtitle,
                ellipsis: e.ellipsis,
              }),
              e.rightComponent && (0, r.f)(1, "div", "Bd", e.rightComponent, 0),
            ],
            0
          );
        return n(a, e.selected, (0, s.a)("Bb", e.borderBottom && o));
      }
      var P = w(x);
      function U(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
          a = (0, r.c)(
            [
              (0, r.b)(2, j, {
                title: e.title,
                rawTitle: e.rawTitle,
                subtitle: e.subtitle,
                rawSubtitle: e.rawSubtitle,
                ellipsis: e.ellipsis,
              }),
              (0, r.b)(2, S.a, { checked: e.checked, selected: e.selected }),
            ],
            4
          );
        return n(a, e.selected, "Bi");
      }
      var F = w(U),
        B = (e) =>
          (0, r.b)(2, N, {
            selected: e.selected,
            className: (0, s.a)(
              "Be BX",
              e.selected && p,
              e.danger && "Bf",
              e.disabled && d,
              e.borderBottom && o,
              e.className
            ),
            children: [
              (0, r.f)(1, "div", "Bg BQ", e.icon, 0),
              (0, r.b)(2, j, {
                title: e.title,
                rawTitle: e.rawTitle,
                subtitle: e.subtitle,
                rawSubtitle: e.rawSubtitle,
                ellipsis: e.ellipsis,
              }),
              e.rightComponent,
            ],
          });
      function V(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
          a = e.contact.jid,
          i = (0, r.c)(
            [
              (0, r.f)(
                1,
                "div",
                g,
                (0, r.b)(2, b.c, { jid: a, className: u }),
                2
              ),
              (0, r.f)(
                1,
                "div",
                (0, s.a)("Bk", !e.rightComponent && "Bl"),
                (0, r.b)(2, j, {
                  rawTitle: (0, r.b)(2, E.a, {
                    contact: e.contact,
                    prefer: e.prefer,
                  }),
                  subtitle: e.subtitle,
                  rawSubtitle: e.rawSubtitle,
                  ellipsis: !0,
                }),
                2
              ),
              e.rightComponent,
            ],
            0
          );
        return n(i, e.selected, "Bj", e.disabled);
      }
      w(U);
      var J = (0, I.c)(
        function (e) {
          var t,
            n,
            a = e.contactOrGroup,
            o = e.contacts,
            l = e.disabled,
            u = e.checked,
            d = e.selected,
            h = e.subtitle,
            p = a.jid,
            f = a.chat;
          return (
            null != f &&
              ("ONE_TO_ONE" === f.type
                ? ((t = "ONE_TO_ONE"),
                  (n = (0, r.b)(2, _.b, {
                    className: (0, s.a)(c, i),
                    chat: f,
                    WhileIdle: z,
                  })))
                : (f.type,
                  (t = f.groupInfo.expiration || A.i),
                  (n = (0, r.b)(2, _.a, {
                    className: (0, s.a)(c, i),
                    chat: f,
                    WhileIdle: z,
                  })))),
            C(
              (0, r.c)(
                [
                  (0, r.b)(2, b.c, { jid: p, className: g, ephemeral: t }),
                  (0, r.f)(
                    1,
                    "div",
                    "Bn BS",
                    [
                      (0, r.f)(
                        1,
                        "div",
                        "Bo GI GE",
                        [
                          (0, r.b)(2, H, { contactOrGroup: a, contacts: o }),
                          null != h
                            ? (0, r.f)(
                                1,
                                "div",
                                (0, s.a)(c, i),
                                (0, r.b)(2, v.b, { l10n: h }),
                                2
                              )
                            : n,
                        ],
                        0
                      ),
                      l ? null : (0, r.b)(2, S.a, { checked: u, selected: d }),
                    ],
                    0
                  ),
                ],
                4
              ),
              d,
              "Bm",
              l
            )
          );
        },
        (e, t, n) => ({
          contactOrGroup: n.contactOrGroup,
          disabled: n.disabled,
          selected: n.selected,
          checked: n.checked,
          subtitle: n.subtitle,
          contacts: e.contacts,
        })
      );
      function z(e) {
        var t = e.chat,
          n = e.contacts;
        if ("GROUP" === t.type) {
          var a = t.groupInfo.participants.map((e) =>
              (0, r.b)(2, E.a, { contacts: n, jid: e, prefer: "short" }, e)
            ),
            o = (0, m.h)(a);
          return (0, r.f)(1, "div", (0, s.a)(c, i), o, 0);
        }
        return null;
      }
      function H(e) {
        var t = e.contactOrGroup,
          n = (0, s.a)(l, i);
        return t.group
          ? (0, r.f)(1, "span", n, (0, y.c)(t.group), 0)
          : (0, r.b)(2, E.a, {
              contacts: e.contacts,
              jid: t.jid,
              className: n,
              prefer: "long",
            });
      }
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "e", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return u;
        });
      var r = "Ht",
        a = "Hu",
        s = "Hv",
        i = "Hw",
        o = "Hx",
        l = "Hy",
        c = "Hz",
        u = "IA";
    },
    function (e, t, n) {
      n.r(t),
        n.d(t, "onAppClose", function () {
          return s;
        }),
        n.d(t, "closeApp", function () {
          return i;
        });
      var r = n(265),
        a = n(151);
      function s() {
        (0, r.b)(), (0, a.c)();
      }
      function i() {
        s(), self.open("", "_parent", ""), self.close();
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(20),
        a = n(19);
      function s(e, t) {
        var n = navigator.mozApps.getSelf();
        (n.onsuccess = () => {
          var a = n.result;
          a && a.connect
            ? a
                .connect("systoaster")
                .then((n) => {
                  var a = (0, r.k)(e);
                  n.forEach((e) => {
                    e.postMessage({ message: a, latency: t });
                  });
                })
                .catch((t) => {
                  __LOG__(3)`openToast: failed trying to postMessage`, i(e);
                })
            : (__LOG__(3)`openToast: app.connect is not defined`, i(e));
        }),
          (n.onerror = () => {
            __LOG__(4)`openToast: Error when trying to get self app.`, i(e);
          });
      }
      function i(e) {
        (0, a.e)({ text: (0, r.a)(e) });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "i", function () {
          return u;
        }),
        n.d(t, "h", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var r = n(69),
        a = n(20);
      function s() {
        var e,
          t,
          n = navigator.mozSettings.createLock();
        return ((e = {
          version: i(n, "deviceinfo.os"),
          build: i(n, "deviceinfo.build_number"),
          hardware: i(n, "deviceinfo.hardware"),
          device: i(n, "deviceinfo.product_model"),
          hour12: i(n, "locale.hour12"),
        }),
        (t = Object.keys(e)),
        Promise.all(t.map((t) => e[t])).then(function (e) {
          for (var n = {}, r = 0; r < e.length; r++) n[t[r]] = e[r];
          return n;
        })).then((e) => {
          var t = e.version,
            n = e.build,
            s = e.hardware,
            i = e.device,
            l = e.hour12;
          (0, r.h)(l);
          var c = (0, a.d)();
          return {
            os: { version: t, build: n },
            hardware: s,
            device: i,
            lg: c.lg,
            lc: c.lc,
            hour12: l,
            carrier: o(),
            height: self.innerHeight,
            width: self.innerWidth,
          };
        });
      }
      function i(e, t) {
        return new Promise((n, r) => {
          var a = e.get(t);
          (a.onsuccess = () => {
            n(a.result[t]);
          }),
            (a.onerror = () => {
              var e;
              r(null != (e = a.error) ? e : "UnknownError");
            });
        });
      }
      function o() {
        var e = navigator.mozMobileConnections;
        if (null != e) {
          var t = e[0];
          if (t) {
            var n = t.data,
              r = n.network;
            return {
              mcc: c((null == r ? void 0 : r.mcc) || ""),
              mnc: c((null == r ? void 0 : r.mnc) || ""),
              roaming: n.roaming,
              radioType: l(n.type),
            };
          }
        }
        return { mcc: c(""), mnc: c(""), roaming: !1, radioType: 0 };
      }
      function l(e) {
        switch (e) {
          case "lte":
            return 111;
          case "edge":
            return 100;
          case "umts":
            return 102;
          case "evdo0":
          case "evdoa":
          case "evdob":
            return 103;
          case "gprs":
            return 104;
          case "hsdpa":
            return 105;
          case "hsupa":
            return 106;
          case "hspa":
            return 107;
          case "1xrtt":
            return 109;
          case "ehrpd":
            return 110;
          case "hspa+":
            return 112;
          default:
            return 0;
        }
      }
      function c(e) {
        return ("000" + e).slice(-3);
      }
      function u() {
        var e;
        return (
          "connected" ===
          (null == (e = navigator.mozWifiManager)
            ? void 0
            : e.connection.status)
        );
      }
      function d() {
        var e = navigator.mozMobileConnections;
        if (null != e) {
          var t = e[0];
          if (null != t) return t.data.roaming;
        }
        return !1;
      }
      function h() {
        return i(
          navigator.mozSettings.createLock(),
          "geolocation.enabled"
        ).catch(() => !1);
      }
      function p() {
        return new Promise((e, t) => {
          var n = navigator.mozApps.mgmt.getAll();
          (n.onsuccess = () => {
            var t;
            n.result &&
              n.result.forEach(function (e) {
                "WhatsApp" === e.manifest.name &&
                  (t = navigator.mozPermissionSettings.get(
                    "geolocation",
                    e.manifestURL,
                    e.origin,
                    !1
                  ));
              }),
              e(t || void 0);
          }),
            (n.onerror = () => {
              e(void 0);
            });
        });
      }
      function f() {
        return navigator
          .getFeature("hardware.memory")
          .catch(
            (e) => (__LOG__(3)`Failed to get phone memory info: ${e}`, null)
          );
      }
      function g() {
        return i(
          navigator.mozSettings.createLock(),
          "audio.volume.content"
        ).then((e) => (Number.isFinite(e) ? e : null));
      }
      function v(e) {
        return new Promise((t) => {
          var n = navigator.mozApps.mgmt.getAll();
          (n.onsuccess = () => {
            if (null != n.result) {
              var r = n.result.find((t) => t.origin === e);
              t(r || null);
            } else t(null);
          }),
            (n.onerror = () => {
              t(null);
            });
        });
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r,
        a,
        s = n(13),
        i =
          ((a = r = class extends s.a {
            constructor() {
              var e;
              return (
                (e = super(...arguments)),
                (this.child = null),
                (this.nextForceFocus = null),
                (this.addChild = (e) => {
                  var t = this.child;
                  c(e, t),
                    (this.child = l(e)),
                    this.child !== t && (t && t.blur(), this.onUserMeddling());
                }),
                (this.removeChild = (e) => {
                  this.child === e
                    ? ((this.child = e.nextSibling),
                      u(e),
                      this.onUserMeddling())
                    : u(e);
                }),
                (this.resort = () => {
                  var e = this.child;
                  if (e) {
                    var t = l(e);
                    e !== t &&
                      ((this.child = t), e.blur(), this.onUserMeddling());
                  }
                }),
                (this.forceFocus = () => {
                  (this.nextForceFocus = null),
                    this.child && !this.child.inFocus && this.child.focus();
                }),
                (this.onUserMeddling = () => {
                  this.nextForceFocus ||
                    (this.nextForceFocus = requestAnimationFrame(
                      this.forceFocus
                    ));
                }),
                e
              );
            }
            getChildContext() {
              return { focusParent: this };
            }
            componentDidMount() {}
            render() {
              return this.props.children;
            }
          }),
          (r.childContextTypes = { focusParent() {} }),
          a),
        o = class extends s.a {
          getChildContext() {
            return { focusParent: this };
          }
          displayName() {
            return "FocusTree." + this.htmlName;
          }
          constructor(e, t, n) {
            super(e, t),
              (this.prevSibling = null),
              (this.nextSibling = null),
              (this.child = null),
              (this.ref = null),
              (this.hasFocusPriority = !1),
              (this.inFocus = 0),
              (this.addChild = (e) => {
                var t = this.child;
                c(e, t),
                  (this.child = l(e)),
                  this.inFocus &&
                    this.child !== t &&
                    (t && t.blur(), this.onUserMeddling());
              }),
              (this.removeChild = (e) => {
                this.child === e
                  ? ((this.child = e.nextSibling),
                    u(e),
                    this.inFocus && this.onUserMeddling())
                  : u(e);
              }),
              (this.resort = () => {
                var e = this.child;
                if (e) {
                  var t = l(e);
                  e !== t &&
                    ((this.child = t),
                    this.inFocus && (e && e.blur(), this.onUserMeddling()));
                }
              }),
              (this.setRef = (e) => {
                var t = this.parent;
                (this.hasFocusPriority = !!this.props.hasFocusPriority),
                  (this.ref = e),
                  e ? t.addChild(this) : t.removeChild(this);
                var n = this.props.innerRef;
                n && n(e);
              }),
              (this.onFocus = (e) => {
                this.inFocus || (e.stopPropagation(), this.onUserMeddling()),
                  this.props.onNativeFocus && this.props.onNativeFocus(e);
              }),
              (this.onBlur = (e) => {
                2 === this.inFocus
                  ? (e.stopPropagation(), this.blur(), this.onUserMeddling())
                  : this.inFocus || e.stopPropagation(),
                  this.props.onNativeBlur && this.props.onNativeBlur(e);
              }),
              (this.onUserMeddling = () => {
                (this.inFocus = 0), this.parent.onUserMeddling();
              }),
              (this.hasFocusPriority = !!e.hasFocusPriority),
              (this.htmlName = n),
              (this.parent = t.focusParent);
          }
          getSnapshotBeforeUpdate() {
            if (!this.ref) return null;
            var e = this.hasFocusPriority,
              t = !!this.props.hasFocusPriority;
            return (
              (this.hasFocusPriority = t),
              e !== t && this.ref && this.parent.resort(),
              null
            );
          }
          componentDidUpdate() {
            var e = !!this.props.hasFocusPriority;
            this.hasFocusPriority !== e && (this.hasFocusPriority = e);
          }
          focus() {
            return (
              (this.inFocus = 1),
              this.child && this.child.focus()
                ? ((this.inFocus = 2), !0)
                : (null != this.ref && this.ref.focus(),
                  (this.inFocus = 2),
                  document.activeElement === this.ref)
            );
          }
          blur() {
            this.inFocus &&
              ((this.inFocus = 0), this.child && this.child.blur());
          }
          render() {
            var e = this.props,
              t = {
                ref: this.setRef,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              };
            for (var n in e)
              switch (n) {
                case "innerRef":
                case "hasFocusPriority":
                case "ref":
                case "onFocus":
                case "onBlur":
                case "onNativeFocus":
                case "onNativeBlur":
                case "children":
                  break;
                default:
                  t[n] = e[n];
              }
            return s.d(this.htmlName, t, e.children);
          }
        };
      function l(e) {
        var t = (function (e) {
          for (var t = e; t; t = t.nextSibling)
            if (t.hasFocusPriority) return t;
          return e;
        })(e);
        return t !== e && (u(t), c(t, e)), t;
      }
      function c(e, t) {
        (e.nextSibling = t), t && (t.prevSibling = e);
      }
      function u(e) {
        var t = e.prevSibling,
          n = e.nextSibling;
        t && ((t.nextSibling = n), (e.prevSibling = null)),
          n && ((n.prevSibling = t), (e.nextSibling = null));
      }
      function d(e) {
        var t, n;
        return (
          (n = t = class extends o {
            constructor(t, n) {
              super(t, n, e);
            }
          }),
          (t.contextTypes = o.contextTypes),
          (t.childContextTypes = o.childContextTypes),
          n
        );
      }
      (o.contextTypes = { focusParent() {} }),
        (o.childContextTypes = { focusParent() {} }),
        (t.b = {
          div: d("div"),
          input: d("input"),
          textarea: d("textarea"),
          video: d("video"),
        });
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return _;
      });
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(56),
        l = n(347),
        c = n(231),
        u = n(18),
        d = n(308),
        h = n(254);
      function p(e, t) {
        var n = (function (e) {
            return e.map((e, t) => t);
          })(t),
          r = t.reduce(
            (e, t, n) => (t.selected ? { item: n, scrollFromTop: "start" } : e),
            null
          );
        return { title: e, items: t, indexes: n, start: r };
      }
      var f = class extends o.b {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.item !== e.item ||
                n.selected !== e.selected ||
                n.highlighted !== e.highlighted ||
                n.openSubMenu !== e.openSubMenu)
            );
          }
          addSoftKeys(e) {
            var t = this.props.item;
            if (!t.disabled)
              if (t.action) e.setCenterLabel(796, t.action);
              else if (t.children) {
                var n = t.label,
                  r = t.children;
                e.setCenterLabel(796, () => {
                  this.props.openSubMenu(n, r);
                });
              }
          }
          render() {
            var e = this.props,
              t = e.item,
              n = e.highlighted,
              a = (0, i.a)(
                "AV",
                n ? "AW" : null,
                t.action || t.children ? null : "AZ",
                t.disabled && "Aa"
              ),
              s = (0, i.a)("AX", n ? "AY" : null, t.disabled && "Ab"),
              o = null;
            switch (t.type) {
              case "submenu":
                o = (0, r.b)(2, l.a, { className: s });
                break;
              case "checkbox":
                o = (0, r.b)(2, h.a, { selected: n, checked: t.checked });
                break;
              case "radio":
                o = (0, r.b)(2, d.a, {
                  selected: n,
                  checked: t.checked,
                  disabled: t.disabled,
                });
            }
            return (0, r.f)(
              1,
              "div",
              a,
              [
                "function" == typeof t.label
                  ? t.label(n)
                  : (0, r.b)(2, u.b, { l10n: t.label }),
                o,
              ],
              0
            );
          }
        },
        g = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.renderItem = (e, t) => {
                var n = this.props;
                return (0, r.b)(2, f, {
                  item: n.level.items[e],
                  selected: t && n.isTopLevel,
                  highlighted: t,
                  openSubMenu: n.openSubMenu,
                });
              }),
              e
            );
          }
          render() {
            var e = this.props,
              t = e.level,
              n = e.preventLoop,
              s = { opacity: e.isTopLevel ? 1 : 0 },
              i =
                "function" == typeof t.title
                  ? t.title()
                  : "NO_TITLE" !== t.title
                  ? (0, r.f)(
                      1,
                      "div",
                      "AS Y GF GC",
                      (0, r.b)(2, u.b, { l10n: t.title }),
                      2
                    )
                  : null;
            return (0, r.f)(
              1,
              "div",
              "AR X",
              [
                i,
                (0, r.f)(
                  1,
                  "div",
                  "AT Z",
                  (0, r.b)(2, c.b, {
                    items: t.indexes,
                    keyOf: m,
                    start: t.start,
                    renderItem: this.renderItem,
                    className: "AU",
                    preventLoop: n,
                  }),
                  2
                ),
              ],
              0,
              { style: a.h(s) }
            );
          }
        },
        v = class extends o.a {
          constructor(e, t) {
            super(e, t),
              (this.Gd = (e, t) => {
                this.setState((n) => ({ stack: [...n.stack, p(e, t)] }));
              }),
              (this.Ge = () => {
                var e = this.state.stack;
                1 === e.length
                  ? (this.props.closeOverlay(),
                    this.props.onClose && this.props.onClose())
                  : this.setState({ stack: e.slice(0, -1) });
              }),
              (this.state = { stack: [p(e.title, e.items)] });
          }
          addSoftKeys(e) {
            e.setBack(this.Ge);
          }
          render() {
            var e = this.state.stack;
            return e.map((t, n) =>
              (0, r.b)(
                2,
                g,
                {
                  preventLoop: this.props.preventLoop,
                  level: t,
                  isTopLevel: n === e.length - 1,
                  openSubMenu: this.Gd,
                },
                n
              )
            );
          }
        };
      function m(e) {
        return String(e);
      }
      function b() {}
      var _ = class {
        constructor(e, t) {
          (this.parent = null),
            (this.Gg = !1),
            (this.Gh = []),
            (this.title = e || 566),
            (this.Gi = b),
            (this.Gf = null == t ? void 0 : t.preventLoop);
        }
        setOnClose(e) {
          this.Gj = e;
        }
        Gk() {
          null != this.parent ? this.parent.Gk() : this.Gi();
        }
        Gl(e, t, n) {
          this.Gk(), e(t, n);
        }
        setDefault(e) {
          this.Gg &&
            __LOG__(
              3
            )`MenuBuilder.setDefault: menu already has a default item.`;
          var t = this.Gh.find((t) => t.name === e);
          t
            ? ((this.Gg = !0), (t.selected = !0))
            : __LOG__(3)`MenuBuilder.setDefault: item ${e} does not exist.`;
        }
        addNamed(e, t, n, r, a) {
          this.Gh.push({
            type: "entry",
            label: t,
            name: e,
            action: () => {
              this.Gl(n, r, a);
            },
          });
        }
        add(e, t, n, r) {
          this.Gh.push({
            type: "entry",
            label: e,
            action: () => {
              this.Gl(t, n, r);
            },
          });
        }
        addEntry(e, t, n, r) {
          this.Gh.push({
            type: "entry",
            label: e,
            selected: n,
            disabled: r,
            action: () => {
              this.Gl(t);
            },
          });
        }
        addRadioEntry(e, t, n, r, a) {
          this.Gh.push({
            type: "radio",
            label: e,
            checked: t,
            selected: r,
            disabled: a,
            action: () => {
              this.Gl(n);
            },
          });
        }
        addCheckboxEntry(e, t, n, r) {
          this.Gh.push({
            type: "checkbox",
            label: e,
            checked: t,
            selected: r,
            action: () => {
              this.Gl(n);
            },
          });
        }
        childMenu(e) {
          if (
            (null != e.parent &&
              __LOG__(
                3
              )`Child menu has already been assigned to a parent menu, consider creating a new one.`,
            !e.isEmpty())
          ) {
            var t = e.title;
            if ("NO_TITLE" === t)
              return (
                __LOG__(4)`A children menu group must have a title`,
                void SEND_LOGS("menu-children-missing-title")
              );
            (e.parent = this),
              this.Gh.push({ type: "submenu", label: t, children: e.Gh });
          }
        }
        isEmpty() {
          return 0 === this.Gh.length;
        }
        buildMenu(e) {
          return this.isEmpty()
            ? null
            : ((this.Gi = e),
              (0, r.b)(2, v, {
                title: this.title,
                items: this.Gh,
                closeOverlay: this.Gi,
                onClose: this.Gj,
                preventLoop: this.Gf,
              }));
        }
      };
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(13),
        a = n(180),
        s = class extends r.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.promise !== e.promise ||
                n.fallback !== e.fallback ||
                n.render !== e.render ||
                n.props !== e.props)
            );
          }
          constructor() {
            super(), (this.Bk = null), (this.Bj = (0, a.a)((e) => this.Bl(e)));
          }
          Bl(e) {
            var t,
              n = (function (e) {
                var t,
                  n = !1,
                  r = !1;
                return (
                  e.then(
                    function (e) {
                      return (n = !0), (t = e), e;
                    },
                    function (e) {
                      throw ((r = !0), e);
                    }
                  ),
                  {
                    promise: e,
                    isSettled: () => n || r,
                    isPending: () => !n && !r,
                    isFulfilled: () => n,
                    isRejected: () => r,
                    getValue: () => {
                      if (n) return t;
                      throw new Error(
                        r
                          ? "queryablePromise: getValue called on a rejected promise"
                          : "queryablePromise: getValue called on a pending promise"
                      );
                    },
                  }
                );
              })(e),
              r = () => {
                t === this.Bk && this.forceUpdate();
              };
            return (
              (t = this.Bk = e.then(r, () => {
                r(), e.then();
              })),
              n
            );
          }
          render() {
            var e = this.props,
              t = this.Bj(e.promise);
            if (t.isFulfilled()) return (0, e.render)(e.props, t.getValue());
            var n = e.fallback;
            return n ? n(e.props) : null;
          }
        };
    },
    function (e, t, n) {
      function r(e, t) {
        if (e.parentElement instanceof HTMLElement) {
          var n = e.parentElement;
          if (t.force) return void e.scrollIntoView(Object.assign({}, t));
          var r = e.offsetTop - n.offsetTop < n.scrollTop,
            a =
              e.offsetTop + e.clientHeight - n.offsetTop >
              n.scrollTop + n.clientHeight;
          (r || a) && e.scrollIntoView(Object.assign({}, t));
        }
      }
      n.d(t, "e", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "i", function () {
          return o;
        }),
        n.d(t, "h", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var a = function (e) {
          e && e.requestFullscreen();
        },
        s = function () {
          document.exitFullscreen();
        };
      function i() {
        return null != document.fullscreenElement;
      }
      var o = function () {
          navigator.volumeManager.requestUp();
        },
        l = function () {
          navigator.volumeManager.requestDown();
        },
        c = function (e) {
          navigator.vibrate(e);
        };
      function u(e) {
        var t = document.querySelector("meta[name=theme-color]");
        t && t.setAttribute("content", e);
      }
      function d() {
        return "visible" === document.visibilityState;
      }
    },
    function (e, t, n) {
      function r(e) {
        return URL.createObjectURL(e);
      }
      function a(e) {
        URL.revokeObjectURL(e);
      }
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        });
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return g;
        });
      var r = n(70),
        a = n(173),
        s = n(3),
        i = "timeSpentActivity",
        o = 12e4,
        l = 3 * s.d;
      function c() {
        return Math.floor(Date.now() / 1e3);
      }
      var u = null;
      function d() {
        u ||
          (u = new (class {
            constructor() {
              (this.AB = !1),
                (this.AC = new r.a(() => {
                  var e = this.AC;
                  this.AB
                    ? e.onOrBefore(5e3)
                    : (localStorage.setItem(i, JSON.stringify(this.AA)),
                      e.onOrBefore(o));
                }));
              var e = c(),
                t = localStorage.getItem(i),
                n =
                  null != t
                    ? JSON.parse(t)
                    : (function (e) {
                        return {
                          startTime: e,
                          sequenceNumber: 0,
                          cumSessionsLength: 0,
                          foregroundCount: 0,
                          sessionStartTime: null,
                          lastInteractionTime: e,
                        };
                      })(e);
              (this.AA = n), this.AC.onOrBefore(o);
            }
            AD() {
              var e = this.AA,
                t = e.sessionStartTime,
                n = e.lastInteractionTime;
              if (null != t) {
                var r = n - t + 1;
                (this.AA.cumSessionsLength += r),
                  (this.AA.sessionStartTime = null);
              }
            }
            AE(e) {
              var t = this.AA,
                n = t.lastInteractionTime,
                r = t.startTime;
              n > e || e - r > l ? this.AF(e) : e - n > 30 && this.AD();
            }
            AF(e) {
              null != this.AA.sessionStartTime && this.AD();
              var t = this.AA,
                n = t.startTime,
                r = t.cumSessionsLength,
                s = t.foregroundCount,
                i = t.sequenceNumber,
                o = t.lastInteractionTime,
                l = o > e,
                c = Math.max(e, o);
              (this.AB = !0),
                WAM.logAsync("regular", 1502, void 0, [
                  1,
                  0,
                  n,
                  2,
                  0,
                  c - n + 1,
                  3,
                  0,
                  r,
                  4,
                  0,
                  l ? 1 : 0,
                  5,
                  0,
                  s,
                  6,
                  0,
                  i,
                ]).finally(() => {
                  this.AB = !1;
                }),
                (0, a.forceFlushBuffers)(),
                (t.startTime = e);
              var u = t.sequenceNumber + 1;
              (t.sequenceNumber = u > 9999 ? 0 : u),
                (t.cumSessionsLength = 0),
                (t.foregroundCount = 0);
            }
            AG(e) {
              var t = this.AA;
              this.AE(e),
                null == t.sessionStartTime && (t.sessionStartTime = e),
                (t.lastInteractionTime = e);
            }
            recordInteraction() {
              var e = c();
              e !== this.AA.lastInteractionTime && this.AG(e);
            }
            recordAppBackground() {
              this.AC.forceRunNow();
            }
            recordAppForeground() {
              var e = c(),
                t = this.AA;
              t.lastInteractionTime !== e && this.AD(),
                this.AG(e),
                (t.foregroundCount += 1);
            }
            deinitialize() {
              this.AC.cancel(), localStorage.removeItem(i);
            }
          })()).recordAppForeground();
      }
      function h() {
        u && u.recordInteraction();
      }
      function p() {
        u && u.recordAppBackground();
      }
      function f() {
        u && u.recordAppForeground();
      }
      function g() {
        u && (u.deinitialize(), (u = null));
      }
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var r = new Map();
      function a() {
        return r;
      }
      function s(e, t) {
        return e.get(t);
      }
      function i(e, t, n) {
        if (e.get(t) === n) return e;
        var r = new Map(e);
        return r.set(t, n), r;
      }
      function o(e, t) {
        if (!e.has(t)) return e;
        if (1 === e.size) return r;
        var n = new Map();
        return (
          e.forEach((e, r) => {
            r !== t && n.set(r, e);
          }),
          n
        );
      }
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a),
        i = n(57);
      function o(e) {
        var t = e.className,
          n = e.jid,
          a = e.bold;
        return (0, r.f)(
          1,
          "span",
          (0, s.a)(t, "ED", a && "EE"),
          (0, i.d)(n),
          0,
          { dir: "ltr" }
        );
      }
      function l(e) {
        var t = e.className,
          n = e.phone,
          a = e.bold;
        return (0, r.f)(
          1,
          "span",
          (0, s.a)(t, "ED", a && "EE"),
          (0, i.c)(n),
          0,
          { dir: "ltr" }
        );
      }
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n(1),
        a = n(13),
        s = n(18),
        i = n(32),
        o = n(54),
        l = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.type !== e.type ||
                n.selected !== e.selected ||
                n.chat !== e.chat ||
                n.WhileIdle !== e.WhileIdle ||
                n.className !== e.className ||
                n.contacts !== e.contacts ||
                n.groupChatState !== e.groupChatState)
            );
          }
          render() {
            var e = this.props;
            if (e.groupChatState) {
              var t,
                n = e.groupChatState,
                a = n.participant,
                o = n.chatState,
                l = (0, i.h)(e.contacts, a);
              return (
                (t =
                  "typing" === o
                    ? (0, r.b)(2, s.b, { l10n: [l, 176] })
                    : (0, r.b)(2, s.b, { l10n: [l, 175] })),
                (0, r.f)(1, "div", e.className, t, 0)
              );
            }
            if (e.WhileIdle) {
              var c = e.WhileIdle;
              return (0, r.b)(2, c, {
                selected: e.selected,
                chat: e.chat,
                contacts: e.contacts,
              });
            }
            return null;
          }
        },
        c = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.type !== e.type ||
                n.selected !== e.selected ||
                n.chat !== e.chat ||
                n.WhileIdle !== e.WhileIdle ||
                n.className !== e.className ||
                n.contacts !== e.contacts ||
                n.oneToOneChatState !== e.oneToOneChatState)
            );
          }
          render() {
            var e,
              t = this.props;
            if (t.oneToOneChatState)
              return (
                "typing" === t.oneToOneChatState
                  ? (e = (0, r.b)(2, s.b, { l10n: 594 }))
                  : (t.oneToOneChatState,
                    (e = (0, r.b)(2, s.b, { l10n: 593 }))),
                (0, r.f)(1, "div", t.className, e, 0)
              );
            if (t.WhileIdle) {
              var n = t.WhileIdle;
              return (0, r.b)(2, n, {
                selected: t.selected,
                chat: t.chat,
                contacts: t.contacts,
              });
            }
            return null;
          }
        },
        u = (0, o.c)(c, function (e, t, n) {
          var r = n.chat,
            a = n.selected,
            s = n.className,
            i = n.WhileIdle;
          return {
            type: "ONE_TO_ONE",
            chat: r,
            selected: a,
            contacts: e.contacts,
            WhileIdle: i,
            className: s,
            oneToOneChatState: e.oneToOneChatStates[r.jid] || null,
          };
        }),
        d = (0, o.c)(l, function (e, t, n) {
          var r = n.chat,
            a = n.selected,
            s = n.className,
            i = n.WhileIdle;
          return {
            type: "GROUP",
            chat: r,
            selected: a,
            contacts: e.contacts,
            WhileIdle: i,
            className: s,
            groupChatState: e.groupChatStates[r.jid] || null,
          };
        });
    },
    ,
    ,
    ,
    function (e, t, n) {
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a);
      t.a = (e) => {
        var t = e.type,
          n = e.className,
          a = "dialog" === t ? "w t" : "t";
        return (0, r.f)(
          1,
          "div",
          (0, s.a)(a, n),
          [(0, r.f)(1, "div", "x"), (0, r.f)(1, "div", "y")],
          4
        );
      };
    },
    function (e, t, n) {
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "j", function () {
          return h;
        }),
        n.d(t, "k", function () {
          return p;
        }),
        n.d(t, "l", function () {
          return f;
        }),
        n.d(t, "m", function () {
          return g;
        }),
        n.d(t, "n", function () {
          return v;
        }),
        n.d(t, "o", function () {
          return m;
        }),
        n.d(t, "p", function () {
          return b;
        }),
        n.d(t, "q", function () {
          return _;
        }),
        n.d(t, "u", function () {
          return S;
        }),
        n.d(t, "t", function () {
          return E;
        }),
        n.d(t, "s", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return I;
        }),
        n.d(t, "v", function () {
          return O;
        }),
        n.d(t, "w", function () {
          return A;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "r", function () {
          return k;
        }),
        n.d(t, "y", function () {
          return w;
        }),
        n.d(t, "a", function () {
          return D;
        }),
        n.d(t, "x", function () {
          return L;
        });
      var r = n(110),
        a = n(20),
        s = n(19),
        i = "/en/26000021",
        o = "/faq/general/23154266",
        l = "/general/26000089",
        c = "/faq/general/26000015",
        u = "/general/26000103",
        d = "/general/26000253",
        h = "/kaios/26000232",
        p = "/general/26000110",
        f = "/general/28030014",
        g = "/general/26000361",
        v = "/kaios",
        m = "/kaios/26000179",
        b = "www.whatsapp.com/legal/?eea=1#terms-of-service-age",
        _ = "/general/26000112?eea=1",
        S = "www.whatsapp.com/legal/",
        E = "/en/web/26000175/",
        y = "www.whatsapp.com/security/",
        I = "/general/chats/about-disappearing-messages/",
        O = "/general/chats/about-view-once",
        A = "/general/about-safely-communicating-with-whatsapp-support",
        C =
          "/general/security-and-privacy/end-to-end-encryption-for-business-messages/",
        k = "/general/security-and-privacy/how-to-use-whatsapp-responsibly/";
      function w(e, t) {
        var n = (0, a.d)(),
          s = n.lg,
          i = n.lc,
          o = new URL(`https://${"/" === t[0] ? "faq.whatsapp.com" : ""}${t}`);
        o.searchParams.append("lg", s),
          null != i && "" !== i && o.searchParams.append("lc", i),
          (0, r.k)(e, {
            name: "view",
            data: { type: "url", url: o.toString() },
          });
      }
      var D = "invite-via-link-unavailable";
      function L(e, t, n) {
        if (null != n) {
          var i = n;
          (0, s.g)({
            text: t,
            left: 785,
            onSoftLeft: () =>
              (function (e, t) {
                var n = (0, a.d)(),
                  s = n.lg,
                  i = n.lc,
                  o = new URL("https://faq.whatsapp.com/cxt/");
                o.searchParams.append("entrypointid", t),
                  o.searchParams.append("platform", "kaios"),
                  o.searchParams.append("lg", s),
                  null != i && "" !== i && o.searchParams.append("lc", i),
                  (0, r.k)(e, {
                    name: "view",
                    data: { type: "url", url: o.toString() },
                  });
              })(e, i),
            right: 796,
            onSoftRight: "CLOSE",
          });
        } else (0, s.e)({ text: t });
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return f;
        });
      var r = n(1),
        a = (n(13), n(307)),
        s = n(357),
        i = n(54),
        o = n(272),
        l = n(56),
        c = n(76),
        u = n(22),
        d = n.n(u),
        h = class extends l.a {
          addSoftKeys(e) {
            e.setFull(788);
          }
          renderConversationTitle(e, t) {
            return "ONE_TO_ONE" === e.type
              ? (0, r.b)(2, a.b, { chat: e, contacts: t })
              : "GROUP" === e.type
              ? (0, r.b)(2, a.a, { chat: e })
              : (e.type, (0, r.b)(2, a.c, { chat: e }));
          }
          render() {
            var e = null,
              t = !1;
            switch (this.props.type) {
              case "conversation":
                (t = c.f),
                  (e = this.renderConversationTitle(
                    this.props.chat,
                    this.props.contacts
                  ));
                break;
              default:
                this.props.type;
            }
            return (0, r.b)(2, o.a, {
              title: e,
              tallTitle: t,
              children: (0, r.f)(
                1,
                "div",
                (0, d.a)("z IB", this.props.shareSingleMedia && "AA"),
                (0, r.b)(2, s.a, { type: "center" }),
                2
              ),
            });
          }
        },
        p = (0, i.e)((0, l.e)(h), (e) =>
          "main" === e.mode && e.msglist && !e.screens.length
            ? {
                type: "conversation",
                chat: e.msglist.chat,
                contacts: e.contacts,
              }
            : { type: "suspense" }
        ),
        f = (0, i.e)((0, l.e)(h, { fullscreen: !0 }), (e) =>
          "main" === e.mode && e.msglist && !e.screens.length
            ? {
                type: "conversation",
                chat: e.msglist.chat,
                contacts: e.contacts,
              }
            : { type: "suspense", shareSingleMedia: !0 }
        );
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return h;
      }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "a", function () {
          return m;
        });
      var r = n(1),
        a = (n(13), n(69)),
        s = n(40),
        i = n(31),
        o = n.n(i),
        l = n(18),
        c = n(19),
        u = n(54),
        d = n(314);
      function h(e) {
        return e.groupInfo.isInGroup
          ? !(!e.groupInfo.announcement || e.groupInfo.isAdmin) && "only-admins"
          : e.groupInfo.support
          ? "support-closed"
          : "not-participant";
      }
      function p(e, t, n) {
        if ("ONE_TO_ONE" === e.type) {
          var r = (0, s.c)(e.jid, n);
          return !(
            (r.verifiedInfo && "high" === r.verifiedInfo.level) ||
            (0, s.m)(r)
          );
        }
        if (e.groupInfo.support) return !1;
        var a = !1;
        if (e.groupInfo.creatorJid) {
          var i = (0, s.c)(e.groupInfo.creatorJid, n);
          a = (0, s.m)(i);
        }
        return (
          !e.groupInfo.messaged &&
          e.groupInfo.creatorJid !== t &&
          !a &&
          e.groupInfo.admins.every((e) => !(0, s.m)((0, s.c)(e, n)))
        );
      }
      function f(e, t) {
        if ("ONE_TO_ONE" === e.type) {
          var n = t[e.jid];
          return n && null != n.verifiedInfo ? n.verifiedInfo.level : null;
        }
        return null;
      }
      function g(e, t) {
        if (t.error) {
          var n,
            r = t.error.reason;
          switch (r) {
            case "bad-request":
            case "unknown":
              n = 644;
              break;
            default:
              return (0, o.a)(r);
          }
          (0, c.e)({ title: 229, text: n });
        } else (0, c.e)({ title: 646, text: 645 });
      }
      function v(e) {
        switch ((0, a.e)(e)) {
          case "TODAY":
            return (0, r.b)(2, l.b, { l10n: [(0, a.i)(e, "time"), 154] });
          case "YESTERDAY":
            return (0, r.b)(2, l.b, { l10n: [(0, a.i)(e, "time"), 156] });
          case "WEEK_AGO":
            return (0, r.b)(2, l.b, {
              l10n: [(0, a.i)(e, "time"), (0, a.i)(e, "weekdayShort"), 155],
            });
          case "MONTH_AGO":
            return (0, r.b)(2, l.b, {
              l10n: [(0, a.i)(e, "yearDate"), (0, a.i)(e, "time"), 153],
            });
          default:
            return (0, r.b)(2, l.b, { l10n: [(0, a.i)(e, "date"), 152] });
        }
      }
      var m = (0, u.f)(
        function (e) {
          var t = e.isOnline,
            n = e.lastSeen;
          return t ? (0, r.b)(2, l.b, { l10n: 592 }) : null != n ? v(n) : null;
        },
        (e, t) => {
          var n = t.chat.jid;
          return {
            contact: e.contacts[n],
            onlineOrLastSeen: e.onlineOrLastSeen[n],
            lastSeenSetting: e.settings.lastSeen,
          };
        },
        (e, t) => {
          var n = !1,
            r = null,
            a = e.onlineOrLastSeen,
            s = e.contact,
            i = e.lastSeenSetting;
          return (
            (0, d.a)(a, i, s) && ("online" === a ? (n = !0) : (r = a)),
            { isOnline: n, lastSeen: r }
          );
        }
      );
    },
    function (e, t, n) {
      n.d(t, "e", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return g;
        });
      var r = n(1),
        a = (n(13), n(32)),
        s = n(389),
        i = n(22),
        o = n.n(i),
        l = n(48),
        c = "Ey GI GE";
      function u(e) {
        if (
          null != e.verifiedInfo &&
          "high" === e.verifiedInfo.level &&
          !(function (e, t) {
            return null != e.phonebookPhone && t.name !== e.fullName;
          })(e, e.verifiedInfo)
        )
          return e.verifiedInfo.name;
      }
      function d(e) {
        return (0, r.b)(2, s.a, {
          className: (0, o.a)(
            e.className,
            "Eu GL",
            "small" === e.badgeSize && "Ev"
          ),
        });
      }
      function h(e) {
        return (0, r.f)(
          1,
          "div",
          "Ew",
          [
            (0, r.f)(
              1,
              "div",
              (0, o.a)("Ex", "no-ellipsis" !== e.noEllipsis && c),
              (0, r.f)(
                1,
                "span",
                (0, o.a)("pushname" === e.pushname && "FA"),
                (0, l.b)(e.verifiedName),
                0,
                { dir: "auto" }
              ),
              2
            ),
            (0, r.f)(
              1,
              "div",
              "Ez",
              (0, r.b)(2, d, { badgeSize: e.badgeSize }),
              2
            ),
          ],
          4
        );
      }
      function p(e, t) {
        var n = u(e);
        return n
          ? (0, r.b)(2, h, {
              verifiedName: n,
              noEllipsis: null == t ? void 0 : t.noEllipsis,
              pushname: null == t ? void 0 : t.pushname,
              badgeSize: null == t ? void 0 : t.badgeSize,
            })
          : (0, r.b)(2, a.a, { contact: e });
      }
      function f(e) {
        return (0, r.f)(
          1,
          "div",
          "Ew",
          [
            (0, r.f)(
              1,
              "div",
              (0, o.a)("Ex", "no-ellipsis" !== e.noEllipsis && c),
              (0, l.b)(e.title),
              0
            ),
            (0, r.f)(
              1,
              "div",
              "Ez",
              (0, r.b)(2, d, { badgeSize: e.badgeSize }),
              2
            ),
          ],
          4
        );
      }
      function g(e, t) {
        return e.support
          ? (0, r.b)(2, f, {
              title: e.title,
              noEllipsis: null == t ? void 0 : t.noEllipsis,
              badgeSize: null == t ? void 0 : t.badgeSize,
            })
          : (0, l.b)(e.title);
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "e", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return c;
        });
      var r = [];
      function a(e, t) {
        e.dispatch({ type: "AVATARS_STARTED_LOADING", jids: [t] });
      }
      function s(e) {
        var t = r;
        t &&
          ((r = null), e.fireAndForget("backend", "loadAvatars", { jids: t }));
      }
      function i(e, t) {
        a(e, t),
          null != r
            ? r.push(t)
            : e.fireAndForget("backend", "loadAvatars", { jids: [t] });
      }
      function o(e, t, n) {
        a(e, t),
          e.fireAndForget("backend", "loadAvatarGroupInvite", {
            jid: t,
            code: n,
          });
      }
      function l(e, t, n) {
        a(e, t),
          e.fireAndForget("backend", "loadAvatarAddRequest", {
            jid: t,
            addRequest: n,
          });
      }
      function c(e, t) {
        e.dispatch({ type: "AVATARS_UPDATED", changed: [], cleared: [t] });
      }
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return S;
      }),
        n.d(t, "e", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return I;
        }),
        n.d(t, "g", function () {
          return O;
        }),
        n.d(t, "i", function () {
          return A;
        }),
        n.d(t, "a", function () {
          return C;
        }),
        n.d(t, "h", function () {
          return k;
        }),
        n.d(t, "f", function () {
          return w;
        });
      var r = n(1),
        a = n(13),
        s = n(19),
        i = n(32),
        o = n(18),
        l = n(54),
        c = n(103),
        u = n(230),
        d = n(246),
        h = n(14),
        p = n(48),
        f = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Vv = () => {
                this.props.backend.sendGroupInvitations(
                  this.props.group.jid,
                  this.props.participants.map((e) => e.invitation)
                );
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.group !== e.group ||
                n.participants !== e.participants ||
                n.user !== e.user)
            );
          }
          render() {
            var e = [],
              t = [];
            return (
              this.props.participants.forEach((n, a) => {
                var s = n.contact,
                  i = n.invitation;
                t.push(
                  (0, r.b)(2, u.a, { className: "Sy", contact: s }, i.jid)
                ),
                  (t.length !== h.j &&
                    a !== this.props.participants.length - 1) ||
                    (e.push((0, r.f)(1, "div", "Sr", t, 0, null, e.length)),
                    (t = []));
              }),
              (0, r.b)(2, d.a, {
                title: 466,
                right: 458,
                onSoftRight: this.Vv,
                left: 761,
                onSoftLeft: "CLOSE",
                close: s.a,
                children: (0, r.f)(
                  1,
                  "div",
                  "Sq",
                  [
                    (0, r.f)(
                      1,
                      "div",
                      "Ss",
                      [
                        (0, r.f)(
                          1,
                          "div",
                          "St GK",
                          (0, r.b)(2, c.c, {
                            className: "Sx",
                            jid: this.props.group.jid,
                            type: "thumb",
                          }),
                          2
                        ),
                        (0, r.f)(
                          1,
                          "div",
                          "Su",
                          [
                            (0, r.f)(
                              1,
                              "div",
                              "Sv GF GC GI GE",
                              (0, p.b)(this.props.group.groupInfo.title),
                              0
                            ),
                            (0, r.f)(
                              1,
                              "div",
                              "Sw GH GC GI GE",
                              (0, r.b)(2, o.b, { l10n: 465 }),
                              2
                            ),
                          ],
                          4
                        ),
                      ],
                      4
                    ),
                    e,
                  ],
                  0
                ),
              })
            );
          }
        },
        g = (0, l.f)(
          f,
          (e, t) => {
            var n = e.chatlist.chats[t.chatId];
            return n && "GROUP" === n.type
              ? {
                  group: n,
                  invitations: t.invitations,
                  user: e.user.jid,
                  contacts: e.contacts,
                }
              : (__LOG__(
                  3
                )`SendGroupInviteDialog: group ${t.chatId} does not exist or is not a group chat`,
                SEND_LOGS("invitation-invalid-group"),
                null);
          },
          (e, t) => {
            var n = [];
            return (
              e.invitations.forEach((t) => {
                var r = e.contacts[t.jid];
                r &&
                  r.phonebookPhone &&
                  !r.noWhatsApp &&
                  n.push({ contact: r, invitation: t });
              }),
              { group: e.group, participants: n, user: e.user, backend: t }
            );
          }
        ),
        v = n(10),
        m = "SX";
      function b(e, t, n) {
        var r = t.error.reason;
        (0, s.e)({ title: 229, text: n[r] || n.unknown });
      }
      function _(e, t, n, a, l) {
        var c = 1 === n.length ? [(0, i.e)(a, n[0].jid), 6] : [n.length, 5],
          u = l
            ? () =>
                (0, r.f)(
                  1,
                  "div",
                  null,
                  [(0, r.b)(2, o.b, { l10n: c }), (0, r.f)(1, "div", m, l, 0)],
                  4
                )
            : c;
        (0, s.g)({
          title: 16,
          text: u,
          left: 761,
          onSoftLeft: "CLOSE",
          right: 15,
          onSoftRight: () => {
            (0, s.b)((0, r.b)(2, g, { chatId: t, invitations: n }));
          },
        });
      }
      function S(e, t, n) {
        var r;
        switch (t.error.reason) {
          case "subject-too-long":
            r = [n, 89];
            break;
          case "too-many-groups":
            r = [n, 90];
            break;
          case "rate-limit":
            r = [n, 88];
            break;
          case "no-network":
            return;
          default:
            t.error.reason, (r = [n, 91]);
        }
        (0, s.e)({ title: 229, text: r });
      }
      function E(e, t, n, a, l) {
        if (n.failures && 0 !== n.failures.length) {
          var c = [],
            u = n.failures,
            d = [];
          u.forEach((e) => {
            var t = e.error,
              n = e.jid;
            switch (t.reason) {
              case "add-request-required":
                l
                  ? d.push({
                      jid: n,
                      code: t.extra.code,
                      expiration: t.extra.expiration,
                    })
                  : c.push(
                      (0, r.f)(
                        1,
                        "div",
                        c.length > 0 ? m : void 0,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, n), 0] }),
                        2,
                        null,
                        n
                      )
                    );
                break;
              case "add-not-allowed":
                c.push(
                  (0, r.f)(
                    1,
                    "div",
                    c.length > 0 ? m : void 0,
                    (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, n), 0] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              case "business-not-allowed":
                c.push(
                  (0, r.f)(
                    1,
                    "div",
                    c.length > 0 ? m : void 0,
                    (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, n), 1] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              case "too-many-participants":
                c.push(
                  (0, r.f)(
                    1,
                    "div",
                    c.length > 0 ? m : void 0,
                    (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, n), 4] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              default:
                t.reason,
                  c.push(
                    (0, r.f)(
                      1,
                      "div",
                      c.length > 0 ? m : void 0,
                      (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, n), 0] }),
                      2,
                      null,
                      n
                    )
                  );
            }
          }),
            d.length > 0
              ? _(0, t, d, a, c)
              : c.length > 0 &&
                (0, s.e)({
                  title: 229,
                  text: () => (0, r.f)(1, "div", null, c, 0),
                });
        }
      }
      function y(e, t, n, a, l) {
        return () => {
          if ((e.goBack(), n.error))
            b(0, n, {
              "not-an-admin": 11,
              "not-in-group": 12,
              "group-not-found": 10,
              "rate-limit": 14,
              unknown: 9,
            });
          else if (n.failures) {
            var c = n.failures;
            if (0 !== c.length) {
              var u = [],
                d = [],
                h = 0,
                p = null;
              c.forEach((e) => {
                var t = e.jid,
                  n = e.error;
                switch (n.reason) {
                  case "add-not-allowed":
                    u.push(
                      (0, r.f)(
                        1,
                        "div",
                        u.length > 0 ? m : void 0,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, t), 0] }),
                        2,
                        null,
                        t
                      )
                    );
                    break;
                  case "add-request-required":
                    l
                      ? d.push({
                          jid: t,
                          code: n.extra.code,
                          expiration: n.extra.expiration,
                        })
                      : u.push(
                          (0, r.f)(
                            1,
                            "div",
                            u.length > 0 ? m : void 0,
                            (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, t), 0] }),
                            2,
                            null,
                            t
                          )
                        );
                    break;
                  case "business-not-allowed":
                    u.push(
                      (0, r.f)(
                        1,
                        "div",
                        u.length > 0 ? m : void 0,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, t), 1] }),
                        2,
                        null,
                        t
                      )
                    );
                    break;
                  case "user-left-recently":
                    h++, null == p && (p = (0, i.h)(a, t));
                    break;
                  case "too-many-participants":
                    u.push(
                      (0, r.f)(
                        1,
                        "div",
                        u.length > 0 ? m : void 0,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, t), 4] }),
                        2,
                        null,
                        t
                      )
                    );
                    break;
                  default:
                    n.reason,
                      u.push(
                        (0, r.f)(
                          1,
                          "div",
                          u.length > 0 ? m : void 0,
                          (0, r.b)(2, o.b, { l10n: [(0, i.h)(a, t), 0] }),
                          2,
                          null,
                          t
                        )
                      );
                }
              }),
                h > 0
                  ? (0, s.e)({
                      title: 229,
                      text: () =>
                        h > 1
                          ? (0, r.b)(2, o.b, { l10n: [h, 3] })
                          : (0, r.b)(2, o.b, { l10n: [p, 2] }),
                    })
                  : d.length > 0
                  ? _(0, t, d, a, u)
                  : u.length > 0 &&
                    (0, s.e)({
                      title: 229,
                      text: () => (0, r.f)(1, "div", null, u, 0),
                    });
            }
          }
        };
      }
      function I(e, t, n) {
        return () => {
          if (t.error)
            b(0, t, {
              "not-an-admin": 114,
              "not-in-group": 115,
              "group-not-found": 113,
              unknown: 112,
            });
          else if (t.failures) {
            var e = t.failures;
            if (0 !== e.length) {
              var a = [];
              e.forEach((e) => {
                var t = e.jid;
                switch (e.error.reason) {
                  case "is-superadmin":
                    a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 33] }),
                        2,
                        null,
                        t
                      )
                    );
                    break;
                  default:
                    a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 187] }),
                        2,
                        null,
                        t
                      )
                    );
                }
              }),
                a.length > 0 &&
                  (0, s.e)({
                    title: 229,
                    text: () => (0, r.f)(1, "div", null, a, 0),
                  });
            }
          }
        };
      }
      function O(e, t, n) {
        return () => {
          if (t.error)
            b(0, t, {
              "not-an-admin": 626,
              "not-in-group": 627,
              "group-not-found": 625,
              unknown: 624,
            });
          else if (t.failures) {
            var e = t.failures;
            if (0 !== e.length) {
              var a = [];
              e.forEach((e) => {
                var t = e.jid;
                "is-superadmin" === e.error.reason
                  ? a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 188] }),
                        2,
                        null,
                        t
                      )
                    )
                  : a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 187] }),
                        2,
                        null,
                        t
                      )
                    );
              }),
                a.length > 0 &&
                  (0, s.e)({
                    title: 229,
                    text: () => (0, r.f)(1, "div", null, a, 0),
                  });
            }
          }
        };
      }
      function A(e, t, n) {
        return () => {
          if (t.error)
            b(0, t, {
              "not-an-admin": 671,
              "not-in-group": 672,
              "group-not-found": 670,
              unknown: 669,
            });
          else if (t.failures) {
            var e = t.failures;
            if (0 !== e.length) {
              var a = [];
              e.forEach((e) => {
                var t = e.jid;
                "no-invitation" === e.error.reason
                  ? a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 45] }),
                        2,
                        null,
                        t
                      )
                    )
                  : a.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, o.b, { l10n: [(0, i.h)(n, t), 44] }),
                        2,
                        null,
                        t
                      )
                    );
              }),
                a.length > 0 &&
                  (0, s.e)({
                    title: 229,
                    text: () => (0, r.f)(1, "div", null, a, 0),
                  });
            }
          }
        };
      }
      function C(e, t) {
        var n;
        switch (t.error.reason) {
          case "too-many-participants":
            n = 4;
            break;
          case "group-not-found":
            n = 3;
            break;
          case "invalid-request":
            n = 6;
            break;
          default:
            n = 5;
        }
        (0, s.e)({ title: 229, text: n });
      }
      function k(e, t) {
        t.error
          ? (t.error.reason, (0, s.e)({ title: 229, text: 644 }))
          : (t.result, (0, s.e)({ title: 646, text: 645 }));
      }
      function w(e, t) {
        var n = (0, v.x)(e).find((e) => "GROUP" === e.type && e.jid === t);
        return null != n && "GROUP" === n.type ? n : null;
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n(93),
        a = n(31),
        s = n.n(a),
        i = n(126),
        o = n(100);
      function l(e, t) {
        return e.msgIds !== t.msgIds;
      }
      var c = new WeakMap(),
        u = new WeakMap();
      function d(e, t) {
        return c.has(e) || c.set(e, (0, r.e)(t, e.mentionedJids)), c.get(e);
      }
      function h(e) {
        if (!c.has(e)) {
          var t = null;
          switch (e.content.type) {
            case "image":
            case "gif":
            case "video":
              null != e.content.caption &&
                (t = (0, r.e)(e.content.caption, e.mentionedJids));
              break;
            case "text":
              t = (0, r.e)(e.content.text, e.mentionedJids);
          }
          c.set(e, t);
        }
        return c.get(e);
      }
      function p(e, t) {
        if (!u.has(e)) {
          var n = null;
          switch (t.content.type) {
            case "image":
            case "gif":
            case "video":
              null != t.content.caption &&
                (n = (0, r.e)(t.content.caption, t.mentionedJids));
              break;
            case "text":
              n = (0, r.e)(t.content.text, t.mentionedJids);
          }
          u.set(e, n);
        }
        return u.get(e);
      }
      function f(e, t) {
        var n;
        switch (t.type) {
          case "back":
            e.goBack();
            break;
          case "closeAllScreens":
            e.closeAllScreens();
            break;
          case "closeScreen":
            e.dispatch({
              type: "CLOSE_SCREEN",
              id: t.id,
              closeScreensAbove: t.closeScreensAbove,
            });
            var r = t.specifics;
            if (null != r)
              switch (r.from) {
                case "statusReply":
                  (0, i.a)(865),
                    null == (n = e.statusViewerSession) ||
                      n.replyToStatus(r.statusId);
                  break;
                default:
                  return (0, s.a)(r.from);
              }
            break;
          case "openChatNewest":
            e.closeAllScreens(), (0, o.a)(e, t.chatJid, "newest");
            break;
          case "unknown":
            __LOG__(
              4
            )`applyAfterSending: unknown action type should be handled before calling this function`;
            break;
          default:
            return (0, s.a)(t.type);
        }
      }
      function g(e, t, n, r) {
        e.quoted
          ? r({
              type: "quote",
              key: "quote-" + e.id,
              grouping: t,
              msg: e,
              quoted: e.quoted,
              formatting: p(e, e.quoted),
            })
          : e.remoteJid &&
            r({
              type: "quoteGroup",
              key: "quoteGroup-" + e.id,
              grouping: t,
              msg: e,
              groupJid: e.remoteJid,
            });
        var a = e.content;
        switch (a.type) {
          case "sticker":
            r({ type: "sticker", key: e.id, grouping: t, msg: e, content: a });
            break;
          case "image":
            if (null != a.viewOnceState) {
              r({
                type: "viewOnceImage",
                key: e.id,
                grouping: t,
                msg: e,
                content: a,
              });
              break;
            }
            r({ type: "image", key: e.id, grouping: t, msg: e, content: a }),
              a.caption &&
                r({
                  type: "text",
                  key: "caption-" + e.id,
                  grouping: 0,
                  msg: e,
                  content: a.caption,
                  formatting: d(e, a.caption),
                });
            break;
          case "video":
            if (null != a.viewOnceState) {
              r({
                type: "viewOnceVideo",
                key: e.id,
                grouping: t,
                msg: e,
                content: a,
              });
              break;
            }
            r({ type: "video", key: e.id, grouping: t, msg: e, content: a }),
              a.caption &&
                r({
                  type: "text",
                  key: "caption-" + e.id,
                  grouping: 0,
                  msg: e,
                  content: a.caption,
                  formatting: d(e, a.caption),
                });
            break;
          case "gif":
            r({ type: "gif", key: e.id, grouping: t, msg: e, content: a }),
              a.caption &&
                r({
                  type: "text",
                  key: "caption-" + e.id,
                  grouping: 0,
                  msg: e,
                  content: a.caption,
                  formatting: d(e, a.caption),
                });
            break;
          case "text":
            var s = a.linkPreview;
            s &&
              r({
                type: "linkPreview",
                key: "linkPreview-" + e.id,
                grouping: t,
                msg: e,
                content: s,
              }),
              r({
                type: "text",
                key: e.id,
                grouping: 0,
                msg: e,
                content: a.text,
                formatting: d(e, a.text),
              });
            break;
          case "voice":
            r({ type: "voice", key: e.id, grouping: 0, msg: e, content: a });
            break;
          case "futureproof":
          case "ciphertext":
          case "placeholder":
          case "revoked":
            r({ type: "special", key: e.id, grouping: 0, msg: e, content: a });
            break;
          case "privacy":
            n({
              type: "privacyBanner",
              key: e.id,
              grouping: 0,
              msg: e,
              content: a,
            });
            break;
          case "keyschanged":
          case "biz":
          case "ephemeral_change":
          case "ephemeral_change_fail":
          case "default-disappearing-mode":
          case "contact_block_change":
          case "gp2":
            n({
              type: "notification",
              key: e.id,
              grouping: 0,
              msg: e,
              content: a,
            });
            break;
          case "vcard":
            r({ type: "vcard", key: e.id, grouping: t, msg: e, content: a });
            break;
          case "location":
            r({
              type: "locationMap",
              key: e.id,
              grouping: t,
              msg: e,
              content: a,
            }),
              (a.name || a.address) &&
                r({
                  type: "locationName",
                  key: "location-" + e.id,
                  grouping: 0,
                  msg: e,
                  content: a,
                });
            break;
          case "group_invite":
            r({
              type: "groupInvite",
              key: e.id,
              grouping: t,
              msg: e,
              content: a,
            }),
              a.caption &&
                r({
                  type: "groupInviteCaption",
                  key: "caption-" + e.id,
                  grouping: 0,
                  msg: e,
                  content: a,
                  caption: a.caption,
                  formatting: d(e, a.caption),
                });
            break;
          case "rich_hsm":
            var i = a.richContent,
              o = a.title,
              l = a.footer,
              c = a.content,
              u = a.buttons;
            if (i)
              switch (i.type) {
                case "image":
                  r({
                    type: "image",
                    key: "hsm-image-" + e.id,
                    grouping: t,
                    msg: e,
                    content: i,
                  });
                  break;
                case "video":
                  r({
                    type: "video",
                    key: "hsm-video-" + e.id,
                    grouping: t,
                    msg: e,
                    content: i,
                  });
                  break;
                case "location":
                  r({
                    type: "locationMap",
                    key: "hsm-location-" + e.id,
                    grouping: t,
                    msg: e,
                    content: i,
                  });
                  break;
                default:
                  i.type,
                    r({
                      type: "document",
                      key: "hsm-document-" + e.id,
                      grouping: t,
                      msg: e,
                      content: i,
                    });
              }
            r({
              type: "richHsmText",
              key: "hsm-text-" + e.id,
              grouping: 0,
              msg: e,
              content: { title: null == i ? o : null, content: c, footer: l },
              formatting: d(e, a.content),
            }),
              u &&
                u.forEach((t, n) => {
                  r({
                    type: "richHsmButton",
                    key: `hsm-button-${e.id}-${n}`,
                    grouping: 0,
                    msg: e,
                    content: t,
                    buttonIndex: n,
                  });
                });
            break;
          case "document":
            r({ type: "document", key: e.id, grouping: t, msg: e, content: a });
            break;
          default:
            a.type,
              __LOG__(4)`Missing msg content type ${a.type} in msglistReducer`;
        }
      }
      function v(e) {
        switch (e) {
          case "liveLocation":
            return 302;
          case "document":
            return 301;
          case "call":
            return 300;
          case "sendPayment":
          case "requestPayment":
            return 304;
          case "sticker":
            return 305;
          case "reaction":
            return 615;
          case "pollCreation":
            return 590;
          case "pollUpdate":
            return "pollsUpdateFutureproof";
          default:
            return 303;
        }
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n(36),
        a = n(390),
        s = n(76),
        i = n(19);
      function o(e, t, n) {
        if ("rewind" === n) return 0;
        var r =
            e +
            Math.max(1, Math.min(5, Math.round(0.1 * t))) *
              ("forward" === n ? 1 : -1),
          a = Math.min(t + 1, Math.max(0, r));
        return a < 1 ? 0 : a;
      }
      function l(e, t, n, a) {
        var s = a.id;
        switch (n.type) {
          case "idle":
            t
              ? e.setCenterLabel(812, (e) => {
                  u(e, a);
                })
              : e.setCenterLabel(787, (e) => {
                  e.downloadMedia(s, "user");
                });
            break;
          case "pending":
          case "processing":
            e.setCenterLabel(761, (e) => {
              (function (e, t) {
                e.fireAndForget("backend", "cancelMedia", { msgId: t });
              })(e, s);
            });
            break;
          default:
            n.type,
              "tooBig" === n.error
                ? e.setCenterLabel(781, (e) => {
                    (0, i.e)({ title: 229, text: [r.b, 53] });
                  })
                : "noLongerExists" === n.error
                ? e.setCenterLabel(781, (e) => {
                    (0, i.e)({ title: 229, text: 499 });
                  })
                : "notEnoughSpace" === n.error
                ? e.setCenterLabel(781, (e) => {
                    (function (e, t) {
                      c(e, 541, t);
                    })(e, s);
                  })
                : "notEnoughUploadSpace" === n.error
                ? e.setCenterLabel(781, (e) => {
                    (0, i.e)({ title: 229, text: 541 });
                  })
                : "disconnected" === n.error
                ? e.setCenterLabel(781, (e) => {
                    (function (e, t) {
                      c(e, 498, t);
                    })(e, s);
                  })
                : (n.error,
                  e.setCenterLabel(812, (e) => {
                    u(e, a);
                  }));
        }
      }
      function c(e, t, n) {
        (0, i.e)({
          title: 229,
          text: t,
          onClose: () => {
            e.updateMediaStatus(n, { type: "idle" });
          },
        });
      }
      function u(e, t) {
        var n;
        "status" === t.origin
          ? e.retryStatusMsg(t.id, {
              from: "statusTab",
              sessionId: null == (n = e.statusSession) ? void 0 : n.id,
            })
          : (0, a.a)(e, t.id, t.chatJid);
      }
      function d(e, t) {
        var n = e.height || s.l,
          r = e.width || s.n,
          a = n / r,
          i = r,
          o = n,
          l = r > n !== s.e;
        return (
          a > s.m
            ? ((r = (r * s.l) / n),
              (n = s.l),
              l && ((i = (r * s.n) / n), (o = s.n)))
            : ((n = (n * s.n) / r),
              (r = s.n),
              l && ((o = (n * s.l) / r), (i = s.l))),
          "swapDimensions" === t
            ? {
                width: n,
                height: r,
                shouldBeSideways: l,
                widthSideway: o,
                heightSideway: i,
                swapDimensions: !0,
              }
            : {
                width: r,
                height: n,
                shouldBeSideways: l,
                widthSideway: i,
                heightSideway: o,
                swapDimensions: !1,
              }
        );
      }
    },
    ,
    function (e, t, n) {
      function r(e, t) {
        t &&
          (a(e, t.jobName, t.key),
          e.fireAndForget("backend", "clearUiJobStatus", { jobId: t.jobId }));
      }
      function a(e, t, n) {
        e.dispatch({ type: "CLEAR_UI_JOB", jobName: t, key: n });
      }
      function s(e, t, n) {
        var r = { type: "UI_JOB_SCHEDULED", jobId: t, jobInfo: n };
        e.dispatch(r);
      }
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = (e) => ({
        uiJobsInitialized: (t) =>
          (function (e, t) {
            e.dispatch({ type: "INIT_UI_JOBS", jobs: t });
          })(e, t.jobs),
        uiJobUpdated: (t) => {
          var n = t.jobName,
            r = t.key,
            a = t.status;
          return (function (e, t, n, r) {
            e.dispatch({
              type: "UI_JOB_UPDATED",
              jobName: t,
              key: n,
              status: r,
            });
          })(e, n, r, a);
        },
        uiJobScheduled: (t) => {
          var n = t.jobId,
            r = t.jobInfo;
          return s(e, n, r);
        },
        uiJobCleared: (t) => {
          var n = t.jobName,
            r = t.key;
          return a(e, n, r);
        },
      });
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return f;
      }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return _;
        });
      var r = n(1),
        a = n(13),
        s = n(238),
        i = n(6),
        o = n(20),
        l = n(276),
        c = n(367),
        u = n(3),
        d = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M18.403 0c.81 0 1.592.303 2.191.85l4.347 3.97A3.25 3.25 0 0126 7.22v21.46c0 1.826-1.42 3.32-3.154 3.32H3.154C1.419 32 0 30.506 0 28.681V3.318C0 1.493 1.419 0 3.154 0h15.249zm1.057 24.381H6.54a.762.762 0 00-.104 1.517l.104.007h12.92a.762.762 0 000-1.524zm0-4.571H6.54a.762.762 0 00-.104 1.516l.104.007h12.92a.762.762 0 100-1.523zm0-4.572h-4.976a.762.762 0 000 1.524h4.976a.762.762 0 000-1.524zM8.678 9.143c1.45 0 2.159 1.154 2.108 3.264l.07.002c.387 0 .7.312.7.698v3.718a.699.699 0 01-.7.699h-4.38a.699.699 0 01-.698-.7v-3.717c0-.386.313-.698.699-.698l.069-.002c-.034-2.11.683-3.264 2.132-3.264zm0 .777c-1.019 0-1.5.764-1.464 2.487h2.904c.052-1.724-.422-2.487-1.44-2.487zm10.782.747a.762.762 0 110 1.523h-4.976a.762.762 0 010-1.523h4.976z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        };
      function h(e, t, n) {
        if (e.nodeType === Node.TEXT_NODE) return e.textContent;
        if (e.nodeType !== Node.ELEMENT_NODE) return null;
        var a = e;
        switch (a.tagName.toLowerCase()) {
          case "b":
            return (0, r.f)(1, "b", null, p(a.childNodes, t), 0, null, n);
          case "i":
            return (0, r.f)(1, "i", null, p(a.childNodes, t), 0, null, n);
          case "a":
            var s = a.getAttribute("href");
            return null != s
              ? (0, r.f)(
                  1,
                  "a",
                  null,
                  p(a.childNodes, t),
                  0,
                  { href: s, "data-id": t() },
                  n
                )
              : null;
          case "br":
            return (0, r.f)(1, "br", null, null, 1, null, n);
          default:
            return null;
        }
      }
      function p(e, t) {
        if (1 === e.length) return h(e[0], t, "key");
        for (var n = [], r = 0, a = e.length; r < a; ++r) {
          var s = h(e[r], t, "" + r);
          null != s && n.push(s);
        }
        return n;
      }
      var f = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.text !== e.text || n.getNextLinkId !== e.getNextLinkId)
            );
          }
          render() {
            return (
              (e = this.props.text),
              (t = this.props.getNextLinkId),
              ((n = document.createElement("div")).innerHTML = e),
              p(n.childNodes, t)
            );
            var e, t, n;
          }
        },
        g = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return n !== e && n.svgIcon !== e.svgIcon;
          }
          render() {
            var e = this.props.svgIcon;
            return (
              (e &&
                (function (e) {
                  var t = document.createElement("div");
                  t.innerHTML = e;
                  var n = t.children;
                  if (1 !== n.length)
                    return (
                      __LOG__(
                        4
                      )`UserNotice: invalid SVG icon: only one root element should be present`,
                      null
                    );
                  var a = n[0];
                  if ("svg" !== a.tagName.toLowerCase())
                    return (
                      __LOG__(
                        4
                      )`UserNotice: invalid SVG icon: root element needs to be an SVG`,
                      null
                    );
                  try {
                    (function e(t) {
                      if (
                        "script" === t.tagName.toLowerCase() ||
                        "style" === t.tagName.toLowerCase()
                      )
                        throw new Error("Invalid SVG child tag: " + t.tagName);
                      for (
                        var n = t.attributes, r = 0, a = n.length;
                        r < a;
                        ++r
                      ) {
                        var s = n[r];
                        if ("on" === s.name.substr(0, 2).toLowerCase())
                          throw new Error(
                            "Invalid SVG child attribute: " + s.name
                          );
                      }
                      for (var i = t.children, o = 0, l = i.length; o < l; ++o)
                        e(i[o]);
                    })(a);
                  } catch (e) {
                    return __LOG__(4)`UserNotice: invalid SVG icon: ${e}`, null;
                  }
                  for (
                    var s = {},
                      i = /[:-]([a-zA-Z0-1]{1})/g,
                      o = a.attributes,
                      l = 0,
                      c = o.length;
                    l < c;
                    ++l
                  ) {
                    var u = o[l];
                    "width" === u.name ||
                      "height" === u.name ||
                      (s[u.name.replace(i, (e, t) => t.toUpperCase())] =
                        u.value);
                  }
                  return (0, r.i)(
                    (0, r.f)(
                      32,
                      "svg",
                      null,
                      null,
                      1,
                      Object.assign({}, s, {
                        dangerouslySetInnerHTML: { __html: a.innerHTML },
                      })
                    )
                  );
                })(e)) ||
              (0, r.b)(2, d)
            );
          }
        };
      function v(e, t, n) {
        var r = t.url,
          a = (0, s.a)(r, "whatsapp", i.r.get(), [(0, o.d)().lg]);
        a ? (0, c.a)(e, r, a, r, { onOpen: n }) : ((0, l.a)(e, r), n());
      }
      function m(e, t, n, r) {
        e.fireAndForget("backend", "acceptUserNotice", {
          id: t,
          version: n,
          ts: (0, u.E)(),
          source: r,
        });
      }
      function b(e) {
        e.dispatch({ type: "USER_NOTICE_UPDATED", userNotice: void 0 });
      }
      function _(e) {
        return e.userNotice;
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return g;
        });
      var r = n(1),
        a = (n(13), n(20)),
        s = n(32),
        i = n(48),
        o = n(278),
        l = n(97),
        c = n(14);
      function u(e, t, n) {
        var a,
          l,
          c = !!e.fromMe,
          u = e.author || null;
        switch (t.subtype) {
          case "add":
            if (((l = t.subjectIsMe), (a = g(n, t.participants, l))))
              return c ? [a, 127] : u ? [(0, s.e)(n, u), a, 121] : [a, 115];
            if (l) return u ? [(0, s.e)(n, u), 122] : 410;
            var d = (0, s.e)(n, t.participants[0]);
            return c ? [d, 126] : u ? [(0, s.e)(n, u), d, 120] : [d, 114];
          case "restrict":
            if (t.restrict) {
              if (c) return 422;
              if (u) return [(0, s.e)(n, u), 133];
              throw new Error("Authorless restrict");
            }
            if (c) return 421;
            if (u) return [(0, s.e)(n, u), 132];
            throw new Error("Authorless unrestrict");
          case "remove":
            if (((l = t.subjectIsMe), (a = g(n, t.participants, l))))
              return c ? [a, 129] : u ? [(0, s.e)(n, u), a, 124] : [a, 119];
            if (l) return u ? [(0, s.e)(n, u), 125] : 415;
            var p = (0, s.e)(n, t.participants[0]);
            return c ? [p, 128] : u ? [(0, s.e)(n, u), p, 123] : [p, 118];
          case "leave":
            return t.subject ? [(0, s.e)(n, t.subject), 117] : 413;
          case "announce":
            if (t.announce) {
              if (c) return 340;
              if (u) return [(0, s.e)(n, u), 86];
              throw new Error("Authorless announce on");
            }
            if (c) return 339;
            if (u) return [(0, s.e)(n, u), 85];
            throw new Error("Authorless announce off");
          case "invite":
            return t.subject ? [(0, s.e)(n, t.subject), 116] : 412;
          case "accept":
            return t.subject
              ? c
                ? [(0, s.e)(n, t.subject), 112]
                : [(0, s.e)(n, t.subject), 113]
              : 410;
          case "picture_remove":
            if (c) return 417;
            if (u) return [(0, s.e)(n, u), 131];
            throw new Error("Authorless picture_remove");
          case "picture":
            if (c) return 416;
            if (u) return [(0, s.e)(n, u), 130];
            throw new Error("Authorless picture msg");
          case "demote":
            return (
              t.subjectIsMe ||
                __LOG__(4)`Demote message shown to other than me`,
              411
            );
          case "revoke_invite":
            if (c) return 405;
            if (u) return [(0, s.e)(n, u), 107];
            throw new Error("Authorless revoke_invite");
          case "delete":
            return 351;
          case "closed":
            return 446;
          case "create":
            var f = t.title;
            if (c) return f ? [(0, i.b)(f), 95] : 343;
            if (u) {
              var v = (0, s.e)(n, u);
              return f ? [v, (0, i.b)(f), 93] : [v, 94];
            }
            return f ? [(0, i.b)(f), 92] : 344;
          case "subject":
            return c
              ? [(0, i.b)(t.title), 136]
              : u
              ? [(0, s.e)(n, u), (0, i.b)(t.title), 135]
              : [(0, i.b)(t.title), 134];
          case "description":
            return c ? 346 : u ? [(0, s.e)(n, u), 96] : 345;
          case "description_remove":
            if (c) return 347;
            if (u) return [(0, s.e)(n, u), 97];
            throw new Error("Authorless description remove");
          case "locked":
            if (c) return 409;
            if (u) return [(0, s.e)(n, u), 110];
            throw new Error("Authorless lock");
          case "unlocked":
            if (c) return 431;
            if (u) return [(0, s.e)(n, u), 137];
            throw new Error("Authorless unlock");
          case "promote":
            return (
              t.subjectIsMe ||
                __LOG__(4)`Promote message shown to other than me`,
              414
            );
          case "modify":
            if (u) return [(0, s.e)(n, u), 111];
            throw new Error("Authorless modify");
          case "ephemeral":
            return h(e, n, t.expiration);
          case "growth_locked":
            return 352;
          case "growth_unlocked":
            return 356;
          case "ephemeral_authorless":
            return t.expiration
              ? [(0, r.b)(2, o.a, { value: t.expiration }), 75]
              : 286;
          default:
            throw (t.subtype, new Error("Unreachable code"));
        }
      }
      function d(e) {
        return e.blocked ? 59 : 949;
      }
      function h(e, t, n) {
        var a = n ? (0, r.b)(2, o.a, { value: n }, "duration") : null;
        if (e.fromMe) return a ? [a, 78] : 288;
        if (e.author) {
          var i = (0, s.e)(t, e.author);
          return a ? [a, i, 73] : [i, 72];
        }
        return a ? [a, 75] : 286;
      }
      function p(e, t, n) {
        var r = (0, s.e)(e, t);
        return null == n || n > c.i ? [r, 77] : [r, 76];
      }
      function f(e, t, n, a) {
        var i = (0, r.b)(2, o.a, { value: n }, "duration");
        return a === l.a.INITIATED_BY_ME ? [i, 51] : [(0, s.e)(t, e), i, 52];
      }
      function g(e, t, n) {
        return (n && t.length) || t.length >= 2
          ? (0, a.h)(
              t.map((t) =>
                (0, r.b)(2, s.a, { contacts: e, jid: t, prefer: "short" }, t)
              ),
              n
            )
          : null;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return i;
        });
      var r = 0,
        a = 1,
        s = 2;
      function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            (e.meta.fromMe && !0 !== t ? 1 : 0) +
            (null != e.starred ? 1 : 0) +
            (null != e.kept ? 1 : 0);
        switch (n) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 3;
        }
        return 0;
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      function r(e, t, n) {
        e.dispatch({ type: "SAVE_DRAFT", chatJid: t, draft: n });
      }
      function a(e, t) {
        e.dispatch({ type: "CLEAR_DRAFT", chatJid: t });
      }
      function s(e, t, n) {
        e.dispatch({ type: "SAVE_DRAFT_QUOTE", chatJid: t, quote: n });
      }
      function i(e, t) {
        e.dispatch({ type: "CLEAR_DRAFT_QUOTE", chatJid: t });
      }
      function o(e, t, n) {
        e.dispatch({ type: "SAVE_DRAFT_LINK", chatJid: t, link: n });
      }
      function l(e, t) {
        e.dispatch({ type: "CLEAR_DRAFT_LINK", chatJid: t });
      }
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return l;
        });
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var r = n(3),
        a = n(70),
        s = new Map();
      function i(e, t, n) {
        var r = s.get(t);
        r
          ? (__LOG__(
              2
            )`UiEphemeralCleaner::openChatWhenReady cleaning chat ${t}`,
            e.spinUntilReady(
              r
                .catch(
                  (e) => (
                    __LOG__(4)`openChatWhenReady error ${e}`,
                    SEND_LOGS("UiEphemeralCleaner-openChatWhenReady"),
                    n(),
                    null
                  )
                )
                .then(() => (n(), null)),
              788,
              null
            ))
          : n();
      }
      var o = null;
      function l(e) {
        __LOG__(2)`UiEphemeralCleaner::startUiEphemeralCleaner invoked`,
          o ||
            (o = new (class {
              constructor(e) {
                (this.AX = !1),
                  (this.AY = new a.a(() => {
                    this.AZ();
                  })),
                  (this.AV = e),
                  this.AY.forceRunNow();
              }
              update(e) {
                __LOG__(2)`UiEphemeralCleaner::update ${e}`,
                  this.AY.onOrBefore((0, r.h)(e));
              }
              setCurrentChatId(e) {
                e !== this.AW &&
                  ((this.AW = e),
                  this.AX &&
                    (__LOG__(2)`UiEphemeralCleaner:: Resuming fetch`,
                    (this.AX = !1),
                    this.AY.forceRunNow()));
              }
              AZ() {
                return (
                  __LOG__(2)`UiEphemeralCleaner::_purgeNow`,
                  this.AV.getExpiredMessages()
                    .then((e) => {
                      if (0 !== e.size) {
                        var t = [];
                        e.forEach((e, n) => {
                          if (s.has(n))
                            __LOG__(
                              2
                            )`UiEphemeralCleaner::_purgeNow chat ${n} already in progress`;
                          else if (n === this.AW)
                            __LOG__(
                              2
                            )`UiEphemeralCleaner::_purgeNow skipping chat ${n}`,
                              (this.AX = !0);
                          else {
                            var r = this.AV.deleteExpiredMsgs(n, e).then(() => {
                              s.delete(n);
                            });
                            s.set(n, r), t.push(r);
                          }
                        });
                        var n = t.length;
                        return (
                          n > 0 &&
                            __LOG__(
                              2
                            )`UiEphemeralCleaner::_purgeNow ${n} chats cleaned`,
                          Promise.all(t)
                        );
                      }
                    })
                    .then(() => {
                      if (!this.AX)
                        return (
                          __LOG__(
                            2
                          )`UiEphemeralCleaner::_purgeNow fetching next timestamp`,
                          this.AV.getNextExpirationTimestamp().then((e) => {
                            null != e && this.update(e);
                          })
                        );
                      __LOG__(2)`UiEphemeralCleaner::_purgeNow pausing fetch`;
                    })
                );
              }
            })(e));
      }
      function c(e) {
        if (!o)
          return (
            __LOG__(
              4
            )`UiEphemeralCleaner::addNewEphemeralTimestamp not initialized`,
            void SEND_LOGS(
              "UiEphemeralCleaner-addNewEphemeralTimestamp-uninitialized"
            )
          );
        o.update(e);
      }
      function u(e) {
        if (!o)
          return (
            __LOG__(4)`UiEphemeralCleaner::setCurrentChatId not initialized`,
            void SEND_LOGS("UiEphemeralCleaner-setCurrentChatId-uninitialized")
          );
        o.setCurrentChatId(e);
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "c", function () {
        return h;
      }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var r = n(1),
        a = n(13),
        s = n(54),
        i = n(164),
        o = n(57),
        l = n(19),
        c = n(100),
        u = class extends a.a {
          constructor() {
            var e;
            return (e = super(...arguments)), (this.Jz = !1), e;
          }
          componentDidMount() {
            this.Jz = !0;
            var e = this.props,
              t = e.backend,
              n = e.phoneNumber,
              r = e.text;
            if (!(0, o.e)(n)) return (0, l.a)(), void (0, l.e)({ text: 562 });
            t.sendAndReceive("backend", "contactQuerySync", {
              rawPhoneNumber: n,
            }).then((e) => {
              if (this.Jz)
                if (((0, l.a)(), "not-found" === e))
                  (0, l.e)({ text: [(0, o.c)(n), 167] });
                else if ("offline" === e)
                  (0, l.e)({ title: 563, text: [(0, o.c)(n), 166] });
                else if ("invalid" === e) (0, l.e)({ text: 562 });
                else {
                  var a = null;
                  r &&
                    (a = { text: r, waMeInfo: { origText: r, urlNumber: !0 } }),
                    (0, c.a)(t, e, "newest", a, void 0);
                }
            });
          }
          componentWillUnmount() {
            this.Jz = !1;
          }
          render() {
            return (0, r.b)(2, i.a, { type: "dialog" });
          }
        },
        d = (0, s.c)(u, (e, t, n) => ({
          phoneNumber: n.phoneNumber,
          text: n.text,
          backend: t,
          contacts: e.contacts,
        }));
      function h(e, t) {
        var n = t.pathname.substring(1) || null,
          a = t.searchParams.get("text");
        null != n
          ? (0, l.h)(
              { title: 564, left: 761, onSoftLeft: "CLOSE", onBack: "CLOSE" },
              (0, r.b)(2, d, { phoneNumber: n, text: a })
            )
          : null == a || 0 === a.length
          ? (0, l.e)({ text: 561 })
          : e.openScreen("SHARE_TEXT_SCREEN", { text: a, fromWaMe: !0 });
      }
      var p = "https://chat.whatsapp.com/";
      function f(e) {
        var t = new RegExp(`^${p}(?:invite/)?([0-9A-Za-z]+)$`, "i").exec(e);
        return t ? t[1] : null;
      }
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return g;
      }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "d", function () {
          return y;
        });
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(20),
        l = n(18),
        c = n(255),
        u = n(14),
        d = n(3),
        h = n(54),
        p = n(327),
        f = a.f((e, t) =>
          (0, r.f)(
            1,
            "div",
            (0, i.a)("Fl GG GC GI GE", e.selected && "Fn"),
            e.children,
            0,
            null,
            null,
            t
          )
        ),
        g = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Jp = a.e()),
              (this.Jq = a.e()),
              (this.state = { didMount: !1 }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e && (n.items !== e.items || n.selected !== e.selected)) ||
              (r !== t && r.didMount !== t.didMount)
            );
          }
          componentDidMount() {
            this.Jr(), this.setState({ didMount: !0 });
          }
          componentDidUpdate() {
            this.Jr();
          }
          Jr() {
            var e = this.Jp.current,
              t = this.Jq.current;
            if (null != e && null != t) {
              var n = t.getBoundingClientRect(),
                r = n.width,
                a = n.left - (self.innerWidth - r) / 2;
              e.scrollLeft = e.scrollLeft + a;
            }
          }
          Js() {
            return this.props.items.map((e) => {
              var t = e.key === this.props.selected;
              return (0, r.b)(
                2,
                f,
                { selected: t, children: e.label },
                e.key,
                t ? this.Jq : null
              );
            });
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, i.a)("Fk", !this.state.didMount && "Fm"),
              this.Js(),
              0,
              null,
              null,
              this.Jp
            );
          }
        },
        v = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { delayingTabOpened: !1 }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e &&
                (n.isLoaded !== e.isLoaded ||
                  n.tabLastOpened !== e.tabLastOpened ||
                  n.lastUnreadStatusMsg !== e.lastUnreadStatusMsg)) ||
              (r !== t && r.delayingTabOpened !== t.delayingTabOpened)
            );
          }
          componentDidMount() {
            var e = this.props,
              t = e.backend,
              n = e.lastUnreadStatusMsg;
            this.Jv(t, n), this.Jw();
          }
          componentDidUpdate(e) {
            var t = this.props,
              n = t.backend,
              r = t.lastUnreadStatusMsg,
              a = t.isLoaded;
            e.isLoaded !== a && a
              ? (this.Jv(n, r), this.Jw())
              : e.lastUnreadStatusMsg !== r && (this.Jv(n, r), this.Jx());
          }
          componentWillUnmount() {
            clearTimeout(this.Jt), clearTimeout(this.Ju);
          }
          Jw() {
            var e = this.props,
              t = e.backend,
              n = e.isLoaded;
            !this.state.delayingTabOpened &&
              n &&
              (this.setState({ delayingTabOpened: !0 }),
              clearTimeout(this.Ju),
              (this.Ju = setTimeout(() => {
                t.statusTabOpened(), this.setState({ delayingTabOpened: !1 });
              }, 1e3)));
          }
          Jx() {
            var e = this.props,
              t = e.backend,
              n = e.isLoaded;
            !this.state.delayingTabOpened &&
              n &&
              (clearTimeout(this.Ju),
              (this.Ju = setTimeout(() => {
                t.statusTabOpened();
              }, 1e3)));
          }
          Jv(e, t) {
            if (null != t) {
              clearTimeout(this.Jt);
              var n = (0, d.C)(t.ts, t.campaignDuration || u.Q) + 200;
              this.Jt = setTimeout(() => {
                __LOG__(2)`Status Tab: last unread status expired.`,
                  e.loadLastUnreadStatusMsg(),
                  (this.Jt = void 0);
              }, n);
            }
          }
          render() {
            var e,
              t = this.props,
              n = t.lastUnreadStatusMsg,
              a = t.tabLastOpened,
              s = t.isLoaded;
            return (
              (e =
                !(!this.state.delayingTabOpened && s) &&
                null != n &&
                (null == a || n.ts > a)),
              (0, r.f)(
                1,
                "span",
                e ? "Fp" : null,
                (0, r.b)(2, l.b, { l10n: 900 }),
                2
              )
            );
          }
        },
        m = (0, h.c)(v, (e, t) => ({
          tabLastOpened: e.status.tabLastOpened,
          lastUnreadStatusMsg: e.status.lastUnreadMsg,
          isLoaded:
            null != e.tab && "status" === e.tab.key && null != e.tab.data,
          backend: t,
        })),
        b = {
          chats: { key: "chats", label: (0, r.b)(2, l.b, { l10n: 899 }) },
          status: {
            key: "status",
            label: (0, r.b)(2, m),
            onOpen: (e) => {
              e.statusSession = new p.a();
            },
            onClose: (e) => {
              var t;
              null == (t = e.statusSession) || t.stopStatusSession(),
                (e.statusSession = null);
            },
          },
          calls: {
            key: "calls",
            label: (0, r.b)(2, l.b, { l10n: 898 }),
            onOpen: (e) => e.loadCallLogs(),
            onClose: (e) => e.closeCallLogs(),
          },
          camera: {
            key: "camera",
            label: (0, r.b)(2, c.a, { className: "Fo" }),
          },
        },
        _ = ["camera", "chats", "status", "calls"];
      function S(e, t, n, r) {
        var a = y(n, r);
        if (a) {
          var s = a.items,
            i = a.selected,
            l = s.findIndex((e) => e.key === i);
          if (
            l < 0 &&
            (__LOG__(3)`Couldn't find tab ${i}. Adding softkeys for 'chats'`,
            (l = s.findIndex((e) => "chats" === e.key)) < 0)
          )
            return (
              __LOG__(4)`Couldn't find tab ${i} nor 'chats'`,
              void SEND_LOGS("unknown-tab")
            );
          var c = l > 0 ? s[l - 1] : null,
            u = l < s.length - 1 ? s[l + 1] : null;
          (0, o.g)()
            ? (e.setLeftArrow(() => d(u)), e.setRightArrow(() => d(c)))
            : (e.setLeftArrow(() => d(c)), e.setRightArrow(() => d(u))),
            "chats" !== i && e.setBack(() => d(b.chats));
        }
        function d(e) {
          null != e && t.openTab(e.key);
        }
      }
      var E = new Map();
      function y(e, t) {
        var n = ((e, t) => `${e}${t.toString()}`)(e.key, t);
        if (!E.has(n)) {
          var r = _;
          t || (r = r.filter((e) => "calls" !== e)),
            E.set(
              n,
              r.length > 1
                ? { items: r.map((e) => b[e]), selected: e.key }
                : null
            );
        }
        return E.get(n);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return s;
        });
      var r = "BM GI GE",
        a = "BN BM GI GE",
        s = "BO";
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return p;
      }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a),
        i = n(32),
        o = n(103),
        l = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            [
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "10",
                cy: "16",
                r: "1.5",
              }),
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "16",
                cy: "16",
                r: "1.5",
              }),
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "22",
                cy: "16",
                r: "1.5",
              }),
            ],
            4,
            { viewBox: "0 0 32 32" }
          );
        },
        c = n(18),
        u = "IW",
        d = "IX GK",
        h = "IY GH GC GI GE",
        p = (0, n(54).c)(
          function (e) {
            var t = e.className,
              n = e.meJid;
            return (0, r.f)(
              1,
              "div",
              (0, s.a)(u, t),
              [
                (0, r.b)(2, o.c, { jid: n, className: d }),
                (0, r.b)(2, c.b, { l10n: 168, className: h }),
              ],
              4
            );
          },
          (e, t, n) => ({ meJid: e.user.jid, className: n.className })
        );
      function f(e) {
        var t = e.contact,
          n = e.className;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)(u, n),
          [
            (0, r.b)(2, o.c, { jid: t.jid, className: d }),
            (0, r.b)(2, i.a, { className: h, contact: t }),
          ],
          4
        );
      }
      function g(e) {
        var t = e.className,
          n = e.total;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)(u, t),
          [
            (0, r.f)(
              1,
              "div",
              "IZ",
              [
                (0, r.f)(1, "div", (0, s.a)(d, "Ia"), (0, o.b)(), 0),
                1 !== n
                  ? (0, r.f)(1, "div", (0, s.a)(d, "Ia"), (0, o.b)(), 0)
                  : null,
              ],
              0
            ),
            (0, r.b)(2, c.b, { className: h, l10n: [n, 105] }),
          ],
          4
        );
      }
      function v(e) {
        var t = e.className;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)(u, t),
          (0, r.f)(1, "div", (0, s.a)(d, "Ib"), (0, r.b)(2, l), 2),
          2
        );
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return s.a;
      }),
        n.d(t, "b", function () {
          return s.b;
        }),
        n.d(t, "c", function () {
          return S;
        });
      var r,
        a,
        s = n(324),
        i = n(1),
        o = n(13),
        l = n(70),
        c = n(248),
        u = n(22),
        d = n.n(u),
        h = n(18),
        p = n(148),
        f = n(56),
        g = n(76),
        v = n(117),
        m = n(73),
        b = class extends o.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.KF = o.e()),
              (this.state = { selected: !1 }),
              (this.KG = (e) => {
                e && (this.KF.current = e);
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            return (0, m.a)(
              { prev: this.props, next: e, specificField: "deps" },
              { prev: this.state, next: t }
            );
          }
          getElement() {
            return this.KF.current;
          }
          toggleSelect(e) {
            this.setState({ selected: e });
          }
          getClientRect() {
            return this.KF.current
              ? this.KF.current.getBoundingClientRect()
              : null;
          }
          render() {
            var e = this.props,
              t = e.item,
              n = e.index,
              r = e.items,
              a = e.renderItem,
              s = this.state.selected;
            return (0, i.f)(
              1,
              "div",
              null,
              a(t, s, n, r),
              0,
              null,
              null,
              this.KG
            );
          }
        },
        _ =
          ((r = class extends o.a {
            static getDerivedStateFromProps(e, t) {
              var n = (0, m.c)(e, t);
              return (
                null != n &&
                  null != n.status &&
                  n.status.scrolling &&
                  (t.start > n.status.index || t.end <= n.status.index) &&
                  ((n.start = Math.max(
                    n.status.index - t.itemsOnScreen + 1,
                    0
                  )),
                  (n.end = n.start + t.itemsOnScreen)),
                n
              );
            }
            constructor(e) {
              super(e), a.call(this);
              var t =
                  g.p +
                  g.q +
                  (null != e.prefilledHeight ? e.prefilledHeight : 0),
                n = Math.ceil((g.l - t) / e.estimatedItemHeight);
              (this.state = Object.assign({}, (0, m.j)(e), {
                largeText: navigator.largeTextEnabled,
                start: 0,
                end: n,
                itemsOnScreen: n,
              })),
                null != this.state.status.index &&
                  this.state.status.index > 0 &&
                  ((this.state.start = Math.max(
                    this.state.status.index - n + 1,
                    0
                  )),
                  (this.state.end = this.state.start + n)),
                null != e.search &&
                  (0, m.b)(e.search) > 0 &&
                  (this.Ji = new l.a(this.onSearchDidChange));
            }
            componentDidMount() {
              if (void 0 !== this.state.status.index) {
                var e = this.Jk(this.state.status.index);
                null != e &&
                  null != this.Jg[e] &&
                  (this.Jg[e].toggleSelect(!0), this.scrollSelectedIntoView());
              }
              this.props.onStatus && this.props.onStatus(this.state.status),
                document.addEventListener("focus_input", this.Jl),
                self.addEventListener("largetextenabledchanged", this.Jm);
            }
            shouldComponentUpdate(e, t) {
              return (0, m.a)(
                { prev: this.props, next: e, specificField: "deps" },
                { prev: this.state, next: t }
              );
            }
            componentDidUpdate(e, t) {
              if (
                this.state.status.index !== t.status.index ||
                this.state.items !== t.items
              ) {
                if (void 0 !== t.status.index) {
                  var n = this.Jk(t.status.index);
                  null != n &&
                    null != this.Jg[n] &&
                    this.Jg[n].toggleSelect(!1);
                }
                if (void 0 !== this.state.status.index) {
                  var r = this.Jk(this.state.status.index);
                  null != r &&
                    null != this.Jg[r] &&
                    this.Jg[r].toggleSelect(!0);
                }
                this.scrollSelectedIntoView();
              }
              (0, m.l)(this.state.status, t.status, this.props.onStatus);
            }
            componentWillUnmount() {
              this.Ji && this.Ji.cancel(),
                cancelAnimationFrame(this.Jh),
                document.removeEventListener("focus_input", this.Jl),
                self.removeEventListener("largetextenabledchanged", this.Jm);
            }
            clearSearch() {
              this.setState({ filteredItems: null });
            }
            isSearching() {
              return (0, m.k)(this.state);
            }
            getSelected() {
              var e = (0, m.e)(this.state.status),
                t = this.getSelectedNode();
              return null != e && t ? { item: e, node: t } : null;
            }
            getSelectedNode() {
              if (null != this.state.status.index) {
                var e = this.Jk(this.state.status.index);
                return e ? this.Jg[e] : null;
              }
              return null;
            }
            goToSearch() {
              var e = (0, m.i)(this.props);
              e && this.setState(this.Jn(e));
            }
            Jn(e) {
              var t = null,
                n = null;
              if (null != e.status.index) {
                var r = e.status.index;
                r >= this.state.end
                  ? r < this.state.end + this.state.itemsOnScreen
                    ? ((t = Math.max(
                        this.state.end - this.state.itemsOnScreen,
                        0
                      )),
                      (n = this.state.end + this.state.itemsOnScreen))
                    : ((n = r + 1),
                      (t = Math.max(n - this.state.itemsOnScreen, 0)))
                  : r < this.state.start &&
                    (r >= this.state.start - this.state.itemsOnScreen
                      ? ((t = Math.max(
                          this.state.start - this.state.itemsOnScreen,
                          0
                        )),
                        (n = this.state.start + this.state.itemsOnScreen))
                      : (n = (t = Math.max(r, 0)) + this.state.itemsOnScreen));
              }
              return (
                e.status.searching && ((t = 0), (n = this.state.itemsOnScreen)),
                null != t && null != n
                  ? Object.assign({}, e, { start: t, end: n })
                  : e
              );
            }
            scrollSelectedIntoView() {
              var e = this.state.status;
              if (e.searching)
                this.scrollIntoView(this.Jf.current, "start", !0);
              else if (e.scrolling) {
                var t = this.props.keyOf(e.item);
                null != e.index &&
                  null != this.Jg[t] &&
                  this.scrollIntoView(
                    this.Jg[t].getElement(),
                    e.goingDown ? "end" : "start"
                  );
              }
            }
            scrollIntoView(e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              e && (0, p.e)(e, { block: t, force: n });
            }
            cacheListRowRef(e, t) {
              (this.Jg[t] = e || null),
                null != e &&
                  null != this.state.status.index &&
                  this.Jk(this.state.status.index) === t &&
                  (e.toggleSelect(!0), this.scrollSelectedIntoView());
            }
            renderSearch() {
              if (null == this.props.search) return null;
              var e = !0 === this.state.status.searching,
                t = !e;
              return (0, i.f)(
                1,
                "div",
                (0, d.a)(v.g, e && v.h),
                [
                  (0, i.b)(2, c.a, {
                    forwardedRef: this.Jj,
                    hasFocusPriority: !1,
                    className: t ? void 0 : v.d,
                  }),
                  (0, i.b)(2, c.a, {
                    hasFocusPriority: !0,
                    onChange: this.onSearchChange,
                    className: t ? v.c : v.f,
                  }),
                ],
                4,
                null,
                "search",
                this.Jf
              );
            }
            render() {
              var e = this.props,
                t = this.state;
              if (0 === t.items.length)
                return null != e.emptyLabel
                  ? (0, i.f)(
                      1,
                      "div",
                      v.a,
                      (0, i.b)(2, h.b, { l10n: e.emptyLabel }),
                      2
                    )
                  : null;
              var n = null;
              if (
                null != e.search &&
                null != t.filteredItems &&
                0 === t.filteredItems.length
              )
                n = (0, i.f)(
                  1,
                  "div",
                  v.b,
                  (0, i.b)(2, h.b, { l10n: e.search.emptyLabel }),
                  2
                );
              else {
                for (
                  var r = (0, m.d)(t),
                    a = Math.max(t.start, 0),
                    s = Math.min(r.length, t.end),
                    o = [],
                    l = a;
                  l < s;
                  l++
                )
                  o.push(
                    this.renderRow(
                      l,
                      this.props.keyOf(r[l]),
                      r,
                      this.props.deps
                    )
                  );
                n = o;
              }
              return (0, i.f)(
                1,
                "div",
                (0, d.a)(v.e, e.className, "Hs"),
                [this.renderSearch(), n],
                0
              );
            }
          }),
          (a = function () {
            (this.Jf = o.e()),
              (this.Jg = {}),
              (this.Ji = null),
              (this.Jj = o.e()),
              (this.Jl = () => {
                this.scrollSelectedIntoView();
              }),
              (this.Jm = () => {
                this.setState({ largeText: navigator.largeTextEnabled });
              }),
              (this.goTo = (e) => {
                var t = (0, m.f)(e, this.state, this.props);
                t && this.setState(this.Jn(t));
              }),
              (this.goToPrevious = () => {
                cancelAnimationFrame(this.Jh),
                  (this.Jh = requestAnimationFrame(() => {
                    var e = (0, m.h)(this.state, this.props);
                    e && this.setState(this.Jn(e));
                  }));
              }),
              (this.goToNext = () => {
                cancelAnimationFrame(this.Jh),
                  (this.Jh = requestAnimationFrame(() => {
                    var e = (0, m.g)(this.state, this.props);
                    e && this.setState(this.Jn(e));
                  }));
              }),
              (this.Jk = (e) => {
                var t = (0, m.d)(this.state);
                return t.length <= e ? null : this.props.keyOf(t[e]);
              }),
              (this.onSearchDidChange = (e) => {
                if (e) {
                  if (this.props.search) {
                    var t = e;
                    this.setState((e, n) => {
                      var r = n.search;
                      return (
                        r && {
                          searchInput: t,
                          filteredItems: r.filter(t, e.items),
                        }
                      );
                    });
                  }
                } else this.clearSearch();
              }),
              (this.onSearchChange = (e) => {
                var t = this.props.search;
                if (null != t) {
                  var n = e.trim();
                  this.Ji
                    ? this.Ji.debounce((0, m.b)(t), n)
                    : this.onSearchDidChange(n),
                    this.Jj.current && this.Jj.current.setValue(n),
                    this.setState({ searchInput: n }),
                    this.goToSearch();
                }
              }),
              (this.renderRow = (e, t, n, r) =>
                (0, i.b)(
                  2,
                  b,
                  {
                    index: e,
                    itemKey: t,
                    item: n[e],
                    items: n,
                    largeText: this.state.largeText,
                    renderItem: this.props.renderItem,
                    deps: r,
                  },
                  t,
                  (e) => this.cacheListRowRef(e, t)
                ));
          }),
          r),
        S = class extends f.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Jo = o.e()),
              (this.goToPrevious = () => {
                var e = this.Jo.current;
                e && e.goToPrevious();
              }),
              (this.goToNext = () => {
                var e = this.Jo.current;
                e && e.goToNext();
              }),
              (this.goTo = (e) => {
                var t = this.Jo.current;
                t && t.goTo(e);
              }),
              e
            );
          }
          shouldComponentUpdate(e) {
            return (0, m.a)({
              next: e,
              prev: this.props,
              specificField: "deps",
            });
          }
          isSearching() {
            var e = this.Jo.current;
            return null != e && e.isSearching();
          }
          getSelected() {
            var e = this.Jo.current;
            if (null != e) return e.getSelected();
          }
          addSoftKeys(e, t) {
            var n;
            e.setUpDownArrows(this.goToPrevious, this.goToNext);
            var r = this.props.addSearchSoftKeys;
            r &&
              (null == (n = this.Jo.current)
                ? void 0
                : n.state.status.searching) &&
              r(e, t);
          }
          render() {
            return (0, i.i)(
              (0, i.b)(2, _, Object.assign({}, this.props), null, this.Jo)
            );
          }
        };
    },
    function (e, t, n) {
      n.d(t, "d", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "h", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n(40),
        a = n(31),
        s = n.n(a),
        i = n(6),
        o = n(23),
        l = n(14);
      function c(e, t) {
        var n,
          a = null == (n = (0, r.c)(e, t)) ? void 0 : n.ephemeral;
        return null != a && a.expiration > l.i;
      }
      function u(e, t) {
        var n;
        if ("ONE_TO_ONE" === e.type && t[e.jid]) {
          var r = null == (n = t[e.jid]) ? void 0 : n.ephemeral;
          if (null != (null == r ? void 0 : r.notificationTs))
            return (
              r && {
                expiration: r.expiration || l.i,
                notificationTs: r.notificationTs,
              }
            );
        }
      }
      function d(e, t) {
        var n = e.type,
          r = e.msg;
        switch (n) {
          case "text":
          case "voice":
          case "video":
          case "gif":
          case "vcard":
          case "image":
          case "sticker":
          case "richHsmText":
          case "richHsmButton":
          case "locationMap":
          case "locationName":
          case "groupInvite":
          case "groupInviteCaption":
          case "document":
          case "viewOnceImage":
          case "viewOnceVideo":
            if ("text" === n && r.content.caption) return !1;
            var a = t.expiration,
              i = t.notificationTs,
              o = r.expiration || l.i;
            return i < r.ts && a !== o;
          case "quote":
          case "quoteGroup":
          case "linkPreview":
          case "special":
            return !1;
          default:
            return (0, s.a)(n), !1;
        }
      }
      function h() {
        i.i.set(!0);
      }
      function p(e, t) {
        i.i.get()
          ? e.openScreen("EPHEMERAL_SETTINGS", { chat: t })
          : e.openScreen("EPHEMERAL_NUX", { chat: t });
      }
      function f(e, t, n) {
        i.i.get() ||
          (("GROUP" === n.type
            ? null != n.groupInfo.expiration && n.groupInfo.expiration > l.i
            : c(n.jid, t)) &&
            e.openScreen("EPHEMERAL_NUX", { chat: n, proactive: !0 }));
      }
      function g(e, t) {
        if ((0, r.h)(e, t)) return !1;
        if ("ONE_TO_ONE" === e.type) return !0;
        e.type;
        var n = e.groupInfo;
        return (
          !!n.isAdmin ||
          ((0, o.a)("ephemeral_allow_group_members") && !n.locked)
        );
      }
      function v(e) {
        var t = Array.from(e).sort();
        return t.reverse(), t.push(l.i), t;
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return g;
        });
      var r,
        a,
        s,
        i,
        o = n(13),
        l = { sentinal: "NO_CHILD" };
      function c(e) {
        return e;
      }
      var u = "standard",
        d = class {
          constructor(e) {
            (this.Ee = new Set()),
              (this.selected = null),
              (this.Eg = null),
              (this.Eh = null),
              (this.Ef = e);
          }
          markChildUpdating(e) {
            var t = this.Ee,
              n = 0 === t.size && !this.Eh;
            (this.Eh = null),
              t.add(e),
              n && ((this.Eg = null), this.Ef.markChildrenUpdating());
          }
          markChildUpdated(e, t, n) {
            e === this.selected
              ? t
                ? (this.Eg = n ? e : null)
                : this.Eg || (this.Eg = l)
              : t && (this.Eg = e);
            var r = this.Ee;
            if (r.delete(e) && 0 === r.size) {
              var a = this.Ef,
                s = this.Eg;
              (this.Eg = null),
                null == s
                  ? a.markChildrenUpdated(!1)
                  : ((this.selected = s === l ? null : s),
                    a.markChildrenUpdated(!0));
            }
          }
          markAltSelectionUpdated(e, t, n) {
            this.Ef.markAltSelectionUpdated(e, t, n);
          }
          markChildDeleted(e) {
            var t = this.Ee;
            if (0 !== t.size) t.add(e), this.markChildUpdated(e, !1, !0);
            else if (null == this.Eh && this.selected === e) {
              var n = Promise.resolve().then(() => {
                this.Eh === n &&
                  ((this.Eh = null),
                  this.Ee.add(e),
                  this.markChildUpdated(e, !1, !0));
              });
              (this.Eh = n), (this.Eg = l), this.Ef.markChildrenUpdating();
            }
          }
        },
        h = { selectionParentNode() {} },
        p =
          ((a = r = class extends o.a {
            constructor(e, t) {
              super(e), (this.Er = null);
              var n = t.selectionParentNode;
              (this.Eq = n), n.markChildUpdating(this);
            }
            componentDidMount() {
              this.$selectableDidUpdate();
            }
            getSnapshotBeforeUpdate() {
              return this.Eq.markChildUpdating(this), null;
            }
            componentDidUpdate() {
              this.$selectableDidUpdate();
            }
            componentWillUnmount() {
              var e = this.Eq;
              e.markChildDeleted(this);
              var t = this.Er;
              t && e.markAltSelectionUpdated(t, this, !1);
            }
            $selectableDidUpdate() {
              var e = this.props.selected,
                t = this.Eq;
              if ("string" == typeof e)
                (this.Er = e), t.markAltSelectionUpdated(e, this, !0);
              else if (this.Er) {
                var n = this.Er;
                (this.Er = null), t.markAltSelectionUpdated(n, this, !1);
              }
              t.markChildUpdated(this, !0 === e, !0);
            }
            addSoftKeys() {
              __LOG__(4)`addSoftKeys unimplemented`,
                SEND_LOGS("softkeys-unimplemented");
            }
          }),
          (r.contextTypes = h),
          a);
      function f(e) {
        var t, n;
        return (
          (n = t = class extends o.a {
            getChildContext() {
              return this.Es.context;
            }
            constructor(t, n) {
              super(t);
              var r = n.selectionParentNode,
                a = new (class {
                  constructor(e, t) {
                    (this.context = { selectionParentNode: new d(this) }),
                      (this.Ek = !1),
                      (this.El = !1),
                      (this.Em = !0),
                      (this.En = !1),
                      (this.Eo = null),
                      (this.Ei = e),
                      (this.Ej = t);
                  }
                  markUpdating() {
                    return (this.Em = !0), this.Ep(!0, this.El), null;
                  }
                  markUpdated() {
                    this.Ep(!1, this.El);
                  }
                  markChildrenUpdating() {
                    this.En || this.Ep(this.Ek, !0);
                  }
                  markChildrenUpdated(e) {
                    this.En || (e && (this.Em = !0), this.Ep(this.Ek, !1));
                  }
                  Ep(e, t) {
                    var n = e || t,
                      r = this.Ek || this.El;
                    if (((this.Ek = e), (this.El = t), n && !r))
                      this.Ej.markChildUpdating(this.Ei);
                    else if (!n && r) {
                      var a = this.Em;
                      this.Em = !1;
                      var s = this.Eo;
                      null == s &&
                        (s = !!this.context.selectionParentNode.selected),
                        this.Ej.markChildUpdated(this.Ei, s, a);
                    }
                  }
                  markAltSelectionUpdated(e, t, n) {
                    this.Ej.markAltSelectionUpdated(e, t, n);
                  }
                  markUnmounted() {
                    (this.En = !0), this.Ej.markChildDeleted(this.Ei);
                  }
                })(this, r);
              (this.Es = a), (a.Eo = !!e || null), a.markUpdating();
            }
            componentDidMount() {
              this.Es.markUpdated();
            }
            getSnapshotBeforeUpdate() {
              return this.Es.markUpdating(), null;
            }
            componentDidUpdate() {
              this.Es.markUpdated();
            }
            componentWillUnmount() {
              this.Es.markUnmounted();
            }
            addSoftKeys() {
              __LOG__(4)`addSoftKeys unimplemented`,
                SEND_LOGS("softkeys-unimplemented");
            }
          }),
          (t.contextTypes = h),
          (t.childContextTypes = h),
          n
        );
      }
      var g =
        ((i = s = class extends o.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Et = null),
              (this.Em = !0),
              (this.Eu = !1),
              (this.Ev = new Map()),
              (this.Ew = { selectionParentNode: new d(this) }),
              (this.Ex = !1),
              e
            );
          }
          getChildContext() {
            return this.Ew;
          }
          componentDidMount() {
            (this.Ex = !0), this.fireSelectionUpdate();
          }
          componentWillUnmount() {
            this.Ex = !1;
          }
          markChildrenUpdating() {
            this.Eu = !0;
          }
          markChildrenUpdated(e) {
            (this.Eu = !1),
              (this.Em || e) && this.Ex && this.fireSelectionUpdate();
          }
          markAltSelectionUpdated(e, t, n) {
            var r = this.Ev;
            n
              ? (r.set(e, t), this.markDirty())
              : t === r.get(e) && (r.delete(e), this.markDirty());
          }
          markDirty() {
            this.Em ||
              ((this.Em = !0),
              this.Eu ||
                this.Et ||
                (this.Et = Promise.resolve().then(() => {
                  (this.Et = null),
                    this.Ex && this.Em && this.fireSelectionUpdate();
                })));
          }
          fireSelectionUpdate() {
            this.Em = !1;
            for (var e = [], t = this.Ew.selectionParentNode.selected; t; ) {
              e.push(t);
              var n = t.Es;
              t = null == n ? void 0 : n.context.selectionParentNode.selected;
            }
            this.props.onSelectionUpdate(e, this.Ev);
          }
          render() {
            return this.props.children || null;
          }
        }),
        (s.childContextTypes = h),
        i);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var r = n(1),
        a = (n(13), n(56)),
        s = n(18),
        i = n(285),
        o = class extends a.a {
          Bb(e, t, n) {
            if (null != n)
              return function () {
                t(), null != n && "CLOSE" !== n && n(e);
              };
          }
          addSoftKeys(e, t) {
            var n = this.props,
              r = this.Bb(t, n.close, n.onBack || "CLOSE");
            r && e.setBack(r);
            var a = this.Bb(t, n.close, n.onEndCall);
            a && e.setOnEndCall(a);
            var s = this.Bb(t, n.close, n.onSoftLeft);
            (n.left || n.leftIcon) &&
              s &&
              (n.left
                ? e.setLeftLabel(n.left, s)
                : n.leftIcon && e.setLeftIcon(n.leftIcon, s));
            var i = this.Bb(t, n.close, n.onSoftCenter);
            (n.center || n.centerIcon) &&
              i &&
              (n.center
                ? e.setCenterLabel(n.center, i)
                : n.centerIcon && e.setCenterIcon(n.centerIcon, i));
            var o = this.Bb(t, n.close, n.onSoftRight);
            (n.right || n.rightIcon) &&
              o &&
              (n.right
                ? e.setRightLabel(n.right, o)
                : n.rightIcon && e.setRightIcon(n.rightIcon, o));
            var l = n.full;
            l && e.setFull(l);
          }
          render() {
            var e = this.props,
              t = e.text,
              n = e.title,
              a = n
                ? (0, r.f)(
                    1,
                    "div",
                    "K Y GF GC",
                    (0, r.b)(2, s.b, { l10n: n }),
                    2
                  )
                : null;
            return (0, r.f)(
              1,
              "div",
              "J X",
              [
                a,
                (0, r.b)(2, i.a, {
                  className: "L Z",
                  children:
                    null != t
                      ? (0, r.f)(
                          1,
                          "div",
                          "M GC",
                          "function" == typeof t
                            ? t()
                            : (0, r.b)(2, s.b, { l10n: t }),
                          0
                        )
                      : this.props.children,
                }),
              ],
              0
            );
          }
        };
      t.a = o;
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a),
        i = n(345),
        o = n(368);
      function l(e) {
        var t = e.className,
          n = e.hasFocusPriority,
          a = e.defaultValue,
          l = e.placeholder,
          c = e.onChange,
          u = e.onKeyDown,
          d = e.forwardedRef;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)(t, "II", n && "IL"),
          [
            (0, r.b)(2, o.a, { className: "IJ" }),
            (0, r.b)(
              2,
              i.a,
              {
                type: "text",
                hasFocusPriority: n,
                className: "IK",
                placeholder: l || 676,
                defaultValue: a,
                onChange: c,
                onKeyDown: u,
              },
              null,
              d
            ),
          ],
          4
        );
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r,
        a = n(91),
        s = n(71),
        i = n(16),
        o = n(185);
      function l(e) {
        return (r = new (class {
          constructor(e) {
            (this.Uz = new s.a()), (this.VA = e);
          }
          runJob(e) {
            this.VB(e, (e) => {
              e.newlyCreated
                ? this.VA.fireAndForget("backend", "runJob", { jobId: e.jobId })
                : __LOG__(2)`runJob job already exists`;
            });
          }
          runJobWithResult(e) {
            return new Promise((t, n) => {
              this.VB(e, (e) => {
                e.newlyCreated ||
                  __LOG__(2)`runJobWithResult job already exists`,
                  t(
                    this.VA.sendAndReceive("backend", "runJob", {
                      jobId: e.jobId,
                    })
                  );
              }).catch(n);
            });
          }
          VB(e, t) {
            return this.Uz.enqueueHandlers(
              (0, a.jobsTable)().maybeCreateJob(e),
              (n) => {
                n.newlyCreated
                  ? (0, i.d)(e.type) && (0, o.c)(this.VA, n.jobId, e)
                  : __LOG__(2)`_enqueueJob job already exists`,
                  t(n);
              }
            );
          }
        })(e));
      }
      function c(e) {
        return (function (e) {
          if (null == r) throw "runJob";
          return r;
        })().runJob(e);
      }
    },
    ,
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(20),
        i = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              fill: "none",
              d:
                "M48.407 33.37c5.775-2.654 9.387-7.064 10.773-12.804m5.774 17.901c4.573-5.818 4.761-15.372-.01-21.227M38.253 38.467c-4.573-5.818-4.761-15.372.01-21.227m13.521 5.814c-.138-1.678-.297-2.671-.717-4.356m-5.269 5.482c-.353-1.646-.653-2.574-1.262-4.2m49.494-1.561 7.575.033M83.828 36.607l5.778-18.088M72.944 36.62l7.532.087M9.155 18.529l-7.574.033m17.777 18.265L13.58 18.518M30.242 36.62l-7.531.087",
            }),
            2,
            { viewBox: "0 0 103 42" }
          );
        },
        o = n(118),
        l = class extends a.a {
          static getDerivedStateFromError(e) {
            return (
              __LOG__(4)`ErrorBoundary captured error: ${e}`, { hasError: !0 }
            );
          }
          constructor() {
            super(),
              (this.Be = !1),
              (this.Bf = {
                translated: !1,
                title: "WhatsApp",
                description: "Something went wrong. Please restart WhatsApp.",
                action: "Restart",
              }),
              (this.Bg = (e) => {
                this.state.hasError &&
                  ("Enter" === e.key
                    ? self.location.reload(!0)
                    : ("Backspace" !== e.key && "EndCall" !== e.key) ||
                      (0, o.closeApp)());
              }),
              (this.state = { hasError: !1 });
          }
          componentWillUnmount() {
            document.removeEventListener("keydown", this.Bg);
          }
          componentDidCatch(e, t) {
            document.addEventListener("keydown", this.Bg),
              __LOG__(4)`Component stack: ${t.componentStack}`,
              this.Be
                ? __LOG__(4)`ErrorBoundary error ${e}, stack: ${
                    null == e ? void 0 : e.stack
                  } (not uploading logs as an attempt was made on the first error)`
                : ((this.Be = !0),
                  __LOG__(4)`ErrorBoundary error ${e}, stack: ${
                    null == e ? void 0 : e.stack
                  }`,
                  SEND_LOGS("error-boundary-error"));
          }
          Bh() {
            (this.Bf.translated = !0),
              this.Bi("title", 982),
              this.Bi("description", 328),
              this.Bi("action", 327);
          }
          Bi(e, t) {
            try {
              var n = (0, s.j)(t);
              n && (this.Bf[e] = n);
            } catch (e) {}
          }
          render() {
            return this.state.hasError
              ? (this.Bf.translated || this.Bh(),
                (0, r.f)(
                  1,
                  "div",
                  "P d",
                  [
                    (0, r.f)(1, "div", "Q BM GI GE", this.Bf.title, 0),
                    (0, r.f)(
                      1,
                      "div",
                      "R BO",
                      [
                        (0, r.b)(2, i, { className: "U" }),
                        (0, r.f)(1, "div", "V", this.Bf.description, 0),
                      ],
                      4
                    ),
                    (0, r.f)(
                      1,
                      "div",
                      "S f",
                      (0, r.f)(1, "div", "T j h", this.Bf.action, 0),
                      2
                    ),
                  ],
                  4,
                  { tabIndex: "1" }
                ))
              : this.props.children;
          }
        };
      t.a = l;
    },
    ,
    function (e, t, n) {
      n.d(t, "d", function () {
        return s;
      }),
        n.d(t, "e", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return h;
        });
      var r = n(50),
        a = n(183);
      function s(e, t, n) {
        if (null != e && !e.paused) {
          if (null == t)
            return (
              null == n
                ? __LOG__(4)`Playing ${e.type} without any selection`
                : __LOG__(4)`Playing ${e.type} while selecting item`,
              !0
            );
          if (t !== e.commonMsgId)
            return __LOG__(4)`Playing ${e.type} while selecting`, !0;
        }
        return !1;
      }
      function i(e, t, n) {
        null != e.meta.author &&
          (("voice" === e.content.type && e.content.isPtt) ||
            ("video" === e.content.type &&
              "active" === e.content.viewOnceState)) &&
          "ready" === e.content.mediaStatus.type &&
          !e.content.mediaStatus.played &&
          n.markPlayed(e.id, t);
      }
      function o(e, t, n, a, s, o) {
        return () => {
          i(t, s, e);
          var l,
            c = n.duration || 0,
            u = 0;
          if ("video" === n.type || "gif" === n.type) {
            u = n.rotation || 0;
            var d =
              (null != n.width && null != n.height && n.width > n.height) !=
              self.innerWidth > self.innerHeight;
            l = Object.assign(
              {
                type: n.type,
                commonMsgId: t.id,
                duration: c,
                contentRef: a,
                playSideways: d,
                rotation: u,
                loading: !0,
              },
              o
            );
          } else {
            if ((n.type, !(0, r.a)(e.getStoreState())))
              return void __LOG__(
                4
              )`Tried to playMediaMsg not in registered mode`;
            l = {
              type: "audio",
              commonMsgId: t.id,
              duration: c,
              contentRef: a,
              paused: !1,
              loading: !0,
            };
          }
          e.dispatch({ type: "PLAY_MEDIA", player: l });
        };
      }
      function l(e, t, n, r, a, s) {
        d(e, t, n, r, a, s);
      }
      function c(e, t, n, r, a) {
        d(e, t, n, r, a);
      }
      function u(e, t, n, r, s) {
        var i,
          l = r.mediaStatus;
        "ready" === l.type
          ? e.setCenterLabel(818, o(t, n, r, l.ref, s))
          : (0, a.a)(e, null != (i = n.meta.fromMe) && i, l, {
              id: n.id,
              chatJid: s,
              origin: "chat",
            });
      }
      function d(e, t, n, r, s, i) {
        var l,
          c = r.mediaStatus;
        "ready" === c.type
          ? e.setCenterLabel(801, o(t, n, r, c.ref, s, i))
          : (0, a.a)(e, null != (l = n.meta.fromMe) && l, c, {
              id: n.id,
              chatJid: s,
              origin: "chat",
            });
      }
      function h(e) {
        return "1x" === e ? 1 : "1.5x" === e ? 1.5 : 2;
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n(1),
        a = (n(13), n(385)),
        s = n(386),
        i = n(22),
        o = n.n(i);
      function l(e) {
        var t = e.checked,
          n = e.selected,
          i = e.className,
          l = (0, o.a)("DD", n && "DE");
        return (0, r.f)(
          1,
          "div",
          (0, o.a)("DC", i),
          t
            ? (0, r.b)(2, a.a, { className: l })
            : (0, r.b)(2, s.a, { className: l }),
          0
        );
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M8.153 3.352h6.669c.65 0 1.178.526 1.178 1.174v8.3c0 .648-.528 1.174-1.178 1.174H3.177C2.527 14 2 13.474 2 12.825V4.68c.014-.248.109-.484.269-.674l1.61-1.719c.18-.17.414-.272.662-.286h1.891c.248.014.484.113.667.28l1.054 1.072zm.835 1.977v.004a3.344 3.344 0 00-3.35 3.337 3.344 3.344 0 003.351 3.336 3.344 3.344 0 003.347-3.34c0-1.843-1.5-3.337-3.348-3.337zm.01.977a2.36 2.36 0 012.18 1.452c.365.879.163 1.89-.512 2.563a2.364 2.364 0 01-2.572.51 2.352 2.352 0 01-1.456-2.174 2.355 2.355 0 012.36-2.347v-.004z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var r,
        a = n(3),
        s = n(148);
      function i(e, t) {
        __LOG__(2)`userNoticeTracker: User notice with id ${t.id} displayed. ${
          t.shouldLogWhenDisplayed
            ? "Logging view in the backend"
            : "Not logging view in the backend"
        }`,
          null == r &&
            (r = new (class {
              constructor() {
                (this.FK = new Set()), (this.FL = new Map());
              }
              hasBeenDisplayed(e, t) {
                var n,
                  r = t.id;
                this.FK.has(r) ||
                  ((0, s.b)()
                    ? (t.shouldLogWhenDisplayed &&
                        e.fireAndForget("backend", "logUserNoticeDisplayed", {
                          id: r,
                          ts: (0, a.E)(),
                        }),
                      "banner" === t.type
                        ? (n = 1)
                        : "modal" === t.type
                        ? (n = t.blocking ? 7 : 3)
                        : (t.type, (n = 3)),
                      WAM.log("regular", 2472, void 0, [
                        1,
                        0,
                        r,
                        2,
                        0,
                        t.version,
                        3,
                        0,
                        n,
                      ]),
                      this.FK.add(r))
                    : this.FL.set(r, t));
              }
              checkPending(e) {
                this.FL.forEach((t) => {
                  this.hasBeenDisplayed(e, t);
                }),
                  (this.FL = new Map());
              }
              reset() {
                (this.FK = new Set()), (this.FL = new Map());
              }
            })()),
          r.hasBeenDisplayed(e, t);
      }
      function o(e) {
        r && r.checkPending(e);
      }
      function l(e) {
        var t = e.getStoreState();
        t.userNotice && "modal" === t.userNotice.type
          ? __LOG__(
              2
            )`_maybeUpdateUserNoticeWhenAppHidden: Keeping current modal in store for now.`
          : (r && r.reset(),
            e.sendAndReceive("backend", "getUserNotice", {}).then((t) => {
              null == t ||
                (0, s.b)() ||
                e.dispatch({ type: "USER_NOTICE_UPDATED", userNotice: t });
            }));
      }
    },
    function (e, t, n) {
      n.d(t, "c", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return p;
        });
      var r = n(9),
        a = n.n(r),
        s = n(48),
        i = n(298),
        o = n(36),
        l = n(92),
        c = n(19);
      function u(e, t, n) {
        if (e.groupInfo.isInGroup)
          if (t) {
            var r = !(0, o.k)(e);
            (0, c.g)({
              title: 291,
              text: [(0, s.b)(e.groupInfo.title), 99],
              left: 761,
              onSoftLeft: "CLOSE",
              center: 777,
              onSoftCenter: () => {
                if (e.groupInfo.isInGroup) {
                  if (!t) return void (0, c.e)({ title: 229, text: 293 });
                  n.leaveGroup(e.jid);
                } else (0, c.e)({ title: 229, text: 292 });
              },
              right: r ? 791 : void 0,
              onSoftRight: r
                ? function () {
                    (0, c.j)((0, i.a)(n, e.id));
                  }
                : void 0,
            });
          } else (0, c.e)({ title: 229, text: 293 });
      }
      function d(e, t) {
        null == e ||
          e.groupInfo.isInGroup ||
          (0, c.k)({
            title: [(0, s.b)(e.groupInfo.title), 46],
            save: 769,
            centerKeys: { on: 818, off: 770 },
            defaultItems: [{ key: "delete_media", label: 136, checked: !1 }],
            onSave: (n) => {
              var r = a()(n, 1)[0];
              null == e || e.groupInfo.isInGroup
                ? (0, c.e)({ title: 229, text: 221 })
                : t.deleteChat(
                    e.id,
                    !0,
                    r.checked
                      ? "deleteMediaFromPhoneStorage"
                      : "retainMediaInPhoneStorage"
                  );
            },
          });
      }
      function h(e, t) {
        var n = [{ key: "delete_media", label: 136, checked: !1 }],
          r = e.msgInfo.starredMsgCount;
        r &&
          r > 0 &&
          !t.isStarredIndexMissing() &&
          n.push({ key: "delete_starred", label: 137, checked: !1 }),
          (0, c.k)({
            title: [(0, s.b)(e.groupInfo.title), 35],
            save: 763,
            centerKeys: { on: 818, off: 770 },
            defaultItems: n,
            onSave: (n) => {
              var r = a()(n, 2),
                s = r[0],
                i = r[1];
              return t.clearChat(
                e.id,
                s.checked
                  ? "deleteMediaFromPhoneStorage"
                  : "retainMediaInPhoneStorage",
                null == i || i.checked
                  ? "deleteStarredMessages"
                  : "retainStarredMessages"
              );
            },
          });
      }
      function p(e, t, n) {
        (0, l.j)(e, t.jid), e.openScreen("GROUP_INFO", { chat: t, start: n });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return j;
      }),
        n.d(t, "b", function () {
          return P;
        }),
        n.d(t, "c", function () {
          return V;
        }),
        n.d(t, "d", function () {
          return J;
        }),
        n.d(t, "e", function () {
          return z;
        });
      var r = n(1),
        a = (n(13), n(253)),
        s = n(18),
        i = n(56),
        o = n(183),
        l = n(283),
        c = n(15),
        u = n(22),
        d = n.n(u),
        h = n(361),
        p = n(181),
        f = n(351),
        g = n(19),
        v = n(54),
        m = n(6),
        b = n(112),
        _ = n(285),
        S = (n(274), n(32)),
        E = n(275),
        y = class extends i.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)), (this.state = { blockUser: !0 }), e
            );
          }
          addSoftKeys(e, t) {
            e.setBack(g.a),
              e.setCenterLabel(809, () => {
                this.props.sendReport(this.state.blockUser);
              }),
              e.setRightLabel(818, () => {
                this.setState({ blockUser: !this.state.blockUser });
              });
          }
          render() {
            var e = this.props,
              t = e.contacts,
              n = e.reportedUserJid,
              a = (0, S.h)(t, n);
            return (0, r.f)(
              1,
              "div",
              "JT X",
              [
                (0, r.f)(
                  1,
                  "div",
                  "JU Y GF GC",
                  (0, r.b)(2, E.a, {
                    textClassName: "JW",
                    maxLineClassName: "JX",
                    truncated: !0,
                    children: (0, r.b)(2, s.b, { l10n: [a, 189] }),
                  }),
                  2
                ),
                (0, r.b)(2, _.a, {
                  className: "JV Z",
                  children: [
                    (0, r.f)(
                      1,
                      "div",
                      "JS",
                      (0, r.b)(2, s.b, { l10n: 640 }),
                      2
                    ),
                    (0, r.f)(
                      1,
                      "div",
                      "JS",
                      (0, r.b)(2, s.b, { l10n: 634 }),
                      2
                    ),
                    (0, r.b)(2, b.d, {
                      title: 630,
                      checked: this.state.blockUser,
                    }),
                  ],
                }),
              ],
              4
            );
          }
        },
        I = (0, v.c)(y, (e, t, n) =>
          Object.assign({ contacts: e.contacts }, n)
        );
      function O(e, t) {
        (0, g.b)((0, r.b)(2, I, { sendReport: t, reportedUserJid: e }));
      }
      var A = n(49),
        C = n(396),
        k = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M12 21c.055 0 .11 0 .165-.002a1 1 0 00-.036-2C12.086 19 12.043 19 12 19v2zm0-16 .129.001a1 1 0 10.036-2A9.099 9.099 0 0012 3v2zm4.358-.876a1 1 0 10-.97 1.75c.075.04.149.083.222.127a1 1 0 101.033-1.712 8.895 8.895 0 00-.285-.165zm3.353 3.233A1 1 0 1018 8.39c.044.073.087.147.128.221a1 1 0 001.749-.97 8.9 8.9 0 00-.165-.284zM21 11.835a1 1 0 00-2 .036 6.887 6.887 0 010 .258 1 1 0 002 .036 9.008 9.008 0 000-.33zm-1.123 4.523a1 1 0 10-1.75-.97 6.829 6.829 0 01-.127.222 1 1 0 101.712 1.033 8.1 8.1 0 00.165-.285zm-3.233 3.353A1 1 0 1015.61 18a6.829 6.829 0 01-.221.128 1 1 0 10.97 1.749 9.08 9.08 0 00.284-.165zM12 3a9 9 0 000 18v-2a7 7 0 110-14V3z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        w = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M14 12.461h1.294c.445 0 .67.537.355.85l-2.795 2.777a.5.5 0 01-.705 0l-2.795-2.777a.496.496 0 01.35-.85H11V8.387a.5.5 0 01.5-.496h2a.5.5 0 01.5.496v4.074z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        D = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M8.444 10.65h1.372v4.286c0 .472.388.858.863.858h3.45a.862.862 0 00.863-.858v-4.285h1.372c.767 0 1.155-.926.612-1.466l-3.96-3.934a.863.863 0 00-1.216 0L7.84 9.185c-.543.54-.163 1.466.604 1.466zm-2.07 7.715c0 .471.388.857.863.857h10.351a.862.862 0 00.863-.857.862.862 0 00-.863-.857H7.237a.862.862 0 00-.863.857z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        L = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M45.556 26.459a1.51 1.51 0 00-2.139 0L36 33.86l-7.418-7.417a1.51 1.51 0 00-2.138 0 1.51 1.51 0 000 2.139L33.86 36l-7.417 7.417a1.51 1.51 0 000 2.14 1.51 1.51 0 002.139 0L36 38.138l7.417 7.417a1.51 1.51 0 002.14 0 1.51 1.51 0 000-2.139L38.138 36l7.417-7.418a1.52 1.52 0 000-2.123z",
            }),
            2,
            { viewBox: "0 0 72 72" }
          );
        },
        T = n(281),
        N = "HZ",
        M = "Hc",
        G = "Hd",
        R = class extends i.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.KN = (e, t) => {
                var n = this.props,
                  r = n.ack,
                  a = n.msg,
                  s = n.content,
                  i = n.chatJid,
                  o = n.connected,
                  l = n.chat,
                  u = n.contacts;
                if ("expired" !== B(a) || a.meta.fromMe) {
                  var d,
                    h = s.mediaStatus;
                  "ready" === h.type
                    ? (a.meta.fromMe ||
                        r === c.a.PLAYED ||
                        (d = () => e.markPlayed(a.id, i)),
                      e.openScreen("MSG_IMAGE_VIEW", {
                        msgId: a.id,
                        contentRef: h.ref,
                        onViewed: d,
                        caption: s.caption,
                        onMsgInfo: () => {
                          e.openScreen("VIEW_ONCE_NUX", {
                            nuxType: "receiver",
                          });
                        },
                        captionFormatting: (0, p.b)(a),
                        onReportContact: () => H(e, o, l, a),
                        onClose: () => e.unlinkViewOnceMsgsMedia([a.id]),
                      }))
                    : __LOG__(3)`Trying to open a non-ready view once image`;
                } else {
                  var f = (0, S.h)(u, t);
                  (0, g.e)({ title: 969, text: [f, 254] });
                }
              }),
              e
            );
          }
          addSoftKeys(e, t) {
            var n,
              r = this.props,
              a = r.msg,
              s = r.content,
              i = r.chatJid,
              l = s.mediaStatus,
              c = a.meta.author && (0, A.i)(a.meta.author),
              u = B(a);
            (a.meta.fromMe && "ready" === l.type) ||
              "viewed" === u ||
              (a.meta.fromMe && "expired" === u) ||
              !c ||
              ("ready" !== l.type && "expired" !== u
                ? (0, o.a)(e, null != (n = a.meta.fromMe) && n, l, {
                    id: a.id,
                    chatJid: i,
                    origin: "chat",
                  })
                : e.setCenterLabel(833, () => {
                    m.O.get()
                      ? this.KN(t, c)
                      : t.openScreen("VIEW_ONCE_NUX", {
                          nuxType: "receiver",
                          onClose: () => this.KN(t, c),
                        });
                  }));
          }
          render() {
            var e = this.props,
              t = e.content,
              n = e.ack,
              a = e.msg,
              s = B(a),
              i = J(s, "He"),
              o = !0 === a.meta.fromMe;
            return (0, r.b)(2, F, {
              mediaStatus: t.mediaStatus,
              outgoing: o,
              viewOnceState: s,
              ack: n,
              mediaText: i,
              size: t.size,
            });
          }
        },
        j = (0, v.c)(R, (e, t, n) => {
          var r = e.chatlist.chats[n.msg.chatId];
          return (
            null == r &&
              (__LOG__(4)`Invalid chat for view once image message`,
              SEND_LOGS("invalid-viewonce-image-message-chat")),
            Object.assign(
              { connected: e.connected, chat: r, contacts: e.contacts },
              n
            )
          );
        }),
        x = class extends i.b {
          addSoftKeys(e, t) {
            var n = this.props,
              r = n.content,
              s = n.chatJid,
              i = n.msg,
              o = n.connected,
              l = n.chat,
              c = n.contacts,
              u = i.meta.author && (0, A.i)(i.meta.author),
              d = B(i);
            if (
              !(
                (i.meta.fromMe && "ready" === r.mediaStatus.type) ||
                "viewed" === d ||
                (i.meta.fromMe && "expired" === d)
              ) &&
              u
            ) {
              var h = {
                caption: r.caption,
                onMsgInfo: () => {
                  t.openScreen("VIEW_ONCE_NUX", { nuxType: "receiver" });
                },
                captionFormatting: (0, p.b)(i),
                onReportContact: () => H(t, o, l, i),
                onClose: () => t.unlinkViewOnceMsgsMedia([i.id]),
              };
              "expired" === d
                ? e.setCenterLabel(801, () => {
                    var e = (0, S.h)(c, u);
                    (0, g.e)({ title: 970, text: [e, 255] });
                  })
                : (0, a.c)(e, t, i, r, s, h);
            }
          }
          render() {
            var e = this.props,
              t = e.content,
              n = e.ack,
              a = e.msg,
              s = e.player.active,
              i = null != s && s.commonMsgId === a.id && s.loading,
              o = B(a),
              l = z(o, "He"),
              c = !0 === a.meta.fromMe;
            return (0, r.b)(2, F, {
              mediaStatus: t.mediaStatus,
              outgoing: c,
              viewOnceState: o,
              ack: n,
              mediaText: l,
              isLoading: i,
              size: t.size,
            });
          }
        },
        P = (0, v.c)(x, (e, t, n) => {
          var r = e.chatlist.chats[n.msg.chatId];
          return (
            null == r &&
              (__LOG__(4)`Invalid chat for view once video message`,
              SEND_LOGS("invalid-viewonce-video-message-chat")),
            Object.assign(
              { connected: e.connected, chat: r, contacts: e.contacts },
              n
            )
          );
        });
      function U(e) {
        var t = e.progress;
        return (0, r.b)(2, h.a, {
          theme: "green",
          progress: t,
          strokeWidth: 5,
          className: N,
        });
      }
      function F(e) {
        var t = e.mediaStatus,
          n = e.outgoing,
          a = e.viewOnceState,
          s = e.ack,
          i = e.mediaText,
          o = e.isLoading,
          c = e.size,
          u = !n && ("active" === a || "expired" === a),
          h = null,
          p = null;
        if ("active" === a)
          switch (t.type) {
            case "idle":
              n
                ? (h = (0, r.b)(2, D, { className: (0, d.a)(N, M) }))
                : ((h = (0, r.c)(
                    [
                      (0, r.b)(2, k, { className: (0, d.a)(N, M) }),
                      (0, r.f)(
                        1,
                        "div",
                        G,
                        (0, r.b)(2, w, { className: (0, d.a)(N, M) }),
                        2
                      ),
                    ],
                    4
                  )),
                  null != c &&
                    (p = (0, r.b)(2, f.a, { className: "Hh GH GC", size: c })));
              break;
            case "pending":
              h = (0, r.c)(
                [
                  (0, r.b)(2, U),
                  (0, r.f)(1, "div", G, (0, r.b)(2, L, { className: N }), 2),
                ],
                4
              );
              break;
            case "processing":
              h = (0, r.c)(
                [
                  (0, r.b)(2, U, { progress: t.progress }),
                  (0, r.f)(1, "div", G, (0, r.b)(2, L, { className: N }), 2),
                ],
                4
              );
              break;
            case "ready":
              h = o
                ? (0, r.c)(
                    [
                      (0, r.b)(2, U),
                      (0, r.f)(
                        1,
                        "div",
                        G,
                        (0, r.b)(2, L, { className: N }),
                        2
                      ),
                    ],
                    4
                  )
                : V(a, (0, d.a)(N, !n && M));
              break;
            default:
              t.type, (h = (0, r.b)(2, T.a, { className: N }));
          }
        else
          h =
            "viewed" === a
              ? (0, r.b)(2, k, { className: N })
              : V(a, (0, d.a)(N, !n && M));
        var g = null,
          v = null;
        return (
          n &&
            null != s &&
            "viewed" !== a &&
            ((g = (0, r.b)(2, l.a, { className: "Hg", ack: s })),
            (v = (0, r.f)(1, "span", "Hf"))),
          (0, r.c)(
            [
              (0, r.f)(
                1,
                "div",
                (0, d.a)("HW", u && "HY"),
                [
                  (0, r.f)(
                    1,
                    "div",
                    "HX GG GC",
                    [
                      h,
                      (0, r.f)(
                        1,
                        "span",
                        (0, d.a)("Ha", "viewed" !== a && "Hb"),
                        i,
                        0
                      ),
                      v,
                    ],
                    0
                  ),
                  g,
                ],
                0
              ),
              p,
            ],
            0
          )
        );
      }
      function B(e) {
        if (!(0, c.E)(e) || null == e.content.viewOnceState)
          throw new Error("getViewOnceMessageState: Not a view once message");
        return e.content.viewOnceState;
      }
      function V(e, t) {
        switch (e) {
          case "viewed":
            return (0, r.b)(2, k, { className: t });
          default:
            return (0, r.b)(2, C.a, { className: t });
        }
      }
      function J(e, t) {
        switch (e) {
          case "viewed":
            return (0, r.b)(2, s.b, { l10n: 974, className: t });
          default:
            return (0, r.b)(2, s.b, { l10n: 972 });
        }
      }
      function z(e, t) {
        switch (e) {
          case "viewed":
            return (0, r.b)(2, s.b, { l10n: 974, className: t });
          default:
            return (0, r.b)(2, s.b, { l10n: 973 });
        }
      }
      function H(e, t, n, r) {
        if (t)
          if ("ONE_TO_ONE" === n.type)
            O(n.jid, (t) => {
              e.reportUserSpam({
                reportType: "message",
                msgId: r.id,
                userJid: n.jid,
                spamFlow: "media_viewer",
                blockUser: t,
                deleteChat: !1,
              });
            });
          else {
            n.type;
            var a =
              !r.meta.fromMe &&
              null != r.meta.author &&
              (0, A.i)(r.meta.author);
            if (!a)
              return (
                __LOG__(4)`ViewOnce: Reporting a message with invalid author`,
                SEND_LOGS("reporting-invalid-author"),
                void (0, g.e)({ title: 229, text: 644 })
              );
            O(a, (t) => {
              e.reportGroupSpam({
                reportType: "message",
                msgId: r.id,
                groupChat: n,
                spamFlow: "media_viewer",
                deleteGroup: !1,
                exitGroup: !1,
                blockAuthor: t,
              });
            });
          }
        else (0, g.e)({ title: 229, text: 635 });
      }
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return f;
      }),
        n.d(t, "c", function () {
          return g;
        }),
        n.d(t, "a", function () {
          return m;
        });
      var r,
        a = n(9),
        s = n.n(a),
        i = n(138),
        o = n(294),
        l = n(91),
        c = n(14),
        u = n(3),
        d = n(382),
        h = n(31),
        p = n.n(h);
      function f() {
        return r || (r = new o.BaseContentTable()), r;
      }
      function g(e, t) {
        return Promise.resolve().then(() => {
          switch (e.mode) {
            case "main":
              return Promise.resolve()
                .then(() =>
                  t
                    ? Promise.all([
                        f().updateLastAppWrite(),
                        (0, l.jobsTable)().updateAppRunId(),
                      ])
                    : null
                )
                .then(() =>
                  Promise.all([
                    f().getEverything(),
                    (0, l.jobsTable)().loadAllBookmarks(),
                  ])
                )
                .then((e) => {
                  var t = s()(e, 2),
                    n = t[0],
                    r = t[1];
                  return (0, i.c)(n, r);
                })
                .catch(() => v("corrupted"));
            case "reg":
              return (0, i.e)();
            case "deleting":
              return (0, i.a)();
            case "tempBanned":
              return (0, i.d)();
            case "error":
              return v(e.reason);
            default:
              return (0, p.a)(e.mode);
          }
        });
      }
      function v(e) {
        return "corrupted" === e
          ? (0, d.a)(c.K)
              .then((e) =>
                null == e || e + c.J <= (0, u.E)()
                  ? (0, i.b)("corrupted")
                  : (0, i.b)("corruptedAfterRestart")
              )
              .catch(() => (0, i.b)("corrupted"))
          : Promise.resolve((0, i.b)(e));
      }
      function m() {
        return f().checkStarredIndexMissing();
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return c;
        });
      var r = "closed",
        a = "open",
        s = "appStatus",
        i = null;
      function o() {
        return localStorage.getItem(s) === a;
      }
      function l() {
        if (null == i)
          try {
            localStorage.setItem(s, a), (i = a);
          } catch (e) {
            __LOG__(4)`markAppOpen error ${e}`;
          }
      }
      function c() {
        if (i === a)
          try {
            localStorage.setItem(s, r), (i = r);
          } catch (e) {
            self.ERROR && __LOG__(4)`markAppClosed error ${e}`;
          }
      }
    },
    ,
    ,
    function (e, t, n) {
      function r() {
        return (
          __LOG__(2)`Retrieving contacts from phonebook`,
          new Promise((e, t) => {
            var n = [],
              r = navigator.mozContacts.getAll({
                sortBy: "givenName",
                sortOrder: "ascending",
              });
            (r.onsuccess = () => {
              var t = r.result;
              null != t
                ? (n.push(t.toJSON()), r.continue())
                : (__LOG__(
                    2
                  )`Successfully retrieved ${n.length} contacts from phonebook`,
                  e(n));
            }),
              (r.onerror = (e) => {
                __LOG__(4)`Error reading phone contacts: ${r.error}`,
                  e && __LOG__(4)`Event: ${e} ${e.target}`,
                  t(new Error("Error reading phone contacts"));
              });
          })
        );
      }
      function a() {
        return (
          performance.now(),
          __LOG__(2)`Retrieving contact database revision`,
          new Promise((e, t) => {
            var n = navigator.mozContacts.getRevision();
            (n.onsuccess = () => {
              var r = n.result;
              null == r
                ? (__LOG__(4)`Could not retrieve datase revision`,
                  t("Could not retrieve datase revision"))
                : (performance.now(), e(r));
            }),
              (n.onerror = (e) => {
                __LOG__(4)`Error reading contact database revision: ${n.error}`,
                  e && __LOG__(4)`Event: ${e} ${e.target}`,
                  t(new Error("Error reading contact database revision"));
              });
          })
        );
      }
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = {
        text: 1,
        futureproof: 12,
        gif: 11,
        image: 2,
        sticker: 16,
        location: 6,
        video: 3,
        vcard: 13,
        document: 8,
        rich_hsm: 17,
      };
      function a(e) {
        return "voice" === e.content.type
          ? e.content.isPtt
            ? 5
            : 4
          : "text" === e.content.type && null != e.content.linkPreview
          ? 9
          : r[e.content.type];
      }
      function s(e) {
        return "text" === e.content.type && null != e.content.linkPreview
          ? 9
          : (e.content.type, r[e.content.type]);
      }
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(1),
        a = (n(13), n(226));
      function s(e) {
        return (0, r.c)(
          [
            e.title && (0, r.f)(1, "div", e.tallTitle ? a.b : a.c, e.title, 0),
            (0, r.f)(1, "div", a.a, e.children, 0),
          ],
          0
        );
      }
    },
    function (e, t, n) {
      n.d(t, "g", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return I;
        });
      var r = n(9),
        a = n.n(r),
        s = n(40),
        i = n(57),
        o = n(220);
      function l(e) {
        return e.toLocaleLowerCase().match(/\S+/g) || [];
      }
      function c(e) {
        return /^[-+()\s.]*\d[-+()\s.\d]*$/.exec(e)
          ? { type: "number", term: (0, i.a)(e) }
          : { type: "prefix", prefixes: l(e) };
      }
      function u(e, t, n) {
        if ("number" === t.type) return -1 !== e.indexOf(t.term);
        var r = t.prefixes,
          a = n ? n(e) : l(e);
        if (a.length < 1) return !1;
        if (1 === r.length && r[0].length > 1) {
          var s = r[0].split("");
          if (s.length <= a.length) {
            for (var i = !0, o = 0; i && o < s.length; o++)
              a[o][0] !== s[o] && (i = !1);
            if (i) return !0;
          }
        }
        return r.every((e) => a.some((t) => t.startsWith(e)));
      }
      function d(e, t, n, r, a) {
        return (
          (e && u(e, a)) ||
          (t && u(t, a)) ||
          (n && u(n, a)) ||
          (r && u(r, a)) ||
          !1
        );
      }
      function h(e, t) {
        var n = e.shortName,
          r = e.fullName,
          a = e.verifiedInfo,
          s = e.jid,
          i = e.pushname;
        return "number" === t.type
          ? -1 !== s.indexOf(t.term)
          : d(n, r, a && "high" === a.level ? a.name : null, i, t);
      }
      function p(e, t) {
        return u(e.title, t);
      }
      function f(e, t) {
        var n = e.country,
          r = n.cc,
          a = n.iso;
        return "number" === t.type
          ? r.startsWith(t.term)
          : (r && u(r, t)) || (a && u(a, t)) || (e.name && u(e.name, t)) || !1;
      }
      function g(e, t) {
        if ("number" === t.type) {
          var n = t.term;
          return (
            Array.isArray(e.tel) &&
            e.tel.some((e) => {
              var t = (0, s.f)(e);
              return null != t && -1 !== (0, i.a)(t).indexOf(n);
            })
          );
        }
        var r = (0, o.a)(e),
          a = r.fullName;
        return d(r.shortName, a, null, null, t);
      }
      var v = [0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.4, 0.35],
        m = ["abc2", "def3", "ghi4", "jkl5", "mno6", "pqrs7", "tuv8", "wxyz9"],
        b = null;
      function _(e, t) {
        if (e === t) return 0;
        if (!b) {
          b = new Map();
          for (var n = 0; n < m.length; ++n)
            for (var r = m[n], a = 0; a < r.length; ++a) b.set(r[a], r);
        }
        var s = b.get(e);
        if (!s || !s.includes(t)) return 1;
        var i = s.indexOf(e),
          o = s.indexOf(t),
          l = Math.abs(i - o),
          c = Math.min(l, s.length - l);
        return Math.min(0.35 * c, 1);
      }
      function S(e, t) {
        for (
          var n = e.toLocaleLowerCase(),
            r = t.toLocaleLowerCase(),
            a = n.length,
            s = r.length,
            i = Array(a + 1)
              .fill(null)
              .map(() => Array(s + 1).fill(0)),
            o = Array(a + 1)
              .fill(null)
              .map(() => Array(s + 1).fill(0)),
            l = 0;
          l <= a;
          l++
        )
          (i[l][0] = l), (o[l][0] = 0);
        for (var c = 0; c <= s; c++) {
          var u = (0 === c || " " === r[c - 1]) && " " !== r[c];
          (i[0][c] = u ? 0 : 0.5), (o[0][c] = c);
        }
        for (var d = 0; d < a; d++)
          for (var h = 0; h < s; h++) {
            var p = (0 === h || " " === r[h - 1]) && " " !== r[h];
            i[d + 1][h + 1] = 1 / 0;
            var f = p ? 0.5 : 0,
              g = i[d][h + 1] + 1 + f;
            g < i[d + 1][h + 1] &&
              ((i[d + 1][h + 1] = g), (o[d + 1][h + 1] = o[d][h + 1]));
            var v = 0 === d ? 0.5 : 0,
              m = i[d + 1][h] + 1 + v;
            m < i[d + 1][h + 1] &&
              ((i[d + 1][h + 1] = m), (o[d + 1][h + 1] = o[d + 1][h]));
            var b = _(n[d], r[h]);
            b > 0 && (b += Math.max(f, v));
            var S = i[d][h] + b;
            S < i[d + 1][h + 1] &&
              ((i[d + 1][h + 1] = S), (o[d + 1][h + 1] = o[d][h]));
          }
        for (var E = 1 / 0, y = -1, I = -1, O = 0; O <= s; ++O)
          i[a][O] < E && ((E = i[a][O]), (y = o[a][O]), (I = O));
        return { cost: E, substringStart: y, substringEnd: I };
      }
      function E(e, t, n) {
        var r = (function (e, t, n) {
          var r = c(e);
          return t.filter((e) => {
            var t = n(e);
            if (null != t) {
              var a = t.contact,
                s = t.titled;
              return null != s ? p(s, r) : null != a ? h(a, r) : void 0;
            }
          });
        })(e, t, n);
        if (e.length <= 1 || r.length >= Math.min(4, t.length)) return r;
        var s = new Set(r),
          i = (function (e, t, n) {
            for (var r = [], s = 0; s < t.length; ++s) {
              var i = t[s],
                o = n(i);
              if (null != o) {
                var l = o.contact,
                  c = o.titled;
                if (null != c) {
                  var u = S(e, c.title).cost;
                  r.push([i, u]);
                } else if (null != l) {
                  for (
                    var d,
                      h = [
                        l.shortName,
                        l.fullName,
                        null == (d = l.verifiedInfo) ? void 0 : d.name,
                      ],
                      p = 2 * e.length,
                      f = 0;
                    f < h.length;
                    ++f
                  ) {
                    var g = h[f];
                    g && (p = Math.min(p, S(e, g).cost));
                  }
                  p < e.length && r.push([i, p]);
                }
              }
            }
            var m = v[v.length - 1];
            e.length > 1 && e.length < v.length && (m = v[e.length]);
            var b,
              _ = r
                .filter((t) => {
                  var n = a()(t, 2);
                  return n[0], n[1] <= m * e.length;
                })
                .sort((e, t) => {
                  var n = a()(e, 2),
                    r = (n[0], n[1]),
                    s = a()(t, 2);
                  return s[0], r - s[1];
                });
            if (_.length > 2) {
              var E = _.slice(0, 2),
                y = 1.2 * _[0][1];
              b = [
                ...E,
                ..._.slice(2).filter((e) => {
                  var t = a()(e, 2);
                  return t[0], t[1] < y;
                }),
              ];
            } else b = _;
            return b.map((e) => a()(e, 1)[0]);
          })(
            e,
            t.filter((e) => !s.has(e)),
            n
          );
        return [...r, ...i];
      }
      function y(e, t, n, r) {
        return E(e, t, (e) => {
          var t = n(e);
          return null == t
            ? null
            : "GROUP" === t.type || "PENDING_GROUP" === t.type
            ? { titled: t.groupInfo, contact: null }
            : { contact: (0, s.c)(t.jid, r), titled: null };
        });
      }
      function I(e, t, n) {
        return E(e, t, (e) => {
          var t = n(e);
          return null == t ? null : { contact: t, titled: null };
        });
      }
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n(1),
        a = (n(13), n(383)),
        s = class {
          constructor(e) {
            (this.Eb = null), (this.Ea = e);
          }
          setData(e, t) {
            var n = this.Ea;
            if (!n.hasOwnProperty(e) || t !== n[e]) {
              n[e] = t;
              var r = this.Eb;
              r && r();
            }
          }
          getLiveUpdatingData() {
            return this.Ea;
          }
          setOnDirty(e) {
            this.Eb = e;
          }
        };
      function i() {}
      var o = class {
        constructor() {
          (this.Ec = { hidden: !1 }), (this.Ed = null);
        }
        setDownArrow(e) {
          this.Ec.onArrowDown = e;
        }
        setUpArrow(e) {
          this.Ec.onArrowUp = e;
        }
        setUpDownArrows(e, t) {
          this.setUpArrow(e), this.setDownArrow(t);
        }
        setLeftArrow(e) {
          this.Ec.onArrowLeft = e;
        }
        setRightArrow(e) {
          this.Ec.onArrowRight = e;
        }
        setLeftRightArrows(e, t) {
          this.setLeftArrow(e), this.setRightArrow(t);
        }
        setCenterLabel(e, t) {
          var n = this.Ec;
          (n.center = e),
            (n.centerIcon = null),
            (n.centerRawString = null),
            (n.onSoftCenter = t);
        }
        setCenterIcon(e, t) {
          var n = this.Ec;
          (n.center = null),
            (n.centerIcon = e),
            (n.centerRawString = null),
            (n.onSoftCenter = t);
        }
        dangerouslySetCenterRawString(e, t) {
          var n = this.Ec;
          (n.center = null),
            (n.centerIcon = null),
            (n.centerRawString = e),
            (n.onSoftCenter = t);
        }
        setLeftLabel(e, t) {
          var n = this.Ec;
          (n.left = e),
            (n.leftIcon = null),
            (n.leftRawString = null),
            (n.onSoftLeft = t);
        }
        setLeftIcon(e, t) {
          var n = this.Ec;
          (n.left = null),
            (n.leftIcon = e),
            (n.leftRawString = null),
            (n.onSoftLeft = t);
        }
        dangerouslySetLeftRawString(e, t) {
          var n = this.Ec;
          (n.left = null),
            (n.leftIcon = null),
            (n.leftRawString = e),
            (n.onSoftLeft = t);
        }
        addCancel(e) {
          this.setLeftLabel(761, (t) => (null != e ? e(t) : t.goBack()));
        }
        setLeftAsBack() {
          this.setLeftLabel(758, (e) => {
            e.goBack();
          });
        }
        setRightLabel(e, t) {
          var n = this.Ec;
          (n.right = e),
            (n.rightIcon = null),
            (n.rightRawString = null),
            (n.onSoftRight = t);
        }
        setRightOptions(e) {
          var t = this.Ec;
          (t.right = null),
            (t.rightIcon = (0, r.b)(2, a.a, { className: "AB" })),
            (t.rightRawString = null),
            (t.onSoftRight = e);
        }
        setRightIcon(e, t) {
          var n = this.Ec;
          (n.right = null),
            (n.rightIcon = e),
            (n.rightRawString = null),
            (n.onSoftRight = t);
        }
        dangerouslySetRightRawString(e, t) {
          var n = this.Ec;
          (n.right = null),
            (n.rightIcon = null),
            (n.rightRawString = e),
            (n.onSoftRight = t);
        }
        setBack(e) {
          this.Ec.onBack = e;
        }
        setOnEndCall(e) {
          this.Ec.onEndCall = e;
        }
        setOnCall(e) {
          this.Ec.onCall = e;
        }
        setFull(e) {
          this.Ec.full = e;
        }
        setHoldCenter(e, t) {
          (this.Ec.onHoldCenter = e), (this.Ec.onReleaseHoldCenter = t);
        }
        hide() {
          this.Ec.hidden = !0;
        }
        disableBar() {
          var e = this.Ec;
          null != e.onSoftLeft && (e.onSoftLeft = i),
            null != e.onSoftCenter && (e.onSoftCenter = i),
            null != e.onSoftRight && (e.onSoftRight = i);
        }
        addData(e, t) {
          this.Ed &&
            e !== this.Ed &&
            __LOG__(4)`attachFormData called twice, which is unsupported`,
            (this.Ed = e),
            t(e.Ea);
        }
        makeSoftKeys() {
          return this.Ec;
        }
        getAttachment() {
          return this.Ed;
        }
      };
    },
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(200),
        l = n(18),
        c = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Jy = a.e()),
              (this.state = { overflow: !1 }),
              e
            );
          }
          componentDidMount() {
            var e = this.Jy.current;
            if (null != e) {
              var t = e.children;
              if (2 === t.length) {
                var n = t[0].offsetHeight,
                  r = n > e.offsetHeight;
                r && this.setState({ overflow: !0 });
                var a = this.props.onMount;
                a && a({ ref: e, contentHeight: n, overflowing: r });
              } else __LOG__(3)`MultiLineText should have exactly two children`;
            }
          }
          render() {
            var e = this.props,
              t = e.whitespaceMsg ? (0, l.c)((0, o.d)(e.whitespaceMsg)) : null;
            if (e.truncated) {
              var n = e.isUsingMoreLabel
                ? (0, r.b)(2, l.b, {
                    l10n: 506,
                    className: (0, i.a)("Fx", e.moreLabelClassName),
                  })
                : (0, r.f)(1, "span", e.moreLabelClassName, "…", 16);
              return (0, r.f)(
                1,
                "div",
                (0, i.a)(
                  "Fv",
                  e.textClassName,
                  e.maxLineClassName,
                  this.state.overflow && "Fq"
                ),
                [
                  (0, r.f)(1, "div", null, [e.children, t], 0, {
                    dir: e.dir || "auto",
                  }),
                  (0, r.f)(
                    1,
                    "div",
                    "Fr",
                    [
                      (0, r.f)(1, "div", "Fs", " ", 16),
                      (0, r.f)(
                        1,
                        "div",
                        (0, i.a)("Ft", null != t && "Fu"),
                        n,
                        0
                      ),
                    ],
                    4
                  ),
                ],
                4,
                null,
                null,
                this.Jy
              );
            }
            return (0, r.f)(
              1,
              "div",
              (0, i.a)("Fw", e.textClassName),
              [e.children, t],
              0,
              { dir: e.dir || "auto" }
            );
          }
        };
      t.a = c;
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var r = n(35),
        a = n(14),
        s = n(210),
        i = n(320),
        o = n(19),
        l = n(110);
      function c(e, t) {
        if (t.toLowerCase().startsWith(l.a))
          (0, l.k)(e, { name: "view", data: { type: "url", url: t } });
        else {
          var n = (0, r.i)(t);
          if (null != n) {
            var c = n.toString(),
              u = c.toLowerCase();
            if (u.startsWith(s.a)) {
              var d = (0, s.b)(c);
              if (null != d)
                return (
                  (0, i.a)(e, d, void 0, !1),
                  void WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 8])
                );
            }
            u.startsWith(a.q)
              ? (function (e, t) {
                  (0, l.k)(e, { name: "JioCloudShare", data: { url: t } });
                })(e, c)
              : u.startsWith(a.l) || u.startsWith(a.k)
              ? (function (e, t) {
                  (0, l.k)(e, {
                    name: "maps",
                    data: { url: t, source: "whatsapp" },
                  });
                })(e, c)
              : u.startsWith(a.T)
              ? (0, l.f)(u, e)
                ? WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 27])
                : ((0, s.c)(e, n),
                  WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 2]))
              : (0, l.k)(e, { name: "view", data: { type: "url", url: c } });
          } else (0, o.e)({ title: 229, text: 457 });
        }
      }
    },
    function (e, t, n) {
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return s;
        });
      var r = n(234);
      n.d(t, "b", function () {
        return r.b;
      });
      var a = (0, r.e)(!1),
        s = (0, r.e)(!0);
    },
    function (e, t, n) {
      n.d(t, "e", function () {
        return m;
      }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "d", function () {
          return S;
        }),
        n.d(t, "a", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "f", function () {
          return I;
        });
      var r = n(1),
        a = (n(13), n(3)),
        s = n(19),
        i = n(232),
        o = n(112),
        l = n(56),
        c = n(164),
        u = n(355),
        d = n(50),
        h = n(18),
        p = n(364),
        f = n(308),
        g = n(185),
        v = n(14);
      function m(e) {
        var t,
          n = e.expiration,
          a = e.selected,
          s = e.status;
        "pending" === s
          ? (t = (0, r.b)(2, c.a, { className: "IE" }))
          : null != s && (t = (0, r.b)(2, u.a, { className: "IF" }));
        var i = (0, r.b)(2, y, { value: n });
        return (0, r.b)(2, o.a, {
          selected: a,
          title: 276,
          rawSubtitle: i,
          rightComponent: t,
        });
      }
      var b = class extends l.b {
        shouldComponentUpdate(e, t) {
          var n = this.props;
          return (
            n !== e &&
            (n.chat !== e.chat ||
              n.expiration !== e.expiration ||
              n.selected !== e.selected ||
              n.status !== e.status ||
              n.job !== e.job)
          );
        }
        addSoftKeys(e, t) {
          var n = this.props.status;
          if ("pending" !== n)
            if (null == n)
              e.setCenterLabel(774, () => {
                (0, i.f)(t, this.props.chat);
              });
            else {
              var r = n;
              e.setCenterLabel(229, () => {
                (0, s.e)({
                  title: 229,
                  text: r,
                  onClose: () => (0, g.b)(t, this.props.job),
                });
              });
            }
        }
        render() {
          var e = this.props;
          return m({
            expiration: e.expiration,
            selected: e.selected,
            status: e.status,
          });
        }
      };
      function _(e) {
        var t,
          n = e.chat,
          a = e.contact,
          s = e.selected,
          i = e.job,
          o = (null == (t = a.ephemeral) ? void 0 : t.expiration) || v.i,
          l = O(i);
        return (0, r.b)(2, b, {
          chat: n,
          expiration: o,
          selected: s,
          status: l,
          job: i,
        });
      }
      function S(e) {
        var t = e.chat,
          n = e.selected,
          a = e.job,
          s = t.groupInfo.expiration || v.i,
          i = O(a);
        return (0, r.b)(2, b, {
          chat: t,
          expiration: s,
          selected: n,
          status: i,
          job: a,
        });
      }
      function E(e) {
        var t = e.value;
        if (t === a.b) {
          var n = Math.floor(t / 3600);
          return (0, r.b)(2, h.b, { l10n: [n, 237] });
        }
        return (
          0 === t &&
            (__LOG__(4)`EphemeralEnabledDuration: 0 expiration passed`,
            SEND_LOGS("ephemeral-duration-zero")),
          (0, r.b)(2, p.a, { seconds: t })
        );
      }
      function y(e) {
        var t = e.value;
        return t === v.i
          ? (0, r.b)(2, h.b, { l10n: 269 })
          : (0, r.b)(2, E, { value: t });
      }
      function I(e, t, n) {
        var a = e === t;
        return (0, r.b)(2, o.k, {
          className: "IG",
          selected: n,
          children: [
            (0, r.f)(1, "div", null, (0, r.b)(2, y, { value: e }), 2),
            (0, r.b)(2, f.a, { selected: n, checked: a, disabled: !1 }),
          ],
        });
      }
      function O(e) {
        if ((0, d.f)(e)) return "pending";
        var t = (0, d.d)(e);
        if (t && "success" !== t)
          switch (t) {
            case "not-authorized":
              return 425;
            case "not-in-group":
              return 424;
            case "no-such-group":
              return 423;
            case "unknown":
            default:
              return 228;
          }
        return null;
      }
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return l;
        });
      var r = n(1),
        a = (n(13), n(32));
      function s(e) {
        var t = e.contact,
          n = e.unblock;
        return {
          title: 950,
          text: [(0, r.b)(2, a.a, { contact: t }), 245],
          confirm: 832,
          onConfirm: n,
        };
      }
      function i(e) {
        return (
          e.contact,
          { title: 950, text: 953, confirm: 832, onConfirm: e.unblock }
        );
      }
      function o(e) {
        return { title: 950, text: 952, confirm: 832, onConfirm: e.unblock };
      }
      function l(e) {
        return { text: 60, confirm: 759, onConfirm: e.block };
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var r = n(1),
        a = n(13),
        s = n(147),
        i = n(149),
        o = { sentinel: "REUSE_PROMISE" };
      function l(e) {
        var t = e.Component,
          n = e.allocate,
          s = e.deallocate,
          i = e.transform;
        return class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { mounted: !1 }),
              (this.Hh = null),
              e
            );
          }
          componentDidMount() {
            this.setState({ mounted: !0 });
          }
          componentWillUnmount() {
            var e = this.Hh;
            e && ((this.Hh = null), s(e.transformed, e.props));
          }
          render() {
            if (!this.state.mounted) return null;
            var e = this.props,
              a = this.Hh;
            if (a) {
              if (a.props !== e) {
                if (i)
                  a = { props: e, transformed: i(e, a.transformed, a.props) };
                else {
                  var o = a;
                  (a = { props: e, transformed: n(e) }),
                    s(o.transformed, o.props);
                }
                this.Hh = a;
              }
            } else this.Hh = a = { props: e, transformed: n(e) };
            return (0, r.i)((0, r.b)(2, t, Object.assign({}, a.transformed)));
          }
        };
      }
      function c(e) {
        var t = e.render,
          n = e.allocatePromise,
          a = e.deallocate;
        return l({
          Component(e) {
            var n = e.props,
              a = e.promise;
            return (0, r.b)(2, s.a, {
              promise: a,
              props: n,
              render: t,
              fallback: t,
            });
          },
          allocate(e) {
            var t = n(e, void 0);
            if (t === o)
              throw new Error(
                "PromiseAllocator given REUSE_PROMISE on first run"
              );
            return { props: e, promise: t };
          },
          deallocate(e) {
            var t = e.props,
              n = e.promise;
            a(n, t);
          },
          transform(e, t) {
            var r = t.props,
              a = t.promise,
              s = n(e, r);
            return { props: e, promise: s === o ? a : s };
          },
        });
      }
      function u(e) {
        return c({
          render: e.render,
          allocatePromise(t, n) {
            var r = e.getContentRef(t);
            return n && r === e.getContentRef(n)
              ? o
              : null == r
              ? Promise.resolve()
              : t.backend
                  .loadMsgContentBlob(e.getId(t), r)
                  .then((e) => (e ? (0, i.a)(e) : null));
          },
          deallocate(e) {
            e.then((e) => {
              e && (0, i.b)(e);
            });
          },
        });
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M13.925 12.458c-.029.598-.507 1.07-1.089 1.07h-.68c-.58 0-1.058-.472-1.087-1.074L10.5 5.697a1.157 1.157 0 01.3-.846c.208-.226.488-.351.79-.351h1.817c.303 0 .584.125.793.353.207.227.313.524.298.837l-.574 6.768zm-1.42 7.07c-.624 0-1.122-.18-1.48-.533-.357-.352-.539-.851-.539-1.483 0-.634.18-1.128.536-1.469.353-.341.852-.514 1.482-.514.625 0 1.118.18 1.465.537.344.354.517.84.517 1.446 0 .603-.174 1.094-.519 1.46-.352.37-.844.557-1.463.557zM12.5 0C5.608 0 0 5.608 0 12.5S5.608 25 12.5 25C19.393 25 25 19.392 25 12.5S19.393 0 12.5 0",
            }),
            2,
            { viewBox: "0 0 25 25" }
          );
        });
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var r = n(1),
        a = (n(13), n(15)),
        s = n(22),
        i = n.n(s),
        o = n(39),
        l = n(299),
        c = n(392),
        u = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M8.083 11.867a.399.399 0 01.615-.042l.455.427a.397.397 0 00.615-.043l6.802-9.026a.453.453 0 01.647-.083l.606.488a.49.49 0 01.08.67L9.94 14.83a.397.397 0 01-.615.043l-1.676-1.662a.561.561 0 01-.046-.71l.481-.635zM4.89 14.83a.397.397 0 01-.615.043L.138 10.689a.491.491 0 01-.007-.676l.538-.567a.452.452 0 01.653-.009l2.783 2.815a.397.397 0 00.614-.043l6.802-9.026a.453.453 0 01.647-.083l.606.488a.49.49 0 01.08.67L4.89 14.83z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        };
      function d(e) {
        var t = e.ack,
          n = e.className;
        return t === a.a.SENT || (0, o.i)(t)
          ? (0, r.b)(2, c.a, { className: (0, i.a)("IU", n) })
          : t === a.a.RECEIVED
          ? (0, r.b)(2, u, { className: (0, i.a)("IT", n) })
          : (0, o.h)(t)
          ? (0, r.b)(2, u, { className: (0, i.a)("IV", n) })
          : (0, o.f)(t) || t === a.a.CLOCK
          ? (0, r.b)(2, l.a, { className: (0, i.a)("IS", n) })
          : (__LOG__(3)`Unhandle ack level ${t}`, null);
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var r = n(1),
        a = (n(13), n(56)),
        s = n(76),
        i = n(22),
        o = n.n(i),
        l = n(384),
        c = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Ey = null),
              (this.Ez = () => {
                var e = this.Ey;
                null != e && (e.scrollTop -= s.o);
              }),
              (this.FA = () => {
                var e = this.Ey;
                null != e && (e.scrollTop += s.o);
              }),
              (this.FB = (e) => {
                this.Ey = e;
              }),
              e
            );
          }
          addSoftKeys(e) {
            e.setUpDownArrows(this.Ez, this.FA);
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, o.a)(l.a, this.props.className),
              this.props.children,
              0,
              null,
              null,
              this.FB
            );
          }
        };
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = n(127),
        a = n(118),
        s = n(19);
      function i(e, t) {
        (0, r.e)("app://kaios-plus.kaiostech.com").then((e) => {
          null == e
            ? (0, s.e)({
                title: 229,
                text: 947,
                onClose: t ? a.closeApp : "CLOSE",
              })
            : (t && setTimeout(a.closeApp, 2e3), e.launch());
        });
      }
      function o(e) {
        i(0, !0);
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var r = !1,
        a = 0,
        s = [];
      function i(e) {
        s.push(e), a > 0 && e.onVideoRequested();
      }
      function o(e) {
        var t = s.indexOf(e);
        t > -1 && s.splice(t, 1);
      }
      function l() {
        if (0 === a)
          for (var e = 0, t = s.length; e < t; ++e) s[e].onVideoRequested();
        ++a;
      }
      function c() {
        if (0 == --a)
          for (var e = 0, t = s.length; e < t; ++e) s[e].onVideoReleased();
      }
      function u() {
        r &&
          (__LOG__(
            4
          )`We should never request video from the camera twice, we probably forgot to release somewhere`,
          SEND_LOGS("video-requestCamera-missingRelease")),
          (r = !0),
          l();
      }
      function d() {
        r ||
          (__LOG__(
            4
          )`We should never release video from the camera without requesting`,
          SEND_LOGS("video-releaseCamera-missingRequest")),
          (r = !1),
          c();
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = n(92),
        a = Math.floor(10);
      function s(e, t, n, s) {
        var i,
          c = t.msgInfo,
          u = c.newest,
          d = c.oldestUnread;
        if (("ONE_TO_ONE" === t.type && (0, r.j)(e, t.jid), u)) {
          var h,
            p = !1;
          "unread" === n
            ? (h = d || u)
            : "newest" === n
            ? (h = u)
            : ((h = n), (p = !0));
          var f = { start: -a, end: a },
            g = o(e, t.id, h, f);
          i = {
            type: "OPEN_CHAT",
            chat: t,
            anchor: h,
            selectAnchor: p,
            desiredRange: f,
            loading: l(e, t.id, h, f, g),
            preloaded: g,
            withComposeBoxOpened: "withComposeBoxOpened" === s,
          };
        } else
          i = {
            type: "OPEN_CHAT",
            chat: t,
            anchor: "beginning",
            selectAnchor: !1,
            desiredRange: { start: -20, end: 0 },
            loading: null,
            preloaded: null,
            withComposeBoxOpened: "withComposeBoxOpened" === s,
          };
        e.dispatch(i);
      }
      function i(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
          a = t.chat.id,
          s = t.anchor,
          i = t.viewport.desiredRange,
          c = i.start,
          u = i.end,
          d = c,
          h = u;
        "newer" === n
          ? ((d -= r), (h = Math.min(h, d + 20)))
          : "older" === n && ((h += r), (d = Math.max(d, h - 20)));
        var p = { start: d, end: h },
          f = o(e, a, s, p);
        e.dispatch({
          type: "ADJUST_VIEWPORT",
          chatId: a,
          anchor: s,
          desiredRange: p,
          loading: l(e, a, s, p, f),
          preloaded: f,
        });
      }
      function o(e, t, n, r) {
        return e.knownViewportFromCache(t, n, r);
      }
      function l(e, t, n, r, a) {
        var s = r.start,
          i = r.end;
        if (!a) {
          if (s <= 0 && 0 < i) {
            var o = e.loadMsgRange(n, r, { chatId: t, anchor: n, range: r });
            return { older: o, newer: o };
          }
          return (
            __LOG__(4)`anchor unknown and range not surrounding it ${r}`, null
          );
        }
        var l = a.msgs,
          c = a.range,
          u =
            s < c.start &&
            (void 0 === a.newestIndex || a.newestIndex < c.start),
          d = c.end < i && (void 0 === a.oldestIndex || a.oldestIndex >= c.end);
        if (u && d && l.length <= 1) {
          var h = e.loadMsgRange(n, r, { chatId: t, anchor: n, range: r });
          return { older: h, newer: h };
        }
        if (u) {
          var p = l[0].id;
          return {
            newer: e.loadMsgRange(n, r, {
              chatId: t,
              anchor: p,
              range: { start: s - c.start, end: 1 },
            }),
          };
        }
        if (d) {
          var f = l[l.length - 1].id;
          return {
            older: e.loadMsgRange(n, r, {
              chatId: t,
              anchor: f,
              range: { start: 0, end: i - c.end + 1 },
            }),
          };
        }
        return null;
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = class {
        constructor(e) {
          (this.max = e), (this.cache = new Map());
        }
        get(e) {
          var t = this.cache.get(e);
          return t && (this.cache.delete(e), this.cache.set(e, t)), t;
        }
        set(e, t) {
          if (this.cache.has(e)) this.cache.delete(e);
          else if (this.cache.size === this.max) {
            var n = this.KP();
            n && this.cache.delete(n);
          }
          this.cache.set(e, t);
        }
        KP() {
          return this.cache.keys().next().value;
        }
      };
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n(146);
      function a(e, t) {
        var n = new r.a(791);
        return (
          n.add(519, e.muteChat, t, 28800),
          n.add(518, e.muteChat, t, 604800),
          n.add(520, e.muteChat, t, "always"),
          n
        );
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M11.735 1a5.273 5.273 0 015.266 5.263v5.467a5.272 5.272 0 01-5.266 5.266H6.267A5.272 5.272 0 011 11.73V6.266A5.273 5.273 0 016.267 1h5.468zm3.143 10.721V6.274a3.144 3.144 0 00-3.144-3.143H6.248a3.144 3.144 0 00-3.144 3.143v5.447a3.144 3.144 0 003.144 3.144h5.486a3.144 3.144 0 003.144-3.144zM9.735 8.999h2.582c.285 0 .516.232.516.517v.694c0 .285-.23.516-.516.517H9.304a.516.516 0 01-.085.007h-.7a.516.516 0 01-.516-.516V5.395c0-.285.231-.516.516-.516h.7c.285 0 .516.231.516.516v3.604z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M13.363 3A1.631 2.631 0 0115 4.612v10.775c-.003.889-.734 1.609-1.637 1.613H4.64c-.905-.003-1.637-.723-1.64-1.613V4.612c.004-.89.736-1.61 1.64-1.612h8.723zm-2.935 8.856H5.765v1.436h4.66V11.86l.003-.003zM5.765 8.884v1.436h6.593V8.884H5.765zm0-2.946v1.436h6.593V5.94H5.765v-.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return k;
      }),
        n.d(t, "d", function () {
          return L;
        }),
        n.d(t, "a", function () {
          return T;
        }),
        n.d(t, "c", function () {
          return N;
        });
      var r = n(1),
        a = n(13),
        s = n(160),
        i = n(314),
        o = n(48),
        l = n(40),
        c = n(22),
        u = n.n(c),
        d = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Kr = a.e()),
              (this.Ks = a.e()),
              (this.state = { marqueeEnabled: !1, animationFinished: !1 }),
              (this.Ku = () => {
                this.setState({ animationFinished: !0 });
              }),
              e
            );
          }
          componentDidMount() {
            this.Kt();
          }
          componentDidUpdate() {
            this.Kt();
            var e = this.Kr.current;
            e && e.addEventListener("transitionend", this.Ku);
          }
          componentWillUnmount() {
            var e = this.Kr.current;
            e && e.removeEventListener("transitionend", this.Ku);
          }
          Kt() {
            var e = this.Kr.current,
              t = this.Ks.current;
            if (e && t) {
              var n =
                e.getBoundingClientRect().width >
                t.getBoundingClientRect().width;
              this.state.animationFinished ||
                n === this.state.marqueeEnabled ||
                this.setState({ marqueeEnabled: n });
            }
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, u.a)("Id", this.state.animationFinished && "Ie"),
              (0, r.f)(
                1,
                "div",
                (0, u.a)(
                  "If",
                  this.state.marqueeEnabled &&
                    !this.state.animationFinished &&
                    "Ig"
                ),
                this.props.children,
                0,
                null,
                null,
                this.Kr
              ),
              2,
              null,
              null,
              this.Ks
            );
          }
        },
        h = n(54),
        p = n(188),
        f = n(76),
        g = n(14),
        v = n(172),
        m = n(103),
        b = n(321),
        _ = n(18),
        S = n(171),
        E = "DO GK";
      function y(e, t, n) {
        return (0, r.f)(
          1,
          "div",
          "DJ",
          [
            e,
            (0, r.f)(
              1,
              "div",
              "DL",
              [(0, r.f)(1, "div", "DM", t, 0), (0, r.f)(1, "div", "DN", n, 0)],
              4
            ),
          ],
          0
        );
      }
      var I = (0, h.c)(
          function (e) {
            var t,
              n = e.lastSeen,
              a = e.isOnline,
              s = e.contact;
            return (
              (t = a
                ? (0, r.b)(2, _.b, { l10n: 592 })
                : null != n
                ? (0, r.b)(2, d, { children: [(0, v.d)(s), o.a, (0, S.e)(n)] })
                : (0, v.d)(s)),
              (0, r.f)(1, "div", "DK", t, 0)
            );
          },
          (e, t, n) => {
            var r = !1,
              a = null,
              s = n.chat.jid,
              o = (0, l.c)(s, e.contacts),
              c = e.onlineOrLastSeen[s];
            return (
              (0, i.a)(c, e.settings.lastSeen, o) &&
                ("online" === c ? (r = !0) : (a = c)),
              { isOnline: r, lastSeen: a, contact: o }
            );
          }
        ),
        O = class extends a.b {
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e &&
                (n.contact !== e.contact || n.children !== e.children)) ||
              (r !== t && r.tempBusinessAccount !== t.tempBusinessAccount)
            );
          }
          constructor(e) {
            super(e),
              (this.state = {
                tempBusinessAccount: null != e.contact.verifiedInfo,
              });
          }
          componentDidMount() {
            this.state.tempBusinessAccount &&
              (this.Hi = setTimeout(() => {
                this.setState({ tempBusinessAccount: !1 });
              }, 4e3));
          }
          componentWillUnmount() {
            clearTimeout(this.Hi);
          }
          render() {
            return this.state.tempBusinessAccount
              ? (0, r.b)(2, _.b, { l10n: 591 })
              : this.props.children;
          }
        };
      function A(e) {
        return (0, r.b)(2, O, {
          contact: (0, l.c)(e.chat.jid, e.contacts),
          children: (0, r.b)(2, I, { chat: e.chat }),
        });
      }
      function C(e) {
        return (0, r.b)(2, O, {
          contact: (0, l.c)(e.chat.jid, e.contacts),
          children: (0, r.b)(2, S.a, { chat: e.chat }),
        });
      }
      function k(e) {
        var t = e.chat,
          n = e.contacts,
          a = (0, l.c)(t.jid, n);
        if (!f.f) {
          var i = a.verifiedInfo ? A : I;
          return (0, r.b)(2, s.b, { chat: t, WhileIdle: i });
        }
        var o = a.verifiedInfo ? C : S.a,
          c = (0, v.d)(a);
        return y(
          (0, r.b)(2, m.c, {
            className: E,
            jid: t.jid,
            avatarPlacement: "chatHeader",
            ephemeral: "ONE_TO_ONE",
          }),
          c,
          (0, r.b)(2, s.b, { chat: t, WhileIdle: o })
        );
      }
      function w(e) {
        return (0, r.f)(1, "div", "DK", (0, v.c)(e.chat.groupInfo), 0);
      }
      function D(e) {
        return e.chat.groupInfo.support
          ? (0, r.b)(2, _.b, { l10n: 445 })
          : (0, r.f)(
              1,
              "div",
              "DI GI GE",
              (0, p.f)(e.contacts, e.chat.groupInfo.participants, !1),
              0
            );
      }
      function L(e) {
        var t = e.chat,
          n = e.children;
        return y(
          (0, r.b)(2, m.c, {
            className: E,
            jid: t.jid,
            avatarPlacement: "chatHeader",
            ephemeral: t.groupInfo.expiration || g.i,
          }),
          (0, v.c)(t.groupInfo),
          n
        );
      }
      function T(e) {
        var t = e.chat;
        return f.f
          ? (0, r.b)(2, L, {
              chat: t,
              children: [(0, r.b)(2, s.a, { chat: t, WhileIdle: D }), ","],
            })
          : (0, r.b)(2, s.a, { chat: t, WhileIdle: w });
      }
      function N(e) {
        var t = e.chat;
        return f.f
          ? y(
              (0, r.b)(2, b.a, {
                className: E,
                groupPicture: t.groupInfo.groupPicture,
              }),
              (0, o.b)(t.groupInfo.title),
              null
            )
          : (0, o.b)(t.groupInfo.title);
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n(1),
        a = (n(13), n(22)),
        s = n.n(a);
      function i(e) {
        var t = e.checked,
          n = e.selected,
          a = e.disabled;
        return (0, r.f)(
          1,
          "div",
          "Cw",
          (0, r.f)(
            1,
            "div",
            (0, s.a)("Cx", n && "Cz", t && "Cy", a && "DB"),
            t && (0, r.f)(1, "div", "DA"),
            0
          ),
          2
        );
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return h;
        });
      var r = n(61),
        a = n(14),
        s = n(74),
        i = n(149),
        o = n(122),
        l = n(241),
        c = n(82),
        u = new Map();
      function d(e) {
        var t = u.get(e);
        return t && u.delete(e), t;
      }
      function h(e) {
        __LOG__(2)`exe::initialize page: caching images`;
        var t = new r.a(),
          n = 0;
        function d() {
          0 == --n && t.resolve();
        }
        var h = e.chatlist.orderedChatIds,
          p = Math.min(a.c, h.length);
        if (!(p > 0)) return Promise.resolve();
        for (var f = [], g = 0; g < p; g++) f.push(e.chatlist.chats[h[g]].jid);
        return (
          (0, s.getProfilePicTable)()
            .getIcons(f)
            .then((e) => {
              e.forEach((e) => {
                if (e && e.image) {
                  var t = (0, i.a)(e.image);
                  u.set(e.jid, t),
                    (r = t),
                    ((a = new Image()).src = r),
                    (a.onload = d),
                    (a.onerror = d),
                    n++;
                }
                var r, a;
              }),
                n++,
                d();
            }),
          (0, l.a)(t.promise, 250).catch((0, o.a)(c.b, () => {}))
        );
      }
    },
    function (e, t, n) {
      t.a = class {
        constructor(e) {
          (this.Gy = new Map()),
            (this.Gz = new Set()),
            (this.Gx = e.idealMaxSize),
            (this.HA = e.generator),
            (this.HB = e.destroyer),
            (this.HC = e.serializer);
        }
        has(e) {
          var t = this.HC(e);
          return this.Gy.has(t);
        }
        createOrRetain(e) {
          var t = this.HC(e),
            n = this.Gy.get(t);
          if (n) return 0 === n.count && this.Gz.delete(t), n.count++, n.value;
          var r = this.HA(e);
          return this.Gy.set(t, { value: r, count: 1 }), r;
        }
        release(e) {
          var t = this.HC(e),
            n = this.Gy.get(t);
          n && (n.count--, 0 === n.count && this.Gz.add(t)),
            this.collectGarbage();
        }
        collectGarbage() {
          var e = this.Gy.size - this.Gx;
          if (e > 0)
            for (
              var t = this.Gz.values(), n = 0, r = t.next();
              !r.done && n <= e;
              r = t.next()
            ) {
              var a = r.value,
                s = this.Gy.get(a);
              s &&
                (this.Gy.delete(a), this.Gz.delete(a), this.HB(s.value), n++);
            }
        }
      };
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n(31),
        a = n.n(r),
        s = n(40);
      function i(e, t, n) {
        if (!e || "online" === e) return !0;
        var r = !!n && (0, s.k)(n);
        switch (t) {
          case "all":
            return !0;
          case "none":
            return !1;
          case "contacts":
            return r;
          default:
            return (0, a.a)(t);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return E;
      });
      var r = n(1),
        a = n(13),
        s = n(54),
        i = n(103),
        o = n(18),
        l = n(32),
        c = n(48),
        u = n(275),
        d = n(164),
        h = n(174),
        p = n(378),
        f = n(14),
        g = n(19),
        v = n(126),
        m = n(100),
        b = n(16),
        _ = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.KA = !1),
              (this.onMultilineMount = (e) => {
                var t = e.overflowing,
                  n = this.props,
                  r = n.backend,
                  a = n.code,
                  s = n.extended,
                  i = n.forceShowExtend,
                  o = n.groupInvite;
                !t || s || i || E(r, a, o, !0);
              }),
              e
            );
          }
          componentDidMount() {
            var e = this.props,
              t = e.backend,
              n = e.groupInvite,
              r = e.code;
            (this.KA = !0),
              n
                ? (0, h.a)(t, n.group)
                : t
                    .sendAndReceive("backend", "queryGroupInfoFromCode", {
                      code: r,
                    })
                    .then((e) => {
                      if (this.KA) {
                        if (e.error) {
                          var n = e.error;
                          return "already-in-group" === n.reason
                            ? void (function (e, t) {
                                (0, g.a)(),
                                  (0, m.a)(e, t, "newest"),
                                  (0, v.a)(390);
                              })(t, n.extra)
                            : void (function (e, t) {
                                var n;
                                switch (t.reason) {
                                  case "removed":
                                    n = 404;
                                    break;
                                  case "group-not-found":
                                    n = 407;
                                    break;
                                  case "invalid-link":
                                    n = 398;
                                    break;
                                  case "invite-link-reset":
                                    n = 401;
                                    break;
                                  case "too-many-participants":
                                    n = 474;
                                    break;
                                  case "growth-locked":
                                    n = 470;
                                    break;
                                  default:
                                    t.reason, (n = 396);
                                }
                                (0, g.e)({ text: n });
                              })(0, n);
                        }
                        E(t, r, e.result, !1);
                      }
                    });
          }
          componentWillUnmount() {
            this.KA = !1;
          }
          render() {
            var e = this.props,
              t = e.code,
              n = e.user,
              a = e.contacts,
              s = e.groupInvite,
              h = e.extended;
            if (!s) return (0, r.b)(2, d.a, { type: "dialog" });
            var f = (0, r.b)(2, i.c, {
                jid: s.group,
                type: "thumb",
                invite: t,
              }),
              g = null,
              v = s.creatorJid;
            if (n === v) g = 394;
            else if (null != v) {
              var m = (0, l.g)(a, v);
              g = [
                null != m ? (0, r.f)(1, "span", "GB", m, 0) : (0, l.e)(a, v),
                104,
              ];
            }
            var b =
                null != g &&
                (0, r.f)(
                  1,
                  "div",
                  "Fy GH GC GI GE",
                  (0, r.b)(2, o.b, { l10n: g }),
                  2
                ),
              _ = (0, r.c)(
                [
                  b,
                  s.description
                    ? (0, r.b)(2, u.a, {
                        textClassName: "Fz GH GC",
                        maxLineClassName: "GA",
                        truncated: !h,
                        onMount: this.onMultilineMount,
                        children: (0, c.b)(s.description),
                      })
                    : null,
                ],
                0
              );
            return (0, r.b)(2, p.a, {
              avatar: f,
              contacts: a,
              extended: h,
              participants: s.participantJids,
              groupSize: s.size,
              includeYou: !1,
              subtitle: _,
              title: s.title,
            });
          }
        },
        S = (0, s.c)(_, (e, t, n) => ({
          user: e.user.jid,
          backend: t,
          code: n.code,
          groupInvite: n.groupInvite,
          contacts: e.contacts,
          forceShowExtend: n.forceShowExtend,
          extended: n.extended,
        }));
      function E(e, t, n, a, s) {
        if (n) {
          var i = n.size,
            o = n.participantJids,
            l = i - o.length > 0 ? 1 : 0,
            c = o.length + l,
            u = !s && (a || c > f.j),
            d = u
              ? () => {
                  E(e, t, n, !0, !0);
                }
              : void 0;
          (0, g.h)(
            {
              title: 395,
              right: 783,
              onSoftRight: () =>
                (function (e, t) {
                  e.spinUntilJob(
                    b.e.joinGroupViaInvite(t),
                    (e) => () =>
                      (function (e, t) {
                        if ("success" !== t) {
                          var n;
                          switch (t.error.reason) {
                            case "not-authorized":
                              n = 472;
                              break;
                            case "group-not-found":
                              n = 471;
                              break;
                            case "invite-link-reset":
                              n = 473;
                              break;
                            case "too-many-participants":
                              n = 474;
                              break;
                            case "growth-locked":
                              n = 470;
                              break;
                            default:
                              t.error.reason, (n = 469);
                          }
                          (0, g.e)({ text: n });
                        }
                      })(0, e),
                    399,
                    169
                  );
                })(e, t),
              center: u ? 790 : void 0,
              onSoftCenter: d,
              left: 761,
              onSoftLeft: "CLOSE",
              onBack: "CLOSE",
            },
            (0, r.b)(2, S, {
              code: t,
              groupInvite: n,
              forceShowExtend: a,
              extended: s || !1,
            })
          );
        } else
          (0, g.h)(
            { title: 395, left: 761, onSoftLeft: "CLOSE", onBack: "CLOSE" },
            (0, r.b)(2, S, {
              code: t,
              groupInvite: n,
              forceShowExtend: a,
              extended: s || !1,
            })
          );
      }
    },
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(103),
        i = n(352),
        o = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.groupPicture !== e.groupPicture || n.className !== e.className)
            );
          }
          render() {
            var e = this.props,
              t = e.groupPicture,
              n = e.className,
              a = t
                ? (0, r.b)(2, i.b, { blob: t, className: "FB" })
                : (0, s.a)("FC");
            return (0, r.f)(1, "div", n, a, 0);
          }
        };
      t.a = o;
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      }),
        n(36),
        n(34);
      var r = n(19),
        a = n(279);
      function s(e, t, n, s) {
        if (navigator.onLine)
          if (n)
            (0, r.f)(
              (0, a.c)({
                contact: e,
                unblock: () => {
                  t.unblockUser(e.jid);
                },
              })
            );
          else {
            var i = () => {
              t.startVoipCall(e.jid, s);
            };
            !(function (e) {
              switch (e) {
                case "conversation":
                case "chatList":
                case "contactInfo":
                  return !0;
                default:
                  return !1;
              }
            })(s)
              ? i()
              : (0, r.f)({ text: 106, confirm: 760, onConfirm: i });
          }
        else (0, r.e)({ title: 577, text: 576 });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return b;
      }),
        n.d(t, "b", function () {
          return _;
        });
      var r,
        a,
        s,
        i = n(1),
        o = n(13),
        l = n(70),
        c = n(248),
        u = n(148),
        d = n(117),
        h = n(22),
        p = n.n(h),
        f = n(18),
        g = n(56),
        v = n(73),
        m =
          ((a = r = class extends o.a {
            constructor(e) {
              super(e),
                s.call(this),
                (this.state = (0, v.j)(e)),
                null != e.search &&
                  (0, v.b)(e.search) > 0 &&
                  (this.JY = new l.a(this.onSearchDidChange));
            }
            componentDidMount() {
              var e = this.props,
                t = e.start,
                n = e.onStatus,
                r = this.Jc.current,
                a = this.Ja;
              if (null != r && null != a) {
                var s = t ? t.scrollFromTop : "start",
                  i = r.getBoundingClientRect();
                "none" === s ||
                  ("start" === s || "end" === s
                    ? this.scrollIntoView(r, s, !1)
                    : (a.scrollTop += i.top - s));
              }
              n && n(this.state.status),
                document.addEventListener("focus_input", this.Jd);
            }
            componentDidUpdate(e, t) {
              this.state.status !== t.status &&
                (cancelAnimationFrame(this.JX),
                (this.JX = requestAnimationFrame(() => {
                  this.scrollSelectedIntoView();
                }))),
                (0, v.l)(this.state.status, t.status, this.props.onStatus);
            }
            componentWillUnmount() {
              this.JY && this.JY.cancel(),
                cancelAnimationFrame(this.JX),
                document.removeEventListener("focus_input", this.Jd);
            }
            isSearching() {
              return (0, v.k)(this.state);
            }
            getSelectedNode() {
              return this.Jc.current;
            }
            clearSearch() {
              this.setState({ filteredItems: null });
            }
            scrollSelectedIntoView() {
              var e = this.state.status;
              e.searching
                ? this.scrollIntoView(this.Jb.current, "start", !0)
                : e.scrolling &&
                  this.scrollIntoView(
                    this.Jc.current,
                    e.goingDown ? "end" : "start"
                  );
            }
            goToSearch() {
              var e = (0, v.i)(this.props);
              e && this.setState(e);
            }
            isSelected(e) {
              return (0, v.e)(this.state.status) === e;
            }
            getSelected() {
              var e = (0, v.e)(this.state.status),
                t = this.Jc.current;
              return null != e && t ? { item: e, node: t } : null;
            }
            scrollIntoView(e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              e && (0, u.e)(e, { block: t, force: n });
            }
            renderSearch() {
              if (null == this.props.search) return null;
              var e = !0 === this.state.status.searching,
                t = !e;
              return (0, i.f)(
                1,
                "div",
                (0, p.a)(d.g, e && d.h),
                [
                  (0, i.b)(2, c.a, {
                    forwardedRef: this.JZ,
                    hasFocusPriority: !1,
                    className: t ? void 0 : d.d,
                  }),
                  (0, i.b)(2, c.a, {
                    hasFocusPriority: !0,
                    onChange: this.onSearchChange,
                    className: t ? d.c : d.f,
                  }),
                ],
                4,
                null,
                "search",
                this.Jb
              );
            }
            render() {
              var e = this.props,
                t = this.state;
              if (0 === t.items.length)
                return null != e.emptyLabel
                  ? (0, i.f)(
                      1,
                      "div",
                      d.a,
                      (0, i.b)(2, f.b, { l10n: e.emptyLabel }),
                      2
                    )
                  : null;
              var n = null;
              if (
                null != e.search &&
                null != t.filteredItems &&
                0 === t.filteredItems.length
              )
                n = (0, i.f)(
                  1,
                  "div",
                  d.b,
                  (0, i.b)(2, f.b, { l10n: e.search.emptyLabel }),
                  2
                );
              else {
                var r = (0, v.d)(t),
                  a = e.keyOf,
                  s = e.renderItem;
                n = [];
                for (var o = 0; o < r.length; ++o) {
                  var l = r[o],
                    c = this.isSelected(l);
                  n.push(
                    (0, i.f)(
                      1,
                      "div",
                      null,
                      s(l, c, o, r),
                      0,
                      null,
                      a(l),
                      c ? this.Jc : null
                    )
                  );
                }
              }
              return (0, i.f)(
                1,
                "div",
                (0, p.a)(d.e, e.className),
                [this.renderSearch(), n],
                0,
                null,
                null,
                this.setListArea
              );
            }
          }),
          (r.getDerivedStateFromProps = v.c),
          (s = function () {
            (this.JY = null),
              (this.JZ = o.e()),
              (this.Ja = null),
              (this.Jb = o.e()),
              (this.Jc = o.e()),
              (this.Jd = () => {
                this.scrollSelectedIntoView();
              }),
              (this.setListArea = (e) => {
                this.Ja = e;
              }),
              (this.goTo = (e) => {
                var t = (0, v.f)(e, this.state, this.props);
                t && this.setState(t);
              }),
              (this.goToPrevious = () => {
                cancelAnimationFrame(this.JX),
                  (this.JX = requestAnimationFrame(() => {
                    var e = (0, v.h)(this.state, this.props);
                    e && this.setState(e);
                  }));
              }),
              (this.goToNext = () => {
                cancelAnimationFrame(this.JX),
                  (this.JX = requestAnimationFrame(() => {
                    var e = (0, v.g)(this.state, this.props);
                    e && this.setState(e);
                  }));
              }),
              (this.onSearchDidChange = (e) => {
                if (e) {
                  if (this.props.search) {
                    var t = e;
                    this.setState((e, n) => {
                      var r = n.search;
                      return (
                        r && {
                          searchInput: t,
                          filteredItems: r.filter(t, e.items),
                        }
                      );
                    });
                  }
                } else this.clearSearch();
              }),
              (this.onSearchChange = (e) => {
                var t = this.props.search;
                if (null != t) {
                  var n = e.trim();
                  this.JY
                    ? this.JY.debounce((0, v.b)(t), n)
                    : this.onSearchDidChange(n),
                    this.JZ.current && this.JZ.current.setValue(n),
                    this.setState({ searchInput: n }),
                    this.goToSearch();
                }
              });
          }),
          a),
        b = class extends g.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Je = o.e()),
              (this.goToPrevious = () => {
                var e = this.Je.current;
                e && e.goToPrevious();
              }),
              (this.goToNext = () => {
                var e = this.Je.current;
                e && e.goToNext();
              }),
              (this.goTo = (e) => {
                var t = this.Je.current;
                t && t.goTo(e);
              }),
              e
            );
          }
          isSearching() {
            var e = this.Je.current;
            return null != e && e.isSearching();
          }
          getSelected() {
            var e = this.Je.current;
            if (null != e) return e.getSelected();
          }
          addSoftKeys(e, t) {
            var n;
            e.setUpDownArrows(this.goToPrevious, this.goToNext);
            var r = this.props.addSearchSoftKeys;
            r &&
              (null == (n = this.Je.current)
                ? void 0
                : n.state.status.searching) &&
              r(e, t);
          }
          render() {
            return (0, i.i)(
              (0, i.b)(2, m, Object.assign({}, this.props), null, this.Je)
            );
          }
        },
        _ = class extends g.c {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Je = o.e()),
              (this.goToPrevious = () => {
                var e = this.Je.current;
                e && e.goToPrevious();
              }),
              (this.goToNext = () => {
                var e = this.Je.current;
                e && e.goToNext();
              }),
              (this.goTo = (e) => {
                var t = this.Je.current;
                t && t.goTo(e);
              }),
              e
            );
          }
          addSoftKeys(e, t) {
            e.setUpDownArrows(this.goToPrevious, this.goToNext);
          }
          render() {
            var e = this.props;
            return (0, i.b)(
              2,
              m,
              {
                className: e.className,
                items: e.items,
                start: e.start,
                keyOf: e.keyOf,
                renderItem: e.renderItem,
                preventLoop: e.preventLoop,
              },
              null,
              this.Je
            );
          }
        };
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            [
              (0, r.f)(32, "path", null, null, 1, {
                "fill-rule": "evenodd",
                d:
                  "M12 19.1c-3.9 0-7.1-3.2-7.1-7.1S8.1 4.9 12 4.9s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1zm3.8-10.7c-.2-.2-.4-.2-.6 0L11 11.9c-.2.2-.2.5 0 .7l.8.8c.2.2.5.1.7-.1L16 9.2c.2-.2.1-.5 0-.6l-.2-.2z",
                "clip-rule": "evenodd",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d:
                  "M12 22C6.5 22 2 17.5 2 12c0-.4.3-.7.7-.7s.7.3.7.7c0 4.7 3.8 8.6 8.6 8.6 4.7 0 8.6-3.8 8.6-8.6S16.7 3.4 12 3.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c5.5 0 10 4.5 10 10s-4.5 10-10 10z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "c", function () {
        return l;
      }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return h;
        });
      var r = n(19),
        a = n(3),
        s = n(50),
        i = n(165),
        o = new Map();
      function l(e, t) {
        var n = t.jid,
          r = t.id,
          s = t.groupInfo,
          l = s.isAdmin,
          u = s.growthLocked;
        if (l)
          if (null != u && (o.delete(n), (0, a.p)(u.expiration)))
            (0, i.x)(e, 393, i.a);
          else {
            var d = o.get(n);
            null == d
              ? (function (e, t) {
                  var n = t.jid,
                    r = t.id;
                  e.spinUntilReadyOverlay(
                    e
                      .sendAndReceive("backend", "queryGroupInviteCode", {
                        groupJid: n,
                      })
                      .then((t) => () => {
                        var a, s;
                        if (t.error)
                          return (
                            "growth-locked" === t.error.reason
                              ? ((a = 393), (s = i.a))
                              : (t.error.reason, (a = 392)),
                            (0, i.x)(e, a, s),
                            "dontClose"
                          );
                        var l = t.result.code;
                        o.set(n, l), c(e, r, l);
                      }),
                    { title: 406 }
                  );
                })(e, t)
              : c(e, r, d);
          }
      }
      function c(e, t, n) {
        var r = (0, s.a)(e.getStoreState()),
          a = null != r ? r.chatlist.chats[t] : null;
        a
          ? "GROUP" !== a.type
            ? __LOG__(4)`openGroupInviteScreen given non-group`
            : e.openScreen("GROUP_INVITE_LINK", { chat: a, inviteCode: n })
          : __LOG__(3)`openGroupInviteScreen chat ${t} deleted`;
      }
      function u(e, t) {
        e.spinUntilReadyOverlay(
          e.resetGroupInviteCode(t).then((n) => () => {
            if (n.error) {
              var a,
                s,
                l = n.error;
              return (
                "growth-locked" === l.reason
                  ? ((a = 666), (s = i.a))
                  : (l.reason, (a = 665)),
                (0, i.x)(e, a, s),
                "dontClose"
              );
            }
            var c = n.result.code;
            return o.set(t, c), (0, r.e)({ text: 664 }), "dontClose";
          }),
          { title: 406, left: void 0 }
        );
      }
      function d(e, t, n) {
        o.set(t, n),
          e.dispatch({
            type: "GROUP_INVITE_CODE_CHANGED",
            code: n,
            groupJid: t,
          });
      }
      function h(e, t) {
        o.delete(t),
          e.dispatch({ type: "GROUP_INVITE_CODE_RESET", groupJid: t });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n(15),
        a = n(3),
        s = n(39),
        i = n(84),
        o = n(31),
        l = n.n(o),
        c = n(269),
        u = class {
          constructor() {
            (this.id = (0, r.y)()),
              (this.KH = (0, a.u)()),
              (this.KI = !1),
              (this.KJ = 0),
              (this.KK = 0);
          }
          statusTabOpened(e, t) {
            if (!this.KI) {
              this.KI = !0;
              var n = {
                statusSessionId: this.id,
                statusTabOpenT: (0, a.v)(this.KH),
                statusAvailableUpdatesCount: e,
              };
              t && (n.psaCampaigns = S(t)),
                WAM.log("regular", 1172, void 0, [
                  5,
                  2,
                  n.psaCampaigns,
                  2,
                  0,
                  n.statusAvailableUpdatesCount,
                  3,
                  0,
                  n.statusRankT,
                  1,
                  0,
                  n.statusSessionId,
                  4,
                  0,
                  n.statusTabOpenT,
                ]);
            }
          }
          stopStatusSession() {
            var e = (0, a.v)(this.KH);
            WAM.log("regular", 1174, void 0, [
              1,
              0,
              this.id,
              2,
              0,
              e,
              3,
              0,
              this.KJ,
              4,
              0,
              this.KK,
            ]);
          }
          statusMuted(e) {
            var t = { muteOrigin: 1, statusSessionId: this.id },
              n = (0, i.a)(e);
            n
              ? ((t.psaCampaignIds = S(n)),
                -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    2978,
                    void 0,
                    [
                      9,
                      1,
                      t.isPosterBiz,
                      10,
                      1,
                      t.isPosterInAddressBook,
                      8,
                      0,
                      t.muteAction,
                      6,
                      0,
                      t.muteOrigin,
                      7,
                      2,
                      t.psaCampaignId,
                      4,
                      2,
                      t.psaCampaignIds,
                      5,
                      0,
                      t.psaCampaignItemIndex,
                      3,
                      0,
                      t.statusItemIndex,
                      1,
                      0,
                      t.statusSessionId,
                      2,
                      0,
                      t.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  ))
              : WAM.log("regular", 2978, void 0, [
                  9,
                  1,
                  t.isPosterBiz,
                  10,
                  1,
                  t.isPosterInAddressBook,
                  8,
                  0,
                  t.muteAction,
                  6,
                  0,
                  t.muteOrigin,
                  7,
                  2,
                  t.psaCampaignId,
                  4,
                  2,
                  t.psaCampaignIds,
                  5,
                  0,
                  t.psaCampaignItemIndex,
                  3,
                  0,
                  t.statusItemIndex,
                  1,
                  0,
                  t.statusSessionId,
                  2,
                  0,
                  t.statusViewerSessionId,
                ]);
          }
        },
        d = class {
          constructor() {
            (this.id = (0, r.y)()),
              (this.KL = new Map()),
              (this.KM = new Map());
          }
          stopStatusViewerSession(e) {
            var t = this.id,
              n = "noSession" === e ? void 0 : e;
            this.KL.forEach((e) => {
              var r = {
                statusRowEntryMethod: e.entryMethod,
                statusRowIndex: e.index,
                statusRowSection: e.section,
                statusRowUnreadItemCount: e.unreads.length,
                statusRowViewCount: e.viewCount,
                statusSessionId: n,
                statusViewerSessionId: t,
                psaCampaigns: e.psaCampaigns,
              };
              e.psaCampaigns
                ? -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    1656,
                    void 0,
                    [
                      8,
                      2,
                      r.psaCampaigns,
                      5,
                      0,
                      r.statusRowEntryMethod,
                      4,
                      0,
                      r.statusRowIndex,
                      3,
                      0,
                      r.statusRowSection,
                      7,
                      0,
                      r.statusRowUnreadItemCount,
                      6,
                      0,
                      r.statusRowViewCount,
                      1,
                      0,
                      r.statusSessionId,
                      2,
                      0,
                      r.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  )
                : WAM.log("regular", 1656, void 0, [
                    8,
                    2,
                    r.psaCampaigns,
                    5,
                    0,
                    r.statusRowEntryMethod,
                    4,
                    0,
                    r.statusRowIndex,
                    3,
                    0,
                    r.statusRowSection,
                    7,
                    0,
                    r.statusRowUnreadItemCount,
                    6,
                    0,
                    r.statusRowViewCount,
                    1,
                    0,
                    r.statusSessionId,
                    2,
                    0,
                    r.statusViewerSessionId,
                  ]);
            }),
              this.KM.forEach((e, n) => {
                var r,
                  a,
                  s,
                  i,
                  o,
                  l,
                  c = this.KL.get(e.author);
                null == c &&
                  __LOG__(
                    4
                  )`Missing row for status, this mean we forgot to properly open the row when reaching it while viewing statuses`;
                var u = null == e.duration ? void 0 : _(e.duration),
                  d = {
                    mediaType: e.mediaType,
                    statusItemLength: u,
                    statusItemLoadTime: _(e.loadTime),
                    statusItemReplied: e.replyCount,
                    statusItemUnread:
                      null != (r = null == c ? void 0 : c.unreads.includes(n))
                        ? r
                        : void 0,
                    statusItemViewCount: e.viewCount,
                    statusItemViewResult: e.viewResult,
                    statusItemViewTime: _(e.viewTime),
                    statusRowIndex: null == c ? void 0 : c.index,
                    statusRowSection: null == c ? void 0 : c.section,
                    statusViewerSessionId: t,
                    statusItemIndex: e.index,
                    psaCampaignId:
                      null == (a = e.psaInfo) ? void 0 : a.psaCampaignId,
                    psaCampaignItemIndex:
                      null == (s = e.psaInfo) ? void 0 : s.psaCampaignItemIndex,
                    psaLinkAvailable:
                      null == (i = e.psaInfo) ? void 0 : i.psaLinkAvailable,
                    psaLinkLoadTime:
                      null == (o = e.psaInfo) ? void 0 : o.psaLinkLoadTime,
                    psaLinkOpenResult:
                      null == (l = e.psaInfo) ? void 0 : l.psaLinkOpenResult,
                  };
                e.psaInfo
                  ? -1 * Math.random() < 1 &&
                    WAM.log(
                      "regular",
                      1658,
                      void 0,
                      [
                        23,
                        1,
                        d.isPosterBiz,
                        25,
                        1,
                        d.isPosterInAddressBook,
                        4,
                        0,
                        d.mediaType,
                        17,
                        2,
                        d.psaCampaignId,
                        18,
                        0,
                        d.psaCampaignItemIndex,
                        19,
                        1,
                        d.psaLinkAvailable,
                        22,
                        1,
                        d.psaLinkClick,
                        21,
                        0,
                        d.psaLinkLoadTime,
                        20,
                        0,
                        d.psaLinkOpenResult,
                        14,
                        0,
                        d.statusItemImpressionCount,
                        16,
                        0,
                        d.statusItemIndex,
                        7,
                        0,
                        d.statusItemLength,
                        5,
                        0,
                        d.statusItemLoadTime,
                        8,
                        0,
                        d.statusItemReplied,
                        9,
                        1,
                        d.statusItemUnread,
                        10,
                        0,
                        d.statusItemViewCount,
                        3,
                        0,
                        d.statusItemViewResult,
                        6,
                        0,
                        d.statusItemViewTime,
                        2,
                        0,
                        d.statusRowIndex,
                        11,
                        0,
                        d.statusRowSection,
                        1,
                        0,
                        d.statusViewerSessionId,
                      ],
                      void 0,
                      -1
                    )
                  : WAM.log("regular", 1658, void 0, [
                      23,
                      1,
                      d.isPosterBiz,
                      25,
                      1,
                      d.isPosterInAddressBook,
                      4,
                      0,
                      d.mediaType,
                      17,
                      2,
                      d.psaCampaignId,
                      18,
                      0,
                      d.psaCampaignItemIndex,
                      19,
                      1,
                      d.psaLinkAvailable,
                      22,
                      1,
                      d.psaLinkClick,
                      21,
                      0,
                      d.psaLinkLoadTime,
                      20,
                      0,
                      d.psaLinkOpenResult,
                      14,
                      0,
                      d.statusItemImpressionCount,
                      16,
                      0,
                      d.statusItemIndex,
                      7,
                      0,
                      d.statusItemLength,
                      5,
                      0,
                      d.statusItemLoadTime,
                      8,
                      0,
                      d.statusItemReplied,
                      9,
                      1,
                      d.statusItemUnread,
                      10,
                      0,
                      d.statusItemViewCount,
                      3,
                      0,
                      d.statusItemViewResult,
                      6,
                      0,
                      d.statusItemViewTime,
                      2,
                      0,
                      d.statusRowIndex,
                      11,
                      0,
                      d.statusRowSection,
                      1,
                      0,
                      d.statusViewerSessionId,
                    ]);
              });
          }
          startViewingStatusRow(e, t, n) {
            var r,
              a,
              s = this.KL.get(e.jid);
            if (null == s) {
              var o = {
                  author: e.jid,
                  viewCount: 1,
                  entryMethod: t,
                  section: p(e),
                  index: n,
                  unreads: f(e),
                },
                l = (0, i.a)(e);
              l && (o.psaCampaigns = S(l)), this.KL.set(e.jid, o);
            } else {
              ++s.viewCount,
                (s.entryMethod =
                  (r = s.entryMethod) === (a = t) || h(r) < h(a) ? r : a);
              var c = (0, i.a)(e);
              c && (s.psaCampaigns = S(c));
            }
          }
          openPsaStatusLink(e, t, n) {
            var r = this.KM.get(e);
            null != r && null != r.psaInfo
              ? ((r.psaInfo.psaLinkOpenResult = t),
                (r.psaInfo.psaLinkLoadTime = n))
              : __LOG__(
                  3
                )`openPsaStatusLink tried to open link for not recorded status or not PSA`;
          }
          statusLoaded(e) {
            var t = this.KM.get(e.id);
            null != t &&
              (t.psaInfo &&
                null == t.psaInfo.psaLinkAvailable &&
                (t.psaInfo.psaLinkAvailable = null != e.content.actionLink),
              null == t.mediaType && (t.mediaType = (0, c.b)(e)));
          }
          openStatus(e, t, n) {
            var r = this.KM.get(t);
            if (null == r) {
              var a,
                s = e.msgs.findIndex((e) => e.id === t),
                i = e.msgs[s];
              if (i && i.campaignId) {
                var o = i.campaignId,
                  l = e.msgs.findIndex((e) => e.campaignId === o);
                a = {
                  psaCampaignId: o,
                  psaCampaignItemIndex: s - l,
                  psaLinkAvailable: n ? null != n.content.actionLink : void 0,
                };
              }
              this.KM.set(t, {
                index: s,
                author: e.jid,
                replyCount: 0,
                viewCount: 1,
                state: null,
                stateStartedAt: null,
                loadTime: 0,
                viewTime: 0,
                viewResult: 2,
                duration: void 0,
                mediaType: n ? (0, c.b)(n) : void 0,
                replyStep: null,
                psaInfo: a,
              });
            } else ++r.viewCount;
          }
          startLoadingStatus(e) {
            var t = this.KM.get(e);
            null == t
              ? __LOG__(4)`You should open a status before trying to load it`
              : v(t, "loading");
          }
          resumeLoadingStatus(e) {
            var t = this.KM.get(e);
            null != t && v(t, "loading");
          }
          stopLoadingStatus(e) {
            var t = this.KM.get(e);
            null != t && "loading" === t.state
              ? ((t.loadTime = t.loadTime + g(t)), v(t, null))
              : __LOG__(4)`Failed to stop loading because status state was ${
                  null == t ? void 0 : t.state
                }`;
          }
          startViewingStatus(e, t, n) {
            var r = this.KM.get(e);
            null == r
              ? __LOG__(4)`You should open a status before trying to view it`
              : (v(r, "viewing"),
                (r.mediaType = n),
                (r.duration = t),
                (r.viewResult = b(r.viewResult, 1)));
          }
          resumeViewingStatus(e) {
            var t = this.KM.get(e);
            null != t && v(t, "viewing");
          }
          stopViewingStatus(e) {
            var t = this.KM.get(e);
            null != t && "viewing" === t.state
              ? ((t.viewTime = t.viewTime + g(t)), v(t, null))
              : __LOG__(4)`Failed to stop viewing because status state was ${
                  null == t ? void 0 : t.state
                }`;
          }
          failStatus(e) {
            var t = this.KM.get(e);
            null != t && (t.viewResult = b(t.viewResult, 3));
          }
          stopLoadingOrViewingStatus(e) {
            var t = this.KM.get(e);
            null != t &&
              ("loading" === t.state
                ? (t.loadTime = t.loadTime + g(t))
                : "viewing" === t.state && (t.viewTime = t.viewTime + g(t)),
              v(t, null));
          }
          startReplyingToStatus(e) {
            var t = this.KM.get(e);
            null != t && (t.replyStep = "replying");
          }
          replyToStatus(e) {
            var t = this.KM.get(e);
            null != t && (t.replyStep = "replied");
          }
          stopReplyingToStatus(e) {
            var t = this.KM.get(e);
            null != t &&
              ("replied" === t.replyStep && ++t.replyCount,
              (t.replyStep = null));
          }
          statusMuted(e, t, n) {
            var r = "noSession" === e ? void 0 : e,
              a = n.msgs.findIndex((e) => e.id === t),
              s = {
                muteOrigin: 2,
                statusSessionId: r,
                statusViewerSessionId: this.id,
                statusItemIndex: a,
              },
              o = n.msgs[a];
            o &&
              o.campaignId &&
              (s.psaCampaignItemIndex = n.msgs.findIndex((e) => e.campaignId));
            var l = (0, i.a)(n);
            l
              ? ((s.psaCampaignIds = S(l)),
                -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    2978,
                    void 0,
                    [
                      9,
                      1,
                      s.isPosterBiz,
                      10,
                      1,
                      s.isPosterInAddressBook,
                      8,
                      0,
                      s.muteAction,
                      6,
                      0,
                      s.muteOrigin,
                      7,
                      2,
                      s.psaCampaignId,
                      4,
                      2,
                      s.psaCampaignIds,
                      5,
                      0,
                      s.psaCampaignItemIndex,
                      3,
                      0,
                      s.statusItemIndex,
                      1,
                      0,
                      s.statusSessionId,
                      2,
                      0,
                      s.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  ))
              : WAM.log("regular", 2978, void 0, [
                  9,
                  1,
                  s.isPosterBiz,
                  10,
                  1,
                  s.isPosterInAddressBook,
                  8,
                  0,
                  s.muteAction,
                  6,
                  0,
                  s.muteOrigin,
                  7,
                  2,
                  s.psaCampaignId,
                  4,
                  2,
                  s.psaCampaignIds,
                  5,
                  0,
                  s.psaCampaignItemIndex,
                  3,
                  0,
                  s.statusItemIndex,
                  1,
                  0,
                  s.statusSessionId,
                  2,
                  0,
                  s.statusViewerSessionId,
                ]);
          }
        };
      function h(e) {
        switch (e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 3;
          case 4:
            return 4;
          case 5:
            return 5;
          case 6:
            return 6;
          default:
            return (
              __LOG__(
                4
              )`Missing entry method [${e}] on getRowEntryMethodPriority`,
              7
            );
        }
      }
      function p(e) {
        if ("@me" === e.jid) return 4;
        switch (e.section) {
          case "recent":
            return 1;
          case "viewed":
            return 2;
          case "muted":
            return 3;
          default:
            return (0, l.a)(e.section);
        }
      }
      function f(e) {
        var t,
          n = null == (t = e.unread) ? void 0 : t.first;
        if (null == n) return [];
        var r = e.msgs.findIndex((e) => e.id === n.id);
        if (r < 0)
          return (
            __LOG__(2)`first unread message id: ${n.id}, messages: ${e.msgs
              .map((e) => e.id)
              .join(", ")}`,
            __LOG__(
              4
            )`Author has a first unread message that is not part of its statuses`,
            SEND_LOGS("status-getUnreads-missingLastMessage", 0.01),
            []
          );
        for (var a = [], s = r, i = e.msgs.length; s < i; ++s)
          a.push(e.msgs[s].id);
        return a;
      }
      function g(e) {
        return null == e.stateStartedAt ? 0 : (0, a.v)(e.stateStartedAt);
      }
      function v(e, t) {
        null == t
          ? ((e.state = null), (e.stateStartedAt = null))
          : null == e.state
          ? ((e.state = t), (e.stateStartedAt = (0, a.u)()))
          : __LOG__(
              4
            )`Trying to update status state to ${t} but was already ${e.state}`;
      }
      function m(e) {
        switch (e) {
          case 1:
            return 1;
          case 3:
            return 2;
          case 2:
            return 3;
          default:
            return (
              __LOG__(4)`Missing view result [${e}] on getViewResultPriority`, 4
            );
        }
      }
      function b(e, t) {
        return e === t || m(e) < m(t) ? e : t;
      }
      function _(e) {
        return e < 1e3 ? e : 1e3 * Math.round(e / 1e3);
      }
      function S(e) {
        var t = {};
        e.msgs.forEach((e) => {
          if (e.campaignId) {
            var n = e.campaignId,
              r = t[n] || 0;
            (0, s.h)(e.ack) || r++, (t[n] = r);
          }
        });
        var n = [];
        return (
          Object.keys(t).forEach((e) => {
            n.push(`${e}:${t[e]}`);
          }),
          n.join(",")
        );
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return p;
        });
      var r = n(297),
        a = n(105),
        s = n(45),
        i = n(85),
        o = n(259),
        l = new r.a(10),
        c = new r.a(10),
        u = new r.a(10);
      function d(e) {
        if (!e) return Promise.resolve();
        var t = l.get(e);
        return t || ((t = (0, o.b)().getPreview(e)), l.set(e, t)), t;
      }
      function h(e) {
        if (!e) return Promise.resolve();
        var t = c.get(e);
        return t || ((t = (0, a.getChunkTable)().getFrame(e)), c.set(e, t)), t;
      }
      function p(e, t) {
        if (!e) return Promise.resolve();
        var n = u.get(e);
        return (
          (n && "forceRefetch" !== t) ||
            ((n = (0, s.p)(e, {
              uri: (e) => (0, a.getChunkTable)().getFullContent(e),
              path: (e) => (0, i.i)(e),
            })),
            u.set(e, n)),
          n
        );
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var r = n(1),
        a = (n(13), n(226)),
        s = n(211),
        i = n(54),
        o = n(56),
        l = 30,
        c = class extends o.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.title !== e.title ||
                n.tab !== e.tab ||
                n.isVoipAvailable !== e.isVoipAvailable ||
                n.children !== e.children)
            );
          }
          addSoftKeys(e, t) {
            var n = this.props,
              r = n.tab,
              a = n.isVoipAvailable;
            r && (0, s.c)(e, t, r, a);
          }
          render() {
            var e = this.props,
              t = e.title,
              n = e.tab,
              i = e.isVoipAvailable,
              o = e.children,
              l = n && (0, s.d)(n, i);
            return (0, r.c)(
              [
                t && (0, r.f)(1, "div", a.c, t, 0),
                null != l &&
                  (0, r.b)(2, s.b, { items: l.items, selected: l.selected }),
                (0, r.f)(1, "div", a.a, o, 0),
              ],
              0
            );
          }
        },
        u = (0, i.c)(c, (e, t, n) => ({
          title: n.title || null,
          tab: e.tab,
          isVoipAvailable: e.isVoipAvailable,
          children: n.children,
        }));
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M13.518 7.626v-2.82a.72.72 0 00-.247-.583.905.905 0 00-.65-.222H1.9a.905.905 0 00-.651.222.72.72 0 00-.247.584v8.386a.72.72 0 00.247.584.905.905 0 00.651.222h10.72a.905.905 0 00.65-.222.72.72 0 00.247-.584v-2.82l.1.09 2.613 2.44a.49.49 0 00.49.088.408.408 0 00.28-.372V5.382a.407.407 0 00-.279-.374.49.49 0 00-.492.089l-2.591 2.421-.122.109h.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M9 2a5.022 5.022 0 00-3.545 1.426A4.82 4.82 0 004 6.9C4 10.54 9 16 9 16s5-5.46 5-9.1a4.82 4.82 0 00-1.455-3.474A5.022 5.022 0 009 2zm0 6.65c-.986 0-1.786-.783-1.786-1.75S8.014 5.15 9 5.15s1.786.783 1.786 1.75a1.72 1.72 0 01-.518 1.243A1.786 1.786 0 019 8.65z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var r = n(9),
        a = n.n(r),
        s = n(116),
        i = [0, 0];
      function o(e, t, n, r, a, s, o) {
        var l = n + (-a * (t - r) + -s * n) * e,
          c = t + l * e;
        return Math.abs(l) < o && Math.abs(c - r) < o
          ? ((i[0] = r), (i[1] = 0), i)
          : ((i[0] = c), (i[1] = l), i);
      }
      function l(e) {
        return { stiffness: 170, damping: 26, precision: 2, val: e };
      }
      var c = 1e3 / 60,
        u = class {
          constructor(e) {
            (this.animationID = null),
              (this.wasAnimating = !1),
              (this.prevTime = 0),
              (this.accumulatedTime = 0),
              (this.ending = !1),
              (this.unreadPropStyle = null),
              (this.KB = (e) => {
                var t = !1,
                  n = this.state,
                  r = n.currentStyle,
                  a = n.currentVelocity,
                  i = n.lastIdealStyle,
                  o = n.lastIdealVelocity;
                for (var l in e)
                  if ((0, s.a)(e, l)) {
                    var c = e[l];
                    "number" == typeof c &&
                      (t ||
                        ((t = !0),
                        (r = Object.assign({}, r)),
                        (a = Object.assign({}, a)),
                        (i = Object.assign({}, i)),
                        (o = Object.assign({}, o))),
                      (r[l] = c),
                      (a[l] = 0),
                      (i[l] = c),
                      (o[l] = 0));
                  }
                t &&
                  this.setState({
                    currentStyle: r,
                    currentVelocity: a,
                    lastIdealStyle: i,
                    lastIdealVelocity: o,
                  });
              }),
              (this.KC = () => {
                this.ending ||
                  null != this.animationID ||
                  (this.animationID = requestAnimationFrame((e) => {
                    if (!this.ending) {
                      var t = this.props.style;
                      if (
                        (function (e, t, n) {
                          for (var r in t)
                            if ((0, s.a)(t, r)) {
                              if (0 !== n[r]) return !1;
                              var a = "number" == typeof t[r] ? t[r] : t[r].val;
                              if (e[r] !== a) return !1;
                            }
                          return !0;
                        })(
                          this.state.currentStyle,
                          t,
                          this.state.currentVelocity
                        )
                      )
                        return (
                          this.wasAnimating &&
                            this.props.onRest &&
                            this.props.onRest(),
                          (this.animationID = null),
                          (this.wasAnimating = !1),
                          void (this.accumulatedTime = 0)
                        );
                      this.wasAnimating = !0;
                      var n = e || performance.now(),
                        r = n - this.prevTime;
                      if (
                        ((this.prevTime = n),
                        (this.accumulatedTime = this.accumulatedTime + r),
                        this.accumulatedTime > 10 * c &&
                          (this.accumulatedTime = 0),
                        0 === this.accumulatedTime)
                      )
                        return (this.animationID = null), void this.KC();
                      var i =
                          (this.accumulatedTime -
                            Math.floor(this.accumulatedTime / c) * c) /
                          c,
                        l = Math.floor(this.accumulatedTime / c),
                        u = {},
                        d = {},
                        h = {},
                        p = {};
                      for (var f in t)
                        if ((0, s.a)(t, f)) {
                          var g = t[f];
                          if ("number" == typeof g)
                            (h[f] = g), (p[f] = 0), (u[f] = g), (d[f] = 0);
                          else {
                            for (
                              var v = this.state.lastIdealStyle[f],
                                m = this.state.lastIdealVelocity[f],
                                b = 0;
                              b < l;
                              b++
                            ) {
                              var _ = o(
                                  c / 1e3,
                                  v,
                                  m,
                                  g.val,
                                  g.stiffness,
                                  g.damping,
                                  g.precision
                                ),
                                S = a()(_, 2);
                              (v = S[0]), (m = S[1]);
                            }
                            var E = o(
                                c / 1e3,
                                v,
                                m,
                                g.val,
                                g.stiffness,
                                g.damping,
                                g.precision
                              ),
                              y = a()(E, 2),
                              I = y[0],
                              O = y[1];
                            (h[f] = v + (I - v) * i),
                              (p[f] = m + (O - m) * i),
                              (u[f] = v),
                              (d[f] = m);
                          }
                        }
                      (this.animationID = null),
                        (this.accumulatedTime -= l * c),
                        this.setState({
                          currentStyle: h,
                          currentVelocity: p,
                          lastIdealStyle: u,
                          lastIdealVelocity: d,
                        }),
                        (this.unreadPropStyle = null),
                        this.KC();
                    }
                  }));
              }),
              (this.props = e),
              (this.state = (function (e) {
                var t = e.defaultStyle,
                  n = e.style,
                  r =
                    t ||
                    (function (e) {
                      var t = {};
                      for (var n in e)
                        (0, s.a)(e, n) &&
                          (t[n] = "number" == typeof e[n] ? e[n] : e[n].val);
                      return t;
                    })(n),
                  a = (function (e) {
                    var t = {};
                    for (var n in e) (0, s.a)(e, n) && (t[n] = 0);
                    return t;
                  })(r);
                return {
                  currentStyle: r,
                  currentVelocity: a,
                  lastIdealStyle: r,
                  lastIdealVelocity: a,
                };
              })(e));
          }
          setState(e) {
            (this.state = e), this.props.onUpdate(e.currentStyle);
          }
          isAnimating() {
            return null != this.animationID;
          }
          start() {
            (this.prevTime = performance.now()), this.KC();
          }
          update(e) {
            null != this.unreadPropStyle && this.KB(this.unreadPropStyle),
              (this.unreadPropStyle = e),
              null == this.animationID &&
                ((this.prevTime = performance.now()), this.KC()),
              (this.props.style = e);
          }
          end() {
            (this.ending = !0),
              null != this.animationID &&
                (cancelAnimationFrame(this.animationID),
                (this.animationID = null));
          }
        };
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var r = "N",
        a = "O GJ";
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      (function (e, r) {
        var a,
          s = n(414);
        a =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : r;
        var i = Object(s.a)(a);
        t.a = i;
      }.call(this, n(358), n(432)(e)));
    },
    ,
    ,
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(140),
        l = n(20),
        c = n(55),
        u = n(48),
        d = n(143),
        h = n(76);
      function p(e) {
        return "email" !== e && "number" !== e;
      }
      var f = class extends a.a {
        shouldComponentUpdate(e, t) {
          var n = this.props;
          return (
            n !== e &&
            (n.className !== e.className ||
              n.hasFocusPriority !== e.hasFocusPriority ||
              n.placeholder !== e.placeholder ||
              n.pattern !== e.pattern ||
              n.defaultValue !== e.defaultValue ||
              n.onChange !== e.onChange ||
              n.onKeyDown !== e.onKeyDown ||
              n.type !== e.type ||
              n.invalid !== e.invalid)
          );
        }
        constructor(e) {
          if (
            (super(e),
            (this.IF = !1),
            (this.IG = 0),
            (this.IH = 0),
            (this.II = null),
            (this.IJ = null),
            (this.IK = null),
            (this.IL = !1),
            (this.IM = null),
            (this.IN = ""),
            (this.IO = null),
            (this.setInput = (e) => {
              if (((this.IM = e), e)) {
                this.IN = e.value;
                var t = Object.getPrototypeOf(e);
                this.IO = Object.getOwnPropertyDescriptor(t, "value").set;
              } else this.IO = null;
            }),
            (this.handleChange = (e) => {
              var t = e.target;
              if (this.IN !== t.value) {
                0 === t.value.length &&
                  0 !== this.IN.length &&
                  (this.II = requestAnimationFrame(() => {
                    t.blur();
                  })),
                  (this.IN = t.value);
                var n = this.IL ? (0, d.f)(t.value) : t.value;
                this.props.onChange && this.props.onChange(n, e);
              }
            }),
            (this.handleNativeFocus = () => {
              this.restoreSelection();
              var e = new Event("focus_input", { bubbles: !0 });
              this.IM && this.IM.dispatchEvent(e);
            }),
            (this.restoreSelection = () => {
              null != this.IM &&
                this.IF &&
                this.IM.setSelectionRange(this.IG, this.IH);
            }),
            (this.saveSelection = () => {
              null != this.IM &&
                this.IF &&
                ((this.IG = this.IM.selectionStart),
                (this.IH = this.IM.selectionEnd));
            }),
            (this.onKeyDown = (e) => {
              var t = (0, c.m)(e);
              if (t === c.f && h.e) {
                var n = e.target;
                this.II = requestAnimationFrame(() => {
                  n.blur();
                });
              } else
                this.props.hasFocusPriority &&
                (t === c.b || t === c.c) &&
                e.target.value
                  ? e.stopPropagation()
                  : this.props.onKeyDown && this.props.onKeyDown(e);
            }),
            (this.IF = p(this.props.type)),
            null != e.defaultValue)
          ) {
            (this.IG = e.defaultValue.length),
              (this.IH = e.defaultValue.length);
            var t = (0, u.e)(e.defaultValue),
              n = t.normalizedText,
              r = t.fontFamily;
            (this.IK = n), (this.IJ = r), (this.IL = n !== e.defaultValue);
          }
        }
        componentDidMount() {
          this.IM && this.IJ && (this.IM.style.fontFamily = this.IJ);
        }
        componentDidUpdate() {
          this.IF = p(this.props.type);
        }
        componentWillUnmount() {
          null != this.II && cancelAnimationFrame(this.II);
        }
        pasteText(e) {
          if (null != this.IM) {
            var t = (0, u.e)(e).normalizedText,
              n = this.IL || t !== e,
              r = this.IP(),
              a = this.IQ(),
              s = r.substring(0, a.start) + t,
              i = s + r.substring(a.end),
              o = s.length;
            this.setValue(n ? (0, d.f)(i) : i), this.IR(o);
          }
        }
        IP() {
          var e;
          return (null == (e = this.IM) ? void 0 : e.value) || "";
        }
        getValue() {
          var e = this.IP();
          return this.IL ? (0, d.f)(e) : e;
        }
        setValue(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = this.IM,
            a = this.IO;
          if (null != r && null != a && r.value !== e) {
            var s = (0, u.e)(e),
              i = s.normalizedText,
              o = s.fontFamily;
            if (
              ((this.IL = i !== e),
              (this.IJ = o),
              (r.style.fontFamily = o),
              a.call(r, i),
              this.IR(t ? 0 : i.length),
              !n)
            ) {
              var l = new Event("input", { bubbles: !0 });
              r.dispatchEvent(l);
            }
          }
        }
        IQ() {
          return null != this.IM && this.IF
            ? { start: this.IM.selectionStart, end: this.IM.selectionEnd }
            : { start: 0, end: 0 };
        }
        IR(e) {
          var t = this.IM;
          null != t &&
            this.IF &&
            ((t.selectionStart = e),
            (t.selectionEnd = e),
            this.saveSelection());
        }
        render() {
          var e = this.props,
            t = e.placeholder ? (0, l.k)(e.placeholder) : void 0;
          return (0, r.b)(2, o.b.input, {
            innerRef: this.setInput,
            hasFocusPriority: e.hasFocusPriority,
            type: e.type || "text",
            pattern: e.pattern,
            placeholder: t,
            defaultValue: this.IK,
            onInput: this.handleChange,
            onKeyDown: this.onKeyDown,
            className: (0, i.a)("CC", e.invalid && "CD", e.className),
            onNativeFocus: this.handleNativeFocus,
            onNativeBlur: this.saveSelection,
          });
        }
      };
      t.a = f;
    },
    function (e, t, n) {
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return s;
        });
      var r = " ",
        a = "—",
        s = "…";
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M7.142 4 6 5.175 9.709 9 6 12.825 7.142 14 12 9z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n(110);
      function a(e, t, n) {
        return (0, r.b)(e, t).then(() => {
          n && t && t.tel
            ? e.deltaSync("interactive", { [t.tel]: n })
            : e.deltaSync("interactive");
        });
      }
      function s(e) {
        return a(e, {});
      }
    },
    ,
    function (e, t, n) {
      function r(e, t, n) {
        var r = e.getCache(),
          a = r.oneToOneChatFromJid(t),
          s = r.groupsInCommon(t);
        e.fetchMissingKeysForContact(t),
          e.openScreen("CONTACT_INFO", {
            jid: t,
            chat: a,
            groupsInCommon: s,
            start: n,
          });
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n(1),
        a = (n(13), n(10)),
        s = n(18);
      function i(e) {
        var t = e.size,
          n = e.className,
          i = e.highPrecision,
          o = void 0 !== i && i;
        return t < a.d
          ? (0, r.b)(2, s.b, { className: n, l10n: [Math.round(t), 246] })
          : t < a.e
          ? (0, r.b)(2, s.b, { className: n, l10n: [Math.round(t / a.d), 248] })
          : t < a.c
          ? (0, r.b)(2, s.b, {
              className: n,
              l10n: [
                o ? parseFloat((t / a.e).toFixed(1)) : Math.round(t / a.e),
                249,
              ],
            })
          : (0, r.b)(2, s.b, {
              className: n,
              l10n: [
                o ? parseFloat((t / a.c).toFixed(2)) : Math.round(t / a.c),
                247,
              ],
            });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n(1),
        a = n(13);
      function s(e) {
        return { blob: e, url: self.URL.createObjectURL(e) };
      }
      function i(e) {
        self.URL.revokeObjectURL(e.url);
      }
      var o = class extends a.a {
        static getDerivedStateFromProps(e, t) {
          return (function (e, t) {
            return t.blob !== e ? (i(t), s(e)) : null;
          })(e.blob, t);
        }
        constructor(e) {
          super(e), (this.state = s(e.blob));
        }
        componentWillUnmount() {
          i(this.state);
        }
        render() {
          var e = this.props,
            t = this.state.url;
          return (
            t && e.sampleSize && (t = `${t}#-moz-samplesize=${e.sampleSize}`),
            (0, r.f)(
              1,
              "img",
              e.className,
              null,
              1,
              {
                src: t,
                onLoad: e.onLoad,
                onError: e.onError,
                style: a.h(e.style),
              },
              null,
              e.innerRef
            )
          );
        }
      };
      t.b = o;
      var l = class extends a.a {
        static getDerivedStateFromProps(e, t) {
          return e.src != e.src ? { src: e.src, error: !1 } : null;
        }
        constructor(e) {
          super(e),
            (this.JW = () => {
              var e = this.state.src;
              this.setState((t) => (t.src === e ? { error: !0 } : null));
            }),
            (this.state = { src: e.src, error: !1 });
        }
        render() {
          return this.state.error && this.props.fallback
            ? this.props.fallback
            : (0, r.f)(1, "img", this.props.className, null, 1, {
                src: this.props.src,
                onError: this.JW,
              });
        }
      };
    },
    ,
    ,
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            [
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                "fill-rule": "nonzero",
                d:
                  "M12 23.96c6.605 0 11.96-5.355 11.96-11.96S18.604.04 12 .04.04 5.396.04 12 5.396 23.96 12 23.96z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FF3B30",
                "fill-rule": "nonzero",
                d:
                  "M12 21.96c-5.5 0-9.96-4.46-9.96-9.96 0-5.5 4.46-9.96 9.96-9.96 5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                d:
                  "M11.737 13.554a.68.68 0 01-.68-.647l-.495-6.84a.681.681 0 01.68-.717h1.55c.39 0 .7.326.68.715l-.476 6.841a.68.68 0 01-.68.648h-.579zm-.916 2.223c.28-.277.678-.415 1.195-.415.51 0 .9.144 1.173.431.273.287.41.686.41 1.195 0 .51-.139.913-.414 1.211-.277.298-.667.447-1.169.447-.51 0-.906-.144-1.19-.43-.283-.288-.424-.697-.424-1.228s.139-.935.42-1.211z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M16.3 4.2c2.1 0 3.8 1.8 3.8 4s-1.7 4-3.8 4-3.8-1.8-3.8-4 1.7-4 3.8-4zM5.4 5.4c.5 0 1 .4 1 1v2.9h2.9c.5 0 1 .4 1 1v.5c0 .5-.4 1-1 1H6.4v3c0 .5-.4 1-1 1h-.5c-.5 0-1-.4-1-1v-3H1c-.5 0-1-.4-1-1v-.5c0-.6.4-1 1-1h2.9V6.4c0-.6.4-1 1-1h.5zm10.9 8.7c2.5 0 7.6 1.3 7.6 4v1.1c0 .5-.4.8-.8.8H9.5c-.4 0-.8-.4-.8-.8V18c0-2.6 5.1-3.9 7.6-3.9z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n(1),
        a = (n(13), n(164)),
        s = { bottom: "By CA", center: "By CB", top: "By Bz" };
      function i(e) {
        var t = e.type;
        return (0, r.f)(1, "div", s[t], (0, r.b)(2, a.a), 2);
      }
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var r = n(183),
        a = n(127),
        s = n(70),
        i = n(126),
        o = n(253),
        l = new Set();
      function c() {
        l.forEach((e) => {
          e.DN.pause();
        });
      }
      var u = class {
        constructor(e) {
          (this.current = null),
            (this.DP = null),
            (this.currentTime = 0),
            (this.DQ = !1),
            (this.DR = !1),
            (this.DS = "1x"),
            (this.DT = 0),
            (this.DW = h(0, 0, (e) => {
              this.DV(e) &&
                (this.DQ ||
                  ((this.DQ = !0),
                  this.DX.forceRunNowIfScheduled(),
                  this.DV(e) && this.DN.handleCanPlay()));
            })),
            (this.DY = h(0, 0, (e) => {
              if ((this.DX.forceRunNowIfScheduled(), this.DV(e))) {
                if (this.DO && !this.DP) {
                  var t = (0, a.c)()
                    .then((e) => {
                      if (this.DP === t && 0 === e)
                        return (
                          this.DO && this.DO(),
                          new Promise((e) => {
                            setTimeout(e, 2e3);
                          })
                        );
                    })
                    .then(() => {
                      this.DP === t && (this.DP = null);
                    });
                  this.DP = t;
                }
                this.DN.handlePlay();
              }
            })),
            (this.DZ = h(0, 0, (e) => {
              this.DX.forceRunNowIfScheduled(),
                this.DV(e) && this.DN.handlePause();
            })),
            (this.Da = h(0, 0, (e) => {
              var t = this.DV(e);
              t &&
                ((this.currentTime = t.currentTime),
                this.DX.debounceAndCap(16, 250));
            })),
            (this.Db = h(0, 0, (e) => {
              this.DV(e) &&
                (this.DX.cancel(), (this.DR = !1), this.DN.handleEnded());
            })),
            (this.ref = (e, t) => {
              var n = this.current;
              null == e ? l.delete(this) : l.add(this),
                e !== n &&
                  ((this.current = e),
                  n &&
                    (this.DX.cancel(),
                    n.removeEventListener("canplay", this.DW),
                    n.removeEventListener("play", this.DY),
                    n.removeEventListener("pause", this.DZ),
                    n.removeEventListener("timeupdate", this.Da),
                    n.removeEventListener("ended", this.Db),
                    (this.DQ = !1),
                    "preserveTime" !== t && (this.currentTime = 0)),
                  e &&
                    (e.addEventListener("canplay", this.DW),
                    e.addEventListener("play", this.DY),
                    e.addEventListener("pause", this.DZ),
                    e.addEventListener("timeupdate", this.Da),
                    e.addEventListener("ended", this.Db),
                    (e.playbackRate = (0, o.g)(this.DS)),
                    (e.currentTime = this.currentTime),
                    this.DR && d(e)));
            }),
            (this.DX = new s.a(() => {
              this.DN.handleTimeUpdate(this.currentTime);
            })),
            (this.DN = e);
        }
        enableWarnIfMuted(e) {
          this.DO = e || this.DU;
        }
        DU() {
          (0, i.a)(589);
        }
        componentWillUnmount() {
          this.DP = null;
        }
        DV(e) {
          var t = this.current;
          return null != t && t === e.target ? t : null;
        }
        getDuration() {
          var e,
            t = null == (e = this.current) ? void 0 : e.duration;
          return Number.isFinite(t) ? t : null;
        }
        setPlaybackRate(e) {
          if (this.DS !== e) {
            this.DS = e;
            var t = this.current;
            t && (t.playbackRate = (0, o.g)(e));
          }
        }
        setPlaying(e) {
          if (this.DR !== e) {
            this.DR = e;
            var t = this.current;
            t && (e ? d(t) : t.pause());
          }
        }
        seekTo(e) {
          var t = this.current;
          this.currentTime !== e &&
            (null != t
              ? (function (e, t) {
                  e.currentTime = t;
                })(t, e)
              : (this.currentTime = e));
        }
        seekToward(e) {
          var t = this.getDuration();
          null == t && (t = this.DN.mediaDuration()),
            this.seekTo((0, r.c)(this.currentTime, t, e));
        }
      };
      function d(e) {
        var t = e.play();
        t && t.catch(() => {});
      }
      function h(e, t, n) {
        return n;
      }
    },
    ,
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(335),
        l = 20;
      function c(e, t) {
        return (0, r.f)(32, "circle", "Ea", null, 1, {
          cx: e.viewBox / 2,
          cy: t / 2,
          r: t / 2,
        });
      }
      function u(e, t, n, s, i) {
        return (0, r.f)(32, "circle", "Ec Ea", null, 1, {
          transform: i ? `scale(1,-1) translate(0,-${e.viewBox})` : null,
          style: a.h({
            strokeDashoffset: n,
            strokeDasharray: 2 * Math.PI * (s || l),
          }),
          cx: e.viewBox / 2,
          cy: e.viewBox / 2,
          r: s || l,
          "stroke-width": t,
        });
      }
      function d() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        return 2 * (1 - e) * Math.PI * t;
      }
      var h = class extends a.a {
        shouldComponentUpdate(e, t) {
          var n = this.props,
            r = this.state;
          return (
            (n !== e &&
              (n.className !== e.className ||
                n.strokeWidth !== e.strokeWidth ||
                n.theme !== e.theme ||
                n.progress !== e.progress ||
                n.radius !== e.radius ||
                n.countdown !== e.countdown ||
                n.backgroundCircle !== e.backgroundCircle)) ||
            (r !== t &&
              (r.viewBox !== t.viewBox ||
                r.strokeDashoffset !== t.strokeDashoffset))
          );
        }
        static getDerivedStateFromProps(e, t) {
          return {
            viewBox: 2 * (e.radius || l) + e.strokeWidth,
            strokeDashoffset: t.strokeDashoffset,
          };
        }
        constructor(e) {
          super(e),
            (this.handleMotion = (e) => {
              this.Ij() ||
                this.setState({ strokeDashoffset: e.strokeDashoffset });
            }),
            (this.state = {
              viewBox: 0,
              strokeDashoffset: d(e.progress, e.radius),
            }),
            (this.Ii = new o.a({
              defaultStyle: { strokeDashoffset: d(e.progress, e.radius) },
              style: { strokeDashoffset: d(e.progress, e.radius) },
              onUpdate: this.handleMotion,
            }));
        }
        componentDidUpdate(e) {
          this.props.progress !== e.progress &&
            this.Ii.update({
              strokeDashoffset: (0, o.b)(
                d(this.props.progress, this.props.radius)
              ),
            });
        }
        componentWillUnmount() {
          this.Ii.end();
        }
        Ij() {
          return null == this.props.progress;
        }
        render() {
          var e,
            t,
            n,
            a = this.Ij(),
            s = (0, i.a)(
              "ES",
              "white" === this.props.theme && "EX",
              "green" === this.props.theme && "EY",
              "red" === this.props.theme && "EZ",
              a ? "EU" : "ET",
              this.props.className
            );
          return (0, r.f)(
            32,
            "svg",
            s,
            [
              !0 === this.props.backgroundCircle
                ? ((e = this.state),
                  (t = this.props.strokeWidth),
                  (n = this.props.radius),
                  (0, r.f)(32, "circle", "Eb Ea", null, 1, {
                    cx: e.viewBox / 2,
                    cy: e.viewBox / 2,
                    r: n || l,
                    "stroke-width": t,
                  }))
                : null,
              a
                ? c(this.state, this.props.strokeWidth)
                : u(
                    this.state,
                    this.props.strokeWidth,
                    this.state.strokeDashoffset,
                    this.props.radius,
                    this.props.countdown
                  ),
            ],
            0,
            { viewBox: `0 0 ${this.state.viewBox} ${this.state.viewBox}` }
          );
        }
      };
      t.a = h;
    },
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n(209),
        a = n(50),
        s = n(92),
        i = n(16),
        o = n(249);
      function l(e, t) {
        e.sendAndReceive("backend", "getMsgReactions", { msgId: t }).then(
          (n) => {
            e.dispatch({
              type: "LOADED_MSG_REACTIONS",
              msgId: t,
              msgReactions: n,
            });
          }
        );
      }
      function c(e, t) {
        return (0, o.b)(i.e.retryReaction(t));
      }
      function u(e) {
        return (0, o.b)(i.e.sendReaction(e));
      }
      n(269), n(11);
      var d = (e) => ({
        notifyNewReaction: (t) => {
          var n = t.msg,
            i = t.reaction;
          return (function (e, t, n) {
            var i = e.getCache().chatFromId(t.chatId);
            if (i) {
              var o = (0, a.a)(e.getStoreState()),
                l = (0, s.i)();
              if (o) {
                var c = l ? "short" : "alert",
                  u =
                    o.msglist && 0 === o.screens.length && l
                      ? o.msglist.chat.id
                      : void 0;
                if (l && ((0, a.e)(o) || u === i.id)) return;
                (0, r.c)(n, t, i, o.contacts, o.user, o.settings, c);
              }
            }
          })(e, n, i);
        },
        reactionReceived: (t) => {
          var n = t.msg;
          return (function (e, t) {
            if (e.getCache().updateMsg(t)) {
              e.dispatch({ type: "MSG_UPDATED", msg: t });
              var n = (0, a.a)(e.getStoreState());
              !0 ===
                (null == n
                  ? void 0
                  : n.screens.some((e) => {
                      var n = e.screen;
                      return "MSG_INFO" === n.type && n.props.msg.id === t.id;
                    })) && l(e, t.id);
            }
          })(e, n);
        },
      });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(1),
        a = (n(13), n(18));
      function s(e) {
        var t = e.seconds,
          n = Math.floor(t / 86400);
        if (n > 0) return (0, r.b)(2, a.b, { l10n: [n, 236] });
        var s = Math.floor(t / 3600);
        if (s > 0) return (0, r.b)(2, a.b, { l10n: [s, 237] });
        var i = Math.floor(t / 60);
        if (i > 0) return (0, r.b)(2, a.b, { l10n: [i, 238] });
        var o = Math.ceil(t);
        return (0, r.b)(2, a.b, { l10n: [Math.max(1, o), 239] });
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M9.725 14.194v2.32a.483.483 0 01-.476.486h-.487a.483.483 0 01-.476-.487v-2.319a4.939 4.939 0 01-1.995-.764 5.163 5.163 0 01-2.243-3.482C4.004 9.676 4 9.596 4 9.596a.469.469 0 01.125-.343.45.45 0 01.33-.142h.484a.55.55 0 01.528.483c.043.35.132.695.264 1.022a3.65 3.65 0 001.928 1.896 3.53 3.53 0 002.652.022 3.65 3.65 0 001.928-1.805c.156-.362.261-.744.311-1.136a.558.558 0 01.533-.482h.483c.122 0 .24.051.321.144a.445.445 0 01.11.34 6.113 6.113 0 01-.265 1.285c-.644 1.785-2.193 3.046-4.008 3.314zM9.003 2c.6 0 1.176.243 1.601.677.425.433.663 1.021.663 1.634v4.787a2.322 2.322 0 01-1.12 2.033 2.224 2.224 0 01-2.287 0 2.322 2.322 0 01-1.12-2.033V4.31C6.74 3.035 7.752 2 9.002 2z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return h;
      });
      var r = n(1),
        a = n(13),
        s = n(165),
        i = n(276),
        o = n(18),
        l = n(182),
        c = (e, t) => {
          var n = e.split("."),
            a = [];
          return (
            n.forEach((e, s) => {
              var i = !1,
                o = (0, l.c)(e).map((e, n) => {
                  var a = t.has(e);
                  i = a || i;
                  var o = a ? "HQ" : void 0,
                    l = s + "-" + n + "-" + e;
                  return (0, r.f)(1, "span", o, e, 0, null, l);
                }),
                c = i ? "HP" : void 0,
                u = s + "-" + e,
                d = (0, r.f)(1, "span", c, o, 0, null, u);
              if ((a.push(d), s + 1 !== n.length)) {
                var h = s;
                a.push((0, r.f)(1, "span", null, ".", 0, null, h));
              }
            }),
            a
          );
        },
        u = class extends a.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.KE = (e) =>
                (0, r.f)(
                  1,
                  "div",
                  "HR M GC",
                  [
                    (0, r.b)(2, o.b, { l10n: 893 }),
                    (0, r.f)(1, "div", "HS", e, 0),
                  ],
                  4
                )),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.suspiciousLink !== e.suspiciousLink ||
                n.suspiciousCharacters !== e.suspiciousCharacters)
            );
          }
          render() {
            var e = this.props,
              t = e.suspiciousLink,
              n = e.suspiciousCharacters,
              a = t.match(
                /^(?:https?:\/\/|mailto:[^@]+@)?([^/?#]+)(?:[/?#]|$)/i
              ),
              s = a && a[1];
            if (null === s) return this.KE(c(t, n));
            var i = t.indexOf(s),
              o = t.slice(0, i),
              l = t.slice(i + s.length);
            return this.KE((0, r.c)([o, c(s, n), l], 0));
          }
        },
        d = n(19);
      function h(e, t, n, a, o) {
        (0, d.h)(
          {
            title: 894,
            left: 797,
            onSoftLeft: () => {
              (0, i.a)(e, a || t),
                (null == o ? void 0 : o.onOpen) && o.onOpen(e);
            },
            center: 761,
            onSoftCenter: (null == o ? void 0 : o.onSoftCenter) || "CLOSE",
            right: 785,
            onSoftRight: () => {
              (function (e) {
                (0, s.y)(e, s.t);
              })(e);
            },
            onBack: (null == o ? void 0 : o.onBack) || "CLOSE",
          },
          (0, r.b)(2, u, { suspiciousLink: t, suspiciousCharacters: n })
        );
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M11.625 10.5h-.592l-.21-.203A4.853 4.853 0 0012 7.125 4.875 4.875 0 107.125 12a4.853 4.853 0 003.172-1.178l.203.21v.593l3.75 3.742 1.117-1.117-3.742-3.75zm-4.5 0A3.37 3.37 0 013.75 7.125 3.37 3.37 0 017.125 3.75 3.37 3.37 0 0110.5 7.125 3.37 3.37 0 017.125 10.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(35),
        a = n(19);
      function s(e, t) {
        var n = e.sendAndReceive("backend", "downloadUserNoticeDeepLinkModal", {
            id: t,
          }),
          s = null;
        return e.spinUntilReadyOverlay(
          n
            .catch((e) => {
              s = e.message;
            })
            .then((n) => () => {
              var i, o;
              return (
                null == n
                  ? (__LOG__(
                      3
                    )`Could not open user notice deep link modal for id ${t}`,
                    null != s &&
                      (s.includes(String(r.a.NOT_FOUND)) ||
                      s.includes(String(r.a.GONE)) ||
                      s.includes(String(r.a.INTERNAL_SERVER_ERROR))
                        ? (o = 960)
                        : s.toLowerCase().includes("retry error") && (o = 959)),
                    (0, a.e)({ text: null != (i = o) ? i : 958 }))
                  : e.openScreen("USER_NOTICE_DEEP_LINK_MODAL", { modal: n }),
                "dontClose"
              );
            }),
          { title: 788 }
        );
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M1.38 4h15.24c.762.001 1.38.6 1.38 1.338v7.325c0 .739-.619 1.337-1.382 1.337H1.38C.618 14 0 13.4 0 12.663V5.338C0 4.6.618 4 1.38 4zm6.19 4.85H5.136v.955h1v.894a1.238 1.238 0 01-.835.241 1.091 1.091 0 01-.959-.433A2.252 2.252 0 014.04 9.21v-.348c-.025-.441.079-.88.298-1.267a.945.945 0 01.834-.443c.25-.016.497.058.696.205.187.186.3.43.318.69h1.382a2.062 2.062 0 00-.717-1.47 2.7 2.7 0 00-1.727-.493 2.58 2.58 0 00-1.34.342c-.39.233-.7.573-.889.977a3.341 3.341 0 00-.31 1.484l.003.5a2.75 2.75 0 00.746 1.928 2.539 2.539 0 001.867.693c.476.005.95-.069 1.4-.218.367-.11.7-.307.969-.574V8.851zm2.571-2.683h-1.43v5.762h1.43V6.167zm4.957 2.399h-2.314V7.24h2.55V6.167H11.35v5.762h1.435V9.634H15.1V8.566h-.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M9.002 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.75C6.665 10.75 2 11.922 2 14.25v.942c0 .446.362.808.809.808h12.383a.808.808 0 00.808-.808v-.942c.003-2.328-4.662-3.5-6.998-3.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M9 2C5.136 2 2 5.136 2 9s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm0 12.6A5.598 5.598 0 013.4 9c0-1.295.441-2.485 1.183-3.43l7.847 7.847A5.532 5.532 0 019 14.6zm4.417-2.17L5.57 4.583A5.532 5.532 0 019 3.4c3.094 0 5.6 2.506 5.6 5.6a5.532 5.532 0 01-1.183 3.43z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M9 2a6.946 6.946 0 00-4.954 2.04A7.004 7.004 0 002 9.01v4.654a2.3 2.3 0 00.673 1.666c.44.441 1.04.683 1.66.67H6.62v-5.26H3.556V9.01c0-3.02 2.438-5.467 5.444-5.467 3.007 0 5.445 2.448 5.445 5.467v1.73H11.38v5.258h2.285a2.283 2.283 0 001.661-.67c.44-.44.683-1.042.673-1.666V9.006a7.004 7.004 0 00-2.047-4.966A6.946 6.946 0 009 2z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var r = n(1),
        a = n(13),
        s = n(22),
        i = n.n(s),
        o = n(48),
        l = n(18),
        c = n(230),
        u = n(14),
        d = "Hq",
        h = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.avatar !== e.avatar ||
                n.contacts !== e.contacts ||
                n.extended !== e.extended ||
                n.groupSize !== e.groupSize ||
                n.includeYou !== e.includeYou ||
                n.participants !== e.participants ||
                n.subtitle !== e.subtitle ||
                n.title !== e.title)
            );
          }
          render() {
            var e = this.props,
              t = e.avatar,
              n = e.contacts,
              a = e.extended,
              s = e.groupSize,
              h = e.includeYou,
              p = e.participants,
              f = e.subtitle,
              g = e.title,
              v = [];
            h && v.push((0, r.b)(2, c.b, { className: d }, "contactYou")),
              p.forEach((e) => {
                var t = n[e];
                if (null == t) return null;
                null == t.phonebookPhone ||
                  t.noWhatsApp ||
                  v.push((0, r.b)(2, c.a, { className: d, contact: t }, e));
              });
            var m = s - v.length;
            v.length > 0 &&
              m > 0 &&
              v.push(
                (0, r.b)(2, c.d, { className: d, total: m }, "notContacts")
              );
            var b = a || v.length <= u.j ? v.slice(0) : v.slice(0, u.j - 1);
            !a &&
              v.length > u.j &&
              b.push((0, r.b)(2, c.c, { className: d }, "more"));
            var _ = [],
              S = [];
            b.forEach((e, t) => {
              S.push(e),
                (4 !== S.length && t !== b.length - 1) ||
                  (_.push((0, r.f)(1, "div", "Hj", S, 0, null, _.length)),
                  (S = []));
            });
            var E = 0 === v.length ? 402 : m > 0 ? [m, 108] : null;
            return (0, r.f)(
              1,
              "div",
              "Hi",
              [
                (0, r.f)(
                  1,
                  "div",
                  "Hk",
                  [
                    (0, r.f)(1, "div", "Hl GK", t, 0),
                    (0, r.f)(
                      1,
                      "div",
                      "Hm",
                      [(0, r.f)(1, "div", "Hn GF GC GI GE", (0, o.b)(g), 0), f],
                      0
                    ),
                  ],
                  4
                ),
                (0, r.f)(
                  1,
                  "div",
                  (0, i.a)("Ho GH GC GI GE Hj", 0 === _.length && "Hp"),
                  [
                    (0, r.b)(2, l.b, { l10n: [s, 109] }),
                    null != E &&
                      (0, r.c)(
                        [o.a, (0, r.b)(2, l.b, { l10n: E, className: "Hr" })],
                        0
                      ),
                  ],
                  0
                ),
                _,
              ],
              0
            );
          }
        };
      t.a = h;
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return h;
      }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var r = n(1),
        a = (n(13), n(48)),
        s = n(36),
        i = n(14),
        o = n(18),
        l = n(22),
        c = n.n(l),
        u = "Fb",
        d = "Fc GI GE";
      function h(e, t, n, l) {
        return (0, s.n)(e, t, {
          onEmpty: null,
          onSingleContact: (e) =>
            l
              ? (0, r.c)([e, (0, o.c)(n)], 0)
              : (0, r.f)(
                  1,
                  "div",
                  (0, c.a)(u, e.length > i.v && d),
                  [(0, a.b)(e), (0, o.c)(n)],
                  0
                ),
          onOneAndOthers(e, t) {
            var s = (0, r.b)(2, o.b, {
              l10n: [t, (0, a.b)(e), 252],
              spacerSize: n,
            });
            return l ? s : (0, r.f)(1, "div", u, s, 0);
          },
          onOthers(e) {
            var t = (0, r.b)(2, o.b, { l10n: [e, 253], spacerSize: n });
            return l ? t : (0, r.f)(1, "div", u, t, 0);
          },
        });
      }
      function p(e, t, n) {
        return h(
          e.total,
          e.contacts.map((e) => e.displayName),
          t,
          n
        );
      }
      function f(e, t, n, l) {
        function h(e) {
          var t = (0, r.b)(2, o.b, { l10n: [e, 253], spacerSize: n });
          return l ? t : (0, r.f)(1, "div", u, t, 0);
        }
        return (0, s.n)(e, t, {
          onEmpty: null,
          onSingleContact: (e) =>
            l
              ? (0, r.c)([e, (0, o.c)(n)], 0)
              : (0, r.f)(
                  1,
                  "div",
                  (0, c.a)(u, e.length > i.v && d),
                  [(0, a.b)(e), (0, o.c)(n)],
                  0
                ),
          onOneAndOthers: (e, t) => h(t + 1),
          onOthers: h,
        });
      }
    },
    ,
    ,
    function (e, t, n) {
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return h;
        });
      var r = n(27),
        a = n.n(r),
        s = n(80),
        i = n(85),
        o = n(14),
        l = n(10),
        c = (0, n(45).k)(s.d + "/.wa-settings"),
        u = {};
      function d(e, t) {
        return p().then((n) => {
          var r = Object.assign({}, n, { [e]: t }),
            a = new Blob([JSON.stringify(r)], { type: "application/json" });
          return (0, i.o)(a, c);
        });
      }
      function h(e) {
        return p().then((t) => t[e]);
      }
      function p() {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = a()(function* () {
          var e, t, n;
          try {
            e = yield (0, i.j)(c);
          } catch (e) {
            return __LOG__(4)`Couldn't load filesystem based settings`, u;
          }
          if (null == e)
            return __LOG__(2)`Filesystem based settings not present on disk`, u;
          if (e.size > 16384)
            return (
              __LOG__(
                4
              )`Filesystem based settings file has suspiciously big size: ${e.size}`,
              SEND_LOGS("filesystem-based-settings"),
              u
            );
          try {
            t = yield (0, l.i)(e);
          } catch (e) {
            return (
              __LOG__(4)`Failed to convert blob into text`,
              SEND_LOGS("filesystem-based-settings"),
              u
            );
          }
          try {
            n = JSON.parse(t);
          } catch (e) {
            return (
              __LOG__(4)`Couldn't parse filesystem based settings file`,
              SEND_LOGS("filesystem-based-settings"),
              u
            );
          }
          if ("object" != typeof n)
            return (
              __LOG__(
                4
              )`Parsed filedsystem based settings are not an object: ${typeof n}`,
              SEND_LOGS("filedsystem-based-settings"),
              u
            );
          var r = u,
            a = n[o.K];
          return (
            "number" == typeof a
              ? (r = Object.assign({}, r, { [o.K]: a }))
              : (__LOG__(4)`Parsed filedsystem had incorrect type for key ${
                  o.K
                }: ${typeof a}`,
                SEND_LOGS("filedsystem-based-settings")),
            r
          );
        })).apply(this, arguments);
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
            }),
            2,
            { fill: "currentColor", viewBox: "0 0 16 16" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = "AC GC";
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M16 5C8 5 5 8.06 5 16s3 11 11 11 11-3.06 11-11S23.93 5 16 5zm0 20c-6.81 0-9-2.19-9-9s2.18-9 9-9c3.88 0 6.26.71 7.59 2.58L16 17.15l-3.36-3.36a1.36 1.36 0 10-1.92 1.92L16 21l1.92-1.92 6.76-6.76A18.41 18.41 0 0125 16c0 6.81-2.19 9-9 9z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M16 5C8 5 5 8.06 5 16s3 11 11 11 11-3.06 11-11S23.93 5 16 5zm0 20c-6.81 0-9-2.19-9-9s2.18-9 9-9 9 2.19 9 9-2.19 9-9 9z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M173.561 171.615a62.767 62.767 0 00-2.065-2.955 67.7 67.7 0 00-2.608-3.299 70.112 70.112 0 00-3.184-3.527 71.097 71.097 0 00-5.924-5.47 72.458 72.458 0 00-10.204-7.026 75.2 75.2 0 00-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 00-6.229 3.298 72.589 72.589 0 00-9.15 6.395 71.243 71.243 0 00-5.924 5.47 70.064 70.064 0 00-3.184 3.527 67.142 67.142 0 00-2.609 3.299 63.292 63.292 0 00-2.065 2.955 56.33 56.33 0 00-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 00-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 00-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 003.624-.896 37.124 37.124 0 005.12-1.958 36.307 36.307 0 006.15-3.67 35.923 35.923 0 009.489-10.48 36.558 36.558 0 002.422-4.84 37.051 37.051 0 001.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 00-1.215-5.494 36.68 36.68 0 00-3.648-8.298 35.923 35.923 0 00-9.489-10.48 36.347 36.347 0 00-6.15-3.67 37.124 37.124 0 00-5.12-1.958 37.67 37.67 0 00-3.624-.896 39.875 39.875 0 00-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z",
            }),
            2,
            { viewBox: "0 0 212 212" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M84.282 59.286c0 10.671-8.425 19.285-18.94 19.285s-19.003-8.614-19.003-19.285C46.339 48.614 54.827 40 65.342 40s18.94 8.614 18.94 19.286zm48.068 2.857c0 9.802-7.738 17.714-17.396 17.714-9.658 0-17.454-7.912-17.454-17.714s7.796-17.715 17.454-17.715c9.658 0 17.396 7.913 17.396 17.715zM65.34 91.428c-14.759 0-44.34 7.522-44.34 22.5v11.786c0 3.536 2.85 4.286 6.334 4.286h76.012c3.484 0 6.334-.75 6.334-4.286v-11.786c0-14.978-29.58-22.5-44.34-22.5zm43.464 1.425c.903.018 1.681.033 2.196.033 14.759 0 45 6.064 45 21.043v9.642c0 3.536-2.85 6.429-6.334 6.429h-32.812c.697-1.993 1.141-4.179 1.141-6.429l-.245-10.5c0-9.561-5.614-13.213-11.588-17.1-1.39-.904-2.799-1.821-4.162-2.828a.843.843 0 01-.059-.073.594.594 0 00-.194-.184c1.596-.139 4.738-.078 7.057-.033z",
              "clip-rule": "evenodd",
            }),
            2,
            { viewBox: "0 0 176 176" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            [
              (0, r.f)(32, "path", null, null, 1, {
                d:
                  "m9 16-1.9.9-1.3-1.7-2.1-.1-.3-2.1-1.9-1 .7-2.1-1.1-1.7 1.5-1.5-.2-2.1L4.5 4l.8-2 2.1.4L9 1.1l1.7 1.3 2-.4.9 2 2 .6-.1 2.1L17 8.2l-1.1 1.7.6 2.1-1.8 1-.4 2.1-2.1.1-1.3 1.7z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                d: "m13.1 7.3-.9-.8-4.1 4.1-2.2-2.1-.9.9 3 3z",
              }),
            ],
            4,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n(40),
        a = n(7),
        s = n(279),
        i = n(50),
        o = n(19);
      function l(e, t, n) {
        var l = (0, i.a)(e.getStoreState());
        if (l) {
          var c = l.blocked,
            u = l.connected,
            d = l.contacts;
          (0, a.x)(n, {
            user: (n) => {
              c[n]
                ? (0, o.f)(
                    (0, s.d)({
                      contact: (0, r.c)(n, d),
                      unblock: () => {
                        u
                          ? e.unblockUser(n)
                          : (0, o.e)({ title: 229, text: 948 });
                      },
                    })
                  )
                : e.retryMsgWithoutBlockedCheck(t);
            },
            group: (n) => {
              e.retryMsgWithoutBlockedCheck(t);
            },
          });
        }
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n(20);
      function a() {
        var e = document.documentElement;
        e.setAttribute("lang", (0, r.c)()),
          e.setAttribute("dir", (0, r.g)() ? "rtl" : "ltr");
      }
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "M7.909 14.83a.4.4 0 01-.617.043L3.139 10.69a.49.49 0 01-.007-.676l.54-.567a.456.456 0 01.655-.009l2.793 2.815a.4.4 0 00.617-.043l6.827-9.026a.455.455 0 01.65-.083l.609.488a.49.49 0 01.08.67L7.91 14.83z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var r = n(32),
        a = n(40),
        s = n(141),
        i = {
          intro_unverified: { msg: () => 62, alert: (e) => [e, 13] },
          unverified: { msg: (e) => [e, 22], alert: (e) => [e, 18] },
          intro_verified: {
            msg: (e) => [e, 19],
            alert: (e, t) => (t ? [e, 15] : [e, 14]),
          },
          verified: {
            msg: (e) => [e, 21],
            alert: (e, t) => (t ? [e, 17] : [e, 16]),
          },
          consumer: { msg: (e) => [e, 20] },
          rename: { msg: (e) => [e, 26] },
        };
      function o(e, t, n) {
        var o = e.name ? e.name : (0, r.d)((0, a.c)(t, n));
        if (
          ("verified" === e.subtype || "intro_verified" === e.subtype) &&
          (0, s.d)(t)
        )
          return [o, 232];
        var l =
            !!e.name &&
            (function (e, t, n) {
              var r = (0, a.c)(t, n),
                s = (0, a.a)(r);
              return null != r.phonebookPhone && s !== e;
            })(e.name, t, n),
          c = i[e.subtype];
        if (!c)
          return __LOG__(4)`Unrecognized system message ${e.subtype}.`, null;
        var u = c.alert;
        return u ? u(o, l) : null;
      }
      function l(e, t, n) {
        var s = e.name ? e.name : (0, r.d)((0, a.c)(t, n)),
          o = i[e.subtype];
        return o
          ? { l10n: o.msg(s), hasAlert: null != o.alert }
          : (__LOG__(4)`Unrecognized system message ${e.subtype}.`,
            { l10n: 62, hasAlert: !1 });
      }
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n(13),
        a = n(36),
        s = n(3),
        i = class extends r.a {
          constructor() {
            var e;
            return (e = super(...arguments)), (this.KQ = null), e;
          }
          componentDidMount() {
            this.KR();
          }
          componentDidUpdate(e) {
            e.chat.mutedUntil !== this.props.chat.mutedUntil && this.KR();
          }
          componentWillUnmount() {
            null !== this.KQ && clearTimeout(this.KQ);
          }
          KR() {
            null !== this.KQ && clearTimeout(this.KQ);
            var e = this.props.chat,
              t = e.mutedUntil;
            if (null != t && (0, a.k)(e) && "always" !== t) {
              var n = 1e3 * (0, s.z)(t),
                r = Math.min(n, 1e3 * s.b);
              this.KQ = setTimeout(() => {
                (0, a.k)(this.props.chat) ? this.KR() : this.forceUpdate();
              }, r);
            }
          }
          render() {
            return this.props.children;
          }
        };
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M5.333 3.066a3.727 3.727 0 00.092 1.71 1.801 1.801 0 01-1.623 1.007 1.79 1.79 0 01-1.8-1.78c0-.983.806-1.78 1.8-1.78.647 0 1.214.337 1.531.843zm-2.273 6.94-2.646-.002c-.42 0-.414-.001-.414-.573v-.427c-.007-.999 1.522-2.502 3.562-2.497a4.16 4.16 0 011.81.422c-1.275.724-2.178 1.81-2.312 3.076zm9.6-5.049a3.7 3.7 0 00.12-2.042 1.8 1.8 0 11-.12 2.042zm.042 1.937a4.155 4.155 0 011.736-.387c2.04-.005 3.569 1.498 3.562 2.497v.427c0 .572.007.573-.414.573l-2.52.001c-.136-1.287-1.061-2.388-2.364-3.111zM4 10.389C4 8.529 6.576 7 9.079 7 11.582 7 14 8.53 14 10.389v.327c0 .347 0 .784-.99.784H5.012C4.011 11.5 4 11.062 4 10.716v-.327zm7.859-6.662c0 1.507-1.245 2.728-2.781 2.728-1.537 0-2.781-1.22-2.781-2.728C6.297 2.22 7.54 1 9.077 1c1.537 0 2.782 1.22 2.782 2.727z",
            }),
            2,
            { viewBox: "0 -4 18 18" }
          );
        });
    },
    function (e, t, n) {
      var r = n(1);
      n(13),
        (t.a = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            [
              (0, r.f)(32, "path", null, null, 1, {
                d:
                  "M12 21c.055 0 .11 0 .165-.002a1 1 0 00-.036-2C12.086 19 12.043 19 12 19v2zm0-16 .129.001a1 1 0 10.036-2A9.099 9.099 0 0012 3v2zm4.358-.876a1 1 0 10-.97 1.75c.075.04.149.083.222.127a1 1 0 101.033-1.712 8.895 8.895 0 00-.285-.165zm3.353 3.233A1 1 0 1018 8.39c.044.073.087.147.128.221a1 1 0 001.749-.97 8.9 8.9 0 00-.165-.284zM21 11.835a1 1 0 00-2 .036 6.887 6.887 0 010 .258 1 1 0 002 .036 9.008 9.008 0 000-.33zm-1.123 4.523a1 1 0 10-1.75-.97 6.829 6.829 0 01-.127.222 1 1 0 101.712 1.033 8.1 8.1 0 00.165-.285zm-3.233 3.353A1 1 0 1015.61 18a6.829 6.829 0 01-.221.128 1 1 0 10.97 1.749 9.08 9.08 0 00.284-.165zM12 3a9 9 0 000 18v-2a7 7 0 110-14V3z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d: "M11.8 10h-1a1 1 0 110-2h2a1 1 0 011 1v6a1 1 0 11-2 0v-5z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (e, t, n) {
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var r = n(1),
        a = n(13),
        s = n(140),
        i = n(56),
        o = n(398),
        l = n(19),
        c = (0, i.e)(
          function (e) {
            var t = e.content;
            return (0, r.b)(2, s.b.div, {
              hasFocusPriority: !0,
              className: o.a,
              children: t,
            });
          },
          { overlay: !0 }
        ),
        u = class extends a.a {
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e && n.targetOverlayId !== e.targetOverlayId) ||
              (r !== t &&
                (r.overlay !== t.overlay || r.overlayId !== t.overlayId))
            );
          }
          constructor(e) {
            super(e),
              (this.Bc = !1),
              (this.Bd = (e, t) => {
                if (e !== this.state.overlay && this.Bc) {
                  var n = null;
                  return (
                    null != e && (n = null != t ? t : (0, l.d)()),
                    this.setState({ overlay: e, overlayId: n }),
                    this.props.backend.dispatch({
                      type: "OPEN_OVERLAY",
                      overlayId: n,
                    }),
                    n
                  );
                }
              }),
              (this.state = { overlay: null, overlayId: null });
          }
          componentDidMount() {
            (this.Bc = !0), (0, l.c)(this.Bd);
          }
          componentWillUnmount() {
            (this.Bc = !1), (0, l.l)();
          }
          render() {
            return null != this.state.overlay &&
              this.state.overlayId === this.props.targetOverlayId
              ? (0, r.b)(2, c, { content: this.state.overlay })
              : null;
          }
        };
    },
    function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = "W GJ";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var r = n(1),
        a = (n(13), n(18)),
        s = n(56),
        i = n(19),
        o = n(112),
        l = n(110),
        c = (e) => {
          var t = e.className;
          return (0, r.f)(
            32,
            "svg",
            t,
            (0, r.f)(32, "path", null, null, 1, {
              d:
                "M16 2.8C8.7 2.8 2.8 8.7 2.8 16S8.7 29.2 16 29.2 29.2 23.3 29.2 16 23.3 2.8 16 2.8zm1.4 21.6h-2.7v-2.7h2.7v2.7zm3.2-10c-.3.6-1.1 1.5-2.2 2.6-.6.6-.9 1-1.1 1.4-.1.3-.2 1-.2 1.8h-2.5v-.8c0-.9.1-1.7.4-2.3.3-.6.8-1.3 1.6-2 .8-.8 1.3-1.3 1.4-1.5.2-.4.4-.8.4-1.2 0-.6-.2-1.2-.6-1.6-.4-.4-1-.7-1.7-.7s-1.3.2-1.7.7c-.5.5-.8 1.2-1 2.1l-2.5-.4c.1-1.4.6-2.5 1.5-3.5.9-.9 2.1-1.4 3.6-1.4 1.6 0 2.8.5 3.8 1.4.9 1 1.4 2.1 1.4 3.3-.1.8-.2 1.4-.6 2.1z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        },
        u = n(356),
        d = class extends s.b {
          addSoftKeys(e, t) {
            e.setCenterLabel(781, h);
          }
          render() {
            var e = this.props.selected;
            return (0, r.c)(
              [
                (0, r.b)(2, o.g, { className: "Ef" }),
                (0, r.b)(2, o.j, {
                  icon: (0, r.b)(2, c),
                  title: 117,
                  selected: e,
                }),
              ],
              4
            );
          }
        };
      function h(e) {
        (0, i.h)(
          {
            center: 796,
            onSoftCenter: "CLOSE",
            leftIcon: (0, r.b)(2, u.a, { className: "Ee" }),
            onSoftLeft: () => {
              (0, l.b)(e);
            },
          },
          (0, r.f)(
            1,
            "div",
            "Ed GC",
            [
              (0, r.f)(1, "div", null, (0, r.b)(2, a.b, { l10n: 118 }), 2),
              (0, r.f)(
                1,
                "ul",
                null,
                [
                  (0, r.f)(1, "li", null, (0, r.b)(2, a.b, { l10n: 119 }), 2),
                  (0, r.f)(1, "li", null, (0, r.b)(2, a.b, { l10n: 120 }), 2),
                ],
                4
              ),
            ],
            4
          )
        );
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n(1),
        a = (n(13), n(3)),
        s = n(69),
        i = n(22),
        o = n.n(i);
      function l(e) {
        var t,
          n = e.ts,
          i = e.className,
          l = (0, a.s)();
        return (
          (t =
            n > l
              ? (0, s.i)(n, "time")
              : n > l - a.g
              ? (0, s.i)(n, "weekdayShort")
              : (0, s.i)(n, "dateShort")),
          (0, r.f)(1, "div", (0, o.a)(i, "Ic GH GC GE"), t, 0)
        );
      }
    },
    function (e, t, n) {
      function r(e) {
        var t,
          n = e.Symbol;
        return (
          "function" == typeof n
            ? n.observable
              ? (t = n.observable)
              : ((t = n("observable")), (n.observable = t))
            : (t = "@@observable"),
          t
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n(423);
    },
    function (e, t, n) {
      n.r(t);
      var r,
        a = n(9),
        s = n.n(a),
        i = {};
      (i.jsStart = performance.now()),
        (self.onerror = function (e, t, a, s, i) {
          if (r) {
            r.crashlog("onerror", e),
              __LOG__(4)`onerror url: ${t} line: ${a} col: ${s}`;
            var o = n(96).getBridge();
            o && o.fireAndForget("basic", "sendLogs", { manual: !1 });
          } else console.error(e), console.log(i);
        }),
        (self.Promise = n(380).default),
        (self.onbeforeunload = function () {
          n(118).onAppClose();
        }),
        (self.onunhandledrejection = function (e) {
          e.preventDefault();
          var t = e.reason,
            a = e.promise;
          if (
            (self.ERROR &&
              t &&
              "QuotaExceededError" === t.name &&
              (__LOG__(4)`Unhandled dexie promise rejection: ${e}`,
              n(113).crashlog("dexie rejected", String(t))),
            t && t instanceof Error && "ChunkLoadError" === t.name)
          ) {
            var s = /Loading chunk (\S+) failed/.exec(t.message);
            if (s) {
              var i = s[1],
                o = t.message
                  .replace("Loading chunk " + i, "Loading chunk")
                  .replace("\n", `\nchunkId = ${i} `);
              t.message = o;
            }
          }
          if (r) {
            r.crashlog("rejected", String(t));
            var l = null == t ? void 0 : t.stack;
            l &&
              __LOG__(
                4
              )`### begin stack trace ${"2.2218.5"}\n${l}\n### end stack trace`,
              __LOG__(4)`promise: ${a}`;
          } else console.error("onunhandledrejection", t, a.toString());
          (function (e) {
            var t = n(96).getBridge();
            t &&
              (t.fireAndForget("basic", "sendLogs", { manual: !1 }),
              e &&
                "QuotaExceededError" === e.name &&
                t.fireAndForget("event", "ranOutOfStorage", {}));
          })(t);
        });
      var o = (r = n(113)).initializeLogger("PAGE", (e) => {
        var t = n(96).getBridge();
        t && t.fireAndForget("basic", "sendLogs", { manual: !1 });
      });
      __LOG__(2)`ENTRY::onload invoked`, (self.WAM = n(173));
      var l = n(142);
      l.startWamStore(),
        l.submitInitialAttributes(),
        n(381).startAbPropsStore(),
        (i.initialImports = performance.now());
      var c,
        u = !1;
      function d() {
        u ||
          ((u = !0),
          (navigator.mozApps.getSelf().onsuccess = function (e) {
            var t = e.target.result;
            t && t.checkForUpdate();
          }));
      }
      var h = n(240);
      (self.bootstrapQueue = Promise.resolve(self.bootstrapQueue)
        .then(
          (e) => (
            (c = e),
            (i.intl = performance.now()),
            __LOG__(2)`ENTRY::prepare initialize info store and intl`,
            n(197)
              .loadInfoStore()
              .then((e) => h.initLanguage(e.lang).then(() => e))
          )
        )
        .then((e) => {
          var t = e.appMode,
            r = e.appBuild;
          function a(e) {
            return [{ mode: "error", reason: e }, r];
          }
          var s = Date.now();
          return (
            s > 1660607999e3 && d(),
            s >= 1661212799e3
              ? a("expiredApp")
              : s < 1651034432614
              ? a("clockSkew")
              : parseInt(navigator.buildID, 10) < 20180524091144
              ? a("unsupportedOS")
              : n(431).isExpired()
              ? (d(), a("expiredApp"))
              : [t, r]
          );
        })
        .then((e) => {
          var t = s()(e, 2),
            r = t[0],
            a = t[1];
          return (
            (i.infoStore = performance.now()),
            __LOG__(2)`ENTRY::prepare initialize migrations`,
            "error" === r.mode || "2.2218.5" === a
              ? r
              : (__LOG__(
                  2
                )`initializeMigrations app version is different, checking migrations`,
                Promise.all([n.e(0), n.e(3), n.e(4), n.e(8), n.e(155)])
                  .then(n.bind(null, 420))
                  .then((e) => e.initializeMigrations("PAGE", r))
                  .then((e) => {
                    var t = "migration-needed" === e.type ? e.migration : null;
                    return t
                      ? n
                          .e(29)
                          .then(n.bind(null, 471))
                          .then((e) => e.claimHtml(t))
                      : r;
                  }))
          );
        })
        .then(
          (e) => (
            (i.migrations = performance.now()),
            __LOG__(2)`ENTRY::prepare load app info`,
            n(441).startFrontend(e, i, c, o)
          )
        )
        .catch((e) => {
          __LOG__(
            4
          )`ENTRY::onload failed to initialize ${e}. Error stack: ${e.stack}`;
        })),
        (i.onloadFinished = performance.now());
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.r(t),
        n.d(t, "isExpired", function () {
          return s;
        });
      var r = n(6),
        a = n(3);
      function s() {
        var e = r.D.get();
        return null != e && "2.2218.5" === e.version && !(0, a.p)(e.time);
      }
    },
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, "exports", { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.r(t),
        n.d(t, "startFrontend", function () {
          return wa;
        });
      var r = n(259),
        a = n(113),
        s = n(173),
        i = n(151),
        o = n(132),
        l = n(9),
        c = n.n(l),
        u = n(19),
        d = n(126),
        h = n(95),
        p = n(14),
        f = n(15),
        g = n(50),
        v = n(3),
        m = n(84),
        b = n(10);
      function _(e, t) {
        var n = (0, m.j)(t);
        return n && e ? (0, v.w)(e, n) : n || e;
      }
      var S = n(296),
        E = n(16),
        y = n(268),
        I = n(92);
      function O(e, t) {
        if (!e) return t;
        var n = "BATCH_ACTION" === e.type ? (0, b.m)(e.actions) : e;
        return "MEDIA_UPDATED" === t.type && "MEDIA_UPDATED" === n.type
          ? (n.msgs.push.apply(n.msgs, t.msgs),
            n.affectedChats.push.apply(n.affectedChats, t.affectedChats),
            e)
          : "AVATARS_STARTED_LOADING" === t.type &&
            "AVATARS_STARTED_LOADING" === n.type
          ? (n.jids.push.apply(n.jids, t.jids), e)
          : "BATCH_ACTION" === e.type
          ? (__LOG__(2)`Batching ${t.type}`, e.actions.push(t), e)
          : (__LOG__(2)`Joining ${e.type} and ${t.type}`,
            { type: "BATCH_ACTION", actions: [e, t] });
      }
      var A = n(326),
        C = n(192),
        k = n(176),
        w = n(115),
        D = n(313),
        L = n(207),
        T = n(170),
        N = n(127),
        M = n(85),
        G = n(45),
        R = n(331),
        j = n(179),
        x = n(130);
      function P(e) {
        for (var t = new Map(), n = 0; n < e.length; n++) {
          var r = e[n];
          if (null != r.callResult) {
            var a = r.peer,
              s = r.isFromMe,
              i = r.ts,
              o = (0, x.d)(s, r.callResult),
              l = (0, x.c)(i, a, o),
              c = t.get(l);
            null == c
              ? t.set(l, { peer: a, type: o, ts: i, logs: [r] })
              : c.logs.push(r);
          }
        }
        return { groups: t, orderedGroupIds: Array.from(t.keys()) };
      }
      var U,
        F,
        B = n(171),
        V = n(35),
        J = n(80);
      function z() {
        if ((0, N.i)()) return x.a.WIFI;
        var e = navigator.mozMobileConnections;
        if (null == e) return x.a.NONE;
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (null == n ? void 0 : n.data.connected) return x.a.CELLULAR;
        }
        return x.a.NONE;
      }
      function H() {
        var e = z();
        U !== e && F((U = e));
      }
      var $,
        W,
        K = !1,
        Y = n(211),
        q = n(6),
        X = n(174),
        Q = n(315),
        Z = n(48),
        ee = n(208),
        te = (n(327), n(36)),
        ne = !0,
        re = !1,
        ae = !1;
      function se() {
        ne || ((ne = !0), (0, d.a)(905));
      }
      function ie() {
        (0, d.a)(907), (ne = !1);
      }
      function oe() {
        re || navigator.onLine || (clearTimeout($), ($ = setTimeout(ie, 5e3)));
      }
      function le() {
        return null == W && (W = !(0, te.j)()), W;
      }
      var ce = n(23),
        ue = n(110),
        de = n(363),
        he = n(209),
        pe = n(185),
        fe = n(249),
        ge = n(100);
      function ve(e) {
        var t = (0, g.a)(e.getStoreState());
        return !!(null == t ? void 0 : t.isVoipAvailable);
      }
      var me = n(96),
        be = n(204),
        _e = n(256),
        Se = {
          NEW_CHAT: 38,
          NEW_GROUP_INITIAL: 1,
          SETTINGS: 3,
          SETTINGS_ACCOUNT: 5,
          SETTINGS_PROFILE: 4,
          HELP_CONTACT_US: 11,
          GROUP_INFO: 7,
          DELETE_ACCOUNT: 12,
          MSG_INFO: 37,
        },
        Ee = class e {
          constructor(t) {
            (this.De = null),
              (this.Dh = null),
              (this.statusSession = null),
              (this.statusViewerSession = null),
              (this.Dj = !1),
              (this.Dk = (0, v.E)()),
              (this.Do = new (class {
                constructor(e) {
                  (this.YY = null), (this.Ya = null), (this.YZ = e);
                }
                flushSynchronously() {
                  this.Ya = null;
                  var e = this.YY;
                  return null != e && ((this.YY = null), (0, this.YZ)(e), !0);
                }
                dispatchLazily(e) {
                  this.YY = O(this.YY, e);
                }
                dispatchAsync(e) {
                  if (((this.YY = O(this.YY, e)), null == this.Ya)) {
                    var t = Promise.resolve().then(() => {
                      this.Ya === t && this.flushSynchronously();
                    });
                    this.Ya = t;
                  }
                }
              })((e) => {
                __LOG__(2)`BackendInterface dispatch ${e.type}`,
                  this.Df.dispatch(e);
              })),
              (this.goBack = () => {
                this.dispatch({ type: "BACK", willCloseNaturally: !1 });
              }),
              (this.fireAndForget = (e, t, n) => {
                this.Di.fireAndForget(e, t, n);
              }),
              (this.sendAndReceive = (e, t, n) =>
                this.Di.sendAndReceive(e, t, n)),
              (this.closeAllScreens = () => {
                this.dispatch({ type: "CLOSE_ALL_SCREENS" });
              }),
              (this.Ds = (e) =>
                this.maybeCheckMsgMediaContent(e.id, e.content).then(() => e)),
              (this.deleteGdprReport = () => {
                this.Dm(E.e.deleteGdprReport());
              }),
              (this.deleteTwoFactor = () => {
                this.Dm(E.e.deleteTwoFactor()),
                  this.dispatch({ type: "TWO_FACTOR_DEACTIVATION" });
              }),
              (this.Di = t),
              (this.Dl = (0, fe.a)(this));
            for (
              var n = Object.getOwnPropertyNames(e.prototype), r = 0;
              r < n.length;
              ++r
            ) {
              var a = n[r];
              if ("constructor" !== a) {
                var s = e.prototype[a];
                "function" == typeof s && (this[a] = s.bind(this));
              }
            }
          }
          Dm(e) {
            this.Dl.runJob(e);
          }
          Dn(e) {
            return this.Dl.runJobWithResult(e);
          }
          getCache() {
            return this.Dg;
          }
          getStatusCache() {
            return this.Dh;
          }
          instantiateStatusCache() {
            this.Dh = new (class {
              constructor() {
                (this.Yb = !1),
                  (this.Yc = new Map()),
                  (this.Yd = null),
                  (this.Ye = new Map()),
                  (this.Yf = { recent: [], viewed: [], muted: [] }),
                  (this.Yg = null),
                  (this.Yh = {});
              }
              isLoaded() {
                return this.Yb;
              }
              load(e, t) {
                if (this.Yb)
                  return (
                    __LOG__(4)`Tried to load StatusCache multiple times`,
                    void SEND_LOGS("statusCache-load-multiple")
                  );
                this.Yb = !0;
                var n = void 0,
                  r = new Map(),
                  a = { recent: [], viewed: [], muted: [] };
                function s(e) {
                  switch (((n = _(n, e.msgs[0])), r.set(e.jid, e), e.section)) {
                    case "recent":
                      a.recent.push(e.jid);
                      break;
                    case "viewed":
                      a.viewed.push(e.jid);
                      break;
                    default:
                      e.section, a.muted.push(e.jid);
                  }
                }
                for (var i = 0, o = e.length; i < o; ++i) {
                  var l = e[i],
                    c = this.Ye.get(l.jid);
                  "CLEARED" !== c && s(null != c ? c : l);
                }
                this.Ye.forEach((e) => {
                  "CLEARED" !== e && (r.has(e.jid) || s(e));
                }),
                  (this.Yd = t),
                  (this.Yc = r),
                  (this.Yf = a),
                  (this.Yg = n),
                  (this.Ye = new Map()),
                  this.Yi();
              }
              Yj(e) {
                this.Yf[e].sort((e, t) => {
                  var n = this.Yc.get(e);
                  if (null == n) return 1;
                  var r = this.Yc.get(t);
                  return null == r ? 1 : r.sortBy - n.sortBy;
                });
              }
              Yi() {
                this.Yj("recent"), this.Yj("viewed"), this.Yj("muted");
              }
              Yk(e) {
                var t = e.section;
                (this.Yf[t] = this.Yf[t].filter((t) => t !== e.jid)),
                  this.Yj(t);
              }
              Yl() {
                var e = void 0,
                  t = this.Yc;
                function n(n) {
                  var r = t.get(n);
                  null != r && (e = _(e, r.msgs[0]));
                }
                return (
                  this.Yf.recent.forEach(n),
                  this.Yf.viewed.forEach(n),
                  this.Yf.muted.forEach(n),
                  e
                );
              }
              purgeExpired() {
                if (this.isLoaded()) {
                  var e = (0, v.E)(),
                    t = this.Yc,
                    n = null,
                    r = !1;
                  return (
                    (this.Yf = {
                      recent: this.Yf.recent.filter(a),
                      viewed: this.Yf.viewed.filter(a),
                      muted: this.Yf.muted.filter(a),
                    }),
                    (this.Yg = n),
                    r ? this.toStore() : void 0
                  );
                }
                function a(a) {
                  var s = t.get(a);
                  if (null == s) return (r = !0), !1;
                  var i = s.msgs.filter((t) => (0, m.i)(e, t));
                  return 0 === i.length
                    ? (t.delete(a), (r = !0), !1)
                    : (i.length !== s.msgs.length &&
                        t.set(a, (0, b.j)(s, { msgs: i, unread: (0, m.g)(i) })),
                      (n = _(n, i[0])),
                      (r = !0),
                      !0);
                }
              }
              updateAuthor(e) {
                if (this.isLoaded()) {
                  var t = this.Yc.get(e.jid);
                  this.Yc.set(e.jid, e),
                    (null == t ? void 0 : t.section) !== e.section &&
                      (t && this.Yk(t),
                      this.Yf[e.section].push(e.jid),
                      this.Yj(e.section)),
                    (this.Yg = this.Yl());
                } else this.Ye.set(e.jid, e);
              }
              updateMeAuthor(e) {
                this.Yd = e;
              }
              clearAuthors(e) {
                this.isLoaded()
                  ? (e.forEach((e) => {
                      var t = this.Yc.get(e);
                      t && (this.Yc.delete(e), this.Yk(t));
                    }),
                    (this.Yg = this.Yl()))
                  : e.forEach((e) => {
                      this.Ye.set(e, "CLEARED");
                    });
              }
              toStore() {
                var e = this.Yf,
                  t = e.recent,
                  n = e.viewed,
                  r = e.muted;
                return {
                  authors: new Map(this.Yc),
                  sections: {
                    recent: t.slice(0),
                    viewed: n.slice(0),
                    muted: r.slice(0),
                  },
                  me: this.Yd,
                  oldestStatusTimestamp: this.Yg,
                };
              }
              statusLoading(e) {
                e.forEach((e) => {
                  if (null != this.Yh[e])
                    return (
                      __LOG__(4)`Started loading a status that was already ${
                        "LOADING" === this.Yh[e] ? "loading" : "loaded"
                      }`,
                      void SEND_LOGS("status-loading-twice")
                    );
                  this.Yh[e] = "LOADING";
                });
              }
              statusLoaded(e) {
                e.forEach((e) => {
                  "LOADING" !== this.Yh[e.id] &&
                    (__LOG__(3)`Loaded status that was not loading`,
                    SEND_LOGS("status-loaded-not-loading")),
                    (this.Yh[e.id] = e);
                });
              }
              statusUpdated(e) {
                e.forEach((e) => {
                  null != this.Yh[e.id] && "LOADING" !== this.Yh[e.id]
                    ? (this.Yh[e.id] = e)
                    : __LOG__(2)`Tried to update status that was not loaded`;
                });
              }
              mediaStatusUpdated(e, t) {
                var n = this.Yh[e];
                if (n && "LOADING" !== n) {
                  var r = n.content;
                  if ("text" === r.type)
                    return void __LOG__(
                      3
                    )`Tried to update media status for text status post`;
                  this.Yh[e] = Object.assign({}, n, {
                    content: (0, b.j)(r, { mediaStatus: t }),
                  });
                }
              }
              getStatuses() {
                return this.Yh;
              }
            })();
          }
          populate(e, t) {
            (this.Df = e),
              t &&
                ((this.Dg = t),
                (function (e, t, n) {
                  var r = null,
                    a = () => {
                      var a = t.getState(),
                        s =
                          "main" === a.mode && a.msglist
                            ? a.msglist.chat.id
                            : null;
                      if (r !== s) {
                        (r = s), (0, ee.c)(s);
                        var i = n.clearExpiredViewOnceMsgs();
                        e.unlinkViewOnceMsgsMedia(i);
                      }
                    };
                  t.subscribe(a), a();
                })(this, e, t));
          }
          getStore() {
            return this.Df;
          }
          getStoreState() {
            for (; this.Do.flushSynchronously(); );
            return this.Df.getState();
          }
          dispatchLazily(e) {
            this.Do.dispatchLazily(e);
          }
          dispatch(e) {
            this.Do.dispatchAsync(e);
          }
          Dp(e) {
            var t = !ve(this);
            return (
              t &&
                __LOG__(
                  3
                )`BackendInterface: ${e} called while voip is unavailable`,
              t
            );
          }
          goBackFromEvent(e) {
            this.dispatch({ type: "BACK", willCloseNaturally: !0 }),
              this.getStoreState().shouldExit || e.preventDefault();
          }
          handleAppVisible() {
            (0, _e.a)(this),
              this.dispatch({ type: "APP_FOREGROUND" }),
              this.fireAndForget("backend", "setAppVisible", { visible: !0 });
          }
          handleAppHidden() {
            (0, _e.c)(this),
              this.fireAndForget("backend", "setAppVisible", { visible: !1 });
          }
          spinUntilReadyOverlay(e, t) {
            var n = (0, u.i)(
              Object.assign({ left: 761, onSoftLeft: "CLOSE" }, t)
            );
            e.catch(
              (e) => (__LOG__(4)`spinUntilReady() error: ${e}`, null)
            ).then((e) => {
              var t = this.getStoreState();
              __LOG__(2)`spinUntilReady() success ${n}`;
              var r,
                a = t.overlayId;
              null != a &&
                a === n &&
                (e && (r = e()), "dontClose" !== r && (0, u.a)());
            });
          }
          spinUntilJob(e, t, n, r, a, s) {
            var i = this.Dn(e);
            this.spinUntilReady(i.then(t), n, r, a, s);
          }
          spinUntilReady(e, t, n, r, a) {
            var s = this.openScreen("SPINNER_SCREEN", {
              title: t,
              subtitle: n,
              onExit: r,
              extra: a,
            });
            e.catch(
              (e) => (__LOG__(4)`spinUntilReady() error: ${e}`, null)
            ).then((e) => {
              var t = (0, g.a)(this.getStoreState());
              if (t) {
                __LOG__(2)`spinUntilReady() success`;
                var n = t.screens[t.screens.length - 1];
                n && n.id === s && (this.Dq(s), e && e());
              }
            });
          }
          spinUntilReadyWithTimeout(e, t, n, r, a, s) {
            var i = Promise.race([e, (0, h.a)(r).then(() => null)]);
            this.spinUntilReady(i, t, n, a, s);
          }
          starMessagesFromChat(e, t) {
            return this.Dm(E.e.starMessagesFromChat(e, t));
          }
          unstarMessagesFromChat(e, t) {
            return this.Dm(E.e.unstarMessagesFromChat(e, t));
          }
          keepMessagesFromChat(e, t) {
            return this.Dm(E.e.keepMessagesFromChat(e, t));
          }
          unkeepMessagesFromChat(e, t) {
            return this.Dm(E.e.unkeepMessagesFromChat(e, t));
          }
          resetGroupInviteCode(e) {
            return this.Dn(E.e.revokeGroupInviteCode(e));
          }
          addFavoriteGif(e, t) {
            return this.Dn(E.e.addFavoriteGif(e, t));
          }
          removeFavoriteGif(e) {
            return this.Dn(E.e.removeFavoriteGif(e));
          }
          removeFavoriteGifFromId(e, t) {
            return this.Dn(E.e.removeFavoriteGifFromId(e, t));
          }
          acceptGroupAddRequest(e, t, n, r) {
            var a = this.Dn(E.e.acceptGroupAddRequest(e, t, n, r));
            this.spinUntilReady(
              a.then((e) =>
                "success" !== e
                  ? () => (0, j.a)(this, e)
                  : new Promise(() => {})
              ),
              420,
              169,
              void 0,
              { key: "acceptGroupAddRequest", groupJid: e }
            );
          }
          Dr(e) {
            this.Dg.updateOrAddChat(e),
              this.dispatch({ type: "CHAT_MODIFIED", chat: e });
          }
          openScreen(e, t) {
            var n = Se[e];
            void 0 !== n &&
              100 * Math.random() < 1 &&
              WAM.log("regular", 474, void 0, [1, 0, n], void 0, 100);
            var r = (0, f.A)();
            return (
              __LOG__(2)`Open screen ${e}`,
              this.dispatch({
                type: "OPEN_SCREEN",
                id: r,
                screen: { type: e, props: t },
              }),
              r
            );
          }
          updateScreen(e, t) {
            this.dispatch({ type: "UPDATE_SCREEN", id: e, screen: t });
          }
          Dq(e) {
            this.dispatch({
              type: "CLOSE_SCREEN",
              id: e,
              closeScreensAbove: !1,
            });
          }
          fetchMissingKeysForContact(e) {
            this.Dm(E.e.fetchMissingKeysForContact(e));
          }
          openMsgInfo(e) {
            this.openScreen("MSG_INFO", { msg: e, msgInfo: null }),
              this.reloadMsgInfos(e.id);
          }
          reloadMsgInfos(e) {
            this.Di.sendAndReceive("backend", "getMsgInfos", { msgId: e }).then(
              (t) => {
                this.dispatch({
                  type: "LOADED_MSG_INFO",
                  msgId: e,
                  msgInfo: t,
                });
              }
            );
          }
          downloadMedia(e, t) {
            this.Dm(E.e.downloadMedia(e, t));
          }
          downloadMediaThumb(e, t) {
            this.Dm(E.e.downloadMediaThumb(e, t));
          }
          sendVCardMsg(e, t, n) {
            var r = { type: "vcard", contacts: t },
              a = ye(n),
              s = a.quoted,
              i = a.remoteJid;
            return (0, be.a)(this, e), this.Dn(E.e.sendVCardMsg(e, r, s, i));
          }
          sendGroupInvitations(e, t) {
            var n = this.Dg.groupChatFromJid(e);
            if (null == n)
              return (
                __LOG__(
                  4
                )`Tried to send invites for a group that's no longer in chats`,
                void SEND_LOGS("group-invite-disappeared")
              );
            t.forEach((t) => {
              this.Dm(
                E.e.sendMsg(t.jid, {
                  type: "group_invite",
                  groupJid: e,
                  groupName: n.groupInfo.title,
                  inviteExpiration: t.expiration,
                  inviteCode: t.code,
                  preview: null,
                  caption: null,
                })
              );
            });
          }
          revokeGroupInvitation(e, t) {
            var n = this.Dn(E.e.revokeGroupInvitations(e, [t])).then((e) => {
              var t = (0, g.a)(this.getStoreState());
              return t
                ? (0, j.i)(this, e, t.contacts)
                : (__LOG__(3)`Tried to revoke invitation during reg`, null);
            });
            this.spinUntilReady(n, 460, 169);
          }
          statusFirstSendDialogClosed() {
            q.F.update({ firstTimePost: (0, v.E)() }),
              this.dispatch({ type: "STATUS_FIRST_SENT_DIALOG_CLOSED" });
          }
          sendTextMsg(e, t, n, r, a) {
            var s = {
                type: "text",
                text: t,
                waMe: a
                  ? {
                      urlText: t === a.origText,
                      urlNumber: t === a.origText && a.urlNumber,
                    }
                  : void 0,
              },
              i = ye(n),
              o = i.quoted,
              l = i.remoteJid;
            (0, be.a)(this, e), this.Dm(E.e.sendMsg(e, s, o, l, r));
          }
          sendStatusTextMsg(e, t, n, r) {
            var a = {
              type: "text",
              text: e,
              linkPreview: n,
              backgroundColor: t,
            };
            this.Dm(E.e.sendStatusMsg(a, r));
          }
          sendLocationMsg(e) {
            var t = e.jid,
              n = e.lat,
              r = e.lng,
              a = {
                previewBlob: e.preview,
                type: "location",
                lat: n,
                lng: r,
                preview: null,
                name: e.name,
                address: e.address,
                url: e.url,
              };
            (0, be.a)(this, t), this.Dm(E.e.sendMsg(t, a));
          }
          sendMediaMsg(e, t, n, r) {
            var a = Promise.resolve(t).then((t) => {
              if (t) {
                var a = ye(n),
                  s = a.quoted,
                  i = a.remoteJid;
                ("video" !== t.type && "image" !== t.type) ||
                  (t.uploadSource = r),
                  (0, be.a)(this, e),
                  this.Dm(E.e.sendMediaMsg(e, t, s, i));
              }
            });
            (0, w.c)(a);
          }
          sendStatusMediaMsg(e, t) {
            var n = Promise.resolve(e).then((e) => {
              e && this.Dm(E.e.sendStatusMediaMsg(e, t));
            });
            (0, w.c)(n);
          }
          sendMediaMsgs(e, t, n, r) {
            var a = Promise.all(n).then((n) => {
              e.forEach((e) => {
                (0, be.a)(this, e);
              }),
                this.Dm(E.e.sendMediaMsgs(e, t, n, r));
            });
            (0, w.c)(a);
          }
          revokeChatMsgs(e, t) {
            this.Dm(E.e.revokeChatMsgs(e, t));
          }
          revokeStatusMsg(e) {
            this.Dm(E.e.revokeStatusMsg(e));
          }
          createGroup(e, t, n, r, a) {
            var s = this.Dn(E.e.createGroup(e, t, n, r, a)).then((t) => {
              var n;
              if (t.error)
                return "no-network" ===
                  (null == (n = t.error) ? void 0 : n.reason)
                  ? (__LOG__(
                      3
                    )`Backend.createGroup: No connection, creating the group is postponed`,
                    () => {})
                  : () => (0, j.d)(this, t, e);
              var r = t.result.groupJid,
                a = this.Dg.chatFromJid(r);
              return a && "GROUP" === a.type
                ? () => {
                    (0, ge.a)(this, a.jid, "newest");
                    var e = (0, g.a)(this.getStoreState());
                    if (e) {
                      var n = 0 !== e.serverProps.groupInviteSending;
                      (0, j.e)(this, a.id, t, e.contacts, n);
                    } else __LOG__(4)`createGroup called during reg`;
                  }
                : (__LOG__(4)`Backend.createGroup: ${r} does not exist`, null);
            });
            Ie(this)
              ? (0, u.e)({ title: 229, text: 532 })
              : this.spinUntilReadyWithTimeout(s, [(0, Z.b)(e), 87], 169, 5e3);
          }
          setProfileName(e) {
            this.Dm(E.e.setProfileName(e)),
              this.dispatch({ type: "PUSHNAME_UPDATED", pushname: e });
          }
          setAbout(e) {
            this.Dm(E.e.setAbout(e));
          }
          removeProfilePicture() {
            return this.Dn(E.e.setProfilePicture(null));
          }
          setProfilePicture(e) {
            return this.Dn(E.e.setProfilePicture(e));
          }
          setOneToOneEphemeralSetting(e, t, n) {
            Oe(this, 275) ||
              this.Dm(E.e.setOneToOneEphemeralSetting(e, t, n || (0, v.E)()));
          }
          setGroupSubject(e, t) {
            this.Dm(E.e.setGroupSubject(e, t));
          }
          updateMediaStatus(e, t) {
            var n = (0, f.z)(e);
            if ("status" === n.type) {
              var r = this.getStatusCache();
              if (null == r) return;
              r.mediaStatusUpdated(n.msgId, t),
                this.dispatch({
                  type: "STATUS_MEDIA_UPDATED",
                  statusId: n.msgId,
                  mediaStatus: t,
                });
            } else {
              var a = this.Dg.mediaStatusUpdated(n.msgId, t);
              a && this.dispatch(a);
            }
          }
          setGroupDescription(e, t) {
            this.Dn(E.e.setGroupDescription(e, t)).then((e) => () => {
              if ("success" !== e) {
                var t;
                switch (e) {
                  case "conflict":
                    t = 348;
                    break;
                  case "not-authorized":
                    t = 349;
                    break;
                  default:
                    t = 228;
                }
                (0, u.e)({ title: 229, text: t });
              }
            }),
              this.goBack();
          }
          setGroupEphemeralSetting(e, t) {
            Oe(this, 275) || this.Dm(E.e.setGroupEphemeralSetting(e, t));
          }
          setGroupLocked(e, t) {
            var n = this.Dn(E.e.setGroupLocked(e, t)).then(() => null);
            this.spinUntilReady(n, 370, 169);
          }
          setGroupParticipants(e, t) {
            return this.Dn(E.e.setGroupParticipants(e, t));
          }
          setGroupAnnouncement(e, t) {
            var n = this.Dn(E.e.setGroupAnnouncement(e, t)).then(() => null);
            this.spinUntilReady(n, 361, 169);
          }
          setGroupPicture(e, t) {
            return this.Dn(E.e.setGroupPicture(e, t));
          }
          addGroupParticipants(e, t, n, r) {
            var a = this.Dn(E.e.addGroupParticipants(e.jid, t)).then((t) =>
              (0, j.b)(this, e.id, t, n, r)
            );
            this.spinUntilReady(a, 17, 169);
          }
          leaveGroup(e) {
            var t = (0, g.a)(this.getStoreState());
            t
              ? this.Dm(E.e.removeGroupParticipants(e, [t.user.jid]))
              : __LOG__(4)`leaveGroup called during reg`;
          }
          removeGroupParticipants(e, t, n) {
            if (!Oe(this, 628)) {
              var r = this.Dn(E.e.removeGroupParticipants(e, t)).then((e) =>
                (0, j.g)(this, e, n)
              );
              this.spinUntilReady(r, 629, 169);
            }
          }
          promoteGroupParticipants(e, t, n) {
            if (!Oe(this, 376)) {
              var r = this.Dn(E.e.promoteGroupParticipants(e, t)).then((e) =>
                (0, j.c)(this, e, n)
              );
              this.spinUntilReady(r, 116, 169);
            }
          }
          demoteGroupParticipants(e, t, n) {
            if (!Oe(this, 376)) {
              var r = this.Dn(E.e.demoteGroupParticipants(e, t)).then((e) =>
                (0, j.c)(this, e, n)
              );
              this.spinUntilReady(r, 116, 169);
            }
          }
          markChatAsRead(e) {
            Ae(e);
            var t = this.Dg.chatFromId(e);
            if (t && 0 !== t.msgInfo.unreadMsgCount)
              if (-1 !== t.msgInfo.unreadMsgCount) {
                var n = t.msgInfo,
                  r = n.newest,
                  a = n.oldestUnread;
                r && a && this.Dm(E.e.markChatAsRead(t.jid, a, r));
              } else this.removeChatUnreadMark(e);
          }
          markStatusAsSeen(e, t) {
            this.Dm(E.e.markStatusAsSeen(e, t));
          }
          blockUser(e) {
            this.blocklistAction(e, "block");
          }
          unblockUser(e) {
            this.blocklistAction(e, "unblock");
          }
          blocklistAction(e, t) {
            var n = (0, g.a)(this.getStoreState());
            n
              ? n.serverProps.mdBlocklistV2
                ? this.Dm(E.e.setBlocklistV2(e, t))
                : "block" === t
                ? this.Dm(E.e.blockUser(e))
                : this.Dm(E.e.unblockUser(e))
              : __LOG__(4)`blocklist action ${t} called during reg`;
          }
          reportUserSpam(e) {
            var t = this.Dn(E.e.reportUserSpam(e));
            this.spinUntilReady(
              t.then((e) => () => (0, B.f)(this, e)),
              647,
              169
            );
          }
          reportGroupSpam(e) {
            var t = this.Dn(E.e.reportGroupSpam(e));
            this.spinUntilReady(
              t.then((e) => () => (0, j.h)(this, e)),
              647,
              169
            );
          }
          markGroupAsMessaged(e) {
            this.Dm(E.e.markGroupAsMessaged(e.id, e.jid));
          }
          maybeCheckMsgMediaContent(e, t) {
            var n = t;
            switch (
              ("rich_hsm" === n.type && n.richContent && (n = n.richContent),
              n.type)
            ) {
              case "futureproof":
                "document" === n.subtype &&
                  this.Dm(E.e.convertFutureproofMessage(e));
                break;
              case "text":
                var r = n.linkPreview;
                r &&
                  void 0 === r.suspiciousCharacters &&
                  this.Di.fireAndForget(
                    "backend",
                    "recomputeSuspiciousCharacters",
                    { msgId: e }
                  );
                break;
              case "image":
              case "video":
              case "gif":
              case "voice":
              case "vcard":
              case "document":
                if ("vcard" === n.type && !n.isMMS) break;
                var a = n.mediaStatus;
                if ("ready" === a.type) {
                  var s = (0, G.e)(a.ref);
                  if (s)
                    return (0, M.p)(s).then((t) => {
                      t || this.markMediaContentAsDeleted(e);
                    });
                }
            }
            return Promise.resolve();
          }
          loadMsgContentBlob(e, t, n) {
            return (
              __LOG__(2)`Loading msg contentBlob for ${e}`,
              (0, G.p)(t, {
                uri: (e) => (0, R.a)(e, n),
                path: (t) =>
                  (0, R.a)(t, n).then(
                    (t) => t || (this.markMediaContentAsDeleted(e), null)
                  ),
              })
            );
          }
          markMediaContentAsDeleted(e) {
            this.Di.fireAndForget("backend", "markMediaContentAsDeleted", {
              msgId: e,
            });
          }
          markGifContentAsDeleted(e, t) {
            this.Di.fireAndForget("backend", "markGifContentAsDeleted", {
              source: e,
              plaintextHash: t,
            });
          }
          openAvatarView(e) {
            this.openScreen("AVATAR_IMAGE_VIEW", {
              jid: e,
              avatarStatus: this.Dg.fullsizeAvatar(e),
            });
          }
          sendMetrics() {
            this.Di.fireAndForget("backend", "sendMetrics", {});
          }
          sendAnonymousMetrics() {
            this.Di.fireAndForget("backend", "sendAnonymousMetrics", {});
          }
          getIdentityVerificationData(e) {
            return this.Di.sendAndReceive(
              "backend",
              "getIdentityVerificationData",
              { jid: e }
            );
          }
          syncAllContacts(e) {
            if (!Oe(this, 895)) {
              var t = (0, y.a)().then((t) =>
                this.Di.sendAndReceive("backend", "syncAllContacts", {
                  type: e,
                  revision: t,
                })
              );
              this.spinUntilReady(
                t.then((e) => () => {
                  e && (0, u.e)({ title: 229, text: 895 });
                }),
                897,
                896
              );
            }
          }
          deltaSync(e, t) {
            return (0, y.a)().then((n) =>
              this.Di.sendAndReceive("backend", "deltaSync", {
                type: e,
                revision: n,
                addedPhoneToJid: t,
              })
            );
          }
          deleteAllMediaAndReload(e) {
            var t = this.Di.sendAndReceive("backend", "deleteAllMedia", {
              olderThan: e,
            })
              .then(() => (self.location.reload(!0), (0, h.a)(15e3)))
              .then(() => null);
            this.spinUntilReady(t, 574, 573);
          }
          deleteAccount() {
            return this.Di.sendAndReceive(
              "backend",
              "startDeleteAccount",
              {}
            ).then(() => {
              (0, i.a)(), self.location.reload(!0);
            });
          }
          deleteChat(e, t, n) {
            var r = this.Dn(
              E.e.deleteChat(e, "retainMediaInPhoneStorage" === n)
            ).then(() => null);
            this.spinUntilReady(r, t ? 222 : 219, 846);
          }
          clearChat(e, t, n) {
            var r = this.Dn(
              E.e.clearChat(
                e,
                "retainMediaInPhoneStorage" === t,
                "retainStarredMessages" === n
              )
            ).then(() => null);
            this.spinUntilReady(r, 138, 846);
          }
          updateGeneralSettings(e) {
            return this.Dn(E.e.updateGeneralSettings(e)).then((e) =>
              "network_error" !== e.status
                ? e
                : new Promise((t) => {
                    (0, u.e)({
                      title: 229,
                      text: 715,
                      onClose: () => {
                        t(e);
                      },
                    });
                  })
            );
          }
          updateWallpaper(e, t, n) {
            var r = this.Dn(E.e.updateChatWallpaper(e, t || null, n)).then(
              () => null
            );
            this.spinUntilReady(r, 738);
          }
          saveAlphaJpegStickerBlob(e, t) {
            return (
              __LOG__(2)`WebP: Saving sticker as jpeg`,
              this.Di.sendAndReceive("backend", "saveAlphaJpegStickerBlob", {
                msgId: e,
                blob: t,
              })
            );
          }
          getStickerMsgMediaRefs(e) {
            return this.Di.sendAndReceive("backend", "getStickerMsgMediaRefs", {
              msgId: e,
            });
          }
          getPrivacySettings() {
            return this.Di.sendAndReceive("backend", "getPrivacySettings", {});
          }
          openGroupAddBlacklistScreen() {
            if (!Oe(this, 228)) {
              var e = this.Di.sendAndReceive(
                "backend",
                "getContactsBlacklist",
                {}
              );
              this.spinUntilReady(
                e.then((e) =>
                  e.error
                    ? ((0, u.e)({ title: 229, text: 228 }), null)
                    : () => {
                        this.openScreen("SETTINGS_GROUP_ADD_BLACKLIST", {
                          groupAddBlacklist: e.contactsBlacklist,
                        });
                      }
                ),
                701,
                169
              );
            }
          }
          openMediaDrawer(e) {
            var t = this.loadChatMediaMsgs({ chatId: e.id, limit: p.C });
            this.openScreen("MEDIA_DRAWER", {
              medias: [],
              allLoaded: !1,
              loading: { older: t },
              deleting: [],
              revoking: [],
              useCase: { type: "mediaDrawer", chat: e },
            });
          }
          openStorageSettingMediaDrawer(e, t) {
            var n = this.loadStorageSettingMediaMsgs({ filter: t, limit: p.C });
            this.openScreen("MEDIA_DRAWER", {
              medias: [],
              allLoaded: !1,
              loading: { older: n },
              deleting: [],
              revoking: [],
              useCase: { type: "storageSetting", chat: e, filter: t },
            });
          }
          getStorageSettingChatsMediaSizes() {
            return this.Di.sendAndReceive(
              "backend",
              "getStorageSettingChatsMediaSizes",
              {}
            );
          }
          getStorageSettingTotalMediaSize() {
            return this.Di.sendAndReceive(
              "backend",
              "getStorageSettingTotalMediaSize",
              {}
            );
          }
          retryMsgWithoutBlockedCheck(e) {
            return this.Dm(E.e.retryMsg(e));
          }
          retryStatusMsg(e, t) {
            return this.Dm(E.e.retryMsg(e, t));
          }
          muteChat(e, t) {
            return this.Di.fireAndForget("backend", "muteChat", {
              chatId: e,
              mutedUntil: "number" == typeof t ? (0, v.l)(t) : t,
            });
          }
          muteAuthor(e) {
            this.Di.fireAndForget("backend", "muteAuthor", { authorJid: e });
          }
          unmuteAuthor(e) {
            this.Di.fireAndForget("backend", "unmuteAuthor", { authorJid: e });
          }
          setChatArchivedState(e, t) {
            return this.Di.fireAndForget("backend", "setChatArchivedState", {
              chatId: e,
              archived: t,
            });
          }
          markChatAsUnread(e) {
            return this.Di.fireAndForget("backend", "markChatAsUnread", {
              chatId: e,
            });
          }
          removeChatUnreadMark(e) {
            return this.Di.fireAndForget("backend", "removeChatUnreadMark", {
              chatId: e,
            });
          }
          forwardMsgs(e, t, n) {
            this.Dm(E.e.forwardMsgs(e, t, n));
          }
          deleteMsgsFromStorageSetting(e) {
            return (
              this.dispatch({ type: "DELETE_MSGS_STARTED", msgIds: e }),
              this.Dm(E.e.deleteMsgsFromStorageSetting(e))
            );
          }
          deleteChatMsgs(e, t) {
            return (
              this.dispatch({ type: "DELETE_MSGS_STARTED", msgIds: t }),
              this.Dm(E.e.deleteChatMsgs(e, t))
            );
          }
          markPlayed(e, t) {
            return this.Dm(E.e.markPlayed(e, t));
          }
          maybeRedirectAfterSharing(e, t) {
            if (t)
              e.length > 0 ? (0, d.a)(859) : (0, d.a)(860),
                this.closeAllScreens();
            else if (1 === e.length) {
              var n = e[0];
              (0, ge.a)(this, n, "newest");
            } else this.closeAllScreens();
          }
          requestGdprReport() {
            this.Dm(E.e.requestGdprReport());
          }
          setTwoFactor(e, t) {
            this.Dm(E.e.setTwoFactor(e, t)),
              this.dispatch({
                type: "TWO_FACTOR_ACTIVATION",
                hasEmail: null != t,
              });
          }
          changeTwoFactorPin(e) {
            this.Dm(E.e.changeTwoFactorPin(e));
          }
          changeTwoFactorEmail(e) {
            this.Dm(E.e.changeTwoFactorEmail(e)),
              this.dispatch({ type: "TWO_FACTOR_CHANGE_EMAIL" });
          }
          verifyTwoFactorReminder(e) {
            this.dispatch({ type: "TWO_FACTOR_VERIFICATION_PENDING" }),
              this.Di.fireAndForget("backend", "verifyTwoFactorReminder", {
                pin: e,
              });
          }
          startVoipCall(e, t) {
            this.Dp("startVoipCall") ||
              (this.dispatch({ type: "LOADING_CALL", peer: e, fromMe: !0 }),
              this.Di.fireAndForget("voip", "startVoipCall", {
                jid: e,
                uiContext: t,
              }));
          }
          acceptVoipCall() {
            this.Dp("acceptVoipCall") ||
              this.Di.fireAndForget("voip", "acceptVoipCall", {});
          }
          acceptVoipCallFromNotification(e) {
            if (!this.Dp("acceptVoipCallFromNotification") && null != e) {
              this.dispatch({ type: "LOADING_CALL", peer: e, fromMe: !1 });
              var t = this.Di;
              if (!(0, me.hasBackendWorkerStarted)() && !this.De) {
                var n = (0, o.maybeAttachVoipPortal)(t);
                if (n) {
                  this.De = n;
                  var r = new Q.a("wa-bridge");
                  r.postMessage("connect-page-to-sw"),
                    r.startMonitoring({
                      onTimeout: () => {
                        __LOG__(2)`Channel to the SW lost`,
                          this.dispatch({
                            type: "VOIP_SERVICE_BRIDGE_DISCONNECTED",
                          });
                      },
                    }),
                    n.setPort(r);
                } else
                  __LOG__(
                    2
                  )`acceptVoipCallFromNotification: Backend worker did not fully launch but managed to set handlers before handling notification`;
              }
              navigator.vibrate(0),
                t.fireAndForget("voip", "acceptVoipCall", {});
            }
          }
          rejectVoipCall() {
            this.Dp("rejectVoipCall") ||
              this.Di.fireAndForget("voip", "rejectVoipCall", {});
          }
          endVoipCall() {
            this.Dp("endVoipCall") ||
              this.Di.fireAndForget("voip", "endVoipCall", {});
          }
          muteVoipCall(e) {
            this.Dp("muteVoipCall") ||
              this.Di.fireAndForget("voip", "muteVoipCall", { shouldMute: e });
          }
          updateVoipCallDuration() {
            this.Dp("updateVoipCallDuration") ||
              this.Di.fireAndForget("voip", "updateVoipCallDuration", {});
          }
          closeCallLogs() {
            this.dispatch({ type: "CLOSE_CALL_LOGS" });
          }
          loadCallLogs() {
            var e = this.Dg.getCallLogGroups();
            if (null != e.groups && null != e.orderedGroupIds)
              return (
                this.dispatch({
                  type: "UPDATE_CALL_LOGS",
                  groups: e.groups,
                  orderedGroupIds: e.orderedGroupIds,
                  canBeSkipped: !1,
                }),
                void (0, L.a)()
              );
            var t = (0, me.makeBackendRequestId)();
            this.Dg.callLogsLoading(t),
              this.dispatch({ type: "OPEN_CALL_LOGS", requestId: t }),
              this.Di.sendAndReceive("backend", "loadCallLogs", {}).then(
                (e) => {
                  var n = P(e.logs),
                    r = n.groups,
                    a = n.orderedGroupIds;
                  this.Dg.updateCallLogGroups(r, a, t),
                    this.dispatch({
                      type: "UPDATE_CALL_LOGS",
                      requestId: t,
                      groups: r,
                      orderedGroupIds: a,
                      canBeSkipped: !1,
                    }),
                    (0, L.a)();
                }
              );
          }
          deleteCallLogs(e) {
            var t = this.Dn(E.e.deleteCallLogs(e)).then(() => null);
            this.spinUntilReady(t, 82, 846);
          }
          clearAllCallLogs() {
            var e = this.Dn(E.e.clearAllCallLogs()).then(() => null);
            this.spinUntilReady(e, 79, 846);
          }
          maybeCloseOrphanedCallScreen(e) {
            "swLost" === e &&
              this.Di.sendAndReceive(
                "voip",
                "voipConnectionAttempted",
                {}
              ).then((e) => {
                e &&
                  (__LOG__(
                    3
                  )`maybeCloseOrphanedCallScreen: Closing call screen due to lost connection to SW`,
                  this.dispatch({ type: "CLOSE_CALL_SCREEN" }));
              });
          }
          openTab(e) {
            var t = (0, g.a)(this.getStoreState());
            if (t && t.tab) {
              var n = t.tab.key;
              if (n !== e) {
                var r = Y.a[n].onClose,
                  a = Y.a[e].onOpen;
                switch ((r && r(this), a && a(this), e)) {
                  case "camera":
                    if (t.activityInProgress)
                      return void __LOG__(
                        3
                      )`Camera tab open: another activity in progress`;
                    (0, ue.j)(this, ["image/jpeg", "video/*"], !0).then((e) => {
                      e &&
                        this.openScreen("SEND_MEDIA", {
                          from: "cameraTab",
                          media:
                            "image/jpeg" === e.type
                              ? { type: "image", blob: e }
                              : { type: "video", file: e },
                          defaultCaption: "",
                          actionAfterSending: { type: "unknown" },
                        });
                    });
                    break;
                  case "calls":
                    this.dispatch({ type: "OPEN_TAB", tab: { key: "calls" } });
                    break;
                  case "status":
                    var s,
                      i,
                      o = this.getStatusCache();
                    (s =
                      null != o && o.isLoaded()
                        ? {
                            key: "status",
                            data:
                              null != (i = o.purgeExpired()) ? i : o.toStore(),
                          }
                        : { key: "status" }),
                      this.dispatch({ type: "OPEN_TAB", tab: s });
                    break;
                  default:
                    this.dispatch({ type: "OPEN_TAB", tab: { key: "chats" } });
                }
              } else __LOG__(2)`Tried to open already opened tab`;
            } else __LOG__(3)`Tried to openTab without a MainStore`;
          }
          statusTabOpened() {
            var e = (0, v.E)();
            q.F.update({ tabLastOpened: e }),
              this.dispatch({ type: "STATUS_TAB_OPENED", time: e }),
              this.Di.fireAndForget("backend", "statusTabOpened", {});
          }
          loadLastUnreadStatusMsg() {
            this.Di.fireAndForget("backend", "loadLastUnreadStatusMsg", {});
          }
          loadStatusPrivacySettings() {
            this.Di.fireAndForget("backend", "loadStatusPrivacySettings", {});
          }
          getCachedStatuses() {
            var e;
            return (
              (null == (e = this.getStatusCache())
                ? void 0
                : e.getStatuses()) || {}
            );
          }
          loadStatusData() {
            var e = this.getStatusCache();
            if (null == e)
              this.instantiateStatusCache(),
                this.Di.fireAndForget("backend", "loadStatusAuthors", {}),
                this.dispatch({ type: "START_LOADING_STATUS" });
            else if (e.isLoaded()) {
              var t = e.purgeExpired();
              this.dispatch({
                type: "UPDATE_STATUS_DATA",
                data: null != t ? t : e.toStore(),
              });
            }
          }
          Dt(e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n].unread.first;
              if (null != r && (t.push(r.id), t.length >= 10)) break;
            }
            this.loadStatuses(t);
          }
          saveStatusListScrollPosition(e) {
            this.dispatch({
              type: "UPDATE_STATUS_LIST_SCROLL",
              lastScrollPosition: e,
            });
          }
          loadStatuses(e) {
            var t = this.getStatusCache();
            return null == t
              ? (__LOG__(4)`Tried to load statusaes before having a cache`,
                Promise.reject("Status Cache not initialized"))
              : 0 === e.length
              ? Promise.resolve([])
              : (t.statusLoading(e),
                this.dispatch({ type: "STATUS_LOADING", statuses: e }),
                this.Di.sendAndReceive("backend", "loadStatuses", {
                  statusIds: e,
                }).then(
                  (e) => (
                    t.statusLoaded(e),
                    this.dispatch({ type: "STATUS_UPDATED", statuses: e }),
                    e.forEach((e) => {
                      this.Du(e);
                    }),
                    e
                  )
                ));
          }
          Du(e) {
            !e ||
              ("image" !== e.content.type &&
                "video" !== e.content.type &&
                "gif" !== e.content.type) ||
              "idle" !== e.content.mediaStatus.type ||
              this.downloadMedia(e.id, "status");
          }
          loadStatusWithAuthor(e) {
            return this.Di.sendAndReceive("backend", "loadStatusWithAuthor", {
              statusId: e,
            });
          }
          setStatusSettings(e) {
            this.Dm(E.e.setStatusSettings(e));
          }
          openSentStatusScreen() {
            var e = (0, me.makeBackendRequestId)();
            this.openScreen("STATUS_SENT_LIST", { requestId: e }),
              this.Di.sendAndReceive("backend", "loadSentStatusInfo", {
                requestId: e,
              }).then((t) => {
                var n = t.infos;
                this.dispatch({
                  type: "STATUS_SENT_INFO_LOADED",
                  requestId: e,
                  infos: n,
                });
              });
          }
          Dv(e) {
            e.isLoaded() &&
              this.dispatch({ type: "UPDATE_STATUS_DATA", data: e.toStore() });
          }
          statusAuthorMeUpdated(e) {
            var t = this.getStatusCache();
            null != t && (t.updateMeAuthor(e), this.Dv(t));
          }
          statusAuthorUpdated(e) {
            var t = this.getStatusCache();
            null != t
              ? (t.updateAuthor(e), this.Dv(t))
              : this.loadLastUnreadStatusMsg();
          }
          statusAuthorsCleared(e) {
            var t = this.getStatusCache();
            null != t
              ? (t.clearAuthors(e), this.Dv(t))
              : this.loadLastUnreadStatusMsg();
          }
          loadChatMediaMsgs(e) {
            var t = (0, me.makeBackendRequestId)();
            return (
              this.dispatch({ type: "LOAD_MEDIA_RANGE", requestId: t }),
              this.Di.sendAndReceive("backend", "loadChatMediaMsgs", e).then(
                (n) => {
                  var r = n.msgs;
                  return Promise.all(r.map(this.Ds)).then((n) => {
                    this.dispatch({
                      type: "LOADED_MEDIA_RANGE",
                      requestId: t,
                      msgs: n,
                      askedFor: e.limit,
                    });
                  });
                }
              ),
              t
            );
          }
          loadStorageSettingMediaMsgs(e) {
            var t = (0, me.makeBackendRequestId)();
            return (
              this.dispatch({ type: "LOAD_MEDIA_RANGE", requestId: t }),
              this.Di.sendAndReceive(
                "backend",
                "loadStorageSettingMediaMsgs",
                e
              ).then((n) => {
                var r = n.msgs;
                return Promise.all(r.map(this.Ds)).then((n) => {
                  this.dispatch({
                    type: "LOADED_MEDIA_RANGE",
                    requestId: t,
                    msgs: n,
                    askedFor: e.limit,
                  });
                });
              }),
              t
            );
          }
          knownViewportFromCache(e, t, n) {
            return this.Dg.knownViewport(e, t, n);
          }
          loadMsgRange(e, t, r) {
            var a,
              s = (0, me.makeBackendRequestId)(),
              i = r.chatId;
            return (
              (0, me.hasBackendWorkerStarted)()
                ? (a = this.Di.sendAndReceive("backend", "loadMsgRange", r))
                : (__LOG__(2)`loadMsgRange loading locally ${s}`,
                  (a = Promise.all([n.e(0), n.e(3), n.e(46)])
                    .then(n.bind(null, 553))
                    .then((e) => e.loadMsgRange(r))
                    .then((e) =>
                      (0, me.hasBackendWorkerStarted)()
                        ? (__LOG__(2)`loadMsgRange discarded result ${s}`,
                          this.Di.sendAndReceive("backend", "loadMsgRange", r))
                        : (__LOG__(2)`loadMsgRange loaded locally ${s}`, e)
                    ))),
              a.then((n) => {
                if (null == n) return null;
                var a = n.msgs,
                  o = n.containsOldest,
                  l = n.containsNewest,
                  c = !1,
                  u = !1;
                return (
                  a.forEach((t) => {
                    null != t.validUntil &&
                      t.validUntil < this.Dk &&
                      ((c = !0),
                      t.id === e &&
                        (__LOG__(2)`loadMsgRange: Anchor ${t.id} deleted`,
                        (u = !0)));
                  }),
                  c
                    ? (__LOG__(2)`loadMsgRange: Purging all expired messages`,
                      this.Di.sendAndReceive(
                        "backend",
                        "deleteAllExpiredMsgsForChat",
                        { chatId: i }
                      ).then((n) => {
                        this.Dr(n);
                        var a = e;
                        if (u) {
                          var i = n.msgInfo,
                            o = i.newest;
                          if (!(a = i.oldestUnread || o))
                            return (
                              __LOG__(
                                4
                              )`loadMsgRange: Empty chat after purging expired messages`,
                              void SEND_LOGS("empty-chat-after-expired-purge")
                            );
                        }
                        var l = this.loadMsgRange(
                          a,
                          t,
                          Object.assign({}, r, { anchor: a })
                        );
                        "beginning" !== a &&
                          this.dispatch({
                            type: "UPDATE_CHAT_ANCHOR",
                            chatId: n.id,
                            anchor: a,
                            oldRequestId: s,
                            newRequestId: l,
                          });
                      }),
                      null)
                    : Promise.all(a.map(this.Ds)).then((n) => {
                        this.Dg.msgRangeLoaded(i, e, n, r.range, o, l);
                        var a = this.knownViewportFromCache(i, e, t);
                        this.dispatch({
                          type: "LOADED_MSG_RANGE",
                          requestId: s,
                          chatId: i,
                          anchor: e,
                          loaded: a,
                        });
                      })
                );
              }),
              s
            );
          }
          unlinkViewOnceMsgsMedia(e) {
            0 !== e.length &&
              this.Di.fireAndForget("backend", "unlinkViewOnceMsgsMedia", {
                msgIds: e,
              });
          }
          quickReplyToHsm(e, t) {
            var n = this.Dg.pressHsmButtonByButtonIndex(e, t);
            n && this.dispatch(n), this.Dm(E.e.quickReplyToHsm(e, t));
          }
          Dw(e) {
            var t = e.chat,
              n = e.msgIds,
              r = e.reason;
            this.Dg.deleteMsgs(t, n, r),
              this.dispatch({
                type: "MSGS_DELETED",
                chat: t,
                msgIds: n,
                reason: r,
              });
            var a = (0, g.a)(this.getStoreState());
            a &&
              a.msglist &&
              a.msglist.chat.id === t.id &&
              0 === a.msglist.viewport.msgIds.length &&
              a.msglist.chat.msgInfo.msgCount > 0 &&
              (__LOG__(
                2
              )`msgsDeleted: All msgs in viewport deleted. Loading more.`,
              S.a(this, a.msglist, "older", 10)),
              (function (e, t, n) {
                (0, k.b)(t.id).then((e) => {
                  e.forEach((e) => {
                    var r = e.data,
                      a = r.msgId,
                      s = r.count;
                    if (1 === s && n.includes(a)) e.close();
                    else if (s > 1 && s !== t.msgInfo.unreadMsgCount) return;
                  });
                });
                var r = (0, g.a)(e.getStoreState());
                r && (0, he.b)(t, n, r.contacts, r.settings);
              })(this, t, n);
          }
          buildApi(e) {
            e.setHandlers("page", {
              getContactsFromPhoneBook: y.b,
              getPushEndpoint: C.a,
              getContactDatabaseRevision: () =>
                (0, y.a)().then((e) => ({ revision: e })),
              generalSettings: (e) => {
                var t = e.settings;
                this.dispatch({ type: "GENERAL_SETTINGS", settings: t });
              },
              getTotalSpace: (e) => {
                var t = e.area;
                return Promise.all([(0, M.k)(t), (0, M.m)(t)]).then((e) => {
                  var t = c()(e, 2);
                  return { result: t[0] + t[1] };
                });
              },
              reload: () => {
                self.location.reload();
              },
              extractFrame: (e) => {
                var t = e.msgId,
                  r = e.videoRef,
                  a = e.rotation;
                return this.loadMsgContentBlob(t, r).then((e) =>
                  null == e
                    ? { result: null }
                    : n
                        .e(11)
                        .then(n.bind(null, 475))
                        .then((t) =>
                          t
                            .extractFrame(e, a)
                            .then((e) => ({ result: e }))
                            .catch(() => ({ error: { reason: "error" } }))
                        )
                );
              },
              getNetworkInfo: () => ({
                isWifiConnected: (0, N.i)(),
                isRoaming: (0, N.h)(),
              }),
              createTemporaryFile: () => (0, M.c)().then((e) => ({ path: e })),
              appendBlobToFile: (e) => {
                var t = e.blob,
                  n = e.path;
                return (0, M.a)(t, n);
              },
              craftMediaFilesystemPath: (e) => {
                var t = e.path;
                return { path: (0, M.b)(t) };
              },
              deletePath: (e) => {
                var t = e.path;
                return (0, M.d)(t);
              },
              putBlobToPhoneStorage: (e) => {
                var t = e.path,
                  n = e.blob;
                return (0, M.k)("sdcard").then((e) =>
                  e <= 1.01 * n.size
                    ? { result: "not-enough-space" }
                    : (0, M.n)(t, n).then((e) =>
                        e
                          ? { result: "ok", path: e }
                          : { result: "storage-gone" }
                      )
                );
              },
              getBlobFromPhoneStorage: (e) => {
                var t = e.path;
                return (0, M.i)(t).then((e) => ({ blob: e }));
              },
              getFreeSpace: (e) => {
                var t = e.area;
                return (0, M.k)(t).then((e) => ({ freeSpace: e }));
              },
              getDominantColors: (e) => {
                var t = e.msg,
                  r = e.quote;
                return n
                  .e(11)
                  .then(n.bind(null, 475))
                  .then((e) =>
                    Promise.all([
                      t ? e.extractDominantColorFromBlob(t) : null,
                      r ? e.extractDominantColorFromBlob(r) : null,
                    ])
                  )
                  .then((e) => {
                    var t = c()(e, 2);
                    return { msg: t[0], quote: t[1] };
                  });
              },
              computeMicroThumb: (e) => {
                var t = e.fullThumb;
                return n
                  .e(11)
                  .then(n.bind(null, 475))
                  .then((e) => e.computeMicroThumb(t));
              },
              pullInMemoryLogs: () => ({ logs: (0, a.getInMemoryLogs)() }),
              enableLoggingToTable: a.enableLoggingToTable,
            }),
              e.setHandlers("regPage", {
                initPushEndpoint: () => {
                  (0, C.a)();
                },
                updateReg: (e) => {
                  var t = e.newStore;
                  this.dispatch({ type: "UPDATE_REGISTRATION", newStore: t });
                },
                startSmsListener: () =>
                  Promise.all([n.e(7), n.e(28)])
                    .then(n.bind(null, 554))
                    .then((t) => {
                      t.onRegistrationSms((t) => {
                        e.fireAndForget("registration", "smsCodeDetected", {
                          code: t,
                        });
                      });
                    }),
                stopSmsListener: () =>
                  Promise.all([n.e(7), n.e(28)])
                    .then(n.bind(null, 554))
                    .then((e) => {
                      e.stopSmsPoller();
                    }),
                regEnded: (e) => {
                  var t = e.appInfo;
                  q.r.dangerouslySetInternal(t.user.jid),
                    q.e.set("pending"),
                    this.Dg.updateFromAppInfo(t);
                  var n = this.Dg.buildMainStore(t, !1);
                  this.dispatch({ type: "BACKEND_INITIALIZED", newStore: n }),
                    (0, T.c)("frontend", "regular", () => {
                      this.sendMetrics();
                    }),
                    (0, T.c)("frontend", "private", () => {
                      this.sendAnonymousMetrics();
                    }),
                    (0, i.b)(),
                    (0, ee.d)(this);
                },
              }),
              e.setHandlers(
                "event",
                Object.assign(
                  {
                    finishedBooting: () => {
                      (0, X.e)(this),
                        (0, I.k)((e) => {
                          this.Di.fireAndForget(
                            "backend",
                            "sendPresenceStatus",
                            { type: e }
                          );
                        });
                      var e = this.De;
                      e &&
                        ((0, o.killVoipPortalAndSendPendingToBridge)(e),
                        (this.De = null));
                    },
                    msgBgUpdated: (e) => {
                      var t = e.msg;
                      this.Dg.updateMsg(t) &&
                        this.dispatch({ type: "MSG_UPDATED", msg: t });
                    },
                    msgsReceived: (e) => {
                      var t = e.newMsgs,
                        n = e.changedMsgs,
                        r = e.affectedChats,
                        a = {
                          type: "RECEIVED_MSGS",
                          newMsgs: t,
                          changedMsgs: n,
                          affectedChats: r,
                        };
                      this.Dg.handleMsgsReceived(a);
                      for (var s = 0; s < t.length; ++s) {
                        var i = t[s],
                          o = i.meta;
                        if (!o.fromMe && o.author) {
                          var l = this.Dg.chatFromId(i.chatId);
                          l && (0, I.a)(this, l.jid, o.author, "paused");
                        }
                      }
                      (function (e, t, n, r) {
                        var a = (0, g.a)(e.getStoreState()),
                          s = (0, I.i)();
                        if (a && (!(0, g.e)(a) || !s)) {
                          var i = a.screens,
                            o = a.msglist,
                            l = a.contacts,
                            c = o && 0 === i.length && s ? o.chat.id : void 0;
                          (0, k.a)({
                            affectedChats: t,
                            newMsgs: n,
                            changedMsgs: r,
                            type: s ? "short" : "alert",
                            contacts: l,
                            settings: a.settings,
                            activeChatId: c,
                            user: a.user,
                            fireAndForget: e.fireAndForget,
                          });
                        }
                      })(this, r, t, n),
                        this.dispatch(a);
                      var c = (0, g.a)(this.getStoreState());
                      if (c) {
                        var u = new Map();
                        n.forEach((e) => {
                          var t = e.msg;
                          if ("revoked" === t.content.type) {
                            var n = u.get(t.chatId);
                            n ? n.push(t.id) : u.set(t.chatId, [t.id]);
                          }
                        }),
                          u.forEach((e, t) => {
                            var n = c.chatlist.chats[t];
                            (0, he.b)(n, e, c.contacts, c.settings);
                          });
                        var d =
                          c.screens.length > 0
                            ? c.screens[c.screens.length - 1]
                            : null;
                        if (d) {
                          var h = d.screen,
                            p = d.id;
                          if (
                            "SPINNER_SCREEN" === h.type &&
                            h.props.extra &&
                            "acceptGroupAddRequest" === h.props.extra.key
                          ) {
                            var f = h.props.extra.groupJid;
                            r.some((e) => e.jid === f) &&
                              ((0, ge.a)(this, f, "unread"), this.Dq(p));
                          }
                        }
                      }
                    },
                    gdprReportReadyReceived: () => {
                      (0, D.a)("short");
                    },
                    blockList: (e) => {
                      var t = e.blocked;
                      this.dispatch({ type: "BLOCK_LIST", blocked: t });
                    },
                    chatModified: (e) => {
                      var t = e.chat;
                      this.Dr(t);
                    },
                    chatAdded: (e) => {
                      var t = e.chat;
                      this.Dg.updateOrAddChat(t),
                        this.dispatch({
                          type: "CHAT_ADDED",
                          affectedChats: [t],
                        });
                    },
                    contactsModified: (e) => {
                      var t = e.changed,
                        n = e.deleted;
                      this.dispatch({
                        type: "MODIFIED_CONTACTS",
                        changed: t,
                        deleted: n,
                      }),
                        (0, I.d)(this, t, n);
                    },
                    msgAcked: (e) => {
                      var t = e.chat,
                        n = e.msg,
                        r = this.Dg.changeAck(t, n);
                      if (r) {
                        this.dispatch(r);
                        var a = (0, g.a)(this.getStoreState());
                        !0 ===
                          (null == a
                            ? void 0
                            : a.screens.some((e) => {
                                var t = e.screen;
                                return (
                                  "MSG_INFO" === t.type &&
                                  t.props.msg.id === n.id
                                );
                              })) && this.reloadMsgInfos(n.id);
                      }
                    },
                    mediaUpdated: (e) => {
                      var t = e.chatMsgs,
                        n = e.statusMsgs,
                        r = e.deleted,
                        a = this.Dg.mediaUpdated(t);
                      a && this.dispatch(a);
                      var s = this.getStatusCache();
                      null != s &&
                        n.length > 0 &&
                        (s.statusUpdated(n),
                        this.dispatch({
                          type: "STATUS_MSGS_UPDATED",
                          msgs: n,
                        })),
                        r &&
                          t
                            .filter((e) => "video" === e.content.type)
                            .forEach((e) => {
                              this.dispatch({
                                type: "STOP_MEDIA",
                                commonMsgId: e.id,
                              });
                            });
                    },
                    chatRead: (e) => {
                      var t = e.chatId,
                        n = e.oldestUnread,
                        r = e.unreadMsgCount,
                        a = this.Dg.markChatAsRead(t, n, r);
                      a && this.dispatch(a);
                    },
                    fullsizeAvatarLoaded: (e) => {
                      var t = e.jid,
                        n = e.avatar,
                        r = this.Dg.fullsizeAvatarLoaded(t, n);
                      this.dispatch(r);
                    },
                    avatarsUpdated: (e) => {
                      var t = e.changed,
                        n = e.cleared;
                      t &&
                        t.forEach((e) => {
                          var t = e.jid,
                            n = e.photoId,
                            r = this.Dg.fullsizeAvatar(t);
                          r &&
                            r.avatar &&
                            r.avatar.photoId !== n &&
                            this.Dg.clearFullsizeAvatar(t);
                        }),
                        this.dispatch({
                          type: "AVATARS_UPDATED",
                          changed: t || null,
                          cleared: n || null,
                        });
                    },
                    openChatWithGroup: (e) => {
                      var t = e.group;
                      (0, ge.a)(this, t, "unread");
                    },
                    receiveChatState: (e) => {
                      var t = e.jid,
                        n = e.participant,
                        r = e.status;
                      (0, I.a)(this, t, n, r);
                    },
                    clearUserLastSeen: (e) => {
                      var t = e.jid;
                      (0, I.b)(this, t);
                    },
                    receivePresence: (e) => {
                      var t = e.jid,
                        n = e.type,
                        r = e.last;
                      (0, I.f)(this, t, n, r);
                    },
                    commsConnected: () => {
                      this.dispatch({ type: "COMMS_CONNECTED" }),
                        (0, I.c)(this),
                        le() &&
                          (__LOG__(
                            2
                          )`Comms connected, clear timeout. Previous comms ${re}; onLine: ${navigator.onLine}`,
                          (re = !0),
                          clearTimeout($),
                          se());
                    },
                    commsDisconnected: () => {
                      this.dispatch({
                        type: "COMMS_DISCONNECTED",
                        online: !le() || navigator.onLine,
                      }),
                        (0, I.e)(),
                        le() &&
                          (__LOG__(
                            2
                          )`Comms disconnected. Previous comms: ${re}; onLine: ${navigator.onLine}`,
                          re && ((re = !1), oe()));
                    },
                    kicked: (e) => {
                      var t = e.reason;
                      this.dispatch({ type: "KICKED", reason: t });
                    },
                    clockSkewUpdated: (e) => {
                      var t = e.clockSkew;
                      (0, v.A)(t);
                    },
                    serverPropsUpdated: (e) => {
                      var t = e.serverProps;
                      this.dispatch({ type: "SERVER_PROPS", serverProps: t });
                    },
                    msgMediaStatusUpdated: (e) => {
                      var t = e.msgId,
                        n = e.mediaStatus;
                      this.updateMediaStatus(t, n);
                    },
                    msgsDeleted: (e) => {
                      var t = e.chat,
                        n = e.msgIds,
                        r = e.reason;
                      this.Dw({ chat: t, msgIds: n, reason: r });
                    },
                    msgsDeletedFromManyChats: (e) => {
                      e.chats.forEach((e) => {
                        var t = e.chat,
                          n = e.msgIds,
                          r = e.reason;
                        return this.Dw({ chat: t, msgIds: n, reason: r });
                      }),
                        this.dispatch({ type: "UPDATE_STORAGE_TS" });
                    },
                    chatDeleted: (e) => {
                      var t = e.chatId,
                        n = this.Dg.deleteChat(t);
                      n && this.dispatch(n), Ae(t);
                    },
                    profilePicReceived: (e) => {
                      var t = e.image;
                      return n
                        .e(11)
                        .then(n.bind(null, 475))
                        .then((e) =>
                          e
                            .scaleDownProfilePictureThumb(t)
                            .then((e) => ({ croppedImage: e }))
                        );
                    },
                    ranOutOfStorage: () => {
                      this.Dj || this.openScreen("OUT_OF_SPACE_RECOVERY"),
                        (this.Dj = !0);
                    },
                    voipSetupDone: (e) => {
                      var t = e.inOngoingCall;
                      (F = (e) => {
                        this.Di.fireAndForget(
                          "voip",
                          "updateCallNetworkMedium",
                          { type: e }
                        );
                      }),
                        (U = z()),
                        F(U),
                        K ||
                          ((K = !0),
                          (function () {
                            var e;
                            null == (e = navigator.mozWifiManager) ||
                              e.addEventListener("statuschange", H);
                            var t = navigator.mozMobileConnections;
                            if (null != t)
                              for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                null != r &&
                                  r.addEventListener("datachange", H);
                              }
                          })()),
                        this.De ||
                          this.dispatch({
                            type: "VOIP_SERVICE_SETUP_DONE",
                            inOngoingCall: t,
                          });
                    },
                    gdprReportUpdated: (e) => {
                      var t = e.gdprReport;
                      this.dispatch({
                        type: "GDPR_REPORT_UPDATED",
                        gdprReport: t,
                      });
                    },
                    gdprReportDownloaded: (e) => {
                      var t = e.result;
                      this.dispatch({
                        type: "GDPR_REPORT_DOWNLOADED",
                        result: t,
                      });
                    },
                    gdprReportDownloading: (e) => {
                      var t = e.percent;
                      this.dispatch({
                        type: "GDPR_REPORT_DOWNLOADING",
                        percent: t,
                      });
                    },
                    twoFactorReminderVerified: (e) => {
                      var t = e.success;
                      this.dispatch({
                        type: "TWO_FACTOR_VERIFICATION",
                        success: t,
                      });
                    },
                    callStateChanged: (e) => {
                      var t = e.state,
                        n = e.peerJid,
                        r = e.isCaller,
                        a = e.isLocallyMuted;
                      this.dispatch({
                        type: "CALL_STATE_CHANGED",
                        state: t,
                        peerJid: n,
                        isCaller: r,
                        isLocallyMuted: a,
                      });
                    },
                    callMuteStateChanged: (e) => {
                      var t = e.isMuted,
                        n = e.jid;
                      this.dispatch({
                        type: "CALL_MUTE_STATE_CHANGED",
                        isMuted: t,
                        jid: n,
                      });
                    },
                    callInterruptedStateChanged: (e) => {
                      var t = e.isInterrupted,
                        n = e.jid;
                      this.dispatch({
                        type: "CALL_INTERRUPTED_STATE_CHANGED",
                        isInterrupted: t,
                        jid: n,
                      });
                    },
                    callOfferNacked: (e) => {
                      var t = e.code,
                        n = e.jid;
                      this.dispatch({
                        type: "CALL_OFFER_NACKED",
                        code: t,
                        jid: n,
                      });
                    },
                    callDurationChanged: (e) => {
                      var t = e.duration;
                      this.dispatch({
                        type: "CALL_DURATION_CHANGED",
                        duration: t,
                      });
                    },
                    callEnded: () => {
                      this.dispatch({ type: "CALL_ENDED" });
                    },
                    callBusyReceived: () => {
                      this.dispatch({ type: "CALL_BUSY_RECEIVED" });
                    },
                    voipServiceDisconnected: () => {
                      this.dispatch({ type: "VOIP_SERVICE_DISCONNECTED" });
                    },
                    voipCallFailed: () => {
                      this.dispatch({ type: "CLOSE_CALL_SCREEN" }),
                        (0, u.e)({ title: 229, text: 228 });
                    },
                    groupInvitesRevoked: (e) => {
                      var t = {
                        type: "GROUP_INVITES_REVOKED",
                        groupJid: e.groupJid,
                        outgoing: e.outgoing,
                        revokes: e.revokes,
                      };
                      this.dispatch(t);
                    },
                    groupInviteCode: (e) => {
                      var t = e.groupJid,
                        n = e.code;
                      (0, A.b)(this, t, n);
                    },
                    groupInviteCodeReset: (e) => {
                      var t = e.groupJid;
                      (0, A.a)(this, t);
                    },
                    callLogsUpdated: (e) => {
                      var t = P(e.logs),
                        n = t.groups,
                        r = t.orderedGroupIds;
                      this.Dg.updateCallLogGroups(n, r),
                        this.dispatch({
                          type: "UPDATE_CALL_LOGS",
                          groups: n,
                          orderedGroupIds: r,
                          canBeSkipped: !0,
                        });
                    },
                    callMissed: (e) => {
                      var t = e.peerJid,
                        n = e.id,
                        r = (0, g.a)(this.getStoreState());
                      if (null != r) {
                        var a = r.contacts[t],
                          s = null != a ? a : { jid: t },
                          i = (0, I.i)() ? "short" : "alert";
                        (0, L.b)(s, n, i);
                      }
                    },
                    statusAuthorsLoaded: (e) => {
                      var t = e.authors,
                        n = e.me,
                        r = this.getStatusCache();
                      if (null == r)
                        return (
                          __LOG__(
                            4
                          )`Loaded status authors without a cache ready`,
                          void SEND_LOGS(
                            "backendInterface-statusAuthorsLoaded-noCache"
                          )
                        );
                      r.load(t, n),
                        this.dispatch({
                          type: "UPDATE_STATUS_DATA",
                          data: r.toStore(),
                        });
                      var a = (0, g.a)(this.getStoreState());
                      null != a && null != a.status && this.Dt(t);
                    },
                    statusAuthorMeUpdated: (e) => {
                      var t = e.author;
                      this.statusAuthorMeUpdated(t);
                    },
                    statusAuthorUpdated: (e) => {
                      var t = e.author;
                      this.statusAuthorUpdated(t);
                    },
                    statusAuthorsUpdated: (e) => {
                      e.authors.forEach((e) => {
                        this.statusAuthorUpdated(e);
                      });
                    },
                    statusAuthorsCleared: (e) => {
                      var t = e.authors;
                      this.statusAuthorsCleared(t);
                    },
                    statusSettingsUpdated: (e) => {
                      var t = e.settings;
                      this.dispatch({
                        type: "STATUS_SETTINGS_UPDATED",
                        settings: t,
                      });
                    },
                    statusLastUnreadMsgLoaded: (e) => {
                      var t = e.lastUnreadMsg;
                      this.dispatch({
                        type: "STATUS_LAST_UNREAD_MSG",
                        lastUnreadMsg: t,
                      });
                    },
                    statusMsgsUpdated: (e) => {
                      var t = e.msgs,
                        n = e.author;
                      n &&
                        ("@me" === n.jid
                          ? this.statusAuthorMeUpdated(n)
                          : this.statusAuthorUpdated(n));
                      var r = this.getStatusCache();
                      null != r &&
                        (r.statusUpdated(t),
                        this.dispatch({
                          type: "STATUS_MSGS_UPDATED",
                          msgs: t,
                        }));
                    },
                    statusMsgRemoved: (e) => {
                      var t = e.statusMsgId,
                        n = e.author;
                      null != n && this.statusAuthorMeUpdated(n),
                        this.dispatch({
                          type: "STATUS_MSG_REMOVED",
                          statusId: t,
                        });
                    },
                    statusReceiptsUpdated: (e) => {
                      var t = e.author,
                        n = e.receipts;
                      this.statusAuthorMeUpdated(t),
                        this.dispatch({
                          type: "STATUS_RECEIPTS_UPDATED",
                          receipts: n,
                        });
                    },
                    aboutUpdated: (e) => {
                      var t = e.about;
                      this.dispatch({ type: "ABOUT_UPDATED", content: t });
                    },
                    identityVerificationChanged: (e) => {
                      var t = e.jid;
                      this.dispatch({
                        type: "IDENTITY_VERIFICATION_CHANGED",
                        jid: t,
                      });
                    },
                    voipStatusChanged: (e) => {
                      var t = e.hasVoip,
                        n = e.voipCallEnabled;
                      this.dispatch({
                        type: "VOIP_AVAILABILITY_CHANGED",
                        available: t && n,
                      });
                    },
                    hsmButtonPressed: (e) => {
                      var t = e.msg;
                      this.Dg.updateMsg(t);
                      var n = { type: "HSM_BUTTON_PRESSED", msg: t };
                      this.dispatch(n);
                    },
                    uiEphemeralTimestamp(e) {
                      var t = e.validUntil;
                      (0, ee.a)(t);
                    },
                    refreshRecentGifs: () => {
                      this.dispatch({ type: "GIF_RECENT_REFRESH" });
                    },
                    addFavoriteGifs: (e) => {
                      var t = e.gifs;
                      this.dispatch({ type: "GIF_FAVORITE_ADDED", gifs: t });
                    },
                    removeFavoriteGif: (e) => {
                      var t = e.plaintextHash;
                      this.dispatch({
                        type: "GIF_FAVORITE_REMOVED",
                        plaintextHash: t,
                      });
                    },
                    viewOnceExpired: (e) => {
                      var t,
                        n = e.expiredMsgs,
                        r = e.updatedChats,
                        a = (0, g.a)(this.getStoreState()),
                        s =
                          null == a || null == (t = a.msglist)
                            ? void 0
                            : t.chat.id;
                      r.forEach((e) => this.Dg.updateOrAddChat(e));
                      var i = this.Dg.handleExpiredViewOnceMsgs(n, s);
                      this.unlinkViewOnceMsgsMedia(i.map((e) => e.id)),
                        this.dispatch({
                          type: "RECEIVED_MSGS",
                          newMsgs: [],
                          changedMsgs: i.map((e) => ({ msg: e, recent: !1 })),
                          affectedChats: r,
                        });
                    },
                    syncAbCacheFromStorage: () => (0, ce.e)(),
                    pinAbProp: (e) => {
                      var t = e.key,
                        n = e.val;
                      (0, ce.d)(t, n);
                    },
                    tosGatingStatusChanged: (e) => {
                      var t = e.tosAccepted;
                      this.dispatch({
                        type: "TOS_GATING_CHANGED",
                        tosAccepted: t,
                      });
                    },
                  },
                  (0, de.a)(this),
                  (0, pe.a)(this),
                  {
                    companionsLoaded: (e) => {
                      var t = e.companions;
                      this.dispatch({
                        type: "COMPANIONS_LOADED",
                        companions: t,
                      });
                      var n = (0, g.a)(this.getStoreState());
                      if (n) {
                        var r = n.screens[n.screens.length - 1];
                        r &&
                          "ADD_COMPANION_DEVICE" === r.screen.type &&
                          this.Dq(r.id);
                      }
                    },
                    companionRegistrationFailed: (e) => {
                      var t = e.error,
                        n = (0, g.a)(this.getStoreState());
                      if (n) {
                        var r = n.screens[n.screens.length - 1];
                        r &&
                          "ADD_COMPANION_DEVICE" === r.screen.type &&
                          (this.Dq(r.id),
                          (0, u.e)({ title: 229, text: t ? 140 : 228 }));
                      }
                    },
                    trustedContactTokenUpdatedForJid: (e) => {
                      var t = e.jid;
                      (0, I.g)(this, t);
                    },
                  }
                )
              );
          }
          saveImageToStorage(e) {
            var t = (0, G.k)((0, J.g)("image/jpeg"));
            this.spinUntilReady(
              (0, V.g)((0, V.h)(e))
                .then((e) => (0, M.o)(e, t))
                .then(() => () => (0, d.a)(385))
                .catch(() => () => {
                  (0, u.e)({ title: 384, text: 383 });
                }),
              386
            );
          }
          isStarredIndexMissing() {
            var e = (0, g.a)(this.getStoreState());
            return !!e && !!e.starredIndexMissing;
          }
          getExpiredMessages() {
            return this.Di.sendAndReceive("backend", "getExpiredMessages", {});
          }
          deleteExpiredMsgs(e, t) {
            return this.Di.sendAndReceive("backend", "deleteExpiredMsgs", {
              chatId: e,
              msgIds: t,
            });
          }
          getNextExpirationTimestamp() {
            return this.Di.sendAndReceive(
              "backend",
              "getNextExpirationTimestamp",
              {}
            );
          }
        };
      function ye(e) {
        return null == e
          ? { quoted: void 0, remoteJid: void 0 }
          : null != e && "reply" === e.type
          ? {
              quoted: {
                msgId: e.quotedMsg.id,
                remoteJid: e.quotedMsg.remoteJid,
              },
              remoteJid: void 0,
            }
          : (e.type, { quoted: void 0, remoteJid: e.groupJid });
      }
      function Ie(e) {
        var t = (0, g.a)(e.getStoreState());
        return null != t && !t.connected;
      }
      function Oe(e, t) {
        return !!Ie(e) && ((0, u.e)({ title: 229, text: t }), !0);
      }
      function Ae(e) {
        (0, k.b)(e)
          .then((e) => e.forEach((e) => e.close()))
          .catch((e) => {
            __LOG__(4)`_deleteChatNotifications sw error: ${e}`;
          }),
          (0, he.a)(e);
      }
      function Ce(e, t) {
        switch (t.type) {
          case "CHAT_MODIFIED":
          case "DID_READ_CHAT":
          case "MSGS_DELETED":
          case "MSG_ACK":
            return e.id !== t.chat.id ? e : t.chat;
          case "MEDIA_UPDATED":
          case "CHAT_ADDED":
          case "RECEIVED_MSGS":
            for (var n = t.affectedChats, r = -1, a = 0; a < n.length; a++)
              n[a].id === e.id && (r = a);
            return -1 === r ? e : n[r];
          default:
            return e;
        }
      }
      function ke(e, t) {
        switch (t.type) {
          case "MEDIA_UPDATED":
            return t.msgs.find((t) => t.id === e.id) || e;
          case "MSG_ACK":
            return null == t.ackedMsg || e.id !== t.ackedMsg.id
              ? e
              : t.ackedMsg;
          case "MSGS_DELETED":
            return t.msgIds.includes(e.id) ? null : e;
          case "RECEIVED_MSGS":
            var n = t.changedMsgs.find((t) => t.msg.id === e.id);
            return null != n ? n.msg : e;
          case "MSG_UPDATED":
          case "HSM_BUTTON_PRESSED":
            return t.msg.id === e.id ? t.msg : e;
          default:
            return e;
        }
      }
      var we = n(181);
      function De(e, t) {
        return e
          ? e.older === t && e.newer === t
            ? null
            : e.older === t
            ? e.newer
              ? { newer: e.newer }
              : null
            : e.newer === t
            ? e.older
              ? { older: e.older }
              : null
            : e
          : null;
      }
      var Le = { type: "filler", key: "filler", grouping: 0, msg: void 0 },
        Te = {
          type: "loading",
          subtype: "top",
          key: "loadingTop",
          grouping: 0,
          msg: void 0,
        },
        Ne = {
          type: "loading",
          subtype: "center",
          key: "loadingCenter",
          grouping: 0,
          msg: void 0,
        },
        Me = {
          type: "loading",
          subtype: "bottom",
          key: "loadingBottom",
          grouping: 0,
          msg: void 0,
        },
        Ge = { type: "composeBox", key: p.f, grouping: 0, msg: void 0 },
        Re = { type: "report", key: "report", grouping: 0, msg: void 0 },
        je = {
          type: "addContact",
          key: "addContact",
          grouping: 0,
          msg: void 0,
        },
        xe = {
          type: "groupPrivacy",
          key: "groupPrivacy",
          grouping: 0,
          msg: void 0,
        };
      function Pe(e) {
        var t = [];
        return (
          "ONE_TO_ONE" === e.type
            ? (t.push(je), e.notStarted || t.push(Re))
            : (t.push(Re), t.push(xe)),
          t
        );
      }
      function Ue(e, t) {
        var n,
          r = e.chat.msgInfo;
        e.selectAnchor &&
          "beginning" !== e.anchor &&
          (n = { key: e.anchor, msgId: e.anchor });
        var a = {
          chat: e.chat,
          anchor: e.anchor,
          loading: e.loading,
          viewport: {
            desiredRange: e.desiredRange,
            loadedRange: { start: 0, end: 0 },
            msgIds: [],
          },
          items: [],
          msgs: {},
          selectedItem: n,
          opening: !0,
        };
        return (
          e.withComposeBoxOpened && (a.withComposeBoxOpened = !0),
          0 === r.msgCount &&
            ((a.anchor = "beginning"),
            (a.newestIndex = 0),
            (a.oldestIndex = -1)),
          r.oldestUnread &&
            (a.unreadBar = { msgId: r.oldestUnread, count: r.unreadMsgCount }),
          e.preloaded ? Be(a, a.loading, e.preloaded, t) : (Je(a, t), a)
        );
      }
      function Fe(e, t, n) {
        var r,
          a,
          s,
          i,
          o = Object.assign({}, e, {
            loading:
              ((r = e.loading),
              (a = t.loading),
              (s =
                (null == a ? void 0 : a.older) ||
                (null == r ? void 0 : r.older)),
              (i =
                (null == a ? void 0 : a.newer) ||
                (null == r ? void 0 : r.newer)),
              s && i
                ? { older: s, newer: i }
                : s
                ? { older: s }
                : i
                ? { newer: i }
                : null),
            viewport: Object.assign({}, e.viewport, {
              desiredRange: t.desiredRange,
            }),
          });
        return t.preloaded ? Be(o, o.loading, t.preloaded, n) : (Je(o, n), o);
      }
      function Be(e, t, n, r) {
        var a,
          s,
          i,
          o,
          l,
          c = e.viewport,
          u = c.desiredRange,
          d = c.loadedRange,
          h = d.start,
          p = d.end,
          f = c.msgIds,
          g = e.msgs,
          v = n.newestIndex,
          m = void 0 === v ? e.newestIndex : v,
          b = n.oldestIndex,
          _ = void 0 === b ? e.oldestIndex : b,
          S = n.range,
          E = S.start,
          y = S.end,
          I = n.msgs,
          O = n.unreadBar,
          A = void 0 === O ? e.unreadBar : O;
        if (E > p || y < h) (l = !1), (i = h), (o = p), (a = f), (s = g);
        else {
          (l = !0),
            (a = []),
            (s = {}),
            (i = Math.max(u.start, Math.min(E, h))),
            (o = Math.min(u.end, Math.max(y, p)));
          for (var C = i; C < o; C++)
            if (E <= C && C < y) {
              var k = I[C - E];
              a.push(k.id), (s[k.id] = k);
            } else {
              var w = f[C - h];
              a.push(w), (s[w] = g[w]);
            }
        }
        var D = {
          chat: e.chat,
          anchor: e.anchor,
          loading: t,
          unreadBar: A && A.count > 0 ? A : void 0,
          newestIndex: m,
          oldestIndex: _,
          viewport: {
            desiredRange: u,
            loadedRange: { start: i, end: o },
            msgIds: a,
          },
          msgs: s,
          items: e.items,
          selectedItem: e.selectedItem,
        };
        return (
          e.withComposeBoxOpened && (D.withComposeBoxOpened = !0),
          e.opening && (D.opening = !0),
          l && Je(D, r),
          D
        );
      }
      function Ve(e, t, n) {
        for (var r = e.msgs, a = null, s = 0; s < t.length; s++) {
          var i = t[s];
          r.hasOwnProperty(i.id) && (a || (a = (0, b.u)(r)), (a[i.id] = i));
        }
        if (!a) return e;
        var o = (0, b.j)(e, { msgs: a });
        return Je(o, n), o;
      }
      function Je(e, t) {
        var n = e.msgs,
          r = e.viewport,
          a = e.unreadBar,
          s = e.loading,
          i = e.chat,
          o = r.msgIds,
          l = (0, B.c)(e.chat, t.user.jid, t.contacts);
        if (0 !== i.msgInfo.msgCount) {
          if (0 === o.length)
            return (
              s ||
                __LOG__(3)`mutateInMsgListItems no known msgs yet not loading`,
              void (e.items = [Ne])
            );
          var c = "GROUP" === i.type ? f.h.SHOW_AUTHOR : 0,
            u = o.length - 1,
            d = n[o[u]],
            h = d.ts,
            p = !0,
            g = [],
            m = null,
            b = 0,
            _ = 0,
            S = (e) => {
              (m = null), (b = 0), _++, g.push(e);
            },
            E = (e) => {
              if (!l || "linkPreview" !== e.type) {
                var t = 1;
                "image" === e.type ||
                "vcard" === e.type ||
                null != e.msg.forwarded
                  ? (t = 3)
                  : "text" === e.type &&
                    (t = Math.ceil(e.content.length / 100)),
                  m
                    ? m.msg === e.msg
                      ? ((b += t),
                        (m.grouping |= f.h.JOINED_WITH_NEXT),
                        (e.grouping = f.h.JOINED_WITH_PREV))
                      : m.msg.meta.author === e.msg.meta.author
                      ? ((b += t) > 3 && ((e.grouping |= c), (b = t)),
                        (m.grouping |= f.h.GROUPED_WITH_NEXT),
                        (e.grouping |= f.h.GROUPED_WITH_PREV))
                      : ((b = t), (e.grouping = c))
                    : ((b = t), (e.grouping = c)),
                  (_ += t),
                  (m = e),
                  g.push(e);
              }
            };
          for (
            s && s.older && S(Te),
              void 0 !== e.oldestIndex &&
                e.oldestIndex < r.loadedRange.end &&
                (h <= (0, v.s)() &&
                  S({
                    type: "datetime",
                    key: "datetop",
                    grouping: 0,
                    msg: void 0,
                    time: h,
                  }),
                (p = !1));
            d;

          )
            if (
              (p &&
                S({
                  type: "datetime",
                  key: "date-" + d.id,
                  grouping: 0,
                  msg: void 0,
                  time: h,
                }),
              a &&
                a.msgId === d.id &&
                S({
                  type: "unreadBar",
                  key: "unreadBar",
                  grouping: 0,
                  msg: void 0,
                  count: a.count,
                }),
              (0, we.e)(d, c, S, E),
              u > 0)
            ) {
              do {
                d = n[o[--u]];
              } while (u > 0 && !d);
              d && ((p = !(0, v.y)(h, d.ts)), (h = d.ts));
            } else d = null;
          s && s.newer && S(Me),
            void 0 !== e.newestIndex &&
              e.newestIndex >= r.loadedRange.start &&
              (l && Pe(i).forEach((e) => S(e)), _ < 10 && S(Le), S(Ge)),
            (e.items = g);
        } else e.items = l ? [...Pe(i), Le, Ge] : [Le, Ge];
      }
      function ze(e, t, n, r) {
        var a,
          s = e.msgs,
          i = e.msgs[n],
          o = i && ke(i, t);
        if (
          (o === i ? (a = s) : ((a = (0, b.u)(s)), o && (a[o.id] = o)), s === a)
        )
          return r;
        var l = (0, b.j)(e, { msgs: a });
        return Je(l, r), Object.assign({}, r, { msglist: l });
      }
      function He(e, t) {
        return t < 0
          ? { start: e.start + 1, end: e.end }
          : { start: e.start, end: e.end - 1 };
      }
      var $e = n(183);
      function We(e, t) {
        return e[t] || 0;
      }
      function Ke(e, t) {
        return (
          Math.round((1e4 * We(e.currentTimes, t.commonMsgId)) / t.duration) /
          100
        );
      }
      function Ye(e, t) {
        if (null != e[t]) {
          var n = Object.assign({}, e);
          return delete n[t], n;
        }
        return e;
      }
      var qe = n(232),
        Xe = "CLOSE_SCREEN";
      function Qe(e, t, n, r) {
        var a, s, i, o;
        if ("KICKED" === r.type) return Xe;
        if ("CLOSE_SCREEN" === r.type && n === r.id)
          return r.closeScreensAbove ? "CLOSE_ALL_SCREENS_ABOVE" : Xe;
        if ("UPDATE_SCREEN" === r.type && n === r.id) return r.screen;
        if ("CHAT_DELETED" === r.type && (0, f.G)(e, t, r.chatId)) return Xe;
        switch (t.type) {
          case "MSG_INFO":
            var l = t;
            "LOADED_MSG_INFO" === r.type && r.msgId === t.props.msg.id
              ? (l = Ze(t, { msgInfo: r.msgInfo }))
              : "LOADED_MSG_REACTIONS" === r.type &&
                r.msgId === t.props.msg.id &&
                (l = Ze(t, { msgReactions: r.msgReactions }));
            var c = ke(l.props.msg, r);
            return c === l.props.msg ? l : c ? Ze(l, { msg: c }) : Xe;
          case "CONTACT_INFO":
            if (!t.props.chat) return t;
            if ("CHAT_DELETED" === r.type && r.chatId === t.props.chat.id)
              return Ze(t, { chat: null });
            var u = Ce(t.props.chat, r);
            return u === t.props.chat || "ONE_TO_ONE" !== u.type
              ? t
              : Ze(t, { chat: u });
          case "GROUP_INFO_CHANGE_SUBJECT":
          case "GROUP_INFO_CHANGE_DESCRIPTION":
          case "GROUP_INFO_PARTICIPANTS":
          case "GROUP_INFO_INVITATIONS":
          case "GROUP_INFO":
            var d = Ce(t.props.chat, r);
            return d === t.props.chat || "GROUP" !== d.type
              ? t
              : Ze(t, { chat: d });
          case "GROUP_SETTINGS":
          case "GROUP_SETTINGS_EDIT_INFO":
            var h = Ce(t.props.chat, r);
            return h === t.props.chat
              ? t
              : "GROUP" === h.type && h.groupInfo.isAdmin
              ? Ze(t, { chat: h })
              : Xe;
          case "GROUP_INVITE_LINK":
            var p = Ce(t.props.chat, r);
            if ("GROUP" !== p.type) return Xe;
            if (p !== t.props.chat && !p.groupInfo.isAdmin) return Xe;
            switch (r.type) {
              case "GROUP_INVITE_CODE_CHANGED":
                return r.groupJid !== p.jid ? t : Ze(t, { inviteCode: r.code });
              case "GROUP_INVITE_CODE_RESET":
                return r.groupJid !== p.jid ? t : Xe;
              default:
                return t;
            }
          case "MSG_IMAGE_VIEW":
            switch (r.type) {
              case "MEDIA_UPDATED":
                var g = r.msgs.find((e) => e.id === t.props.msgId);
                if (
                  g &&
                  g.content.mediaStatus &&
                  "ready" !== g.content.mediaStatus.type
                )
                  return Xe;
                break;
              case "MSGS_DELETED":
                if (r.msgIds.includes(t.props.msgId)) return Xe;
                break;
              case "RECEIVED_MSGS":
                var m = r.changedMsgs.find((e) => e.msg.id === t.props.msgId);
                if (m && "revoked" === m.msg.content.type) return Xe;
            }
            return t;
          case "AVATAR_IMAGE_VIEW":
            if ("FULLSIZE_AVATAR_LOADED" === r.type && r.jid === t.props.jid)
              return Ze(t, {
                avatarStatus: { status: "loaded", avatar: r.avatar },
              });
            if (
              "FULLSIZE_AVATAR_STARTED_LOADING" === r.type &&
              r.jid === t.props.jid
            )
              return Ze(t, { avatarStatus: { status: "loading" } });
            if ("AVATARS_UPDATED" === r.type && r.changed) {
              var _ = t.props.jid,
                S = t.props.avatarStatus,
                E = r.changed.find((e) => {
                  var t = e.jid;
                  return _ === t;
                });
              if (E && S) {
                if (null == E.photoId)
                  return Ze(t, {
                    avatarStatus: { status: "loaded", avatar: null },
                  });
                if (S.avatar && S.avatar.photoId !== E.photoId)
                  return Ze(t, { avatarStatus: null });
              }
            }
            return t;
          case "FEATURED_MESSAGES":
            switch (r.type) {
              case "LOAD_FEATURED_MESSAGES":
                return r.requestId !==
                  (null == (a = t.props.loading) ? void 0 : a.older)
                  ? Ze(t, { loading: { older: r.requestId } })
                  : t;
              case "LOADED_FEATURED_MESSAGES":
                var y,
                  I = De(t.props.loading, r.requestId);
                if (I === t.props.loading) return t;
                var O = {};
                if (
                  ((O.loading = I),
                  (null == I ? void 0 : I.older) !==
                    (null == (y = t.props.loading) ? void 0 : y.older))
                ) {
                  var A =
                    ((i = r.msgs),
                    (o = []),
                    i.forEach((e) => {
                      var t = nt(e);
                      Array.prototype.push.apply(o, t);
                    }),
                    o);
                  (O.items = t.props.items.concat(A)),
                    r.msgs.length < r.askedFor && (O.allLoaded = !0);
                }
                return Ze(t, O);
              case "RECEIVED_MSGS":
                var C = [],
                  k = r.changedMsgs,
                  w = {};
                k.forEach((e) => {
                  w[e.msg.id] = e.msg;
                });
                var D = !1;
                return (
                  t.props.items.forEach((e) => {
                    var t = w[e.msg.id];
                    if (t) {
                      if (
                        ((D = !0), "revoked" !== t.content.type && t.starred)
                      ) {
                        var n = nt(t);
                        C.push(...n);
                      }
                    } else C.push(e);
                  }),
                  D ? Ze(t, { items: C }) : t
                );
              case "MSGS_DELETED":
                if (null != t.props.chat && t.props.chat.id !== r.chat.id)
                  return t;
                var L = new Set(r.msgIds),
                  T = t.props.items.filter((e) => !L.has(e.msg.id));
                return T.length !== t.props.items.length
                  ? Ze(t, { items: T })
                  : t;
              case "MEDIA_UPDATED":
                var N,
                  M = null == (N = t.props.chat) ? void 0 : N.id;
                if (null != M && !r.affectedChats.some((e) => e.id === M))
                  return t;
                var G,
                  R = t.props.items,
                  j = !1,
                  x = (0, b.s)(r.msgs, (e) => e.id),
                  P = [];
                return (
                  R.forEach((e) => {
                    var t = e.msg.id,
                      n = x[t];
                    if (null != n) {
                      if (t !== G) {
                        j = !0;
                        var r = nt(n);
                        Array.prototype.push.apply(P, r), (G = t);
                      }
                    } else P.push(e);
                  }),
                  j ? Ze(t, { items: P }) : t
                );
              case "MSG_ACK":
                var U,
                  F = r.ackedMsg,
                  B = null == (U = t.props.chat) ? void 0 : U.id;
                if ((void 0 !== B && B !== r.chat.id) || null == F) return t;
                var V = [];
                return (
                  t.props.items.forEach((e) => {
                    e.msg.id === F.id ? V.push(...nt(F)) : V.push(e);
                  }),
                  Ze(t, { items: V })
                );
              default:
                return t;
            }
          case "GALLERY_MEDIA":
          case "GALLERY_MEDIA_FOR_STORAGE_SETTING":
            switch (r.type) {
              case "LOAD_MEDIA_RANGE":
                return Ze(t, { loading: !0 });
              case "GALLERY_SYNC":
                var J = r.selectIndex,
                  z = r.medias;
                return null != z
                  ? 0 === z.length || J > z.length
                    ? (__LOG__(
                        3
                      )`Media list empty or select index of out bounds`,
                      Xe)
                    : Ze(t, { selectIndex: J, medias: z, loading: !1 })
                  : Ze(t, { selectIndex: J, loading: !1 });
              case "RECEIVED_MSGS":
                var H = t.props.chatId;
                if (null != H && !r.affectedChats.some((e) => e.id === H))
                  return t;
                var $ = t.props,
                  W = $.selectIndex,
                  K = $.medias;
                if (0 === K.length || W > K.length) return t;
                var Y = !1,
                  q = t.props.medias[t.props.selectIndex];
                return (
                  r.changedMsgs.forEach((e) => {
                    "revoked" === e.msg.content.type &&
                      e.msg.id === q.msg.id &&
                      (Y = !0);
                  }),
                  Y ? Xe : t
                );
              default:
                return t;
            }
          case "MEDIA_DRAWER":
            switch (r.type) {
              case "LOAD_MEDIA_RANGE":
                return r.requestId !==
                  (null == (s = t.props.loading) ? void 0 : s.older)
                  ? Ze(t, { loading: { older: r.requestId } })
                  : t;
              case "LOADED_MEDIA_RANGE":
                var X,
                  Q = De(t.props.loading, r.requestId);
                if (Q === t.props.loading) return t;
                var Z = {};
                Z.loading = Q;
                var ee = r.msgs.map(tt);
                return (
                  (null == Q ? void 0 : Q.older) !==
                    (null == (X = t.props.loading) ? void 0 : X.older) &&
                    ((Z.medias = t.props.medias.concat(ee)),
                    ee.length < r.askedFor && (Z.allLoaded = !0)),
                  Ze(t, Z)
                );
              case "RECEIVED_MSGS":
                var te,
                  ne,
                  re =
                    null == (te = t.props.useCase) || null == (ne = te.chat)
                      ? void 0
                      : ne.id;
                if (null != re && !r.affectedChats.some((e) => e.id === re))
                  return t;
                var ae = !1,
                  se = r.changedMsgs,
                  ie = {};
                se.forEach((e) => {
                  ie[e.msg.id] = e.msg;
                });
                var oe = [];
                return (
                  t.props.medias.forEach((e) => {
                    var t = ie[e.msg.id];
                    if (t) {
                      if (((ae = !0), "revoked" !== t.content.type)) {
                        var n = (0, b.j)(e.msg, {
                          starred: t.starred,
                          kept: t.kept,
                        });
                        oe.push((0, b.j)(e, { msg: n }));
                      }
                    } else oe.push(e);
                  }),
                  ae ? Ze(t, { medias: oe }) : t
                );
              case "DELETE_MSGS_STARTED":
                var le = r.msgIds.reduce(
                    (e, t) => ((e[t.toString()] = !0), e),
                    {}
                  ),
                  ce = t.props.medias.filter((e) => le[e.msg.id]);
                return ce.length > 0
                  ? Ze(t, { deleting: t.props.deleting.concat(ce) })
                  : t;
              case "MEDIA_UPDATED":
                var ue,
                  de,
                  he =
                    null == (ue = t.props.useCase) || null == (de = ue.chat)
                      ? void 0
                      : de.id;
                if (null != he && !r.affectedChats.some((e) => e.id === he))
                  return t;
                var pe = t.props.medias,
                  fe = !1,
                  ge = pe.map((e) => {
                    var t = ke(e.msg, r);
                    return t && t !== e.msg ? ((fe = !0), tt(t)) : e;
                  });
                return fe ? Ze(t, { medias: ge }) : t;
              case "MSGS_DELETED":
                var ve,
                  me = null == (ve = t.props.useCase.chat) ? void 0 : ve.id;
                if (null != me && r.chat.id !== me) return t;
                var be = r.msgIds.reduce(
                    (e, t) => ((e[t.toString()] = !0), e),
                    {}
                  ),
                  _e = t.props.deleting.filter((e) => !be[e.msg.id]),
                  Se = t.props.medias.filter((e) => !be[e.msg.id]);
                return _e.length !== t.props.deleting.length ||
                  Se.length !== t.props.medias.length
                  ? Ze(t, { medias: Se, deleting: _e })
                  : t;
              default:
                return t;
            }
          case "STATUS_SENT_LIST":
            switch (r.type) {
              case "STATUS_SENT_INFO_LOADED":
                return t.props.requestId === r.requestId
                  ? Ze(t, { requestId: null, infos: r.infos })
                  : t;
              case "STATUS_RECEIPTS_UPDATED":
                var Ee = t.props.infos;
                if (!Ee) return t;
                var ye = r.receipts,
                  Ie = {},
                  Oe = !1;
                return (
                  (0, b.w)(ye).forEach((e) => {
                    var t = ye[e],
                      n = Ee[e];
                    t && n && ((Oe = !0), (Ie[e] = (0, b.j)(n, { acks: t })));
                  }),
                  Oe ? Ze(t, { infos: (0, b.j)(Ee, Ie) }) : t
                );
              default:
                return t;
            }
          case "STATUS_READ_ME":
          case "STATUS_READ_OTHERS":
            switch (r.type) {
              case "STATUS_LOADING":
                var Ae = {};
                return (
                  r.statuses.forEach((e) => {
                    Ae[e] = "LOADING";
                  }),
                  rt(t, Ae)
                );
              case "STATUS_UPDATED":
                var we = {};
                return (
                  r.statuses.forEach((e) => {
                    we[e.id] = e;
                  }),
                  rt(t, we)
                );
              case "STATUS_MSGS_UPDATED":
                var Le = {};
                return (
                  r.msgs.forEach((e) => {
                    Le[e.id] = e;
                  }),
                  rt(t, Le)
                );
              case "STATUS_MEDIA_UPDATED":
                var Te = t.props.statuses[r.statusId];
                return null == Te ||
                  "LOADING" === Te ||
                  "text" === Te.content.type
                  ? t
                  : Ze(t, {
                      statuses: Object.assign({}, t.props.statuses, {
                        [r.statusId]: Object.assign({}, Te, {
                          content: (0, b.j)(Te.content, {
                            mediaStatus: r.mediaStatus,
                          }),
                        }),
                      }),
                    });
              default:
                return t;
            }
          case "IDENTITY_VERIFICATION_SCREEN":
            switch (r.type) {
              case "IDENTITY_VERIFICATION_CHANGED":
                return r.jid === t.props.jid
                  ? Ze(t, { update: (0, v.E)() })
                  : t;
            }
            return t;
          case "EPHEMERAL_SETTINGS":
            var Ne = Ce(t.props.chat, r);
            return (0, qe.a)(Ne, e.contacts) ? Ze(t, { chat: Ne }) : Xe;
          case "SEND_GIF":
            switch (r.type) {
              case "GIF_RECENT_REFRESH":
                return Ze(t, { refreshRecentGif: (0, v.E)() });
              case "GIF_FAVORITE_ADDED":
                return Ze(t, { lastAddedFavoriteGifs: r.gifs });
              case "GIF_FAVORITE_REMOVED":
                return Ze(t, { lastRemovedFavoriteGif: r.plaintextHash });
              default:
                return t;
            }
          case "SETTINGS_COMPANION_DEVICES":
            switch (r.type) {
              case "COMPANIONS_LOADED":
                return Ze(t, { companions: r.companions });
              default:
                return t;
            }
          case "COMMUNITY_HOME":
            var Me,
              Ge = null == (Me = t.props.info) ? void 0 : Me.jid;
            switch (r.type) {
              case "UPDATE_COMMUNITY_INFO":
                return null == Ge || (Ge && Ge === r.info.jid)
                  ? Ze(t, { info: r.info })
                  : t;
              case "UPDATE_COMMUNITY_SUBGROUPS":
                return null == Ge || (Ge && Ge === r.jid)
                  ? Ze(t, { subGroups: r.subGroups })
                  : t;
              default:
                return t;
            }
          default:
            return t;
        }
      }
      function Ze(e, t) {
        return (0, b.j)(e, { props: (0, b.j)(e.props, t) });
      }
      function et(e) {
        return "ready" === e.type ? e.ref : null;
      }
      function tt(e) {
        var t = e.content;
        switch (t.type) {
          case "image":
          case "video":
          case "gif":
            var n = et(t.mediaStatus);
            return n
              ? { type: "success", msg: e, contentRef: n, content: t }
              : (__LOG__(
                  4
                )`Wrong media status for media drawer: ${t.mediaStatus.type}`,
                { type: "failure", msg: e });
          case "voice":
            if (t.isPtt)
              return (
                __LOG__(4)`PTT should not be displayed in media drawer`,
                { type: "failure", msg: e }
              );
            var r = et(t.mediaStatus);
            return r
              ? { type: "success", msg: e, contentRef: r, content: t }
              : (__LOG__(
                  4
                )`Wrong media status for media drawer: ${t.mediaStatus.type}`,
                { type: "failure", msg: e });
          case "rich_hsm":
            var a = t.richContent;
            if (!a)
              return (
                __LOG__(
                  4
                )`Plain text HSMs should not be displayed in media drawer`,
                { type: "failure", msg: e }
              );
            if ("image" === a.type || "video" === a.type) {
              var s = et(a.mediaStatus);
              return s
                ? { type: "success", msg: e, contentRef: s, content: a }
                : (__LOG__(
                    4
                  )`Wrong media status for media drawer: ${a.mediaStatus.type}`,
                  { type: "failure", msg: e });
            }
            return (
              a.type,
              __LOG__(4)`Wrong rich HSM type for media drawer: ${a.type}`,
              { type: "failure", msg: e }
            );
          default:
            return (
              __LOG__(4)`Wrong msg type for media drawer: ${t.type}`,
              { type: "failure", msg: e }
            );
        }
      }
      function nt(e) {
        var t = [],
          n = null;
        return (
          (0, we.e)(
            e,
            0,
            () => {},
            (e) => {
              ("richHsmButton" === e.type &&
                "quick_reply" === e.content.type) ||
                (null != n &&
                  ((n.grouping |= f.h.JOINED_WITH_NEXT),
                  (e.grouping |= f.h.JOINED_WITH_PREV)),
                (n = e),
                t.push(e));
            }
          ),
          t
        );
      }
      function rt(e, t) {
        var n = (0, b.j)(e.props.statuses, t);
        return "STATUS_READ_ME" === e.type
          ? Ze(e, { authorMe: at(e.props.authorMe, t), statuses: n })
          : Ze(e, {
              authors: e.props.authors.map((e) => at(e, t)),
              statuses: n,
            });
      }
      function at(e, t) {
        return (0, b.j)(e, {
          msgs: e.msgs.map((e) => {
            var n = t[e.id];
            return n && "LOADING" !== n ? (0, b.j)(e, { ack: n.ack }) : e;
          }),
        });
      }
      var st = n(39);
      function it(e) {
        var t = e.authors,
          n = e.sections,
          r = n.recent[0],
          a = t.get(r);
        if (a) {
          var s = ot(a);
          if ("@psa" === r) {
            var i = n.recent[1],
              o = t.get(i);
            if (o) {
              var l = ot(o);
              return null != s && null != l ? (s.ts > l.ts ? s : l) : s || l;
            }
          }
          return s;
        }
      }
      function ot(e) {
        if (e.msgs.length < 1) return null;
        var t = e.msgs[e.msgs.length - 1];
        return (0, st.h)(t.ack)
          ? null
          : { msgId: t.id, ts: t.ts, campaignDuration: t.campaignDuration };
      }
      function lt(e) {
        if (null == e.calls) return e;
        var t = Object.assign({}, e);
        return delete t.calls, t;
      }
      var ct = n(156);
      function ut(e, t) {
        var n = (function e(t, n, r) {
          switch (n.type) {
            case "MSGS_DELETED":
              var a,
                s = null == (a = (0, ct.c)(t, n.chat.jid)) ? void 0 : a.quote;
              return null == s || "reply" !== s.type
                ? t
                : n.msgIds.includes(s.quotedMsg.id)
                ? e(t, { type: "CLEAR_DRAFT_QUOTE", chatJid: n.chat.jid }, r)
                : t;
            case "RECEIVED_MSGS":
              var i = n.changedMsgs.length;
              if (0 === i) return t;
              for (var o = t, l = 0; l < i; ++l) {
                var c,
                  u = n.changedMsgs[l].msg;
                if ("revoked" === u.content.type) {
                  var d = r[u.chatId],
                    h = null == (c = (0, ct.c)(o, d.jid)) ? void 0 : c.quote;
                  h &&
                    "reply" === h.type &&
                    u.id === h.quotedMsg.id &&
                    (o = e(
                      o,
                      { type: "CLEAR_DRAFT_QUOTE", chatJid: d.jid },
                      r
                    ));
                }
              }
              return o;
            case "SAVE_DRAFT":
              return (0, ct.d)(t, n.chatJid, n.draft);
            case "CLEAR_DRAFT":
              return (0, ct.a)(t, n.chatJid);
            case "SAVE_DRAFT_QUOTE":
              var p,
                f = (0, ct.c)(t, n.chatJid);
              return (
                (p =
                  null == f
                    ? { text: "", quote: n.quote }
                    : (0, b.j)(f, { quote: n.quote })),
                e(t, { type: "SAVE_DRAFT", chatJid: n.chatJid, draft: p }, r)
              );
            case "CLEAR_DRAFT_QUOTE":
              var g = (0, ct.c)(t, n.chatJid);
              return null == g || null == g.quote
                ? t
                : e(
                    t,
                    {
                      type: "SAVE_DRAFT",
                      chatJid: n.chatJid,
                      draft: (0, b.j)(g, { quote: void 0 }),
                    },
                    r
                  );
            case "SAVE_DRAFT_LINK":
              var v,
                m = (0, ct.c)(t, n.chatJid);
              return (
                (v =
                  null == m
                    ? { text: "", link: n.link }
                    : (0, b.j)(m, { link: n.link })),
                e(t, { type: "SAVE_DRAFT", chatJid: n.chatJid, draft: v }, r)
              );
            default:
              n.type;
              var _ = (0, ct.c)(t, n.chatJid);
              return null == _ || null == _.link
                ? t
                : e(
                    t,
                    {
                      type: "SAVE_DRAFT",
                      chatJid: n.chatJid,
                      draft: (0, b.j)(_, { link: void 0 }),
                    },
                    r
                  );
          }
        })(e.drafts, t, e.chatlist.chats);
        return n === e.drafts
          ? e
          : null == n
          ? Object.assign({}, e, { drafts: (0, ct.b)() })
          : (0, b.j)(e, { drafts: n });
      }
      var dt = n(7);
      function ht(e, t) {
        var n = (function (e, t) {
          switch (t.type) {
            case "CHAT_DELETED":
              var n = t.chatId,
                r = (0, b.x)(e.contacts).find(
                  (e) => (null == e ? void 0 : e.chatId) === n
                );
              if (!r) return e;
              var a = (0, b.u)(r);
              delete a.chatId;
              var s = (0, b.u)(e.contacts);
              return (s[a.jid] = a), Object.assign({}, e, { contacts: s });
            case "MODIFIED_CONTACTS":
              var i = (0, b.u)(e.contacts),
                o = t.deleted,
                l = t.changed;
              return (
                o &&
                  o.forEach((e) => {
                    delete i[e];
                  }),
                l &&
                  l.forEach((e) => {
                    i[e.jid] = e;
                  }),
                Object.assign({}, e, { contacts: i })
              );
            default:
              return e;
          }
        })(e, t);
        switch (
          ((n = (function (e, t) {
            var n = (function (e, t) {
              switch (t.type) {
                case "UPDATE_STORAGE_STATS":
                  return Object.assign({}, e, {
                    currentStorageStats: t.currentStorageStats,
                  });
                case "UPDATE_STORAGE_TS":
                  return Object.assign({}, e, {
                    lastStorageStatsTs: (0, v.E)(),
                  });
                default:
                  return e;
              }
            })(e.storageManager, t);
            return n !== e.storageManager
              ? Object.assign({}, e, { storageManager: n })
              : e;
          })(
            (n = (function (e, t) {
              if (null == e.tab) return e;
              if ("OPEN_TAB" === t.type)
                return Object.assign({}, e, { tab: t.tab, screens: [] });
              if ("status" === e.tab.key)
                switch (t.type) {
                  case "START_LOADING_STATUS":
                    return Object.assign({}, e, {
                      tab: { key: "status", isLoading: !0 },
                    });
                  case "UPDATE_STATUS_DATA":
                    return Object.assign({}, e, {
                      tab: { key: "status", data: t.data },
                    });
                }
              else if ("calls" === e.tab.key)
                switch (t.type) {
                  case "VOIP_AVAILABILITY_CHANGED":
                    if (!t.available)
                      return Object.assign({}, e, { tab: { key: "chats" } });
                }
              return e;
            })(
              (n = (function (e, t) {
                if (!e.isVoipAvailable) return lt(e);
                switch (t.type) {
                  case "OPEN_CALL_LOGS":
                    var n = e.calls || {},
                      r = n.current;
                    if (null != n.logs) return e;
                    var a = {
                        lastScrollPosition: null,
                        groups: new Map(),
                        loadingRequestId: t.requestId,
                        orderedGroupIds: [],
                      },
                      s = null == r ? { logs: a } : { current: r, logs: a };
                    return Object.assign({}, e, { calls: s });
                  case "UPDATE_CALL_LOGS":
                    var i = e.calls || {},
                      o = i.current,
                      l = i.logs,
                      c = null == l && t.canBeSkipped,
                      u =
                        null != l &&
                        null != t.requestId &&
                        l.loadingRequestId !== t.requestId,
                      d = null == l && null != t.requestId;
                    if (c || u || d) return e;
                    var h = {
                        lastScrollPosition:
                          null == l ? null : l.lastScrollPosition,
                        groups: t.groups,
                        orderedGroupIds: t.orderedGroupIds,
                        loadingRequestId: null,
                      },
                      p = null == o ? { logs: h } : { current: o, logs: h };
                    return Object.assign({}, e, { calls: p });
                  case "UPDATE_CALL_LOGS_SCROLL":
                    var f = e.calls || {},
                      g = f.current,
                      v = f.logs;
                    return null == v
                      ? e
                      : Object.assign({}, e, {
                          calls: {
                            current: g,
                            logs: Object.assign({}, v, {
                              lastScrollPosition: t.lastScrollPosition,
                            }),
                          },
                        });
                  case "CLOSE_CALL_LOGS":
                    var m = e.calls || {},
                      b = m.current;
                    if (null == m.logs) return e;
                    var _ = Object.assign({}, e);
                    return (
                      null == b ? delete _.calls : (_.calls = { current: b }), _
                    );
                  default:
                    return e;
                }
              })(
                (n = (function (e, t) {
                  var n = (function (e, t) {
                    switch (t.type) {
                      case "OPEN_TAB":
                        if ("status" !== t.tab.key || null == t.tab.data)
                          return e;
                        var n = it(t.tab.data) || void 0;
                        return e.lastUnreadMsg === n
                          ? e
                          : Object.assign({}, e, { lastUnreadMsg: n });
                      case "UPDATE_STATUS_DATA":
                        var r = it(t.data) || void 0;
                        return e.lastUnreadMsg === r
                          ? e
                          : Object.assign({}, e, { lastUnreadMsg: r });
                      case "STATUS_FIRST_SENT_DIALOG_CLOSED":
                        return (0, b.j)(e, { showDialogOnFirstSend: void 0 });
                      case "STATUS_TAB_OPENED":
                        return Object.assign({}, e, { tabLastOpened: t.time });
                      case "STATUS_SETTINGS_UPDATED":
                        return Object.assign({}, e, { settings: t.settings });
                      case "STATUS_LAST_UNREAD_MSG":
                        return Object.assign({}, e, {
                          lastUnreadMsg: t.lastUnreadMsg || void 0,
                        });
                      case "UPDATE_STATUS_LIST_SCROLL":
                        return Object.assign({}, e, {
                          lastScrollPosition: t.lastScrollPosition,
                        });
                      default:
                        return e;
                    }
                  })(e.status, t);
                  return n !== e.status
                    ? Object.assign({}, e, { status: n })
                    : e;
                })(
                  (n = (function (e, t) {
                    var n;
                    if (
                      null != (null == (n = e.calls) ? void 0 : n.current) &&
                      null != e.youtubePlayer
                    )
                      return Object.assign({}, e, { youtubePlayer: null });
                    var r = (function (e, t) {
                      switch (t.type) {
                        case "PLAY_YOUTUBE_VIDEO":
                          return { videoId: t.videoId, msgId: t.msgId };
                        case "STOP_YOUTUBE_VIDEO":
                          return null;
                        case "RECEIVED_MSGS":
                          if (null == e) return null;
                          for (
                            var n = e.msgId, r = t.changedMsgs, a = 0;
                            a < r.length;
                            a++
                          ) {
                            var s = r[a].msg,
                              i = s.id,
                              o = s.content;
                            if (i === n && "revoked" === o.type) return null;
                          }
                          return e;
                        case "MSGS_DELETED":
                          return null == e || t.msgIds.includes(e.msgId)
                            ? null
                            : e;
                        default:
                          return e;
                      }
                    })(e.youtubePlayer, t);
                    return r !== e.youtubePlayer
                      ? Object.assign({}, e, {
                          youtubePlayer: r,
                          player: Object.assign({}, e.player, { active: null }),
                        })
                      : e;
                  })(
                    (n = (function (e, t) {
                      var n;
                      if (
                        null != (null == (n = e.calls) ? void 0 : n.current) &&
                        null != e.player.active
                      )
                        return Object.assign({}, e, {
                          player: Object.assign({}, e.player, { active: null }),
                        });
                      var r = (function e(t, n) {
                        switch (n.type) {
                          case "PLAY_MEDIA":
                            return null != t.active &&
                              t.active.commonMsgId === n.player.commonMsgId
                              ? (__LOG__(
                                  2
                                )`Play is resuming ${t.active.type} media ${n.player.commonMsgId}`,
                                "audio" === t.active.type && t.active.paused
                                  ? Object.assign({}, t, {
                                      active: Object.assign({}, t.active, {
                                        paused: !1,
                                      }),
                                    })
                                  : t)
                              : null != t.active && "video" === t.active.type
                              ? (__LOG__(
                                  4
                                )`You should not start a new media before fulling stopping a video`,
                                t)
                              : (__LOG__(
                                  2
                                )`Starting new ${n.player.type} media ${n.player.commonMsgId}`,
                                Object.assign({}, t, { active: n.player }));
                          case "LOADED_MEDIA":
                            var r = t.active;
                            return null != r &&
                              r.commonMsgId === n.commonMsgId &&
                              r.loading
                              ? (__LOG__(
                                  2
                                )`Loaded ${r.type} media ${n.commonMsgId}`,
                                Object.assign({}, t, {
                                  active: (0, b.j)(r, { loading: !1 }),
                                }))
                              : t;
                          case "RESUME_MEDIA":
                            var a = t.active;
                            if (
                              null != a &&
                              !0 === a.paused &&
                              a.commonMsgId === n.commonMsgId
                            ) {
                              if (
                                (__LOG__(
                                  2
                                )`Resuming ${a.type} media ${n.commonMsgId}`,
                                "audio" === a.type)
                              )
                                return Object.assign({}, t, {
                                  active: Object.assign({}, a, { paused: !1 }),
                                });
                              __LOG__(
                                4
                              )`RESUME_MEDIA action should only trigger for audio players`;
                            }
                            return t;
                          case "PAUSE_MEDIA":
                            var s = t.active;
                            if (
                              null != s &&
                              !1 === s.paused &&
                              s.commonMsgId === n.commonMsgId
                            ) {
                              if (
                                (__LOG__(2)`Pausing ${s.type} media ${
                                  n.commonMsgId
                                } at ${Ke(t, s)}%`,
                                "audio" === s.type)
                              )
                                return Object.assign({}, t, {
                                  active: Object.assign({}, s, { paused: !0 }),
                                });
                              __LOG__(
                                4
                              )`PAUSE_MEDIA action should only trigger for audio players`;
                            }
                            return t;
                          case "UPDATE_MEDIA":
                            var i = t.active;
                            if (null != i && i.commonMsgId === n.commonMsgId) {
                              "audio" !== i.type &&
                                __LOG__(
                                  4
                                )`UPDATE_MEDIA action should only trigger for audio players`;
                              var o = Object.assign({}, t, {
                                currentTimes: Object.assign(
                                  {},
                                  t.currentTimes,
                                  { [n.commonMsgId]: n.currentTime }
                                ),
                              });
                              return (
                                __LOG__(2)`Update time ${i.type} media ${
                                  n.commonMsgId
                                }, ${Ke(o, i)}%`,
                                o
                              );
                            }
                            return t;
                          case "RESET_MEDIA_TIME":
                            var l = t.active;
                            if (null != l) {
                              var c = t;
                              if ("audio" === l.type) {
                                var u = Ye(t.currentTimes, n.commonMsgId);
                                c = Object.assign({}, t, {
                                  active: null,
                                  currentTimes: u,
                                });
                              } else
                                __LOG__(
                                  4
                                )`RESET_MEDIA_TIME action should only trigger for audio players`;
                              return (
                                __LOG__(
                                  2
                                )`RESET audio player ${n.commonMsgId} time to 0`,
                                c
                              );
                            }
                            return t;
                          case "END_MEDIA":
                            var d = t.active;
                            if (null != d && d.commonMsgId === n.commonMsgId) {
                              var h = t;
                              return (
                                "audio" === d.type
                                  ? (h = Object.assign({}, t, {
                                      active: Object.assign({}, d, {
                                        paused: !0,
                                      }),
                                      currentTimes: Ye(
                                        t.currentTimes,
                                        n.commonMsgId
                                      ),
                                    }))
                                  : __LOG__(
                                      4
                                    )`END_MEDIA action should only trigger for audio players`,
                                __LOG__(2)`End ${d.type} media ${
                                  n.commonMsgId
                                }, ${Ke(h, d)}%`,
                                h
                              );
                            }
                            return t;
                          case "TOWARD_MEDIA":
                            var p = We(t.currentTimes, n.commonMsgId);
                            return Object.assign({}, t, {
                              currentTimes: Object.assign({}, t.currentTimes, {
                                [n.commonMsgId]: (0, $e.c)(
                                  p,
                                  n.duration,
                                  n.direction
                                ),
                              }),
                            });
                          case "STOP_MEDIA":
                            var f = t.active;
                            if (null != f && f.commonMsgId === n.commonMsgId) {
                              __LOG__(
                                2
                              )`Stopping ${f.type} media ${n.commonMsgId}`;
                              var g = t.currentTimes;
                              return (
                                "audio" === f.type &&
                                  (g = Ye(t.currentTimes, n.commonMsgId)),
                                Object.assign({}, t, {
                                  active: null,
                                  currentTimes: g,
                                })
                              );
                            }
                            return t;
                          case "STOP_ANY_MEDIA":
                            var v = t.active;
                            return null != v
                              ? (__LOG__(
                                  2
                                )`Stopping any ${v.type} media ${v.commonMsgId}`,
                                Object.assign({}, t, { active: null }))
                              : t;
                          case "MSGS_DELETED":
                            return t.active &&
                              n.msgIds.includes(t.active.commonMsgId)
                              ? e(t, {
                                  type: "STOP_MEDIA",
                                  commonMsgId: t.active.commonMsgId,
                                })
                              : t;
                          case "RECEIVED_MSGS":
                            var m,
                              _ =
                                null == (m = t.active) ? void 0 : m.commonMsgId;
                            return null != _ &&
                              n.changedMsgs.some(
                                (e) =>
                                  e.msg.id === _ &&
                                  "revoked" === e.msg.content.type
                              )
                              ? e(t, { type: "STOP_MEDIA", commonMsgId: _ })
                              : t;
                          default:
                            return t;
                        }
                      })(e.player, t);
                      return r !== e.player
                        ? Object.assign({}, e, {
                            player: r,
                            youtubePlayer: null,
                          })
                        : e;
                    })(
                      (n = (function (e, t) {
                        if (!e.isVoipAvailable) return lt(e);
                        switch (t.type) {
                          case "CALL_STATE_CHANGED":
                            var n = t.state,
                              r = t.peerJid,
                              a = t.isCaller,
                              s = t.isLocallyMuted,
                              i = e.calls || {},
                              o = i.current,
                              l = i.logs;
                            if ("none" === n) {
                              if ("error" === (null == o ? void 0 : o.state))
                                return e;
                              var c = Object.assign({}, e);
                              return (
                                null == l
                                  ? delete c.calls
                                  : (c.calls = { logs: l }),
                                c
                              );
                            }
                            var u = {
                              state: n,
                              peerJid: r,
                              isCaller: a,
                              duration: null == o ? null : o.duration,
                              isInterrupted: null != o && o.isInterrupted,
                              isLocallyMuted: s,
                            };
                            return null == l
                              ? Object.assign({}, e, { calls: { current: u } })
                              : Object.assign({}, e, {
                                  calls: { current: u, logs: l },
                                });
                          case "CALL_DURATION_CHANGED":
                            var d = e.calls;
                            if (!d || null == d.current) return e;
                            var h = t.duration,
                              p = Object.assign({}, d.current, { duration: h }),
                              f = d.logs;
                            return null == f
                              ? Object.assign({}, e, { calls: { current: p } })
                              : Object.assign({}, e, {
                                  calls: { current: p, logs: f },
                                });
                          case "VOIP_SERVICE_BRIDGE_DISCONNECTED":
                            var g = e.calls;
                            return null ==
                              (null == g ? void 0 : g.connectionStatus)
                              ? Object.assign({}, e, {
                                  calls: Object.assign({}, g, {
                                    connectionStatus: "swLost",
                                  }),
                                })
                              : e;
                          case "VOIP_SERVICE_SETUP_DONE":
                            var v = e.calls;
                            if (
                              "setupDone" !==
                              (null == v ? void 0 : v.connectionStatus)
                            ) {
                              var m = t.inOngoingCall
                                ? null == v
                                  ? void 0
                                  : v.current
                                : void 0;
                              return Object.assign({}, e, {
                                calls: Object.assign({}, v, {
                                  current: m,
                                  connectionStatus: "setupDone",
                                }),
                              });
                            }
                            return e;
                          case "VOIP_SERVICE_DISCONNECTED":
                            var b = e.calls;
                            return b
                              ? "disconnected" === b.connectionStatus &&
                                null == b.current
                                ? e
                                : Object.assign({}, e, {
                                    calls: Object.assign({}, b, {
                                      current: void 0,
                                      connectionStatus: "disconnected",
                                    }),
                                  })
                              : Object.assign({}, e, {
                                  calls: { connectionStatus: "disconnected" },
                                });
                          case "CALL_MUTE_STATE_CHANGED":
                            var _ = t.isMuted,
                              S = t.jid,
                              E = e.calls || {},
                              y = E.current,
                              I = E.logs;
                            if (
                              S !== e.user.jid ||
                              null == y ||
                              _ === y.isLocallyMuted
                            )
                              return e;
                            var O = Object.assign({}, y, { isLocallyMuted: _ });
                            return null == I
                              ? Object.assign({}, e, { calls: { current: O } })
                              : Object.assign({}, e, {
                                  calls: { current: O, logs: I },
                                });
                          case "CALL_INTERRUPTED_STATE_CHANGED":
                            var A = t.isInterrupted,
                              C = t.jid,
                              k = e.calls || {},
                              w = k.current,
                              D = k.logs;
                            if (
                              null == w ||
                              w.peerJid !== C ||
                              w.isInterrupted === A
                            )
                              return e;
                            var L = Object.assign({}, w, { isInterrupted: A });
                            return null == D
                              ? Object.assign({}, e, { calls: { current: L } })
                              : Object.assign({}, e, {
                                  calls: { current: L, logs: D },
                                });
                          case "CALL_BUSY_RECEIVED":
                            var T = e.calls || {},
                              N = T.current,
                              M = T.logs;
                            if (null == N || "calling" !== N.state) return e;
                            var G = Object.assign({}, N, { state: "busy" });
                            return null == M
                              ? Object.assign({}, e, { calls: { current: G } })
                              : Object.assign({}, e, {
                                  calls: { current: G, logs: M },
                                });
                          case "LOADING_CALL":
                            var R = t.peer,
                              j = t.fromMe,
                              x = e.calls,
                              P = null == x ? void 0 : x.current;
                            if (
                              "loading" === (null == P ? void 0 : P.state) &&
                              (null == P ? void 0 : P.peerJid) === R
                            )
                              return e;
                            var U = null == x ? void 0 : x.logs,
                              F = {
                                state: "loading",
                                peerJid: R,
                                isCaller: j,
                                duration: null,
                                isInterrupted: !1,
                                isLocallyMuted: !1,
                              };
                            return null == U
                              ? Object.assign({}, e, { calls: { current: F } })
                              : Object.assign({}, e, {
                                  calls: { logs: U, current: F },
                                });
                          case "CALL_OFFER_NACKED":
                            var B = e.calls,
                              V = null == B ? void 0 : B.current;
                            if (null == V) return e;
                            var J = null == B ? void 0 : B.logs,
                              z = V.isCaller,
                              H = V.duration,
                              $ = V.isInterrupted,
                              W = V.isLocallyMuted,
                              K = {
                                state: "error",
                                peerJid: t.jid,
                                isCaller: z,
                                duration: H,
                                isInterrupted: $,
                                isLocallyMuted: W,
                                errorCode: t.code,
                              };
                            return null == J
                              ? Object.assign({}, e, { calls: { current: K } })
                              : Object.assign({}, e, {
                                  calls: { current: K, logs: J },
                                });
                          case "CALL_ERROR_CLEARED":
                            var Y = e.calls,
                              q = null == Y ? void 0 : Y.current;
                            if (null == q || "error" !== q.state) return e;
                            var X = null == Y ? void 0 : Y.logs;
                            if (null == X) {
                              var Q = Object.assign({}, e);
                              return delete Q.calls, Q;
                            }
                            return Object.assign({}, e, { calls: { logs: X } });
                          case "CLOSE_CALL_SCREEN":
                            var Z = e.calls;
                            if (null == Z || null == Z.current) return e;
                            var ee = Z.logs;
                            if (null == ee) {
                              var te = Object.assign({}, e);
                              return delete te.calls, te;
                            }
                            return Object.assign({}, e, {
                              calls: { logs: ee },
                            });
                          case "CALL_ENDED":
                            var ne = e.calls;
                            if (null == ne || null == ne.current) return e;
                            var re = ne.logs;
                            if (null == re) {
                              var ae = Object.assign({}, e);
                              return delete ae.calls, ae;
                            }
                            return Object.assign({}, e, {
                              calls: { logs: re },
                            });
                          default:
                            return e;
                        }
                      })(
                        (n = (function (e, t) {
                          if ("OPEN_SCREEN" === t.type) {
                            var n = t.id;
                            return e.screens.some((e) => e.id === n)
                              ? (__LOG__(
                                  4
                                )`You cannot open a screen with an already used id: ${n}, ${t.type}`,
                                SEND_LOGS("Open screen with existing id"),
                                e)
                              : Object.assign({}, e, {
                                  screens: e.screens.concat([
                                    { id: n, screen: t.screen },
                                  ]),
                                });
                          }
                          if ("CLOSE_ALL_SCREENS" === t.type)
                            return Object.assign({}, e, { screens: [] });
                          for (
                            var r = e.screens, a = [], s = !1, i = 0;
                            i < r.length;
                            ++i
                          ) {
                            var o = r[i],
                              l = o.id,
                              c = o.screen,
                              u = Qe(e, c, l, t);
                            if ("CLOSE_ALL_SCREENS_ABOVE" === u) {
                              s = !0;
                              break;
                            }
                            "CLOSE_SCREEN" === u
                              ? (s = !0)
                              : u !== c
                              ? (a.push({ id: l, screen: u }), (s = !0))
                              : a.push(o);
                          }
                          return s ? Object.assign({}, e, { screens: a }) : e;
                        })(
                          (n = (function (e, t) {
                            var n = e;
                            switch (t.type) {
                              case "RECEIVED_MSGS":
                              case "CHAT_ADDED":
                                for (
                                  var r = t.affectedChats,
                                    a = n.contacts,
                                    s = n.chatlist.orderedChatIds.slice(),
                                    i = (0, b.u)(n.chatlist.chats),
                                    o = 0;
                                  o < r.length;
                                  o++
                                ) {
                                  var l = r[o];
                                  i.hasOwnProperty(l.id) || s.push(l.id),
                                    (i[l.id] = l);
                                  var c = (0, dt.q)(l.jid);
                                  c &&
                                    !a.hasOwnProperty(l.jid) &&
                                    (a === n.contacts && (a = (0, b.u)(a)),
                                    (a[c] = { jid: c, chatId: l.id }));
                                }
                                return (
                                  s.sort((e, t) => i[t].sortBy - i[e].sortBy),
                                  Object.assign({}, n, {
                                    chatlist: {
                                      orderedChatIds: s,
                                      chats: i,
                                      lastScrollPosition:
                                        n.chatlist.lastScrollPosition,
                                      archived: n.chatlist.archived,
                                    },
                                    contacts: a,
                                  })
                                );
                              case "CHAT_MODIFIED":
                              case "MSG_ACK":
                              case "MSGS_DELETED":
                              case "DID_READ_CHAT":
                                var u = n.chatlist.chats[t.chat.id],
                                  d = Ce(u, t);
                                if (d === u) return n;
                                var h = (0, b.u)(n.chatlist.chats);
                                return (
                                  (h[d.id] = d),
                                  Object.assign({}, n, {
                                    chatlist: Object.assign({}, n.chatlist, {
                                      chats: h,
                                    }),
                                  })
                                );
                              case "CHAT_DELETED":
                                var p = (0, b.u)(n.chatlist.chats),
                                  f = t.chatId;
                                return (
                                  delete p[f],
                                  Object.assign({}, n, {
                                    chatlist: Object.assign({}, n.chatlist, {
                                      chats: p,
                                      orderedChatIds: n.chatlist.orderedChatIds.filter(
                                        (e) => e !== f
                                      ),
                                    }),
                                  })
                                );
                              case "UPDATE_CHATLIST_SCROLL":
                                return Object.assign({}, n, {
                                  chatlist: Object.assign({}, n.chatlist, {
                                    lastScrollPosition: t.lastScrollPosition,
                                  }),
                                });
                              case "GDPR_REPORT_UPDATED":
                                return null != n.gdprReport &&
                                  (0, b.r)(n.gdprReport, t.gdprReport)
                                  ? n
                                  : Object.assign({}, n, {
                                      gdprReport: t.gdprReport,
                                    });
                              case "GDPR_REPORT_DOWNLOADED":
                                if ("error" === t.result.type)
                                  return Object.assign({}, n, {
                                    gdprReport: {
                                      status: "error",
                                      reason: t.result.error,
                                    },
                                  });
                                if (
                                  null == n.gdprReport ||
                                  ("downloading" !== n.gdprReport.status &&
                                    "success" !== n.gdprReport.status) ||
                                  "success" !== t.result.type
                                )
                                  return n;
                                var g = {
                                  status: "downloaded",
                                  creationDate: n.gdprReport.creationDate,
                                  expirationDate: n.gdprReport.expirationDate,
                                  size: n.gdprReport.size,
                                  metadata: n.gdprReport.metadata,
                                  blob: t.result.plaintext,
                                };
                                return Object.assign({}, n, { gdprReport: g });
                              case "GDPR_REPORT_DOWNLOADING":
                                if (
                                  null != n.gdprReport &&
                                  "available" === n.gdprReport.status
                                ) {
                                  var v = {
                                    status: "downloading",
                                    creationDate: n.gdprReport.creationDate,
                                    expirationDate: n.gdprReport.expirationDate,
                                    size: n.gdprReport.size,
                                    metadata: n.gdprReport.metadata,
                                    percent: t.percent,
                                  };
                                  return Object.assign({}, n, {
                                    gdprReport: v,
                                  });
                                }
                                return n;
                              case "APP_FOREGROUND":
                                return Object.assign({}, n, { shouldExit: !1 });
                              case "VOIP_AVAILABILITY_CHANGED":
                                if (
                                  n.isVoipAvailable === t.available &&
                                  null == n.calls
                                )
                                  return n;
                                var m = Object.assign({}, n, {
                                  isVoipAvailable: t.available,
                                });
                                return delete m.calls, m;
                              case "USER_NOTICE_UPDATED":
                                if (t.userNotice)
                                  return Object.assign({}, n, {
                                    userNotice: t.userNotice,
                                  });
                                if (!n.userNotice) return n;
                                var _ = Object.assign({}, n);
                                return delete _.userNotice, _;
                              default:
                                return n;
                            }
                          })(
                            (n = (function (e, t, n) {
                              var r,
                                a = e;
                              if ("OPEN_CHAT" === t.type)
                                return Object.assign({}, a, {
                                  msglist: Ue(t, a),
                                  screens: [],
                                });
                              var s = a.msglist;
                              if (!s) return a;
                              var i = !1,
                                o = Ce(s.chat, t);
                              o !== s.chat &&
                                ((s = (0, b.j)(s, { chat: o })),
                                (a = (0, b.j)(a, { msglist: s })),
                                (i = !0));
                              var l = s.chat.id;
                              switch (t.type) {
                                case "UPDATE_CHAT_ANCHOR":
                                  var c, u, d;
                                  if (l !== t.chatId) return a;
                                  var h = t.oldRequestId,
                                    p = t.newRequestId,
                                    f = t.anchor,
                                    g =
                                      null == (c = s.loading)
                                        ? void 0
                                        : c.older;
                                  g === h && (g = p);
                                  var v =
                                    null == (u = s.loading) ? void 0 : u.newer;
                                  v === h && (v = p);
                                  var m = s.selectedItem;
                                  (null == (d = m) ? void 0 : d.msgId) ===
                                    s.anchor &&
                                    s.anchor !== f &&
                                    (__LOG__(
                                      2
                                    )`msgListReducer: Removing selected expired anchor`,
                                    (m = void 0));
                                  var _ = Object.assign({}, s, {
                                    anchor: f,
                                    loading: { older: g, newer: v },
                                    selectedItem: m,
                                  });
                                  return Object.assign({}, a, { msglist: _ });
                                case "ADJUST_VIEWPORT":
                                  return l !== t.chatId || s.anchor !== t.anchor
                                    ? a
                                    : Object.assign({}, a, {
                                        msglist: Fe(s, t, a),
                                      });
                                case "LOADED_MSG_RANGE":
                                  var S = De(s.loading, t.requestId);
                                  return l !== t.chatId || s.anchor !== t.anchor
                                    ? S !== s.loading
                                      ? (__LOG__(
                                          3
                                        )`msglist request matched but chat or anchor different`,
                                        Object.assign({}, a, {
                                          msglist: Object.assign({}, s, {
                                            loading: S,
                                          }),
                                        }))
                                      : a
                                    : t.loaded
                                    ? Object.assign({}, a, {
                                        msglist: Be(s, S, t.loaded, a),
                                      })
                                    : S !== s.loading
                                    ? (__LOG__(
                                        2
                                      )`msglist request anchored to a message that deleted mid-request`,
                                      Object.assign({}, a, {
                                        msglist: Object.assign({}, s, {
                                          loading: S,
                                          missingAnchor: !0,
                                        }),
                                      }))
                                    : a;
                                case "MSG_ACK":
                                  return l !== t.chat.id || null == t.ackedMsg
                                    ? a
                                    : ze(s, t, t.ackedMsg.id, a);
                                case "MSGS_DELETED":
                                  return l !== t.chat.id
                                    ? a
                                    : (function (e, t, n) {
                                        if (t.chat.id !== e.chat.id) return n;
                                        var r = t.msgIds,
                                          a = t.chat,
                                          s = e.viewport,
                                          i = (0, b.u)(s),
                                          o = (0, b.u)(e.msgs);
                                        r.forEach((e) => {
                                          delete o[e];
                                        });
                                        var l = Object.assign({}, e, {
                                            msgs: o,
                                            chat: a,
                                          }),
                                          c = [];
                                        return (
                                          r.forEach((e) => {
                                            var t = i.msgIds.indexOf(e);
                                            if (-1 !== t) {
                                              c.push(e);
                                              var n = l.anchor,
                                                r = l.selectedItem,
                                                s = i.msgIds,
                                                o = i.loadedRange,
                                                u = i.desiredRange;
                                              n === e &&
                                                (l.anchor =
                                                  s[t + 1] ||
                                                  s[t - 1] ||
                                                  a.msgInfo.newest ||
                                                  "beginning"),
                                                (null == r
                                                  ? void 0
                                                  : r.msgId) === e &&
                                                  (l.selectedItem = void 0);
                                              var d = t + o.start;
                                              null != l.newestIndex && d < 0
                                                ? l.newestIndex++
                                                : null != l.oldestIndex &&
                                                  d >= 0 &&
                                                  l.oldestIndex--,
                                                (i.loadedRange = He(o, d)),
                                                (i.desiredRange = He(u, d)),
                                                (i.msgIds = s.filter(
                                                  (t) => t !== e
                                                ));
                                            }
                                          }),
                                          0 === c.length
                                            ? (0, b.j)(n, { msglist: l })
                                            : (0 === i.msgIds.length &&
                                                ((i = {
                                                  loadedRange: {
                                                    start: 0,
                                                    end: 0,
                                                  },
                                                  desiredRange: {
                                                    start: -10,
                                                    end: 10,
                                                  },
                                                  msgIds: [],
                                                }),
                                                0 === a.msgInfo.msgCount &&
                                                  ((l.newestIndex = 0),
                                                  (l.oldestIndex = -1))),
                                              (l.viewport = i),
                                              Je(l, n),
                                              Object.assign({}, n, {
                                                msglist: l,
                                              }))
                                        );
                                      })(s, t, a);
                                case "MEDIA_UPDATED":
                                  return t.affectedChats.some((e) => e.id === l)
                                    ? Object.assign({}, a, {
                                        msglist: Ve(
                                          Object.assign({}, s, { chat: o }),
                                          t.msgs,
                                          a
                                        ),
                                      })
                                    : a;
                                case "MSG_UPDATED":
                                  return l !== t.msg.chatId
                                    ? a
                                    : Object.assign({}, a, {
                                        msglist: Ve(
                                          Object.assign({}, s, { chat: o }),
                                          [t.msg],
                                          a
                                        ),
                                      });
                                case "RECEIVED_MSGS":
                                  if (!i) return a;
                                  var E = s,
                                    y = E.newestIndex,
                                    I = E.viewport,
                                    O = t.newMsgs.filter((e) => e.chatId === l);
                                  O.reverse();
                                  var A = s.unreadBar;
                                  if (
                                    (A
                                      ? ((A = Object.assign({}, A)),
                                        O.find((e) => e.meta && e.meta.fromMe)
                                          ? (A.count = 0)
                                          : (A.count = A.count + O.length))
                                      : "hidden" === document.visibilityState &&
                                        o.msgInfo.oldestUnread &&
                                        (A = {
                                          msgId: o.msgInfo.oldestUnread,
                                          count: o.msgInfo.unreadMsgCount,
                                        }),
                                    void 0 === y ||
                                      y !== I.loadedRange.start ||
                                      I.desiredRange.start >= y)
                                  ) {
                                    var C = Object.assign({}, s, {
                                      chat: o,
                                      newestIndex:
                                        void 0 !== y ? y - O.length : void 0,
                                      unreadBar: A,
                                    });
                                    return Object.assign({}, a, {
                                      msglist: Ve(
                                        C,
                                        t.changedMsgs.map((e) => e.msg),
                                        a
                                      ),
                                    });
                                  }
                                  var k = y - O.length,
                                    w = Be(
                                      s,
                                      s.loading,
                                      {
                                        newestIndex: k,
                                        range: { start: k, end: y },
                                        msgs: O,
                                        unreadBar: A,
                                      },
                                      a
                                    );
                                  return (
                                    (w.chat = o),
                                    Object.assign({}, a, {
                                      msglist: Ve(
                                        w,
                                        t.changedMsgs.map((e) => e.msg),
                                        a
                                      ),
                                    })
                                  );
                                case "SELECT_MSG":
                                  return Object.assign({}, a, {
                                    msglist: Object.assign({}, s, {
                                      selectedItem: {
                                        key: t.item.key,
                                        msgId:
                                          null == (r = t.item.msg)
                                            ? void 0
                                            : r.id,
                                      },
                                    }),
                                  });
                                case "KICKED":
                                  return Object.assign({}, a, {
                                    msglist: void 0,
                                  });
                                case "CHAT_DELETED":
                                  return l === t.chatId
                                    ? Object.assign({}, a, { msglist: void 0 })
                                    : a;
                                case "HSM_BUTTON_PRESSED":
                                  return l !== t.msg.chatId
                                    ? a
                                    : ze(s, t, t.msg.id, a);
                                case "REMOVE_WITH_COMPOSE_BOX_OPENED":
                                  if (
                                    l === t.chatId &&
                                    s.withComposeBoxOpened
                                  ) {
                                    var D = Object.assign({}, s);
                                    return (
                                      delete D.withComposeBoxOpened,
                                      Object.assign({}, a, { msglist: D })
                                    );
                                  }
                                  return a;
                                case "MODIFIED_CONTACTS":
                                  var L = t.changed;
                                  return L && L.some((e) => e.chatId === l)
                                    ? (function (e, t) {
                                        var n = (0, b.u)(e);
                                        return (
                                          Je(n, t), (0, b.j)(t, { msglist: n })
                                        );
                                      })(s, a)
                                    : a;
                                case "OPENED_CHAT":
                                  if (l !== t.chatId) return a;
                                  if (null == s.opening) return a;
                                  var T = Object.assign({}, s);
                                  return (
                                    delete T.opening,
                                    Object.assign({}, a, { msglist: T })
                                  );
                                default:
                                  return a;
                              }
                            })(n, t)),
                            t
                          )),
                          t
                        )),
                        t
                      )),
                      t
                    )),
                    t
                  )),
                  t
                )),
                t
              )),
              t
            )),
            t
          )),
          t.type)
        ) {
          case "INCOMING_CALL_START":
            return Object.assign({}, n, { incomingCall: !0 });
          case "INCOMING_CALL_END":
            return Object.assign({}, n, { incomingCall: void 0 });
          case "ACTIVITY_START":
            return Object.assign({}, n, { activityInProgress: !0 });
          case "ACTIVITY_END":
            return Object.assign({}, n, { activityInProgress: void 0 });
          case "AVATARS_UPDATED":
            var r = (0, b.u)(n.avatars),
              a = t.changed,
              s = t.cleared;
            a &&
              a.forEach((e) => {
                var t = e.jid,
                  n = e.photoId;
                r[t] = { status: "loaded", photoId: n, jid: t };
              }),
              s &&
                s.forEach((e) => {
                  delete r[e];
                }),
              (n = Object.assign({}, n, { avatars: r }));
            break;
          case "AVATARS_STARTED_LOADING":
            var i = (0, b.u)(n.avatars);
            t.jids.forEach((e) => {
              i[e] = { status: "loading", photoId: null, jid: e };
            }),
              (n = Object.assign({}, n, { avatars: i }));
            break;
          case "PUSHNAME_UPDATED":
            n = Object.assign({}, n, {
              user: (0, b.j)(n.user, { pushname: t.pushname }),
            });
            break;
          case "ABOUT_UPDATED":
            n = Object.assign({}, n, {
              user: (0, b.j)(n.user, { about: t.content }),
            });
            break;
          case "CHAT_STATE":
            var o = (0, dt.p)(t.jid),
              l = (0, dt.q)(t.jid);
            if (o) {
              var c = Object.assign({}, n.groupChatStates),
                u = t.chatState,
                d = t.participant;
              "idle" !== u && d
                ? (c[o] = { chatState: u, participant: d })
                : delete c[o],
                (n = Object.assign({}, n, { groupChatStates: c }));
            } else if (l) {
              var h = Object.assign({}, n.oneToOneChatStates),
                p = t.chatState;
              "idle" === p ? delete h[l] : (h[l] = p),
                (n = Object.assign({}, n, { oneToOneChatStates: h }));
            }
            break;
          case "PRESENCE":
            var f = Object.assign({}, n.onlineOrLastSeen);
            (f[t.jid] = t.presence),
              (n = Object.assign({}, n, { onlineOrLastSeen: f }));
            break;
          case "GENERAL_SETTINGS":
            n = Object.assign({}, n, { settings: t.settings });
            break;
          case "SECURITY_NOTIFICATION_SETTINGS":
            n = Object.assign({}, n, { verboseSecurity: t.verboseSecurity });
            break;
          case "BLOCK_LIST":
            var g = {};
            t.blocked.forEach((e) => (g[e] = !0)),
              (n = Object.assign({}, n, { blocked: g }));
            break;
          case "SERVER_PROPS":
            n = Object.assign({}, n, { serverProps: t.serverProps });
            break;
          case "RECEIVED_MSGS":
          case "MSGS_DELETED":
            n = ut(n, t);
            break;
          case "SAVE_DRAFT":
          case "CLEAR_DRAFT":
          case "SAVE_DRAFT_QUOTE":
          case "CLEAR_DRAFT_QUOTE":
          case "SAVE_DRAFT_LINK":
          case "CLEAR_DRAFT_LINK":
            return ut(n, t);
          case "APP_MOUNTED":
            delete (n = Object.assign({}, n)).renderFast;
            break;
          case "KICKED":
            return Object.assign({}, n, { kickReason: t.reason });
          case "TWO_FACTOR_VERIFICATION":
            if (!n.user.twoFactor.isEnabled) return n;
            var m = {
              isEnabled: !0,
              hasEmail: n.user.twoFactor.hasEmail,
              reminder: t.success
                ? { shouldRemind: !1 }
                : { shouldRemind: !0, hasError: !0 },
            };
            return (0, b.r)(n.user.twoFactor, m)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: m }),
                });
          case "TWO_FACTOR_VERIFICATION_PENDING":
            if (!n.user.twoFactor.isEnabled) return n;
            var _ = {
              isEnabled: !0,
              hasEmail: n.user.twoFactor.hasEmail,
              reminder: { shouldRemind: !0, hasError: !1 },
            };
            return (0, b.r)(n.user.twoFactor, _)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: _ }),
                });
          case "TWO_FACTOR_DEACTIVATION":
            var S = { isEnabled: !1, reminder: { shouldRemind: !1 } };
            return (0, b.r)(n.user.twoFactor, S)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: S }),
                });
          case "TWO_FACTOR_ACTIVATION":
            var E = {
              isEnabled: !0,
              hasEmail: t.hasEmail,
              reminder: { shouldRemind: !1 },
            };
            return (0, b.r)(n.user.twoFactor, E)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: E }),
                });
          case "TWO_FACTOR_CHANGE_EMAIL":
            var y = n.user.twoFactor;
            return !y.isEnabled || (y.isEnabled && y.hasEmail)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, {
                    twoFactor: Object.assign({}, y, { hasEmail: !0 }),
                  }),
                });
          case "GROUP_INVITES_REVOKED":
            var I = n,
              O = I.sentGroupInviteRevokes,
              A = I.receivedGroupInviteRevokes,
              C = {},
              k = {},
              w = t.revokes,
              D = t.groupJid,
              L = t.outgoing;
            w.forEach((e) => {
              var t = e.user,
                n = {};
              if (((n[D] = e.expiresBefore), L)) {
                var r = null == O ? void 0 : O[t];
                C[t] = r ? Object.assign({}, r, n) : n;
              } else {
                var a = null == A ? void 0 : A[t];
                k[t] = a ? Object.assign({}, a, n) : n;
              }
            });
            var T = Object.keys(C).length > 0,
              N = Object.keys(k).length > 0;
            return T || N
              ? Object.assign({}, n, {
                  sentGroupInviteRevokes: T ? (0, b.j)(O, C) : O,
                  receivedGroupInviteRevokes: N ? (0, b.j)(A, k) : A,
                })
              : n;
          case "COMMS_DISCONNECTED":
            return Object.assign({}, n, {
              connected: t.online,
              commsConnected: !1,
            });
          case "COMMS_CONNECTED":
            return Object.assign({}, n, { connected: !0, commsConnected: !0 });
          case "DISCONNECTED":
            return Object.assign({}, n, { connected: n.commsConnected });
          case "CONNECTED":
            return Object.assign({}, n, { connected: !0 });
          case "STARRED_INDEX_FOUND":
            var M = (0, b.u)(n);
            return delete M.starredIndexMissing, M;
          case "PROFILE_PHOTO_SCREEN_CHANGED":
            return Object.assign({}, n, {
              profilePhotoScreenState: t.profilePhotoScreenState,
            });
          case "TOS_GATING_CHANGED":
            var G = t.tosAccepted;
            return n.tosAccepted !== G
              ? Object.assign({}, n, { tosAccepted: t.tosAccepted })
              : n;
        }
        return n;
      }
      function pt(e) {
        var t = (0, b.u)(e);
        return delete t.overlayId, t;
      }
      var ft = n(31),
        gt = n.n(ft),
        vt = n(118);
      function mt(e, t) {
        if ("BATCH_ACTION" === t.type) return t.actions.reduce(mt, e);
        var n = null;
        if ("BACK" === t.type)
          (n = (function (e) {
            switch (e.mode) {
              case "reg":
                return (function (e) {
                  if (null != e.contactUs)
                    return Object.assign({}, e, { contactUs: void 0 });
                  var t = e.reg;
                  switch (t.type) {
                    case "UNINITIALIZED":
                    case "BLOCKED":
                      return Object.assign({}, e, { shouldExit: !0 });
                    case "QUERYING_JIO_HEADERS":
                    case "CONFIRM_FOUND_PHONE_NUMBER":
                    case "REQUESTING_CODE":
                    case "TWO_FACTOR":
                    case "COUNTRY_SELECT":
                    case "ENTERING_PHONE_NUMBER":
                    case "VERIFYING":
                    case "SENDING_SMS":
                    case "SENDING_VOICE":
                    case "SENDING_EMAIL":
                    case "RESETTING":
                    case "INITIALIZING":
                    case "SENDING_SMS_BAN_APPEAL":
                    case "SENDING_VOICE_BAN_APPEAL":
                    case "REQUESTING_CODE_BAN_APPEAL":
                    case "BAN_APPEAL":
                    case "VERIFYING_SMS_BAN_APPEAL":
                    case "BLOCKED_BAN_APPEAL":
                    case "BLOCKED_BAN_APPEAL_PRE":
                      return (
                        __LOG__(
                          3
                        )`All those pages should handle back manually to ask for user confirmation`,
                        Object.assign({}, e, { shouldExit: !0 })
                      );
                    default:
                      return (0, gt.a)(t);
                  }
                })(e);
              case "main":
                return (function (e) {
                  var t = e.screens[e.screens.length - 1];
                  return t
                    ? "OUT_OF_SPACE_RECOVERY" === t.screen.type
                      ? Object.assign({}, e, { shouldExit: !0 })
                      : ht(e, {
                          type: "CLOSE_SCREEN",
                          id: t.id,
                          closeScreensAbove: !1,
                        })
                    : e.msglist
                    ? Object.assign({}, e, { msglist: void 0 })
                    : e.chatlist.archived
                    ? Object.assign({}, e, {
                        chatlist: Object.assign({}, e.chatlist, {
                          archived: !1,
                        }),
                      })
                    : Object.assign({}, e, { shouldExit: !0 });
                })(e);
              case "tempBanned":
                return Object.assign({}, e, { shouldExit: !0 });
              default:
                return e.mode, e;
            }
          })(e)).shouldExit &&
            (t.willCloseNaturally ? (0, vt.onAppClose)() : (0, vt.closeApp)());
        else if (
          "UI_JOB_SCHEDULED" === t.type ||
          "UI_JOB_UPDATED" === t.type ||
          "CLEAR_UI_JOB" === t.type ||
          "INIT_UI_JOBS" === t.type
        )
          n = (function (e, t) {
            switch (t.type) {
              case "CLEAR_UI_JOB":
                var n = t.jobName,
                  r = t.key,
                  a = e.jobs;
                if (!a || !a[n] || !a[n][r]) return e;
                if ("finished" !== a[n][r].step.status)
                  return (
                    __LOG__(3)`Clearing ui Job when not finished. Skipping`, e
                  );
                var s = Object.assign({}, a[n]);
                return (
                  delete s[r], (0, b.j)(e, { jobs: (0, b.j)(a, { [n]: s }) })
                );
              case "UI_JOB_SCHEDULED":
                var i = t.jobInfo,
                  o = t.jobId,
                  l = i.type,
                  c = i.args,
                  u = (0, E.c)(l, c);
                if (null == u)
                  return (
                    __LOG__(
                      3
                    )`Tried to report schedule a job ${l} without reporter`,
                    e
                  );
                var d = {
                  jobName: l,
                  key: u,
                  jobId: o,
                  jobIn: c,
                  step: { status: "scheduled" },
                };
                return (0, b.k)(e, { jobs: { [l]: { [u]: d } } });
              case "UI_JOB_UPDATED":
                var h,
                  p,
                  f = t.jobName,
                  g = t.status,
                  v = t.key;
                return null ==
                  (null == (h = e.jobs) || null == (p = h[f]) ? void 0 : p[v])
                  ? (__LOG__(
                      3
                    )`Job status updated without being scheduled first ${f}`,
                    e)
                  : (0, b.k)(e, { jobs: { [f]: { [v]: { step: g } } } });
              default:
                return t.type, (0, b.j)(e, { jobs: t.jobs });
            }
          })(e, t);
        else
          switch (e.mode) {
            case "main":
              n = ht(e, t);
              break;
            case "reg":
              n = (function (e, t) {
                switch (t.type) {
                  case "INCOMING_CALL_START":
                    return Object.assign({}, e, { incomingCall: !0 });
                  case "INCOMING_CALL_END":
                    return Object.assign({}, e, { incomingCall: void 0 });
                  case "ACTIVITY_START":
                    return Object.assign({}, e, { activityInProgress: !0 });
                  case "ACTIVITY_END":
                    return Object.assign({}, e, { activityInProgress: void 0 });
                  case "UPDATE_REGISTRATION":
                    return Object.assign({}, e, {
                      mode: "reg",
                      reg: t.newStore,
                    });
                  case "BACKEND_INITIALIZED":
                    return t.newStore;
                  case "OPEN_CONTACT_US":
                    return Object.assign({}, e, {
                      contactUs: {
                        phoneNumber: t.phoneNumber,
                        context: t.context,
                      },
                    });
                  case "OPEN_SPINNER":
                    return Object.assign({}, e, {
                      loading: { title: t.title, subtitle: t.subtitle },
                    });
                  case "CLOSE_SPINNER":
                    return Object.assign({}, e, { loading: void 0 });
                  case "REG_ALERT_SHOWN":
                    return Object.assign({}, e, { alert: void 0 });
                  default:
                    return e;
                }
              })(e, t);
              break;
            default:
              e.mode, (n = e);
          }
        return (function (e, t, n) {
          if ("OPEN_OVERLAY" === n.type)
            return null == n.overlayId
              ? pt(t)
              : (0, b.j)(t, { overlayId: n.overlayId });
          if (e === t) return t;
          if (e.mode !== t.mode) return pt(t);
          if ("main" === t.mode && "main" === e.mode) {
            var r,
              a,
              s,
              i,
              o = null == (r = t.screens[t.screens.length - 1]) ? void 0 : r.id,
              l = null == (a = e.screens[e.screens.length - 1]) ? void 0 : a.id,
              c = null == (s = t.msglist) ? void 0 : s.chat.id,
              u = null == (i = e.msglist) ? void 0 : i.chat.id;
            if (o !== l || c !== u) return pt(t);
          } else if (
            "reg" === t.mode &&
            "reg" === e.mode &&
            t.reg.type !== e.reg.type
          )
            return pt(t);
          return t;
        })(e, n, t);
      }
      var bt = "GAP",
        _t = class {
          constructor() {
            (this.au = new Map()),
              (this.av = new Map()),
              (this.contacts = {}),
              (this.avatars = {}),
              (this.aw = new Map()),
              (this.ax = {
                groups: null,
                orderedGroupIds: null,
                requestId: null,
              }),
              (this.ay = []);
          }
          msgFromId(e) {
            return this.au.get(e);
          }
          chatFromId(e) {
            var t = this.av.get(e);
            return t && t.chat;
          }
          chatFromMsgId(e) {
            var t = this.msgFromId(e);
            return t && this.chatFromId(t.chatId);
          }
          chatFromJid(e) {
            var t = null;
            return (
              this.av.forEach((n) => {
                var r = n.chat;
                r.jid === e && (t = r);
              }),
              t
            );
          }
          oneToOneChatFromJid(e) {
            var t = this.chatFromJid(e);
            return t && "ONE_TO_ONE" === t.type ? t : null;
          }
          groupChatFromJid(e) {
            var t = this.chatFromJid(e);
            return t && "GROUP" === t.type ? t : null;
          }
          groupsInCommon(e) {
            var t = [];
            return (
              this.av.forEach((n) => {
                var r = n.chat;
                "GROUP" === r.type &&
                  r.groupInfo.participants.includes(e) &&
                  t.push(r);
              }),
              t.sort((e, t) => t.sortBy - e.sortBy),
              t
            );
          }
          markChatAsRead(e, t, n) {
            var r = this.chatFromId(e);
            if (r) {
              var a = (0, b.j)(r.msgInfo, {
                unreadMsgCount: n,
                oldestUnread: t,
              });
              return {
                type: "DID_READ_CHAT",
                chat: this.updateOrAddChat((0, b.j)(r, { msgInfo: a })),
              };
            }
          }
          updateOrAddChat(e, t) {
            var n,
              r,
              a = this.av.get(e.id);
            return (
              a
                ? (a.chat = e)
                : (0 === e.msgInfo.msgCount || t
                    ? ((n = !0), (r = !0))
                    : ((n = !1), (r = !1)),
                  this.av.set(e.id, {
                    chat: e,
                    msgIds: [],
                    loadedNewest: n,
                    loadedOldest: r,
                  })),
              e
            );
          }
          handleMsgsReceived(e) {
            for (
              var t = e.newMsgs, n = e.changedMsgs, r = e.affectedChats, a = 0;
              a < r.length;
              a++
            )
              this.updateOrAddChat(r[a], !0);
            for (var s = 0; s < t.length; s++) {
              var i = t[s];
              this.au.set(i.id, i);
              var o = this.av.get(i.chatId);
              o
                ? (o.msgIds.unshift(i.id), (o.loadedNewest = !0))
                : __LOG__(
                    4
                  )`StorageCache.handleMsgsReceived msg from unrecognized chat ${i.chatId}`;
            }
            for (var l = 0; l < n.length; l++) {
              var c = n[l].msg;
              this.au.set(c.id, c);
            }
          }
          mediaUpdated(e) {
            var t = [],
              n = [];
            return (
              e.forEach((e) => {
                var r = this.updateMsg(e);
                r && (t.push(e), n.push(r));
              }),
              0 === t.length
                ? null
                : { type: "MEDIA_UPDATED", msgs: t, affectedChats: n }
            );
          }
          mediaStatusUpdated(e, t) {
            var n = this.msgFromId(e);
            if (!n) return null;
            var r = n.content;
            switch (r.type) {
              case "image":
              case "sticker":
              case "voice":
              case "video":
              case "gif":
              case "vcard":
              case "document":
                if ("vcard" === r.type && !r.isMMS)
                  return (
                    __LOG__(4)`mediaStatusUpdated for non-MMS VCard message}`,
                    null
                  );
                var a = Object.assign({}, n, {
                    content: (0, b.j)(r, { mediaStatus: t }),
                  }),
                  s = this.updateMsg(a);
                return (
                  s && { type: "MEDIA_UPDATED", msgs: [a], affectedChats: [s] }
                );
              case "rich_hsm":
                var i = r.richContent;
                if (!i)
                  return (
                    __LOG__(4)`mediaStatusUpdated for non-media HSM}`, null
                  );
                switch (i.type) {
                  case "image":
                  case "video":
                  case "document":
                    var o = Object.assign({}, n, {
                        content: Object.assign({}, r, {
                          richContent: (0, b.j)(i, { mediaStatus: t }),
                        }),
                      }),
                      l = this.updateMsg(o);
                    return (
                      l && {
                        type: "MEDIA_UPDATED",
                        msgs: [o],
                        affectedChats: [l],
                      }
                    );
                  default:
                    return (
                      __LOG__(
                        4
                      )`mediaStatusUpdated for non-media rich HSM ${i.type}`,
                      null
                    );
                }
              default:
                return (
                  __LOG__(4)`mediaStatusUpdated for non-media ${r.type}`, null
                );
            }
          }
          changeAck(e, t) {
            return (
              this.updateOrAddChat(e),
              this.msgFromId(t.id)
                ? (this.updateMsg(t), { type: "MSG_ACK", chat: e, ackedMsg: t })
                : { type: "MSG_ACK", chat: e }
            );
          }
          updateMsg(e) {
            var t = this.chatFromId(e.chatId);
            return t ? (this.au.set(e.id, e), t) : null;
          }
          msgRangeLoaded(e, t, n, r, a, s) {
            var i = this.av.get(e);
            if (i) {
              var o = i.msgIds,
                l = [];
              if (
                (n.forEach((e) => {
                  var t = e.id;
                  this.au.set(t, e), l.push(t);
                }),
                0 !== o.length)
              ) {
                var c = t;
                if ("beginning" === c) {
                  if (!i.loadedOldest)
                    return void __LOG__(
                      4
                    )`Anchor is at the beginning, but has not loaded oldest`;
                  c = o[o.length - 1];
                }
                for (
                  var u = !1, d = !1, h = [], p = [], f = !1, g = 0;
                  g < o.length;
                  g++
                )
                  f
                    ? h.push(o[g])
                    : o[g] === c
                    ? ((u = !0), (f = !0))
                    : o[g] === bt
                    ? f
                      ? h.push(o[g])
                      : p.push(o[g])
                    : o[g] < c
                    ? ((f = !0), h.push(o[g]))
                    : p.push(o[g]);
                for (var v = [], m = [], b = !1, _ = 0; _ < l.length; _++)
                  b
                    ? v.push(l[_])
                    : l[_] === c
                    ? ((d = !0), (b = !0))
                    : l[_] < c
                    ? ((b = !0), v.push(l[_]))
                    : m.push(l[_]);
                var S = null != r && r.end > 1,
                  E = null != r && r.start < 0,
                  y = i.loadedOldest || a || (S && v.length < 1),
                  I = i.loadedNewest || s || (E && m.length < 1);
                !S && v.length, !E && m.length;
                var O = h;
                S &&
                  (O = (function (e, t, n) {
                    var r = [...e];
                    r.length > 0 && r[0] !== bt && r.unshift(bt);
                    for (
                      var a = [], s = 0, i = 0;
                      s < r.length || i < t.length;

                    )
                      if (s >= r.length) a.push(t[i]), i++;
                      else if (i >= t.length)
                        (n && r[s] === bt) || a.push(r[s]), s++;
                      else {
                        var o = r[s];
                        r[s] === bt && (o = r[s + 1]),
                          t[i] > o
                            ? (a.push(t[i]), i++)
                            : o > t[i]
                            ? (a.push(o), r[s] === bt && s++, s++)
                            : (a.push(o), i++, r[s] === bt && s++, s++);
                      }
                    return a;
                  })(h, v, y));
                var A = p;
                E &&
                  (A = (function (e, t, n) {
                    var r = [...e];
                    r.length > 0 && r[r.length - 1] !== bt && r.push(bt);
                    for (
                      var a = [], s = r.length - 1, i = t.length - 1;
                      s >= 0 || i >= 0;

                    )
                      if (s < 0) a.unshift(t[i]), i--;
                      else if (i < 0)
                        (n && r[s] === bt) || a.unshift(r[s]), s--;
                      else {
                        var o = r[s];
                        r[s] === bt && (o = r[s - 1]),
                          t[i] < o
                            ? (a.unshift(t[i]), i--)
                            : o < t[i]
                            ? (a.unshift(o), r[s] === bt && s--, s--)
                            : (a.unshift(o), i--, r[s] === bt && s--, s--);
                      }
                    return a;
                  })(p, m, I));
                var C = [...A];
                !E &&
                  !u &&
                  A.length > 0 &&
                  A[A.length - 1] !== bt &&
                  C.push(bt),
                  (u || d) && C.push(c),
                  !S &&
                    !u &&
                    O.length > 0 &&
                    O[0] !== bt &&
                    C[C.length - 1] !== bt &&
                    C.push(bt),
                  C.push(...O),
                  (i.loadedOldest = y),
                  (i.loadedNewest = I),
                  (i.msgIds = C);
              } else
                0 === l.length
                  ? ((i.msgIds = []),
                    (i.loadedNewest = !0),
                    (i.loadedOldest = !0))
                  : ((i.msgIds = l),
                    (i.loadedNewest = s),
                    (i.loadedOldest = a));
            }
          }
          knownViewport(e, t, n) {
            var r = n.start,
              a = n.end,
              s = this.av.get(e);
            if (s) {
              var i = s.chat,
                o = s.msgIds,
                l = s.loadedOldest;
              if (0 !== i.msgInfo.msgCount) {
                var c = t;
                if ("beginning" === c) {
                  if (o.length < 1 || !l) return;
                  c = o[o.length - 1];
                }
                for (
                  var u = -1, d = -1, h = -1, p = 0;
                  -1 === h && p < o.length;
                  p++
                ) {
                  var f = o[p];
                  f === c
                    ? (u = p)
                    : f === bt && (-1 === u ? (d = p) : (h = p));
                }
                if (-1 !== u) {
                  for (
                    var g,
                      v = Math.max(u + r, d + 1),
                      m = Math.min(u + a, -1 === h ? o.length : h),
                      b = [],
                      _ = v;
                    _ < m;
                    _++
                  ) {
                    var S = o[_];
                    if ("GAP" === S) throw new Error("cannot-be-GAP");
                    var E = this.au.get(S);
                    if (null == E)
                      return (
                        __LOG__(
                          4
                        )`Failed to retrieve a msg that should have existed.`,
                        void SEND_LOGS(
                          "StorageCache.knownViewport: this._msgs.get returned undefined"
                        )
                      );
                    b.push(E);
                  }
                  if (0 !== b.length)
                    return {
                      newestIndex: s.loadedNewest
                        ? ((g = u), 0 === g ? 0 : -g)
                        : void 0,
                      oldestIndex: s.loadedOldest ? o.length - 1 - u : void 0,
                      range: { start: v - u, end: m - u },
                      msgs: b,
                    };
                  __LOG__(
                    3
                  )`Found index, but no meessages seen, report viewport as non existing`;
                }
              } else
                __LOG__(4)`StorageCache:knownViewport we should not be here`;
            }
          }
          updateFromAppInfo(e) {
            e.chats.forEach((e) => {
              this.updateOrAddChat(e);
            }),
              e.contacts.forEach((e) => {
                this.contacts[e.jid] = e;
              });
          }
          buildMainStore(e, t, n) {
            var r =
                null != n
                  ? {
                      current: {
                        peerJid: n,
                        state: "loading",
                        isCaller: !1,
                        isInterrupted: !1,
                        isLocallyMuted: !1,
                        duration: null,
                      },
                    }
                  : {},
              a = {
                mode: "main",
                user: e.user,
                chatlist: this.buildReduxStoreChatlist(),
                avatars: this.avatars,
                contacts: this.contacts,
                groupChatStates: {},
                oneToOneChatStates: {},
                onlineOrLastSeen: {},
                settings: e.settings,
                verboseSecurity: e.verboseSecurity,
                blocked: e.blocked,
                serverProps: e.serverProps,
                player: { active: null, currentTimes: {} },
                youtubePlayer: null,
                drafts: (0, ct.b)(),
                screens: [],
                sentGroupInviteRevokes: e.sentGroupInviteRevokes,
                receivedGroupInviteRevokes: e.receivedGroupInviteRevokes,
                calls: r,
                tab: { key: "chats" },
                connected: !le() || navigator.onLine,
                commsConnected: !1,
                isVoipAvailable: e.hasVoip && e.serverProps.voipCallEnabled,
                starredIndexMissing: !0,
                status: e.status,
                jobs: e.jobs,
                profilePhotoScreenState: e.profilePhotoScreenState,
                tosAccepted: e.tosAccepted,
                storageManager: {
                  lastStorageStatsTs: null,
                  currentStorageStats: {},
                },
              };
            return (
              t && (a.renderFast = !0),
              e.userNotice && (a.userNotice = e.userNotice),
              a
            );
          }
          buildReduxStoreChatlist() {
            var e = {},
              t = [];
            return (
              this.av.forEach((n) => {
                var r = n.chat;
                t.push(r.id), (e[r.id] = r);
              }),
              t.sort((t, n) => e[n].sortBy - e[t].sortBy),
              {
                orderedChatIds: t,
                chats: e,
                lastScrollPosition: null,
                archived: !1,
              }
            );
          }
          deleteMsgs(e, t, n) {
            this.updateOrAddChat(e, !1), this.az(e.id, t);
          }
          az(e, t) {
            var n = this.av.get(e);
            if (n) {
              var r = n.msgIds,
                a = new Set();
              t.forEach((e, t) => {
                this.au.delete(e) && a.add(e);
                var n = r.findIndex((t) => t === e);
                if (-1 !== n) {
                  var s = n > 0 && r[n - 1] === bt,
                    i = n < r.length - 1 && r[n + 1] === bt;
                  r.splice(n, s && i ? 2 : 1), a.add(e);
                }
              });
            }
          }
          deleteChat(e) {
            if (!this.av.has(e)) return null;
            var t = this.av.get(e);
            return (
              t && t.msgIds.forEach((e) => "GAP" !== e && this.au.delete(e)),
              this.av.delete(e),
              { type: "CHAT_DELETED", chatId: e }
            );
          }
          fullsizeAvatarLoaded(e, t) {
            return (
              this.aw.set(e, { status: "loaded", avatar: t }),
              { type: "FULLSIZE_AVATAR_LOADED", jid: e, avatar: t }
            );
          }
          fullsizeAvatar(e) {
            return this.aw.get(e);
          }
          clearFullsizeAvatar(e) {
            this.aw.delete(e);
          }
          loadingFullsizeAvatar(e) {
            return (
              this.aw.set(e, { status: "loading" }),
              { type: "FULLSIZE_AVATAR_STARTED_LOADING", jid: e }
            );
          }
          getCallLogGroups() {
            var e = this.ax;
            return { groups: e.groups, orderedGroupIds: e.orderedGroupIds };
          }
          callLogsLoading(e) {
            this.ax.requestId = e;
          }
          updateCallLogGroups(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            (null != n && this.ax.requestId !== n) ||
              ((this.ax.requestId = null),
              (this.ax.groups = e),
              (this.ax.orderedGroupIds = t));
          }
          pressHsmButtonByButtonIndex(e, t) {
            var n = this.msgFromId(e);
            if (!n) return null;
            var r = n.content;
            if ("rich_hsm" !== r.type) return null;
            var a = r.buttons;
            if (null == a) return null;
            if (t < 0 || t > a.length) return null;
            if ("quick_reply" !== a[t].type) return null;
            var s = a.map((e, n) =>
                n === t && "quick_reply" === e.type
                  ? Object.assign({}, e, { pressed: !0 })
                  : e
              ),
              i = Object.assign({}, n, {
                content: Object.assign({}, r, { buttons: s }),
              });
            return this.updateMsg(i), { type: "HSM_BUTTON_PRESSED", msg: i };
          }
          handleExpiredViewOnceMsgs(e, t) {
            var n = [];
            return (
              e.forEach((e) => {
                e.chatId === t
                  ? this.ay.push(e.id)
                  : (n.push(e), this.updateMsg(e));
              }),
              n
            );
          }
          clearExpiredViewOnceMsgs() {
            var e = [];
            return (
              this.ay.forEach((t) => {
                var n = this.msgFromId(t);
                if (
                  n &&
                  ("image" === n.content.type || "video" === n.content.type) &&
                  "active" === n.content.viewOnceState
                ) {
                  var r = Object.assign({}, n, {
                    content: (0, b.j)(n.content, { viewOnceState: "expired" }),
                  });
                  this.updateMsg(r), e.push(t);
                }
              }),
              (this.ay = []),
              e
            );
          }
        },
        St = n(342),
        Et = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        yt = {
          INIT: "@@redux/INIT" + Et(),
          REPLACE: "@@redux/REPLACE" + Et(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Et();
          },
        };
      function It(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function Ot(e, t, n) {
        var r;
        if (
          ("function" == typeof t && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
          );
        if (
          ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n)
            throw new Error("Expected the enhancer to be a function.");
          return n(Ot)(e, t);
        }
        if ("function" != typeof e)
          throw new Error("Expected the reducer to be a function.");
        var a = e,
          s = t,
          i = [],
          o = i,
          l = !1;
        function c() {
          o === i && (o = i.slice());
        }
        function u() {
          if (l)
            throw new Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
            );
          return s;
        }
        function d(e) {
          if ("function" != typeof e)
            throw new Error("Expected the listener to be a function.");
          if (l)
            throw new Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
            );
          var t = !0;
          return (
            c(),
            o.push(e),
            function () {
              if (t) {
                if (l)
                  throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                (t = !1), c();
                var n = o.indexOf(e);
                o.splice(n, 1), (i = null);
              }
            }
          );
        }
        function h(e) {
          if (!It(e))
            throw new Error(
              "Actions must be plain objects. Use custom middleware for async actions."
            );
          if (void 0 === e.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (l) throw new Error("Reducers may not dispatch actions.");
          try {
            (l = !0), (s = a(s, e));
          } finally {
            l = !1;
          }
          for (var t = (i = o), n = 0; n < t.length; n++) (0, t[n])();
          return e;
        }
        function p(e) {
          if ("function" != typeof e)
            throw new Error("Expected the nextReducer to be a function.");
          (a = e), h({ type: yt.REPLACE });
        }
        function f() {
          var e,
            t = d;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" != typeof e || null === e)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  e.next && e.next(u());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[St.a] = function () {
              return this;
            }),
            e
          );
        }
        return (
          h({ type: yt.INIT }),
          ((r = { dispatch: h, subscribe: d, getState: u, replaceReducer: p })[
            St.a
          ] = f),
          r
        );
      }
      function At(e, t, n) {
        return Ot(e, t, n);
      }
      var Ct = n(56),
        kt = n(310),
        wt = n(210),
        Dt = n(320),
        Lt = n(1),
        Tt = n(13),
        Nt = n(25),
        Mt = n(159),
        Gt = n(57);
      function Rt(e, t) {
        var n = t,
          r = (0, g.a)(e.getStoreState());
        if (r)
          if ((e.closeAllScreens(), "text/vcard" === n.type)) {
            var a = r.serverProps.maxParticipants;
            n.blobs.length > a &&
              ((0, u.e)({ title: 229, text: [a, 201] }),
              (n = { type: "text/vcard", blobs: n.blobs.slice(0, a) })),
              e.openScreen("SHARE_SCREEN", { data: n });
          } else
            "text/plain" === n.type
              ? (function (e, t) {
                  if (0 === t.blobs.length)
                    return (
                      __LOG__(
                        3
                      )`No blobs received when trying to openSharedPlainText`,
                      void SEND_LOGS("share-no-blobs")
                    );
                  e.spinUntilReady(
                    (0, b.h)(t.blobs[0]).then((t) => () => {
                      var n = new Nt.a(t),
                        r = n.readString(n.size()).trim();
                      0 !== r.length
                        ? e.openScreen("SHARE_TEXT_SCREEN", { text: r })
                        : __LOG__(3)`openSharedPlainText no text to send`;
                    }),
                    844,
                    788
                  );
                })(e, n)
              : "text/sms" === n.type
              ? (function (e, t) {
                  if (null == t.number)
                    e.openScreen("SHARE_TEXT_SCREEN", { text: t.body || "" });
                  else {
                    var n = t.number,
                      r = (0, g.a)(e.getStoreState());
                    if (!r) return;
                    var a = (0, b.x)(r.contacts).find(
                      (e) => (null == e ? void 0 : e.phonebookPhone) === n
                    );
                    if (a && !a.noWhatsApp)
                      return void (0, ge.a)(
                        e,
                        a.jid,
                        "newest",
                        { text: t.body || "" },
                        "withComposeBoxOpened"
                      );
                    if (!(0, Gt.e)(n))
                      return void (0, u.e)({ text: [(0, Z.f)(n), 204] });
                    var s = e.sendAndReceive("backend", "contactQuerySync", {
                      rawPhoneNumber: n,
                    });
                    e.spinUntilReadyOverlay(
                      s.then((r) => () => {
                        if ("not-found" === r)
                          (0, u.e)({
                            text: [
                              (0, Lt.b)(
                                2,
                                Mt.b,
                                { phone: n, className: "Wl" },
                                "phone"
                              ),
                              206,
                            ],
                          });
                        else if ("offline" === r)
                          (0, u.e)({
                            title: 842,
                            text: [
                              (0, Lt.b)(
                                2,
                                Mt.b,
                                { phone: n, className: "Wl" },
                                "phone"
                              ),
                              205,
                            ],
                          });
                        else if ("invalid" === r)
                          (0, u.e)({ text: [(0, Z.f)(n), 204] });
                        else {
                          var a = null;
                          t.body && (a = { text: t.body }),
                            (0, ge.a)(e, r, "newest", a);
                        }
                        return "dontClose";
                      }),
                      { title: 843 }
                    );
                  }
                })(e, n)
              : (n.type,
                n.blobs.length > 1
                  ? e.openScreen("SHARE_SCREEN", { data: n })
                  : 1 === n.blobs.length
                  ? "video/*" === n.type
                    ? e.openScreen("SEND_MEDIA", {
                        from: "externalShare",
                        media: { type: "video", file: n.blobs[0] },
                        defaultCaption: "",
                        actionAfterSending: { type: "unknown" },
                      })
                    : (n.type,
                      e.openScreen("SEND_MEDIA", {
                        from: "externalShare",
                        media: { type: "image", blob: n.blobs[0] },
                        defaultCaption: "",
                        actionAfterSending: { type: "unknown" },
                      }))
                  : (__LOG__(
                      3
                    )`No blobs received when trying to open share screen`,
                    SEND_LOGS("share-no-blobs")));
      }
      function jt(e, t) {
        if ((0, g.a)(e.getStoreState())) {
          var n;
          if ("share" === t.name) (n = 3), Rt(e, t.data);
          else if ("new" === t.name && "websms/sms" === t.data.type)
            (n = 3),
              Rt(e, {
                type: "text/sms",
                body: t.data.body,
                number: t.data.number,
              });
          else if ("view" === t.name || "whatsapp_open" === t.name) {
            var r = t.data;
            if ("url" === r.type) {
              var a = r.url;
              if (null == a)
                return (
                  __LOG__(4)`Got an incoming view web activity without URL`,
                  void SEND_LOGS("no-url-view-activity")
                );
              var s = a.toLowerCase();
              if (s.startsWith(wt.a)) {
                var i = (0, wt.b)(a);
                if (null == i) return void (0, d.a)(391);
                (0, Dt.a)(e, i, void 0, !1),
                  WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 8]);
              } else if (s.startsWith(p.T)) {
                var o = (0, V.i)(a);
                if (null == o)
                  return (
                    __LOG__(
                      4
                    )`The URL was incorrect but started by the right wa.me url`,
                    void SEND_LOGS("bad-wame-url")
                  );
                (0, ue.f)(a, e)
                  ? ((n = 1),
                    WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 27]))
                  : ((0, wt.c)(e, o),
                    (n = 2),
                    WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 2]));
              } else
                s.startsWith(p.U) &&
                  (0, ue.f)(a, e) &&
                  ((n = 1),
                  WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 27]));
            }
          }
          return n;
        }
      }
      var xt = n(41);
      function Pt(e, t) {
        var n = null;
        switch (e.action) {
          case "openChat":
            var r = e.chatId;
            if ("number" != typeof r)
              return void __LOG__(4)`Bad openChat Notification ${e}`;
            (n = 2), (0, ge.c)(t, r, "unread");
            break;
          case xt.h:
            t.openScreen("REQUEST_ACCOUNT_INFO");
            break;
          case "newReaction":
            var a,
              s = e.chatId;
            if (
              ((n = 2),
              "ONE_TO_ONE" === e.type
                ? (0, b.w)(e.reactions).forEach((e) => {
                    (!a || e < a) && (a = e);
                  })
                : (0, b.x)(e.reactions).forEach((e) => {
                    (0, b.w)(e).forEach((e) => {
                      (!a || e < a) && (a = e);
                    });
                  }),
              !a)
            )
              return void __LOG__(4)`No msg in reaction`;
            (0, ge.c)(t, s, a);
            break;
          case "handleCall":
            "accept" === e.option
              ? t.acceptVoipCallFromNotification(e.jid)
              : t.rejectVoipCall();
            break;
          case "missedCall":
            t.openTab("calls");
            break;
          case xt.a:
            break;
          default:
            __LOG__(4)`Unrecognized notification ${e}`;
        }
        return n;
      }
      var Ut,
        Ft,
        Bt = n(391),
        Vt = n(359),
        Jt = n(54),
        zt = n(140),
        Ht = n(251),
        $t = n(240),
        Wt = n(55),
        Kt = n(147);
      function Yt(e) {
        return (
          null == Ut &&
            (Ut = Promise.all([n.e(11), n.e(12), n.e(180)])
              .then(n.bind(null, 648))
              .then((e) => e.default)),
          (0, Lt.b)(2, Kt.a, {
            props: e,
            promise: Ut,
            render: (e, t) => (0, Lt.i)((0, Lt.b)(2, t, Object.assign({}, e))),
          })
        );
      }
      function qt(e) {
        return (
          null == Ft &&
            (Ft = Promise.all([n.e(12), n.e(160)])
              .then(n.bind(null, 653))
              .then((e) => e.AppPlayer)),
          (0, Lt.b)(2, Kt.a, {
            props: e,
            promise: Ft,
            render: (e, t) => (0, Lt.i)((0, Lt.b)(2, t, Object.assign({}, e))),
          })
        );
      }
      var Xt = n(272),
        Qt = n(332),
        Zt = n(146),
        en = n(18),
        tn = n(186),
        nn = n(231),
        rn = n(112),
        an = n(76),
        sn = n(409),
        on = n(273),
        ln = n(286),
        cn = n(59),
        un = n(32);
      function dn(e, t) {
        var n = t.job;
        (0, pe.b)(e, n),
          e.createGroup(
            n.jobIn.title,
            n.jobIn.participants,
            n.jobIn.blob,
            n.jobIn.timestamp,
            n.jobIn.expiration
          );
      }
      var hn = n(180);
      function pn(e) {
        return null == e || "chat" !== e.type ? null : e.value;
      }
      function fn(e) {
        return null == e || "archived-chat" !== e.type ? null : e.value;
      }
      function gn(e) {
        return null == e || "contact" !== e.type ? null : e.value;
      }
      var vn = (0, hn.e)((e, t, n, r, a) => {
          var s = [];
          null != a &&
            "banner" === a.type &&
            s.push({
              type: "user-notice-banner",
              id: "user-notice-banner",
              banner: a,
            });
          var i,
            o = [];
          if (n) {
            for (var l in n) {
              var c,
                u,
                d = (0, cn.e)(l);
              if (null != d) {
                var h = n[d].step;
                ("running" === h.status ||
                  ("finished" === h.status &&
                    "no-network" ===
                      (null == (c = h.result) || null == (u = c.error)
                        ? void 0
                        : u.reason))) &&
                  (o.push(d),
                  s.push({
                    type: "chat",
                    value:
                      ((i = n[d]),
                      {
                        type: "PENDING_GROUP",
                        msgInfo: { unreadMsgCount: 0 },
                        groupInfo: {
                          title: i.jobIn.title,
                          groupPicture: i.jobIn.blob,
                        },
                        job: i,
                      }),
                    id: d,
                  }));
              } else
                __LOG__(4)`Unable to case pending group id`,
                  SEND_LOGS("render-chat-list-pending-group-id");
            }
            o.sort((e, t) => n[t].jobIn.timestamp - n[e].jobIn.timestamp);
          }
          return (
            e.forEach((e) => {
              var n = t[e];
              !n ||
                n.archived ||
                n.notStarted ||
                s.push({ type: "chat", value: n, id: e });
            }),
            (0, un.k)(r, (e) => {
              if (null != e.chatId) {
                var n = t[e.chatId];
                return n && "ONE_TO_ONE" === n.type && null != n.notStarted;
              }
              return !0;
            }).forEach((e) => {
              s.push({ type: "contact", value: e, id: e.jid });
            }),
            e.forEach((e) => {
              var n = t[e];
              n &&
                n.archived &&
                s.push({ type: "archived-chat", value: n, id: e });
            }),
            s
          );
        }),
        mn = (0, hn.b)((e, t) => {
          var n = [];
          return (
            e.forEach((e) => {
              var r = t[e];
              r && r.archived && n.push({ type: "chat", value: r, id: e });
            }),
            n
          );
        }),
        bn = n(22),
        _n = n.n(bn),
        Sn = n(40),
        En = n(323),
        yn = n(257),
        In = n(298),
        On = n(350);
      function An(e, t) {
        t.add(733, () => {
          (function (e) {
            e.openScreen("SETTINGS");
          })(e);
        });
      }
      function Cn(e, t, n) {
        (0, te.k)(n)
          ? t.add(954, e.muteChat, n.id, null)
          : t.childMenu((0, In.a)(e, n.id));
      }
      function kn(e, t, n) {
        t.add(
          n.archived ? 125 : 122,
          e.setChatArchivedState,
          n.id,
          !n.archived
        );
      }
      function wn(e, t, n) {
        0 === n.msgInfo.unreadMsgCount
          ? t.add(124, e.markChatAsUnread, n.id)
          : t.add(123, e.markChatAsRead, n.id);
      }
      var Dn = n(69),
        Ln = n(283),
        Tn = n(188),
        Nn = n(393),
        Mn = n(346),
        Gn = n(20);
      function Rn(e) {
        var t = e.count;
        return (0, Lt.f)(1, "div", "IH", t > 0 && (0, Gn.i)(t), 0);
      }
      var jn = n(108),
        xn = n(394),
        Pn = n(200),
        Un = n(379),
        Fn = n(287),
        Bn = (e) => {
          var t = e.className;
          return (0, Lt.f)(
            32,
            "svg",
            t,
            (0, Lt.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d:
                "m8.126 6.025 2.555-2.654a.217.217 0 01.246-.054.233.233 0 01.137.218V9.1l3.848 3.998a.318.318 0 010 .441l-.353.367a.295.295 0 01-.425 0l-.985-1.023-5.987-6.281-2.601-2.703a.321.321 0 010-.441l.352-.366a.295.295 0 01.426 0l2.787 2.933zm-2.078.624 5.016 5.239v2.876a.232.232 0 01-.138.219.217.217 0 01-.247-.056l-3.134-3.256h-2.79c-.417 0-.755-.352-.755-.786v-3.45c0-.433.336-.785.753-.786h1.295z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        },
        Vn = n(255),
        Jn = (e) => {
          var t = e.className;
          return (0, Lt.f)(
            32,
            "svg",
            t,
            (0, Lt.f)(32, "path", null, null, 1, {
              d:
                "m9.2 14.6.1-.4v-.6a9 9 0 000-.2V13l.1-1.5.3-.8a2.5 2.5 0 011.1-1.1 2.8 2.8 0 01.8-.3h2a3.6 3.6 0 00.6 0 2 2 0 00.5-.2 4.8 4.8 0 01-1.4 2.4 144 144 0 01-2 2 4.8 4.8 0 01-2.1 1zm-1.8.2h-.5a9 9 0 01-1.9-.1 4.7 4.7 0 01-1.3-.4 4.4 4.4 0 01-1.1-.8 4.4 4.4 0 01-.8-1.1 4.6 4.6 0 01-.5-1.3 8.8 8.8 0 01-.1-1.4 29.2 29.2 0 010-.6V6.3A8.7 8.7 0 011.3 5c.1-.5.2-1 .5-1.3a4.4 4.4 0 011.9-2A4.7 4.7 0 015 1.3a9 9 0 011.4-.1h1.9a63.8 63.8 0 012.7.1c.5.1 1 .2 1.3.4a4.4 4.4 0 012 2l.4 1.3a8.6 8.6 0 01.1 2v.2a2.6 2.6 0 010 .3.9.9 0 01-.5.7 1 1 0 01-.3.1 2.7 2.7 0 01-.4 0h-.5l-1.7.1a3.8 3.8 0 00-1 .4 3.5 3.5 0 00-1 .6 3.5 3.5 0 00-1 2v2a7.4 7.4 0 010 .6.9.9 0 01-.6.7 1 1 0 01-.3 0 1.3 1.3 0 01-.1.1z",
            }),
            2,
            { viewBox: "0 0 16 16" }
          );
        },
        zn = n(333),
        Hn = n(370),
        $n = n(371),
        Wn = n(372),
        Kn = n(365),
        Yn = n(373),
        qn = n(395),
        Xn = n(334),
        Qn = n(300),
        Zn = n(299),
        er = n(281),
        tr = "Gr",
        nr = "Gu GG GC GI GE",
        rr = n(258);
      function ar(e, t, n) {
        try {
          var r = { styles: t || [], parsedPhoneNumbers: null, allEmojis: !1 };
          return (0, Z.d)(e, r);
        } catch (t) {
          return e;
        }
      }
      function sr(e) {
        var t,
          n = e.preview,
          r = n.content,
          a = n.meta,
          s = null,
          i = null,
          o = !1;
        switch (r.type) {
          case "gp2":
            var l = (0, Tn.b)(a, r, e.contacts);
            return (0, Lt.b)(2, en.b, { l10n: l });
          case "biz":
            var c = (0, dt.q)(e.chatJid);
            if (!c)
              return (
                __LOG__(4)`Group jid received for biz message`,
                SEND_LOGS("biz-message-in-group"),
                null
              );
            var u = (0, Nn.b)(r, c, e.contacts).l10n;
            return (0, Lt.b)(2, en.b, { l10n: u });
          case "contact_block_change":
            var d = (0, Tn.a)(r);
            return (0, Lt.b)(2, en.b, { l10n: d });
          case "futureproof":
            "document" === r.subtype
              ? ((s = (0, Lt.b)(2, Qn.a, { className: tr })),
                (i = (0, Lt.b)(2, en.b, { l10n: 240 })))
              : (i = (0, Lt.b)(2, en.b, {
                  l10n: (0, we.c)(r.subtype),
                  className: "Gy",
                }));
            break;
          case "revoked":
            (s = (0, Lt.b)(2, Wn.a, { className: tr })),
              (i = a.fromMe
                ? (0, Lt.b)(2, en.b, { l10n: 674, className: "Gz" })
                : (0, Lt.b)(2, en.b, { l10n: 673, className: "Gz" }));
            break;
          case "vcard":
            var h = (function (e) {
              return {
                icon: (0, Lt.b)(2, $n.a, { className: tr }),
                text: (0, Un.a)(e.total, e.displayNames, Pn.a, !0),
              };
            })(r);
            (s = h.icon), (i = h.text);
            break;
          case "text":
            i = ar(r.text, e.preview.formatting);
            break;
          case "image":
            (s = (0, Lt.b)(2, Vn.a, { className: tr })),
              (i =
                null == r.caption || "" === r.caption
                  ? (0, Lt.b)(2, en.b, { l10n: 586 })
                  : ar(r.caption, e.preview.formatting));
            break;
          case "viewOnceImage":
            (s = (0, rr.c)(r.viewOnceState, tr)),
              (i = (0, rr.d)(r.viewOnceState, "HA"));
            break;
          case "sticker":
            (s = (0, Lt.b)(2, Jn, { className: tr })),
              (i = (0, Lt.b)(2, en.b, { l10n: 886 }));
            break;
          case "video":
            (s = (0, Lt.b)(2, zn.a, { className: tr })),
              (i =
                null == r.caption || "" === r.caption
                  ? (0, Lt.b)(2, en.b, { l10n: 964 })
                  : ar(r.caption, e.preview.formatting));
            break;
          case "viewOnceVideo":
            (s = (0, rr.c)(r.viewOnceState, tr)),
              (i = (0, rr.e)(r.viewOnceState, "HA"));
            break;
          case "gif":
            (s = (0, Lt.b)(2, Hn.a, { className: tr })),
              (i =
                null == r.caption || "" === r.caption
                  ? (0, Lt.b)(2, en.b, { l10n: 337 })
                  : ar(r.caption, e.preview.formatting));
            break;
          case "voice":
            r.isPtt
              ? ((s = (0, Lt.b)(2, Kn.a, {
                  className: (0, _n.a)(
                    tr,
                    a.fromMe && a.ack === f.a.PLAYED && "Gt"
                  ),
                })),
                (i = ar((0, Dn.b)(r.duration))))
              : ((s = (0, Lt.b)(2, Yn.a, { className: tr })),
                (i = ar((0, Dn.b)(r.duration))));
            break;
          case "location":
            var p = r.name ? (0, jn.c)(r.name) : null,
              g = r.address ? (0, jn.c)(r.address) : null;
            (s = (0, Lt.b)(2, Xn.a, { className: tr })),
              (i =
                p && g
                  ? (0, Gn.h)([p, g])
                  : p || g || (0, Lt.b)(2, en.b, { l10n: 481 }));
            break;
          case "group_invite":
            (s = (0, Lt.b)(2, qn.a, { className: tr })),
              (i = (0, Lt.b)(2, en.b, { l10n: 464 }));
            break;
          case "rich_hsm":
            switch (r.subtype) {
              case "image":
                s = (0, Lt.b)(2, Vn.a, { className: tr });
                break;
              case "location":
                s = (0, Lt.b)(2, Xn.a, { className: tr });
                break;
              case "video":
                s = (0, Lt.b)(2, zn.a, { className: tr });
                break;
              case "document":
                s = (0, Lt.b)(2, Qn.a, { className: tr });
                break;
              default:
                r.subtype;
            }
            i = ar(r.text, e.preview.formatting);
            break;
          case "hsm_button_reply":
            i = ar(r.text, e.preview.formatting);
            break;
          case "document":
            var v = (function (e) {
              var t = (0, Fn.a)(e, "shouldExcludeFileExtension");
              return { icon: (0, Lt.b)(2, Qn.a, { className: tr }), text: t };
            })(r);
            (s = v.icon), (i = v.text);
            break;
          case "ciphertext":
          case "placeholder":
            i = (0, Lt.b)(2, en.b, { l10n: 133 });
            break;
          case "ephemeral_change":
            var m = (0, Tn.e)(a, e.contacts, r.ephemeralExpiration);
            (i = (0, Lt.b)(2, en.b, { l10n: m })), (o = !0);
            break;
          case "ephemeral_change_fail":
            var b = a.author;
            if (null == b) return null;
            var _ = (0, Tn.d)(e.contacts, b, r.expiration);
            (i = (0, Lt.b)(2, en.b, { l10n: _ })), (o = !0);
            break;
          case "default-disappearing-mode":
            if ((0, ce.a)("disappearing_mode")) {
              var S = (0, dt.q)(e.chatJid);
              if (!S)
                return (
                  __LOG__(
                    4
                  )`Group jid received for default disappearing mode message`,
                  SEND_LOGS("default-disappearing-mode-message-in-group"),
                  null
                );
              var E = r.ephemeralExpiration,
                y = r.initiator,
                I = (0, Tn.c)(S, e.contacts, E, y);
              i = (0, Lt.b)(2, en.b, { l10n: I });
            } else {
              var O = (0, Tn.e)(a, e.contacts, r.ephemeralExpiration);
              i = (0, Lt.b)(2, en.b, { l10n: O });
            }
            o = !0;
            break;
          case "expired":
            return (0, Lt.b)(2, en.b, { l10n: 287, className: "Gx" });
          default:
            return r.type, null;
        }
        if (a.fromMe) {
          var A =
            !o &&
            ("revoked" !== r.type || (0, st.f)(a.ack) || a.ack === f.a.CLOCK);
          t = (0, Lt.c)(
            [
              A
                ? (0, Lt.b)(2, Ln.a, {
                    ack: a.ack,
                    className: (0, _n.a)("Gq", (0, st.h)(a.ack) && "HG"),
                  })
                : null,
              s,
              i,
            ],
            0
          );
        } else {
          if (!a.author)
            return __LOG__(2)`Authorless non-admin message in preview`, i;
          var C = a.author,
            k = (0, Lt.c)([s, i], 0);
          t = (0, dt.p)(e.chatJid)
            ? (0, Lt.b)(2, en.b, {
                l10n: [
                  (0, Lt.b)(
                    2,
                    un.a,
                    { jid: C, contacts: e.contacts, prefer: "short" },
                    "author"
                  ),
                  (0, Lt.f)(1, "span", null, k, 0, { dir: "auto" }, "message"),
                  9,
                ],
              })
            : k;
        }
        return t;
      }
      var ir = (0, Lt.f)(1, "div", nr, Mn.a, 0),
        or = class extends Tt.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.preview !== e.preview ||
                n.chatJid !== e.chatJid ||
                n.contacts !== e.contacts)
            );
          }
          render() {
            return this.props.preview
              ? (0, Lt.f)(
                  1,
                  "div",
                  nr,
                  (0, Lt.b)(2, sr, {
                    preview: this.props.preview,
                    contacts: this.props.contacts,
                    chatJid: this.props.chatJid,
                  }),
                  2
                )
              : ir;
          }
        };
      function lr(e) {
        return (0, te.k)(e.chat) ? (0, Lt.b)(2, Bn, { className: "HB" }) : null;
      }
      function cr(e) {
        var t = e.chat,
          n = e.contacts,
          r = e.selected,
          a = (function (e) {
            var t = (function (e) {
                return 0 === e.msgInfo.unreadMsgCount
                  ? null
                  : (0, Lt.f)(
                      1,
                      "div",
                      "HC",
                      (0, Lt.b)(2, Rn, { count: e.msgInfo.unreadMsgCount }),
                      2
                    );
              })(e),
              n = (function (e) {
                return "GROUP" !== e.type ||
                  e.archived ||
                  null == e.importantMsgCount ||
                  e.importantMsgCount <= 0 ||
                  !(0, ce.a)("important_messages")
                  ? null
                  : (0, Lt.f)(1, "div", "HD", "@", 16);
              })(e),
              r = (function (e) {
                return e.archived
                  ? (0, Lt.f)(
                      1,
                      "div",
                      null,
                      (0, Lt.b)(2, en.b, { l10n: 23, className: "HE IH" }),
                      2
                    )
                  : null;
              })(e),
              a = (function (e) {
                return (0, te.k)(e)
                  ? (0, Lt.b)(2, xn.a, {
                      chat: e,
                      children: (0, Lt.b)(2, lr, { chat: e }),
                    })
                  : null;
              })(e);
            return t || r || a
              ? (0, Lt.f)(1, "div", "Gv", [t, n, r, a], 0)
              : null;
          })(t);
        return (0, Lt.f)(
          1,
          "div",
          (0, _n.a)("Gp", r && "Gs"),
          [
            (0, Lt.b)(2, or, {
              preview: t.msgInfo.preview,
              chatJid: t.jid,
              contacts: n,
            }),
            a,
          ],
          0
        );
      }
      function ur(e) {
        var t,
          n,
          r = e.chat,
          a = e.selected;
        return (
          "finished" !== r.job.step.status
            ? ((n = 581), (t = (0, Lt.b)(2, Zn.a, { className: "HF" })))
            : ((n = 579), (t = (0, Lt.b)(2, er.a, { className: "Gw" }))),
          (0, Lt.f)(
            1,
            "div",
            (0, _n.a)("Gp", a && "Gs"),
            [
              (0, Lt.f)(1, "div", nr, (0, Lt.b)(2, en.b, { l10n: n }), 2),
              (0, Lt.f)(1, "div", "Gv", t, 0),
            ],
            4
          )
        );
      }
      var dr = n(413),
        hr = n(172);
      function pr(e, t, n, r, a, s) {
        return (0, Lt.f)(
          1,
          "div",
          (0, _n.a)("GN", r && "GP"),
          [
            (0, Lt.f)(1, "div", "GO GF GC GI GE", e, 0),
            s && (0, Lt.b)(2, hr.a, { className: "GS" }),
            null == a || n
              ? null
              : (0, Lt.b)(2, dr.a, {
                  ts: a,
                  className: (0, _n.a)("GQ", t && "GR"),
                }),
          ],
          0
        );
      }
      function fr(e) {
        var t,
          n = e.selected,
          r = e.chat,
          a = e.renderFast,
          s = e.contacts,
          i = null == (t = r.msgInfo.preview) ? void 0 : t.ts;
        return pr(
          (0, Lt.b)(2, un.a, { jid: r.jid, contacts: s }),
          r.msgInfo.unreadMsgCount > 0,
          a,
          n,
          i
        );
      }
      function gr(e) {
        var t,
          n = e.selected,
          r = e.chat,
          a = e.renderFast,
          s = null == (t = r.msgInfo.preview) ? void 0 : t.ts,
          i = r.msgInfo.unreadMsgCount > 0;
        return pr((0, Z.b)(r.groupInfo.title), i, a, n, s, r.groupInfo.support);
      }
      function vr(e) {
        var t = e.selected,
          n = e.chat,
          r = e.renderFast;
        return pr(
          (0, Z.b)(n.groupInfo.title),
          n.msgInfo.unreadMsgCount > 0,
          r,
          t,
          null
        );
      }
      var mr = n(160),
        br = n(103),
        _r = n(321),
        Sr = "FN GG GC GI GE FM",
        Er = "FO FN GG GC GI GE FM",
        yr = "FP GK";
      function Ir(e, t, n, r) {
        return (0, Lt.b)(2, rn.k, {
          selected: e,
          className: "FJ",
          children: [
            t,
            (0, Lt.f)(1, "div", (0, _n.a)("FK", e && "FL"), [n, r], 0),
          ],
        });
      }
      var Or = class extends Ct.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Ik = (e) => {
                var t = this.props,
                  n = t.chat,
                  r = t.contacts,
                  a = new Zt.a();
                (function (e, t, n, r) {
                  Cn(e, t, n),
                    t.add(null == (0, B.b)(n, r) ? 127 : 126, () => {
                      (0, On.a)(e, n.jid);
                    }),
                    t.add(135, () => {
                      (function (e, t, n) {
                        var r = [
                            { key: "delete_media", label: 136, checked: !1 },
                          ],
                          a = t.msgInfo.starredMsgCount;
                        a &&
                          a > 0 &&
                          !e.isStarredIndexMissing() &&
                          r.push({
                            key: "delete_starred",
                            label: 137,
                            checked: !1,
                          }),
                          (0, u.k)({
                            title: [(0, un.e)(n, t.jid), 34],
                            save: 763,
                            centerKeys: { on: 818, off: 770 },
                            defaultItems: r,
                            onSave: (n) => {
                              var r = c()(n, 2),
                                a = r[0],
                                s = r[1];
                              return e.clearChat(
                                t.id,
                                a.checked
                                  ? "deleteMediaFromPhoneStorage"
                                  : "retainMediaInPhoneStorage",
                                null == s || s.checked
                                  ? "deleteStarredMessages"
                                  : "retainStarredMessages"
                              );
                            },
                          });
                      })(e, n, r);
                    }),
                    t.add(130, () => {
                      (function (e, t, n) {
                        (0, u.k)({
                          title: [(0, un.e)(n, t.jid), 41],
                          save: 769,
                          centerKeys: { on: 818, off: 770 },
                          defaultItems: [
                            { key: "delete_media", label: 136, checked: !1 },
                          ],
                          onSave: (n) => {
                            var r = c()(n, 1)[0];
                            return e.deleteChat(
                              t.id,
                              !1,
                              r.checked
                                ? "deleteMediaFromPhoneStorage"
                                : "retainMediaInPhoneStorage"
                            );
                          },
                        });
                      })(e, n, r);
                    }),
                    kn(e, t, n),
                    wn(e, t, n),
                    An(e, t);
                })(e, a, n, r),
                  (0, u.j)(a);
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.blocked !== e.blocked ||
                n.chat !== e.chat ||
                n.contacts !== e.contacts ||
                n.selected !== e.selected ||
                n.renderFast !== e.renderFast ||
                n.isVoipAvailable !== e.isVoipAvailable)
            );
          }
          addSoftKeys(e, t) {
            var n = this.props,
              r = n.blocked,
              a = n.chat,
              s = n.contacts,
              i = n.isVoipAvailable;
            if (
              (e.setRightOptions(this.Ik),
              e.setCenterLabel(797, () => {
                (0, ge.c)(t, a.id, "unread");
              }),
              i)
            ) {
              var o = a.jid,
                l = !!r[o];
              e.setOnCall(() => (0, En.a)((0, Sn.c)(o, s), t, l, "chatList"));
            }
          }
          render() {
            var e = this.props,
              t = e.chat,
              n = e.contacts,
              r = e.selected,
              a = e.renderFast;
            return Ir(
              r,
              (0, Lt.b)(2, br.c, {
                className: yr,
                jid: t.jid,
                ephemeral: "ONE_TO_ONE",
              }),
              (0, Lt.b)(2, fr, {
                selected: r,
                chat: t,
                contacts: n,
                renderFast: a,
              }),
              (0, Lt.b)(2, mr.b, {
                chat: t,
                selected: r,
                className: r ? Er : Sr,
                WhileIdle: cr,
              })
            );
          }
        },
        Ar = class extends Ct.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Ik = (e) => {
                var t = this.props,
                  n = t.chat,
                  r = t.connected,
                  a = new Zt.a();
                (function (e, t, n, r) {
                  Cn(e, t, n),
                    t.add(128, () => (0, yn.d)(e, n)),
                    t.add(135, () => {
                      (0, yn.a)(n, e);
                    }),
                    n.groupInfo.isInGroup
                      ? t.add(291, () => {
                          (function (e, t, n) {
                            (0, yn.c)(t, n, e);
                          })(e, n, r);
                        })
                      : t.add(769, () => {
                          (function (e, t) {
                            (0, yn.b)(t, e);
                          })(e, n);
                        }),
                    kn(e, t, n),
                    wn(e, t, n),
                    An(e, t);
                })(e, a, n, r),
                  (0, u.j)(a);
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.chat !== e.chat ||
                n.selected !== e.selected ||
                n.connected !== e.connected ||
                n.renderFast !== e.renderFast)
            );
          }
          addSoftKeys(e, t) {
            var n = this.props.chat;
            e.setRightOptions(this.Ik),
              e.setCenterLabel(797, () => {
                (0, ge.c)(t, n.id, "unread");
              });
          }
          render() {
            var e = this.props,
              t = e.chat,
              n = e.selected,
              r = e.renderFast;
            return Ir(
              n,
              (0, Lt.b)(2, br.c, {
                className: yr,
                jid: t.jid,
                ephemeral: t.groupInfo.expiration || p.i,
              }),
              (0, Lt.b)(2, gr, { selected: n, chat: t, renderFast: r }),
              (0, Lt.b)(2, mr.a, {
                chat: t,
                selected: n,
                className: n ? Er : Sr,
                WhileIdle: cr,
              })
            );
          }
        },
        Cr = class extends Ct.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Ik = (e) => {
                var t = this.props.chat,
                  n = new Zt.a();
                (function (e, t, n) {
                  "finished" === n.job.step.status &&
                    (t.add(580, () => {
                      dn(e, n);
                    }),
                    t.add(578, () => {
                      (function (e, t) {
                        (0, u.g)({
                          title: 220,
                          text: [(0, Z.b)(t.groupInfo.title), 174],
                          left: 761,
                          onSoftLeft: "CLOSE",
                          center: 769,
                          onSoftCenter: () => {
                            (0, pe.b)(e, t.job);
                          },
                        });
                      })(e, n);
                    })),
                    An(e, t);
                })(e, n, t),
                  (0, u.j)(n);
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.chat !== e.chat ||
                n.selected !== e.selected ||
                n.renderFast !== e.renderFast)
            );
          }
          addSoftKeys(e, t) {
            var n = this.props.chat;
            e.setRightOptions(this.Ik),
              "finished" === n.job.step.status &&
                e.setCenterLabel(812, () => {
                  dn(t, n);
                });
          }
          render() {
            var e = this.props,
              t = e.chat,
              n = e.selected,
              r = e.renderFast;
            return Ir(
              n,
              (0, Lt.b)(2, _r.a, {
                className: yr,
                groupPicture: t.groupInfo.groupPicture,
              }),
              (0, Lt.b)(2, vr, { selected: n, chat: t, renderFast: r }),
              (0, Lt.b)(2, ur, { selected: n, chat: t })
            );
          }
        },
        kr = class extends Ct.b {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.blocked !== e.blocked ||
                n.contact !== e.contact ||
                n.isVoipAvailable !== e.isVoipAvailable ||
                n.selected !== e.selected)
            );
          }
          addSoftKeys(e, t) {
            var n = this.props,
              r = n.blocked,
              a = n.contact,
              s = n.isVoipAvailable;
            if (
              (e.setCenterLabel(797, () => {
                (0, ge.a)(t, a.jid, "unread");
              }),
              e.setRightOptions(() => {
                var e = new Zt.a();
                An(t, e), (0, u.j)(e);
              }),
              s)
            ) {
              var i = !!r[a.jid];
              e.setOnCall(() => (0, En.a)(a, t, i, "chatList"));
            }
          }
          render() {
            var e = this.props,
              t = e.contact,
              n = e.selected;
            return (0, Lt.b)(2, rn.f, { contact: t, selected: n });
          }
        },
        wr = class extends Ct.b {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e && (n.selected !== e.selected || n.banner !== e.banner)
            );
          }
          componentDidMount() {
            var e = this.props,
              t = e.banner,
              n = e.backend;
            (0, _e.b)(n, t), super.componentDidMount();
          }
          Il() {
            return "";
          }
          addSoftKeys(e, t) {
            var n = this.props.banner,
              r = n.action;
            switch (r.type) {
              case "open-link":
                e.setCenterLabel(797, () => {
                  (0, tn.f)(t, r, () => {
                    (0, tn.d)(t),
                      (0, tn.c)(
                        t,
                        this.props.banner.id,
                        this.props.banner.version,
                        "banner"
                      ),
                      WAM.log("regular", 2472, void 0, [
                        1,
                        0,
                        n.id,
                        2,
                        0,
                        n.version,
                        3,
                        0,
                        2,
                      ]);
                  });
                });
                break;
              case "open-modal":
                e.setCenterLabel(797, () => {
                  t.dispatch({
                    type: "USER_NOTICE_UPDATED",
                    userNotice: r.modal,
                  }),
                    WAM.log("regular", 2472, void 0, [
                      1,
                      0,
                      n.id,
                      2,
                      0,
                      n.version,
                      3,
                      0,
                      2,
                    ]);
                });
                break;
              default:
                r.type;
            }
            e.setRightOptions(() => {
              var e = new Zt.a();
              An(t, e), (0, u.j)(e);
            });
          }
          render() {
            var e = this.props,
              t = e.banner,
              n = e.selected;
            return (0, Lt.b)(2, rn.j, {
              selected: n,
              className: (0, _n.a)(!n && "FQ"),
              rawTitle: (0, Lt.f)(
                1,
                "div",
                "FT GG GC",
                (0, Lt.b)(2, tn.b, {
                  text: t.content.text,
                  getNextLinkId: this.Il,
                }),
                2,
                { dir: t.direction }
              ),
              icon: (0, Lt.f)(
                1,
                "div",
                (0, _n.a)("FR", !n && "FS"),
                (0, Lt.b)(2, tn.a, { svgIcon: t.content.svgIcon }),
                2
              ),
            });
          }
        },
        Dr = (0, Jt.j)(wr),
        Lr = n(348),
        Tr = class extends Ct.a {
          shouldComponentUpdate(e, t) {
            var n = this.props;
            return (
              n !== e &&
              (n.archived !== e.archived ||
                n.blocked !== e.blocked ||
                n.chats !== e.chats ||
                n.lastScrollPosition !== e.lastScrollPosition ||
                n.contacts !== e.contacts ||
                n.kickReason !== e.kickReason ||
                n.renderFast !== e.renderFast ||
                n.connected !== e.connected ||
                n.isVoipAvailable !== e.isVoipAvailable ||
                n.userNoticeEnabled !== e.userNoticeEnabled ||
                n.userNotice !== e.userNotice ||
                n.items !== e.items)
            );
          }
          constructor(e, t) {
            super(e, t), Nr.call(this);
            var n,
              r = e.lastScrollPosition;
            (this.FQ = (function (e, t) {
              if (0 !== t.length)
                return e
                  ? {
                      item: t.find((t) => t.id === e.item) || t[0],
                      scrollFromTop: e.fromTop,
                    }
                  : { item: t[0], scrollFromTop: "start" };
            })(r, e.items)),
              (this.FR =
                (e.items,
                (n = e.contacts),
                {
                  filter: (e, t) =>
                    (function (e, t, n) {
                      return [
                        ...(0, on.d)(e, t, pn, n),
                        ...(0, on.e)(e, t, gn),
                        ...(0, on.d)(e, t, fn, n),
                        { type: "contacts-help", id: "contacts-help" },
                      ];
                    })(e, t, n),
                  emptyLabel: 129,
                }));
          }
          componentDidUpdate(e) {
            (function (e) {
              if (e)
                switch (e) {
                  case "needs_update":
                    (0, u.g)({
                      title: 229,
                      text: 294,
                      left: 777,
                      onSoftLeft: vt.closeApp,
                      right: 829,
                      onSoftRight: ln.b,
                      onBack: vt.closeApp,
                    });
                    break;
                  default:
                    __LOG__(
                      4
                    )`User will be kicked, but the reason is not in the list`,
                      (0, u.g)({
                        title: 229,
                        text: 476,
                        center: 796,
                        onSoftCenter: vt.closeApp,
                        onBack: vt.closeApp,
                      });
                }
            })(this.props.kickReason),
              super.componentDidUpdate(e);
          }
          componentWillUnmount() {
            (function (e, t) {
              if (t.current) {
                var n = t.current.getSelected();
                if (null != n && "contacts-help" !== n.item.type) {
                  var r,
                    a = n.item;
                  e.dispatchLazily({
                    type: "UPDATE_CHATLIST_SCROLL",
                    lastScrollPosition: {
                      item: a.id,
                      fromTop:
                        (null == (r = n.node.getClientRect())
                          ? void 0
                          : r.top) || 0,
                    },
                  });
                }
              }
            })(this.props.backend, this.FS),
              super.componentWillUnmount();
          }
          FT() {
            return 0 === this.props.items.length;
          }
          FU() {
            return this.props.archived
              ? (0, Lt.b)(2, en.b, { l10n: 24 })
              : this.FT()
              ? (0, Lt.b)(2, en.b, { l10n: 982 })
              : null;
          }
          addSoftKeys(e, t) {
            var n = this.props.archived;
            e.setRightOptions(xr),
              n
                ? e.setLeftAsBack()
                : this.FT()
                ? e.setCenterLabel(755, jr)
                : e.setLeftLabel(523, Rr);
          }
          render() {
            var e = this.props,
              t = e.archived,
              n = e.items,
              r = e.renderFast,
              a = this.FU(),
              s = (0, Lt.b)(
                2,
                nn.c,
                {
                  className: "Bx",
                  items: n,
                  keyOf: Gr,
                  search: this.FR,
                  start: this.FQ,
                  estimatedItemHeight: an.b,
                  emptyLabel: 121,
                  renderItem: this.FV,
                  deps: [r],
                  prefilledHeight: Qt.a,
                },
                null,
                this.FS
              );
            return t
              ? (0, Lt.b)(2, Xt.a, { title: a, children: s })
              : (0, Lt.b)(2, Qt.b, { title: a, children: s });
          }
        },
        Nr = function () {
          (this.FS = Tt.e()),
            (this.FV = (e, t, n, r) => {
              var a,
                s,
                i = this.props,
                o = i.blocked,
                l = i.isVoipAvailable,
                c = i.connected,
                u = 0 === n || r[n - 1].type !== e.type;
              switch (e.type) {
                case "chat":
                case "archived-chat":
                  "ONE_TO_ONE" === e.value.type
                    ? (a = (0, Lt.b)(2, Or, {
                        blocked: o,
                        chat: e.value,
                        contacts: i.contacts,
                        selected: t,
                        renderFast: i.renderFast,
                        isVoipAvailable: l,
                      }))
                    : "GROUP" === e.value.type
                    ? (a = (0, Lt.b)(2, Ar, {
                        chat: e.value,
                        selected: t,
                        connected: c,
                        renderFast: i.renderFast,
                      }))
                    : (e.value.type,
                      (a = (0, Lt.b)(2, Cr, {
                        chat: e.value,
                        selected: t,
                        renderFast: i.renderFast,
                      }))),
                    "archived-chat" === e.type &&
                      u &&
                      (s = (0, Lt.b)(2, rn.g, { text: 24 }));
                  break;
                case "contact":
                  (a = (0, Lt.b)(2, kr, {
                    contact: e.value,
                    blocked: o,
                    isVoipAvailable: l,
                    selected: t,
                  })),
                    u && (s = (0, Lt.b)(2, rn.g, { text: 170 }));
                  break;
                case "user-notice-banner":
                  a = (0, Lt.b)(2, Dr, { selected: t, banner: e.banner });
                  break;
                case "contacts-help":
                  a = (0, Lt.b)(2, sn.a, { selected: t });
                  break;
                default:
                  return (0, gt.a)(e);
              }
              return s ? (0, Lt.c)([s, a], 0) : a;
            });
        },
        Mr = (0, Jt.f)(
          (0, Ct.e)(Tr),
          (e) => ({
            archived: e.chatlist.archived,
            blocked: e.blocked,
            chats: e.chatlist.chats,
            contacts: e.contacts,
            kickReason: e.kickReason,
            lastScrollPosition: e.chatlist.lastScrollPosition,
            orderedChatIds: e.chatlist.orderedChatIds,
            renderFast: !!e.renderFast,
            connected: e.connected,
            isVoipAvailable: e.isVoipAvailable,
            pendingGroupJobs: (0, g.h)(e, "createGroup"),
            userNoticeEnabled: (0, tn.e)(e.serverProps),
            userNotice: e.userNotice,
          }),
          (e, t) => {
            var n,
              r = e.archived,
              a = e.chats,
              s = e.contacts,
              i = e.orderedChatIds,
              o = e.userNoticeEnabled,
              l = e.userNotice;
            return (
              (n = r
                ? mn(i, a)
                : vn(i, a, e.pendingGroupJobs, s, o ? l : void 0)),
              {
                archived: r,
                backend: t,
                blocked: e.blocked,
                chats: a,
                contacts: s,
                kickReason: e.kickReason,
                lastScrollPosition: e.lastScrollPosition,
                renderFast: e.renderFast,
                connected: e.connected,
                isVoipAvailable: e.isVoipAvailable,
                userNoticeEnabled: e.userNoticeEnabled,
                items: n,
                userNotice: e.userNotice,
              }
            );
          }
        );
      function Gr(e) {
        return String(e.id);
      }
      function Rr(e) {
        e.openScreen("NEW_CHAT");
      }
      function jr(e) {
        (0, Lr.b)(e);
      }
      function xr(e) {
        var t = new Zt.a();
        An(e, t), (0, u.j)(t);
      }
      var Pr = n(397),
        Ur = n(167),
        Fr = n(178),
        Br = n(74),
        Vr = n(280),
        Jr = n(149),
        zr = n(311);
      function Hr(e) {
        switch (e) {
          case "incoming":
            return "incoming";
          case "calling":
          case "ringing":
          case "busy":
            return "outgoing";
          case "ongoing":
            return "ongoing";
          case "ending":
          case "ending-missed":
          case "ending-rejected":
            return "ending";
          case "loading":
            return "loading";
          case "error":
            return "error";
          default:
            return (0, gt.a)(e);
        }
      }
      function $r(e) {
        var t = e.callState,
          n = e.contacts,
          r = e.peerJid,
          a = e.isCaller,
          s = e.isInterrupted,
          i = e.isLocallyMuted,
          o = e.errorCode,
          l = e.duration,
          c = null == l ? null : Math.round(l / 1e3),
          u = n[r],
          d =
            "error" === t
              ? (function (e, t, n) {
                  var r,
                    a =
                      null != (r = (0, Sn.a)((0, Sn.c)(t, n)))
                        ? r
                        : (0, Gt.d)(t),
                    s = [a, 171];
                  switch (e) {
                    case 401:
                      s = 575;
                      break;
                    case 403:
                      s = [a, 171];
                      break;
                    case 404:
                      s = [a, 172];
                      break;
                    case 405:
                      s = [a, 168];
                      break;
                    case 406:
                      s = [a, 170];
                      break;
                    case 426:
                      s = [a, 169];
                      break;
                    case 460:
                      s = [a, 170];
                      break;
                    default:
                      s = [a, 171];
                  }
                  return (0, Gn.k)(s);
                })(o, r, n)
              : (function (e) {
                  var t = e.callState,
                    n = e.isCaller,
                    r = e.isLocallyMuted,
                    a = e.isInterrupted,
                    s = e.duration;
                  switch (t) {
                    case "incoming":
                      return (0, Gn.k)(87);
                    case "calling":
                      return (0, Gn.k)(77);
                    case "ringing":
                      return (0, Gn.k)(103);
                    case "busy":
                      return (0, Gn.k)(76);
                    case "ongoing":
                      return (function (e, t, n) {
                        return t
                          ? (0, Gn.k)(101)
                          : e
                          ? (0, Gn.k)(null == n ? 100 : [(0, Dn.b)(n), 32])
                          : null == n
                          ? null
                          : (0, Dn.b)(n);
                      })(r, a, s);
                    case "ending":
                      return (0, Gn.k)(null == s ? 84 : [(0, Dn.b)(s), 29]);
                    case "ending-missed":
                      return (0, Gn.k)(85);
                    case "ending-rejected":
                      return (0, Gn.k)(86);
                    case "loading":
                      return (0, Gn.k)(n ? 77 : 80);
                    default:
                      return (0, gt.a)(t);
                  }
                })({
                  callState: t,
                  isCaller: a,
                  isInterrupted: s,
                  isLocallyMuted: i,
                  duration: c,
                });
        return {
          state: Hr(t),
          isCaller: e.isCaller,
          isLocallyMuted: i,
          status: d,
          name: null == u ? null : (0, Sn.a)(u),
          phone: (0, Gt.d)(r),
          uri: e.uri,
        };
      }
      function Wr(e) {
        return {
          isRtl: (0, Gn.g)(),
          data: $r(e),
          l10n: {
            brand: (0, Gn.k)(109),
            accept: (0, Gn.k)(75),
            reject: (0, Gn.k)(102),
            end: (0, Gn.k)(83),
            mute: (0, Gn.k)(99),
            unmute: (0, Gn.k)(107),
            speakerOn: (0, Gn.k)(105),
            speakerOff: (0, Gn.k)(104),
            ok: (0, Gn.k)(796),
            errorTitle: (0, Gn.k)(577),
          },
        };
      }
      var Kr = class extends Tt.a {
        constructor() {
          var e;
          return (
            (e = super(...arguments)),
            (this.attentionWindow = null),
            (this.isReady = !1),
            (this.FG = null),
            (this.FH = null),
            (this.onMessageReceived = (e) => {
              var t = e.data;
              if (e.origin === self.location.origin && null != t) {
                if (
                  ("log" === t.action &&
                    "string" == typeof t.type &&
                    "string" == typeof t.message &&
                    this.onLogReceived(t.type, t.message),
                  "command" === t.action && "string" == typeof t.command)
                ) {
                  var n = t.command;
                  Fr.a.has(n)
                    ? this.onCommandReceived(n)
                    : __LOG__(
                        2
                      )`Call::onMessageReceived Unhandled command ${n}`;
                }
                "error" === t.action &&
                  "string" == typeof t.message &&
                  this.onErrorReceived(t.message);
              }
            }),
            e
          );
        }
        shouldComponentUpdate(e, t) {
          var n = this.props;
          return (
            n !== e &&
            (n.avatar !== e.avatar ||
              n.callState !== e.callState ||
              n.peerJid !== e.peerJid ||
              n.contacts !== e.contacts ||
              n.isCaller !== e.isCaller ||
              n.isInterrupted !== e.isInterrupted ||
              n.isLocallyMuted !== e.isLocallyMuted ||
              n.errorCode !== e.errorCode ||
              n.duration !== e.duration ||
              n.connectionStatus !== e.connectionStatus ||
              n.uri !== e.uri)
          );
        }
        componentDidMount() {
          var e = this.props;
          null == e.avatar && (0, X.b)(e.backend, e.peerJid),
            "ongoing" === e.callState && this.FI(),
            localStorage.setItem(Fr.b, JSON.stringify(Wr(e))),
            (this.attentionWindow = self.open(
              "call.html",
              "_blank",
              "attention"
            )),
            self.addEventListener("message", this.onMessageReceived),
            null != window.AudioChannelClient &&
              ((this.FH = new window.AudioChannelClient("normal")),
              this.FH.requestChannel());
        }
        componentDidUpdate(e) {
          var t = this.attentionWindow,
            n = this.props;
          if (
            (this.manageCallStateUpdate(e.callState, n.callState),
            null != t && this.isReady)
          ) {
            var r = $r(n);
            t.postMessage(r, t.location);
          } else localStorage.setItem(Fr.b, JSON.stringify(Wr(n)));
        }
        componentWillUnmount() {
          this.FJ(),
            self.removeEventListener("message", this.onMessageReceived),
            localStorage.removeItem(Fr.b),
            null != this.attentionWindow && this.attentionWindow.close(),
            null != this.FH && this.FH.abandonChannel();
        }
        manageCallStateUpdate(e, t) {
          "ongoing" !== e && "ongoing" === t && this.FI(),
            "ongoing" === e && "ongoing" !== t && this.FJ(),
            !e.startsWith("ending") &&
              t.startsWith("ending") &&
              setTimeout(
                () => this.props.backend.dispatch({ type: "CALL_ENDED" }),
                1500
              );
        }
        FI() {
          var e = this.props.backend;
          this.FG = setInterval(() => {
            e.updateVoipCallDuration();
          }, 1e3);
        }
        FJ() {
          clearInterval(this.FG);
        }
        onLogReceived(e, t) {
          switch (e) {
            case "info":
              break;
            case "log":
              __LOG__(2)`Call::onLogReceived ${t}`;
              break;
            case "warn":
              __LOG__(3)`Call::onLogReceived ${t}`;
              break;
            case "error":
              __LOG__(4)`Call::onLogReceived ${t}`;
              break;
            default:
              __LOG__(2)`Call::onLogReceived Unhandled type ${e} : ${t}`;
          }
        }
        onCommandReceived(e) {
          var t = this.props.backend;
          switch (e) {
            case "accept":
              t.acceptVoipCall();
              break;
            case "clearError":
              t.dispatch({ type: "CALL_ERROR_CLEARED" });
              break;
            case "end":
              t.maybeCloseOrphanedCallScreen(this.props.connectionStatus),
                t.endVoipCall();
              break;
            case "mute":
              t.muteVoipCall(!0);
              break;
            case "reject":
              t.rejectVoipCall();
              break;
            case "unmute":
              t.muteVoipCall(!1);
              break;
            case "closeImmediatelyAndEnd":
              t.dispatch({ type: "CLOSE_CALL_SCREEN" }), t.endVoipCall();
              break;
            default:
              this.isReady = !0;
          }
        }
        onErrorReceived(e) {
          __LOG__(2)`Call::onErrorReceived ${e}`,
            SEND_LOGS("call-screen-error");
        }
        render() {
          return (0, Lt.b)(2, Ur.a);
        }
      };
      function Yr(e, t) {
        var n = Object.assign({}, e, { uri: t });
        return (0, Lt.i)((0, Lt.b)(2, Kr, Object.assign({}, n)));
      }
      var qr,
        Xr = new zr.a({
          idealMaxSize: 10,
          generator: (e) => {
            return ((t = e.jid),
            (n = e.avatar),
            null == n
              ? Promise.resolve()
              : (0, Br.getProfilePicTable)()
                  .getThumb(t)
                  .then((e) =>
                    null != e && e.photoId === n.photoId ? e.image : null
                  )).then((e) => e && (0, Jr.a)(e));
            var t, n;
          },
          destroyer(e) {
            e.then((e) => e && (0, Jr.b)(e));
          },
          serializer(e) {
            var t = e.jid,
              n = e.avatar;
            return `${t}/${(null == n ? void 0 : n.photoId) || ""}`;
          },
        }),
        Qr = (0, Vr.b)({
          Component: (e) => {
            var t = e.props,
              n = e.uriPromise;
            return (0, Lt.b)(2, Kt.a, {
              props: t,
              promise: n,
              fallback: Yr,
              render: Yr,
            });
          },
          allocate: (e) => ({
            props: e,
            uriPromise: Xr.createOrRetain({ jid: e.peerJid, avatar: e.avatar }),
          }),
          deallocate(e) {
            var t = e.props;
            Xr.release({ jid: t.peerJid, avatar: t.avatar });
          },
        }),
        Zr = (0, Jt.f)(
          Qr,
          (e, t) => {
            var n = e.calls;
            if (null == n) return null;
            var r = n.current;
            return null == r
              ? null
              : {
                  avatars: e.avatars,
                  call: r,
                  contacts: e.contacts,
                  connectionStatus: n.connectionStatus,
                };
          },
          (e, t) => {
            var n = e.avatars,
              r = e.call,
              a = e.contacts,
              s = e.connectionStatus;
            return {
              avatar: n[r.peerJid],
              callState: r.state,
              peerJid: r.peerJid,
              isCaller: r.isCaller,
              duration: r.duration,
              isInterrupted: r.isInterrupted,
              isLocallyMuted: r.isLocallyMuted,
              errorCode: r.errorCode,
              connectionStatus: s,
              backend: t,
              contacts: a,
            };
          }
        );
      function ea() {
        return (
          null == qr &&
            (qr = n
              .e(27)
              .then(n.bind(null, 506))
              .then((e) => e.default)),
          qr
        );
      }
      function ta(e) {
        return (0, Lt.b)(2, Kt.a, {
          props: e,
          promise: ea(),
          fallback: () => (0, Lt.b)(2, Ur.a),
          render: (e, t) => (0, Lt.i)((0, Lt.b)(2, t, Object.assign({}, e))),
        });
      }
      var na,
        ra = n(337);
      function aa(e) {
        return (0, Lt.b)(2, Kt.a, {
          props: e,
          promise:
            (null == na &&
              (na = Promise.all([n.e(25), n.e(159)])
                .then(n.bind(null, 520))
                .then((e) => e.default)),
            na),
          fallback: () => (0, Lt.b)(2, Ur.a),
          render: (e, t) => (0, Lt.i)((0, Lt.b)(2, t, Object.assign({}, e))),
        });
      }
      var sa,
        ia,
        oa = null,
        la = null;
      function ca() {
        return (
          sa ||
            (sa = Promise.all([
              Promise.all([
                n.e(0),
                n.e(11),
                n.e(9),
                n.e(12),
                n.e(26),
                n.e(27),
                n.e(25),
                n.e(158),
              ]).then(n.bind(null, 645)),
              (0, $t.initPolyfill)(),
            ])).then((e) => {
              var t = c()(e, 1)[0];
              __LOG__(2)`stage2Module: stage2 loaded`, (la = t);
              var n = oa;
              n && ((oa = null), n());
            }),
          la
        );
      }
      var ua = null,
        da = (e) => (t) => {
          t.defaultPrevented ||
            t.repeat ||
            ((0, Wt.m)(t) === Wt.e && e.goBackFromEvent(t));
        };
      function ha(e) {
        var t = e.screens[0];
        return t && "SEND_MEDIA" === t.screen.type
          ? (0, Lt.b)(2, Ur.b)
          : (0, Lt.b)(2, Ur.a);
      }
      function pa(e, t) {
        var n,
          r = e.youtubePlayer;
        return null == r || null != (null == (n = e.player) ? void 0 : n.active)
          ? null
          : (0, Lt.b)(2, Yt, { videoId: r.videoId, backend: t });
      }
      function fa(e) {
        return e
          ? (0, Lt.b)(2, zt.b.div, {
              hasFocusPriority: !0,
              className: ra.a,
              tabIndex: "2",
            })
          : null;
      }
      function ga(e) {
        if (!e) return null;
        var t = ca();
        return t ? (0, Lt.b)(2, t.ActivityInProgress) : null;
      }
      function va(e, t) {
        return (0, Lt.b)(2, Pr.a, { targetOverlayId: e.overlayId, backend: t });
      }
      var ma = class extends Tt.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Aa = () => {
                __LOG__(2)`App: Rerendering because module loaded`,
                  this.forceUpdate();
              }),
              e
            );
          }
          componentDidMount() {
            oa = this.Aa;
          }
          componentWillUnmount() {
            oa = null;
          }
          render() {
            var e,
              t = this.props,
              r = t.store,
              a = t.backend;
            return (
              "main" === r.mode
                ? (e = (function (e, t) {
                    var n = (function (e) {
                        var t = ca(),
                          n = e.screens.length - 1;
                        if (e.user.pushname) {
                          if (null != e.calls && null != e.calls.current)
                            return (0, Lt.b)(2, Zr);
                          if (e.user.twoFactor.reminder.shouldRemind)
                            return t ? (0, Lt.b)(2, t.TwoFactorReminder) : null;
                          if (
                            e.screens.length > 0 ||
                            "active" === e.profilePhotoScreenState
                          ) {
                            if (!t) return null;
                            var r = e.screens.map((e, r) => {
                              var a = e.id,
                                s = e.screen;
                              return (0, Lt.b)(
                                2,
                                t.Stage2Screen,
                                { id: a, screen: s, isActiveScreen: r === n },
                                a
                              );
                            });
                            return "active" === e.profilePhotoScreenState
                              ? [
                                  (0, Lt.b)(
                                    2,
                                    t.RegistrationProfilePhoto,
                                    null,
                                    "profile-photo"
                                  ),
                                  ...r,
                                ]
                              : r;
                          }
                          return e.msglist
                            ? t
                              ? (0, Lt.b)(
                                  2,
                                  t.Conversation,
                                  null,
                                  e.msglist.chat.id
                                )
                              : null
                            : e.tab
                            ? "status" === e.tab.key
                              ? t
                                ? (0, Lt.b)(2, t.StatusList)
                                : null
                              : "calls" === e.tab.key && e.isVoipAvailable
                              ? t
                                ? (0, Lt.b)(2, t.CallLogList)
                                : null
                              : "camera" === e.tab.key
                              ? null
                              : null != e.userNotice &&
                                "modal" === e.userNotice.type
                              ? (0, Lt.b)(2, ta, { modal: e.userNotice })
                              : "pending" === e.profilePhotoScreenState &&
                                null != t
                              ? (0, Lt.b)(
                                  2,
                                  t.RegistrationProfilePhoto,
                                  null,
                                  "profile-photo"
                                )
                              : (0, Lt.b)(
                                  2,
                                  Mr,
                                  null,
                                  e.chatlist.archived
                                    ? "archived-chats"
                                    : "chats"
                                )
                            : null != e.userNotice &&
                              "modal" === e.userNotice.type
                            ? (0, Lt.b)(2, ta, { modal: e.userNotice })
                            : (0, Lt.b)(
                                2,
                                Mr,
                                null,
                                e.chatlist.archived ? "archived-chats" : "chats"
                              );
                        }
                        if (!t) return null;
                        var a = [
                          (0, Lt.b)(
                            2,
                            t.RegistrationProfileInfo,
                            null,
                            "pushname"
                          ),
                        ];
                        return (
                          e.screens.forEach((e, r) => {
                            var s = e.id,
                              i = e.screen;
                            ("IMAGE_VIEW" !== i.type &&
                              "AVATAR_IMAGE_VIEW" !== i.type &&
                              "MEDIA_EDITOR" !== i.type) ||
                              a.push(
                                (0, Lt.b)(
                                  2,
                                  t.Stage2Screen,
                                  { id: s, screen: i, isActiveScreen: r === n },
                                  s
                                )
                              );
                          }),
                          a
                        );
                      })(e),
                      r = e.player,
                      a = r.active;
                    return (0, Lt.b)(2, Ht.a, {
                      children: [
                        null != n ? n : ha(e),
                        a &&
                          (0, Lt.b)(2, qt, {
                            initialTime: r.currentTimes[a.commonMsgId] || 0,
                            active: a,
                            contentRef: a.contentRef,
                            commonMsgId: a.commonMsgId,
                            backend: t,
                          }),
                        pa(e, t),
                        va(e, t),
                        ga(e.activityInProgress),
                        fa(e.incomingCall),
                      ],
                    });
                  })(r, a))
                : "reg" === r.mode
                ? (e = (function (e, t) {
                    var r =
                      (ia ||
                        (ia = Promise.all([n.e(17), n.e(26), n.e(163)])
                          .then(n.bind(null, 646))
                          .then((e) => {
                            ua = e;
                            var t = oa;
                            t && ((oa = null), t());
                          })),
                      ua);
                    return (
                      r &&
                      (0, Lt.b)(2, Ht.a, {
                        children: [
                          (0, Lt.b)(2, r.default),
                          va(e, t),
                          ga(e.activityInProgress),
                          fa(e.incomingCall),
                        ],
                      })
                    );
                  })(r, a))
                : "tempBanned" === r.mode
                ? (e = (function (e, t) {
                    return (0, Lt.b)(2, Ht.a, {
                      children: [
                        (0, Lt.b)(2, aa),
                        va(e, t),
                        ga(e.activityInProgress),
                        fa(e.incomingCall),
                      ],
                    });
                  })(r, a))
                : "error" === r.mode
                ? (e = (function (e, t) {
                    var n = ca();
                    return (
                      n &&
                      (0, Lt.b)(2, Ht.a, {
                        children: [
                          (0, Lt.b)(2, n.AppError),
                          va(e, t),
                          ga(e.activityInProgress),
                          fa(e.incomingCall),
                        ],
                      })
                    );
                  })(r, a))
                : (r.mode,
                  (e = (function (e, t) {
                    var n = ca();
                    return (
                      n &&
                      (0, Lt.b)(2, Ht.a, {
                        children: [
                          (0, Lt.b)(2, n.SpinnerScreen, {
                            title: 217,
                            subtitle: 169,
                            onExit: () => {
                              (0, u.f)({
                                title: 777,
                                text: 216,
                                confirm: 777,
                                onConfirm: vt.closeApp,
                                onEndCall: "CLOSE",
                              });
                            },
                          }),
                          va(e, t),
                          ga(e.activityInProgress),
                          fa(e.incomingCall),
                        ],
                      })
                    );
                  })(r, a))),
              e || (e = (0, Lt.b)(2, Ur.a)),
              (0, Lt.b)(2, zt.b.div, {
                className: ra.b,
                onKeyDown: da(a),
                children: e,
              })
            );
          }
        },
        ba = (0, Jt.e)(ma, (e, t) => ({ store: e, backend: t })),
        _a = n(148),
        Sa = n(265),
        Ea = null;
      function ya(e, t) {
        var n = new MessageChannel();
        return (
          (n.port1.onmessage = (t) => {
            var r = t.data;
            r &&
              "bridge-channel-ready" === r.type &&
              ((0, me.setBackendWorkedStarted)(), e.setPort(n.port1));
          }),
          n.port2
        );
      }
      function Ia(e) {
        navigator.mozWifiManager &&
          (navigator.mozWifiManager.onstatuschange = (t) => {
            var n = "connected" === t.status,
              r = (0, N.f)(),
              a = n ? 1 : r.radioType;
            WAM.logAttributes([["regular"], 23, 1, n, ["regular"], 105, 0, a]),
              e &&
                e.fireAndForget("basic", "wifiStatusChanged", {
                  connected: n,
                  radioType: a,
                });
          });
      }
      var Oa,
        Aa,
        Ca,
        ka = n(142);
      function wa(e, t, l, c) {
        var u,
          d =
            null != (u = l) &&
            "notification" === u.type &&
            "handleCall" === u.data.action &&
            "accept" === u.data.option;
        return (0, r.c)(e, !d)
          .then(
            (e) => (
              (t.appInfo = performance.now()),
              __LOG__(2)`ENTRY::start buildPage`,
              "registered" === (Aa = e).state && (0, i.b)(),
              (Ca = (0, o.makeBridge)()),
              (0, me.setBridge)(Ca),
              "unregistered" === Aa.state && (0, Gn.b)(),
              "registered" === Aa.state &&
                Aa.userNotice &&
                "modal" === Aa.userNotice.type &&
                ea(),
              (function (e, t, n) {
                return (
                  __LOG__(2)`buildPage::building backendInterface`,
                  (function (e, t) {
                    switch (t.state) {
                      case "deleting":
                        return (function (e) {
                          var t = new Ee(e);
                          return (
                            t.populate(At(mt, { mode: "deleting" })),
                            t.buildApi(e),
                            Promise.resolve(t)
                          );
                        })(e);
                      case "registered":
                        return (function (e, t) {
                          __LOG__(2)`buildMainBackendInterface`,
                            (0, v.A)(t.clockSkew);
                          var n = new _t();
                          n.updateFromAppInfo(t);
                          var r = n.buildMainStore(t, !0),
                            a = new Ee(e);
                          return (
                            a.populate(At(mt, r), n), (0, kt.b)(r).then(() => a)
                          );
                        })(e, t);
                      case "unregistered":
                        return (function (e, t) {
                          __LOG__(2)`buildRegBackendInterface`,
                            e.fireAndForget("registration", "initReg", {});
                          var n = new Ee(e);
                          return (
                            n.populate(
                              At(mt, {
                                mode: "reg",
                                reg: t.registrationStore,
                                alert: t.registrationAlert,
                              }),
                              new _t()
                            ),
                            Promise.resolve(n)
                          );
                        })(e, t);
                      case "tempBanned":
                        return (function (e, t) {
                          (0, v.A)(t.clockSkew);
                          var n = new Ee(e);
                          return (
                            n.populate(
                              At(mt, {
                                mode: "tempBanned",
                                code: t.code,
                                until: t.until,
                                duration: t.duration,
                              })
                            ),
                            n.buildApi(e),
                            Promise.resolve(n)
                          );
                        })(e, t);
                      case "error":
                        return (function (e, t) {
                          var n = new Ee(e);
                          return (
                            n.populate(
                              At(mt, { mode: "error", errorType: t.errorType })
                            ),
                            n.buildApi(e),
                            Promise.resolve(n)
                          );
                        })(e, t);
                      default:
                        return (0, gt.a)(t.state);
                    }
                  })(e, t).then(
                    (e) => (
                      __LOG__(2)`buildPage::adding handlers`,
                      (function (e) {
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            switch (
                              ((0, I.h)(e, document.visibilityState),
                              document.visibilityState)
                            ) {
                              case "visible":
                                e.handleAppVisible(), (0, i.d)();
                                break;
                              case "prerender":
                                break;
                              case "hidden":
                                e.handleAppHidden(),
                                  (0, Vt.b)(),
                                  (0, i.c)(),
                                  (0, Ct.f)();
                                break;
                              case "unloaded":
                                (0, Ct.f)();
                                break;
                              default:
                                (0, gt.a)(document.visibilityState);
                            }
                          }
                        ),
                          navigator.largeTextEnabled &&
                            document.documentElement.classList.add("largeText"),
                          self.addEventListener(
                            "largetextenabledchanged",
                            () => {
                              navigator.largeTextEnabled
                                ? document.documentElement.classList.add(
                                    "largeText"
                                  )
                                : document.documentElement.classList.remove(
                                    "largeText"
                                  );
                            }
                          ),
                          (function (e) {
                            le() &&
                              (__LOG__(
                                2
                              )`Initial state: comms ${re}; onLine: ${navigator.onLine}`,
                              ae
                                ? __LOG__(
                                    4
                                  )`internetConnection.initListeners was called more than once!`
                                : ((ae = !0),
                                  navigator.onLine || ie(),
                                  self.addEventListener("online", () => {
                                    (function (e) {
                                      __LOG__(
                                        2
                                      )`Online event is triggered: comms ${re}; onLine: ${navigator.onLine}`,
                                        e.dispatch({ type: "CONNECTED" }),
                                        e.fireAndForget(
                                          "backend",
                                          "networkConnected",
                                          {}
                                        ),
                                        se();
                                    })(e);
                                  }),
                                  self.addEventListener("offline", () => {
                                    (function (e) {
                                      __LOG__(
                                        2
                                      )`Offline event is triggered: comms ${re}; onLine: ${navigator.onLine}`,
                                        e.dispatch({ type: "DISCONNECTED" }),
                                        oe();
                                    })(e);
                                  })));
                          })(e);
                      })(e),
                      (0, Bt.a)(),
                      "deleting" === t.state ||
                        (navigator.mozSetMessageHandler(
                          "serviceworker-notification",
                          (t) => {
                            __LOG__(2)`buildPage on notification ${t}`,
                              Pt(JSON.parse(t.msg), e);
                          }
                        ),
                        navigator.mozSetMessageHandler("activity", (t) => {
                          jt(e, t.source);
                        }),
                        setTimeout(() => {
                          var e = q.G.get().lastUpdated;
                          (e && (0, v.n)(e, v.b)) ||
                            (0, M.h)().then((e) => {
                              var t = e.storageAvailSize || 0,
                                n = e.storageTotalSize || 0,
                                r = n - t;
                              __LOG__(
                                2
                              )`Free space: ${t}. Used space: ${r}. Free percentage: ${
                                (100 * t) / n
                              }%`;
                              var a = e.externalStorageAvailSize || 0,
                                s = e.externalStorageTotalSize || 0,
                                i = s - a;
                              __LOG__(
                                2
                              )`Free external space: ${a}. Used external space: ${i}. Free percentage: ${
                                (100 * a) / s
                              }%`,
                                __LOG__(2)`Video folder used size: ${
                                  e.videoFolderSize || 0
                                }`,
                                __LOG__(2)`SdCard folder used size: ${
                                  e.mediaFolderSize || 0
                                }`,
                                q.G.set({ lastUpdated: (0, v.E)(), stats: e });
                            });
                        }, 1e4),
                        "registered" === t.state &&
                          (function (e, t) {
                            var n,
                              r = null;
                            if (e)
                              if (
                                (__LOG__(2)`Initializing from ${e.type}`,
                                "notification" === e.type)
                              )
                                try {
                                  r = Pt(e.data, t);
                                } catch (e) {
                                  __LOG__(4)`Bad initial notification`;
                                }
                              else
                                "activity" === e.type && (r = jt(t, e.source));
                            (0, me.setAppLaunchDestination)(
                              null != (n = r) ? n : 1
                            );
                          })(n, e)),
                      e
                    )
                  )
                );
              })(Ca, Aa, l)
            )
          )
          .then(
            (e) => (
              (t.backend = performance.now()),
              (Oa = e),
              __LOG__(2)`ENTRY::initialize Root`,
              "registered" === Aa.state && (0, ee.d)(Oa),
              (function (e) {
                __LOG__(2)`exe::initialize`;
                var t = document.getElementById("root");
                if (!t) throw new Error("No root!");
                return (
                  e.getStoreState(),
                  new Promise((n) => {
                    Tt.g(
                      (0, Lt.b)(2, Jt.a, {
                        backend: e,
                        store: e.getStore(),
                        children: (0, Lt.b)(2, zt.a, {
                          children: (0, Lt.b)(2, ba),
                        }),
                      }),
                      t,
                      n
                    ),
                      (0, _a.f)(p.a);
                  })
                );
              })(Oa)
            )
          )
          .then(() => {
            t.mounted = performance.now();
            var i = navigator.mozTelephony;
            i &&
              (i.onincoming = (e) => {
                var t;
                (t = Oa).dispatch({ type: "INCOMING_CALL_START" }),
                  ve(t) &&
                    t.fireAndForget("voip", "interruptVoipCall", {
                      shouldInterrupt: !0,
                    }),
                  (e.call.ondisconnected = () => {
                    setTimeout(() => {
                      (function (e) {
                        e.dispatch({ type: "INCOMING_CALL_END" }),
                          ve(e) &&
                            e.fireAndForget("voip", "interruptVoipCall", {
                              shouldInterrupt: !1,
                            });
                      })(Oa);
                    }, 2e3);
                  });
              }),
              __LOG__(2)`app start timing ${t}`,
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  (0, $t.initPolyfill)().then(() => {
                    Oa.dispatch({ type: "APP_MOUNTED" }),
                      (0, a.initializeLogsTable)(),
                      "registered" === Aa.state &&
                        ((0, ce.b)({ type: "frontend", backend: Oa }),
                        (0, ka.setContextImplementations)({
                          getPrivateStatsIds: () =>
                            Ca.sendAndReceive(
                              "backend",
                              "getPrivateStatsIds",
                              {}
                            ),
                        }),
                        (0, s.initializeWAMSink)(
                          "frontend",
                          "regular",
                          Oa.sendMetrics
                        ),
                        (0, s.initializeWAMSink)(
                          "frontend",
                          "private",
                          Oa.sendAnonymousMetrics
                        )),
                      __LOG__(
                        2
                      )`ENTRY::triggering loading the rest of the stage2`,
                      ca(),
                      "registered" === Aa.state &&
                        (0, r.a)().then((e) => {
                          e || Oa.dispatch({ type: "STARRED_INDEX_FOUND" });
                        });
                  });
                });
              }),
              Oa.buildApi(Ca),
              __LOG__(2)`ENTRY::startBackendWorker`;
            var l = (0, Sa.a)();
            return (
              l &&
                __LOG__(
                  3
                )`Last close was an unexpected one: didAppCrash = true`,
              (function (e, t, r, a, s) {
                var i = "deleting" === e.mode;
                return (
                  !i &&
                    navigator.serviceWorker &&
                    navigator.serviceWorker.addEventListener("message", (e) => {
                      "receivedPush" === e.data.type
                        ? t.fireAndForget("backend", "receivedPush", {})
                        : "clickedNotification" === e.data.type
                        ? (Pt(JSON.parse(e.data.msg), r),
                          (navigator.mozApps.getSelf().onsuccess = function (
                            e
                          ) {
                            var t = e.target.result;
                            t && t.launch();
                          }))
                        : __LOG__(
                            4
                          )`startBackendWorker unrecognized sw msg ${e.data}`;
                    }),
                  Promise.resolve()
                    .then(() => {
                      var e = (0, M.l)()
                          .then((e) => {
                            __LOG__(2)`Successfully got storage status: ${e}`;
                          })
                          .catch((e) => {
                            __LOG__(4)`Failed to get storage status: ${(0, M.g)(
                              e
                            )}`,
                              SEND_LOGS("failed-to-get-storage-status");
                          }),
                        t = (0, M.e)()
                          .then(() => {
                            __LOG__(
                              2
                            )`Successfully removed temporary WA directory`;
                          })
                          .catch((e) => {
                            __LOG__(4)`Failed to remove WA tmp directory: ${(0,
                            M.g)(e)}`,
                              SEND_LOGS("tmp-remove-failed");
                          }),
                        n =
                          null == q.l.get()
                            ? (0, N.d)().then((e) => {
                                q.l.set(null != e ? e : null);
                              })
                            : void 0;
                      return Promise.all([e, t, n]);
                    })
                    .then(
                      () => (
                        i || (0, te.j)()
                          ? __LOG__(2)`Avoiding worker, reason ${
                              i ? "deleting" : "low ram"
                            }`
                          : (__LOG__(2)`Starting backend worker`,
                            (Ea = new Worker("backendWorker.js"))),
                        (0, N.a)()
                      )
                    )
                    .then((r) => {
                      var i,
                        l = (0, N.i)(),
                        c = q.b.get(),
                        u = c.abKey,
                        d = c.expoKeyStr;
                      if (
                        (null != u && null != d && (i = d),
                        WAM.logAttributes([
                          ["regular"],
                          23,
                          1,
                          l,
                          ["regular"],
                          105,
                          0,
                          l ? 1 : r.carrier.radioType,
                          ["regular", "private"],
                          15,
                          2,
                          r.os.version,
                          ["regular", "private"],
                          13,
                          2,
                          r.device,
                          ["regular", "private"],
                          5,
                          0,
                          parseInt(r.carrier.mcc, 10),
                          ["regular", "private"],
                          3,
                          0,
                          parseInt(r.carrier.mnc, 10),
                          ["regular"],
                          2141,
                          2,
                          q.E.get().abKey,
                          ["regular"],
                          4473,
                          2,
                          u,
                          ["regular", "private"],
                          5029,
                          2,
                          i,
                        ]),
                        null == Ea)
                      )
                        return (
                          __LOG__(2)`Loading backend locally`,
                          q.h.set(r),
                          Ia(null),
                          Promise.all([
                            n.e(0),
                            n.e(3),
                            n.e(4),
                            n.e(8),
                            n.e(7),
                            n.e(9),
                            n.e(15),
                          ])
                            .then(n.bind(null, 443))
                            .then((n) => n.startInPageBackend(e, t, a, s))
                            .then(() => {
                              (0, o.warnOnMissingHandlers)(t),
                                (0, me.setBackendWorkedStarted)();
                            })
                        );
                      __LOG__(2)`Activating backend worker`;
                      var h = (0, o.attachBatchedPortal)(t, [
                        "registration",
                        "backend",
                        "basic",
                        "voip",
                      ]);
                      (0, o.warnOnMissingHandlers)(t),
                        Ia(t),
                        Ea.postMessage(
                          {
                            type: "bridge-channel",
                            deviceInfo: r,
                            hasWifi: l,
                            shouldStartVoip: s,
                          },
                          [ya(h)]
                        );
                    })
                );
              })(e, Ca, Oa, l, d).then(() => ((0, Sa.c)(), l))
            );
          })
          .then((e) => {
            __LOG__(2)`ENTRY::wam events`,
              e && WAM.log("regular", 184, void 0, []),
              WAM.log("regular", 1094, void 0, [
                1,
                0,
                Math.round(t.mounted),
                7,
                0,
                (0, me.getAppLaunchDestination)(),
              ]),
              WAM.log("regular", 1754, void 0, [
                1,
                0,
                Math.round(t.jsStart),
                2,
                0,
                Math.round(t.initialImports),
                3,
                0,
                Math.round(t.intl),
                4,
                0,
                Math.round(t.backend),
                5,
                0,
                Math.round(t.mounted),
                6,
                0,
                Math.round(t.onloadFinished),
                7,
                0,
                Math.round(t.infoStore),
                9,
                0,
                Math.round(t.migrations),
                8,
                0,
                Math.round(t.appInfo),
              ]);
          })
          .then(() => {});
      }
    },
  ])
);
