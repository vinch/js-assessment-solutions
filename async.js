if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return $.Deferred(function(dfd) {
        setTimeout(function() {
          dfd.resolve(value);
        }, 500);
      }).promise();
    },

    manipulateRemoteData : function(url) {
      return $.Deferred(function(dfd) {
        $.getJSON(url, function(data) {
          var people = [];
          for (var i=0; i<data.people.length; i++) {
            people.push(data.people[i].name);
          }
          dfd.resolve(people.sort());
        });
      }).promise();
    }
  };
});
