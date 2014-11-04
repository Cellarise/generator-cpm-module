# generator-cpm-module
[![view on npm](http://img.shields.io/npm/v/generator-cpm-module.svg?style=flat)](https://www.npmjs.org/package/generator-cpm-module)
[![npm module downloads per month](http://img.shields.io/npm/dm/generator-cpm-module.svg?style=flat)](https://www.npmjs.org/package/generator-cpm-module)
[![Dependency status](https://david-dm.org/Cellarise/generator-cpm-module.svg?style=flat)](https://david-dm.org/Cellarise/generator-cpm-module)
[![Coverage](https://img.shields.io/badge/coverage-84%25_skipped:0%25-green.svg?style=flat)](https://www.npmjs.org/package/generator-cpm-module)

> Yeoman generator for Cellarise modules


##Installation

Install `generator-cpm-module`:
```
npm install -g generator-cpm-module
```


##Usage

Run `yo cpm-module`, optionally passing an app name:
```
yo cpm-module [app-name]
```



# API
#Index

**Modules**

* [cpm-module](#module_cpm-module)

**Functions**

* [validateProjectName(name)](#validateProjectName)
* [validateCode(code)](#validateCode)
 
<a name="module_cpm-module"></a>
#cpm-module
Yeoman generator for Cellarise modules

**Example**  
## Generators

Available generators:

* [cpm-module](#app) (aka [cpm-module:app](#app))


### App
Sets up a new Cellarise module, generating all the boilerplate code to fast track development.


<a name="validateProjectName"></a>
#validateProjectName(name)
Validate application (module) name

**Params**

- name `String` - application name  

**Returns**: `String` | `Boolean` - true if valid name or a message identifying the validation error  
<a name="validateCode"></a>
#validateCode(code)
Validate project code

**Params**

- code `String` - The user input  

**Returns**: `String` | `Boolean` - true if valid name or a message identifying the validation error  

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


#Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
      <tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2014-11-04</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-14</td>
            <td>Templates: Add eslintrc, .gitignore and .npmignore configuration files</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2014-11-01</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-13</td>
            <td>Package: Update package dependencies</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-11-01</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-9</td>
            <td>Package: Update package dependencies</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-10-31</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-7</td>
            <td>Package: Update package dependencies</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-10-30</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-5</td>
            <td>Package: Update usage readme documentation</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-10-30</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-4</td>
            <td>Package: Fix test step process.cwd() change side effect</td>
          </tr>
        
    
      <tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-10-30</strong></td>
      </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-3</td>
            <td>Package: Update package dependencies</td>
          </tr>
        
          <tr>
            <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype'/></td>
            <td style="width:80px;text-align:center;">Feature</td>
            <td style="width:80px;text-align:left;">GENMOD-2</td>
            <td>Package: Add default generator for modules</td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2014 John Barry

## Dependencies
[CSSselect@0.4.1](&quot;https://github.com/fb55/CSSselect&quot;) - &quot;BSD-like&quot;, [CSSwhat@0.4.7](&quot;https://github.com/FB55/CSSwhat&quot;) - &quot;BSD-like&quot;, [abbrev@1.0.5](&quot;http://github.com/isaacs/abbrev-js&quot;) - &quot;MIT&quot;, [adm-zip@0.4.4](&quot;https://github.com/cthackers/adm-zip&quot;) - [&quot;MIT&quot;], [amdefine@0.1.0](&quot;https://github.com/jrburke/amdefine&quot;) - [&quot;BSD&quot;,&quot;MIT&quot;], [ansi-regex@0.2.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-regex@1.1.0](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@1.0.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [ansi-styles@1.1.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [archive-type@1.0.4](&quot;https://github.com/kevva/archive-type&quot;) - &quot;MIT&quot;, [asn1@0.1.11](&quot;https://github.com/mcavage/node-asn1&quot;) - &quot;MIT*&quot;, [assert-plus@0.1.2]([object Object]) - &quot;MIT*&quot;, [ast-query@0.2.5](&quot;git@github.com:SBoudrias/AST-query&quot;) - &quot;MIT&quot;, [async@0.1.22](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [async@0.2.10](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [async@0.9.0](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [aws-sign2@0.5.0](&quot;https://github.com/mikeal/aws-sign&quot;) - &quot;Apache*&quot;, [bl@0.9.3](&quot;https://github.com/rvagg/bl&quot;) - &quot;MIT&quot;, [block-stream@0.0.7](&quot;https://github.com/isaacs/block-stream&quot;) - &quot;BSD&quot;, [boom@0.4.2](&quot;https://github.com/spumko/boom&quot;) - [&quot;BSD&quot;], [buffer-equal@0.0.1](&quot;https://github.com/substack/node-buffer-equal&quot;) - &quot;MIT&quot;, [buffertools@2.1.2](&quot;https://github.com/bnoordhuis/node-buffertools&quot;) - &quot;ISC&quot;, [bunker@0.1.2](&quot;https://github.com/substack/node-bunker&quot;) - &quot;MIT/X11&quot;, [burrito@0.2.12](&quot;https://github.com/substack/node-burrito&quot;) - &quot;BSD&quot;, [camelcase-keys@1.0.0](&quot;https://github.com/sindresorhus/camelcase-keys&quot;) - &quot;MIT&quot;, [camelcase@1.0.1](&quot;https://github.com/sindresorhus/camelcase&quot;) - &quot;MIT&quot;, [caseless@0.6.0](&quot;https://github.com/mikeal/caseless&quot;) - &quot;BSD&quot;, [chalk@0.4.0](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [chalk@0.5.1](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [charm@0.1.2](&quot;http://github.com/substack/node-charm&quot;) - &quot;MIT/X11&quot;, [cheerio@0.17.0](&quot;https://github.com/MatthewMueller/cheerio&quot;) - &quot;MIT*&quot;, [class-extend@0.1.1](&quot;https://github.com/SBoudrias/class-extend&quot;) - &quot;MIT&quot;, [cli-color@0.3.2](&quot;https://github.com/medikoo/cli-color&quot;) - , [combined-stream@0.0.7](&quot;https://github.com/felixge/node-combined-stream&quot;) - &quot;MIT*&quot;, [commander@2.4.0](&quot;https://github.com/visionmedia/commander.js&quot;) - &quot;MIT&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [cross-spawn@0.2.3](&quot;https://github.com/IndigoUnited/node-cross-spawn&quot;) - &quot;MIT&quot;, [cryptiles@0.2.2](&quot;https://github.com/hueniverse/cryptiles&quot;) - [&quot;BSD&quot;], [ctype@0.5.2]([object Object]) - &quot;MIT*&quot;, [d@0.1.1](&quot;https://github.com/medikoo/d&quot;) - &quot;MIT&quot;, [dank-copyfile@0.0.1](&quot;https://github.com/wankdanker/node-dank-copyFile&quot;) - &quot;MIT&quot;, [dargs@2.1.0](&quot;https://github.com/sindresorhus/dargs&quot;) - &quot;MIT&quot;, [debug@1.0.4](&quot;https://github.com/visionmedia/debug&quot;) - &quot;MIT*&quot;, [decompress-tar@1.0.3](&quot;https://github.com/kevva/decompress-tar&quot;) - &quot;MIT&quot;, [decompress-tarbz2@1.0.2](&quot;https://github.com/kevva/decompress-tarbz2&quot;) - &quot;MIT&quot;, [decompress-targz@1.0.3](&quot;https://github.com/kevva/decompress-targz&quot;) - &quot;MIT&quot;, [decompress-unzip@1.0.0](&quot;https://github.com/kevva/decompress-unzip&quot;) - &quot;MIT&quot;, [decompress@1.0.7](&quot;https://github.com/kevva/decompress&quot;) - &quot;MIT&quot;, [deep-equal@0.0.0](&quot;https://github.com/substack/node-deep-equal&quot;) - &quot;MIT/X11&quot;, [deep-is@0.1.3](&quot;http://github.com/thlorenz/deep-is&quot;) - &quot;MIT&quot;, [delayed-stream@0.0.5](&quot;https://github.com/felixge/node-delayed-stream&quot;) - &quot;MIT*&quot;, [diff@1.0.8](&quot;https://github.com/kpdecker/jsdiff&quot;) - [&quot;BSD&quot;], [difflet@0.2.6](&quot;https://github.com/substack/difflet&quot;) - &quot;MIT&quot;, [dom-serializer@0.0.1](&quot;https://github.com/cheeriojs/dom-renderer&quot;) - null, [domelementtype@1.1.3](&quot;https://github.com/FB55/domelementtype&quot;) - &quot;MIT*&quot;, [domhandler@2.2.1](&quot;https://github.com/fb55/DomHandler&quot;) - &quot;MIT*&quot;, [domutils@1.4.3](&quot;https://github.com/FB55/domutils&quot;) - &quot;MIT*&quot;, [domutils@1.5.0](&quot;https://github.com/FB55/domutils&quot;) - &quot;MIT*&quot;, [download@1.0.7](&quot;https://github.com/kevva/download&quot;) - &quot;MIT&quot;, [each-async@1.1.0](&quot;https://github.com/sindresorhus/each-async&quot;) - &quot;MIT&quot;, [ejs@0.8.8](&quot;https://github.com/visionmedia/ejs&quot;) - &quot;MIT*&quot;, [entities@1.0.0](&quot;https://github.com/fb55/node-entities&quot;) - &quot;BSD-like&quot;, [entities@1.1.1](&quot;https://github.com/fb55/node-entities&quot;) - &quot;BSD-like&quot;, [es5-ext@0.10.4](&quot;https://github.com/medikoo/es5-ext&quot;) - , [es6-iterator@0.1.1](&quot;https://github.com/medikoo/es6-iterator&quot;) - &quot;MIT&quot;, [es6-symbol@0.1.1](&quot;https://github.com/medikoo/es6-symbol&quot;) - &quot;MIT&quot;, [es6-weak-map@0.1.2](&quot;https://github.com/medikoo/es6-weak-map&quot;) - &quot;MIT&quot;, [escape-string-regexp@1.0.2](&quot;https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [escodegen@1.3.3](&quot;http://github.com/Constellation/escodegen&quot;) - [&quot;BSD&quot;], [esprima@1.1.1](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [estraverse@1.5.1](&quot;http://github.com/Constellation/estraverse&quot;) - [&quot;BSD&quot;], [esutils@1.0.0](&quot;http://github.com/Constellation/esutils&quot;) - [&quot;BSD&quot;], [event-emitter@0.3.1](&quot;https://github.com/medikoo/event-emitter&quot;) - , [figures@1.3.3](&quot;https://github.com/sindresorhus/figures&quot;) - &quot;MIT&quot;, [file-utils@0.2.1](&quot;https://github.com/SBoudrias/file-utils&quot;) - &quot;MIT&quot;, [filecompare@0.0.2](&quot;git@github.com:rook2pawn/node-filecompare&quot;) - &quot;BSD&quot;, [findup-sync@0.1.3](&quot;https://github.com/cowboy/node-findup-sync&quot;) - [&quot;MIT&quot;], [forever-agent@0.5.2](&quot;https://github.com/mikeal/forever-agent&quot;) - &quot;Apache*&quot;, [form-data@0.1.4](&quot;https://github.com/felixge/node-form-data&quot;) - [&quot;MIT&quot;], [fs-extra@0.11.1](&quot;https://github.com/jprichardson/node-fs-extra&quot;) - [&quot;MIT&quot;], [fstream@1.0.2](&quot;https://github.com/isaacs/fstream&quot;) - &quot;BSD&quot;, [gate@0.3.0](&quot;https://github.com/nakamura-to/gate&quot;) - &quot;MIT*&quot;, [generator-cpm-module@0.0.0](&quot;https://github.com/Cellarise/&quot;) - &quot;MIT License (MIT)&quot;, [get-stdin@0.1.0](&quot;https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [get-stdin@1.0.0](&quot;https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [get-stdin@3.0.0](&quot;https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [github-username@1.0.0](&quot;https://github.com/sindresorhus/github-username&quot;) - &quot;MIT&quot;, [glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [glob@4.0.6](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [graceful-fs@3.0.4](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [grouped-queue@0.3.0](&quot;https://github.com/SBoudrias/grouped-queue&quot;) - &quot;MIT&quot;, [gruntfile-editor@0.2.0](&quot;https://github.com/SBoudrias/gruntfile-editor&quot;) - &quot;MIT&quot;, [has-ansi@0.1.0](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [has-color@0.1.7](&quot;https://github.com/sindresorhus/has-color&quot;) - &quot;MIT&quot;, [hawk@1.1.1](&quot;https://github.com/hueniverse/hawk&quot;) - [&quot;BSD&quot;], [hive-component@0.0.1-a]([object Object]) - , [hive-configuration@0.0.1](&quot;https://github.com/thomasfr/node-configuration&quot;) - &quot;MIT*&quot;, [hive-loader@0.0.1]([object Object]) - , [hoek@0.9.1](&quot;https://github.com/spumko/hoek&quot;) - [&quot;BSD&quot;], [htmlparser2@3.7.3](&quot;https://github.com/fb55/htmlparser2&quot;) - &quot;MIT&quot;, [http-signature@0.10.0](&quot;https://github.com/joyent/node-http-signature&quot;) - &quot;MIT*&quot;, [iconv-lite@0.4.4](&quot;https://github.com/ashtuchkin/iconv-lite&quot;) - &quot;MIT&quot;, [indent-string@1.2.0](&quot;https://github.com/sindresorhus/indent-string&quot;) - &quot;MIT&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [inquirer@0.7.3](&quot;https://github.com/SBoudrias/Inquirer.js&quot;) - &quot;MIT&quot;, [is-7zip@1.0.0](&quot;https://github.com/kevva/is-7zip&quot;) - &quot;MIT&quot;, [is-absolute@0.1.5](&quot;https://github.com/jonschlinkert/is-absolute&quot;) - [&quot;MIT&quot;], [is-bzip2@1.0.0](&quot;https://github.com/kevva/is-bzip2&quot;) - &quot;MIT&quot;, [is-finite@1.0.0](&quot;https://github.com/sindresorhus/is-finite&quot;) - &quot;MIT&quot;, [is-gzip@1.0.0](&quot;https://github.com/kevva/is-gzip&quot;) - &quot;MIT&quot;, [is-integer@1.0.3](&quot;git@github.com:parshap/js-is-integer&quot;) - &quot;MIT&quot;, [is-rar@1.0.0](&quot;https://github.com/kevva/is-rar&quot;) - &quot;MIT&quot;, [is-relative@0.1.1](&quot;https://github.com/jonschlinkert/is-relative&quot;) - [&quot;MIT&quot;], [is-tar@1.0.0](&quot;https://github.com/kevva/is-tar&quot;) - &quot;MIT&quot;, [is-zip@0.1.0](&quot;https://github.com/kevva/is-zip&quot;) - &quot;MIT&quot;, [is-zip@1.0.0](&quot;https://github.com/kevva/is-zip&quot;) - &quot;MIT&quot;, [is@0.2.7](&quot;https://github.com/enricomarino/is&quot;) - &quot;MIT*&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [isbinaryfile@2.0.2](&quot;https://github.com/gjtorikian/isBinaryFile&quot;) - &quot;MIT*&quot;, [json-stringify-safe@5.0.0](&quot;https://github.com/isaacs/json-stringify-safe&quot;) - &quot;BSD&quot;, [jsonfile@2.0.0](&quot;git@github.com:jprichardson/node-jsonfile&quot;) - [&quot;MIT&quot;], [lodash@2.4.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [lru-queue@0.1.0](&quot;https://github.com/medikoo/lru-queue&quot;) - &quot;MIT&quot;, [map-obj@1.0.0](&quot;https://github.com/sindresorhus/map-obj&quot;) - &quot;MIT&quot;, [memoizee@0.3.8](&quot;https://github.com/medikoo/memoize&quot;) - &quot;MIT&quot;, [meow@1.0.0](&quot;https://github.com/sindresorhus/meow&quot;) - &quot;MIT&quot;, [meow@2.0.0](&quot;https://github.com/sindresorhus/meow&quot;) - &quot;MIT&quot;, [mime-types@1.0.2](&quot;https://github.com/expressjs/mime-types&quot;) - &quot;MIT&quot;, [mime@1.2.11](&quot;https://github.com/broofa/node-mime&quot;) - &quot;MIT*&quot;, [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@1.0.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimist@0.0.8](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@1.1.0](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [mkdirp@0.5.0](&quot;https://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [ms@0.6.2](&quot;https://github.com/guille/ms.js&quot;) - &quot;MIT*&quot;, [mute-stream@0.0.4](&quot;https://github.com/isaacs/mute-stream&quot;) - &quot;BSD&quot;, [ncp@0.6.0](&quot;https://github.com/AvianFlu/ncp&quot;) - &quot;MIT&quot;, [next-tick@0.2.2](&quot;https://github.com/medikoo/next-tick&quot;) - &quot;MIT&quot;, [node-dir-diff@0.0.1]([object Object]) - , [node-uuid@1.4.1](&quot;https://github.com/broofa/node-uuid&quot;) - , [node.extend@1.0.8](&quot;https://github.com/dreamerslab/node.extend&quot;) - [&quot;MIT&quot;,&quot;GPL&quot;], [node.flow@1.2.3](&quot;https://github.com/dreamerslab/node.flow&quot;) - [&quot;MIT&quot;], [nopt@2.2.1](&quot;http://github.com/isaacs/nopt&quot;) - &quot;MIT&quot;, [nopt@3.0.1](&quot;http://github.com/isaacs/nopt&quot;) - &quot;MIT&quot;, [oauth-sign@0.4.0](&quot;https://github.com/mikeal/oauth-sign&quot;) - &quot;Apache*&quot;, [object-assign@1.0.0](&quot;https://github.com/sindresorhus/object-assign&quot;) - &quot;MIT&quot;, [object-keys@0.4.0](&quot;https://github.com/ljharb/object-keys&quot;) - &quot;MIT&quot;, [once@1.3.1](&quot;https://github.com/isaacs/once&quot;) - &quot;BSD&quot;, [onetime@1.0.0](&quot;https://github.com/sindresorhus/onetime&quot;) - &quot;MIT&quot;, [pad-component@0.0.1]([object Object]) - &quot;MIT*&quot;, [punycode@1.3.2](&quot;https://github.com/bestiejs/punycode.js&quot;) - &quot;MIT&quot;, [qs@2.3.2](&quot;https://github.com/hapijs/qs&quot;) - [&quot;BSD&quot;], [read-chunk@1.0.0](&quot;https://github.com/sindresorhus/read-chunk&quot;) - &quot;MIT&quot;, [readable-stream@1.0.33](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readline2@0.1.0](&quot;https://github.com/SBoudrias/readline2&quot;) - &quot;MIT&quot;, [repeating@1.1.0](&quot;https://github.com/sindresorhus/repeating&quot;) - &quot;MIT&quot;, [request@2.47.0](&quot;https://github.com/request/request&quot;) - &quot;Apache-2.0&quot;, [rimraf@2.2.8](&quot;https://github.com/isaacs/rimraf&quot;) - &quot;MIT&quot;, [rmdir@1.0.4](&quot;https://github.com/dreamerslab/node.rmdir&quot;) - [&quot;MIT&quot;], [run-async@0.1.0](&quot;https://github.com/SBoudrias/run-async&quot;) - &quot;MIT&quot;, [runforcover@0.0.2](&quot;https://github.com/chrisdickinson/node-runforcover&quot;) - &quot;new BSD&quot;, [rx@2.3.14](&quot;https://github.com/Reactive-Extensions/RxJS&quot;) - [&quot;Apache License, Version 2.0&quot;], [seek-bzip@1.0.4](&quot;https://github.com/cscott/seek-bzip&quot;) - &quot;LGPL 2.1&quot;, [setimmediate@1.0.2](&quot;https://github.com/YuzuJS/setImmediate&quot;) - &quot;MIT&quot;, [shelljs@0.3.0](&quot;https://github.com/arturadib/shelljs&quot;) - &quot;BSD*&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [simple-bufferstream@0.0.4](&quot;https://github.com/rvagg/node-simple-bufferstream&quot;) - &quot;MIT&quot;, [slide@1.1.6](&quot;https://github.com/isaacs/slide-flow-control&quot;) - &quot;ISC&quot;, [sntp@0.2.4](&quot;https://github.com/hueniverse/sntp&quot;) - [&quot;BSD&quot;], [source-map@0.1.40](&quot;http://github.com/mozilla/source-map&quot;) - [&quot;BSD&quot;], [string-length@1.0.0](&quot;https://github.com/sindresorhus/string-length&quot;) - &quot;MIT&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [stringstream@0.0.4](&quot;https://github.com/mhart/StringStream&quot;) - &quot;MIT&quot;, [strip-ansi@0.1.1](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-ansi@0.3.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-ansi@2.0.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-dirs@0.1.1](&quot;https://github.com/shinnn/node-strip-dirs&quot;) - [&quot;MIT&quot;], [support@1.1.4](&quot;https://github.com/bingomanatee/node-support&quot;) - , [supports-color@0.2.0](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [taketalk@0.1.1](&quot;https://github.com/stephenplusplus/taketalk&quot;) - &quot;MIT&quot;, [tap@0.4.13](&quot;https://github.com/isaacs/node-tap&quot;) - &quot;MIT&quot;, [tar@1.0.2](&quot;https://github.com/isaacs/node-tar&quot;) - &quot;BSD&quot;, [temp-write@1.1.0](&quot;https://github.com/sindresorhus/temp-write&quot;) - &quot;MIT&quot;, [text-table@0.2.0](&quot;https://github.com/substack/text-table&quot;) - &quot;MIT&quot;, [through@2.3.6](&quot;https://github.com/dominictarr/through&quot;) - &quot;MIT&quot;, [timers-ext@0.1.0](&quot;https://github.com/medikoo/timers-ext&quot;) - &quot;MIT&quot;, [tough-cookie@0.12.1](&quot;https://github.com/goinstant/tough-cookie&quot;) - &quot;MIT&quot;, [traverse@0.5.2](&quot;https://github.com/substack/js-traverse&quot;) - &quot;MIT/X11&quot;, [traverse@0.6.6](&quot;https://github.com/substack/js-traverse&quot;) - &quot;MIT&quot;, [tunnel-agent@0.4.0](&quot;https://github.com/mikeal/tunnel-agent&quot;) - &quot;Apache*&quot;, [uglify-js@1.1.1](&quot;git@github.com:mishoo/UglifyJS&quot;) - null, [underscore.string@2.3.3](&quot;https://github.com/epeli/underscore.string&quot;) - [&quot;MIT&quot;], [underscore@1.3.3](&quot;https://github.com/documentcloud/underscore&quot;) - &quot;MIT*&quot;, [underscore@1.7.0](&quot;https://github.com/jashkenas/underscore&quot;) - [&quot;MIT&quot;], [uuid@2.0.1](&quot;https://github.com/shtylman/node-uuid&quot;) - , [ware@0.3.0](&quot;https://github.com/segmentio/ware&quot;) - &quot;MIT&quot;, [word-wrap@0.1.3](&quot;https://github.com/jonschlinkert/word-wrap&quot;) - [&quot;MIT&quot;], [wrappy@1.0.1](&quot;https://github.com/npm/wrappy&quot;) - &quot;ISC&quot;, [yamlish@0.0.6](&quot;https://github.com/isaacs/yamlish&quot;) - &quot;MIT&quot;, [yeoman-generator@0.17.7](&quot;https://github.com/yeoman/generator&quot;) - &quot;BSD&quot;, [yosay@1.0.0](&quot;https://github.com/yeoman/yosay&quot;) - &quot;BSD&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.