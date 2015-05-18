angular.module('starter.services',['ngResource'])

  .factory('Movie',function ($resource) {
    return $resource('http://localhost:3000/api/movies/:movieId',{}, {
      query: {method: "GET", isArray: false}
    });
});