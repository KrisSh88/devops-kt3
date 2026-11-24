const http = require('http');
const server = require('../src/app');

describe('KT3 App', () => {
let testServer;


JavaScript
beforeAll(() => {
    testServer = http.createServer(server);
});

afterAll(() => {
    testServer.close();
});

test('GET / returns KT3 App', (done) => {
    testServer.listen(0, () => {
        const port = testServer.address().port;

        http.get(`http://localhost:${port}/`, (res) => {
            expect(res.statusCode).toBe(200);

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                expect(data).toBe('KT3 App');
                done();
            });
        });
    });
});
});
