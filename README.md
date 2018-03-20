This is a simple demo of psd-to-html.

psd url: [psd](https://pan.baidu.com/s/1dHlMAS5)  
password: jhqc



## Preview

![view](https://github.com/carolyicheng666/psd-to-html/blob/master/view.jpg)



## Status

[![Build Status](https://travis-ci.org/carolyicheng666/psd-to-html.svg?branch=master)](https://travis-ci.org/carolyicheng666/psd-to-html)
[![GitHub license](https://img.shields.io/github/license/carolyicheng666/psd-to-html.svg)](https://github.com/carolyicheng666/psd-to-html/blob/master/LICENSE)



## How to use

First copy the repo into your disk. 

```bash
$ git clone https://github.com/carolyicheng666/psd-to-html.git
```

Then 

```bash
$ npm install
```

you should delete the `build` floder or delete files in `build` floder, it has two ways: Manually delete or

```bash
$ gulp clean
```

<del>
Second, you can build `sass` to `css`. If you learned sass, you can do this step. But if not, you can skip this step because I already did it for you.

```bash
$ gem install sass
$ gem install compass
```

Then

```bash
$ compass compile
```
</del>

Last

```bash
$ gulp
```

Look! `build` floder appear! The project can work well!

tips
----

1. `gulp-clean-css` can more minify css than `gulp-cssnano`.
2. add `cache = false`, that can prevent compass from outputting `.sass-cache` floder.
3. add `manifest`.
4. about `manifest`, if sever is tomcat, you should add in `conf/web.xml` files: 
```xml
<mime-mapping> 
    <extension>manifest</extension> 
    <mime-type>text/cache-manifest</mime-type> 
</mime-mapping>
```

  due to `manifest` should run with server, I write it at previous line by annotation.

<del>5. add `gulp-compass`, so delete the second step.</del>  
6. add `gulp-watch`.  
7. add `gulp-html-replace`, it can replace build blocks in HTML. Only put some blocks in HTML file:

```html
<!-- build:<name> -->
Everything here will be replaced
<!-- endbuild -->
```

  The annotation is very important, if you write without it, the plug-in can't work well.

8. add `browser-sync`, it can time-saving synchronised browser testing.
9. add `scrollreveal`, easy srcoll animations for web and mobile browsers. [learn how to use](https://github.com/jlmakes/scrollreveal)

10. about `tips 5`, compass isn't update since 2014, so I choose to use `postcss + sass + autoprefixer` to replace it. I retain the files about the compass, you can compare the differences of them.



## Webpack

I add Webpack. You can see the files `webpack.config.js` if you have some basic knowledge about Webpack. Run
```bash
$ npm run build
```
You can build to the floder `webpack-build`.

Run
```bash
$ npm start
```
Visit [http://127.0.0.1:8080](http://127.0.0.1:8080) with your browser.



## Vue

Add Vue. You can checkout branch vue and watch it.



## ESLint

Add ESLint. Because of this is demo, I try it easily. You can study more in [eslint.org](https://eslint.org/docs/rules/), try more rules in your project with the [rules](https://eslint.org/docs/rules/).  
