#!/bin/bash

HOME_DIR=$(pwd)

echo "Be patient. It may take a few minutes."

echo "Installing packages and compiling 0.16..."
cd $HOME_DIR/todomvc/elm16
rm -rf node_modules
npm i elm@0.16.0
rm -rf ~/.elm
node_modules/.bin/elm-package install -y
node_modules/.bin/elm-make Todo.elm --output=elm.js
echo "Done."

echo "Installing packages and compiling 0.17..."
cd $HOME_DIR/todomvc/elm17
rm -rf node_modules
npm i elm@alpha
rm -rf elm-stuff
rm -rf ~/.elm
node_modules/.bin/elm-package install -y
node_modules/.bin/elm-make Todo.elm --output=elm.js
echo "Done."

cd $HOME_DIR
npm i node-static > /dev/null
node_modules/.bin/static .
