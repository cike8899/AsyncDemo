function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
}

var b = async function () {
    console.time("async")
    console.info("start")
    var val = await a() //await表示等待promise返回结果了，再继续执行，返回结果
    console.timeEnd("async")
    console.info(val)
}

// var ret = b(); console.info(ret); Promise.resolve("kkk");

function c() {
    return new Promise((resolve, reject) => {
        console.info('begin do something');
        // setTimeout(() => {     // resolve("result");     reject("reject"); }, 2000);
        reject("reject");
        throw new Error("悲剧了");
    });
}

// c().catch((err) => {     console.info(err); }); c().then((ret) => {
// console.info(ret); }).catch((err) => {     console.info(err); });

var d = async function () {
    console.time("async")
    console.info("start")
    var val = await a() //await表示等待promise返回结果了，再继续执行，返回结果
    console.timeEnd("async")
    console.info(val)
    return val;
}

var start = async function () {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        let ret = await a();
        console.info(ret);
    }
    console.info("后续的操作");
    return ret;
};

// setTimeout(() => {     console.info("dddd"); }, 1000);

let s = start().then((ret) => {
    console.info("result:", ret);
});
console.info(s);
