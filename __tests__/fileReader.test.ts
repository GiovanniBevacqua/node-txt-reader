import axios from '../__mocks__/axios';
import { FileReader } from '../src/fileReader';

describe('FileReader', () => {
    it('should read a local file', async () => {
        const data = await FileReader.readFile('./public/example.txt');
        expect(data).toBeTruthy();;
    });

    it('should read a file from URL', async () => {
        jest.spyOn(FileReader, 'isUrl').mockReturnValue(true);
        jest.spyOn(axios, 'get')
            .mockResolvedValue({
                data: 'Content of the remote file'
            });

        const data = await FileReader.readFile('https://example-files.online-convert.com/document/txt/example.txt');
        expect(data).toBe('Content of the remote file');
    });
});