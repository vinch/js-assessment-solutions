if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
      return arr[0] + ', ' + arr[1] + arr[2];
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str1, str2) {
      return function(str2) {
        return str1 + ', ' + str2;
      }
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn(str1, str2, str3);
      }
    },

    useArguments : function() {
      var sum = 0;
      for (var i=0; i<arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    },

    callIt : function() {
      var arguments = Array.prototype.slice.call(arguments);
      var fn = arguments[0];
      arguments.shift();
      return fn.apply(this, arguments);
    },

    curryIt : function() {
      var args1 = Array.prototype.slice.call(arguments);
      var fn = args1[0];
      args1.shift();
      return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(this, args1.concat(args2));
      };
    },

    makeClosures : function(arr, fn) {
      var funcs = [];
      var helper = function(i) {
        return function() {
          return fn(arr[i]);
        }
      };
      for (var i=0; i<arr.length; i++) {
        funcs[i] = helper(i);
      }
      return funcs;
    }
  };
});
