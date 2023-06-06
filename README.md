yarn init -y
yarn add express
yarn add -D typescript @types/express ts-node-dev

npx eslint --init

yarn ts-node-dev ./src/index.ts
