// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};

    //1 version
    // if (currency > 10000) {
    //     return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    // } else {

    //     var halfs = 0,
    //         quarters = 0,
    //         dimes = 0,
    //         nickels = 0,
    //         pennie = 0;

    //     while (currency >= 50) {

    //         currency -= 50;
    //         halfs += 1;
    //         exchange.H = halfs;
    //     }

    //     while (currency >= 25) {

    //         currency -= 25;
    //         quarters += 1;
    //         exchange.Q = quarters;
    //     }

    //     while (currency >= 10) {

    //         currency -= 10;
    //         dimes += 1;
    //         exchange.D = dimes;
    //     }

    //     while (currency >= 5) {

    //         currency -= 5;
    //         nickels += 1;
    //         exchange.N = nickels;
    //     }

    //     while (currency >= 1) {

    //         currency -= 1;
    //         pennie += 1;
    //         exchange.P = pennie;
    //     }
    // }
    // return exchange;

    //2 version
    var nominals = [H50, Q25, D10, N5, P1];
    var nominalLen = nominals.length;
    console.log("Это nominalLen" + nominalLen);

    for (var i = 0; i < nominalLen; i++) {

	    while (currency >= 0 && currency >= +nominals[i].slice(1)) {
		    exchange.nominals[i].substring(0,1) = parseInt( currency/+(nominals[i].slice(1)) );
	        currency = currency % +(nominals[i].slice(1));
        }
    }
	return exchange;

}
