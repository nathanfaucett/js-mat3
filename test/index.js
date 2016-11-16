var tape = require("tape"),
    mat3 = require("..");


tape("mat3.equal(a, b)", function(assert) {
    assert.equals(mat3.equals(mat3.create(), mat3.create()), true);
    assert.end();
});

tape("mat3.setRotationZ(out, a, angle)", function(assert) {
    assert.equals(mat3.equals(
        mat3.setRotationZ(mat3.create(), Math.PI / 2), mat3.create(
            0, -1, 0,
            1, 0, 0,
            0, 0, 1
        )
    ), true);
    assert.end();
});
