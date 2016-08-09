var matrix = [[0.5,  0.25, 0.25],
              [0.5,  0,    0.5],
              [0.25, 0.25, 0.5]];

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

jam(matrix);
