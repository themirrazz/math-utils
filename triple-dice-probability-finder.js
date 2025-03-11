var sums = [null];
for(var u = 0; u < 18; u++) {sums.push(0);}

for(var i = 1; i < 7; i++) {
    for(var k = 1; k < 7; k++) {
        for(var n = 1; n < 7; n++) {
            sums[(k+i+n)] += 1;
        }
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
