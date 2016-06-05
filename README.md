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
        <td colspan=4><strong>Version: 0.1.22 - released 2016-06-06</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-41</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.21 - released 2016-05-03</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-40</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.20 - released 2015-12-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-39</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.19 - released 2015-11-13</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-38</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.18 - released 2015-08-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-37</td>
            <td><p>Package: Update development dependencies and configure for travis-ci</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-36</td>
            <td><p>Package: Update development dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-35</td>
            <td><p>Package: Update jsdoc2markdown and regenerate documentation</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.17 - released 2015-04-15</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-34</td>
            <td><p>Package: Fix test case failures after dependencies update</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-33</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.16 - released 2015-02-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-32</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-31</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-29</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-30</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-27</td>
            <td><p>Package: Update copyright and license</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-28</td>
            <td><p>Package: Update directory compare tests</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-26</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.15 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-25</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.14 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-24</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.13 - released 2014-11-15</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-23</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.12 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-22</td>
            <td><p>Package: Fix package.json repository property</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.11 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-21</td>
            <td><p>Tests: Update Temp folder clear teardown function</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.10 - released 2014-11-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-20</td>
            <td><p>Package: Add packageJSON option for runtime setting of package.json properties</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-19</td>
            <td><p>Package: Add repository prompt and use to set package.json repository</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.9 - released 2014-11-10</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-18</td>
            <td><p>Package: Error thrown due to missing files</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.8 - released 2014-11-09</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-17</td>
            <td><p>Package: Refactor actions.js to improve readability</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.7 - released 2014-11-05</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">GENMOD-16</td>
            <td><p>Package: Main directive in package.json points to invalid path</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-15</td>
            <td><p>Package: Remove modules incorrectly specified as development dependencies in package.json</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2014-11-04</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">GENMOD-14</td>
            <td><p>Templates: Add eslintrc, .gitignore and .npmignore configuration files</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2014-11-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-13</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-11-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-9</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-10-31</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-7</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-5</td>
            <td><p>Package: Update usage readme documentation</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-4</td>
            <td><p>Package: Fix test step process.cwd() change side effect</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-10-30</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10418&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">GENMOD-3</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.nhvr.net:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
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
[generator-cpm-module@0.1.21](&quot;https://github.com/Cellarise/generator-cpm-module&quot;) - &quot;MIT License (MIT)&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.

