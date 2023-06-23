const db = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            return resolve(require("./banco.json"))
        }, 1500);
    })
}
module.exports=db