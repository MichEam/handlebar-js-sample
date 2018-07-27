# handlebar-js-sample
How to use handlebar.js.

## inline template.
./iniline/index.html

## precompile template.
./precompiled/index.html

update and re-compile template.
```sh
$ npm install
$ node_modules/.bin/handlebars -e hbs ./precompiled/src/ --output ./precompiled/dist/template.js
```
