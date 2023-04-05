
document.getElementById("n").addEventListener('input',print );

function print(){
	var numbers = (document.getElementById("n").value );
	console.log(getFibonacci( numbers ));
}
function getFibonacci(n){

    var sir= [0,1]
    for(var i =2; i <= n; i++)
    {
       sir[i]=sir[i-1] + sir[i-2];
    
       
    }
    return sir; 
}
