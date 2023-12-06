const checkAceess = require('../modules/championship');

describe('checkAceess', () => {
    it('should allow participation when BMI is less than 25.5', () => {
        const height = '170';
        const mass = '70';
        const expected = 'Вы можете участвовать';

        checkAceess(height, mass);

        expect(document.querySelector('.result').innerHTML).toEqual(
        expected,
        );
    });

    it('should not allow participation when BMI is equal or greater than 25.5', () => {
        const height = '171';
        mass = '75';
        const expected = 'Вы не можете участвовать';

        checkAceess(height, mass);

        expect(document.querySelector('.result')).toHaveTextContent(
        expected,
    
        );
    });
});