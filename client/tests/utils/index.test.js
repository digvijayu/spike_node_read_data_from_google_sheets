import test from 'ava';
import { getImageUrl, isSupportedLanguage } from './../../utils';

test('should generate proper image url when url is not provided', t => {
  let inputs = ['/image/url', '/different/asset/path'];
  let actual = inputs.map(url => getImageUrl(url));
  let expected = ['/image/url', '/different/asset/path'];
  t.deepEqual(actual, expected);
});

test('should generate proper image url when url is provided', t => {
  let inputs = [
    {
      url: 'http://localhost:4000',
      asset: '/image/url'
    },
    {
      url: 'http://dev.tcm-web.io',
      asset: '/different/asset/path'
    }
  ];
  let actual = inputs.map(({ url, asset }) => getImageUrl(asset, url));
  let expected = [
    'http://localhost:4000/image/url',
    'http://dev.tcm-web.io/different/asset/path'
  ];
  t.deepEqual(actual, expected);
});

test('should return if the language is supported', t => {
  t.is(isSupportedLanguage('en'), true);
  t.is(isSupportedLanguage('de'), true);
  t.is(isSupportedLanguage('ru'), false);
  t.is(isSupportedLanguage('sm'), false);
});
