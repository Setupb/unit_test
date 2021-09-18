const {sum} = require("./jest")
const count = require("./jest2")
const pythag = require("./jest3")



describe("Return sum", ()=>{
    test("sum should be sum two values",()=>{
        expect(sum(1,3)).toBe(4)
        expect(sum(1,3)).toEqual(4)
    })
    
    test("should return min value from list is 4" ,()=>{
        expect(count(10,2)).toBe(4)
    })
    
    test("should return array with list" ,()=>{
        expect(pythag.pythagoras(5)).toBe(pythag.value11(5));
    })

})