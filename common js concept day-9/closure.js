function stopWatch() {
    let counter = 0;
    return function () {
        counter++
        console.log(counter);
    }
}
const watch = stopWatch()
console.log(watch);