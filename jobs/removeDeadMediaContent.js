"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [102],
  {
    606: function (e, t, a) {
      a.r(t);
      var d = a(75),
        l = a(17),
        _ = a(222),
        n = a(71),
        h = a(105),
        i = a(12),
        r = a(89),
        c = new n.a();
      function o() {
        return (
          __LOG__(2)`deleteDetachedMedia requesting batch`,
          (0, l.e)()
            .then(l.H)
            .then((e) => {
              var t = e.media,
                a = e.maybeMore;
              return (
                __LOG__(2)`deleteDetachedMedia got ${t.length} media`,
                t
                  .reduce((e, t) => {
                    var a = t.id,
                      d = t.fsPath;
                    return e.then(() => {
                      d &&
                        (__LOG__(
                          2
                        )`deleteDetachedMedia checking page to delete ${a}`,
                        (0, r.c)("deleteDetachedMedia")),
                        __LOG__(2)`deleteDetachedMedia deleting media ${a}`;
                      var e = [(0, h.getChunkTable)().deleteAllByMedia(a)];
                      return (
                        null != d &&
                          e.push(
                            (0, i.e)("page", "deletePath", { path: d })
                              .then(() => {
                                __LOG__(
                                  2
                                )`deleteDetachedMedia successfully removed file ${d}`;
                              })
                              .catch((e) => {
                                __LOG__(
                                  3
                                )`deleteDetachedMedia failed to remove media from the gallery: ${e}`;
                              })
                          ),
                        Promise.all(e).then(
                          () => (
                            __LOG__(2)`deleteDetachedMedia deleted media ${a}`,
                            (0, l.Jb)(a)
                          )
                        )
                      );
                    });
                  }, Promise.resolve())
                  .then(() => {
                    if (a) return __LOG__(2)`deleteDetachedMedia looping`, o();
                    __LOG__(2)`deleteDetachedMedia success`;
                  })
              );
            })
            .then(() =>
              (0, _.k)().then((e) => {
                if (e && e.length > 0)
                  return Promise.all(
                    e.map((e) => () =>
                      (function (e) {
                        return (0, i.e)("page", "deletePath", { path: e })
                          .then(
                            () => (
                              __LOG__(
                                2
                              )`doDeletePath successfully removed file ${e}`,
                              (0, _.q)(e)
                            )
                          )
                          .catch((e) => {
                            __LOG__(
                              3
                            )`doDeletePath failed to remove media from the gallery: ${e}`;
                          });
                      })(e)
                    )
                  ).then(() => {});
              })
            )
        );
      }
      t.default = (0, d.c)()
        .finalStep("removeDeadMediaContent", () => c.enqueue(o))
        .end();
    },
  },
]);
