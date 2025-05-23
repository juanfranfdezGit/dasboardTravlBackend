import fs from 'fs';
import path from 'path';

const getRoomsData = (): any[] => {
    const dataPath = path.join(__dirname, '../datas/Room.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

export default getRoomsData;