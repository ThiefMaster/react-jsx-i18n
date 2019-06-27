import extractFromFiles from '../src/tools/extract';

const expectExtracted = (file, headers) => expect(extractFromFiles([file], headers, false));

test('Messages are properly extracted', () => {
  expectExtracted('test-data/example.jsx', {Custom: 'Headers'}).toMatchSnapshot();
  expectExtracted('test-data/example.jsx').toMatchSnapshot();
});

test('Invalid stuff fails', () => {
  expectExtracted('test-data/invalid/invalid-binary-expression.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/invalid-expression.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/param-invalid-child.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/param-too-many-children.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/translate-invalid-child-element.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/translate-invalid-child.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/multiple-singular.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/multiple-plural.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/no-singular.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/no-plural.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/pluraltranslate-invalid-child-element.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/translate-string-no-args.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/pluraltranslate-string-missing-args.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/param-no-name.jsx').toMatchSnapshot();
  expectExtracted('test-data/invalid/param-no-children-value.jsx').toMatchSnapshot();
});

test('Non-string call ignored', () => {
  expectExtracted('test-data/invalid/skipped-strings.jsx').toMatchSnapshot();
});
