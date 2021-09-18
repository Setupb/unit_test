const pythagoras = (n) => {
    let c = []
    let value = []
    let value2 = []
    for(let i=0; i<=n; i++){
        c.push(i)
    }
   

    c.forEach(function(i){  
        console.log(i,"here I")
        c.forEach(function(j){
            console.log(j,"here J")
            c.forEach(function(k){
                console.log(k,"here K")
                if(Math.pow(k,2)+Math.pow(j,2)===Math.pow(i,2)){
                    console.log(Math.pow(i,2))
                    console.log(Math.pow(j,2))
                    console.log(Math.pow(k,2))
                        value.push(k)
                        value.push(j)
                        value.push(i)
                        value2.push(value)
                        value = []
                    }
            })
            
        })   
       console.log(value2,"here value 2")
        return value2
    })
   
    
}
pythagoras(5)
const value11=(n)=>{
    console.log(pythagoras(n))
}


module.exports = {pythagoras,value11}