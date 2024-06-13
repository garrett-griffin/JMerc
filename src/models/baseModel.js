const { plainToClass } = require('class-transformer');
const BaseAPI = require('../api/baseAPI');

class BaseModel extends BaseAPI {
    constructor(client) {
        super(client);
    }

    static rootUrl() {
        throw new Error("rootUrl method not implemented");
    }

    /**
     * Fetches the resource from the API.
     * @param {string} [id] - The ID of the resource to fetch.
     * @returns {Promise<object>} The resource data.
     */
    async get(id) {
        try {
            const url = id ? `${this.constructor.rootUrl()}/${id}` : this.constructor.rootUrl();
            const response = await super.get(url);
            return plainToClass(this.constructor, response);
        } catch (error) {
            throw new Error(`Failed to fetch resource: ${error.message}`);
        }
    }
}

module.exports = BaseModel;
