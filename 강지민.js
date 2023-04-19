let basicData = {
    count: 10,
    min: 1,
    max: 10,
    divdeNumber: 5,
}

function exampleOne(count,min,max){
    let exampleArr=[];
    for(let i =0;i<count;i++){
        let num = Math.random().toFixed(2)
        exampleArr.push(num)
    }
    return exampleArr;
}

function exampleTwo(array,divideNumber){
    let exampleObject = {
        a:[],
        b:[]
    }
    if(typeof divideNumber !=="number"){
        return;
    }
    else{
     for(let i=0;i<array.length;i++){
           if(array[i]<divideNumber){
              exampleObject.a.push(array[i])
             }
            else{
            exampleObject.b.push(array[i])
            }
        }
    }
    return exampleObject;
}


function exampleThree(array){
    let value=0;
    for(let i=0;i<array.length;i++){
        value=value+array[i]
    }
    return value;
}


function examplefour(object){
    let value=false;
    let count = 0;
    if(Array.isArray(object)){
        object.forEach(element=>{
            if(typeof element =="number"){
                count++
            }
        })
    }
    else{
        return;
    }
    if(count == object.length){
        value=true;
    }
    return value;
}

function exampleFive(objectOne, objectTwo) {
    let value=0;
    let sum1=0;
    let value1=Object.values(objectOne);
    for(let i=0;i<value1.length;i++){
        sum1=sum1+value1[i]
    }
    let value2=Object.values(objectTwo);
    let value3=value2[0]
    let sum2=0;
    for(let i=0;i<value3.length;i++){
        sum2=sum2+value3[i]
    }
    let value4=value2[1]
    let sum3=0;
    for(let i=0;i<value4.length;i++){
        sum3=sum3+value4[i]
    }
    value=sum1+sum2+sum3;
    return value;
}

console.log(exampleFive(basicData,exampleTwo([1,2,3],2)))