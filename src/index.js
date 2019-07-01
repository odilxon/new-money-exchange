// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  ret = {};
  if (currency>10000) {
    ret.error="You are rich, my friend! We don't have so much coins for exchange";
    return ret;
  }
  if (currency>49){
    var h = Math.floor(currency/50);
    currency = currency%50;
    ret.H = h;
  }
  if (currency>24){
    var q = Math.floor(currency/25);
    currency = currency%25;
    ret.Q = q;
  }
  if (currency>9){
    var d = Math.floor(currency/10);
    currency = currency%10;
    ret.D = d;
  }
  if (currency>4){
    var n = Math.floor(currency/5);
    currency = currency%5;
    ret.N = n;
  }
  if(currency>0){
    ret.P = currency;
  }
  return ret;
    }
