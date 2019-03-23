/**
 * Sample class.
 * プロダクトコードはclassじゃないけど面倒なので。
 */
class Sample {
  /**
   * sample method.
   * @return {Number}1
   */
  get1() {
    return 1;
  }

  /**
   * this method never called.
   * @return {boolean} true
   */
  neverCalled() {
    return true;
  }
}

// windowsオブジェクトへオブジェクトが設定されているのを再現。
this.sample = new Sample();
