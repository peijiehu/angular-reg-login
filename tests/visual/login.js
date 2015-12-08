var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');
var client = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'firefox'
  }
});

webdrivercss.init(client, {
  screenshotRoot: 'tests/visual/baseline',
  failedComparisonsRoot: 'tests/visual/failures'
});

client
  .init()
  .url('http://localhost:8080')
  .webdrivercss('login form', [{
    name: 'title',
    elem: '.container h2'
  },
  {
    name: 'form',
    elem: '.container form'
  }]);
