QUnit trial
===========

このプロジェクトは、お仕事で手直しすることになったQUnitのユニットテストを模倣したゴミプロジェクトです。

以下の目標を達成するためにいじくり回すためのスケルトンのようなものだと思われたし。

- ブラウザテストのCLI化
- テスト実行後のカバレッジ計測

Quick start
-----------

```sh
# install dependencies
npm install
```

Usage
-----

```sh
# lint code & fix all auto-fixable problems
npm run lint
# run test
npm run test
# run recoding code coverage
npm run coverage
```

when using docker.

```sh
docker build -t qunit-trial .

docker run -i --init --rm --cap-add=SYS_ADMIN --name qunit-trial qunit-trial npm run test
```