// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {

        var halfs = 0,
            quarters = 0,
            dimes = 0,
            nickels = 0,
            pennies = 0;

        while (currency >= 50) {

            currency -= 50;
            halfs += 1;
            exchange.H = halfs;
        }

        while (currency >= 25) {

            currency -= 25;
            quarters += 1;
            exchange.Q = quarters;
        }

        while (currency >= 10) {

            currency -= 10;
            dimes += 1;
            exchange.D = dimes;
        }

        while (currency >= 5) {

            currency -= 5;
            nickels += 1;
            exchange.N = nickels;
        }

        while (currency >= 1) {

            currency -= 1;
            pennies += 1;
            exchange.P = pennies;
        }
    }
    return exchange;
}
