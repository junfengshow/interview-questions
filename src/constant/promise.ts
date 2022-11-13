
const pending = 'PENDING';
const onFulfilled = 'ONFULFILLED';
const onRejected = 'ONREJECTED';

function MyPromise (callback: any) {
  const _this = this;
  _this.status = pending;

  _this.onResolve = function (value: any) {
    if (value === _this) {
      _this.onRejected('A promise cannot be onFulFilled with itself.');
      return;
    }
  }
  _this.onRejected = function () {}
  try {
    callback(_this.onResolve, _this.onRejected)
  } catch (e) {
    _this.onRejected(e);
  }
}
MyPromise.prototype.then = function () {

}
export default MyPromise;
