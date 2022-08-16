# cron-parser

Cron parser

# Requirements

Nodejs - https://nodejs.org/en/download/
NPM - installed as part of Node

# How to

Before running the program, make sure that npm modules are installed by running:

```
npm i
```

To run a command:

```
node . "*/15 0 1,15 * 1-5 /usr/bin/find"
```

`node . "{your command}"` - this runs `index.js` file in node and passes your command as first argument

To run unit tests:

```
npm run test
```
