import test from 'ava';
import toValidIdentifier from './index.js';

test('main', t => {
	t.is(toValidIdentifier('foo'), 'foo');
	t.is(toValidIdentifier('$foo'), '$a$foo');
	t.is(toValidIdentifier('_foo'), '$1X$foo');
	t.is(toValidIdentifier('9foo'), '$v$foo');
	t.is(toValidIdentifier('foo-bar'), 'foo$j$bar');
	t.is(toValidIdentifier('null'), '$_null$');
	t.is(toValidIdentifier('undefined'), '$_undefined$');
	t.is(toValidIdentifier('$'), '$a$');
	t.is(toValidIdentifier(''), '');
	t.is(toValidIdentifier('🦄'), '$XfI$');
});
