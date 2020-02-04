removeContent(str){
  let arr = str.split("\n");

  for(let i = 0; i < arr.length; i++){
    if(arr[i].contains("//") && arr[i].contains("/*")){
      let positionOne = arr[i].position("//");
      let positionTwo = arr[i].position("/*");
      if(positionOne > positionTwo){
        arr[i] = arr[i].split(0, positionOne);
      }else{
        if(arr[i].contains("*/")){
          let ending = arr[i].position("*/");
          arr[i] = arr[i].split(0, positionTwo) + " " arr[i].split(ending, arr[i].length);
        }
      }
    }
  }

}
