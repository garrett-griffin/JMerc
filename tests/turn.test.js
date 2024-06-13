const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const Client = require('../src/api/client');
const Turn = require('../src/models/turn');

describe('Turn', () => {
    const user = 'testuser';
    const token = 'testtoken';
    const baseUrl = 'https://play.mercatorio.io/';
    let mock, client, turn;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        client = new Client(user, token);
        turn = new Turn(client);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should get the current turn number successfully', async () => {
        const response = { turn: 42, text: "" };
        mock.onGet(`${baseUrl}api/clock`).reply(200, response);

        const turnData = await turn.get();
        expect(turnData.turn).toBe(42);
    });

    it('should handle GET request errors', async () => {
        mock.onGet(`${baseUrl}api/clock`).reply(500);

        await expect(turn.get()).rejects.toThrow('Failed to fetch resource: GET api/clock failed: Request failed with status code 500');
    });
});
