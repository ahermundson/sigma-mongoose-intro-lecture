myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};
    self.nicenessLevelOptions = [1,2,3,4,5];
    self.list;

    // Start app
    getData();

    // Get all people
    function getData() {
      $http.get('/person')
      .then(function(response) {
        self.people = response.data;
      },
      function(response) {
        console.log('get error:', response);
      })
      ;
    }

    // add person
    self.addPerson = function() {
      console.log('add person', self.newPerson);
      $http.post('/person', self.newPerson)
        .then(function(response) {
          getData();
          self.people.push(response.data);
          console.log(response);
        },
        function(response) {
          console.log('post error:', response);
        }
      );
    };

    // delete person
    self.deletePerson = function(id) {
      console.log('delete person');
      $http.delete('/person/' + id)
        .then(function(response) {
          getData();
        },
        function(response) {
          console.log('delete error:', response);
        }
      );
    }

    // update person
    self.updatePerson = function(id, index) {
      console.log('update person: ', self.people[index]);
      var data = {nicenessLevel: self.people[index].nicenessLevel};
      $http.put('/person/' + id, data)
        .then(function(response) {
          getData();
        },
        function(response) {
          console.log('update error:', response);
        }
      );
    }

    self.addToList = function(id, index) {
      console.log("Item: ", self.people[index].list);
      console.log("id: ", id );
      var data = {
        listItem: self.people[index].list
      }
      $http.put('/person/list/' + id, data)
        .then(function(response) {
          getData();
        },
        function(response) {
          console.log('update error:', response);
        }
      );
    }

}]);
