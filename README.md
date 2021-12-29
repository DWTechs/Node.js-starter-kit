# Node.js-starter-kit

This kit is a helper to start an Node.js REST API fast and easy.

It is shipped with Express, Multer, Passport, Typescript, CheckHard for types checking and Jest for testing.

There is also a docker-compose file to develop your app with Docker; and a Sonar config file.


### Install

```
npm i
```


### Launch
```
npm start
```

### Launch with Docker : 

```bash
$ docker-compose -f ./docker-compose.yml up -d
```

### Build
```
npm build
```

### Test
```
npm test
```

### Lint
```
npm run lint
```


### Stack

| Purpose | Choice | Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| Language | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| Libraries | [Express](https://expressjs.com/) | Web features
|  | [Passport](https://www.passportjs.org/) | Authentication
|  | [Morgan](https://www.npmjs.com/package/morgan) | Logs
| Package manager | [Npm](https://www.npmjs.com/get-npm) | default node.js package manager |
| Unit testing | [Jest](https://jestjs.io/) | delightful testing with a focus on simplicity |
| Runner | [Nodemon](https://nodemon.io/) | Automatically restart on source changes |
| Bundler | [Esbuild](https://esbuild.github.io/) | Build for production |