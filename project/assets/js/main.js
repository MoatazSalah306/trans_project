
let name=document.getElementsByName('name');
let age=document.getElementsByName('age');
let btn= document.getElementById('btn');
let tbody=document.getElementById('tb');
btn.onclick= function card(e){
if(name[0].value=='' || age[0].value==''){
 document.getElementById('p1').innerHTML='fill gaps'
 e.preventDefualt()
}
else{
    document.getElementById('p1').innerHTML=''
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    tbody.appendChild(tr)
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.innerHTML=name[0].value;
    td2.innerHTML=age[0].value;
    name[0].value='';
    age[0].value=''
}
}

