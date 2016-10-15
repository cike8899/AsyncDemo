var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function a() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 2000);
    });
}
var b = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.time("async");
        console.info("start");
        var val = yield a(); //await表示等待promise返回结果了，再继续执行，返回结果
        console.timeEnd("async");
        console.info(val);
    });
};
// var ret = b(); console.info(ret); Promise.resolve("kkk");
function c() {
    return new Promise(function (resolve, reject) {
        console.info('begin do something');
        // setTimeout(() => {     // resolve("result");     reject("reject"); }, 2000);
        reject("reject");
        throw new Error("悲剧了");
    });
}
// c().catch((err) => {     console.info(err); }); c().then((ret) => {
// console.info(ret); }).catch((err) => {     console.info(err); });
var d = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.time("async");
        console.info("start");
        var val = yield a(); //await表示等待promise返回结果了，再继续执行，返回结果
        console.timeEnd("async");
        console.info(val);
        return val;
    });
};
var start = function () {
    return __awaiter(this, void 0, void 0, function* () {
        for (var i = 1; i <= 10; i++) {
            console.log("\u5F53\u524D\u662F\u7B2C" + i + "\u6B21\u7B49\u5F85..");
            var ret = yield a();
            console.info(ret);
        }
        console.info("后续的操作");
        return ret;
    });
};
// setTimeout(() => {     console.info("dddd"); }, 1000);
var s = start().then(function (ret) {
    console.info("result:", ret);
});
console.info(s);
//# sourceMappingURL=asynchronous.js.map