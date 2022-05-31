const Mock = require("mockjs");
const Random = Mock.Random

const count = 10
const List = []

for(let i=0; i<count; i++){
  List.push(Mock.mock({
    id: i+1,
    author: Random.cname(),
    title: Random.ctitle(),
    "importance|1-5": "★"
  }))
}
console.log(List);

Mock.mock(/my-admin\/table\/info/, 'get', () => {
  return List
})