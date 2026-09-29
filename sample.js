console.log("hello world")
var a=10
console.log(a)
console.log(typeof(a))
let b=3.6
console.log(typeof(b))
let c="anu"
console.log(c+typeof(c))
let d='a'
console.log(d+typeof(d))
let x
console.log(x)
let y=true
console.log(y+typeof(y))
const z=5
console.log(z)

const promise=new Promise((resolve,reject)=>{
let success=false
if(success){
    resolve("login successful")
}
else{
    reject("Login failed")
}
})
promise
.then(result=>console.log(result))
.catch(error=> console.log(error))
.finally(()=>console.log("request finished"))




