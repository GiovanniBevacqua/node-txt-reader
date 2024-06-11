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
        
    }

    set(key: string, value: any): void {
        
    }
}

export default Config;  