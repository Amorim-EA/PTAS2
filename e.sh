#!/bin/sh

git init 

git config user.name @username

git config user.email @email

git remote add origin @repo_name

git add .
git commit -m "@message" 

git push origin master 

echo "Confira se os arquivos estão salvos no repositório do git"
echo "ul_repo"
