if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(greeting, name) {
      return {
        name: name,
        greeting: greeting,
        sayIt: function() {
          return this.greeting + ', ' + this.name;
        }
      };
    }
  };
});

