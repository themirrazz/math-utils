var sums = [null];
var sh = Number(prompt('How many dice are you going to roll?'))||1;
for(var f = 0; f < sh; f++) {
    for(var u = 0; u < 6; u++) {
        sums.push(0);
    }
}

function dice(k, z) {
    for(var n = 1; n < 7; n++) {
        if(z === sh) {
            sums[(k+n)] += 1;
        } else {
            dice(k+n, z+1);
        }
    }
}

dice(0, 1);

var g = 0;

for(var z = 1; z < sums.length; z++) {
    g += sums[z];
}

sums.forEach((prob,sum) => {
    if(sum===0) {return}
    console.log(`Probability of ${sum}: ${prob}/${g} (${prob/g}%)`)
});
