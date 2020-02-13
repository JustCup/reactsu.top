var ogl = function (t) {
    "use strict";

    function e(t) {
        let e = t[0],
            i = t[1],
            r = t[2];
        return Math.sqrt(e * e + i * i + r * r)
    }

    function i(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }

    function r(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
    }

    function s(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
    }

    function n(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
    }

    function a(t, e) {
        let i = e[0],
            r = e[1],
            s = e[2],
            n = i * i + r * r + s * s;
        return n > 0 && (n = 1 / Math.sqrt(n)), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
    }

    function h(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    const o = function () {
        const t = [0, 0, 0],
            e = [0, 0, 0];
        return function (r, s) {
            i(t, r), i(e, s), a(t, t), a(e, e);
            let n = h(t, e);
            return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n)
        }
    }();
    class l extends Array {
        constructor(t = 0, e = t, i = t) {
            return super(t, e, i), this
        }
        get x() {
            return this[0]
        }
        set x(t) {
            this[0] = t
        }
        get y() {
            return this[1]
        }
        set y(t) {
            this[1] = t
        }
        get z() {
            return this[2]
        }
        set z(t) {
            this[2] = t
        }
        set(t, e = t, i = t) {
            return t.length ? this.copy(t) : (function (t, e, i, r) {
                t[0] = e, t[1] = i, t[2] = r
            }(this, t, e, i), this)
        }
        copy(t) {
            return i(this, t), this
        }
        add(t, e) {
            return e ? r(this, t, e) : r(this, this, t), this
        }
        sub(t, e) {
            return e ? s(this, t, e) : s(this, this, t), this
        }
        multiply(t) {
            var e, i, r;
            return t.length ? (i = this, r = t, (e = this)[0] = i[0] * r[0], e[1] = i[1] * r[1], e[2] = i[2] * r[2]) : n(this, this, t), this
        }
        divide(t) {
            var e, i, r;
            return t.length ? (i = this, r = t, (e = this)[0] = i[0] / r[0], e[1] = i[1] / r[1], e[2] = i[2] / r[2]) : n(this, this, 1 / t), this
        }
        inverse(t = this) {
            var e, i;
            return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], e[2] = 1 / i[2], this
        }
        len() {
            return e(this)
        }
        distance(t) {
            return t ? function (t, e) {
                let i = e[0] - t[0],
                    r = e[1] - t[1],
                    s = e[2] - t[2];
                return Math.sqrt(i * i + r * r + s * s)
            }(this, t) : e(this)
        }
        squaredLen() {
            return this.squaredDistance()
        }
        squaredDistance(t) {
            return t ? function (t, e) {
                let i = e[0] - t[0],
                    r = e[1] - t[1],
                    s = e[2] - t[2];
                return i * i + r * r + s * s
            }(this, t) : function (t) {
                let e = t[0],
                    i = t[1],
                    r = t[2];
                return e * e + i * i + r * r
            }(this)
        }
        negate(t = this) {
            var e, i;
            return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], this
        }
        cross(t, e) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = i[0],
                    h = i[1],
                    o = i[2];
                t[0] = s * o - n * h, t[1] = n * a - r * o, t[2] = r * h - s * a
            }(this, t, e), this
        }
        scale(t) {
            return n(this, this, t), this
        }
        normalize() {
            return a(this, this), this
        }
        dot(t) {
            return h(this, t)
        }
        equals(t) {
            return i = t, (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
            var e, i
        }
        applyMatrix4(t) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = i[3] * r + i[7] * s + i[11] * n + i[15];
                a = a || 1, t[0] = (i[0] * r + i[4] * s + i[8] * n + i[12]) / a, t[1] = (i[1] * r + i[5] * s + i[9] * n + i[13]) / a, t[2] = (i[2] * r + i[6] * s + i[10] * n + i[14]) / a
            }(this, this, t), this
        }
        applyQuaternion(t) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = i[0],
                    h = i[1],
                    o = i[2],
                    l = h * n - o * s,
                    u = o * r - a * n,
                    c = a * s - h * r,
                    d = h * c - o * u,
                    g = o * l - a * c,
                    p = a * u - h * l,
                    m = 2 * i[3];
                l *= m, u *= m, c *= m, d *= 2, g *= 2, p *= 2, t[0] = r + l + d, t[1] = s + u + g, t[2] = n + c + p
            }(this, this, t), this
        }
        angle(t) {
            return o(this, t)
        }
        lerp(t, e) {
            return function (t, e, i, r) {
                let s = e[0],
                    n = e[1],
                    a = e[2];
                t[0] = s + r * (i[0] - s), t[1] = n + r * (i[1] - n), t[2] = a + r * (i[2] - a)
            }(this, this, t, e), this
        }
        clone() {
            return new l(this[0], this[1], this[2])
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
        }
        transformDirection(t) {
            const e = this[0],
                i = this[1],
                r = this[2];
            return this[0] = t[0] * e + t[4] * i + t[8] * r, this[1] = t[1] * e + t[5] * i + t[9] * r, this[2] = t[2] * e + t[6] * i + t[10] * r, this.normalize()
        }
    }
    const u = new l;
    let c = 0,
        d = 0;
    class g {
        constructor(t, e = {}) {
            this.gl = t, this.attributes = e, this.id = c++, this.VAOs = {}, this.drawRange = {
                start: 0,
                count: 0
            }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
            for (let t in e) this.addAttribute(t, e[t])
        }
        addAttribute(t, e) {
            if (this.attributes[t] = e, e.id = d++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalize = e.normalize || !1, e.buffer = this.gl.createBuffer(), e.count = e.data.length / e.size, e.divisor = e.instanced || 0, e.needsUpdate = !1, this.updateAttribute(e), e.divisor) {
                if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                this.instancedCount = e.count * e.divisor
            } else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
        }
        updateAttribute(t) {
            this.glState.boundBuffer !== t.id && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.id), this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW), t.needsUpdate = !1
        }
        setIndex(t) {
            this.addAttribute("index", t)
        }
        setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        }
        setInstancedCount(t) {
            this.instancedCount = t
        }
        createVAO(t) {
            this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
        }
        bindAttributes(t) {
            t.attributeLocations.forEach((t, e) => {
                if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
                const i = this.attributes[e];
                this.gl.bindBuffer(i.target, i.buffer), this.glState.boundBuffer = i.id, this.gl.vertexAttribPointer(t, i.size, i.type, i.normalize, 0, 0), this.gl.enableVertexAttribArray(t), this.gl.renderer.vertexAttribDivisor(t, i.divisor)
            }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
        }
        draw({
            program: t,
            mode: e = this.gl.TRIANGLES
        }) {
            this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((t, e) => {
                const i = this.attributes[e];
                i.needsUpdate && this.updateAttribute(i)
            }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
        }
        computeBoundingBox(t) {
            !t && this.attributes.position && (t = this.attributes.position.data), t || console.warn("No position buffer found to compute bounds"), this.bounds || (this.bounds = {
                min: new l,
                max: new l,
                center: new l,
                scale: new l,
                radius: 1 / 0
            });
            const e = this.bounds.min,
                i = this.bounds.max,
                r = this.bounds.center,
                s = this.bounds.scale;
            e.set(1 / 0), i.set(-1 / 0);
            for (let r = 0, s = t.length; r < s; r += 3) {
                const s = t[r],
                    n = t[r + 1],
                    a = t[r + 2];
                e.x = Math.min(s, e.x), e.y = Math.min(n, e.y), e.z = Math.min(a, e.z), i.x = Math.max(s, i.x), i.y = Math.max(n, i.y), i.z = Math.max(a, i.z)
            }
            s.sub(i, e), r.add(e, i).divide(2)
        }
        computeBoundingSphere(t) {
            !t && this.attributes.position && (t = this.attributes.position.data), t || console.warn("No position buffer found to compute bounds"), this.bounds || this.computeBoundingBox(t);
            let e = 0;
            for (let i = 0, r = t.length; i < r; i += 3) u.fromArray(t, i), e = Math.max(e, this.bounds.center.squaredDistance(u));
            this.bounds.radius = Math.sqrt(e)
        }
        remove() {
            this.vao && this.gl.renderer.deleteVertexArray(this.vao);
            for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
        }
    }
    let p = 0;
    const m = {};
    class f {
        constructor(t, {
            vertex: e,
            fragment: i,
            uniforms: r = {},
            transparent: s = !1,
            cullFace: n = t.BACK,
            frontFace: a = t.CCW,
            depthTest: h = !0,
            depthWrite: o = !0,
            depthFunc: l = t.LESS
        } = {}) {
            this.gl = t, this.uniforms = r, this.id = p++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = s, this.cullFace = n, this.frontFace = a, this.depthTest = h, this.depthWrite = o, this.depthFunc = l, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
            const u = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(u, e), t.compileShader(u), "" !== t.getShaderInfoLog(u) && console.warn(`${t.getShaderInfoLog(u)}\nVertex Shader\n${w(e)}`);
            const c = t.createShader(t.FRAGMENT_SHADER);
            if (t.shaderSource(c, i), t.compileShader(c), "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}\nFragment Shader\n${w(i)}`), this.program = t.createProgram(), t.attachShader(this.program, u), t.attachShader(this.program, c), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
            t.deleteShader(u), t.deleteShader(c), this.uniformLocations = new Map;
            let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
            for (let e = 0; e < d; e++) {
                let i = t.getActiveUniform(this.program, e);
                this.uniformLocations.set(i, t.getUniformLocation(this.program, i.name));
                const r = i.name.match(/(\w+)/g);
                i.uniformName = r[0], 3 === r.length ? (i.isStructArray = !0, i.structIndex = Number(r[1]), i.structProperty = r[2]) : 2 === r.length && isNaN(Number(r[1])) && (i.isStruct = !0, i.structProperty = r[1])
            }
            this.attributeLocations = new Map;
            const g = [],
                m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
            for (let e = 0; e < m; e++) {
                const i = t.getActiveAttrib(this.program, e),
                    r = t.getAttribLocation(this.program, i.name);
                g[r] = i.name, this.attributeLocations.set(i.name, r)
            }
            this.attributeOrder = g.join("")
        }
        setBlendFunc(t, e, i, r) {
            this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = r, t && (this.transparent = !0)
        }
        setBlendEquation(t, e) {
            this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
        }
        applyState() {
            this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.blendEquation.modeRGB && this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
        }
        use({
            flipFaces: t = !1
        } = {}) {
            let e = -1;
            this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach((t, i) => {
                let r = i.uniformName,
                    s = this.uniforms[r];
                if (i.isStruct && (s = s[i.structProperty], r += `.${i.structProperty}`), i.isStructArray && (s = s[i.structIndex][i.structProperty], r += `[${i.structIndex}].${i.structProperty}`), !s) return M(`Active uniform ${r} has not been supplied`);
                if (s && void 0 === s.value) return M(`${r} uniform is missing a value parameter`);
                if (s.value.texture) return e += 1, s.value.update(e), x(this.gl, i.type, t, e);
                if (s.value.length && s.value[0].texture) {
                    const r = [];
                    return s.value.forEach(t => {
                        e += 1, t.update(e), r.push(e)
                    }), x(this.gl, i.type, t, r)
                }
                x(this.gl, i.type, t, s.value)
            }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
        }
        remove() {
            this.gl.deleteProgram(this.program)
        }
    }

    function x(t, e, i, r) {
        r = r.length ? function (t) {
            const e = t.length,
                i = t[0].length;
            if (void 0 === i) return t;
            const r = e * i;
            let s = m[r];
            s || (m[r] = s = new Float32Array(r));
            for (let r = 0; r < e; r++) s.set(t[r], r * i);
            return s
        }(r) : r;
        const s = t.renderer.state.uniformLocations.get(i);
        if (r.length)
            if (void 0 === s) t.renderer.state.uniformLocations.set(i, r.slice(0));
            else {
                if (function (t, e) {
                        if (t.length !== e.length) return !1;
                        for (let i = 0, r = t.length; i < r; i++)
                            if (t[i] !== e[i]) return !1;
                        return !0
                    }(s, r)) return;
                s.set(r), t.renderer.state.uniformLocations.set(i, s)
            }
        else {
            if (s === r) return;
            t.renderer.state.uniformLocations.set(i, r)
        }
        switch (e) {
            case 5126:
                return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
            case 35664:
                return t.uniform2fv(i, r);
            case 35665:
                return t.uniform3fv(i, r);
            case 35666:
                return t.uniform4fv(i, r);
            case 35670:
            case 5124:
            case 35678:
            case 35680:
                return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
            case 35671:
            case 35667:
                return t.uniform2iv(i, r);
            case 35672:
            case 35668:
                return t.uniform3iv(i, r);
            case 35673:
            case 35669:
                return t.uniform4iv(i, r);
            case 35674:
                return t.uniformMatrix2fv(i, !1, r);
            case 35675:
                return t.uniformMatrix3fv(i, !1, r);
            case 35676:
                return t.uniformMatrix4fv(i, !1, r)
        }
    }

    function w(t) {
        let e = t.split("\n");
        for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
        return e.join("\n")
    }
    let b = 0;

    function M(t) {
        b > 100 || (console.warn(t), ++b > 100 && console.warn("More than 100 program warnings - stopping logs."))
    }
    const v = new l;

    function A(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function E(t, e, i, r, s) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = s, t
    }

    function y(t, e) {
        let i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = i * i + r * r + s * s + n * n;
        return a > 0 && (a = 1 / Math.sqrt(a)), t[0] = i * a, t[1] = r * a, t[2] = s * a, t[3] = n * a, t
    }

    function F(t, e, i) {
        let r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = i[0],
            o = i[1],
            l = i[2],
            u = i[3];
        return t[0] = r * u + a * h + s * l - n * o, t[1] = s * u + a * o + n * h - r * l, t[2] = n * u + a * l + r * o - s * h, t[3] = a * u - r * h - s * o - n * l, t
    }
    const T = A,
        _ = E,
        R = function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
        },
        S = y;
    class N extends Array {
        constructor(t = 0, e = 0, i = 0, r = 1) {
            return super(t, e, i, r), this.onChange = (() => {}), this
        }
        get x() {
            return this[0]
        }
        set x(t) {
            this[0] = t, this.onChange()
        }
        get y() {
            return this[1]
        }
        set y(t) {
            this[1] = t, this.onChange()
        }
        get z() {
            return this[2]
        }
        set z(t) {
            this[2] = t, this.onChange()
        }
        get w() {
            return this[3]
        }
        set w(t) {
            this[3] = t, this.onChange()
        }
        identity() {
            var t;
            return (t = this)[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, this.onChange(), this
        }
        set(t, e, i, r) {
            return t.length ? this.copy(t) : (_(this, t, e, i, r), this.onChange(), this)
        }
        rotateX(t) {
            return function (t, e, i) {
                i *= .5;
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    h = Math.sin(i),
                    o = Math.cos(i);
                t[0] = r * o + a * h, t[1] = s * o + n * h, t[2] = n * o - s * h, t[3] = a * o - r * h
            }(this, this, t), this.onChange(), this
        }
        rotateY(t) {
            return function (t, e, i) {
                i *= .5;
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    h = Math.sin(i),
                    o = Math.cos(i);
                t[0] = r * o - n * h, t[1] = s * o + a * h, t[2] = n * o + r * h, t[3] = a * o - s * h
            }(this, this, t), this.onChange(), this
        }
        rotateZ(t) {
            return function (t, e, i) {
                i *= .5;
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    h = Math.sin(i),
                    o = Math.cos(i);
                t[0] = r * o + s * h, t[1] = s * o - r * h, t[2] = n * o + a * h, t[3] = a * o - n * h
            }(this, this, t), this.onChange(), this
        }
        inverse(t = this) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = i * i + r * r + s * s + n * n,
                    h = a ? 1 / a : 0;
                t[0] = -i * h, t[1] = -r * h, t[2] = -s * h, t[3] = n * h
            }(this, t), this.onChange(), this
        }
        conjugate(t = this) {
            var e, i;
            return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], this.onChange(), this
        }
        copy(t) {
            return T(this, t), this.onChange(), this
        }
        normalize(t = this) {
            return S(this, t), this.onChange(), this
        }
        multiply(t, e) {
            return e ? F(this, t, e) : F(this, this, t), this.onChange(), this
        }
        dot(t) {
            return R(this, t)
        }
        fromMatrix3(t) {
            return function (t, e) {
                let i, r = e[0] + e[4] + e[8];
                if (r > 0) i = Math.sqrt(r + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
                else {
                    let r = 0;
                    e[4] > e[0] && (r = 1), e[8] > e[3 * r + r] && (r = 2);
                    let s = (r + 1) % 3,
                        n = (r + 2) % 3;
                    i = Math.sqrt(e[3 * r + r] - e[3 * s + s] - e[3 * n + n] + 1), t[r] = .5 * i, i = .5 / i, t[3] = (e[3 * s + n] - e[3 * n + s]) * i, t[s] = (e[3 * s + r] + e[3 * r + s]) * i, t[n] = (e[3 * n + r] + e[3 * r + n]) * i
                }
            }(this, t), this.onChange(), this
        }
        fromEuler(t) {
            return function (t, e, i = "YXZ") {
                let r = Math.sin(.5 * e[0]),
                    s = Math.cos(.5 * e[0]),
                    n = Math.sin(.5 * e[1]),
                    a = Math.cos(.5 * e[1]),
                    h = Math.sin(.5 * e[2]),
                    o = Math.cos(.5 * e[2]);
                "XYZ" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o - r * n * h) : "YXZ" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o + r * n * h) : "ZXY" === i ? (t[0] = r * a * o - s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o - r * n * h) : "ZYX" === i ? (t[0] = r * a * o - s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o + r * n * h) : "YZX" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o - r * n * h) : "XZY" === i && (t[0] = r * a * o - s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o + r * n * h)
            }(this, t, t.order), this
        }
        fromAxisAngle(t, e) {
            return function (t, e, i) {
                i *= .5;
                let r = Math.sin(i);
                t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(i)
            }(this, t, e), this
        }
        slerp(t, e) {
            return function (t, e, i, r) {
                let s, n, a, h, o, l = e[0],
                    u = e[1],
                    c = e[2],
                    d = e[3],
                    g = i[0],
                    p = i[1],
                    m = i[2],
                    f = i[3];
                (n = l * g + u * p + c * m + d * f) < 0 && (n = -n, g = -g, p = -p, m = -m, f = -f), 1 - n > 1e-6 ? (s = Math.acos(n), a = Math.sin(s), h = Math.sin((1 - r) * s) / a, o = Math.sin(r * s) / a) : (h = 1 - r, o = r), t[0] = h * l + o * g, t[1] = h * u + o * p, t[2] = h * c + o * m, t[3] = h * d + o * f
            }(this, this, t, e), this
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
        }
    }

    function L(t, e, i) {
        let r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = e[9],
            g = e[10],
            p = e[11],
            m = e[12],
            f = e[13],
            x = e[14],
            w = e[15],
            b = i[0],
            M = i[1],
            v = i[2],
            A = i[3];
        return t[0] = b * r + M * h + v * c + A * m, t[1] = b * s + M * o + v * d + A * f, t[2] = b * n + M * l + v * g + A * x, t[3] = b * a + M * u + v * p + A * w, b = i[4], M = i[5], v = i[6], A = i[7], t[4] = b * r + M * h + v * c + A * m, t[5] = b * s + M * o + v * d + A * f, t[6] = b * n + M * l + v * g + A * x, t[7] = b * a + M * u + v * p + A * w, b = i[8], M = i[9], v = i[10], A = i[11], t[8] = b * r + M * h + v * c + A * m, t[9] = b * s + M * o + v * d + A * f, t[10] = b * n + M * l + v * g + A * x, t[11] = b * a + M * u + v * p + A * w, b = i[12], M = i[13], v = i[14], A = i[15], t[12] = b * r + M * h + v * c + A * m, t[13] = b * s + M * o + v * d + A * f, t[14] = b * n + M * l + v * g + A * x, t[15] = b * a + M * u + v * p + A * w, t
    }
    class P extends Array {
        constructor(t = 1, e = 0, i = 0, r = 0, s = 0, n = 1, a = 0, h = 0, o = 0, l = 0, u = 1, c = 0, d = 0, g = 0, p = 0, m = 1) {
            return super(t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m), this
        }
        set x(t) {
            this[12] = t
        }
        get x() {
            return this[12]
        }
        set y(t) {
            this[13] = t
        }
        get y() {
            return this[13]
        }
        set z(t) {
            this[14] = t
        }
        get z() {
            return this[14]
        }
        set w(t) {
            this[15] = t
        }
        get w() {
            return this[15]
        }
        set(t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m) {
            return t.length ? this.copy(t) : (function (t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m, f) {
                t[0] = e, t[1] = i, t[2] = r, t[3] = s, t[4] = n, t[5] = a, t[6] = h, t[7] = o, t[8] = l, t[9] = u, t[10] = c, t[11] = d, t[12] = g, t[13] = p, t[14] = m, t[15] = f
            }(this, t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m), this)
        }
        translate(t, e = this) {
            return function (t, e, i) {
                let r, s, n, a, h, o, l, u, c, d, g, p, m = i[0],
                    f = i[1],
                    x = i[2];
                e === t ? (t[12] = e[0] * m + e[4] * f + e[8] * x + e[12], t[13] = e[1] * m + e[5] * f + e[9] * x + e[13], t[14] = e[2] * m + e[6] * f + e[10] * x + e[14], t[15] = e[3] * m + e[7] * f + e[11] * x + e[15]) : (r = e[0], s = e[1], n = e[2], a = e[3], h = e[4], o = e[5], l = e[6], u = e[7], c = e[8], d = e[9], g = e[10], p = e[11], t[0] = r, t[1] = s, t[2] = n, t[3] = a, t[4] = h, t[5] = o, t[6] = l, t[7] = u, t[8] = c, t[9] = d, t[10] = g, t[11] = p, t[12] = r * m + h * f + c * x + e[12], t[13] = s * m + o * f + d * x + e[13], t[14] = n * m + l * f + g * x + e[14], t[15] = a * m + u * f + p * x + e[15])
            }(this, e, t), this
        }
        rotateX(t, e = this) {
            return function (t, e, i) {
                let r = Math.sin(i),
                    s = Math.cos(i),
                    n = e[4],
                    a = e[5],
                    h = e[6],
                    o = e[7],
                    l = e[8],
                    u = e[9],
                    c = e[10],
                    d = e[11];
                e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = n * s + l * r, t[5] = a * s + u * r, t[6] = h * s + c * r, t[7] = o * s + d * r, t[8] = l * s - n * r, t[9] = u * s - a * r, t[10] = c * s - h * r, t[11] = d * s - o * r
            }(this, e, t), this
        }
        rotateY(t, e = this) {
            return function (t, e, i) {
                let r = Math.sin(i),
                    s = Math.cos(i),
                    n = e[0],
                    a = e[1],
                    h = e[2],
                    o = e[3],
                    l = e[8],
                    u = e[9],
                    c = e[10],
                    d = e[11];
                e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = n * s - l * r, t[1] = a * s - u * r, t[2] = h * s - c * r, t[3] = o * s - d * r, t[8] = n * r + l * s, t[9] = a * r + u * s, t[10] = h * r + c * s, t[11] = o * r + d * s
            }(this, e, t), this
        }
        rotateZ(t, e = this) {
            return function (t, e, i) {
                let r = Math.sin(i),
                    s = Math.cos(i),
                    n = e[0],
                    a = e[1],
                    h = e[2],
                    o = e[3],
                    l = e[4],
                    u = e[5],
                    c = e[6],
                    d = e[7];
                e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = n * s + l * r, t[1] = a * s + u * r, t[2] = h * s + c * r, t[3] = o * s + d * r, t[4] = l * s - n * r, t[5] = u * s - a * r, t[6] = c * s - h * r, t[7] = d * s - o * r
            }(this, e, t), this
        }
        scale(t, e = this) {
            return function (t, e, i) {
                let r = i[0],
                    s = i[1],
                    n = i[2];
                t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * s, t[5] = e[5] * s, t[6] = e[6] * s, t[7] = e[7] * s, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
            }(this, e, "number" == typeof t ? [t, t, t] : t), this
        }
        multiply(t, e) {
            return e ? L(this, t, e) : L(this, this, t), this
        }
        identity() {
            var t;
            return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        copy(t) {
            var e, i;
            return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
        }
        fromPerspective({
            fov: t,
            aspect: e,
            near: i,
            far: r
        } = {}) {
            return function (t, e, i, r, s) {
                let n = 1 / Math.tan(e / 2),
                    a = 1 / (r - s);
                t[0] = n / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (s + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * s * r * a, t[15] = 0
            }(this, t, e, i, r), this
        }
        fromOrthogonal({
            left: t,
            right: e,
            bottom: i,
            top: r,
            near: s,
            far: n
        }) {
            return function (t, e, i, r, s, n, a) {
                let h = 1 / (e - i),
                    o = 1 / (r - s),
                    l = 1 / (n - a);
                t[0] = -2 * h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + i) * h, t[13] = (s + r) * o, t[14] = (a + n) * l, t[15] = 1
            }(this, t, e, i, r, s, n), this
        }
        fromQuaternion(t) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = i + i,
                    h = r + r,
                    o = s + s,
                    l = i * a,
                    u = r * a,
                    c = r * h,
                    d = s * a,
                    g = s * h,
                    p = s * o,
                    m = n * a,
                    f = n * h,
                    x = n * o;
                t[0] = 1 - c - p, t[1] = u + x, t[2] = d - f, t[3] = 0, t[4] = u - x, t[5] = 1 - l - p, t[6] = g + m, t[7] = 0, t[8] = d + f, t[9] = g - m, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1
            }(this, t), this
        }
        setPosition(t) {
            return this.x = t[0], this.y = t[1], this.z = t[2], this
        }
        inverse(t = this) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = e[4],
                    h = e[5],
                    o = e[6],
                    l = e[7],
                    u = e[8],
                    c = e[9],
                    d = e[10],
                    g = e[11],
                    p = e[12],
                    m = e[13],
                    f = e[14],
                    x = e[15],
                    w = i * h - r * a,
                    b = i * o - s * a,
                    M = i * l - n * a,
                    v = r * o - s * h,
                    A = r * l - n * h,
                    E = s * l - n * o,
                    y = u * m - c * p,
                    F = u * f - d * p,
                    T = u * x - g * p,
                    _ = c * f - d * m,
                    R = c * x - g * m,
                    S = d * x - g * f,
                    N = w * S - b * R + M * _ + v * T - A * F + E * y;
                N && (N = 1 / N, t[0] = (h * S - o * R + l * _) * N, t[1] = (s * R - r * S - n * _) * N, t[2] = (m * E - f * A + x * v) * N, t[3] = (d * A - c * E - g * v) * N, t[4] = (o * T - a * S - l * F) * N, t[5] = (i * S - s * T + n * F) * N, t[6] = (f * M - p * E - x * b) * N, t[7] = (u * E - d * M + g * b) * N, t[8] = (a * R - h * T + l * y) * N, t[9] = (r * T - i * R - n * y) * N, t[10] = (p * A - m * M + x * w) * N, t[11] = (c * M - u * A - g * w) * N, t[12] = (h * F - a * _ - o * y) * N, t[13] = (i * _ - r * F + s * y) * N, t[14] = (m * b - p * v - f * w) * N, t[15] = (u * v - c * b + d * w) * N)
            }(this, t), this
        }
        compose(t, e, i) {
            return function (t, e, i, r) {
                let s = e[0],
                    n = e[1],
                    a = e[2],
                    h = e[3],
                    o = s + s,
                    l = n + n,
                    u = a + a,
                    c = s * o,
                    d = s * l,
                    g = s * u,
                    p = n * l,
                    m = n * u,
                    f = a * u,
                    x = h * o,
                    w = h * l,
                    b = h * u,
                    M = r[0],
                    v = r[1],
                    A = r[2];
                t[0] = (1 - (p + f)) * M, t[1] = (d + b) * M, t[2] = (g - w) * M, t[3] = 0, t[4] = (d - b) * v, t[5] = (1 - (c + f)) * v, t[6] = (m + x) * v, t[7] = 0, t[8] = (g + w) * A, t[9] = (m - x) * A, t[10] = (1 - (c + p)) * A, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1
            }(this, t, e, i), this
        }
        getRotation(t) {
            return function (t, e) {
                let i = e[0] + e[5] + e[10],
                    r = 0;
                i > 0 ? (r = 2 * Math.sqrt(i + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] && e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r)
            }(t, this), this
        }
        getTranslation(t) {
            var e, i;
            return i = this, (e = t)[0] = i[12], e[1] = i[13], e[2] = i[14], this
        }
        getScaling(t) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[4],
                    a = e[5],
                    h = e[6],
                    o = e[8],
                    l = e[9],
                    u = e[10];
                t[0] = Math.sqrt(i * i + r * r + s * s), t[1] = Math.sqrt(n * n + a * a + h * h), t[2] = Math.sqrt(o * o + l * l + u * u)
            }(t, this), this
        }
        getMaxScaleOnAxis() {
            return function (t) {
                let e = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[4],
                    n = t[5],
                    a = t[6],
                    h = t[8],
                    o = t[9],
                    l = t[10];
                const u = e * e + i * i + r * r,
                    c = s * s + n * n + a * a,
                    d = h * h + o * o + l * l;
                return Math.sqrt(Math.max(u, c, d))
            }(this)
        }
        lookAt(t, e, i) {
            return function (t, e, i, r) {
                let s = e[0],
                    n = e[1],
                    a = e[2],
                    h = r[0],
                    o = r[1],
                    l = r[2],
                    u = s - i[0],
                    c = n - i[1],
                    d = a - i[2],
                    g = u * u + c * c + d * d;
                g > 0 && (u *= g = 1 / Math.sqrt(g), c *= g, d *= g);
                let p = o * d - l * c,
                    m = l * u - h * d,
                    f = h * c - o * u;
                (g = p * p + m * m + f * f) > 0 && (p *= g = 1 / Math.sqrt(g), m *= g, f *= g), t[0] = p, t[1] = m, t[2] = f, t[3] = 0, t[4] = c * f - d * m, t[5] = d * p - u * f, t[6] = u * m - c * p, t[7] = 0, t[8] = u, t[9] = c, t[10] = d, t[11] = 0, t[12] = s, t[13] = n, t[14] = a, t[15] = 1
            }(this, t, e, i), this
        }
        determinant() {
            return function (t) {
                let e = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3],
                    n = t[4],
                    a = t[5],
                    h = t[6],
                    o = t[7],
                    l = t[8],
                    u = t[9],
                    c = t[10],
                    d = t[11],
                    g = t[12],
                    p = t[13],
                    m = t[14],
                    f = t[15];
                return (e * a - i * n) * (c * f - d * m) - (e * h - r * n) * (u * f - d * p) + (e * o - s * n) * (u * m - c * p) + (i * h - r * a) * (l * f - d * g) - (i * o - s * a) * (l * m - c * g) + (r * o - s * h) * (l * p - u * g)
            }(this)
        }
    }
    const O = new P;
    class B extends Array {
        constructor(t = 0, e = t, i = t, r = "YXZ") {
            return super(t, e, i), this.order = r, this.onChange = (() => {}), this
        }
        get x() {
            return this[0]
        }
        set x(t) {
            this[0] = t, this.onChange()
        }
        get y() {
            return this[1]
        }
        set y(t) {
            this[1] = t, this.onChange()
        }
        get z() {
            return this[2]
        }
        set z(t) {
            this[2] = t, this.onChange()
        }
        set(t, e = t, i = t) {
            return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this.onChange(), this)
        }
        copy(t) {
            return this[0] = t[0], this[1] = t[1], this[2] = t[2], this
        }
        reorder(t) {
            return this.order = t, this.onChange(), this
        }
        fromRotationMatrix(t, e = this.order) {
            return function (t, e, i = "YXZ") {
                "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0))
            }(this, t, e), this
        }
        fromQuaternion(t, e = this.order) {
            return O.fromQuaternion(t), this.fromRotationMatrix(O, e)
        }
    }
    class C {
        constructor() {
            this.parent = null, this.children = [], this.visible = !0, this.matrix = new P, this.worldMatrix = new P, this.matrixAutoUpdate = !0, this.position = new l, this.quaternion = new N, this.scale = new l(1), this.rotation = new B, this.up = new l(0, 1, 0), this.rotation.onChange = (() => this.quaternion.fromEuler(this.rotation)), this.quaternion.onChange = (() => this.rotation.fromQuaternion(this.quaternion))
        }
        setParent(t, e = !0) {
            e && this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
        }
        addChild(t, e = !0) {
            ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
        }
        removeChild(t, e = !0) {
            ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
            for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
        }
        updateMatrix() {
            this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
        }
        traverse(t) {
            if (!t(this))
                for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t)
        }
        decompose() {
            this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
        }
        lookAt(t, e = !1) {
            e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
        }
    }
    const D = new P,
        U = new l,
        z = new l;

    function I(t, e, i) {
        let r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = i[0],
            g = i[1],
            p = i[2],
            m = i[3],
            f = i[4],
            x = i[5],
            w = i[6],
            b = i[7],
            M = i[8];
        return t[0] = d * r + g * a + p * l, t[1] = d * s + g * h + p * u, t[2] = d * n + g * o + p * c, t[3] = m * r + f * a + x * l, t[4] = m * s + f * h + x * u, t[5] = m * n + f * o + x * c, t[6] = w * r + b * a + M * l, t[7] = w * s + b * h + M * u, t[8] = w * n + b * o + M * c, t
    }
    class q extends Array {
        constructor(t = 1, e = 0, i = 0, r = 0, s = 1, n = 0, a = 0, h = 0, o = 1) {
            return super(t, e, i, r, s, n, a, h, o), this
        }
        set(t, e, i, r, s, n, a, h, o) {
            return t.length ? this.copy(t) : (function (t, e, i, r, s, n, a, h, o, l) {
                t[0] = e, t[1] = i, t[2] = r, t[3] = s, t[4] = n, t[5] = a, t[6] = h, t[7] = o, t[8] = l
            }(this, t, e, i, r, s, n, a, h, o), this)
        }
        translate(t, e = this) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    h = e[4],
                    o = e[5],
                    l = e[6],
                    u = e[7],
                    c = e[8],
                    d = i[0],
                    g = i[1];
                t[0] = r, t[1] = s, t[2] = n, t[3] = a, t[4] = h, t[5] = o, t[6] = d * r + g * a + l, t[7] = d * s + g * h + u, t[8] = d * n + g * o + c
            }(this, e, t), this
        }
        rotate(t, e = this) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    h = e[4],
                    o = e[5],
                    l = e[6],
                    u = e[7],
                    c = e[8],
                    d = Math.sin(i),
                    g = Math.cos(i);
                t[0] = g * r + d * a, t[1] = g * s + d * h, t[2] = g * n + d * o, t[3] = g * a - d * r, t[4] = g * h - d * s, t[5] = g * o - d * n, t[6] = l, t[7] = u, t[8] = c
            }(this, e, t), this
        }
        scale(t, e = this) {
            return function (t, e, i) {
                let r = i[0],
                    s = i[1];
                t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = s * e[3], t[4] = s * e[4], t[5] = s * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8]
            }(this, e, t), this
        }
        multiply(t, e) {
            return e ? I(this, t, e) : I(this, this, t), this
        }
        identity() {
            var t;
            return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this
        }
        copy(t) {
            var e, i;
            return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
        }
        fromMatrix4(t) {
            var e, i;
            return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[4], e[4] = i[5], e[5] = i[6], e[6] = i[8], e[7] = i[9], e[8] = i[10], this
        }
        fromQuaternion(t) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = i + i,
                    h = r + r,
                    o = s + s,
                    l = i * a,
                    u = r * a,
                    c = r * h,
                    d = s * a,
                    g = s * h,
                    p = s * o,
                    m = n * a,
                    f = n * h,
                    x = n * o;
                t[0] = 1 - c - p, t[3] = u - x, t[6] = d + f, t[1] = u + x, t[4] = 1 - l - p, t[7] = g - m, t[2] = d - f, t[5] = g + m, t[8] = 1 - l - c
            }(this, t), this
        }
        fromBasis(t, e, i) {
            return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
        }
        inverse(t = this) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = e[4],
                    h = e[5],
                    o = e[6],
                    l = e[7],
                    u = e[8],
                    c = u * a - h * l,
                    d = -u * n + h * o,
                    g = l * n - a * o,
                    p = i * c + r * d + s * g;
                p && (p = 1 / p, t[0] = c * p, t[1] = (-u * r + s * l) * p, t[2] = (h * r - s * a) * p, t[3] = d * p, t[4] = (u * i - s * o) * p, t[5] = (-h * i + s * n) * p, t[6] = g * p, t[7] = (-l * i + r * o) * p, t[8] = (a * i - r * n) * p)
            }(this, t), this
        }
        getNormalMatrix(t) {
            return function (t, e) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    n = e[3],
                    a = e[4],
                    h = e[5],
                    o = e[6],
                    l = e[7],
                    u = e[8],
                    c = e[9],
                    d = e[10],
                    g = e[11],
                    p = e[12],
                    m = e[13],
                    f = e[14],
                    x = e[15],
                    w = i * h - r * a,
                    b = i * o - s * a,
                    M = i * l - n * a,
                    v = r * o - s * h,
                    A = r * l - n * h,
                    E = s * l - n * o,
                    y = u * m - c * p,
                    F = u * f - d * p,
                    T = u * x - g * p,
                    _ = c * f - d * m,
                    R = c * x - g * m,
                    S = d * x - g * f,
                    N = w * S - b * R + M * _ + v * T - A * F + E * y;
                N && (N = 1 / N, t[0] = (h * S - o * R + l * _) * N, t[1] = (o * T - a * S - l * F) * N, t[2] = (a * R - h * T + l * y) * N, t[3] = (s * R - r * S - n * _) * N, t[4] = (i * S - s * T + n * F) * N, t[5] = (r * T - i * R - n * y) * N, t[6] = (m * E - f * A + x * v) * N, t[7] = (f * M - p * E - x * b) * N, t[8] = (p * A - m * M + x * w) * N)
            }(this, t), this
        }
    }
    let G = 0;
    class Y extends C {
        constructor(t, {
            geometry: e,
            program: i,
            mode: r = t.TRIANGLES,
            frustumCulled: s = !0,
            renderOrder: n = 0
        } = {}) {
            super(t), this.gl = t, this.id = G++, this.geometry = e, this.program = i, this.mode = r, this.frustumCulled = s, this.renderOrder = n, this.modelViewMatrix = new P, this.normalMatrix = new q, this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                modelMatrix: {
                    value: null
                },
                viewMatrix: {
                    value: null
                },
                modelViewMatrix: {
                    value: null
                },
                normalMatrix: {
                    value: null
                },
                projectionMatrix: {
                    value: null
                },
                cameraPosition: {
                    value: null
                }
            })
        }
        draw({
            camera: t
        } = {}) {
            this.onBeforeRender && this.onBeforeRender({
                mesh: this,
                camera: t
            }), t && (this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.position, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
            let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
            this.program.use({
                flipFaces: e
            }), this.geometry.draw({
                mode: this.mode,
                program: this.program
            }), this.onAfterRender && this.onAfterRender({
                mesh: this,
                camera: t
            })
        }
    }
    const k = new Uint8Array(4);

    function V(t) {
        return 0 == (t & t - 1)
    }
    let X = 0;
    class W {
        constructor(t, {
            image: e,
            target: i = t.TEXTURE_2D,
            type: r = t.UNSIGNED_BYTE,
            format: s = t.RGBA,
            internalFormat: n = s,
            wrapS: a = t.CLAMP_TO_EDGE,
            wrapT: h = t.CLAMP_TO_EDGE,
            generateMipmaps: o = !0,
            minFilter: l = (o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
            magFilter: u = t.LINEAR,
            premultiplyAlpha: c = !1,
            unpackAlignment: d = 4,
            flipY: g = !0,
            level: p = 0,
            width: m,
            height: f = m
        } = {}) {
            this.gl = t, this.id = X++, this.image = e, this.target = i, this.type = r, this.format = s, this.internalFormat = n, this.minFilter = l, this.magFilter = u, this.wrapS = a, this.wrapT = h, this.generateMipmaps = o, this.premultiplyAlpha = c, this.unpackAlignment = d, this.flipY = g, this.level = p, this.width = m, this.height = f, this.texture = this.gl.createTexture(), this.store = {
                image: null
            }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT
        }
        bind() {
            this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
        }
        update(t = 0) {
            const e = !(this.image === this.store.image && !this.needsUpdate);
            (e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e && (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.image ? (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.gl.renderer.isWebgl2 || ArrayBuffer.isView(this.image) ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image), this.generateMipmaps && (this.gl.renderer.isWebgl2 || V(this.image.width) && V(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR))) : this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, k), this.store.image = this.image, this.onUpdate && this.onUpdate())
        }
    }
    class j {
        constructor(t, {
            width: e = t.canvas.width,
            height: i = t.canvas.height,
            target: r = t.FRAMEBUFFER,
            color: s = 1,
            depth: n = !0,
            stencil: a = !1,
            depthTexture: h = !1,
            wrapS: o = t.CLAMP_TO_EDGE,
            wrapT: l = t.CLAMP_TO_EDGE,
            minFilter: u = t.LINEAR,
            magFilter: c = u,
            type: d = t.UNSIGNED_BYTE,
            format: g = t.RGBA,
            internalFormat: p = g,
            unpackAlignment: m,
            premultiplyAlpha: f
        } = {}) {
            this.gl = t, this.width = e, this.height = i, this.buffer = this.gl.createFramebuffer(), this.target = r, this.gl.bindFramebuffer(this.target, this.buffer), this.textures = [];
            for (let r = 0; r < s; r++) this.textures.push(new W(t, {
                width: e,
                height: i,
                wrapS: o,
                wrapT: l,
                minFilter: u,
                magFilter: c,
                type: d,
                format: g,
                internalFormat: p,
                unpackAlignment: m,
                premultiplyAlpha: f,
                flipY: !1,
                generateMipmaps: !1
            })), this.textures[r].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
            this.texture = this.textures[0], h && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new W(t, {
                width: e,
                height: i,
                wrapS: o,
                wrapT: l,
                minFilter: this.gl.NEAREST,
                magFilter: this.gl.NEAREST,
                flipY: !1,
                format: this.gl.DEPTH_COMPONENT,
                internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT24 : this.gl.DEPTH_COMPONENT,
                type: this.gl.UNSIGNED_INT,
                generateMipmaps: !1
            }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (n && !a && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), a && !n && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), n && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.bindFramebuffer(this.target, null)
        }
    }
    class H extends Array {
        constructor(t = 0, e = 0, i = 0) {
            return "string" == typeof t && ([t, e, i] = H.hexToRGB(t)), super(t, e, i), this
        }
        get r() {
            return this[0]
        }
        set r(t) {
            this[0] = t
        }
        get g() {
            return this[1]
        }
        set g(t) {
            this[1] = t
        }
        get b() {
            return this[2]
        }
        set b(t) {
            this[2] = t
        }
        set(t, e, i) {
            return "string" == typeof t && ([t, e, i] = H.hexToRGB(t)), t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this)
        }
        copy(t) {
            return this[0] = t[0], this[1] = t[1], this[2] = t[2], this
        }
        static hexToRGB(t) {
            4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
            const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e || console.warn(`Unable to convert hex string ${t} to rgb values`), [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
        }
    }

    function Z(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
    }

    function $(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
    }

    function Q(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t
    }

    function K(t) {
        var e = t[0],
            i = t[1];
        return Math.sqrt(e * e + i * i)
    }
    class J extends Array {
        constructor(t = 0, e = t) {
            return super(t, e), this
        }
        get x() {
            return this[0]
        }
        set x(t) {
            this[0] = t
        }
        get y() {
            return this[1]
        }
        set y(t) {
            this[1] = t
        }
        set(t, e = t) {
            return t.length ? this.copy(t) : (function (t, e, i) {
                t[0] = e, t[1] = i
            }(this, t, e), this)
        }
        copy(t) {
            var e, i;
            return i = t, (e = this)[0] = i[0], e[1] = i[1], this
        }
        add(t, e) {
            return e ? Z(this, t, e) : Z(this, this, t), this
        }
        sub(t, e) {
            return e ? $(this, t, e) : $(this, this, t), this
        }
        multiply(t) {
            var e, i, r;
            return t.length ? (i = this, r = t, (e = this)[0] = i[0] * r[0], e[1] = i[1] * r[1]) : Q(this, this, t), this
        }
        divide(t) {
            var e, i, r;
            return t.length ? (i = this, r = t, (e = this)[0] = i[0] / r[0], e[1] = i[1] / r[1]) : Q(this, this, 1 / t), this
        }
        inverse(t = this) {
            var e, i;
            return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], this
        }
        len() {
            return K(this)
        }
        distance(t) {
            return t ? (e = this, r = (i = t)[0] - e[0], s = i[1] - e[1], Math.sqrt(r * r + s * s)) : K(this);
            var e, i, r, s
        }
        squaredLen() {
            return this.squaredDistance()
        }
        squaredDistance(t) {
            return t ? (e = this, r = (i = t)[0] - e[0], s = i[1] - e[1], r * r + s * s) : function (t) {
                var e = t[0],
                    i = t[1];
                return e * e + i * i
            }(this);
            var e, i, r, s
        }
        negate(t = this) {
            var e, i;
            return i = t, (e = this)[0] = -i[0], e[1] = -i[1], this
        }
        cross(t, e) {
            return r = e, (i = t)[0] * r[1] - i[1] * r[0];
            var i, r
        }
        scale(t) {
            return Q(this, this, t), this
        }
        normalize() {
            var t, e, i, r, s;
            return t = this, i = (e = this)[0], r = e[1], (s = i * i + r * r) > 0 && (s = 1 / Math.sqrt(s)), t[0] = e[0] * s, t[1] = e[1] * s, this
        }
        dot(t) {
            return i = t, (e = this)[0] * i[0] + e[1] * i[1];
            var e, i
        }
        equals(t) {
            return i = t, (e = this)[0] === i[0] && e[1] === i[1];
            var e, i
        }
        applyMatrix3(t) {
            var e, i, r, s, n;
            return e = this, r = t, s = (i = this)[0], n = i[1], e[0] = r[0] * s + r[3] * n + r[6], e[1] = r[1] * s + r[4] * n + r[7], this
        }
        applyMatrix4(t) {
            return function (t, e, i) {
                let r = e[0],
                    s = e[1];
                t[0] = i[0] * r + i[4] * s + i[12], t[1] = i[1] * r + i[5] * s + i[13]
            }(this, this, t), this
        }
        lerp(t, e) {
            ! function (t, e, i, r) {
                var s = e[0],
                    n = e[1];
                t[0] = s + r * (i[0] - s), t[1] = n + r * (i[1] - n)
            }(this, this, t, e)
        }
        clone() {
            return new J(this[0], this[1])
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t
        }
    }
    class tt extends g {
        constructor(t, {
            width: e = 1,
            height: i = 1,
            widthSegments: r = 1,
            heightSegments: s = 1,
            attributes: n = {}
        } = {}) {
            const a = r,
                h = s,
                o = (a + 1) * (h + 1),
                l = a * h * 6,
                u = new Float32Array(3 * o),
                c = new Float32Array(3 * o),
                d = new Float32Array(2 * o),
                g = o > 65536 ? new Uint32Array(l) : new Uint16Array(l);
            tt.buildPlane(u, c, d, g, e, i, 0, a, h), Object.assign(n, {
                position: {
                    size: 3,
                    data: u
                },
                normal: {
                    size: 3,
                    data: c
                },
                uv: {
                    size: 2,
                    data: d
                },
                index: {
                    data: g
                }
            }), super(t, n)
        }
        static buildPlane(t, e, i, r, s, n, a, h, o, l = 0, u = 1, c = 2, d = 1, g = -1, p = 0, m = 0) {
            const f = p,
                x = s / h,
                w = n / o;
            for (let b = 0; b <= o; b++) {
                let M = b * w - n / 2;
                for (let n = 0; n <= h; n++, p++) {
                    let w = n * x - s / 2;
                    if (t[3 * p + l] = w * d, t[3 * p + u] = M * g, t[3 * p + c] = a / 2, e[3 * p + l] = 0, e[3 * p + u] = 0, e[3 * p + c] = a >= 0 ? 1 : -1, i[2 * p] = n / h, i[2 * p + 1] = 1 - b / o, b === o || n === h) continue;
                    let v = f + n + b * (h + 1),
                        A = f + n + (b + 1) * (h + 1),
                        E = f + n + (b + 1) * (h + 1) + 1,
                        y = f + n + b * (h + 1) + 1;
                    r[6 * m] = v, r[6 * m + 1] = A, r[6 * m + 2] = y, r[6 * m + 3] = A, r[6 * m + 4] = E, r[6 * m + 5] = y, m++
                }
            }
        }
    }
    const et = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            DOLLY_PAN: 3
        },
        it = new l,
        rt = new J,
        st = new J;
    const nt = new l,
        at = new l,
        ht = new l,
        ot = new P;
    const lt = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
        ut = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n",
        ct = new l,
        dt = new N,
        gt = new l,
        pt = new l,
        mt = new N,
        ft = new l;
    class xt {
        constructor({
            objects: t,
            data: e
        }) {
            this.objects = t, this.data = e, this.elapsed = 0, this.weight = 1, this.duration = e.frames.length - 1
        }
        update(t = 1, e) {
            const i = e ? 1 : this.weight / t,
                r = this.elapsed % this.duration,
                s = Math.floor(r),
                n = r - s,
                a = this.data.frames[s],
                h = this.data.frames[(s + 1) % this.duration];
            this.objects.forEach((t, e) => {
                ct.fromArray(a.position, 3 * e), dt.fromArray(a.quaternion, 4 * e), gt.fromArray(a.scale, 3 * e), pt.fromArray(h.position, 3 * e), mt.fromArray(h.quaternion, 4 * e), ft.fromArray(h.scale, 3 * e), ct.lerp(pt, n), dt.slerp(mt, n), gt.lerp(ft, n), t.position.lerp(ct, i), t.quaternion.slerp(dt, i), t.scale.lerp(gt, i)
            })
        }
    }
    const wt = new P;
    const bt = "\nprecision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    vNormal = normalize(normalMatrix * normal);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
        Mt = "\nprecision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    gl_FragColor.rgb = normalize(vNormal);\n    gl_FragColor.a = 1.0;\n}\n";
    const vt = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
        At = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n\n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n\n      vec2 cursor = vUv - uMouse;\n\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";
    const Et = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
        yt = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
    return t.Animation = xt, t.Box = class extends g {
        constructor(t, {
            width: e = 1,
            height: i = 1,
            depth: r = 1,
            widthSegments: s = 1,
            heightSegments: n = 1,
            depthSegments: a = 1,
            attributes: h = {}
        } = {}) {
            const o = s,
                l = n,
                u = a,
                c = (o + 1) * (l + 1) * 2 + (o + 1) * (u + 1) * 2 + (l + 1) * (u + 1) * 2,
                d = 6 * (o * l * 2 + o * u * 2 + l * u * 2),
                g = new Float32Array(3 * c),
                p = new Float32Array(3 * c),
                m = new Float32Array(2 * c),
                f = c > 65536 ? new Uint32Array(d) : new Uint16Array(d);
            let x = 0,
                w = 0;
            tt.buildPlane(g, p, m, f, r, i, e, u, l, 2, 1, 0, -1, -1, x, w), tt.buildPlane(g, p, m, f, r, i, -e, u, l, 2, 1, 0, 1, -1, x += (u + 1) * (l + 1), w += u * l), tt.buildPlane(g, p, m, f, e, r, i, u, l, 0, 2, 1, 1, 1, x += (u + 1) * (l + 1), w += u * l), tt.buildPlane(g, p, m, f, e, r, -i, u, l, 0, 2, 1, 1, -1, x += (o + 1) * (u + 1), w += o * u), tt.buildPlane(g, p, m, f, e, i, -r, o, l, 0, 1, 2, -1, -1, x += (o + 1) * (u + 1), w += o * u), tt.buildPlane(g, p, m, f, e, i, r, o, l, 0, 1, 2, 1, -1, x += (o + 1) * (l + 1), w += o * l), Object.assign(h, {
                position: {
                    size: 3,
                    data: g
                },
                normal: {
                    size: 3,
                    data: p
                },
                uv: {
                    size: 2,
                    data: m
                },
                index: {
                    data: f
                }
            }), super(t, h)
        }
    }, t.Camera = class extends C {
        constructor(t, {
            near: e = .1,
            far: i = 100,
            fov: r = 45,
            aspect: s = 1,
            left: n,
            right: a,
            bottom: h,
            top: o
        } = {}) {
            super(t), this.near = e, this.far = i, this.fov = r, this.aspect = s, this.projectionMatrix = new P, this.viewMatrix = new P, this.projectionViewMatrix = new P, n || a ? this.orthographic({
                left: n,
                right: a,
                bottom: h,
                top: o
            }) : this.perspective()
        }
        perspective({
            near: t = this.near,
            far: e = this.far,
            fov: i = this.fov,
            aspect: r = this.aspect
        } = {}) {
            return this.projectionMatrix.fromPerspective({
                fov: i * (Math.PI / 180),
                aspect: r,
                near: t,
                far: e
            }), this.type = "perspective", this
        }
        orthographic({
            near: t = this.near,
            far: e = this.far,
            left: i = -1,
            right: r = 1,
            bottom: s = -1,
            top: n = 1
        } = {}) {
            return this.projectionMatrix.fromOrthogonal({
                left: i,
                right: r,
                bottom: s,
                top: n,
                near: t,
                far: e
            }), this.type = "orthographic", this
        }
        updateMatrixWorld() {
            return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
        }
        lookAt(t) {
            return super.lookAt(t, !0), this
        }
        project(t) {
            return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
        }
        unproject(t) {
            return t.applyMatrix4(D.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
        }
        updateFrustum() {
            this.frustum || (this.frustum = [new l, new l, new l, new l, new l, new l]);
            const t = this.projectionViewMatrix;
            this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
            for (let t = 0; t < 6; t++) {
                const e = 1 / this.frustum[t].distance();
                this.frustum[t].multiply(e), this.frustum[t].constant *= e
            }
        }
        frustumIntersectsMesh(t) {
            if (!t.geometry.attributes.position) return !0;
            t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
            const e = U;
            e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
            const i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
            return this.frustumIntersectsSphere(e, i)
        }
        frustumIntersectsSphere(t, e) {
            const i = z;
            for (let r = 0; r < 6; r++) {
                const s = this.frustum[r];
                if (i.copy(s).dot(t) + s.constant < -e) return !1
            }
            return !0
        }
    }, t.Color = H, t.Cylinder = class extends g {
        constructor(t, {
            radius: e = .5,
            height: i = 1,
            radialSegments: r = 16,
            heightSegments: s = 1,
            attributes: n = {}
        } = {}) {
            const a = r,
                h = s,
                o = (r + 1) * (s + 1) + 2,
                u = r * (2 + 2 * s) * 3,
                c = new Float32Array(3 * o),
                d = new Float32Array(3 * o),
                g = new Float32Array(2 * o),
                p = o > 65536 ? new Uint32Array(u) : new Uint16Array(u);
            let m, f, x, w = 0,
                b = new l;
            m = 0, f = -.5 * i, x = 0, c[3 * w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = 0, g[2 * w + 1] = 1;
            let M = w;
            m = 0, f = .5 * i, x = 0, c[3 * ++w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = 0, g[2 * w + 1] = 0;
            let v = w;
            w++;
            for (var A = 0; A < a + 1; A++) {
                let t = A / a;
                for (var E = 0; E < h + 1; E++) {
                    let r = E / h;
                    m = Math.cos(t * Math.PI * 2) * e, f = (r - .5) * i, x = Math.sin(t * Math.PI * 2) * e, c[3 * w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = t, g[2 * w + 1] = 1 - r, w++
                }
            }
            let y = 0,
                F = h + 1;
            for (A = 0; A < a; A++) {
                let t = A + 1;
                for (p[3 * y + 0] = M, p[3 * y + 1] = 2 + A * F, p[3 * y + 2] = 2 + t * F, y++, E = 0; E < h; E++) p[3 * y + 0] = 2 + A * F + (E + 0), p[3 * y + 1] = 2 + A * F + (E + 1), p[3 * y + 2] = 2 + t * F + (E + 0), p[3 * ++y + 0] = 2 + t * F + (E + 0), p[3 * y + 1] = 2 + A * F + (E + 1), p[3 * y + 2] = 2 + t * F + (E + 1), y++;
                p[3 * y + 0] = 2 + t * F + h, p[3 * y + 1] = 2 + A * F + h, p[3 * y + 2] = v, y++
            }
            Object.assign(n, {
                position: {
                    size: 3,
                    data: c
                },
                normal: {
                    size: 3,
                    data: d
                },
                uv: {
                    size: 2,
                    data: g
                },
                index: {
                    data: p
                }
            }), super(t, n)
        }
    }, t.Euler = B, t.Flowmap = class {
        constructor(t, {
            size: e = 512,
            falloff: i = .3,
            alpha: r = 1,
            dissipation: s = .96
        } = {}) {
            const n = this;
            this.gl = t, this.uniform = {
                    value: null
                }, this.mask = {
                    read: null,
                    write: null,
                    swap: () => {
                        let t = n.mask.read;
                        n.mask.read = n.mask.write, n.mask.write = t, n.uniform.value = n.mask.read.texture
                    }
                },
                function () {
                    let i = t.renderer.extensions[`OES_texture_${t.renderer.isWebgl2?"":"half_"}float_linear`];
                    const r = {
                        width: e,
                        height: e,
                        type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
                        format: t.RGBA,
                        internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
                        minFilter: i ? t.LINEAR : t.NEAREST,
                        depth: !1
                    };
                    n.mask.read = new j(t, r), n.mask.write = new j(t, r), n.mask.swap()
                }(), this.aspect = 1, this.mouse = new J, this.velocity = new J, this.mesh = new Y(t, {
                    geometry: new g(t, {
                        position: {
                            size: 2,
                            data: new Float32Array([-1, -1, 3, -1, -1, 3])
                        },
                        uv: {
                            size: 2,
                            data: new Float32Array([0, 0, 2, 0, 0, 2])
                        }
                    }),
                    program: new f(t, {
                        vertex: vt,
                        fragment: At,
                        uniforms: {
                            tMap: n.uniform,
                            uFalloff: {
                                value: .5 * i
                            },
                            uAlpha: {
                                value: r
                            },
                            uDissipation: {
                                value: s
                            },
                            uAspect: {
                                value: 1
                            },
                            uMouse: {
                                value: n.mouse
                            },
                            uVelocity: {
                                value: n.velocity
                            }
                        },
                        depthTest: !1
                    })
                })
        }
        update() {
            this.mesh.program.uniforms.uAspect.value = this.aspect, this.gl.renderer.render({
                scene: this.mesh,
                target: this.mask.write,
                clear: !1
            }), this.mask.swap()
        }
    }, t.GPGPU = class {
        constructor(t, {
            data: e = new Float32Array(16),
            geometry: i = new g(t, {
                position: {
                    size: 2,
                    data: new Float32Array([-1, -1, 3, -1, -1, 3])
                },
                uv: {
                    size: 2,
                    data: new Float32Array([0, 0, 2, 0, 0, 2])
                }
            })
        }) {
            this.gl = t;
            const r = e;
            this.passes = [], this.geometry = i, this.dataLength = r.length / 4, this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)), this.coords = new Float32Array(2 * this.dataLength);
            for (let t = 0; t < this.dataLength; t++) {
                const e = t % this.size / this.size,
                    i = Math.floor(t / this.size) / this.size;
                this.coords.set([e, i], 2 * t)
            }
            const s = (() => {
                if (r.length === this.size * this.size * 4) return r; {
                    const t = new Float32Array(this.size * this.size * 4);
                    return t.set(r), t
                }
            })();
            this.uniform = {
                value: new W(t, {
                    image: s,
                    target: t.TEXTURE_2D,
                    type: t.FLOAT,
                    format: t.RGBA,
                    internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
                    wrapS: t.CLAMP_TO_EDGE,
                    wrapT: t.CLAMP_TO_EDGE,
                    generateMipmaps: !1,
                    minFilter: t.NEAREST,
                    magFilter: t.NEAREST,
                    width: this.size,
                    flipY: !1
                })
            };
            const n = {
                width: this.size,
                height: this.size,
                type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
                format: t.RGBA,
                internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
                minFilter: t.NEAREST,
                depth: !1,
                unpackAlignment: 1
            };
            this.fbo = {
                read: new j(t, n),
                write: new j(t, n),
                swap: () => {
                    let t = this.fbo.read;
                    this.fbo.read = this.fbo.write, this.fbo.write = t, this.uniform.value = this.fbo.read.texture
                }
            }
        }
        addPass({
            vertex: t = Et,
            fragment: e = yt,
            uniforms: i = {},
            textureUniform: r = "tMap",
            enabled: s = !0
        } = {}) {
            i[r] = this.uniform;
            const n = new f(this.gl, {
                    vertex: t,
                    fragment: e,
                    uniforms: i
                }),
                a = {
                    mesh: new Y(this.gl, {
                        geometry: this.geometry,
                        program: n
                    }),
                    program: n,
                    uniforms: i,
                    enabled: s,
                    textureUniform: r
                };
            return this.passes.push(a), a
        }
        render() {
            this.passes.filter(t => t.enabled).forEach((t, e) => {
                this.gl.renderer.render({
                    scene: t.mesh,
                    target: this.fbo.write,
                    clear: !1
                }), this.fbo.swap()
            })
        }
    }, t.Geometry = g, t.Mat3 = q, t.Mat4 = P, t.Mesh = Y, t.NormalProgram = function (t) {
        return new f(t, {
            vertex: bt,
            fragment: Mt
        })
    }, t.Orbit = function (t, {
        element: e = document,
        enabled: i = !0,
        target: r = new l,
        ease: s = .25,
        inertia: n = .85,
        enableRotate: a = !0,
        rotateSpeed: h = .1,
        enableZoom: o = !0,
        zoomSpeed: u = 1,
        enablePan: c = !0,
        panSpeed: d = .1,
        minPolarAngle: g = 0,
        maxPolarAngle: p = Math.PI,
        minAzimuthAngle: m = -1 / 0,
        maxAzimuthAngle: f = 1 / 0,
        minDistance: x = 0,
        maxDistance: w = 1 / 0
    } = {}) {
        this.enabled = i, this.target = r, s = s || 1, n = n || 1, this.minDistance = x, this.maxDistance = w;
        const b = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            M = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            v = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            A = new l,
            E = new l;
        E.copy(t.position).sub(this.target), v.radius = M.radius = E.distance(), v.theta = M.theta = Math.atan2(E.x, E.z), v.phi = M.phi = Math.acos(Math.min(Math.max(E.y / M.radius, -1), 1)), this.update = (() => {
            M.radius *= b.radius, M.theta += b.theta, M.phi += b.phi, M.theta = Math.max(m, Math.min(f, M.theta)), M.phi = Math.max(g, Math.min(p, M.phi)), M.radius = Math.max(this.minDistance, Math.min(this.maxDistance, M.radius)), v.phi += (M.phi - v.phi) * s, v.theta += (M.theta - v.theta) * s, v.radius += (M.radius - v.radius) * s, this.target.add(A);
            let e = v.radius * Math.sin(Math.max(1e-6, v.phi));
            E.x = e * Math.sin(v.theta), E.y = v.radius * Math.cos(v.phi), E.z = e * Math.cos(v.theta), t.position.copy(this.target).add(E), t.lookAt(this.target), b.theta *= n, b.phi *= n, A.multiply(n), b.radius = 1
        });
        const y = new J,
            F = new J,
            T = new J;
        let _ = et.NONE;

        function R() {
            return Math.pow(.95, u)
        }
        this.mouseButtons = {
            ORBIT: 0,
            ZOOM: 1,
            PAN: 2
        };
        const S = (i, r) => {
            let s = e === document ? document.body : e;
            it.copy(t.position).sub(this.target);
            let n = it.distance();
            (function (t, e) {
                it.set(e[0], e[1], e[2]), it.multiply(-t), A.add(it)
            })(2 * i * (n *= Math.tan((t.fov || 45) / 2 * Math.PI / 180)) / s.clientHeight, t.matrix),
            function (t, e) {
                it.set(e[4], e[5], e[6]), it.multiply(t), A.add(it)
            }(2 * r * n / s.clientHeight, t.matrix)
        };

        function N(t) {
            b.radius /= t
        }

        function L(t, i) {
            rt.set(t, i), st.sub(rt, y).multiply(h);
            let r = e === document ? document.body : e;
            b.theta -= 2 * Math.PI * st.x / r.clientHeight, b.phi -= 2 * Math.PI * st.y / r.clientHeight, y.copy(rt)
        }

        function P(t, e) {
            rt.set(t, e), st.sub(rt, F).multiply(d), S(st.x, st.y), F.copy(rt)
        }
        const O = t => {
                if (this.enabled) {
                    switch (t.button) {
                        case this.mouseButtons.ORBIT:
                            if (!1 === a) return;
                            y.set(t.clientX, t.clientY), _ = et.ROTATE;
                            break;
                        case this.mouseButtons.ZOOM:
                            if (!1 === o) return;
                            T.set(t.clientX, t.clientY), _ = et.DOLLY;
                            break;
                        case this.mouseButtons.PAN:
                            if (!1 === c) return;
                            F.set(t.clientX, t.clientY), _ = et.PAN
                    }
                    _ !== et.NONE && (window.addEventListener("mousemove", B, !1), window.addEventListener("mouseup", C, !1))
                }
            },
            B = t => {
                if (this.enabled) switch (_) {
                    case et.ROTATE:
                        if (!1 === a) return;
                        L(t.clientX, t.clientY);
                        break;
                    case et.DOLLY:
                        if (!1 === o) return;
                        ! function (t) {
                            rt.set(t.clientX, t.clientY), st.sub(rt, T), st.y > 0 ? N(R()) : st.y < 0 && N(1 / R()), T.copy(rt)
                        }(t);
                        break;
                    case et.PAN:
                        if (!1 === c) return;
                        P(t.clientX, t.clientY)
                }
            },
            C = () => {
                this.enabled && (document.removeEventListener("mousemove", B, !1), document.removeEventListener("mouseup", C, !1), _ = et.NONE)
            },
            D = t => {
                this.enabled && o && (_ === et.NONE || _ === et.ROTATE) && (t.stopPropagation(), t.deltaY < 0 ? N(1 / R()) : t.deltaY > 0 && N(R()))
            },
            U = t => {
                if (this.enabled) switch (t.preventDefault(), t.touches.length) {
                    case 1:
                        if (!1 === a) return;
                        y.set(t.touches[0].pageX, t.touches[0].pageY), _ = et.ROTATE;
                        break;
                    case 2:
                        if (!1 === o && !1 === c) return;
                        ! function (t) {
                            if (o) {
                                let e = t.touches[0].pageX - t.touches[1].pageX,
                                    i = t.touches[0].pageY - t.touches[1].pageY,
                                    r = Math.sqrt(e * e + i * i);
                                T.set(0, r)
                            }
                            if (c) {
                                let e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                                    i = .5 * (t.touches[0].pageY + t.touches[1].pageY);
                                F.set(e, i)
                            }
                        }(t), _ = et.DOLLY_PAN;
                        break;
                    default:
                        _ = et.NONE
                }
            },
            z = t => {
                if (this.enabled) switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
                    case 1:
                        if (!1 === a) return;
                        L(t.touches[0].pageX, t.touches[0].pageY);
                        break;
                    case 2:
                        if (!1 === o && !1 === c) return;
                        ! function (t) {
                            if (o) {
                                let e = t.touches[0].pageX - t.touches[1].pageX,
                                    i = t.touches[0].pageY - t.touches[1].pageY,
                                    r = Math.sqrt(e * e + i * i);
                                rt.set(0, r), st.set(0, Math.pow(rt.y / T.y, u)), N(st.y), T.copy(rt)
                            }
                            c && P(.5 * (t.touches[0].pageX + t.touches[1].pageX), .5 * (t.touches[0].pageY + t.touches[1].pageY))
                        }(t);
                        break;
                    default:
                        _ = et.NONE
                }
            },
            I = () => {
                this.enabled && (_ = et.NONE)
            },
            q = t => {
                this.enabled && t.preventDefault()
            };
        this.remove = function () {
            e.removeEventListener("contextmenu", q, !1), e.removeEventListener("mousedown", O, !1), window.removeEventListener("wheel", D, !1), e.removeEventListener("touchstart", U, !1), e.removeEventListener("touchend", I, !1), e.removeEventListener("touchmove", z, !1), window.removeEventListener("mousemove", B, !1), window.removeEventListener("mouseup", C, !1)
        }, e.addEventListener("contextmenu", q, !1), e.addEventListener("mousedown", O, !1), window.addEventListener("wheel", D, !1), e.addEventListener("touchstart", U, {
            passive: !1
        }), e.addEventListener("touchend", I, !1), e.addEventListener("touchmove", z, {
            passive: !1
        })
    }, t.Plane = tt, t.Post = class {
        constructor(t, {
            width: e,
            height: i,
            dpr: r,
            wrapS: s = t.CLAMP_TO_EDGE,
            wrapT: n = t.CLAMP_TO_EDGE,
            minFilter: a = t.LINEAR,
            magFilter: h = t.LINEAR,
            geometry: o = new g(t, {
                position: {
                    size: 2,
                    data: new Float32Array([-1, -1, 3, -1, -1, 3])
                },
                uv: {
                    size: 2,
                    data: new Float32Array([0, 0, 2, 0, 0, 2])
                }
            })
        } = {}) {
            this.gl = t, this.options = {
                wrapS: s,
                wrapT: n,
                minFilter: a,
                magFilter: h
            }, this.passes = [], this.geometry = o;
            const l = this.fbo = {
                read: null,
                write: null,
                swap: () => {
                    let t = l.read;
                    l.read = l.write, l.write = t
                }
            };
            this.resize({
                width: e,
                height: i,
                dpr: r
            })
        }
        addPass({
            vertex: t = lt,
            fragment: e = ut,
            uniforms: i = {},
            textureUniform: r = "tMap",
            enabled: s = !0
        } = {}) {
            i[r] = {
                value: this.fbo.read.texture
            };
            const n = new f(this.gl, {
                    vertex: t,
                    fragment: e,
                    uniforms: i
                }),
                a = {
                    mesh: new Y(this.gl, {
                        geometry: this.geometry,
                        program: n
                    }),
                    program: n,
                    uniforms: i,
                    enabled: s,
                    textureUniform: r
                };
            return this.passes.push(a), a
        }
        resize({
            width: t,
            height: e,
            dpr: i
        } = {}) {
            i && (this.dpr = i), t && (this.width = t, this.height = e || t), i = this.dpr || this.gl.renderer.dpr, t = (this.width || this.gl.renderer.width) * i, e = (this.height || this.gl.renderer.height) * i, this.options.width = t, this.options.height = e, this.fbo.read = new j(this.gl, this.options), this.fbo.write = new j(this.gl, this.options)
        }
        render({
            scene: t,
            camera: e,
            target: i = null,
            update: r = !0,
            sort: s = !0,
            frustumCull: n = !0
        }) {
            const a = this.passes.filter(t => t.enabled);
            this.gl.renderer.render({
                scene: t,
                camera: e,
                target: a.length ? this.fbo.write : i,
                update: r,
                sort: s,
                frustumCull: n
            }), this.fbo.swap(), a.forEach((t, e) => {
                t.mesh.program.uniforms[t.textureUniform].value = this.fbo.read.texture, this.gl.renderer.render({
                    scene: t.mesh,
                    target: e === a.length - 1 ? i : this.fbo.write,
                    clear: !1
                }), this.fbo.swap()
            })
        }
    }, t.Program = f, t.Quat = N, t.Raycast = class {
        constructor(t) {
            this.gl = t, this.origin = new l, this.direction = new l
        }
        castMouse(t, e = [0, 0]) {
            t.worldMatrix.getTranslation(this.origin), this.direction.set(e[0], e[1], .5), t.unproject(this.direction), this.direction.sub(this.origin).normalize()
        }
        intersectBounds(t) {
            Array.isArray(t) || (t = [t]);
            const e = ot,
                i = nt,
                r = at,
                s = [];
            return t.forEach(t => {
                t.geometry.bounds || t.geometry.computeBoundingBox(), "sphere" === t.geometry.raycast && t.geometry.bounds === 1 / 0 && t.geometry.computeBoundingSphere(), e.inverse(t.worldMatrix), i.copy(this.origin).applyMatrix4(e), r.copy(this.direction).transformDirection(e);
                let n = 0;
                (n = "sphere" === t.geometry.raycast ? this.intersectSphere(t.geometry.bounds, i, r) : this.intersectBox(t.geometry.bounds, i, r)) && (t.hit || (t.hit = {
                    localPoint: new l
                }), t.hit.distance = n, t.hit.localPoint.copy(r).multiply(n).add(i), s.push(t))
            }), s.sort((t, e) => t.hit.distance - e.hit.distance), s
        }
        intersectSphere(t, e = this.origin, i = this.direction) {
            const r = ht;
            r.sub(t.center, e);
            const s = r.dot(i),
                n = r.dot(r) - s * s,
                a = t.radius * t.radius;
            if (n > a) return 0;
            const h = Math.sqrt(a - n),
                o = s - h,
                l = s + h;
            return o < 0 && l < 0 ? 0 : o < 0 ? l : o
        }
        intersectBox(t, e = this.origin, i = this.direction) {
            let r, s, n, a, h, o;
            const l = 1 / i.x,
                u = 1 / i.y,
                c = 1 / i.z,
                d = t.min,
                g = t.max;
            return r = ((l >= 0 ? d.x : g.x) - e.x) * l, s = ((l >= 0 ? g.x : d.x) - e.x) * l, n = ((u >= 0 ? d.y : g.y) - e.y) * u, r > (a = ((u >= 0 ? g.y : d.y) - e.y) * u) || n > s ? 0 : (n > r && (r = n), a < s && (s = a), h = ((c >= 0 ? d.z : g.z) - e.z) * c, r > (o = ((c >= 0 ? g.z : d.z) - e.z) * c) || h > s ? 0 : (h > r && (r = h), o < s && (s = o), s < 0 ? 0 : r >= 0 ? r : s))
        }
    }, t.RenderTarget = j, t.Renderer = class {
        constructor({
            canvas: t = document.createElement("canvas"),
            width: e = 300,
            height: i = 150,
            dpr: r = 1,
            alpha: s = !1,
            depth: n = !0,
            stencil: a = !1,
            antialias: h = !1,
            premultipliedAlpha: o = !1,
            preserveDrawingBuffer: l = !1,
            powerPreference: u = "default",
            autoClear: c = !0,
            webgl: d = 2
        } = {}) {
            const g = {
                alpha: s,
                depth: n,
                stencil: a,
                antialias: h,
                premultipliedAlpha: o,
                preserveDrawingBuffer: l,
                powerPreference: u
            };
            this.dpr = r, this.alpha = s, this.color = !0, this.depth = n, this.stencil = a, this.premultipliedAlpha = o, this.autoClear = c, 2 === d && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g) || t.getContext("experimental-webgl", g)), this.gl.renderer = this, this.setSize(e, i), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.state = {}, this.state.blendFunc = {
                src: this.gl.ONE,
                dst: this.gl.ZERO
            }, this.state.blendEquation = {
                modeRGB: this.gl.FUNC_ADD
            }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
                width: null,
                height: null
            }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture")), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES")
        }
        setSize(t, e) {
            this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
                width: t + "px",
                height: e + "px"
            })
        }
        setViewport(t, e) {
            this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.gl.viewport(0, 0, t, e))
        }
        enable(t) {
            !0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0)
        }
        disable(t) {
            !1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1)
        }
        setBlendFunc(t, e, i, r) {
            this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = r, void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, r) : this.gl.blendFunc(t, e))
        }
        setBlendEquation(t, e) {
            this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
        }
        setCullFace(t) {
            this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
        }
        setFrontFace(t) {
            this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
        }
        setDepthMask(t) {
            this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
        }
        setDepthFunc(t) {
            this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
        }
        activeTexture(t) {
            this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
        }
        bindFramebuffer({
            target: t = this.gl.FRAMEBUFFER,
            buffer: e = null
        } = {}) {
            this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
        }
        getExtension(t, e, i) {
            return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t][i].bind(this.extensions[t]) : this.extensions[t])
        }
        sortOpaque(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
        }
        sortTransparent(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
        }
        sortUI(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
        }
        getRenderList({
            scene: t,
            camera: e,
            frustumCull: i,
            sort: r
        }) {
            let s = [];
            if (e && i && e.updateFrustum(), t.traverse(t => {
                    if (!t.visible) return !0;
                    t.draw && (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || s.push(t))
                }), r) {
                const t = [],
                    i = [],
                    r = [];
                s.forEach(s => {
                    s.program.transparent ? s.program.depthTest ? i.push(s) : r.push(s) : t.push(s), s.zDepth = 0, 0 === s.renderOrder && s.program.depthTest && e && (s.worldMatrix.getTranslation(v), v.applyMatrix4(e.projectionViewMatrix), s.zDepth = v.z)
                }), t.sort(this.sortOpaque), i.sort(this.sortTransparent), r.sort(this.sortUI), s = t.concat(i, r)
            }
            return s
        }
        render({
            scene: t,
            camera: e,
            target: i = null,
            update: r = !0,
            sort: s = !0,
            frustumCull: n = !0,
            clear: a
        }) {
            null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (a || this.autoClear && !1 !== a) && (!this.depth || i && i.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), r && t.updateMatrixWorld(), e && null === e.parent && e.updateMatrixWorld(), this.getRenderList({
                scene: t,
                camera: e,
                frustumCull: n,
                sort: s
            }).forEach(t => {
                t.draw({
                    camera: e
                })
            })
        }
    }, t.Skin = class extends Y {
        constructor(t, {
            rig: e,
            geometry: i,
            program: r,
            mode: s = t.TRIANGLES
        } = {}) {
            super(t, {
                geometry: i,
                program: r,
                mode: s
            }), this.createBones(e), this.createBoneTexture(), this.animations = [], Object.assign(this.program.uniforms, {
                boneTexture: {
                    value: this.boneTexture
                },
                boneTextureSize: {
                    value: this.boneTextureSize
                }
            })
        }
        createBones(t) {
            if (this.root = new C, this.bones = [], t.bones && t.bones.length) {
                for (let e = 0; e < t.bones.length; e++) {
                    const i = new C;
                    i.position.fromArray(t.bindPose.position, 3 * e), i.quaternion.fromArray(t.bindPose.quaternion, 4 * e), i.scale.fromArray(t.bindPose.scale, 3 * e), this.bones.push(i)
                }
                t.bones.forEach((t, e) => {
                    if (this.bones[e].name = t.name, -1 === t.parent) return this.bones[e].setParent(this.root);
                    this.bones[e].setParent(this.bones[t.parent])
                }), this.root.updateMatrixWorld(!0), this.bones.forEach(t => {
                    t.bindInverse = new P(...t.worldMatrix).inverse()
                })
            }
        }
        createBoneTexture() {
            if (!this.bones.length) return;
            const t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)));
            this.boneMatrices = new Float32Array(t * t * 4), this.boneTextureSize = t, this.boneTexture = new W(this.gl, {
                image: this.boneMatrices,
                generateMipmaps: !1,
                type: this.gl.FLOAT,
                internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
                flipY: !1,
                width: t
            })
        }
        addAnimation(t) {
            const e = new xt({
                objects: this.bones,
                data: t
            });
            return this.animations.push(e), e
        }
        update() {
            let t = 0;
            this.animations.forEach(e => t += e.weight), this.animations.forEach((e, i) => {
                e.update(t, 0 === i)
            })
        }
        draw({
            camera: t
        } = {}) {
            this.root.updateMatrixWorld(!0), this.bones.forEach((t, e) => {
                wt.multiply(t.worldMatrix, t.bindInverse), this.boneMatrices.set(wt, 16 * e)
            }), this.boneTexture && (this.boneTexture.needsUpdate = !0), super.draw({
                camera: t
            })
        }
    }, t.Sphere = class extends g {
        constructor(t, {
            radius: e = .5,
            widthSegments: i = 16,
            heightSegments: r = Math.ceil(.5 * i),
            phiStart: s = 0,
            phiLength: n = 2 * Math.PI,
            thetaStart: a = 0,
            thetaLength: h = Math.PI,
            attributes: o = {}
        } = {}) {
            const u = i,
                c = r,
                d = s,
                g = n,
                p = a,
                m = h,
                f = (u + 1) * (c + 1),
                x = u * c * 6,
                w = new Float32Array(3 * f),
                b = new Float32Array(3 * f),
                M = new Float32Array(2 * f),
                v = f > 65536 ? new Uint32Array(x) : new Uint16Array(x);
            let A = 0,
                E = 0,
                y = 0,
                F = p + m;
            const T = [];
            let _ = new l;
            for (let t = 0; t <= c; t++) {
                let i = [],
                    r = t / c;
                for (let t = 0; t <= u; t++, A++) {
                    let s = t / u,
                        n = -e * Math.cos(d + s * g) * Math.sin(p + r * m),
                        a = e * Math.cos(p + r * m),
                        h = e * Math.sin(d + s * g) * Math.sin(p + r * m);
                    w[3 * A] = n, w[3 * A + 1] = a, w[3 * A + 2] = h, _.set(n, a, h).normalize(), b[3 * A] = _.x, b[3 * A + 1] = _.y, b[3 * A + 2] = _.z, M[2 * A] = s, M[2 * A + 1] = 1 - r, i.push(E++)
                }
                T.push(i)
            }
            for (let t = 0; t < c; t++)
                for (let e = 0; e < u; e++) {
                    let i = T[t][e + 1],
                        r = T[t][e],
                        s = T[t + 1][e],
                        n = T[t + 1][e + 1];
                    (0 !== t || p > 0) && (v[3 * y] = i, v[3 * y + 1] = r, v[3 * y + 2] = n, y++), (t !== c - 1 || F < Math.PI) && (v[3 * y] = r, v[3 * y + 1] = s, v[3 * y + 2] = n, y++)
                }
            Object.assign(o, {
                position: {
                    size: 3,
                    data: w
                },
                normal: {
                    size: 3,
                    data: b
                },
                uv: {
                    size: 2,
                    data: M
                },
                index: {
                    data: v
                }
            }), super(t, o)
        }
    }, t.Text = function ({
        font: t,
        text: e,
        width: i = 1 / 0,
        align: r = "left",
        size: s = 1,
        letterSpacing: n = 0,
        lineHeight: a = 1.4,
        wordSpacing: h = 0,
        wordBreak: o = !1
    }) {
        const l = this;
        let u, c, d, g, p;
        const m = /\n/,
            f = /\s/;

        function x() {
            d = t.common.lineHeight, g = t.common.base, p = s / g;
            let i = e.replace(/[ \n]/g, "").length;
            c = {
                position: new Float32Array(4 * i * 3),
                uv: new Float32Array(4 * i * 2),
                id: new Float32Array(4 * i),
                index: new Uint16Array(6 * i)
            };
            for (let t = 0; t < i; t++) c.id[t] = t, c.index.set([4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3], 6 * t);
            w()
        }

        function w() {
            const d = [];
            let g = 0,
                x = 0,
                w = 0,
                M = v();

            function v() {
                const t = {
                    width: 0,
                    glyphs: []
                };
                return d.push(t), x = g, w = 0, t
            }
            let A = 0;
            for (; g < e.length && A < 100;) {
                A++;
                const t = e[g];
                if (!M.width && f.test(t)) {
                    x = ++g, w = 0;
                    continue
                }
                if (m.test(t)) {
                    g++, M = v();
                    continue
                }
                const r = u[t];
                if (M.glyphs.length) {
                    const t = M.glyphs[M.glyphs.length - 1][0];
                    let e = b(r.id, t.id) * p;
                    M.width += e, w += e
                }
                M.glyphs.push([r, M.width]);
                let a = 0;
                if (f.test(t) ? (x = g, w = 0, a += h * s) : a += n * s, a += r.xadvance * p, M.width += a, w += a, M.width > i) {
                    if (o && M.glyphs.length > 1) {
                        M.width -= a, M.glyphs.pop(), M = v();
                        continue
                    }
                    if (!o && w !== M.width) {
                        let t = g - x + 1;
                        M.glyphs.splice(-t, t), g = x, M.width -= w, M = v();
                        continue
                    }
                }
                g++
            }
            M.width || d.pop(),
                function (e) {
                    const i = t.common.scaleW,
                        n = t.common.scaleH;
                    let h = .07 * s,
                        o = 0;
                    for (let t = 0; t < e.length; t++) {
                        let l = e[t];
                        for (let t = 0; t < l.glyphs.length; t++) {
                            const e = l.glyphs[t][0];
                            let s = l.glyphs[t][1];
                            if ("center" === r ? s -= .5 * l.width : "right" === r && (s -= l.width), f.test(e.char)) continue;
                            s += e.xoffset * p, h -= e.yoffset * p;
                            let a = e.width * p,
                                u = e.height * p;
                            c.position.set([s, h - u, 0, s, h, 0, s + a, h - u, 0, s + a, h, 0], 4 * o * 3);
                            let d = e.x / i,
                                g = e.width / i,
                                m = 1 - e.y / n,
                                x = e.height / n;
                            c.uv.set([d, m - x, d, m, d + g, m - x, d + g, m], 4 * o * 2), h += e.yoffset * p, o++
                        }
                        h -= s * a
                    }
                    l.buffers = c, l.numLines = e.length, l.height = l.numLines * s * a
                }(d)
        }

        function b(e, i) {
            for (let r = 0; r < t.kernings.length; r++) {
                let s = t.kernings[r];
                if (!(s.first < e || s.second < i)) return s.first > e ? 0 : s.first === e && s.second > i ? 0 : s.amount
            }
            return 0
        }
        u = {}, t.chars.forEach(t => u[t.char] = t), x(), this.resize = function (t) {
            ({
                width: i
            } = t), w()
        }, this.update = function (t) {
            ({
                text: e
            } = t), x()
        }
    }, t.Texture = W, t.Transform = C, t.Vec2 = J, t.Vec3 = l, t.Vec4 = class extends Array {
        constructor(t = 0, e = t, i = t, r = t) {
            return super(t, e, i, r), this
        }
        get x() {
            return this[0]
        }
        set x(t) {
            this[0] = t
        }
        get y() {
            return this[1]
        }
        set y(t) {
            this[1] = t
        }
        get z() {
            return this[2]
        }
        set z(t) {
            this[2] = t
        }
        get w() {
            return this[3]
        }
        set w(t) {
            this[3] = t
        }
        set(t, e, i, r) {
            return t.length ? this.copy(t) : (E(this, t, e, i, r), this)
        }
        copy(t) {
            return A(this, t), this
        }
        normalize() {
            return y(this, this), this
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
        }
    }, t
}({});

