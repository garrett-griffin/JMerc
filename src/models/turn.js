const { Expose, plainToClass } = require('class-transformer');
const { IsInt, IsString, IsOptional } = require('class-validator');

/**
 * @typedef {Object} Turn
 * @property {number} turn
 * @property {string} [month]
 * @property {number} [year]
 */
class Turn {
    @Expose() @IsInt turn;
    @Expose() @IsString @IsOptional month;
    @Expose() @IsInt @IsOptional year;

    /**
     * @param {Object} data
     * @returns {Turn}
     */
    static modelValidate(data) {
        return /** @type { Turn } */ plainToClass(Turn, data);
    }
}

module.exports = Turn;