"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [162],
  {
    555: function (t, s, u) {
      u.r(s),
        u.d(s, "default", function () {
          return n;
        });
      var e = u(4),
        r = u(28),
        i = new (u(46).a)("communitiesSubGroupsResponse", (t) => {
          var s = t.child("sub_groups"),
            u = [];
          return (
            s.forEachChildWithTag("group", (t) => {
              var s = t.attrString("id"),
                e = t.attrString("subject"),
                r = t.attrTime("s_t"),
                i = t.hasChild("default_sub_group");
              u.push({ id: s, title: e, titleTs: r, isDefault: i });
            }),
            u
          );
        });
      function n(t) {
        var s = (0, e.v)(
          "iq",
          { to: (0, e.g)(t), type: "get", xmlns: "w:g2", id: (0, e.t)() },
          (0, e.v)("sub_groups", null)
        );
        return (0, r.e)(s, i).then((t) => (t.success ? t.result : null));
      }
    },
  },
]);
