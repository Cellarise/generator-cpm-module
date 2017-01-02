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