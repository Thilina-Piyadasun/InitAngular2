/**
 * Created by minudika on 9/9/16.
 */
/*var app = angular.module('myApp', ['ngMaterial']);*/

app.controller('MyController', function($scope, $mdSidenav, $routeParams, $location) {
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
});
/*app.controller('Director', function($scope, $routeParams, $location){
    $scope.auth = function(){
        $location.url('/view1');
    };
});*/

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    Upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        data: {
                            username: $scope.username,
                            file: file
                        }
                    }).then(function (resp) {
                        $timeout(function() {
                            $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage +
                            '% ' + evt.config.data.file.name + '\n' +
                            $scope.log;
                    });
                }
            }
        }
    };
}]);

app.controller('aMenuCtrl',['$scope',function($scope){
    $scope.onAtATime = true;
}]);

app.controller('sliderCtrl', function($scope) {

    /*$scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    };

    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;

    $scope.disabled1 = Math.floor(Math.random() * 100);
    $scope.disabled2 = 0;
    $scope.disabled3 = 70;

    $scope.invert = Math.floor(Math.random() * 100);

    $scope.isDisabled = true;

    $scope.slider = {
        minValue: 1980,
        maxValue: 2016,
        options: {
            floor: 0,
            ceil: 100,
            step: 1
        }
    };

    //var slider = $scope.slider;

    /!*$scope.onChange=function(){
        var x=10;

        console.log($scope.slider.maxValue);
        console.log($scope.slider.minValue);
    }
*!/
    $scope.slider2 = {
        value: 10,
        options: {
            showSelectionBar: true
        }
    };

    $scope.slider = {
        value: 100,
        options: {
            id: 'slider-id',
            onStart: function(id) {
                console.log('on start ' + id); // logs 'on start slider-id'
            },
            onChange: function(id) {
                console.log('on change ' + id); // logs 'on change slider-id'
            },
            onEnd: function(id) {
                console.log('on end ' + id); // logs 'on end slider-id'
            }
        }
    };
*/

    $scope.slider = {
        value: 100,
        options: {
            id: 'slider-id',
            onStart: function(id) {
                console.log('on start ' + id); // logs 'on start slider-id'
            },
            onChange: function(id) {
                console.log('on change ' + id, $scope.slider.value); // logs 'on change slider-id'
            },
            onEnd: function(id) {
                console.log('on end ' + id); // logs 'on end slider-id'
            }
        }
    };


});