const imgSize = [1900, 805];

const vertex = `
					attribute vec2 uv;
					attribute vec2 position;
					varying vec2 vUv;
					void main() {
							vUv = uv;
							gl_Position = vec4(position, 0, 1);
					}
			`;
const fragment = `
					precision highp float;
					precision highp int;
					uniform sampler2D tWater;
					uniform sampler2D tFlow;
					uniform float uTime;
					varying vec2 vUv;
					uniform vec4 res;

					void main() {

							// R and G values are velocity in the x and y direction
							// B value is the velocity length
							vec3 flow = texture2D(tFlow, vUv).rgb;

							vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
							vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV -= flow.xy * (0.15 * 0.7);

							vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV2 -= flow.xy * (0.125 * 0.7);

							vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV3 -= flow.xy * (0.10 * 0.7);

							vec3 tex = texture2D(tWater, myUV).rgb;
							vec3 tex2 = texture2D(tWater, myUV2).rgb;
							vec3 tex3 = texture2D(tWater, myUV3).rgb;

              gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
					}
			`; {
    const renderer = new ogl.Renderer({
        dpr: 2
    });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);

    // Variable inputs to control flowmap
    let aspect = 1;
    const mouse = new ogl.Vec2(-1);
    const velocity = new ogl.Vec2();

    function resize() {
        let a1, a2;
        var imageAspect = imgSize[1] / imgSize[0];
        if (window.innerHeight / window.innerWidth < imageAspect) {
            a1 = 1;
            a2 = window.innerHeight / window.innerWidth / imageAspect;
        } else {
            a1 = (window.innerWidth / window.innerHeight) * imageAspect;
            a2 = 1;
        }
        mesh.program.uniforms.res.value = new ogl.Vec4(
            window.innerWidth,
            window.innerHeight,
            a1,
            a2
        );

        renderer.setSize(window.innerWidth, window.innerHeight);
        aspect = window.innerWidth / window.innerHeight;
    }
    const flowmap = new ogl.Flowmap(gl, {
        falloff: 1.0, // size of the stamp, percentage of the size
        alpha: 0.3, // opacity of the stamp
        dissipation: 0.94 // affects the speed that the stamp fades. Closer to 1 is slower
    });
    // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
    const geometry = new ogl.Geometry(gl, {
        position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
        },
        uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
        }
    });
    const texture = new ogl.Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR
    });
    const img = new Image();
    img.onload = () => (texture.image = img);
    img.crossOrigin = "Anonymous";
    img.src = "bg.jpg";

    let a1, a2;
    var imageAspect = imgSize[1] / imgSize[0];
    if (window.innerHeight / window.innerWidth < imageAspect) {
        a1 = 1;
        a2 = window.innerHeight / window.innerWidth / imageAspect;
    } else {
        a1 = (window.innerWidth / window.innerHeight) * imageAspect;
        a2 = 1;
    }

    const program = new ogl.Program(gl, {
        vertex,
        fragment,
        uniforms: {
            uTime: {
                value: 0
            },
            tWater: {
                value: texture
            },
            res: {
                value: new ogl.Vec4(window.innerWidth, window.innerHeight, a1, a2)
            },
            img: {
                value: new ogl.Vec2(imgSize[0], imgSize[1])
            },
            // Note that the uniform is applied without using an object and value property
            // This is because the class alternates this texture between two render targets
            // and updates the value property after each render.
            tFlow: flowmap.uniform
        }
    });
    const mesh = new ogl.Mesh(gl, {
        geometry,
        program
    });

    window.addEventListener("resize", resize, false);
    resize();

    // Create handlers to get mouse position and velocity
    const isTouchCapable = "ontouchstart" in window;
    if (isTouchCapable) {
        window.addEventListener("touchstart", updateMouse, false);
        window.addEventListener("touchmove", updateMouse, {
            passive: false
        });
    } else {
        window.addEventListener("mousemove", updateMouse, false);
    }
    let lastTime;
    const lastMouse = new ogl.Vec2();

    function updateMouse(e) {
        e.preventDefault();
        if (e.changedTouches && e.changedTouches.length) {
            e.x = e.changedTouches[0].pageX;
            e.y = e.changedTouches[0].pageY;
        }
        if (e.x === undefined) {
            e.x = e.pageX;
            e.y = e.pageY;
        }
        // Get mouse value in 0 to 1 range, with y flipped
        mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
        // Calculate velocity
        if (!lastTime) {
            // First frame
            lastTime = performance.now();
            lastMouse.set(e.x, e.y);
        }

        const deltaX = e.x - lastMouse.x;
        const deltaY = e.y - lastMouse.y;

        lastMouse.set(e.x, e.y);

        let time = performance.now();

        // Avoid dividing by 0
        let delta = Math.max(10.4, time - lastTime);
        lastTime = time;
        velocity.x = deltaX / delta;
        velocity.y = deltaY / delta;
        // Flag update to prevent hanging velocity values when not moving
        velocity.needsUpdate = true;
    }
    requestAnimationFrame(update);

    function update(t) {
        requestAnimationFrame(update);
        // Reset velocity when mouse not moving
        if (!velocity.needsUpdate) {
            mouse.set(-1);
            velocity.set(0);
        }
        velocity.needsUpdate = false;
        // Update flowmap inputs
        flowmap.aspect = aspect;
        flowmap.mouse.copy(mouse);
        // Ease velocity input, slower when fading out
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();
        program.uniforms.uTime.value = t * 0.01;
        renderer.render({
            scene: mesh
        });
    }
}