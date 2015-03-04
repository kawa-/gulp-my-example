# gulp-my-example

自分用のgulpの練習です。主に行ったことは、

- LESSをCSSに変換
- CSSを結合＋minify
- JSを結合+minify
- HTMLをminify
- bowerを使用
– 画像を最適化
– express(node)をサーバーとして使用、さらにgzip圧縮

です。

## Usage

~~~
$ sudo ./init.sh
$ gulp

# devlopmentモードで動かす
$ ./run_as_development.sh

# productionモードで動かす
$ ./run_as_production.sh
~~~

and visit to [http://localhost:3030/](http://localhost:3030/).

## developmentモードとproductionモードの違い

productionモードでは、

- LESSがCSSになっている
- HTML/CSS/JSが圧縮されている
- bowerでインストールしたjsがコピーされる
- 画像が最適化される

です。

~~~
$ gulp
~~~

と実行すると、publicというディレクトリが作られ、そこに上記のソースが入ります。
