const assert = require('assert');
const app = require('../../src/app');

describe('\'tags-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('tags-service');

    assert.ok(service, 'Registered the service');
  });
});
