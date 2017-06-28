// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

app.controller("GreetingController", ["$scope", function($scope){
    $scope.greeting = "Hola!";
}]);
app.controller("DoubleController", ["$scope", function($scope){
    $scope.double = function(value) {return value * 2; };
}]);

app.filter('searchFor', function(){
    return function(arr, searchString){

        if(!searchString){
            return arr;
        }
        var result = [];

        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };

});

app.controller("SpicyController", ["$scope", function($scope){
    $scope.chiliSpicy = function(){
        $scope.spice = "chili";
    }
    $scope.customSpicy = function(){
        $scope.spice = $scope.customSpice;
    }
}]);

app.controller("MainController", ["$scope", function($scope){
    $scope.timeOfDay = 'Good morning';
    $scope.name = 'Nikki';
}]);

app.controller("ChildController", ["$scope", function($scope){
    $scope.name = 'Mattie';
}]);

app.controller("GrandChildController", ["$scope", function($scope){
    $scope.timeOfDay = 'Good evening';
    $scope.name = 'Gingerbread Baby';
}]);

app.controller('MainCtrl', function($scope){
    $scope.name = 'Nextree';
    $scope.undated = -1;

    $scope.$watch('name', function(){
        $scope.undated++;
    });
});

// The controller

function InstantSearchController($scope){

    $scope.items = [
        {
            url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/06/digital-clock/',
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
            title: 'Mini AJAX File Upload Form',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg'
        },
        {
            url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg'
        }
    ];

}