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
function verifyPin()
{
    const generatedPin=  document.getElementById('display-pin').value;
    const typedPin= document.getElementById('number-view').value;
    const successSign= document.getElementById('notify-success');
    const failSign= document.getElementById('notify-fail');
    if(generatedPin== typedPin)
    {
        
        successSign.style.display= 'block';
        failSign.style.display= 'none';
    }
    else
    {
        successSign.style.display= 'none';
        failSign.style.display= 'block';
    }
}