'use strict';

var jswalk = angular.module('jswalk', []);

jswalk.controller('matrixController', function matrixController($scope) {
    $scope.matrix = [
        {
            heading: 'sa',
            rows: [0.1, 0.7, 0, 0.2, 0, 0]
        }, {
            heading: 're',
            rows: [0.4, 0.3, 0.4, 0, 0, 0]
        }, {
            heading: 'ga',
            rows: [0, 0.4, 0.3, 0.4, 0, 0]
        }, {
            heading: 'pa',
            rows: [0.2, 0, 0.2, 0.4, 0.2, 0]
        }, {
            heading: 'ni',
            rows: [0, 0, 0, 0.3, 0.2, 0.5]
        }, {
            heading: 'sa\'',
            rows: [0.1, 0, 0, 0, 0.4, 0.5]
        }
    ];
});
/*
var rand = function(min, max) {
    return Math.random() * (max - min) + min;
}

var getRandomItem = function(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;

    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return i;
        }
    }

};

var list = ['do', 're', 'mi'];

var jam = function(mat) {
    var random_item = 0;
    var weight = mat[0];
    for (var i = 0; i < 20; i++) {
        random_item = getRandomItem(list, weight);
        console.log(list[random_item]);
        weight = mat[random_item];
    }
}

var updateCell = function(id) {
    debugger
}

var getMatrix = function() {
    var table = document.getElementById("matrix");
    var rowLength = table.rows.length;
    var matrix = [[0,0,0],[0,0,0],[0,0,0]];
    var item = 0;

    for (i = 0; i < rowLength; i++){
        var oCells = table.rows.item(i).cells;
        var cellLength = oCells.length;

        for(var j = 0; j < cellLength; j++){
           item = oCells.item(j).innerHTML;
           //matrix[i-1][j-1] = oCells.item(j).innerHTML;
        }
    }
    return matrix;
}

var play = function() {
    jam(getMatrix());
}
*/
