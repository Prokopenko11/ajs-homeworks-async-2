import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Сохранение загружено:', saving);
  } catch (error) {
    console.error(error);
  }
})();
