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
}

// windowsオブジェクトへオブジェクトが設定されているのを再現。
this.sample = new Sample();
