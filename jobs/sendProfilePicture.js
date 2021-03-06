"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [22],
  {
    536: function (e, r, t) {
      t.r(r),
        t.d(r, "setProfilePictureJob", function () {
          return y;
        }),
        t.d(r, "setGroupPictureJob", function () {
          return T;
        }),
        t.d(r, "resendProfilePicture", function () {
          return J;
        });
      var n = t(27),
        i = t.n(n),
        u = t(28),
        o = t(4),
        l = t(7),
        s = t(46),
        c = t(12),
        a = t(74),
        d = t(75),
        p = t(6),
        f = t(10),
        g = t(83),
        h = t(89),
        v = new s.a(
          "profilePhotoResponse",
          (e) => (
            e.assertAttr("type", "result"),
            e.hasChild("picture")
              ? { id: e.child("picture").attrInt("id") }
              : { id: null }
          )
        ),
        P = {
          400: (0, g.d)("bad-request"),
          406: (0, g.d)("bad-size-or-format"),
          500: (0, g.d)("server-error"),
          501: (0, g.d)("server-error"),
          503: (0, g.d)("server-error"),
        },
        b = Object.assign({}, P, { 401: (0, g.d)("not-yourself") }),
        m = Object.assign({}, P, { 401: (0, g.d)("not-in-group") }),
        y = (0, d.c)()
          .finalStep("setProfilePicture", (e) => {
            var r = e.picture;
            return w(p.r.get(), r, b);
          })
          .end(),
        T = (0, d.c)()
          .finalStep("setGroupPicture", (e) => w(e.jid, e.picture, m))
          .end();
      function j(e, r) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = i()(function* (e, r) {
          var t = null !== r ? yield (0, f.h)(r) : null;
          return (0,
          u.e)((0, o.v)("iq", { to: o.k, target: (0, l.p)(e) ? (0, o.g)(e) : o.d, type: "set", xmlns: "w:profile:picture", id: (0, o.t)() }, null !== t ? (0, o.v)("picture", { type: "image" }, t) : null), v);
        })).apply(this, arguments);
      }
      function w(e, r, t) {
        return j(e, r).then((n) => {
          if ((__LOG__(2)`${n}`, !n.success))
            return (
              WAM.log("regular", 468, void 0, [
                4,
                3,
                null == r ? void 0 : r.size,
                1,
                0,
                3,
              ]),
              (0, g.f)(n, t)
            );
          WAM.log("regular", 468, void 0, [
            4,
            3,
            null == r ? void 0 : r.size,
            1,
            0,
            1,
          ]);
          var i = n.result.id;
          return null != r && null != i
            ? ((0, h.c)("image canvas"),
              p.e.set("passed"),
              (0, c.e)("event", "profilePicReceived", { image: r }).then(
                (t) => {
                  var n = t.croppedImage;
                  return (0, a.getProfilePicTable)()
                    .storeThumb(e, { photoId: i, icon: n, thumb: r })
                    .then(() => {
                      (0, c.c)("event", "avatarsUpdated", {
                        changed: [{ jid: e, photoId: i }],
                      });
                    });
                }
              ))
            : (0, a.getProfilePicTable)()
                .storeEmptyThumb(e)
                .then(() => {
                  (0, c.c)("event", "avatarsUpdated", {
                    changed: [{ jid: e, photoId: null }],
                  });
                });
        });
      }
      function J() {
        return (0, a.getProfilePicTable)()
          .getThumb(p.r.get())
          .then((e) =>
            j(p.r.get(), (null == e ? void 0 : e.image) || null).then((e) => {
              if (!e.success) return (0, g.f)(e, b);
            })
          );
      }
    },
  },
]);
