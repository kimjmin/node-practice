/**
이건 뭔지 솔직히 잘 모르겠슴. 동작도 제대로 안 하는것 같고.
*/
var concat = require('concat-stream');
process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));
