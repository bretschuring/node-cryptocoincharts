var Client = require('node-rest-client').Client;

var client = new Client()

var base_url = 'http://www.cryptocoincharts.info/v2/api'

module.exports.list_coins = function(callback) {
  console.log("Get coin list")
  var req = client.get(base_url + '/listCoins', function(data, response) {
    if(callback) {
      callback(null, data);
    }
  });

  if(callback) {
    req.on('error', callback);
  }
}

module.exports.trading_pair = function(pair, callback) {
  console.log("Get trading pair")
  var req = client.get(base_url + '/tradingPair', function(data, response) {
    if(callback) {
      callback(null, data);
    }
  });

  if(callback) {
    req.on('error', callback);
  }

}

module.exports.trading_pairs = function(pairs, callback) {

  // convert pairs array to comma delimited string
  if(pairs && Array.isArray(pairs) ) {
    pairs = pairs.join(',')
  }

  var args = {
    data: pairs
  }

  console.log("PUT trading pairs")
  var req = client.put(base_url + '/tradingPairs', args, function(data, response) {
    if(callback) {
      callback(null, data);
    }
  });

  if(callback) {
    req.on('error', callback);
  }

}