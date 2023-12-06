const checkAceess = require('../modules/championship');

describe('Проверка индекса массы тела', () => {
    it('Вернет строку "Вы не можете участвовать" если ИМТ = 53.33', () => {
      const height = 150
      const mass = 120
      expect(checkAceess(height, mass)).toBe('Вы не можете участвовать')
    })
    it('Вернет строку "Вы можете участвовать" если ИМТ = 20.00', () => {
        const height = 150
        const mass = 45
        expect(checkAceess(height, mass)).toBe('Вы можете участвовать')
    })
    it('Вернет строку "Некорректный ввод" если рост или вес указан не числом', () => {
        const height = 'hello'
        const mass = 120
        expect(checkAceess(height, mass)).toBe('Некорректный ввод')
    })
    it('Вернет строку "Ребенок слишком мал" если ИМТ = 53.33', () => {
        const height = 150
        const mass = '120'
        expect(checkAceess(height, mass)).toBe('Вы не можете участвовать')
    })
  });