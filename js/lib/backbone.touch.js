/*!
 * backbone.touch - v0.3.0
 * Copyright 2012, Raymond Julin (@nervetattoo)
 * backbone.touch.js may be freely distributed under the MIT license.
 */
(function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["underscore", "backbone"], t) : t(_, Backbone)
})(function (t, e) {
    "use strict";
    var n = function (e, n) {
        return e && e[n] ? t.isFunction(e[n]) ? e[n]() : e[n] : null
    }, i = /^(\S+)\s*(.*)$/;
    return t.extend(e.View.prototype, {_touching: !1, touchPrevents: !0, touchThreshold: 10, isTouch: "ontouchstart"in document && !("callPhantom"in window), delegateEvents: function (e) {
        if (e || (e = n(this, "events"))) {
            this.undelegateEvents();
            var o = ".delegateEvents" + this.cid;
            t(e).each(function (n, h) {
                if (t.isFunction(n) || (n = this[e[h]]), !n)throw Error('Method "' + e[h] + '" does not exist');
                var s = h.match(i), c = s[1], u = s[2], r = t.bind(this._touchHandler, this);
                n = t.bind(n, this), this._useTouchHandlers(c, u) ? (this.$el.on("touchstart" + o, u, r), this.$el.on("touchend" + o, u, {method: n}, r)) : (c += o, "" === u ? this.$el.bind(c, n) : this.$el.on(c, u, n))
            }, this)
        }
    }, _useTouchHandlers: function (t) {
        return this.isTouch && "click" === t
    }, _touchHandler: function (t) {
        if ("changedTouches"in t.originalEvent) {
            var e = t.originalEvent.changedTouches[0], n = e.clientX, i = e.clientY;
            switch (t.type) {
                case"touchstart":
                    console.log('touchstart')
                    this._touching = [n, i];
                    break;
                case"touchend":
                    console.log('touchend')
                    var o = this._touching[0], h = this._touching[1], s = this.touchThreshold;
                    if (o + s > n && n > o - s && h + s > i && i > h - s) {
                        if (this._touching = !1, this.touchPrevents) {
                            var c = t.currentTarget.tagName;
                            ("BUTTON" === c || "A" === c) && (t.preventDefault(), t.stopPropagation())
                        }
                        t.data.method(t)
                    }
            }
        }
    }}), e
});