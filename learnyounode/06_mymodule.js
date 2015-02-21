var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {
  
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);

    //filter : 콜백 함수에 지정된 조건을 충족하는 배열의 요소를 반환합니다.
    //file 은 list 의 개별 요소.
    //jQuery : $("p").filter(".intro"); // 클래스가 intro 인 모든 <p> 요소 리턴. function() 도 가능.
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr;
    })

    callback(null, list);
  });

}
