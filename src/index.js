var mathf = require("mathf"),
    isNumber = require("is_number");


var mat3 = exports;


mat3.ArrayType = typeof(Float32Array) !== "undefined" ? Float32Array : mathf.ArrayType;


mat3.create = function(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    var out = new mat3.ArrayType(9);

    out[0] = isNumber(m11) ? m11 : 1;
    out[1] = isNumber(m21) ? m21 : 0;
    out[2] = isNumber(m31) ? m31 : 0;
    out[3] = isNumber(m12) ? m12 : 0;
    out[4] = isNumber(m22) ? m22 : 1;
    out[5] = isNumber(m32) ? m32 : 0;
    out[6] = isNumber(m13) ? m13 : 0;
    out[7] = isNumber(m23) ? m23 : 0;
    out[8] = isNumber(m33) ? m33 : 1;

    return out;
};

mat3.copy = function(out, a) {

    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];

    return out;
};

mat3.clone = function(a) {
    var out = new mat3.ArrayType(9);

    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];

    return out;
};

mat3.set = function(out, m11, m12, m13, m21, m22, m23, m31, m32, m33) {

    out[0] = isNumber(m11) ? m11 : 1;
    out[1] = isNumber(m21) ? m21 : 0;
    out[2] = isNumber(m31) ? m31 : 0;
    out[3] = isNumber(m12) ? m12 : 0;
    out[4] = isNumber(m22) ? m22 : 1;
    out[5] = isNumber(m32) ? m32 : 0;
    out[6] = isNumber(m13) ? m13 : 0;
    out[7] = isNumber(m23) ? m23 : 0;
    out[8] = isNumber(m33) ? m33 : 1;

    return out;
};

mat3.identity = function(out) {

    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;

    return out;
};

mat3.zero = function(out) {

    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;

    return out;
};

mat3.mul = function(out, a, b) {
    var a11 = a[0],
        a12 = a[3],
        a13 = a[6],
        a21 = a[1],
        a22 = a[4],
        a23 = a[7],
        a31 = a[2],
        a32 = a[5],
        a33 = a[8],

        b11 = b[0],
        b12 = b[3],
        b13 = b[6],
        b21 = b[1],
        b22 = b[4],
        b23 = b[7],
        b31 = b[2],
        b32 = b[5],
        b33 = b[8];

    out[0] = a11 * b11 + a21 * b12 + a31 * b13;
    out[3] = a12 * b11 + a22 * b12 + a32 * b13;
    out[6] = a13 * b11 + a23 * b12 + a33 * b13;

    out[1] = a11 * b21 + a21 * b22 + a31 * b23;
    out[4] = a12 * b21 + a22 * b22 + a32 * b23;
    out[7] = a13 * b21 + a23 * b22 + a33 * b23;

    out[2] = a11 * b31 + a21 * b32 + a31 * b33;
    out[5] = a12 * b31 + a22 * b32 + a32 * b33;
    out[8] = a13 * b31 + a23 * b32 + a33 * b33;

    return out;
};

mat3.smul = function(out, a, s) {

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;
    out[4] = a[4] * s;
    out[5] = a[5] * s;
    out[6] = a[6] * s;
    out[7] = a[7] * s;
    out[8] = a[8] * s;

    return out;
};

mat3.sdiv = function(out, a, s) {
    s = s !== 0 ? 1 / s : s;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;
    out[4] = a[4] * s;
    out[5] = a[5] * s;
    out[6] = a[6] * s;
    out[7] = a[7] * s;
    out[8] = a[8] * s;

    return out;
};

mat3.determinant = function(out) {
    var a = out[0],
        b = out[1],
        c = out[2],
        d = out[3],
        e = out[4],
        f = out[5],
        g = out[6],
        h = out[7],
        i = out[8];

    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
};

mat3.inverseMat = function(out, m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    var m0 = m22 * m33 - m23 * m32,
        m3 = m13 * m32 - m12 * m33,
        m6 = m12 * m23 - m13 * m22,

        det = m11 * m0 + m21 * m3 + m31 * m6;

    if (det === 0) {
        return mat3.identity(out);
    }
    det = 1 / det;

    out[0] = m0 * det;
    out[1] = (m23 * m31 - m21 * m33) * det;
    out[2] = (m21 * m32 - m22 * m31) * det;

    out[3] = m3 * det;
    out[4] = (m11 * m33 - m13 * m31) * det;
    out[5] = (m12 * m31 - m11 * m32) * det;

    out[6] = m6 * det;
    out[7] = (m13 * m21 - m11 * m23) * det;
    out[8] = (m11 * m22 - m12 * m21) * det;

    return out;
};

mat3.inverse = function(out, a) {
    return mat3.inverseMat(
        out,
        a[0], a[3], a[6],
        a[1], a[4], a[7],
        a[2], a[5], a[8]
    );
};

mat3.inverseMat4 = function(out, a) {
    return mat3.inverseMat(
        out,
        a[0], a[4], a[8],
        a[1], a[5], a[9],
        a[2], a[6], a[10]
    );
};

mat3.transpose = function(out, a) {
    var a01, a02, a12;

    if (out === a) {
        a01 = a[1];
        a02 = a[2];
        a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }

    return out;
};

mat3.scale = function(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];

    out[0] *= x;
    out[3] *= y;
    out[6] *= z;
    out[1] *= x;
    out[4] *= y;
    out[7] *= z;
    out[2] *= x;
    out[5] *= y;
    out[8] *= z;

    return out;
};

mat3.makeScale = function(out, v) {

    return mat3.set(
        out,
        v[0], 0, 0,
        0, v[1], 0,
        0, 0, v[2]
    );
};

mat3.makeRotationX = function(out, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(
        out,
        1, 0, 0,
        0, c, -s,
        0, s, c
    );
};

mat3.makeRotationY = function(out, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(
        out,
        c, 0, s,
        0, 1, 0, -s, 0, c
    );
};

mat3.makeRotationZ = function(out, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(
        out,
        c, -s, 0,
        s, c, 0,
        0, 0, 1
    );
};

mat3.fromQuat = function(out, q) {
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;

    out[3] = xy - wz;
    out[4] = 1 - (xx + zz);
    out[5] = yz + wx;

    out[6] = xz + wy;
    out[7] = yz - wx;
    out[8] = 1 - (xx + yy);

    return out;
};

mat3.equal = function(a, b) {
    return !(
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3] ||
        a[4] !== b[4] ||
        a[5] !== b[5] ||
        a[6] !== b[6] ||
        a[7] !== b[7] ||
        a[8] !== b[8]
    );
};

mat3.notEqual = function(a, b) {
    return (
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3] ||
        a[4] !== b[4] ||
        a[5] !== b[5] ||
        a[6] !== b[6] ||
        a[7] !== b[7] ||
        a[8] !== b[8]
    );
};

mat3.str = function(out) {
    return (
        "Mat3[" + out[0] + ", " + out[3] + ", " + out[6] + "]\n" +
        "     [" + out[1] + ", " + out[4] + ", " + out[7] + "]\n" +
        "     [" + out[2] + ", " + out[5] + ", " + out[8] + "]"
    );
};

mat3.string = mat3.toString = mat3.str;
