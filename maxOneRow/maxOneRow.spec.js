const getRowWithMaxOne = require('./maxOneRow');
test("Input :[[0, 0, 0, 0]], Output : -1", function(){
    const actualAnswer = getRowWithMaxOne([[0, 0, 0, 0]])
    expect(actualAnswer).toBe(0)
})
test("Input [[0, 1, 1, 1],[0, 0, 1, 1],[0, 1, 1, 1],[0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]],  Output : 4", function(){
    const actualAnswer = getRowWithMaxOne([[0, 1, 1, 1],[0, 0, 1, 1],[0, 1, 1, 1],[0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]])
    expect(actualAnswer).toBe(4)
})

test("Input [[0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]] , Output : 1", function(){
    const actualAnswer = getRowWithMaxOne([[0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]])
    expect(actualAnswer).toBe(1)
})