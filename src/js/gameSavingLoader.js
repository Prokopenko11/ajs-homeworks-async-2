import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const saving = JSON.parse(jsonData);

      return saving;
    } catch (error) {
      throw new Error('Не удалось загрузить данные');
    }
  }
}
