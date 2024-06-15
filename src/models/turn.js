const { Expose, plainToClass } = require('class-transformer');

class Turn {
    @Expose() turn;
    @Expose() month;
    @Expose() year;

    static modelValidate(data) {
        return plainToClass(Turn, data);
    }
}

module.exports = Turn;
