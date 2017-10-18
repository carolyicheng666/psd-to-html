This is a simple demo of psd-to-html.

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

- `gulp-clean-css` can more minify css than `gulp-cssnano`.
- add `cache = false`, that can prevent compass from outputting `.sass-cache` floder.
- add `manifest`.
- about `manifest`, if sever is tomcat, you should add in `conf/web.xml` files: 
```xml
<mime-mapping> 
    <extension>manifest</extension> 
    <mime-type>text/cache-manifest</mime-type> 
</mime-mapping>
```
- add `gulp-compass`, so delete the second step.
- add `gulp-watch`.
- add `gulp-html-replace`, it can replace build blocks in HTML. Only put some blocks in HTML file:

```html
<!-- build:<name> -->
Everything here will be replaced
<!-- endbuild -->
```

The annotation is very important, if you write without it, the plug-in can't work well.