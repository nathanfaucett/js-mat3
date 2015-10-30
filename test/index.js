var tape = require("tape"),
    mat3 = require("..");


tape("mat3.equal(a, b)", function(assert) {
    assert.equals(mat3.equal(mat3.create(), mat3.create()), true);
    assert.end();
});
