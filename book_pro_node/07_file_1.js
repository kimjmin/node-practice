var fs = require("fs");
fs.stat("/data/EDAMS/files/candoit/kimjmin@gmail.com/20140804_LOG_CJENM.csv", function(err, stats){
  if(err){ throw err; }

  console.log(stats);
});
