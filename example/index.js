global.mat3 = require("../src/index");


var a = mat3.create(),
    b = mat3.create(),
    c = mat3.mul(a, b, mat3.create());

console.log(c);
