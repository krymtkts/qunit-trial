QUnit.module('hello module', function(hooks) {
  hooks.beforeEach(function(assert) {
    this.test = window.sample;
    assert.ok(true, 'beforeEach called');
  });

  hooks.afterEach(function(assert) {
    assert.ok(true, 'afterEach called');
  });

  QUnit.test('hello test', function(assert) {
    assert.expect(1, this.test.get1(), 'correct');
  });
});
