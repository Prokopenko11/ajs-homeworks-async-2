import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');
jest.mock('../parser');

test('testing handling errors', async () => {
  read.mockRejectedValue(new Error('Ошибка чтения'));

  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e.message).toEqual('Не удалось загрузить данные');
  }
});
