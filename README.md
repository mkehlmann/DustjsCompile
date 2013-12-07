DustjsCompile
=============

#### Installation

```
$ npm install dustjscompile

//to be able to use the 'dustjscompile' command anywhere, install globally with:

$ npm install -g dustjscompile
```

#### Features

+ Precompilation of dustjs templates (http://linkedin.github.io/dustjs/)
+ Build a single file from a directory of uncompiled templates



#### Usage 

```
dustjscopmile uncompiledDirectory compiledDirectory [concatFile]
```

If you have the following file structure
```
DustjsCompile.js
/public
  /templates
  /compiledTemplates
```

Your usage would be:
```
dustjscompile /public/templates/ /public/compiledTemplates/
```

If you want to have all of the compiled templates concatenated into a single file , pass a 3 parameter:
```
dustjscompile /public/templates/ /public/compiledTempates/ /public/bundle.js
```
This will create 'bundle.js'
