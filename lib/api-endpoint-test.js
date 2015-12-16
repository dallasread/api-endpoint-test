module.exports = function endpointTest(endpoint, request, done) {
    endpoint.handler(request, {
        done: function(err, data) {
            if (err) {
                return done(null, { error: err });
            }

            return done(null, data);
        },
        succeed: function(data) {
            return done(null, data);
        },
        fail: function(err) {
            return done(null, { error: err });
        }
    });
};
