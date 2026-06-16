\# LinuC Quiz App



LinuC学習用のWebアプリです。



\## 概要



ブラウザ上で問題演習ができる学習アプリです。



\### 主な機能



\* ランダム出題

\* 正答率表示

\* 成績履歴保存

\* グラフによる学習推移表示

\* カテゴリ登録

\* 問題登録

\* 問題編集

\* 問題削除

\* カテゴリ管理

\* Docker対応



\## 使用技術



\* HTML

\* CSS

\* JavaScript

\* Docker

\* Git

\* GitHub



\## 画面



\* 問題出題画面

\* 成績表示画面

\* 成績推移グラフ

\* 問題管理画面

\* カテゴリ管理画面



\## 起動方法



```bash

docker build -t linuc-quiz .

docker run -d -p 8080:80 --name linuc-quiz-container linuc-quiz

```



ブラウザで以下へアクセスします。



```text

http://localhost:8080

```



\## 今後の予定



\* GitHub Pages公開

\* AWSデプロイ

\* PostgreSQL対応

\* ユーザー管理機能

\* 学習統計機能



\## 作者



umai-infra



