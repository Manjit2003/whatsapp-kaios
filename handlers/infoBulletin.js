"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [19],
  {
    537: function (t, e, i) {
      i.r(e),
        i.d(e, "GROUPS_DIRTY_BIT", function () {
          return h;
        });
      var n = i(88),
        r = i(30),
        o = i(16),
        a = i(6),
        s = i(34),
        l = i(3),
        u = i(17),
        d = i(284),
        c = i(202),
        h = "groups",
        f = new n.b("incomingInfoBulletinParser", (t) => {
          if ((t.assertTag("ib"), t.assertFromServer(), t.hasChild("dirty"))) {
            var e = !1,
              i = [];
            return (
              t.forEachChildWithTag("dirty", (t) => {
                var n = t.attrString("type");
                n === h ? (e = !0) : i.push(n);
              }),
              { type: "dirty", dirtyGroups: e, unsupportedDirtyBits: i }
            );
          }
          if (t.hasChild("edge_routing"))
            return {
              type: "routing",
              edgeInfo: t
                .child("edge_routing")
                .child("routing_info")
                .contentBytes(),
            };
          if (t.hasChild("client_expiration")) {
            var n = t.child("client_expiration");
            return {
              type: "expiration",
              time: n.hasAttr("t") ? n.attrTime("t") : null,
            };
          }
          if (t.hasChild("notice") && (0, c.b)()) {
            var r = [];
            return (
              t.forEachChildWithTag("notice", (t) => {
                var e = t.attrInt("id"),
                  i = t.attrTime("t"),
                  n = t.attrInt("version"),
                  o = (0, d.a)(t.attrInt("stage"));
                null != o
                  ? r.push({ id: e, state: o, ts: i, version: n })
                  : __LOG__(
                      3
                    )`handleInfoBulletin: Received user notice IB containing notice with invalid state: "${o}"`;
              }),
              { type: "notice", notices: r }
            );
          }
          if (t.hasChild("tos")) {
            var o = t.child("tos"),
              a = [];
            return (
              o.forEachChildWithTag("notice", (t) => {
                var e = t.attrInt("id");
                a.push(e);
              }),
              { type: "tos", notices: a }
            );
          }
          return null;
        });
      e.default = (0, n.c)("handleInfoBulletin", f, (t) => {
        if (t)
          if ("dirty" === t.type)
            (0, r.b)().fireAndForget(
              o.e.queryDirtyInfo(t.dirtyGroups, t.unsupportedDirtyBits)
            );
          else if ("routing" === t.type)
            a.C.set({ edgeInfo: (0, s.b)(t.edgeInfo) }),
              __LOG__(2)`handleInfoBulletin setting edge info`;
          else if ("expiration" === t.type) {
            var e = t.time;
            if (null == e) a.D.delete();
            else {
              var i = a.D.get(),
                n = (0, l.l)(3 * l.b);
              (null == i || (e < i.time && i.time >= n)) &&
                a.D.set({ version: "2.2218.5", time: e > n ? e : n });
            }
          } else {
            if ("notice" === t.type)
              return u.Uc(t.notices).then(() => "NO_ACK");
            t.type,
              (0, r.b)().fireAndForget(
                o.e.updateTOSGatingAcceptanceStatus(t.notices)
              );
          }
        else __LOG__(3)`handleInfoBulletin unrecognized info bulletin`;
        return "NO_ACK";
      });
    },
  },
]);
