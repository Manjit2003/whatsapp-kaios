"use strict";
class Script {
  constructor() {
    this.modulePath = "";
  }
  set charset(e) {}
  set timeout(e) {}
  set src(e) {
    this.modulePath = e;
  }
  set onerror(e) {
    this.onerrorCb = e;
  }
  set onload(e) {
    this.onloadCb = e;
  }
  setAttribute() {}
  load() {
    let e = !0;
    try {
      importScripts(this.modulePath);
    } catch (t) {
      (e = !1),
        this.onerrorCb &&
          this.onerrorCb({ type: "error", target: { src: this.modulePath } });
    }
    e &&
      this.onloadCb &&
      this.onloadCb({ type: "load", target: { src: this.modulePath } });
  }
}
var fakeHead = {
    appendChild(e) {
      e.load();
    },
  },
  document = {
    getElementsByTagName: (e) => ("head" === e ? [fakeHead] : []),
    createElement: (e) => ("script" === e ? new Script() : {}),
    head: fakeHead,
  };
(self.document = document),
  (function (e) {
    function t(t) {
      for (
        var o, s, i = t[0], l = t[1], d = t[2], u = 0, p = [];
        u < i.length;
        u++
      )
        (s = i[u]),
          Object.prototype.hasOwnProperty.call(n, s) && n[s] && p.push(n[s][0]),
          (n[s] = 0);
      for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
      for (c && c(t); p.length; ) p.shift()();
      return a.push.apply(a, d || []), r();
    }
    function r() {
      for (var e, t = 0; t < a.length; t++) {
        for (var r = a[t], o = !0, i = 1; i < r.length; i++) {
          var l = r[i];
          0 !== n[l] && (o = !1);
        }
        o && (a.splice(t--, 1), (e = s((s.s = r[0]))));
      }
      return e;
    }
    var o = {},
      n = { 31: 0 },
      a = [];
    function s(t) {
      if (o[t]) return o[t].exports;
      var r = (o[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
    }
    (s.e = function (e) {
      var t = [],
        r = n[e];
      if (0 !== r)
        if (r) t.push(r[2]);
        else {
          var o = new Promise(function (t, o) {
            r = n[e] = [t, o];
          });
          t.push((r[2] = o));
          var a,
            i = document.createElement("script");
          (i.charset = "utf-8"),
            (i.timeout = 120),
            s.nc && i.setAttribute("nonce", s.nc),
            (i.src = (function (e) {
              return (
                s.p +
                "" +
                ({
                  1: "handlers/aboutNotification~handlers/businessNotification~handlers/contactsNotification~handlers/hand~78c34780",
                  2: "jobs/setStatusSettings",
                  5: "handlers/handleAccountSyncNotification~handlers/msgReceipt~jobs/reuploadMedia~jobs/uploadMedia",
                  6: "handlers/mediaRetry~handlers/msgReceipt~jobs/requestReupload~jobs/reuploadMedia",
                  18: "handlers/handleAccountSyncNotification~handlers/msgReceipt",
                  19: "handlers/infoBulletin",
                  20: "jobs/revokeGroupInvitations",
                  21: "jobs/sendMediaMsg~jobs/sendMediaMsgs",
                  22: "jobs/sendProfilePicture",
                  23: "jobs/sendWrittenMsg",
                  24: "jobs/uploadMedia",
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
                  155: "migrations",
                  161: "queryBusinessProfile",
                  162: "queryCommunitiesSubGroups",
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
                }[e] || e) +
                ".js"
              );
            })(e));
          var l = new Error();
          a = function (t) {
            (i.onerror = i.onload = null), clearTimeout(d);
            var r = n[e];
            if (0 !== r) {
              if (r) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  a = t && t.target && t.target.src;
                (l.message =
                  "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")"),
                  (l.name = "ChunkLoadError"),
                  (l.type = o),
                  (l.request = a),
                  r[1](l);
              }
              n[e] = void 0;
            }
          };
          var d = setTimeout(function () {
            a({ type: "timeout", target: i });
          }, 12e4);
          (i.onerror = i.onload = a), document.head.appendChild(i);
        }
      return Promise.all(t);
    }),
      (s.m = e),
      (s.c = o),
      (s.d = function (e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (s.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (s.t = function (e, t) {
        if ((1 & t && (e = s(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (s.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            s.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (s.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return s.d(t, "a", t), t;
      }),
      (s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (s.p = "/"),
      (s.oe = function (e) {
        throw (console.error(e), e);
      });
    var i = (self.webpackJsonp = self.webpackJsonp || []),
      l = i.push.bind(i);
    (i.push = t), (i = i.slice());
    for (var d = 0; d < i.length; d++) t(i[d]);
    var c = l;
    a.push([435, 0, 3, 4, 8, 10, 7, 9, 15, 14]), r();
  })({
    263: function (e, t, r) {
      r.r(t),
        r.d(t, "runOnShutdown", function () {
          return f;
        }),
        r.d(t, "runAfterVoipEviction", function () {
          return v;
        }),
        r.d(t, "shutdown", function () {
          return j;
        });
      var o = r(91),
        n = r(28),
        a = r(113),
        s = r(142),
        i = r(8),
        l = r(6),
        d = r(29),
        c = r(152),
        u = r(5),
        p = r(102),
        h = r(95),
        g = [],
        b = [];
      function f(e) {
        g.push(e);
      }
      function v(e) {
        b.push(e);
      }
      function m(e) {
        e.forEach((e, t) => {
          try {
            e();
          } catch (e) {
            console.error(`WhatsApp ServiceWorker failed to shutdown [${t}]`);
          }
        });
      }
      function j(e, t) {
        console.log("WhatsApp ServiceWorker shutting down");
        var r = Promise.resolve(),
          f = [
            () => {
              t &&
                (r = (function () {
                  var e = (0, c.d)();
                  if (!e)
                    return (
                      console.warn(
                        "WhatsApp ServiceWorker shutdown deferVoipDaemonShutdownIfNeeded forgetDaemonSession returned null"
                      ),
                      Promise.resolve()
                    );
                  var t = (0, p.n)().then(() => {
                    console.log(
                      "WhatsApp ServiceWorker shutdown deferVoipDaemonShutdownIfNeeded wait for eviction completed"
                    );
                  });
                  return (t = (0, h.b)(t, 3e4, () => {
                    console.warn(
                      "WhatsApp ServiceWorker shutdown waitForVoipDaemonEviction completed on timeout"
                    );
                  }))
                    .then(() => e)
                    .then((e) => {
                      e.close();
                    });
                })()),
                r.then(() => {
                  m(b);
                });
            },
            ...g,
            () => (0, n.o)(),
            () => (0, a.closeLogs)(),
            () => (0, s.closeWamStore)(),
            () => (0, i.a)(),
            () => (0, l.R)(),
            () => (0, d.d)(),
            () => (0, o.jobsTable)().close(),
            () => (0, c.b)(),
            () => r.then(e, e),
          ];
        m(f);
        var v = (0, u.g)();
        v.length > 0 &&
          console.error(
            `WhatsApp ServiceWorker dangling tables: [${v.join(", ")}]`
          ),
          (0, u.a)();
      }
    },
    435: function (e, t, r) {
      r.r(t);
      var o,
        n = r(12),
        a = Math.floor(Date.now() / 1e3),
        s = !1,
        i = !1;
      function l(e, t, i) {
        if (o) return o;
        (self.Promise = r(380).default),
          (self.onerror = function (e, t, n) {
            s ||
              (r(113).crashlog("onerror", e),
              __LOG__(4)`filename: ${t} lineno: ${n}`,
              o.then((e) => {
                e.bridge.fireAndForget("basic", "sendLogs", { manual: !1 });
              }));
          }),
          (self.onunhandledrejection = function (e) {
            if (!s) {
              e.preventDefault();
              var t = e.reason,
                n = e.promise;
              self.ERROR && t && "QuotaExceededError" === t.name
                ? (__LOG__(4)`Unhandled dexie promise rejection: ${e}`,
                  r(113).crashlog("dexie rejected", String(t)))
                : (r(113).crashlog("rejected", t),
                  __LOG__(4)`### begin stack trace ${"2.2218.5"}\n${
                    null == t ? void 0 : t.stack
                  }`,
                  __LOG__(4)`### end stack trace`,
                  __LOG__(4)`promise: ${n}`),
                (function (e) {
                  o.then(
                    (t) => {
                      var r = t.bridge;
                      "QuotaExceededError" === (null == e ? void 0 : e.name) &&
                        r.fireAndForget("event", "ranOutOfStorage", {}),
                        s
                          ? __LOG__(
                              4
                            )`Tried to send logs for an unhandled rejection, but the worker was shutting down`
                          : r.fireAndForget("basic", "sendLogs", {
                              manual: !1,
                            });
                    },
                    () => {
                      __LOG__(
                        4
                      )`Tried to handle unhandled rejection, but the startup promise has been rejected`;
                    }
                  );
                })(t);
            }
          });
        var l = r(113);
        if (
          (l.initializeLogger(e, (e) => {
            o.then((e) => {
              e.bridge.fireAndForget("basic", "sendLogs", { manual: !1 });
            });
          }),
          n.i(h),
          Date.now() >= 1661212799e3)
        )
          throw (
            (__LOG__(4)`Worker ${a} expired!`,
            (self.SwEventHandlers = {}),
            new Error("build expired!"))
          );
        var d = r(173);
        self.WAM = d;
        var c = r(142);
        return (
          c.startWamStore(),
          c.submitInitialAttributes(),
          r(381).startAbPropsStore(),
          __LOG__(2)`Backend::startUp`,
          (o = Promise.resolve()
            .then(() => {
              var e = r(240);
              return r(197)
                .loadInfoStore()
                .then((t) =>
                  Promise.all([e.initLanguage(t.lang), e.initPolyfill()]).then(
                    () => t
                  )
                );
            })
            .then((e) => {
              var o = e.appMode,
                n = e.appBuild;
              return (t ? t(o, n) : Promise.resolve()).then(
                () => (
                  l.initializeLogsTable(),
                  r(443)
                    .startInWorkerBackend(o, i)
                    .then((e) => ({ bridge: e, appMode: o }))
                )
              );
            })).then(
            () => {
              __LOG__(2)`Backend Started!`;
            },
            (e) => {
              __LOG__(4)`Backend errored ${e.stack}\n${o.toString()}`;
            }
          ),
          o
        );
      }
      var d,
        c = !1,
        u = new Promise((e) => {
          d = e;
        }),
        p = null;
      function h() {
        s ||
          (p && (clearTimeout(p), (p = null)), (s = !0), r(263).shutdown(d, i));
      }
      function g(e) {
        s || (null != p && clearTimeout(p), (p = setTimeout(h, e)));
      }
      var b = null;
      function f(e) {
        if (null != b) return b;
        n.h(!1),
          n.g(() => {
            g(6e4);
          }),
          l(
            "SW",
            (e, t) =>
              "2.2218.5" !== t
                ? Promise.all([r.e(0), r.e(3), r.e(4), r.e(8), r.e(155)])
                    .then(r.bind(null, 420))
                    .then((t) => t.initializeMigrations("SW", e))
                    .then((e) => {
                      if ("migration-needed" === e.type) return e.migration();
                    })
                : Promise.resolve(),
            !1
          ),
          e && r(263).runOnShutdown(e);
        var t = o.then((e) => {
          var t = e.bridge;
          if ("reg" === e.appMode.mode) r(445).onRegPush(t);
          else {
            var o,
              n = r(197).DEVICE_INFO.get(),
              a = r(197).SERVER_PROPS.get(),
              s = r(197).AB_PROPS.get(),
              i = s.abKey,
              l = s.expoKeyStr;
            null != i && null != l && (o = l),
              WAM.logAttributes([
                ["regular", "private"],
                15,
                2,
                n.osVersion,
                ["regular", "private"],
                13,
                2,
                n.device,
                ["regular", "private"],
                5,
                0,
                parseInt(n.mcc, 10),
                ["regular", "private"],
                3,
                0,
                parseInt(n.mnc, 10),
                ["regular"],
                2141,
                2,
                a.abKey,
                ["regular"],
                4473,
                2,
                i,
                ["regular", "private"],
                5029,
                2,
                o,
              ]),
              r(444).attachHeadlessHandlers(t);
          }
          return g(6e4), u;
        });
        return (b = { bridge: o, pushFinished: t });
      }
      self.SwEventHandlers = {
        "bridge-channel"(e) {
          if (!o) {
            var t = e.data,
              a = e.ports,
              s = t.deviceInfo,
              i = t.hasWifi,
              d = t.shouldStartVoip;
            n.h(!0),
              l("BACK", null, d),
              __LOG__(2)`Backend establishing channel`;
            var c = a[0];
            o.then((e) => {
              var t = e.bridge;
              r(197).DEVICE_INFO.set(s);
              var o,
                n = r(197).SERVER_PROPS.get(),
                a = r(197).AB_PROPS.get(),
                l = a.abKey,
                d = a.expoKeyStr;
              null != l && null != d && (o = d),
                WAM.logAttributes([
                  ["regular"],
                  23,
                  1,
                  i,
                  ["regular"],
                  105,
                  0,
                  i ? 1 : s.carrier.radioType,
                  ["regular", "private"],
                  15,
                  2,
                  s.os.version,
                  ["regular", "private"],
                  13,
                  2,
                  s.device,
                  ["regular", "private"],
                  5,
                  0,
                  parseInt(s.carrier.mcc, 10),
                  ["regular", "private"],
                  3,
                  0,
                  parseInt(s.carrier.mnc, 10),
                  ["regular"],
                  2141,
                  2,
                  n.abKey,
                  ["regular"],
                  4473,
                  2,
                  l,
                  ["regular", "private"],
                  5029,
                  2,
                  o,
                ]),
                c.postMessage({ type: "bridge-channel-ready" });
              var u = r(132),
                p = u.attachBatchedPortal(t, [
                  "page",
                  "event",
                  "regPage",
                  "debug",
                ]);
              u.warnOnMissingHandlers(t),
                __LOG__(2)`Backend bridge is ready`,
                p.setPort(c);
            });
          }
        },
        onPush(e) {
          if (!c) return (c = !0), f(e).pushFinished;
        },
        onCallRejected() {
          var e = f();
          return (
            e.bridge.then((e) => {
              e.bridge.fireAndForget("voip", "rejectVoipCall", {});
            }),
            e.pushFinished
          );
        },
        onCallAccepted() {
          b
            ? (__LOG__(2)`Backend in incoming call`, (i = !0))
            : console.error(
                "WhatsApp accept call notification went to new ServiceWorker"
              );
        },
      };
    },
    444: function (e, t, r) {
      r.r(t),
        r.d(t, "attachHeadlessHandlers", function () {
          return k;
        });
      var o = r(9),
        n = r.n(o),
        a = r(176),
        s = r(313),
        i = r(41),
        l = r(20),
        d = r(57),
        c = r(40),
        u = r(63),
        p = r(74),
        h = "/icons/call-notif-avatar.svg",
        g = r(207),
        b = r(192),
        f = r(6),
        v = r(138),
        m = r(89),
        j = r(132),
        _ = r(263),
        S = r(315),
        P = r(102),
        w = r(12),
        y = r(209),
        M = r(17);
      function k(e) {
        var t = e,
          r = null;
        function o() {}
        var k = {
          finishedBooting: o,
          chatModified: o,
          chatAdded: o,
          contactsModified: o,
          msgAcked: o,
          mediaUpdated: o,
          msgMediaStatusUpdated: o,
          chatRead: o,
          fullsizeAvatarLoaded: o,
          avatarsUpdated: o,
          clearUserLastSeen: o,
          receiveChatState: o,
          receivePresence: o,
          blockList: o,
          clockSkewUpdated: o,
          serverPropsUpdated: o,
          msgsDeleted: o,
          msgsDeletedFromManyChats: o,
          chatDeleted: o,
          kicked() {
            (0, w.j)();
          },
          profilePicReceived() {
            throw new m.a("profilePicReceived");
          },
          ranOutOfStorage: o,
          voipSetupDone: o,
          gdprReportUpdated: o,
          gdprReportDownloaded: o,
          gdprReportDownloading: o,
          twoFactorReminderVerified: o,
          openChatWithGroup: o,
          groupInvitesRevoked: o,
          groupInviteCode: o,
          groupInviteCodeReset: o,
          callMuteStateChanged: o,
          callInterruptedStateChanged: o,
          callOfferNacked: o,
          callDurationChanged: o,
          callEnded: o,
          voipServiceDisconnected: o,
          callBusyReceived: o,
          callLogsUpdated: o,
          voipCallFailed: o,
          statusAuthorsLoaded: o,
          statusAuthorMeUpdated: o,
          statusAuthorsCleared: o,
          statusReceiptsUpdated: o,
          statusAuthorUpdated: o,
          statusAuthorsUpdated: o,
          statusMsgsUpdated: o,
          statusMsgRemoved: o,
          aboutUpdated: o,
          identityVerificationChanged: o,
          voipStatusChanged: o,
          hsmButtonPressed: o,
          statusSettingsUpdated: o,
          statusLastUnreadMsgLoaded: o,
          uiJobsInitialized: o,
          uiJobUpdated: o,
          uiJobScheduled: o,
          uiJobCleared: o,
          uiEphemeralTimestamp: o,
          refreshRecentGifs: o,
          addFavoriteGifs: o,
          removeFavoriteGif: o,
          viewOnceExpired: o,
          syncAbCacheFromStorage: o,
          pinAbProp: o,
          tosGatingStatusChanged: o,
          companionsLoaded: o,
          companionRegistrationFailed: o,
          trustedContactTokenUpdatedForJid: o,
          callStateChanged(t) {
            var o = t.state,
              a = t.peerJid;
            if (
              !t.isCaller &&
              ((function (e, t) {
                var r;
                "incoming" === e
                  ? Promise.all([
                      (0, u.b)(t),
                      ((r = t),
                      (0, p.getProfilePicTable)()
                        .getThumb(r)
                        .then((e) => {
                          var t = null == e ? void 0 : e.image;
                          return null != t
                            ? (function (e) {
                                return new Promise((t, r) => {
                                  var o = new FileReader();
                                  (o.onerror = () =>
                                    r(
                                      "blobToDataUrl error while reading blob as DataURL"
                                    )),
                                    (o.onload = () => {
                                      var e = o.result;
                                      "string" == typeof e
                                        ? t(e)
                                        : r(
                                            "blobToDataUrl after onload, result is not a string"
                                          );
                                    }),
                                    o.readAsDataURL(e);
                                });
                              })(t).catch(() => h)
                            : h;
                        })),
                    ]).then((e) => {
                      var r = n()(e, 2),
                        o = r[0],
                        a = r[1],
                        s = null != o ? (0, c.a)(o) : null;
                      (function (e, t, r) {
                        (0, i.p)(e, {
                          body: (0, l.k)(87),
                          requireInteraction: !0,
                          actions: [
                            { action: "accept", title: (0, l.k)(75) },
                            { action: "reject", title: (0, l.k)(102) },
                          ],
                          data: { action: i.c, jid: r },
                          tag: i.d,
                          image: t,
                          mozbehavior: {
                            soundFile: "default_dialer_ringtone",
                            vibrationPattern: [750, 1500],
                            loopControl: {
                              sound: !0,
                              soundMaxDuration: 45e3,
                              vibration: !0,
                              vibrationMaxDuration: 45e3,
                            },
                          },
                        });
                      })(null != s ? s : (0, d.d)(t), a, t);
                    })
                  : "none" === e &&
                    (0, i.m)(i.c, i.d).then((e) => e.forEach((e) => e.close()));
              })(o, a),
              null == r)
            ) {
              var s = new S.a("wa-bridge");
              (r = s),
                (0, _.runOnShutdown)(() => {
                  __LOG__(2)`Removing handler from wa-bridge BroadcastChannel`,
                    r && r.silenceChannel();
                }),
                (0, _.runAfterVoipEviction)(() => {
                  console.log("Closing wa-bridge BroadcastChannel"),
                    r && (r.close(), (r = null));
                }),
                (s.onmessage = (t) => {
                  r &&
                    "connect-page-to-sw" === t.data &&
                    (r.startMonitoring({
                      onTimeout: () => {
                        __LOG__(2)`Channel to the page lost, ending the call`,
                          (0, P.b)(!0),
                          r && (r.close(), (r = null)),
                          e.setHandlers("event", k);
                      },
                    }),
                    (0, j.attachBatchedPortal)(e, ["event"]).setPort(s));
                });
            }
          },
          callMissed(e) {
            var t = e.peerJid,
              r = e.id;
            (0, u.b)(t).then((e) =>
              (0, g.b)(null != e ? e : { jid: t }, r, "alert")
            );
          },
          msgBgUpdated: o,
          reactionReceived: o,
          notifyNewReaction(e) {
            var t = e.msg,
              r = e.reaction;
            Promise.all([(0, u.c)(), (0, M.B)(t.chatId)]).then((e) => {
              var o = n()(e, 2),
                a = o[0],
                s = o[1];
              if (s) {
                var i = {};
                a.forEach((e) => {
                  i[e.jid] = e;
                }),
                  (0, y.c)(r, t, s, i, (0, v.f)(), f.j.get(), "alert");
              }
            });
          },
          msgsReceived(e) {
            var r = e.affectedChats,
              o = e.newMsgs,
              n = e.changedMsgs;
            (0, u.c)().then((e) => {
              self.registration ||
                __LOG__(
                  4
                )`self.registration is not available within the HeadlessApi`;
              var s = {};
              e.forEach((e) => {
                s[e.jid] = e;
              }),
                (0, a.a)({
                  affectedChats: r,
                  newMsgs: o,
                  changedMsgs: n,
                  settings: f.j.get(),
                  contacts: s,
                  type: "alert",
                  user: (0, v.f)(),
                  fireAndForget: t.fireAndForget,
                });
            });
          },
          gdprReportReadyReceived() {
            (0, s.a)("alert");
          },
          commsConnected: o,
          commsDisconnected: o,
        };
        e.setHandlers("event", k),
          e.setNamespaceHandler("page", (e, t, r) => {
            var o;
            switch (e) {
              case "getPushEndpoint":
                o = (0, b.a)();
                break;
              case "getNetworkInfo":
                o = { isWifiConnected: !1, isRoaming: !1 };
                break;
              case "reload":
                (0, w.j)();
                break;
              default:
                throw new m.a(e);
            }
            r && r(o);
          }),
          (0, j.warnOnMissingHandlers)(e);
      }
    },
    445: function (e, t, r) {
      r.r(t),
        r.d(t, "onRegPush", function () {
          return i;
        });
      var o = r(319),
        n = r(158),
        a = r(20),
        s = r(41);
      function i(e) {
        var t = new o.a(e, () => Promise.resolve());
        t.getStoreInStates2(["BAN_APPEAL", "BLOCKED_BAN_APPEAL"]) &&
          (0, n.b)(t).then((e) => {
            var t, r;
            e &&
              ((t = (0, a.k)(53)),
              (r = { body: (0, a.k)(52), data: { action: s.a }, tag: s.b }),
              (0, s.p)(t, r));
          });
      }
      r(31);
    },
  });
