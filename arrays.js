if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i=0; i<arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      for (var i=0; i<arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item)
      return arr;
    },

    truncate : function(arr) {
      arr.splice(arr.length-1, 1);
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i=0; i<arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var duplicates = [];
      for (var i=0; i<arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== i && duplicates.indexOf(arr[i]) === -1) {
          duplicates.push(arr[i]);
        }
      }
      return duplicates;
    },

    square : function(arr) {
      return arr.map(function(item) {
        return Math.pow(item, 2);
      });
    },

    findAllOccurrences : function(arr, target) {
      var occurences = [], index = arr.indexOf(target);
      while (index !== -1) {
        occurences.push(index);
        index = arr.indexOf(target, index+1);
      }
      return occurences;
    }
  };
});
