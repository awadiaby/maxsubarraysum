console.log("Loading samples ...");
var samples = require('./samples/samples.js');
console.log("OK");
console.log("");

function maxSubArraySum(tab) {
    // write your code here
    return 0;
}

function test(sample) {
    console.log("== Test maxSubArraySum on a " + sample.size + " array == ")
    var start = new Date().getTime();
    var result = maxSubArraySum(sample.tab);
    var end = new Date().getTime();
    console.log("result => " + result);
    console.log("expected => " + sample.result);
    if (result !== sample.result) {
        console.log("Error : Bad result on following tab :");
        console.log(JSON.stringify(tab));
    } else console.log("Excution time : " + (end - start) + "ms");

    console.log("");
}

function main() {
    // mode = "dev" // samples array from 1 to 10 elements
    // mode = "test" // samples array from 1 to 5 000 elements
    // mode = "huge" // samples array from 1 to 10 000 000 elements
    var mode = "dev";
    var samplesToTest = samples[mode];
    for (var i = 0; i < samplesToTest.length; i++) {
        test(samplesToTest[i]);
    }
}

main();