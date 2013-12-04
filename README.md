DustjsCompile
=============

Compile dust files in a directory to an output directory

Usage: node DustjsCompile.js uncompiledDirectory compiledDirectory [concatFile]

If you have the following file structure
```
DustjsCompile.js
/public
  /templates
  /compiledTemplates
```

Your usage would be:
```
node dustjscompile /public/templates/ /public/compiledTemplates/
```

If you want to have all of the compiled templates concatenated into a single file , pass a 3 parameter:
```
node dustjscompile /public/templates/ /public/compiledTempates/ /public/bundle.js
```
This will create 'bundle.js'
