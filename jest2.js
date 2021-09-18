const counter = (a,b) => {
    let c = []
    let value = []
    for(let i=0; i<=a; i++){
        c.push(i)
    }
    c.forEach(function(i){     
        if(Math.pow(i, 2)>a){           
            value.push(i)        
        }
    })
   
   return Math.min(...value)
    
}


module.exports = counter