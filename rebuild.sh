#!/bin/bash

HOME_DIR=$(pwd)

cd $HOME_DIR/todomvc/elm16
npm i elm@0.16.0
rm -rf ~/.elm
node_modules/.bin/elm-package install -y
node_modules/.bin/elm-make Todo.elm --output=elm.js

cd $HOME_DIR/todomvc/elm17
npm i elm@alpha
rm -rf ~/.elm
node_modules/.bin/elm-package install -y
node_modules/.bin/elm-make Todo.elm --output=elm.js

cd $HOME_DIR
npm i node-static
node_modules/.bin/static .
