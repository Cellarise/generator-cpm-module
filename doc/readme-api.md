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