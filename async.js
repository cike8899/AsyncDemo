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
    var val = await a()
    console.info(val)
    console.timeEnd("async")
}

var ret = b();

console.info(ret);