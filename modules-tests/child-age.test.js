describe('checkAceess function', () => {
    it('should return "Ребенок слишком мал" when age is less than 6', () => {
        const age = 5;
        const result = checkAceess(age);
    expect(result).toBe('Ребенок слишком мал');
    });
    it('should return "Младшая группа" when age is between 6 and 10', () => {
        const age = 8;
        const result = checkAceess(age);
    expect(result).toBe('Младшая группа');
    });
});