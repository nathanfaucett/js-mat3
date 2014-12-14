var mathf = require("mathf");


var mat3 = module.exports;


mat3.create = function(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    return mat3.set(
        new mathf.ArrayType(9),
        m11, m12, m13,
        m21, m22, m23,
        m31, m32, m33
    );
};

mat3.copy = function(a, b) {

    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];

    return a;
};

mat3.set = function(a, m11, m12, m13, m21, m22, m23, m31, m32, m33) {

    a[0] = m11 !== undefined ? m11 : 1;
    a[1] = m21 !== undefined ? m21 : 0;
    a[2] = m31 !== undefined ? m31 : 0;
    a[3] = m12 !== undefined ? m12 : 0;
    a[4] = m22 !== undefined ? m22 : 1;
    a[5] = m32 !== undefined ? m32 : 0;
    a[6] = m13 !== undefined ? m13 : 0;
    a[7] = m23 !== undefined ? m23 : 0;
    a[8] = m33 !== undefined ? m33 : 1;

    return a;
};

mat3.identity = function(a) {

    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;

    return a;
};

mat3.zero = function(a) {

    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;

    return a;
};

mat3.mul = function(a, b, out) {
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

    out = out || a;

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

mat3.smul = function(a, s, out) {
    out = out || a;

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

mat3.sdiv = function(a, s, out) {
    s = s !== 0 ? 1 / s : s;

    out = out || a;

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

mat3.determinant = function(m) {
    var a = m[0],
        b = m[1],
        c = m[2],
        d = m[3],
        e = m[4],
        f = m[5],
        g = m[6],
        h = m[7],
        i = m[8];

    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
};

mat3.inverseMat = function(a, m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    var m0 = m22 * m33 - m23 * m32,
        m3 = m13 * m32 - m12 * m33,
        m6 = m12 * m23 - m13 * m22,

        det = m11 * m0 + m21 * m3 + m31 * m6;

    if (det === 0) {
        return mat3.identity(a);
    }
    det = 1 / det;

    a[0] = m0 * det;
    a[1] = (m23 * m31 - m21 * m33) * det;
    a[2] = (m21 * m32 - m22 * m31) * det;

    a[3] = m3 * det;
    a[4] = (m11 * m33 - m13 * m31) * det;
    a[5] = (m12 * m31 - m11 * m32) * det;

    a[6] = m6 * det;
    a[7] = (m13 * m21 - m11 * m23) * det;
    a[8] = (m11 * m22 - m12 * m21) * det;

    return a;
};

mat3.inverse = function(a, out) {
    return mat3.inverseMat(out || a,
        a[0], a[3], a[6],
        a[1], a[4], a[7],
        a[2], a[5], a[8]
    );
};

mat3.inverseMat4 = function(a, out) {
    return mat3.inverseMat(out,
        a[0], a[4], a[8],
        a[1], a[5], a[9],
        a[2], a[6], a[10]
    );
};

mat3.transpose = function(a, out) {
    var a01, a02, a12;

    out = out || a;

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

mat3.scale = function(a, v, out) {
    var x = v[0],
        y = v[1],
        z = v[2];

    out = out || a;

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

mat3.makeScale = function(a, v) {
    return mat3.set(a,
        v[0], 0, 0,
        0, v[1], 0,
        0, 0, v[2]
    );
};

mat3.makeRotationX = function(a, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(a,
        1, 0, 0,
        0, c, -s,
        0, s, c
    );
};

mat3.makeRotationY = function(a, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(a,
        c, 0, s,
        0, 1, 0,
        -s, 0, c
    );
};

mat3.makeRotationZ = function(a, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    return mat3.set(a,
        c, -s, 0,
        s, c, 0,
        0, 0, 1
    );
};

mat3.fromQuat = function(a, q) {
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

    a[0] = 1 - (yy + zz);
    a[1] = xy + wz;
    a[2] = xz - wy;

    a[3] = xy - wz;
    a[4] = 1 - (xx + zz);
    a[5] = yz + wx;

    a[6] = xz + wy;
    a[7] = yz - wx;
    a[8] = 1 - (xx + yy);

    return a;
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
