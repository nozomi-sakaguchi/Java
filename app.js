var pattern = /^.{8,}$/;
if (pattern.test('1234abcd')) {
  console.log('OK');
} else {
  console.log('NG');
}