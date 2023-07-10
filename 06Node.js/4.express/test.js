function showArr(statu){
    // if(this.statu=='yes'){
    //   return this.Arr.filter(obj=>obj.isDone==true)
    // }else if(this.statu=='no'){
    //   return this.Arr.filter(obj=>obj.isDone==false)
    // }else{
    //   return this.Arr.slice(0)
    // }
    switch(statu){
      case 'yes' :
        return 'yes'
      case 'no' :
        return 'no'
      case 'all' :
        return 'all'
    }
}

console.log(showArr('all'))