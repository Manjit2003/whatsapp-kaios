"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [18],
  {
    494: function (e, r, t) {
      t.d(r, "b", function () {
        return A;
      }),
        t.d(r, "a", function () {
          return S;
        });
      var n = t(27),
        a = t.n(n),
        s = t(131),
        _ = t(107),
        i = t(497),
        o = t(34),
        I = t(3),
        E = t(33),
        c = t(177),
        u = t(43),
        T = t(293);
      function A(e, r) {
        return (function (e, r) {
          var t = (0, o.k)((0, o.l)(32));
          return (0, s.c)(t, r).then((n) => {
            var a = n.iv,
              _ = n.cipherKey,
              i = n.hmacKey;
            return (0, s.d)(_, a, i, r, e).then((e) => ({
              ciphertext: e.ciphertext,
              ciphertextHash: e.ciphertextHash,
              mediaKey: t,
            }));
          });
        })(e instanceof Blob ? e : new Blob([e]), r).then(
          (function () {
            var e = a()(function* (e) {
              var t = e.ciphertext,
                n = e.ciphertextHash,
                a = e.mediaKey,
                s = yield (function (e, r, t) {
                  var n = (0, o.k)((0, o.l)(32)),
                    a = (0, i.c)(t, e, n, r, new I.e());
                  return (0, _.b)(t)
                    .then((e) => {
                      if ("no-hosts" === e || "disconnected" === e)
                        throw new Error("Failed to upload media: " + e);
                      var r = { overallMmsVersion: 4, overallMediaType: N(t) };
                      return e.run(a, r);
                    })
                    .then((e) => {
                      if (!e) throw new Error("Failed to upload media");
                      var r = e.result;
                      if ("ok" !== r.type)
                        throw new Error("Failed to upload media");
                      var t = r.directPath,
                        n = r.handle;
                      if (!t)
                        throw new Error(
                          "Upload result does not have direct path"
                        );
                      return { directPath: t, handle: n };
                    });
                })(t, n, r);
              return {
                fileEncSha256: n,
                mediaKey: a,
                directPath: s.directPath,
                handle: s.handle,
              };
            });
            return function (r) {
              return e.apply(this, arguments);
            };
          })()
        );
      }
      function S(e) {
        var r = e.mediaKey,
          t = e.directPath,
          n = e.fileSha256,
          a = e.fileEncSha256;
        if (r && a && n) {
          var s = {
              version: "mms4",
              type: E.c.MD_APP_STATE,
              cryptoKey: r,
              ciphertextHash: a,
              directPath: t,
              size: "unknown",
            },
            i = new T.a({
              parts: c.b,
              onUpdate(e) {
                __LOG__(2)`download ${100 * e}% finished`;
              },
              onSuccess: () => {
                __LOG__(2)`download finished`;
              },
              onError: () => {
                __LOG__(2)`download failed`;
              },
            });
          return (0, c.c)("auto", s, (0, u.e)(n), i, {
            overallMmsVersion: 4,
            overallMediaType: 20,
          }).then((e) => {
            var r = e.result,
              t = e.metric;
            if ("success" === r.status)
              return (
                i.parts.processing.finished(),
                (0, _.k)(
                  Object.assign({}, t, {
                    overallDownloadResult: 1,
                    overallIsFinal: !0,
                  })
                ),
                r.plaintext
              );
            (0, _.k)(
              Object.assign({}, t, {
                overallDownloadResult: c.a[r.status],
                overallIsFinal: !0,
              })
            ),
              __LOG__(4)`syncd:downloadblob ${r.status}`;
          });
        }
        return Promise.resolve();
      }
      function N(e) {
        switch (Object.keys(E.c).find((r) => E.c[r] === e)) {
          case "MD_HISTORY":
            return 21;
          case "MD_APP_STATE":
            return 20;
          default:
            return 1;
        }
      }
    },
    495: function (e, r, t) {
      t.d(r, "a", function () {
        return a;
      }),
        t.d(r, "b", function () {
          return s;
        });
      var n = t(0),
        a = {
          UNKNOWN: 0,
          CHROME: 1,
          FIREFOX: 2,
          IE: 3,
          OPERA: 4,
          SAFARI: 5,
          EDGE: 6,
          DESKTOP: 7,
          IPAD: 8,
          ANDROID_TABLET: 9,
          OHANA: 10,
          ALOHA: 11,
          CATALINA: 12,
          TCL_TV: 13,
        },
        s = {},
        _ = {};
      (s.internalSpec = {
        os: [1, n.d.STRING],
        version: [2, n.d.MESSAGE, _],
        platformType: [3, n.d.ENUM, a],
        requireFullSync: [4, n.d.BOOL],
      }),
        (_.internalSpec = {
          primary: [1, n.d.UINT32],
          secondary: [2, n.d.UINT32],
          tertiary: [3, n.d.UINT32],
          quaternary: [4, n.d.UINT32],
          quinary: [5, n.d.UINT32],
        });
    },
    515: function (e, r, t) {
      t.d(r, "a", function () {
        return G;
      });
      var n = t(518),
        a = t(101),
        s = t(98),
        _ = t(330),
        i = t(3),
        o = t(6),
        I = t(27),
        E = t.n(I),
        c = t(184),
        u = t(322),
        T = (t(411), t(124), t(233), t(282), t(129), t(43));
      t(264),
        new ArrayBuffer(32),
        T.d,
        t(187),
        new ArrayBuffer(128),
        t(494),
        t(33);
      var A = t(4);
      t(60),
        t(216),
        t(120),
        t(410),
        Error,
        Error,
        Error,
        t(166)({
          DECRYPT_MESSAGE_FINAL: "decrypt_message_final",
          FRANKING_VALIDATION: "franking_validation",
          GET_DEVICES: "get_devices",
          MEDIA_UPLOAD: "media_upload",
          MESSAGE_DECRYPTION: "message_decryption",
          MESSAGE_ENCRYPTION: "message_encryption",
          OFFLINE_QUEUE: "offline_queue",
          OFFLINE_RETRY: "offline_retry",
          QUERY_GROUP: "query_group",
          QUERY_GROUPS: "query_groups",
          RETRY_RECEIPTS_SENT: "retry_receipts_sent",
          SAVE_SESSION_RETRIES: "save_session_retries",
          SAVE_SIGNAL_SESSION_RETRIES: "save_signal_session_retries",
          SYNCD_FATAL_ERROR: "syncd_fatal_error",
        }),
        t(66),
        t(166)({
          PATCH_PROTOBUF_SERIALIZATION_FAILED:
            "PATCH_PROTOBUF_SERIALIZATION_FAILED",
          MUTATIONS_PROTOBUF_SERIALIZATION_FAILED:
            "MUTATIONS_PROTOBUF_SERIALIZATION_FAILED",
          ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED:
            "ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED",
          ENCRYPTION_FAILED: "ENCRYPTION_FAILED",
          MISSING_SNAPSHOT_VERSION: "MISSING_SNAPSHOT_VERSION",
          MISSING_SNAPSHOT_MAC: "MISSING_SNAPSHOT_MAC",
          MISSING_SNAPSHOT_KEY_ID: "MISSING_SNAPSHOT_KEY_ID",
          MISSING_PATCH_VERSION: "MISSING_PATCH_VERSION",
          PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS:
            "PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS",
          MISSING_PATCH_SNAPSHOT_MAC: "MISSING_PATCH_SNAPSHOT_MAC",
          MISSING_PATCH_MAC: "MISSING_PATCH_MAC",
          MISSING_PATCH_KEY_ID: "MISSING_PATCH_KEY_ID",
          MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY:
            "MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY",
          MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH:
            "MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH",
          MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256:
            "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256",
          MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256:
            "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256",
          MISSING_MUTATION_OPERATION: "MISSING_MUTATION_OPERATION",
          MISSING_MUTATION_RECORD: "MISSING_MUTATION_RECORD",
          MISSING_MUTATION_INDEX: "MISSING_MUTATION_INDEX",
          MISSING_MUTATION_VALUE: "MISSING_MUTATION_VALUE",
          MISSING_MUTATION_KEY_ID: "MISSING_MUTATION_KEY_ID",
          EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED:
            "EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED",
          SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED:
            "SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED",
          PATCH_PROTOBUF_DESERIALIZATION_FAILED:
            "PATCH_PROTOBUF_DESERIALIZATION_FAILED",
          MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED:
            "MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED",
          ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED:
            "ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED",
          MISSING_ACTION_INDEX: "MISSING_ACTION_INDEX",
          MISSING_ACTION_VERSION: "MISSING_ACTION_VERSION",
          SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT:
            "SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT",
          SNAPSHOT_MAC_MISMATCH_IN_PATCH: "SNAPSHOT_MAC_MISMATCH_IN_PATCH",
          MAC_MISMATCH_PATCH: "MAC_MISMATCH_PATCH",
          DECRYPTION_FAILED: "DECRYPTION_FAILED",
          DUPLICATE_PATCH_VERSION_IN_COLLECTION:
            "DUPLICATE_PATCH_VERSION_IN_COLLECTION",
          SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH:
            "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH",
          SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT:
            "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT",
          MISSING_ACTION_VALUE: "MISSING_ACTION_VALUE",
          MISSING_ACTION_TIMESTAMP: "MISSING_ACTION_TIMESTAMP",
          XMPP_BAD_REQUEST_FOR_COLLECTION: "XMPP_BAD_REQUEST_FOR_COLLECTION",
          XMPP_NOT_FOUND_FOR_COLLECTION: "XMPP_NOT_FOUND_FOR_COLLECTION",
        });
      var S = t(67);
      t(407), t(303), t(106), t(30), t(16);
      var N = t(75),
        O = t(28),
        d = t(169),
        l = t(46),
        p = t(83),
        h = t(7),
        R = t(354),
        f = t(121),
        M = t(12);
      function P() {
        return (0, d.e)().then((e) => {
          (0, M.c)("event", "companionsLoaded", { companions: e });
        });
      }
      var C = new l.a(
          "removeCompanionParser",
          (e) => (e.assertTag("iq"), { result: "success" })
        ),
        L = new l.a(
          "deleteSyncdDataParser",
          (e) => (e.assertTag("iq"), { result: "success" })
        ),
        y = { 500: (0, p.d)("internal-server-error") };
      function v() {
        return (v = E()(function* (e, r) {
          var t = (0, h.A)(o.r.get(), e),
            n = yield (0, O.e)(
              (0, A.v)(
                "iq",
                { to: A.k, type: "set", id: (0, A.t)(), xmlns: "md" },
                (0, A.v)("remove-companion-device", {
                  jid: (0, A.c)(t),
                  reason: (0, A.b)(r),
                })
              ),
              C
            );
          return n.success
            ? n.result
            : (__LOG__(
                4
              )`Got bad request IQ response  ${n.errorCode} : ${n.errorText}`,
              SEND_LOGS("remove-companion-device-bad-request"),
              (0, p.f)(n, y));
        })).apply(this, arguments);
      }
      function m() {
        return (m = E()(function* (e) {
          var r = yield (0, O.e)(
            (0, A.v)(
              "iq",
              { to: A.k, type: "set", id: (0, A.t)(), xmlns: "md" },
              (0, A.v)("remove-companion-device", {
                all: "true",
                reason: (0, A.b)(e),
              })
            ),
            C
          );
          return r.success
            ? r.result
            : (__LOG__(
                4
              )`Got bad request IQ response  ${r.errorCode} : ${r.errorText}`,
              SEND_LOGS("remove-companion-device-bad-request"),
              (0, p.f)(r, y));
        })).apply(this, arguments);
      }
      function D() {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = E()(function* () {
          var e = yield (0, O.e)(
            (0, A.v)(
              "iq",
              {
                to: A.k,
                xmlns: "w:sync:app:state",
                type: "set",
                id: (0, A.t)(),
              },
              (0, A.v)("delete_all_data", null)
            ),
            L
          );
          return e.success
            ? e.result
            : (__LOG__(
                4
              )`Got bad request IQ response  ${e.errorCode} : ${e.errorText}`,
              SEND_LOGS("delete-syncd-data-bad-request"),
              (0, p.f)(e, y));
        })).apply(this, arguments);
      }
      (0, N.c)()
        .step("removeStoredCompanion", (e) => {
          var r = e.deviceId;
          return (0, d.g)(r)
            .then(() => (0, R.a)())
            .then(() => P());
        })
        .finalStep("sendRemoveCompanion", (e, r) => {
          var t = r.deviceId,
            n = r.reason;
          if (null != n)
            return (function (e, r) {
              return v.apply(this, arguments);
            })(t, n);
        })
        .end(),
        (0, N.c)()
          .step(
            "removeAllStoredCompanions",
            (e) => (
              e.reason,
              (0, d.f)()
                .then(() => (0, R.a)())
                .then(() => (0, f.a)())
                .then(() => P())
            )
          )
          .finalStep("sendRemoveAllCompanions", (e, r) =>
            (function (e) {
              return m.apply(this, arguments);
            })(r.reason).then(D)
          )
          .end(),
        t(29),
        t(412);
      var U = t(495);
      function F() {
        return (F = E()(function* (e, r) {
          throw new Error("This call is only supported in MD mode");
        })).apply(this, arguments);
      }
      function G(e, r, t) {
        switch (r) {
          case "historySync":
            return (0, n.a)(e, t);
          case "pushname_sync":
            return (
              (E = (0, i.E)()),
              (I = [
                (function (e, r) {
                  var t = { timestamp: r, pushNameSetting: { name: e } };
                  return {
                    collection: s.b.CRITICAL_BLOCK,
                    index: JSON.stringify([s.a.SETTING_PUSHNAME]),
                    binarySyncAction: (0, a.a)(_.b, t).readBuffer(),
                    version: 1,
                    operation: u.b.SET,
                    timestamp: r,
                    action: s.a.SETTING_PUSHNAME,
                  };
                })(o.z.get(), E),
              ]),
              (0, c.a)(I).then(() => {
                var e = I.map((e) => e.collection);
                (0, c.q)().then(() => {
                  (function (e, r) {
                    F.apply(this, arguments);
                  })(e);
                });
              })
            );
          default:
            throw new Error("Invalid companion device sync stage");
        }
        var I, E;
      }
      new l.a("pairDeviceParser", (e) => {
        if ((e.assertTag("iq"), e.hasChild("retry-ts")))
          return { type: "retry", ts: e.child("retry-ts").attrTime("ts") };
        if (e.hasChild("device")) {
          var r;
          if (e.hasChild("companion-props")) {
            var t = e.child("companion-props");
            t.hasContent() && (r = t.contentBytes());
          }
          return {
            type: "device",
            deviceJid: e.child("device").attrPhoneDeviceJid("jid"),
            companionProps: (0, S.a)(U.b, r),
          };
        }
      }),
        new Set(),
        new Set();
    },
    518: function (e, r, t) {
      t.d(r, "a", function () {
        return V;
      });
      var n = t(9),
        a = t.n(n),
        s = t(27),
        _ = t.n(s),
        i = t(328),
        o = t(6),
        I = t(8),
        E = t(3),
        c = t(5),
        u = t(2),
        T = t(15),
        A = t(339),
        S = t(37),
        N = t(106);
      function O(e, r) {
        var t = {
          id: e.externalId,
          fromMe: e.author === u.b,
          remoteJid: r.jid,
        };
        t.fromMe || "GROUP" !== r.type || (t.participant = e.author);
        var n = {
          key: t,
          starred: !!e.starred,
          messageTimestamp: e.ts,
          labels: [],
          messageStubParameters: [],
          reactions: [],
          status: l(e.ack),
          userReceipt: [],
          pollUpdates: [],
        };
        switch (e.type) {
          case u.f.TEXT:
            n.message = { conversation: e.text };
            break;
          case u.f.GROUP_NOTIFICATION:
            n.messageStubType = (function (e) {
              switch (e) {
                case "create":
                  return A.b.GROUP_CREATE;
                case "announcement":
                  return A.b.GROUP_CHANGE_ANNOUNCE;
                default:
                  return A.b.UNKNOWN;
              }
            })(e.subtype);
        }
        return n;
      }
      function d(e) {
        var r = l(e.ack),
          t = e.author === u.b,
          n = { id: e.externalId, fromMe: t },
          a = {};
        switch (e.type) {
          case S.c.TEXT:
            a.conversation = e.text;
        }
        var s = {
          key: n,
          message: a,
          status: r,
          messageTimestamp: e.ts,
          labels: [],
          messageStubParameters: [],
          reactions: [],
          userReceipt: [],
          pollUpdates: [],
        };
        return (
          t || (r === A.a.READ && (s.ignore = !0), (s.participant = e.author)),
          e.author === S.b &&
            null != e.campaignId &&
            (s.statusPsa = {
              campaignId: (0, N.a)(e.campaignId),
              campaignExpirationTimestamp:
                null != e.campaignDuration
                  ? (0, E.l)(e.campaignDuration, e.ts)
                  : void 0,
            }),
          s
        );
      }
      function l(e) {
        switch (e) {
          case T.a.SENT:
            return A.a.SERVER_ACK;
          case T.a.READ:
            return A.a.READ;
          case T.a.PLAYED:
            return A.a.PLAYED;
          case T.a.FAILED:
          case T.a.CONTENT_UNUPLOADABLE:
          case T.a.CONTENT_GONE:
            return A.a.ERROR;
          default:
            return A.a.DELIVERY_ACK;
        }
      }
      var p,
        h,
        R,
        f,
        M = t(354),
        P = 5e3;
      function C() {
        return (0, I.f)("getInitialBootstrap", (e) =>
          e.transact(
            "r",
            ["chats", "groups", "groupParticipantsInfo", "msgs"],
            () =>
              (function (e) {
                return e.getChats().then((r) => {
                  var t = [];
                  return (
                    r.forEach((e) => {
                      e.msgInfo.newest && t.push(e.msgInfo.newest);
                    }),
                    e.stores.msgs
                      .where("id")
                      .anyOf(t)
                      .toArray()
                      .then((e) => {
                        var t = {};
                        return (
                          e.forEach((e) => {
                            t[e.chat] = e;
                          }),
                          r.map((e) => ({ chat: e, lastMsg: t[e.id] }))
                        );
                      })
                  );
                });
              })(e).then((e) => {
                var r = (function (e) {
                  return e.map((e) => {
                    var r = e.chat,
                      t = D(e.lastMsg, r);
                    return {
                      id: r.jid,
                      name: r.groupInfo ? r.groupInfo.title : void 0,
                      messages: t ? [t] : [],
                      unreadCount: r.msgInfo.unreadMsgCount,
                      readOnly: m(r),
                      endOfHistoryTransferType:
                        i.a.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY,
                      conversationTimestamp: r.lastNotified || void 0,
                      archived: r.archived,
                      newJid: o.r.get(),
                      oldJid: o.r.get(),
                      notSpam: !0,
                      participant: r.groupInfo
                        ? r.groupInfo.participants.map((e) => ({ userJid: e }))
                        : [],
                    };
                  });
                })(e);
                return {
                  syncType: i.b.INITIAL_BOOTSTRAP,
                  conversations: r,
                  chunkOrder: 0,
                  progress: 100,
                  statusV3Messages: [],
                  pushnames: [],
                };
              })
          )
        );
      }
      function L() {
        return (0, I.f)("getInitialStatusV3", (e) =>
          (0, c.i)(
            (function (e) {
              var r = (0, E.x)(E.b);
              return e.stores.status
                .where("ts")
                .above(r)
                .reverse()
                .toArray()
                .then((e) => e.map(d));
            })(e).then((e) => ({
              syncType: i.b.INITIAL_STATUS_V3,
              statusV3Messages: e,
              pushnames: [],
              conversations: [],
            }))
          )
        );
      }
      function y() {
        return (0, I.f)("getInitialStatusV3", (e) =>
          (0, c.i)(
            (function (e) {
              return e.stores.contacts.toArray().then((e) => {
                var r = [];
                return (
                  e.forEach((e) => {
                    e.pushname && r.push({ id: e.jid, pushname: e.pushname });
                  }),
                  r
                );
              });
            })(e).then((e) => ({
              syncType: i.b.PUSH_NAME,
              chunkOrder: 0,
              pushnames: e,
              statusV3Messages: [],
              conversations: [],
            }))
          )
        );
      }
      function v() {
        return (0, I.f)("getChunkedRecentMessages", (e) =>
          (function (e) {
            return g.apply(this, arguments);
          })(e).then((e) => {
            var r = e.conversations,
              t = e.chunkOrder,
              n = e.progress;
            return {
              syncType: i.b.RECENT,
              conversations: r,
              chunkOrder: t,
              progress: n,
              statusV3Messages: [],
              pushnames: [],
            };
          })
        );
      }
      function m(e) {
        return !(
          "GROUP" !== e.type ||
          (e.groupInfo.isInGroup &&
            (!e.groupInfo.announcement || e.groupInfo.isAdmin))
        );
      }
      function D(e, r) {
        return { message: O(e, r), msgOrderId: e.rowId };
      }
      function g() {
        return (g = _()(function* (e) {
          var r = (0, E.x)(90 * E.b),
            t = (0, M.c)(),
            n = t.chunkOrder,
            s = t.progress;
          if (null == n || null == s || null == f) {
            var _ = yield U(e);
            (h = _.chatsMap),
              (p = _.chatMsgMap),
              (R = _.orderedChatIds),
              (f = _.chatCount),
              (n = 0),
              (s = 0);
          }
          for (
            var o = 0,
              I = [],
              u = function* () {
                var t = R[f - 1],
                  n = h[t],
                  s = a()(p[t], 2),
                  _ = s[0],
                  E = s[1],
                  u = yield (0, c.i)(
                    e.stores.msgs
                      .where("id")
                      .between(E, _, !0, !1)
                      .filter((e) => e.ts > r)
                      .limit(P - o)
                      .reverse()
                      .toArray()
                  ),
                  T = u.length;
                if (0 === T) G();
                else {
                  T < P - o ? G() : (p[t][0] = u[T - 1].id), (o += T);
                  var A = {
                    id: n.jid,
                    messages: u.map((e) => D(e, n)),
                    endOfHistoryTransferType:
                      i.a.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY,
                    participant: [],
                  };
                  I.push(A);
                }
              };
            o < P && f > 0;

          )
            yield* u();
          return (
            n++,
            (s = Math.floor(((R.length - f) / R.length) * 100)),
            { conversations: I, chunkOrder: n, progress: s }
          );
        })).apply(this, arguments);
      }
      function U(e) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = _()(function* (e) {
          var r = yield (0, c.i)(e.stores.chats.toArray()),
            t = yield (0, c.i)(e.getChats()),
            n = {},
            a = {},
            s = [];
          r.forEach((e) => {
            e.newest && e.oldest && (n[e.id] = [e.newest, e.oldest]);
          }),
            t.forEach((e) => {
              s.push(e.id), (a[e.id] = e);
            }),
            s.sort((e, r) => a[e].sortBy - a[r].sortBy);
          var _ = s.length;
          return {
            chatsMap: a,
            chatMsgMap: n,
            orderedChatIds: s,
            chatCount: _,
          };
        })).apply(this, arguments);
      }
      function G() {
        var e = R[R.length - 1];
        delete h[e], delete p[e], f--;
      }
      var H = t(101),
        b = t(262),
        B = t(33),
        w = t(62),
        k = t(494);
      function V(e, r) {
        return (function (e, r) {
          var t;
          switch (r) {
            case i.b.INITIAL_BOOTSTRAP:
              t = C;
              break;
            case i.b.INITIAL_STATUS_V3:
              t = L;
              break;
            case i.b.PUSH_NAME:
              t = y;
              break;
            case i.b.RECENT:
              t = v;
              break;
            default:
              return (
                __LOG__(4)`historySync:: Invalid historySync type ${r}`,
                Promise.reject("Invalid history sync type")
              );
          }
          return (
            __LOG__(2)`historySync::HistorySyncPhase ${Y(r)}`,
            null == t || null == r
              ? Promise.resolve()
              : Promise.all([t(), (0, b.a)({})]).then(
                  (function () {
                    var t = _()(function* (t) {
                      var n,
                        s,
                        _ = a()(t, 2),
                        o = _[0],
                        I = _[1];
                      r === i.b.RECENT &&
                        (null != o.chunkOrder && (s = o.chunkOrder),
                        (n = { chunkOrder: s, progress: o.progress }));
                      var E = (0, H.a)(i.c, o).readBuffer();
                      I.push(E, !0);
                      var c = I.result(),
                        u = new Blob([c]),
                        T = c.length,
                        A = yield self.crypto.subtle.digest("SHA-256", c);
                      return (0, k.b)(u, B.c.MD_HISTORY).then((t) => {
                        var a = t.fileEncSha256,
                          _ = t.mediaKey,
                          i = t.directPath,
                          o = {
                            historySyncNotification: {
                              fileSha256: A,
                              fileLength: T,
                              mediaKey: _,
                              fileEncSha256: a,
                              directPath: i,
                              syncType: r,
                              chunkOrder: s,
                            },
                            type: w.c.HISTORY_SYNC_NOTIFICATION,
                          };
                        return (0, M.d)(e, o, n);
                      });
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                )
          );
        })(e, r).catch(
          (e) => (
            __LOG__(4)`historySync:: Error in historySync ${Y(r)}`,
            Promise.reject(e)
          )
        );
      }
      function Y(e) {
        return Object.keys(i.b).find((r) => i.b[r] === e) || "UNKOWN PHASE";
      }
    },
  },
]);
