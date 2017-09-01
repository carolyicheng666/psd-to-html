This is a simple demo of psd-to-html.

## How to use

First copy the repo into your disk. Delete the `build` floder.

```bash
$ git clone git@github.com:carolyicheng666/psd-to-html.git
```

Then 

```bash
$ npm install
```

Second, you can build `sass` to `css`. If you learned sass, you can do this step. But if not, you can skip this step because I already did it for you.

```bash
$ gem install sass
$ gem install compass
```

Then

```bash
$ compass compile
```

Last

```bash
$ gulp
```

Look! `build` floder appear! The project can work well!

