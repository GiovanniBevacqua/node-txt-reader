class Config {
    private static instance: Config;
    private constructor() {}

    static getInstance(): Config {
        if (!Config.instance) {
        Config.instance = new Config();
        }
        return Config.instance;
    }

    get(key: string): any {
        // Implementa la logica per ottenere la configurazione.
    }

    set(key: string, value: any): void {
        // Implementa la logica per impostare la configurazione.
    }
}

export default Config;  