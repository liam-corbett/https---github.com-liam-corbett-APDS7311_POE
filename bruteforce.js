const ExpressBrute = require('express-brute');
const store = new ExpressBrute.MemoryStore();

const bruteforce = new ExpressBrute(store, {
  freeRetries: 5,
  minWait: 5 * 60 * 1000, // 5 minutes
  maxWait: 60 * 60 * 1000, // 1 hour
  lifetime: 24 * 60 * 60, // 1 day
});

module.exports = bruteforce;
