import { readFileSync } from 'fs';

export class Config {
    private _token: string;
    private _prefix: string;

    constructor() {
        const configJson = JSON.parse(readFileSync(`./config.json`).toString());

        this._token = configJson.token;
        this._prefix = configJson.prefix;
    }

    public GetToken(): string {
        return this._token;
    }

    public GetPrefix(): string {
        return this._prefix;
    }
}