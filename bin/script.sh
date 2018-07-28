#!/bin/ bash

cp -r node_modules/feathericon/build/svg/ src/svg;
svgr -d src/icons src/svg --filename-case kebab;
node ./bin/build;
babel src --out-dir dist --ignore 'src/svg' --copy-files
