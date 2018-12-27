import test from 'ava';
import { appError } from './../../actions';

test('should counstuct action, appError', t => {
  t.deepEqual(appError('Random test error message.'), {
    type: 'APPLICATION_ERROR',
    message: 'Random test error message.'
  });
});
