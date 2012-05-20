if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
          result.push(item + ': ' + obj[item]);
        }
      }
      return result;
    }
  };
});
