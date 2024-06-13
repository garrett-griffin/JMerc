const { plainToClass, Expose, Type } = require('class-transformer');
const BaseModel = require('./baseModel');
const { Skill, Inventory } = require('./common');

class Household {
    @Expose() id;
    @Expose() name;
    @Expose() town_id;
    @Expose() portrait;
    @Expose() gender;
    @Expose() account_id;
    @Expose() business_ids;
    @Expose() prestige;
    @Type(() => PrestigeImpact) @Expose() prestige_impacts;
    @Type(() => Worker) @Expose() workers;
    @Expose() operations;
    @Expose() caps;
    @Type(() => Sustenance) @Expose() sustenance;
}

class PrestigeImpact {
    @Expose() factor;
    @Expose() impact;
}

class Worker {
    @Expose() assignment;
    @Expose() capacity;
    @Expose() name;
    @Type(() => Skill) @Expose() skills;
}

class Sustenance {
    @Expose() reference;
    @Type(() => Inventory) @Expose() inventory;
    @Expose() provider_id;
}

class Settings {
    @Expose() sound_volume;
    @Type(() => NotificationSettings) @Expose() notifications;
    @Expose() commoners_splash;
    @Expose() construction_splash;
    @Expose() land_purchase_splash;
    @Expose() operations_splash;
    @Expose() production_splash;
    @Expose() recipes_splash;
    @Expose() sustenance_splash;
    @Expose() trading_splash;
    @Expose() trade_config_splash;
    @Expose() welcome_splash;
    @Expose() first_building_splash;
    @Expose() warehouse_splash;
}

class NotificationSettings {
    @Expose() discord;
    @Expose() mutes;
}

class Player extends BaseModel {
    @Expose() username;
    @Type(() => Household) @Expose() household;
    @Expose() discord_id;
    @Type(() => Settings) @Expose() settings;
    @Expose() active;

    static rootUrl() {
        return 'api/player';
    }

    /**
     * Fetches the player data.
     * @returns {Promise<Player>} The player data.
     */
    async get() {
        try {
            const response = await super.get();
            return plainToClass(Player, response);
        } catch (error) {
            throw new Error(`Failed to fetch player data: ${error.message}`);
        }
    }
}

module.exports = { Player, Household, PrestigeImpact, Worker, Sustenance, Settings, NotificationSettings };
