function flickSwitch(arr){
    let newArr = true;
      return arr.map( (item) => {
        return newArr = (item === "flick") ? !newArr : newArr;
      })
  }