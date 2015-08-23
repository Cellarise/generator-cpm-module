# generator-cpm-module
[![view on npm](http://img.shields.io/npm/v/generator-cpm-module.svg?style=flat)](https://www.npmjs.org/package/generator-cpm-module)
[![npm module downloads per month](http://img.shields.io/npm/dm/generator-cpm-module.svg?style=flat)](https://www.npmjs.org/package/generator-cpm-module)
[![Dependency status](https://david-dm.org/Cellarise/generator-cpm-module.svg?style=flat)](https://david-dm.org/Cellarise/generator-cpm-module)
[![Build Status](https://travis-ci.org/Cellarise/generator-cpm-module.svg?branch=master)](https://travis-ci.org/Cellarise/generator-cpm-module)
[![Code
Climate](https://codeclimate.com/github/Cellarise/generator-cpm-module/badges/gpa.svg)](https://codeclimate.com/github/Cellarise/generator-cpm-module)
[![Test Coverage](https://codeclimate.com/github/Cellarise/generator-cpm-module/badges/coverage.svg)](https://codeclimate.com/github/Cellarise/generator-cpm-module/badges/coverage.svg)

> Yeoman generator for Cellarise modules


##Installation

Install `generator-cpm-module`:
```
npm install -g generator-cpm-module
```


##Usage

Run `yo cpm-module`:
```
yo cpm-module
```


##Compose

Use the composeWith method inside another generator to run this generator with two available options:

 * packageJSON - a json object containing properties to be added to the package.json file created for the project
 * skip-welcome-message - a boolean flag to skip the welcome message

```
this.composeWith("cpm-module", {
  "options": {
    "skip-welcome-message": true,
    "packageJSON": this.src.readJSON('./package.json')
  }
}, {
  "local": require.resolve("generator-cpm-module")
});
```


## API
### Modules
<dl>
<dt><a href="#module_cpm-module">cpm-module</a></dt>
<dd><p>Yeoman generator for Cellarise modules</p>
</dd>
</dl>
### Functions
<dl>
<dt><a href="#validateProjectName">`validateProjectName(name)`</a> ⇒ <code>String</code> | <code>Boolean</code></dt>
<dd><p>Validate application (module) name</p>
</dd>
<dt><a href="#validateCode">`validateCode(code)`</a> ⇒ <code>String</code> | <code>Boolean</code></dt>
<dd><p>Validate project code</p>
</dd>
</dl>
<a name="module_cpm-module"></a>
### cpm-module
Yeoman generator for Cellarise modules
**Example**  
```none
## Generators

Available generators:

* [cpm-module](#app) (aka [cpm-module:app](#app))


### App
Sets up a new Cellarise module, generating all the boilerplate code to fast track development.

```

-

<a name="validateProjectName"></a>
### `validateProjectName(name)` ⇒ <code>String</code> &#124; <code>Boolean</code>
Validate application (module) name

**Kind**: global function  
**Returns**: <code>String</code> &#124; <code>Boolean</code> - true if valid name or a message identifying the validation error  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | application name |


-

<a name="validateCode"></a>
### `validateCode(code)` ⇒ <code>String</code> &#124; <code>Boolean</code>
Validate project code

**Kind**: global function  
**Returns**: <code>String</code> &#124; <code>Boolean</code> - true if valid name or a message identifying the validation error  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>String</code> | The user input |


-

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
<tr>
        <td colspan=4><strong>Version: 0.1.18 - released 2015-08-23</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-36</td>
            <td><p>Package: Update development dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-35</td>
            <td><p>Package: Update jsdoc2markdown and regenerate documentation</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.17 - released 2015-04-15</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-34</td>
            <td><p>Package: Fix test case failures after dependencies update</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-33</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.16 - released 2015-02-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-32</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-31</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-29</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-30</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-27</td>
            <td><p>Package: Update copyright and license</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-28</td>
            <td><p>Package: Update directory compare tests</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-26</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.15 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-25</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.14 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-24</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.13 - released 2014-11-15</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-23</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.12 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-22</td>
            <td><p>Package: Fix package.json repository property</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.11 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-21</td>
            <td><p>Tests: Update Temp folder clear teardown function</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.10 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-20</td>
            <td><p>Package: Add packageJSON option for runtime setting of package.json properties</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-19</td>
            <td><p>Package: Add repository prompt and use to set package.json repository</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.9 - released 2014-11-10</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-18</td>
            <td><p>Package: Error thrown due to missing files</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.8 - released 2014-11-09</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-17</td>
            <td><p>Package: Refactor actions.js to improve readability</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.7 - released 2014-11-05</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-16</td>
            <td><p>Package: Main directive in package.json points to invalid path</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-15</td>
            <td><p>Package: Remove modules incorrectly specified as development dependencies in package.json</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2014-11-04</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-14</td>
            <td><p>Templates: Add eslintrc, .gitignore and .npmignore configuration files</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2014-11-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-13</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-11-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-9</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-10-31</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-7</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-5</td>
            <td><p>Package: Update usage readme documentation</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-4</td>
            <td><p>Package: Fix test step process.cwd() change side effect</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-3</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">GENMOD-2</td>
            <td><p>Package: Add default generator for modules</p><p>As a developer
I can scaffold modules automatically
So that I can efficiently and reliably setup a new module</p></td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2015 Cellarise
## Dependencies
[abbrev@1.0.7](&quot;git+ssh://git@github.com/isaacs/abbrev-js&quot;) - &quot;ISC&quot;, [amdefine@1.0.0](&quot;git+https://github.com/jrburke/amdefine&quot;) - &quot;BSD-3-Clause AND MIT&quot;, [ansi-regex@0.2.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-regex@1.1.1](&quot;git+https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-regex@2.0.0](&quot;git+https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@1.1.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [ansi-styles@2.1.0](&quot;git+https://github.com/chalk/ansi-styles&quot;) - &quot;MIT&quot;, [archive-type@3.0.1](&quot;git+https://github.com/kevva/archive-type&quot;) - &quot;MIT&quot;, [array-differ@1.0.0](&quot;https://github.com/sindresorhus/array-differ&quot;) - &quot;MIT&quot;, [array-union@1.0.1](&quot;git+https://github.com/sindresorhus/array-union&quot;) - &quot;MIT&quot;, [array-uniq@1.0.2](&quot;git+https://github.com/sindresorhus/array-uniq&quot;) - &quot;MIT&quot;, [ast-query@1.0.1](&quot;https://github.com/SBoudrias/AST-query&quot;) - &quot;MIT&quot;, [async@0.9.2](&quot;git+https://github.com/caolan/async&quot;) - &quot;MIT&quot;, [async@1.4.2](&quot;git+https://github.com/caolan/async&quot;) - &quot;MIT&quot;, [balanced-match@0.2.0](&quot;https://github.com/juliangruber/balanced-match&quot;) - &quot;MIT&quot;, [beeper@1.1.0](&quot;git+https://github.com/sindresorhus/beeper&quot;) - &quot;MIT&quot;, [binaryextensions@1.0.0](&quot;http://github.com/bevry/binaryextensions&quot;) - &quot;MIT&quot;, [bl@1.0.0](&quot;git+https://github.com/rvagg/bl&quot;) - &quot;MIT&quot;, [boolbase@1.0.0](&quot;https://github.com/fb55/boolbase&quot;) - &quot;ISC&quot;, [brace-expansion@1.1.0](&quot;https://github.com/juliangruber/brace-expansion&quot;) - &quot;MIT&quot;, [buffer-to-vinyl@1.0.1](&quot;git+https://github.com/kevva/buffer-to-vinyl&quot;) - &quot;MIT&quot;, [camelcase-keys@1.0.0](&quot;git+https://github.com/sindresorhus/camelcase-keys&quot;) - &quot;MIT&quot;, [camelcase@1.2.1](&quot;git+https://github.com/sindresorhus/camelcase&quot;) - &quot;MIT&quot;, [caw@1.1.0](&quot;git+https://github.com/kevva/caw&quot;) - &quot;MIT&quot;, [chalk@0.5.1](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [chalk@1.1.1](&quot;git+https://github.com/chalk/chalk&quot;) - &quot;MIT&quot;, [cheerio@0.19.0](&quot;https://github.com/cheeriojs/cheerio&quot;) - &quot;MIT&quot;, [class-extend@0.1.1](&quot;https://github.com/SBoudrias/class-extend&quot;) - &quot;MIT&quot;, [cli-table@0.3.1](&quot;git+https://github.com/Automattic/cli-table&quot;) - &quot;MIT*&quot;, [cli-width@1.0.1](&quot;git+ssh://git@github.com/knownasilya/cli-width&quot;) - &quot;ISC&quot;, [clone-stats@0.0.1](&quot;https://github.com/hughsk/clone-stats&quot;) - &quot;MIT&quot;, [clone@0.2.0](&quot;https://github.com/pvorb/node-clone&quot;) - &quot;MIT&quot;, [clone@1.0.2](&quot;https://github.com/pvorb/node-clone&quot;) - &quot;MIT&quot;, [co@3.1.0](&quot;https://github.com/visionmedia/co&quot;) - &quot;MIT&quot;, [code-point-at@1.0.0](&quot;git+https://github.com/sindresorhus/code-point-at&quot;) - &quot;MIT&quot;, [colors@1.0.3](&quot;git+ssh://git@github.com/Marak/colors.js&quot;) - &quot;MIT&quot;, [commander@2.8.1](&quot;git+https://github.com/tj/commander.js&quot;) - &quot;MIT&quot;, [concat-map@0.0.1](&quot;https://github.com/substack/node-concat-map&quot;) - &quot;MIT&quot;, [concat-stream@1.5.0](&quot;git+ssh://git@github.com/maxogden/concat-stream&quot;) - &quot;MIT&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [cross-spawn@0.2.9](&quot;https://github.com/IndigoUnited/node-cross-spawn&quot;) - &quot;MIT&quot;, [css-select@1.0.0](&quot;https://github.com/fb55/css-select&quot;) - &quot;BSD-like&quot;, [css-what@1.0.0](&quot;https://github.com/fb55/css-what&quot;) - &quot;BSD-like&quot;, [dargs@4.0.1](&quot;git+https://github.com/sindresorhus/dargs&quot;) - &quot;MIT&quot;, [dateformat@1.0.11](&quot;git+https://github.com/felixge/node-dateformat&quot;) - &quot;MIT&quot;, [debug@2.2.0](&quot;https://github.com/visionmedia/debug&quot;) - &quot;MIT&quot;, [decompress-tar@3.1.0](&quot;https://github.com/kevva/decompress-tar&quot;) - &quot;MIT&quot;, [decompress-tarbz2@3.1.0](&quot;https://github.com/kevva/decompress-tarbz2&quot;) - &quot;MIT&quot;, [decompress-targz@3.1.0](&quot;https://github.com/kevva/decompress-targz&quot;) - &quot;MIT&quot;, [decompress-unzip@3.3.0](&quot;git+https://github.com/kevva/decompress-unzip&quot;) - &quot;MIT&quot;, [decompress@2.3.0](&quot;https://github.com/kevva/decompress&quot;) - &quot;MIT&quot;, [deep-extend@0.2.11](&quot;https://github.com/unclechu/node-deep-extend&quot;) - &quot;MIT&quot;, [deep-is@0.1.3](&quot;git+ssh://git@github.com/thlorenz/deep-is&quot;) - &quot;MIT&quot;, [detect-conflict@1.0.0](&quot;https://github.com/SBoudrias/detect-conflict&quot;) - &quot;MIT&quot;, [detect-newline@1.0.3](&quot;https://github.com/sindresorhus/detect-newline&quot;) - &quot;MIT&quot;, [diff@1.4.0](&quot;https://github.com/kpdecker/jsdiff&quot;) - [&quot;BSD&quot;], [dom-serializer@0.1.0](&quot;https://github.com/cheeriojs/dom-renderer&quot;) - &quot;MIT&quot;, [domelementtype@1.1.3](&quot;https://github.com/FB55/domelementtype&quot;) - &quot;MIT*&quot;, [domelementtype@1.3.0](&quot;https://github.com/FB55/domelementtype&quot;) - &quot;MIT*&quot;, [domhandler@2.3.0](&quot;https://github.com/fb55/DomHandler&quot;) - &quot;MIT*&quot;, [domutils@1.4.3](&quot;https://github.com/FB55/domutils&quot;) - &quot;MIT*&quot;, [domutils@1.5.1](&quot;https://github.com/FB55/domutils&quot;) - &quot;MIT*&quot;, [download@4.2.0](&quot;git+https://github.com/kevva/download&quot;) - &quot;MIT&quot;, [duplexer2@0.0.2](&quot;https://github.com/deoxxa/duplexer2&quot;) - &quot;BSD&quot;, [duplexify@3.4.2](&quot;https://github.com/mafintosh/duplexify&quot;) - &quot;MIT&quot;, [each-async@1.1.1](&quot;git+https://github.com/sindresorhus/each-async&quot;) - &quot;MIT&quot;, [end-of-stream@1.0.0](&quot;https://github.com/mafintosh/end-of-stream&quot;) - &quot;MIT&quot;, [entities@1.0.0](&quot;https://github.com/fb55/node-entities&quot;) - &quot;BSD-like&quot;, [entities@1.1.1](&quot;https://github.com/fb55/node-entities&quot;) - &quot;BSD-like&quot;, [escape-string-regexp@1.0.3](&quot;git+https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [escodegen@1.6.1](&quot;git+ssh://git@github.com/estools/escodegen&quot;) - [&quot;BSD&quot;], [esprima@1.2.5](&quot;git+ssh://git@github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@2.5.0](&quot;git+https://github.com/jquery/esprima&quot;) - &quot;BSD-2-Clause&quot;, [estraverse@1.9.3](&quot;git+ssh://git@github.com/estools/estraverse&quot;) - [&quot;BSD&quot;], [esutils@1.1.6](&quot;git+ssh://git@github.com/Constellation/esutils&quot;) - [&quot;BSD&quot;], [fast-levenshtein@1.0.7](&quot;git+https://github.com/hiddentao/fast-levenshtein&quot;) - &quot;MIT&quot;, [fd-slicer@1.0.1](&quot;https://github.com/andrewrk/node-fd-slicer&quot;) - &quot;MIT&quot;, [figures@1.3.5](&quot;git+https://github.com/sindresorhus/figures&quot;) - &quot;MIT&quot;, [file-type@2.10.2](&quot;git+https://github.com/sindresorhus/file-type&quot;) - &quot;MIT&quot;, [filename-reserved-regex@1.0.0](&quot;https://github.com/sindresorhus/filename-reserved-regex&quot;) - &quot;MIT&quot;, [filenamify@1.2.0](&quot;https://github.com/sindresorhus/filenamify&quot;) - &quot;MIT&quot;, [find-index@0.1.1](&quot;https://github.com/jsdf/find-index&quot;) - &quot;MIT&quot;, [findup-sync@0.2.1](&quot;https://github.com/cowboy/node-findup-sync&quot;) - [&quot;MIT&quot;], [first-chunk-stream@1.0.0](&quot;git+https://github.com/sindresorhus/first-chunk-stream&quot;) - &quot;MIT&quot;, [formatio@1.1.1](&quot;https://github.com/busterjs/formatio&quot;) - &quot;MIT*&quot;, [gaze@0.5.1](&quot;https://github.com/shama/gaze&quot;) - [&quot;MIT&quot;], [generator-cpm-module@0.0.0](&quot;https://github.com/Cellarise/generator-cpm-module&quot;) - &quot;MIT License (MIT)&quot;, [get-proxy@1.0.1](&quot;https://github.com/kevva/get-proxy&quot;) - &quot;MIT&quot;, [get-stdin@1.0.0](&quot;https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [get-stdin@4.0.1](&quot;git+https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [github-username@1.1.1](&quot;https://github.com/sindresorhus/github-username&quot;) - &quot;MIT&quot;, [glob-stream@4.1.1](&quot;https://github.com/wearefractal/glob-stream&quot;) - [&quot;MIT&quot;], [glob-watcher@0.0.8](&quot;https://github.com/wearefractal/glob-watcher&quot;) - [&quot;MIT&quot;], [glob2base@0.0.12](&quot;https://github.com/wearefractal/glob2base&quot;) - [&quot;MIT&quot;], [glob@3.1.21](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [glob@4.3.5](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [glob@4.5.3](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [glob@5.0.14](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [globby@2.1.0](&quot;git+https://github.com/sindresorhus/globby&quot;) - &quot;MIT&quot;, [globule@0.1.0](&quot;https://github.com/cowboy/node-globule&quot;) - [&quot;MIT&quot;], [got@2.9.2](&quot;git+https://github.com/sindresorhus/got&quot;) - &quot;MIT&quot;, [graceful-fs@1.2.3](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [graceful-fs@3.0.8](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;ISC&quot;, [graceful-fs@4.1.2](&quot;git+https://github.com/isaacs/node-graceful-fs&quot;) - &quot;ISC&quot;, [graceful-readlink@1.0.1](&quot;https://github.com/zhiyelee/graceful-readlink&quot;) - &quot;MIT&quot;, [grouped-queue@0.3.0](&quot;https://github.com/SBoudrias/grouped-queue&quot;) - &quot;MIT&quot;, [gruntfile-editor@1.0.0](&quot;https://github.com/SBoudrias/gruntfile-editor&quot;) - &quot;MIT&quot;, [gulp-decompress@1.1.0](&quot;git+https://github.com/kevva/gulp-decompress&quot;) - &quot;MIT&quot;, [gulp-rename@1.2.2](&quot;https://github.com/hparra/gulp-rename&quot;) - [&quot;MIT&quot;], [gulp-util@3.0.6](&quot;git+https://github.com/wearefractal/gulp-util&quot;) - &quot;MIT&quot;, [has-ansi@0.1.0](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [has-ansi@2.0.0](&quot;git+https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [html-wiring@1.2.0](&quot;git+https://github.com/yeoman/html-wiring&quot;) - &quot;MIT&quot;, [htmlparser2@3.8.3](&quot;https://github.com/fb55/htmlparser2&quot;) - &quot;MIT&quot;, [indent-string@1.2.2](&quot;git+https://github.com/sindresorhus/indent-string&quot;) - &quot;MIT&quot;, [infinity-agent@2.0.3](&quot;git+https://github.com/floatdrop/infinity-agent&quot;) - &quot;MIT&quot;, [inflight@1.0.4](&quot;https://github.com/isaacs/inflight&quot;) - &quot;ISC&quot;, [inherits@1.0.0](&quot;https://github.com/isaacs/inherits&quot;) - , [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [ini@1.3.4](&quot;https://github.com/isaacs/ini&quot;) - &quot;ISC&quot;, [inquirer@0.8.5](&quot;git+https://github.com/sboudrias/Inquirer.js&quot;) - &quot;MIT&quot;, [is-absolute@0.1.7](&quot;https://github.com/jonschlinkert/is-absolute&quot;) - &quot;MIT&quot;, [is-bzip2@1.0.0](&quot;https://github.com/kevva/is-bzip2&quot;) - &quot;MIT&quot;, [is-finite@1.0.1](&quot;git+https://github.com/sindresorhus/is-finite&quot;) - &quot;MIT&quot;, [is-fullwidth-code-point@1.0.0](&quot;git+https://github.com/sindresorhus/is-fullwidth-code-point&quot;) - &quot;MIT&quot;, [is-gzip@1.0.0](&quot;https://github.com/kevva/is-gzip&quot;) - &quot;MIT&quot;, [is-natural-number@2.0.0](&quot;git+https://github.com/shinnn/is-natural-number.js&quot;) - [&quot;MIT&quot;], [is-obj@1.0.0](&quot;git+https://github.com/sindresorhus/is-obj&quot;) - &quot;MIT&quot;, [is-relative@0.1.3](&quot;https://github.com/jonschlinkert/is-relative&quot;) - [&quot;MIT&quot;], [is-stream@1.0.1](&quot;git+https://github.com/sindresorhus/is-stream&quot;) - &quot;MIT&quot;, [is-tar@1.0.0](&quot;https://github.com/kevva/is-tar&quot;) - &quot;MIT&quot;, [is-url@1.2.1](&quot;https://github.com/segmentio/is-url&quot;) - &quot;MIT&quot;, [is-utf8@0.2.0](&quot;git+https://github.com/wayfind/is-utf8&quot;) - &quot;BSD&quot;, [is-zip@1.0.0](&quot;https://github.com/kevva/is-zip&quot;) - &quot;MIT&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [istextorbinary@1.0.2](&quot;http://github.com/bevry/istextorbinary&quot;) - &quot;MIT&quot;, [levn@0.2.5](&quot;https://github.com/gkz/levn&quot;) - [&quot;MIT&quot;], [lodash._basecopy@3.0.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._basetostring@3.0.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._basevalues@3.0.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._getnative@3.9.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._isiterateecall@3.0.9](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reescape@3.0.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reevaluate@3.0.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reinterpolate@3.0.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.escape@3.0.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.isarguments@3.0.4](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.isarray@3.0.4](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.keys@3.1.2](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.restparam@3.6.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.template@3.6.2](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.templatesettings@3.1.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash@1.0.2](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash@2.4.2](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash@3.10.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [log-symbols@1.0.2](&quot;git+https://github.com/sindresorhus/log-symbols&quot;) - &quot;MIT&quot;, [lolex@1.3.1](&quot;http://github.com/sinonjs/lolex&quot;) - &quot;BSD-3-Clause&quot;, [lowercase-keys@1.0.0](&quot;git+https://github.com/sindresorhus/lowercase-keys&quot;) - &quot;MIT&quot;, [lru-cache@2.6.5](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;ISC&quot;, [map-obj@1.0.1](&quot;git+https://github.com/sindresorhus/map-obj&quot;) - &quot;MIT&quot;, [mem-fs-editor@1.2.3](&quot;https://github.com/SBoudrias/mem-fs-editor&quot;) - &quot;MIT&quot;, [mem-fs@1.1.0](&quot;git+https://github.com/SBoudrias/mem-fs&quot;) - &quot;MIT&quot;, [meow@3.3.0](&quot;git+https://github.com/sindresorhus/meow&quot;) - &quot;MIT&quot;, [merge-stream@0.1.8](&quot;https://github.com/grncdr/merge-stream&quot;) - &quot;MIT&quot;, [mime@1.3.4](&quot;git+https://github.com/broofa/node-mime&quot;) - [&quot;MIT&quot;], [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@2.0.10](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;ISC&quot;, [minimist@0.0.10](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@0.0.8](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@1.1.3](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [mkdirp@0.5.1](&quot;git+https://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [ms@0.7.1](&quot;https://github.com/guille/ms.js&quot;) - &quot;MIT*&quot;, [multipipe@0.1.2](&quot;git+https://github.com/juliangruber/multipipe&quot;) - &quot;MIT&quot;, [mute-stream@0.0.4](&quot;https://github.com/isaacs/mute-stream&quot;) - &quot;BSD&quot;, [nested-error-stacks@1.0.1](&quot;git+https://github.com/mdlavin/nested-error-stacks&quot;) - &quot;MIT&quot;, [nopt@3.0.3](&quot;git+ssh://git@github.com/isaacs/nopt&quot;) - &quot;ISC&quot;, [nth-check@1.0.1](&quot;https://github.com/fb55/nth-check&quot;) - &quot;BSD&quot;, [number-is-nan@1.0.0](&quot;git+https://github.com/sindresorhus/number-is-nan&quot;) - &quot;MIT&quot;, [object-assign@2.1.1](&quot;git+https://github.com/sindresorhus/object-assign&quot;) - &quot;MIT&quot;, [object-assign@3.0.0](&quot;git+https://github.com/sindresorhus/object-assign&quot;) - &quot;MIT&quot;, [once@1.3.2](&quot;https://github.com/isaacs/once&quot;) - &quot;ISC&quot;, [onetime@1.0.0](&quot;https://github.com/sindresorhus/onetime&quot;) - &quot;MIT&quot;, [optionator@0.5.0](&quot;https://github.com/gkz/optionator&quot;) - [&quot;MIT&quot;], [ordered-read-streams@0.1.0](&quot;https://github.com/armed/ordered-read-streams&quot;) - &quot;MIT&quot;, [os-homedir@1.0.1](&quot;git+https://github.com/sindresorhus/os-homedir&quot;) - &quot;MIT&quot;, [pad-component@0.0.1]([object Object]) - &quot;MIT*&quot;, [path-is-absolute@1.0.0](&quot;git+https://github.com/sindresorhus/path-is-absolute&quot;) - &quot;MIT&quot;, [pend@1.2.0](&quot;https://github.com/andrewrk/node-pend&quot;) - &quot;MIT&quot;, [pinkie-promise@1.0.0](&quot;git+https://github.com/floatdrop/pinkie-promise&quot;) - &quot;MIT&quot;, [pinkie@1.0.0](&quot;git+https://github.com/floatdrop/pinkie&quot;) - &quot;MIT&quot;, [prelude-ls@1.1.2](&quot;https://github.com/gkz/prelude-ls&quot;) - [&quot;MIT&quot;], [prepend-http@1.0.2](&quot;git+https://github.com/sindresorhus/prepend-http&quot;) - &quot;MIT&quot;, [pretty-bytes@1.0.4](&quot;https://github.com/sindresorhus/pretty-bytes&quot;) - &quot;MIT&quot;, [process-nextick-args@1.0.2](&quot;git+https://github.com/calvinmetcalf/process-nextick-args&quot;) - &quot;MIT&quot;, [rc@0.5.5](&quot;https://github.com/dominictarr/rc&quot;) - [&quot;BSD&quot;,&quot;MIT&quot;,&quot;Apache2&quot;], [read-all-stream@2.2.0](&quot;git+https://github.com/floatdrop/read-all-stream&quot;) - &quot;MIT&quot;, [read-all-stream@3.0.1](&quot;git+https://github.com/floatdrop/read-all-stream&quot;) - &quot;MIT&quot;, [read-chunk@1.0.1](&quot;https://github.com/sindresorhus/read-chunk&quot;) - &quot;MIT&quot;, [readable-stream@1.0.33](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@2.0.2](&quot;https://github.com/nodejs/readable-stream&quot;) - &quot;MIT&quot;, [readline2@0.1.1](&quot;git+https://github.com/SBoudrias/readline2&quot;) - &quot;MIT&quot;, [repeating@1.1.3](&quot;git+https://github.com/sindresorhus/repeating&quot;) - &quot;MIT&quot;, [replace-ext@0.0.1](&quot;https://github.com/wearefractal/replace-ext&quot;) - [&quot;MIT&quot;], [rimraf@2.4.2](&quot;https://github.com/isaacs/rimraf&quot;) - &quot;ISC&quot;, [run-async@0.1.0](&quot;https://github.com/SBoudrias/run-async&quot;) - &quot;MIT&quot;, [rx@2.5.3](&quot;git+https://github.com/Reactive-Extensions/RxJS&quot;) - &quot;Apache-2.0&quot;, [samsam@1.1.2](&quot;https://github.com/busterjs/samsam&quot;) - &quot;MIT*&quot;, [seek-bzip@1.0.5](&quot;https://github.com/cscott/seek-bzip&quot;) - &quot;MIT&quot;, [set-immediate-shim@1.0.1](&quot;git+https://github.com/sindresorhus/set-immediate-shim&quot;) - &quot;MIT&quot;, [setimmediate@1.0.2](&quot;https://github.com/YuzuJS/setImmediate&quot;) - &quot;MIT&quot;, [shelljs@0.4.0](&quot;https://github.com/arturadib/shelljs&quot;) - &quot;BSD*&quot;, [sigmund@1.0.1](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;ISC&quot;, [sinon@1.16.1](&quot;git+ssh://git@github.com/cjohansen/Sinon.JS&quot;) - &quot;BSD-3-Clause&quot;, [source-map@0.1.43](&quot;git+ssh://git@github.com/mozilla/source-map&quot;) - [&quot;BSD&quot;], [stat-mode@0.2.1](&quot;https://github.com/TooTallNate/stat-mode&quot;) - &quot;MIT&quot;, [statuses@1.2.1](&quot;git+https://github.com/jshttp/statuses&quot;) - &quot;MIT&quot;, [stream-combiner2@1.0.2](&quot;https://github.com/substack/stream-combiner2&quot;) - &quot;MIT&quot;, [string-width@1.0.1](&quot;git+https://github.com/sindresorhus/string-width&quot;) - &quot;MIT&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [strip-ansi@0.3.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-ansi@2.0.1](&quot;git+https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-ansi@3.0.0](&quot;git+https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-bom-stream@1.0.0](&quot;git+https://github.com/sindresorhus/strip-bom-stream&quot;) - &quot;MIT&quot;, [strip-bom@1.0.0](&quot;https://github.com/sindresorhus/strip-bom&quot;) - &quot;MIT&quot;, [strip-bom@2.0.0](&quot;git+https://github.com/sindresorhus/strip-bom&quot;) - &quot;MIT&quot;, [strip-dirs@1.1.1](&quot;git+https://github.com/shinnn/node-strip-dirs&quot;) - [&quot;MIT&quot;], [strip-json-comments@0.1.3](&quot;https://github.com/sindresorhus/strip-json-comments&quot;) - &quot;MIT&quot;, [strip-outer@1.0.0](&quot;https://github.com/sindresorhus/strip-outer&quot;) - &quot;MIT&quot;, [sum-up@1.0.2](&quot;git+https://github.com/shinnn/sum-up&quot;) - &quot;MIT&quot;, [supports-color@0.2.0](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [supports-color@2.0.0](&quot;git+https://github.com/chalk/supports-color&quot;) - &quot;MIT&quot;, [taketalk@1.0.0](&quot;git+https://github.com/stephenplusplus/taketalk&quot;) - &quot;MIT&quot;, [tar-stream@1.2.1](&quot;git+https://github.com/mafintosh/tar-stream&quot;) - &quot;MIT&quot;, [text-table@0.2.0](&quot;https://github.com/substack/text-table&quot;) - &quot;MIT&quot;, [textextensions@1.0.1](&quot;http://github.com/bevry/textextensions&quot;) - &quot;MIT&quot;, [through2-filter@2.0.0](&quot;git@github.com:brycebaril/through2-filter&quot;) - &quot;MIT&quot;, [through2@0.5.1](&quot;git+https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [through2@0.6.5](&quot;git+https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [through2@2.0.0](&quot;git+https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [through@2.3.8](&quot;git+https://github.com/dominictarr/through&quot;) - &quot;MIT&quot;, [timed-out@2.0.0](&quot;git+https://github.com/floatdrop/timed-out&quot;) - &quot;MIT&quot;, [traverse@0.6.6](&quot;https://github.com/substack/js-traverse&quot;) - &quot;MIT&quot;, [trim-repeated@1.0.0](&quot;https://github.com/sindresorhus/trim-repeated&quot;) - &quot;MIT&quot;, [tunnel-agent@0.4.1](&quot;git+https://github.com/mikeal/tunnel-agent&quot;) - &quot;Apache*&quot;, [type-check@0.3.1](&quot;https://github.com/gkz/type-check&quot;) - [&quot;MIT&quot;], [typedarray@0.0.6](&quot;https://github.com/substack/typedarray&quot;) - &quot;MIT&quot;, [underscore.string@3.1.1](&quot;git+https://github.com/epeli/underscore.string&quot;) - &quot;MIT&quot;, [underscore@1.8.3](&quot;https://github.com/jashkenas/underscore&quot;) - &quot;MIT&quot;, [unique-stream@2.2.0](&quot;git+https://github.com/eugeneware/unique-stream&quot;) - &quot;MIT&quot;, [untildify@2.1.0](&quot;git+https://github.com/sindresorhus/untildify&quot;) - &quot;MIT&quot;, [user-home@1.1.1](&quot;git+https://github.com/sindresorhus/user-home&quot;) - &quot;MIT&quot;, [util-deprecate@1.0.1](&quot;https://github.com/TooTallNate/util-deprecate&quot;) - &quot;MIT&quot;, [util@0.10.3](&quot;https://github.com/defunctzombie/node-util&quot;) - &quot;MIT&quot;, [uuid@2.0.1](&quot;git+https://github.com/shtylman/node-uuid&quot;) - , [vinyl-assign@1.2.0](&quot;git+https://github.com/kevva/vinyl-assign&quot;) - &quot;MIT&quot;, [vinyl-file@1.2.1](&quot;git+https://github.com/sindresorhus/vinyl-file&quot;) - &quot;MIT&quot;, [vinyl-fs@1.0.0](&quot;https://github.com/wearefractal/vinyl-fs&quot;) - [&quot;MIT&quot;], [vinyl@0.4.6](&quot;https://github.com/wearefractal/vinyl&quot;) - [&quot;MIT&quot;], [vinyl@0.5.1](&quot;https://github.com/wearefractal/vinyl&quot;) - &quot;MIT&quot;, [ware@1.3.0](&quot;https://github.com/segmentio/ware&quot;) - &quot;MIT&quot;, [word-wrap@1.1.0](&quot;git+https://github.com/jonschlinkert/word-wrap&quot;) - &quot;MIT&quot;, [wordwrap@0.0.3](&quot;https://github.com/substack/node-wordwrap&quot;) - &quot;MIT&quot;, [wrap-fn@0.1.4](&quot;https://github.com/MatthewMueller/wrap-fn&quot;) - &quot;MIT*&quot;, [wrappy@1.0.1](&quot;git+https://github.com/npm/wrappy&quot;) - &quot;ISC&quot;, [xdg-basedir@1.0.1](&quot;https://github.com/sindresorhus/xdg-basedir&quot;) - &quot;MIT&quot;, [xtend@3.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], [xtend@4.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], [yauzl@2.3.1](&quot;https://github.com/thejoshwolfe/yauzl&quot;) - &quot;MIT&quot;, [yeoman-assert@1.0.0](&quot;https://github.com/yeoman/yeoman-assert&quot;) - &quot;BSD&quot;, [yeoman-environment@1.2.7](&quot;git+https://github.com/yeoman/environment&quot;) - &quot;BSD-2-Clause&quot;, [yeoman-generator@0.19.2](&quot;https://github.com/yeoman/generator&quot;) - &quot;BSD&quot;, [yeoman-welcome@1.0.1](&quot;https://github.com/yeoman/yeoman-welcome&quot;) - &quot;MIT&quot;, [yosay@1.0.5](&quot;git+https://github.com/yeoman/yosay&quot;) - &quot;BSD-2-Clause&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.
