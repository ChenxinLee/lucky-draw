(function(t) {
	function e(e) {
		for (var n, a, r = e[0], h = e[1], l = e[2], c = 0, f = []; c < r.length; c++) a = r[c], Object.prototype.hasOwnProperty.call(s, a) && s[a] && f.push(s[a][0]), s[a] = 0;
		for (n in h) Object.prototype.hasOwnProperty.call(h, n) && (t[n] = h[n]);
		u && u(e);
		while (f.length) f.shift()();
		return o.push.apply(o, l || []), i()
	}

	function i() {
		for (var t, e = 0; e < o.length; e++) {
			for (var i = o[e], n = !0, r = 1; r < i.length; r++) {
				var h = i[r];
				0 !== s[h] && (n = !1)
			}
			n && (o.splice(e--, 1), t = a(a.s = i[0]))
		}
		return t
	}
	var n = {},
		s = {
			app: 0
		},
		o = [];

	function a(e) {
		if (n[e]) return n[e].exports;
		var i = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports
	}
	a.m = t, a.c = n, a.d = function(t, e, i) {
		a.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: i
		})
	}, a.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, a.t = function(t, e) {
		if (1 & e && (t = a(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var i = Object.create(null);
		if (a.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t)
			for (var n in t) a.d(i, n, function(e) {
				return t[e]
			}.bind(null, n));
		return i
	}, a.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return a.d(e, "a", e), e
	}, a.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, a.p = "/lucky-draw/";
	var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
		h = r.push.bind(r);
	r.push = e, r = r.slice();
	for (var l = 0; l < r.length; l++) e(r[l]);
	var u = h;
	o.push([0, "chunk-vendors"]), i()
})({
	0: function(t, e, i) {
		t.exports = i("56d7")
	},
	"0e80": function(t, e, i) {},
	2136: function(t, e, i) {
		t.exports = i.p + "media/bg.6fab370c.mp3"
	},
	"2e68": function(t, e, i) {
		"use strict";
		var n = i("b83a"),
			s = i.n(n);
		s.a
	},
	"32d3": function(t, e, i) {
		i("99af"), i("cb29"), i("c975"), i("a15b"), i("baa5"), i("4e82"), i("a434"), i("d3b7"), i("acd8"), i("e25e"), i("ac1f"), i("25f0"), i("5319"), i("1276");
		var n = i("7037");
		(function() {
			var t, e, i, s, o, a, r, h, l, u, c = Math.abs,
				f = Math.sin,
				d = Math.cos,
				g = Math.max,
				m = Math.min,
				p = Math.ceil,
				w = Math.sqrt,
				v = Math.pow,
				x = {},
				y = {},
				b = {
					0: "0,",
					1: "17,",
					2: "34,",
					3: "51,",
					4: "68,",
					5: "85,",
					6: "102,",
					7: "119,",
					8: "136,",
					9: "153,",
					a: "170,",
					A: "170,",
					b: "187,",
					B: "187,",
					c: "204,",
					C: "204,",
					d: "221,",
					D: "221,",
					e: "238,",
					E: "238,",
					f: "255,",
					F: "255,"
				},
				C = document,
				S = {};
			for (t = 0; t < 256; ++t) e = t.toString(16), t < 16 && (e = "0" + e), y[e] = y[e.toUpperCase()] = t.toString() + ",";

			function T(t) {
				return "undefined" != typeof t
			}

			function k(t) {
				return "object" == n(t) && null != t
			}

			function z(t, e, i) {
				return isNaN(t) ? i : m(i, g(e, t))
			}

			function _() {
				return !1
			}

			function I() {
				return (new Date)
					.valueOf()
			}

			function O(t, e) {
				var i, n = [],
					s = t.length;
				for (i = 0; i < s; ++i) n.push(t[i]);
				return n.sort(e), n
			}

			function A(t) {
				var e, i, n = t.length - 1;
				while (n) i = ~~(Math.random() * n), e = t[n], t[n] = t[i], t[i] = e, --n
			}

			function D(t, e, i) {
				this.x = t, this.y = e, this.z = i
			}

			function P(t, e) {
				e = e * Math.PI / 180, t = t * Math.PI / 180;
				var i = f(t) * d(e),
					n = -f(e),
					s = -d(t) * d(e);
				return new D(i, n, s)
			}

			function $(t) {
				this[1] = {
					1: t[0],
					2: t[1],
					3: t[2]
				}, this[2] = {
					1: t[3],
					2: t[4],
					3: t[5]
				}, this[3] = {
					1: t[6],
					2: t[7],
					3: t[8]
				}
			}

			function M(t, e, i, n, s) {
				var o, a, r, h, l, u = [],
					c = 2 / t;
				for (l = Math.PI * (3 - w(5) + (parseFloat(s) ? parseFloat(s) : 0)), o = 0; o < t; ++o) a = o * c - 1 + c / 2, r = w(1 - a * a), h = o * l, u.push([d(h) * r * e, a * i, f(h) * r * n]);
				return u
			}

			function R(t, e, i, n, s, o) {
				var a, r, h, l, u, c, g = [],
					m = 2 / t;
				for (r = Math.PI * (3 - w(5) + (parseFloat(o) ? parseFloat(o) : 0)), h = 0; h < t; ++h) l = h * m - 1 + m / 2, a = h * r, u = d(a), c = f(a), g.push(e ? [l * i, u * n, c * s] : [u * i, l * n, c * s]);
				return g
			}

			function L(t, e, i, n, s, o) {
				var a, r, h, l, u = [],
					c = 2 * Math.PI / e;
				for (r = 0; r < e; ++r) a = r * c, h = d(a), l = f(a), u.push(t ? [o * i, h * n, l * s] : [h * i, o * n, l * s]);
				return u
			}

			function F(t, e, i, n, s) {
				return R(t, 0, e, i, n, s)
			}

			function E(t, e, i, n, s) {
				return R(t, 1, e, i, n, s)
			}

			function j(t, e, i, n, s) {
				return s = isNaN(s) ? 0 : 1 * s, L(0, t, e, i, n, s)
			}

			function B(t, e, i, n, s) {
				return s = isNaN(s) ? 0 : 1 * s, L(1, t, e, i, n, s)
			}

			function N(t) {
				var e = new Image;
				e.onload = function() {
					var i = e.width / 2,
						n = e.height / 2;
					t.centreFunc = function(t, s, o, a, r) {
						t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = 1, t.drawImage(e, a - i, r - n)
					}
				}, e.src = t.centreImage
			}

			function H(t, e) {
				var i, n, s = t,
					o = (1 * e)
					.toPrecision(3) + ")";
				return "#" === t[0] ? (x[t] || (4 === t.length ? x[t] = "rgba(" + b[t[1]] + b[t[2]] + b[t[3]] : x[t] = "rgba(" + y[t.substr(1, 2)] + y[t.substr(3, 2)] + y[t.substr(5, 2)]), s = x[t] + o) : "rgb(" === t.substr(0, 4) || "hsl(" === t.substr(0, 4) ? s = t.replace("(", "a(")
					.replace(")", "," + o) : "rgba(" !== t.substr(0, 5) && "hsla(" !== t.substr(0, 5) || (i = t.lastIndexOf(",") + 1, n = t.indexOf(")"), e *= parseFloat(t.substring(i, n)), s = t.substr(0, i) + e.toPrecision(3) + ")"), s
			}

			function W(t, e) {
				if (window.G_vmlCanvasManager) return null;
				var i = C.createElement("canvas");
				return i.width = t, i.height = e, i
			}

			function q() {
				var t, e, i = W(3, 3);
				return !!i && (t = i.getContext("2d"), t.strokeStyle = "#000", t.shadowColor = "#fff", t.shadowBlur = 3, t.globalAlpha = 0, t.strokeRect(2, 2, 2, 2), t.globalAlpha = 1, e = t.getImageData(2, 2, 1, 1), i = null, e.data[0] > 0)
			}

			function X(t, e, i, n) {
				var s, o = t.createLinearGradient(0, 0, e, 0);
				for (s in n) o.addColorStop(1 - s, n[s]);
				t.fillStyle = o, t.fillRect(0, i, e, 1)
			}

			function Y(t, e, i) {
				var n, s, o, a, r = 1024,
					h = 1,
					l = t.weightGradient;
				if (t.gCanvas) s = t.gCanvas.getContext("2d"), h = t.gCanvas.height;
				else {
					if (k(l[0]) ? h = l.length : l = [l], t.gCanvas = n = W(r, h), !n) return null;
					for (s = n.getContext("2d"), o = 0; o < h; ++o) X(s, r, o, l[o])
				}
				return i = g(m(i || 0, h - 1), 0), a = s.getImageData(~~((r - 1) * e), i, 1, 1)
					.data, "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] / 255 + ")"
			}

			function U(t, e, i, n, s, o, a, r, h, l, u, f) {
				var d, g, m = s + (r || 0) + (h.length && h[0] < 0 ? c(h[0]) : 0),
					p = o + (r || 0) + (h.length && h[1] < 0 ? c(h[1]) : 0);
				for (t.font = e, t.textBaseline = "top", t.fillStyle = i, a && (t.shadowColor = a), r && (t.shadowBlur = r), h.length && (t.shadowOffsetX = h[0], t.shadowOffsetY = h[1]), d = 0; d < n.length; ++d) g = 0, u && ("right" == f ? g = l - u[d] : "centre" == f && (g = (l - u[d]) / 2)), t.fillText(n[d], m + g, p), p += parseInt(e)
			}

			function V(t, e, i, n, s, o, a) {
				o ? (t.beginPath(), t.moveTo(e, i + s - o), t.arcTo(e, i, e + o, i, o), t.arcTo(e + n, i, e + n, i + o, o), t.arcTo(e + n, i + s, e + n - o, i + s, o), t.arcTo(e, i + s, e, i + s - o, o), t.closePath(), t[a ? "stroke" : "fill"]()) : t[a ? "strokeRect" : "fillRect"](e, i, n, s)
			}

			function G(t, e, i, n, s, o, a, r, h) {
				this.strings = t, this.font = e, this.width = i, this.height = n, this.maxWidth = s, this.stringWidths = o, this.align = a, this.valign = r, this.scale = h
			}

			function Z(t, e, i) {
				var n, s = W(e, i);
				return s ? (n = s.getContext("2d"), n.drawImage(t, (e - t.width) / 2, (i - t.height) / 2), s) : null
			}

			function J(t, e, i) {
				var n, s = W(e, i);
				return s ? (n = s.getContext("2d"), n.drawImage(t, 0, 0, e, i), s) : null
			}

			function K(t, e, i, n, s, o, a, r, h, l) {
				var u, c, f, d, g, p, w, v, x = e + (2 * r + o) * n,
					y = i + (2 * r + o) * n,
					b = W(x, y);
				return b ? (o *= n, h *= n, c = f = o / 2, d = x - o, g = y - o, r = r * n + c, u = b.getContext("2d"), v = m(h, d / 2, g / 2), s && (u.fillStyle = s, V(u, c, f, d, g, v)), o && (u.strokeStyle = a, u.lineWidth = o, V(u, c, f, d, g, v, !0)), l ? (p = W(x, y), w = p.getContext("2d"), w.drawImage(t, r, r, e, i), w.globalCompositeOperation = "source-in", w.fillStyle = a, w.fillRect(0, 0, x, y), w.globalCompositeOperation = "destination-over", w.drawImage(b, 0, 0), w.globalCompositeOperation = "source-over", u.drawImage(p, 0, 0)) : u.drawImage(t, r, r, t.width, t.height), {
					image: b,
					width: x / n,
					height: y / n
				}) : null
			}

			function Q(t, e, i, n, s) {
				var o, a, r = parseFloat(e),
					h = g(i, n);
				return o = W(i, n), o ? (e.indexOf("%") > 0 ? r = h * r / 100 : r *= s, a = o.getContext("2d"), a.globalCompositeOperation = "source-over", a.fillStyle = "#fff", r >= h / 2 ? (r = m(i, n) / 2, a.beginPath(), a.moveTo(i / 2, n / 2), a.arc(i / 2, n / 2, r, 0, 2 * Math.PI, !1), a.fill(), a.closePath()) : (r = m(i / 2, n / 2, r), V(a, 0, 0, i, n, r, !0), a.fill()), a.globalCompositeOperation = "source-in", a.drawImage(t, 0, 0, i, n), o) : null
			}

			function tt(t, e, i, n, s, o, a) {
				var r, h, l = c(a[0]),
					u = c(a[1]),
					f = e + (l > o ? l + o : 2 * o) * n,
					d = i + (u > o ? u + o : 2 * o) * n,
					g = n * ((o || 0) + (a[0] < 0 ? l : 0)),
					m = n * ((o || 0) + (a[1] < 0 ? u : 0));
				return r = W(f, d), r ? (h = r.getContext("2d"), s && (h.shadowColor = s), o && (h.shadowBlur = o * n), a && (h.shadowOffsetX = a[0] * n, h.shadowOffsetY = a[1] * n), h.drawImage(t, g, m, e, i), {
					image: r,
					width: f / n,
					height: d / n
				}) : null
			}

			function et(t, e, i) {
				var n, s, o, a, r, h, l, u, c = parseInt(t.toString()
						.length * i),
					f = parseInt(2 * i * t.length),
					d = W(c, f);
				if (!d) return null;
				for (n = d.getContext("2d"), n.fillStyle = "#000", n.fillRect(0, 0, c, f), U(n, i + "px " + e, "#fff", t, 0, 0, 0, 0, [], "centre"), s = n.getImageData(0, 0, c, f), o = s.width, a = s.height, u = {
					min: {
						x: o,
						y: a
					},
					max: {
						x: -1,
						y: -1
					}
				}, h = 0; h < a; ++h)
					for (r = 0; r < o; ++r) l = 4 * (h * o + r), s.data[l + 1] > 0 && (r < u.min.x && (u.min.x = r), r > u.max.x && (u.max.x = r), h < u.min.y && (u.min.y = h), h > u.max.y && (u.max.y = h));
				return o != c && (u.min.x *= c / o, u.max.x *= c / o), a != f && (u.min.y *= c / a, u.max.y *= c / a), d = null, u
			}

			function it(t) {
				return "'" + t.replace(/(\'|\")/g, "")
					.replace(/\s*,\s*/g, "', '") + "'"
			}

			function nt(t, e, i) {
				i = i || C, i.addEventListener ? i.addEventListener(t, e, !1) : i.attachEvent("on" + t, e)
			}

			function st(t, e, i) {
				i = i || C, i.removeEventListener ? i.removeEventListener(t, e) : i.detachEvent("on" + t, e)
			}

			function ot(t, e, i, n) {
				var s, o, a, r, h, l, u = n.imageScale;
				return e.complete ? t.complete ? (e.width = e.width, e.height = e.height, u && (t.width = e.width * u, t.height = e.height * u), i.iw = t.width, i.ih = t.height, n.txtOpt && (o = t, s = n.zoomMax * n.txtScale, h = i.iw * s, l = i.ih * s, h < e.naturalWidth || l < e.naturalHeight ? (o = J(t, h, l), o && (i.fimage = o)) : (h = i.iw, l = i.ih, s = 1), parseFloat(n.imageRadius) && (i.image = i.fimage = t = Q(i.image, n.imageRadius, h, l, s)), i.HasText() || (n.shadow && (o = tt(i.image, h, l, s, n.shadow, n.shadowBlur, n.shadowOffset), o && (i.fimage = o.image, i.w = o.width, i.h = o.height)), (n.bgColour || n.bgOutlineThickness) && (a = "tag" == n.bgColour ? at(i.a, "background-color") : n.bgColour, r = "tag" == n.bgOutline ? at(i.a, "color") : n.bgOutline || n.textColour, h = i.fimage.width, l = i.fimage.height, "colour" == n.outlineMethod && (o = K(i.fimage, h, l, s, a, n.bgOutlineThickness, i.outline.colour, n.padding, n.bgRadius, 1), o && (i.oimage = o.image)), o = K(i.fimage, h, l, s, a, n.bgOutlineThickness, r, n.padding, n.bgRadius), o && (i.fimage = o.image, i.w = o.width, i.h = o.height)), "size" == n.outlineMethod && (n.outlineIncrease > 0 ? (i.iw += 2 * n.outlineIncrease, i.ih += 2 * n.outlineIncrease, h = s * i.iw, l = s * i.ih, o = J(i.fimage, h, l), i.oimage = o, i.fimage = Z(i.fimage, i.oimage.width, i.oimage.height)) : (h = s * (i.iw + 2 * n.outlineIncrease), l = s * (i.ih + 2 * n.outlineIncrease), o = J(i.fimage, h, l), i.oimage = Z(o, i.fimage.width, i.fimage.height))))), void i.Init()) : nt("load", (function() {
					ot(t, e, i, n)
				}), t) : nt("load", (function() {
					ot(t, e, i, n)
				}), e)
			}

			function at(t, e) {
				var i = C.defaultView,
					n = e.replace(/\-([a-z])/g, (function(t) {
						return t.charAt(1)
							.toUpperCase()
					}));
				return i && i.getComputedStyle && i.getComputedStyle(t, null)
					.getPropertyValue(e) || t.currentStyle && t.currentStyle[n]
			}

			function rt(t, e, i) {
				var n, s = 1;
				return e ? s = 1 * (t.getAttribute(e) || i) : (n = at(t, "font-size")) && (s = n.indexOf("px") > -1 && 1 * n.replace("px", "") || n.indexOf("pt") > -1 && 1.25 * n.replace("pt", "") || 3.3 * n), s
			}

			function ht(t) {
				return t.target && T(t.target.id) ? t.target.id : t.srcElement.parentNode.id
			}

			function lt(t, e) {
				var i, n, s = parseInt(at(e, "width")) / e.width,
					o = parseInt(at(e, "height")) / e.height;
				return T(t.offsetX) ? i = {
					x: t.offsetX,
					y: t.offsetY
				} : (n = bt(e.id), T(t.changedTouches) && (t = t.changedTouches[0]), t.pageX && (i = {
					x: t.pageX - n.x,
					y: t.pageY - n.y
				})), i && s && o && (i.x /= s, i.y /= o), i
			}

			function ut(t) {
				var e = t.target || t.fromElement.parentNode,
					i = zt.tc[e.id];
				i && (i.mx = i.my = -1, i.UnFreeze(), i.EndDrag())
			}

			function ct(t) {
				var e, i, n, s = zt,
					o = ht(t);
				for (e in s.tc) i = s.tc[e], i.tttimer && (clearTimeout(i.tttimer), i.tttimer = null);
				o && s.tc[o] && (i = s.tc[o], (n = lt(t, i.canvas)) && (i.mx = n.x, i.my = n.y, i.Drag(t, n)), i.drawn = 0)
			}

			function ft(t) {
				var e = zt,
					i = C.addEventListener ? 0 : 1,
					n = ht(t);
				n && t.button == i && e.tc[n] && e.tc[n].BeginDrag(t)
			}

			function dt(t) {
				var e, i = zt,
					n = C.addEventListener ? 0 : 1,
					s = ht(t);
				s && t.button == n && i.tc[s] && (e = i.tc[s], ct(t), e.EndDrag() || e.touchState || e.Clicked(t))
			}

			function gt(t) {
				var e, i = ht(t),
					n = i && zt.tc[i];
				n && t.changedTouches && (1 == t.touches.length && 0 == n.touchState ? (n.touchState = 1, n.BeginDrag(t), (e = lt(t, n.canvas)) && (n.mx = e.x, n.my = e.y, n.drawn = 0)) : 2 == t.targetTouches.length && n.pinchZoom ? (n.touchState = 3, n.EndDrag(), n.BeginPinch(t)) : (n.EndDrag(), n.EndPinch(), n.touchState = 0))
			}

			function mt(t) {
				var e = ht(t),
					i = e && zt.tc[e];
				if (i && t.changedTouches) {
					switch (i.touchState) {
						case 1:
							i.Draw(), i.Clicked();
							break;
						case 2:
							i.EndDrag();
							break;
						case 3:
							i.EndPinch()
					}
					i.touchState = 0
				}
			}

			function pt(t) {
				var e, i, n, s = zt,
					o = ht(t);
				for (e in s.tc) i = s.tc[e], i.tttimer && (clearTimeout(i.tttimer), i.tttimer = null);
				if (i = o && s.tc[o], i && t.changedTouches && i.touchState) {
					switch (i.touchState) {
						case 1:
						case 2:
							(n = lt(t, i.canvas)) && (i.mx = n.x, i.my = n.y, i.Drag(t, n) && (i.touchState = 2));
							break;
						case 3:
							i.Pinch(t)
					}
					i.drawn = 0
				}
			}

			function wt(t) {
				var e = zt,
					i = ht(t);
				i && e.tc[i] && (t.cancelBubble = !0, t.returnValue = !1, t.preventDefault && t.preventDefault(), e.tc[i].Wheel((t.wheelDelta || t.detail) > 0))
			}

			function vt(t) {
				var e, i = zt;
				for (e in clearTimeout(i.scrollTimer), i.tc) i.tc[e].Pause();
				i.scrollTimer = setTimeout((function() {
					var t, e = zt;
					for (t in e.tc) e.tc[t].Resume()
				}), i.scrollPause)
			}

			function xt() {
				yt(I())
			}

			function yt(t) {
				var e, i = zt.tc;
				for (e in zt.NextFrame(zt.interval), t = t || I(), i) i[e].Draw(t)
			}

			function bt(t) {
				var e = C.getElementById(t),
					i = e.getBoundingClientRect(),
					n = C.documentElement,
					s = C.body,
					o = window,
					a = o.pageXOffset || n.scrollLeft,
					r = o.pageYOffset || n.scrollTop,
					h = n.clientLeft || s.clientLeft,
					l = n.clientTop || s.clientTop;
				return {
					x: i.left + a - h,
					y: i.top + r - l
				}
			}

			function Ct(t, e, i, n) {
				var s = t.radius * t.z1 / (t.z1 + t.z2 + e.z);
				return {
					x: e.x * s * i,
					y: e.y * s * n,
					z: e.z,
					w: (t.z1 - e.z) / t.z2
				}
			}

			function St(t) {
				this.e = t, this.br = 0, this.line = [], this.text = [], this.original = t.innerText || t.textContent
			}

			function Tt(t, e) {
				this.ts = null, this.tc = t, this.tag = e, this.x = this.y = this.w = this.h = this.sc = 1, this.z = 0, this.pulse = 1, this.pulsate = t.pulsateTo < 1, this.colour = t.outlineColour, this.adash = ~~t.outlineDash, this.agap = ~~t.outlineDashSpace || this.adash, this.aspeed = 1 * t.outlineDashSpeed, "tag" == this.colour ? this.colour = at(e.a, "color") : "tagbg" == this.colour && (this.colour = at(e.a, "background-color")), this.Draw = this.pulsate ? this.DrawPulsate : this.DrawSimple, this.radius = 0 | t.outlineRadius, this.SetMethod(t.outlineMethod)
			}

			function kt(t, e, i, n, s, o, a, r, h, l, u, c, f, d) {
				this.tc = t, this.image = null, this.text = e, this.text_original = d, this.line_widths = [], this.title = i.title || null, this.a = i, this.position = new D(n[0], n[1], n[2]), this.x = this.y = this.z = 0, this.w = s, this.h = o, this.colour = a || t.textColour, this.bgColour = r || t.bgColour, this.bgRadius = 0 | h, this.bgOutline = l || this.colour, this.bgOutlineThickness = 0 | u, this.textFont = c || t.textFont, this.padding = 0 | f, this.sc = this.alpha = 1, this.weighted = !t.weight, this.outline = new Tt(t, this)
			}

			function zt(t, e, i) {
				var n, s, o, a = C.getElementById(t),
					r = ["id", "class", "innerHTML"];
				if (!a) throw 0;
				if (T(window.G_vmlCanvasManager) && (a = window.G_vmlCanvasManager.initElement(a), this.ie = parseFloat(navigator.appVersion.split("MSIE")[1])), a && (!a.getContext || !a.getContext("2d")
					.fillText)) {
					for (s = C.createElement("DIV"), n = 0; n < r.length; ++n) s[r[n]] = a[r[n]];
					throw a.parentNode.insertBefore(s, a), a.parentNode.removeChild(a), 0
				}
				for (n in zt.options) this[n] = i && T(i[n]) ? i[n] : T(zt[n]) ? zt[n] : zt.options[n];
				if (this.canvas = a, this.ctxt = a.getContext("2d"), this.z1 = 250 / g(this.depth, .001), this.z2 = this.z1 / this.zoom, this.radius = .0075 * m(a.height, a.width), this.max_radius = 100, this.max_weight = [], this.min_weight = [], this.textFont = this.textFont && it(this.textFont), this.textHeight *= 1, this.imageRadius = this.imageRadius.toString(), this.pulsateTo = z(this.pulsateTo, 0, 1), this.minBrightness = z(this.minBrightness, 0, 1), this.maxBrightness = z(this.maxBrightness, this.minBrightness, 1), this.ctxt.textBaseline = "top", this.lx = (this.lock + "")
					.indexOf("x") + 1, this.ly = (this.lock + "")
					.indexOf("y") + 1, this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0, this.fixedAlpha = 1, this.source = e || t, this.repeatTags = m(64, ~~this.repeatTags), this.minTags = m(200, ~~this.minTags), ~~this.scrollPause > 0 ? zt.scrollPause = ~~this.scrollPause : this.scrollPause = 0, this.minTags > 0 && this.repeatTags < 1 && (n = this.GetTags()
						.length) && (this.repeatTags = p(this.minTags / n) - 1), this.transform = $.Identity(), this.startTime = this.time = I(), this.mx = this.my = -1, this.centreImage && N(this), this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition, this.animTiming = "function" == typeof zt[this.animTiming] ? zt[this.animTiming] : zt.Smooth, this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1] ? (this.ctxt.shadowColor = this.shadow, this.shadow = this.ctxt.shadowColor, this.shadowAlpha = q()) : delete this.shadow, this.Load(), e && this.hideTags && function(t) {
						zt.loaded ? t.HideTags() : nt("load", (function() {
							t.HideTags()
						}), window)
					}(this), this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0, this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0, this.tooltip ? (this.ctitle = a.title, a.title = "", "native" == this.tooltip ? this.Tooltip = this.TooltipNative : (this.Tooltip = this.TooltipDiv, this.ttdiv || (this.ttdiv = C.createElement("div"), this.ttdiv.className = this.tooltipClass, this.ttdiv.style.position = "absolute", this.ttdiv.style.zIndex = a.style.zIndex + 1, nt("mouseover", (function(t) {
						t.target.style.display = "none"
					}), this.ttdiv), C.body.appendChild(this.ttdiv)))) : this.Tooltip = this.TooltipNone, !this.noMouse && !S[t])
					for (S[t] = [
						["mousemove", ct],
						["mouseout", ut],
						["mouseup", dt],
						["touchstart", gt],
						["touchend", mt],
						["touchcancel", mt],
						["touchmove", pt]
					], this.dragControl && (S[t].push(["mousedown", ft]), S[t].push(["selectstart", _])), this.wheelZoom && (S[t].push(["mousewheel", wt]), S[t].push(["DOMMouseScroll", wt])), this.scrollPause && S[t].push(["scroll", vt, window]), n = 0; n < S[t].length; ++n) s = S[t][n], nt(s[0], s[1], s[2] ? s[2] : a);
				zt.started || (o = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, zt.NextFrame = o ? zt.NextFrameRAF : zt.NextFrameTimeout, zt.interval = this.interval, zt.NextFrame(this.interval), zt.started = 1)
			}

			function _t(t) {
				var e = t.targetTouches[0],
					i = t.targetTouches[1];
				return w(v(i.pageX - e.pageX, 2) + v(i.pageY - e.pageY, 2))
			}

			function It(t, e) {
				zt.tc[e] && zt.tc[e][t]()
			}
			for (t in r = D.prototype, r.length = function() {
				return w(this.x * this.x + this.y * this.y + this.z * this.z)
			}, r.dot = function(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z
			}, r.cross = function(t) {
				var e = this.y * t.z - this.z * t.y,
					i = this.z * t.x - this.x * t.z,
					n = this.x * t.y - this.y * t.x;
				return new D(e, i, n)
			}, r.angle = function(t) {
				var e, i = this.dot(t);
				return 0 == i ? Math.PI / 2 : (e = i / (this.length() * t.length()), e >= 1 ? 0 : e <= -1 ? Math.PI : Math.acos(e))
			}, r.unit = function() {
				var t = this.length();
				return new D(this.x / t, this.y / t, this.z / t)
			}, a = $.prototype, $.Identity = function() {
				return new $([1, 0, 0, 0, 1, 0, 0, 0, 1])
			}, $.Rotation = function(t, e) {
				var i = f(t),
					n = d(t),
					s = 1 - n;
				return new $([n + v(e.x, 2) * s, e.x * e.y * s - e.z * i, e.x * e.z * s + e.y * i, e.y * e.x * s + e.z * i, n + v(e.y, 2) * s, e.y * e.z * s - e.x * i, e.z * e.x * s - e.y * i, e.z * e.y * s + e.x * i, n + v(e.z, 2) * s])
			}, a.mul = function(t) {
				var e, i, n = [],
					s = t.xform ? 1 : 0;
				for (e = 1; e <= 3; ++e)
					for (i = 1; i <= 3; ++i) s ? n.push(this[e][1] * t[1][i] + this[e][2] * t[2][i] + this[e][3] * t[3][i]) : n.push(this[e][i] * t);
				return new $(n)
			}, a.xform = function(t) {
				var e = {},
					i = t.x,
					n = t.y,
					s = t.z;
				return e.x = i * this[1][1] + n * this[2][1] + s * this[3][1], e.y = i * this[1][2] + n * this[2][2] + s * this[3][2], e.z = i * this[1][3] + n * this[2][3] + s * this[3][3], e
			}, l = G.prototype, l.SetImage = function(t, e, i, n, s, o, a, r) {
				this.image = t, this.iwidth = e * this.scale, this.iheight = i * this.scale, this.ipos = n, this.ipad = s * this.scale, this.iscale = r, this.ialign = o, this.ivalign = a
			}, l.Align = function(t, e, i) {
				var n = 0;
				return "right" == i || "bottom" == i ? n = e - t : "left" != i && "top" != i && (n = (e - t) / 2), n
			}, l.Create = function(t, e, i, n, s, o, a, r, h) {
				var l, u, f, d, p, w, v, x, y, b, C, S, T, k, z, _, I, O = c(a[0]),
					A = c(a[1]);
				return r = g(r, O + o, A + o), p = 2 * (r + n), v = 2 * (r + n), u = this.width + p, f = this.height + v, y = b = r + n, this.image && (C = S = r + n, T = this.iwidth, k = this.iheight, "top" == this.ipos || "bottom" == this.ipos ? (T < this.width ? C += this.Align(T, this.width, this.ialign) : y += this.Align(this.width, T, this.align), "top" == this.ipos ? b += k + this.ipad : S += this.height + this.ipad, u = g(u, T + p), f += k + this.ipad) : (k < this.height ? S += this.Align(k, this.height, this.ivalign) : b += this.Align(this.height, k, this.valign), "right" == this.ipos ? C += this.width + this.ipad : y += T + this.ipad, u += T + this.ipad, f = g(f, k + v))), l = W(u, f), l ? (p = v = n / 2, w = u - n, x = f - n, z = m(h, w / 2, x / 2), d = l.getContext("2d"), e && (d.fillStyle = e, V(d, p, v, w, x, z)), n && (d.strokeStyle = i, d.lineWidth = n, V(d, p, v, w, x, z, !0)), (o || O || A) && (_ = W(u, f), _ && (I = d, d = _.getContext("2d"))), U(d, this.font, t, this.strings, y, b, 0, 0, [], this.maxWidth, this.stringWidths, this.align), this.image && d.drawImage(this.image, C, S, T, k), I && (d = I, s && (d.shadowColor = s), o && (d.shadowBlur = o), d.shadowOffsetX = a[0], d.shadowOffsetY = a[1], d.drawImage(_, 0, 0)), l) : null
			}, h = St.prototype, h.Empty = function() {
				for (var t = 0; t < this.text.length; ++t)
					if (this.text[t].length) return !1;
				return !0
			}, h.Lines = function(t) {
				var e, i, n, s = t ? 1 : 0;
				for (t = t || this.e, e = t.childNodes, i = e.length, n = 0; n < i; ++n) "BR" == e[n].nodeName ? (this.text.push(this.line.join(" ")), this.br = 1) : 3 == e[n].nodeType ? this.br ? (this.line = [e[n].nodeValue], this.br = 0) : this.line.push(e[n].nodeValue) : this.Lines(e[n]);
				return s || this.br || this.text.push(this.line.join(" ")), this.text
			}, h.SplitWidth = function(t, e, i, n) {
				var s, o, a, r = [];
				for (e.font = n + "px " + i, s = 0; s < this.text.length; ++s) {
					for (a = this.text[s].split(/\s+/), this.line = [a[0]], o = 1; o < a.length; ++o) e.measureText(this.line.join(" ") + " " + a[o])
						.width > t ? (r.push(this.line.join(" ")), this.line = [a[o]]) : this.line.push(a[o]);
					r.push(this.line.join(" "))
				}
				return this.text = r
			}, i = Tt.prototype, i.SetMethod = function(t) {
				var e = {
						block: ["PreDraw", "DrawBlock"],
						colour: ["PreDraw", "DrawColour"],
						outline: ["PostDraw", "DrawOutline"],
						classic: ["LastDraw", "DrawOutline"],
						size: ["PreDraw", "DrawSize"],
						none: ["LastDraw"]
					},
					i = e[t] || e.outline;
				"none" == t ? this.Draw = function() {
					return 1
				} : this.drawFunc = this[i[1]], this[i[0]] = this.Draw
			}, i.Update = function(t, e, i, n, s, o, a, r) {
				var h = this.tc.outlineOffset,
					l = 2 * h;
				this.x = s * t + a - h, this.y = s * e + r - h, this.w = s * i + l, this.h = s * n + l, this.sc = s, this.z = o
			}, i.Ants = function(t) {
				if (this.adash) {
					var e, i = this.adash,
						n = this.agap,
						s = this.aspeed,
						o = i + n,
						a = 0,
						r = i,
						h = n,
						l = 0,
						u = 0;
					s && (u = c(s) * (I() - this.ts) / 50, s < 0 && (u = 864e4 - u), s = ~~u % o), s ? (i >= s ? (a = i - s, r = s) : (h = o - s, l = n - h), e = [a, h, r, l]) : e = [i, n], t.setLineDash(e)
				}
			}, i.DrawOutline = function(t, e, i, n, s, o) {
				var a = m(this.radius, s / 2, n / 2);
				t.strokeStyle = o, this.Ants(t), V(t, e, i, n, s, a, !0)
			}, i.DrawSize = function(t, e, i, n, s, o, a, r, h) {
				var l, u, c, f = a.w,
					d = a.h;
				return this.pulsate ? (c = a.image ? (a.image.height + this.tc.outlineIncrease) / a.image.height : a.oscale, u = a.fimage || a.image, l = 1 + (c - 1) * (1 - this.pulse), a.h *= l, a.w *= l) : u = a.oimage, a.alpha = 1, a.Draw(t, r, h, u), a.h = d, a.w = f, 1
			}, i.DrawColour = function(t, e, i, n, s, o, a, r, h) {
				return a.oimage ? (this.pulse < 1 ? (a.alpha = 1 - v(this.pulse, 2), a.Draw(t, r, h, a.fimage), a.alpha = this.pulse) : a.alpha = 1, a.Draw(t, r, h, a.oimage), 1) : this[a.image ? "DrawColourImage" : "DrawColourText"](t, e, i, n, s, o, a, r, h)
			}, i.DrawColourText = function(t, e, i, n, s, o, a, r, h) {
				var l = a.colour;
				return a.colour = o, a.alpha = 1, a.Draw(t, r, h), a.colour = l, 1
			}, i.DrawColourImage = function(t, e, i, n, s, o, a, r, h) {
				var l, c = t.canvas,
					f = ~~g(e, 0),
					d = ~~g(i, 0),
					p = m(c.width - f, n) + .5 | 0,
					w = m(c.height - d, s) + .5 | 0;
				return u ? (u.width = p, u.height = w) : u = W(p, w), u ? (l = u.getContext("2d"), l.drawImage(c, f, d, p, w, 0, 0, p, w), t.clearRect(f, d, p, w), this.pulsate ? a.alpha = 1 - v(this.pulse, 2) : a.alpha = 1, a.Draw(t, r, h), t.setTransform(1, 0, 0, 1, 0, 0), t.save(), t.beginPath(), t.rect(f, d, p, w), t.clip(), t.globalCompositeOperation = "source-in", t.fillStyle = o, t.fillRect(f, d, p, w), t.restore(), t.globalAlpha = 1, t.globalCompositeOperation = "destination-over", t.drawImage(u, 0, 0, p, w, f, d, p, w), t.globalCompositeOperation = "source-over", 1) : this.SetMethod("outline")
			}, i.DrawBlock = function(t, e, i, n, s, o) {
				var a = m(this.radius, s / 2, n / 2);
				t.fillStyle = o, V(t, e, i, n, s, a)
			}, i.DrawSimple = function(t, e, i, n, s, o) {
				var a = this.tc;
				return t.setTransform(1, 0, 0, 1, 0, 0), t.strokeStyle = this.colour, t.lineWidth = a.outlineThickness, t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0, t.globalAlpha = o ? s : 1, this.drawFunc(t, this.x, this.y, this.w, this.h, this.colour, e, i, n)
			}, i.DrawPulsate = function(t, e, i, n) {
				var s = I() - this.ts,
					o = this.tc,
					a = o.pulsateTo + (1 - o.pulsateTo) * (.5 + d(2 * Math.PI * s / (1e3 * o.pulsateTime)) / 2);
				return this.pulse = a = zt.Smooth(1, a), this.DrawSimple(t, e, i, n, a, 1)
			}, i.Active = function(t, e, i) {
				var n = e >= this.x && i >= this.y && e <= this.x + this.w && i <= this.y + this.h;
				return this.ts = n ? this.ts || I() : null, n
			}, i.PreDraw = i.PostDraw = i.LastDraw = _, s = kt.prototype, s.Init = function(t) {
				var e = this.tc;
				this.textHeight = e.textHeight, this.HasText() ? this.Measure(e.ctxt, e) : (this.w = this.iw, this.h = this.ih), this.SetShadowColour = e.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed, this.SetDraw(e)
			}, s.Draw = _, s.HasText = function() {
				return this.text && this.text[0].length > 0
			}, s.EqualTo = function(t) {
				var e = t.getElementsByTagName("img");
				return this.a.href != t.href ? 0 : e.length ? this.image.src == e[0].src : (t.innerText || t.textContent) == this.text_original
			}, s.SetImage = function(t) {
				this.image = this.fimage = t
			}, s.SetDraw = function(t) {
				this.Draw = this.fimage ? t.ie > 7 ? this.DrawImageIE : this.DrawImage : this.DrawText, t.noSelect && (this.CheckActive = _)
			}, s.MeasureText = function(t) {
				var e, i, n = this.text.length,
					s = 0;
				for (e = 0; e < n; ++e) this.line_widths[e] = i = t.measureText(this.text[e])
					.width, s = g(s, i);
				return s
			}, s.Measure = function(t, e) {
				var i, n, s, o, a, r, h, l, u, c = et(this.text, this.textFont, this.textHeight);
				h = c ? c.max.y + c.min.y : this.textHeight, t.font = this.font = this.textHeight + "px " + this.textFont, r = this.MeasureText(t), e.txtOpt && (i = e.txtScale, n = i * this.textHeight, s = n + "px " + this.textFont, o = [i * e.shadowOffset[0], i * e.shadowOffset[1]], t.font = s, a = this.MeasureText(t), u = new G(this.text, s, a + i, i * h + i, a, this.line_widths, e.textAlign, e.textVAlign, i), this.image && u.SetImage(this.image, this.iw, this.ih, e.imagePosition, e.imagePadding, e.imageAlign, e.imageVAlign, e.imageScale), l = u.Create(this.colour, this.bgColour, this.bgOutline, i * this.bgOutlineThickness, e.shadow, i * e.shadowBlur, o, i * this.padding, i * this.bgRadius), "colour" == e.outlineMethod ? this.oimage = u.Create(this.outline.colour, this.bgColour, this.outline.colour, i * this.bgOutlineThickness, e.shadow, i * e.shadowBlur, o, i * this.padding, i * this.bgRadius) : "size" == e.outlineMethod && (c = et(this.text, this.textFont, this.textHeight + e.outlineIncrease), n = c.max.y + c.min.y, s = i * (this.textHeight + e.outlineIncrease) + "px " + this.textFont, t.font = s, a = this.MeasureText(t), u = new G(this.text, s, a + i, i * n + i, a, this.line_widths, e.textAlign, e.textVAlign, i), this.image && u.SetImage(this.image, this.iw + e.outlineIncrease, this.ih + e.outlineIncrease, e.imagePosition, e.imagePadding, e.imageAlign, e.imageVAlign, e.imageScale), this.oimage = u.Create(this.colour, this.bgColour, this.bgOutline, i * this.bgOutlineThickness, e.shadow, i * e.shadowBlur, o, i * this.padding, i * this.bgRadius), this.oscale = this.oimage.width / l.width, e.outlineIncrease > 0 ? l = Z(l, this.oimage.width, this.oimage.height) : this.oimage = Z(this.oimage, l.width, l.height)), l && (this.fimage = l, r = this.fimage.width / i, h = this.fimage.height / i), this.SetDraw(e), e.txtOpt = !!this.fimage), this.h = h, this.w = r
			}, s.SetFont = function(t, e, i, n) {
				this.textFont = t, this.colour = e, this.bgColour = i, this.bgOutline = n, this.Measure(this.tc.ctxt, this.tc)
			}, s.SetWeight = function(t) {
				var e, i, n = this.tc,
					s = n.weightMode.split(/[, ]/),
					o = t.length;
				if (this.HasText()) {
					for (this.weighted = !0, i = 0; i < o; ++i) e = s[i] || "size", "both" == e ? (this.Weight(t[i], n.ctxt, n, "size", n.min_weight[i], n.max_weight[i], i), this.Weight(t[i], n.ctxt, n, "colour", n.min_weight[i], n.max_weight[i], i)) : this.Weight(t[i], n.ctxt, n, e, n.min_weight[i], n.max_weight[i], i);
					this.Measure(n.ctxt, n)
				}
			}, s.Weight = function(t, e, i, n, s, o, a) {
				t = isNaN(t) ? 1 : t;
				var r = (t - s) / (o - s);
				"colour" == n ? this.colour = Y(i, r, a) : "bgcolour" == n ? this.bgColour = Y(i, r, a) : "bgoutline" == n ? this.bgOutline = Y(i, r, a) : "outline" == n ? this.outline.colour = Y(i, r, a) : "size" == n && (i.weightSizeMin > 0 && i.weightSizeMax > i.weightSizeMin ? this.textHeight = i.weightSize * (i.weightSizeMin + (i.weightSizeMax - i.weightSizeMin) * r) : this.textHeight = g(1, t * i.weightSize))
			}, s.SetShadowColourFixed = function(t, e, i) {
				t.shadowColor = e
			}, s.SetShadowColourAlpha = function(t, e, i) {
				t.shadowColor = H(e, i)
			}, s.DrawText = function(t, e, i) {
				var n, s, o = this.tc,
					a = this.x,
					r = this.y,
					h = this.sc;
				for (t.globalAlpha = this.alpha, t.fillStyle = this.colour, o.shadow && this.SetShadowColour(t, o.shadow, this.alpha), t.font = this.font, a += e / h, r += i / h - this.h / 2, n = 0; n < this.text.length; ++n) s = a, "right" == o.textAlign ? s += this.w / 2 - this.line_widths[n] : "centre" == o.textAlign ? s -= this.line_widths[n] / 2 : s -= this.w / 2, t.setTransform(h, 0, 0, h, h * s, h * r), t.fillText(this.text[n], 0, 0), r += this.textHeight
			}, s.DrawImage = function(t, e, i, n) {
				var s = this.x,
					o = this.y,
					a = this.sc,
					r = n || this.fimage,
					h = this.w,
					l = this.h,
					u = this.alpha,
					c = this.shadow;
				t.globalAlpha = u, c && this.SetShadowColour(t, c, u), s += e / a - h / 2, o += i / a - l / 2, t.setTransform(a, 0, 0, a, a * s, a * o), t.drawImage(r, 0, 0, h, l)
			}, s.DrawImageIE = function(t, e, i) {
				var n = this.fimage,
					s = this.sc,
					o = n.width = this.w * s,
					a = n.height = this.h * s,
					r = this.x * s + e - o / 2,
					h = this.y * s + i - a / 2;
				t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = this.alpha, t.drawImage(n, r, h)
			}, s.Calc = function(t, e) {
				var i, n = this.tc,
					s = n.minBrightness,
					o = n.maxBrightness,
					a = n.max_radius;
				return i = t.xform(this.position), this.xformed = i, i = Ct(n, i, n.stretchX, n.stretchY), this.x = i.x, this.y = i.y, this.z = i.z, this.sc = i.w, this.alpha = e * z(s + (o - s) * (a - this.z) / (2 * a), 0, 1), this.xformed
			}, s.UpdateActive = function(t, e, i) {
				var n = this.outline,
					s = this.w,
					o = this.h,
					a = this.x - s / 2,
					r = this.y - o / 2;
				return n.Update(a, r, s, o, this.sc, this.z, e, i), n
			}, s.CheckActive = function(t, e, i) {
				var n = this.tc,
					s = this.UpdateActive(t, e, i);
				return s.Active(t, n.mx, n.my) ? s : null
			}, s.Clicked = function(t) {
				var e, i = this.a,
					n = i.target,
					s = i.href;
				if ("" == n || "_self" == n) {
					if (C.createEvent) {
						if (e = C.createEvent("MouseEvents"), e.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null), !i.dispatchEvent(e)) return
					} else if (i.fireEvent && !i.fireEvent("onclick")) return;
					C.location = s
				} else if (self.frames[n]) self.frames[n].document.location = s;
				else {
					try {
						if (top.frames[n]) return void(top.frames[n].document.location = s)
					} catch (o) {}
					window.open(s, n)
				}
			}, o = zt.prototype, o.SourceElements = function() {
				return C.querySelectorAll ? C.querySelectorAll("#" + this.source) : [C.getElementById(this.source)]
			}, o.HideTags = function() {
				var t, e = this.SourceElements();
				for (t = 0; t < e.length; ++t) e[t].style.display = "none"
			}, o.GetTags = function() {
				var t, e, i, n, s = this.SourceElements(),
					o = [];
				for (n = 0; n <= this.repeatTags; ++n)
					for (e = 0; e < s.length; ++e)
						for (t = s[e].getElementsByTagName("a"), i = 0; i < t.length; ++i) o.push(t[i]);
				return o
			}, o.Message = function(t) {
				var e, i, n, s, o, a, r = [],
					h = t.split("");
				for (e = 0; e < h.length; ++e) " " != h[e] && (i = e - h.length / 2, n = C.createElement("A"), n.href = "#", n.innerText = h[e], o = 100 * f(i / 9), a = -100 * d(i / 9), s = new kt(this, h[e], n, [o, 0, a], 2, 18, "#000", "#fff", 0, 0, 0, "monospace", 2, h[e]), s.Init(), r.push(s));
				return r
			}, o.CreateTag = function(t) {
				var e, i, n, s, o, a, r, h, l = [0, 0, 0];
				return "text" != this.imageMode && (e = t.getElementsByTagName("img"), e.length && (i = new Image, i.src = e[0].src, !this.imageMode)) ? (n = new kt(this, "", t, l, 0, 0), n.SetImage(i), ot(i, e[0], n, this), n) : ("image" != this.imageMode && (o = new St(t), s = o.Lines(), o.Empty() ? o = null : (a = this.textFont || it(at(t, "font-family")), this.splitWidth && (s = o.SplitWidth(this.splitWidth, this.ctxt, a, this.textHeight)), r = "tag" == this.bgColour ? at(t, "background-color") : this.bgColour, h = "tag" == this.bgOutline ? at(t, "color") : this.bgOutline)), o || i ? (n = new kt(this, s, t, l, 2, this.textHeight + 2, this.textColour || at(t, "color"), r, this.bgRadius, h, this.bgOutlineThickness, a, this.padding, o && o.original), i ? (n.SetImage(i), ot(i, e[0], n, this)) : n.Init(), n) : void 0)
			}, o.UpdateTag = function(t, e) {
				var i = this.textColour || at(e, "color"),
					n = this.textFont || it(at(e, "font-family")),
					s = "tag" == this.bgColour ? at(e, "background-color") : this.bgColour,
					o = "tag" == this.bgOutline ? at(e, "color") : this.bgOutline;
				t.a = e, t.title = e.title, t.colour == i && t.textFont == n && t.bgColour == s && t.bgOutline == o || t.SetFont(n, i, s, o)
			}, o.Weight = function(t) {
				var e, i, n, s, o = t.length,
					a = [],
					r = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
					h = r.length;
				for (i = 0; i < o; ++i)
					for (a[i] = [], n = 0; n < h; ++n) e = rt(t[i].a, r[n], this.textHeight), (!this.max_weight[n] || e > this.max_weight[n]) && (this.max_weight[n] = e), (!this.min_weight[n] || e < this.min_weight[n]) && (this.min_weight[n] = e), a[i][n] = e;
				for (n = 0; n < h; ++n) this.max_weight[n] > this.min_weight[n] && (s = 1);
				if (s)
					for (i = 0; i < o; ++i) t[i].SetWeight(a[i])
			}, o.Load = function() {
				var t, e, i, n, s, o, a, r, h = this.GetTags(),
					l = [],
					u = [],
					c = {
						sphere: M,
						vcylinder: F,
						hcylinder: E,
						vring: j,
						hring: B
					};
				if (h.length) {
					for (u.length = h.length, r = 0; r < h.length; ++r) u[r] = r;
					for (this.shuffleTags && A(u), n = 100 * this.radiusX, s = 100 * this.radiusY, o = 100 * this.radiusZ, this.max_radius = g(n, g(s, o)), r = 0; r < h.length; ++r) e = this.CreateTag(h[u[r]]), e && l.push(e);
					for (this.weight && this.Weight(l, !0), this.shapeArgs ? this.shapeArgs[0] = l.length : (i = this.shape.toString()
						.split(/[(),]/), t = i.shift(), "function" === typeof window[t] ? this.shape = window[t] : this.shape = c[t] || c.sphere, this.shapeArgs = [l.length, n, s, o].concat(i)), a = this.shape.apply(this, this.shapeArgs), this.listLength = l.length, r = 0; r < l.length; ++r) l[r].position = new D(a[r][0], a[r][1], a[r][2])
				}
				this.noTagsMessage && !l.length && (r = this.imageMode && "both" != this.imageMode ? this.imageMode + " " : "", l = this.Message("No " + r + "tags")), this.taglist = l
			}, o.Update = function() {
				var t, e, i, n, s, o, a = this.GetTags(),
					r = [],
					h = this.taglist,
					l = [],
					u = [];
				if (!this.shapeArgs) return this.Load();
				if (a.length) {
					for (n = this.listLength = a.length, i = h.length, s = 0; s < i; ++s) r.push(h[s]), u.push(s);
					for (s = 0; s < n; ++s) {
						for (o = 0, t = 0; o < i; ++o) h[o].EqualTo(a[s]) && (this.UpdateTag(r[o], a[s]), t = u[o] = -1);
						t || l.push(s)
					}
					for (s = 0, o = 0; s < i; ++s) - 1 == u[o] ? u.splice(o, 1) : ++o;
					if (u.length) {
						A(u);
						while (u.length && l.length) s = u.shift(), o = l.shift(), r[s] = this.CreateTag(a[o]);
						u.sort((function(t, e) {
							return t - e
						}));
						while (u.length) r.splice(u.pop(), 1)
					}
					o = r.length / (l.length + 1), s = 0;
					while (l.length) r.splice(p(++s * o), 0, this.CreateTag(a[l.shift()]));
					for (this.shapeArgs[0] = n = r.length, e = this.shape.apply(this, this.shapeArgs), s = 0; s < n; ++s) r[s].position = new D(e[s][0], e[s][1], e[s][2]);
					this.weight && this.Weight(r)
				}
				this.taglist = r
			}, o.SetShadow = function(t) {
				t.shadowBlur = this.shadowBlur, t.shadowOffsetX = this.shadowOffset[0], t.shadowOffsetY = this.shadowOffset[1]
			}, o.Draw = function(t) {
				if (!this.paused) {
					var e, i, n, s, o = this.canvas,
						a = o.width,
						r = o.height,
						h = 0,
						l = (t - this.time) * zt.interval / 1e3,
						u = a / 2 + this.offsetX,
						c = r / 2 + this.offsetY,
						f = this.ctxt,
						d = -1,
						g = this.taglist,
						m = g.length,
						p = this.frontSelect,
						w = this.centreFunc == _;
					if (this.time = t, this.frozen && this.drawn) return this.Animate(a, r, l);
					for (s = this.AnimateFixed(), f.setTransform(1, 0, 0, 1, 0, 0), n = 0; n < m; ++n) g[n].Calc(this.transform, this.fixedAlpha);
					if (g = O(g, (function(t, e) {
						return e.z - t.z
					})), s && this.fixedAnim.active) e = this.fixedAnim.tag.UpdateActive(f, u, c);
					else {
						for (this.active = null, n = 0; n < m; ++n) i = this.mx >= 0 && this.my >= 0 && this.taglist[n].CheckActive(f, u, c), i && i.sc > h && (!p || i.z <= 0) && (e = i, d = n, e.tag = this.taglist[n], h = i.sc);
						this.active = e
					}
					for (this.txtOpt || this.shadow && this.SetShadow(f), f.clearRect(0, 0, a, r), n = 0; n < m; ++n) {
						if (!w && g[n].z <= 0) {
							try {
								this.centreFunc(f, a, r, u, c)
							} catch (v) {
								alert(v), this.centreFunc = _
							}
							w = !0
						}
						e && e.tag == g[n] && e.PreDraw(f, g[n], u, c) || g[n].Draw(f, u, c), e && e.tag == g[n] && e.PostDraw(f)
					}
					this.freezeActive && e ? this.Freeze() : (this.UnFreeze(), this.drawn = m == this.listLength), this.fixedCallback && (this.fixedCallback(this, this.fixedCallbackTag), this.fixedCallback = null), s || this.Animate(a, r, l), e && e.LastDraw(f), o.style.cursor = e ? this.activeCursor : "", this.Tooltip(e, this.taglist[d])
				}
			}, o.TooltipNone = function() {}, o.TooltipNative = function(t, e) {
				this.canvas.title = t ? e && e.title ? e.title : "" : this.ctitle
			}, o.SetTTDiv = function(t, e) {
				var i = this,
					n = i.ttdiv.style;
				t != i.ttdiv.innerHTML && (n.display = "none"), i.ttdiv.innerHTML = t, e && (e.title = i.ttdiv.innerHTML), "none" != n.display || i.tttimer || (i.tttimer = setTimeout((function() {
					var t = bt(i.canvas.id);
					n.display = "block", n.left = t.x + i.mx + "px", n.top = t.y + i.my + 24 + "px", i.tttimer = null
				}), i.tooltipDelay))
			}, o.TooltipDiv = function(t, e) {
				t && e && e.title ? this.SetTTDiv(e.title, e) : !t && -1 != this.mx && -1 != this.my && this.ctitle.length ? this.SetTTDiv(this.ctitle) : this.ttdiv.style.display = "none"
			}, o.Transform = function(t, e, i) {
				if (e || i) {
					var n = f(e),
						s = d(e),
						o = f(i),
						a = d(i),
						r = new $([a, 0, o, 0, 1, 0, -o, 0, a]),
						h = new $([1, 0, 0, 0, s, -n, 0, n, s]);
					t.transform = t.transform.mul(r.mul(h))
				}
			}, o.AnimateFixed = function() {
				var t, e, i, n, s;
				return this.fadeIn && (e = I() - this.startTime, e >= this.fadeIn ? (this.fadeIn = 0, this.fixedAlpha = 1) : this.fixedAlpha = e / this.fadeIn), !!this.fixedAnim && (this.fixedAnim.transform || (this.fixedAnim.transform = this.transform), t = this.fixedAnim, e = I() - t.t0, i = t.angle, s = this.animTiming(t.t, e), this.transform = t.transform, e >= t.t ? (this.fixedCallbackTag = t.tag, this.fixedCallback = t.cb, this.fixedAnim = this.yaw = this.pitch = 0) : i *= s, n = $.Rotation(i, t.axis), this.transform = this.transform.mul(n), 0 != this.fixedAnim)
			}, o.AnimatePosition = function(t, e, i) {
				var n, s, o = this,
					a = o.mx,
					r = o.my;
				!o.frozen && a >= 0 && r >= 0 && a < t && r < e ? (n = o.maxSpeed, s = o.reverse ? -1 : 1, o.lx || (o.yaw = (2 * a * n / t - n) * s * i), o.ly || (o.pitch = (2 * r * n / e - n) * -s * i), o.initial = null) : o.initial || (o.frozen && !o.freezeDecel ? o.yaw = o.pitch = 0 : o.Decel(o)), this.Transform(o, o.pitch, o.yaw)
			}, o.AnimateDrag = function(t, e, i) {
				var n = this,
					s = 100 * i * n.maxSpeed / n.max_radius / n.zoom;
				n.dx || n.dy ? (n.lx || (n.yaw = n.dx * s / n.stretchX), n.ly || (n.pitch = n.dy * -s / n.stretchY), n.dx = n.dy = 0, n.initial = null) : n.initial || n.Decel(n), this.Transform(n, n.pitch, n.yaw)
			}, o.Freeze = function() {
				this.frozen || (this.preFreeze = [this.yaw, this.pitch], this.frozen = 1, this.drawn = 0)
			}, o.UnFreeze = function() {
				this.frozen && (this.yaw = this.preFreeze[0], this.pitch = this.preFreeze[1], this.frozen = 0)
			}, o.Decel = function(t) {
				var e = t.minSpeed,
					i = c(t.yaw),
					n = c(t.pitch);
				!t.lx && i > e && (t.yaw = i > t.z0 ? t.yaw * t.decel : 0), !t.ly && n > e && (t.pitch = n > t.z0 ? t.pitch * t.decel : 0)
			}, o.Zoom = function(t) {
				this.z2 = this.z1 * (1 / t), this.drawn = 0
			}, o.Clicked = function(t) {
				var e = this.active;
				try {
					e && e.tag && (!1 === this.clickToFront || null === this.clickToFront ? e.tag.Clicked(t) : this.TagToFront(e.tag, this.clickToFront, (function() {
						e.tag.Clicked(t)
					}), !0))
				} catch (i) {}
			}, o.Wheel = function(t) {
				var e = this.zoom + this.zoomStep * (t ? 1 : -1);
				this.zoom = m(this.zoomMax, g(this.zoomMin, e)), this.Zoom(this.zoom)
			}, o.BeginDrag = function(t) {
				this.down = lt(t, this.canvas), t.cancelBubble = !0, t.returnValue = !1, t.preventDefault && t.preventDefault()
			}, o.Drag = function(t, e) {
				if (this.dragControl && this.down) {
					var i = this.dragThreshold * this.dragThreshold,
						n = e.x - this.down.x,
						s = e.y - this.down.y;
					(this.dragging || n * n + s * s > i) && (this.dx = n, this.dy = s, this.dragging = 1, this.down = e)
				}
				return this.dragging
			}, o.EndDrag = function() {
				var t = this.dragging;
				return this.dragging = this.down = null, t
			}, o.BeginPinch = function(t) {
				this.pinched = [_t(t), this.zoom], t.preventDefault && t.preventDefault()
			}, o.Pinch = function(t) {
				var e, i, n = this.pinched;
				n && (i = _t(t), e = n[1] * i / n[0], this.zoom = m(this.zoomMax, g(this.zoomMin, e)), this.Zoom(this.zoom))
			}, o.EndPinch = function(t) {
				this.pinched = null
			}, o.Pause = function() {
				this.paused = !0
			}, o.Resume = function() {
				this.paused = !1
			}, o.SetSpeed = function(t) {
				this.initial = t, this.yaw = t[0] * this.maxSpeed, this.pitch = t[1] * this.maxSpeed
			}, o.FindTag = function(t) {
				if (!T(t)) return null;
				if (T(t.index) && (t = t.index), !k(t)) return this.taglist[t];
				var e, i, n;
				for (T(t.id) ? (e = "id", i = t.id) : T(t.text) && (e = "innerText", i = t.text), n = 0; n < this.taglist.length; ++n)
					if (this.taglist[n].a[e] == i) return this.taglist[n]
			}, o.RotateTag = function(t, e, i, n, s, o) {
				var a = t.Calc(this.transform, 1),
					r = new D(a.x, a.y, a.z),
					h = P(i, e),
					l = r.angle(h),
					u = r.cross(h)
					.unit();
				0 == l ? (this.fixedCallbackTag = t, this.fixedCallback = s) : this.fixedAnim = {
					angle: -l,
					axis: u,
					t: n,
					t0: I(),
					cb: s,
					tag: t,
					active: o
				}
			}, o.TagToFront = function(t, e, i, n) {
				this.RotateTag(t, 0, 0, e, i, n)
			}, zt.Start = function(t, e, i) {
				zt.Delete(t), zt.tc[t] = new zt(t, e, i)
			}, zt.Linear = function(t, e) {
				return e / t
			}, zt.Smooth = function(t, e) {
				return .5 - d(e * Math.PI / t) / 2
			}, zt.Pause = function(t) {
				It("Pause", t)
			}, zt.Resume = function(t) {
				It("Resume", t)
			}, zt.Reload = function(t) {
				It("Load", t)
			}, zt.Update = function(t) {
				It("Update", t)
			}, zt.SetSpeed = function(t, e) {
				return !(!k(e) || !zt.tc[t] || isNaN(e[0]) || isNaN(e[1])) && (zt.tc[t].SetSpeed(e), !0)
			}, zt.TagToFront = function(t, e) {
				return !!k(e) && (e.lat = e.lng = 0, zt.RotateTag(t, e))
			}, zt.RotateTag = function(t, e) {
				if (k(e) && zt.tc[t]) {
					isNaN(e.time) && (e.time = 500);
					var i = zt.tc[t].FindTag(e);
					if (i) return zt.tc[t].RotateTag(i, e.lat, e.lng, e.time, e.callback, e.active), !0
				}
				return !1
			}, zt.Delete = function(t) {
				var e, i;
				if (S[t] && (i = C.getElementById(t), i))
					for (e = 0; e < S[t].length; ++e) st(S[t][e][0], S[t][e][1], i);
				delete S[t], delete zt.tc[t]
			}, zt.NextFrameRAF = function() {
				requestAnimationFrame(yt)
			}, zt.NextFrameTimeout = function(t) {
				setTimeout(xt, t)
			}, zt.tc = {}, zt.options = {
				z1: 2e4,
				z2: 2e4,
				z0: 2e-4,
				freezeActive: !1,
				freezeDecel: !1,
				activeCursor: "pointer",
				pulsateTo: 1,
				pulsateTime: 3,
				reverse: !1,
				depth: .5,
				maxSpeed: .05,
				minSpeed: 0,
				decel: .95,
				interval: 20,
				minBrightness: .1,
				maxBrightness: 1,
				outlineColour: "#ffff99",
				outlineThickness: 2,
				outlineOffset: 5,
				outlineMethod: "outline",
				outlineRadius: 0,
				textColour: "#ff99ff",
				textHeight: 15,
				textFont: "Helvetica, Arial, sans-serif",
				shadow: "#000",
				shadowBlur: 0,
				shadowOffset: [0, 0],
				initial: null,
				hideTags: !0,
				zoom: 1,
				weight: !1,
				weightMode: "size",
				weightFrom: null,
				weightSize: 1,
				weightSizeMin: null,
				weightSizeMax: null,
				weightGradient: {
					0: "#f00",
					.33: "#ff0",
					.66: "#0f0",
					1: "#00f"
				},
				txtOpt: !0,
				txtScale: 2,
				frontSelect: !1,
				wheelZoom: !0,
				zoomMin: .3,
				zoomMax: 3,
				zoomStep: .05,
				shape: "sphere",
				lock: null,
				tooltip: null,
				tooltipDelay: 300,
				tooltipClass: "tctooltip",
				radiusX: 1,
				radiusY: 1,
				radiusZ: 1,
				stretchX: 1,
				stretchY: 1,
				offsetX: 0,
				offsetY: 0,
				shuffleTags: !1,
				noSelect: !1,
				noMouse: !1,
				imageScale: 1,
				paused: !1,
				dragControl: !1,
				dragThreshold: 4,
				centreFunc: _,
				splitWidth: 0,
				animTiming: "Smooth",
				clickToFront: !1,
				fadeIn: 0,
				padding: 0,
				bgColour: null,
				bgRadius: 0,
				bgOutline: null,
				bgOutlineThickness: 0,
				outlineIncrease: 4,
				textAlign: "centre",
				textVAlign: "middle",
				imageMode: null,
				imagePosition: null,
				imagePadding: 2,
				imageAlign: "centre",
				imageVAlign: "middle",
				noTagsMessage: !0,
				centreImage: null,
				pinchZoom: !1,
				repeatTags: 0,
				minTags: 0,
				imageRadius: 0,
				scrollPause: !1,
				outlineDash: 0,
				outlineDashSpace: 0,
				outlineDashSpeed: 1
			}, zt.options) zt[t] = zt.options[t];
			window.TagCanvas = zt, nt("load", (function() {
				zt.loaded = 1
			}), window)
		})()
	},
	4108: function(t, e, i) {},
	"44fd": function(t, e, i) {},
	"458a": function(t, e, i) {
		"use strict";
		var n = i("8c25"),
			s = i.n(n);
		s.a
	},
	4992: function(t, e, i) {
		t.exports = i.p + "media/begin.2772e4d4.mp3"
	},
	"56d7": function(t, e, i) {
		"use strict";
		i.r(e);
		i("e260"), i("e6cf"), i("cca6"), i("a79d");
		var n = i("2b0e"),
			s = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					attrs: {
						id: "root"
					}
				}, [i("header", [i("Publicity", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.running,
						expression: "!running"
					}]
				}), i("el-button", {
					staticClass: "res",
					attrs: {
						type: "text"
					},
					on: {
						click: function(e) {
							t.showResult = !0
						}
					}
                }, [t._v(" Result ")]), i("el-button", {
					staticClass: "con",
					attrs: {
						type: "text"
					},
					on: {
						click: function(e) {
							t.showConfig = !0
						}
					}
				}, [t._v("Config ")])], 1), i("div", {
					class: {
						mask: t.showRes
					},
					attrs: {
						id: "main"
					}
				}), i("div", {
					attrs: {
						id: "tags"
					}
				}, t._l(t.datas, (function(e) {
					return i("ul", {
						key: e.key
					}, [i("li", [i("a", {
						style: {
							color: "#fff"
						},
						attrs: {
							href: "javascript:void(0);"
						}
					}, [t._v(" " + t._s(e.name ? e.name : e.key) + " "), e.photo ? i("img", {
						attrs: {
							src: e.photo,
							width: 50,
							height: 50
						}
					}) : t._e()])])])
				})), 0), i("transition", {
					attrs: {
						name: "bounce"
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showRes,
						expression: "showRes"
					}],
					attrs: {
						id: "resbox"
					}
				}, [i("p", {
					on: {
						click: function(e) {
							t.showRes = !1
						}
					}
				}, [t._v(t._s(t.categoryName) + "Result：")]), i("div", {
					staticClass: "container"
				}, t._l(t.resArr, (function(e) {
					return i("span", {
						key: e,
						staticClass: "itemres",
						class: {
							numberOver: !!t.photos.find((function(t) {
								return t.id === e
							})) || !!t.list.find((function(t) {
								return t.key === e
							}))
						},
						style: t.resCardStyle,
						attrs: {
							"data-id": e
						},
						on: {
							click: function(e) {
								t.showRes = !1
							}
						}
					}, [t.photos.find((function(t) {
						return t.id === e
					})) ? t._e() : i("span", {
						staticClass: "cont"
					}, [t.list.find((function(t) {
						return t.key === e
					})) ? i("span", {
						style: {
							fontSize: "40px"
						}
					}, [t._v(" " + t._s(t.list.find((function(t) {
							return t.key === e
						}))
						.name) + " ")]) : i("span", [t._v(" " + t._s(e) + " ")])]), t.photos.find((function(t) {
						return t.id === e
					})) ? i("img", {
						attrs: {
							src: t.photos.find((function(t) {
									return t.id === e
								}))
								.value,
							alt: "photo",
							width: 160,
							height: 160
						}
					}) : t._e()])
				})), 0)])]), i("el-button", {
					staticClass: "audio",
					attrs: {
						type: "text"
					},
					on: {
						click: function() {
							t.playAudio(!t.audioPlaying)
						}
					}
				}, [i("i", {
					staticClass: "iconfont",
					class: [t.audioPlaying ? "iconstop" : "iconplay1"]
				})]), i("LotteryConfig", {
					attrs: {
						visible: t.showConfig
					},
					on: {
						"update:visible": function(e) {
							t.showConfig = e
						},
						resetconfig: t.reloadTagCanvas
					}
				}), i("Tool", {
					attrs: {
						running: t.running,
						closeRes: t.closeRes
					},
					on: {
						toggle: t.toggle,
						resetConfig: t.reloadTagCanvas,
						getPhoto: t.getPhoto
					}
				}), i("Result", {
					attrs: {
						visible: t.showResult
					},
					on: {
						"update:visible": function(e) {
							t.showResult = e
						}
					}
				}), i("span", {
					staticClass: "copy-right"
				}, [t._v(" Copyright©zhangyongfeng5350@gmail.com ")]), i("audio", {
					attrs: {
						id: "audiobg",
						preload: "auto",
						controls: "",
						autoplay: "",
						loop: ""
					},
					on: {
						play: t.playHandler,
						pause: t.pauseHandler
					}
				}, [i("source", {
					attrs: {
						src: t.audioSrc
					}
				}), t._v(" Your browser does not support the audio tag ")])], 1)
			},
			o = [],
			a = (i("99af"), i("7db0"), i("d81d"), i("b0c0"), i("159b"), i("ade3")),
			r = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("el-dialog", {
					staticClass: "c-LotteryConfig",
					attrs: {
						visible: t.visible,
						"append-to-body": !0,
						width: "390px"
					},
					on: {
						close: function(e) {
							return t.$emit("update:visible", !1)
						}
					}
				}, [i("div", {
					staticClass: "c-LotteryConfigtitle",
					attrs: {
						slot: "title"
					},
					slot: "title"
				}, [i("span", {
					style: {
						fontSize: "16px",
						marginRight: "20px"
					}
				}, [t._v(" Config ")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: t.addLottery
					}
				}, [t._v("Increase")]), i("el-button", {
					attrs: {
						size: "mini",
						type: "primary"
					},
					on: {
						click: t.onSubmit
					}
				}, [t._v("Save")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							return t.$emit("update:visible", !1)
						}
					}
				}, [t._v("Cancle")])], 1), i("div", {
					staticClass: "container"
				}, [i("el-form", {
					ref: "form",
					attrs: {
						model: t.form,
						size: "mini"
					}
				}, [i("el-form-item", {
					attrs: {
						label: "Title"
					}
				}, [i("el-input", {
					model: {
						value: t.form.name,
						callback: function(e) {
							t.$set(t.form, "name", e)
						},
						expression: "form.name"
					}
				})], 1), i("el-form-item", {
					attrs: {
						label: "Number"
					}
				}, [i("el-input", {
					attrs: {
						type: "number",
						min: 1,
						step: 1
					},
					model: {
						value: t.form.number,
						callback: function(e) {
							t.$set(t.form, "number", e)
						},
						expression: "form.number"
					}
				})], 1), i("el-form-item", {
					attrs: {
						label: "Award"
					}
				}, [i("el-input", {
					attrs: {
						type: "number",
						min: 0,
						step: 1
					},
					model: {
						value: t.form.firstPrize,
						callback: function(e) {
							t.$set(t.form, "firstPrize", e)
						},
						expression: "form.firstPrize"
					}
				})], 1), t._l(t.storeNewLottery, (function(e) {
					return i("el-form-item", {
						key: e.key,
						attrs: {
							label: e.name
						}
					}, [i("el-input", {
						attrs: {
							type: "number",
							min: 0,
							step: 1
						},
						on: {
							change: function(i) {
								t.form[e.key] = Number(i)
							}
						},
						model: {
							value: t.form[e.key],
							callback: function(i) {
								t.$set(t.form, e.key, i)
							},
							expression: "form[newitem.key]"
						}
					})], 1)
				}))], 2)], 1), i("el-dialog", {
					staticClass: "dialog-showAddLottery",
					attrs: {
						visible: t.showAddLottery,
						"append-to-body": !0,
						width: "300px"
					},
					on: {
						"update:visible": function(e) {
							t.showAddLottery = e
						}
					}
				}, [i("div", {
					staticClass: "add-title",
					attrs: {
						slot: "title"
					},
					slot: "title"
				}, [t._v("Increase")]), i("el-form", {
					ref: "newLottery",
					attrs: {
						model: t.newLottery,
						size: "mini"
					}
				}, [i("el-form-item", {
					attrs: {
						label: "Title"
					}
				}, [i("el-input", {
					model: {
						value: t.newLottery.name,
						callback: function(e) {
							t.$set(t.newLottery, "name", e)
						},
						expression: "newLottery.name"
					}
				})], 1), i("el-form-item", [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: t.addHandler
					}
				}, [t._v("Increase")]), i("el-button", {
					on: {
						click: function(e) {
							t.showAddLottery = !1
						}
					}
				}, [t._v("Cancle")])], 1)], 1)], 1)], 1)
			},
			h = [];
		i("ac1f"), i("1276");

		function l(t, e) {
			if ("string" === typeof e) return localStorage.setItem(t, e);
			try {
				localStorage.setItem(t, JSON.stringify(e))
			} catch (i) {
				return i
			}
		}

		function u(t) {
			var e = localStorage.getItem(t);
			try {
				return JSON.parse(e)
			} catch (i) {
				return e
			}
		}

		function c(t) {
			return localStorage.removeItem(t)
		}

		function f() {
			return localStorage.clear()
		}

		function d(t, e) {
			if (t && e && t.getAttribute) return t.getAttribute("data-" + e)
		}
		var g = "config",
			m = "result",
			p = "newLottery",
			w = "list";

		function v(t) {
			var e = "";
			switch (t) {
				case "firstPrize":
					e = "Award one";
					break;
				default:
					break
			}
			var i = u(p) || [],
				n = i.find((function(e) {
					return e.key === t
				}));
			return n && (e = n.name), e
		}
		i("4de4"), i("a630"), i("caad"), i("fb6a"), i("a9e3"), i("d3b7"), i("e25e"), i("2532"), i("3ca3"), i("ddb0");

		function x(t, e) {
			return Array.from(new Array(e + 1)
					.keys())
				.slice(t)
		}

		function y() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
				e = arguments.length > 1 ? arguments[1] : void 0;
			return parseInt(Math.random() * (e - t + 1) + t, 10)
		}

		function b(t) {
			for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, n = x(1, Number(t)), s = e, o = [], a = 0; a < i; a++) {
				var r = n.filter((function(t) {
						return !s.includes(t)
					})),
					h = r[y(1, r.length) - 1];
				o.push(h), s.push(h)
			}
			return o
		}
		var C, S, T = {
				name: "LotteryConfig",
				props: {
					visible: Boolean
				},
				computed: {
					form: {
						get: function() {
							return this.$store.state.config
						},
						set: function(t) {
							return t
						}
					},
					storeNewLottery: function() {
						return this.$store.state.newLottery
					}
				},
				data: function() {
					return {
						showAddLottery: !1,
						newLottery: {
							name: ""
						}
					}
				},
				methods: {
					onSubmit: function() {
						var t = this;
						l(g, this.form), this.$store.commit("setConfig", this.form), this.$emit("update:visible", !1), this.$message({
							message: "Saved",
							type: "success"
						}), this.$nextTick((function() {
							t.$emit("resetconfig")
						}))
					},
					addLottery: function() {
						this.showAddLottery = !0
					},
					randomField: function() {
						for (var t = "abcdefghijklmnopqrstuvwxyz", e = "", i = 0; i < 10; i++) e += t.split("")[y(1, 27) - 1];
						return "".concat(e)
							.concat(Date.now())
					},
					addHandler: function() {
						var t = this.randomField(),
							e = {
								key: t,
								name: this.newLottery.name
							};
						this.$store.commit("setNewLottery", e), this.showAddLottery = !1
					}
				}
			},
			k = T,
			z = (i("458a"), i("2877")),
			_ = Object(z["a"])(k, r, h, !1, null, null, null),
			I = _.exports,
			O = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "c-Publicity"
				}, [i("el-carousel", {
					attrs: {
						height: "50px",
						autoplay: !0,
						"indicator-position": "none",
						arrow: "never",
						interval: 3e3
					}
				}, t._l(t.message, (function(e) {
					return i("el-carousel-item", {
						key: e.key
					}, [i("div", {
						staticClass: "item",
						class: {
							actiname: 0 === e.key
						}
					}, [e.title ? i("span", {
						staticClass: "title"
					}, [t._v(" " + t._s(e.title))]) : t._e(), e.value ? i("span", {
						staticClass: "value"
					}, [t._v(" " + t._s(e.value) + " ")]) : t._e()])])
				})), 1)], 1)
			},
			A = [],
			D = (i("a15b"), i("b64b"), {
				name: "Publicity",
				computed: {
					config: function() {
						return this.$store.state.config
					},
					result: function() {
						return this.$store.state.result
					},
					message: function() {
						var t = this.result,
							e = this.config,
							i = Object.keys(e),
							n = [{
								key: 0,
								title: e.name
							}];
						return i.forEach((function(i, s) {
							var o = v(i);
							t[i] && e[i] > 0 && n.push({
								key: s + 1,
								title: "".concat(o, "Result:"),
								value: "".concat(t[i].length > 0 ? t[i].join("、") : "Not Done")
							})
						})), n
					}
				}
			}),
			P = D,
			$ = (i("2e68"), Object(z["a"])(P, O, A, !1, null, null, null)),
			M = $.exports,
			R = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					attrs: {
						id: "tool"
					}
				}, [i("el-button", {
					attrs: {
						type: "primary",
						size: "mini"
					},
					on: {
						click: t.startHandler
					}
				}, [t._v(t._s(t.running ? "Stop" : "Start"))]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							t.showRemoveoptions = !0
						}
					}
				}, [t._v(" Reset ")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							t.showImport = !0
						}
					}
				}, [t._v(" Import List ")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							t.showImportphoto = !0
						}
					}
				}, [t._v(" Import Picture ")]), i("el-dialog", {
					staticClass: "setwat-dialog",
					attrs: {
						"append-to-body": !0,
						visible: t.showSetwat,
						width: "400px"
					},
					on: {
						"update:visible": function(e) {
							t.showSetwat = e
						}
					}
				}, [i("el-form", {
					ref: "form",
					attrs: {
						model: t.form,
						"label-width": "80px",
						size: "mini"
					}
				}, [i("el-form-item", {
					attrs: {
						label: "Award"
					}
				}, [i("el-select", {
					attrs: {
						placeholder: "Please select award"
					},
					model: {
						value: t.form.category,
						callback: function(e) {
							t.$set(t.form, "category", e)
						},
						expression: "form.category"
					}
				}, t._l(t.categorys, (function(t, e) {
					return i("el-option", {
						key: e,
						attrs: {
							label: t.label,
							value: t.value
						}
					})
				})), 1)], 1), t.form.category ? i("el-form-item", {
					attrs: {
						label: " "
					}
				}, [i("span", [t._v(" Select "), i("span", {
					staticClass: "colorred"
				}, [t._v(t._s(t.config[t.form.category]))]), t._v(" Person ")]), i("span", {
					style: {
						marginLeft: "20px"
					}
				}, [t._v(" Remain "), i("span", {
					staticClass: "colorred"
				}, [t._v(t._s(t.remain))]), t._v(" Person ")])]) : t._e(), i("el-form-item", {
					attrs: {
						label: "Mode"
					}
				}, [i("el-select", {
					attrs: {
						placeholder: "Please Mode"
					},
					model: {
						value: t.form.mode,
						callback: function(e) {
							t.$set(t.form, "mode", e)
						},
						expression: "form.mode"
					}
				}, [i("el-option", {
					attrs: {
						label: "1 person",
						value: 1
					}
				}), i("el-option", {
					attrs: {
						label: "5 person",
						value: 5
					}
				}), i("el-option", {
					attrs: {
						label: "all person",
						value: 0
					}
				}), i("el-option", {
					attrs: {
						label: "customized",
						value: 99
					}
				})], 1)], 1), 99 === t.form.mode ? i("el-form-item", {
					attrs: {
						label: "抽取人数"
					}
				}, [i("el-input", {
					attrs: {
						type: "number",
						clearable: !0,
						min: 1,
						max: t.remain ? t.remain : 100,
						step: 1
					},
					model: {
						value: t.form.qty,
						callback: function(e) {
							t.$set(t.form, "qty", e)
						},
						expression: "form.qty"
					}
				})], 1) : t._e(), i("el-form-item", {
					attrs: {
						label: "All"
					}
				}, [i("el-switch", {
					model: {
						value: t.form.allin,
						callback: function(e) {
							t.$set(t.form, "allin", e)
						},
						expression: "form.allin"
					}
				}), i("span", {
					style: {
						fontSize: "12px"
					}
				}, [t._v(" (if open, it will select among all.) ")])], 1), i("el-form-item", [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: t.onSubmit
					}
				}, [t._v("Draw now")]), i("el-button", {
					on: {
						click: function(e) {
							t.showSetwat = !1
						}
					}
				}, [t._v("Cancle")])], 1)], 1)], 1), i("el-dialog", {
					staticClass: "import-dialog",
					attrs: {
						"append-to-body": !0,
						visible: t.showImport,
						width: "400px"
					},
					on: {
						"update:visible": function(e) {
							t.showImport = e
						}
					}
				}, [i("el-input", {
					attrs: {
						type: "textarea",
						rows: 10,
						placeholder: ""
					},
					model: {
						value: t.listStr,
						callback: function(e) {
							t.listStr = e
						},
						expression: "listStr"
					}
				}), i("div", {
					staticClass: "footer"
				}, [i("el-button", {
					attrs: {
						size: "mini",
						type: "primary"
					},
					on: {
						click: t.transformList
					}
				}, [t._v("Continue")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							t.showImport = !1
						}
					}
				}, [t._v("Cancle")])], 1)], 1), i("Importphoto", {
					attrs: {
						visible: t.showImportphoto
					},
					on: {
						"update:visible": function(e) {
							t.showImportphoto = e
						},
						getPhoto: function(e) {
							return t.$emit("getPhoto")
						}
					}
				}), i("el-dialog", {
					staticClass: "c-removeoptions",
					attrs: {
						visible: t.showRemoveoptions,
						width: "300px",
						"append-to-body": !0
					},
					on: {
						"update:visible": function(e) {
							t.showRemoveoptions = e
						}
					}
				}, [i("el-form", {
					ref: "form",
					attrs: {
						model: t.removeInfo,
						"label-width": "80px",
						size: "mini"
					}
				}, [i("el-form-item", {
					attrs: {
						label: "Mode"
					}
				}, [i("el-radio-group", {
					model: {
						value: t.removeInfo.type,
						callback: function(e) {
							t.$set(t.removeInfo, "type", e)
						},
						expression: "removeInfo.type"
					}
				}, [i("el-radio", {
					attrs: {
						border: "",
						label: 0
					}
				}, [t._v("ResetAllData")]), i("el-radio", {
					attrs: {
						border: "",
						label: 1
					}
				}, [t._v("ResetConfig")]), i("el-radio", {
					attrs: {
						border: "",
						label: 2
					}
				}, [t._v("ResetList")]), i("el-radio", {
					attrs: {
						border: "",
						label: 3
					}
				}, [t._v("ResetPicture")]), i("el-radio", {
					attrs: {
						border: "",
						label: 4
					}
				}, [t._v("ResetResult")])], 1)], 1), i("el-form-item", [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: t.resetConfig
					}
				}, [t._v("Continue")]), i("el-button", {
					on: {
						click: function(e) {
							t.showRemoveoptions = !1
						}
					}
				}, [t._v("Cancle")])], 1)], 1)], 1)], 1)
			},
			L = [],
			F = (i("498a"), function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("el-dialog", {
					staticClass: "c-Importphoto",
					attrs: {
						visible: t.visible,
						"append-to-body": !0,
						width: "300px"
					},
					on: {
						close: function(e) {
							return t.$emit("update:visible", !1)
						}
					}
				}, [i("el-row", [i("label", {
					attrs: {
						for: "idinput"
					}
				}, [t._v("Lucky number")]), i("el-input", {
					attrs: {
						id: "idinput",
						size: "mini",
						type: "number",
						min: 0,
						max: t.config.number
					},
					model: {
						value: t.id,
						callback: function(e) {
							t.id = e
						},
						expression: "id"
					}
				})], 1), i("el-row", [i("label", {
					attrs: {
						for: "idinput"
					}
				}, [t._v("Select picture")]), i("span", {
					staticClass: "selectbg",
					attrs: {
						"data-tip": t.filename
					}
				}, [i("input", {
					ref: "uploadinput",
					staticClass: "upload",
					attrs: {
						type: "file",
						accept: ".jpg,.png"
					},
					on: {
						change: t.inputChange
					}
				})])]), i("el-row", {
					staticClass: "photo"
				}, [i("label", [t._v("Picture Selected")]), t.value ? i("img", {
					attrs: {
						src: t.value,
						alt: "img",
						width: 140,
						height: 140
					}
				}) : i("span", [t._v("Not Selected")])]), i("el-row", [t._v("  ")]), i("el-row", {
					staticClass: "center"
				}, [i("el-button", {
					attrs: {
						size: "mini",
						type: "primary"
					},
					on: {
						click: t.saveHandler
					}
				}, [t._v("Save")]), i("el-button", {
					attrs: {
						size: "mini"
					},
					on: {
						click: function(e) {
							return t.$emit("update:visible", !1)
						}
					}
				}, [t._v("Cancle")])], 1)], 1)
			}),
			E = [],
			j = (i("96cf"), i("1da1")),
			B = i("d4ec"),
			N = "luckydraw.GuaranteeTransaction",
			H = function(t) {
				C = t.createObjectStore(N, {
					keyPath: "id",
					autoIncrement: !0
				}), C.createIndex("id", "id", {
					unique: !0
				}), C.createIndex("name", "name")
			},
			W = function(t) {
				t.objectStoreNames.contains(N) ? (t.deleteObjectStore(N), H(t)) : H(t)
			},
			q = 1,
			X = "luckydraw",
			Y = function t() {
				var e = this;
				Object(B["a"])(this, t), Object(a["a"])(this, "add", (function(t, e) {
					var i = {
						createdTime: Date.now(),
						updateTime: Date.now()
					};
					return new Promise((function(n, s) {
						var o = S.transaction([t], "readwrite"),
							a = o.objectStore(t),
							r = a.add(Object.assign({}, i, e));
						r.onsuccess = function() {
							n(!0)
						}, r.onerror = function(t) {
							s(t.target.error)
						}
					}))
				})), Object(a["a"])(this, "edit", (function(t, e, i) {
					var n = {
						updateTime: Date.now()
					};
					return new Promise((function(s, o) {
						var a = S.transaction([t], "readwrite"),
							r = a.objectStore(t),
							h = r.get(e);
						h.onsuccess = function() {
							var t = h.result;
							for (var e in i) "undefined" !== typeof t[e] && (t[e] = i[e]);
							var a = r.put(Object.assign({}, t, n));
							a.onsuccess = function() {
								s(!0)
							}, a.onerror = function(t) {
								o(t)
							}
						}
					}))
				})), Object(a["a"])(this, "del", (function(t, e) {
					return new Promise((function(i, n) {
						var s = S.transaction([t], "readwrite")
							.objectStore(t),
							o = s.delete(e);
						o.onsuccess = function() {
							i(!0)
						}, o.onerror = function(t) {
							n(t)
						}
					}))
				})), Object(a["a"])(this, "clear", (function(t) {
					return new Promise((function(e, i) {
						var n = S.transaction([t], "readwrite")
							.objectStore(t),
							s = n.clear();
						s.onsuccess = function() {
							e(!0)
						}, s.onerror = function(t) {
							i(t)
						}
					}))
				})), Object(a["a"])(this, "count", (function(t) {
					return new Promise((function(e, i) {
						var n = S.transaction([t], "readwrite")
							.objectStore(t),
							s = n.count();
						s.onsuccess = function() {
							e(s.result)
						}, s.onerror = function(t) {
							i(t)
						}
					}))
				})), Object(a["a"])(this, "get", (function(t, e) {
					return new Promise((function(i, n) {
						var s = S.transaction(t)
							.objectStore(t),
							o = s.get(e);
						o.onsuccess = function() {
							i(o.result)
						}, o.onerror = function(t) {
							n(t)
						}
					}))
				})), Object(a["a"])(this, "getKey", (function(t, e) {
					return new Promise((function(i, n) {
						var s = S.transaction(t)
							.objectStore(t),
							o = s.getKey(e);
						o.onsuccess = function() {
							i(o.result)
						}, o.onerror = function(t) {
							n(t)
						}
					}))
				})), Object(a["a"])(this, "getAll", (function(t) {
					return new Promise((function(e, i) {
						var n = S.transaction(t)
							.objectStore(t),
							s = n.getAll();
						s.onsuccess = function() {
							e(s.result)
						}, s.onerror = function(t) {
							i(t)
						}
					}))
				})), Object(a["a"])(this, "onerror", (function(t) {
					console.log("db-connection-fail", t)
				})), Object(a["a"])(this, "InitIndexedDB", (function() {
					var t = window.indexedDB.open(X, q);
					t.onerror = function(t) {
						e.onerror(t)
					}, t.onsuccess = function() {
						S = t.result, console.log("db-connection-success")
					}, t.onupgradeneeded = function() {
						S = event.target.result, W(S)
					}
				})), this.InitIndexedDB()
			},
			U = new Y,
			V = {
				name: "Importphoto",
				props: {
					visible: Boolean
				},
				computed: {
					config: {
						get: function() {
							return this.$store.state.config
						}
					}
				},
				data: function() {
					return {
						id: 0,
						value: "",
						filename: "Pick to select picture"
					}
				},
				methods: {
					inputChange: function(t) {
						var e = this,
							i = t.target.files,
							n = new FormData;
						n.append("uploadImg", i[0]);
						var s = new FileReader,
							o = 153600,
							a = i[0];
						a && (this.filename = a.name, s.readAsDataURL(a), s.onload = function() {
							if (0 != o && o < s.result.length) return e.$message.error("不允许上传大于150KB的图片");
							e.value = s.result
						})
					},
					saveHandler: function() {
						var t = Object(j["a"])(regeneratorRuntime.mark((function t() {
							var e, i, n, s, o, a = this;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (e = this.id, i = this.value, n = Number(e), n && !(n <= 0)) {
											t.next = 4;
											break
										}
										return t.abrupt("return", this.$message.error("号码必须大于0的整数"));
									case 4:
										if (i) {
											t.next = 6;
											break
										}
										return t.abrupt("return", this.$message.error("请选择照片"));
									case 6:
										return t.next = 8, U.get(N, n);
									case 8:
										s = t.sent, o = {
												id: n,
												value: i
											}, U[s ? "edit" : "add"](N, s ? n : o, s ? o : null)
											.then((function(t) {
												t ? (a.$refs.uploadinput.value = "", a.value = "", a.filename = "Pick to select picture", a.$emit("update:visible", !1), a.$emit("getPhoto"), a.$message({
													message: "Saved",
													type: "success"
												})) : a.$message.error("Faild to save")
											}))
											.catch((function(t) {
												a.$message.error(t.message)
											}));
									case 11:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}()
				}
			},
			G = V,
			Z = (i("6a50"), Object(z["a"])(G, F, E, !1, null, null, null)),
			J = Z.exports,
			K = {
				props: {
					running: Boolean,
					closeRes: Function
				},
				computed: {
					config: {
						get: function() {
							return this.$store.state.config
						}
					},
					remain: function() {
						return this.config[this.form.category] - (this.result[this.form.category] ? this.result[this.form.category].length : 0)
					},
					result: function() {
						return this.$store.state.result
					},
					categorys: function() {
						var t = [];
						for (var e in this.config)
							if (this.config.hasOwnProperty(e)) {
								var i = this.config[e];
								if (i > 0) {
									var n = v(e);
									n && t.push({
										label: n,
										value: e
									})
								}
							} return t
					}
				},
				components: {
					Importphoto: J
				},
				data: function() {
					return {
						showSetwat: !1,
						showImport: !1,
						showImportphoto: !1,
						showRemoveoptions: !1,
						removeInfo: {
							type: 0
						},
						form: {
							category: "",
							mode: 1,
							qty: 1,
							allin: !1
						},
						listStr: ""
					}
				},
				watch: {
					showRemoveoptions: function(t) {
						t || (this.removeInfo.type = 0)
					}
				},
				methods: {
					resetConfig: function() {
						var t = this,
							e = this.removeInfo.type;
						this.$confirm("Do you Continue the data?", "Tip", {
								confirmButtonText: "Continue",
								cancelButtonText: "Cancle",
								type: "warning"
							})
							.then((function() {
								switch (e) {
									case 0:
										f(), t.$store.commit("setClearStore"), U.clear(N);
										break;
									case 1:
										c(g), t.$store.commit("setClearConfig");
										break;
									case 2:
										c(w), t.$store.commit("setClearList");
										break;
									case 3:
										U.clear(N), t.$store.commit("setClearPhotos");
										break;
									case 4:
										c(m), t.$store.commit("setClearResult");
										break;
									default:
										break
								}
								t.closeRes && t.closeRes(), t.showRemoveoptions = !1, t.$message({
									type: "success",
									message: "Successed to reset!"
								}), t.$nextTick((function() {
									t.$emit("resetConfig")
								}))
							}))
							.catch((function() {
								t.$message({
									type: "info",
									message: "Cancled"
								})
							}))
					},
					onSubmit: function() {
						if (!this.form.category) return this.$message.error("Please select award");
						if (this.remain <= 0) return this.$message.error("There are not enough people.");
						if (99 === this.form.mode) {
							if (this.form.qty <= 0) return this.$message.error("Please input the number of select.");
							if (this.form.qty > this.remain) return this.$message.error("The number of people in the draw has exceeded.")
						}
						if ((1 === this.form.mode || 5 === this.form.mode) && this.form.mode > this.remain) return this.$message.error("The number of people in the draw has exceeded.");
						this.showSetwat = !1, this.$emit("toggle", Object.assign({}, this.form, {
							remain: this.remain
						}))
					},
					startHandler: function() {
						this.$emit("toggle"), this.running || (this.showSetwat = !0)
					},
					transformList: function() {
						var t = this,
							e = this.listStr;
						e || this.$message.error("No data");
						var i = [],
							n = e.split("\n");
						n && n.length > 0 && n.forEach((function(t) {
							var e = t.split(/\t|\s/);
							if (e.length >= 2) {
								var n = Number(e[0].trim()),
									s = e[1].trim();
								n && i.push({
									key: n,
									name: s
								})
							}
						})), this.$store.commit("setList", i), this.$message({
							message: "Saved",
							type: "success"
						}), this.showImport = !1, this.$nextTick((function() {
							t.$emit("resetConfig")
						}))
					}
				}
			},
			Q = K,
			tt = (i("d435"), Object(z["a"])(Q, R, L, !1, null, null, null)),
			et = tt.exports,
			it = i("2136"),
			nt = i.n(it),
			st = i("4992"),
			ot = i.n(st),
			at = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("el-dialog", {
					staticClass: "c-Result",
					attrs: {
						visible: t.visible,
						width: "600px",
						"append-to-body": !0
					},
					on: {
						close: function(e) {
							return t.$emit("update:visible", !1)
						}
					}
				}, [i("div", {
					staticClass: "dialog-title",
					attrs: {
						slot: "title"
					},
					slot: "title"
				}, [i("span", {
					style: {
						fontSize: "18px"
					}
				}, [t._v(" Result ")]), i("span", {
					style: {
						fontSize: "14px",
						color: "#999",
						marginLeft: "10px"
					}
				}, [t._v(" (Pick number to delete) ")])]), t._l(t.resultList, (function(e, n) {
					return i("div", {
						key: n,
						staticClass: "listrow",
						on: {
							click: function(i) {
								t.deleteRes(i, e)
							}
						}
					}, [i("span", {
						staticClass: "name"
					}, [t._v(" " + t._s(e.name) + " ")]), i("span", {
						staticClass: "value"
					}, [e.value && 0 === e.value.length ? i("span", [t._v(" 暂未抽奖 ")]) : t._e(), t._l(e.value, (function(e, n) {
						return i("span", {
							key: n,
							staticClass: "card",
							attrs: {
								"data-res": e
							}
						}, [t._v(" " + t._s(e) + " ")])
					}))], 2)])
				}))], 2)
			},
			rt = [],
			ht = {
				name: "c-Result",
				props: {
					visible: Boolean
				},
				computed: {
					result: {
						get: function() {
							return this.$store.state.result
						},
						set: function(t) {
							this.$store.commit("setResult", t)
						}
					},
					resultList: function() {
						var t = [];
						for (var e in this.result)
							if (this.result.hasOwnProperty(e)) {
								var i = this.result[e],
									n = v(e);
								t.push({
									label: e,
									name: n,
									value: i
								})
							} return t
					}
				},
				methods: {
					deleteRes: function(t, e) {
						var i = this,
							n = d(t.target, "res");
						n && this.$confirm("Are you sure to delete?", "Warn", {
								confirmButtonText: "Continue",
								cancelButtonText: "Cancle",
								type: "warning"
							})
							.then((function() {
								if (n) {
									var t = i.result;
									t[e.label] = i.result[e.label].filter((function(t) {
										return t !== Number(n)
									})), i.result = t, i.$message({
										type: "success",
										message: "Deleted!"
									})
								}
							}))
							.catch((function() {
								i.$message({
									type: "info",
									message: "Cancled"
								})
							}))
					}
				}
			},
			lt = ht,
			ut = (i("aada"), Object(z["a"])(lt, at, rt, !1, null, null, null)),
			ct = ut.exports,
			ft = {
				name: "App",
				components: {
					LotteryConfig: I,
					Publicity: M,
					Tool: et,
					Result: ct
				},
				computed: {
					resCardStyle: function() {
						var t = {
								fontSize: "30px"
							},
							e = this.config.number;
						return e < 100 ? t.fontSize = "100px" : e < 1e3 ? t.fontSize = "80px" : e < 1e4 && (t.fontSize = "60px"), t
					},
					config: {
						get: function() {
							return this.$store.state.config
						}
					},
					result: {
						get: function() {
							return this.$store.state.result
						},
						set: function(t) {
							this.$store.commit("setResult", t)
						}
					},
					list: function() {
						return this.$store.state.list
					},
					allresult: function() {
						var t = [];
						for (var e in this.result)
							if (this.result.hasOwnProperty(e)) {
								var i = this.result[e];
								t = t.concat(i)
							} return t
					},
					datas: function() {
						var t = this,
							e = this.config.number,
							i = e >= 1500 ? 500 : this.config.number,
							n = e > 1500 ? Math.floor(e / 3) : e,
							s = b(n, [], i),
							o = s.map((function(i) {
								var n = t.list.find((function(t) {
										return t.key === i
									})),
									s = t.photos.find((function(t) {
										return t.id === i
									}));
								return {
									key: i * (e > 1500 ? 3 : 1),
									name: n ? n.name : "",
									photo: s ? s.value : ""
								}
							}));
						return o
					},
					categoryName: function() {
						return v(this.category)
					},
					photos: function() {
						return this.$store.state.photos
					}
				},
				created: function() {
					var t = this,
						e = u(g);
					e && this.$store.commit("setConfig", Object.assign({}, e));
					var i = u(m);
					i && this.$store.commit("setResult", i);
					var n = u(p);
					if (n) {
						var s = this.config;
						n.forEach((function(e) {
							t.$store.commit("setNewLottery", e), s[e.key] || t.$set(s, e.key, 0)
						})), this.$store.commit("setConfig", s)
					}
					var o = u(w);
					o && this.$store.commit("setList", o)
				},
				data: function() {
					return {
						running: !1,
						showRes: !1,
						showConfig: !1,
						showResult: !1,
						resArr: [],
						category: "",
						audioPlaying: !1,
						audioSrc: nt.a
					}
				},
				watch: {
					photos: {
						deep: !0,
						handler: function() {
							var t = this;
							this.$nextTick((function() {
								t.reloadTagCanvas()
							}))
						}
					}
				},
				mounted: function() {
					var t = this;
					this.startTagCanvas(), setTimeout((function() {
						t.getPhoto()
					}), 1e3), window.addEventListener("resize", this.reportWindowSize)
				},
				beforeDestroy: function() {
					window.removeEventListener("resize", this.reportWindowSize)
				},
				methods: {
					reportWindowSize: function() {
						var t = this.$el.querySelector("#rootcanvas");
						t.parentElement && t.parentElement.removeChild(t), this.startTagCanvas()
					},
					playHandler: function() {
						this.audioPlaying = !0
					},
					pauseHandler: function() {
						this.audioPlaying = !1
					},
					playAudio: function(t) {
						t ? this.$el.querySelector("#audiobg")
							.play() : this.$el.querySelector("#audiobg")
							.pause()
					},
					loadAudio: function() {
						var t = this;
						this.$el.querySelector("#audiobg")
							.load(), this.$nextTick((function() {
								t.$el.querySelector("#audiobg")
									.play()
							}))
					},
					getPhoto: function() {
						var t = this;
						U.getAll(N)
							.then((function(e) {
								e && e.length > 0 && t.$store.commit("setPhotos", e)
							}))
					},
					speed: function() {
						return [.1 * Math.random() + .01, -(.1 * Math.random() + .01)]
					},
					createCanvas: function() {
						var t = document.createElement("canvas");
						t.width = document.body.offsetWidth, t.height = document.body.offsetHeight, t.id = "rootcanvas", this.$el.querySelector("#main")
							.appendChild(t)
					},
					startTagCanvas: function() {
						this.createCanvas();
						var t = this.speed;
						window.TagCanvas.Start("rootcanvas", "tags", {
							textColour: null,
							initial: t(),
							dragControl: 1,
							textHeight: 20,
							noSelect: !0,
							lock: "xy"
						})
					},
					reloadTagCanvas: function() {
						window.TagCanvas.Reload("rootcanvas")
					},
					closeRes: function() {
						this.showRes = !1
					},
					toggle: function(t) {
						var e = this,
							i = this.speed,
							n = this.config;
						if (this.running) this.audioSrc = nt.a, this.loadAudio(), window.TagCanvas.SetSpeed("rootcanvas", i()), this.showRes = !0, this.running = !this.running, this.$nextTick((function() {
							e.reloadTagCanvas()
						}));
						else {
							if (this.showRes = !1, !t) return;
							this.audioSrc = ot.a, this.loadAudio();
							var s = n.number,
								o = t.category,
								r = t.mode,
								h = t.qty,
								l = t.remain,
								u = t.allin,
								c = 1;
							1 === r || 5 === r ? c = r : 0 === r ? c = l : 99 === r && (c = h);
							var f = b(s, u ? [] : this.allresult, c);
							this.resArr = f, this.category = o, this.result[o] || this.$set(this.result, o, []);
							var d = this.result[o] || [],
								g = Object.assign({}, this.result, Object(a["a"])({}, o, d.concat(f)));
							this.result = g, window.TagCanvas.SetSpeed("rootcanvas", [5, 1]), this.running = !this.running
						}
					}
				}
			},
			dt = ft,
			gt = (i("5c0b"), Object(z["a"])(dt, s, o, !1, null, null, null)),
			mt = gt.exports,
			pt = i("8c4f"),
			wt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "home"
				})
			},
			vt = [],
			xt = {
				name: "home"
			},
			yt = xt,
			bt = Object(z["a"])(yt, wt, vt, !1, null, null, null),
			Ct = bt.exports;
		n["default"].use(pt["a"]);
		var St = [{
				path: "/",
				name: "home",
				component: Ct
			}],
			Tt = new pt["a"]({
				base: "/lucky-draw/",
				routes: St
			}),
			kt = Tt,
			zt = (i("c740"), i("2f62"));
		n["default"].use(zt["a"]);
		var _t = new zt["a"].Store({
				state: {
					config: {
						name: "Lucky draw",
						number: 70,
						firstPrize: 1
					},
					result: {
						firstPrize: []
					},
					newLottery: [],
					list: [],
					photos: []
				},
				mutations: {
					setClearConfig: function(t) {
						t.config = {
							name: "Lucky draw",
							number: 70,
							firstPrize: 1
						}, t.newLottery = []
					},
					setClearList: function(t) {
						t.list = []
					},
					setClearPhotos: function(t) {
						t.photos = []
					},
					setClearResult: function(t) {
						t.result = {
							firstPrize: []
						}
					},
					setClearStore: function(t) {
						t.config = {
							name: "Lucky draw",
							number: 70,
							firstPrize: 1
						}, t.result = {
							firstPrize: []
						}, t.newLottery = [], t.list = [], t.photos = []
					},
					setConfig: function(t, e) {
						t.config = e
					},
					setResult: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						t.result = e, l(m, t.result)
					},
					setNewLottery: function(t, e) {
						t.newLottery.find((function(t) {
							return t.name === e.name
						})) || (t.newLottery.push(e), l(p, t.newLottery))
					},
					setList: function(t, e) {
						var i = t.list;
						e.forEach((function(t) {
							var e = i.findIndex((function(e) {
								return e.key === t.key
							}));
							e > -1 ? i[e].name = t.name : i.push(t)
						})), t.list = i, l(w, i)
					},
					setPhotos: function(t, e) {
						t.photos = e
					}
				},
				actions: {},
				modules: {}
			}),
			It = i("5c96"),
			Ot = i.n(It);
		i("44fd"), i("0fae"), i("32d3");
		n["default"].config.productionTip = !1, n["default"].use(Ot.a), new n["default"]({
				router: kt,
				store: _t,
				render: function(t) {
					return t(mt)
				}
			})
			.$mount("#app")
	},
	"5c0b": function(t, e, i) {
		"use strict";
		var n = i("9c0c"),
			s = i.n(n);
		s.a
	},
	"6a50": function(t, e, i) {
		"use strict";
		var n = i("4108"),
			s = i.n(n);
		s.a
	},
	"8c25": function(t, e, i) {},
	"9c0c": function(t, e, i) {},
	a8ef: function(t, e, i) {},
	aada: function(t, e, i) {
		"use strict";
		var n = i("0e80"),
			s = i.n(n);
		s.a
	},
	b83a: function(t, e, i) {},
	d435: function(t, e, i) {
		"use strict";
		var n = i("a8ef"),
			s = i.n(n);
		s.a
	}
});
//# sourceMappingURL=app.d4e7f888.js.map