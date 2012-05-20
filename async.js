define(function() {
  return {
    async : function() {
      return $.Deferred(function(dfd) {
        setTimeout(function() {
          dfd.resolve(true);
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
