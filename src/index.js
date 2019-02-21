// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};

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
