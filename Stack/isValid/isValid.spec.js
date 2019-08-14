const isValid = require('./isValid.js');
test('Input []', function(){
    const actualAnswer = isValid('[]');
    expect(actualAnswer).toBe(true)
});

test('Input [(', function(){
    const actualAnswer = isValid('[(');
    expect(actualAnswer).toBe(false)
})

test('', function(){
    const actualAnswer = isValid('');
    expect(actualAnswer).toBe(true)
})