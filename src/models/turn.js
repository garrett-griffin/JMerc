const BaseModel = require('./baseModel');

class Turn extends BaseModel {
    static rootUrl() {
        return 'api/clock';
    }
}

module.exports = Turn;
