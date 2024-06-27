var sum = require("../sum")
var assert = require("assert")
const res = sum(1, 23, 3)
// describe  
describe("大的组1测试", () => {
    describe("小的组1测试", () => {
        it("sum() 结果应该返回 0",()=>{
            assert.strictEqual(sum(),0)
        })
        it("sum(1) 结果应该返回 1",()=>{
            assert.strictEqual(sum(1),1)
        })
        it("sum(1,2) 结果应该返回 3",()=>{
            assert.strictEqual(sum(1,2),3)
        })
    })
    describe("小的组2测试", () => {

    })

})
describe("大的组2测试", () => {

})