"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [7],
  {
    235: function (e, s, t) {
      t.d(s, "a", function () {
        return h;
      });
      var i = t(128),
        r = t(95),
        o = t(61),
        h = class {
          constructor(e) {
            (this.BT = new o.a()),
              (this.BU = null),
              (this.BV = null),
              (this.BW = 0),
              (this.endWithValue = (e) => {
                this.BW++, this.BT.resolve(e);
              }),
              (this.BS = e);
          }
          resetTimeoutAfter(e) {
            this.BV = Date.now() + e;
          }
          cancelReset() {
            this.BV = null;
          }
          reset() {
            this.BT.resolveWasCalled() ||
              (__LOG__(2)`PromiseRetryLoop: resetting ${this.BS.name}`,
              this.BW++,
              this.BX());
          }
          start() {
            this.BT.resolveWasCalled() ||
              (__LOG__(2)`PromiseRetryLoop: starting ${this.BS.name}`,
              0 !== this.BW &&
                __LOG__(
                  4
                )`PromiseRetryLoop was called several times. You may have race conditions`,
              this.BW++,
              this.BX());
          }
          BX() {
            var e = this.BS,
              s = this.BW,
              t = (0, i.b)(this.BS.timer);
            t();
            var o = () => {
              if (!this.BT.resolveWasCalled() && s === this.BW) {
                var h = Date.now();
                return (
                  (this.BU = (0, e.code)(this.endWithValue).then(() => {
                    if (!this.BT.resolveWasCalled()) {
                      var s = e.resetDelay;
                      ((void 0 !== s && Date.now() >= h + s) ||
                        (null != this.BV && this.BV <= Date.now())) &&
                        (__LOG__(2)`PromiseRetryLoop: resetting ${e.name}`,
                        (t = (0, i.b)(this.BS.timer))),
                        (this.BV = null);
                      var a = t();
                      return (
                        __LOG__(
                          2
                        )`PromiseRetryLoop: retrying ${e.name} in ${a}ms`,
                        (0, r.a)(a).then(o)
                      );
                    }
                  })),
                  this.BU
                );
              }
            };
            this.BU = Promise.resolve().then(o);
          }
          promise() {
            return this.BT.resolveWasCalled()
              ? this.BT.promise
              : this.BU
              ? Promise.race([
                  this.BT.promise,
                  this.BU.then(() => this.BT.promise),
                ])
              : Promise.reject(
                  new Error(
                    `PromiseRetryLoop ${this.BS.name} had promise() called before start()`
                  )
                );
          }
        };
    },
  },
]);
