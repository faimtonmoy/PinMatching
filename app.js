function getPin()
{
    const pin= Math.round(Math.random()*10000);
    const pinString= pin+'';
    if(pinString.length==4)
    {
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin()
{
    const pin= getPin();
    document.getElementById('display-pin').value= pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number= event.target.innerText;
    const calc= document.getElementById('number-view');
    if(isNaN(number))
    {
        if(number== 'C')
        {
            calc.value=' ';
        }
    }
    else
    {
        
        calc.value += number;
    }
    
});