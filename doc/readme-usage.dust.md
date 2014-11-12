##Installation

Install `{name}`:
```
npm install -g {name}
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