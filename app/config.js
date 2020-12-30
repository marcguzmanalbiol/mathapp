const config = {
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost/mathapp',
    test_port: 4242,
    test_db: 'mongodb://localhost/mathapp_test'
}

module.exports = config;