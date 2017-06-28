/**
 * Created by Scarlett on 2017-05-24.
 */

/*
var app = angular.module("MainContents", []);
app.run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])
    .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
        function($anchorScroll, $location, $scope) {
            $scope.gotoAnchor = function(x) {
                var newHash = 'anchor' + x;
                if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it

                    $location.hash('anchor' + x);
                } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                }
            };
        }
    ]);

*/
angular.module('myApp', ['duScroll']).
controller('MyCtrl', function($scope, $document){
        $scope.toTheTop = function() {
            $document.scrollTop(0, 9000);
        }
        var section2 = angular.element(document.getElementById('section-2'));
        $scope.toSection2 = function() {
            $document.scrollTo(section2, 30, 1000);
        }
    }
);




