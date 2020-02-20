console.log("Loading samples ...");
var samples = require('./samples/samples.js');
console.log("OK");
console.log("");

/**
 *
 * @param {Array} tab
 * @returns {number}
 */
function maxSubArraySum(tab) {
    var sum = 0;

    for (var i = 0, len = tab.length; i < len; i++) {
        sum += tab[i];
    }

    return sum;
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
        console.log(JSON.stringify(sample.tab));
    } else console.log("Excution time : " + (end - start) + "ms");

    console.log("");
}

function main() {
    // mode = "dev" // samples array from 1 to 10 elements
    // mode = "test" // samples array from 1 to 5 000 elements
    // mode = "huge" // samples array from 1 to 10 000 000 elements
    var modes = ["dev", "test", /*"huge"*/];

    for (var k = 0, len = modes.length; k < len; k++) {
        var mode = modes[k];
        console.log("================== Mode %s ==================", mode);
        var samplesToTest = samples[mode];
        for (var i = 0; i < samplesToTest.length; i++) {
            test(samplesToTest[i]);
        }
        console.log("================== End Mode %s ==================", mode);
        console.log("");
    }
}

main();