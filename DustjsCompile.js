#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    dust = require('dustjs-linkedin');

var inpDir = process.argv[2];
var outDir = process.argv[3];

fs.readdir(__dirname + inpDir,function(err,files){
    if (err) throw err;
    files.forEach(function(file){
        console.log(file);
        fs.readFile(__dirname + inpDir + file,'utf-8',function(err,data){
            if (err) throw err;
            var output = dust.compile(data, path.basename(file, '.dust'));
            console.log(output);
            fs.writeFile(__dirname + outDir + file, output, function (err) {
              if (err) throw err;
              console.log('It\'s saved!');
            });
        });
    });
});