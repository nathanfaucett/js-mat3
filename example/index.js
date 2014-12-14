global.mat3 = require("../src/index");


var a = mat3.makeRotationX(mat3.create(), Math.PI * 0.25),
    b = mat3.makeRotationZ(mat3.create(), Math.PI * -0.5),
    c = mat3.create();

mat3.mul(c, a, b);

console.log(mat3.str(c));
