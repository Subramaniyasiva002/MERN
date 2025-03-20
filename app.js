let arr=[];
let additem = () => {
    let item=document.getElementById('todo').value;
    arr.push(item);
    console.log(arr);
    document.getElementById('todo').value="";
    getItem();
};

let getItem = () =>{
    let emptystr="";
    let sno=0;
    arr.forEach(function(value,index){
        sno+=1;
        emptystr+="<tr><td>"+sno+"</td><td>"+value+"</td><td><button onclick=deleteItem("+index+")>Remove</button></td></tr>";
    })
document.getElementById('tb1').innerHTML=emptystr;
}
function deleteItem(id){
    arr.splice(id,1);
    getItem();
}
document.getElementById('btn').addEventListener('click',additem);

