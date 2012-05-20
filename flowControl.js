if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'use!underscore' ], function(_) {
  return {
    fizzBuzz : function(num) {
      if (num%15 === 0) {
        return 'fizzbuzz';
      }
      else {
        if (num%3 === 0) {
          return 'fizz';
        }
        else {
          if (num%5 === 0) {
            return 'buzz';
          }
          else {
            return num;
          }
        }
      }
    },

    or : function(a, b) {
      return a || b;
    },

    and : function(a, b) {
      return a && b;
    }
  };
});
