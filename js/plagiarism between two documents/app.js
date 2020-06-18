const fs=require('fs')
const fname1=process.argv[2]
const fname2=process.argv[3]

async function getWordsFromFile(fname){
    fileObject=await fs.readFileSync(fname,'utf-8');
    return fileObject.split(' ')
}

function getMapObject(lsitOfwords){
    var obj={

    }

    lsitOfwords.forEach(word => {
        if(obj[word]){
            obj[word]+=1
        }else{
            obj[word]=1
        }
    });
return obj

}
function dotProduct(l1,l2){
    let sum=0
   for(let key in l1){
        
    if(l2[key]){
        sum+=l1[key]*l2[key]
    }



   }
   
    return sum
}

function mathWork(l1,l2){

    let numerator=dotProduct(l1,l2);
    let denominator= Math.sqrt(dotProduct(l1,l1)*dotProduct(l2,l2))
    return Math.acos(numerator/denominator)



}

async function main(){
    let l1=await getWordsFromFile(fname1);
    let l2=await getWordsFromFile(fname2);
    let d1=getMapObject(l1)
    let d2=getMapObject(l2)

    let result=mathWork(d1,d2)
    fresult=Number((result).toFixed(1));
    console.log(`${100-(fresult/1.6)*100}%`)

}
main()

