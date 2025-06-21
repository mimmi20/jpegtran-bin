import process from 'node:process';
import { fileURLToPath } from 'node:url';
import binBuild from '@localnerve/bin-build';
import bin from './index.js';

const args = [
  '-copy',
  'none',
  '-optimize',
  '-outfile',
  fileURLToPath(new URL('../test/fixtures/test-optimized.jpg', import.meta.url)),
  fileURLToPath(new URL('../test/fixtures/test.jpg', import.meta.url)),
];

try {
  await bin.run(args);
  console.log('jpegtran pre-build test passed successfully');
} catch (error) {
  console.warn(error.message);
  console.warn('jpegtran pre-build test failed');
  console.info('compiling from source');

  try {
    const source = fileURLToPath(new URL('../vendor/source/libjpeg-turbo-3.1.0.tar.gz', import.meta.url));
    await binBuild.file(source, [`cmake -G"Unix Makefiles" ${bin.dest()}`, 'make install']);

    console.log('jpegtran built successfully');
  } catch (error) {
    console.error(error.stack);

    process.exit(1);
  }
}
