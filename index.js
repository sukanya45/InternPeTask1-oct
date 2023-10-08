console.log("js is working...!!");
let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let inpval="";

for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        

        if(buttonText== '=')
        {
            input.value=eval(inpval);

        }
        else if(buttonText=='C'){
             inpval='';
             input.value=inpval;
        }
        else
        {
            inpval +=buttonText;
            input.value=inpval;

        }
    })
}
