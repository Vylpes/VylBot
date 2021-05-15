import Discord from 'discord.js';
import { Config } from './config';

export class Client {
    private _discord: Discord.Client;
    private _config: Config;

    constructor() {
        this._discord = new Discord.Client();
        this._config = new Config();

        this._discord.login(this._config.GetToken());
    }
}