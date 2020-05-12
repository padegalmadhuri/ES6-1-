function check(){
  const inputval=document.getElementById("txt").value;

let [...x]=inputval.split(" ");
let outputval=[];
//console.log(x);
let y=x.map((a)=>{
  //console.log(a,b)
  if(a[0]=='#'){
      let [ ,b] = a.split("#");
      outputval.push({'type':'intent','value':b})
  }
  if(a[0]=='|' && a[1]=='|'){
    outputval.push({'type':'Operator','value':'OR'})
  }
  if(a[0]=='&' && a[1]=='&'){
  outputval.push({'type':'Operator','value':'AND'})
  }
  if(a[0]=='@'){
    let [ ,b] = a.split("@");
    outputval.push({'type':'entity','value':b})
  }
  if(a.split("_").length>1){
    outputval.push({'type':'variable','value':a})
  }

});
console.log(outputval);
//console.log(text);
}
