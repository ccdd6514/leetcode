function myNew() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
// myNew(构造函数, 初始化参数);

function GirlFriend(name, age) {
  this.name = name
  this.age = age
}

const gf1 = myNew(GirlFriend, '小美', 18)
const gf2 = myNew(GirlFriend, '小丽', 20)

console.log(gf1) // {name: '小美', age: 18}
console.log(gf1.__proto__ === GirlFriend.prototype) // true