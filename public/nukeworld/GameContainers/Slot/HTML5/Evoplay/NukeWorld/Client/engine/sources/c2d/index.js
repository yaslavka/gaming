!function t(e, i, r) {
  function s(o, a) {
    if (!i[o]) {
      if (!e[o]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(o, !0);
        if (n) return n(o, !0);
        var c = new Error("Cannot find module '" + o + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var h = i[o] = {exports: {}};
      e[o][0].call(h.exports, (function (t) {
        return s(e[o][1][t] || t)
      }), h, h.exports, t, e, i, r)
    }
    return i[o].exports
  }

  for (var n = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
  return s
}({
  1: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0, t("./common/index.js");
    var r = A(t("./common/Device.js")), s = A(t("./common/layout/Layout.js")), n = A(t("./common/Localization.js")),
      o = A(t("./utils/index.js")), a = A(t("./utils/Timeout.js")), l = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
        var e = C();
        if (e && e.has(t)) return e.get(t);
        var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
          var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
          n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
        }
        i.default = t, e && e.set(t, i);
        return i
      }(t("./utils/TypeCheckers.js")), c = A(t("./event/Signal.js")), h = A(t("./event/EventDispatcher.js")),
      u = A(t("./geom/index.js")), d = A(t("./store/index.js")), f = A(t("./display/index.js")),
      p = A(t("./display3d/index.js")), m = A(t("./engine/Engine.js")), g = A(t("./engine/Time.js")),
      _ = A(t("./loader/Loader.js")), y = A(t("./loader/File.js")), v = A(t("./loader/Manifest.js")),
      b = A(t("./globalStore/globalStore.js")), x = A(t("./logger/logger.js")), j = A(t("./objectPool/objectPool.js")),
      w = A(t("./observer/observer.js")), M = A(t("./observer/eventsConfig.js")), S = A(t("./audio/AudioManager.js")),
      O = A(t("./fsm/FSM.js")), P = A(t("./fsm/FSMConfig.js")), T = A(t("./transport/controller.js"));

    function C() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return C = function () {
        return t
      }, t
    }

    function A(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function E(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function k(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    i.default = class {
      constructor() {
        this.utils = o.default, this.Device = r.default, this.Layout = s.default, this.Localization = n.default, this.globalStore = new b.default, this.Logger = x.default, this.ObjectPool = j.default, this.observer = new w.default, this.EventsConfig = M.default, this.Tween = window.GreenSockGlobals.TweenMax, this.Timeline = window.GreenSockGlobals.TimelineMax, this.easing = window.GreenSockGlobals.com.greensock.easing, window.gsap = {TweenMax: this.Tween}, this.Timeout = a.default, this.once = o.default.Functions.once, this.last = o.default.Functions.last, this.call = o.default.Functions.call, this.series = o.default.Functions.series, this.waitLast = o.default.Functions.waitLast, this.parseGetParams = o.default.Functions.parseGetParams, this.recursiveGet = o.default.Functions.recursiveGet, this.recursiveSet = o.default.Functions.recursiveSet, this.type = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? E(Object(i), !0).forEach((function (e) {
              k(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : E(Object(i)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }({}, l), this.Signal = c.default, this.EventDispatcher = h.default, this.geom = u.default, this.store = d.default, this.display = f.default, this.display3d = p.default, this.perlin = new p.default.Math.Perlin, this.Engine = m.default, this.time = new g.default, this.Loader = _.default, this.File = y.default, this.Manifest = v.default, this.AudioManager = S.default, this.fsm = {
          FSM: O.default,
          FSMConfig: P.default
        }, this.transport = new T.default
      }
    }
  }, {
    "./audio/AudioManager.js": 3,
    "./common/Device.js": 4,
    "./common/Localization.js": 5,
    "./common/index.js": 10,
    "./common/layout/Layout.js": 11,
    "./display/index.js": 63,
    "./display3d/index.js": 102,
    "./engine/Engine.js": 145,
    "./engine/Time.js": 147,
    "./event/EventDispatcher.js": 149,
    "./event/Signal.js": 150,
    "./fsm/FSM.js": 151,
    "./fsm/FSMConfig.js": 152,
    "./geom/index.js": 155,
    "./globalStore/globalStore.js": 161,
    "./loader/File.js": 163,
    "./loader/Loader.js": 164,
    "./loader/Manifest.js": 165,
    "./logger/logger.js": 166,
    "./objectPool/objectPool.js": 167,
    "./observer/eventsConfig.js": 168,
    "./observer/observer.js": 169,
    "./store/index.js": 175,
    "./transport/controller.js": 179,
    "./utils/Timeout.js": 189,
    "./utils/TypeCheckers.js": 191,
    "./utils/index.js": 194
  }],
  2: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor(t) {
        let {
          loop: e = !1,
          autoplay: i = !1,
          playAgain: s = null,
          group: n = r.GROUPS.SFX,
          channel: o = null,
          interrupt: a,
          resolver: l
        } = t;
        this.loop = e, this.autoplay = i, this.playAgain = s, this.group = n, this.channel = o, this.interrupt = a, this.resolver = l
      }
    }

    r.GROUPS = {SFX: "sfx", MUSIC: "music"}, r.PLAY_AGAIN_PARAMS = {
      SKIP: "skip",
      RESTART: "restart",
      STOP: "stop"
    }, r.INTERRUPT_PARAMS = {SKIP: "skip"};

    class s extends window.Howl {
      constructor(t) {
        let {name: e, file: i, params: s = {}} = t;
        const n = new r(s);
        super({
          src: i, autoplay: n.autoplay, loop: n.loop, onload: () => {
          }, onloaderror: (t, e) => {
            console.error(e)
          }
        }), this.name = e, this.params = n
      }

      play() {
        if (this.playing(this.name)) {
          if (this.playAgain == r.PLAY_AGAIN_PARAMS.SKIP) return;
          if (this.playAgain == r.PLAY_AGAIN_PARAMS.RESTART && this.stop(), this.playAgain == r.PLAY_AGAIN_PARAMS.STOP) return void this.stop()
        }
        super.play(...arguments)
      }

      get channel() {
        return this.params.channel
      }

      get group() {
        return this.params.group
      }

      get resolver() {
        return this.params.resolver
      }

      get playAgain() {
        return this.params.playAgain
      }

      get interrupt() {
        return this.params.interrupt
      }
    }

    s.Params = r;
    var n = s;
    i.default = n
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  3: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.replace"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Audio.js")) && r.__esModule ? r : {default: r};
    i.default = class {
      constructor() {
        this._logger = c2d.Logger.Of("AudioManager"), this._formats = {
          ogg: "ogg",
          mp3: "mp3"
        }, this._fileExtension = window.Howler.codecs(this._formats.ogg) ? this._formats.ogg : this._formats.mp3, window.Howler.autoUnlock = !0, this._checkContextInChrome(), this.audios = {}, this.groups = {}, this.customAudioVolume = {}, this.customAudioFadeTweens = {}, this.conflictResolvers = {}, this.masterVolume = 1, this._enabled = !0
      }

      loadAudio(t) {
        const e = t.file.substring(t.file.lastIndexOf("."));
        t.file = t.file.replace(e, ".".concat(this._fileExtension));
        const i = new s.default(t);
        return this.audios[t.name] = i, this.groups[i.group] = {volume: 1}, i
      }

      playAudio(t) {
        let e = this.audios[t];
        if (e) {
          if (e.resolver) {
            const t = Object.values(this.audios).filter(t => t.resolver === e.resolver),
              i = this.conflictResolvers[e.resolver];
            i ? e = i(t) : this._logger.error("Audio ConflictResolver not found for ".concat(e.resolver, " confusion"))
          }
          if (e) {
            Object.values(this.audios).filter(t => !!e.channel && t.channel === e.channel).filter(t => t !== e && t.playing()).forEach(t => this.stopAudio(t.name)), e.volume(this._getAudioVolume(e)), e.play()
          }
          return e
        }
      }

      stopAudio(t) {
        if (this.audios[t]) return this.audios[t].stop(), this.audios[t]
      }

      addConflictResolver(t, e) {
        this.conflictResolvers[t] = e
      }

      setGroupVolume(t, e) {
        this.groups[t] && (this.groups[t].volume = e, this._updateVolume())
      }

      setMasterVolume(t) {
        this.masterVolume = t, this._updateVolume()
      }

      set enabled(t) {
        this._enabled = t, this._updateVolume()
      }

      get enabled() {
        return this._enabled
      }

      setAudioVolume(t, e) {
        this._fadeKill(t), this._setAudioVolume(t, e)
      }

      audioFadeIn(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._audioFade(t, e, i)
      }

      audioFadeOut(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._audioFade(t, e, i)
      }

      _audioFade(t, e, i) {
        this._fadeKill(t);
        const r = this._getCustomAudioVolume(t);
        if (r === i) return;
        const s = {volume: r}, n = c2d.Tween.to(s, e, {
          volume: i, onUpdate: () => {
            this._setAudioVolume(t, s.volume)
          }, onComplete: () => {
            delete this.customAudioFadeTweens[t], this._setAudioVolume(t, i)
          }
        });
        this.customAudioFadeTweens[t] = n
      }

      _setAudioVolume(t, e) {
        this.customAudioVolume[t] = e, this._updateVolume()
      }

      _fadeKill(t) {
        this.customAudioFadeTweens[t] && (this.customAudioFadeTweens[t].kill(), delete this.customAudioFadeTweens[t])
      }

      _getCustomAudioVolume(t) {
        const e = this.customAudioVolume[t];
        return c2d.type.isNullOrUndefined(e) ? 1 : e
      }

      _getAudioVolume(t) {
        const e = this._getCustomAudioVolume(t.name), i = this.groups[t.group].volume;
        return this.masterVolume * i * e * Number(this.enabled)
      }

      _updateVolume() {
        Object.values(this.audios).forEach(t => t.volume(this._getAudioVolume(t)))
      }

      _checkContextInChrome() {
        const t = window.Howler.ctx;
        !function () {
          function e() {
            t && "running" === t.state ? (document.removeEventListener("click", e), document.removeEventListener("touch", e)) : t && t.resume && t.resume()
          }

          document.addEventListener("click", e), document.addEventListener("touch", e)
        }()
      }
    }
  }, {"./Audio.js": 2, "core-js/modules/es.string.replace": 327}],
  4: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/es.string.includes"), t("core-js/modules/es.string.match"), t("core-js/modules/es.string.replace"), t("core-js/modules/es.string.split"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const r = window.document.documentElement, s = t => {
      r.classList.add(...t.split(" ").filter(String))
    }, n = t => {
      r.classList.remove(...t.split(" "))
    }, o = t => -1 !== window.navigator.userAgent.toLowerCase().indexOf(t);
    i.default = class {
      constructor() {
        this.supportWebP = null, this.setup()
      }

      async setup() {
        this.addDeviceClass(), this.supportWebP = await this.checkWebPSupport()
      }

      addDeviceClass() {
        this.ios ? this.ipad ? s("ios ipad tablet") : this.iphone ? s("ios iphone mobile ".concat(this.iphoneVersion)) : this.ipod && s("ios ipod mobile") : this.android ? this.androidTablet ? s("android tablet") : s("android mobile") : this.blackberry ? this.blackberryTablet ? s("blackberry tablet") : s("blackberry mobile") : this.windows ? this.windowsTablet ? s("windows tablet") : this.windowsPhone ? s("windows mobile") : s("desktop") : this.fxos ? this.fxosTablet ? s("fxos tablet") : s("fxos mobile") : this.meego ? s("meego mobile") : this.nodeWebkit ? s("node-webkit") : this.television ? s("television") : this.desktop && s("desktop"), this.cordova && s("cordova"), this.firefox && s("firefox")
      }

      async checkWebPSupport() {
        return new Promise(t => {
          const e = new Image;
          e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", e.onload = e.onerror = function () {
            t(2 === e.height)
          }
        })
      }

      _handleOrientation() {
        this.landscape ? (n("portrait"), s("landscape")) : (n("landscape"), s("portrait"))
      }

      get resourcesResolution() {
        return this.tablet ? "tablet" : this.desktop ? "desktop" : ""
      }

      get type() {
        return this.mobile ? "mobile" : "desktop"
      }

      get resourcesType() {
        return this.mobile ? this.orientation : "desktop"
      }

      get ios() {
        return this.iphone || this.ipod || this.ipad
      }

      get iphone() {
        return !this.windows && o("iphone")
      }

      get iOSVersion() {
        const t = window.navigator.userAgent, e = t.indexOf("OS ");
        return t.indexOf("iPhone") > -1 && e > -1 ? window.Number(t.substr(e + 3, 3).replace("_", ".")) : 0
      }

      get isIphone5() {
        return this.iOSVersion >= 6 && window.devicePixelRatio >= 2 && 548 === window.screen.availHeight
      }

      get isIphoneX() {
        const t = window.devicePixelRatio || 1, e = window.screen.width * t, i = window.screen.height * t;
        return 1125 === e && 2436 === i
      }

      get iphoneVersion() {
        return this.isIphone5 ? "iphone5" : ""
      }

      get firefox() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }

      get chrome() {
        return navigator.userAgent.toLowerCase().indexOf("chrome") > -1
      }

      get safari() {
        var t = window.navigator.userAgent, e = this.ios, i = !!t.match(/Safari/i),
          r = !t.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i), s = !1;
        e ? s = !!t.match(/WebKit/i) && i && r : s = void 0 !== window.safari || i && r;
        return s
      }

      get ipod() {
        return o("ipod")
      }

      get ipad() {
        if (o("ipad")) return !0;
        if (this.android || this.linux) return !1;
        return [[768, 1024, 1, 3072, 3936], [768, 1024, 2, 3072, 3938], [834, 1112, 2, 3336, 4290], [834, 1194, 2, 3336, 4602], [1024, 1366, 2, 4096, 5306], [1024, 1366, 2, 4096, 5290]].some(t => {
          let [e, i, r] = t;
          return window.screen.width === e && window.screen.height === i && window.devicePixelRatio === r
        })
      }

      get mini() {
        return 240 === window.innerWidth && 320 === window.innerHeight
      }

      get android() {
        return !this.windows && o("android")
      }

      get androidPhone() {
        return this.android && o("mobile")
      }

      get androidTablet() {
        return this.android && !o("mobile")
      }

      get blackberry() {
        return o("blackberry") || o("bb10") || o("rim") || -1 !== window.navigator.platform.toLowerCase().indexOf("blackberry")
      }

      get blackberryPhone() {
        return this.blackberry && !o("tablet")
      }

      get blackberryTablet() {
        return this.blackberry && o("tablet")
      }

      get windows() {
        return o("windows")
      }

      get windowsPhone() {
        return this.windows && o("phone")
      }

      get windowsTablet() {
        return this.windows && o("touch") && !this.windowsPhone
      }

      get fxos() {
        return (o("(mobile;") || o("(tablet;")) && o("; rv:")
      }

      get fxosPhone() {
        return this.fxos && o("mobile")
      }

      get fxosTablet() {
        return this.fxos && o("tablet")
      }

      get meego() {
        return o("meego")
      }

      get cordova() {
        return window.cordova && "file:" === window.location.protocol
      }

      get nodeWebkit() {
        return "object" == typeof window.process
      }

      get instagram() {
        return window.navigator.userAgent.toLowerCase().indexOf("instagram ") > -1
      }

      get mobileEmulator() {
        return this.mobile && ("MacIntel" === window.navigator.platform || "Win32" === window.navigator.platform)
      }

      get phone() {
        return this.androidPhone || this.iphone || this.ipod || this.windowsPhone || this.blackberryPhone || this.fxosPhone || this.meego
      }

      get mobile() {
        return this.phone || this.tablet
      }

      get tablet() {
        const t = -1 !== window.navigator.userAgent.toLowerCase().indexOf("ucbrowser") && Math.min(window.innerWidth, window.innerHeight) / Math.max(window.innerWidth, window.innerHeight) > 2 / 3;
        return this.ipad || this.androidTablet || this.blackberryTablet || this.windowsTablet || this.fxosTablet || t
      }

      get desktop() {
        return !this.mobile
      }

      get television() {
        const t = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
        let e = 0;
        for (; e < t.length;) {
          if (o(t[e])) return !0;
          e += 1
        }
        return !1
      }

      get portrait() {
        return !this.desktop && window.outerHeight / window.outerWidth > 1
      }

      get landscape() {
        return !this.portrait
      }

      get orientation() {
        return this.portrait ? "portrait" : "landscape"
      }

      get rendererResolution() {
        return Math.min(2, window.devicePixelRatio)
      }

      get insideIFrame() {
        return window.top !== window.self
      }

      get ipadChrome() {
        return !this.safari && this.ipad
      }

      get iosChrome() {
        return this.ios && !this.safari && navigator.userAgent.toLowerCase().includes("gecko) crios")
      }

      get iosOpera() {
        return this.ios && !this.safari && navigator.userAgent.toLowerCase().includes("gecko) mobile")
      }

      get iosFirefox() {
        return this.ios && !this.safari && navigator.userAgent.toLowerCase().includes("gecko) fxios")
      }

      get iosYandex() {
        return this.ios && navigator.userAgent.toLowerCase().includes("yabrowser")
      }

      get ios14() {
        return o("os 14")
      }

      get linux() {
        return o("linux")
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/es.string.match": 326,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  5: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? r(Object(i), !0).forEach((function (e) {
          n(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function n(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    t("core-js/modules/es.regexp.constructor"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.replace"), t("core-js/modules/es.string.split"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const o = "".concat("0123456789", ".,-#:*");
    const a = new class {
      constructor() {
        this._dictionary = {}, this._uniqueChars = "", function () {
          if (!window.graphemeSplitter) throw new Error("GraphemeSplitter lib not found");
          if ("5.3.7" != PIXI.VERSION) throw new Error("Make sure GraphemeSplitter patch exist in pixi.js lib")
        }()
      }

      addToDictionary(t) {
        this._dictionary = s(s({}, this._dictionary), t);
        const e = Object.values(this._dictionary).reduce((t, e) => t.concat(e.toLowerCase() + e.toUpperCase()), "").concat(o);
        this._uniqueChars = window.graphemeSplitter.splitGraphemes(e).filter((function (t, e, i) {
          return i.indexOf(t) === e
        }))
      }

      getText(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this._dictionary[t] || t;
        if (e) for (const t in e) i = i.replace(new RegExp("\\${" + t + "}", "g"), e[t]);
        return i
      }

      get dictionary() {
        return this._dictionary
      }

      findUniqueChars(t) {
        return Object.values(t).reduce((t, e) => t.concat(e.toLowerCase() + e.toUpperCase()), "").concat(o).split("").filter((t, e, i) => i.indexOf(t) == e).join("")
      }

      get uniqueChars() {
        return this._uniqueChars
      }
    };
    String.prototype.ls = function (t) {
      return a.getText(this, t)
    };
    var l = a;
    i.default = l
  }, {
    "core-js/modules/es.regexp.constructor": 322,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/es.string.split": 328
  }],
  6: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.flat-map"), t("core-js/modules/es.array.unscopables.flat-map"), t("core-js/modules/es.string.includes"), Array.prototype.equal || Object.defineProperty(Array.prototype, "equal", {
      value: function (t) {
        if (this.length !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this[e] !== t[e]) return !1;
        return !0
      }, enumerable: !1
    }), Array.prototype.exclude || Object.defineProperty(Array.prototype, "exclude", {
      value: function (t) {
        return this.filter((function (e) {
          return t.indexOf(e) < 0
        }))
      }, enumerable: !1
    }), Array.prototype.remove || Object.defineProperty(Array.prototype, "remove", {
      value: function (t) {
        const e = this.indexOf(t);
        return !(e < 0) && (this.splice(e, 1), !0)
      }, enumerable: !1
    }), Array.prototype.last || Object.defineProperty(Array.prototype, "last", {
      get: function () {
        return this[this.length - 1]
      }, enumerable: !1
    }), Array.prototype.first || Object.defineProperty(Array.prototype, "first", {
      get: function () {
        return this[0]
      }, enumerable: !1
    }), Array.prototype.random || Object.defineProperty(Array.prototype, "random", {
      get: function () {
        return this[Math.randomInteger(0, this.length - 1)]
      }, enumerable: !1
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function (t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this), r = i.length >>> 0;
        if (0 === r) return !1;
        var s, n, o = 0 | e, a = Math.max(o >= 0 ? o : r - Math.abs(o), 0);
        for (; a < r;) {
          if ((s = i[a]) === (n = t) || "number" == typeof s && "number" == typeof n && isNaN(s) && isNaN(n)) return !0;
          a++
        }
        return !1
      }
    }), Array.prototype.fromObject || Object.defineProperty(Array, "fromObject", {
      value: function (t) {
        const e = [];
        for (const i in t) e.push(t[i]);
        return e
      }, enumerable: !1
    }), Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
      value: function (t, e) {
        var i = e || this;
        if (null === i) throw new TypeError("Array.prototype.flatMap called on null or undefined");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var r = [], s = Object(i), n = s.length >>> 0, o = 0; o < n; ++o) if (o in s) {
          var a = t.call(i, s[o], o, s);
          r = r.concat(a)
        }
        return r
      }
    })
  }, {
    "core-js/modules/es.array.flat-map": 314,
    "core-js/modules/es.array.unscopables.flat-map": 318,
    "core-js/modules/es.string.includes": 325
  }],
  7: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.split");
    const r = Math.PI / 180, s = 180 / Math.PI;
    Object.defineProperty(Math, "randomFloat", {
      value: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
        return Math.random() * (e - t) + t
      }, enumerable: !1
    }), Object.defineProperty(Math, "randomInteger", {
      value: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
        return Math.floor(Math.random() * (e - t + 1)) + t
      }, enumerable: !1
    }), Object.defineProperty(Math, "randomColor", {
      value: function () {
        let t = "0x";
        for (let e = 0; e < 6; e++) t += "0123456789ABCDEF"[Math.randomInteger(0, "0123456789ABCDEF".length - 1)];
        return t
      }, enumerable: !1
    }), Object.defineProperty(Math, "radians", {
      value: function (t) {
        return t * r
      }, enumerable: !1
    }), Object.defineProperty(Math, "degrees", {
      value: function (t) {
        return t * s
      }, enumerable: !1
    }), Object.defineProperty(Math, "countDecimals", {
      value: function (t) {
        return t % 1 != 0 ? t.toString().split(".")[1].length : 0
      }, enumerable: !1
    }), Object.defineProperty(Math, "clamp", {
      value: function (t, e, i) {
        return t < e ? e : t > i ? i : t
      }, enumerable: !1
    }), Object.defineProperty(Math, "lerp", {
      value: function (t, e, i) {
        return (1 - i) * t + i * e
      }, enumerable: !1
    }), Object.defineProperty(Math, "smoothstep", {
      value: function (t, e, i) {
        return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
      }, enumerable: !1
    })
  }, {"core-js/modules/es.regexp.to-string": 324, "core-js/modules/es.string.split": 328}],
  8: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.trim"), PIXI.Ticker.shared.autoStart = !1, PIXI.Ticker.shared.stop(), PIXI.isAntialiasNeeded = function () {
      return !0
    }, Object.defineProperty(PIXI.Texture.prototype, "frame", {
      get: function () {
        return this._frame
      }, set: function (t) {
        this._frame = t, this.noFrame = !1;
        var e = t.x, i = t.y, r = t.width, s = t.height, n = e + r - this.baseTexture.width > .01,
          o = i + s - this.baseTexture.height > .01;
        if (n || o) {
          var a = n && o ? "and" : "or", l = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width,
            c = "Y: " + i + " + " + s + " = " + (i + s) + " > " + this.baseTexture.height;
          throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + l + " " + a + " " + c)
        }
        this.valid = r && s && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
      }, enumerable: !1, configurable: !0
    }), PIXI.getMaxPrecision = function (t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "highp";
      if (!t) return "lowp";
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
        e = "mediump"
      }
      return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }, PIXI.utils.skipHello(), PIXI.DisplayObject.prototype.addFilters = function () {
      let t = [];
      Array.isArray(this.filters) && (t = t.concat(this.filters));
      for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
      t = t.concat(i), this.filters = t
    };
    const r = PIXI.particles.Emitter.prototype._spawnRect;
    PIXI.particles.Emitter.prototype._spawnRect = function (t, e, i) {
      if (r.call(this, t, e, i), this.isOutline) {
        let r = Math.random(), s = Math.random();
        Math.abs(.5 - r) > Math.abs(.5 - s) ? r = Math.round(r) : s = Math.round(s);
        const n = r * this.spawnRect.width + this.spawnRect.x, o = s * this.spawnRect.height + this.spawnRect.y;
        t.position.x = e + n, t.position.y = i + o
      }
    };
    const s = PIXI.particles.Emitter.prototype.init;
    PIXI.particles.Emitter.prototype.init = function (t, e) {
      s.call(this, t, e), this.isOutline = Boolean(e.isOutline)
    }
  }, {"core-js/modules/es.string.trim": 331}],
  9: [function (t, e, i) {
    "use strict";
    String.prototype.ls = function () {
      return this
    }
  }, {}],
  10: [function (t, e, i) {
    "use strict";
    t("./extensions/Array.js"), t("./extensions/Math.js"), t("./extensions/Pixi.js"), t("./extensions/String.js")
  }, {"./extensions/Array.js": 6, "./extensions/Math.js": 7, "./extensions/Pixi.js": 8, "./extensions/String.js": 9}],
  11: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./LayoutBase.js")), s = a(t("./LayoutDesktop.js")), n = a(t("./LayoutAndroid.js")),
      o = a(t("./LayoutIOS.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor() {
        throw new Error("Class is static! Use Layout.create()!")
      }

      static create(t) {
        let {device: e} = t;
        const i = new ([s.default, n.default, o.default, r.default].find(t => t.applicable(e)))(...arguments);
        return i.supportFullscreen && i.initFullscreen(), i
      }
    }
  }, {
    "./LayoutAndroid.js": 12,
    "./LayoutBase.js": 13,
    "./LayoutDesktop.js": 14,
    "./LayoutIOS.js": 15,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  12: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./LayoutBase.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      initialize() {
        super.initialize(...arguments), this.document = "undefined" != typeof window && void 0 !== window.document ? window.document : {}, this.keyboardAllowed = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, this.fullscreenFunctions = this.getFullscreenFunctions(), document.addEventListener("touchend", () => this.enter())
      }

      createCanvas() {
        const t = super.createCanvas();
        return t.style.position = "absolute", t.style.top = 0, t
      }

      static applicable(t) {
        return t.android || t.blackberry
      }

      onResize() {
        this.canvas.style.display = "";
        const t = "landscape" == this.device.orientation ? this.calculateLandscape() : this.calculatePortrait();
        this.resizeHandler(t)
      }

      enter() {
        const t = this.fullscreenFunctions.requestFullscreen;
        document.documentElement[t](this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {})
      }

      exit() {
        document[this.fullscreenFunctions.exitFullscreen]()
      }

      getFullscreenFunctions() {
        const t = {};
        return this.functionsMap.forEach(e => {
          e[1] in document && e.forEach((e, i) => {
            t[this.functionsMap[0][i]] = e
          })
        }), t
      }

      onPreResize() {
        this.canvas.style.display = "none"
      }

      get isFullscreen() {
        return Boolean(document[this.fullscreenFunctions.fullscreenElement])
      }

      get element() {
        return document[this.fullscreenFunctions.fullscreenElement]
      }

      get functionsMap() {
        return [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]]
      }
    }

    i.default = n
  }, {
    "./LayoutBase.js": 13,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  13: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../../geom/primitives/Rectangle.js")) && r.__esModule ? r : {default: r};
    i.default = class {
      static applicable(t) {
        return !0
      }

      constructor() {
        this.initialize(...arguments)
      }

      initialize(t) {
        let {device: e, canvasConfig: i, resizeHandler: r} = t;
        this.device = e, this.canvasConfig = i, this.resizeHandler = t => r(t), this.container = this.createContainer(document.body), this.canvas = this.createCanvas(), window.addEventListener("resize", () => this.resizeDelay())
      }

      init() {
        this.onResize()
      }

      createContainer(t) {
        const e = document.createElement("div");
        return e.id = "app-container", e.style.backgroundColor = "#000000", e.style.display = "flex", e.style.justifyContent = "center", e.style.width = "100vw", e.style.height = "100vh", e.style.top = "0", e.style.left = "0", e.style.alignItems = "center", t.appendChild(e), e
      }

      createCanvas() {
        const t = document.createElement("canvas");
        return t.id = "canvas", t.classList.add("canvas"), this.container.appendChild(t), t
      }

      get supportFullscreen() {
        return !0
      }

      initFullscreen() {
      }

      getScreenSize() {
        return {width: window.innerWidth, height: window.innerHeight}
      }

      calculateLandscape() {
        const {designSize: t, minSize: e, maxSize: i} = this.canvasConfig, r = this.getScreenSize(),
          n = (t.height, t.width, e.height / e.width), o = i.height / i.width,
          a = Math.ceil(r.height / r.width * 1e3) / 1e3, l = new s.default(0, 0, 0, 0);
        let c = 1;
        return n == o ? (c = Math.min(r.width / e.width, r.height / e.height), l.width = e.width, l.height = e.height) : a >= n ? (c = r.width / e.width, l.width = e.width, l.height = e.width * a) : a <= o ? (c = r.height / i.height, l.width = i.width, l.height = i.height) : (c = r.height / t.height, l.width = t.height / a, l.height = t.height), l.width = Math.ceil(l.width), l.height = Math.ceil(l.height), c = Math.ceil(1e3 * c) / 1e3, {
          canvasField: this.getCanvasSize(l, r, c),
          gameField: l,
          scale: c
        }
      }

      calculatePortrait() {
        const {designSize: t, minSize: e, maxSize: i} = this.canvasConfig, r = this.getScreenSize(),
          n = (t.height, t.width, e.height / e.width), o = i.height / i.width,
          a = Math.ceil(r.width / r.height * 1e3) / 1e3, l = new s.default(0, 0, 0, 0);
        new s.default(0, 0, 0, 0);
        let c = 1;
        return n == o ? (c = Math.min(r.width / e.height, r.height / e.width), l.width = e.height, l.height = e.width) : a >= n ? (c = r.height / e.width, l.width = e.width * a, l.height = e.width) : a <= o ? (c = r.height / i.width, l.width = i.width * a, l.height = i.width) : (c = r.width / t.height, l.width = t.height, l.height = t.height / a), l.width = Math.ceil(l.width), l.height = Math.ceil(l.height), c = Math.ceil(1e3 * c) / 1e3, {
          canvasField: this.getCanvasSize(l, r, c),
          gameField: l,
          scale: c
        }
      }

      getCanvasSize(t, e, i) {
        const r = new s.default(0, 0, 0, 0);
        return e.width / t.width >= e.height / t.height ? (r.x = (e.width - t.width * i) / 2, r.width = e.width - 2 * r.x, r.height = e.height) : (r.y = (e.height - t.height * i) / 2, r.width = e.width, r.height = e.height - 2 * r.y), r.x = Math.ceil(r.x), r.y = Math.ceil(r.y), r.width = Math.ceil(r.width), r.height = Math.ceil(r.height), r
      }

      resizeDelay() {
        this.onPreResize(), this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(() => {
          this._resizeTimeout = null, this.onResize()
        }, 100)
      }

      onPreResize() {
      }

      onResize() {
      }
    }
  }, {
    "../../geom/primitives/Rectangle.js": 159,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  14: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./LayoutBase.js")), s = n(t("../../geom/primitives/Rectangle.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends r.default {
      static applicable(t) {
        return t.desktop
      }

      onResize() {
        const t = this.calculateDesktop();
        this.resizeHandler(t)
      }

      calculateDesktop() {
        const t = document.documentElement, {designSize: e, maxSize: i} = this.canvasConfig,
          r = t.clientWidth / e.width, n = t.clientHeight / e.height;
        let o = Math.min(r, n);
        o = Math.ceil(1e3 * o) / 1e3;
        let a = e.width, l = 0;
        if (r > n) {
          const r = e.width / e.height, s = t.clientWidth / t.clientHeight;
          a = Math.ceil(e.width / (r / s)), a = Math.min(a, i.width), l = .5 * (a - e.width)
        }
        let c = .5 * (t.clientWidth - a * o), h = .5 * (t.clientHeight - e.height * o);
        c = Math.ceil(c), h = Math.ceil(h);
        let u = a * o, d = e.height * o;
        return u = Math.ceil(u), d = Math.ceil(d), {
          gameField: new s.default(l, 0, a, e.height),
          canvasField: new s.default(c, h, u, d),
          scale: o
        }
      }
    }

    i.default = o
  }, {"../../geom/primitives/Rectangle.js": 159, "./LayoutBase.js": 13}],
  15: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.match"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./LayoutBase.js")) && r.__esModule ? r : {default: r};
    const n = [[320, 480, 2, 1280, 1762], [320, 568, 2, 1280, 2114], [375, 667, 2, 1500, 2535], [414, 736, 3, 1656, 2785], [375, 667, 3, 1500, 2509], [414, 896, 2, 1666, 3330], [375, 812, 3, 1500, 2993], [414, 896, 3, 1656, 3329], [375, 812, 3, 1440, 3120], [768, 1024, 1, 3072, 3936], [768, 1024, 2, 3072, 3938], [834, 1112, 2, 3336, 4290], [834, 1194, 2, 3336, 4602], [1024, 1366, 2, 4096, 5306], [1024, 1366, 2, 4096, 5290]];

    class o extends s.default {
      static applicable(t) {
        return t.mobile && t.ios
      }

      initialize() {
        super.initialize(...arguments), document.body.style.overflow = "none", this.canvas.style.position = "fixed", this.canvas.style.top = 0, this.supportFullscreen || this.iosFullscreenException || window.bodyScrollLock.disableBodyScroll(this.container)
      }

      get supportFullscreen() {
        return !(this.device.ipad || this.device.insideIFrame || this.device.iosYandex || this.device.iosChrome || this.device.iosOpera || this.device.iosFirefox || this.iosFullscreenException)
      }

      get iosFullscreenException() {
        const t = this.iOSversion();
        return t && 15 === t[0]
      }

      initFullscreen() {
        this.isWebView = !1, this.portraitHeight = {min: null, max: null}, this.landscapeHeight = {
          min: null,
          max: null
        }, this.updateVars(), this.isFullScreen = null;
        var t = document.createElement("style");
        t.appendChild(document.createTextNode('\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#overlay-after {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACOCAMAAAC40EICAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA/OrjAtPy9rusLRsLNzIIBPntyZBvJCARtMJ6WBUOr5djXjzdU0M/5eDa16edKcyjhoF1aE5Hi36HnYGG4gAABKBJREFUeNrl24lyokAUheHDqoiKiijuezTqxJgYkznv/2Cz1KyZmDQNQnfN9wR/Xa4URSMK0J1Ny87OKU9nXWhn7bn8yfUW0Er8yeCfjGmMjFT9TneMq+oe+FroI73GzXN/47quGU6fqriWkcN/OV2kZM9D/raLAlzHhLxCf7f3+oLWcQ0r8gr9lS1faz0htfFo/GpBD7xCv7/kv0rp+muD3s4yrd1kUMMva16062a8kG6K/lXf4E9Gf4UfnnnZtpPtQsrP3/f4N8/Hd31m32/3mW3/3Zav7SoAUN3wPTup/jovKq1kZr/lv24rAHyXzHz+A2bab/fIC/2dErPvnzDT/iHfZlXQdfmB5R2Scphlf+PAi/22yez7N3xXM1n/ghfd1svMvt/kB/1DJPCZl237zL7fYor+Rne9Gj7VR/ipzLRuk/UfKN1fax9K/KZVjnx8U71l+v4KEthTsr8+4R/MYwxg5DLn/ogfM97oj0r8m1MDfJc593eaIv1zvHLkP1pn+enL93sU6he4Zu4ZS2bCEu+vGcn7KyW+3e8xG1YdYmw8M3H/pUrzwNz7g7JY/+z38JsUkFM/4n7C/ge+QZ/+kHnYCPePE/WPTOZiUxPuT7L/9SYF5NpfLVPI6b2n4iL7J8L9a+bGFO9/NAT76wYF5N7/QiGzuMX8mAsIGnsUEoXMkbnI+v5j8j3K9wsopr/ao4Jagv2+qv1rCBlp3q/s/gj3NyZUUOtGuF/J+bvC/VXN5x/o3u9RQe5/09/QvN9Wsr9VE57/ngqyuhAUKNkfjvWe/z307o/E+++pnlJN735nrHd/G1r3GwsIsxXsD4ME/Z+onAha929GevcfoXV/y0cSyvU/IJEp1bKJkYStWv8JWveHNnTeH6MGrfvbSKpNhewCrfuNGrTuH0Dr/h607rdiSHimKurQun8OrfsfoHX/J0j6TBX0IOtIBYTQut+B1v07aN2/RRoPTEqh5VGg/wCt+8tI6YVF2kPr/jZSG7A4EbTuP0Pn/mYXOvc7ATLxyELcAzr3z6Bzf/MOOveHNrITMW8DpBX7flxUfynd7lRO+/DWNJeh9zKs+TYwc/kxNZ7XqvN+k38wd+X2vMc8DSFt5bBoyyokjVT4zGcASZXiR0+aI8ipW1TAC+T4SyrAiiHFVuPvLSfImVEFhwBSxkqsjrGGnDlVMIUkJT7s38aQM1bhpmncQFKlyeIdIWvB4pUbkLVm4awupNUNFqy0hjzfpBxF3i6ElFH8Sa4aB6JTpFMzWKC9jZT6LM4kQFpnFmZSRXoeC+IFyIC/YSHuG8jEuUlxKh1j/TA3KEaF1yJvGLrMV2mOLC0c5sm6QbbGxxZz0+8gc53PW+ajHeAagnW0d1q8MnOIK+qcHz2nxKvpdXBtjc75xds1mT0zspGPaufpYbIsMUteB7kK7oYPvdsmM+E8oQhBZfi5vDSYjhVVUZxxfdguW/LxgxEKF9fn7bLJxJwohiri2qndNyms1FsFUEy8OE0PJj/UDAd3UJS/Pt0fWrzI6kUVKK5783jf3xj8mxnuHxcK/FrFjDo388dj+9NX0+fB7Hw3siHlC5J/wXjOhtJsAAAAAElFTkSuQmCC");\n  background-size: 100% 100%;\n  width: 25rem;\n  height: 20.8333333333rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n#overlay-before {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAADWCAMAAAAXfAkNAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAOHRSTlMA19Hdy+G+x7HlucKsBaeelaOaCegatZGN7Il0hSB6DRURUFZGKD2Ca0JfLGNLWzAkf2848GczNlceP24AAANNSURBVFjDrc6LcqowFIVhVLzfQapWEfBWFW+ttrz/m50AO6LZK4WZnn8lY9tv4tRwDH1DW2+1Ybers9Z9bOjw7X5f6LBzJ4Smx/49RdvjZt0lBtDoa33VJndqxnEylQlUbD6d3tMJVPqcZs2gUedX+5o+dwCGv3Y3FY3oKP/tYSSa0okjJMtEPI1RthqpZS+XI4TMGO6bKPG1qY3YCLfoGWHU1GJiVXSaF2NTrVab6FRDYU0NboxrVdfVcLTm/GpBRVdgeJVKFa7iGXYFF5uhNeN3K1cqJbSSMLOCM2Mr4WKrlSpw7cRwNWEtjbWENTTWyLGe+CyzlUo9YcNymZP421BYXxA4pdgGZSCiARmLbKKxibC5xuapmXypLUwToblIDL5LbGaKh8nbl09zJmxn4nY5dtTYUdihjjsIO9frJlj9LGxZxy1z7KSxk7B1vd4Gq69ja4vqyhXFdmsrkW7JUDdhkcYiYWENF5K11ZFda7irMFdjbo75tVoLrObH1hLVlCuKLWgpEQfC7BbOzjHjDWek1uIja8BnjcR60HqpNVCp9RtvYEMyVD8xC5qV2BjamKzDR/be6XQa7L4nNu+g5rm2gLaQ1uNLbdYTP7I7S2zXQ+1y7QjtmNhhiDpI67GRreC7Va4th32wZWKnfr8/ZPdEBiLbQ9vn2tZCbROLLKvPZkVkILILtEtioWUN2KwwtYH4hd3UrgPUNddcaG5izhjlSBuwkQXwXZBr3gTlJWZPJmO2iU0GIjOgdVN7RxnSJmzSPsCzD7JPYJ9kizlvQTabz9+VzWeZsaTtgH1J++DtyL6BfZMdgR2lffKknYGdyVYL3qqALYEtyU4z3olsDWxNtge2l/bFk7YFtiW77Xg3sghYRHb55l0KWHjkhWQbYBtpB540F5gr7cyT5gBzpK14RcwH5pMFS15QwDxgnrQTT5oNzJa25hWxLrCutD1PmgHMkG15hezG6Paw6KYWPeyH2c/DLpHa5WHhj1r4sA2zTWYXtcyuv5gbqrnFbKOWmcPMKWZXtcx8Zn5mrlpmAbOgmDlqmXmO477OezK1YmY7vjI7M1/t79YN1Lp/N0/tP5itJkxm297rMZ5Mqah11Z7N7r6e/Hf5xvaX/gFrfnble6z9fwAAAABJRU5ErkJggg==");\n  background-size: 100% 100%;\n  width: 2.0833333333rem;\n  height: 20.8333333333rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n@keyframes tapHandAnimation {\n  0% {\n    transform: translate(0, 100px);\n  }\n  100% {\n    transform: translate(0, -100px);\n  }\n}\n@keyframes tapLineAnimation {\n  0% {\n    transform: translate(1px, 127px);\n    height: 11.4583333333rem;\n  }\n  100% {\n    transform: translate(1px, -72px);\n    height: 20.0520833333rem;\n  }\n}\n')), document.head.appendChild(t), document.body.style.overflowY = "scroll", document.body.style.touchAction = "pan-y", this.layoutElement = document.createElement("div"), this.layoutElement.style.width = "150%", this.layoutElement.style.height = "100%", this.layoutElement.style.top = "0", this.layoutElement.style.left = "0", this.layoutElement.style.position = "absolute", this.layoutElement.style.display = "block", document.body.insertBefore(this.layoutElement, document.body.firstElementChild), this.scrollArea = document.createElement("div"), this.scrollArea.style.width = "100%", this.scrollArea.style.height = "150%", this.scrollArea.style.top = "0", this.scrollArea.style.left = "0", this.scrollArea.style.position = "fixed", this.scrollArea.style.background = "#000000d4", document.body.appendChild(this.scrollArea), this.upIcon = document.createElement("div"), this.upIcon.id = "overlay", this.upIconBefore = document.createElement("div"), this.upIconBefore.id = "overlay-before", this.upIcon.appendChild(this.upIconBefore), this.upIconAfter = document.createElement("div"), this.upIconAfter.id = "overlay-after", this.upIcon.appendChild(this.upIconAfter), this.scrollArea.appendChild(this.upIcon);
        const e = document.createElement("div");
        e.id = "sizeMeter", e.style.position = "absolute", e.style.width = "100%", e.style.height = "200%", document.body.insertBefore(e, document.body.firstElementChild), this.initTouchListener()
      }

      initTouchListener() {
        if (!this.device.safari) return;
        const t = document.scrollingElement || document.documentElement;
        this.lastMoveY = this.minMoveY = this.startMoveY = null, t.addEventListener("touchmove", t => {
          if (!this.isFullScreen && !this.isWebView) {
            if (null == this.indentifire && (this.indentifire = t.touches[0].identifier), this.indentifire !== t.touches[0].identifier) return;
            this.lastMoveY = t.touches[0].clientY, null == this.minMoveY ? this.minMoveY = this.lastMoveY : this.minMoveY = Math.min(this.minMoveY, this.lastMoveY), null == this.startMoveY && (this.startMoveY = this.minMoveY), this.startMoveY - this.minMoveY > 30 && (this.indentifire = this.lastMoveY = this.minMoveY = this.startMoveY = null, this.updateVars(), setTimeout(() => this.checkWebView(), 200))
          }
        }), t.addEventListener("touchstart", t => {
          this.indentifire = this.lastMoveY = this.minMoveY = this.startMoveY = null, this.scrollToTop()
        }), t.addEventListener("touchcancel", t => {
          this.indentifire = this.lastMoveY = this.minMoveY = this.startMoveY = null, this.scrollToTop()
        }), t.addEventListener("touchend", t => {
          this.indentifire = this.lastMoveY = this.minMoveY = this.startMoveY = null, this.scrollToTop()
        })
      }

      iOSversion() {
        var t = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return !!t && [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)]
      }

      checkWebView() {
        this.isWebView || (this.updateVars(), this.device.portrait ? this.portraitHeight.min == this.portraitHeight.max && (this.isWebView = !0, this.checkScroll()) : this.landscapeHeight.min == this.landscapeHeight.max && (this.isWebView = !0, this.checkScroll()))
      }

      onResize() {
        this.supportFullscreen && (this.updateVars(), this.checkScroll());
        const t = this.device.landscape ? this.calculateLandscape() : this.calculatePortrait();
        this.resizeHandler(t), setTimeout(() => {
          requestAnimationFrame(() => {
            this.canvas.style.display = "", gsap.TweenMax.ticker.wake()
          })
        }, 100)
      }

      updateVars() {
        this.lastMoveY = this.minMoveY = this.startMoveY = 0, this.device.portrait ? null === this.portraitHeight.min ? (this.portraitHeight.min = window.innerHeight, this.portraitHeight.max = window.innerHeight) : (this.portraitHeight.min = Math.min(this.portraitHeight.min, window.innerHeight), this.portraitHeight.max = Math.max(this.portraitHeight.max, window.innerHeight)) : null === this.landscapeHeight.min ? (this.landscapeHeight.min = window.innerHeight, this.landscapeHeight.max = window.innerHeight) : (this.landscapeHeight.min = Math.min(this.landscapeHeight.min, window.innerHeight), this.landscapeHeight.max = Math.max(this.landscapeHeight.max, window.innerHeight))
      }

      getMinimalViewHeight() {
        const t = n.find(t => {
          let [e, i, r] = t;
          return window.screen.width === e && window.screen.height === i && window.devicePixelRatio === r
        });
        if (!t) return null;
        if (this.device.portrait) {
          let e = Math.round(window.screen.width * t[4] / t[3]);
          return (this.device.iosFirefox || this.device.iosOpera) && (e += 20), e
        }
        {
          let e = t[0];
          return this.device.tablet ? e += -40 : this.device.iosChrome && (e += -20), e
        }
      }

      disableScroll() {
        this.isFullScreen || (this.scrollToTop(), this.isFullScreen = !0, document.body.style.overflowY = "", this.scrollArea.style.display = "none")
      }

      enableScroll() {
        !1 !== this.isFullScreen && (this.scrollToTop(), this.isFullScreen = !1, document.body.style.overflowY = "scroll", this.scrollArea.style.display = "", this.upIconAfter.style.animation = "tapHandAnimation 2s 500000", this.upIconBefore.style.animation = "tapLineAnimation 2s 500000")
      }

      checkScroll(t) {
        if (!this.scrollArea) return;
        const e = this.getMinimalViewHeight(t);
        if (e) {
          Math.abs(e - window.innerHeight) <= 6 || this.isWebView ? this.disableScroll() : this.enableScroll()
        } else this.disableScroll()
      }

      onPreResize() {
        gsap.TweenMax.ticker.sleep(), this.canvas.style.display = "none"
      }

      scrollToTop() {
        if (!this.device.safari && !this.device.tablet) return;
        (document.scrollingElement || document.documentElement).scrollTo(0, 0)
      }
    }

    i.default = o
  }, {
    "./LayoutBase.js": 13,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.match": 326,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  16: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? r(Object(i), !0).forEach((function (e) {
          n(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function n(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        this.target = t, this.tl = new c2d.Timeline
      }

      get() {
        return this.tl
      }

      catchUp(t, e, i) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        arguments.length > 4 && arguments[4];
        const n = t || {x: this.target.x, y: this.target.y}, o = this.target.position, a = {value: 0};
        this.tl.to(a, i, s({
          value: 1, onUpdate: () => {
            o.x = n.x + (e.x - n.x) * a.value, o.y = n.y + (e.y - n.y) * a.value
          }
        }, r))
      }

      moveTo(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          n = arguments.length > 4 ? arguments[4] : void 0;
        return this.tl.to(this.target, i, s({x: t, y: e}, r), n), this
      }

      moveBy() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = arguments.length > 4 ? arguments[4] : void 0;
        const n = this.target.position.x + t, o = this.target.position.y + e;
        return this.moveTo(n, o, i, r, s), this
      }

      fadeTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return t < 0 && (t = 0), t > 1 && (t = 1), this.tl.to(this.target, e, s({alpha: t}, i), r), this
      }

      fadeBy(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return this.fadeTo(this.target.aplha + t, e, i, r), this
      }

      rotateTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return this.tl.to(this.target, e, s({rotation: t}, i), r), this
      }

      rotateBy(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return this.rotateTo(this.target.rotation + t, e, i, r), this
      }

      scaleTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return t < 0 && (t = 0), this.tl.to(this.target.scale, e, s({x: t, y: t}, i), r), this
      }

      scaleBy(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        const n = s({x: this.target.scale.x * t, y: this.target.scale.y * t}, i);
        return this.tl.to(this.target.scale, e, n, r), this
      }

      scaleXTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return t < 0 && (t = 0), this.tl.to(this.target.scale, e, s({x: t}, i), r), this
      }

      scaleYTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return t < 0 && (t = 0), this.tl.to(this.target.scale, e, s({y: t}, i), r), this
      }

      widthTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return this.tl.to(this.target, e, s({width: t}, i), r), this
      }

      widthBy(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        const s = this.target.width + t;
        return this.widthTo(s, e, i, r)
      }

      heightTo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return this.tl.to(this.target, e, s({height: t}, i), r), this
      }

      heightBy(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        const s = this.target.height + t;
        return this.heightTo(s, e, i, r)
      }
    }
  }, {}],
  17: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./Container.js"));
    s(t("./AnimateObject.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], {
            speed: i = .1,
            loop: r = !1
          } = arguments.length > 2 ? arguments[2] : void 0;
        super(), this._fps = 60 * i, this._loop = r, this._blendMode = PIXI.BLEND_MODES.NORMAL, this.points = [], e.forEach(t => this.points.push(new PIXI.Point(t.x, t.y))), this.ropes = [], t.forEach(t => {
          const e = new PIXI.SimpleRope(t, this.points);
          e.visible = !1, this.addChild(e), this.ropes.push(e)
        }), this._frame = 0, this.ropes[this._frame].visible = !0
      }

      get blendMode() {
        return this._blendMode
      }

      set blendMode(t) {
        this._blendMode = t, this.ropes.forEach(e => e.blendMode = t)
      }

      get frame() {
        return this._frame
      }

      set frame(t) {
        this.ropes[this._frame].visible = !1, this._frame = t % this.ropes.length, this.ropes[this._frame].visible = !0
      }

      play() {
        const t = 1 / this._fps, e = this._loop ? -1 : 0;
        this.timeline = new c2d.Timeline({repeat: e});
        for (let e = 1; e <= this.ropes.length; e++) this.timeline.set(this, {frame: e}, "+=".concat(t))
      }

      stop() {
        this.timeline.kill()
      }
    }

    i.default = n
  }, {"./AnimateObject.js": 16, "./Container.js": 20}],
  18: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};
    const n = [PIXI.Texture.EMPTY];

    class o extends PIXI.AnimatedSprite {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .1,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(n), this.tween = new s.default(this), this._animationSequence = null, this.setAnimation({
          textures: t,
          speed: e,
          loop: i
        })
      }

      static createFrom(t) {
        return new o(t.textures, t.speed, t.loop)
      }

      get scaleX() {
        return this.scale.x
      }

      get scaleY() {
        return this.scale.y
      }

      set scaleX(t) {
        this.scale.x = t
      }

      set scaleY(t) {
        this.scale.y = t
      }

      play(t) {
        let e = null;
        if (this._animationSequence && this._animationSequence.length && (e = this._animationSequence.shift()), void 0 !== t && (this.playing && this.stop(), "function" == typeof t ? (this.loop = !1, this.onComplete = () => {
          e ? (this.setAnimation(e), this.play(t)) : t()
        }) : this.onComplete = null, this.setAnimation(t)), e && (this.onComplete = () => {
          this.play(e)
        }), !this.textures.length || !this.textures.first) throw new Error("textures is empty");
        super.play()
      }

      stop() {
        super.stop(), this._currentTime = 0, this._texture = this._textures[this.currentFrame]
      }

      pause() {
        super.stop()
      }

      resume() {
        super.play()
      }

      setAnimation(t) {
        t.textures && t.textures.length && (this.textures = t.textures, this._currentTime = 0, this.gotoAndStop(0), this.updateTexture()), void 0 !== t.speed && (this.animationSpeed = t.speed), void 0 !== t.loop && (this.loop = t.loop), void 0 !== t.blendMode && (this.blendMode = PIXI.BLEND_MODES[t.blendMode])
      }

      setSequence(t) {
        t ? (this._animationSequence = t.slice(), this.setAnimation(this._animationSequence.shift())) : this._animationSequence = null
      }

      gotoAndStop(t) {
        super.gotoAndStop(t)
      }

      clear() {
        this.textures = [PIXI.Texture.EMPTY], this._currentTime = 0
      }

      get duration() {
        return this.totalFrames / this.fps
      }

      get totalTime() {
        return this.totalFrames / this.fps
      }

      set currentTime(t) {
        this.gotoAndPlay(parseInt(t * this.fps))
      }

      update() {
        super.update(c2d.time.deltaTime)
      }
    }

    i.default = o
  }, {"./AnimateObject.js": 16}],
  19: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./Container.js")), s = a(t("./Sprite.js")), n = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../utils/TypeCheckers.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return o = function () {
        return t
      }, t
    }

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class l extends r.default {
      constructor(t, e) {
        let {textures: i, fontSize: r, padding: s, anchor: n} = e;
        super(), this.pool = {}, this._textures = i || [], this._blendMode = PIXI.BLEND_MODES.NORMAL;
        const o = n || {x: .5, y: .5};
        this.anchor = new PIXI.Point(o.x, o.y), this._charMapping = {".": "dot", ",": "comma", " ": "space"};
        let a = 0;
        Object.values(this._textures).forEach(t => {
          a < t.height && (a = t.height)
        }), this._contentSize = {
          width: 0,
          height: a
        }, this._fontSize = r, this._padding = this.originPadding = s || 0, this._fontSize && (this._padding = this.originPadding / this._fontSize * a, this.scale.set(this._fontSize / a)), this._text = "", t && (this.text = t)
      }

      get padding() {
        return this.originPadding
      }

      set padding(t) {
        const e = this._padding;
        this.originPadding = t, this._padding = this.originPadding / this._fontSize * this._contentSize.hieght;
        const i = this._padding - e;
        this.children.forEach((t, e) => {
          t.x += i * e
        }), this._contentSize.width = Math.abs(this.children.first.x) + this.children.last.x + this.children.last.width
      }

      get fontSize() {
        return this._fontSize
      }

      set fontSize(t) {
        this._fontSize = t, this.scale.set(t / this._contentSize.height)
      }

      get text() {
        return this._contentSize.width = 0, this._text
      }

      set text(t) {
        if (this.clear(), null === t && void 0 === t) return;
        n.isString(t) || (t = t.toString()), this._text = t;
        let e = 0;
        Array.from(t).forEach(t => {
          const i = this._charMapping[t];
          let r;
          if (i && (t = i), this.pool[t] || (this.pool[t] = []), 0 === this.pool[t].length) {
            if (null == this._textures[t]) throw new Error("can not find texture for symbol ".concat(t));
            r = new s.default(this._textures[t]), r.returnToPool = () => this.returnToPool(t, r)
          } else r = this.pool[t].pop(), r.visible = !0;
          r.blendMode = this._blendMode, r.x = e, r.y = -r.height * this.anchor.y, this.addChild(r), e += r.width + this._padding
        }), t.length > 0 && (e -= this._padding), this._contentSize.width = Math.ceil(e), this.children.forEach(t => {
          t.x -= e * this.anchor.x
        })
      }

      get contentOriginSize() {
        return this._contentSize
      }

      get contentSize() {
        return {width: this._contentSize.width * this.scale.x, height: this._contentSize.height * this.scale.y}
      }

      set blendMode(t) {
        this._blendMode = t, this.children.forEach(e => {
          e.blendMode = t
        })
      }

      get blendMode() {
        return this._blendMode
      }

      toMaxWidth(t) {
        const e = t / this._contentSize.width;
        return this.scale.set(e), this._fontSize = e * this._contentSize.height, this
      }

      fitToArea(t, e) {
        return e < this._fontSize && (this.fontSize = e), t < this._contentSize.width * this.scale.x && this.toMaxWidth(t), this
      }

      clear() {
        for (this._text = ""; this.children.length;) {
          this.children.pop().returnToPool()
        }
        return this
      }

      returnToPool(t, e) {
        return e.visible = !1, this.pool[t].push(e), this
      }
    }

    i.default = l
  }, {
    "../utils/TypeCheckers.js": 191,
    "./Container.js": 20,
    "./Sprite.js": 28,
    "core-js/modules/es.regexp.to-string": 324
  }],
  20: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r}, n = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../utils/TypeCheckers.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return o = function () {
        return t
      }, t
    }

    class a extends PIXI.Container {
      constructor() {
        super(...arguments), this.tween = new s.default(this)
      }

      putChild(t) {
        const e = t.parent.toGlobal(t), i = this.toLocal(e);
        this.addChild(t), t.position.copyFrom(i)
      }

      removeFromParent() {
        this.parent && this.parent.removeChild(this)
      }

      removeChildren(t, e) {
        if (!1 === (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])) return super.removeChildren(t, e);
        const i = n.isNumber(t) ? t : 0, r = n.isNumber(e) ? e : this.children.length, s = r - i;
        let o;
        if (s > 0 && s <= r) {
          o = this.children.splice(i, s);
          for (let t = 0; t < o.length; ++t) o[t].destroy();
          return this._boundsID++, this.onChildrenChange(t), []
        }
        if (0 === s && 0 === this.children.length) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
      }
    }

    i.default = a, Object.defineProperties(PIXI.Container.prototype, {
      stageX: {
        set: function (t) {
          const e = game.size.gameField.left, i = game.size.gameField.width - 2 * e;
          this.x = i * t / 100 + e
        }
      }, stageY: {
        set: function (t) {
          const e = game.size.gameField.top, i = game.size.gameField.height - 2 * e;
          this.y = i * t / 100 + e
        }
      }, top: {
        set: function (t) {
          const e = game.size.gameField.top;
          this.y = -e + t
        }
      }, right: {
        set: function (t) {
          const e = game.size.gameField.right;
          this.x = e + t
        }
      }, bottom: {
        set: function (t) {
          const e = game.size.gameField.bottom;
          this.y = e + t
        }
      }, left: {
        set: function (t) {
          const e = game.size.gameField.left;
          this.x = -e + t
        }
      }, scaleX: {
        set: function (t) {
          this.scale.x = t
        }
      }, scaleY: {
        set: function (t) {
          this.scale.y = t
        }
      }
    });
    const l = PIXI.Container.prototype.emit;
    PIXI.Container.prototype.emit = function (t) {
      for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
      if (n.isString(t)) l.call(this, t, ...i); else if (t instanceof Event && (l.call(this, t.type, ...i), t.bubbles)) {
        let e = this;
        for (; e = e.parent;) e.emit(t.type, ...i)
      }
    }
  }, {
    "../utils/TypeCheckers.js": 191,
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  21: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.trim"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Container.js")), s = n(t("./TextField.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends r.default {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(), e.trim = !0, this.style = e, this.rope = null, this.textField = null, this.invert = !c2d.type.isNullOrUndefined(e.invert) && e.invert, this.text = t
      }

      set text(t) {
        this._text = t, this.draw()
      }

      get text() {
        return this._text
      }

      draw() {
        this.textField = this.textField || new s.default, this.textField.style = this.style, this.textField.text = this.text, this.textField.updateText();
        const t = this.style.radius || 100, e = this.style.maxRopePoints || 300, i = Math.PI / e,
          r = .5 * (e - Math.round(this.textField.texture.width / (t * Math.PI) * e)), n = [];
        for (let s = e - r; s > r; s--) {
          const e = t * Math.cos(i * s), r = (this.invert ? 1 : -1) * t * Math.sin(i * s);
          n.push(new c2d.geom.Point(e, r))
        }
        this.rope && (this.rope.parent.removeChild(this.rope), this.rope = null), this.rope = new PIXI.SimpleRope(this.textField.texture, n), this.addChild(this.rope)
      }
    }

    i.default = o
  }, {"./Container.js": 20, "./TextField.js": 29, "core-js/modules/es.string.trim": 331}],
  22: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/es.string.includes"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Sprite.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t, e, i) {
        super(PIXI.Texture.EMPTY), this.generateTexture(t, e, i)
      }

      generateTexture(t, e, i) {
        const r = document.createElement("div"), s = document.createElement("div");
        r.style.position = "absolute", r.style.left = "100%", r.style.float = "right", s.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        const n = this.getGlobalFonts();
        let o = "<style>";
        n.forEach(e => {
          let [i, r] = e;
          t.includes(i) && (o += r)
        }), o += "</style>", s.innerHTML = o + t, r.appendChild(s);
        const a = r.innerHTML;
        e && i ? this.loadTexture(a, e, i) : (document.body.appendChild(r), setTimeout(() => {
          this.loadTexture(a, r.clientWidth, r.clientHeight), document.body.removeChild(r)
        }, 0))
      }

      loadTexture(t, e, i) {
        const r = this.getDataSVG(t, e, i);
        let s;
        this.convertSVG(r).then(t => (s = t, this.convertCanvas(t, e, i))).then(t => {
          const e = s.src.length < t.src.length ? s : t;
          return Promise.resolve(e)
        }).then(t => {
          const e = new PIXI.BaseTexture(t);
          this.texture = new PIXI.Texture(e)
        })
      }

      getGlobalFonts() {
        const t = [], e = document.styleSheets;
        let i = e.length;
        for (; --i >= 0;) {
          const r = e[i].rules || e[i].cssRules || [];
          let s = r.length;
          for (; --s >= 0;) {
            const e = r[s];
            "CSSFontFaceRule" === e.constructor.name && t.push([e.style.fontFamily, e.cssText])
          }
        }
        return t
      }

      getDataSVG(t, e, i) {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("width", e), r.setAttribute("height", i);
        const s = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        return s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), r.appendChild(s), s.innerHTML = t, r
      }

      convertSVG(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(i => {
          const r = new Image;
          if (r.onload = () => i(r), r.onerror = () => {
            e ? console.error("error load custom sprite") : this.convertSVG(t, !0).then(t => i(t))
          }, e) try {
            r.src = "data:image/svg+xml;base64," + btoa(t.outerHTML)
          } catch (e) {
            console.error(e, t.outerHTML)
          } else r.src = "data:image/svg+xml," + t.outerHTML
        })
      }

      convertCanvas(t, e, i) {
        return new Promise(r => {
          const s = document.createElement("canvas");
          s.setAttribute("width", e), s.setAttribute("height", i), s.getContext("2d").drawImage(t, 0, 0);
          const n = new Image;
          n.onload = () => r(n), n.onerror = () => console.error("error load custom sprite"), n.src = s.toDataURL("image/png")
        })
      }
    }

    i.default = n
  }, {
    "./Sprite.js": 28,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  23: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.Container {
      constructor(t, e) {
        super(), this.lifetime = e.lifetime.max, this._emitter = new PIXI.particles.Emitter(this, [].concat(t), e), this._emitter.emit = !1, this._playing = !1, this._followNode = null, this.cleanup = () => this._emitter.cleanup(), this.resetPositionTracking = () => this._emitter.resetPositionTracking(), this.updateSpawnPos = (t, e) => this._emitter.updateSpawnPos(t, e), this.updateOwnerPos = (t, e) => this._emitter.updateOwnerPos(t, e), t[0] instanceof PIXI.Texture ? this._emitter.particleConstructor = PIXI.particles.PathParticle : this._emitter.particleConstructor = PIXI.particles.AnimatedParticle, this.tween = new s.default(this)
      }

      update() {
        this._emitter.particleImages.length && this._emitter.update(c2d.time.deltaTime)
      }

      get enableEmit() {
        return this._emitter.emit
      }

      set enableEmit(t) {
        this._emitter.emit = t, this.disableDelay && this.disableDelay.kill(), t && !this._playing ? (this._playing = !0, PIXI.Ticker.shared.add(this.update, this, PIXI.UPDATE_PRIORITY.HIGH)) : !t && this._playing && (this.disableDelay = c2d.Tween.delayedCall(this.lifetime, () => {
          this._playing = !1, this._emitter.update(1), PIXI.Ticker.shared.remove(this.update, this)
        }))
      }

      set followNode(t) {
        this._followNode = t
      }

      playOnceAndDestroy() {
        this._emitter.playOnceAndDestroy()
      }

      updateTransform() {
        if (this._followNode) {
          const t = this._followNode.toGlobal({x: 0, y: 0}), e = this.toLocal(t);
          this.updateSpawnPos(e.x, e.y)
        }
        super.updateTransform()
      }
    }

    i.default = n
  }, {"./AnimateObject.js": 16}],
  24: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.Graphics {
      constructor() {
        super(...arguments), this.tween = new s.default(this)
      }
    }

    i.default = n
  }, {
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  25: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.NineSlicePlane {
      constructor() {
        super(...arguments), this.tween = new s.default(this)
      }
    }

    i.default = n
  }, {
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  26: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./AnimateObject.js"));
    s(t("./TextField.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends PIXI.BitmapText {
      constructor(t, e) {
        super(t, e), this.style = PIXI.BitmapFont.available[e.fontName].__style, this.roundPixels = !0, this.tween = new r.default(this), this._upperCase = !1, this._wordWrap = this.style.wordWrap || !1, this._breakWords = this.style.breakWords || !1, this.area = {
          width: 0,
          height: 0
        }
      }

      get upperCase() {
        return this._upperCase
      }

      set upperCase(t) {
        this._upperCase = t, t && (this.text = this.text.toUpperCase())
      }

      get text() {
        return super.text
      }

      set text(t) {
        this._upperCase ? super.text = t.toUpperCase() : super.text = t, this.fitToArea()
      }

      set wordWrapWidth(t) {
        this.maxWidth = t
      }

      get wordWrapWidth() {
        return this.maxWidth
      }

      set wordWrap(t) {
        this._wordWrap = t
      }

      get wordWrap() {
        return this._wordWrap
      }

      set breakWords(t) {
        this._breakWords = t
      }

      get breakWords() {
        return this._breakWords
      }

      fitToArea(t, e) {
        c2d.type.isNumber(t) && (this.area.width = t), c2d.type.isNumber(e) && (this.area.height = e), this.area && (this.area.width || this.area.height) && this._fitToArea(this.area.width, this.area.height)
      }

      _fitToArea(t, e) {
        if (t && (this.wordWrap && (this.maxWidth = t), t < this.width)) for (this.fontSize = parseInt(this.fontSize * (t / this.width)); t < this.width;) this.fontSize -= 1;
        if (e && e < this.height) {
          let t = this.fontSize = this.fontSize / 2;
          for (; t >= 2;) {
            const i = e < this.height;
            t /= 2, this.fontSize += t * (i ? -1 : 1), this.fontSize = parseInt(this.fontSize)
          }
          for (; e < this.height;) this.fontSize -= 1
        }
      }
    }

    i.default = n
  }, {"./AnimateObject.js": 16, "./TextField.js": 29}],
  27: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    function n(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? n(Object(i), !0).forEach((function (e) {
          a(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function a(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    function l(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    class c extends PIXI.spine.Spine {
      get visible() {
        return super.visible
      }

      set visible(t) {
        t || (this.pause(), super.visible = t)
      }

      constructor() {
        super(...arguments), super.visible = !1, this.tween = new s.default(this), this._speed = 1, this._playing = !1, this._tracks = {}, this.attachLabels = {};
        const t = this.spineData.attachLabels;
        t && t.forEach(t => this.attachLabel(t))
      }

      mixAllAnimations(t) {
        const e = this.stateData.skeletonData.animations.map(t => t.name);
        e.forEach(i => {
          e.filter(t => t !== i && -1 !== e.indexOf(i) && -1 !== e.indexOf(t)).forEach(e => {
            this.stateData.setMix(i, e, t), this.stateData.setMix(e, i, t)
          })
        })
      }

      update() {
        super.update(c2d.time.deltaTime)
      }

      attachLabel() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
            slotData: e,
            name: i,
            text: r = "",
            style: s = {},
            fitToArea: n,
            upperCase: a = !1,
            anchor: c = {x: .5, y: .5}
          } = t, h = l(t, ["slotData", "name", "text", "style", "fitToArea", "upperCase", "anchor"]),
          u = this.findSlot(e.name).currentSprite, d = o({fontSize: h.fontSize}, s);
        let f;
        return n && u && u.width > 10 ? (f = this._createTextLabel(!0, u.width, o({
          text: r,
          textStyle: d
        }, h)), f.fitToArea(u.width, u.height), u.scale.x = 1, u.scale.y = -1) : f = this._createTextLabel(!1, 0, o({
          text: r,
          textStyle: d
        }, h)), f.upperCase = a, f.anchor = c2d.geom.Point.create(c.x, c.y), this.attach(e.name, f), this.attachLabels[i] = f, f
      }

      _createTextLabel(t, e, i) {
        let {text: r = "", textStyle: s, bitmapPadding: n, bitmapTextures: o, roundPixels: a} = i;
        if (r = r.ls(), o) {
          const t = o, e = s.fontSize, i = n;
          return new c2d.display.BitmapText(r, {textures: t, fontSize: e, padding: i})
        }
        return t && (s.wordWrap = !0, s.wordWrapWidth = e), new c2d.display.TextField(r, s, null, a)
      }

      destroy() {
        this.pause(), super.destroy(...arguments)
      }

      set skin(t) {
        this.skeleton.setSkinByName(t), this.skeleton.setSlotsToSetupPose()
      }

      get skin() {
        return this.skeleton.skin && this.skeleton.skin.name
      }

      attach(t, e) {
        const i = this.getChildByName(t);
        return i && i.children.length ? i.children[0].addChild(e) : console.warn("Slot or attach not found! slotName ".concat(t)), this
      }

      getChildByName(t) {
        return this.children[this.skeleton.findSlotIndex(t)]
      }

      findSlot(t) {
        return this.skeleton.findSlot(t)
      }

      findBone(t) {
        return this.skeleton.findBone(t)
      }

      findAnimation(t) {
        return this.spineData.findAnimation(t)
      }

      findEvent(t) {
        return this.spineData.findEvent(t)
      }

      get rootBone() {
        return this.skeleton.getRootBone()
      }

      play(t) {
        var e = this;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          speed: r,
          trackIndex: s = 0,
          loop: n = !1,
          force: o = !0,
          delay: a = 0,
          onEvent: l = null,
          onComplete: c = null,
          onStart: h = null,
          once: u = !1,
          startTime: d = 0
        } = i, f = this.state.getCurrent(s);
        if (u && f && t == f.animation.name) return;
        if (o && this.forceComplete(f), !t) return Promise.resolve();
        let p;
        return o || this.trackIsComplete(s) ? (p = this.state.setAnimation(s, t, n), this._tracks[s] = p) : p = this.state.addAnimation(s, t, n, a), d && (p.trackTime = d), i.track = p, p.timeScale = r || this._speed, new Promise(t => {
          !p.listener && (p.listener = {}), p.listener.start = (t, e) => {
            t.listener.start = null, h && h(p, e)
          }, p.listener.event = (t, e) => {
            l && l(t, e), this.onEvent(t, e)
          }, p.listener.complete = function (i) {
            let {forceCall: r} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            i.loop || (i.next ? e._tracks[s] = i.next : e.stopTrack(s), i.listener.complete = null, c && c(), !r && t())
          }, this.resume()
        })
      }

      forceComplete(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (; t;) {
          if (t.loop = !1, t.listener) {
            const {start: i, complete: r} = t.listener;
            i && i(t), r && r(t, {forceCall: !e})
          }
          t = t.next
        }
      }

      stopTrack(t) {
        delete this._tracks[t], 0 === Object.keys(this._tracks).length && this.pause()
      }

      removeTrack(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
        this.state.addEmptyAnimation(t, e, 0)
      }

      stop() {
        for (const t in this._tracks) {
          const e = this.state.getCurrent(Number(t));
          this.state.addAnimation(Number(t), e.animation.name, e.loop, 0), e && this.forceComplete(e)
        }
        return this.pause(), this
      }

      pause() {
        return this._playing = !1, PIXI.Ticker.shared.remove(this.update, this), this
      }

      resume() {
        return this._playing || (this._playing = !0, PIXI.Ticker.shared.add(this.update, this, PIXI.UPDATE_PRIORITY.HIGH), this.update(), super.visible = !0), this
      }

      get totalTime() {
        return this.track ? this.track.animationEnd / this._speed : 0
      }

      getTotalTimeOfTrack(t) {
        const e = this.getTrackByIndex(t);
        return e ? e.animationEnd / this._speed : 0
      }

      set currentTime(t) {
        this.track && (this.track.trackTime = t * this._speed)
      }

      setCurrentTimeForTrack(t, e) {
        const i = this.getTrackByIndex(t);
        i && (i.trackTime = e * this._speed)
      }

      get currentTime() {
        return this.track ? this.track.getAnimationTime() / this._speed : 0
      }

      getCurrentTimeOfTrack(t) {
        const e = this.getTrackByIndex(t);
        return e ? e.getAnimationTime() / this._speed : 0
      }

      get isComplete() {
        return this.totalTime === this.currentTime
      }

      trackIsComplete(t) {
        return this.getTotalTimeOfTrack(t) === this.getCurrentTimeOfTrack(t)
      }

      get speed() {
        return this._speed
      }

      set speed(t) {
        this._speed = t, this.timeScaleForAllTracks(t)
      }

      trackTimeScale(t) {
        let e = this.track;
        for (; e;) e.timeScale = t, e = e.next
      }

      timeScaleForAllTracks(t) {
        this.state.tracks.forEach(e => this.setTimeScaleForTrack(e, t))
      }

      setTimeScaleForTrack(t, e) {
        for (; t;) t.timeScale = e, t = t.next
      }

      get duration() {
        return this.track.animation.duration / this._speed
      }

      getDurationOfTrack(t) {
        return this.getTrackByIndex(t).animation.duration / this._speed
      }

      set duration(t) {
        if (!this.track) return;
        const e = this.track.animation.duration / t;
        this.trackTimeScale(e)
      }

      setDurationForTrack(t, e) {
        const i = this.getTrackByIndex(t);
        if (!i) return;
        const r = i.animation.duration / e;
        this.setTimeScaleForTrack(i, r)
      }

      get loop() {
        return this.track && this.track.loop
      }

      getLoopOfTrack(t) {
        const e = this.getTrackByIndex(t);
        return e && e.loop
      }

      set loop(t) {
        this.track && (this.track.loop = t)
      }

      setLoopForTrack(t, e) {
        const i = this.getTrackByIndex(t);
        i && (i.loop = e)
      }

      onEvent(t, e) {
        if (e.data.audioPath && game.audioManager.enabled) {
          const t = e.data.name, i = game.audioManager.playAudio(t), r = {
            complete: () => {
              this.state.removeListener(r)
            }, interrupt: () => {
              this.state.removeListener(r), game.audioManager.stopAudio(t)
            }
          };
          i && "skip" !== i.interrupt && this.state.addListener(r)
        }
      }

      get currentAnimation() {
        return this._playing && this.track && !this.isComplete ? this.track.animation.name : null
      }

      getCurrentAnimationOfTrack(t) {
        return this._playing && this.getTrackByIndex(t) && !this.isCompeteByIndex(t) ? this.getTrackByIndex(t).animation.name : null
      }

      get lastAnimation() {
        let t = this.track;
        for (; t && t.next;) t = t.next;
        return t && t.animation.name
      }

      getLastAnimationOfTrack(t) {
        let e = this.getTrackByIndex(t);
        for (; e.next;) e = e.next;
        return e && e.animation.name
      }

      get track() {
        return this.state.getCurrent(0)
      }

      getTrackByIndex(t) {
        return this.state.getCurrent(t)
      }

      hasAnimation(t) {
        return -1 !== this.spineData.animations.findIndex(e => e.name === t)
      }

      getDurationByAnimationKey(t) {
        return this.durationMap || (this.durationMap = {}, this.stateData.skeletonData.animations.forEach(t => this.durationMap[t.name] = t.duration)), this.durationMap[t]
      }
    }

    i.default = c, window.pixi_spine.Spine.prototype.autoUpdateTransform = function () {
      PIXI.Container.prototype.updateTransform.call(this)
    }
  }, {
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  28: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.Sprite {
      constructor() {
        super(...arguments), this.tween = new s.default(this)
      }
    }

    i.default = n
  }, {
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  29: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./AnimateObject.js")), s = n(t("../common/Localization.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? o(Object(i), !0).forEach((function (e) {
          l(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function l(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    class c extends PIXI.Text {
      constructor(t, e, i) {
        let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        super(t, a(a({}, c.defaultStyle), e), i, s), this._logger = c2d.Logger.Of("TextField"), this.resolution = 1, this.roundPixels = s, this._localize = null, this.tween = new r.default(this), this.area = {
          width: 0,
          height: 0
        }, this._upperCase = !1
      }

      get fontSize() {
        return this.style.fontSize
      }

      set fontSize(t) {
        this.style.fontSize = t
      }

      get style() {
        return super.style
      }

      set style(t) {
        super.style = a(a({}, c.defaultStyle), t)
      }

      get upperCase() {
        return this._upperCase
      }

      set upperCase(t) {
        this._upperCase = t, t && (this.text = this.text.toUpperCase())
      }

      get text() {
        return super.text
      }

      set text(t) {
        this._upperCase ? super.text = t.toUpperCase() : super.text = t, this.fitToArea()
      }

      set wordWrap(t) {
        super.style.wordWrap = t
      }

      get wordWrap() {
        return super.style.wordWrap
      }

      set wordWrapWidth(t) {
        super.style.wordWrapWidth = t
      }

      get wordWrapWidth() {
        return super.style.wordWrapWidth
      }

      set leading(t) {
        super.style.leading = t
      }

      get leading() {
        return super.style.leading
      }

      set color(t) {
        super.style.fill = t
      }

      get color() {
        return super.style.fill
      }

      set align(t) {
        super.style.align = t
      }

      get align() {
        return super.style.align
      }

      get breakWords() {
        return super.style.breakWords
      }

      set breakWords(t) {
        super.style.breakWords = t
      }

      fitToArea(t, e) {
        if (c2d.type.isNumber(t)) {
          if (t && t < 10) return this._logger.error("fitToArea width is too low: ".concat(t), this);
          this.area.width = t
        }
        if (c2d.type.isNumber(e)) {
          if (e && e < 10) return this._logger.error("fitToArea height is too low: ".concat(e), this);
          this.area.height = e
        }
        this.area && (this.area.width || this.area.height) && this._fitToArea(this.area.width, this.area.height)
      }

      _fitToArea(t, e) {
        const i = this.style;
        if (t && (i.wordWrap && (i.wordWrapWidth = t), t < PIXI.TextMetrics.measureText(this.text, i).width)) {
          this.area.width = t;
          let e = i.fontSize = Number.parseInt(i.fontSize) / 2;
          for (; e >= 2;) {
            const r = t < PIXI.TextMetrics.measureText(this.text, i).width;
            e /= 2, i.fontSize += e * (r ? -1 : 1), i.fontSize = parseInt(i.fontSize)
          }
          let r = PIXI.TextMetrics.measureText(this.text, i).width;
          for (; t < r;) i.fontSize -= 1, r = PIXI.TextMetrics.measureText(this.text, i).width
        }
        if (e && e < PIXI.TextMetrics.measureText(this.text, i).height) {
          this.area.height = e;
          let t = i.fontSize = Number.parseInt(i.fontSize) / 2;
          for (; t >= 2;) {
            const r = e < PIXI.TextMetrics.measureText(this.text, i).height;
            t /= 2, i.fontSize += t * (r ? -1 : 1), i.fontSize = parseInt(i.fontSize)
          }
          let r = PIXI.TextMetrics.measureText(this.text, i).height;
          for (; e < r;) i.fontSize -= 1, r = PIXI.TextMetrics.measureText(this.text, i).height
        }
      }

      set localizedText(t) {
        this.text = s.default.getText(t)
      }
    }

    i.default = c, c.defaultStyle = {}
  }, {"../common/Localization.js": 5, "./AnimateObject.js": 16}],
  30: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./AnimateObject.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.TilingSprite {
      constructor() {
        super(...arguments), this.tween = new s.default(this)
      }
    }

    i.default = n
  }, {
    "./AnimateObject.js": 16,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  31: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.debugDraw = function (t, e) {
      if (t[4] && !e.getChildByName("debugCustomBounds")) {
        const i = new c2d.display.Graphics;
        i.name = "debugCustomBounds", i.beginFill("0x00ff00", .5);
        const [r, s, n, o] = t;
        i.drawRect(r, n, s - r, o - n), i.beginFill("0xff0000"), i.drawCircle(0, 0, 5), e.addChild(i)
      }
    };
    const r = PIXI.Bounds.prototype.addBounds;
    PIXI.Bounds.prototype.addBounds = function (t) {
      r.call(this, t), u.call(this, this.customBounds)
    };
    const s = PIXI.Bounds.prototype.addPoint;
    PIXI.Bounds.prototype.addPoint = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      s.call(this, ...e), u.call(this, this.customBounds)
    };
    const n = PIXI.Bounds.prototype.addQuad;
    PIXI.Bounds.prototype.addQuad = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      n.call(this, ...e), u.call(this, this.customBounds)
    };
    const o = PIXI.Bounds.prototype.addFrame;
    PIXI.Bounds.prototype.addFrame = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      o.call(this, ...e), u.call(this, this.customBounds)
    };
    const a = PIXI.Bounds.prototype.addVertexData;
    PIXI.Bounds.prototype.addVertexData = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      a.call(this, ...e), u.call(this, this.customBounds)
    };
    const l = PIXI.Bounds.prototype.addVertices;
    PIXI.Bounds.prototype.addVertices = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      l.call(this, ...e), u.call(this, this.customBounds)
    };
    const c = PIXI.Bounds.prototype.addBoundsMask;
    PIXI.Bounds.prototype.addBoundsMask = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      c.call(this, ...e), u.call(this, this.customBounds)
    };
    const h = PIXI.Bounds.prototype.addBoundsArea;

    function u(t) {
      if (!t) return;
      let [e, i, r, s] = t;
      e || 0 === e ? this.minX = e : e = this.minX, (r || 0 === r) && (this.maxX = e + r), i || 0 === i ? this.minY = i : i = this.minY, (s || 0 === s) && (this.maxY = i + s)
    }

    PIXI.Bounds.prototype.addBoundsArea = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      h.call(this, ...e), u.call(this, this.customBounds)
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  32: [function (t, e, i) {
  }, {}],
  33: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    function s(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function n(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? s(Object(i), !0).forEach((function (e) {
          o(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function o(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.object.assign"), t("core-js/modules/es.regexp.constructor"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.includes"), t("core-js/modules/es.string.match"), t("core-js/modules/es.string.replace"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const a = {
      mergeVariables(t, e) {
        return this.realizeConfig(t.__variables, e), n(n({}, e), t.__variables)
      }, realizeConfig(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0;
        if (i && (t = c2d.utils.Object.cloneDeep(t)), !e || !Object.keys(e).length) return t;
        if (c2d.type.isString(t)) {
          const i = this.getStringProperty({value: t, variables: e, ignoreCalc: r});
          t = null === i ? t : i
        } else c2d.type.isArray(t) ? t.forEach((i, s) => {
          t[s] = this.realizeConfig(i, e, !1, r)
        }) : c2d.type.isObject(t) && "Object" === t.constructor.name && Object.entries(t).forEach(i => {
          let [s, n] = i;
          t[s] = this.realizeConfig(n, e, !1, r)
        });
        return t
      }, getStringProperty(t) {
        let {value: e, variables: i, ignoreCalc: r} = t;
        if (e = a.realizeProperty(e, i), null === e) return null;
        if (!r) {
          const t = i && i._relative && i._relative.size;
          e = a.calcProperty(e, t)
        }
        return e
      }, realizeProperty(t, e) {
        if (!t.includes("${")) return t;
        const i = t.match(/\$\{(.*?)\}/);
        if (i && i.length > 0) {
          const r = i[1];
          if (null !== (t = c2d.utils.Searcher.findAttr(r, e)) && i.input !== i[0] && (t = i.input.replace(i[0], t)), c2d.type.isString(t) && t !== e[r] && (t = a.realizeProperty(t, e)), null == t) return null
        }
        return t
      }, calcProperty(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!c2d.type.isString(t) || !t.includes("$[")) return t;
        const i = t.match(/\$\[(.*?)\]/);
        t = i[1];
        const r = new RegExp(/(\d+gw\b)|(\d+gh\b)|(\d+sw\b)|(\d+sh\b)|(\d+pw\b)|(\d+ph\b)|(\d+w\b)|(\d+h\b)/g),
          s = new RegExp(/\bleft\b|\bright\b|\btop\b|\bbottom\b/g),
          n = new RegExp(/(?:(?:^|[-+*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/);
        let o = t;
        if (!r.test(t) && !s.test(t) && !n.test(t)) return t;
        const a = {
          sw: game.size.gameField.width,
          sh: game.size.gameField.height,
          gw: game.size.gameField.width - 2 * game.size.gameField.x,
          gh: game.size.gameField.height - 2 * game.size.gameField.y
        };
        a.pw = e.width || a.sw, a.ph = e.height || a.sh, o.replace || console.warn(o), o = o.replace(r, t => {
          const e = t.match(/[a-z]+/g)[0];
          return parseFloat(t) / 100 * a[e]
        });
        const l = {
          left: -game.size.gameField.x,
          right: a.sw - game.size.gameField.x,
          top: -game.size.gameField.y,
          bottom: a.sh - game.size.gameField.y
        };
        o = o.replace(s, t => l[t]);
        try {
          o = new Function("return " + o)()
        } catch (e) {
          console.warn(o, t), console.error(e)
        }
        return c2d.type.isNumber(o) ? Math.round(o) : (console.error("Calculate property problem", {
          str: t,
          value: o,
          size: a
        }), t)
      }, createObjectFromConfig(t) {
        let {config: e, variables: i, parent: s, prefabs: n} = t;
        const {__type: o = "Container"} = e, l = {config: r(e, ["__type"]), variables: i, parent: s, prefabs: n};
        return a.resolveClass(o).createFromConfig(l)
      }, resolveClass(t) {
        if (a.types[t]) return a.types[t];
        {
          const e = c2d.utils.Searcher.findAttr(t);
          if (e) return a.types[t] = e, e;
          throw new Error("There is no registered type with the name ".concat(t))
        }
      }, createFromConfig(t) {
        let {Class: e, config: i, variables: r, parent: s, params: n = []} = t;
        n = n.map(t => c2d.type.isString(t) && this.getStringProperty({value: t, variables: r}) || t);
        const o = new e(...n);
        return s && s.addChild(o), o
      }, updateFromConfig() {
        this.writePropertiesToObject(...arguments)
      }, writePropertiesToObject(t, e, i) {
        const {__type: s, __variables: n, __states: o, children: a} = t,
          l = r(t, ["__type", "__variables", "__states", "children"]);
        this._writeProperties(l, i, e)
      }, _writeProperties(t, e, i) {
        const s = e || this;
        t = this.mergeConfigs(t);
        const {fitToArea: o} = t, l = r(t, ["fitToArea"]);
        if (e instanceof PIXI.DisplayObject) {
          let t = l.visible;
          if (c2d.type.isString(t) && (t = a.realizeProperty(t, i)), 0 == t || 0 == e.visible && 1 != t) return e.visible = !1, void (e._visibleUpdate = () => a._writeProperties(...arguments));
          e._visibleUpdate = null
        }
        const c = (t, e) => {
          s[t] || (s[t] = n({}, e)), this._writeProperties(e, s[t], i)
        }, h = (t, e) => {
          const r = this.getStringProperty({value: e, variables: i});
          c2d.type.isObject(r) && "Object" == r.constructor.name ? c(t, r) : null != r && (s[t] = r)
        }, u = (t, e) => {
          e = this.realizeConfig(e, i, !0), e = [].concat(e), s[t](...e)
        };
        if (Object.entries(l).forEach(t => {
          let [e, r] = t;
          c2d.type.isFunction(s[e]) ? u(e, r) : c2d.type.isString(r) ? h(e, r) : c2d.type.isObject(r) ? c(e, r) : (c2d.type.isArray(r) && (r = this.realizeConfig(r, i, !0)), s[e] = r)
        }), void 0 !== o && c2d.type.isFunction(s.fitToArea)) {
          let t = this.realizeConfig(o, i, !0);
          c2d.type.isArray(t) || (t = [t]), s.fitToArea(...t)
        }
      }, mergeConfigs(t) {
        const {__desktop: e, __mobile: i, __tablet: s, __portrait: n, __landscape: o, __ios: a, __iosx: l} = t,
          c = r(t, ["__desktop", "__mobile", "__tablet", "__portrait", "__landscape", "__ios", "__iosx"]);
        let h = {};
        return c2d.utils.Object.mergeDeep(h, c), game.device.desktop ? e && c2d.utils.Object.mergeDeep(h, e) : (n && game.device.portrait && c2d.utils.Object.mergeDeep(h, n), o && game.device.landscape && c2d.utils.Object.mergeDeep(h, o), i && game.device.mobile && (c2d.utils.Object.mergeDeep(h, i), h = this.mergeConfigs(h)), s && game.device.tablet && (c2d.utils.Object.mergeDeep(h, s), h = this.mergeConfigs(h)), a && game.device.ios && (c2d.utils.Object.mergeDeep(h, a), h = this.mergeConfigs(h)), l && game.device.isIphoneX && (c2d.utils.Object.mergeDeep(h, l), h = this.mergeConfigs(h))), h
      }, connectType(t, e, i, r) {
        a.types.hasOwnProperty(t) ? console.error("You cannot register extension twice!", t) : (a.types[t] = e, i && (e.createFromConfig = i), r && Object.assign(e.prototype, {updateFromConfig: r}))
      }
    };
    var l = a;
    i.default = l
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.object.assign": 320,
    "core-js/modules/es.regexp.constructor": 322,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/es.string.match": 326,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  34: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.object.assign"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Factory.js")) && r.__esModule ? r : {default: r};

    function n(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    function o(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? o(Object(i), !0).forEach((function (e) {
          l(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function l(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    class c {
      constructor(t) {
        let {config: e, variables: i, prefabs: r, parent: s, size: n} = t;
        this.actualConfig = null, this.nodeMap = null, this.actualConfigMap = {}, this.nodeList = [], this.variables = i || {}, this.variables._relative = {}, e.__prefabs = a(a({}, e.__prefabs), r), e && this.build(e, s, n)
      }

      get mainNode() {
        return this.nodeList.first
      }

      build(t, e, i) {
        this.actualConfig = t, this.nodeMap = {}, i && (this.variables._relative.size = i), this.nodeList = this._buildDeeper({
          config: t,
          nodeMaps: [this.nodeMap],
          variables: this.variables,
          parent: e
        })
      }

      _buildDeeper(t) {
        let {config: e, nodeMaps: i = [], variables: r = {}, prefabs: s = {}, parent: n} = t;
        return c2d.type.isArray(e) || (e = [e]), e.map((t, e) => this._buildNode({
          config: t,
          nodeMaps: i,
          variables: r,
          prefabs: s,
          parent: n
        }))
      }

      _buildNode(t) {
        let {config: e, nodeMaps: i, variables: r, prefabs: n, parent: o} = t;
        e.name && (this.actualConfigMap[e.name] = e), r = c.realizeConfigNode(e, r, n);
        const a = s.default.createObjectFromConfig({config: e, variables: r, parent: o, prefabs: n});
        return o && o.addChild(a), this._putNodeWithExistingNameToArray(e.name, a, i), c.injectCurrentStateIntoNode(a, e, r), this._writeStaticProperties(a, e, r), a.updateFromConfig ? a.updateFromConfig(e, r) : s.default.writePropertiesToObject(e, r, a), e.mask && (a.mask = this._buildNode({
          config: e.mask,
          nodeMaps: [...i, a.nodeMap],
          variables: r,
          prefabs: n,
          parent: a
        })), c2d.type.isArray(e.children) && e.children.length && (a.nodeMap = {}, r = c.updateRelativeVariable(a, r), a.nodeList = this._buildDeeper({
          config: e.children,
          nodeMaps: [...i, a.nodeMap],
          variables: r,
          prefabs: n,
          parent: a
        })), a.onTreeDidBuild && a.onTreeDidBuild(), a.onTreeDidUpdate && a.onTreeDidUpdate(), a
      }

      _putNodeWithExistingNameToArray(t, e, i) {
        t && i.forEach(i => {
          i[t] ? (c2d.type.isArray(i[t]) || (i[t] = [i[t]]), i[t].push(e)) : i[t] = e
        })
      }

      _writeStaticProperties(t, e, i) {
        e.__static && (t.hasOwnProperty("_isStaticSet") && !t._isStaticSet && (s.default.writePropertiesToObject(e.__static, i, t), t._isStaticSet = !0), delete e.__static)
      }

      update(t, e, i) {
        t ? this.actualConfig = t : t = this.actualConfig;
        const r = {children: this.nodeList};
        c.update({config: t, parent: r, size: e, nodeMap: this.nodeMap, variables: this.variables, prefabs: i})
      }

      static update(t) {
        let {config: e, parent: i, size: r, nodeMap: s = {}, variables: n = {}, prefabs: o = {}} = t;
        c2d.type.isArray(e) || (e = [e]), r && (n._relative = n._relative || {}, n._relative.size = r), e.forEach((t, e) => {
          c.updateNode({config: t, nodeIndex: e, parent: i, nodeMap: s, variables: n, prefabs: o})
        })
      }

      static updateNode(t) {
        let {config: e, nodeIndex: i, parent: r, nodeMap: s = {}, variables: n = {}, prefabs: o = {}} = t;
        if (!e) return;
        n = c.realizeConfigNode(e, n, o);
        const a = c.findNode(e.name, i, r, s);
        a ? (c.injectCurrentStateIntoNode(a, e, n), c._updateNode({
          node: a,
          config: e,
          variables: n,
          nodeMap: s,
          prefabs: o
        })) : console.error("Node not found!", {name: e.name, config: e, nodeMap: s, parent: r})
      }

      static _updateNode(t) {
        let {node: e, config: i, variables: r, nodeMap: n, prefabs: o} = t;
        e._visibleUpdate = null, e.updateFromConfig ? e.updateFromConfig(i, r) : s.default.writePropertiesToObject(i, r, e), 0 != e.visible ? (c2d.type.isArray(i.children) && i.children.length && (r = c.updateRelativeVariable(e, r), c.update({
          config: i.children,
          parent: e,
          nodeMap: e.nodeMap || n,
          variables: r,
          prefabs: o
        })), e.onTreeDidUpdate && e.onTreeDidUpdate()) : e._visibleUpdate = () => c._updateNode(...arguments)
      }

      static injectCurrentStateIntoNode(t, e, i) {
        if (!t.updateFactoryStates || !e.__states) return;
        const r = c.mergeStatesConfigs(e.__states);
        i = i || {}, t.variables = i, t.updateFactoryStates(r), Object.entries(t.factoryStates).forEach(e => {
          let [r, {_current: s}] = e;
          i.states = c2d.utils.Object.cloneDeep(i.states) || {}, i.states[r] = t.factoryStates[r][s]
        })
      }

      static mergeStatesConfigs(t) {
        const {__desktop: e, __mobile: i, __tablet: r, __portrait: s, __landscape: o, __ios: l, __iosx: h} = t;
        let u = a({}, n(t, ["__desktop", "__mobile", "__tablet", "__portrait", "__landscape", "__ios", "__iosx"]));
        return game.device.desktop ? e && (u = a(a({}, u), e)) : (s && game.device.portrait && (u = a(a({}, u), s)), o && game.device.landscape && (u = a(a({}, u), o)), i && game.device.mobile && (u = a(a({}, u), i), u = c.mergeStatesConfigs(u)), r && game.device.tablet && (u = a(a({}, u), r), u = c.mergeStatesConfigs(u)), l && game.device.ios && (u = a(a({}, u), l), u = c.mergeStatesConfigs(u)), h && game.device.isIphoneX && (u = a(a({}, u), h), u = c.mergeStatesConfigs(u))), u
      }

      static findNode(t, e, i, r) {
        return t && r && r[t] && !c2d.type.isArray(r[t]) ? r[t] : i && i.nodeList ? i.nodeList[e] : i && i.children ? i.children[e] : null
      }

      static updateRelativeVariable(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t.customBounds) return e;
        const [i, r, s, n] = t.customBounds, o = a({}, e);
        return o._relative = a({}, o._relative), o._relative.size = a({}, o._relative.size), c2d.type.isNumber(s) && (o._relative.size.width = s), c2d.type.isNumber(n) && (o._relative.size.height = n), o
      }

      static realizeConfigNode(t, e, i) {
        if (t.__prefabs && c.mergePrefabs(t, i), t.__prefab && c.realizePrefab(t, i), t.__variables && (e = s.default.mergeVariables(t, e)), t.name && (t.name = s.default.getStringProperty({
          value: t.name,
          variables: e
        }) || t.name), c2d.type.isString(t.children)) {
          const i = t.children, r = s.default.getStringProperty({value: i, variables: e});
          t.children = r || t.children
        }
        return e
      }

      static mergePrefabs(t, e) {
        Object.keys(t.__prefabs).forEach(i => {
          i in e && console.error("The prefab will be overwritten.", {key: i, config: t})
        }), Object.assign(e, t.__prefabs);
        const i = Object.values(t.__prefabs);
        c.dispensePrefabs(i, e), delete t.__prefabs
      }

      static dispensePrefabs(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c2d.type.isArray(t) || (t = [t]), t.forEach(t => {
          t.__prefabs && c.mergePrefabs(t, e), t.__prefab && c.realizePrefab(t, e);
          const {children: i} = t;
          c2d.type.isArray(i) && i.length > 0 && c.dispensePrefabs(i, e)
        })
      }

      static realizePrefab(t, e) {
        const i = e => {
          e || console.error("Prefab not found.", {prefab: e, config: t});
          const {__variables: i} = t, r = n(t, ["__variables"]), o = s.default.realizeConfig(e, i, !0, !0);
          Object.assign(t, o, r)
        };
        if (c2d.type.isArray(t.__prefab)) {
          i(t.__prefab.reduce((t, i) => {
            const r = e[i];
            if (!r) return t;
            const s = c2d.utils.Object.cloneDeep(r);
            return Object.assign(t, s), t
          }, {}))
        } else e[t.__prefab] && i(e[t.__prefab]);
        delete t.__prefab
      }
    }

    i.default = c
  }, {
    "./Factory.js": 33,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.object.assign": 320,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  35: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryTextField.js")) && r.__esModule ? r : {default: r};
    const n = t => t > 9 ? t : "0" + t;

    class o extends s.default {
      onTreeDidBuild() {
        this.tick()
      }

      tick() {
        const t = new Date;
        this.text = n(t.getHours()) + ":" + n(t.getMinutes()), c2d.call(() => this.tick(), 1)
      }

      static createFromConfig(t) {
        let {config: e, parent: i} = t;
        return c2d.display.Factory.createFromConfig({Class: o, config: e, parent: i})
      }
    }

    i.default = o
  }, {"../items/FactoryTextField.js": 53}],
  36: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryContainer.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return c2d.display.Factory.createFromConfig({Class: n, config: e, parent: r, params: [e], variables: i})
      }

      drawLines(t) {
        if (this.tree) return;
        const {
          columns: e,
          rows: i,
          winColor: r,
          loseColor: s,
          cellSize: n,
          gridColumns: o,
          spacing: a
        } = this._variables, l = [];
        (t = Array.fromObject(t)).forEach((t, o) => {
          const a = {
            __type: "TextField",
            text: o + 1,
            x: 40 * e / 2,
            anchor: {x: .5, y: 0},
            style: "${styles.text__h3}",
            color: "${styles.color__secondary}"
          }, c = {
            __type: "WinMap",
            y: game.device.desktop ? 70 : 80,
            winColor: r,
            loseColor: s,
            cellSize: n,
            columns: e,
            rows: i
          }, h = [];
          Object.entries(t).forEach(t => {
            let [i, r] = t;
            const s = +e * +r + +i;
            h.push(s)
          }), c.pins = h, l.push({children: [a, c]})
        }), this.tree = new c2d.display.FactoryTree({
          config: {
            __type: "GridLayout",
            columns: "${gridColumns}",
            spacing: "${spacing}",
            children: l
          }, variables: this.__variables
        }), this.addChild(this.tree.mainNode)
      }

      updateFromConfig(t, e) {
        super.updateFromConfig(...arguments), this.tree && (this.tree.variables = e, this.tree.update())
      }
    }

    i.default = n
  }, {
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  37: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryContainer.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super(...arguments);
        const {min: e = 0, max: i = 1, value: r = 0, step: s = 1, enable: n = !0, hideRange: o, hidePin: a} = t;
        this.pin = null, this.sliderBackEmpty = null, this.sliderBackFull = null, this.minValue = e, this.maxValue = i, this.value = r < e ? e : r, this.step = s, this.hideRange = o, this.hidePin = a, this.sliderHitArea = [-100, -100, 200, 200], this._enabled = n, this._moved = !1, this.handler = null
      }

      get sliderWidth() {
        return this._sliderWidth
      }

      set sliderWidth(t) {
        this._sliderWidth = t
      }

      get sliderHitArea() {
        return this._sliderHitArea
      }

      set sliderHitArea(t) {
        this._sliderHitArea = t
      }

      onTreeDidBuild() {
        this.pin = this.nodeMap.slider_pin, this.sliderBackEmpty = this.nodeMap.slider_back_empty, this.sliderBackFull = this.nodeMap.slider_back_full, this.hidePin && (this.pin.visible = !1), this.hideRange ? (this.nodeMap.minValue.visible = !1, this.nodeMap.maxValue.visible = !1) : (this.nodeMap.minValue.text = this.minValue, this.nodeMap.maxValue.text = this.maxValue), this.enable(this.enabled)
      }

      onTreeDidUpdate() {
        this._sliderWidth ? this.sliderBackEmpty.width = this.sliderBackFull.width = this._sliderWidth : this._sliderWidth = this.sliderBackEmpty.width;
        const [t, e, i, r] = this.sliderHitArea;
        this.hitArea = new PIXI.Rectangle(t, e, this.sliderWidth + i, r), this.hideRange || (this.nodeMap.maxValue.x = this._sliderWidth), this.redraw()
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return c2d.display.Factory.createFromConfig({Class: n, config: e, parent: r, params: [e], variables: i})
      }

      updateFromConfig(t) {
        this.updateConfig(t), super.updateFromConfig(...arguments)
      }

      updateConfig(t) {
        t._realize || (t.label && (t.children.push(t.label), t.label.name = "label", delete t.label), delete t.value, delete t.min, delete t.max, delete t.step, delete t.enable, t._realize = !0)
      }

      getLocalPointerX(t) {
        let e = this.maxValue,
          i = this.minValue + t.data.getLocalPosition(this).x / this._sliderWidth * (e - this.minValue);
        return i = Math.round(i / this.step) * this.step, i = Math.min(i, e), i = Math.max(this.minValue, i), i
      }

      pointerdown(t) {
        this._moved = !0, t.data.originalEvent.stopImmediatePropagation()
      }

      pointerup(t) {
        if (!this._moved) return;
        this._moved = !1, t.data.originalEvent.stopImmediatePropagation();
        const e = this.getLocalPointerX(t);
        if (e == this.value) return;
        const i = {value: this.value}, r = {
          value: e, onUpdate: () => this.redraw(i.value), onComplete: () => {
            this.handler && this.handler(this, this.value)
          }
        };
        c2d.Tween.to(i, .1, r)
      }

      pointerupoutside(t) {
        return this.pointerup(t)
      }

      pointercancel(t) {
        return this.pointerup(t)
      }

      pointermove(t) {
        if (!this._moved) return;
        const e = this.getLocalPointerX(t);
        this.redraw(e), this.handler && this.handler(this, this.value)
      }

      enable(t) {
        this.interactive = t, this.buttonMode = t
      }

      get enabled() {
        return this._enabled
      }

      redraw(t) {
        c2d.type.isNumber(t) && ((0 ^ this.step) === this.step ? this.value = parseInt(t) : this.value = t, this.label && (this.label.text = this.value));
        const e = parseInt(this.maxValue / this.step) * this.step;
        this.pin.x = .5 * this.pin.width + (this.value - this.minValue) / (e - this.minValue) * (this._sliderWidth - this.pin.width), this.sliderBackFull.width = this.pin.x
      }

      get label() {
        return this.nodeMap.label
      }

      setHandlers(t) {
        this.handler = t
      }
    }

    i.default = n
  }, {
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  38: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array.reverse"), t("core-js/modules/es.array.sort"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryContainer.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      onTreeDidBuild() {
        super.onTreeDidBuild(), this.dataLabel = this.nodeMap.dataLabel, this.staticLabel = this.nodeMap.staticLabel, this.separator = this.nodeMap.separator
      }

      onTreeDidUpdate() {
        super.onTreeDidUpdate();
        const t = this.separator.parent.height;
        this.separator.drawRect(0, 0, 2, t)
      }

      setPayments(t) {
        let e = "";
        const i = [];
        let r, s, n = !1;
        const o = Object.keys(t).length - 1;
        Object.entries(t).reverse().forEach((t, a) => {
          let [l, c] = t;
          if (r == c) return n = !0, s = l, void (a === o && i[i.length - 1].push(l));
          n && (n = !1, i[i.length - 1].push(s)), r = c, 0 !== a && (e += "\n"), i.push([l]), e += "x" + c
        });
        const a = i.map(t => t.sort().join(" - "));
        this.staticLabel.text = a.join("\n"), this.dataLabel.text = e
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return c2d.display.Factory.createFromConfig({Class: n, config: e, parent: r, params: [e], variables: i})
      }

      get id() {
        return this._config.id
      }

      set id(t) {
      }
    }

    i.default = n
  }, {
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.array.reverse": 316,
    "core-js/modules/es.array.sort": 317,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  39: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryContainer.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        let {toggled: e = !1, enabled: i = !0, toggleHandler: r} = t;
        super(...arguments), this.pinOn = null, this.pinOff = null, this.backOn = null, this.backOff = null, this._toggled = e, this._enabled = i, this.toggleHandler = r
      }

      onTreeDidBuild() {
        this.pinOn = this.nodeMap.tumbler_pin_on, this.pinOff = this.nodeMap.tumbler_pin_off, this.backOn = this.nodeMap.tumbler_back_on, this.backOff = this.nodeMap.tumbler_back_off, this.enable(this._enabled), this.toggle(this._toggled, !1), this._activateListeners()
      }

      _activateListeners() {
        this.pointerup = t => this._fireAction(n.states.POINTER_UP), this.pointerover = t => this._fireAction(n.states.POINTER_OVER), this.pointerout = t => this._fireAction(n.states.POINTER_OUT), this.pointerdown = t => this._fireAction(n.states.POINTER_DOWN), this.pointertap = t => {
          this.toggle(!this._toggled, !0), this._fireAction(n.states.POINTER_TAP), this.toggleHandler && this.toggleHandler(this._toggled)
        }
      }

      set tumblerActions(t) {
        this._tumblerActions = t
      }

      get tumblerActions() {
        return this._tumblerActions
      }

      playAudio(t) {
        game.audioManager.playAudio(t)
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return c2d.display.Factory.createFromConfig({Class: n, config: e, parent: r, params: [e], variables: i})
      }

      get toggleIndex() {
        return this._toggled ? 1 : 0
      }

      toggle(t) {
        let e, i, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._toggled = t;
        return this._toggled ? (e = this.backOn.width - this.pinOn.width - 4, i = 1) : (e = 4, i = 0), r ? (c2d.Tween.to(this.pinOn, .1, {
          pixi: {
            alpha: i,
            x: e
          }
        }), c2d.Tween.to(this.pinOff, .1, {pixi: {x: e}}), c2d.Tween.to(this.backOn, .1, {pixi: {alpha: i}})) : (this.pinOn.x = e, this.pinOn.alpha = i, this.pinOff.x = e, this.backOn.alpha = i), this.toggled
      }

      _fireAction(t) {
        this._enabled && this.tumblerActions[t] && Object.entries(this.tumblerActions[t]).forEach(t => {
          let [e, i] = t;
          this[e](...i)
        })
      }

      enable(t) {
        this.interactive = t, this.buttonMode = t
      }

      setHandlers(t) {
        this.toggleHandler = t
      }
    }

    i.default = n, n.states = {
      DEFAULT: "default",
      POINTER_OUT: "pointerOut",
      POINTER_OVER: "pointerOver",
      POINTER_UP: "pointerUp",
      POINTER_DOWN: "pointerDown",
      POINTER_TAP: "pointerTap",
      DISABLED: "disabled"
    }
  }, {
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  40: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.includes"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../items/FactoryContainer.js")) && r.__esModule ? r : {default: r};

    function n(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? n(Object(i), !0).forEach((function (e) {
          a(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function a(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    class l extends s.default {
      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return c2d.display.Factory.createFromConfig({Class: l, config: e, parent: r, params: [e], variables: i})
      }

      updateFromConfig(t, e) {
        this.drawMap(t), super.updateFromConfig(...arguments)
      }

      drawMap(t) {
        if (t.children) return;
        t.children = [];
        const {columns: e, rows: i, pins: r, loseColor: s, winColor: n, cellSize: a} = t, l = e * i,
          c = {__type: "Sprite", anchor: {x: .5, y: .5}};
        for (let i = 0; i < l; i++) {
          const s = i % e * 50, n = 50 * Math.floor(i / e),
            a = r.includes(i) ? "${textures.point_active}" : "${textures.point_disable}",
            l = o(o({}, c), {}, {texture: a, x: s, y: n});
          t.children.push(l)
        }
      }
    }

    i.default = l
  }, {
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  41: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = T(t("./Factory.js")), s = T(t("./items/FactoryContainer.js")), n = T(t("./items/FactorySprite.js")),
      o = T(t("./items/FactoryNineSlicePlane.js")), a = T(t("./items/FactoryTilingSprite.js")),
      l = T(t("./items/FactoryGraphics.js")), c = T(t("./items/FactoryButton.js")),
      h = T(t("./items/FactoryTextField.js")), u = T(t("./items/FactoryPrefabText.js")),
      d = T(t("./items/FactoryMultistyleText.js")), f = T(t("./items/FactoryCurvedTextField.js")),
      p = T(t("./items/FactorySpine.js")), m = T(t("./items/FactoryScrollContainer.js")),
      g = T(t("./items/FactoryTimer.js")), _ = T(t("./layouts/FactoryVerticalLayout.js")),
      y = T(t("./layouts/FactoryHorizontalLayout.js")), v = T(t("./layouts/FactoryGridLayout.js")),
      b = T(t("./layouts/FactoryInlineLayout.js")), x = T(t("./layouts/FactoryHorizontalTable.js")),
      j = T(t("./components/Clock.js")), w = T(t("./components/Tumbler.js")), M = T(t("./components/Slider.js")),
      S = T(t("./components/SymbolMultipliers.js")), O = T(t("./components/WinMap.js")),
      P = T(t("./components/LinesWinMap.js"));

    function T(t) {
      return t && t.__esModule ? t : {default: t}
    }

    r.default.types = {
      Container: s.default,
      Sprite: n.default,
      TilingSprite: a.default,
      Graphics: l.default,
      FactoryButton: c.default,
      TextField: h.default,
      PrefabText: u.default,
      CurvedTextField: f.default,
      MultistyleText: d.default,
      Spine: p.default,
      FactoryScrollContainer: m.default,
      VerticalLayout: _.default,
      HorizontalLayout: y.default,
      GridLayout: v.default,
      FactoryInlineLayout: b.default,
      NineSlicePlane: o.default,
      FactoryTimer: g.default,
      FactoryHorizontalTable: x.default,
      Clock: j.default,
      Slider: M.default,
      Tumbler: w.default,
      SymbolMultipliers: S.default,
      WinMap: O.default,
      LinesWinMap: P.default
    };
    var C = r.default;
    i.default = C
  }, {
    "./Factory.js": 33,
    "./components/Clock.js": 35,
    "./components/LinesWinMap.js": 36,
    "./components/Slider.js": 37,
    "./components/SymbolMultipliers.js": 38,
    "./components/Tumbler.js": 39,
    "./components/WinMap.js": 40,
    "./items/FactoryButton.js": 42,
    "./items/FactoryContainer.js": 43,
    "./items/FactoryCurvedTextField.js": 44,
    "./items/FactoryGraphics.js": 45,
    "./items/FactoryMultistyleText.js": 46,
    "./items/FactoryNineSlicePlane.js": 47,
    "./items/FactoryPrefabText.js": 49,
    "./items/FactoryScrollContainer.js": 50,
    "./items/FactorySpine.js": 51,
    "./items/FactorySprite.js": 52,
    "./items/FactoryTextField.js": 53,
    "./items/FactoryTilingSprite.js": 54,
    "./items/FactoryTimer.js": 55,
    "./layouts/FactoryGridLayout.js": 56,
    "./layouts/FactoryHorizontalLayout.js": 57,
    "./layouts/FactoryHorizontalTable.js": 58,
    "./layouts/FactoryInlineLayout.js": 59,
    "./layouts/FactoryVerticalLayout.js": 60
  }],
  42: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.includes"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("../../factory/Factory.js")), s = a(t("../../Container.js")), n = t("./FactoryNode.js"),
      o = a(t("./../../../event/Signal.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class l extends ((0, n.mixFactoryNode)(s.default)) {
      get isEnabled() {
        return this._enabled
      }

      constructor() {
        super(...arguments), this._enabled = !0, this._isClicked = !1, this._buttonListeners = {}, this._buttonStates = {}, this._buttonActions = {}, this._buttonStateId = l.states.DEFAULT, this.toggleIndex = 0, this.interactive = !0
      }

      onTreeDidBuild() {
        this._setInteraction(!0), this._activateListeners()
      }

      _toggleInitState() {
        const t = this._buttonStates[l.states.DEFAULT];
        t && this.setFactoryStates(this._extractToggleStates(t))
      }

      _setInteraction(t) {
        this.buttonMode = t, this._enabled = t, this._enabled || (this._isClicked = !1)
      }

      _activateListeners() {
        this.cursor = "pointer", this.pointerover = t => this._onPointerEvent(l.states.POINTER_OVER, t), this.pointerout = t => this._onPointerEvent(l.states.POINTER_OUT, t), this.pointerup = this._onPointerUp.bind(this), this.pointerdown = this._onPointerDown.bind(this), this.pointerupoutside = this._onPointerUpOutside.bind(this)
      }

      toggle(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = arguments.length > 2 ? arguments[2] : void 0;
        return c2d.type.isNumber(t) ? this.toggleIndex = t : this.toggleIndex++, e && this._updateVisualState(i || this._buttonStateId), this.toggleIndex
      }

      enable(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this._enabled === t) return;
        this._enabled = t;
        const i = this._enabled ? l.states.DEFAULT : l.states.DISABLED;
        this._updateVisualState(i), e && this._setInteraction(t)
      }

      _updateVisualState(t) {
        if (!this._buttonStates[t]) return;
        const e = this._extractToggleStates(this._buttonStates[t]);
        this.setFactoryStates(e), this._buttonStateId = t
      }

      _extractToggleStates(t) {
        const e = {};
        return Object.entries(t).forEach(t => {
          let [i, r] = t;
          c2d.type.isArray(r) ? e[i] = r[this.toggleIndex % r.length] : e[i] = r
        }), e
      }

      _onPointerEvent(t, e) {
        this._enabled && (this._buttonStates[t] && this._buttonStates[t].toggle && this.toggle(this._buttonStates[t].toggle, !1), this._updateVisualState(t), this._fireActions(t), this._fireListeners(t, e))
      }

      _fireActions(t) {
        this._buttonActions[t] && Object.entries(this._buttonActions[t]).forEach(t => {
          let [e, i] = t;
          this[e](...i)
        })
      }

      playAudio(t) {
        this._enabled && l.signals.playAudio.emit(t)
      }

      openLink(t) {
        this._enabled && window.open(t)
      }

      _onPointerUpOutside(t) {
        this._enabled && (this._isClicked = !1, this._updateVisualState(l.states.DEFAULT), this._fireActions(l.states.POINTER_UP_OUTSIDE), this._fireListeners(l.states.POINTER_UP_OUTSIDE, t))
      }

      _onPointerDown(t) {
        this._enabled && !this._isClicked && 2 !== t.data.button && (this._isClicked = !0, this._onPointerEvent(l.states.POINTER_DOWN, t))
      }

      _onPointerUp(t) {
        this._enabled && this._isClicked && (this._isClicked = !1, this._onPointerEvent(l.states.POINTER_UP, t))
      }

      _fireListeners(t, e) {
        this._buttonListeners[t] && this._buttonListeners[t].forEach(t => t(this, e))
      }

      setHandlers(t) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this._buttonListeners.pointerUp = [t] : this.addButtonListener("pointerUp", t)
      }

      addButtonListener(t, e) {
        this._buttonListeners[t] || (this._buttonListeners[t] = []), this._buttonListeners[t].includes(e) || this._buttonListeners[t].push(e)
      }

      removeButtonListener(t, e) {
        this._buttonListeners[t] && this._buttonListeners[t].includes(e) && this._buttonListeners[t].splice(this._buttonListeners[t].indexOf(e), 1)
      }

      clickAction() {
        this.pointerdown(), this.pointerup()
      }

      set buttonActions(t) {
        this._buttonActions = t
      }

      get buttonActions() {
        return this._buttonActions
      }

      set buttonStates(t) {
        this._buttonStates = t
      }

      get buttonStates() {
        return this._buttonStates
      }

      static createFromConfig(t) {
        return t.Class = l, r.default.createFromConfig(t)
      }
    }

    i.default = l, l.states = {
      DEFAULT: "default",
      POINTER_OUT: "pointerOut",
      POINTER_OVER: "pointerOver",
      POINTER_UP: "pointerUp",
      POINTER_DOWN: "pointerDown",
      POINTER_UP_OUTSIDE: "pointerUpOutside",
      DISABLED: "disabled"
    }, l.signals = {playAudio: new o.default}
  }, {
    "../../Container.js": 20,
    "../../factory/Factory.js": 33,
    "./../../../event/Signal.js": 150,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  43: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = t("./FactoryNode.js"), n = (r = t("../../Container.js")) && r.__esModule ? r : {default: r};

    class o extends ((0, s.mixFactoryNode)(n.default)) {
      static createFromConfig(t) {
        return t.Class = o, super.createFromConfig(t)
      }

      onTreeDidUpdate() {
        super.onTreeDidUpdate(), this.factoryUpdateAnchor()
      }

      factoryUpdateAnchor() {
        this._config.anchor && (this.pivot.x = this.width * this._config.anchor.x, this.pivot.y = this.height * this._config.anchor.y)
      }
    }

    i.default = o
  }, {"../../Container.js": 20, "./FactoryNode.js": 48}],
  44: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../CurvedTextField.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends ((0, n.mixFactoryNode)(r.default)) {
      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {text: n = "", style: o} = e,
          l = s.default.createFromConfig({Class: a, config: e, parent: r, params: [n, o], variables: i});
        return e.localize && (l.text = l.text.ls()), l
      }
    }

    i.default = a
  }, {"../../CurvedTextField.js": 21, "../../factory/Factory.js": 33, "./FactoryNode.js": 48}],
  45: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../../Graphics.js")) && r.__esModule ? r : {default: r}, n = t("./FactoryNode.js");

    class o extends ((0, n.mixFactoryNode)(s.default)) {
      constructor() {
        super(...arguments), this.doNotCalculate = !1
      }

      static createFromConfig(t) {
        return t.Class = o, super.createFromConfig(t)
      }

      updateChain(t) {
        this.clear(), t.forEach(t => {
          const e = Object.keys(t)[0];
          "function" == typeof this[e] ? this[e](...t[e]) : this[e] = t[e]
        })
      }

      chain() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        c2d.type.isObject(e[0]) && this.updateChain(e)
      }

      get width() {
        return this.doNotCalculate ? 0 : super.width
      }

      get height() {
        return this.doNotCalculate ? 0 : super.height
      }

      set width(t) {
        super.width = t
      }

      set height(t) {
        super.height = t
      }
    }

    i.default = o
  }, {
    "../../Graphics.js": 24,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  46: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../multistyleText/MultistyleText.js")), s = o(t("../../factory/Factory.js")),
      n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends ((0, n.mixFactoryNode)(r.default)) {
      updateFromConfig(t, e) {
        s.default.writePropertiesToObject(t, e, this), t.maxWidth && (this._maxWidth = t.maxWidth), this.style = t.style, this.fitToMaxWidth(t.maxWidth), this.dirty = !0
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return s.default.createFromConfig({Class: a, config: e, parent: r, variables: i})
      }
    }

    i.default = a
  }, {"../../factory/Factory.js": 33, "../../multistyleText/MultistyleText.js": 64, "./FactoryNode.js": 48}],
  47: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../NineSlicePlane.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    class l extends ((0, n.mixFactoryNode)(r.default)) {
      constructor(t, e) {
        t instanceof PIXI.Texture || (t = PIXI.Texture.EMPTY);
        for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) r[s - 2] = arguments[s];
        super(t, ...e, ...r)
      }

      get texture() {
        return super.texture
      }

      set texture(t) {
        t instanceof PIXI.Texture ? super.texture = t : console.error("Texture is undefined.", t)
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {texture: n, padding: o} = e, c = a(e, ["texture", "padding"]);
        return s.default.createFromConfig({Class: l, config: c, parent: r, params: [n, o], variables: i})
      }
    }

    i.default = l
  }, {
    "../../NineSlicePlane.js": 25,
    "../../factory/Factory.js": 33,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  48: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.mixFactoryNode = void 0;
    var r = a(t("../../factory/Factory.js")), s = a(t("../../../utils/Mixins.js")), n = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../../extensions/CustomBounds.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return o = function () {
        return t
      }, t
    }

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class l {
      initialize() {
        this._visible = !0, this._config = null, this._variables = {}, this._factoryStates = {}, this._isStaticSet = !1, this._currentStates = {}, this._visibleUpdate = null
      }

      static createFromConfig(t) {
        let {Class: e, config: i, variables: s, parent: n, params: o, prefabs: a} = t;
        return r.default.createFromConfig({Class: e, config: i, parent: n, params: o, variables: s, prefabs: a})
      }

      onTreeDidBuild() {
      }

      onTreeDidUpdate() {
      }

      updateFromConfig(t, e) {
        this.__variables = e || this.__variables, this._config = t || this._config, r.default.writePropertiesToObject(this._config, this.__variables, this)
      }

      updateFactoryStates(t) {
        this._factoryStates = t, Object.entries(this._factoryStates).forEach(t => {
          let [e, i] = t;
          this._factoryStates[e]._current ? this._factoryStates[e]._current = this._currentStates[e] : (this._factoryStates[e]._current = this._currentStates[e] || Object.keys(i).first, this._currentStates[e] = this._factoryStates[e]._current)
        })
      }

      setFactoryStates(t) {
        const e = Object.entries(t);
        e.forEach((t, i) => {
          let [r, s] = t;
          this.setFactoryState(r, s, i === e.length - 1)
        })
      }

      setFactoryState(t, e) {
        let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._checkStateIdExists(t, e) && (this._factoryStates[t]._current = e, this._currentStates[t] = e, i && c2d.display.FactoryTree.update({
          config: this.config,
          parent: {children: [this]},
          nodeMap: this.nodeMap,
          variables: this.__variables
        }))
      }

      setStates(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Object.keys(this._factoryStates).forEach(e => {
          this._checkStateIdExists(e, t) && (this._factoryStates[e]._current = t, this._currentStates[e] = t)
        }), e && this.factoryUpdate()
      }

      factoryUpdate() {
        c2d.display.FactoryTree.update({
          config: this.config,
          parent: {children: [this]},
          nodeMap: this.nodeMap,
          variables: this.__variables
        })
      }

      _checkStateIdExists(t, e) {
        return this._factoryStates[t] && e in this._factoryStates[t]
      }

      setHitArea(t, e, i, r) {
        this.hitArea = new PIXI.Rectangle(t, e, i, r)
      }

      setHandlers(t) {
        this.pointerup = () => t(this)
      }

      set config(t) {
        this._config = t
      }

      get config() {
        return this._config
      }

      set __variables(t) {
        this._variables = t
      }

      get __variables() {
        return this._variables
      }

      get factoryStates() {
        return this._factoryStates
      }

      get visible() {
        return this._visible
      }

      set visible(t) {
        this._visible = t, t && this._visibleUpdate && this._visibleUpdate()
      }

      get customBounds() {
        return this._bounds.customBounds
      }

      set customBounds(t) {
        this._bounds.customBounds = t, n.debugDraw(t, this)
      }
    }

    i.mixFactoryNode = t => (0, s.default)(t, l)
  }, {
    "../../../utils/Mixins.js": 184,
    "../../extensions/CustomBounds.js": 31,
    "../../factory/Factory.js": 33,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  49: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../PrefabText.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends ((0, n.mixFactoryNode)(r.default)) {
      constructor() {
        super(...arguments), this._localized = null
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {fontName: n} = e, o = ["", {fontName: n}];
        return s.default.createFromConfig({Class: a, config: e, parent: r, variables: i, params: o})
      }
    }

    i.default = a
  }, {
    "../../PrefabText.js": 26,
    "../../factory/Factory.js": 33,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  50: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.object.assign"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../libs/ZyngaScroller.js")), s = o(t("./FactoryContainer.js")), n = o(t("../../factory/Factory.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends s.default {
      constructor(t) {
        super(), this.nodeMap = null, this.mechanism = null, this.content = null, this._wheelScrollSpeed = t.wheelScrollSpeed || 50, this._scrollerArea = null, this._scrollerMask = null, this._scrollbarTree = null, this._isAreaDown = !1, this._isBarHandleDown = !1, this._maskSizes = [], this._lastPointerPos = {
          x: 0,
          y: 0
        }
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return n.default.createFromConfig({Class: a, config: e, parent: r, params: [e], variables: i})
      }

      onTreeDidBuild() {
        this.content = this.children[0], this.mechanism = new r.default(this._onUpdate.bind(this), this.config.scrollerOptions), this._createContentArea(), this._createScrollbar(), this._addListeners()
      }

      _createContentArea() {
        this._scrollerArea = n.default.createObjectFromConfig({
          config: this.areaConfig,
          variables: this.__variables
        }), this._setElementInteraction(this._scrollerArea, !0), this.addChildAt(this._scrollerArea, 0), this._scrollerMask = n.default.createObjectFromConfig({
          config: this.maskConfig,
          variables: this.__variables,
          parent: this
        }), this.mask = this._scrollerMask
      }

      _createScrollbar() {
        if (!this.config.scrollbar) return;
        const t = n.default.realizeConfig(this.config.scrollbar, this.scrollbarVars, !0);
        this._scrollbarTree = new c2d.display.FactoryTree({
          config: t,
          parent: this,
          size: this._size
        }), this.scrollBackground = this._scrollbarTree.nodeMap.background, c2d.type.isArray(this.scrollBackground) && (this.scrollBackground = this.scrollBackground.first), this.scrollHandle = this._scrollbarTree.nodeMap.handle, c2d.type.isArray(this.scrollHandle) && (this.scrollHandle = this.scrollHandle.first), game.device.mobile || (this._setElementInteraction(this.scrollBackground, !0), this._setElementInteraction(this.scrollHandle, !0))
      }

      _addListeners() {
        let t = !1;
        try {
          const e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0
            }
          });
          window.addEventListener("test", null, e)
        } catch (t) {
        }
        const e = !!t && {passive: !1}, i = document.querySelector("#canvas");
        i.addEventListener("mouseup", this._onDocumentUp.bind(this), e), i.addEventListener("touchend", this._onDocumentUp.bind(this), e), i.addEventListener("wheel", this._onMouseWheel.bind(this), e), this._scrollerArea.pointerdown = this._onAreaDown.bind(this), this._scrollerArea.pointermove = this._onAreaMove.bind(this), this.scrollBackground && (this.scrollBackground.pointerdown = this._onScrollbarBackgroundDown.bind(this)), this.scrollHandle && (this.scrollHandle.pointerdown = this._onScrollbarHandleDown.bind(this))
      }

      onTreeDidUpdate() {
        this.scrollTop(), this._scrollerArea.updateFromConfig(this.areaConfig), this._scrollerMask.updateFromConfig(this.maskConfig), this._updateScrollbar(), Object.assign(this.mechanism.options, this.config.scrollerOptions);
        const t = c2d.type.isNumber(this.config.botPadding) ? this.config.botPadding : 50;
        this.mechanism.setDimensions(this.width, this.height, this.content.width, this.content.height + t)
      }

      _updateScrollbar() {
        if (!this.config.scrollbar) return;
        const t = n.default.realizeConfig(this.config.scrollbar, this.scrollbarVars, !0);
        this._scrollbarTree.update(t), this._setScrollbarVisible(this._isOverflowX || this._isOverflowY)
      }

      scrollTop() {
        this.config.scrollerOptions.scrollingX && (this.content.position.x = 0), this.config.scrollerOptions.scrollingY && (this.content.position.y = 0), this.mechanism.scrollTo(0, 0)
      }

      get areaConfig() {
        return {
          __type: "Graphics",
          alpha: 0,
          chain: [{beginFill: ["0xff0000"]}, {drawRect: [0, 0, this.width, this.height]}]
        }
      }

      get maskConfig() {
        const [t, e, i, r] = this.maskSizes.length > 0 ? this.maskSizes : this.customBounds;
        return {__type: "Graphics", chain: [{beginFill: ["0xff0000"]}, {drawRect: [t, e, i, r]}]}
      }

      _setScrollbarVisible(t) {
        this.scrollBackground && (this.scrollBackground.visible = t), this.scrollHandle && (this.scrollHandle.visible = t)
      }

      _onAreaDown(t) {
        this._isAreaDown = !0, this._setLastPointerPosition(t.data.global), this.mechanism.doTouchStart(this._getTouches(t), t.data.originalEvent.timeStamp), this.addChild(this._scrollerArea)
      }

      _onAreaMove(t) {
        if (this._isAreaDown) this.mechanism.doTouchMove(this._getTouches(t), t.data.originalEvent.timeStamp); else if (this._isBarHandleDown) {
          const e = this._calcPointerDeltaPosition(t.data.global), i = e.x / this._ratioW, r = e.y / this._ratioH;
          this.mechanism.scrollBy(i, r)
        }
        this._setLastPointerPosition(t.data.global)
      }

      _onDocumentUp(t) {
        if (this._isAreaDown) {
          this.mechanism.doTouchEnd(t.timeStamp), this.addChildAt(this._scrollerArea, 0);
          const e = this.content.height - this.height - (-1 * this.content.y - 50), i = 50;
          this.content.y > i ? this.topOverScrollHandler && this.topOverScrollHandler() : e < -i && this.bottomOverScrollHandler && this.bottomOverScrollHandler()
        }
        this._isAreaDown = !1, this._isBarHandleDown = !1
      }

      _onScrollbarHandleDown(t) {
        this._isBarHandleDown = !0, this._setLastPointerPosition(t.data.global)
      }

      _onScrollbarBackgroundDown(t) {
        const e = t.data.global, i = this.scrollBackground.toLocal(e), r = i.y < this.scrollHandle.position.y ? -1 : 1,
          s = i.x < this.scrollHandle.position.x ? -1 : 1;
        this.mechanism.scrollBy(this.width * s, this.height * r, !0)
      }

      _onMouseWheel(t) {
        if (!this.worldVisible) return;
        const e = this.getGlobalPosition(), {layerX: i, layerY: r} = t, s = game.size.scale;
        if (e.x <= i && i <= e.x + this.width * s && e.y <= r && r <= e.y + this.height * s) {
          const e = Math.sign(t.deltaY) * this._wheelScrollSpeed;
          this.mechanism.scrollBy(0, e), t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }
      }

      _onUpdate(t, e) {
        this._isOverflowY && (this.content.position.y = -e), this._isOverflowX && (this.content.position.x = -t), this._updateScrollbarHandlePosition(t, e)
      }

      _updateScrollbarHandlePosition(t, e) {
        if (!this.scrollHandle) return;
        let i = 0, r = 0;
        const s = this.scrollHandle.config;
        i = s.position && s.position.x || s.x || 0, r = s.position && s.position.y || s.y || 0, i = n.default.calcProperty(i, this._size), r = n.default.calcProperty(r, this._size), t = Math.clamp(t, 0, Math.max(this.content.width - this.width, 0)), e = Math.clamp(e, 0, Math.max(this.content.height - this.height, 0)), this.scrollHandle.position.y = this._ratioH * e + r, this.scrollHandle.position.x = this._ratioW * t + i
      }

      _setLastPointerPosition(t) {
        this._lastPointerPos.x = t.x, this._lastPointerPos.y = t.y
      }

      _calcPointerDeltaPosition(t) {
        return {x: t.x - this._lastPointerPos.x, y: t.y - this._lastPointerPos.y}
      }

      _setElementInteraction(t, e) {
        t && (c2d.type.isArray(t) && (t = t.first), t.interactive = e)
      }

      _getTouches(t) {
        return [{pageX: t.data.global.x, pageY: t.data.global.y}]
      }

      setBottomOverScrollHandler(t) {
        this.bottomOverScrollHandler = t
      }

      setTopOverScrollHandler(t) {
        this.topOverScrollHandler = t
      }

      get _isOverflowY() {
        return this.config.scrollerOptions.scrollingY && this.content.height > this.height
      }

      get _isOverflowX() {
        return this.config.scrollerOptions.scrollingX && this.content.width > this.width
      }

      get _size() {
        return {width: this.width, height: this.height}
      }

      get _ratioW() {
        return this.width / this.content.width
      }

      get _ratioH() {
        return this.height / this.content.height
      }

      get width() {
        const [t, e, i, r] = this.customBounds;
        return i
      }

      get height() {
        const [t, e, i, r] = this.customBounds;
        return r
      }

      get scrollbarVars() {
        return {
          scrollbarHeight: this.height / this.content.height * this.height,
          scrollbarWidth: this.width / this.content.width * this.width,
          _relative: {size: this._size}
        }
      }

      get maskSizes() {
        return this._maskSizes
      }

      set maskSizes(t) {
        this._maskSizes = t
      }
    }

    i.default = a
  }, {
    "../../factory/Factory.js": 33,
    "../libs/ZyngaScroller.js": 62,
    "./FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.object.assign": 320,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  51: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../Spine.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    class l extends ((0, n.mixFactoryNode)(r.default)) {
      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {skeleton: n} = e;
        return delete e.skeleton, s.default.createFromConfig({
          Class: l,
          config: e,
          parent: r,
          params: [n],
          variables: i
        })
      }

      updateFromConfig(t, e) {
        this._config = t;
        const {skeleton: i, animation: r} = t, n = a(t, ["skeleton", "animation"]);
        if (r) {
          let t = s.default.realizeConfig(r, e, !0);
          c2d.type.isArray(t) || c2d.type.isObject(t) || (t = [t]), this.animation = t
        }
        s.default.writePropertiesToObject(n, e, this)
      }

      get animation() {
        return this.lastFactoryAnimation
      }

      set animation(t) {
        const {name: e, options: i, queue: r} = this._parseAnimation(t);
        this.lastFactoryAnimation = e;
        const s = this.play(e, i);
        r && r.length && s.then(() => {
          this.animation = r
        })
      }

      _parseAnimation(t) {
        if (c2d.type.isString(t)) return {name: t};
        if (c2d.type.isObject(t)) {
          const {name: e} = t;
          return {name: e, options: a(t, ["name"])}
        }
        if (c2d.type.isArray(t)) {
          const e = [...t], i = e.shift(), {name: r, options: s} = this._parseAnimation(i);
          return {name: r, options: s, queue: e}
        }
      }
    }

    i.default = l
  }, {
    "../../Spine.js": 27,
    "../../factory/Factory.js": 33,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  52: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../Sprite.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    class l extends ((0, n.mixFactoryNode)(r.default)) {
      constructor(t) {
        t instanceof PIXI.Texture || (t = PIXI.Texture.EMPTY);
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
        super(t, ...i)
      }

      get texture() {
        return super.texture
      }

      set texture(t) {
        t instanceof PIXI.Texture ? super.texture = t : console.error("Texture is undefined.", t)
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {texture: n} = e, o = a(e, ["texture"]);
        return s.default.createFromConfig({Class: l, config: o, parent: r, params: [n], variables: i})
      }

      fitToArea(t, e) {
        const i = () => {
          const i = Math.min(t / this.width, e / this.height);
          this.scale.set(i)
        }, r = this.texture.baseTexture;
        r.valid ? i() : r.on("loaded", () => i())
      }
    }

    i.default = l
  }, {
    "../../Sprite.js": 28,
    "../../factory/Factory.js": 33,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  53: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../TextField.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends ((0, n.mixFactoryNode)(r.default)) {
      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return s.default.createFromConfig({Class: a, config: e, parent: r, variables: i})
      }
    }

    i.default = a
  }, {"../../TextField.js": 29, "../../factory/Factory.js": 33, "./FactoryNode.js": 48}],
  54: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../../TilingSprite.js")), s = o(t("../../factory/Factory.js")), n = t("./FactoryNode.js");

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t, e) {
      if (null == t) return {};
      var i, r, s = function (t, e) {
        if (null == t) return {};
        var i, r, s = {}, n = Object.keys(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }

    class l extends ((0, n.mixFactoryNode)(r.default)) {
      constructor(t) {
        t instanceof PIXI.Texture || (t = PIXI.Texture.EMPTY);
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
        super(t, ...i)
      }

      get texture() {
        return super.texture
      }

      set texture(t) {
        t instanceof PIXI.Texture ? super.texture = t : console.error("Texture is undefined.", t)
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        const {texture: n} = e, o = a(e, ["texture"]);
        return s.default.createFromConfig({Class: l, config: o, parent: r, params: [n], variables: i})
      }
    }

    i.default = l
  }, {
    "../../TilingSprite.js": 30,
    "../../factory/Factory.js": 33,
    "./FactoryNode.js": 48,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  55: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./FactoryContainer.js")), s = n(t("../../factory/Factory.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    const o = t => t > 9 ? t : "0".concat(t);

    class a extends r.default {
      constructor() {
        var t, e, i;
        super(), t = this, e = "_logger", i = c2d.Logger.Of("Factory.Timer"), e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, this.nodeMap = null, this.timerTree = null, this.finishDate = null, this.startDate = null, this.finishHandler = null, this._mode = null, this._markupType = null, this._labels = null, this._blockConfig = null, this._tickTimer = null, this._isStarted = !1, this._isPaused = !1, this._needLocalization = !1
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: r} = t;
        return s.default.createFromConfig({Class: a, config: e, parent: r, params: [e], variables: i})
      }

      onTreeDidBuild() {
        this._drawTimerMarkup()
      }

      onTreeDidUpdate() {
        var t;
        null === (t = this.timerTree) || void 0 === t || t.update()
      }

      _drawTimerMarkup() {
        if (!this.blockConfig) return void this._logger.error("Error: 'blockConfig' not set!!");
        if (!this.mode) return void this._logger.error("Error: 'mode' not set or not valid. Valid is 'stopwatch' or 'timer'!!");
        const t = s.default.realizeConfig(this.blockConfig, this._variables, !0);
        this.timerTree = new c2d.display.FactoryTree({
          config: t,
          parent: this,
          variables: this._variables,
          prefabs: this._prefabs,
          size: this.size
        });
        const e = this.timerTree.nodeList.first;
        switch (this.markupType) {
          case"text":
            this._timerMarkup = new l(e, this.labels);
            break;
          case"block":
            this._timerMarkup = new c(e, this.labels);
            break;
          default:
            this._logger.error("Error: 'markupType' not set or not valid. Valid is 'text' or 'block'!!")
        }
      }

      _startTimer(t) {
        this._isStarted || (this._isStarted = !0, this.finishDate = t, this._setTimeForTimer())
      }

      _setTimeForTimer() {
        if (!this._isStarted) return;
        const t = this.finishDate - new Date;
        if (t <= 0) this._stopTimer(); else {
          const e = new Date(t), i = this.getDateObject(e);
          this._timerMarkup.setTime(i), this._tickTimer = c2d.call(() => this.tick(), 1)
        }
      }

      _stopTimer() {
        this._isStarted && (this._isStarted = !1, this.finishDate = null, null == this || this.finishHandler(), this.clearTickTimer(), this.setInitialValue())
      }

      _startStopwatch() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
        this._isStarted || (this._isStarted = !0, this.startDate = t, this._setTimeForStopwatch())
      }

      _setTimeForStopwatch() {
        if (!this._isStarted) return;
        const t = new Date - this.startDate, e = new Date(t), i = this.getDateObject(e);
        this._timerMarkup.setTime(i, this._needLocalization), this._tickTimer = c2d.call(() => this.tick(), 1)
      }

      _stopStopwatch() {
        this._isStarted && (this._isStarted = !1, this.startDate = null, this.clearTickTimer(), this.setInitialValue())
      }

      start(t) {
        "timer" === this.mode ? this._startTimer(t) : this._startStopwatch(t)
      }

      stop() {
        "timer" === this.mode ? this._stopTimer() : this._stopStopwatch()
      }

      tick() {
        "timer" === this.mode ? this._setTimeForTimer() : this._setTimeForStopwatch()
      }

      pause() {
        this._isPaused || (this.clearTickTimer(), this._isPaused = !0)
      }

      resume() {
        this._isPaused && (this._isPaused = !1, "timer" === this.mode ? this._setTimeForTimer() : this._setTimeForStopwatch())
      }

      clearTickTimer() {
        this._tickTimer && c2d.Timeout.clear(this._tickTimer), this._tickTimer = null
      }

      setInitialValue() {
        this._timerMarkup.setTime({days: 0, hours: 0, minutes: 0, seconds: 0})
      }

      getDateObject(t) {
        return {
          days: Math.floor(t / 864e5),
          hours: Math.floor(t / 36e5 % 24),
          minutes: Math.floor(t / 6e4 % 60),
          seconds: Math.floor(t / 1e3 % 60)
        }
      }

      get blockConfig() {
        return this._blockConfig
      }

      set blockConfig(t) {
        this._blockConfig = t
      }

      get isStarted() {
        return this._isStarted
      }

      get isPaused() {
        return this._isPaused
      }

      get mode() {
        return this._mode
      }

      set mode(t) {
        this._mode = t
      }

      get labels() {
        return this._labels
      }

      set labels(t) {
        this._labels = t
      }

      get needLocalization() {
        return this._needLocalization
      }

      set needLocalization(t) {
        this._needLocalization = t
      }

      get size() {
        var t, e;
        return null === (t = this._variables) || void 0 === t || null === (e = t._relative) || void 0 === e ? void 0 : e.size
      }

      get markupType() {
        return this._markupType
      }

      set markupType(t) {
        this._markupType = t
      }
    }

    i.default = a;

    class l {
      constructor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        this.node = t, this.labels = e || {
          days: "core.tournament_time_D".ls(),
          hours: "core.tournament_time_H".ls(),
          minutes: "core.tournament_time_M".ls(),
          seconds: "core.tournament_time_S".ls()
        }, this.maxBlocks = i
      }

      setTime(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.node.text = Object.keys(t).filter((e, i) => t[e] || i > 0).map(i => {
          const r = o(t[i]);
          if (e) {
            const t = this.labels[i];
            return "".concat(r).concat(t)
          }
          return r
        }).slice(0, this.maxBlocks).join(":")
      }
    }

    class c {
      constructor(t, e) {
        this.node = t, this.labels = e || {
          days: "core.tournament_time_days".ls(),
          hours: "core.tournament_time_hours".ls(),
          minutes: "core.tournament_time_minutes".ls(),
          seconds: "core.tournament_time_seconds".ls()
        }
      }

      setTime(t) {
        let e = this.node.nodeMap.timerBlock, i = this.node.nodeMap.timerLabel;
        c2d.type.isArray(e) || (e = [e]), c2d.type.isArray(i) || (i = [i]);
        const r = e.length;
        Object.keys(t).filter((e, i) => t[e] || i > 0).slice(0, r).forEach((r, s) => {
          e[s].text = o(t[r]), i[s] && (i[s].text = this.labels[r])
        })
      }
    }
  }, {"../../factory/Factory.js": 33, "./FactoryContainer.js": 43}],
  56: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("../Factory.js")), s = n(t("./Layout.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends s.default {
      constructor(t, e) {
        super(...arguments), this.grid = null, this.columns = 0, this.spacing = {x: 0, y: 0}, this.gridChildren = null
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: s} = t;
        return r.default.createFromConfig({Class: o, config: e, parent: s, variables: i})
      }

      updateFromConfig(t, e) {
        const i = super.updateFromConfig(...arguments);
        return this._applyGridSize(), i
      }

      _applyGridSize() {
        if (!this.children) return;
        let t, e;
        this.grid && (t = c2d.type.isNumber(this.grid.width) ? this.grid.width : null, e = c2d.type.isNumber(this.grid.height) ? this.grid.height : null), this.children.forEach(i => {
          i._bounds.customBounds || (i._bounds.customBounds = [0, 0, null, null]), this.grid && (i._bounds.customBounds[2] = t, i._bounds.customBounds[3] = e)
        })
      }

      _layoutChildrenPositions() {
        this._clearGridChildren();
        let t = 0;
        this.children.forEach(e => {
          const i = t % this.columns, r = (t - i) / this.columns;
          if (!e.visible) return void this._updateSizes();
          let s = 0, n = 0;
          const o = this._getSpacingX(t), a = this._getSpacingY(t);
          if (r > 0) if (this.grid && this.grid.height) n = r * (this.grid.height + a); else {
            const t = this._getGridChild(i, r - 1);
            n = this._getChildBottomY(t), n += a
          }
          if (i > 0) if (this.grid && this.grid.width) s = i * (this.grid.width + o); else {
            const t = this._getGridChild(i - 1, r);
            s = this._getChildRightX(t), s += o
          }
          e.config && e.config.x ? e.position.x += s : e.position.x = s, e.config && e.config.y ? e.position.y += n : e.position.y = n, this._addGridChild(e, i, r), t++
        })
      }

      _updateSizes() {
        let t = 0, e = 0;
        this.children.forEach(i => {
          if (!i.visible) return;
          const r = i.x + i.width;
          t = Math.max(t, r);
          const s = i.y + i.height;
          e = Math.max(e, s)
        }), this._height = e, this._width = t
      }

      _clearGridChildren() {
        this.gridChildren = []
      }

      _addGridChild(t, e, i) {
        this.gridChildren || this._clearGridChildren(), this.gridChildren[e] = this.gridChildren[e] || [], this.gridChildren[e][i] = t
      }

      _getGridChild(t, e) {
        return this.gridChildren[t] && this.gridChildren[t][e] ? this.gridChildren[t][e] : null
      }

      _updateLayoutSize() {
        this.children.length && this._updateSizes()
      }

      _getChildRightX(t) {
        let e;
        e = t.customBounds && c2d.type.isNumber(t.customBounds[2]) ? t.customBounds[2] : t.width;
        const i = t.anchor ? t.anchor.y : 0, r = t.x + e * (1 - i);
        return this._width = Math.max(this._width, r), r
      }

      _getChildBottomY(t) {
        let e;
        e = t.customBounds && c2d.type.isNumber(t.customBounds[3]) ? t.customBounds[3] : t.height;
        const i = t.anchor ? t.anchor.y : 0, r = t.y + e * (1 - i);
        return parseInt(r)
      }

      get height() {
        return Math.max(this._height, this.scale.y * this.getLocalBounds().height)
      }

      get width() {
        return Math.max(this._width, this.scale.x * this.getLocalBounds().width)
      }
    }

    i.default = o
  }, {
    "../Factory.js": 33,
    "./Layout.js": 61,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  57: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array.reverse"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("../Factory.js")), s = n(t("./Layout.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends s.default {
      constructor(t, e) {
        super(...arguments), this.spacing = 0, this.ltr = !1
      }

      onTreeDidBuild() {
        this.ltr && (this._config.anchor.x *= -1, this.children.reverse())
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: s} = t;
        return r.default.createFromConfig({Class: o, config: e, parent: s, variables: i})
      }

      _layoutChildrenPositions() {
        this.ltr ? this.reverseChildrenPositions() : this.forwardChildrenPositions()
      }

      reverseChildrenPositions() {
        this.children.reduce((t, e, i) => e.visible ? (t ? e.position.x = this._getChildLeftX(t, i) : (e.position.x = -e.width, this._width = e.width), e) : t, null)
      }

      forwardChildrenPositions() {
        this.children.reduce((t, e, i) => e.visible ? (t && (e.position.x = this._getChildRightX(t) + this._getSpacing(this.spacing, i)), e) : t, null)
      }

      _getChildLeftX(t, e) {
        let i = 0;
        i = t.customBounds && c2d.type.isNumber(t.customBounds[2]) ? t.customBounds[2] : t.width;
        const r = t.anchor ? t.anchor.y : 0, s = Math.abs(t.x) + i * (1 - r) + this._getSpacing(this.spacing, e);
        return this._width = Math.max(this._width, s), -s
      }

      get width() {
        return this._width
      }
    }

    i.default = o
  }, {
    "../Factory.js": 33,
    "./Layout.js": 61,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.array.reverse": 316,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  58: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("../Factory.js")), s = o(t("./Layout.js")), n = o(t("../items/FactoryContainer.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class a extends s.default {
      constructor(t, e) {
        super(...arguments), this.maxWidth = null, this.spacing = null, this.rows = 0, this.childContainer = null, this.headerContainer = null, this.headers = [], this.headerPool = null
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: s} = t;
        return r.default.createFromConfig({Class: a, config: e, parent: s, variables: i})
      }

      onTreeDidBuild() {
        this.createHeaderPool(), this.relocateChilds(), this.buildHeader(), this.childContainer.position.x = this.headerContainer.width
      }

      onTreeDidUpdate() {
        this._updateHeaders(), this._layoutChildrenPositions(), this._syncHeaders()
      }

      createHeaderPool() {
        this.headerPool = new c2d.ObjectPool(this._createHeader.bind(this), this._detachHeader.bind(this))
      }

      relocateChilds() {
        const t = new n.default;
        t.addChild(...this.children), this.childContainer = t, this.addChild(this.childContainer)
      }

      buildHeader() {
        this.headerContainer = new n.default, this.addChild(this.headerContainer);
        const t = this.headerPool.getElement();
        this.headers.push(t);
        const {mainNode: e} = t.data;
        this.headerContainer.addChild(e)
      }

      _createHeader() {
        const {header: t} = this.config;
        return new c2d.display.FactoryTree({config: t, size: this._size, variables: this.headerVars})
      }

      _detachHeader(t) {
        const {parent: e} = t.mainNode;
        return e && e.removeChild(t.mainNode), t
      }

      _syncHeaders() {
        if (this.headers.length < this.rows + 1) {
          const t = this.rows + 1 - this.headers.length;
          Array.from({length: t}, () => {
            const t = this.headerPool.getElement();
            this.headers.push(t);
            const {mainNode: e} = t.data;
            this.headerContainer.addChild(e)
          })
        } else if (this.headers.length > this.rows + 1) {
          const t = this.headers.length - (this.rows + 1);
          Array.from({length: t}, () => {
            const t = this.headers.pop();
            this.headerPool.putElement(t)
          })
        }
        this._repositionHeaders()
      }

      _repositionHeaders() {
        this._updateHeaders();
        let t = 0;
        const {height: e} = this.headerContainer.children.first;
        this.headerContainer.children.forEach((i, r) => {
          i.y = t + this._getSpacingY(r), t = i.y + e
        })
      }

      _updateHeaders() {
        this.headers.forEach(t => {
          t.data.mainNode.parent && t.data.update()
        })
      }

      _getSpacingX(t) {
        return t ? this._getSpacing(this.spacing.x, t) : 0
      }

      _getSpacingY(t) {
        return t ? this._getSpacing(this.spacing.y, t) : 0
      }

      get headerVars() {
        return this._variables
      }

      _layoutChildrenPositions() {
        this.rows = 0;
        let t = 0, e = 0;
        const {width: i, height: r} = this.headerContainer.children.first;
        this.childContainer.x = i, this.childContainer.children.forEach(s => {
          s.visible && (i + t + s.width > this.maxWidth && (this.rows++, e = 0, t = 0), s.x = t + this._getSpacingX(e), t = s.x + s.width, e++, s.y = this.rows * (r + this._getSpacingY(this.rows)))
        })
      }

      factoryUpdateAnchor() {
        this._config.anchor && (this.pivot.x = this.width * this._config.anchor.x, this.pivot.y = this.height * this._config.anchor.y)
      }
    }

    i.default = a
  }, {
    "../Factory.js": 33,
    "../items/FactoryContainer.js": 43,
    "./Layout.js": 61,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  59: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("../Factory.js")), s = n(t("./Layout.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends s.default {
      constructor(t, e) {
        super(...arguments), this.maxWidth = null, this.spacing = {x: 0, y: 0}
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: s} = t;
        return r.default.createFromConfig({Class: o, config: e, parent: s, variables: i})
      }

      _updateSizes() {
        let t = 0, e = 0;
        this.children.forEach(i => {
          if (!i.visible) return;
          const r = i.x + i.width;
          t = Math.max(t, r);
          const s = i.y + i.height;
          e = Math.max(e, s)
        }), this._height = e, this._width = t
      }

      _layoutChildrenPositions() {
        let t = 0, e = 0, i = 0, r = 0;
        this.children.reduce((s, n, o) => {
          if (!n.visible) return this._updateSizes(), s;
          if (s) {
            r = Math.max(s.x + s.width, r), r + this._getSpacingX(e) + n.width > this.maxWidth ? (r = 0, e = 0, i = Math.max(s.y + s.height, i), t++) : e++, n.position.x = r + this._getSpacingX(e)
          }
          return n.position.y = i + this._getSpacingY(t), n
        }, null), this._updateSizes()
      }

      _getSpacingX(t) {
        return t ? this._getSpacing(this.spacing.x, t) : 0
      }

      _getSpacingY(t) {
        return t ? this._getSpacing(this.spacing.y, t) : 0
      }

      _updateLayoutSize() {
        this.children.length && this._updateSizes()
      }

      get height() {
        return Math.max(this._height, this.scale.y * this.getLocalBounds().height)
      }

      get width() {
        return Math.max(this._width, this.scale.x * this.getLocalBounds().width)
      }
    }

    i.default = o
  }, {
    "../Factory.js": 33,
    "./Layout.js": 61,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  60: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("../Factory.js")), s = n(t("./Layout.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends s.default {
      constructor(t, e) {
        super(...arguments), this.spacing = 0
      }

      static createFromConfig(t) {
        let {config: e, variables: i, parent: s} = t;
        return r.default.createFromConfig({Class: o, config: e, parent: s, variables: i})
      }

      _layoutChildrenPositions() {
        this.children.reduce((t, e, i) => {
          if (!e.visible) return t;
          let r = 0;
          if (t) {
            const e = this._getSpacing(this.spacing, i);
            r = this._getChildBottomY(t) + e
          }
          return e.config && e.config.y ? e.position.y += r : e.position.y = r, e
        }, null)
      }
    }

    i.default = o
  }, {
    "../Factory.js": 33,
    "./Layout.js": 61,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  61: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    s(t("../Factory.js"));
    var r = s(t("../items/FactoryContainer.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor() {
        super(...arguments), this.position = {x: 0, y: 0}, this._width = 0, this._height = 0
      }

      onTreeDidBuild() {
      }

      onTreeDidUpdate() {
        this._width = 0, this._height = 0, this._layoutChildrenPositions(), this._updateLayoutSize(), super.onTreeDidUpdate(...arguments)
      }

      factoryUpdateAnchor() {
        this._config.anchor && (this.pivot.x = this._width * this._config.anchor.x, this.pivot.y = this._height * this._config.anchor.y)
      }

      _layoutChildrenPositions() {
        throw new Error("abstract")
      }

      _updateLayoutSize() {
        this.children.length && (this._getChildRightX(this.children.last), this._getChildBottomY(this.children.last))
      }

      _getChildRightX(t) {
        let e;
        e = t.customBounds && c2d.type.isNumber(t.customBounds[2]) ? t.customBounds[2] : t.width;
        const i = t.anchor ? t.anchor.y : 0, r = t.x + e * (1 - i);
        return this._width = Math.max(this._width, r), r
      }

      _getChildBottomY(t) {
        let e;
        e = t.customBounds && c2d.type.isNumber(t.customBounds[3]) ? t.customBounds[3] : t.height;
        const i = t.anchor ? t.anchor.y : 0, r = t.y + e * (1 - i);
        return this._height = Math.max(this._height, r), parseInt(r)
      }

      _getSpacingX(t) {
        return this._getSpacing(this.spacing.x, t)
      }

      _getSpacingY(t) {
        return this._getSpacing(this.spacing.y, t)
      }

      _getSpacing(t, e) {
        if (Array.isArray(t)) {
          t = t[Math.clamp(e, 0, t.length - 1)]
        }
        return t
      }
    }

    i.default = n
  }, {
    "../Factory.js": 33,
    "../items/FactoryContainer.js": 43,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  62: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const r = {};
    var s;
    !function (t) {
      var e = Date.now || function () {
        return +new Date
      }, i = {}, r = 1;
      t.effect || (t.effect = {}), t.effect.Animate = {
        requestAnimationFrame: function () {
          var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame,
            e = !!t;
          if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (e = !1), e) return function (e, i) {
            t(e, i)
          };
          var i = {}, r = 1, s = null, n = +new Date;
          return function (t, e) {
            var o = r++;
            return i[o] = t, null === s && (s = setInterval((function () {
              var t = +new Date, e = i;
              for (var r in i = {}, 0, e) e.hasOwnProperty(r) && (e[r](t), n = t);
              t - n > 2500 && (clearInterval(s), s = null)
            }), 1e3 / 60)), o
          }
        }(), stop: function (t) {
          var e = null != i[t];
          return e && (i[t] = null), e
        }, isRunning: function (t) {
          return null != i[t]
        }, start: function (s, n, o, a, l, c) {
          var h = e(), u = h, d = 0, f = 0, p = r++;
          if (c || (c = document.body), p % 20 == 0) {
            var m = {};
            for (var g in i) m[g] = !0;
            i = m
          }
          return i[p] = !0, t.effect.Animate.requestAnimationFrame((function r(m) {
            var g = !0 !== m, _ = e();
            if (!i[p] || n && !n(p)) return i[p] = null, void (o && o(60 - f / ((_ - h) / 1e3), p, !1));
            if (g) for (var y = Math.round((_ - u) / (1e3 / 60)) - 1, v = 0; v < Math.min(y, 4); v++) r(!0), f++;
            a && (d = (_ - h) / a) > 1 && (d = 1);
            var b = l ? l(d) : d;
            !1 !== s(b, _, g) && 1 !== d || !g ? g && (u = _, t.effect.Animate.requestAnimationFrame(r, c)) : (i[p] = null, o && o(60 - f / ((_ - h) / 1e3), p, 1 === d || null == a))
          }), c), p
        }
      }
    }(r), function () {
      var t = function () {
      };
      s = function (e, i) {
        for (var r in this.__callback = e, this.options = {
          scrollingX: !0,
          scrollingY: !0,
          animating: !0,
          animationDuration: 250,
          bouncing: !0,
          locking: !0,
          paging: !1,
          snapping: !1,
          zooming: !1,
          minZoom: .5,
          maxZoom: 3,
          speedMultiplier: 1,
          scrollingComplete: t,
          penetrationDeceleration: .03,
          penetrationAcceleration: .08
        }, i) this.options[r] = i[r]
      };
      var e = function (t) {
        return Math.pow(t - 1, 3) + 1
      }, i = function (t) {
        return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
      }, n = {
        __isSingleTouch: !1,
        __isTracking: !1,
        __didDecelerationComplete: !1,
        __isGesturing: !1,
        __isDragging: !1,
        __isDecelerating: !1,
        __isAnimating: !1,
        __clientLeft: 0,
        __clientTop: 0,
        __clientWidth: 0,
        __clientHeight: 0,
        __contentWidth: 0,
        __contentHeight: 0,
        __snapWidth: 100,
        __snapHeight: 100,
        __refreshHeight: null,
        __refreshActive: !1,
        __refreshActivate: null,
        __refreshDeactivate: null,
        __refreshStart: null,
        __zoomLevel: 1,
        __scrollLeft: 0,
        __scrollTop: 0,
        __maxScrollLeft: 0,
        __maxScrollTop: 0,
        __scheduledLeft: 0,
        __scheduledTop: 0,
        __scheduledZoom: 0,
        __lastTouchLeft: null,
        __lastTouchTop: null,
        __lastTouchMove: null,
        __positions: null,
        __minDecelerationScrollLeft: null,
        __minDecelerationScrollTop: null,
        __maxDecelerationScrollLeft: null,
        __maxDecelerationScrollTop: null,
        __decelerationVelocityX: null,
        __decelerationVelocityY: null,
        setDimensions: function (t, e, i, r) {
          t === +t && (this.__clientWidth = t), e === +e && (this.__clientHeight = e), i === +i && (this.__contentWidth = i), r === +r && (this.__contentHeight = r), this.__computeScrollMax(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0)
        },
        setPosition: function (t, e) {
          this.__clientLeft = t || 0, this.__clientTop = e || 0
        },
        setSnapSize: function (t, e) {
          this.__snapWidth = t, this.__snapHeight = e
        },
        activatePullToRefresh: function (t, e, i, r) {
          this.__refreshHeight = t, this.__refreshActivate = e, this.__refreshDeactivate = i, this.__refreshStart = r
        },
        triggerPullToRefresh: function () {
          this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0), this.__refreshStart && this.__refreshStart()
        },
        finishPullToRefresh: function () {
          this.__refreshActive = !1, this.__refreshDeactivate && this.__refreshDeactivate(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0)
        },
        getValues: function () {
          return {left: this.__scrollLeft, top: this.__scrollTop, zoom: this.__zoomLevel}
        },
        getScrollMax: function () {
          return {left: this.__maxScrollLeft, top: this.__maxScrollTop}
        },
        zoomTo: function (t, e, i, s, n) {
          if (!this.options.zooming) throw new Error("Zooming is not enabled!");
          n && (this.__zoomComplete = n), this.__isDecelerating && (r.effect.Animate.stop(this.__isDecelerating), this.__isDecelerating = !1);
          var o = this.__zoomLevel;
          null == i && (i = this.__clientWidth / 2), null == s && (s = this.__clientHeight / 2), t = Math.max(Math.min(t, this.options.maxZoom), this.options.minZoom), this.__computeScrollMax(t);
          var a = (i + this.__scrollLeft) * t / o - i, l = (s + this.__scrollTop) * t / o - s;
          a > this.__maxScrollLeft ? a = this.__maxScrollLeft : a < 0 && (a = 0), l > this.__maxScrollTop ? l = this.__maxScrollTop : l < 0 && (l = 0), this.__publish(a, l, t, e)
        },
        zoomBy: function (t, e, i, r, s) {
          this.zoomTo(this.__zoomLevel * t, e, i, r, s)
        },
        scrollTo: function (t, e, i, s) {
          if (this.__isDecelerating && (r.effect.Animate.stop(this.__isDecelerating), this.__isDecelerating = !1), null != s && s !== this.__zoomLevel) {
            if (!this.options.zooming) throw new Error("Zooming is not enabled!");
            t *= s, e *= s, this.__computeScrollMax(s)
          } else s = this.__zoomLevel;
          this.options.scrollingX ? this.options.paging ? t = Math.round(t / this.__clientWidth) * this.__clientWidth : this.options.snapping && (t = Math.round(t / this.__snapWidth) * this.__snapWidth) : t = this.__scrollLeft, this.options.scrollingY ? this.options.paging ? e = Math.round(e / this.__clientHeight) * this.__clientHeight : this.options.snapping && (e = Math.round(e / this.__snapHeight) * this.__snapHeight) : e = this.__scrollTop, t = Math.max(Math.min(this.__maxScrollLeft, t), 0), e = Math.max(Math.min(this.__maxScrollTop, e), 0), t === this.__scrollLeft && e === this.__scrollTop && (i = !1), this.__isTracking || this.__publish(t, e, s, i)
        },
        scrollBy: function (t, e, i) {
          var r = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft,
            s = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;
          this.scrollTo(r + (t || 0), s + (e || 0), i)
        },
        doMouseZoom: function (t, e, i, r) {
          var s = t > 0 ? .97 : 1.03;
          return this.zoomTo(this.__zoomLevel * s, !1, i - this.__clientLeft, r - this.__clientTop)
        },
        doTouchStart: function (t, e) {
          if (null == t.length) throw new Error("Invalid touch list: " + t);
          if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);
          var i, s;
          this.__interruptedAnimation = !0, this.__isDecelerating && (r.effect.Animate.stop(this.__isDecelerating), this.__isDecelerating = !1, this.__interruptedAnimation = !0), this.__isAnimating && (r.effect.Animate.stop(this.__isAnimating), this.__isAnimating = !1, this.__interruptedAnimation = !0);
          var n = 1 === t.length;
          n ? (i = t[0].pageX, s = t[0].pageY) : (i = Math.abs(t[0].pageX + t[1].pageX) / 2, s = Math.abs(t[0].pageY + t[1].pageY) / 2), this.__initialTouchLeft = i, this.__initialTouchTop = s, this.__zoomLevelStart = this.__zoomLevel, this.__lastTouchLeft = i, this.__lastTouchTop = s, this.__lastTouchMove = e, this.__lastScale = 1, this.__enableScrollX = !n && this.options.scrollingX, this.__enableScrollY = !n && this.options.scrollingY, this.__isTracking = !0, this.__didDecelerationComplete = !1, this.__isDragging = !n, this.__isSingleTouch = n, this.__positions = []
        },
        doTouchMove: function (t, e, i) {
          if (null == t.length) throw new Error("Invalid touch list: " + t);
          if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);
          if (this.__isTracking) {
            var r, s;
            2 === t.length ? (r = Math.abs(t[0].pageX + t[1].pageX) / 2, s = Math.abs(t[0].pageY + t[1].pageY) / 2) : (r = t[0].pageX, s = t[0].pageY);
            var n = this.__positions;
            if (this.__isDragging) {
              var o = r - this.__lastTouchLeft, a = s - this.__lastTouchTop, l = this.__scrollLeft,
                c = this.__scrollTop, h = this.__zoomLevel;
              if (null != i && this.options.zooming) {
                var u = h;
                if (h = h / this.__lastScale * i, u !== (h = Math.max(Math.min(h, this.options.maxZoom), this.options.minZoom))) {
                  var d = r - this.__clientLeft, f = s - this.__clientTop;
                  l = (d + l) * h / u - d, c = (f + c) * h / u - f, this.__computeScrollMax(h)
                }
              }
              if (this.__enableScrollX) {
                l -= o * this.options.speedMultiplier;
                var p = this.__maxScrollLeft;
                (l > p || l < 0) && (this.options.bouncing ? l += o / 2 * this.options.speedMultiplier : l = l > p ? p : 0)
              }
              if (this.__enableScrollY) {
                c -= a * this.options.speedMultiplier;
                var m = this.__maxScrollTop;
                (c > m || c < 0) && (this.options.bouncing ? (c += a / 2 * this.options.speedMultiplier, this.__enableScrollX || null == this.__refreshHeight || (!this.__refreshActive && c <= -this.__refreshHeight ? (this.__refreshActive = !0, this.__refreshActivate && this.__refreshActivate()) : this.__refreshActive && c > -this.__refreshHeight && (this.__refreshActive = !1, this.__refreshDeactivate && this.__refreshDeactivate()))) : c = c > m ? m : 0)
              }
              n.length > 60 && n.splice(0, 30), n.push(l, c, e), this.__publish(l, c, h)
            } else {
              var g = this.options.locking ? 3 : 0, _ = Math.abs(r - this.__initialTouchLeft),
                y = Math.abs(s - this.__initialTouchTop);
              this.__enableScrollX = this.options.scrollingX && _ >= g, this.__enableScrollY = this.options.scrollingY && y >= g, n.push(this.__scrollLeft, this.__scrollTop, e), this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (_ >= 5 || y >= 5), this.__isDragging && (this.__interruptedAnimation = !1)
            }
            this.__lastTouchLeft = r, this.__lastTouchTop = s, this.__lastTouchMove = e, this.__lastScale = i
          }
        },
        doTouchEnd: function (t) {
          if (t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);
          if (this.__isTracking) {
            if (this.__isTracking = !1, this.__isDragging) if (this.__isDragging = !1, this.__isSingleTouch && this.options.animating && t - this.__lastTouchMove <= 100) {
              for (var e = this.__positions, i = e.length - 1, r = i, s = i; s > 0 && e[s] > this.__lastTouchMove - 100; s -= 3) r = s;
              if (r !== i) {
                var n = e[i] - e[r], o = this.__scrollLeft - e[r - 2], a = this.__scrollTop - e[r - 1];
                this.__decelerationVelocityX = o / n * (1e3 / 60), this.__decelerationVelocityY = a / n * (1e3 / 60);
                var l = this.options.paging || this.options.snapping ? 4 : 1;
                Math.abs(this.__decelerationVelocityX) > l || Math.abs(this.__decelerationVelocityY) > l ? this.__refreshActive || this.__startDeceleration(t) : this.options.scrollingComplete()
              } else this.options.scrollingComplete()
            } else t - this.__lastTouchMove > 100 && this.options.scrollingComplete();
            this.__isDecelerating || (this.__refreshActive && this.__refreshStart ? (this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0), this.__refreshStart && this.__refreshStart()) : ((this.__interruptedAnimation || this.__isDragging) && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0, this.__zoomLevel), this.__refreshActive && (this.__refreshActive = !1, this.__refreshDeactivate && this.__refreshDeactivate()))), this.__positions.length = 0
          }
        },
        __publish: function (t, s, n, o) {
          var a = this, l = a.__isAnimating;
          if (l && (r.effect.Animate.stop(l), a.__isAnimating = !1), o && a.options.animating) {
            a.__scheduledLeft = t, a.__scheduledTop = s, a.__scheduledZoom = n;
            var c = a.__scrollLeft, h = a.__scrollTop, u = a.__zoomLevel, d = t - c, f = s - h, p = n - u;
            a.__isAnimating = r.effect.Animate.start((function (t, e, i) {
              i && (a.__scrollLeft = c + d * t, a.__scrollTop = h + f * t, a.__zoomLevel = u + p * t, a.__callback && a.__callback(a.__scrollLeft, a.__scrollTop, a.__zoomLevel))
            }), (function (t) {
              return a.__isAnimating === t
            }), (function (t, e, i) {
              e === a.__isAnimating && (a.__isAnimating = !1), (a.__didDecelerationComplete || i) && a.options.scrollingComplete(), a.options.zooming && (a.__computeScrollMax(), a.__zoomComplete && (a.__zoomComplete(), a.__zoomComplete = null))
            }), a.options.animationDuration, l ? e : i)
          } else a.__scheduledLeft = a.__scrollLeft = t, a.__scheduledTop = a.__scrollTop = s, a.__scheduledZoom = a.__zoomLevel = n, a.__callback && a.__callback(t, s, n), a.options.zooming && (a.__computeScrollMax(), a.__zoomComplete && (a.__zoomComplete(), a.__zoomComplete = null))
        },
        __computeScrollMax: function (t) {
          null == t && (t = this.__zoomLevel), this.__maxScrollLeft = Math.max(this.__contentWidth * t - this.__clientWidth, 0), this.__maxScrollTop = Math.max(this.__contentHeight * t - this.__clientHeight, 0)
        },
        __startDeceleration: function (t) {
          var e = this;
          if (e.options.paging) {
            var i = Math.max(Math.min(e.__scrollLeft, e.__maxScrollLeft), 0),
              s = Math.max(Math.min(e.__scrollTop, e.__maxScrollTop), 0), n = e.__clientWidth, o = e.__clientHeight;
            e.__minDecelerationScrollLeft = Math.floor(i / n) * n, e.__minDecelerationScrollTop = Math.floor(s / o) * o, e.__maxDecelerationScrollLeft = Math.ceil(i / n) * n, e.__maxDecelerationScrollTop = Math.ceil(s / o) * o
          } else e.__minDecelerationScrollLeft = 0, e.__minDecelerationScrollTop = 0, e.__maxDecelerationScrollLeft = e.__maxScrollLeft, e.__maxDecelerationScrollTop = e.__maxScrollTop;
          var a = e.options.snapping ? 4 : .001;
          e.__isDecelerating = r.effect.Animate.start((function (t, i, r) {
            e.__stepThroughDeceleration(r)
          }), (function () {
            var t = Math.abs(e.__decelerationVelocityX) >= a || Math.abs(e.__decelerationVelocityY) >= a;
            return t || (e.__didDecelerationComplete = !0), t
          }), (function (t, i, r) {
            e.__isDecelerating = !1, e.__didDecelerationComplete && e.options.scrollingComplete(), e.scrollTo(e.__scrollLeft, e.__scrollTop, e.options.snapping)
          }))
        },
        __stepThroughDeceleration: function (t) {
          var e = this.__scrollLeft + this.__decelerationVelocityX, i = this.__scrollTop + this.__decelerationVelocityY;
          if (!this.options.bouncing) {
            var r = Math.max(Math.min(this.__maxDecelerationScrollLeft, e), this.__minDecelerationScrollLeft);
            r !== e && (e = r, this.__decelerationVelocityX = 0);
            var s = Math.max(Math.min(this.__maxDecelerationScrollTop, i), this.__minDecelerationScrollTop);
            s !== i && (i = s, this.__decelerationVelocityY = 0)
          }
          if (t ? this.__publish(e, i, this.__zoomLevel) : (this.__scrollLeft = e, this.__scrollTop = i), !this.options.paging) {
            this.__decelerationVelocityX *= .95, this.__decelerationVelocityY *= .95
          }
          if (this.options.bouncing) {
            var n = 0, o = 0, a = this.options.penetrationDeceleration, l = this.options.penetrationAcceleration;
            e < this.__minDecelerationScrollLeft ? n = this.__minDecelerationScrollLeft - e : e > this.__maxDecelerationScrollLeft && (n = this.__maxDecelerationScrollLeft - e), i < this.__minDecelerationScrollTop ? o = this.__minDecelerationScrollTop - i : i > this.__maxDecelerationScrollTop && (o = this.__maxDecelerationScrollTop - i), 0 !== n && (n * this.__decelerationVelocityX <= 0 ? this.__decelerationVelocityX += n * a : this.__decelerationVelocityX = n * l), 0 !== o && (o * this.__decelerationVelocityY <= 0 ? this.__decelerationVelocityY += o * a : this.__decelerationVelocityY = o * l)
          }
        }
      };
      for (var o in n) s.prototype[o] = n[o]
    }();
    var n = s;
    i.default = n
  }, {"core-js/modules/es.regexp.to-string": 324}],
  63: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0, t("./extensions/index.js");
    var r = _(t("./Container.js")), s = _(t("./Sprite.js")), n = _(t("./CustomSprite.js")),
      o = _(t("./AnimatedSprite.js")), a = _(t("./AnimatedMesh.js")), l = _(t("./Spine.js")), c = _(t("./Graphics.js")),
      h = _(t("./TextField.js")), u = _(t("./BitmapText.js")), d = _(t("./Emitter.js")),
      f = _(t("./multistyleText/MultistyleText.js")), p = _(t("./CurvedTextField.js")), m = _(t("./factory/index.js")),
      g = _(t("./factory/FactoryTree.js"));

    function _(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var y = {
      Container: r.default,
      Sprite: s.default,
      CustomSprite: n.default,
      AnimatedSprite: o.default,
      AnimatedMesh: a.default,
      Spine: l.default,
      Graphics: c.default,
      TextField: h.default,
      BitmapText: u.default,
      Emitter: d.default,
      Factory: m.default,
      FactoryTree: g.default,
      MultistyleText: f.default,
      CurvedTextField: p.default
    };
    i.default = y
  }, {
    "./AnimatedMesh.js": 17,
    "./AnimatedSprite.js": 18,
    "./BitmapText.js": 19,
    "./Container.js": 20,
    "./CurvedTextField.js": 21,
    "./CustomSprite.js": 22,
    "./Emitter.js": 23,
    "./Graphics.js": 24,
    "./Spine.js": 27,
    "./Sprite.js": 28,
    "./TextField.js": 29,
    "./extensions/index.js": 32,
    "./factory/FactoryTree.js": 34,
    "./factory/index.js": 41,
    "./multistyleText/MultistyleText.js": 64
  }],
  64: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.number.to-fixed"), t("core-js/modules/es.regexp.constructor"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.replace"), t("core-js/modules/es.string.split"), t("core-js/modules/es.string.trim"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("../TextField.js")), s = a(t("./TextMetrics.js")), n = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../../utils/TypeCheckers.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return o = function () {
        return t
      }, t
    }

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class l extends r.default {
      constructor(t) {
        super(t.text || ""), this.textStyles = null, this.hitboxes = null, this.debugOptions = {
          spans: {
            enabled: !1,
            baseline: "#44BB44",
            top: "#BB4444",
            bottom: "#4444BB",
            bounding: "rgba(255, 255, 255, 0.1)",
            text: !0
          }, objects: {enabled: !1, bounding: "rgba(255, 255, 255, 0.05)", text: !0}
        }, this.DEFAULT_TAG_STYLE = {
          align: "left",
          breakWords: !1,
          dropShadow: !1,
          dropShadowAngle: Math.PI / 6,
          dropShadowBlur: 0,
          dropShadowColor: "#000000",
          dropShadowDistance: 5,
          fill: "black",
          fillGradientType: 1,
          fontFamily: "Arial",
          fontSize: 26,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          letterSpacing: 0,
          lineHeight: 0,
          lineJoin: "miter",
          miterLimit: 10,
          padding: 0,
          stroke: "black",
          strokeThickness: 0,
          textBaseline: "alphabetic",
          valign: "baseline",
          wordWrap: !1,
          wordWrapWidth: 100
        }, this.INTERACTION_EVENTS = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"], this._maxWidth = t.maxWidth, this.style = t.style, this.fitToMaxWidth(this._maxWidth), this.INTERACTION_EVENTS.forEach(t => {
          this.on(t, t => this.handleInteraction(t))
        })
      }

      handleInteraction(t) {
        const e = t, i = t.data.getLocalPosition(this),
          r = this.hitboxes.reduce((t, e) => void 0 !== t ? t : e.hitbox.contains(i.x, i.y) ? e : void 0, void 0);
        e.targetTag = void 0 === r ? void 0 : r.tag
      }

      set style(t) {
        t = Object.smartCopy(t), this._styleConfig = t, this.setNewStyles(t), this.dirty = !0
      }

      setNewStyles(t) {
        this.textStyles = {}, this.textStyles.default = this.assign({}, this.DEFAULT_TAG_STYLE);
        for (const e in t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
        this._style = new PIXI.TextStyle(this.textStyles.default)
      }

      setTagStyle(t, e) {
        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this._style = new PIXI.TextStyle(this.textStyles.default), this.dirty = !0
      }

      deleteTagStyle(t) {
        "default" === t ? this.textStyles.default = this.assign({}, this.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this._style = new PIXI.TextStyle(this.textStyles.default), this.dirty = !0
      }

      getTagRegex(t, e) {
        let i = Object.keys(this.textStyles).join("|");
        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
        let r = "<".concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:'(?:[^']+|\\\\')*'|'(?:[^']+|\\\\')*'))*\\s*>|</").concat(i, "\\s*>");
        return e && (r = "(".concat(r, ")")), new RegExp(r, "g")
      }

      getPropertyRegex() {
        return new RegExp(/([A-Za-z0-9_\\-]+)=(?:'((?:[^']+|\\\\')*)'|'((?:[^']+|\\\\')*)')/, "g")
      }

      _getTextDataPerLine(t) {
        const e = [], i = this.getTagRegex(!0, !1), r = [this.assign({}, this.textStyles.default)],
          s = [{name: "default", properties: {}}];
        for (let n = 0; n < t.length; n++) {
          const o = [], a = [];
          let l = i.exec(t[n]);
          for (; l;) a.push(l), l = i.exec(t[n]);
          if (0 === a.length) o.push(this.createTextData(t[n], r[r.length - 1], s[s.length - 1])); else {
            let e = 0;
            for (let i = 0; i < a.length; i++) {
              if (a[i].index > e && o.push(this.createTextData(t[n].substring(e, a[i].index), r[r.length - 1], s[s.length - 1])), "/" === a[i][0][1]) r.length > 1 && (r.pop(), s.pop()); else {
                r.push(this.assign({}, r[r.length - 1], this.textStyles[a[i][1]]));
                const t = {}, e = this.getPropertyRegex();
                let n = e.exec(a[i][0]);
                for (; n;) t[n[1]] = n[2] || n[3], n = e.exec(a[i][0]);
                s.push({name: a[i][1], properties: t})
              }
              e = a[i].index + a[i][0].length
            }
            e < t[n].length && o.push(this.createTextData(t[n].substring(e), r[r.length - 1], s[s.length - 1]))
          }
          e.push(o)
        }
        return e
      }

      getFontString(t) {
        return this.toFontString(new PIXI.TextStyle(t))
      }

      toFontString(t) {
        const e = n.isNumber(t.fontSize) ? "".concat(t.fontSize, "px") : t.fontSize;
        let i = t.fontFamily;
        n.isArray(t.fontFamily) || (i = t.fontFamily.split(","));
        for (let t = i.length - 1; t >= 0; t--) {
          let e = i[t].trim();
          /([''])[^'']+\1/.test(e) || (e = "'".concat(e, "'")), i[t] = e
        }
        return "".concat(t.fontStyle, " ").concat(t.fontVariant, " ").concat(t.fontWeight, " ").concat(e, " ").concat(i.join(","))
      }

      createTextData(t, e, i) {
        return {text: t, style: e, width: 0, height: 0, fontProperties: void 0, tag: i}
      }

      getDropShadowPadding() {
        let t = 0, e = 0;
        return Object.keys(this.textStyles).forEach(i => {
          const {dropShadowDistance: r, dropShadowBlur: s} = this.textStyles[i];
          t = Math.max(t, r || 0), e = Math.max(e, s || 0)
        }), t + e
      }

      updateText() {
        if (!this.dirty) return;
        this.hitboxes = [], this.texture.baseTexture.resolution = this.resolution;
        const t = this.textStyles;
        let e = this.text;
        this._style.wordWrap && (e = this.wordWrap(this.text));
        const i = e.split(/(?:\r\n|\r|\n)/), r = this._getTextDataPerLine(i), o = [], a = [], l = [];
        let c = 0;
        for (let t = 0; t < i.length; t++) {
          let e = 0, i = 0, h = 0;
          for (let o = 0; o < r[t].length; o++) {
            const a = r[t][o].style;
            this.context.font = this.getFontString(a), r[t][o].width = this.context.measureText(r[t][o].text).width, 0 === r[t][o].text.length && (r[t][o].width += (r[t][o].text.length - 1) * a.letterSpacing, o > 0 && (e += a.letterSpacing / 2), o < r[t].length - 1 && (e += a.letterSpacing / 2)), e += r[t][o].width, r[t][o].fontProperties = s.default.measureFont(this.context.font), r[t][o].height = r[t][o].fontProperties.fontSize + r[t][o].style.strokeThickness, n.isNumber(a.valign) ? (i = Math.min(i, a.valign - r[t][o].fontProperties.descent), h = Math.max(h, a.valign + r[t][o].fontProperties.ascent)) : (i = Math.min(i, -r[t][o].fontProperties.descent), h = Math.max(h, r[t][o].fontProperties.ascent))
          }
          o[t] = e, a[t] = i, l[t] = h, c = Math.max(c, e)
        }
        const h = Object.keys(t).map(e => t[e]).reduce((t, e) => Math.max(t, e.strokeThickness || 0), 0),
          u = this.getDropShadowPadding(), d = c + h + 2 * u,
          f = l.reduce((t, e) => t + e, 0) - a.reduce((t, e) => t + e, 0) + 2 * u;
        this.canvas.width = (d + this.context.lineWidth) * this.resolution, this.canvas.height = f * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
        let p = u;
        const m = [];
        for (let t = 0; t < r.length; t++) {
          const e = r[t];
          let i;
          switch (this._style.align) {
            case"left":
              i = u;
              break;
            case"center":
              i = u + (c - o[t]) / 2;
              break;
            case"right":
              i = u + c - o[t]
          }
          for (let r = 0; r < e.length; r++) {
            const {style: s, text: n, fontProperties: o, width: c, height: u, tag: d} = e[r];
            i += h / 2;
            let f = h / 2 + p + o.ascent;
            switch (s.valign) {
              case"top":
                break;
              case"baseline":
                f += l[t] - o.ascent;
                break;
              case"middle":
                f += (l[t] - a[t] - o.ascent - o.descent) / 2;
                break;
              case"bottom":
                f += l[t] - a[t] - o.ascent - o.descent;
                break;
              default:
                f += l[t] - o.ascent - s.valign
            }
            if (0 === s.letterSpacing) m.push({
              text: n,
              style: s,
              x: i,
              y: f,
              width: c,
              ascent: o.ascent,
              descent: o.descent,
              tag: d
            }), i += e[r].width; else {
              this.context.font = this.getFontString(e[r].style);
              for (let t = 0; t < n.length; t++) (t > 0 || r > 0) && (i += s.letterSpacing / 2), m.push({
                text: n.charAt(t),
                style: s,
                x: i,
                y: f,
                width: c,
                ascent: o.ascent,
                descent: o.descent,
                tag: d
              }), i += this.context.measureText(n.charAt(t)).width, (t < n.length - 1 || r < e.length - 1) && (i += s.letterSpacing / 2)
            }
            i -= h / 2
          }
          p += l[t] - a[t]
        }
        this.context.save(), m.forEach(t => {
          let {style: e, text: i, x: r, y: s} = t;
          if (!e.dropShadow) return;
          this.context.font = this.getFontString(e);
          let o = e.dropShadowColor;
          n.isNumber(o) && (o = PIXI.utils.hex2string(o)), this.context.shadowColor = o, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, r, s)
        }), this.context.restore(), m.forEach(t => {
          let {style: e, text: i, x: r, y: s, width: o, ascent: a, descent: l, tag: c} = t;
          this.context.font = this.getFontString(e);
          let h = e.stroke;
          n.isNumber(h) && (h = PIXI.utils.hex2string(h)), this.context.strokeStyle = h, this.context.lineWidth = e.strokeThickness;
          let u = e.fill;
          if (n.isNumber(u)) u = PIXI.utils.hex2string(u); else if (n.isArray(u)) for (let t = 0; t < u.length; t++) {
            const e = u[t];
            n.isNumber(e) && (u[t] = PIXI.utils.hex2string(e))
          }
          this.context.fillStyle = this._generateFillStyle(new PIXI.TextStyle(e), [i]), e.stroke && e.strokeThickness && this.context.strokeText(i, r, s), e.fill && this.context.fillText(i, r, s);
          const d = -this._style.padding - this.getDropShadowPadding();
          let f;
          this.hitboxes.push({
            tag: c,
            hitbox: new PIXI.Rectangle(r + d, s - a + d, o, a + l)
          }), f = void 0 === e.debug ? this.debugOptions.spans.enabled : e.debug, f && (this.context.lineWidth = 1, this.debugOptions.spans.bounding && (this.context.fillStyle = this.debugOptions.spans.bounding, this.context.strokeStyle = this.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(r, s - a, o, a + l), this.context.fill(), this.context.stroke(), this.context.stroke()), this.debugOptions.spans.baseline && (this.context.strokeStyle = this.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(r, s), this.context.lineTo(r + o, s), this.context.closePath(), this.context.stroke()), this.debugOptions.spans.top && (this.context.strokeStyle = this.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(r, s - a), this.context.lineTo(r + o, s - a), this.context.closePath(), this.context.stroke()), this.debugOptions.spans.bottom && (this.context.strokeStyle = this.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(r, s + l), this.context.lineTo(r + o, s + l), this.context.closePath(), this.context.stroke()), this.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(c.name, r, s - a + 8), this.context.fillText(c.name, r, s - a + 8), this.context.strokeText("".concat(o.toFixed(2), "x").concat((a + l).toFixed(2)), r, s - a + 16), this.context.fillText("".concat(o.toFixed(2), "x").concat((a + l).toFixed(2)), r, s - a + 16)))
        }), this.debugOptions.objects.enabled && (this.debugOptions.objects.bounding && (this.context.fillStyle = this.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, d, f), this.context.fill()), this.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(d.toFixed(2), "x").concat(f.toFixed(2)), 0, 8, d), this.context.fillText("".concat(d.toFixed(2), "x").concat(f.toFixed(2)), 0, 8, d))), this.updateTexture()
      }

      wordWrap(t) {
        let e = "";
        const i = this.getTagRegex(!0, !0), r = t.split("\n"), s = this._style.wordWrapWidth,
          n = [this.assign({}, this.textStyles.default)];
        this.context.font = this.getFontString(this.textStyles.default);
        for (let t = 0; t < r.length; t++) {
          let o = s;
          const a = r[t].split(i);
          let l = !0;
          for (let t = 0; t < a.length; t++) if (i.test(a[t])) e += a[t], "/" === a[t][1] ? (t += 2, n.pop()) : (t++, n.push(this.assign({}, n[n.length - 1], this.textStyles[a[t]])), t++), this.context.font = this.getFontString(n[n.length - 1]); else {
            const i = a[t].split(" ");
            for (let t = 0; t < i.length; t++) {
              const r = this.context.measureText(i[t]).width;
              if (this._style.breakWords && r > o) {
                const r = i[t].split("");
                t > 0 && (e += " ", o -= this.context.measureText(" ").width);
                for (let t = 0; t < r.length; t++) {
                  const i = this.context.measureText(r[t]).width;
                  i > o ? (e += "\n".concat(r[t]), o = s - i) : (e += r[t], o -= i)
                }
              } else if (this._style.breakWords) e += i[t], o -= r; else {
                const n = r + (t > 0 ? this.context.measureText(" ").width : 0);
                n > o ? (l || (e += "\n"), e += i[t], o = s - r) : (o -= n, t > 0 && (e += " "), e += i[t])
              }
              l = !1
            }
          }
          t < r.length - 1 && (e += "\n")
        }
        return e
      }

      updateTexture() {
        const t = this._texture, e = this.getDropShadowPadding();
        t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.realWidth = this.canvas.width, t.baseTexture.realHeight = this.canvas.height, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.trim.width = t.frame.width = this.canvas.width / this.resolution, t.trim.height = t.frame.height = this.canvas.height / this.resolution, t.trim.x = -this._style.padding - e, t.trim.y = -this._style.padding - e, t.orig.width = t.frame.width - 2 * (this._style.padding + e), t.orig.height = t.frame.height - 2 * (this._style.padding + e), this._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
      }

      _generateFillStyle(t, e) {
        if (!n.isArray(t.fill)) return t.fill;
        if (navigator.isCocoonJS) return t.fill[0];
        let i, r, s, o;
        const a = this.canvas.width / this.resolution, l = this.canvas.height / this.resolution, c = t.fill.slice(),
          h = t.fillGradientStops.slice();
        if (!h.length) {
          const t = c.length + 1;
          for (let e = 1; e < t; ++e) h.push(e / t)
        }
        if (c.unshift(t.fill[0]), h.unshift(0), c.push(t.fill[t.fill.length - 1]), h.push(1), t.fillGradientType === PIXI.TEXT_GRADIENT.LINEAR_VERTICAL) {
          i = this.context.createLinearGradient(a / 2, 0, a / 2, l), r = (c.length + 1) * e.length, s = 0;
          for (let t = 0; t < e.length; t++) {
            s += 1;
            for (let a = 0; a < c.length; a++) o = n.isNumber(h[a]) ? h[a] / e.length + t / e.length : s / r, i.addColorStop(o, c[a]), s++
          }
        } else {
          i = this.context.createLinearGradient(0, l / 2, a, l / 2), r = c.length + 1, s = 1;
          for (let t = 0; t < c.length; t++) o = n.isNumber(h[t]) ? h[t] : s / r, i.addColorStop(o, c[t]), s++
        }
        return i
      }

      assign(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
        return Object.values(i).forEach(e => {
          Object.keys(e).forEach(i => {
            t[i] = e[i]
          })
        }), t
      }

      fitToMaxWidth(t) {
        if (t) for (this._maxWidth = t; this.width > t;) {
          for (const t in this._styleConfig) if (this._styleConfig[t].fontSize) {
            let e = this._styleConfig[t].fontSize;
            n.isString(e) && (e = +e.replace("px", "")), e--, this._styleConfig[t].fontSize = e + "px"
          }
          this.setNewStyles(this._styleConfig), this.dirty = !0, this.updateText()
        }
      }
    }

    i.default = l
  }, {
    "../../utils/TypeCheckers.js": 191,
    "../TextField.js": 29,
    "./TextMetrics.js": 65,
    "core-js/modules/es.number.to-fixed": 319,
    "core-js/modules/es.regexp.constructor": 322,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/es.string.trim": 331
  }],
  65: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.split"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor(t) {
        let {
          text: e,
          style: i,
          width: r,
          height: s,
          lines: n,
          lineWidths: o,
          lineHeight: a,
          maxLineWidth: l,
          fontProperties: c
        } = t;
        this.text = e, this.style = i, this.width = r, this.height = s, this.lines = n, this.lineWidths = o, this.lineHeight = a, this.maxLineWidth = l, this.fontProperties = c
      }

      static measureText(t, e, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r._canvas;
        i = i || e.wordWrap;
        const n = e.toFontString(), o = r.measureFont(n), a = s.getContext("2d");
        a.font = n;
        const l = (i ? r.wordWrap(t, e, s) : t).split(/(?:\r\n|\r|\n)/), c = new Array(l.length);
        let h = 0;
        l.forEach((t, i) => {
          let r = a.measureText(t).width;
          r += (t.length - 1) * e.letterSpacing, c[i] = r, h = Math.max(h, r)
        });
        let u = h + e.strokeThickness;
        e.dropShadow && (u += e.dropShadowDistance);
        let d = e.lineHeight || o.fontSize + e.strokeThickness, f = Math.max(d, o.fontSize + e.strokeThickness);
        return f += (l.length - 1) * (d + e.leading), e.dropShadow && (f += e.dropShadowDistance), d += e.leading, new r({
          text: t,
          style: e,
          width: u,
          height: f,
          lines: l,
          lineWidths: c,
          lineHeight: d,
          maxLineWidth: h,
          fontProperties: o
        })
      }

      static wordWrap(t, e) {
        const i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r._canvas).getContext("2d");
        let s = "";
        const n = t.charAt(0), o = t.split("\n"), a = e.wordWrapWidth, l = {};
        return o.forEach((t, r) => {
          let c = a;
          t.split(" ").forEach((t, r) => {
            const o = i.measureText(t).width;
            if (e.breakWords && o > a) {
              t.split("").forEach((t, e) => {
                let o = l[t];
                void 0 === o && (o = i.measureText(t).width, l[t] = o), o > c ? (s += "\n".concat(t), c = a - o) : (0 === e && (r > 0 || " " === n) && (s += " "), s += t, c -= o)
              })
            } else {
              const e = o + i.measureText(" ").width;
              0 === r || e > c ? (r > 0 && (s += "\n"), s += t, c = a - o) : (c -= e, s += " ".concat(t))
            }
          }), r < o.length - 1 && (s += "\n")
        }), s
      }

      static measureFont(t) {
        if (r._fonts[t]) return r._fonts[t];
        const e = {}, i = r._canvas, s = r._context;
        s.font = t;
        const n = Math.ceil(s.measureText("|MÉq").width);
        let o = Math.ceil(s.measureText("M").width);
        const a = 2 * o;
        o = 1.4 * o | 0, i.width = n, i.height = a, s.fillStyle = "#f00", s.fillRect(0, 0, n, a), s.font = t, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText("|MÉq", 0, o);
        const l = s.getImageData(0, 0, n, a).data, c = l.length, h = 4 * n;
        let u = 0, d = 0, f = !1;
        for (u = 0; u < o; ++u) {
          for (let t = 0; t < h; t += 4) if (255 !== l[d + t]) {
            f = !0;
            break
          }
          if (f) break;
          d += h
        }
        for (e.ascent = o - u, d = c - h, f = !1, u = a; u > o; --u) {
          for (let t = 0; t < h; t += 4) if (255 !== l[d + t]) {
            f = !0;
            break
          }
          if (f) break;
          d -= h
        }
        return e.descent = u - o, e.fontSize = e.ascent + e.descent, r._fonts[t] = e, e
      }
    }

    i.default = r;
    const s = document.createElement("canvas");
    s.width = s.height = 10, r._canvas = s, r._context = s.getContext("2d"), r._fonts = {}
  }, {"core-js/modules/es.string.split": 328}],
  66: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array.reverse"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e, i) {
        let {loop: r, speed: s, reverse: n} = i;
        this._target = t, this._active = !0, this._clip = e, this._binds = [], this._loop = void 0 !== r ? r : e.loop, this._speed = void 0 !== s ? s : 1, this._reverse = n || !1, this._onCompleteCallback = null, e.events && (this._originalEvents = e.events), this.bind(), this.reset()
      }

      get isActive() {
        return this._active
      }

      get clip() {
        return this._clip
      }

      get duration() {
        return this._clip.duration
      }

      get loop() {
        return this._loop
      }

      set onComplete(t) {
        this._onCompleteCallback = t
      }

      reset() {
        this._active = !0, this._currentTime = this._reverse ? this._clip.duration : 0, this._originalEvents && (this._events = [...this._originalEvents])
      }

      setAtEnd() {
        this._active = !1, this._currentTime = this._reverse ? 0 : this._clip.duration, this._onComplete()
      }

      _onComplete() {
        this._onCompleteCallback && this._onCompleteCallback()
      }

      bind() {
        this._binds = [];
        for (let t of this._clip.tracks) t.target.length > 0 ? this._binds.push({
          target: this._target.getObjectByName(t.target),
          track: t
        }) : this._binds.push({target: this._target, track: t})
      }

      update() {
        if (this._clip.duration && (this._currentTime += c2d.time.deltaTime * (this._reverse ? -this._speed : this._speed)), this._events && this._events.length && (this._reverse ? this._currentTime <= this._events.last.time && (this._target.animator.onEvent && this._target.animator.onEvent(this._events.last.value), this._events.pop()) : this._currentTime >= this._events.first.time && (this._target.animator.onEvent && this._target.animator.onEvent(this._events.first.value), this._events.shift())), !this._reverse && this._currentTime >= this._clip.duration || this._reverse && this._currentTime <= 0) if (this._loop) if (this._reverse) for (; this._currentTime < 0;) this._currentTime += this._clip.duration; else for (; this._currentTime > this._clip.duration;) this._currentTime -= this._clip.duration; else this._currentTime = this._reverse ? 0 : this._clip.duration, this._active = !1, this._onComplete();
        let t = 0;
        for (let e of this._binds) {
          let i = e.track.evaluate(this._currentTime);
          "position" === e.track.name ? e.target.position.copy(i) : "quaternion" === e.track.name ? (e.target.quaternion.copy(i), e.target.isCamera && e.target.rotateY(Math.PI)) : "scale" === e.track.name ? e.target.scale.copy(i) : "color" === e.track.name ? Array.isArray(e.target.material) ? e.target.material[0].color.copy(i) : e.target.material.color.copy(i) : "uvAnim" === e.track.name ? Array.isArray(e.target.material) ? e.target.material[0].uvAnim.copy(i) : (e.target.material.uvAnim, e.target.material.uvAnim.copy(i)) : "visible" === e.track.name ? e.target.visible = i : "fov" === e.track.name ? (e.target.fov = i, e.target.updateProjectionMatrix()) : "cutOff" === e.track.name ? Array.isArray(e.target.material) ? e.target.material[0].alphaCutoff = i : e.target.material.alphaCutoff = i : "morph" === e.track.name && (e.target.blendInfluences[t++] = .01 * i)
        }
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.array.reverse": 316,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  67: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e, i) {
        this._name = t, this._tracks = e, this._events = i, this._duration = this.calculateDuration(), this._loop = !1
      }

      get name() {
        return this._name
      }

      get tracks() {
        return this._tracks
      }

      get events() {
        return this._events
      }

      get duration() {
        return this._duration
      }

      set loop(t) {
        this._loop = t
      }

      get loop() {
        return this._loop
      }

      calculateDuration() {
        let t = 0;
        for (let e of this._tracks) t = Math.max(t, e.duration);
        return t
      }
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  68: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        this._target = t, this._actions = []
      }

      addAction(t) {
        if (t) {
          let e = 0;
          for (; e < this._actions.length;) this._actions[e].clip.name === t.clip.name ? this._actions.splice(e, 1) : ++e;
          t.reset(), this._actions = [t]
        } else this._actions = []
      }

      actions() {
        return this._actions
      }

      get isPlaying() {
        return this._actions.length > 0
      }

      update() {
        let t = 0;
        for (; t < this._actions.length;) this._actions[t].update(), this._actions[t].isActive ? ++t : this._actions.splice(t, 1)
      }
    }
  }, {}],
  69: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../AnimationAction.js")), s = n(t("./../../../event/Signal.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._name = t, this._clip = e, this._speed = i, this._animator = null, this._transitions = [], this._action = null, this.onEnter = new s.default, this.onExit = new s.default
      }

      get name() {
        return this._name
      }

      get clip() {
        return this._clip
      }

      get speed() {
        return this._speed
      }

      get clipDuration() {
        return this._speed ? this._clip.duration / this._speed : 0
      }

      get animator() {
        return this._animator
      }

      set animator(t) {
        this._animator = t, this._clip && (this._action = new r.default(this._animator.target, this._clip, {speed: this._speed}))
      }

      get action() {
        return this._action
      }

      set onComplete(t) {
        this._action.onComplete = t
      }

      addTransition(t) {
        this._transitions.push(t)
      }

      enter() {
        this._animator.mixer.addAction(this._action), this.onEnter.emit()
      }

      exit() {
        this.onExit.emit()
      }

      update() {
        for (let t of this._transitions) {
          if (t.canTransition) {
            this._animator.currentState = t.state;
            break
          }
          if (!t.conditions && !this._animator.mixer.isPlaying) {
            this._animator.currentState = t.state;
            break
          }
        }
      }
    }
  }, {
    "./../../../event/Signal.js": 150,
    "./../AnimationAction.js": 66,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  70: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = l(t("./AnimationState.js")), s = l(t("./Transition.js")), n = l(t("./Condition.js")),
      o = l(t("../AnimationMixer.js")), a = l(t("./../../../event/Signal.js"));

    function l(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function c(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function h(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    class u {
      constructor(t, e, i) {
        this._target = t, this._config = e, this._animations = i, this._name = e ? e.name : "", this._params = e ? function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(i), !0).forEach((function (e) {
              h(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }({}, e.params) : {}, this._states = [], this._defaultState = null, this._currentState = null, this._mixer = new o.default(this._target), this._playing = !1, this._pause = !1, this._triggers = [];
        for (let t in this._params) "trigger" === this._params[t] && (this._params[t] = !1, this._triggers.push(t));
        if (this.onStateChanged = new a.default, this.onEvent = null, e && e.states) {
          for (let t of e.states) this.addState(new r.default(t.name, i[t.clip], t.speed));
          for (let t = 0; t < e.states.length; ++t) {
            let i = e.states[t];
            if (i.transitions) for (let e of i.transitions) {
              let i = null;
              if (e.conditions) {
                i = [];
                for (let t of e.conditions) i.push(new n.default(t.op, t.param, t.value, this))
              }
              this._states[t].addTransition(new s.default(this.getStateByName(e.state), i))
            }
          }
          this._defaultState = this._states[e.defaultState]
        }
      }

      clone(t) {
        return new u(t, this._config, this._animations)
      }

      get mixer() {
        return this._mixer
      }

      get target() {
        return this._target
      }

      get params() {
        return this._params
      }

      get triggers() {
        return this._triggers
      }

      get defaultState() {
        return this._defaultState
      }

      set defaultState(t) {
        this._defaultState = t
      }

      set pause(t) {
        this._pause = t
      }

      addState(t) {
        t.animator && t.animator.removeState(t), t.animator = this, this._states.push(t)
      }

      removeState(t) {
        this._states.remove(t)
      }

      getStateByName(t) {
        for (let e of this._states) if (e.name === t) return e;
        return null
      }

      get currentState() {
        return this._currentState
      }

      set currentState(t) {
        let e = this._currentState;
        e && e.exit(), this._currentState = t, this._currentState.enter(), this.onStateChanged.emit(e, this._currentState)
      }

      startPlayback() {
        this._playing || (this._playing = !0, this.currentState = this._defaultState)
      }

      update() {
        this._pause || (this._currentState && this._currentState.update(), this._mixer.update())
      }
    }

    i.default = u
  }, {
    "../AnimationMixer.js": 68,
    "./../../../event/Signal.js": 150,
    "./AnimationState.js": 69,
    "./Condition.js": 71,
    "./Transition.js": 72,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  71: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e, i, r) {
        this._op = t, this._paramName = e, this._paramValue = i, this._animator = r
      }

      get isTrue() {
        let t = this._animator.params, e = this._animator.triggers;
        return this._op || t[this._paramName] !== this._paramValue ? ">" === this._op && t[this._paramName] > this._paramValue || "<" === this._op && t[this._paramName] < this._paramValue : (-1 !== e.indexOf(this._paramName) && (t[this._paramName] = !1), !0)
      }
    }
  }, {}],
  72: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._state = t, this._conditions = e
      }

      get state() {
        return this._state
      }

      get conditions() {
        return this._conditions
      }

      get canTransition() {
        if (!this._conditions) return !1;
        for (let t of this._conditions) if (!t.isTrue) return !1;
        return !0
      }
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  73: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./KeyframeTrack.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t, e, i, r) {
        super(t, e, i, r, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear")
      }

      evaluate(t) {
        return !!this.getParams(t).i1
      }
    }

    i.default = n
  }, {"./KeyframeTrack.js": 75}],
  74: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./KeyframeTrack.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t, e, i, r) {
        super(t, e, i, r, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear")
      }

      evaluate(t) {
        let e = this.getParams(t);
        return Math.lerp(this._values[e.i1], this._values[e.i2], e.t)
      }
    }

    i.default = n
  }, {"./KeyframeTrack.js": 75}],
  75: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    let r = {i1: 0, i2: 0, t: 0};
    i.default = class {
      constructor(t, e, i, r) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear";
        this._target = t, this._name = e, this._times = i, this._values = r, this._interpolation = s
      }

      get target() {
        return this._target
      }

      get name() {
        return this._name
      }

      get duration() {
        return this._times[this._times.length - 1]
      }

      getParams(t) {
        if (1 === this._times.length) return {i1: 0, i2: 0, t: this._times[0]};
        let e;
        for (e = 0; e < this._times.length - 1 && !(t <= this._times[e + 1]); ++e) ;
        return r.i1 = e, r.i2 = e + 1, r.t = Math.max(0, t - this._times[e]) / (this._times[e + 1] - this._times[e]), r
      }

      evaluate(t) {
        console.warn("KeyframeTrack.evaluate must be overload!")
      }
    }
  }, {}],
  76: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./KeyframeTrack.js")), s = n(t("./../../math/Quaternion.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new s.default, a = new s.default;

    class l extends r.default {
      constructor(t, e, i, r) {
        super(t, e, i, r, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear")
      }

      evaluate(t) {
        let e = this.getParams(t), i = 4 * e.i1, r = 4 * e.i2;
        return o.set(this._values[i], this._values[i + 1], this._values[i + 2], this._values[i + 3]), a.set(this._values[r], this._values[r + 1], this._values[r + 2], this._values[r + 3]), o.slerp(a, e.t)
      }
    }

    i.default = l
  }, {"./../../math/Quaternion.js": 120, "./KeyframeTrack.js": 75}],
  77: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./KeyframeTrack.js")), s = n(t("./../../math/Vector3.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new s.default, a = new s.default;

    class l extends r.default {
      constructor(t, e, i, r) {
        super(t, e, i, r, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear")
      }

      evaluate(t) {
        let e = this.getParams(t), i = 3 * e.i1, r = 3 * e.i2;
        return o.set(this._values[i], this._values[i + 1], this._values[i + 2]), a.set(this._values[r], this._values[r + 1], this._values[r + 2]), o.lerp(a, e.t)
      }
    }

    i.default = l
  }, {"./../../math/Vector3.js": 125, "./KeyframeTrack.js": 75}],
  78: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./KeyframeTrack.js")), s = n(t("./../../math/Vector4.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new s.default, a = new s.default;

    class l extends r.default {
      constructor(t, e, i, r) {
        super(t, e, i, r, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "linear")
      }

      evaluate(t) {
        let e = this.getParams(t), i = 4 * e.i1, r = 4 * e.i2;
        return o.set(this._values[i], this._values[i + 1], this._values[i + 2], this._values[i + 3]), a.set(this._values[r], this._values[r + 1], this._values[r + 2], this._values[r + 3]), o.lerp(a, e.t)
      }
    }

    i.default = l
  }, {"./../../math/Vector4.js": 126, "./KeyframeTrack.js": 75}],
  79: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = c(t("./Collider.js")), s = c(t("./../math/Vector3.js")), n = c(t("./../math/Ray.js")),
      o = c(t("./../math/Box3.js")), a = c(t("./../math/Matrix4.js")), l = c(t("./../core/Utils.js"));

    function c(t) {
      return t && t.__esModule ? t : {default: t}
    }

    new n.default, new o.default, new a.default;

    class h extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.default(1, 1, 1);
        super(), this._center = t, this._size = e, this._box = new o.default, this._box.setFromCenterAndSize(this._center, this._size)
      }

      fromJson(t) {
        super.fromJson(t), this._size = l.default.vector3FromString(t.size), this._box.setFromCenterAndSize(this._center, this._size)
      }

      clone() {
        return super.clone(this._center.clone(), this._size.clone())
      }

      get shape() {
        let t = this.object3D.scale,
          e = new CANNON.Box(new CANNON.Vec3(this._size.x * t.x, this._size.y * t.y, this._size.z * t.z).scale(.5));
        return e.material = this._material, e
      }

      raycast(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = this._box.clone().applyMatrix4(this.object3D.worldMatrix);
        return e ? t.ray.intersectBox(i) : t.ray.intersectsBox(i)
      }
    }

    i.default = h
  }, {
    "./../core/Utils.js": 92,
    "./../math/Box3.js": 113,
    "./../math/Matrix4.js": 117,
    "./../math/Ray.js": 121,
    "./../math/Vector3.js": 125,
    "./Collider.js": 80
  }],
  80: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../core/Utils.js")), s = n(t("./Component.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends s.default {
      constructor() {
        super(), this._center = null, this._material = null
      }

      get shape() {
        return null
      }

      get center() {
        return this._center
      }

      get material() {
        return this._material
      }

      set material(t) {
        this._material = t
      }

      clone() {
        let t = new this.constructor(...arguments);
        return t.material = new CANNON.Material(this.material), t
      }

      fromJson(t) {
        this._center = r.default.vector3FromString(t.center), this._material = new CANNON.Material({
          friction: t.friction,
          restitution: t.restitution
        })
      }

      raycast(t) {
        console.warn("Override raycast!")
      }
    }

    i.default = o
  }, {
    "./../core/Utils.js": 92,
    "./Component.js": 81,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  81: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor() {
        this._object3D = null
      }

      get object3D() {
        return this._object3D
      }

      set object3D(t) {
        this._object3D = t
      }
    }
  }, {}],
  82: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Component.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        super(), this._body = t
      }

      fromJson(t) {
        this._body = new CANNON.Body({
          mass: t.mass,
          fixedRotation: t.fixedRotation
        }), t.kinematic && (this._body.type = CANNON.Body.KINEMATIC), this._body.linearDamping = .01, this._body.angularDamping = .01
      }

      get body() {
        return this._body
      }

      clone() {
        return new n(new CANNON.Body(this.body))
      }

      addShape(t, e) {
        this._body.addShape(t, e)
      }

      teleport(t, e) {
        this._body.position.copy(t), this._body.previousPosition.copy(t), this._body.interpolatedPosition.copy(t), this._body.initPosition.copy(t), this._body.quaternion.copy(e), this._body.initQuaternion.copy(e), this._body.interpolatedQuaternion.copy(e), this._body.velocity.setZero(), this._body.initVelocity.setZero(), this._body.angularVelocity.setZero(), this._body.initAngularVelocity.setZero(), this._body.force.setZero(), this._body.torque.setZero()
      }
    }

    i.default = n
  }, {"./Component.js": 81}],
  83: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./Collider.js")), s = o(t("./../math/Vector3.js")), n = o(t("./../math/Sphere.js"));
    o(t("./../core/Utils.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let a = new n.default;

    class l extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        super(), this._center = t, this._radius = e
      }

      fromJson(t) {
        super.fromJson(t), this._radius = t.radius
      }

      clone() {
        return super.clone(this._center.clone(), this._radius)
      }

      get shape() {
        let t = this.object3D.scale.x, e = new CANNON.Sphere(this._radius * t);
        return e.material = this._material, e
      }

      raycast(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a.set(this._center, this._radius), a.applyMatrix4(this.object3D.worldMatrix), e ? t.ray.intersectSphere(a) : t.ray.intersectsSphere(a)
      }
    }

    i.default = l
  }, {"./../core/Utils.js": 92, "./../math/Sphere.js": 122, "./../math/Vector3.js": 125, "./Collider.js": 80}],
  84: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./gestures/Pinch.js")), s = a(t("./../math/Spherical.js")), n = a(t("./../math/Vector3.js")),
      o = a(t("./../objects/Camera.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._scene = t, this._camera = new o.default, this._originalCamera = null, this._moveSpeed = void 0 !== e.moveSpeed ? e.moveSpeed : 1, this._sensitivity = void 0 !== e.sensitivity ? e.sensitivity : 1, this._sensitivity *= game.device.mobile ? .5 : 1, this._invert = void 0 !== e.invert ? e.invert : 1, this._domElement = e.domElement || window.document.getElementById("canvas"), this._spherical = new s.default, this._spherical.setFromVector3(this._camera.backward), this._spherical.makeSafe(), this._keysMap = {}, this._keydownCallback = t => this._keysMap[t.code] = !0, this._keyupCallback = t => delete this._keysMap[t.code], this._pinch = new r.default(this._scene), this._pinch.onFirstMove.connect(t => {
          this.look(t)
        }), this._pinch.onPinchMove.connect(t => {
          this._camera.translateZ(.05 * -t)
        }), this._enabled = !1
      }

      set target(t) {
        this._camera = t, this._spherical.setFromVector3(this._camera.backward), this._spherical.makeSafe()
      }

      set enable(t) {
        this._enabled !== t && (this._enabled = t, this._enabled ? (this._originalCamera = this._scene.camera, this._camera.copy(this._originalCamera), this._camera.animator = null, this._scene.camera = this._camera, this._scene.add(this._camera)) : this._originalCamera && (this._camera.removeFromParent(), this._scene.camera = this._originalCamera, this._originalCamera = null), this._pinch.enable = t, t ? (window.document.addEventListener("keydown", this._keydownCallback), window.document.addEventListener("keyup", this._keyupCallback), this._spherical.setFromVector3(this._camera.backward), this._spherical.makeSafe(), this.updateQuat()) : (window.document.removeEventListener("keydown", this._keydownCallback), window.document.removeEventListener("keyup", this._keyupCallback)))
      }

      get enabled() {
        return this._enabled
      }

      get invert() {
        return this._invert
      }

      set invert(t) {
        this._invert = t
      }

      look(t) {
        this._spherical.theta -= t.x * this._sensitivity * .02, this._spherical.phi += (this._invert ? -1 : 1) * t.y * this._sensitivity * .02, this._spherical.makeSafe(), this.updateQuat()
      }

      updateQuat() {
        let t = new n.default;
        t.setFromSpherical(this._spherical).add(this._camera.position), this._camera.lookAt(t)
      }

      update(t) {
        this._keysMap.KeyW && this._camera.translateZ(-this._moveSpeed * t), this._keysMap.KeyS && this._camera.translateZ(this._moveSpeed * t), this._keysMap.KeyA && this._camera.translateX(-this._moveSpeed * t), this._keysMap.KeyD && this._camera.translateX(this._moveSpeed * t), this._keysMap.KeyR && this._camera.translateY(this._moveSpeed * t), this._keysMap.KeyF && this._camera.translateY(-this._moveSpeed * t)
      }
    }
  }, {
    "./../math/Spherical.js": 123,
    "./../math/Vector3.js": 125,
    "./../objects/Camera.js": 129,
    "./gestures/Pinch.js": 86
  }],
  85: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./gestures/Pinch.js")), s = a(t("./../math/Spherical.js")),
      n = (a(t("./../math/Quaternion.js")), a(t("./../math/Matrix4.js")), a(t("../core/Object3D.js"))),
      o = a(t("./../objects/Camera.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._scene = t, this._camera = new o.default, this._target = new n.default, this._scene.add(this._target), this._originalCamera = null, this._moveSpeed = void 0 !== e.moveSpeed ? e.moveSpeed : 1, this._minDistance = void 0 !== e.minDistance ? e.minDistance : 1, this._sensitivity = void 0 !== e.sensitivity ? e.sensitivity : .6, this._sensitivity *= game.device.mobile ? .5 : 1, this._invert = void 0 !== e.invert ? e.invert : 1, this._spherical = new s.default, this._spherical.setFromVector3(this._camera.position), this._spherical.makeSafe(), this._keysMap = {}, this._keydownCallback = t => this._keysMap[t.code] = !0, this._keyupCallback = t => delete this._keysMap[t.code], this._pinch = new r.default(this._scene), this._pinch.onFirstMove.connect(t => {
          this._spherical.phi += (this._invert ? -1 : 1) * t.y * this._sensitivity * .01, this._spherical.theta -= t.x * this._sensitivity * .01, this._spherical.makeSafe(), this.updateFromSpherical()
        }), this._pinch.onPinchMove.connect(t => {
          this._spherical.radius += t * this._sensitivity * .01, this._spherical.radius < this._minDistance && (this._spherical.radius = this._minDistance), this._spherical.makeSafe(), this.updateFromSpherical()
        }), this._enabled = !1
      }

      set camera(t) {
        this._camera = t, this._spherical.setFromVector3(this._camera.position), this._spherical.makeSafe()
      }

      set enable(t) {
        this._enabled !== t && (this._enabled = t, this._enabled ? (this._originalCamera = this._scene.camera, this._camera.copy(this._originalCamera), this._scene.camera = this._camera, this._scene.add(this._camera)) : this._originalCamera && (this._camera.removeFromParent(), this._scene.camera = this._originalCamera, this._originalCamera = null), this._pinch.enable = t, t ? (window.document.addEventListener("keydown", this._keydownCallback), window.document.addEventListener("keyup", this._keyupCallback), this._spherical.setFromVector3(this._camera.position), this._spherical.makeSafe(), this.updateFromSpherical()) : (window.document.removeEventListener("keydown", this._keydownCallback), window.document.removeEventListener("keyup", this._keyupCallback)))
      }

      get enabled() {
        return this._enabled
      }

      get invert() {
        return this._invert
      }

      set invert(t) {
        this._invert = t
      }

      updateFromSpherical() {
        this._camera.position.setFromSpherical(this._spherical)
      }

      update(t) {
        this._keysMap.KeyW && this._target.translateZ(-this._moveSpeed * t), this._keysMap.KeyS && this._target.translateZ(this._moveSpeed * t), this._keysMap.KeyA && this._target.translateX(-this._moveSpeed * t), this._keysMap.KeyD && this._target.translateX(this._moveSpeed * t), this._keysMap.KeyR && this._target.translateY(this._moveSpeed * t), this._keysMap.KeyF && this._target.translateY(-this._moveSpeed * t), this._camera.lookAt(this._target.position)
      }
    }
  }, {
    "../core/Object3D.js": 89,
    "./../math/Matrix4.js": 117,
    "./../math/Quaternion.js": 120,
    "./../math/Spherical.js": 123,
    "./../objects/Camera.js": 129,
    "./gestures/Pinch.js": 86
  }],
  86: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../../math/Vector2.js")), s = n(t("./../../../event/Signal.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        this._target = t, this._enabled = !1, this._domElement = window.document.getElementById("canvas"), this._touches = [], this._firstTouch = -1, this._secondTouch = -1, this._distance = -1, this.onFirstMove = new s.default, this.onPinchMove = new s.default, this._pointerdownCallback = t => {
          -1 === this._firstTouch ? (this._firstTouch = t.data.identifier, this._touches[0] = new r.default(t.data.global.x, t.data.global.y)) : -1 === this._secondTouch && (this._secondTouch = t.data.identifier, this._touches[1] = new r.default(t.data.global.x, t.data.global.y)), -1 !== this._firstTouch && -1 !== this._secondTouch && (this._distance = this._touches[0].distanceTo(this._touches[1]))
        }, this._pointerupCallback = t => {
          this._firstTouch === t.data.identifier && (this._firstTouch = -1), this._secondTouch === t.data.identifier && (this._secondTouch = -1)
        }, this._pointermoveCallback = t => {
          if (1 === t.data.buttons && this._firstTouch === t.data.identifier && -1 === this._secondTouch && this.onFirstMove.emit(new r.default(t.data.global.x - this._touches[0].x, t.data.global.y - this._touches[0].y)), this._firstTouch === t.data.identifier && this._touches[0].set(t.data.global.x, t.data.global.y), this._secondTouch === t.data.identifier && this._touches[1].set(t.data.global.x, t.data.global.y), -1 !== this._firstTouch && -1 !== this._secondTouch) {
            let t = this._touches[0].distanceTo(this._touches[1]), e = t - this._distance;
            this._distance = t, this.onPinchMove.emit(e)
          }
        }, this._mousewheelCallback = t => {
          this.onPinchMove.emit(t.deltaY)
        }, this._enabled = !1
      }

      set enable(t) {
        this._enabled = t, this._touches = [], this._firstTouch = -1, this._secondTouch = -1, this._distance = -1, t ? (this._domElement.addEventListener("wheel", this._mousewheelCallback), this._target.on("pointerdown", this._pointerdownCallback), this._target.on("pointerup", this._pointerupCallback), this._target.on("pointermove", this._pointermoveCallback)) : (this._domElement.removeEventListener("wheel", this._mousewheelCallback), this._target.off("pointerdown", this._pointerdownCallback), this._target.off("pointerup", this._pointerupCallback), this._target.off("pointermove", this._pointermoveCallback))
      }

      get enabled() {
        return this._enabled
      }
    }
  }, {"./../../../event/Signal.js": 150, "./../../math/Vector2.js": 124}],
  87: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? r(Object(i), !0).forEach((function (e) {
          n(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function n(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    function o(t, e) {
      return Object.hasOwnProperty.call(t, "position") ? t.position : e
    }

    i.default = class {
      constructor(t) {
        this._target = t, this._timeLine = new c2d.Timeline
      }

      reset() {
        this._timeLine.clear()
      }

      pause() {
        this._timeLine.pause()
      }

      restart() {
        this._timeLine.restart()
      }

      call(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._timeLine.call(t, null, {params: e.position})
      }

      moveTo(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return r = o(i, r), this._timeLine.to(this._target.position, e, s(s({}, i), {}, {
          x: t.x,
          y: t.y,
          z: t.z
        }), r), this
      }

      follow(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r);
        let n = this._target.position.clone();
        return this._timeLine.to(this._target.position, e, s(s({}, i), {}, {
          onUpdate: () => {
            let e = this._timeLine.time() / this._timeLine.duration();
            this._target.position.lerpVectors(n, t, e)
          }
        }), r), this
      }

      lookAt(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r);
        let s = this._target.quaternion.clone();
        this._target.lookAt(t);
        let n = this._target.quaternion.clone();
        return this._target.quaternion.copy(s), this.rotate(n, e, i, r)
      }

      scaleTo(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        return r = o(i, r), this._timeLine.to(this._target.scale, e, s(s({}, i), {}, {x: t.x, y: t.y, z: t.z}), r), this
      }

      rotate(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = this._target;
        const o = n.quaternion.clone();
        return this._timeLine.to({time: 0}, e, s(s({}, i), {}, {
          time: 1, onUpdate: function () {
            n.quaternion.copy(o.clone().slerp(t, this.target.time))
          }
        }), r), this
      }

      rotateX(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r), this._timeLine.to(this._target, e, s(s({}, i), {}, {
          onUpdate: () => {
            this._target.rotateX(t)
          }
        }), r)
      }

      rotateY(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r), this._timeLine.to(this._target, e, s(s({}, i), {}, {
          onUpdate: () => {
            this._target.rotateY(t)
          }
        }), r)
      }

      rotateZ(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r), this._timeLine.to(this._target, e, s(s({}, i), {}, {
          onUpdate: () => {
            this._target.rotateZ(t)
          }
        }), r)
      }

      fovTo(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0;
        r = o(i, r), this._timeLine.to(this._target, e, s(s({}, i), {}, {
          fov: t,
          onUpdate: () => this._target.updateProjectionMatrix()
        }), r)
      }

      fadeIn(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        this._target.visible = !0, this._timeLine.to(this._target.getMaterialByIndex(n), t, s(s({}, i), {}, {opacity: e}), r)
      }

      fadeOut(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        this._target.visible = !0, this._timeLine.to(this._target.getMaterialByIndex(n), t, s(s({}, i), {}, {opacity: e}), r).call(() => {
          this._target.visible = !1
        })
      }

      dissolvePower(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        return this._timeLine.to(this._target.getMaterialByIndex(n).dissolvePattern, t, s(s({}, i), {}, {w: e}), r), this
      }

      dissolveLineWidth(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        return this._timeLine.to(this._target.getMaterialByIndex(n).dissolvePattern, t, s(s({}, i), {}, {z: e}), r), this
      }

      dissolveLineColor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        return this._timeLine.to(this._target.getMaterialByIndex(n).dissolveLColor, t, s(s({}, i), {}, {
          x: e.x,
          y: e.y,
          z: e.z,
          w: e.w
        }), r), this
      }

      blinkFinalColor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
        r = o(i, r), this._timeLine.to(this._target.getMaterialByIndex(n).finalColor, e, s({
          w: t,
          yoyo: !0,
          repeat: 1
        }, i), r)
      }
    }
  }, {}],
  88: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        this._object3D = t, this._started = !1, this._enabled = !0, this.onCreate && this.onCreate()
      }

      clone(t) {
        return new this.constructor(t).copy(this)
      }

      copy(t) {
        return this
      }

      get scene() {
        return this._object3D.scene
      }

      get object3D() {
        return this._object3D
      }

      get name() {
        return this._object3D.name
      }

      set started(t) {
        this._started !== t && (!this._started && this.onStart && this.onStart(), this._started = t)
      }

      get started() {
        return this._started
      }

      set enabled(t) {
        this._enabled = t, this._enabled && this.onEnable ? this.onEnable() : !this._enabled && this.onDisable && this.onDisable()
      }

      get enabled() {
        return this._enabled
      }

      get animator() {
        return this._object3D.animator
      }
    }
  }, {}],
  89: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = h(t("./../math/Euler.js")), s = h(t("./../math/Vector3.js")), n = h(t("./../math/Quaternion.js")),
      o = h(t("./../math/Matrix4.js")), a = h(t("./../core/Action.js")), l = h(t("./../components/Collider.js")),
      c = h(t("./../components/RigidBody.js"));

    function h(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let u = new s.default, d = new o.default, f = new n.default, p = new n.default, m = new s.default(1, 0, 0),
      g = new s.default(0, 1, 0), _ = new s.default(0, 0, 1);

    class y {
      constructor() {
        this._id = "f".concat((~~(1e8 * Math.random())).toString(16)), this._name = "", this._type = "Object3D", this._tag = null, this._scene = null, this._parent = null, this._children = [], this._visible = !0, this._position = new s.default, this._quaternion = new n.default, this._scale = new s.default(1, 1, 1), this._localMatrix = new o.default, this._worldMatrix = new o.default, this._action = new a.default(this), this._animator = null, this._controller = null, this._components = null, this._rigidBody = null, this._userData = null
      }

      clone() {
        return (new y).copy(this)
      }

      copy(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this._name = t._name, this._type = t._type, this._parent = t._parent, this._visible = t._visible, this._position.copy(t._position), this._quaternion.copy(t._quaternion), this._scale.copy(t._scale), this._localMatrix.copy(t._localMatrix), this._worldMatrix.copy(t._worldMatrix), this._userData = t._userData, t._controller && (this._controller = t._controller.clone(this)), e) {
          this._children = [];
          for (let e = 0; e < t.children.length; ++e) {
            let i = t._children[e];
            this.add(i.clone())
          }
        }
        t._animator && (this._animator = t._animator.clone(this));
        for (let e = 0; e < this._children.length; ++e) if (this._children[e].isSkinnedMesh) {
          let i = this._children[e], r = t._children[e], s = [];
          for (let t of r.joints) s.push(this.getObjectByName(t.name));
          i.setBones(s, r.inverseBindMatrices)
        }
        let i = t.getComponents(l.default), r = t.getComponent(c.default);
        r && this.addComponent(r.clone());
        for (let t = 0; t < i.length; t++) {
          let e = i[t].clone();
          this.addComponent(e), this.rigidBody && r.addShape(e.shape, e.center)
        }
        return this
      }

      get id() {
        return this._id
      }

      get type() {
        return this._type
      }

      set tag(t) {
        this._tag = t
      }

      get tag() {
        return this._tag
      }

      set name(t) {
        this._name = t
      }

      get name() {
        return this._name
      }

      set userData(t) {
        this._userData = t
      }

      get userData() {
        return this._userData
      }

      set visible(t) {
        this._visible = t
      }

      get visible() {
        return this._visible
      }

      get position() {
        return this._position
      }

      get worldPosition() {
        return u.setFromMatrixPosition(this._worldMatrix).clone()
      }

      get worldQuaternion() {
        return this._worldMatrix.decompose(u, f, u), f.clone()
      }

      get quaternion() {
        return this._quaternion
      }

      set rotation(t) {
        this._quaternion.setFromEuler(t)
      }

      get rotation() {
        let t = new r.default;
        return t.setFromQuaternion(this._quaternion, void 0, !1), t
      }

      get scale() {
        return this._scale
      }

      get forward() {
        let t = new s.default(0, 0, 1);
        return t.applyQuaternion(this._quaternion), t
      }

      get backward() {
        let t = new s.default(0, 0, -1);
        return t.applyQuaternion(this._quaternion), t
      }

      get left() {
        let t = new s.default(1, 0, 0);
        return t.applyQuaternion(this._quaternion), t
      }

      get right() {
        let t = new s.default(-1, 0, 0);
        return t.applyQuaternion(this._quaternion), t
      }

      get up() {
        let t = new s.default(0, 1, 0);
        return t.applyQuaternion(this._quaternion).normalize(), t
      }

      get worldMatrix() {
        return this._worldMatrix
      }

      get action() {
        return this._action
      }

      get animator() {
        return this._animator
      }

      set animator(t) {
        this._animator = t
      }

      get controller() {
        return this._controller
      }

      set controller(t) {
        this._controller = t
      }

      get rigidBody() {
        return this._rigidBody
      }

      addComponent(t) {
        if (this._components || (this._components = []), t instanceof c.default) {
          if (this._rigidBody) return void console.error("Object can have only one RigidBody!");
          this._rigidBody = t
        }
        t.object3D = this, this._components.push(t)
      }

      removeComponent(t) {
        this._components && (t.object3D = null, this._components.remove(t), t instanceof c.default && (this._rigidBody = null))
      }

      getComponent(t) {
        if (!this._components) return null;
        for (let e of this._components) if (e instanceof t) return e
      }

      getComponents(t) {
        if (!this._components) return [];
        let e = [];
        for (let i of this._components) i instanceof t && e.push(i);
        return e
      }

      get scene() {
        return this._scene
      }

      set scene(t) {
        this._scene !== t && (this._scene && (this._animator && this._scene.animators.remove(this._animator), this._controller && this._scene.controllers.remove(this._controller), this._rigidBody && this._scene.physicWorld.removeBody(this._rigidBody.body), this.dispose()), this._scene = t, this._scene && (this._animator && (this._scene.animators.push(this._animator), this._animator.startPlayback()), this._controller && (this._scene.controllers.push(this._controller), this._scene.started && this._controller.onStart && !this._controller.started && (this._controller.started = !0)), this.updateWorldMatrix(), this._rigidBody && (this._rigidBody.teleport(this.worldPosition, this.worldQuaternion), this._scene.physicWorld.addBody(this._rigidBody.body))));
        for (let e of this._children) e.scene = t
      }

      get parent() {
        return this._parent
      }

      set parent(t) {
        this._parent = t
      }

      get children() {
        return this._children
      }

      translateOnAxis(t, e) {
        return u.copy(t).applyQuaternion(this._quaternion), this._position.add(u.multiplyScalar(e)), this
      }

      translateX(t) {
        return this.translateOnAxis(m, t)
      }

      translateY(t) {
        return this.translateOnAxis(g, t)
      }

      translateZ(t) {
        return this.translateOnAxis(_, t)
      }

      rotateOnAxis(t, e) {
        return f.setFromAxisAngle(t, e), this.quaternion.multiply(f), this
      }

      rotateX(t) {
        return this.rotateOnAxis(m, t)
      }

      rotateY(t) {
        return this.rotateOnAxis(g, t)
      }

      rotateZ(t) {
        return this.rotateOnAxis(_, t)
      }

      worldToLocal(t) {
        return t.clone().applyMatrix4(d.getInverse(this._worldMatrix))
      }

      lookAt(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        this.updateWorldMatrix(!1, !0), u.setFromMatrixPosition(this._worldMatrix), "Camera" === this._type ? d.lookAt(u, t, i || this.up) : d.lookAt(t, u, i || this.up), p.setFromRotationMatrix(d), this._parent && p.premultiply(this._parent.worldQuaternion.inverse()), e >= 1 ? this._quaternion.copy(p) : this._quaternion.slerp(p, e)
      }

      add(t) {
        null !== t.parent && t.parent.remove(t), t.parent = this, t.scene = this._scene, this._children.push(t)
      }

      remove(t) {
        let e = this._children.indexOf(t);
        -1 !== e && (t.parent = null, t.scene = null, this._children.splice(e, 1))
      }

      removeFromParent() {
        this._parent && this._parent.remove(this)
      }

      removeAll() {
        for (; 0 < this._children.length;) this.remove(this._children.first)
      }

      getObjectByName(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this._name === t) return this;
        for (let i of this._children) {
          if (i.name === t) return i;
          if (e) {
            let e = i.getObjectByName(t);
            if (e) return e
          }
        }
        return null
      }

      getChildByName(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.getObjectByName(t, e)
      }

      getObjectByType(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this._name === t) return this;
        for (let i of this._children) {
          if (i.type === t) return i;
          if (e) {
            let e = i.getObjectByName(t);
            if (e) return e
          }
        }
        return null
      }

      getChildByType(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.getObjectByType(t, e)
      }

      traverse(t) {
        t(this);
        for (let e of this._children) e.traverse(t)
      }

      raycast(t) {
        let e = this.getComponents(l.default);
        for (let i of e) {
          if (i.raycast(t)) return i
        }
        return null
      }

      updateWorldMatrix() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._rigidBody && this._scene.physicEnabled) {
          let t = (new s.default).copy(this._rigidBody.body.position),
            e = (new n.default).copy(this._rigidBody.body.quaternion);
          this.parent ? (this._position.copy(this.parent.worldToLocal(t)), this._rigidBody.body.fixedRotation || this._quaternion.copy(this.parent.quaternion.clone().inverse().premultiply(e))) : (this._position.copy(t), this._rigidBody.body.fixedRotation || this._quaternion.copy(e))
        }
        if (this._localMatrix.compose(this._position, this._quaternion, this._scale), this._parent ? (e && this._parent.updateWorldMatrix(!1, !0), this._worldMatrix.multiplyMatrices(this._parent.worldMatrix, this._localMatrix)) : this._worldMatrix.copy(this._localMatrix), t) for (let t of this._children) t.updateWorldMatrix(!0)
      }

      dispose() {
      }
    }

    i.default = y
  }, {
    "./../components/Collider.js": 80,
    "./../components/RigidBody.js": 82,
    "./../core/Action.js": 87,
    "./../math/Euler.js": 115,
    "./../math/Matrix4.js": 117,
    "./../math/Quaternion.js": 120,
    "./../math/Vector3.js": 125,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  90: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array.sort"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./../math/Ray.js")), s = o(t("./../math/Vector3.js")), n = o(t("./../components/Collider.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.default(0, 0, -1),
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
        this._ray = new r.default(t, e), this._near = i, this._far = n
      }

      get ray() {
        return this._ray
      }

      setFromCamera(t, e) {
        this._near = e.near, this._far = e.far, this._ray.origin.setFromMatrixPosition(e.worldMatrix), this._ray.direction.copy(e.scene.unproject(new s.default(t.x, t.y, .5)).sub(this._ray.origin).normalize())
      }

      intersectObject(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return function t(e, i, r, s) {
          const o = e.getComponents(n.default);
          if (o) for (let t of o) {
            let s = t.raycast(i, !0);
            s && r.push({object: e, collider: t, point: s.clone()})
          }
          if (!0 === s) {
            const s = e.children;
            for (let e = 0, n = s.length; e < n; e++) t(s[e], i, r, !0)
          }
        }(t, this, i, e), i.sort((t, e) => function (t, e, i) {
          return e.clone().sub(t.origin).length() - i.clone().sub(t.origin).length()
        }(this._ray, t.point, e.point)), i
      }
    }
  }, {
    "./../components/Collider.js": 80,
    "./../math/Ray.js": 121,
    "./../math/Vector3.js": 125,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.array.sort": 317,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  91: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = l(t("./Object3D.js")), s = l(t("./../objects/Camera.js")), n = l(t("./../math/Vector3.js")),
      o = (l(t("./../math/Matrix3.js")), l(t("./../math/Quaternion.js")), l(t("./../renderer/Renderer.js"))),
      a = l(t("./../../event/Signal.js"));

    function l(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class c extends PIXI.Container {
      constructor() {
        super(...arguments), this._autoClear = !1, this._width = 0, this._height = 0, this._root = new r.default, this._root.scene = this, this._camera = new s.default, this._root.add(this._camera), this._ambientLight = {
          color: new n.default(.2, .2, .2),
          intensity: 1
        }, this._fog = {
          color: [0, 0, 0],
          near: 2,
          far: 20
        }, this._configs = {}, this._animators = [], this._prefabs = [], this._controllers = [], this._started = !1, this.interactive = !0, this._physicEnabled = !1, this._physicWorld = new CANNON.World, this._physicWorld.gravity.set(0, -9.82, 0), this.onBeforeRender = new a.default, this.onAfterRender = new a.default
      }

      start() {
        this._started = !0;
        for (let t of this._animators) t.startPlayback();
        for (let t of this._controllers) t.onStart && !t.started && (t.started = !0);
        for (let t of this._controllers) t.onEnable && t.enabled && t.onEnable()
      }

      get started() {
        return this._started
      }

      containsPoint() {
        return !0
      }

      unproject(t) {
        return 0 !== this._width && 0 !== this._height ? new n.default(t.x / this._width * 2 - 1, -t.y / this._height * 2 + 1, t.z).unproject(this._camera) : new n.default(t.x / o.default.width * o.default.resolution * 2 - 1, -t.y / o.default.height * o.default.resolution * 2 + 1, t.z).unproject(this._camera)
      }

      get autoClear() {
        return this._autoClear
      }

      set autoClear(t) {
        this._autoClear = t
      }

      get width() {
        return this._width
      }

      set width(t) {
        this._width = t
      }

      get height() {
        return this._height
      }

      set height(t) {
        this._height = t
      }

      get root() {
        return this._root
      }

      get camera() {
        return this._camera
      }

      set camera(t) {
        this._camera = t
      }

      get ambientLight() {
        return this._ambientLight
      }

      get fog() {
        return this._fog
      }

      set fog(t) {
        this._fog = t
      }

      get configs() {
        return this._configs
      }

      set configs(t) {
        this._configs = t
      }

      get animators() {
        return this._animators
      }

      get prefabs() {
        return this._prefabs
      }

      get controllers() {
        return this._controllers
      }

      get physicEnabled() {
        return this._physicEnabled
      }

      set physicEnabled(t) {
        this._physicEnabled = t
      }

      get physicWorld() {
        return this._physicWorld
      }

      getControllerByName(t) {
        for (let e of this._controllers) if (e.name === t) return e;
        return null
      }

      add(t) {
        t.scene = this, this._root.add(t)
      }

      remove(t) {
        t.scene = null, this._root.remove(t)
      }

      getObjectByName(t) {
        return this._root.getObjectByName(t)
      }

      updateWorldMatrix() {
        this._root.updateWorldMatrix(!0)
      }

      _render(t) {
        if (this._physicWorld && this._physicEnabled) {
          const t = 1 / 60, e = 5;
          let i = Math.abs(t - c2d.time.deltaTime) < .02 ? t : c2d.time.deltaTime;
          this._physicWorld.step(t, i, e)
        }
        for (let t of this._controllers) t.enabled && t.onUpdate && t.onUpdate();
        for (let t of this._animators) t.update();
        this.onBeforeRender.emit(), o.default.render(this, this._camera), this.onAfterRender.emit()
      }
    }

    i.default = c
  }, {
    "./../../event/Signal.js": 150,
    "./../math/Matrix3.js": 116,
    "./../math/Quaternion.js": 120,
    "./../math/Vector3.js": 125,
    "./../objects/Camera.js": 129,
    "./../renderer/Renderer.js": 136,
    "./Object3D.js": 89,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  92: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.split"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./Object3D.js")), s = o(t("./../math/Vector3.js")), n = o(t("./../math/Quaternion.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t) {
      return t.split(",").map(t => parseFloat(t))
    }

    function l(t, e, i) {
      return "." === t && (t = "dot"), e.getObjectByName(i + t).clone()
    }

    var c = {
      BLEND_MODES_2_ENGINE: {
        NoBlending: PIXI.BLEND_MODES.NONE,
        NormalBlending: PIXI.BLEND_MODES.NORMAL,
        AdditiveBlending: PIXI.BLEND_MODES.ADD,
        ScreenBlending: PIXI.BLEND_MODES.SCREEN,
        ColorBlending: PIXI.BLEND_MODES.COLOR
      }, hexStringToRGB: function (t) {
        return PIXI.utils.hex2rgb(PIXI.utils.string2hex(t))
      }, hexStringToRGBA: function (t) {
        return function (t) {
          let e = [];
          return e[0] = (t >> 24 & 255) / 255, e[1] = (t >> 16 & 255) / 255, e[2] = (t >> 8 & 255) / 255, e[3] = (255 & t) / 255, e
        }(PIXI.utils.string2hex(t))
      }, vector3FromString: function (t) {
        return (new s.default).fromArray(a(t))
      }, quaternionFromString: function (t) {
        return (new n.default).fromArray(a(t))
      }, floatArrayFromString: a, createNumbersObject: function (t, e, i, s, n) {
        let o = t.toString(), a = -o.length * s * .5 + s / 2;
        -1 !== o.indexOf(".") && (a += .5 * (s - n));
        let c = new r.default;
        for (let t = 0; t < o.length; ++t) {
          let r = o[t], h = l(r, e, i);
          h.position.x = a, "." === r || "." === o[t + 1] ? a += n : a += s, c.add(h)
        }
        return c
      }
    };
    i.default = c
  }, {
    "./../math/Quaternion.js": 120,
    "./../math/Vector3.js": 125,
    "./Object3D.js": 89,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.split": 328
  }],
  93: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.Geometry {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        super();
        const r = t / 2, s = e / 2, n = i / 2,
          o = [-r, -s, n, r, -s, n, r, s, n, -r, s, n, -r, -s, -n, -r, s, -n, r, s, -n, r, -s, -n, -r, s, -n, -r, s, n, r, s, n, r, s, -n, -r, -s, -n, r, -s, -n, r, -s, n, -r, -s, n, r, -s, -n, r, s, -n, r, s, n, r, -s, n, -r, -s, -n, -r, -s, n, -r, s, n, -r, s, -n];
        this.addAttribute("aVertexPosition", o, 3);
        this.addAttribute("aTextureCoord", [0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1], 2);
        this.addAttribute("aVertexNormal", [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0], 3);
        this.addIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23])
      }
    }

    i.default = r
  }, {}],
  94: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.Geometry {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        super();
        let s = t / 2, n = e / 2, o = Math.floor(i), a = Math.floor(r), l = o + 1, c = a + 1, h = t / o, u = e / a,
          d = [], f = [], p = [], m = [];
        for (let t = 0; t < c; ++t) {
          let e = t * u - n;
          for (let i = 0; i < l; ++i) {
            let r = i * h - s;
            f.push(r, -e, 0), p.push(0, 0, 1), m.push(i / o), m.push(t / a)
          }
        }
        for (let t = 0; t < a; ++t) for (let e = 0; e < o; ++e) {
          let i = e + l * t, r = e + l * (t + 1), s = e + 1 + l * (t + 1), n = e + 1 + l * t;
          d.push(i, r, n), d.push(r, s, n)
        }
        this.addAttribute("aVertexPosition", f, 3), this.addAttribute("aVertexNormal", p, 3), this.addAttribute("aTextureCoord", m, 2), this.addIndex(d)
      }
    }

    i.default = r
  }, {}],
  95: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../math/Vector3.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.Geometry {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        super();
        let r = [], n = [], o = [], a = [], l = 1 / t.length, c = 0, h = null, u = new s.default, d = 0;
        for (let s = 0; s < t.length - 1; ++s, d += l) {
          let f = t[s], p = t[s + 1], m = s < t.length - 2 ? t[s + 2] : t[s + 1];
          if (h || (h = this.getNormal(f, p), h.multiplyScalar(e)), u = this.getNormal(f, m), u.multiplyScalar(e), s < t.length - 2) {
            let t = this.getNormal(f, p).angleTo(this.getNormal(p, m));
            u.multiplyScalar(1 + e * Math.abs(t) * .75)
          }
          n.push(f.x + h.x, f.y, f.z + h.z), a.push(d * i, 0), n.push(p.x + u.x, p.y, p.z + u.z), a.push((d + l) * i, 0), n.push(f.x - h.x, f.y, f.z - h.z), a.push(d * i, 1), n.push(f.x - h.x, f.y, f.z - h.z), a.push(d * i, 1), n.push(p.x + u.x, p.y, p.z + u.z), a.push((d + l) * i, 0), n.push(p.x - u.x, p.y, p.z - u.z), a.push((d + l) * i, 1);
          for (let t = 0; t < 6; ++t, ++c) o.push(0, 1, 0), r.push(c);
          h.copy(u)
        }
        this.addAttribute("aVertexPosition", n, 3), this.addAttribute("aVertexNormal", o, 3), this.addAttribute("aTextureCoord", a, 2), this.addIndex(r)
      }

      getNormal(t, e) {
        let i = e.x - t.x, r = e.z - t.z;
        return new s.default(-r, 0, i).normalize()
      }
    }

    i.default = n
  }, {"./../math/Vector3.js": 125}],
  96: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../math/Vector3.js")) && r.__esModule ? r : {default: r};

    class n extends PIXI.Geometry {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI,
          o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Math.PI;
        super();
        let l = Math.min(o + a, Math.PI), c = [], h = [], u = [], d = [], f = 0, p = [], m = new s.default;
        for (let s = 0; s <= i; ++s) {
          let c = [], g = s / i, _ = 0;
          0 === s && 0 === o ? _ = .5 / e : s === i && l === Math.PI && (_ = -.5 / e);
          for (let i = 0; i <= e; ++i) {
            let s = i / e;
            m.x = -t * Math.cos(r + s * n) * Math.sin(o + g * a), m.y = t * Math.cos(o + g * a), m.z = t * Math.sin(r + s * n) * Math.sin(o + g * a), h.push(m.x, m.y, m.z), m.normalize(), u.push(m.x, m.y, m.z), d.push(s + _, 1 - g), c.push(f++)
          }
          p.push(c)
        }
        for (let t = 0; t < i; ++t) for (let r = 0; r < e; r++) {
          let e = p[t][r + 1], s = p[t][r], n = p[t + 1][r], a = p[t + 1][r + 1];
          (0 !== t || o > 0) && c.push(e, s, a), (t !== i - 1 || l < Math.PI) && c.push(s, n, a)
        }
        this.addAttribute("aVertexPosition", h, 3), this.addAttribute("aVertexNormal", u, 3), this.addAttribute("aTextureCoord", d, 2), this.addIndex(c)
      }
    }

    i.default = n
  }, {"./../math/Vector3.js": 125}],
  97: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../math/Vector2.js")), s = n(t("./../math/Vector3.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new s.default, a = new s.default, l = new s.default, c = new r.default;

    class h extends PIXI.Geometry {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8;
        super(), this._path = t, this._tubularSegments = e, this._radius = i, this._radialSegments = r, this._frames = t.computeFrenetFrames(e), this._vertices = [], this._normals = [], this._uvs = [], this._indices = [], this.generateBufferData(), this.addAttribute("aVertexPosition", this._vertices, 3), this.addAttribute("aVertexNormal", this._normals, 3), this.addAttribute("aTextureCoord", this._uvs, 2), this.addIndex(this._indices)
      }

      generateBufferData() {
        for (let t = 0; t <= this._tubularSegments; t++) this.generateSegment(t);
        this.generateUVs(), this.generateIndices()
      }

      generateSegment(t) {
        o = this._path.getPointAt(t / this._tubularSegments);
        const e = this._frames.normals[t], i = this._frames.binormals[t];
        for (let t = 0; t <= this._radialSegments; t++) {
          const r = t / this._radialSegments * Math.PI * 2, s = Math.sin(r), n = -Math.cos(r);
          a.x = n * e.x + s * i.x, a.y = n * e.y + s * i.y, a.z = n * e.z + s * i.z, a.normalize(), this._normals.push(a.x, a.y, a.z), l.x = o.x + this._radius * a.x, l.y = o.y + this._radius * a.y, l.z = o.z + this._radius * a.z, this._vertices.push(l.x, l.y, l.z)
        }
      }

      generateUVs() {
        for (let t = 0; t <= this._tubularSegments; t++) for (let e = 0; e <= this._radialSegments; e++) c.x = t / this._tubularSegments, c.y = e / this._radialSegments, this._uvs.push(c.x, c.y)
      }

      generateIndices() {
        for (let t = 1; t <= this._tubularSegments; t++) for (let e = 1; e <= this._radialSegments; e++) {
          const i = (this._radialSegments + 1) * (t - 1) + (e - 1), r = (this._radialSegments + 1) * t + (e - 1),
            s = (this._radialSegments + 1) * t + e, n = (this._radialSegments + 1) * (t - 1) + e;
          this._indices.push(i, r, n), this._indices.push(r, s, n)
        }
      }
    }

    i.default = h
  }, {"./../math/Vector2.js": 124, "./../math/Vector3.js": 125}],
  98: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../objects/Mesh.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super();
        let e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t];
        this._geometry.addAttribute("aVertexPosition", e, 3), this._geometry.addAttribute("aVertexColor", [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3), this._geometry.addIndex([0, 1, 2, 3, 4, 5]), this._material.vertexColors = !0, this._drawMode = PIXI.DRAW_MODES.LINES
      }
    }

    i.default = n
  }, {"./../objects/Mesh.js": 131}],
  99: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../objects/Mesh.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super();
        let e = [t.min.x, t.min.y, t.min.z, t.max.x, t.min.y, t.min.z, t.min.x, t.min.y, t.min.z, t.min.x, t.max.y, t.min.z, t.min.x, t.min.y, t.min.z, t.min.x, t.min.y, t.max.z, t.max.x, t.max.y, t.max.z, t.min.x, t.max.y, t.max.z, t.max.x, t.max.y, t.max.z, t.max.x, t.min.y, t.max.z, t.max.x, t.max.y, t.max.z, t.max.x, t.max.y, t.min.z, t.min.x, t.max.y, t.min.z, t.min.x, t.max.y, t.max.z, t.min.x, t.max.y, t.min.z, t.max.x, t.max.y, t.min.z, t.min.x, t.min.y, t.max.z, t.min.x, t.max.y, t.max.z, t.min.x, t.min.y, t.max.z, t.max.x, t.min.y, t.max.z, t.max.x, t.min.y, t.min.z, t.max.x, t.max.y, t.min.z, t.max.x, t.min.y, t.min.z, t.max.x, t.min.y, t.max.z];
        this._geometry.addAttribute("aVertexPosition", e, 3), this._drawMode = PIXI.DRAW_MODES.LINES
      }
    }

    i.default = n
  }, {"./../objects/Mesh.js": 131}],
  100: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../objects/Mesh.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super();
        let e = .5 * Math.radians(t.fov), i = Math.sin(e) * t.near, r = Math.sin(e) * t.far, s = [1, 0, 0],
          n = [1, 1, 1], o = [0, 1, 1], a = [0, 0, t.near], l = [0, 0, t.far], c = [i, i, t.near], h = [i, -i, t.near],
          u = [-i, -i, t.near], d = [-i, i, t.near], f = [r, r, t.far], p = [r, -r, t.far], m = [-r, -r, t.far],
          g = [-r, r, t.far], _ = [.8 * i, 1.2 * i, t.near], y = [0, 2.5 * i, t.near], v = [.8 * -i, 1.2 * i, t.near],
          b = [], x = [], j = (t, e, i) => {
            x = x.concat(t, e), b = b.concat(i, i)
          };
        j(a, l, [0, 0, 1]), j([0, 0, 0], a, s), j(c, f, n), j(h, p, n), j(u, m, n), j(d, g, n), j(c, h, s), j(h, u, s), j(u, d, s), j(d, c, s), j(c, u, s), j(h, d, s), j(f, p, n), j(p, m, n), j(m, g, n), j(g, f, n), j(f, m, n), j(p, g, n), j(_, y, o), j(y, v, o), j(v, _, o), this._geometry.addAttribute("aVertexPosition", x, 3), this._geometry.addAttribute("aVertexColor", b, 3), this._material.vertexColors = !0, this._drawMode = PIXI.DRAW_MODES.LINES
      }
    }

    i.default = n
  }, {"./../objects/Mesh.js": 131}],
  101: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array-buffer.slice"), t("core-js/modules/es.typed-array.float32-array"), t("core-js/modules/es.typed-array.to-locale-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../objects/Mesh.js")), s = n(t("./../math/Matrix4.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends r.default {
      constructor(t) {
        super(), this._joints = t.joints, this._verticesArray = new Float32Array(new Array(3 * this._joints.length * 2)), this._verticesBuffer = new PIXI.Buffer(this._verticesArray, !1), this._geometry.addAttribute("aVertexPosition", this._verticesBuffer, 3), this._drawMode = PIXI.DRAW_MODES.LINES, this.onBeforeRender.connect(() => this.updateVertices()), this.updateVertices()
      }

      updateVertices() {
        let t = 0, e = 0, i = new s.default, r = new s.default, n = (new s.default).getInverse(this.worldMatrix);
        for (t = 0; t < this._joints.length; ++t, e += 6) {
          let s = this._joints[t];
          s.parent && s.parent.isBone ? (i.multiplyMatrices(n, s.worldMatrix), r.multiplyMatrices(n, s.parent.worldMatrix), this._verticesArray[e] = i.elements[12], this._verticesArray[e + 1] = i.elements[13], this._verticesArray[e + 2] = i.elements[14], this._verticesArray[e + 3] = r.elements[12], this._verticesArray[e + 4] = r.elements[13], this._verticesArray[e + 5] = r.elements[14]) : (this._verticesArray[e] = 0, this._verticesArray[e + 1] = 0, this._verticesArray[e + 2] = 0, this._verticesArray[e + 3] = 0, this._verticesArray[e + 4] = 0, this._verticesArray[e + 5] = 0)
        }
        this._verticesBuffer.update()
      }
    }

    i.default = o
  }, {
    "./../math/Matrix4.js": 117,
    "./../objects/Mesh.js": 131,
    "core-js/modules/es.array-buffer.slice": 313,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.typed-array.float32-array": 333,
    "core-js/modules/es.typed-array.to-locale-string": 337
  }],
  102: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = N(t("./core/Object3D.js")), s = N(t("./core/Scene.js")), n = N(t("./core/Controller.js")),
      o = N(t("./core/Raycaster.js")), a = N(t("./core/Utils.js")), l = N(t("./math/index.js")),
      c = N(t("./geometries/PlaneGeometry.js")), h = N(t("./geometries/RopeGeometry.js")),
      u = N(t("./geometries/BoxGeometry.js")), d = N(t("./geometries/SphereGeometry.js")),
      f = N(t("./geometries/TubeGeometry.js")), p = N(t("./helpers/AxesHelper.js")),
      m = N(t("./helpers/CameraHelper.js")), g = N(t("./helpers/Box3Helper.js")),
      _ = N(t("./materials/AbstractMaterial.js")), y = N(t("./materials/DefaultMaterial.js")),
      v = N(t("./objects/Bone.js")), b = N(t("./objects/Curve.js")), x = N(t("./objects/Trigger.js")),
      j = N(t("./objects/Camera.js")), w = N(t("./objects/Mesh.js")), M = N(t("./objects/Text2DMesh.js")),
      S = N(t("./objects/SkinnedMesh.js")), O = N(t("./lights/DirectionalLight.js")),
      P = N(t("./lights/PointLight.js")), T = N(t("./lights/SpotLight.js")), C = N(t("./loaders/r3d/index.js")),
      A = N(t("./controllers/FlyController.js")), E = N(t("./controllers/OrbitController.js")),
      k = N(t("./components/Collider.js")), L = N(t("./components/BoxCollider.js")),
      F = N(t("./components/SphereCollider.js")), I = N(t("./components/RigidBody.js")),
      z = N(t("./renderer/Renderer.js"));

    function N(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var D = {
      R3DLoader: C.default,
      Scene: s.default,
      Object3D: r.default,
      Raycaster: o.default,
      Utils: a.default,
      Controller: n.default,
      Math: l.default,
      AbstractMaterial: _.default,
      DefaultMaterial: y.default,
      PlaneGeometry: c.default,
      RopeGeometry: h.default,
      BoxGeometry: u.default,
      SphereGeometry: d.default,
      TubeGeometry: f.default,
      AxesHelper: p.default,
      CameraHelper: m.default,
      Box3Helper: g.default,
      Bone: v.default,
      Curve: b.default,
      Trigger: x.default,
      Camera: j.default,
      Mesh: w.default,
      Text2DMesh: M.default,
      SkinnedMesh: S.default,
      DirectionalLight: O.default,
      PointLight: P.default,
      SpotLight: T.default,
      FlyController: A.default,
      OrbitController: E.default,
      Collider: k.default,
      SphereCollider: F.default,
      BoxCollider: L.default,
      RigidBody: I.default,
      Renderer: z.default
    };
    i.default = D
  }, {
    "./components/BoxCollider.js": 79,
    "./components/Collider.js": 80,
    "./components/RigidBody.js": 82,
    "./components/SphereCollider.js": 83,
    "./controllers/FlyController.js": 84,
    "./controllers/OrbitController.js": 85,
    "./core/Controller.js": 88,
    "./core/Object3D.js": 89,
    "./core/Raycaster.js": 90,
    "./core/Scene.js": 91,
    "./core/Utils.js": 92,
    "./geometries/BoxGeometry.js": 93,
    "./geometries/PlaneGeometry.js": 94,
    "./geometries/RopeGeometry.js": 95,
    "./geometries/SphereGeometry.js": 96,
    "./geometries/TubeGeometry.js": 97,
    "./helpers/AxesHelper.js": 98,
    "./helpers/Box3Helper.js": 99,
    "./helpers/CameraHelper.js": 100,
    "./lights/DirectionalLight.js": 103,
    "./lights/PointLight.js": 105,
    "./lights/SpotLight.js": 106,
    "./loaders/r3d/index.js": 108,
    "./materials/AbstractMaterial.js": 109,
    "./materials/DefaultMaterial.js": 110,
    "./math/index.js": 127,
    "./objects/Bone.js": 128,
    "./objects/Camera.js": 129,
    "./objects/Curve.js": 130,
    "./objects/Mesh.js": 131,
    "./objects/SkinnedMesh.js": 132,
    "./objects/Text2DMesh.js": 133,
    "./objects/Trigger.js": 134,
    "./renderer/Renderer.js": 136
  }],
  103: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./Light.js"));
    s(t("./../math/Vector3.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor(t, e) {
        super(t, e), this._type = "DirectionalLight"
      }

      setupShader(t) {
        t.uniforms.uLightDirection = this.direction.toArray(), t.uniforms.uLightColor = this.color.toArray(), t.uniforms.uLightColor[0] *= this.intensity, t.uniforms.uLightColor[1] *= this.intensity, t.uniforms.uLightColor[2] *= this.intensity
      }
    }

    i.default = n
  }, {"./../math/Vector3.js": 125, "./Light.js": 104}],
  104: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../core/Object3D.js")), s = n(t("./../math/Vector3.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default(1, 1, 1),
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        super(), this._type = "Light", this._color = t.clone(), this._intensity = e, this._receiveShadow = !1
      }

      get isLight() {
        return !0
      }

      get color() {
        return this._color
      }

      get intensity() {
        return this._intensity
      }

      set intensity(t) {
        this._intensity = t
      }

      get direction() {
        let t = new s.default(0, 0, -1);
        return t.applyQuaternion(this.worldQuaternion), t
      }

      setupShader(t) {
        console.warn("Must be override!")
      }
    }

    i.default = o
  }, {"./../core/Object3D.js": 89, "./../math/Vector3.js": 125}],
  105: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./Light.js"));
    s(t("./../math/Vector3.js")), s(t("./../math/Vector4.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        super(t, e), this._type = "PointLight", this._radius = i
      }

      setupShader(t) {
        t.uniforms.uPointLightColor = this.color.toArray(), t.uniforms.uPointLightColor[0] *= this.intensity, t.uniforms.uPointLightColor[1] *= this.intensity, t.uniforms.uPointLightColor[2] *= this.intensity, t.uniforms.uPointLightPosition = this.worldPosition.toArray(), t.uniforms.uPointLightPosition.push(this._radius)
      }
    }

    i.default = n
  }, {"./../math/Vector3.js": 125, "./../math/Vector4.js": 126, "./Light.js": 104}],
  106: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./Light.js"));
    s(t("./../math/Vector3.js")), s(t("./../math/Vector4.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.PI / 6;
        super(t, e), this._type = "SpotLight", this._range = i, this._angle = r
      }

      setupShader(t) {
        t.uniforms.uSpotLightColor = this.color.toArray(), t.uniforms.uSpotLightColor[0] *= this.intensity, t.uniforms.uSpotLightColor[1] *= this.intensity, t.uniforms.uSpotLightColor[2] *= this.intensity, t.uniforms.uSpotLightColor.push(Math.cos(.5 * this._angle)), t.uniforms.uSpotLightPosition = this.worldPosition.toArray(), t.uniforms.uSpotLightPosition.push(this._range), t.uniforms.uSpotLightDirection = this.direction.toArray(), t.uniforms.uSpotLightDirection.push(Math.cos(this._angle))
      }
    }

    i.default = n
  }, {"./../math/Vector3.js": 125, "./../math/Vector4.js": 126, "./Light.js": 104}],
  107: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array-buffer.slice"), t("core-js/modules/es.typed-array.float32-array"), t("core-js/modules/es.typed-array.int8-array"), t("core-js/modules/es.typed-array.int16-array"), t("core-js/modules/es.typed-array.int32-array"), t("core-js/modules/es.typed-array.uint8-array"), t("core-js/modules/es.typed-array.uint16-array"), t("core-js/modules/es.typed-array.uint32-array"), t("core-js/modules/es.typed-array.to-locale-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = d(t("./../../animation/tracks/BooleanKeyframeTrack.js")),
      s = d(t("./../../animation/tracks/QuaternionKeyframeTrack.js")),
      n = d(t("./../../animation/tracks/Vector3KeyframeTrack.js")),
      o = d(t("./../../animation/tracks/Vector4KeyframeTrack.js")),
      a = d(t("./../../animation/tracks/FloatKeyframeTrack.js")), l = d(t("./../../helpers/AxesHelper.js")),
      c = d(t("./../../helpers/CameraHelper.js")), h = d(t("./../../helpers/Box3Helper.js")),
      u = d(t("./../../helpers/SkeletonHelper.js"));
    d(t("./../../math/Vector3.js")), d(t("./../../math/Quaternion.js"));

    function d(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var f = {
      JSON_LENGTH: 4,
      ATTRIBUTES_NAME_2_ENGINE: {
        position: "aVertexPosition",
        normal: "aVertexNormal",
        uv: "aTextureCoord",
        uv2: "aTextureCoord2",
        tangent: "aTangent",
        skinWeight: "aSkinWeight",
        skinIndex: "aSkinIndex",
        blendPos0: "aBlendPos0",
        blendPos1: "aBlendPos1",
        blendPos2: "aBlendPos2",
        blendPos3: "aBlendPos3",
        blendNorm0: "aBlendNorm0",
        blendNorm1: "aBlendNorm1",
        blendNorm2: "aBlendNorm2",
        blendNorm3: "aBlendNorm3"
      },
      ATTRIBUTES_TYPE_2_ENGINE: {
        byte: PIXI.TYPES.UNSIGNED_BYTE,
        short: PIXI.TYPES.UNSIGNED_SHORT,
        float: PIXI.TYPES.FLOAT
      },
      WRAP_MODE_2_ENGINE: {clamp: PIXI.WRAP_MODES.CLAMP, mirror: PIXI.WRAP_MODES.MIRRORED_REPEAT},
      ARRAY_BY_TYPE: {
        char: Int8Array,
        byte: Uint8Array,
        short: Int16Array,
        ushort: Uint16Array,
        int: Int32Array,
        uint: Uint32Array,
        float: Float32Array
      },
      KEYFRAME_TRACK_CLASS: {
        position: n.default,
        quaternion: s.default,
        scale: n.default,
        color: o.default,
        uvAnim: o.default,
        visible: r.default,
        fov: a.default,
        cutOff: a.default,
        morph: a.default
      },
      createHelper: function (t) {
        switch (t.type) {
          case"Bone":
            return new l.default(.1);
          case"Camera":
            return new c.default(t);
          case"Mesh":
            return new h.default(t.boundingBox);
          case"SkinnedMesh":
            return new u.default(t)
        }
        return null
      }
    };
    i.default = f
  }, {
    "./../../animation/tracks/BooleanKeyframeTrack.js": 73,
    "./../../animation/tracks/FloatKeyframeTrack.js": 74,
    "./../../animation/tracks/QuaternionKeyframeTrack.js": 76,
    "./../../animation/tracks/Vector3KeyframeTrack.js": 77,
    "./../../animation/tracks/Vector4KeyframeTrack.js": 78,
    "./../../helpers/AxesHelper.js": 98,
    "./../../helpers/Box3Helper.js": 99,
    "./../../helpers/CameraHelper.js": 100,
    "./../../helpers/SkeletonHelper.js": 101,
    "./../../math/Quaternion.js": 120,
    "./../../math/Vector3.js": 125,
    "core-js/modules/es.array-buffer.slice": 313,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.typed-array.float32-array": 333,
    "core-js/modules/es.typed-array.int16-array": 334,
    "core-js/modules/es.typed-array.int32-array": 335,
    "core-js/modules/es.typed-array.int8-array": 336,
    "core-js/modules/es.typed-array.to-locale-string": 337,
    "core-js/modules/es.typed-array.uint16-array": 338,
    "core-js/modules/es.typed-array.uint32-array": 339,
    "core-js/modules/es.typed-array.uint8-array": 340
  }],
  108: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array-buffer.slice"), t("core-js/modules/es.typed-array.float32-array"), t("core-js/modules/es.typed-array.uint8-array"), t("core-js/modules/es.typed-array.uint16-array"), t("core-js/modules/es.typed-array.to-locale-string"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = P(t("./../../core/Utils.js")), s = P(t("./Utils.js")), n = P(t("./../../../utils/String.js")),
      o = P(t("./../../math/Vector3.js")), a = P(t("./../../math/Matrix4.js")), l = P(t("./../../math/BezierCurve.js")),
      c = P(t("./../../core/Scene.js")), h = P(t("./../../core/Object3D.js")), u = P(t("./../../core/Controller.js")),
      d = P(t("./../../materials/DefaultMaterial.js")), f = P(t("./../../materials/VFX_RaysMaterial.js")),
      p = P(t("./../../objects/Bone.js")), m = P(t("./../../objects/Curve.js")), g = P(t("./../../objects/Trigger.js")),
      _ = P(t("./../../objects/Camera.js")), y = P(t("./../../objects/Mesh.js")),
      v = P(t("./../../objects/SkinnedMesh.js")), b = P(t("./../../lights/DirectionalLight.js")),
      x = P(t("./../../animation/AnimationClip.js")), j = P(t("./../../animation/animator/Animator.js")),
      w = P(t("./../../components/SphereCollider.js")), M = P(t("./../../components/BoxCollider.js")),
      S = P(t("./../../components/RigidBody.js")), O = P(t("../../components/Collider.js"));

    function P(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class T {
      constructor(t) {
        this._logger = c2d.Logger.Of("Display3d.Loaders.r3d"), this._scene = null, this._assetsStore = t, this._helpers = !1
      }

      static registerControllerClass(t, e) {
        T.controllerClasses[t] = e
      }

      static registerComponentClass(t, e) {
        T.componentClasses || (T.componentClasses = {}), T.componentClasses[t] = e
      }

      static registerMaterialClass(t, e) {
        T.materialClasses || (T.materialClasses = {}), T.materialClasses[t] = e
      }

      load(t) {
        let e = 0, i = new DataView(t).getUint32(0, !0);
        e += 4;
        let r = new Uint8Array(t, e, i);
        this._json = JSON.parse(n.default.decodeFromArray(r)), e += i;
        let s = t.byteLength - e;
        this._buffer = t.slice(e, e + s), this._logger.debug(this._json), this.initGeometries(), this.initTextures(), this.initMaterials(), this.initAnimations(), this.initNodesHierarchy(), this.initScene()
      }

      get scene() {
        return this._scene
      }

      initGeometries() {
        this._geometries = [];
        for (let t = 0; t < this._json.meshes.length; ++t) {
          let e = this._json.meshes[t], i = new PIXI.Geometry;
          for (let t in e.attributes) {
            let r = e.attributes[t],
              n = new s.default.ARRAY_BY_TYPE[r.type](this._buffer, r.offset, r.count * r.elements);
            s.default.ATTRIBUTES_TYPE_2_ENGINE[r.type] || this._logger.error("Unsupported attribute type: ".concat(r.type)), s.default.ATTRIBUTES_NAME_2_ENGINE[t] || this._logger.error("Unsupported attribute name: ".concat(t)), i.addAttribute(s.default.ATTRIBUTES_NAME_2_ENGINE[t], n, r.elements, !1, s.default.ATTRIBUTES_TYPE_2_ENGINE[r.type])
          }
          let r = 0;
          for (let t of e.subMeshes) r += t.count;
          let n = new Uint16Array(this._buffer, e.subMeshes[0].offset, r);
          i.addIndex(n), this._geometries.push(i)
        }
      }

      initTextures() {
        this._textures = {};
        for (let t = 0; t < this._json.textures.length; ++t) {
          let e = this._json.textures[t], i = this._assetsStore.getTexture(e.name);
          void 0 !== e.wrap ? i.baseTexture.wrapMode = s.default.WRAP_MODE_2_ENGINE[e.wrap] : i.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, this._textures[e.name] = i
        }
      }

      initMaterials() {
        this._materials = [];
        for (let t = 0; t < this._json.materials.length; ++t) {
          let e = this._json.materials[t], i = new T.materialClasses[e.shader];
          i.fromJSON(e, this._textures), this._materials.push(i)
        }
      }

      initAnimations() {
        this._animations = [];
        for (let t = 0; t < this._json.animations.length; ++t) {
          let e = this._json.animations[t], i = [];
          for (let t of e.baked) for (let e of t.tracks) {
            let r, n = s.default.KEYFRAME_TRACK_CLASS[e.name],
              o = new Float32Array(this._buffer, e.times[0], e.times[1]);
            r = "visible" === e.name ? new Uint8Array(this._buffer, e.values[0], e.values[1]) : new Float32Array(this._buffer, e.values[0], e.values[1]), n || console.log(n, e.name), i.push(new n(t.target, e.name, o, r))
          }
          let r = new x.default(e.name, i, e.events);
          r.loop = e.loop, this._animations.push(r)
        }
      }

      initNodesHierarchy() {
        this._nodes = [];
        for (let t of this._json.nodes) {
          let e;
          e = t.camera ? this._createCameraObject(t) : t.light ? this._createLightObject(t) : void 0 !== t.mesh ? this._createMeshObject(t) : t.b ? new p.default : void 0 !== t.curve ? this._createCurveObject(t) : void 0 !== t.trigger ? new g.default(t.trigger) : new h.default, e.name = t.n, e.visible = t.v, void 0 !== t.tag && (e.tag = t.tag), e.position.fromArray(new Float32Array(this._buffer, t.mtx, 3)), e.quaternion.fromArray(new Float32Array(this._buffer, t.mtx + 12, 4)), e.scale.fromArray(new Float32Array(this._buffer, t.mtx + 28, 3)), t.camera && e.rotateY(Math.PI), this._nodes.push(e)
        }
        for (let t = 0; t < this._json.nodes.length; ++t) {
          let e = this._json.nodes[t];
          if (void 0 !== e.mesh && void 0 !== e.skeleton) {
            let i = e.skeleton, r = i.bones.map(t => this._nodes[t]), s = [];
            for (let t = 0; t < r.length; ++t) {
              let e = new a.default;
              e.fromArray(new Float32Array(this._buffer, i.inverseBindMatrices[0] + 16 * t * 4, 16)), s.push(e)
            }
            this._nodes[t].setBones(r, s)
          }
        }
        for (let t = 0; t < this._json.nodes.length; ++t) {
          let e = this._json.nodes[t], i = this._nodes[t];
          if (void 0 !== e.childs) for (let t of e.childs) i.add(this._nodes[t])
        }
        for (let t = 0; t < this._json.nodes.length; ++t) {
          let e = this._json.nodes[t], i = this._nodes[t];
          void 0 !== e.animator && (i.animator = new j.default(i, this._json.animators[e.animator], this._animations))
        }
        for (let t = 0; t < this._json.nodes.length; ++t) {
          let e = this._json.nodes[t], i = this._nodes[t];
          if (void 0 !== e.controller) {
            let t = this._json.controllers[e.controller], r = T.controllerClasses[t.className];
            r || (this._logger.error("Not found controller class: " + t.className + ". Use default controller class!"), r = u.default), i.controller = new r(i)
          }
          if (void 0 !== e.components) for (let t of e.components) {
            let e = T.componentClasses[t.type];
            if (e) {
              let r = new e;
              r.fromJson(t), i.addComponent(r)
            } else this._logger.error("Not found component class: " + t.type + "!")
          }
          let r = i.getComponents(O.default), s = i.getComponent(S.default);
          if (r.length && s) for (let t of r) s.addShape(t.shape, t.center)
        }
        if (this._helpers) for (let t = 0; t < this._nodes.length; ++t) {
          let e = s.default.createHelper(this._nodes[t]);
          e && this._nodes[t].add(e)
        }
      }

      initScene() {
        this._scene = new c.default;
        let t = r.default.hexStringToRGB(this._json.ambientLight.color);
        if (this._scene.ambientLight.color.fromArray(t), this._json.fog && "linear" === this._json.fog.mode && (this._scene.fog = {
          color: r.default.hexStringToRGB(this._json.fog.color),
          near: this._json.fog.near,
          far: this._json.fog.far
        }), void 0 !== this._json.scene) for (let t of this._json.scene) {
          let e = this._nodes[t];
          this._scene.add(e)
        }
        this._scene.configs = this._json.configs, this._initPrefabs(), this._initControllers(), this._scene.updateWorldMatrix()
      }

      _initPrefabs() {
        for (let t = 0; t < this._json.prefabs.length; ++t) this._scene.prefabs.push(this._nodes[this._json.prefabs[t]])
      }

      _initControllers() {
        let t = e => {
          if (Array.isArray(e)) return e.map(e => t(e));
          if ("object" == typeof e) if (void 0 !== e.controller) e = this._nodes[e.controller].controller; else if (void 0 !== e.prefab) e = this.scene.prefabs[e.prefab]; else if (void 0 !== e.node) e = this._nodes[e.node]; else if (void 0 !== e.texture) e = this._textures[e.texture]; else if (void 0 !== e.material) e = this._materials[e.material]; else for (let i in e) e[i] = t(e[i]);
          return e
        };
        for (let e = 0; e < this._json.nodes.length; ++e) {
          let i = this._json.nodes[e], r = this._nodes[e];
          if (void 0 !== i.controller) {
            let e = this._json.controllers[i.controller].params;
            for (let i in e) r.controller[i] = t(e[i])
          }
        }
      }

      _createCameraObject(t) {
        let e = new _.default, i = r.default.hexStringToRGB(t.camera.clearColor);
        return e.clearColor.set(i[0], i[1], i[2]), e.fov = t.camera.fov, e.near = t.camera.near, e.far = t.camera.far, e
      }

      _createLightObject(t) {
        let e = new o.default;
        return e.fromArray(r.default.hexStringToRGB(t.light.color)), new b.default(e, t.light.intensity)
      }

      _createMeshObject(t) {
        let e, i;
        if (t.materials) {
          i = [];
          for (let e of t.materials) i.push(this._materials[e])
        } else this._logger.warn("Mesh ".concat(t, " without materials!")), i = [new Material];
        let r = this._json.meshes[t.mesh];
        if (1 === i.length && 1 === r.subMeshes.length && (i = i[0]), e = void 0 !== t.skeleton ? new v.default(this._geometries[t.mesh], i) : new y.default(this._geometries[t.mesh], i), r.subMeshes.length > 1) {
          let t = 0, s = 0;
          for (let n = 0; n < r.subMeshes.length; ++n) {
            let o = r.subMeshes[n];
            e.addGroup(t, o.count, s), s < i.length - 1 && s++, t += o.count
          }
        }
        return e
      }

      _createCurveObject(t) {
        let e = new m.default, i = new l.default;
        for (let e of t.curve.points) {
          let t = {
            position: r.default.vector3FromString(e.p),
            quaternion: r.default.quaternionFromString(e.q),
            tangent: [r.default.vector3FromString(e.t1), r.default.vector3FromString(e.t2)]
          };
          t.tangent[0].add(t.position), t.tangent[1].add(t.position), i.points.push(t)
        }
        return e.curve = i, e
      }
    }

    i.default = T, T.renderer = null, T.controllerClasses = {Controller: u.default}, T.registerComponentClass("SphereCollider", w.default), T.registerComponentClass("BoxCollider", M.default), T.registerComponentClass("RigidBody", S.default), T.registerMaterialClass("Default", d.default), T.registerMaterialClass("VFX_Rays", f.default)
  }, {
    "../../components/Collider.js": 80,
    "./../../../utils/String.js": 188,
    "./../../animation/AnimationClip.js": 67,
    "./../../animation/animator/Animator.js": 70,
    "./../../components/BoxCollider.js": 79,
    "./../../components/RigidBody.js": 82,
    "./../../components/SphereCollider.js": 83,
    "./../../core/Controller.js": 88,
    "./../../core/Object3D.js": 89,
    "./../../core/Scene.js": 91,
    "./../../core/Utils.js": 92,
    "./../../lights/DirectionalLight.js": 103,
    "./../../materials/DefaultMaterial.js": 110,
    "./../../materials/VFX_RaysMaterial.js": 111,
    "./../../math/BezierCurve.js": 112,
    "./../../math/Matrix4.js": 117,
    "./../../math/Vector3.js": 125,
    "./../../objects/Bone.js": 128,
    "./../../objects/Camera.js": 129,
    "./../../objects/Curve.js": 130,
    "./../../objects/Mesh.js": 131,
    "./../../objects/SkinnedMesh.js": 132,
    "./../../objects/Trigger.js": 134,
    "./Utils.js": 107,
    "core-js/modules/es.array-buffer.slice": 313,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.typed-array.float32-array": 333,
    "core-js/modules/es.typed-array.to-locale-string": 337,
    "core-js/modules/es.typed-array.uint16-array": 338,
    "core-js/modules/es.typed-array.uint8-array": 340,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  109: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./../shaders/Preprocessor.js")), s = n(t("./../core/Utils.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = {};

    class a {
      constructor() {
        this.name = "", this.type = "Material", this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendMode = PIXI.BLEND_MODES.NORMAL, this.alphaSource = "AlphaChanel", this.alphaCutoff = 0, this.wireframe = !1, this.doubleSided = !1, this.clockwiseFrontFace = !1, this.lights = !1, this.billboard = !1, this.fog = !1, this.depthTest = !0, this.depthWrite = !0, this.skinned = !1, this.blendMeshes = 0
      }

      clone() {
        return (new a).copy(this)
      }

      copy(t) {
        return this.name = t.name, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.alphaSource = t.alphaSource, this.blendMode = t.blendMode, this.alphaCutoff = t.alphaCutoff, this.wireframe = t.wireframe, this.doubleSided = t.doubleSided, this.clockwiseFrontFace = t.clockwiseFrontFace, this.lights = t.lights, this.billboard = t.billboard, this.fog = t.fog, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.skinned = t.skinned, this.blendMeshes = t.blendMeshes, this
      }

      fromJSON(t, e) {
        this.name = t.name, "NoBlending" !== t.blending && (this.transparent = !0, this.blendMode = s.default.BLEND_MODES_2_ENGINE[t.blending]), t.alphaSource && (this.alphaSource = t.alphaSource), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.cutOff && (this.alphaCutoff = t.cutOff), void 0 !== t.doubleSided && (this.doubleSided = t.doubleSided), void 0 !== t.clockwiseFrontFace && (this.clockwiseFrontFace = t.clockwiseFrontFace), void 0 !== t.depthWrite && (this.depthWrite = t.depthWrite), void 0 !== t.depthTest && (this.depthTest = t.depthTest), void 0 !== t.lights && (this.lights = !0), void 0 !== t.billboard && (this.billboard = !0), t.fog && (this.fog = !0)
      }

      get defines() {
        let t = {};
        return this.transparent && (t.TRANSPARENT = "", t.BLEND_MODE = this.blendMode), "RedChanel" === this.alphaSource ? t.ALPHA_FROM_RED = "" : "GreenChanel" === this.alphaSource ? t.ALPHA_FROM_GREEN = "" : "BlueChanel" === this.alphaSource && (t.ALPHA_FROM_BLUE = ""), this.skinned && (t.SKINNING = "", game.engine.extensions.floatTexture ? t.BONE_TEXTURE = "" : t.MAX_BONES = game.engine.parameters.maxBones), this.blendMeshes && (t.BLEND_MESHES = this.blendMeshes), this.vertexColors && (t.VERTEX_COLORS = ""), this.alphaCutoff && (t.ALPHA_CUTOFF = ""), this.lights && (t.LIGHTS = ""), this.billboard && (t.BILLBOARD = ""), this.fog && (t.USE_FOG = ""), this.doubleSided && (t.DOUBLE_SIDED = ""), t
      }

      bind(t) {
        this.alphaCutoff && (t.uniforms.uAlphaCutoff = this.alphaCutoff)
      }

      getShader(t, e) {
        let i = this.defines, s = this.type + JSON.stringify(i), n = o[s];
        return n || (n = r.default.getProgram(t, e, this.type, i), o[s] = n), n
      }
    }

    i.default = a
  }, {"./../core/Utils.js": 92, "./../shaders/Preprocessor.js": 137}],
  110: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = h(t("./AbstractMaterial.js")), s = h(t("./../shaders/default.vert.js")),
      n = h(t("./../shaders/default.frag.js")), o = h(t("./../math/Vector2.js")), a = h(t("./../math/Vector3.js")),
      l = h(t("./../math/Vector4.js")), c = h(t("./../core/Utils.js"));

    function h(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class u extends r.default {
      constructor() {
        super(), this.type = "DefaultMaterial", this.color = new a.default(1, 1, 1), this.texture = null, this.textureST = new l.default(1, 1, 0, 0), this.lightMap = null, this.normalMap = null, this.emissiveMap = null, this.specularMap = null, this.specularParam = new o.default(0, 0), this.fresnelColor = new l.default(0, 0, 0, 5), this.fresnelEnabled = !1, this.reflectionMap = null, this.reflectionPower = 0, this.reflectionMask = !1, this.distortionMap = null, this.distortionParams = new l.default(.02, .03, .017, 1), this.dissolveMap = null, this.dissolvePattern = new l.default(0, 0, 0, 0), this.dissolveLMap = null, this.dissolveLColor = new l.default(0, 0, 0, 0), this.dissolveLMapParam = 0, this.finalColor = new l.default(1, 1, 1, 0)
      }

      clone() {
        return (new u).copy(this)
      }

      copy(t) {
        return super.copy(t), this.color.copy(t.color), this.texture = t.texture, this.textureST.copy(t.textureST), this.lightMap = t.lightMap, this.normalMap = t.normalMap, this.emissiveMap = t.emissiveMap, this.specularMap = t.specularMap, this.specularParam.copy(t.specularParam), this.fresnelColor.copy(t.fresnelColor), this.fresnelEnabled = t.fresnelEnabled, this.reflectionMap = t.reflectionMap, this.reflectionPower = t.reflectionPower, this.reflectionMask = t.reflectionMask, this.distortionMap = t.distortionMap, this.distortionParams.copy(t.distortionParams), this.dissolveMap = t.dissolveMap, this.dissolvePattern = t.dissolvePattern, this.dissolveLMap = t.dissolveLMap, this.dissolveLColor = t.dissolveLColor, this.dissolveLMapParam = t.dissolveLMapParam, this.finalColor.copy(t.finalColor), this
      }

      get hasTextureST() {
        return 1 !== this.textureST.x || 1 !== this.textureST.y || 0 !== this.textureST.z || 0 !== this.textureST.w
      }

      fromJSON(t, e) {
        if (super.fromJSON(t, e), void 0 !== t.color) {
          let e = c.default.hexStringToRGB(t.color);
          this.color.fromArray(e)
        }
        if (void 0 !== t.colorMap && (this.texture = e[t.colorMap]), void 0 !== t.st && this.textureST.fromArray(c.default.floatArrayFromString(t.st)), void 0 !== t.lightMap && (this.lightMap = e[t.lightMap]), void 0 !== t.normalMap && (this.normalMap = e[t.normalMap]), void 0 !== t.specularMap && (this.specularMap = e[t.specularMap]), void 0 !== t.emissiveMap && (this.emissiveMap = e[t.emissiveMap]), void 0 !== t.specularParam && this.specularParam.fromArray(c.default.floatArrayFromString(t.specularParam)), void 0 !== t.fresnel) {
          let e = t.fresnel;
          this.fresnelColor.fromArray([...c.default.hexStringToRGB(e.color), e.factor]), this.fresnelEnabled = !0
        }
        if (void 0 !== t.reflect) {
          let i = t.reflect;
          this.reflectionMap = e[i.map], this.reflectionPower = i.power, this.reflectionMask = i.mask
        }
        if (void 0 !== t.distor) {
          let i = t.distor;
          this.distortionMap = e[i.map], this.distortionParams.fromArray(c.default.floatArrayFromString(i.params))
        }
        if (t.dissolve) {
          let i = t.dissolve;
          this.dissolveMap = e[i.Dmap], this.dissolvePattern.fromArray([...c.default.floatArrayFromString(i.Pattern)]), this.dissolveLMap = e[i.Lmap], this.dissolveLMapParam = i.LmapUVParam
        }
        void 0 !== t.finalColor && this.finalColor.fromArray(c.default.hexStringToRGBA(t.finalColor))
      }

      get defines() {
        let t = super.defines;
        return this.texture && (t.TEXTURE = ""), this.hasTextureST && (t.TEXTURE_ST = ""), this.lightMap && (t.LIGHTMAP_ON = ""), this.normalMap && (t.NORMALMAP_ON = ""), this.specularMap && (t.SPECULARMAP_ON = ""), this.emissiveMap && (t.EMISSIVE_ON = ""), this.fresnelEnabled && (t.FRESNEL_ON = ""), this.reflectionMap && this.reflectionPower && (t.REFLECTION_ON = "", this.reflectionMask && (t.REFLECTION_MASK = "")), this.distortionMap && this.distortionParams.w && (t.DISTORTION_ON = "", 0 === this.distortionParams.x && 0 === this.distortionParams.y || (t.DISTORTION_ANIMATION = "")), this.dissolveMap && this.dissolvePattern.w < 1 && (t.DISSOLVE_ON = "", this.dissolveLMap && (t.DISSOLVE_LMAP = "")), 0 !== this.finalColor.w && (t.FINAL_COLOR = ""), t
      }

      get shader() {
        return this.getShader(s.default, n.default)
      }

      bind(t) {
        super.bind(t), this.color && (t.uniforms.uColor = [this.color.x, this.color.y, this.color.z, this.opacity]), this.texture && (t.uniforms.uSampler = this.texture), this.hasTextureST && (t.uniforms.uTextureST = this.textureST.toArray()), this.lightMap && (t.uniforms.uLightMap = this.lightMap), this.normalMap && (t.uniforms.uNormalMap = this.normalMap, t.uniforms.uSpecularParam = this.specularParam.toArray()), this.specularMap && (t.uniforms.uSpecularMap = this.specularMap), this.emissiveMap && (t.uniforms.uEmissiveMap = this.emissiveMap), this.fresnelEnabled && (t.uniforms.uFresnelColor = this.fresnelColor.toArray()), this.reflectionMap && this.reflectionPower && (t.uniforms.uReflectionMap = this.reflectionMap, t.uniforms.uReflectionPower = this.reflectionPower), this.distortionMap && this.distortionParams.w && (t.uniforms.uDistorMap = this.distortionMap, t.uniforms.uDistorParam = this.distortionParams.toArray()), this.dissolveMap && (t.uniforms.uDissolveMap = this.dissolveMap, t.uniforms.uDissolvePattern = this.dissolvePattern.toArray(), this.dissolveLMap ? (t.uniforms.uDissolveLMap = this.dissolveLMap, t.uniforms.uDissolveLMapParam = this.dissolveLMapParam) : t.uniforms.uDissolveLColor = this.dissolveLColor.toArray()), 1 === this.finalColor.r && 1 === this.finalColor.g && 1 === this.finalColor.b && 0 === this.finalColor.a || (t.uniforms.uFinalColor = this.finalColor.toArray())
      }
    }

    i.default = u
  }, {
    "./../core/Utils.js": 92,
    "./../math/Vector2.js": 124,
    "./../math/Vector3.js": 125,
    "./../math/Vector4.js": 126,
    "./../shaders/default.frag.js": 141,
    "./../shaders/default.vert.js": 142,
    "./AbstractMaterial.js": 109,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  111: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = c(t("./AbstractMaterial.js")), s = c(t("./../shaders/vfx_rays.vert.js")),
      n = c(t("./../shaders/vfx_rays.frag.js")), o = (c(t("./../math/Vector2.js")), c(t("./../math/Vector3.js"))),
      a = c(t("./../math/Vector4.js")), l = c(t("./../core/Utils.js"));

    function c(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class h extends r.default {
      constructor() {
        super(), this.type = "VFX_RaysMaterial", this.color = new o.default(1, 1, 1), this.texture = null, this.uvAnim = new a.default(0, 0, 0, 0), this.distortionParams = new a.default(0, 0, 0, 0)
      }

      fromJSON(t, e) {
        if (super.fromJSON(t, e), void 0 !== t.color) {
          let e = l.default.hexStringToRGB(t.color);
          this.color.fromArray(e)
        }
        void 0 !== t.colorMap && (this.texture = e[t.colorMap]), this.uvAnim.fromArray(l.default.floatArrayFromString(t.uvAnim)), this.distortionParams.fromArray(l.default.floatArrayFromString(t.distor))
      }

      get defines() {
        let t = super.defines;
        return this.texture && (t.TEXTURE = ""), t
      }

      get shader() {
        return this.getShader(s.default, n.default)
      }

      bind(t) {
        super.bind(t), this.color && (t.uniforms.uColor = [this.color.x, this.color.y, this.color.z, this.opacity]), this.texture && (t.uniforms.uSampler = this.texture, t.uniforms.uUVAnim = this.uvAnim.toArray(), t.uniforms.uDistorParam = this.distortionParams.toArray())
      }
    }

    i.default = h
  }, {
    "./../core/Utils.js": 92,
    "./../math/Vector2.js": 124,
    "./../math/Vector3.js": 125,
    "./../math/Vector4.js": 126,
    "./../shaders/vfx_rays.frag.js": 143,
    "./../shaders/vfx_rays.vert.js": 144,
    "./AbstractMaterial.js": 109
  }],
  112: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Vector3.js")), s = n(t("./Matrix4.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this._points = t, this._length = 0
      }

      get points() {
        return this._points
      }

      set points(t) {
        this._points = t
      }

      calculateLength() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        this._length = 0;
        for (let e = 0; e < this._points.length - 1; ++e) {
          let i = this._points[e], r = this._points[e + 1];
          for (let e = 0; e < t; ++e) {
            let s = e / t, n = (e + 1) / t,
              a = o.pathCalculation(i.position, i.tangent[1], r.tangent[0], r.position, s),
              l = o.pathCalculation(i.position, i.tangent[1], r.tangent[0], r.position, n);
            this._length += a.distanceTo(l)
          }
        }
      }

      static pathCalculation(t, e, i, r, s) {
        let n = s * s, o = s * n, a = 1 - s, l = a * a, c = a * l, h = t.clone();
        return h.multiplyScalar(c), h.add(e.clone().multiplyScalar(3 * l * s)), h.add(i.clone().multiplyScalar(3 * a * n)), h.add(r.clone().multiplyScalar(o)), h
      }

      static controlPointFloat(t, e, i, r) {
        return (t + i - 2 * e) * r * r + 2 * (e - t) * r + t
      }

      static controlPointVector3(t, e, i, s) {
        return new r.default(o.controlPointFloat(t.x, e.x, i.x, s), o.controlPointFloat(t.y, e.y, i.y, s), o.controlPointFloat(t.z, e.z, i.z, s))
      }

      getControlPointAtIndex(t) {
        return this._points[Math.min(this._points.length - 1, Math.max(t, 0))]
      }

      getPointAt(t) {
        let e, i;
        if (t >= 1) e = this._points.length - 1, i = 1; else {
          let r = 1 / (this._points.length - 1);
          e = Math.floor(t / r), i = (t - r * e) / r
        }
        let n = this.getControlPointAtIndex(e), l = this.getControlPointAtIndex(e + 1),
          c = o.pathCalculation(n.position, n.tangent[1], l.tangent[0], l.position, i),
          h = o.controlPointVector3(n.position, n.tangent[1], l.tangent[0], i),
          u = o.controlPointVector3(n.tangent[1], l.tangent[0], l.position, i),
          d = n.quaternion.clone().slerp(l.quaternion, i), f = h.sub(u).normalize(),
          p = new r.default(0, 1, 0).applyQuaternion(d).normalize(), m = (new r.default).crossVectors(p, f).normalize();
        return p.crossVectors(f, m).normalize(), a = new s.default, a.makeBasis(m, p, f), d.setFromRotationMatrix(a), d.normalize(), {
          position: c,
          quaternion: d
        }
      }
    }

    i.default = o;
    let a = new s.default
  }, {"./Matrix4.js": 117, "./Vector3.js": 125}],
  113: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Vector3.js")) && r.__esModule ? r : {default: r};
    let n = [new s.default, new s.default, new s.default, new s.default, new s.default, new s.default, new s.default, new s.default],
      o = new s.default, a = new s.default, l = new s.default, c = new s.default, h = new s.default, u = new s.default,
      d = new s.default, f = new s.default, p = new s.default, m = new s.default, g = new s.default;

    class _ {
      constructor() {
        this.min = new s.default(1 / 0, 1 / 0, 1 / 0), this.max = new s.default(-1 / 0, -1 / 0, -1 / 0)
      }

      set(t, e) {
        return this.min.copy(t), this.max.copy(e), this
      }

      setFromArray(t) {
        let e = 1 / 0, i = 1 / 0, r = 1 / 0, s = -1 / 0, n = -1 / 0, o = -1 / 0;
        for (let a = 0, l = t.length; a < l; a += 3) {
          let l = t[a], c = t[a + 1], h = t[a + 2];
          l < e && (e = l), c < i && (i = c), h < r && (r = h), l > s && (s = l), c > n && (n = c), h > o && (o = h)
        }
        return this.min.set(e, i, r), this.max.set(s, n, o), this
      }

      setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this
      }

      setFromCenterAndSize(t, e) {
        let i = o.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
      }

      clone() {
        return (new _).copy(this)
      }

      copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
      }

      makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
      }

      isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      }

      getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
      }

      getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
      }

      expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this
      }

      expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this
      }

      expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
      }

      containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
      }

      containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
      }

      intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
      }

      intersectsSphere(t) {
        return this.clampPoint(t.center, o), o.distanceToSquared(t.center) <= t.radius * t.radius
      }

      intersectsPlane(t) {
        let e, i;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
      }

      intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(f), p.subVectors(this.max, f), a.subVectors(t.a, f), l.subVectors(t.b, f), c.subVectors(t.c, f), h.subVectors(l, a), u.subVectors(c, l), d.subVectors(a, c);
        let e = [0, -h.z, h.y, 0, -u.z, u.y, 0, -d.z, d.y, h.z, 0, -h.x, u.z, 0, -u.x, d.z, 0, -d.x, -h.y, h.x, 0, -u.y, u.x, 0, -d.y, d.x, 0];
        return !!y(e, a, l, c, p) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!y(e, a, l, c, p) && (m.crossVectors(h, u), e = [m.x, m.y, m.z], y(e, a, l, c, p)))
      }

      clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
      }

      distanceToPoint(t) {
        return o.copy(t).clamp(this.min, this.max).sub(t).length()
      }

      getBoundingSphere(t) {
        return this.getCenter(t.center), t.radius = .5 * this.getSize(o).length(), t
      }

      intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
      }

      union(t) {
        return this.min.min(t.min), this.max.max(t.max), this
      }

      applyMatrix4(t) {
        return this.isEmpty() || (n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(n)), this
      }

      translate(t) {
        return this.min.add(t), this.max.add(t), this
      }

      equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
      }
    }

    function y(t, e, i, r, s) {
      let n, o;
      for (n = 0, o = t.length - 3; n <= o; n += 3) {
        g.fromArray(t, n);
        let o = s.x * Math.abs(g.x) + s.y * Math.abs(g.y) + s.z * Math.abs(g.z), a = e.dot(g), l = i.dot(g),
          c = r.dot(g);
        if (Math.max(-Math.max(a, l, c), Math.min(a, l, c)) > o) return !1
      }
      return !0
    }

    i.default = _
  }, {"./Vector3.js": 125}],
  114: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Vector3.js")), s = n(t("./Matrix4.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function o() {
      let t = 0, e = 0, i = 0, r = 0;
      return {
        initCatmullRom: function (s, n, o, a, l) {
          !function (s, n, o, a) {
            t = s, e = o, i = -3 * s + 3 * n - 2 * o - a, r = 2 * s - 2 * n + o + a
          }(n, o, l * (o - s), l * (a - n))
        }, calc: function (s) {
          let n = s * s;
          return t + e * s + i * n + r * (n * s)
        }
      }
    }

    let a = new r.default, l = new o, c = new o, h = new o;
    i.default = class {
      constructor(t, e, i, r) {
        this._points = t, this._normals = e, this._forwards = i, this._scales = r, this._closed = !1, this._tension = .5
      }

      get points() {
        return this._points
      }

      get normals() {
        return this._normals
      }

      get forwards() {
        return this._forwards
      }

      getPoint(t) {
        let e, i, s, n, o = new r.default, u = this._points, d = u.length, f = (d - (this._closed ? 0 : 1)) * t,
          p = Math.floor(f), m = f - p;
        return this._closed ? p += p > 0 ? 0 : (Math.floor(Math.abs(p) / d) + 1) * d : 0 === m && p === d - 1 && (p = d - 2, m = 1), this._closed || p > 0 ? e = u[(p - 1) % d] : (a.subVectors(u[0], u[1]).add(u[0]), e = a), i = u[p % d], s = u[(p + 1) % d], this._closed || p + 2 < d ? n = u[(p + 2) % d] : (a.subVectors(u[d - 1], u[d - 2]).add(u[d - 1]), n = a), l.initCatmullRom(e.x, i.x, s.x, n.x, this._tension), c.initCatmullRom(e.y, i.y, s.y, n.y, this._tension), h.initCatmullRom(e.z, i.z, s.z, n.z, this._tension), o.set(l.calc(m), c.calc(m), h.calc(m)), o
      }

      getPointAt(t) {
        const e = this.getUtoTmapping(t);
        return this.getPoint(e)
      }

      getTangent(t) {
        let e = t - 1e-4, i = t + 1e-4;
        e < 0 && (e = 0), i > 1 && (i = 1);
        let s = this.getPoint(e), n = this.getPoint(i), o = new r.default;
        return o.copy(n).sub(s).normalize(), o
      }

      getTangentAt(t) {
        const e = this.getUtoTmapping(t);
        return this.getTangent(e)
      }

      getLengths() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
        if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1) return this.cacheArcLengths;
        let e, i = [], r = this.getPoint(0), s = 0;
        i.push(0);
        for (let n = 1; n <= t; n++) e = this.getPoint(n / t), s += e.distanceTo(r), i.push(s), r = e;
        return this.cacheArcLengths = i, i
      }

      getUtoTmapping(t, e) {
        const i = this.getLengths();
        let r, s = 0, n = i.length;
        r = e || t * i[n - 1];
        let o, a = 0, l = n - 1;
        for (; a <= l;) if (s = Math.floor(a + (l - a) / 2), o = i[s] - r, o < 0) a = s + 1; else {
          if (!(o > 0)) {
            l = s;
            break
          }
          l = s - 1
        }
        if (s = l, i[s] === r) return s / (n - 1);
        let c = i[s];
        return (s + (r - c) / (i[s + 1] - c)) / (n - 1)
      }

      lerpData(t, e) {
        let i = t.length, r = (i - (this._closed ? 0 : 1)) * e, s = Math.floor(r), n = r - s;
        return this._closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / i) + 1) * i : 0 === n && s === i - 1 && (s = i - 2, n = 1), {
          p1: t[s % i],
          p2: t[(s + 1) % i],
          weight: n
        }
      }

      getLerpVector(t, e) {
        let i = this.lerpData(t, e);
        return (new r.default).lerpVectors(i.p1, i.p2, i.weight)
      }

      getNormal(t) {
        return this.getLerpVector(this._normals, t)
      }

      getForward(t) {
        return this.getLerpVector(this._forwards, t)
      }

      getScale(t) {
        let e = this.lerpData(this._scales, t);
        return Math.lerp(e.p1, e.p2, e.weight)
      }

      computeFrenetFrames(t) {
        let e = new r.default, i = [], n = [], o = [], a = new r.default, l = new s.default;
        for (let e = 0; e <= t; e++) {
          const s = e / t;
          i[e] = this.getTangentAt(s, new r.default), i[e].normalize()
        }
        n[0] = new r.default, o[0] = new r.default;
        let c = Number.MAX_VALUE;
        const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
        h <= c && (c = h, e.set(1, 0, 0)), u <= c && (c = u, e.set(0, 1, 0)), d <= c && e.set(0, 0, 1), a.crossVectors(i[0], e).normalize(), n[0].crossVectors(i[0], a), o[0].crossVectors(i[0], n[0]);
        for (let e = 1; e <= t; e++) {
          if (n[e] = n[e - 1].clone(), o[e] = o[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
            a.normalize();
            const t = Math.acos(Math.clamp(i[e - 1].dot(i[e]), -1, 1));
            n[e].applyMatrix4(l.makeRotationAxis(a, t))
          }
          o[e].crossVectors(i[e], n[e])
        }
        return {tangents: i, normals: n, binormals: o}
      }
    }
  }, {"./Matrix4.js": 117, "./Vector3.js": 125}],
  115: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = s(t("./Vector3.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let n = new (s(t("./Matrix4.js")).default);

    class o {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.x = t, this.y = e, this.z = i
      }

      set(t, e, i) {
        return this.x = t, this.y = e, this.z = i, this
      }

      clone() {
        return new o(this.x, this.y, this.z, this.order)
      }

      copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
      }

      setFromRotationMatrix(t) {
        let e = Math.clamp, i = t.elements, r = i[0], s = i[4], n = i[8], o = i[5], a = i[9], l = i[6], c = i[10];
        return this.y = Math.asin(e(n, -1, 1)), Math.abs(n) < .9999999 ? (this.x = Math.atan2(-a, c), this.z = Math.atan2(-s, r)) : (this.x = Math.atan2(l, o), this.z = 0), this
      }

      setFromQuaternion(t) {
        return n.makeRotationFromQuaternion(t), this.setFromRotationMatrix(n)
      }

      setFromVector3(t) {
        return this.set(t.x, t.y, t.z)
      }

      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
      }

      fromArray(t) {
        return this.x = t[0], this.y = t[1], this.z = t[2], this
      }

      toArray() {
        return [this.x, this.y, this.z]
      }

      toVector3() {
        return new r.default(this.x, this.y, this.z)
      }
    }

    i.default = o
  }, {"./Matrix4.js": 117, "./Vector3.js": 125}],
  116: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
      }

      set(t, e, i, r, s, n, o, a, l) {
        let c = this.elements;
        return c[0] = t, c[1] = r, c[2] = o, c[3] = e, c[4] = s, c[5] = a, c[6] = i, c[7] = n, c[8] = l, this
      }

      identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
      }

      clone() {
        return (new r).fromArray(this.elements)
      }

      copy(t) {
        let e = this.elements, i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
      }

      extractBasis(t, e, i) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
      }

      setFromMatrix4(t) {
        let e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      }

      multiply(t) {
        return this.multiplyMatrices(this, t)
      }

      premultiply(t) {
        return this.multiplyMatrices(t, this)
      }

      multiplyMatrices(t, e) {
        let i = t.elements, r = e.elements, s = this.elements, n = i[0], o = i[3], a = i[6], l = i[1], c = i[4],
          h = i[7], u = i[2], d = i[5], f = i[8], p = r[0], m = r[3], g = r[6], _ = r[1], y = r[4], v = r[7], b = r[2],
          x = r[5], j = r[8];
        return s[0] = n * p + o * _ + a * b, s[3] = n * m + o * y + a * x, s[6] = n * g + o * v + a * j, s[1] = l * p + c * _ + h * b, s[4] = l * m + c * y + h * x, s[7] = l * g + c * v + h * j, s[2] = u * p + d * _ + f * b, s[5] = u * m + d * y + f * x, s[8] = u * g + d * v + f * j, this
      }

      multiplyScalar(t) {
        let e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
      }

      determinant() {
        let t = this.elements, e = t[0], i = t[1], r = t[2], s = t[3], n = t[4], o = t[5], a = t[6], l = t[7], c = t[8];
        return e * n * c - e * o * l - i * s * c + i * o * a + r * s * l - r * n * a
      }

      getInverse(t) {
        let e = t.elements, i = this.elements, r = e[0], s = e[1], n = e[2], o = e[3], a = e[4], l = e[5], c = e[6],
          h = e[7], u = e[8], d = u * a - l * h, f = l * c - u * o, p = h * o - a * c, m = r * d + s * f + n * p;
        if (0 === m) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let g = 1 / m;
        return i[0] = d * g, i[1] = (n * h - u * s) * g, i[2] = (l * s - n * a) * g, i[3] = f * g, i[4] = (u * r - n * c) * g, i[5] = (n * o - l * r) * g, i[6] = p * g, i[7] = (s * c - h * r) * g, i[8] = (a * r - s * o) * g, this
      }

      transpose() {
        let t, e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
      }

      getNormalMatrix(t) {
        return this.setFromMatrix4(t).getInverse(this).transpose()
      }

      transposeIntoArray(t) {
        let e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
      }

      setUvTransform(t, e, i, r, s, n, o) {
        let a = Math.cos(s), l = Math.sin(s);
        this.set(i * a, i * l, -i * (a * n + l * o) + n + t, -r * l, r * a, -r * (-l * n + a * o) + o + e, 0, 0, 1)
      }

      scale(t, e) {
        let i = this.elements;
        return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
      }

      rotate(t) {
        let e = Math.cos(t), i = Math.sin(t), r = this.elements, s = r[0], n = r[3], o = r[6], a = r[1], l = r[4],
          c = r[7];
        return r[0] = e * s + i * a, r[3] = e * n + i * l, r[6] = e * o + i * c, r[1] = -i * s + e * a, r[4] = -i * n + e * l, r[7] = -i * o + e * c, this
      }

      translate(t, e) {
        let i = this.elements;
        return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
      }

      equals(t) {
        let e = this.elements, i = t.elements;
        for (let t = 0; t < 9; t++) if (e[t] !== i[t]) return !1;
        return !0
      }

      fromArray(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
        return this
      }

      toArray() {
        return [...this.elements]
      }
    }

    i.default = r
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  117: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Vector3.js")) && r.__esModule ? r : {default: r};

    class n {
      constructor() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }

      set(t, e, i, r, s, n, o, a, l, c, h, u, d, f, p, m) {
        let g = this.elements;
        return g[0] = t, g[4] = e, g[8] = i, g[12] = r, g[1] = s, g[5] = n, g[9] = o, g[13] = a, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = f, g[11] = p, g[15] = m, this
      }

      identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }

      clone() {
        return (new n).fromArray(this.elements)
      }

      copy(t) {
        let e = this.elements, i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
      }

      copyPosition(t) {
        let e = this.elements, i = t.elements;
        return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
      }

      extractBasis(t, e, i) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
      }

      makeBasis(t, e, i) {
        return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
      }

      extractRotation(t) {
        let e = this.elements, i = t.elements, r = 1 / o.setFromMatrixColumn(t, 0).length(),
          s = 1 / o.setFromMatrixColumn(t, 1).length(), n = 1 / o.setFromMatrixColumn(t, 2).length();
        return e[0] = i[0] * r, e[1] = i[1] * r, e[2] = i[2] * r, e[3] = 0, e[4] = i[4] * s, e[5] = i[5] * s, e[6] = i[6] * s, e[7] = 0, e[8] = i[8] * n, e[9] = i[9] * n, e[10] = i[10] * n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }

      makeRotationFromEuler(t) {
        let e = this.elements, i = t.x, r = t.y, s = t.z, n = Math.cos(i), o = Math.sin(i), a = Math.cos(r),
          l = Math.sin(r), c = Math.cos(s), h = Math.sin(s), u = n * c, d = n * h, f = o * c, p = o * h;
        return e[0] = a * c, e[4] = -a * h, e[8] = l, e[1] = d + f * l, e[5] = u - p * l, e[9] = -o * a, e[2] = p - u * l, e[6] = f + d * l, e[10] = n * a, e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }

      makeRotationFromQuaternion(t) {
        return this.compose(l, t, c)
      }

      lookAt(t, e, i) {
        let r = this.elements;
        return d.subVectors(t, e), 0 === d.lengthSq() && (d.z = 1), d.normalize(), h.crossVectors(i, d), 0 === h.lengthSq() && (1 === Math.abs(i.z) ? d.x += 1e-4 : d.z += 1e-4, d.normalize(), h.crossVectors(i, d)), h.normalize(), u.crossVectors(d, h), r[0] = h.x, r[4] = u.x, r[8] = d.x, r[1] = h.y, r[5] = u.y, r[9] = d.y, r[2] = h.z, r[6] = u.z, r[10] = d.z, this
      }

      multiply(t) {
        return this.multiplyMatrices(this, t)
      }

      premultiply(t) {
        return this.multiplyMatrices(t, this)
      }

      multiplyMatrices(t, e) {
        let i = t.elements, r = e.elements, s = this.elements, n = i[0], o = i[4], a = i[8], l = i[12], c = i[1],
          h = i[5], u = i[9], d = i[13], f = i[2], p = i[6], m = i[10], g = i[14], _ = i[3], y = i[7], v = i[11],
          b = i[15], x = r[0], j = r[4], w = r[8], M = r[12], S = r[1], O = r[5], P = r[9], T = r[13], C = r[2],
          A = r[6], E = r[10], k = r[14], L = r[3], F = r[7], I = r[11], z = r[15];
        return s[0] = n * x + o * S + a * C + l * L, s[4] = n * j + o * O + a * A + l * F, s[8] = n * w + o * P + a * E + l * I, s[12] = n * M + o * T + a * k + l * z, s[1] = c * x + h * S + u * C + d * L, s[5] = c * j + h * O + u * A + d * F, s[9] = c * w + h * P + u * E + d * I, s[13] = c * M + h * T + u * k + d * z, s[2] = f * x + p * S + m * C + g * L, s[6] = f * j + p * O + m * A + g * F, s[10] = f * w + p * P + m * E + g * I, s[14] = f * M + p * T + m * k + g * z, s[3] = _ * x + y * S + v * C + b * L, s[7] = _ * j + y * O + v * A + b * F, s[11] = _ * w + y * P + v * E + b * I, s[15] = _ * M + y * T + v * k + b * z, this
      }

      multiplyScalar(t) {
        let e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
      }

      determinant() {
        let t = this.elements, e = t[0], i = t[4], r = t[8], s = t[12], n = t[1], o = t[5], a = t[9], l = t[13],
          c = t[2], h = t[6], u = t[10], d = t[14];
        return t[3] * (+s * a * h - r * l * h - s * o * u + i * l * u + r * o * d - i * a * d) + t[7] * (+e * a * d - e * l * u + s * n * u - r * n * d + r * l * c - s * a * c) + t[11] * (+e * l * h - e * o * d - s * n * h + i * n * d + s * o * c - i * l * c) + t[15] * (-r * o * c - e * a * h + e * o * u + r * n * h - i * n * u + i * a * c)
      }

      transpose() {
        let t, e = this.elements;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
      }

      setPosition(t, e, i) {
        let r = this.elements;
        return void 0 !== e ? (r[12] = t, r[13] = e, r[14] = i) : (r[12] = t.x, r[13] = t.y, r[14] = t.z), this
      }

      getInverse(t) {
        let e = this.elements, i = t.elements, r = i[0], s = i[1], n = i[2], o = i[3], a = i[4], l = i[5], c = i[6],
          h = i[7], u = i[8], d = i[9], f = i[10], p = i[11], m = i[12], g = i[13], _ = i[14], y = i[15],
          v = d * _ * h - g * f * h + g * c * p - l * _ * p - d * c * y + l * f * y,
          b = m * f * h - u * _ * h - m * c * p + a * _ * p + u * c * y - a * f * y,
          x = u * g * h - m * d * h + m * l * p - a * g * p - u * l * y + a * d * y,
          j = m * d * c - u * g * c - m * l * f + a * g * f + u * l * _ - a * d * _, w = r * v + s * b + n * x + o * j;
        if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        let M = 1 / w;
        return e[0] = v * M, e[1] = (g * f * o - d * _ * o - g * n * p + s * _ * p + d * n * y - s * f * y) * M, e[2] = (l * _ * o - g * c * o + g * n * h - s * _ * h - l * n * y + s * c * y) * M, e[3] = (d * c * o - l * f * o - d * n * h + s * f * h + l * n * p - s * c * p) * M, e[4] = b * M, e[5] = (u * _ * o - m * f * o + m * n * p - r * _ * p - u * n * y + r * f * y) * M, e[6] = (m * c * o - a * _ * o - m * n * h + r * _ * h + a * n * y - r * c * y) * M, e[7] = (a * f * o - u * c * o + u * n * h - r * f * h - a * n * p + r * c * p) * M, e[8] = x * M, e[9] = (m * d * o - u * g * o - m * s * p + r * g * p + u * s * y - r * d * y) * M, e[10] = (a * g * o - m * l * o + m * s * h - r * g * h - a * s * y + r * l * y) * M, e[11] = (u * l * o - a * d * o - u * s * h + r * d * h + a * s * p - r * l * p) * M, e[12] = j * M, e[13] = (u * g * n - m * d * n + m * s * f - r * g * f - u * s * _ + r * d * _) * M, e[14] = (m * l * n - a * g * n - m * s * c + r * g * c + a * s * _ - r * l * _) * M, e[15] = (a * d * n - u * l * n + u * s * c - r * d * c - a * s * f + r * l * f) * M, this
      }

      scale(t) {
        let e = this.elements, i = t.x, r = t.y, s = t.z;
        return e[0] *= i, e[4] *= r, e[8] *= s, e[1] *= i, e[5] *= r, e[9] *= s, e[2] *= i, e[6] *= r, e[10] *= s, e[3] *= i, e[7] *= r, e[11] *= s, this
      }

      getMaxScaleOnAxis() {
        let t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, r))
      }

      makeTranslation(t, e, i) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
      }

      makeRotationAxis(t, e) {
        let i = Math.cos(e), r = Math.sin(e), s = 1 - i, n = t.x, o = t.y, a = t.z, l = s * n, c = s * o;
        return this.set(l * n + i, l * o - r * a, l * a + r * o, 0, l * o + r * a, c * o + i, c * a - r * n, 0, l * a - r * o, c * a + r * n, s * a * a + i, 0, 0, 0, 0, 1), this
      }

      makeScale(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
      }

      compose(t, e, i) {
        let r = this.elements, s = e.x, n = e.y, o = e.z, a = e.w, l = s + s, c = n + n, h = o + o, u = s * l,
          d = s * c, f = s * h, p = n * c, m = n * h, g = o * h, _ = a * l, y = a * c, v = a * h, b = i.x, x = i.y,
          j = i.z;
        return r[0] = (1 - (p + g)) * b, r[1] = (d + v) * b, r[2] = (f - y) * b, r[3] = 0, r[4] = (d - v) * x, r[5] = (1 - (u + g)) * x, r[6] = (m + _) * x, r[7] = 0, r[8] = (f + y) * j, r[9] = (m - _) * j, r[10] = (1 - (u + p)) * j, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this
      }

      decompose(t, e, i) {
        let r = this.elements, s = o.set(r[0], r[1], r[2]).length(), n = o.set(r[4], r[5], r[6]).length(),
          l = o.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], a.copy(this);
        let c = 1 / s, h = 1 / n, u = 1 / l;
        return a.elements[0] *= c, a.elements[1] *= c, a.elements[2] *= c, a.elements[4] *= h, a.elements[5] *= h, a.elements[6] *= h, a.elements[8] *= u, a.elements[9] *= u, a.elements[10] *= u, e.setFromRotationMatrix(a), i.x = s, i.y = n, i.z = l, this
      }

      makePerspective(t, e, i, r, s, n) {
        let o = this.elements, a = 2 * s / (e - t), l = 2 * s / (i - r), c = (e + t) / (e - t), h = (i + r) / (i - r),
          u = -(n + s) / (n - s), d = -2 * n * s / (n - s);
        return o[0] = a, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
      }

      makeOrthographic(t, e, i, r, s, n) {
        let o = this.elements, a = 1 / (e - t), l = 1 / (i - r), c = 1 / (n - s), h = (e + t) * a, u = (i + r) * l,
          d = (n + s) * c;
        return o[0] = 2 * a, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
      }

      equals(t) {
        let e = this.elements, i = t.elements;
        for (let t = 0; t < 16; t++) if (e[t] !== i[t]) return !1;
        return !0
      }

      fromArray(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (let i = 0; i < 16; i++) this.elements[i] = t[e + i];
        return this
      }

      toArray(t, e) {
        if (void 0 === t && void 0 === e) return [...this.elements];
        const i = this.elements;
        return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
      }
    }

    i.default = n;
    let o = new s.default, a = new n, l = new s.default(0, 0, 0), c = new s.default(1, 1, 1), h = new s.default,
      u = new s.default, d = new s.default
  }, {
    "./Vector3.js": 125,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  118: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const r = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
      s = [...r, ...r];

    class n {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
        this._seedValue = n.xorshift(t), this.noise = this.noise.bind(this), this.setSeed = this.setSeed.bind(this)
      }

      static xorshift(t) {
        let e = t ^ t >> 12;
        return e ^= e << 25, e ^= e >> 27, 2 * e
      }

      static lerp(t, e, i) {
        return e + t * (i - e)
      }

      static fade(t) {
        return t * t * t * (t * (6 * t - 15) + 10)
      }

      static grad(t, e, i, r) {
        var s = 15 & t, n = s < 8 ? e : i, o = s < 4 ? i : 12 === s || 14 === s ? e : r;
        return (0 == (1 & s) ? n : -n) + (0 == (2 & s) ? o : -o)
      }

      setSeed() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
        this._seedValue = n.xorshift(t)
      }

      noise(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = t + this._seedValue,
          o = e + this._seedValue, a = i + this._seedValue;
        const l = 255 & Math.floor(r), c = 255 & Math.floor(o), h = 255 & Math.floor(a);
        r -= Math.floor(r), o -= Math.floor(o), a -= Math.floor(a);
        const u = n.fade(r), d = n.fade(o), f = n.fade(a), p = s[l] + c, m = s[p] + h, g = s[p + 1] + h,
          _ = s[l + 1] + c, y = s[_] + h, v = s[_ + 1] + h;
        return n.lerp(f, n.lerp(d, n.lerp(u, n.grad(s[m], r, o, a), n.grad(s[y], r - 1, o, a)), n.lerp(u, n.grad(s[g], r, o - 1, a), n.grad(s[v], r - 1, o - 1, a))), n.lerp(d, n.lerp(u, n.grad(s[m + 1], r, o, a - 1), n.grad(s[y + 1], r - 1, o, a - 1)), n.lerp(u, n.grad(s[g + 1], r, o - 1, a - 1), n.grad(s[v + 1], r - 1, o - 1, a - 1))))
      }
    }

    i.default = n
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  119: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Vector3.js")), s = n(t("./Matrix3.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new r.default, a = new r.default, l = new s.default;

    class c {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new r.default(1, 0, 0),
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.normal = t, this.constant = e
      }

      set(t, e) {
        return this.normal.copy(t), this.constant = e, this
      }

      setComponents(t, e, i, r) {
        return this.normal.set(t, e, i), this.constant = r, this
      }

      setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this
      }

      setFromCoplanarPoints(t, e, i) {
        let r = o.subVectors(i, e).cross(a.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, t), this
      }

      clone() {
        return new c(this.normal, this.constant)
      }

      copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this
      }

      normalize() {
        let t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this
      }

      negate() {
        return this.constant *= -1, this.normal.negate(), this
      }

      distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
      }

      distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
      }

      projectPoint(t, e) {
        return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
      }

      intersectLine(t, e) {
        let i = t.delta(o), r = this.normal.dot(i);
        if (0 === r) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
        let s = -(t.start.dot(this.normal) + this.constant) / r;
        return s < 0 || s > 1 ? void 0 : e.copy(i).multiplyScalar(s).add(t.start)
      }

      intersectsLine(t) {
        let e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
        return e < 0 && i > 0 || i < 0 && e > 0
      }

      intersectsBox(t) {
        return t.intersectsPlane(this)
      }

      intersectsSphere(t) {
        return t.intersectsPlane(this)
      }

      coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
      }

      applyMatrix4(t, e) {
        let i = e || l.getNormalMatrix(t), r = this.coplanarPoint(o).applyMatrix4(t),
          s = this.normal.applyMatrix3(i).normalize();
        return this.constant = -r.dot(s), this
      }

      translate(t) {
        return this.constant -= t.dot(this.normal), this
      }

      equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
      }
    }

    i.default = c
  }, {"./Matrix3.js": 116, "./Vector3.js": 125}],
  120: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.x = t, this.y = e, this.z = i, this.w = r
      }

      set(t, e, i, r) {
        return this.x = t, this.y = e, this.z = i, this.w = r, this
      }

      clone() {
        return new r(this.x, this.y, this.z, this.w)
      }

      copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
      }

      setFromEuler(t) {
        let e = t.x, i = t.y, r = t.z, s = Math.cos, n = Math.sin, o = s(e / 2), a = s(i / 2), l = s(r / 2),
          c = n(e / 2), h = n(i / 2), u = n(r / 2);
        return this.x = c * a * l + o * h * u, this.y = o * h * l - c * a * u, this.z = o * a * u + c * h * l, this.w = o * a * l - c * h * u, this
      }

      setFromAxisAngle(t, e) {
        let i = e / 2, r = Math.sin(i);
        return this.x = t.x * r, this.y = t.y * r, this.z = t.z * r, this.w = Math.cos(i), this
      }

      setFromRotationMatrix(t) {
        let e, i = t.elements, r = i[0], s = i[4], n = i[8], o = i[1], a = i[5], l = i[9], c = i[2], h = i[6],
          u = i[10], d = r + a + u;
        return d > 0 ? (e = .5 / Math.sqrt(d + 1), this.w = .25 / e, this.x = (h - l) * e, this.y = (n - c) * e, this.z = (o - s) * e) : r > a && r > u ? (e = 2 * Math.sqrt(1 + r - a - u), this.w = (h - l) / e, this.x = .25 * e, this.y = (s + o) / e, this.z = (n + c) / e) : a > u ? (e = 2 * Math.sqrt(1 + a - r - u), this.w = (n - c) / e, this.x = (s + o) / e, this.y = .25 * e, this.z = (l + h) / e) : (e = 2 * Math.sqrt(1 + u - r - a), this.w = (o - s) / e, this.x = (n + c) / e, this.y = (l + h) / e, this.z = .25 * e), this
      }

      setFromUnitVectors(t, e) {
        let i = t.dot(e) + 1;
        return i < 1e-6 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this.x = -t.y, this.y = t.x, this.z = 0, this.w = i) : (this.x = 0, this.y = -t.z, this.z = t.y, this.w = i)) : (this.x = t.y * e.z - t.z * e.y, this.y = t.z * e.x - t.x * e.z, this.z = t.x * e.y - t.y * e.x, this.w = i), this.normalize()
      }

      angleTo(t) {
        return 2 * Math.acos(Math.abs(Math.clamp(this.dot(t), -1, 1)))
      }

      rotateTowards(t, e) {
        let i = this.angleTo(t);
        if (0 === i) return this;
        let r = Math.min(1, e / i);
        return this.slerp(t, r), this
      }

      inverse() {
        return this.conjugate()
      }

      conjugate() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this
      }

      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
      }

      lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      }

      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      }

      normalize() {
        let t = this.length();
        return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (t = 1 / t, this.x = this.x * t, this.y = this.y * t, this.z = this.z * t, this.w = this.w * t), this
      }

      multiply(t) {
        return this.multiplyQuaternions(this, t)
      }

      premultiply(t) {
        return this.multiplyQuaternions(t, this)
      }

      multiplyQuaternions(t, e) {
        let i = t.x, r = t.y, s = t.z, n = t.w, o = e.x, a = e.y, l = e.z, c = e.w;
        return this.x = i * c + n * o + r * l - s * a, this.y = r * c + n * a + s * o - i * l, this.z = s * c + n * l + i * a - r * o, this.w = n * c - i * o - r * a - s * l, this
      }

      slerp(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        let i = this.x, r = this.y, s = this.z, n = this.w, o = n * t.w + i * t.x + r * t.y + s * t.z;
        if (o < 0 ? (this.w = -t.w, this.x = -t.x, this.y = -t.y, this.z = -t.z, o = -o) : this.copy(t), o >= 1) return this.w = n, this.x = i, this.y = r, this.z = s, this;
        let a = 1 - o * o;
        if (a <= Number.EPSILON) {
          let t = 1 - e;
          return this.w = t * n + e * this.w, this.x = t * i + e * this.x, this.y = t * r + e * this.y, this.z = t * s + e * this.z, this.normalize(), this
        }
        let l = Math.sqrt(a), c = Math.atan2(l, o), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
        return this.w = n * h + this.w * u, this.x = i * h + this.x * u, this.y = r * h + this.y * u, this.z = s * h + this.z * u, this
      }

      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      }

      fromArray(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
      }

      toArray() {
        return [this.x, this.y, this.z, this.w]
      }
    }

    i.default = r
  }, {}],
  121: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Vector3.js")) && r.__esModule ? r : {default: r};
    let n = new s.default, o = new s.default, a = new s.default, l = new s.default, c = new s.default,
      h = new s.default, u = new s.default;

    class d {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.default(0, 0, -1);
        this.origin = t, this.direction = e
      }

      set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this
      }

      clone() {
        return new d.copy(this)
      }

      copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this
      }

      at(t) {
        return n.copy(this.direction).multiplyScalar(t).add(this.origin)
      }

      lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this
      }

      recast(t) {
        return this.origin.copy(this.at(t)), this
      }

      closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        let i = e.dot(this.direction);
        return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
      }

      distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
      }

      distanceSqToPoint(t) {
        let e = n.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (n.copy(this.direction).multiplyScalar(e).add(this.origin), n.distanceToSquared(t))
      }

      distanceSqToSegment(t, e, i, r) {
        o.copy(t).add(e).multiplyScalar(.5), a.copy(e).sub(t).normalize(), l.copy(this.origin).sub(o);
        let s, n, c, h, u = .5 * t.distanceTo(e), d = -this.direction.dot(a), f = l.dot(this.direction), p = -l.dot(a),
          m = l.lengthSq(), g = Math.abs(1 - d * d);
        if (g > 0) if (s = d * p - f, n = d * f - p, h = u * g, s >= 0) if (n >= -h) if (n <= h) {
          let t = 1 / g;
          s *= t, n *= t, c = s * (s + d * n + 2 * f) + n * (d * s + n + 2 * p) + m
        } else n = u, s = Math.max(0, -(d * n + f)), c = -s * s + n * (n + 2 * p) + m; else n = -u, s = Math.max(0, -(d * n + f)), c = -s * s + n * (n + 2 * p) + m; else n <= -h ? (s = Math.max(0, -(-d * u + f)), n = s > 0 ? -u : Math.min(Math.max(-u, -p), u), c = -s * s + n * (n + 2 * p) + m) : n <= h ? (s = 0, n = Math.min(Math.max(-u, -p), u), c = n * (n + 2 * p) + m) : (s = Math.max(0, -(d * u + f)), n = s > 0 ? u : Math.min(Math.max(-u, -p), u), c = -s * s + n * (n + 2 * p) + m); else n = d > 0 ? -u : u, s = Math.max(0, -(d * n + f)), c = -s * s + n * (n + 2 * p) + m;
        return i && i.copy(this.direction).multiplyScalar(s).add(this.origin), r && r.copy(a).multiplyScalar(n).add(o), c
      }

      intersectSphere(t) {
        n.subVectors(t.center, this.origin);
        let e = n.dot(this.direction), i = n.dot(n) - e * e, r = t.radius * t.radius;
        if (i > r) return null;
        let s = Math.sqrt(r - i), o = e - s, a = e + s;
        return o < 0 && a < 0 ? null : o < 0 ? this.at(a) : this.at(o)
      }

      intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
      }

      distanceToPlane(t) {
        let e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        let i = -(this.origin.dot(t.normal) + t.constant) / e;
        return i >= 0 ? i : null
      }

      intersectPlane(t) {
        let e = this.distanceToPlane(t);
        return null === e ? null : this.at(e)
      }

      intersectsPlane(t) {
        let e = t.distanceToPoint(this.origin);
        return 0 === e || t.normal.dot(this.direction) * e < 0
      }

      intersectBox(t) {
        let e, i, r, s, n, o, a = 1 / this.direction.x, l = 1 / this.direction.y, c = 1 / this.direction.z,
          h = this.origin;
        return a >= 0 ? (e = (t.min.x - h.x) * a, i = (t.max.x - h.x) * a) : (e = (t.max.x - h.x) * a, i = (t.min.x - h.x) * a), l >= 0 ? (r = (t.min.y - h.y) * l, s = (t.max.y - h.y) * l) : (r = (t.max.y - h.y) * l, s = (t.min.y - h.y) * l), e > s || r > i ? null : ((r > e || e != e) && (e = r), (s < i || i != i) && (i = s), c >= 0 ? (n = (t.min.z - h.z) * c, o = (t.max.z - h.z) * c) : (n = (t.max.z - h.z) * c, o = (t.min.z - h.z) * c), e > o || n > i ? null : ((n > e || e != e) && (e = n), (o < i || i != i) && (i = o), i < 0 ? null : this.at(e >= 0 ? e : i)))
      }

      intersectsBox(t) {
        return null !== this.intersectBox(t, n)
      }

      intersectTriangle(t, e, i, r) {
        c.subVectors(e, t), h.subVectors(i, t), u.crossVectors(c, h);
        let s, n = this.direction.dot(u);
        if (n > 0) {
          if (r) return null;
          s = 1
        } else {
          if (!(n < 0)) return null;
          s = -1, n = -n
        }
        l.subVectors(this.origin, t);
        let o = s * this.direction.dot(h.crossVectors(l, h));
        if (o < 0) return null;
        let a = s * this.direction.dot(c.cross(l));
        if (a < 0) return null;
        if (o + a > n) return null;
        let d = -s * l.dot(u);
        return d < 0 ? null : this.at(d / n)
      }

      applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      }

      equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
      }
    }

    i.default = d
  }, {"./Vector3.js": 125}],
  122: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Box3.js")), s = n(t("./Vector3.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new r.default;

    class a {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s.default,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        this.center = t, this.radius = e
      }

      set(t, e) {
        return this.center.copy(t), this.radius = e, this
      }

      setFromPoints(t, e) {
        let i = this.center;
        void 0 !== e ? i.copy(e) : o.setFromPoints(t).getCenter(i);
        let r = 0;
        for (let e = 0, s = t.length; e < s; e++) r = Math.max(r, i.distanceToSquared(t[e]));
        return this.radius = Math.sqrt(r), this
      }

      clone() {
        return (new a).copy(this)
      }

      copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this
      }

      isEmpty() {
        return this.radius < 0
      }

      makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this
      }

      containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
      }

      distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
      }

      intersectsSphere(t) {
        let e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
      }

      intersectsBox(t) {
        return t.intersectsSphere(this)
      }

      intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
      }

      clampPoint(t, e) {
        let i = this.center.distanceToSquared(t);
        return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
      }

      getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
      }

      applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
      }

      translate(t) {
        return this.center.add(t), this
      }

      equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
      }
    }

    i.default = a
  }, {"./Box3.js": 113, "./Vector3.js": 125}],
  123: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.radius = t, this.phi = e, this.theta = i, this
      }

      set(t, e, i) {
        return this.radius = t, this.phi = e, this.theta = i, this
      }

      clone() {
        return (new r).copy(this)
      }

      copy(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
      }

      makeSafe() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
      }

      setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
      }

      setFromCartesianCoords(t, e, i) {
        return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(Math.clamp(e / this.radius, -1, 1))), this
      }
    }

    i.default = r
  }, {}],
  124: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = t, this.y = e
      }

      set(t, e) {
        return this.x = t, this.y = e, this
      }

      clone() {
        return new r(this.x, this.y)
      }

      copy(t) {
        return this.x = t.x, this.y = t.y, this
      }

      add(t) {
        return this.x += t.x, this.y += t.y, this
      }

      addScalar(t) {
        return this.x += t, this.y += t, this
      }

      addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this
      }

      addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this
      }

      sub(t) {
        return this.x -= t.x, this.y -= t.y, this
      }

      subScalar(t) {
        return this.x -= t, this.y -= t, this
      }

      subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this
      }

      multiply(t) {
        return this.x *= t.x, this.y *= t.y, this
      }

      multiplyScalar(t) {
        return this.x *= t, this.y *= t, this
      }

      divide(t) {
        return this.x /= t.x, this.y /= t.y, this
      }

      divideScalar(t) {
        return this.multiplyScalar(1 / t)
      }

      applyMatrix3(t) {
        let e = this.x, i = this.y, r = t.elements;
        return this.x = r[0] * e + r[3] * i + r[6], this.y = r[1] * e + r[4] * i + r[7], this
      }

      min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
      }

      max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
      }

      clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
      }

      clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
      }

      clampLength(t, e) {
        let i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
      }

      floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
      }

      ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
      }

      round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
      }

      roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
      }

      negate() {
        return this.x = -this.x, this.y = -this.y, this
      }

      dot(t) {
        return this.x * t.x + this.y * t.y
      }

      cross(t) {
        return this.x * t.y - this.y * t.x
      }

      lengthSq() {
        return this.x * this.x + this.y * this.y
      }

      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }

      manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
      }

      normalize() {
        return this.divideScalar(this.length() || 1)
      }

      angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
      }

      distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
      }

      distanceToSquared(t) {
        let e = this.x - t.x, i = this.y - t.y;
        return e * e + i * i
      }

      manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
      }

      setLength(t) {
        return this.normalize().multiplyScalar(t)
      }

      lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
      }

      lerpVectors(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
      }

      equals(t) {
        return t.x === this.x && t.y === this.y
      }

      fromArray(t, e) {
        return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
      }

      toArray() {
        return [this.x, this.y]
      }

      rotateAround(t, e) {
        let i = Math.cos(e), r = Math.sin(e), s = this.x - t.x, n = this.y - t.y;
        return this.x = s * i - n * r + t.x, this.y = s * r + n * i + t.y, this
      }

      random() {
        return this.x = Math.random(), this.y = Math.random(), this
      }
    }

    i.default = r
  }, {}],
  125: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Quaternion.js")) && r.__esModule ? r : {default: r};

    class n {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.x = t, this.y = e, this.z = i
      }

      set(t, e, i) {
        return this.x = t, this.y = e, this.z = i, this
      }

      clone() {
        return new n(this.x, this.y, this.z)
      }

      copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
      }

      add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this
      }

      addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this
      }

      addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
      }

      addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
      }

      sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
      }

      subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this
      }

      subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
      }

      multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
      }

      multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this
      }

      multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
      }

      applyEuler(t) {
        return this.applyQuaternion(a.setFromEuler(t))
      }

      applyAxisAngle(t, e) {
        return this.applyQuaternion(a.setFromAxisAngle(t, e))
      }

      applyMatrix3(t) {
        let e = this.x, i = this.y, r = this.z, s = t.elements;
        return this.x = s[0] * e + s[3] * i + s[6] * r, this.y = s[1] * e + s[4] * i + s[7] * r, this.z = s[2] * e + s[5] * i + s[8] * r, this
      }

      applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
      }

      applyMatrix4(t) {
        let e = this.x, i = this.y, r = this.z, s = t.elements, n = 1 / (s[3] * e + s[7] * i + s[11] * r + s[15]);
        return this.x = (s[0] * e + s[4] * i + s[8] * r + s[12]) * n, this.y = (s[1] * e + s[5] * i + s[9] * r + s[13]) * n, this.z = (s[2] * e + s[6] * i + s[10] * r + s[14]) * n, this
      }

      applyQuaternion(t) {
        let e = this.x, i = this.y, r = this.z, s = t.x, n = t.y, o = t.z, a = t.w, l = a * e + n * r - o * i,
          c = a * i + o * e - s * r, h = a * r + s * i - n * e, u = -s * e - n * i - o * r;
        return this.x = l * a + u * -s + c * -o - h * -n, this.y = c * a + u * -n + h * -s - l * -o, this.z = h * a + u * -o + l * -n - c * -s, this
      }

      project(t) {
        return this.applyMatrix4(t.worldMatrixInvert).applyMatrix4(t.projectionMatrix)
      }

      unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.worldMatrix)
      }

      transformDirection(t) {
        let e = this.x, i = this.y, r = this.z, s = t.elements;
        return this.x = s[0] * e + s[4] * i + s[8] * r, this.y = s[1] * e + s[5] * i + s[9] * r, this.z = s[2] * e + s[6] * i + s[10] * r, this.normalize()
      }

      divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
      }

      divideScalar(t) {
        return this.multiplyScalar(1 / t)
      }

      min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
      }

      max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
      }

      clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
      }

      clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
      }

      clampLength(t, e) {
        let i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
      }

      floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
      }

      ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
      }

      round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
      }

      roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
      }

      negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
      }

      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
      }

      lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
      }

      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      }

      manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      }

      normalize() {
        return this.divideScalar(this.length() || 1)
      }

      setLength(t) {
        return this.normalize().multiplyScalar(t)
      }

      lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
      }

      lerpVectors(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
      }

      cross(t) {
        return this.crossVectors(this, t)
      }

      crossVectors(t, e) {
        let i = t.x, r = t.y, s = t.z, n = e.x, o = e.y, a = e.z;
        return this.x = r * a - s * o, this.y = s * n - i * a, this.z = i * o - r * n, this
      }

      projectOnVector(t) {
        let e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        let i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i)
      }

      projectOnPlane(t) {
        return o.copy(this).projectOnVector(t), this.sub(o)
      }

      reflect(t) {
        return this.sub(o.copy(t).multiplyScalar(2 * this.dot(t)))
      }

      angleTo(t) {
        let e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        let i = this.dot(t) / e;
        return Math.acos(Math.clamp(i, -1, 1))
      }

      distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
      }

      distanceToSquared(t) {
        let e = this.x - t.x, i = this.y - t.y, r = this.z - t.z;
        return e * e + i * i + r * r
      }

      manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      }

      setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
      }

      setFromSphericalCoords(t, e, i) {
        let r = Math.sin(e) * t;
        return this.x = r * Math.sin(i), this.y = Math.cos(e) * t, this.z = r * Math.cos(i), this
      }

      setFromMatrixPosition(t) {
        let e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this
      }

      setFromMatrixScale(t) {
        return this.x = this.setFromMatrixColumn(t, 0).length(), this.y = this.setFromMatrixColumn(t, 1).length(), this.z = this.setFromMatrixColumn(t, 2).length(), this
      }

      setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, 4 * e)
      }

      setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, 3 * e)
      }

      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
      }

      fromArray(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
      }

      toArray() {
        return [this.x, this.y, this.z]
      }

      random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
      }
    }

    i.default = n;
    let o = new n, a = new s.default
  }, {"./Quaternion.js": 120}],
  126: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.x = t, this.y = e, this.z = i, this.w = r
      }

      get width() {
        return this.z
      }

      set width(t) {
        this.z = t
      }

      get height() {
        return this.w
      }

      set height(t) {
        this.w = t
      }

      set(t, e, i, r) {
        return this.x = t, this.y = e, this.z = i, this.w = r, this
      }

      setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this
      }

      clone() {
        return new r(this.x, this.y, this.z, this.w)
      }

      copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
      }

      add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
      }

      addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this
      }

      addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
      }

      addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
      }

      sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
      }

      subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
      }

      subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
      }

      multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
      }

      applyMatrix4(t) {
        let e = this.x, i = this.y, r = this.z, s = this.w, n = t.elements;
        return this.x = n[0] * e + n[4] * i + n[8] * r + n[12] * s, this.y = n[1] * e + n[5] * i + n[9] * r + n[13] * s, this.z = n[2] * e + n[6] * i + n[10] * r + n[14] * s, this.w = n[3] * e + n[7] * i + n[11] * r + n[15] * s, this
      }

      divideScalar(t) {
        return this.multiplyScalar(1 / t)
      }

      setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        let e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
      }

      setAxisAngleFromRotationMatrix(t) {
        let e, i, r, s, n = t.elements, o = n[0], a = n[4], l = n[8], c = n[1], h = n[5], u = n[9], d = n[2], f = n[6],
          p = n[10];
        if (Math.abs(a - c) < .01 && Math.abs(l - d) < .01 && Math.abs(u - f) < .01) {
          if (Math.abs(a + c) < .1 && Math.abs(l + d) < .1 && Math.abs(u + f) < .1 && Math.abs(o + h + p - 3) < .1) return this.set(1, 0, 0, 0), this;
          e = Math.PI;
          let t = (o + 1) / 2, n = (h + 1) / 2, m = (p + 1) / 2, g = (a + c) / 4, _ = (l + d) / 4, y = (u + f) / 4;
          return t > n && t > m ? t < .01 ? (i = 0, r = .707106781, s = .707106781) : (i = Math.sqrt(t), r = g / i, s = _ / i) : n > m ? n < .01 ? (i = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(n), i = g / r, s = y / r) : m < .01 ? (i = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(m), i = _ / s, r = y / s), this.set(i, r, s, e), this
        }
        let m = Math.sqrt((f - u) * (f - u) + (l - d) * (l - d) + (c - a) * (c - a));
        return Math.abs(m) < .001 && (m = 1), this.x = (f - u) / m, this.y = (l - d) / m, this.z = (c - a) / m, this.w = Math.acos((o + h + p - 1) / 2), this
      }

      min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
      }

      max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
      }

      clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
      }

      clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
      }

      clampLength(t, e) {
        let i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
      }

      floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
      }

      ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
      }

      round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
      }

      roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
      }

      negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
      }

      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
      }

      lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      }

      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      }

      manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      }

      normalize() {
        return this.divideScalar(this.length() || 1)
      }

      setLength(t) {
        return this.normalize().multiplyScalar(t)
      }

      lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
      }

      lerpVectors(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
      }

      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      }

      fromArray(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
      }

      toArray() {
        return [this.x, this.y, this.z, this.w]
      }

      random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
      }
    }

    i.default = r
  }, {}],
  127: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = y(t("./Euler.js")), s = y(t("./Spherical.js")), n = y(t("./Vector2.js")), o = y(t("./Vector3.js")),
      a = y(t("./Vector4.js")), l = y(t("./Quaternion.js")), c = y(t("./Matrix3.js")), h = y(t("./Matrix4.js")),
      u = y(t("./Plane.js")), d = y(t("./Ray.js")), f = y(t("./Box3.js")), p = y(t("./Sphere.js")),
      m = y(t("./CatmullRom.js")), g = y(t("./BezierCurve.js")), _ = y(t("./Perlin.js"));

    function y(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var v = {
      Euler: r.default,
      Spherical: s.default,
      Vector2: n.default,
      Vector3: o.default,
      Vector4: a.default,
      Quaternion: l.default,
      Matrix3: c.default,
      Matrix4: h.default,
      Plane: u.default,
      Ray: d.default,
      Box3: f.default,
      Sphere: p.default,
      CatmullRom: m.default,
      BezierCurve: g.default,
      Perlin: _.default
    };
    i.default = v
  }, {
    "./BezierCurve.js": 112,
    "./Box3.js": 113,
    "./CatmullRom.js": 114,
    "./Euler.js": 115,
    "./Matrix3.js": 116,
    "./Matrix4.js": 117,
    "./Perlin.js": 118,
    "./Plane.js": 119,
    "./Quaternion.js": 120,
    "./Ray.js": 121,
    "./Sphere.js": 122,
    "./Spherical.js": 123,
    "./Vector2.js": 124,
    "./Vector3.js": 125,
    "./Vector4.js": 126
  }],
  128: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../core/Object3D.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor() {
        super(), this._type = "Bone"
      }

      isBone() {
        return !0
      }
    }

    i.default = n
  }, {"./../core/Object3D.js": 89}],
  129: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./../core/Object3D.js")), s = a(t("./../math/Euler.js")), n = a(t("./../math/Vector3.js")),
      o = a(t("./../math/Matrix4.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    new o.default;

    class l extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
        super(), this._type = "Camera", this._clearColor = new n.default, this._fov = t, this._near = i, this._far = r, this._aspect = e, this._projectionMatrix = new o.default, this._projectionMatrixInverse = new o.default, this.updateProjectionMatrix(), this._worldMatrixInvert = new o.default, this._position.y = 2, this._position.z = 5, this._quaternion.setFromEuler(new s.default(0, 0, 0))
      }

      copy(t) {
        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        super.copy(t, e), this._clearColor.copy(t._clearColor), this._fov = t._fov, this._near = t._near, this._far = t._far, this._aspect = t._aspect, this.updateProjectionMatrix()
      }

      isCamera() {
        return !0
      }

      get clearColor() {
        return this._clearColor
      }

      get fov() {
        return this._fov
      }

      set fov(t) {
        this._fov = t
      }

      get near() {
        return this._near
      }

      set near(t) {
        this._near = t
      }

      get far() {
        return this._far
      }

      set far(t) {
        this._far = t
      }

      get aspect() {
        return this._aspect
      }

      set aspect(t) {
        this._aspect = t
      }

      get projectionMatrix() {
        return this._projectionMatrix
      }

      get worldMatrixInvert() {
        return this._worldMatrixInvert
      }

      get projectionMatrixInverse() {
        return this._projectionMatrixInverse
      }

      updateProjectionMatrix() {
        const t = this._near, e = t * Math.tan(.5 * Math.radians(this._fov)), i = 2 * e, r = this._aspect * i,
          s = -.5 * r;
        this._projectionMatrix.makePerspective(s, s + r, e, e - i, t, this._far), this._projectionMatrixInverse.getInverse(this._projectionMatrix)
      }

      updateWorldMatrix(t) {
        super.updateWorldMatrix(t), this._worldMatrixInvert.getInverse(this._worldMatrix)
      }
    }

    i.default = l
  }, {
    "./../core/Object3D.js": 89,
    "./../math/Euler.js": 115,
    "./../math/Matrix4.js": 117,
    "./../math/Vector3.js": 125
  }],
  130: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    s(t("./../math/BezierCurve.js"));
    var r = s(t("./../core/Object3D.js"));

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class n extends r.default {
      constructor() {
        super(), this._type = "Curve", this._curve = null
      }

      isCurve() {
        return !0
      }

      get curve() {
        return this._curve
      }

      set curve(t) {
        this._curve = t
      }

      getPointAt(t) {
        return this._curve.getPointAt(t)
      }
    }

    i.default = n
  }, {"./../core/Object3D.js": 89, "./../math/BezierCurve.js": 112}],
  131: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./../core/Object3D.js")), s = a(t("./../math/Box3.js")), n = a(t("./../materials/DefaultMaterial.js")),
      o = a(t("./../../event/Signal.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class l extends r.default {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new PIXI.Geometry,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.default;
        super(), this._type = "Mesh", this._geometry = t, this._material = e, this._drawMode = PIXI.DRAW_MODES.TRIANGLES, this._boundingBox = null, this._boundingSphere = null, this._blendMeshes = null, this.blendInfluences = [0, 0, 0, 0], this.onBeforeRender = new o.default, this.onAfterRender = new o.default, this._groups = []
      }

      clone() {
        return new l(this._geometry, this._material).copy(this)
      }

      copy(t) {
        return super.copy(t), this._drawMode = t._drawMode, t._boundingBox && (this._boundingBox || (this._boundingBox = new s.default), this._boundingBox.copy(t._boundingBox)), t._boundingSphere && this._boundingSphere.copy(t._boundingSphere), this._blendMeshes = t._blendMeshes, this.blendInfluences = [...t.blendInfluences], this._groups = t._groups, this
      }

      get isMesh() {
        return !0
      }

      get blendMeshes() {
        if (null !== this._blendMeshes) return this._blendMeshes;
        for (this._blendMeshes = 0; this.geometry.attributes["aBlendPos" + this._blendMeshes];) ++this._blendMeshes;
        return this._blendMeshes
      }

      get geometry() {
        return this._geometry
      }

      get material() {
        return this._material
      }

      get drawMode() {
        return this._drawMode
      }

      set drawMode(t) {
        this._drawMode = t
      }

      get boundingBox() {
        return this._boundingBox || (this._boundingBox = new s.default, this._boundingBox.setFromArray(this._geometry.getBuffer("aVertexPosition").data)), this._boundingBox
      }

      get groups() {
        return this._groups
      }

      addGroup(t, e, i) {
        this._groups.push({start: t, count: e, materialIndex: void 0 !== i ? i : 0})
      }

      clearGroups() {
        this._groups = []
      }

      getMaterialByIndex(t) {
        return Array.isArray(this._material) ? this._material[t] : this._material
      }
    }

    i.default = l
  }, {
    "./../../event/Signal.js": 150,
    "./../core/Object3D.js": 89,
    "./../materials/DefaultMaterial.js": 110,
    "./../math/Box3.js": 113,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  132: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array-buffer.slice"), t("core-js/modules/es.typed-array.float32-array"), t("core-js/modules/es.typed-array.to-locale-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Mesh.js")), s = n(t("./../math/Matrix4.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let o = new s.default;
    new s.default;

    class a extends r.default {
      constructor(t, e) {
        super(t, e), this._type = "SkinnedMesh", this._joints = [], this._inverseBindMatrices = [], this._boneTexture = null, this._boneTextureSize = 0, this._boneMatrices = null
      }

      clone() {
        return new a(this._geometry, this._material).copy(this)
      }

      copy(t) {
        return super.copy(t), this
      }

      get isSkinnedMesh() {
        return !0
      }

      get joints() {
        return this._joints
      }

      get inverseBindMatrices() {
        return this._inverseBindMatrices
      }

      get boneMatrices() {
        return this._boneMatrices
      }

      get boneTexture() {
        return this._boneTexture
      }

      get boneTextureSize() {
        return this._boneTextureSize
      }

      setBones(t, e) {
        this._joints = t, this._inverseBindMatrices = e, this._boneMatrices = new Float32Array(16 * this._joints.length)
      }

      createBoneTexture() {
        let t = Math.sqrt(4 * this._joints.length);
        t = Math.max(PIXI.utils.nextPow2(t), 4), this._boneMatrices = new Float32Array(t * t * 4), this.calculateMatrices(), this._boneTexture = PIXI.Texture.fromBuffer(this._boneMatrices, t, t, {
          type: PIXI.TYPES.FLOAT,
          mipmap: !1
        }), this._boneTextureSize = t
      }

      calculateMatrices() {
        for (let t = 0, e = this._joints.length; t < e; t++) o.multiplyMatrices(this._joints[t].worldMatrix, this._inverseBindMatrices[t]), o.toArray(this._boneMatrices, 16 * t)
      }

      update() {
        this.calculateMatrices(), this._boneTexture && this._boneTexture.update()
      }

      dispose() {
        this._boneTexture && (this._boneTexture.baseTexture.dispose(), this._boneTexture = null)
      }
    }

    i.default = a
  }, {
    "./../math/Matrix4.js": 117,
    "./Mesh.js": 131,
    "core-js/modules/es.array-buffer.slice": 313,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.typed-array.float32-array": 333,
    "core-js/modules/es.typed-array.to-locale-string": 337
  }],
  133: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./../geometries/PlaneGeometry.js")), s = o(t("./../materials/DefaultMaterial.js")),
      n = o(t("./Mesh.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    let a = new (o(t("./../math/Vector3.js")).default);

    class l extends n.default {
      constructor(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200, n = new s.default,
          o = new PIXI.Text(t, e);
        o.updateText();
        let a = document.createElement("canvas");
        a.width = PIXI.utils.nextPow2(o.canvas.width), a.height = PIXI.utils.nextPow2(o.canvas.height), a.getContext("2d").drawImage(o.canvas, 0, 0), console.log("Create texture for 2D Text dimensions: ".concat(a.width, "x").concat(a.height)), n.texture = PIXI.Texture.from(a), n.transparent = !0, n.depthWrite = !1;
        let l = new r.default(o.canvas.width / i, o.canvas.height / i), c = l.getBuffer("aTextureCoord");
        c.data[2] = o.canvas.width / a.width, c.data[5] = o.canvas.height / a.height, c.data[6] = o.canvas.width / a.width, c.data[7] = o.canvas.height / a.height, super(l, n), this._type = "Text2DMesh"
      }

      get isText2DMesh() {
        return !0
      }

      get width() {
        return this.boundingBox.getSize(a).x
      }

      get height() {
        return this.boundingBox.getSize(a).y
      }
    }

    i.default = l
  }, {
    "./../geometries/PlaneGeometry.js": 94,
    "./../materials/DefaultMaterial.js": 110,
    "./../math/Vector3.js": 125,
    "./Mesh.js": 131
  }],
  134: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./../core/Object3D.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super(), this._type = "Trigger", this._radius = t.radius, this._targetTag = t.tag, this.onEnter = t.onEnter, this.onExit = t.onExit
      }

      isTrigger() {
        return !0
      }

      get radius() {
        return this._radius
      }

      set radius(t) {
        this._radius = t
      }
    }

    i.default = n
  }, {"./../core/Object3D.js": 89}],
  135: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor() {
        this._opaque = [], this._transparent = []
      }

      get opaque() {
        return this._opaque
      }

      get transparent() {
        return this._transparent
      }

      add(t, e, i) {
        let r = {object: t, geometry: e, material: i}, s = i.transparent;
        if (t.groups.length) for (let e of t.groups) if (i[e.materialIndex].transparent) {
          s = !0;
          break
        }
        (!0 === s ? this._transparent : this._opaque).push(r)
      }

      clear() {
        this._opaque = [], this._transparent = []
      }

      sort() {
      }
    }

    i.default = class {
      constructor() {
        this._lists = new WeakMap
      }

      get(t, e) {
        let i, s = this._lists.get(t);
        return s ? (i = s.get(e), void 0 === i && (i = new r, s.set(e, i))) : (i = new r, this._lists.set(t, new WeakMap), this._lists.get(t).set(e, i)), i
      }

      dispose() {
        this._lists = new WeakMap
      }
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  136: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = a(t("./../../state/State.js")), s = a(t("./RenderLists.js")), n = a(t("./../math/Matrix3.js")),
      o = a(t("./../math/Matrix4.js"));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function l(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function c(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    var h = new class {
      constructor() {
        this._renderer = null, this._renderLists = new s.default, this._currentRenderList = null, this._activeLights = [], this._state = new r.default, this._state.depthTest = !0
      }

      set renderer(t) {
        this._renderer = t
      }

      get width() {
        return this._renderer.width
      }

      get height() {
        return this._renderer.height
      }

      get resolution() {
        return this._renderer.resolution
      }

      projectObject(t, e) {
        if (!this._currentRenderList) return void console.error("currentRenderList no't initialized");
        if (!t.visible) return;
        if (t.isLight && this._activeLights.push(t), t.isMesh) {
          let e = t.geometry, i = t.material;
          this._currentRenderList.add(t, e, i)
        }
        let i = t.children;
        for (let t = 0, r = i.length; t < r; ++t) {
          let r = i[t];
          this.projectObject(r, e)
        }
      }

      renderObjects(t, e, i) {
        for (let r = 0, s = t.length; r < s; ++r) {
          let s = t[r], n = s.object, o = s.geometry, a = s.material;
          n.onBeforeRender.emit(n), this.renderObject(n, e, i, o, a), n.onAfterRender.emit(n)
        }
      }

      bindGeometryAndMaterial(t, e, i, r, s) {
        let a = new o.default;
        a.multiplyMatrices(i.worldMatrixInvert, t.worldMatrix), s.skinned = t.isSkinnedMesh, s.blendMeshes = t.blendMeshes;
        let l = s.shader;
        if (t.isSkinnedMesh) {
          t.update();
          let e = new o.default;
          e.getInverse(t.worldMatrix), l.uniforms.uBindMatrixInverse = e.toArray(), this._renderer.context.extensions.floatTexture ? (t.boneTexture || t.createBoneTexture(), l.uniforms.uBoneTexture = t.boneTexture, l.uniforms.uBoneTextureSize = t.boneTextureSize) : l.uniforms.uBoneMatrices = t.boneMatrices
        }
        if (t.blendMeshes && (l.uniforms.uBlendInfluences = t.blendInfluences), l.uniforms.uProjectionMatrix = i.projectionMatrix.toArray(), l.uniforms.uModelViewMatrix = a.toArray(), l.uniforms.uModelMatrix = t.worldMatrix.toArray(), l.uniforms.uWorldSpaceCameraPos = i.worldPosition.toArray(), l.uniforms.uTime = c2d.time.time, s.lights) {
          l.uniforms.uAmbientLightColor = e.ambientLight.color.toArray(), l.uniforms.uAmbientLightColor[0] *= e.ambientLight.intensity, l.uniforms.uAmbientLightColor[1] *= e.ambientLight.intensity, l.uniforms.uAmbientLightColor[2] *= e.ambientLight.intensity, l.uniforms.uLightDirection = [0, 0, 0, 0], l.uniforms.uLightColor = [0, 0, 0], l.uniforms.uPointLightColor = [0, 0, 0, 0], l.uniforms.uPointLightPosition = [0, 0, 0, 0], l.uniforms.uSpotLightColor = [0, 0, 0], l.uniforms.uSpotLightPosition = [0, 0, 0, 0], l.uniforms.uSpotLightDirection = [0, 0, 0, 0];
          for (let t of this._activeLights) t.setupShader(l)
        }
        s.fog && (l.uniforms.uFogColor = e.fog.color, l.uniforms.uFogNear = e.fog.near, l.uniforms.uFogFar = e.fog.far);
        let c = new n.default;
        c.getNormalMatrix(t.worldMatrix), l.uniforms.uNormalMatrix = c.toArray(), s.bind(l), this._renderer.shader.bind(l), this._state.depthTest = s.depthTest, this._state.depthWrite = s.depthWrite, this._state.culling = !s.doubleSided, this._state.clockwiseFrontFace = s.clockwiseFrontFace, s.transparent ? (this._state.blend = !0, this._state.blendMode = s.blendMode) : (this._state.blend = !1, this._state.blendMode = PIXI.BLEND_MODES.NONE), this._renderer.state.set(this._state), this._renderer.geometry.bind(r, l)
      }

      renderObject(t, e, i, r, s) {
        let n = s.wireframe ? PIXI.DRAW_MODES.LINE_LOOP : t.drawMode;
        if (t.groups.length) for (let o of t.groups) this.bindGeometryAndMaterial(t, e, i, r, s[o.materialIndex]), this._renderer.geometry.draw(n, o.count, o.start, 0); else this.bindGeometryAndMaterial(t, e, i, r, s), this._renderer.geometry.draw(n, 0, 0, 0)
      }

      translateToViewport(t) {
        return t * game.size.scale * this._renderer.resolution
      }

      render(t, e, i) {
        i && this._renderer.renderTexture.bind(i), this._renderer.batch.flush();
        let r = 0;
        r = 0 !== t.width && 0 !== t.height ? t.width / t.height : i ? i.width / i.height : this._renderer.width / this._renderer.height, r !== e.aspect && (e.aspect = r, e.updateProjectionMatrix());
        let s = this._renderer.framebuffer, n = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(i), !0).forEach((function (e) {
              c(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }({}, s.viewport);
        i || 0 === t.width || 0 === t.height || s.setViewport(this.translateToViewport(t.x), n.height - this.translateToViewport(t.height + t.y), this.translateToViewport(t.width), this.translateToViewport(t.height));
        let o = e.clearColor;
        t.autoClear && (this._renderer.clearBeforeRender = !0, this._renderer.renderTexture.clearColor = o.toArray()), this._currentRenderList = this._renderLists.get(t, e), this._currentRenderList.clear(), this._activeLights = [], t.updateWorldMatrix(), this.projectObject(t.root, e), this.renderObjects(this._currentRenderList.opaque, t, e), this.renderObjects(this._currentRenderList.transparent, t, e), i && this._renderer.renderTexture.bind(), 0 !== t.width && 0 !== t.height && s.setViewport(n.x, n.y, n.width, n.height)
      }
    };
    i.default = h
  }, {
    "./../../state/State.js": 170,
    "./../math/Matrix3.js": 116,
    "./../math/Matrix4.js": 117,
    "./RenderLists.js": 135,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  137: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.replace"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = t("./chunks/shared.js"), s = t("./chunks/skinning_vertex.js"), n = t("./chunks/morph_vertex.js");
    const o = {
      shared: r.shared,
      skinning_declare: s.skinning_declare,
      skinning_vertex: s.skinning_vertex,
      morph_declare: n.morph_declare,
      morph_vertex: n.morph_vertex
    };

    class a {
      static includeReplacer(t, e) {
        let i = o[e];
        if (void 0 === i) throw new Error("Can not resolve #include < ".concat(e, " >"));
        return a.resolveIncludes(i)
      }

      static resolveIncludes(t) {
        return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, a.includeReplacer)
      }

      static getProgram(t, e, i, r) {
        const s = [];
        for (const t in r) s.push("#define ".concat(t, " ").concat(r[t]));
        const n = "".concat(s.join("\n"), "\n");
        return t = n + a.resolveIncludes(t), e = n + a.resolveIncludes(e), new PIXI.Shader(PIXI.Program.from(t, e, i))
      }
    }

    i.default = a
  }, {
    "./chunks/morph_vertex.js": 138,
    "./chunks/shared.js": 139,
    "./chunks/skinning_vertex.js": 140,
    "core-js/modules/es.string.replace": 327
  }],
  138: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.morph_vertex = i.morph_declare = void 0;
    i.morph_declare = "\n#ifdef BLEND_MESHES\n  uniform float uBlendInfluences[4];\n#endif\n\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 1)\n  attribute vec3 aBlendPos0;\n  attribute vec3 aBlendNorm0;\n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 2)\n  attribute vec3 aBlendPos0;\n  attribute vec3 aBlendPos1;\n  attribute vec3 aBlendNorm0;\n  attribute vec3 aBlendNorm1;\n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 3)\n  attribute vec3 aBlendPos0;\n  attribute vec3 aBlendPos1;\n  attribute vec3 aBlendPos2;\n  attribute vec3 aBlendNorm0;\n  attribute vec3 aBlendNorm1;\n  attribute vec3 aBlendNorm2;\n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 4)\n  attribute vec3 aBlendPos0;\n  attribute vec3 aBlendPos1;\n  attribute vec3 aBlendPos2;\n  attribute vec3 aBlendPos3;\n  attribute vec3 aBlendNorm0;\n  attribute vec3 aBlendNorm1;\n  attribute vec3 aBlendNorm2;\n  attribute vec3 aBlendNorm3;\n#endif\n";
    i.morph_vertex = "\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 1)\n  transformPosition.xyz += aBlendPos0 * uBlendInfluences[0];\n  #if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n    transformNormal.xyz += aBlendNorm0 * uBlendInfluences[0];\n  #endif  \n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 2)\n  transformPosition.xyz += aBlendPos0 * uBlendInfluences[0];\n  transformPosition.xyz += aBlendPos1 * uBlendInfluences[1];\n  #if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n    transformNormal.xyz += aBlendNorm0 * uBlendInfluences[0];\n    transformNormal.xyz += aBlendNorm1 * uBlendInfluences[1];\n  #endif\n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 3)\n  transformPosition.xyz += aBlendPos0 * uBlendInfluences[0];\n  transformPosition.xyz += aBlendPos1 * uBlendInfluences[1];\n  transformPosition.xyz += aBlendPos2 * uBlendInfluences[2];\n  #if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n    transformNormal.xyz += aBlendNorm0 * uBlendInfluences[0];\n    transformNormal.xyz += aBlendNorm1 * uBlendInfluences[1];\n    transformNormal.xyz += aBlendNorm2 * uBlendInfluences[2];\n  #endif\n#endif\n#if defined(BLEND_MESHES) && (BLEND_MESHES == 4)\n  transformPosition.xyz += aBlendPos0 * uBlendInfluences[0];\n  transformPosition.xyz += aBlendPos1 * uBlendInfluences[1];\n  transformPosition.xyz += aBlendPos2 * uBlendInfluences[2];\n  transformPosition.xyz += aBlendPos3 * uBlendInfluences[3];\n  #if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n    transformNormal.xyz += aBlendNorm0 * uBlendInfluences[0];\n    transformNormal.xyz += aBlendNorm1 * uBlendInfluences[1];\n    transformNormal.xyz += aBlendNorm2 * uBlendInfluences[2];\n    transformNormal.xyz += aBlendNorm3 * uBlendInfluences[3];\n  #endif\n#endif\n"
  }, {}],
  139: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.shared = void 0;
    i.shared = "\nmat3 mat4_mat3(mat4 m4) {\n  return mat3(\n    m4[0][0], m4[0][1], m4[0][2],\n    m4[1][0], m4[1][1], m4[1][2],\n    m4[2][0], m4[2][1], m4[2][2]);\n}"
  }, {}],
  140: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.skinning_vertex = i.skinning_declare = void 0;
    i.skinning_declare = "\n#ifdef SKINNING\n  attribute vec4 aSkinWeight;\n  attribute vec4 aSkinIndex;\n  uniform \tmat4 uBindMatrixInverse;\n  \n  #ifdef BONE_TEXTURE\n    uniform highp sampler2D uBoneTexture;\n    uniform int uBoneTextureSize;\n  \n    mat4 getBoneMatrix(const in float i) {\n      float j = i * 4.0;\n      float x = mod(j, float(uBoneTextureSize));\n      float y = floor(j / float(uBoneTextureSize));\n\n      float dx = 1.0 / float(uBoneTextureSize);\n      float dy = 1.0 / float(uBoneTextureSize);\n\n      y = dy * ( y + 0.5 );\n\n      vec4 v1 = texture2D(uBoneTexture, vec2(dx * (x + 0.5), y));\n      vec4 v2 = texture2D(uBoneTexture, vec2(dx * (x + 1.5), y));\n      vec4 v3 = texture2D(uBoneTexture, vec2(dx * (x + 2.5), y));\n      vec4 v4 = texture2D(uBoneTexture, vec2(dx * (x + 3.5), y));\n\n      return mat4(v1, v2, v3, v4);\n    }\n  #else\n    uniform mat4 uBoneMatrices[MAX_BONES];\n    \n    mat4 getBoneMatrix(const in float i) {\n      return uBoneMatrices[int(i)];\n    }\n  #endif\n  \n#endif\n";
    i.skinning_vertex = "\n#ifdef SKINNING\n  mat4 skinMatrix =\n    aSkinWeight.x * getBoneMatrix(aSkinIndex.x) +\n    aSkinWeight.y * getBoneMatrix(aSkinIndex.y) +\n    aSkinWeight.z * getBoneMatrix(aSkinIndex.z) +\n    aSkinWeight.w * getBoneMatrix(aSkinIndex.w);\n\n  transformPosition = uBindMatrixInverse * skinMatrix * vec4(aVertexPosition, 1.0);\n\n  #if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n    transformNormal = (uBindMatrixInverse * skinMatrix * vec4(aVertexNormal, 0.0)).xyz;\n  #endif\n  \n  #ifdef NORMALMAP_ON\n    transformTangent = (uBindMatrixInverse * skinMatrix * vec4(aTangent.xyz, 0.0)).xyz;\n  #endif\n#endif\n"
  }, {}],
  141: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = "#if defined(TEXTURE) || defined(NORMALMAP_ON) || defined(DISTORTION_ON) || defined(EMISSIVE_ON) || defined(DISSOLVE_ON)\n  varying vec2 vTextureCoord;\n  #ifdef TEXTURE\n    uniform sampler2D uSampler;\n  #endif\n#endif\n\n#ifdef LIGHTS\n  varying vec4 vSpotLightColor;\n  varying vec3 vSpotLightAngleCos;\n  varying vec3 vAdditiveLightColor;\n#endif\n\n#ifdef LIGHTMAP_ON\n  varying vec2 vTextureCoord2;\n  uniform sampler2D uLightMap;\n#endif\n\n#ifdef NORMALMAP_ON\n  uniform sampler2D uNormalMap;\n  uniform lowp vec3 uAmbientLightColor;\n  uniform lowp vec3 uLightDirection;\n  uniform lowp vec3 uLightColor;\n  uniform lowp vec2 uSpecularParam;\n  varying vec3 T;\n  varying vec3 B;\n  varying vec3 N;\n#endif\n\n#ifdef SPECULARMAP_ON\n  uniform sampler2D uSpecularMap;\n#endif\n\n#ifdef EMISSIVE_ON\n  uniform sampler2D uEmissiveMap;\n#endif\n\n#ifdef ALPHA_CUTOFF\n  uniform float uAlphaCutoff;\n#endif\n\n#if defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  varying vec3 vViewDirection;\n#endif\n\n#ifdef FRESNEL_ON\n  uniform vec4 uFresnelColor;\n  varying vec3 vNormal;\n#endif\n\n#ifdef REFLECTION_ON\n  uniform sampler2D uReflectionMap;\n  uniform float uReflectionPower;\n  varying vec3 vViewReflectDirection;\n#endif\n\n#ifdef DISTORTION_ON\n  uniform sampler2D uDistorMap;\n  uniform vec4 uDistorParam;\n#endif\n\n#if defined(FINAL_COLOR)\n  uniform vec4 uFinalColor;\n#endif\n\n#ifdef USE_FOG\n  uniform vec3  uFogColor;\n  uniform float uFogNear;\n  uniform float uFogFar;\n\n  varying float fogDepth;\n#endif\n\n#if defined(LIGHTS) && defined(DOUBLE_SIDED)\n  varying vec3 vColorBack;\n#endif\n\n#ifdef DISSOLVE_ON\n  uniform sampler2D uDissolveMap;\n  uniform vec4 uDissolvePattern;\n  #if defined(DISSOLVE_LMAP)\n    uniform sampler2D uDissolveLMap;\n    uniform float uDissolveLMapParam;\n  #else\n    uniform vec4 uDissolveLColor;\n  #endif\n#endif\n\nuniform highp float uTime;\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 color = vColor;\n\n#if defined(LIGHTS) && defined(DOUBLE_SIDED)\n  color.rgb *= float(gl_FrontFacing);\n  color.rgb += vColorBack * ((float(gl_FrontFacing) - 1.0) * -1.0);\n#endif\n\n#if defined(TEXTURE)\n  vec4 result = texture2D(uSampler, vTextureCoord);\n  #if defined(ALPHA_FROM_RED)\n    result.a = result.r;\n  #elif defined(ALPHA_FROM_GREEN)\n    result.a = result.g;\n  #elif defined(ALPHA_FROM_BLUE)\n    result.a = result.b;\n  #endif\n\n  result *= color;\n#else\n  vec4 result = color;\n#endif\n\n#if defined(DISSOLVE_ON)\n  vec2 dis_uv = vTextureCoord + uDissolvePattern.xy * uTime;\n  float dissolveMapColor = texture2D(uDissolveMap, dis_uv).x;\n  if(dissolveMapColor > uDissolvePattern.w) {\n    float dissolveMapColor_d1 = texture2D(uDissolveMap, dis_uv + uDissolvePattern.z).x;\n    float dissolveMapColor_d2 = texture2D(uDissolveMap, dis_uv - uDissolvePattern.z).x;\n    if((dissolveMapColor_d1 < uDissolvePattern.w) || (dissolveMapColor_d2 < uDissolvePattern.w)) {\n      #if defined(DISSOLVE_LMAP)\n        result = texture2D(uDissolveLMap, vTextureCoord + uDissolveLMapParam * uTime);\n      #else\n        result = uDissolveLColor;\n      #endif\n    } else {\n      result.a = 0.0;\n    }\n  }\n#endif\n\n#ifdef ALPHA_CUTOFF\n  if (result.a < uAlphaCutoff) {\n    discard;\n  }\n#endif\n\n#ifdef LIGHTMAP_ON\n  vec4 lightMapColor = texture2D(uLightMap, vTextureCoord2);\n  result.rgb = result.rgb * lightMapColor.rgb + lightMapColor.rgb * lightMapColor.a;\n#endif\n\n#ifdef NORMALMAP_ON\n  // obtain a normal vector on tangent space\n  vec3 tangentNormal = texture2D(uNormalMap, vTextureCoord).xyz;\n  // and change range of values (0 ~ 1)\n  tangentNormal = normalize(tangentNormal * 2.0 - 1.0);\n\n  // 'TBN' transforms the world space into a tangent space\n  // we need its inverse matrix\n  // Tip : An inverse matrix of orthogonal matrix is its transpose matrix\n  mat3 TBN = mat3(normalize(T), normalize(B), normalize(N));\n  //TBN = transpose(TBN);\n\n  // finally we got a normal vector from the normal map\n  vec3 worldNormal = TBN * tangentNormal;\n\n  // calc diffuse, as we did in pixel shader\n  float diffuseFactor = clamp(dot(worldNormal, uLightDirection), 0.0, 1.0);\n\n  vec3 ambientLighting = uAmbientLightColor * (1.0 - diffuseFactor);\n  vec3 diffuseLighting = uLightColor * diffuseFactor;\n\n  // Specular here\n  float specular = 0.0;\n  if (diffuseFactor > 0.0) {\n    vec3 reflection = reflect(-uLightDirection.xyz, worldNormal);\n\n    specular = clamp(dot(reflection, vViewDirection), 0.0, 1.0);\n\n    #ifdef SPECULARMAP_ON\n      vec2 specularMap = texture2D(uSpecularMap, vTextureCoord).xy;\n      specular = pow(specular, 0.1 + 40.0 * uSpecularParam.y * specularMap.g) * uSpecularParam.x * specularMap.r;\n    #else\n      specular = pow(specular, 0.1 + 40.0 * uSpecularParam.y) * uSpecularParam.x;\n    #endif\n  }\n\n  result.rgb *= ambientLighting + diffuseLighting;\n  result.rgb += specular * uLightColor;\n#endif\n\n#ifdef EMISSIVE_ON\n  result.rgb += texture2D(uEmissiveMap, vTextureCoord).rgb;\n#endif\n\n#ifdef FRESNEL_ON\n  float fresnelPower = pow(1.0 - max(0.0, dot(vNormal, vViewDirection)), uFresnelColor.a);\n  result.rgb = mix(result.rgb, uFresnelColor.rgb, fresnelPower);\n#endif\n\n#ifdef REFLECTION_ON\n  #ifdef REFLECTION_MASK\n    result.rgb = mix(result.rgb, texture2D(uReflectionMap, vViewReflectDirection.xy).rgb, uReflectionPower * result.a);\n  #else\n    result.rgb = mix(result.rgb, texture2D(uReflectionMap, vViewReflectDirection.xy).rgb, uReflectionPower);\n  #endif\n#endif\n\n#ifdef DISTORTION_ON\n  #ifdef DISTORTION_ANIMATION\n    vec2 distortionUV = vTextureCoord + vec2(uDistorParam.x, uDistorParam.y) * uTime;\n    distortionUV = vTextureCoord + texture2D(uDistorMap, distortionUV).r * uDistorParam.z;\n  #else\n    vec2 distortionUV = vTextureCoord + texture2D(uDistorMap, vTextureCoord).r * uDistorParam.z;\n  #endif\n  result.rgb = mix(result.rgb, texture2D(uSampler, distortionUV).rgb, uDistorParam.w);\n#endif\n\n#ifdef LIGHTS\n  if (vSpotLightAngleCos.x > vSpotLightAngleCos.y) {\n    float spotFactor = smoothstep(vSpotLightAngleCos.y, vSpotLightColor.a, vSpotLightAngleCos.x);\n    result.rgb += vSpotLightColor.rgb * spotFactor;\n  }\n\n  //result.rgb += vAdditiveLightColor;\n#endif\n\n#ifdef FINAL_COLOR\n  result.rgb = mix(result.rgb, uFinalColor.rgb, uFinalColor.a);\n#endif\n\n#ifdef USE_FOG\n  float fogFactor = smoothstep(uFogNear, uFogFar, fogDepth);\n  result.rgb = mix(result.rgb, uFogColor, fogFactor);\n  #ifdef TRANSPARENT\n    result.rgb *= result.a;\n    #if BLEND_MODE == 1\n      result.rgb *= (1.0 - fogFactor);\n    #endif\n    #if BLEND_MODE == 15\n      //result.a = (1.0 - fogFactor);\n    #endif\n  #endif\n#endif\n\n  gl_FragColor = result;\n}\n"
  }, {}],
  142: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = "attribute vec3 aVertexPosition;\n\n#include <shared>\n#include <morph_declare>\n\n#ifdef VERTEX_COLORS\n  attribute vec3 aVertexColor;\n#endif\n\n#if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  attribute vec3 aVertexNormal;\n  uniform mat3 uNormalMatrix;\n#endif\n\n#ifdef LIGHTS\n  uniform lowp vec3 uAmbientLightColor;\n  uniform lowp vec3 uLightDirection;\n  uniform lowp vec3 uLightColor;\n\n  // TODO: use defines for diferent lightings\n  uniform vec4 uPointLightPosition; // x, y, z - position, w - radius\n  uniform vec3 uPointLightColor;\n\n  uniform vec4 uSpotLightColor;\n  uniform vec4 uSpotLightPosition;\n  uniform vec4 uSpotLightDirection;\n\n  varying vec4 vSpotLightColor;\n  varying vec3 vSpotLightAngleCos;\n\n  varying vec3 vAdditiveLightColor;\n#endif\n\n#if defined(TEXTURE) || defined(NORMALMAP_ON) || defined(DISTORTION_ON) || defined(EMISSIVE_ON) || defined(DISSOLVE_ON)\n  attribute vec2 aTextureCoord;\n  varying vec2 vTextureCoord;\n#endif\n\n#ifdef TEXTURE_ST\n  uniform vec4 uTextureST;\n#endif\n\n#ifdef LIGHTMAP_ON\n  attribute vec2 aTextureCoord2;\n  varying vec2 vTextureCoord2;\n#endif\n\n#include <skinning_declare>\n\n#if defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  varying vec3 vViewDirection;\n#endif\n\n#if defined(FRESNEL_ON)\n  varying vec3 vNormal;\n#endif\n\n#ifdef NORMALMAP_ON\n  attribute vec4 aTangent;\n  varying vec3 T;\n  varying vec3 B;\n  varying vec3 N;\n#endif\n\n#ifdef REFLECTION_ON\n  varying vec3 vViewReflectDirection;\n#endif\n\n#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n\nuniform mat4 uProjectionMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uModelMatrix;\nuniform vec3 uWorldSpaceCameraPos;\nuniform vec4 uColor;\nuniform highp float uTime;\n\nvarying vec4 vColor;\n\n#if defined(LIGHTS) && defined(DOUBLE_SIDED)\n  varying vec3 vColorBack;\n#endif\n\nvoid main(void) {\n\n#if defined(TEXTURE) || defined(NORMALMAP_ON) || defined(DISTORTION_ON) || defined(EMISSIVE_ON) || defined(DISSOLVE_ON)\n  vTextureCoord = aTextureCoord;\n\n  #ifdef TEXTURE_ST\n    vTextureCoord = vTextureCoord * uTextureST.xy + uTextureST.zw;\n  #endif\n#endif\n\n#ifdef LIGHTMAP_ON\n  vTextureCoord2 = aTextureCoord2;\n#endif\n\nvec4 transformPosition = vec4(aVertexPosition, 1.0);\n\n#if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  vec3 transformNormal = aVertexNormal;\n#endif\n\n#ifdef NORMALMAP_ON\n  vec3 transformTangent = aTangent.xyz;\n#endif\n\n#include <skinning_vertex>\n#include <morph_vertex>\n\n#if defined(LIGHTS) || defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  vec3 normal = normalize(uNormalMatrix * transformNormal);\n#endif\n\n#ifdef NORMALMAP_ON\n  vec3 tangent = normalize(uNormalMatrix * transformTangent);\n  vec3 binormal = cross(normal, tangent.xyz) * aTangent.w;\n\n  N = normalize(normal);\n  T = normalize(tangent);\n  B = normalize(binormal);\n#endif\n\n#if defined(LIGHTS) && !defined(NORMALMAP_ON)\n  float diffuseFactor = clamp(dot(normal, uLightDirection), 0.0, 1.0);\n\n  vec3 ambientLighting = uAmbientLightColor * uColor.rgb * (1.0 - diffuseFactor);\n  vec3 diffuseLighting = uLightColor * uColor.rgb * diffuseFactor;\n\n  vColor.rgb = ambientLighting + diffuseLighting;\n  vColor.a = uColor.a;\n\n  vec3 worldPosition = (uModelMatrix * transformPosition).xyz;\n\n  // Point light\n  float pointLightFactor = distance(worldPosition, uPointLightPosition.xyz) / uPointLightPosition.w;\n  pointLightFactor = 1.0 - clamp(0.0, 1.0, pointLightFactor);\n  vAdditiveLightColor = uPointLightColor * pointLightFactor;\n\n  // Spot Light\n  vSpotLightColor = uSpotLightColor;\n  vec3 lVector = uSpotLightPosition.xyz - worldPosition;\n  vec3 pointLightDirect = normalize(lVector);\n\n  float pointLightDistance = length(lVector);\n  vSpotLightAngleCos.x = dot(pointLightDirect, uSpotLightDirection.xyz);\n  vSpotLightAngleCos.y = uSpotLightDirection.w;\n\n  #ifdef DOUBLE_SIDED\n    diffuseFactor = clamp(dot(-normal, uLightDirection), 0.0, 1.0);\n\n    ambientLighting = uAmbientLightColor * uColor.rgb * (1.0 - diffuseFactor);\n    diffuseLighting = uLightColor * uColor.rgb * diffuseFactor;\n\n    vColorBack = ambientLighting + diffuseLighting;\n  #endif\n#else\n  vColor = uColor;\n#endif\n\n#ifdef VERTEX_COLORS\n  vColor.rgb *= aVertexColor;\n#endif\n\n#if defined(FRESNEL_ON) || defined(REFLECTION_ON) || defined(NORMALMAP_ON)\n  vViewDirection = normalize(uWorldSpaceCameraPos - (uModelMatrix * transformPosition).xyz);\n#endif\n\n#if defined(FRESNEL_ON)\n  vNormal = normal;\n#endif\n\n#ifdef REFLECTION_ON\n  vViewReflectDirection = reflect(-vViewDirection, normal);\n#endif\n\n#if defined(BILLBOARD)\n  float scalingFactor = sqrt(\n    uModelMatrix[0][0] * uModelMatrix[0][0] +\n    uModelMatrix[0][1] * uModelMatrix[0][1] +\n    uModelMatrix[0][2] * uModelMatrix[0][2]\n   );\n  vec3 vpos = transformPosition.xyz * scalingFactor;\n  vec4 worldCoord = vec4(uModelMatrix[0][3], uModelMatrix[1][3], uModelMatrix[2][3], 1);\n  vec4 mvPosition = uModelViewMatrix * worldCoord + vec4(vpos, 0);\n  gl_Position = uProjectionMatrix * mvPosition;\n#else\n  vec4 mvPosition = uModelViewMatrix * transformPosition;\n  gl_Position = uProjectionMatrix * mvPosition;\n#endif\n\n#ifdef USE_FOG\n  fogDepth = -mvPosition.z;\n#endif\n\n}\n"
  }, {}],
  143: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = "#ifdef TEXTURE\n  varying vec4 vTextureCoord;\n  uniform sampler2D uSampler;\n#endif\n\n#ifdef ALPHA_CUTOFF\n  uniform float uAlphaCutoff;\n#endif\n\nuniform vec4 uDistorParam;\n\n#ifdef USE_FOG\n  uniform vec3  uFogColor;\n  uniform float uFogNear;\n  uniform float uFogFar;\n\n  varying float fogDepth;\n#endif\n\nuniform highp float uTime;\nvarying vec4 vColor;\n\nvoid main(void) {\n\tvec4 color = vColor;\n\n#ifdef TEXTURE\n  vec4 result = texture2D(uSampler, vTextureCoord.xy);\n\n  vec2 distortionUV = vTextureCoord.xy + vec2(uDistorParam.x, uDistorParam.y) * uTime;\n  distortionUV = vTextureCoord.xy + texture2D(uSampler, distortionUV).b * uDistorParam.z;\n\n  float r = mix(result.r, texture2D(uSampler, distortionUV).r, uDistorParam.w);\n  result.rgb = vec3(r, r, r);\n  result.rgb += texture2D(uSampler, distortionUV).a;\n  result *= texture2D(uSampler, vTextureCoord.zw).g; // multiply by mask\n\n  result.a *= texture2D(uSampler, distortionUV).a;\n  result *= color;\n\n  // needed for addative blending\n  result.rgb *= color.a;\n#else\n\tvec4 result = color;\n#endif\n\n#ifdef ALPHA_CUTOFF\n\tif (result.a < uAlphaCutoff) {\n\t\tdiscard;\n\t}\n#endif\n\n#ifdef USE_FOG\n\tfloat fogFactor = smoothstep(uFogNear, uFogFar, fogDepth);\n\tresult.rgb = mix(result.rgb, uFogColor, fogFactor);\n\tresult.a = mix(result.a, 1.0, fogFactor);\n#endif\n\n\tgl_FragColor = result;\n}\n"
  }, {}],
  144: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = "attribute vec3 aVertexPosition;\n\n#include <skinning_declare>\n#include <morph_declare>\n\n#ifdef TEXTURE\n  attribute vec2 aTextureCoord;\n  varying vec4 vTextureCoord;\n  uniform vec4 uUVAnim;\n#endif\n\n#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n\nuniform mat4 uProjectionMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uModelMatrix;\nuniform vec3 uWorldSpaceCameraPos;\nuniform vec4 uColor;\nuniform highp float uTime;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n\n#ifdef TEXTURE\n  vTextureCoord.xy = aTextureCoord + uUVAnim.xy * uTime + uUVAnim.zw;\n  vTextureCoord.zw = aTextureCoord.xy;\n#endif\n\nvec4 transformPosition = vec4(aVertexPosition, 1.0);\n\n#include <skinning_vertex>\n#include <morph_vertex>\n\n  vColor = uColor;\n\n#ifdef VERTEX_COLORS\n  vColor.rgb *= aVertexColor;\n#endif\n\n  vec4 mvPosition = uModelViewMatrix * transformPosition;\n  gl_Position = uProjectionMatrix * mvPosition;\n\n#ifdef USE_FOG\n  fogDepth = -mvPosition.z;\n#endif\n}\n"
  }, {}],
  145: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.object.assign"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./Renderer.js")), s = o(t("./../display3d/renderer/Renderer.js")),
      n = o(t("./../display3d/loaders/r3d/index.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        this.renderer = null, this.canvas = t, this.stage = new PIXI.Container, this._compressedExtensions = null, this._extensions = null, this._parameters = null
      }

      createCanvas(t, e) {
        this.device = t, this.initializeRenderer(e)
      }

      initializeRenderer(t) {
        t && t.antialias && 15 === game.device.iOSVersion && (t.antialias = !1), PIXI.settings.PREFER_ENV = 1, PIXI.spine.settings.GLOBAL_AUTO_UPDATE = !1, this.renderer = new r.default({
          canvas: this.canvas,
          stage: this.stage,
          resolution: this.device.rendererResolution,
          config: t
        }), gsap.TweenMax.ticker.addEventListener("tick", () => {
          c2d.observer.emit(c2d.EventsConfig.ENGINE_TICK_UPDATE), this.renderer.render(this.stage)
        }), s.default.renderer = this.renderer, n.default.renderer = this.renderer
      }

      resize(t, e, i) {
        this.renderer.resize(t, e), this.stage.scale.set(i)
      }

      pause() {
        this.renderer.plugins.interaction.removeEvents()
      }

      resume() {
        this.renderer.plugins.interaction.interactionDOMElement = this.canvas, this.renderer.plugins.interaction.addEvents()
      }

      get compressedExtensions() {
        return this.renderer && !this._compressedExtensions && (this.renderer.texture.initCompressed(), this._compressedExtensions = this.renderer.texture.compressedExtensions), this._compressedExtensions
      }

      get extensions() {
        return this.renderer && !this._extensions && (this._extensions = Object.assign(this.renderer.context.extensions, {})), this._extensions
      }

      get parameters() {
        if (this.renderer && !this._parameters) {
          const t = this.renderer.gl;
          this._parameters = {
            maxTextures: t.getParameter(34930),
            maxTextureSize: t.getParameter(3379),
            maxCubemapSize: t.getParameter(34076),
            maxAttributes: t.getParameter(34921),
            maxVertexTextures: t.getParameter(35660),
            maxVertexUniforms: t.getParameter(36347),
            maxVaryings: t.getParameter(36348),
            maxFragmentUniforms: t.getParameter(36349)
          }, this.extensions.floatTexture ? this._parameters.maxBones = 200 : this._parameters.maxBones = Math.min(200, Math.floor((this._parameters.maxVertexUniforms - 30) / 4))
        }
        return this._parameters
      }
    }
  }, {
    "./../display3d/loaders/r3d/index.js": 108,
    "./../display3d/renderer/Renderer.js": 136,
    "./Renderer.js": 146,
    "core-js/modules/es.object.assign": 320
  }],
  146: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./../event/Signal.js")), s = o(t("./../state/StateSystem.js")), n = o(t("../utils/TrackFocus.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function l(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    class c extends PIXI.Renderer {
      constructor(t) {
        let {stage: e, canvas: i, resolution: s, config: o} = t;
        super(function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(i), !0).forEach((function (e) {
              l(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }({
          width: window.innerWidth,
          height: window.innerHeight,
          view: i,
          resolution: s,
          clearBeforeRender: !1,
          autoDensity: !0
        }, o)), this.onBeforeRender = new r.default, this.onAfterRender = new r.default, (0, n.default)({
          onLost: () => {
            e.renderable = !1
          }, onFound: () => {
            e.renderable = !0
          }
        })
      }

      addSystem(t, e) {
        return "state" === e ? super.addSystem(s.default, "state") : super.addSystem(t, e), this
      }

      render() {
        this.onBeforeRender.emit(), super.render(...arguments), this.onAfterRender.emit()
      }
    }

    i.default = c
  }, {
    "../utils/TrackFocus.js": 190,
    "./../event/Signal.js": 150,
    "./../state/StateSystem.js": 171,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  147: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../utils/TrackFocus.js")) && r.__esModule ? r : {default: r};
    i.default = class {
      constructor() {
        this._timeScale = 1, this._deltaTime = 0, this._lastTime = this.time, gsap.TweenMax.ticker.addEventListener("tick", () => {
          const t = this.time;
          this._deltaTime = t - this._lastTime, this._lastTime = t, PIXI.Ticker.shared.update(1e3 * t)
        }), (0, s.default)({
          onLost: () => {
            gsap.TweenMax.ticker.useRAF(!1)
          }, onFound: () => {
            gsap.TweenMax.ticker.useRAF(!0)
          }
        })
      }

      get time() {
        return gsap.TweenMax.ticker.time
      }

      set timeScale(t) {
        this._timeScale = t, gsap.TweenMax.globalTimeScale(t)
      }

      get timeScale() {
        return this._timeScale
      }

      get deltaTime() {
        return this._deltaTime * this._timeScale
      }

      get unscaledDeltaTime() {
        return this._deltaTime
      }

      start() {
      }

      pause() {
        gsap.TweenMax.ticker.sleep(), this.timeScale = 0
      }

      resume() {
        gsap.TweenMax.ticker.wake(), this.timeScale = 1
      }
    }
  }, {"../utils/TrackFocus.js": 190}],
  148: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e, i) {
        this._name = t, this._data = e, this._finish = i, this._lockCount = 0
      }

      get name() {
        return this._name
      }

      get data() {
        return this._data
      }

      lock() {
        this._lockCount++
      }

      unlock() {
        this._lockCount <= 0 ? console.warn("Unlock not locked event: " + this._name) : this._lockCount--, 0 === this._lockCount && this._finish && this._finish(this)
      }

      get locked() {
        return !!this._lockCount
      }
    }
  }, {}],
  149: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Event.js")) && r.__esModule ? r : {default: r};

    function n(t, e) {
      this.cb = t, this.once = e || !1
    }

    i.default = class {
      constructor() {
        this._listeners = {}
      }

      dispatch(t, e, i) {
        const r = this._listeners[t];
        if (r) {
          const n = new s.default(t, e, i);
          let o = 0;
          for (; o < r.length;) {
            const t = r[o];
            t.cb(n), t.once ? r.splice(o, 1) : ++o
          }
          n.locked || i && i()
        } else i && i()
      }

      dispatchQueue(t, e, i) {
        const r = this._listeners[t];
        if (r) {
          const t = r.slice(), s = () => {
            t.length ? t.shift().cb(e, s) : i && i()
          };
          s()
        } else i && i()
      }

      subscribe(t, e) {
        if (void 0 === t) throw new Error("Event name can not be undefined");
        this._addListener(t, new n(e))
      }

      subscribeOnce(t, e) {
        this._addListener(t, new n(e, !0))
      }

      _addListener(t, e) {
        this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e)
      }

      unsubscribe(t, e) {
        const i = this._listeners[t];
        if (i) {
          let t = 0;
          for (; t < i.length;) {
            i[t].cb === e ? i.splice(t, 1) : ++t
          }
        }
      }
    }
  }, {"./Event.js": 148}],
  150: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._func = t, this._once = e
      }

      get func() {
        return this._func
      }

      get once() {
        return this._once
      }

      emit() {
        this._func(...arguments)
      }
    }

    i.default = class {
      constructor() {
        this._slots = []
      }

      connect(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._slots.push(new r(t, e))
      }

      disconnect(t) {
        for (let e = 0; e < this._slots.length; ++e) if (this._slots[e].func === t) return void this._slots.splice(e, 1);
        console.warn("Not found function:", t, " in slot:", this)
      }

      disconnectAll() {
        this._slots = []
      }

      emit() {
        let t = 0;
        for (; t < this._slots.length;) this._slots[t].emit(...arguments), this._slots[t].once ? this._slots.splice(t, 1) : ++t
      }
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  151: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../utils/TypeCheckers.js")), n = (r = t("./State.js")) && r.__esModule ? r : {default: r};

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return o = function () {
        return t
      }, t
    }

    function a(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function l(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? a(Object(i), !0).forEach((function (e) {
          c(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function c(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    i.default = class {
      constructor(t, e) {
        this._logger = c2d.Logger.Of("FSM"), this.config = t, this.componentHandlers = e, this._states = new Map, this._actions = {}, this._currentState = null, this._sequenceTurn = []
      }

      registerStates() {
        const {states: t, sequences: e, actions: i} = this.config;
        this._actions = l(l({}, this._actions), i), Object.values(t).forEach(t => {
          const i = Object.values(this.componentHandlers).map(e => e.states[t]).filter(Boolean),
            r = Object.values(this.componentHandlers).map(t => t.globalActionsConfig), s = e[t], o = new n.default({
              name: t,
              innerSequence: s,
              actions: this._actions,
              handlers: i,
              handlerGlobalActions: r
            });
          this.states.set(t, o)
        })
      }

      start() {
        this.setCurrentState(this.states.get(this.config.entry))
      }

      async goToNextState() {
        if (!this.currentSequence) return void this._logger.error("currentSequence is ".concat(this.currentSequence));
        if (this.currentSequence.gotoNextItem(), this.currentSequence && this.currentSequence.isComplete) {
          const t = this._sequenceTurn.pop(), e = this.getState(t.name);
          return void this.exitState(e)
        }
        const t = this.currentSequence.currentItem;
        let e;
        if (s.isArray(t)) return e = this.selectState(t), void (e ? this.setCurrentState(e) : this.goToNextState());
        const i = t;
        if (this._isStateUndefined(i)) this.goToNextState(); else {
          if (e = this.getState(i), !e.check()) return this.currentSequence.name != i && await e.skip(), void this.goToNextState();
          this.setCurrentState(e)
        }
      }

      selectState(t) {
        let e;
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t.some(t => {
          if (this._isStateUndefined(t)) return;
          const i = this.getState(t);
          return i.check() ? (e = i, !0) : void 0
        }), e
      }

      setCurrentState(t) {
        this.currentSequence && this.currentSequence.isNamesMatch() ? this.beginState(t) : this.enterState(t)
      }

      async enterState(t) {
        if (this._logger.fsmStates("%c".concat(t.name), "background: #fffaea; color: #111111;", "enter"), this._currentState = t, await t.enter(), t.innerSequence) return this._sequenceTurn.push(t.innerSequence), void this.beginState(t);
        this.exitState(t)
      }

      async exitState(t) {
        this._logger.fsmStates("%c".concat(t.name), "background: #fffaea; color: #111111;", "exit"), await t.exit(), this._currentState = null, this.goToNextState()
      }

      async beginState(t) {
        this._logger.fsmStates("%c Between: ", "background: #ffd600; color: #111111;", t.name), this._currentState = t, await t.begin(), this.goToNextState()
      }

      getState(t) {
        return this._states.get(t)
      }

      get currentState() {
        return this._currentState
      }

      get currentSequence() {
        return this._sequenceTurn.last
      }

      get states() {
        return this._states
      }

      get actions() {
        return this._actions
      }

      _isStateUndefined(t) {
        const e = this.getState(t);
        return (!t || !e) && (this._logger.warn("nextState is undefined.", "state: ".concat(e, ";"), "innerSequence: ".concat(this.currentSequence.name, ";"), "index: ".concat(this.currentSequence.index, ";"), this.currentSequence.list), !0)
      }
    }
  }, {
    "../utils/TypeCheckers.js": 191,
    "./State.js": 154,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  152: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        let {entry: e, states: i, sequences: r, actions: s} = t;
        this.entry = e, this.states = i, this.sequences = r, this.actions = s, this.validate()
      }

      validate() {
        const t = Object.keys(this.sequences);
        t.forEach((e, i) => {
          c2d.utils.Searcher.isValueOf(e, this.states) ? this.sequences[e].forEach(t => {
            this.validateState(t, e, i)
          }) : console.error("sequence name is wrong. index: ".concat(i), t)
        })
      }

      validateState(t, e, i) {
        c2d.type.isArray(t) ? t.forEach(t => this.validateState(t, e, i)) : c2d.utils.Searcher.isValueOf(t, this.states) || console.error("state name is wrong. state: ".concat(t), "sequence: ".concat(e), "index: ".concat(i))
      }
    }
  }, {}],
  153: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function s(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class n {
      constructor() {
        let {
          actions: t,
          onSkip: e,
          onAbort: i,
          onFinish: r
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t && (this.actions = t), e && (this.onSkip = e), i && (this.onAbort = i), r && (this.onFinish = r)
      }
    }

    class o {
      constructor() {
        let {
          actions: t = {},
          skip: e,
          abort: i,
          finish: r
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.actions = t, e && (this.skip = e), i && (this.abort = i), r && (this.finish = r)
      }
    }

    i.default = class {
      constructor(t) {
        var e = this;
        let {name: i, handlers: n, actions: o = {}, handlerGlobalActions: a = {}} = t;
        this.name = i, this.handlers = n || {}, this.handlerGlobalActions = a, this.actions = {}, this.waitHandlers = [], Object.keys(function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(i), !0).forEach((function (e) {
              s(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }({}, o)).forEach(t => {
          this.actions[t] = function () {
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            e.actionCall(t, r)
          }
        }), this.clear()
      }

      clear() {
        this.open = !1, this.started = !1, this.finishing = !1, this.complete = !1, this.skip = !1, this.abort = !1, this.actionsQueue = [], this.handlersResults = [], this.completeCall = null
      }

      play() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this.clear(), Object.values(this.handlers).length ? (this.open = t, this.handlersResults = this.playHandlers(), this.started = !0, this.actionsQueue.length > 0 && (this.actionsQueue.forEach(t => this.actionCall(...t)), this.actionsQueue = []), this.skip && this.skipCall(), this.abort && this.abortCall(), new Promise(t => {
          this.completeCall = t, this.finishing && this.finishCall()
        })) : Promise.resolve()
      }

      close() {
        this.open = !1
      }

      playHandlers() {
        var t = this;
        let e = Object.values(this.handlers).length;
        this.waitHandlers = [];
        const i = [], r = t => {
          this.waitHandlers.remove(t), --e || (this.finishing = !0, this.started && this.finishCall())
        };
        return this.handlers.forEach(e => {
          let {key: s, handler: a} = e;
          this.waitHandlers.push(s);
          const l = a(new o({
            actions: this.actions, skip: function () {
              return t.skipCall(...arguments)
            }, abort: function () {
              return t.abortCall(...arguments)
            }, finish: () => r(s)
          })), c = new n(l);
          i.push(c)
        }), i
      }

      actionCall(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.open || !this.complete) return this.started ? (this.handlerGlobalActions.map(e => e[t]).filter(Boolean).forEach(t => t(...e)), this.handlersResults.filter(t => {
          let {actions: e} = t;
          return Boolean(e)
        }).map(e => {
          let {actions: i} = e;
          return i[t]
        }).filter(t => Boolean(t)).forEach(t => t(...e)), !0) : (this.actionsQueue.push(arguments), !0)
      }

      skipCall() {
        !this.open && this.complete || (this.skip = !0, this.started && this.handlersResults.forEach(t => {
          let {onSkip: e} = t;
          return e && e()
        }))
      }

      abortCall() {
        !this.open && this.complete || (this.abort = !0, this.started && this.handlersResults.forEach(t => {
          let {onAbort: e} = t;
          return e && e()
        }))
      }

      finishCall() {
        this.handlersResults.forEach(t => {
          let {onFinish: e} = t;
          e && e()
        }), this.complete = !0, this.completeCall()
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  154: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.promise"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("../utils/Linkedlist.js")), s = n(t("./Phase.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor(t) {
        let {name: e, innerSequence: i, actions: s, handlers: n, handlerGlobalActions: o} = t;
        this.name = e, this._logger = c2d.Logger.Of(e), this.stateHandlers = n, this.handlerGlobalActions = o, this.actions = s, this._currentPhase = null, i && (this.innerSequence = new r.default({
          name: e,
          list: i
        })), this.buildPhases()
      }

      buildPhases() {
        this.checkHandlers = this.getPhaseHandlers("check"), this.skipHandlers = this.getPhaseHandlers("skip"), this.phases = {}, ["enter", "begin", "exit"].forEach(t => {
          const e = this.getPhaseHandlers(t);
          this.phases[t] = new s.default({
            name: t,
            handlers: e,
            actions: this.actions,
            handlerGlobalActions: this.handlerGlobalActions
          })
        })
      }

      getPhaseHandlers(t) {
        const e = [];
        return this.stateHandlers.forEach(i => {
          i[t] && Object.entries(i[t]).forEach(t => {
            let [i, r] = t;
            return e.push(r)
          })
        }), e
      }

      check() {
        if (0 === this.stateHandlers.length) return !1;
        let t = !1;
        const e = Object.values(this.checkHandlers);
        return e.length ? (this._logger.fsmStates("%c".concat(this.name), "background: #fffaea; color: #111111;", "checking"), e.forEach(e => {
          let {handler: i} = e;
          t = i() || t
        }), this._logger.fsmStates("%c".concat(this.name), "background: #fffaea; color: #111111;", "check:", t)) : t = !0, t
      }

      async enter() {
        this._currentPhase = this.phases.enter, await this.phases.enter.play(!0)
      }

      async begin() {
        this.innerSequence.gotoBegin(), this._currentPhase = this.phases.begin, await this.phases.begin.play()
      }

      async exit() {
        this.phases.enter.close(), this._currentPhase = this.phases.exit, await this.phases.exit.play()
      }

      skip() {
        Object.values(this.skipHandlers).forEach(t => {
          let {handler: e} = t;
          return e()
        })
      }

      get currentPhase() {
        return this._currentPhase
      }
    }
  }, {
    "../utils/Linkedlist.js": 183,
    "./Phase.js": 153,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.promise": 321,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  155: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = l(t("./primitives/Point.js")), s = l(t("./primitives/Line.js")), n = l(t("./primitives/Rectangle.js")),
      o = l(t("./primitives/Curve.js")), a = l(t("./primitives/Vector.js"));

    function l(t) {
      return t && t.__esModule ? t : {default: t}
    }

    const c = {};
    c.Point = r.default, c.Line = s.default, c.Rectangle = n.default, c.Curve = o.default, c.Vector = a.default, c.Circle = PIXI.Circle, c.Polygon = PIXI.Polygon;
    var h = c;
    i.default = h
  }, {
    "./primitives/Curve.js": 156,
    "./primitives/Line.js": 157,
    "./primitives/Point.js": 158,
    "./primitives/Rectangle.js": 159,
    "./primitives/Vector.js": 160
  }],
  156: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e, i) {
        this.a = t, this.anchor = e, this.b = i, Object.seal(this)
      }
    }
  }, {}],
  157: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Point.js")) && r.__esModule ? r : {default: r};

    class n {
      constructor(t, e) {
        this.a = t, this.b = e, Object.seal(this)
      }

      static create(t, e) {
        return new n(t, e)
      }

      getLineIntersectionPoint(t) {
        const e = this.a.x, i = this.a.y, r = this.b.x, n = this.b.y, o = t.a.x, a = t.a.y, l = r - e, c = n - i,
          h = t.b.x - o, u = t.b.y - a, d = l * u - h * c;
        if (0 === d) return null;
        const f = d > 0, p = e - o, m = i - a, g = l * m - c * p;
        if (g < 0 == f) return null;
        const _ = h * m - u * p;
        if (_ < 0 == f) return null;
        if (g > d == f || _ > d == f) return null;
        const y = _ / d;
        return new s.default(e + y * l, i + y * c)
      }
    }

    i.default = n
  }, {"./Point.js": 158}],
  158: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.Point {
      static create(t, e) {
        return new r(t, e)
      }

      static from(t) {
        return t = t || r.ZERO, new r(t.x, t.y)
      }

      static get ZERO() {
        return new r(0, 0)
      }

      static distance(t, e) {
        return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
      }

      isInsideRectangle(t) {
        return this.x > t.x && this.x < t.x + t.width && this.y > t.y && this.y < t.y + t.height
      }
    }

    i.default = r
  }, {}],
  159: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.array.sort"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./Point.js")), s = n(t("./Line.js"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    class o extends PIXI.Rectangle {
      static create(t, e, i, r) {
        return new o(t, e, i, r)
      }

      getIntersectionPoints(t) {
        const e = s.default.create(r.default.create(this.x, this.y), r.default.create(this.x + this.width, this.y)),
          i = s.default.create(r.default.create(this.x + this.width, this.y), r.default.create(this.x + this.width, this.y + this.height)),
          n = s.default.create(r.default.create(this.x, this.y + this.height), r.default.create(this.x + this.width, this.y + this.height)),
          o = [s.default.create(r.default.create(this.x, this.y), r.default.create(this.x, this.y + this.height)), i, e, n],
          a = [];
        for (const e of t) for (const t of o) {
          const i = t.getLineIntersectionPoint(e);
          i && a.push(i)
        }
        return a.sort((t, e) => t.x - e.x), [a.first, a.last]
      }
    }

    i.default = o
  }, {
    "./Line.js": 157,
    "./Point.js": 158,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.array.sort": 317,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  160: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t, e) {
        this.x = t || 0, this.y = e || 0
      }

      set angle(t) {
        const e = this.length;
        this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
      }

      get angle() {
        return Math.atan2(this.y, this.x)
      }

      set length(t) {
        const e = this.angle;
        this.x = Math.cos(e) * t, this.y = Math.sin(e) * t
      }

      get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }

      add(t) {
        this.x += t.x, this.y += t.y
      }

      sub(t) {
        this.x -= t.x, this.y -= t.y
      }

      mult(t) {
        this.x *= t, this.y *= t
      }

      div(t) {
        this.x /= t, this.y /= t
      }

      set mag(t) {
        this.normalize(), this.mult(t)
      }

      limit(t) {
        const e = this.x * this.x + this.y * this.y;
        e > t * t && (this.div(Math.sqrt(e)), this.mult(t))
      }

      normalize() {
        const t = this.length;
        this.x = this.x / t, this.y = this.y / t
      }
    }
  }, {}],
  161: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      get _data() {
        return window.globalStore
      }

      get(t) {
        return c2d.recursiveGet(t, this._data)
      }

      set(t, e) {
        return c2d.recursiveSet(t, e, this._data), !0
      }
    }
  }, {}],
  162: [function (t, e, i) {
    "use strict";
    var r, s = (r = t("./C2D.js")) && r.__esModule ? r : {default: r};
    window.c2d = new s.default
  }, {"./C2D.js": 1}],
  163: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.split"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        let {
          qualifier: e = null,
          series: i = null,
          language: r = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = t.split("/"), n = s.pop();
        this.directories = [...s], this.extension = n.substring(n.lastIndexOf(".") + 1), this.name = n.substring(0, n.lastIndexOf(".")), this.qualifier = e, this.series = i, this.language = r
      }

      get file() {
        const t = null !== this.series ? "-".concat(this.series) : "",
          e = null !== this.language ? "_".concat(this.language) : "";
        return "".concat(this.name).concat(t).concat(e, ".").concat(this.extension)
      }

      get path() {
        const t = null !== this.qualifier ? "/".concat(this.qualifier) : "";
        return "".concat(this.directories.join("/")).concat(t, "/").concat(this.file)
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  164: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.Loader {
      constructor(t) {
        let {platform: e, resourcesDirectory: i, language: r, application: s} = t;
        super("", 1e4), this.platform = e, this.resourcesDirectory = i, this.language = r, this.onStart.add((t, e) => {
          this.parentResource = t._queue._tasks.length && t._queue._tasks.first.data
        }), this.onError.add((t, e, i) => {
          throw new Error(i.url, "\n", t)
        }), this.paths = s.paths
      }

      add(t, e, i, r) {
        return i.parentResource = this.parentResource, this.resources[t] ? (this.resources[t].onComplete.add((function () {
          r(...arguments)
        })), this) : super.add(...arguments)
      }
    }

    i.default = r
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  165: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.includes"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./File.js")) && r.__esModule ? r : {default: r};
    const n = {mobile: ["portrait", "landscape"], desktop: ["desktop"]};
    i.default = class {
      constructor(t) {
        let {resourcesDirectory: e, platform: i, language: r} = t;
        this.files = [], this.qualifier = e, this.platform = i, this.language = r, this.paths = {}, this.extraDirectories = n[this.platform]
      }

      addFiles(t, e) {
        this.paths[e] = e, this.files.push(...t.map(t => e + "/resources" + t))
      }

      getPath(t) {
        let e = null;
        return Object.keys(this.paths).forEach(i => {
          this.files.includes(i + t.path) && (e = i + t.path)
        }), e
      }

      getQualifierAndSeriesPack(t, e) {
        const i = new s.default(t, {series: 0, qualifier: e});
        let r = null, n = null;
        for (; n = this.getPath(i);) r = r || [], r.push(n), i.series++;
        return r
      }

      getQualifierPack(t, e) {
        const i = new s.default(t, {qualifier: e}), r = this.getPath(i);
        return r ? [r] : null
      }

      getSeriesPack(t) {
        const e = new s.default(t, {series: 0});
        let i = null, r = null;
        for (; r = this.getPath(e);) i = i || [], i.push(r), e.series++;
        return i
      }

      getLocalizedSingleFilePack(t) {
        const e = new s.default(t, {language: this.language}), i = this.getPath(e);
        return i ? [i] : null
      }

      getSingleFilePack(t) {
        const e = new s.default(t), i = this.getPath(e);
        return i ? [i] : null
      }

      getExtraDirectoriesFiles(t) {
        let e = null;
        return this.extraDirectories.forEach(i => {
          const r = this.getQualifierPack(t, i);
          r && (e = e || {}, e[i] = r[0])
        }), e && Object.keys(e).length > 0 && Object.keys(e).length < this.extraDirectories.length && console.error("Can not find all extra resources for file ".concat(t, ". Make sure you have both ").concat(this.extraDirectories.join(","), " config files")), e
      }

      getFilesPack(t) {
        return this.getQualifierAndSeriesPack(t, this.qualifier) || this.getQualifierPack(t, this.qualifier) || this.getSeriesPack(t) || this.getLocalizedSingleFilePack(t) || this.getSingleFilePack(t) || []
      }

      getFile(t) {
        return this.getFilesPack(t)[0]
      }

      getFilesInDirectory(t) {
        return this.files.map(t => new c2d.File(t)).filter(e => e.directories[e.directories.length - 1] == t)
      }
    }
  }, {
    "./File.js": 163,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  166: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.string.includes"), t("core-js/modules/es.string.split"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = s();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        var o = r ? Object.getOwnPropertyDescriptor(t, n) : null;
        o && (o.get || o.set) ? Object.defineProperty(i, n, o) : i[n] = t[n]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("../utils/TypeCheckers.js"));

    function s() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return s = function () {
        return t
      }, t
    }

    class n {
      constructor(t) {
        this.name = t, this.LogLevel = {
          DISABLED: 0,
          ERROR: 1,
          WARNING: 2,
          INFO: 3,
          DEBUG: 4,
          FSMSTATES: 5,
          FSMDETAILS: 6
        }, this.STYLES = {
          [this.LogLevel.ERROR]: ["color:#F85C50"],
          [this.LogLevel.WARNING]: ["color:#FFC11E"],
          [this.LogLevel.INFO]: ["color:#1771F1"],
          [this.LogLevel.DEBUG]: ["color:#00CF91"]
        }, this.DEFAULT_STYLES = [], this._currentLogLevel = this.LogLevel.DEBUG, this._setupDefaults()
      }

      _setupDefaults() {
        if (n.LOG_LEVEL) return;
        let t = [this.LogLevel.ERROR, this.LogLevel.WARNING, this.LogLevel.INFO, this.LogLevel.DEBUG, this.LogLevel.FSMSTATES, this.LogLevel.FSMDETAILS];
        if (jsvars.debug) {
          const e = c2d.parseGetParams("logLevel");
          e && (t = e.split(",").map(t => +(this.LogLevel[t.toUpperCase()] ? this.LogLevel[t.toUpperCase()] : t)))
        } else t = [this.LogLevel.ERROR];
        n.setLogLevel(t), this.debug("Logger set to ".concat(t.map(t => Object.keys(this.LogLevel)[t]).join(", ")))
      }

      static Of(t) {
        return new n(t)
      }

      static setLogLevel(t) {
        r.isNullOrUndefined(t) || (n.LOG_LEVEL = t)
      }

      debug() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.DEBUG, console.log, e)
      }

      info() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.INFO, console.info, e)
      }

      warn() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.WARNING, console.warn, e)
      }

      error() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.ERROR, console.error, e)
      }

      fsmStates() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.FSMSTATES, console.info, e)
      }

      fsmDetails() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        this._log(this.LogLevel.FSMDETAILS, console.info, e)
      }

      _log(t, e, i) {
        if (n.LOG_LEVEL.includes(t)) {
          this._currentLogLevel = t;
          const r = this._format(i);
          e.apply(console, r)
        }
      }

      _concatStyles() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "".concat(this.STYLES[this._currentLogLevel].join(";"), ";").concat(this.DEFAULT_STYLES.join(";"), ";").concat(t)
      }

      _format(t) {
        if ("string" == typeof t[0] && ["string", "undefined"].includes(typeof t[1]) && t.length <= 2) {
          const e = t[0], i = t[1];
          return ["%c".concat(n._formatDate(), " %c[").concat(this.name, "] ").concat(e), "", this._concatStyles(i)]
        }
        return t
      }

      static _formatDate() {
        const t = new Date;
        return [n.pad(t.getDate()), n.pad(t.getMonth() + 1), String(t.getFullYear()).slice(-2)].join("-") + " " + [n.pad(t.getHours()), n.pad(t.getMinutes()), n.pad(t.getSeconds())].join(":") + "." + t.getMilliseconds()
      }

      static pad(t) {
        return ("0" + t).slice(-2)
      }
    }

    i.default = n
  }, {
    "../utils/TypeCheckers.js": 191,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/es.string.split": 328
  }],
  167: [function (t, e, i) {
    "use strict";

    function r(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class s {
      constructor(t) {
        r(this, "free", !0), r(this, "data", null), this.data = t
      }
    }

    i.default = class {
      constructor(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t => t;
        r(this, "pool", {}), r(this, "resetFunction", () => {
        }), r(this, "constructorFunction", () => {
        }), this.resetFunction = e, this.constructorFunction = t
      }

      getElement() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
          e = arguments.length > 1 ? arguments[1] : void 0;
        this._checkPoolKey(t);
        const i = this.pool[t];
        for (let t = 0; t < i.length; t++) if (i[t].free) return i[t].free = !1, i[t];
        const r = this._createElement(t, e);
        return r.free = !1, r
      }

      putElement(t) {
        t.free = !0, this.resetFunction(t.data)
      }

      _createElement(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const i = this.resetFunction(this.constructorFunction(t, e)), r = new s(i);
        return this.pool[t].push(r), r
      }

      _checkPoolKey(t) {
        this.pool[t] || (this.pool[t] = [])
      }
    }
  }, {}],
  168: [function (t, e, i) {
    "use strict";

    function r(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class s {
    }

    i.default = s, r(s, "COMPONENTS_CELEBRATION_NEW_STAGE", "components.celebration.new.stage"), r(s, "COMPONENTS_INFOSCREEN_CLOSE_MENU", "components.infoscreen.close.menu"), r(s, "COMPONENTS_INFOSCREEN_HIDE_CUSTOM_SCREEN", "components.infoscreen.hide.custom.screen"), r(s, "COMPONENTS_INFOSCREEN_HIDE_INSTANT_CUSTOM_SCREEN", "components.infoscreen.hide.instant.custom.screen"), r(s, "COMPONENTS_INFOSCREEN_SHOW_CUSTOM_SCREEN", "components.infoscreen.show.custom.screen"), r(s, "COMPONENTS_INFOSCREEN_UNLOCK_STATISTIC", "components.infoscreen.unlock.statistic"), r(s, "COMPONENTS_REWARD_SHOW", "components.reward.show"), r(s, "COMPONENTS_REWARD_HIDE", "components.reward.hide"), r(s, "COMPONENTS_REWARD_AMOUNT_UPDATE", "components.reward.amount.update"), r(s, "COMPONENTS_REELSET_STOP_REEL", "components.reelset.stop.reel"), r(s, "COMPONENTS_NETWORK_SEND_REQUEST", "components.network.send.request"), r(s, "COMPONENTS_NETWORK_GET_RESPONSE", "components.network.get.response"), r(s, "COMPONENTS_JACKPOTS_INFO_JACKPOTS", "components.jackpots.info.jackpots"), r(s, "COMPONENTS_JACKPOTS_WIN_JACKPOT", "components.jackpots.win.jackpot"), r(s, "COMPONENTS_JACKPOTS_UPDATE_JACKPOT", "components.jackpots.update.jackpot"), r(s, "SOUND_TURN_STATE_CHANGE", "game.sound.turn.state.change"), r(s, "TURBO_TURN_STATE_CHANGE", "game.turbo.turn.state.change"), r(s, "ENGINE_TICK_UPDATE", "engine.tick.update")
  }, {}],
  169: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor() {
        this._logger = null, this._observers = {}, this._counter = 0, this._getUid = this._getUid.bind(this)
      }

      emit(t, e) {
        if (!t) return this._error("ModulesObserverController fire error:", t);
        this._emitLocal(t, e)
      }

      subscribe(t, e) {
        if (!t || !e) return this._error("ModulesObserverController add error:", t, e);
        this._addLocal(t, e)
      }

      unsubscribe(t, e) {
        this._removeLocal(t, e)
      }

      _error() {
        this._logger || (this._logger = c2d.Logger.Of("Observer")), this._logger.error(...arguments)
      }

      _getUid() {
        return this._counter++, "observer_" + this._counter
      }

      _addLocal(t, e) {
        this._observers[t] || (this._observers[t] = {});
        const i = this._getUid();
        e._ouid = i, this._observers[t][i] = e
      }

      _removeLocal(t, e) {
        this._observers[t] && e._ouid || this._error("ModulesObserverController remove error");
        const i = e._ouid;
        delete this._observers[t][i], 0 === Object.keys(this._observers[t]).length && delete this._observers[t]
      }

      _emitLocal(t, e) {
        if (this._observers[t]) for (const [, i] of Object.entries(this._observers[t])) i(e)
      }

      clear() {
        this._observers = {}
      }
    }
  }, {"core-js/modules/es.array.iterator": 315, "core-js/modules/web.dom-collections.iterator": 341}],
  170: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.State {
      constructor() {
        super()
      }

      get depthWrite() {
        return !!(1024 & this.data)
      }

      set depthWrite(t) {
        !!(1024 & this.data) !== t && (this.data ^= 1024)
      }
    }

    i.default = r
  }, {}],
  171: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;

    class r extends PIXI.systems.StateSystem {
      constructor(t) {
        if (super(t), this.map.length >= 10) console.error("Now pixi.js used more 9 bits for state."); else {
          let t = 10 - this.map.length;
          for (let e = 0; e < t; e++) this.map.push(() => !1)
        }
        this.map.push(this.setDepthWrite)
      }

      contextChange(t) {
        super.contextChange(t), this.blendModes[PIXI.BLEND_MODES.COLOR] = [t.SRC_COLOR, t.SRC_COLOR]
      }

      setDepthWrite(t) {
        this.gl.depthMask(t)
      }
    }

    i.default = r
  }, {}],
  172: [function (t, e, i) {
    "use strict";

    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, r)
      }
      return i
    }

    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? r(Object(i), !0).forEach((function (e) {
          n(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function n(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.includes"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor() {
        this.resourcesConfig = null, this.textures = {}, this.skeletons = {}, this.configs = {}, this.styles = {}, this.animations = {}, this.audios = {}, this.gltf = {}, this.r3d = {}, this.fonts = {}
      }

      addTexture(t, e) {
        this.textures[t] = e
      }

      addTextures(t) {
        this.textures = s(s({}, this.textures), t)
      }

      getTexture(t) {
        const e = this.textures[t];
        if (!e) throw new Error("There is no texture with name " + t);
        return e
      }

      addAnimations(t) {
        Object.entries(t).forEach(t => {
          let [e, i] = t;
          this.animations[e] = i
        })
      }

      getTexturesPack(t) {
        if (null == this.animations[t]) throw new Error("there is no animation pack with name ".concat(t));
        return c2d.type.isString(this.animations[t].first) && (this.animations[t] = this.animations[t].map(t => this.getTexture(t))), this.animations[t]
      }

      addSkeleton(t, e) {
        return this.skeletons[t] = e
      }

      getSkeleton(t) {
        const e = this.skeletons[t];
        if (!e) throw new Error("There is no skeleton with name " + t);
        return e
      }

      addConfig(t) {
        this.configs[t.name] = t
      }

      hasConfig(t) {
        return !!this.configs[t]
      }

      getConfig(t) {
        let {respectOrientation: e = !1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const i = this.configs[t];
        return i ? e ? i.orientationSpecificData : i.data : null
      }

      getConfigs(t) {
        return Object.values(this.configs).filter(e => Object.keys(t).every(i => t[i] == e[i]))
      }

      getConfigsData(t) {
        return this.getConfigs(t).map(t => t.data)
      }

      addAudio(t, e) {
        return this.audios[t] = e
      }

      hasAudio(t) {
        return null != this.audios[t]
      }

      getAudio(t) {
        const e = this.audios[t];
        if (!e) throw new Error("There is no audio with name " + t);
        return e
      }

      addScene3d(t, e) {
        return this.gltf[t] = e
      }

      getScene3d(t) {
        const e = this.gltf[t];
        if (!e) throw new Error("There is no 3d scene with name " + t);
        return e
      }

      addResource3d(t, e) {
        return this.r3d[t] = e
      }

      getResource3d(t) {
        const e = this.r3d[t];
        if (!e) throw new Error("There is no resource 3d with name " + t);
        return e
      }

      addFont(t, e) {
        return this.fonts[t] = e
      }

      getFont(t) {
        const e = this.fonts[t];
        if (!e) throw new Error("There is no resource font with name " + t);
        return e
      }

      isResourcePrivate(t, e) {
        if (this.resourcesConfig[e]) {
          let i;
          return i = c2d.type.isArray(this.resourcesConfig[e]) ? this.resourcesConfig[e].find(e => e.name === t) : this.resourcesConfig[e][t], i && i.private
        }
      }

      getPublicResources(t) {
        return Object.keys(this[t]).filter(e => !this.isResourcePrivate(e, t)).reduce((e, i) => (e[i] = this[t][i], e), {})
      }

      getTexturesContainsName(t) {
        const e = {};
        return Object.entries(this.textures).forEach(i => {
          let [r, s] = i;
          if (r.includes(t)) {
            const i = r.substr(t.length);
            e[i] = s
          }
        }), e
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  173: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.constructor"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.match"), t("core-js/modules/es.string.replace"), t("core-js/modules/es.string.split"), t("core-js/modules/es.string.trim-end"), t("core-js/modules/es.string.trim-start"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        this.group = t
      }

      getAll() {
        return this._readCookie()
      }

      erase() {
        for (var t = document.cookie.split(";"), e = 0; e < t.length; e++) {
          var i = t[e], r = i.indexOf("="), s = r > -1 ? i.substr(0, r) : i;
          0 === s.indexOf(this.group) && (document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT")
        }
      }

      get(t) {
        return this.getAll()[t]
      }

      remove(t) {
        document.cookie = this.group + t + "=0; expires=Thu, 01 Jan 1970 00:00:01 GMT"
      }

      set(t, e, i) {
        if (t) if (i) {
          const r = new Date;
          let s = r.getTime();
          s += 1e3 * i, r.setTime(s), document.cookie = this.group + t + "=" + e + "; expires=" + r.toUTCString()
        } else document.cookie = this.group + t + "=" + e; else console.warn("Cookie: no key specified!");
        return this.getAll()
      }

      _readCookie() {
        const t = this.group;
        let e = document.cookie;
        const i = {};
        return e.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/) ? (e = RegExp.$1, e.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map((function (t, e) {
          i[t] = '"' === e.charAt(0) ? e.substr(1, -1).replace(/\\(.)/g, "$1") : e
        }))) : e.split(/[;]/).map((function (e) {
          const r = e.split(/=/, 2);
          let s = decodeURIComponent(r[0].trimLeft());
          r.length > 1 && 0 == s.indexOf(t) && (s = s.substring(t.length), i[s] = decodeURIComponent(r[1].trimRight()))
        })), i
      }
    }
  }, {
    "core-js/modules/es.regexp.constructor": 322,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.match": 326,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/es.string.trim-end": 329,
    "core-js/modules/es.string.trim-start": 330
  }],
  174: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.regexp.to-string"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        if (this.group = t, this.available = this.isStorageAvailable(), this.gameData = {}, this.available) {
          try {
            this.gameData = localStorage.getItem(this.group) ? JSON.parse(localStorage.getItem(this.group)) : {}
          } catch (t) {
            console.error(t)
          }
          this._save()
        }
      }

      getItem() {
        return this.get(...arguments)
      }

      setItem() {
        return this.set(...arguments)
      }

      get(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return void 0 === this.gameData[t] ? e : this.gameData[t]
      }

      set(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        if (null != e) return this.gameData[t] = e, this._save(), this.toString();
        this.remove(t)
      }

      remove(t) {
        null === t ? this.gameData = {} : delete this.gameData[t], this._save()
      }

      _save() {
        this.isStorageAvailable() && localStorage.setItem(this.group, JSON.stringify(this.gameData))
      }

      isStorageAvailable() {
        try {
          const t = window.localStorage, e = "__storage_test__";
          return t.setItem(e, e), t.removeItem(e), !0
        } catch (t) {
          return !1
        }
      }

      erase() {
        return this.isStorageAvailable() ? (localStorage.clear(), "successful") : "failed"
      }

      toString() {
        return JSON.stringify(this.gameData)
      }
    }
  }, {
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  175: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = o(t("./AssetsStore.js")), s = o(t("./LocalStorage.js")), n = o(t("./Cookies.js"));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var a = {AssetsStore: r.default, LocalStorage: s.default, Cookies: n.default};
    i.default = a
  }, {"./AssetsStore.js": 172, "./Cookies.js": 173, "./LocalStorage.js": 174}],
  176: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        let {callbacks: e} = t;
        this._logger = c2d.Logger.Of("TransportCommunicator"), this._callbacks = e || {}, this._ready = !1
      }

      close() {
      }

      readyCheck() {
        return this._ready
      }

      reconnect() {
      }

      send(t, e) {
      }

      _runCallback(t, e) {
        this._callbacks[t] && this._callbacks[t].forEach(t => t(e))
      }
    }
  }, {}],
  177: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), t("core-js/modules/es.string.includes"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../baseConnectionType.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super(t), this._reconnectTimeout = null, this._socket = null, this._customHandlersKeys = [], this._createSocket(), this._onMessage = this._onMessage.bind(this), this._onSendedMessageReceived = this._onSendedMessageReceived.bind(this)
      }

      _createSocket() {
        const {host: t, options: e} = jsvars.wss;
        this._socket = window.io(t, e), this._socket.on("disconnect", this._reconnect.bind(this)), this._socket.on("connect", this._onReady.bind(this)), this.addCustomHandler(), this._info("CREATED")
      }

      _reconnect() {
        this._socket.connect()
      }

      addCustomHandler() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "notification";
        this._customHandlersKeys.includes[t] || (this._customHandlersKeys.push(t), this._socket.on(t, (e, i) => this._onMessage(t, e, i)))
      }

      send(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "notification";
        this._info("SEND: ".concat(e, ","), t), this._socket.emit(e, t, t => this._onSendedMessageReceived(e, t))
      }

      _onSendedMessageReceived(t, e) {
        e ? (this._info("SendedMessageReceived:", e), 200 !== e.status ? this._logger.error("TransportCommunicatorIo status error: status is not 200") : this._onMessage(t, e)) : this._logger.error("TransportCommunicatorIo status error: no answer message")
      }

      _onReady() {
        this._ready = !0, this._runCallback("ready"), this._info("READY")
      }

      _onMessage(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this._info("RECEIVED: ".concat(t, ","), e);
        let r = "response";
        "notification" !== t && (r += "_".concat(t)), this._runCallback(r, this._toObject(e)), i && i()
      }

      _toObject(t) {
        return c2d.type.isObject(t) ? t : JSON.parse(t)
      }

      _info(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const i = c2d.type.isObject(e) ? JSON.stringify(e) : e.toString();
        this._logger.info("".concat(t, " ").concat(i))
      }

      close() {
        this._socket.disconnect(), this._info("CLOSED")
      }
    }

    i.default = n
  }, {
    "../baseConnectionType.js": 176,
    "core-js/modules/es.regexp.to-string": 324,
    "core-js/modules/es.string.includes": 325
  }],
  178: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("../baseConnectionType.js")) && r.__esModule ? r : {default: r};

    class n extends s.default {
      constructor(t) {
        super(t);
        const {url: e} = t;
        this._reconnectTimeout = null, this._socket = null, this._createSocket(e), this._onMessage = this._onMessage.bind(this)
      }

      _createSocket(t) {
        this._socket = new WebSocket(t), this._socket.onopen = this._onReady.bind(this), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._info("CREATED")
      }

      send(t) {
        this._info("SEND: ", t), this._socket.send(JSON.stringify(t))
      }

      _onReady() {
        this._ready = !0, this._runCallback("ready"), this._info("READY")
      }

      _onMessage(t) {
        this._info("RECEIVED: ", t.data), this._runCallback("response", this._toObject(t.data))
      }

      _onClose() {
        this._ready = !1, this._socket = null, this._runCallback("close"), this._info("CLOSE")
      }

      _onError() {
        this._ready = !1, this._runCallback("error"), this._info("ERROR")
      }

      _toObject(t) {
        if (c2d.type.isObject(t)) return t;
        try {
          return JSON.parse(t)
        } catch (e) {
          return t
        }
      }

      _info(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const i = c2d.type.isObject(e) ? JSON.stringify(e) : e.toString();
        this._logger.info("".concat(t, " ").concat(i))
      }

      close() {
        this._ready = !1, this._socket.close(), this._info("CLOSED")
      }
    }

    i.default = n
  }, {"../baseConnectionType.js": 176, "core-js/modules/es.regexp.to-string": 324}],
  179: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./service.js")) && r.__esModule ? r : {default: r};
    i.default = class {
      constructor() {
        this._services = {io: new s.default}
      }

      init() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "io",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        "io" !== t && (this._services[t] = new s.default), this._services[t].init(t, e)
      }

      setReadyHandler(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "io";
        this._services[e].checkCommunicatorReady() ? t() : this._services[e].on("ready", t)
      }

      setResponseHandler(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "io";
        this._services[i].setResponseHandler(t, e)
      }

      addCallback(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "io";
        this._services[i].on(t, e)
      }

      send(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "io";
        return this._services[i].send(t, e)
      }

      close() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "io";
        return this._services[t].close()
      }
    }
  }, {"./service.js": 180}],
  180: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = n(t("./communicators/io.js")), s = n(t("./communicators/webSocket"));

    function n(t) {
      return t && t.__esModule ? t : {default: t}
    }

    i.default = class {
      constructor() {
        this._logger, this._inited = !1, this._callbacks = {}, this._communicator = null
      }

      on(t, e) {
        this._addCallback(t, e)
      }

      init(t, e) {
        this._inited || (this._inited = !0, this._info("init"), this._createConnection(t, e))
      }

      checkCommunicatorReady() {
        return this._communicator && this._communicator.readyCheck()
      }

      send(t, e) {
        return !!this.checkCommunicatorReady() && (this._communicator.send(t, e), !0)
      }

      setResponseHandler(t, e) {
        e ? (this._communicator.addCustomHandler || this._logger.error("Transport communicator: has no custom handlers! Do not use ResponseHandler with key."), this.on("response_".concat(e), t), this._communicator.addCustomHandler(e)) : this.on("response", t)
      }

      _info(t) {
        this._logger || (this._logger = c2d.Logger.Of("Transport")), this._logger.info(t)
      }

      _addCallback(t, e) {
        this._callbacks[t] || (this._callbacks[t] = []), this._callbacks[t].push(e)
      }

      _createConnection() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "io",
          e = arguments.length > 1 ? arguments[1] : void 0;
        const i = this._callbacks;
        "io" === t ? this._communicator = new r.default({callbacks: i}) : "webSocket" === t && (this._communicator = new s.default({
          callbacks: i,
          url: e
        })), this._communicator || this._logger.error("Transport type: '".concat(t, "' was not found!"))
      }

      close() {
        return this._communicator.close()
      }
    }
  }, {"./communicators/io.js": 177, "./communicators/webSocket": 178}],
  181: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = {
      removeEmpty: function (t) {
        return t.filter(t => t)
      }
    };
    i.default = r
  }, {}],
  182: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.replace"), t("core-js/modules/es.string.split"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r, s = (r = t("./Timeout.js")) && r.__esModule ? r : {default: r}, n = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = a();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
        var n = r ? Object.getOwnPropertyDescriptor(t, s) : null;
        n && (n.get || n.set) ? Object.defineProperty(i, s, n) : i[s] = t[s]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("./TypeCheckers.js")), o = t("./Promises.js");

    function a() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return a = function () {
        return t
      }, t
    }

    function l(t, e) {
      let i, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (arguments.length < 2) throw new Error("Arguments count should be not less than 2: (function, calls)");
      return r && 0 === e ? t() : function () {
        return t && 0 == --e && (i = t.apply(this, arguments), t = null), i
      }
    }

    const c = t => {
      if (n.isString(t)) return t.replace(/_+([a-zA-Z]{1})/g, (t, e) => e.toUpperCase());
      if (n.isObject(t)) {
        const e = {};
        for (const i in t) {
          e[c(i)] = c(t[i])
        }
        return e
      }
      return t
    }, h = (t, e, i) => {
      const r = (t = "string" == typeof t ? t.split(".") : t).shift();
      return t.length > 0 ? (i[r] || (i[r] = {}), h(t, e, i[r])) : i[r] = e, !0
    };
    var u = {
      call: function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return t ? s.default.invoke(() => t.apply(r, i), e) : null
      }, last: l, once: function (t) {
        if (t._onceFunction) return t;
        if (1 != arguments.length) throw new Error("Arguments count should be 1: (function)");
        let e, i = !1;
        const r = function () {
          return i || (i = !0, e = t.apply(this, arguments)), e
        };
        return r._onceFunction = !0, r
      }, parseGetParams: t => {
        const e = {}, i = window.location.href.substring(1).split("?");
        if (i[1]) {
          const t = i[1].split("&");
          for (let i = 0; i < t.length; i++) {
            const r = t[i].split("=");
            e[r[0]] = void 0 === r[1] ? "" : r[1]
          }
        }
        return t ? e[t] : e
      }, series: function (t, e) {
        const i = () => {
          if (t.length) {
            const r = t.shift();
            if (n.isFunction(r)) r.call(e, i); else if (n.isArray(r)) {
              const t = l(i, r.length);
              r.forEach(i => {
                i.call(e, t)
              })
            }
          }
        };
        i()
      }, snake_toCamel: c, waitLast: t => new o.PromiseLast(t), recursiveGet: (t, e) => {
        if (void 0 !== e) {
          t = "string" == typeof t ? t.split(".") : t;
          for (const i of t) {
            if (void 0 === e[i]) return;
            e = e[i]
          }
          return e
        }
      }, recursiveSet: h
    };
    i.default = u
  }, {
    "./Promises.js": 186,
    "./Timeout.js": 189,
    "./TypeCheckers.js": 191,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.replace": 327,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  183: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      constructor(t) {
        let {name: e, list: i} = t;
        this.name = e, this.list = i, this._index = -1
      }

      get index() {
        return this._index
      }

      get isComplete() {
        return this.list.length == this._index
      }

      get currentItem() {
        return this.list[this._index]
      }

      gotoNextItem() {
        this._index++
      }

      gotoBegin() {
        this._index = -1
      }

      isNamesMatch() {
        return this.name === this.currentItem
      }
    }
  }, {}],
  184: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.match"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = function (t, e) {
      e = [].concat(e);
      const i = class extends t {
        constructor() {
          super(...arguments), e.forEach(t => {
            "initialize" in t.prototype && t.prototype.initialize.call(this)
          })
        }
      }, r = (t, e) => {
        Object.getOwnPropertyNames(e).forEach(i => {
          i.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
        })
      };
      return e.forEach(t => {
        r(i, t), r(i.prototype, t.prototype)
      }), i
    };
    !function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = r();
      if (e && e.has(t)) return e.get(t);
      var i = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        var o = s ? Object.getOwnPropertyDescriptor(t, n) : null;
        o && (o.get || o.set) ? Object.defineProperty(i, n, o) : i[n] = t[n]
      }
      i.default = t, e && e.set(t, i)
    }(t("./TypeCheckers.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return r = function () {
        return t
      }, t
    }
  }, {
    "./TypeCheckers.js": 191,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.match": 326,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  185: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = s();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        var o = r ? Object.getOwnPropertyDescriptor(t, n) : null;
        o && (o.get || o.set) ? Object.defineProperty(i, n, o) : i[n] = t[n]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("./TypeCheckers.js"));

    function s() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return s = function () {
        return t
      }, t
    }

    var n = {
      cloneDeep: function t(e) {
        switch (r.getType(e)) {
          case r.typeNames.OBJECT:
            if ("Object" !== e.constructor.name) break;
            return Object.entries(e).reduce((e, i) => {
              let [r, s] = i;
              return e[r] = t(s), e
            }, {});
          case r.typeNames.ARRAY:
            return e.map(e => t(e))
        }
        return e
      }, mergeDeep: function t(e, i, r) {
        for (const n in i) null !== (s = i[n]) && "object" == typeof s ? Array.isArray(i[n]) ? e[n] = r ? i[n].concat(e[n] || []) : i[n].map((function (t) {
          return t
        })) : (e[n] || (e[n] = {}), e[n] = t(e[n], i[n], r)) : e[n] = i[n];
        var s;
        return e
      }, isFullMatch: function (t, e) {
        if (typeof t != typeof e) return !1;
        if (null == t && null != e || null != t && null == e) return !1;
        let i = [], r = [];
        for (const e in t) t.hasOwnProperty(e) && i.push(e);
        for (const t in e) e.hasOwnProperty(t) && r.push(t);
        if (i.length !== r.length) return i = null, r = null, !1;
        let s = !0;
        for (const i in t) if (t.hasOwnProperty(i) && e.hasOwnProperty(i)) {
          const r = t[i], n = e[i];
          if (typeof r != typeof n || r && "object" == typeof r && r.fullMatch && !r.fullMatch(n) || "object" != typeof r && r !== n) {
            s = !1;
            break
          }
        } else s = !1;
        return s
      }
    };
    i.default = n
  }, {
    "./TypeCheckers.js": 191,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  186: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.symbol.description"), t("core-js/modules/es.promise"), Object.defineProperty(i, "__esModule", {value: !0}), i.PromiseLast = void 0;
    i.PromiseLast = class extends Promise {
      constructor() {
        let t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super((i, r) => {
          t = i, e = r
        }), this.resolve = t, this.reject = e, this.count = i, this.i = 0, this.call = () => {
          this.i++, this.i == this.count && t()
        }
      }

      static get [Symbol.species]() {
        return Promise
      }
    }
  }, {"core-js/modules/es.promise": 321, "core-js/modules/es.symbol.description": 332}],
  187: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.array.iterator"), t("core-js/modules/es.string.includes"), t("core-js/modules/es.string.split"), t("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {default: t};
      var e = s();
      if (e && e.has(t)) return e.get(t);
      var i = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        var o = r ? Object.getOwnPropertyDescriptor(t, n) : null;
        o && (o.get || o.set) ? Object.defineProperty(i, n, o) : i[n] = t[n]
      }
      i.default = t, e && e.set(t, i);
      return i
    }(t("./TypeCheckers.js"));

    function s() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap;
      return s = function () {
        return t
      }, t
    }

    var n = {
      findAttr: function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
        const i = r.isArray(t) ? t : r.isString(t) ? t.split(".") : [];
        if (!r.isObject(e) || 0 === i.length) return null;
        const s = r.isString(t) ? t : i.join(".");
        if (null != e[s]) return e[s];
        if (i.length > 1) {
          const t = e[i.shift()];
          return this.findAttr(i, t)
        }
        return e[i.first]
      }, isValueOf: function (t, e) {
        return Object.values(e).includes(t)
      }, getKeyFromValue: function (t, e) {
        return Object.keys(e)[Object.values(e).indexOf(t)]
      }, containsObject: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.entries(e).every(e => {
          let [i, r] = e;
          return !!t.hasOwnProperty(i) && t[i] == r
        })
      }
    };
    i.default = n
  }, {
    "./TypeCheckers.js": 191,
    "core-js/modules/es.array.iterator": 315,
    "core-js/modules/es.string.includes": 325,
    "core-js/modules/es.string.split": 328,
    "core-js/modules/web.dom-collections.iterator": 341
  }],
  188: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = {
      decodeFromArray: function (t) {
        if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
        let e = "";
        for (let i = 0, r = t.length; i < r; ++i) e += String.fromCharCode(t[i]);
        try {
          return decodeURIComponent(escape(e))
        } catch (t) {
          return e
        }
      }
    };
    i.default = r
  }, {}],
  189: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.promise"), Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    const r = {};

    class s {
      static wait(t, e) {
        return new Promise(i => {
          e ? c2d.Timeout.invokeOnce(e, i, t) : c2d.Timeout.invoke(i, t)
        })
      }

      static interval(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const i = c2d.Tween.delayedCall(e, () => {
          t(), i.restart(!0)
        });
        return i
      }

      static invoke(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return c2d.Tween.delayedCall(e, () => t())
      }

      static invokeOnce(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.resetInvoke(t);
        const n = s.invoke(() => {
          delete r[t], e()
        }, i);
        r[t] = n
      }

      static resetInvoke(t) {
        r[t] && (r[t].kill(), delete r[t])
      }

      static completeInvoke(t) {
        r[t] && (r[t].progress(1), delete r[t])
      }

      static reportInvokeOnce() {
        console.group("invokeOnce"), console.log("TIMEOUTS:", JSON.stringify(r)), console.groupEnd()
      }

      static clear(t) {
        t || console.warn("Can not find timeout id to clear it"), t.kill()
      }
    }

    i.default = s
  }, {"core-js/modules/es.promise": 321}],
  190: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = function (t) {
      let {onLost: e, onFound: i} = t;
      let r = "hidden";
      r in document ? document.addEventListener("visibilitychange", s) : (r = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", s) : (r = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", s) : (r = "msHidden") in document ? document.addEventListener("msvisibilitychange", s) : "onfocusin" in document ? document.onfocusin = document.onfocusout = s : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = s;

      function s(t) {
        var e = "visible", i = "hidden", s = {focus: e, focusin: e, pageshow: e, blur: i, focusout: i, pagehide: i};
        (t = t || window.event).type in s ? n(document.body.className = s[t.type]) : n(document.body.className = this[r] ? "hidden" : "visible")
      }

      void 0 !== document[r] && s({type: document[r] ? "blur" : "focus"});

      function n(t) {
        "visible" === t ? i() : "hidden" === t && e()
      }
    }
  }, {}],
  191: [function (t, e, i) {
    "use strict";
    t("core-js/modules/es.regexp.to-string"), Object.defineProperty(i, "__esModule", {value: !0}), i.getType = s, i.isString = function (t) {
      return s(t) === r.STRING
    }, i.isNumber = function (t) {
      return Number.isFinite(t)
    }, i.isArray = function (t) {
      return Array.isArray(t)
    }, i.isObject = function (t) {
      return s(t) === r.OBJECT
    }, i.isFunction = function (t) {
      const e = s(t);
      return e === r.FUNCTION || e === r.ASYNC_FUNCTION
    }, i.isBoolean = function (t) {
      return "boolean" == typeof t
    }, i.isNullOrUndefined = function (t) {
      return null == t
    }, i.typeNames = void 0;
    const r = {
      OBJECT: "Object",
      ARRAY: "Array",
      STRING: "String",
      NUMBER: "Number",
      NULL: "Null",
      UNDEFINED: "Undefined",
      DATE: "Date",
      FUNCTION: "Function",
      ASYNC_FUNCTION: "AsyncFunction"
    };

    function s(t) {
      return Object.prototype.toString.call(t).slice(8, -1)
    }

    i.typeNames = r
  }, {"core-js/modules/es.regexp.to-string": 324}],
  192: [function (t, e, i) {
    "use strict";

    function r(t) {
      const e = this.Latest = t(this.Latest), i = Object.getOwnPropertyDescriptors(e.prototype),
        r = Object.getPrototypeOf(e.prototype);
      Object.defineProperties(this.prototype, i), Object.setPrototypeOf(this.prototype, r)
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.modifiable = function (t) {
      const e = Object.getPrototypeOf(t.prototype),
        i = "\n  return class __Produced__".concat(t.name, " extends SuperClass {\n    constructor() {\n      super(...arguments);\n      this.baseSuper = BaseSuper;\n    }\n  }"),
        s = new Function("SuperClass", "BaseSuper", i)(t, e);
      return s.Latest = t, s.Base = t, s.modify = r, s
    }
  }, {}],
  193: [function (t, e, i) {
    "use strict";

    function r() {
      return navigator.languages ? navigator.languages[0] : navigator.userLanguage ? navigator.userLanguage : navigator.language
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    i.default = class {
      static toCurrency(t, e) {
        let i, {currency: s, language: n = r()} = e;
        try {
          i = Number(t).toLocaleString(n, {
            style: "currency",
            minimumFractionDigits: 2,
            currency: s
          }), i == t && (i = s + " " + t)
        } catch (e) {
          i = s + " " + t
        }
        return i
      }

      static toLocaleStr(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {minFraction: i = 0, maxFraction: s = 2, lang: n = r()} = e,
          o = {minimumFractionDigits: i, maximumFractionDigits: s};
        return t.toLocaleString(n, o)
      }

      static toHashCode(t) {
        let e, i = 0;
        if (0 === t.length) return i;
        for (let r = 0; r < t.length; r++) e = t.charCodeAt(r), i = (i << 5) - i + e, i |= 0;
        return i
      }
    }
  }, {}],
  194: [function (t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
    var r = d(t("./Array.js")), s = d(t("./Object.js")), n = d(t("./Functions.js")), o = d(t("./Searcher.js")),
      a = d(t("./String.js")), l = d(t("./TrackFocus.js")), c = d(t("./Mixins.js")),
      h = d(t("./formatters/StringFormatter.js")), u = t("./decorators/modifiable.js");

    function d(t) {
      return t && t.__esModule ? t : {default: t}
    }

    var f = {
      Array: r.default,
      Object: s.default,
      Functions: n.default,
      Searcher: o.default,
      String: a.default,
      mixins: c.default,
      trackFocus: l.default,
      formatters: {StringFormatter: h.default},
      decorators: {modifiable: u.modifiable}
    };
    i.default = f
  }, {
    "./Array.js": 181,
    "./Functions.js": 182,
    "./Mixins.js": 184,
    "./Object.js": 185,
    "./Searcher.js": 187,
    "./String.js": 188,
    "./TrackFocus.js": 190,
    "./decorators/modifiable.js": 192,
    "./formatters/StringFormatter.js": 193
  }],
  195: [function (t, e, i) {
    e.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t
    }
  }, {}],
  196: [function (t, e, i) {
    var r = t("../internals/is-object");
    e.exports = function (t) {
      if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t
    }
  }, {"../internals/is-object": 248}],
  197: [function (t, e, i) {
    var r = t("../internals/well-known-symbol"), s = t("../internals/object-create"),
      n = t("../internals/object-define-property"), o = r("unscopables"), a = Array.prototype;
    null == a[o] && n.f(a, o, {configurable: !0, value: s(null)}), e.exports = function (t) {
      a[o][t] = !0
    }
  }, {
    "../internals/object-create": 261,
    "../internals/object-define-property": 263,
    "../internals/well-known-symbol": 311
  }],
  198: [function (t, e, i) {
    "use strict";
    var r = t("../internals/string-multibyte").charAt;
    e.exports = function (t, e, i) {
      return e + (i ? r(t, e).length : 1)
    }
  }, {"../internals/string-multibyte": 290}],
  199: [function (t, e, i) {
    e.exports = function (t, e, i) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
      return t
    }
  }, {}],
  200: [function (t, e, i) {
    var r = t("../internals/is-object");
    e.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t
    }
  }, {"../internals/is-object": 248}],
  201: [function (t, e, i) {
    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
  }, {}],
  202: [function (t, e, i) {
    "use strict";
    var r, s = t("../internals/array-buffer-native"), n = t("../internals/descriptors"), o = t("../internals/global"),
      a = t("../internals/is-object"), l = t("../internals/has"), c = t("../internals/classof"),
      h = t("../internals/create-non-enumerable-property"), u = t("../internals/redefine"),
      d = t("../internals/object-define-property").f, f = t("../internals/object-get-prototype-of"),
      p = t("../internals/object-set-prototype-of"), m = t("../internals/well-known-symbol"), g = t("../internals/uid"),
      _ = o.Int8Array, y = _ && _.prototype, v = o.Uint8ClampedArray, b = v && v.prototype, x = _ && f(_),
      j = y && f(y), w = Object.prototype, M = w.isPrototypeOf, S = m("toStringTag"), O = g("TYPED_ARRAY_TAG"),
      P = s && !!p && "Opera" !== c(o.opera), T = !1, C = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      }, A = function (t) {
        return a(t) && l(C, c(t))
      };
    for (r in C) o[r] || (P = !1);
    if ((!P || "function" != typeof x || x === Function.prototype) && (x = function () {
      throw TypeError("Incorrect invocation")
    }, P)) for (r in C) o[r] && p(o[r], x);
    if ((!P || !j || j === w) && (j = x.prototype, P)) for (r in C) o[r] && p(o[r].prototype, j);
    if (P && f(b) !== j && p(b, j), n && !l(j, S)) for (r in T = !0, d(j, S, {
      get: function () {
        return a(this) ? this[O] : void 0
      }
    }), C) o[r] && h(o[r], O, r);
    e.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: P, TYPED_ARRAY_TAG: T && O, aTypedArray: function (t) {
        if (A(t)) return t;
        throw TypeError("Target is not a typed array")
      }, aTypedArrayConstructor: function (t) {
        if (p) {
          if (M.call(x, t)) return t
        } else for (var e in C) if (l(C, r)) {
          var i = o[e];
          if (i && (t === i || M.call(i, t))) return t
        }
        throw TypeError("Target is not a typed array constructor")
      }, exportTypedArrayMethod: function (t, e, i) {
        if (n) {
          if (i) for (var r in C) {
            var s = o[r];
            s && l(s.prototype, t) && delete s.prototype[t]
          }
          j[t] && !i || u(j, t, i ? e : P && y[t] || e)
        }
      }, exportTypedArrayStaticMethod: function (t, e, i) {
        var r, s;
        if (n) {
          if (p) {
            if (i) for (r in C) (s = o[r]) && l(s, t) && delete s[t];
            if (x[t] && !i) return;
            try {
              return u(x, t, i ? e : P && _[t] || e)
            } catch (t) {
            }
          }
          for (r in C) !(s = o[r]) || s[t] && !i || u(s, t, e)
        }
      }, isView: function (t) {
        var e = c(t);
        return "DataView" === e || l(C, e)
      }, isTypedArray: A, TypedArray: x, TypedArrayPrototype: j
    }
  }, {
    "../internals/array-buffer-native": 201,
    "../internals/classof": 212,
    "../internals/create-non-enumerable-property": 217,
    "../internals/descriptors": 220,
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/is-object": 248,
    "../internals/object-define-property": 263,
    "../internals/object-get-prototype-of": 267,
    "../internals/object-set-prototype-of": 271,
    "../internals/redefine": 277,
    "../internals/uid": 309,
    "../internals/well-known-symbol": 311
  }],
  203: [function (t, e, i) {
    "use strict";
    var r = t("../internals/global"), s = t("../internals/descriptors"), n = t("../internals/array-buffer-native"),
      o = t("../internals/create-non-enumerable-property"), a = t("../internals/redefine-all"),
      l = t("../internals/fails"), c = t("../internals/an-instance"), h = t("../internals/to-integer"),
      u = t("../internals/to-length"), d = t("../internals/to-index"), f = t("../internals/ieee754"),
      p = t("../internals/object-get-prototype-of"), m = t("../internals/object-set-prototype-of"),
      g = t("../internals/object-get-own-property-names").f, _ = t("../internals/object-define-property").f,
      y = t("../internals/array-fill"), v = t("../internals/set-to-string-tag"), b = t("../internals/internal-state"),
      x = b.get, j = b.set, w = r.ArrayBuffer, M = w, S = r.DataView, O = S && S.prototype, P = Object.prototype,
      T = r.RangeError, C = f.pack, A = f.unpack, E = function (t) {
        return [255 & t]
      }, k = function (t) {
        return [255 & t, t >> 8 & 255]
      }, L = function (t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
      }, F = function (t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
      }, I = function (t) {
        return C(t, 23, 4)
      }, z = function (t) {
        return C(t, 52, 8)
      }, N = function (t, e) {
        _(t.prototype, e, {
          get: function () {
            return x(this)[e]
          }
        })
      }, D = function (t, e, i, r) {
        var s = d(i), n = x(t);
        if (s + e > n.byteLength) throw T("Wrong index");
        var o = x(n.buffer).bytes, a = s + n.byteOffset, l = o.slice(a, a + e);
        return r ? l : l.reverse()
      }, B = function (t, e, i, r, s, n) {
        var o = d(i), a = x(t);
        if (o + e > a.byteLength) throw T("Wrong index");
        for (var l = x(a.buffer).bytes, c = o + a.byteOffset, h = r(+s), u = 0; u < e; u++) l[c + u] = h[n ? u : e - u - 1]
      };
    if (n) {
      if (!l((function () {
        w(1)
      })) || !l((function () {
        new w(-1)
      })) || l((function () {
        return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
      }))) {
        for (var R, V = (M = function (t) {
          return c(this, M), new w(d(t))
        }).prototype = w.prototype, U = g(w), H = 0; U.length > H;) (R = U[H++]) in M || o(M, R, w[R]);
        V.constructor = M
      }
      m && p(O) !== P && m(O, P);
      var W = new S(new M(2)), X = O.setInt8;
      W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || a(O, {
        setInt8: function (t, e) {
          X.call(this, t, e << 24 >> 24)
        }, setUint8: function (t, e) {
          X.call(this, t, e << 24 >> 24)
        }
      }, {unsafe: !0})
    } else M = function (t) {
      c(this, M, "ArrayBuffer");
      var e = d(t);
      j(this, {bytes: y.call(new Array(e), 0), byteLength: e}), s || (this.byteLength = e)
    }, S = function (t, e, i) {
      c(this, S, "DataView"), c(t, M, "DataView");
      var r = x(t).byteLength, n = h(e);
      if (n < 0 || n > r) throw T("Wrong offset");
      if (n + (i = void 0 === i ? r - n : u(i)) > r) throw T("Wrong length");
      j(this, {
        buffer: t,
        byteLength: i,
        byteOffset: n
      }), s || (this.buffer = t, this.byteLength = i, this.byteOffset = n)
    }, s && (N(M, "byteLength"), N(S, "buffer"), N(S, "byteLength"), N(S, "byteOffset")), a(S.prototype, {
      getInt8: function (t) {
        return D(this, 1, t)[0] << 24 >> 24
      }, getUint8: function (t) {
        return D(this, 1, t)[0]
      }, getInt16: function (t) {
        var e = D(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return (e[1] << 8 | e[0]) << 16 >> 16
      }, getUint16: function (t) {
        var e = D(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return e[1] << 8 | e[0]
      }, getInt32: function (t) {
        return F(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
      }, getUint32: function (t) {
        return F(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
      }, getFloat32: function (t) {
        return A(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
      }, getFloat64: function (t) {
        return A(D(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
      }, setInt8: function (t, e) {
        B(this, 1, t, E, e)
      }, setUint8: function (t, e) {
        B(this, 1, t, E, e)
      }, setInt16: function (t, e) {
        B(this, 2, t, k, e, arguments.length > 2 ? arguments[2] : void 0)
      }, setUint16: function (t, e) {
        B(this, 2, t, k, e, arguments.length > 2 ? arguments[2] : void 0)
      }, setInt32: function (t, e) {
        B(this, 4, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
      }, setUint32: function (t, e) {
        B(this, 4, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
      }, setFloat32: function (t, e) {
        B(this, 4, t, I, e, arguments.length > 2 ? arguments[2] : void 0)
      }, setFloat64: function (t, e) {
        B(this, 8, t, z, e, arguments.length > 2 ? arguments[2] : void 0)
      }
    });
    v(M, "ArrayBuffer"), v(S, "DataView"), e.exports = {ArrayBuffer: M, DataView: S}
  }, {
    "../internals/an-instance": 199,
    "../internals/array-buffer-native": 201,
    "../internals/array-fill": 204,
    "../internals/create-non-enumerable-property": 217,
    "../internals/descriptors": 220,
    "../internals/fails": 228,
    "../internals/global": 234,
    "../internals/ieee754": 240,
    "../internals/internal-state": 244,
    "../internals/object-define-property": 263,
    "../internals/object-get-own-property-names": 265,
    "../internals/object-get-prototype-of": 267,
    "../internals/object-set-prototype-of": 271,
    "../internals/redefine-all": 276,
    "../internals/set-to-string-tag": 285,
    "../internals/to-index": 297,
    "../internals/to-integer": 299,
    "../internals/to-length": 300
  }],
  204: [function (t, e, i) {
    "use strict";
    var r = t("../internals/to-object"), s = t("../internals/to-absolute-index"), n = t("../internals/to-length");
    e.exports = function (t) {
      for (var e = r(this), i = n(e.length), o = arguments.length, a = s(o > 1 ? arguments[1] : void 0, i), l = o > 2 ? arguments[2] : void 0, c = void 0 === l ? i : s(l, i); c > a;) e[a++] = t;
      return e
    }
  }, {"../internals/to-absolute-index": 296, "../internals/to-length": 300, "../internals/to-object": 301}],
  205: [function (t, e, i) {
    var r = t("../internals/to-indexed-object"), s = t("../internals/to-length"),
      n = t("../internals/to-absolute-index"), o = function (t) {
        return function (e, i, o) {
          var a, l = r(e), c = s(l.length), h = n(o, c);
          if (t && i != i) {
            for (; c > h;) if ((a = l[h++]) != a) return !0
          } else for (; c > h; h++) if ((t || h in l) && l[h] === i) return t || h || 0;
          return !t && -1
        }
      };
    e.exports = {includes: o(!0), indexOf: o(!1)}
  }, {"../internals/to-absolute-index": 296, "../internals/to-indexed-object": 298, "../internals/to-length": 300}],
  206: [function (t, e, i) {
    var r = t("../internals/function-bind-context"), s = t("../internals/indexed-object"),
      n = t("../internals/to-object"), o = t("../internals/to-length"), a = t("../internals/array-species-create"),
      l = [].push, c = function (t) {
        var e = 1 == t, i = 2 == t, c = 3 == t, h = 4 == t, u = 6 == t, d = 5 == t || u;
        return function (f, p, m, g) {
          for (var _, y, v = n(f), b = s(v), x = r(p, m, 3), j = o(b.length), w = 0, M = g || a, S = e ? M(f, j) : i ? M(f, 0) : void 0; j > w; w++) if ((d || w in b) && (y = x(_ = b[w], w, v), t)) if (e) S[w] = y; else if (y) switch (t) {
            case 3:
              return !0;
            case 5:
              return _;
            case 6:
              return w;
            case 2:
              l.call(S, _)
          } else if (h) return !1;
          return u ? -1 : c || h ? h : S
        }
      };
    e.exports = {forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6)}
  }, {
    "../internals/array-species-create": 208,
    "../internals/function-bind-context": 231,
    "../internals/indexed-object": 241,
    "../internals/to-length": 300,
    "../internals/to-object": 301
  }],
  207: [function (t, e, i) {
    "use strict";
    var r = t("../internals/fails");
    e.exports = function (t, e) {
      var i = [][t];
      return !!i && r((function () {
        i.call(null, e || function () {
          throw 1
        }, 1)
      }))
    }
  }, {"../internals/fails": 228}],
  208: [function (t, e, i) {
    var r = t("../internals/is-object"), s = t("../internals/is-array"),
      n = t("../internals/well-known-symbol")("species");
    e.exports = function (t, e) {
      var i;
      return s(t) && ("function" != typeof (i = t.constructor) || i !== Array && !s(i.prototype) ? r(i) && null === (i = i[n]) && (i = void 0) : i = void 0), new (void 0 === i ? Array : i)(0 === e ? 0 : e)
    }
  }, {"../internals/is-array": 246, "../internals/is-object": 248, "../internals/well-known-symbol": 311}],
  209: [function (t, e, i) {
    var r = t("../internals/an-object");
    e.exports = function (t, e, i, s) {
      try {
        return s ? e(r(i)[0], i[1]) : e(i)
      } catch (e) {
        var n = t.return;
        throw void 0 !== n && r(n.call(t)), e
      }
    }
  }, {"../internals/an-object": 200}],
  210: [function (t, e, i) {
    var r = t("../internals/well-known-symbol")("iterator"), s = !1;
    try {
      var n = 0, o = {
        next: function () {
          return {done: !!n++}
        }, return: function () {
          s = !0
        }
      };
      o[r] = function () {
        return this
      }, Array.from(o, (function () {
        throw 2
      }))
    } catch (t) {
    }
    e.exports = function (t, e) {
      if (!e && !s) return !1;
      var i = !1;
      try {
        var n = {};
        n[r] = function () {
          return {
            next: function () {
              return {done: i = !0}
            }
          }
        }, t(n)
      } catch (t) {
      }
      return i
    }
  }, {"../internals/well-known-symbol": 311}],
  211: [function (t, e, i) {
    var r = {}.toString;
    e.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, {}],
  212: [function (t, e, i) {
    var r = t("../internals/to-string-tag-support"), s = t("../internals/classof-raw"),
      n = t("../internals/well-known-symbol")("toStringTag"), o = "Arguments" == s(function () {
        return arguments
      }());
    e.exports = r ? s : function (t) {
      var e, i, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
        try {
          return t[e]
        } catch (t) {
        }
      }(e = Object(t), n)) ? i : o ? s(e) : "Object" == (r = s(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
  }, {
    "../internals/classof-raw": 211,
    "../internals/to-string-tag-support": 305,
    "../internals/well-known-symbol": 311
  }],
  213: [function (t, e, i) {
    var r = t("../internals/has"), s = t("../internals/own-keys"),
      n = t("../internals/object-get-own-property-descriptor"), o = t("../internals/object-define-property");
    e.exports = function (t, e) {
      for (var i = s(e), a = o.f, l = n.f, c = 0; c < i.length; c++) {
        var h = i[c];
        r(t, h) || a(t, h, l(e, h))
      }
    }
  }, {
    "../internals/has": 235,
    "../internals/object-define-property": 263,
    "../internals/object-get-own-property-descriptor": 264,
    "../internals/own-keys": 272
  }],
  214: [function (t, e, i) {
    var r = t("../internals/well-known-symbol")("match");
    e.exports = function (t) {
      var e = /./;
      try {
        "/./"[t](e)
      } catch (i) {
        try {
          return e[r] = !1, "/./"[t](e)
        } catch (t) {
        }
      }
      return !1
    }
  }, {"../internals/well-known-symbol": 311}],
  215: [function (t, e, i) {
    var r = t("../internals/fails");
    e.exports = !r((function () {
      function t() {
      }

      return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
  }, {"../internals/fails": 228}],
  216: [function (t, e, i) {
    "use strict";
    var r = t("../internals/iterators-core").IteratorPrototype, s = t("../internals/object-create"),
      n = t("../internals/create-property-descriptor"), o = t("../internals/set-to-string-tag"),
      a = t("../internals/iterators"), l = function () {
        return this
      };
    e.exports = function (t, e, i) {
      var c = e + " Iterator";
      return t.prototype = s(r, {next: n(1, i)}), o(t, c, !1, !0), a[c] = l, t
    }
  }, {
    "../internals/create-property-descriptor": 218,
    "../internals/iterators": 253,
    "../internals/iterators-core": 252,
    "../internals/object-create": 261,
    "../internals/set-to-string-tag": 285
  }],
  217: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/object-define-property"),
      n = t("../internals/create-property-descriptor");
    e.exports = r ? function (t, e, i) {
      return s.f(t, e, n(1, i))
    } : function (t, e, i) {
      return t[e] = i, t
    }
  }, {
    "../internals/create-property-descriptor": 218,
    "../internals/descriptors": 220,
    "../internals/object-define-property": 263
  }],
  218: [function (t, e, i) {
    e.exports = function (t, e) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
  }, {}],
  219: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/create-iterator-constructor"),
      n = t("../internals/object-get-prototype-of"), o = t("../internals/object-set-prototype-of"),
      a = t("../internals/set-to-string-tag"), l = t("../internals/create-non-enumerable-property"),
      c = t("../internals/redefine"), h = t("../internals/well-known-symbol"), u = t("../internals/is-pure"),
      d = t("../internals/iterators"), f = t("../internals/iterators-core"), p = f.IteratorPrototype,
      m = f.BUGGY_SAFARI_ITERATORS, g = h("iterator"), _ = function () {
        return this
      };
    e.exports = function (t, e, i, h, f, y, v) {
      s(i, e, h);
      var b, x, j, w = function (t) {
          if (t === f && T) return T;
          if (!m && t in O) return O[t];
          switch (t) {
            case"keys":
            case"values":
            case"entries":
              return function () {
                return new i(this, t)
              }
          }
          return function () {
            return new i(this)
          }
        }, M = e + " Iterator", S = !1, O = t.prototype, P = O[g] || O["@@iterator"] || f && O[f], T = !m && P || w(f),
        C = "Array" == e && O.entries || P;
      if (C && (b = n(C.call(new t)), p !== Object.prototype && b.next && (u || n(b) === p || (o ? o(b, p) : "function" != typeof b[g] && l(b, g, _)), a(b, M, !0, !0), u && (d[M] = _))), "values" == f && P && "values" !== P.name && (S = !0, T = function () {
        return P.call(this)
      }), u && !v || O[g] === T || l(O, g, T), d[e] = T, f) if (x = {
        values: w("values"),
        keys: y ? T : w("keys"),
        entries: w("entries")
      }, v) for (j in x) (m || S || !(j in O)) && c(O, j, x[j]); else r({target: e, proto: !0, forced: m || S}, x);
      return x
    }
  }, {
    "../internals/create-iterator-constructor": 216,
    "../internals/create-non-enumerable-property": 217,
    "../internals/export": 227,
    "../internals/is-pure": 249,
    "../internals/iterators": 253,
    "../internals/iterators-core": 252,
    "../internals/object-get-prototype-of": 267,
    "../internals/object-set-prototype-of": 271,
    "../internals/redefine": 277,
    "../internals/set-to-string-tag": 285,
    "../internals/well-known-symbol": 311
  }],
  220: [function (t, e, i) {
    var r = t("../internals/fails");
    e.exports = !r((function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    }))
  }, {"../internals/fails": 228}],
  221: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/is-object"), n = r.document, o = s(n) && s(n.createElement);
    e.exports = function (t) {
      return o ? n.createElement(t) : {}
    }
  }, {"../internals/global": 234, "../internals/is-object": 248}],
  222: [function (t, e, i) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }, {}],
  223: [function (t, e, i) {
    var r = t("../internals/engine-user-agent");
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
  }, {"../internals/engine-user-agent": 224}],
  224: [function (t, e, i) {
    var r = t("../internals/get-built-in");
    e.exports = r("navigator", "userAgent") || ""
  }, {"../internals/get-built-in": 232}],
  225: [function (t, e, i) {
    var r, s, n = t("../internals/global"), o = t("../internals/engine-user-agent"), a = n.process, l = a && a.versions,
      c = l && l.v8;
    c ? s = (r = c.split("."))[0] + r[1] : o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (s = r[1]), e.exports = s && +s
  }, {"../internals/engine-user-agent": 224, "../internals/global": 234}],
  226: [function (t, e, i) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }, {}],
  227: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/object-get-own-property-descriptor").f,
      n = t("../internals/create-non-enumerable-property"), o = t("../internals/redefine"),
      a = t("../internals/set-global"), l = t("../internals/copy-constructor-properties"),
      c = t("../internals/is-forced");
    e.exports = function (t, e) {
      var i, h, u, d, f, p = t.target, m = t.global, g = t.stat;
      if (i = m ? r : g ? r[p] || a(p, {}) : (r[p] || {}).prototype) for (h in e) {
        if (d = e[h], u = t.noTargetGet ? (f = s(i, h)) && f.value : i[h], !c(m ? h : p + (g ? "." : "#") + h, t.forced) && void 0 !== u) {
          if (typeof d == typeof u) continue;
          l(d, u)
        }
        (t.sham || u && u.sham) && n(d, "sham", !0), o(i, h, d, t)
      }
    }
  }, {
    "../internals/copy-constructor-properties": 213,
    "../internals/create-non-enumerable-property": 217,
    "../internals/global": 234,
    "../internals/is-forced": 247,
    "../internals/object-get-own-property-descriptor": 264,
    "../internals/redefine": 277,
    "../internals/set-global": 283
  }],
  228: [function (t, e, i) {
    e.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, {}],
  229: [function (t, e, i) {
    "use strict";
    t("../modules/es.regexp.exec");
    var r = t("../internals/redefine"), s = t("../internals/fails"), n = t("../internals/well-known-symbol"),
      o = t("../internals/regexp-exec"), a = t("../internals/create-non-enumerable-property"), l = n("species"),
      c = !s((function () {
        var t = /./;
        return t.exec = function () {
          var t = [];
          return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
      })), h = "$0" === "a".replace(/./, "$0"), u = n("replace"), d = !!/./[u] && "" === /./[u]("a", "$0"),
      f = !s((function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments)
        };
        var i = "ab".split(t);
        return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
      }));
    e.exports = function (t, e, i, u) {
      var p = n(t), m = !s((function () {
        var e = {};
        return e[p] = function () {
          return 7
        }, 7 != ""[t](e)
      })), g = m && !s((function () {
        var e = !1, i = /a/;
        return "split" === t && ((i = {}).constructor = {}, i.constructor[l] = function () {
          return i
        }, i.flags = "", i[p] = /./[p]), i.exec = function () {
          return e = !0, null
        }, i[p](""), !e
      }));
      if (!m || !g || "replace" === t && (!c || !h || d) || "split" === t && !f) {
        var _ = /./[p], y = i(p, ""[t], (function (t, e, i, r, s) {
          return e.exec === o ? m && !s ? {done: !0, value: _.call(e, i, r)} : {
            done: !0,
            value: t.call(i, e, r)
          } : {done: !1}
        }), {REPLACE_KEEPS_$0: h, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d}), v = y[0], b = y[1];
        r(String.prototype, t, v), r(RegExp.prototype, p, 2 == e ? function (t, e) {
          return b.call(t, this, e)
        } : function (t) {
          return b.call(t, this)
        })
      }
      u && a(RegExp.prototype[p], "sham", !0)
    }
  }, {
    "../internals/create-non-enumerable-property": 217,
    "../internals/fails": 228,
    "../internals/redefine": 277,
    "../internals/regexp-exec": 279,
    "../internals/well-known-symbol": 311,
    "../modules/es.regexp.exec": 323
  }],
  230: [function (t, e, i) {
    "use strict";
    var r = t("../internals/is-array"), s = t("../internals/to-length"), n = t("../internals/function-bind-context"),
      o = function (t, e, i, a, l, c, h, u) {
        for (var d, f = l, p = 0, m = !!h && n(h, u, 3); p < a;) {
          if (p in i) {
            if (d = m ? m(i[p], p, e) : i[p], c > 0 && r(d)) f = o(t, e, d, s(d.length), f, c - 1) - 1; else {
              if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
              t[f] = d
            }
            f++
          }
          p++
        }
        return f
      };
    e.exports = o
  }, {"../internals/function-bind-context": 231, "../internals/is-array": 246, "../internals/to-length": 300}],
  231: [function (t, e, i) {
    var r = t("../internals/a-function");
    e.exports = function (t, e, i) {
      if (r(t), void 0 === e) return t;
      switch (i) {
        case 0:
          return function () {
            return t.call(e)
          };
        case 1:
          return function (i) {
            return t.call(e, i)
          };
        case 2:
          return function (i, r) {
            return t.call(e, i, r)
          };
        case 3:
          return function (i, r, s) {
            return t.call(e, i, r, s)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
  }, {"../internals/a-function": 195}],
  232: [function (t, e, i) {
    var r = t("../internals/path"), s = t("../internals/global"), n = function (t) {
      return "function" == typeof t ? t : void 0
    };
    e.exports = function (t, e) {
      return arguments.length < 2 ? n(r[t]) || n(s[t]) : r[t] && r[t][e] || s[t] && s[t][e]
    }
  }, {"../internals/global": 234, "../internals/path": 273}],
  233: [function (t, e, i) {
    var r = t("../internals/classof"), s = t("../internals/iterators"),
      n = t("../internals/well-known-symbol")("iterator");
    e.exports = function (t) {
      if (null != t) return t[n] || t["@@iterator"] || s[r(t)]
    }
  }, {"../internals/classof": 212, "../internals/iterators": 253, "../internals/well-known-symbol": 311}],
  234: [function (t, e, i) {
    (function (t) {
      var i = function (t) {
        return t && t.Math == Math && t
      };
      e.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || Function("return this")()
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  235: [function (t, e, i) {
    var r = {}.hasOwnProperty;
    e.exports = function (t, e) {
      return r.call(t, e)
    }
  }, {}],
  236: [function (t, e, i) {
    e.exports = {}
  }, {}],
  237: [function (t, e, i) {
    var r = t("../internals/global");
    e.exports = function (t, e) {
      var i = r.console;
      i && i.error && (1 === arguments.length ? i.error(t) : i.error(t, e))
    }
  }, {"../internals/global": 234}],
  238: [function (t, e, i) {
    var r = t("../internals/get-built-in");
    e.exports = r("document", "documentElement")
  }, {"../internals/get-built-in": 232}],
  239: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/fails"), n = t("../internals/document-create-element");
    e.exports = !r && !s((function () {
      return 7 != Object.defineProperty(n("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    }))
  }, {"../internals/descriptors": 220, "../internals/document-create-element": 221, "../internals/fails": 228}],
  240: [function (t, e, i) {
    var r = Math.abs, s = Math.pow, n = Math.floor, o = Math.log, a = Math.LN2;
    e.exports = {
      pack: function (t, e, i) {
        var l, c, h, u = new Array(i), d = 8 * i - e - 1, f = (1 << d) - 1, p = f >> 1,
          m = 23 === e ? s(2, -24) - s(2, -77) : 0, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, _ = 0;
        for ((t = r(t)) != t || t === 1 / 0 ? (c = t != t ? 1 : 0, l = f) : (l = n(o(t) / a), t * (h = s(2, -l)) < 1 && (l--, h *= 2), (t += l + p >= 1 ? m / h : m * s(2, 1 - p)) * h >= 2 && (l++, h /= 2), l + p >= f ? (c = 0, l = f) : l + p >= 1 ? (c = (t * h - 1) * s(2, e), l += p) : (c = t * s(2, p - 1) * s(2, e), l = 0)); e >= 8; u[_++] = 255 & c, c /= 256, e -= 8) ;
        for (l = l << e | c, d += e; d > 0; u[_++] = 255 & l, l /= 256, d -= 8) ;
        return u[--_] |= 128 * g, u
      }, unpack: function (t, e) {
        var i, r = t.length, n = 8 * r - e - 1, o = (1 << n) - 1, a = o >> 1, l = n - 7, c = r - 1, h = t[c--],
          u = 127 & h;
        for (h >>= 7; l > 0; u = 256 * u + t[c], c--, l -= 8) ;
        for (i = u & (1 << -l) - 1, u >>= -l, l += e; l > 0; i = 256 * i + t[c], c--, l -= 8) ;
        if (0 === u) u = 1 - a; else {
          if (u === o) return i ? NaN : h ? -1 / 0 : 1 / 0;
          i += s(2, e), u -= a
        }
        return (h ? -1 : 1) * i * s(2, u - e)
      }
    }
  }, {}],
  241: [function (t, e, i) {
    var r = t("../internals/fails"), s = t("../internals/classof-raw"), n = "".split;
    e.exports = r((function () {
      return !Object("z").propertyIsEnumerable(0)
    })) ? function (t) {
      return "String" == s(t) ? n.call(t, "") : Object(t)
    } : Object
  }, {"../internals/classof-raw": 211, "../internals/fails": 228}],
  242: [function (t, e, i) {
    var r = t("../internals/is-object"), s = t("../internals/object-set-prototype-of");
    e.exports = function (t, e, i) {
      var n, o;
      return s && "function" == typeof (n = e.constructor) && n !== i && r(o = n.prototype) && o !== i.prototype && s(t, o), t
    }
  }, {"../internals/is-object": 248, "../internals/object-set-prototype-of": 271}],
  243: [function (t, e, i) {
    var r = t("../internals/shared-store"), s = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
      return s.call(t)
    }), e.exports = r.inspectSource
  }, {"../internals/shared-store": 287}],
  244: [function (t, e, i) {
    var r, s, n, o = t("../internals/native-weak-map"), a = t("../internals/global"), l = t("../internals/is-object"),
      c = t("../internals/create-non-enumerable-property"), h = t("../internals/has"), u = t("../internals/shared-key"),
      d = t("../internals/hidden-keys"), f = a.WeakMap;
    if (o) {
      var p = new f, m = p.get, g = p.has, _ = p.set;
      r = function (t, e) {
        return _.call(p, t, e), e
      }, s = function (t) {
        return m.call(p, t) || {}
      }, n = function (t) {
        return g.call(p, t)
      }
    } else {
      var y = u("state");
      d[y] = !0, r = function (t, e) {
        return c(t, y, e), e
      }, s = function (t) {
        return h(t, y) ? t[y] : {}
      }, n = function (t) {
        return h(t, y)
      }
    }
    e.exports = {
      set: r, get: s, has: n, enforce: function (t) {
        return n(t) ? s(t) : r(t, {})
      }, getterFor: function (t) {
        return function (e) {
          var i;
          if (!l(e) || (i = s(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return i
        }
      }
    }
  }, {
    "../internals/create-non-enumerable-property": 217,
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/hidden-keys": 236,
    "../internals/is-object": 248,
    "../internals/native-weak-map": 257,
    "../internals/shared-key": 286
  }],
  245: [function (t, e, i) {
    var r = t("../internals/well-known-symbol"), s = t("../internals/iterators"), n = r("iterator"),
      o = Array.prototype;
    e.exports = function (t) {
      return void 0 !== t && (s.Array === t || o[n] === t)
    }
  }, {"../internals/iterators": 253, "../internals/well-known-symbol": 311}],
  246: [function (t, e, i) {
    var r = t("../internals/classof-raw");
    e.exports = Array.isArray || function (t) {
      return "Array" == r(t)
    }
  }, {"../internals/classof-raw": 211}],
  247: [function (t, e, i) {
    var r = t("../internals/fails"), s = /#|\.prototype\./, n = function (t, e) {
      var i = a[o(t)];
      return i == c || i != l && ("function" == typeof e ? r(e) : !!e)
    }, o = n.normalize = function (t) {
      return String(t).replace(s, ".").toLowerCase()
    }, a = n.data = {}, l = n.NATIVE = "N", c = n.POLYFILL = "P";
    e.exports = n
  }, {"../internals/fails": 228}],
  248: [function (t, e, i) {
    e.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, {}],
  249: [function (t, e, i) {
    e.exports = !1
  }, {}],
  250: [function (t, e, i) {
    var r = t("../internals/is-object"), s = t("../internals/classof-raw"),
      n = t("../internals/well-known-symbol")("match");
    e.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[n]) ? !!e : "RegExp" == s(t))
    }
  }, {"../internals/classof-raw": 211, "../internals/is-object": 248, "../internals/well-known-symbol": 311}],
  251: [function (t, e, i) {
    var r = t("../internals/an-object"), s = t("../internals/is-array-iterator-method"),
      n = t("../internals/to-length"), o = t("../internals/function-bind-context"),
      a = t("../internals/get-iterator-method"), l = t("../internals/call-with-safe-iteration-closing"),
      c = function (t, e) {
        this.stopped = t, this.result = e
      };
    (e.exports = function (t, e, i, h, u) {
      var d, f, p, m, g, _, y, v = o(e, i, h ? 2 : 1);
      if (u) d = t; else {
        if ("function" != typeof (f = a(t))) throw TypeError("Target is not iterable");
        if (s(f)) {
          for (p = 0, m = n(t.length); m > p; p++) if ((g = h ? v(r(y = t[p])[0], y[1]) : v(t[p])) && g instanceof c) return g;
          return new c(!1)
        }
        d = f.call(t)
      }
      for (_ = d.next; !(y = _.call(d)).done;) if ("object" == typeof (g = l(d, v, y.value, h)) && g && g instanceof c) return g;
      return new c(!1)
    }).stop = function (t) {
      return new c(!0, t)
    }
  }, {
    "../internals/an-object": 200,
    "../internals/call-with-safe-iteration-closing": 209,
    "../internals/function-bind-context": 231,
    "../internals/get-iterator-method": 233,
    "../internals/is-array-iterator-method": 245,
    "../internals/to-length": 300
  }],
  252: [function (t, e, i) {
    "use strict";
    var r, s, n, o = t("../internals/object-get-prototype-of"), a = t("../internals/create-non-enumerable-property"),
      l = t("../internals/has"), c = t("../internals/well-known-symbol"), h = t("../internals/is-pure"),
      u = c("iterator"), d = !1;
    [].keys && ("next" in (n = [].keys()) ? (s = o(o(n))) !== Object.prototype && (r = s) : d = !0), null == r && (r = {}), h || l(r, u) || a(r, u, (function () {
      return this
    })), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d}
  }, {
    "../internals/create-non-enumerable-property": 217,
    "../internals/has": 235,
    "../internals/is-pure": 249,
    "../internals/object-get-prototype-of": 267,
    "../internals/well-known-symbol": 311
  }],
  253: [function (t, e, i) {
    arguments[4][236][0].apply(i, arguments)
  }, {dup: 236}],
  254: [function (t, e, i) {
    var r, s, n, o, a, l, c, h, u = t("../internals/global"),
      d = t("../internals/object-get-own-property-descriptor").f, f = t("../internals/classof-raw"),
      p = t("../internals/task").set, m = t("../internals/engine-is-ios"),
      g = u.MutationObserver || u.WebKitMutationObserver, _ = u.process, y = u.Promise, v = "process" == f(_),
      b = d(u, "queueMicrotask"), x = b && b.value;
    x || (r = function () {
      var t, e;
      for (v && (t = _.domain) && t.exit(); s;) {
        e = s.fn, s = s.next;
        try {
          e()
        } catch (t) {
          throw s ? o() : n = void 0, t
        }
      }
      n = void 0, t && t.enter()
    }, v ? o = function () {
      _.nextTick(r)
    } : g && !m ? (a = !0, l = document.createTextNode(""), new g(r).observe(l, {characterData: !0}), o = function () {
      l.data = a = !a
    }) : y && y.resolve ? (c = y.resolve(void 0), h = c.then, o = function () {
      h.call(c, r)
    }) : o = function () {
      p.call(u, r)
    }), e.exports = x || function (t) {
      var e = {fn: t, next: void 0};
      n && (n.next = e), s || (s = e, o()), n = e
    }
  }, {
    "../internals/classof-raw": 211,
    "../internals/engine-is-ios": 223,
    "../internals/global": 234,
    "../internals/object-get-own-property-descriptor": 264,
    "../internals/task": 294
  }],
  255: [function (t, e, i) {
    var r = t("../internals/global");
    e.exports = r.Promise
  }, {"../internals/global": 234}],
  256: [function (t, e, i) {
    var r = t("../internals/fails");
    e.exports = !!Object.getOwnPropertySymbols && !r((function () {
      return !String(Symbol())
    }))
  }, {"../internals/fails": 228}],
  257: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/inspect-source"), n = r.WeakMap;
    e.exports = "function" == typeof n && /native code/.test(s(n))
  }, {"../internals/global": 234, "../internals/inspect-source": 243}],
  258: [function (t, e, i) {
    "use strict";
    var r = t("../internals/a-function"), s = function (t) {
      var e, i;
      this.promise = new t((function (t, r) {
        if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
        e = t, i = r
      })), this.resolve = r(e), this.reject = r(i)
    };
    e.exports.f = function (t) {
      return new s(t)
    }
  }, {"../internals/a-function": 195}],
  259: [function (t, e, i) {
    var r = t("../internals/is-regexp");
    e.exports = function (t) {
      if (r(t)) throw TypeError("The method doesn't accept regular expressions");
      return t
    }
  }, {"../internals/is-regexp": 250}],
  260: [function (t, e, i) {
    "use strict";
    var r = t("../internals/descriptors"), s = t("../internals/fails"), n = t("../internals/object-keys"),
      o = t("../internals/object-get-own-property-symbols"), a = t("../internals/object-property-is-enumerable"),
      l = t("../internals/to-object"), c = t("../internals/indexed-object"), h = Object.assign,
      u = Object.defineProperty;
    e.exports = !h || s((function () {
      if (r && 1 !== h({b: 1}, h(u({}, "a", {
        enumerable: !0, get: function () {
          u(this, "b", {value: 3, enumerable: !1})
        }
      }), {b: 2})).b) return !0;
      var t = {}, e = {}, i = Symbol();
      return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
        e[t] = t
      })), 7 != h({}, t)[i] || "abcdefghijklmnopqrst" != n(h({}, e)).join("")
    })) ? function (t, e) {
      for (var i = l(t), s = arguments.length, h = 1, u = o.f, d = a.f; s > h;) for (var f, p = c(arguments[h++]), m = u ? n(p).concat(u(p)) : n(p), g = m.length, _ = 0; g > _;) f = m[_++], r && !d.call(p, f) || (i[f] = p[f]);
      return i
    } : h
  }, {
    "../internals/descriptors": 220,
    "../internals/fails": 228,
    "../internals/indexed-object": 241,
    "../internals/object-get-own-property-symbols": 266,
    "../internals/object-keys": 269,
    "../internals/object-property-is-enumerable": 270,
    "../internals/to-object": 301
  }],
  261: [function (t, e, i) {
    var r, s = t("../internals/an-object"), n = t("../internals/object-define-properties"),
      o = t("../internals/enum-bug-keys"), a = t("../internals/hidden-keys"), l = t("../internals/html"),
      c = t("../internals/document-create-element"), h = t("../internals/shared-key"), u = h("IE_PROTO"),
      d = function () {
      }, f = function (t) {
        return "<script>" + t + "<\/script>"
      }, p = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile")
        } catch (t) {
        }
        var t, e;
        p = r ? function (t) {
          t.write(f("")), t.close();
          var e = t.parentWindow.Object;
          return t = null, e
        }(r) : ((e = c("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F);
        for (var i = o.length; i--;) delete p.prototype[o[i]];
        return p()
      };
    a[u] = !0, e.exports = Object.create || function (t, e) {
      var i;
      return null !== t ? (d.prototype = s(t), i = new d, d.prototype = null, i[u] = t) : i = p(), void 0 === e ? i : n(i, e)
    }
  }, {
    "../internals/an-object": 200,
    "../internals/document-create-element": 221,
    "../internals/enum-bug-keys": 226,
    "../internals/hidden-keys": 236,
    "../internals/html": 238,
    "../internals/object-define-properties": 262,
    "../internals/shared-key": 286
  }],
  262: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/object-define-property"),
      n = t("../internals/an-object"), o = t("../internals/object-keys");
    e.exports = r ? Object.defineProperties : function (t, e) {
      n(t);
      for (var i, r = o(e), a = r.length, l = 0; a > l;) s.f(t, i = r[l++], e[i]);
      return t
    }
  }, {
    "../internals/an-object": 200,
    "../internals/descriptors": 220,
    "../internals/object-define-property": 263,
    "../internals/object-keys": 269
  }],
  263: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/ie8-dom-define"), n = t("../internals/an-object"),
      o = t("../internals/to-primitive"), a = Object.defineProperty;
    i.f = r ? a : function (t, e, i) {
      if (n(t), e = o(e, !0), n(i), s) try {
        return a(t, e, i)
      } catch (t) {
      }
      if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
      return "value" in i && (t[e] = i.value), t
    }
  }, {
    "../internals/an-object": 200,
    "../internals/descriptors": 220,
    "../internals/ie8-dom-define": 239,
    "../internals/to-primitive": 304
  }],
  264: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/object-property-is-enumerable"),
      n = t("../internals/create-property-descriptor"), o = t("../internals/to-indexed-object"),
      a = t("../internals/to-primitive"), l = t("../internals/has"), c = t("../internals/ie8-dom-define"),
      h = Object.getOwnPropertyDescriptor;
    i.f = r ? h : function (t, e) {
      if (t = o(t), e = a(e, !0), c) try {
        return h(t, e)
      } catch (t) {
      }
      if (l(t, e)) return n(!s.f.call(t, e), t[e])
    }
  }, {
    "../internals/create-property-descriptor": 218,
    "../internals/descriptors": 220,
    "../internals/has": 235,
    "../internals/ie8-dom-define": 239,
    "../internals/object-property-is-enumerable": 270,
    "../internals/to-indexed-object": 298,
    "../internals/to-primitive": 304
  }],
  265: [function (t, e, i) {
    var r = t("../internals/object-keys-internal"), s = t("../internals/enum-bug-keys").concat("length", "prototype");
    i.f = Object.getOwnPropertyNames || function (t) {
      return r(t, s)
    }
  }, {"../internals/enum-bug-keys": 226, "../internals/object-keys-internal": 268}],
  266: [function (t, e, i) {
    i.f = Object.getOwnPropertySymbols
  }, {}],
  267: [function (t, e, i) {
    var r = t("../internals/has"), s = t("../internals/to-object"), n = t("../internals/shared-key"),
      o = t("../internals/correct-prototype-getter"), a = n("IE_PROTO"), l = Object.prototype;
    e.exports = o ? Object.getPrototypeOf : function (t) {
      return t = s(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null
    }
  }, {
    "../internals/correct-prototype-getter": 215,
    "../internals/has": 235,
    "../internals/shared-key": 286,
    "../internals/to-object": 301
  }],
  268: [function (t, e, i) {
    var r = t("../internals/has"), s = t("../internals/to-indexed-object"),
      n = t("../internals/array-includes").indexOf, o = t("../internals/hidden-keys");
    e.exports = function (t, e) {
      var i, a = s(t), l = 0, c = [];
      for (i in a) !r(o, i) && r(a, i) && c.push(i);
      for (; e.length > l;) r(a, i = e[l++]) && (~n(c, i) || c.push(i));
      return c
    }
  }, {
    "../internals/array-includes": 205,
    "../internals/has": 235,
    "../internals/hidden-keys": 236,
    "../internals/to-indexed-object": 298
  }],
  269: [function (t, e, i) {
    var r = t("../internals/object-keys-internal"), s = t("../internals/enum-bug-keys");
    e.exports = Object.keys || function (t) {
      return r(t, s)
    }
  }, {"../internals/enum-bug-keys": 226, "../internals/object-keys-internal": 268}],
  270: [function (t, e, i) {
    "use strict";
    var r = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, n = s && !r.call({1: 2}, 1);
    i.f = n ? function (t) {
      var e = s(this, t);
      return !!e && e.enumerable
    } : r
  }, {}],
  271: [function (t, e, i) {
    var r = t("../internals/an-object"), s = t("../internals/a-possible-prototype");
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t, e = !1, i = {};
      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array
      } catch (t) {
      }
      return function (i, n) {
        return r(i), s(n), e ? t.call(i, n) : i.__proto__ = n, i
      }
    }() : void 0)
  }, {"../internals/a-possible-prototype": 196, "../internals/an-object": 200}],
  272: [function (t, e, i) {
    var r = t("../internals/get-built-in"), s = t("../internals/object-get-own-property-names"),
      n = t("../internals/object-get-own-property-symbols"), o = t("../internals/an-object");
    e.exports = r("Reflect", "ownKeys") || function (t) {
      var e = s.f(o(t)), i = n.f;
      return i ? e.concat(i(t)) : e
    }
  }, {
    "../internals/an-object": 200,
    "../internals/get-built-in": 232,
    "../internals/object-get-own-property-names": 265,
    "../internals/object-get-own-property-symbols": 266
  }],
  273: [function (t, e, i) {
    var r = t("../internals/global");
    e.exports = r
  }, {"../internals/global": 234}],
  274: [function (t, e, i) {
    e.exports = function (t) {
      try {
        return {error: !1, value: t()}
      } catch (t) {
        return {error: !0, value: t}
      }
    }
  }, {}],
  275: [function (t, e, i) {
    var r = t("../internals/an-object"), s = t("../internals/is-object"), n = t("../internals/new-promise-capability");
    e.exports = function (t, e) {
      if (r(t), s(e) && e.constructor === t) return e;
      var i = n.f(t);
      return (0, i.resolve)(e), i.promise
    }
  }, {"../internals/an-object": 200, "../internals/is-object": 248, "../internals/new-promise-capability": 258}],
  276: [function (t, e, i) {
    var r = t("../internals/redefine");
    e.exports = function (t, e, i) {
      for (var s in e) r(t, s, e[s], i);
      return t
    }
  }, {"../internals/redefine": 277}],
  277: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/create-non-enumerable-property"), n = t("../internals/has"),
      o = t("../internals/set-global"), a = t("../internals/inspect-source"), l = t("../internals/internal-state"),
      c = l.get, h = l.enforce, u = String(String).split("String");
    (e.exports = function (t, e, i, a) {
      var l = !!a && !!a.unsafe, c = !!a && !!a.enumerable, d = !!a && !!a.noTargetGet;
      "function" == typeof i && ("string" != typeof e || n(i, "name") || s(i, "name", e), h(i).source = u.join("string" == typeof e ? e : "")), t !== r ? (l ? !d && t[e] && (c = !0) : delete t[e], c ? t[e] = i : s(t, e, i)) : c ? t[e] = i : o(e, i)
    })(Function.prototype, "toString", (function () {
      return "function" == typeof this && c(this).source || a(this)
    }))
  }, {
    "../internals/create-non-enumerable-property": 217,
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/inspect-source": 243,
    "../internals/internal-state": 244,
    "../internals/set-global": 283
  }],
  278: [function (t, e, i) {
    var r = t("./classof-raw"), s = t("./regexp-exec");
    e.exports = function (t, e) {
      var i = t.exec;
      if ("function" == typeof i) {
        var n = i.call(t, e);
        if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
        return n
      }
      if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return s.call(t, e)
    }
  }, {"./classof-raw": 211, "./regexp-exec": 279}],
  279: [function (t, e, i) {
    "use strict";
    var r, s, n = t("./regexp-flags"), o = t("./regexp-sticky-helpers"), a = RegExp.prototype.exec,
      l = String.prototype.replace, c = a,
      h = (r = /a/, s = /b*/g, a.call(r, "a"), a.call(s, "a"), 0 !== r.lastIndex || 0 !== s.lastIndex),
      u = o.UNSUPPORTED_Y || o.BROKEN_CARET, d = void 0 !== /()??/.exec("")[1];
    (h || d || u) && (c = function (t) {
      var e, i, r, s, o = this, c = u && o.sticky, f = n.call(o), p = o.source, m = 0, g = t;
      return c && (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"), g = String(t).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== t[o.lastIndex - 1]) && (p = "(?: " + p + ")", g = " " + g, m++), i = new RegExp("^(?:" + p + ")", f)), d && (i = new RegExp("^" + p + "$(?!\\s)", f)), h && (e = o.lastIndex), r = a.call(c ? i : o, g), c ? r ? (r.input = r.input.slice(m), r[0] = r[0].slice(m), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : h && r && (o.lastIndex = o.global ? r.index + r[0].length : e), d && r && r.length > 1 && l.call(r[0], i, (function () {
        for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (r[s] = void 0)
      })), r
    }), e.exports = c
  }, {"./regexp-flags": 280, "./regexp-sticky-helpers": 281}],
  280: [function (t, e, i) {
    "use strict";
    var r = t("../internals/an-object");
    e.exports = function () {
      var t = r(this), e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
  }, {"../internals/an-object": 200}],
  281: [function (t, e, i) {
    "use strict";
    var r = t("./fails");

    function s(t, e) {
      return RegExp(t, e)
    }

    i.UNSUPPORTED_Y = r((function () {
      var t = s("a", "y");
      return t.lastIndex = 2, null != t.exec("abcd")
    })), i.BROKEN_CARET = r((function () {
      var t = s("^r", "gy");
      return t.lastIndex = 2, null != t.exec("str")
    }))
  }, {"./fails": 228}],
  282: [function (t, e, i) {
    e.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t
    }
  }, {}],
  283: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/create-non-enumerable-property");
    e.exports = function (t, e) {
      try {
        s(r, t, e)
      } catch (i) {
        r[t] = e
      }
      return e
    }
  }, {"../internals/create-non-enumerable-property": 217, "../internals/global": 234}],
  284: [function (t, e, i) {
    "use strict";
    var r = t("../internals/get-built-in"), s = t("../internals/object-define-property"),
      n = t("../internals/well-known-symbol"), o = t("../internals/descriptors"), a = n("species");
    e.exports = function (t) {
      var e = r(t), i = s.f;
      o && e && !e[a] && i(e, a, {
        configurable: !0, get: function () {
          return this
        }
      })
    }
  }, {
    "../internals/descriptors": 220,
    "../internals/get-built-in": 232,
    "../internals/object-define-property": 263,
    "../internals/well-known-symbol": 311
  }],
  285: [function (t, e, i) {
    var r = t("../internals/object-define-property").f, s = t("../internals/has"),
      n = t("../internals/well-known-symbol")("toStringTag");
    e.exports = function (t, e, i) {
      t && !s(t = i ? t : t.prototype, n) && r(t, n, {configurable: !0, value: e})
    }
  }, {"../internals/has": 235, "../internals/object-define-property": 263, "../internals/well-known-symbol": 311}],
  286: [function (t, e, i) {
    var r = t("../internals/shared"), s = t("../internals/uid"), n = r("keys");
    e.exports = function (t) {
      return n[t] || (n[t] = s(t))
    }
  }, {"../internals/shared": 288, "../internals/uid": 309}],
  287: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/set-global"),
      n = r["__core-js_shared__"] || s("__core-js_shared__", {});
    e.exports = n
  }, {"../internals/global": 234, "../internals/set-global": 283}],
  288: [function (t, e, i) {
    var r = t("../internals/is-pure"), s = t("../internals/shared-store");
    (e.exports = function (t, e) {
      return s[t] || (s[t] = void 0 !== e ? e : {})
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
  }, {"../internals/is-pure": 249, "../internals/shared-store": 287}],
  289: [function (t, e, i) {
    var r = t("../internals/an-object"), s = t("../internals/a-function"),
      n = t("../internals/well-known-symbol")("species");
    e.exports = function (t, e) {
      var i, o = r(t).constructor;
      return void 0 === o || null == (i = r(o)[n]) ? e : s(i)
    }
  }, {"../internals/a-function": 195, "../internals/an-object": 200, "../internals/well-known-symbol": 311}],
  290: [function (t, e, i) {
    var r = t("../internals/to-integer"), s = t("../internals/require-object-coercible"), n = function (t) {
      return function (e, i) {
        var n, o, a = String(s(e)), l = r(i), c = a.length;
        return l < 0 || l >= c ? t ? "" : void 0 : (n = a.charCodeAt(l)) < 55296 || n > 56319 || l + 1 === c || (o = a.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? a.charAt(l) : n : t ? a.slice(l, l + 2) : o - 56320 + (n - 55296 << 10) + 65536
      }
    };
    e.exports = {codeAt: n(!1), charAt: n(!0)}
  }, {"../internals/require-object-coercible": 282, "../internals/to-integer": 299}],
  291: [function (t, e, i) {
    "use strict";
    var r = t("../internals/to-integer"), s = t("../internals/require-object-coercible");
    e.exports = "".repeat || function (t) {
      var e = String(s(this)), i = "", n = r(t);
      if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; n > 0; (n >>>= 1) && (e += e)) 1 & n && (i += e);
      return i
    }
  }, {"../internals/require-object-coercible": 282, "../internals/to-integer": 299}],
  292: [function (t, e, i) {
    var r = t("../internals/fails"), s = t("../internals/whitespaces");
    e.exports = function (t) {
      return r((function () {
        return !!s[t]() || "​᠎" != "​᠎"[t]() || s[t].name !== t
      }))
    }
  }, {"../internals/fails": 228, "../internals/whitespaces": 312}],
  293: [function (t, e, i) {
    var r = t("../internals/require-object-coercible"), s = "[" + t("../internals/whitespaces") + "]",
      n = RegExp("^" + s + s + "*"), o = RegExp(s + s + "*$"), a = function (t) {
        return function (e) {
          var i = String(r(e));
          return 1 & t && (i = i.replace(n, "")), 2 & t && (i = i.replace(o, "")), i
        }
      };
    e.exports = {start: a(1), end: a(2), trim: a(3)}
  }, {"../internals/require-object-coercible": 282, "../internals/whitespaces": 312}],
  294: [function (t, e, i) {
    var r, s, n, o = t("../internals/global"), a = t("../internals/fails"), l = t("../internals/classof-raw"),
      c = t("../internals/function-bind-context"), h = t("../internals/html"),
      u = t("../internals/document-create-element"), d = t("../internals/engine-is-ios"), f = o.location,
      p = o.setImmediate, m = o.clearImmediate, g = o.process, _ = o.MessageChannel, y = o.Dispatch, v = 0, b = {},
      x = function (t) {
        if (b.hasOwnProperty(t)) {
          var e = b[t];
          delete b[t], e()
        }
      }, j = function (t) {
        return function () {
          x(t)
        }
      }, w = function (t) {
        x(t.data)
      }, M = function (t) {
        o.postMessage(t + "", f.protocol + "//" + f.host)
      };
    p && m || (p = function (t) {
      for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
      return b[++v] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e)
      }, r(v), v
    }, m = function (t) {
      delete b[t]
    }, "process" == l(g) ? r = function (t) {
      g.nextTick(j(t))
    } : y && y.now ? r = function (t) {
      y.now(j(t))
    } : _ && !d ? (n = (s = new _).port2, s.port1.onmessage = w, r = c(n.postMessage, n, 1)) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || a(M) || "file:" === f.protocol ? r = "onreadystatechange" in u("script") ? function (t) {
      h.appendChild(u("script")).onreadystatechange = function () {
        h.removeChild(this), x(t)
      }
    } : function (t) {
      setTimeout(j(t), 0)
    } : (r = M, o.addEventListener("message", w, !1))), e.exports = {set: p, clear: m}
  }, {
    "../internals/classof-raw": 211,
    "../internals/document-create-element": 221,
    "../internals/engine-is-ios": 223,
    "../internals/fails": 228,
    "../internals/function-bind-context": 231,
    "../internals/global": 234,
    "../internals/html": 238
  }],
  295: [function (t, e, i) {
    var r = t("../internals/classof-raw");
    e.exports = function (t) {
      if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
      return +t
    }
  }, {"../internals/classof-raw": 211}],
  296: [function (t, e, i) {
    var r = t("../internals/to-integer"), s = Math.max, n = Math.min;
    e.exports = function (t, e) {
      var i = r(t);
      return i < 0 ? s(i + e, 0) : n(i, e)
    }
  }, {"../internals/to-integer": 299}],
  297: [function (t, e, i) {
    var r = t("../internals/to-integer"), s = t("../internals/to-length");
    e.exports = function (t) {
      if (void 0 === t) return 0;
      var e = r(t), i = s(e);
      if (e !== i) throw RangeError("Wrong length or index");
      return i
    }
  }, {"../internals/to-integer": 299, "../internals/to-length": 300}],
  298: [function (t, e, i) {
    var r = t("../internals/indexed-object"), s = t("../internals/require-object-coercible");
    e.exports = function (t) {
      return r(s(t))
    }
  }, {"../internals/indexed-object": 241, "../internals/require-object-coercible": 282}],
  299: [function (t, e, i) {
    var r = Math.ceil, s = Math.floor;
    e.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? s : r)(t)
    }
  }, {}],
  300: [function (t, e, i) {
    var r = t("../internals/to-integer"), s = Math.min;
    e.exports = function (t) {
      return t > 0 ? s(r(t), 9007199254740991) : 0
    }
  }, {"../internals/to-integer": 299}],
  301: [function (t, e, i) {
    var r = t("../internals/require-object-coercible");
    e.exports = function (t) {
      return Object(r(t))
    }
  }, {"../internals/require-object-coercible": 282}],
  302: [function (t, e, i) {
    var r = t("../internals/to-positive-integer");
    e.exports = function (t, e) {
      var i = r(t);
      if (i % e) throw RangeError("Wrong offset");
      return i
    }
  }, {"../internals/to-positive-integer": 303}],
  303: [function (t, e, i) {
    var r = t("../internals/to-integer");
    e.exports = function (t) {
      var e = r(t);
      if (e < 0) throw RangeError("The argument can't be less than 0");
      return e
    }
  }, {"../internals/to-integer": 299}],
  304: [function (t, e, i) {
    var r = t("../internals/is-object");
    e.exports = function (t, e) {
      if (!r(t)) return t;
      var i, s;
      if (e && "function" == typeof (i = t.toString) && !r(s = i.call(t))) return s;
      if ("function" == typeof (i = t.valueOf) && !r(s = i.call(t))) return s;
      if (!e && "function" == typeof (i = t.toString) && !r(s = i.call(t))) return s;
      throw TypeError("Can't convert object to primitive value")
    }
  }, {"../internals/is-object": 248}],
  305: [function (t, e, i) {
    var r = {};
    r[t("../internals/well-known-symbol")("toStringTag")] = "z", e.exports = "[object z]" === String(r)
  }, {"../internals/well-known-symbol": 311}],
  306: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/global"), n = t("../internals/descriptors"),
      o = t("../internals/typed-array-constructors-require-wrappers"), a = t("../internals/array-buffer-view-core"),
      l = t("../internals/array-buffer"), c = t("../internals/an-instance"),
      h = t("../internals/create-property-descriptor"), u = t("../internals/create-non-enumerable-property"),
      d = t("../internals/to-length"), f = t("../internals/to-index"), p = t("../internals/to-offset"),
      m = t("../internals/to-primitive"), g = t("../internals/has"), _ = t("../internals/classof"),
      y = t("../internals/is-object"), v = t("../internals/object-create"),
      b = t("../internals/object-set-prototype-of"), x = t("../internals/object-get-own-property-names").f,
      j = t("../internals/typed-array-from"), w = t("../internals/array-iteration").forEach,
      M = t("../internals/set-species"), S = t("../internals/object-define-property"),
      O = t("../internals/object-get-own-property-descriptor"), P = t("../internals/internal-state"),
      T = t("../internals/inherit-if-required"), C = P.get, A = P.set, E = S.f, k = O.f, L = Math.round,
      F = s.RangeError, I = l.ArrayBuffer, z = l.DataView, N = a.NATIVE_ARRAY_BUFFER_VIEWS, D = a.TYPED_ARRAY_TAG,
      B = a.TypedArray, R = a.TypedArrayPrototype, V = a.aTypedArrayConstructor, U = a.isTypedArray,
      H = function (t, e) {
        for (var i = 0, r = e.length, s = new (V(t))(r); r > i;) s[i] = e[i++];
        return s
      }, W = function (t, e) {
        E(t, e, {
          get: function () {
            return C(this)[e]
          }
        })
      }, X = function (t) {
        var e;
        return t instanceof I || "ArrayBuffer" == (e = _(t)) || "SharedArrayBuffer" == e
      }, G = function (t, e) {
        return U(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
      }, q = function (t, e) {
        return G(t, e = m(e, !0)) ? h(2, t[e]) : k(t, e)
      }, Y = function (t, e, i) {
        return !(G(t, e = m(e, !0)) && y(i) && g(i, "value")) || g(i, "get") || g(i, "set") || i.configurable || g(i, "writable") && !i.writable || g(i, "enumerable") && !i.enumerable ? E(t, e, i) : (t[e] = i.value, t)
      };
    n ? (N || (O.f = q, S.f = Y, W(R, "buffer"), W(R, "byteOffset"), W(R, "byteLength"), W(R, "length")), r({
      target: "Object",
      stat: !0,
      forced: !N
    }, {getOwnPropertyDescriptor: q, defineProperty: Y}), e.exports = function (t, e, i) {
      var n = t.match(/\d+$/)[0] / 8, a = t + (i ? "Clamped" : "") + "Array", l = "get" + t, h = "set" + t, m = s[a],
        g = m, _ = g && g.prototype, S = {}, O = function (t, e) {
          E(t, e, {
            get: function () {
              return function (t, e) {
                var i = C(t);
                return i.view[l](e * n + i.byteOffset, !0)
              }(this, e)
            }, set: function (t) {
              return function (t, e, r) {
                var s = C(t);
                i && (r = (r = L(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), s.view[h](e * n + s.byteOffset, r, !0)
              }(this, e, t)
            }, enumerable: !0
          })
        };
      N ? o && (g = e((function (t, e, i, r) {
        return c(t, g, a), T(y(e) ? X(e) ? void 0 !== r ? new m(e, p(i, n), r) : void 0 !== i ? new m(e, p(i, n)) : new m(e) : U(e) ? H(g, e) : j.call(g, e) : new m(f(e)), t, g)
      })), b && b(g, B), w(x(m), (function (t) {
        t in g || u(g, t, m[t])
      })), g.prototype = _) : (g = e((function (t, e, i, r) {
        c(t, g, a);
        var s, o, l, h = 0, u = 0;
        if (y(e)) {
          if (!X(e)) return U(e) ? H(g, e) : j.call(g, e);
          s = e, u = p(i, n);
          var m = e.byteLength;
          if (void 0 === r) {
            if (m % n) throw F("Wrong length");
            if ((o = m - u) < 0) throw F("Wrong length")
          } else if ((o = d(r) * n) + u > m) throw F("Wrong length");
          l = o / n
        } else l = f(e), s = new I(o = l * n);
        for (A(t, {buffer: s, byteOffset: u, byteLength: o, length: l, view: new z(s)}); h < l;) O(t, h++)
      })), b && b(g, B), _ = g.prototype = v(R)), _.constructor !== g && u(_, "constructor", g), D && u(_, D, a), S[a] = g, r({
        global: !0,
        forced: g != m,
        sham: !N
      }, S), "BYTES_PER_ELEMENT" in g || u(g, "BYTES_PER_ELEMENT", n), "BYTES_PER_ELEMENT" in _ || u(_, "BYTES_PER_ELEMENT", n), M(a)
    }) : e.exports = function () {
    }
  }, {
    "../internals/an-instance": 199,
    "../internals/array-buffer": 203,
    "../internals/array-buffer-view-core": 202,
    "../internals/array-iteration": 206,
    "../internals/classof": 212,
    "../internals/create-non-enumerable-property": 217,
    "../internals/create-property-descriptor": 218,
    "../internals/descriptors": 220,
    "../internals/export": 227,
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/inherit-if-required": 242,
    "../internals/internal-state": 244,
    "../internals/is-object": 248,
    "../internals/object-create": 261,
    "../internals/object-define-property": 263,
    "../internals/object-get-own-property-descriptor": 264,
    "../internals/object-get-own-property-names": 265,
    "../internals/object-set-prototype-of": 271,
    "../internals/set-species": 284,
    "../internals/to-index": 297,
    "../internals/to-length": 300,
    "../internals/to-offset": 302,
    "../internals/to-primitive": 304,
    "../internals/typed-array-constructors-require-wrappers": 307,
    "../internals/typed-array-from": 308
  }],
  307: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/fails"), n = t("../internals/check-correctness-of-iteration"),
      o = t("../internals/array-buffer-view-core").NATIVE_ARRAY_BUFFER_VIEWS, a = r.ArrayBuffer, l = r.Int8Array;
    e.exports = !o || !s((function () {
      l(1)
    })) || !s((function () {
      new l(-1)
    })) || !n((function (t) {
      new l, new l(null), new l(1.5), new l(t)
    }), !0) || s((function () {
      return 1 !== new l(new a(2), 1, void 0).length
    }))
  }, {
    "../internals/array-buffer-view-core": 202,
    "../internals/check-correctness-of-iteration": 210,
    "../internals/fails": 228,
    "../internals/global": 234
  }],
  308: [function (t, e, i) {
    var r = t("../internals/to-object"), s = t("../internals/to-length"), n = t("../internals/get-iterator-method"),
      o = t("../internals/is-array-iterator-method"), a = t("../internals/function-bind-context"),
      l = t("../internals/array-buffer-view-core").aTypedArrayConstructor;
    e.exports = function (t) {
      var e, i, c, h, u, d, f = r(t), p = arguments.length, m = p > 1 ? arguments[1] : void 0, g = void 0 !== m,
        _ = n(f);
      if (null != _ && !o(_)) for (d = (u = _.call(f)).next, f = []; !(h = d.call(u)).done;) f.push(h.value);
      for (g && p > 2 && (m = a(m, arguments[2], 2)), i = s(f.length), c = new (l(this))(i), e = 0; i > e; e++) c[e] = g ? m(f[e], e) : f[e];
      return c
    }
  }, {
    "../internals/array-buffer-view-core": 202,
    "../internals/function-bind-context": 231,
    "../internals/get-iterator-method": 233,
    "../internals/is-array-iterator-method": 245,
    "../internals/to-length": 300,
    "../internals/to-object": 301
  }],
  309: [function (t, e, i) {
    var r = 0, s = Math.random();
    e.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + s).toString(36)
    }
  }, {}],
  310: [function (t, e, i) {
    var r = t("../internals/native-symbol");
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
  }, {"../internals/native-symbol": 256}],
  311: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/shared"), n = t("../internals/has"),
      o = t("../internals/uid"), a = t("../internals/native-symbol"), l = t("../internals/use-symbol-as-uid"),
      c = s("wks"), h = r.Symbol, u = l ? h : h && h.withoutSetter || o;
    e.exports = function (t) {
      return n(c, t) || (a && n(h, t) ? c[t] = h[t] : c[t] = u("Symbol." + t)), c[t]
    }
  }, {
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/native-symbol": 256,
    "../internals/shared": 288,
    "../internals/uid": 309,
    "../internals/use-symbol-as-uid": 310
  }],
  312: [function (t, e, i) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
  }, {}],
  313: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/fails"), n = t("../internals/array-buffer"),
      o = t("../internals/an-object"), a = t("../internals/to-absolute-index"), l = t("../internals/to-length"),
      c = t("../internals/species-constructor"), h = n.ArrayBuffer, u = n.DataView, d = h.prototype.slice;
    r({
      target: "ArrayBuffer", proto: !0, unsafe: !0, forced: s((function () {
        return !new h(2).slice(1, void 0).byteLength
      }))
    }, {
      slice: function (t, e) {
        if (void 0 !== d && void 0 === e) return d.call(o(this), t);
        for (var i = o(this).byteLength, r = a(t, i), s = a(void 0 === e ? i : e, i), n = new (c(this, h))(l(s - r)), f = new u(this), p = new u(n), m = 0; r < s;) p.setUint8(m++, f.getUint8(r++));
        return n
      }
    })
  }, {
    "../internals/an-object": 200,
    "../internals/array-buffer": 203,
    "../internals/export": 227,
    "../internals/fails": 228,
    "../internals/species-constructor": 289,
    "../internals/to-absolute-index": 296,
    "../internals/to-length": 300
  }],
  314: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/flatten-into-array"), n = t("../internals/to-object"),
      o = t("../internals/to-length"), a = t("../internals/a-function"), l = t("../internals/array-species-create");
    r({target: "Array", proto: !0}, {
      flatMap: function (t) {
        var e, i = n(this), r = o(i.length);
        return a(t), (e = l(i, 0)).length = s(e, i, i, r, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
      }
    })
  }, {
    "../internals/a-function": 195,
    "../internals/array-species-create": 208,
    "../internals/export": 227,
    "../internals/flatten-into-array": 230,
    "../internals/to-length": 300,
    "../internals/to-object": 301
  }],
  315: [function (t, e, i) {
    "use strict";
    var r = t("../internals/to-indexed-object"), s = t("../internals/add-to-unscopables"),
      n = t("../internals/iterators"), o = t("../internals/internal-state"), a = t("../internals/define-iterator"),
      l = o.set, c = o.getterFor("Array Iterator");
    e.exports = a(Array, "Array", (function (t, e) {
      l(this, {type: "Array Iterator", target: r(t), index: 0, kind: e})
    }), (function () {
      var t = c(this), e = t.target, i = t.kind, r = t.index++;
      return !e || r >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == i ? {
        value: r,
        done: !1
      } : "values" == i ? {value: e[r], done: !1} : {value: [r, e[r]], done: !1}
    }), "values"), n.Arguments = n.Array, s("keys"), s("values"), s("entries")
  }, {
    "../internals/add-to-unscopables": 197,
    "../internals/define-iterator": 219,
    "../internals/internal-state": 244,
    "../internals/iterators": 253,
    "../internals/to-indexed-object": 298
  }],
  316: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/is-array"), n = [].reverse, o = [1, 2];
    r({target: "Array", proto: !0, forced: String(o) === String(o.reverse())}, {
      reverse: function () {
        return s(this) && (this.length = this.length), n.call(this)
      }
    })
  }, {"../internals/export": 227, "../internals/is-array": 246}],
  317: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/a-function"), n = t("../internals/to-object"),
      o = t("../internals/fails"), a = t("../internals/array-method-is-strict"), l = [], c = l.sort,
      h = o((function () {
        l.sort(void 0)
      })), u = o((function () {
        l.sort(null)
      })), d = a("sort");
    r({target: "Array", proto: !0, forced: h || !u || !d}, {
      sort: function (t) {
        return void 0 === t ? c.call(n(this)) : c.call(n(this), s(t))
      }
    })
  }, {
    "../internals/a-function": 195,
    "../internals/array-method-is-strict": 207,
    "../internals/export": 227,
    "../internals/fails": 228,
    "../internals/to-object": 301
  }],
  318: [function (t, e, i) {
    t("../internals/add-to-unscopables")("flatMap")
  }, {"../internals/add-to-unscopables": 197}],
  319: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/to-integer"), n = t("../internals/this-number-value"),
      o = t("../internals/string-repeat"), a = t("../internals/fails"), l = 1..toFixed, c = Math.floor,
      h = function (t, e, i) {
        return 0 === e ? i : e % 2 == 1 ? h(t, e - 1, i * t) : h(t * t, e / 2, i)
      };
    r({
      target: "Number",
      proto: !0,
      forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !a((function () {
        l.call({})
      }))
    }, {
      toFixed: function (t) {
        var e, i, r, a, l = n(this), u = s(t), d = [0, 0, 0, 0, 0, 0], f = "", p = "0", m = function (t, e) {
          for (var i = -1, r = e; ++i < 6;) r += t * d[i], d[i] = r % 1e7, r = c(r / 1e7)
        }, g = function (t) {
          for (var e = 6, i = 0; --e >= 0;) i += d[e], d[e] = c(i / t), i = i % t * 1e7
        }, _ = function () {
          for (var t = 6, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== d[t]) {
            var i = String(d[t]);
            e = "" === e ? i : e + o.call("0", 7 - i.length) + i
          }
          return e
        };
        if (u < 0 || u > 20) throw RangeError("Incorrect fraction digits");
        if (l != l) return "NaN";
        if (l <= -1e21 || l >= 1e21) return String(l);
        if (l < 0 && (f = "-", l = -l), l > 1e-21) if (i = (e = function (t) {
          for (var e = 0, i = t; i >= 4096;) e += 12, i /= 4096;
          for (; i >= 2;) e += 1, i /= 2;
          return e
        }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e, 1) : l / h(2, e, 1), i *= 4503599627370496, (e = 52 - e) > 0) {
          for (m(0, i), r = u; r >= 7;) m(1e7, 0), r -= 7;
          for (m(h(10, r, 1), 0), r = e - 1; r >= 23;) g(1 << 23), r -= 23;
          g(1 << r), m(1, 1), g(2), p = _()
        } else m(0, i), m(1 << -e, 0), p = _() + o.call("0", u);
        return p = u > 0 ? f + ((a = p.length) <= u ? "0." + o.call("0", u - a) + p : p.slice(0, a - u) + "." + p.slice(a - u)) : f + p
      }
    })
  }, {
    "../internals/export": 227,
    "../internals/fails": 228,
    "../internals/string-repeat": 291,
    "../internals/this-number-value": 295,
    "../internals/to-integer": 299
  }],
  320: [function (t, e, i) {
    var r = t("../internals/export"), s = t("../internals/object-assign");
    r({target: "Object", stat: !0, forced: Object.assign !== s}, {assign: s})
  }, {"../internals/export": 227, "../internals/object-assign": 260}],
  321: [function (t, e, i) {
    "use strict";
    var r, s, n, o, a = t("../internals/export"), l = t("../internals/is-pure"), c = t("../internals/global"),
      h = t("../internals/get-built-in"), u = t("../internals/native-promise-constructor"),
      d = t("../internals/redefine"), f = t("../internals/redefine-all"), p = t("../internals/set-to-string-tag"),
      m = t("../internals/set-species"), g = t("../internals/is-object"), _ = t("../internals/a-function"),
      y = t("../internals/an-instance"), v = t("../internals/classof-raw"), b = t("../internals/inspect-source"),
      x = t("../internals/iterate"), j = t("../internals/check-correctness-of-iteration"),
      w = t("../internals/species-constructor"), M = t("../internals/task").set, S = t("../internals/microtask"),
      O = t("../internals/promise-resolve"), P = t("../internals/host-report-errors"),
      T = t("../internals/new-promise-capability"), C = t("../internals/perform"), A = t("../internals/internal-state"),
      E = t("../internals/is-forced"), k = t("../internals/well-known-symbol"), L = t("../internals/engine-v8-version"),
      F = k("species"), I = "Promise", z = A.get, N = A.set, D = A.getterFor(I), B = u, R = c.TypeError, V = c.document,
      U = c.process, H = h("fetch"), W = T.f, X = W, G = "process" == v(U),
      q = !!(V && V.createEvent && c.dispatchEvent), Y = E(I, (function () {
        if (!(b(B) !== String(B))) {
          if (66 === L) return !0;
          if (!G && "function" != typeof PromiseRejectionEvent) return !0
        }
        if (l && !B.prototype.finally) return !0;
        if (L >= 51 && /native code/.test(B)) return !1;
        var t = B.resolve(1), e = function (t) {
          t((function () {
          }), (function () {
          }))
        };
        return (t.constructor = {})[F] = e, !(t.then((function () {
        })) instanceof e)
      })), K = Y || !j((function (t) {
        B.all(t).catch((function () {
        }))
      })), Q = function (t) {
        var e;
        return !(!g(t) || "function" != typeof (e = t.then)) && e
      }, J = function (t, e, i) {
        if (!e.notified) {
          e.notified = !0;
          var r = e.reactions;
          S((function () {
            for (var s = e.value, n = 1 == e.state, o = 0; r.length > o;) {
              var a, l, c, h = r[o++], u = n ? h.ok : h.fail, d = h.resolve, f = h.reject, p = h.domain;
              try {
                u ? (n || (2 === e.rejection && et(t, e), e.rejection = 1), !0 === u ? a = s : (p && p.enter(), a = u(s), p && (p.exit(), c = !0)), a === h.promise ? f(R("Promise-chain cycle")) : (l = Q(a)) ? l.call(a, d, f) : d(a)) : f(s)
              } catch (t) {
                p && !c && p.exit(), f(t)
              }
            }
            e.reactions = [], e.notified = !1, i && !e.rejection && $(t, e)
          }))
        }
      }, Z = function (t, e, i) {
        var r, s;
        q ? ((r = V.createEvent("Event")).promise = e, r.reason = i, r.initEvent(t, !1, !0), c.dispatchEvent(r)) : r = {
          promise: e,
          reason: i
        }, (s = c["on" + t]) ? s(r) : "unhandledrejection" === t && P("Unhandled promise rejection", i)
      }, $ = function (t, e) {
        M.call(c, (function () {
          var i, r = e.value;
          if (tt(e) && (i = C((function () {
            G ? U.emit("unhandledRejection", r, t) : Z("unhandledrejection", t, r)
          })), e.rejection = G || tt(e) ? 2 : 1, i.error)) throw i.value
        }))
      }, tt = function (t) {
        return 1 !== t.rejection && !t.parent
      }, et = function (t, e) {
        M.call(c, (function () {
          G ? U.emit("rejectionHandled", t) : Z("rejectionhandled", t, e.value)
        }))
      }, it = function (t, e, i, r) {
        return function (s) {
          t(e, i, s, r)
        }
      }, rt = function (t, e, i, r) {
        e.done || (e.done = !0, r && (e = r), e.value = i, e.state = 2, J(t, e, !0))
      }, st = function (t, e, i, r) {
        if (!e.done) {
          e.done = !0, r && (e = r);
          try {
            if (t === i) throw R("Promise can't be resolved itself");
            var s = Q(i);
            s ? S((function () {
              var r = {done: !1};
              try {
                s.call(i, it(st, t, r, e), it(rt, t, r, e))
              } catch (i) {
                rt(t, r, i, e)
              }
            })) : (e.value = i, e.state = 1, J(t, e, !1))
          } catch (i) {
            rt(t, {done: !1}, i, e)
          }
        }
      };
    Y && (B = function (t) {
      y(this, B, I), _(t), r.call(this);
      var e = z(this);
      try {
        t(it(st, this, e), it(rt, this, e))
      } catch (t) {
        rt(this, e, t)
      }
    }, (r = function (t) {
      N(this, {type: I, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
    }).prototype = f(B.prototype, {
      then: function (t, e) {
        var i = D(this), r = W(w(this, B));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = G ? U.domain : void 0, i.parent = !0, i.reactions.push(r), 0 != i.state && J(this, i, !1), r.promise
      }, catch: function (t) {
        return this.then(void 0, t)
      }
    }), s = function () {
      var t = new r, e = z(t);
      this.promise = t, this.resolve = it(st, t, e), this.reject = it(rt, t, e)
    }, T.f = W = function (t) {
      return t === B || t === n ? new s(t) : X(t)
    }, l || "function" != typeof u || (o = u.prototype.then, d(u.prototype, "then", (function (t, e) {
      var i = this;
      return new B((function (t, e) {
        o.call(i, t, e)
      })).then(t, e)
    }), {unsafe: !0}), "function" == typeof H && a({global: !0, enumerable: !0, forced: !0}, {
      fetch: function (t) {
        return O(B, H.apply(c, arguments))
      }
    }))), a({global: !0, wrap: !0, forced: Y}, {Promise: B}), p(B, I, !1, !0), m(I), n = h(I), a({
      target: I,
      stat: !0,
      forced: Y
    }, {
      reject: function (t) {
        var e = W(this);
        return e.reject.call(void 0, t), e.promise
      }
    }), a({target: I, stat: !0, forced: l || Y}, {
      resolve: function (t) {
        return O(l && this === n ? B : this, t)
      }
    }), a({target: I, stat: !0, forced: K}, {
      all: function (t) {
        var e = this, i = W(e), r = i.resolve, s = i.reject, n = C((function () {
          var i = _(e.resolve), n = [], o = 0, a = 1;
          x(t, (function (t) {
            var l = o++, c = !1;
            n.push(void 0), a++, i.call(e, t).then((function (t) {
              c || (c = !0, n[l] = t, --a || r(n))
            }), s)
          })), --a || r(n)
        }));
        return n.error && s(n.value), i.promise
      }, race: function (t) {
        var e = this, i = W(e), r = i.reject, s = C((function () {
          var s = _(e.resolve);
          x(t, (function (t) {
            s.call(e, t).then(i.resolve, r)
          }))
        }));
        return s.error && r(s.value), i.promise
      }
    })
  }, {
    "../internals/a-function": 195,
    "../internals/an-instance": 199,
    "../internals/check-correctness-of-iteration": 210,
    "../internals/classof-raw": 211,
    "../internals/engine-v8-version": 225,
    "../internals/export": 227,
    "../internals/get-built-in": 232,
    "../internals/global": 234,
    "../internals/host-report-errors": 237,
    "../internals/inspect-source": 243,
    "../internals/internal-state": 244,
    "../internals/is-forced": 247,
    "../internals/is-object": 248,
    "../internals/is-pure": 249,
    "../internals/iterate": 251,
    "../internals/microtask": 254,
    "../internals/native-promise-constructor": 255,
    "../internals/new-promise-capability": 258,
    "../internals/perform": 274,
    "../internals/promise-resolve": 275,
    "../internals/redefine": 277,
    "../internals/redefine-all": 276,
    "../internals/set-species": 284,
    "../internals/set-to-string-tag": 285,
    "../internals/species-constructor": 289,
    "../internals/task": 294,
    "../internals/well-known-symbol": 311
  }],
  322: [function (t, e, i) {
    var r = t("../internals/descriptors"), s = t("../internals/global"), n = t("../internals/is-forced"),
      o = t("../internals/inherit-if-required"), a = t("../internals/object-define-property").f,
      l = t("../internals/object-get-own-property-names").f, c = t("../internals/is-regexp"),
      h = t("../internals/regexp-flags"), u = t("../internals/regexp-sticky-helpers"), d = t("../internals/redefine"),
      f = t("../internals/fails"), p = t("../internals/internal-state").set, m = t("../internals/set-species"),
      g = t("../internals/well-known-symbol")("match"), _ = s.RegExp, y = _.prototype, v = /a/g, b = /a/g,
      x = new _(v) !== v, j = u.UNSUPPORTED_Y;
    if (r && n("RegExp", !x || j || f((function () {
      return b[g] = !1, _(v) != v || _(b) == b || "/a/i" != _(v, "i")
    })))) {
      for (var w = function (t, e) {
        var i, r = this instanceof w, s = c(t), n = void 0 === e;
        if (!r && s && t.constructor === w && n) return t;
        x ? s && !n && (t = t.source) : t instanceof w && (n && (e = h.call(t)), t = t.source), j && (i = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
        var a = o(x ? new _(t, e) : _(t, e), r ? this : y, w);
        return j && i && p(a, {sticky: i}), a
      }, M = function (t) {
        t in w || a(w, t, {
          configurable: !0, get: function () {
            return _[t]
          }, set: function (e) {
            _[t] = e
          }
        })
      }, S = l(_), O = 0; S.length > O;) M(S[O++]);
      y.constructor = w, w.prototype = y, d(s, "RegExp", w)
    }
    m("RegExp")
  }, {
    "../internals/descriptors": 220,
    "../internals/fails": 228,
    "../internals/global": 234,
    "../internals/inherit-if-required": 242,
    "../internals/internal-state": 244,
    "../internals/is-forced": 247,
    "../internals/is-regexp": 250,
    "../internals/object-define-property": 263,
    "../internals/object-get-own-property-names": 265,
    "../internals/redefine": 277,
    "../internals/regexp-flags": 280,
    "../internals/regexp-sticky-helpers": 281,
    "../internals/set-species": 284,
    "../internals/well-known-symbol": 311
  }],
  323: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/regexp-exec");
    r({target: "RegExp", proto: !0, forced: /./.exec !== s}, {exec: s})
  }, {"../internals/export": 227, "../internals/regexp-exec": 279}],
  324: [function (t, e, i) {
    "use strict";
    var r = t("../internals/redefine"), s = t("../internals/an-object"), n = t("../internals/fails"),
      o = t("../internals/regexp-flags"), a = RegExp.prototype, l = a.toString, c = n((function () {
        return "/a/b" != l.call({source: "a", flags: "b"})
      })), h = "toString" != l.name;
    (c || h) && r(RegExp.prototype, "toString", (function () {
      var t = s(this), e = String(t.source), i = t.flags;
      return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in a) ? o.call(t) : i)
    }), {unsafe: !0})
  }, {
    "../internals/an-object": 200,
    "../internals/fails": 228,
    "../internals/redefine": 277,
    "../internals/regexp-flags": 280
  }],
  325: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/not-a-regexp"),
      n = t("../internals/require-object-coercible");
    r({
      target: "String",
      proto: !0,
      forced: !t("../internals/correct-is-regexp-logic")("includes")
    }, {
      includes: function (t) {
        return !!~String(n(this)).indexOf(s(t), arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  }, {
    "../internals/correct-is-regexp-logic": 214,
    "../internals/export": 227,
    "../internals/not-a-regexp": 259,
    "../internals/require-object-coercible": 282
  }],
  326: [function (t, e, i) {
    "use strict";
    var r = t("../internals/fix-regexp-well-known-symbol-logic"), s = t("../internals/an-object"),
      n = t("../internals/to-length"), o = t("../internals/require-object-coercible"),
      a = t("../internals/advance-string-index"), l = t("../internals/regexp-exec-abstract");
    r("match", 1, (function (t, e, i) {
      return [function (e) {
        var i = o(this), r = null == e ? void 0 : e[t];
        return void 0 !== r ? r.call(e, i) : new RegExp(e)[t](String(i))
      }, function (t) {
        var r = i(e, t, this);
        if (r.done) return r.value;
        var o = s(t), c = String(this);
        if (!o.global) return l(o, c);
        var h = o.unicode;
        o.lastIndex = 0;
        for (var u, d = [], f = 0; null !== (u = l(o, c));) {
          var p = String(u[0]);
          d[f] = p, "" === p && (o.lastIndex = a(c, n(o.lastIndex), h)), f++
        }
        return 0 === f ? null : d
      }]
    }))
  }, {
    "../internals/advance-string-index": 198,
    "../internals/an-object": 200,
    "../internals/fix-regexp-well-known-symbol-logic": 229,
    "../internals/regexp-exec-abstract": 278,
    "../internals/require-object-coercible": 282,
    "../internals/to-length": 300
  }],
  327: [function (t, e, i) {
    "use strict";
    var r = t("../internals/fix-regexp-well-known-symbol-logic"), s = t("../internals/an-object"),
      n = t("../internals/to-object"), o = t("../internals/to-length"), a = t("../internals/to-integer"),
      l = t("../internals/require-object-coercible"), c = t("../internals/advance-string-index"),
      h = t("../internals/regexp-exec-abstract"), u = Math.max, d = Math.min, f = Math.floor,
      p = /\$([$&'`]|\d\d?|<[^>]*>)/g, m = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function (t, e, i, r) {
      var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, _ = r.REPLACE_KEEPS_$0, y = g ? "$" : "$0";
      return [function (i, r) {
        var s = l(this), n = null == i ? void 0 : i[t];
        return void 0 !== n ? n.call(i, s, r) : e.call(String(s), i, r)
      }, function (t, r) {
        if (!g && _ || "string" == typeof r && -1 === r.indexOf(y)) {
          var n = i(e, t, this, r);
          if (n.done) return n.value
        }
        var l = s(t), f = String(this), p = "function" == typeof r;
        p || (r = String(r));
        var m = l.global;
        if (m) {
          var b = l.unicode;
          l.lastIndex = 0
        }
        for (var x = []; ;) {
          var j = h(l, f);
          if (null === j) break;
          if (x.push(j), !m) break;
          "" === String(j[0]) && (l.lastIndex = c(f, o(l.lastIndex), b))
        }
        for (var w, M = "", S = 0, O = 0; O < x.length; O++) {
          j = x[O];
          for (var P = String(j[0]), T = u(d(a(j.index), f.length), 0), C = [], A = 1; A < j.length; A++) C.push(void 0 === (w = j[A]) ? w : String(w));
          var E = j.groups;
          if (p) {
            var k = [P].concat(C, T, f);
            void 0 !== E && k.push(E);
            var L = String(r.apply(void 0, k))
          } else L = v(P, f, T, C, E, r);
          T >= S && (M += f.slice(S, T) + L, S = T + P.length)
        }
        return M + f.slice(S)
      }];

      function v(t, i, r, s, o, a) {
        var l = r + t.length, c = s.length, h = m;
        return void 0 !== o && (o = n(o), h = p), e.call(a, h, (function (e, n) {
          var a;
          switch (n.charAt(0)) {
            case"$":
              return "$";
            case"&":
              return t;
            case"`":
              return i.slice(0, r);
            case"'":
              return i.slice(l);
            case"<":
              a = o[n.slice(1, -1)];
              break;
            default:
              var h = +n;
              if (0 === h) return e;
              if (h > c) {
                var u = f(h / 10);
                return 0 === u ? e : u <= c ? void 0 === s[u - 1] ? n.charAt(1) : s[u - 1] + n.charAt(1) : e
              }
              a = s[h - 1]
          }
          return void 0 === a ? "" : a
        }))
      }
    }))
  }, {
    "../internals/advance-string-index": 198,
    "../internals/an-object": 200,
    "../internals/fix-regexp-well-known-symbol-logic": 229,
    "../internals/regexp-exec-abstract": 278,
    "../internals/require-object-coercible": 282,
    "../internals/to-integer": 299,
    "../internals/to-length": 300,
    "../internals/to-object": 301
  }],
  328: [function (t, e, i) {
    "use strict";
    var r = t("../internals/fix-regexp-well-known-symbol-logic"), s = t("../internals/is-regexp"),
      n = t("../internals/an-object"), o = t("../internals/require-object-coercible"),
      a = t("../internals/species-constructor"), l = t("../internals/advance-string-index"),
      c = t("../internals/to-length"), h = t("../internals/regexp-exec-abstract"), u = t("../internals/regexp-exec"),
      d = t("../internals/fails"), f = [].push, p = Math.min, m = !d((function () {
        return !RegExp(4294967295, "y")
      }));
    r("split", 2, (function (t, e, i) {
      var r;
      return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, i) {
        var r = String(o(this)), n = void 0 === i ? 4294967295 : i >>> 0;
        if (0 === n) return [];
        if (void 0 === t) return [r];
        if (!s(t)) return e.call(r, t, n);
        for (var a, l, c, h = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, m = new RegExp(t.source, d + "g"); (a = u.call(m, r)) && !((l = m.lastIndex) > p && (h.push(r.slice(p, a.index)), a.length > 1 && a.index < r.length && f.apply(h, a.slice(1)), c = a[0].length, p = l, h.length >= n));) m.lastIndex === a.index && m.lastIndex++;
        return p === r.length ? !c && m.test("") || h.push("") : h.push(r.slice(p)), h.length > n ? h.slice(0, n) : h
      } : "0".split(void 0, 0).length ? function (t, i) {
        return void 0 === t && 0 === i ? [] : e.call(this, t, i)
      } : e, [function (e, i) {
        var s = o(this), n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, s, i) : r.call(String(s), e, i)
      }, function (t, s) {
        var o = i(r, t, this, s, r !== e);
        if (o.done) return o.value;
        var u = n(t), d = String(this), f = a(u, RegExp), g = u.unicode,
          _ = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (m ? "y" : "g"),
          y = new f(m ? u : "^(?:" + u.source + ")", _), v = void 0 === s ? 4294967295 : s >>> 0;
        if (0 === v) return [];
        if (0 === d.length) return null === h(y, d) ? [d] : [];
        for (var b = 0, x = 0, j = []; x < d.length;) {
          y.lastIndex = m ? x : 0;
          var w, M = h(y, m ? d : d.slice(x));
          if (null === M || (w = p(c(y.lastIndex + (m ? 0 : x)), d.length)) === b) x = l(d, x, g); else {
            if (j.push(d.slice(b, x)), j.length === v) return j;
            for (var S = 1; S <= M.length - 1; S++) if (j.push(M[S]), j.length === v) return j;
            x = b = w
          }
        }
        return j.push(d.slice(b)), j
      }]
    }), !m)
  }, {
    "../internals/advance-string-index": 198,
    "../internals/an-object": 200,
    "../internals/fails": 228,
    "../internals/fix-regexp-well-known-symbol-logic": 229,
    "../internals/is-regexp": 250,
    "../internals/regexp-exec": 279,
    "../internals/regexp-exec-abstract": 278,
    "../internals/require-object-coercible": 282,
    "../internals/species-constructor": 289,
    "../internals/to-length": 300
  }],
  329: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/string-trim").end,
      n = t("../internals/string-trim-forced")("trimEnd"), o = n ? function () {
        return s(this)
      } : "".trimEnd;
    r({target: "String", proto: !0, forced: n}, {trimEnd: o, trimRight: o})
  }, {"../internals/export": 227, "../internals/string-trim": 293, "../internals/string-trim-forced": 292}],
  330: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/string-trim").start,
      n = t("../internals/string-trim-forced")("trimStart"), o = n ? function () {
        return s(this)
      } : "".trimStart;
    r({target: "String", proto: !0, forced: n}, {trimStart: o, trimLeft: o})
  }, {"../internals/export": 227, "../internals/string-trim": 293, "../internals/string-trim-forced": 292}],
  331: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/string-trim").trim;
    r({target: "String", proto: !0, forced: t("../internals/string-trim-forced")("trim")}, {
      trim: function () {
        return s(this)
      }
    })
  }, {"../internals/export": 227, "../internals/string-trim": 293, "../internals/string-trim-forced": 292}],
  332: [function (t, e, i) {
    "use strict";
    var r = t("../internals/export"), s = t("../internals/descriptors"), n = t("../internals/global"),
      o = t("../internals/has"), a = t("../internals/is-object"), l = t("../internals/object-define-property").f,
      c = t("../internals/copy-constructor-properties"), h = n.Symbol;
    if (s && "function" == typeof h && (!("description" in h.prototype) || void 0 !== h().description)) {
      var u = {}, d = function () {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          e = this instanceof d ? new h(t) : void 0 === t ? h() : h(t);
        return "" === t && (u[e] = !0), e
      };
      c(d, h);
      var f = d.prototype = h.prototype;
      f.constructor = d;
      var p = f.toString, m = "Symbol(test)" == String(h("test")), g = /^Symbol\((.*)\)[^)]+$/;
      l(f, "description", {
        configurable: !0, get: function () {
          var t = a(this) ? this.valueOf() : this, e = p.call(t);
          if (o(u, t)) return "";
          var i = m ? e.slice(7, -1) : e.replace(g, "$1");
          return "" === i ? void 0 : i
        }
      }), r({global: !0, forced: !0}, {Symbol: d})
    }
  }, {
    "../internals/copy-constructor-properties": 213,
    "../internals/descriptors": 220,
    "../internals/export": 227,
    "../internals/global": 234,
    "../internals/has": 235,
    "../internals/is-object": 248,
    "../internals/object-define-property": 263
  }],
  333: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Float32", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  334: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Int16", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  335: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Int32", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  336: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Int8", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  337: [function (t, e, i) {
    "use strict";
    var r = t("../internals/global"), s = t("../internals/array-buffer-view-core"), n = t("../internals/fails"),
      o = r.Int8Array, a = s.aTypedArray, l = s.exportTypedArrayMethod, c = [].toLocaleString, h = [].slice,
      u = !!o && n((function () {
        c.call(new o(1))
      }));
    l("toLocaleString", (function () {
      return c.apply(u ? h.call(a(this)) : a(this), arguments)
    }), n((function () {
      return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString()
    })) || !n((function () {
      o.prototype.toLocaleString.call([1, 2])
    })))
  }, {"../internals/array-buffer-view-core": 202, "../internals/fails": 228, "../internals/global": 234}],
  338: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Uint16", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  339: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Uint32", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  340: [function (t, e, i) {
    t("../internals/typed-array-constructor")("Uint8", (function (t) {
      return function (e, i, r) {
        return t(this, e, i, r)
      }
    }))
  }, {"../internals/typed-array-constructor": 306}],
  341: [function (t, e, i) {
    var r = t("../internals/global"), s = t("../internals/dom-iterables"), n = t("../modules/es.array.iterator"),
      o = t("../internals/create-non-enumerable-property"), a = t("../internals/well-known-symbol"), l = a("iterator"),
      c = a("toStringTag"), h = n.values;
    for (var u in s) {
      var d = r[u], f = d && d.prototype;
      if (f) {
        if (f[l] !== h) try {
          o(f, l, h)
        } catch (t) {
          f[l] = h
        }
        if (f[c] || o(f, c, u), s[u]) for (var p in n) if (f[p] !== n[p]) try {
          o(f, p, n[p])
        } catch (t) {
          f[p] = n[p]
        }
      }
    }
  }, {
    "../internals/create-non-enumerable-property": 217,
    "../internals/dom-iterables": 222,
    "../internals/global": 234,
    "../internals/well-known-symbol": 311,
    "../modules/es.array.iterator": 315
  }]
}, {}, [162]);
