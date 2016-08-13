'use strict';

var jswalk = angular.module('jswalk', []);

jswalk.controller('tableController', function tableController($scope) {
    $scope.matrix = [
        [0.1, 0.7, 0, 0.2, 0, 0],
        [0.4, 0.3, 0.4, 0, 0, 0],
        [0, 0.4, 0.3, 0.4, 0, 0],
        [0.2, 0, 0.2, 0.4, 0.2, 0],
        [0, 0, 0, 0.3, 0.2, 0.5],
        [0.1, 0, 0, 0, 0.4, 0.5 ]
    ];
    $scope.list = ['', 'C4', 'D4', 'E4', 'G4', 'B4', 'C5'];

    $scope.table = {
        columns: [
        {
            heading: $scope.list[1],
            rows: $scope.matrix[0]
        }, {
            heading: $scope.list[2],
            rows: $scope.matrix[1]
        }, {
            heading: $scope.list[3],
            rows: $scope.matrix[2]
        }, {
            heading: $scope.list[4],
            rows: $scope.matrix[3]
        }, {
            heading: $scope.list[5],
            rows: $scope.matrix[4]
        }, {
            heading: $scope.list[6],
            rows: $scope.matrix[5]
        }
        ],
        headings: $scope.list
    };

    $scope.play = function(pitch) {
        jam($scope.matrix, pitch, $scope.list.slice(1,7));
    };
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

var beats = [0.125, 0.25, 0.5, 1, 1.5];
var bMatrix = [[0.4, 0, 0.1, 0.1, 0.4],
               [0, 0.5, 0.3, 0.1, 0.1],
               [0, 0.2, 0.5, 0.2, 0.1],
               [0, 0,   0.5, 0.3, 0.2],
               [0, 0,   0.5, 0.3, 0.2]];
var synth = new Tone.Synth().toMaster();
Tone.Transport.bpm.value = 120;

var jam = function(mat, start, list) {
    var random_item = 0;
    var random_item2 = 0;
    var weight = mat[0];
    var bWeight = bMatrix[0];
    var note = start || 'C4';
    var beat = 0.25;
    var sched = Tone.now();
    var i = 0;
    while (true) {
        if ((note === 'C4' || note === 'C5') && i >= 12) {
            synth.triggerAttackRelease(note, '1', sched);
            break;
        }
        if (note !== '') {
            synth.triggerAttackRelease(note, beat, sched);
        }
        sched += beat;

        random_item = getRandomItem(list, weight);
        note = list[random_item];
        weight = mat[random_item];

        random_item2 = getRandomItem(beats, bWeight);
        beat = beats[random_item2];
        bWeight = bMatrix[random_item2];
        i++;
    }
};
