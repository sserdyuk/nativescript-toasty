"use strict";
var app = require("application");
var Toasty = (function () {
    function Toasty(text, duration, position) {
        this.SHORT = 2.0;
        this.LONG = 4.0;
        this._text = text;
        this.duration = duration;
        this.position = position;
    }
    Object.defineProperty(Toasty.prototype, "duration", {
        set: function (value) {
            switch (value) {
                case "short":
                    this._duration = this.SHORT;
                    break;
                case "long":
                    this._duration = this.LONG;
                    break;
                default:
                    this._duration = this.SHORT;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "position", {
        set: function (value) {
            switch (value) {
                case "top":
                    this._position = CSToastPositionTop;
                    break;
                case "center":
                    this._position = CSToastPositionCenter;
                    break;
                case "bottom":
                    this._position = CSToastPositionBottom;
                    break;
                default:
                    this._position = CSToastPositionBottom;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Toasty.prototype.show = function () {
        if (!this._text) {
            throw new Error("Text is not set");
        }
        else {
            CSToastManager.setDefaultDuration(this._duration);
            CSToastManager.setDefaultPosition(this._position);
            this._toast = app.ios.rootController.view.makeToast(this.text);
        }
    };
    Toasty.prototype.cancel = function () {
        app.ios.rootController.view.hideToasts();
    };
    return Toasty;
}());
exports.Toasty = Toasty;
