
function solve(val)
{
    let x = document.getElementById("val").value;


    if(x % 4 == 0 && x % 100 == 0)
    {
        document.getElementById("answer").innerHTML="Not a Leap Year";
    }
    if(x % 4 == 0 || x % 400 == 0)
    {
        document.getElementById("answer").innerHTML="a Leap Year";
    }
    else{
        document.getElementById("answer").innerHTML="Not a Leap Year";
    }
}