const request = require('supertest');
const server = require('../src/app');

describe('KT3 App', () => {
test('GET / returns KT3 App', async () => {
const response = await request(server).get('/');

expect(response.status).toBe(200);
    expect(response.text).toBe('KT3 App');
});

test('GET /health returns status ok', async () => {
    const response = await request(server).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        status: 'ok'
    });
});

test('Unknown route returns 404', async () => {
    const response = await request(server).get('/unknown');

    expect(response.status).toBe(404);
});
});
