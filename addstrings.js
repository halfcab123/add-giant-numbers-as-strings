const sumStrings = (first,second) => {

const strToArr = (a,b) => {
  a = a.split('')
  b = b.split('')
  
  return [a,b]
}

const addLeadingZeroes = ([a,b]) => {  
  if (a.length > b.length) {
    a.forEach((val,i) => {
      if(!b[i]){b.unshift('0')}
    })
  } else if (b.length > a.length) {
    b.forEach((val,i) => {
      if (!a[i]){a.unshift('0')}
    })
  } 
  return [a,b]
}

const addStringNums = ([a,b]) => {
  let sumArr = []
  a.forEach((val,i)=>{
    sumArr.push( (parseInt(a[i]) + parseInt(b[i])).toString() )
  })
  
  return sumArr
}

const carryRemainders = (a) => {
  a = a.reverse()
  
  a.forEach((val,i,arr)=>{
    if(arr[i + 1]){
      if(parseInt(arr[i]) >= 10){
        arr[i + 1] = ( parseInt(arr[i + 1] ) + (parseInt( parseInt(arr[i])/10) )).toString()
        arr[i] = ( parseInt(arr[i]) % 10 ).toString()
      }
    }else{
      if(parseInt(arr[i]) >= 10){
        arr.push((parseInt(parseInt(arr[i])/10)).toString())
        arr[i] = ( parseInt(arr[i]) % 10 ).toString()
      }
    }
  })
  
  return a.reverse().join('')
  
}

return carryRemainders(
  addStringNums(
    addLeadingZeroes(
      strToArr(first,second)
     )
  )
)

}