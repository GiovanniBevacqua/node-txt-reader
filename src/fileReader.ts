import fs from 'fs';
import axios from 'axios';

export class FileReader {
    static async readFile(filePath: string): Promise<string> {
    if (this.isUrl(filePath)) {
        const response = await axios.get(filePath);
        return response.data;
    } else {
        return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
            reject(err);
            } else {
            resolve(data);
            }
        });
        });
    }
    }

    static isUrl(path: string): boolean {
        return /^https?:\/\//.test(path);
    }
}