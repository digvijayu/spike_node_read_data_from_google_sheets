import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import providers from './../helpers/ProvidersWrapper';
import Text from './../../components/Text';

test('should render text from en.json', t => {
  const text = mount(providers(<Text>Test.Text1</Text>));
  t.is(text.find('Text').text(), 'Some Test Text');
});

test('should render and embed text placeholders from en.json', t => {
  const text = mount(
    providers(
      <Text values={{ currencyCode: 'EUD' }}>Test.Text.With.Param</Text>
    )
  );
  t.is(text.find('Text').text(), 'Top-up my EUD balance');
});

test('should render itself if no match was found from en.json', t => {
  const text = mount(
    providers(<Text>this.text.does.not.exist.in.en.json</Text>)
  );
  t.is(text.find('Text').text(), 'this.text.does.not.exist.in.en.json');
});

test('should render itself with replaced param if no match was found from en.json', t => {
  const text = mount(
    providers(
      <Text values={{ file: 'en.json' }}>
        {'this.text.does.not.exist.in.{file}'}
      </Text>
    )
  );
  t.is(text.find('Text').text(), 'this.text.does.not.exist.in.en.json');
});
