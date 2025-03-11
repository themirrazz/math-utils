var sums = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(var i = 1; i < 7; i++) {
    for(var k = 1; k < 7; k++) {
        sums[(k+i)] += 1;
    }
};

var g = 0;

for(var z = 1; z < sums.length; z++) {
    g += sums[z];
}

sums.forEach((prob,sum) => {
    if(sum===0) {return}
    console.log(`Probability of ${sum}: ${prob}/${g} (${prob/g}%)`)
});
