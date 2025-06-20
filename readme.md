# jpegtran-bin ![GitHub Actions Status](https://github.com/imagemin/jpegtran-bin/workflows/test/badge.svg?branch=main)

> [libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/) is a derivative of libjpeg that uses SIMD instructions (MMX, SSE2, NEON) to accelerate baseline JPEG compression and decompression on x86, x86-64, and ARM systems. On such systems, libjpeg-turbo is generally 2-4x as fast as the unmodified version of libjpeg, all else being equal.

You probably want [`imagemin-jpegtran`](https://github.com/imagemin/imagemin-jpegtran) instead.

## Install

```shell
npm install --save jpegtran-bin
```

## Usage

```js
import {execFile} from 'node:child_process';
import jpegtran from 'jpegtran-bin';

execFile(jpegtran, ['-outfile', 'output.jpg', 'input.jpg'], error => {
  console.log('Image minified!');
});
```

## CLI

```shell
npm install --global jpegtran-bin
```

```shell
jpegtran --help
```

## License

MIT © [Imagemin](https://github.com/imagemin)
