# HUSKY Config

In case kusky hook pre-commit will not work following steps helped me

````- npm install -D husky
- npm set-script prepare "husky install" && npm
- run prepare

- npx husky add .husky/pre-commit "npx lint-staged"

- git commit -m "added husky and lint-stagged"
// here you will notice the lint-staged checking the files with help of husky```

[link] [https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit]
````
