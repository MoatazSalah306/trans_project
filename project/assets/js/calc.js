let input=document.getElementsByName("calwin")[0];
let number=document.getElementsByName('oper');
let equal=document.getElementsByName('equal')[0];
let clear=document.getElementsByName('clear')[0];
let result='';
for(let i=0;i<number.length;i++){
    number[i].onclick= function calc(){
        result+=number[i].value;
        input.value=result;
        equal.onclick=function end(){
            input.value=eval(result);
            result=input.value
        }
        clear.onclick=function clear(){
            input.value=''
            result=''
        }
        
    }
 }

