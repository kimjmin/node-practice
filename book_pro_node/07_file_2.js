/**
파일 라인 수 읽는 프로그램. 짦은 라인은 split 해도 되는데, 긴 라인은 하면 난리남.
*/

var filePath = '/data/EDAMS/files/candoit/kimjmin@gmail.com/20140804_LOG_CJENM.csv';
var strOpt = { flags: 'r',
  encoding: 'utf8',
  fd: null,
  mode: 0666,
  autoClose: true
}
var i;
var count = 0;
require('fs').createReadStream(filePath, strOpt)
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i){
      if (chunk[i] == '\n'){
        count++;
      }
    }
  })
  .on('end', function() {
    console.log("cnt : "+count);
  });


/**
var filePath = '/data/EDAMS/files/candoit/kimjmin@gmail.com/20140804_LOG_CJENM.csv';
var i;
var count = 0;
require('fs').createReadStream(filePath)
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i){
      if (chunk[i] == 10){
        //숫자 10 은 스트림 버퍼에서 \n 값임.
        count++;
      }
    }
  })
  .on('end', function() {
    console.log("cnt : "+count);
  });
*/
