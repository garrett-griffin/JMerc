const request = require('supertest');
const express = require('express');
const mercatorio = require('../src/api/mercatorio');

const app = express();
app.use('/api/mercatorio', mercatorio);

describe('GET /api/mercatorio/status', () => {
    it('should return status message', async () => {
        const res = await request(app).get('/api/mercatorio/status');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'Mercatorio API is working!');
    });
});
