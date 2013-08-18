#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    dust = require('dustjs-linkedin');

var inpDir = __dirname + process.argv[2];
var outDir = __dirname + process.argv[3];

//If optional argument passed, initialize path and clear file
if (process.argv[4]) {
    var destFile = __dirname + process.argv[4];
    if (fs.existsSync(destFile)) {
        fs.unlinkSync(destFile);
    }
}

//Loop through input directory, for each file compile dust and write to identical file in output directory
//If optional destination file was passed, append compiled output of each file to it
fs.readdir(inpDir,function(err,files){
    if (err) throw err;
    files.forEach(function(filename){
        fs.readFile(inpDir + filename,'utf-8',function(err,data){
            if (err) throw err;
            
            var output = dust.compile(data, path.basename(filename, '.dust'));
            
            fs.writeFile(outDir + filename, output, function (err) {
              if (err) throw err;
              console.log(filename + ' compiled!');
            });

            if (destFile) {
                fs.appendFile(destFile, output, function (err) {
                  if (err) throw err;
                  console.log('The compiled template ' + filename + ' was appended to ' + path.basename(destFile));
                });
            }
        });
    });
});