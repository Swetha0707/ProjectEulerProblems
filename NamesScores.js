var fs = require('fs');
/*

Problem Statement

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

fs.readFile('./names.txt', function(err, data) {
  solution(eval("[" + data.toString() + "]"));
});
    
    
    function solution(data) {

    data.sort((a, b) => (a > b) - (a < b));

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum+= asciiValue(data[i]) * (i + 1);
    }
    return sum;
}

function asciiValue(str) {

    var sum = 0;
    for (var i = str.length; i--; ) {
        sum+= str.charCodeAt(i) - 64;
    }
    return sum;
}