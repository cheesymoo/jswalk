'use strict';

var jswalk = angular.module('jswalk', []);
var list = ['', 'C4', 'D4', 'E4', 'G4', 'B4', 'C5'];
var matrix = [
    [0.1, 0.7, 0, 0.2, 0, 0],
    [0.4, 0.3, 0.4, 0, 0, 0],
    [0, 0.4, 0.3, 0.4, 0, 0],
    [0.2, 0, 0.2, 0.4, 0.2, 0],
    [0, 0, 0, 0.3, 0.2, 0.5],
    [0.1, 0, 0, 0, 0.4, 0.5 ]
];

jswalk.controller('matrixController', function matrixController($scope) {
    $scope.matrix = {
        columns: [
        {
            heading: list[1],
            rows: matrix[0]
        }, {
            heading: list[2],
            rows: matrix[1]
        }, {
            heading: list[3],
            rows: matrix[2]
        }, {
            heading: list[4],
            rows: matrix[3]
        }, {
            heading: list[5],
            rows: matrix[4]
        }, {
            heading: list[6],
            rows: matrix[5]
        }
        ],
        headings: list
    }
});

var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};

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

var synth = new Tone.Synth().toMaster();
Tone.Transport.bpm.value = 120

var jam = function(mat) {
    var random_item = 0;
    var weight = mat[0];
    var note = 'C4';
    var now = Tone.now();
    var sched = now;
    for (var i = 0; i < 20; i++) {
        random_item = getRandomItem(list, weight);
        note = list[random_item];
        sched += 0.25;
        if (note !== '') {
            synth.triggerAttackRelease(note, 0.25, sched);
        }
        weight = mat[random_item];
    }
};

var play = function() {
    jam(matrix);
};

