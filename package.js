Package.describe({
  name: 'apatryda:async-validated-method',
  summary: 'A promise wrapper over mdg:validated-method package',
  version: '1.2.1',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.7');

  api.use([
    'ecmascript',
    'mdg:validated-method@1.2.0',
  ]);

  api.mainModule('dist/index.js');
  api.export('RawValidatedMethod');
  api.export('ValidatedMethod');
});
