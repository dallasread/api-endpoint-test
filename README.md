### Test your API endpoints with ease!

`api-endpoint-test` is a lightweight mapper of `api-endpoint` that allows for easier testing.

```
var should = require('should'),
    $ = require('api-endpoint-test');

describe('User', function() {
    it('can be created', function(done) {
        var user = {
            email: 'test@test.com',
            password: 'secret'
        };

        $(require('../users/create.js'), {
            payload: user
        }, function(err, response) {
            response.should.have.property('email', user.email);
            done();
        });
    });
});
```
