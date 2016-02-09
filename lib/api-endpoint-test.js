module.exports = function endpointTest(endpoint, request, response, done) {
    endpoint.handler(request, {
        done: function(err, data) {
            if (err) {
                return typeof done === 'function' ? done(err) : response(null, { error: err });
            }

            return response(null, data);
        },
        succeed: function(data) {
            return response(null, data);
        },
        fail: function(err) {
            return typeof done === 'function' ? done(err) : response(null, { error: err });
        }
    });
};
