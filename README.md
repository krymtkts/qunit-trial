# QUnit trial

このプロジェクトは、お仕事で手直しすることになった QUnit のユニットテストを模倣したゴミプロジェクトです。

以下の目標を達成するためにいじくり回すためのスケルトンのようなものだと思われたし。

- ブラウザテストの CLI 化
- テスト実行後のカバレッジ計測
- CI 用のレポート出力

## Quick start

```sh
# install dependencies
npm install
```

## Usage

```sh
# lint code & fix all auto-fixable problems
npm run lint
# run test
npm run test
# run recoding code coverage
npm run coverage
```

### Use docker

```sh
docker build -t qunit-puppeteer .

docker run -i --init --rm --cap-add=SYS_ADMIN --name qunit-trial qunit-trial npm run test
```

### Use docker-compose

```sh
docker-compose build

docker-compose run qunit-puppeteer
```

### Output

- `junit/junit.xml`
  - unit test report that styled junit XML.
- `coverage/*`
  - coverage reports. HTML and clover styled XML.
