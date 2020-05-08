#!/usr/bin/env sh

echo "\e[34mRemoving old declarations..."
rm -rf ./dist/types
mkdir -p ./dist/types
echo "\e[92mDone"

echo "\e[34mGenerating main declarations..."
tsc ./src/*.ts --emitDeclarationOnly --skipLibCheck --declaration --outDir ./dist/types/
echo "\e[92mDone"
