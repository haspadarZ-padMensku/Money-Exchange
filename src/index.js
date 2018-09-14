// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        let Error = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
        return Error;
    }
    
    const Coiner = {};
    let value = [50, 25, 10, 5, 1];
    let names = ["H", "Q", "D", "N", "P"];
    let counter = [0, 0, 0, 0, 0];

    for (let i = 0; i < value.length; i++) {
        while (currency / value[i] >= 1) {
            currency -= value[i];
            counter[i]++;
        }
        if (currency == 0) break;
    }

    for (let i = 0; i < counter.length; i++) {
        if (counter[i] !== 0) {
            Coiner[names[i]] = counter[i];
        }
    }
    return Coiner;
}
