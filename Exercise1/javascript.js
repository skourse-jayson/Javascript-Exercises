function solve(val)
{
   let x = document.getElementById("val").value;
   let result="";
   let i;


   for (i=1; i<=x; i++)
    {

        if(i % 3==0 && i % 5==0)
            {
                result = result + i +" "+"FIZZBUZZ  ";
            }
       
        else if (i % 3==0)
            {   
                result = result + i +" "+"FIZZ  ";
            }

        else if (i % 5==0)
            {
                result = result + i +" "+"BUZZ  ";
            }
        else
            {
                result = result + i +" ";
            }


     document.getElementById("answer").innerHTML=result;


    }
    
    
}


   
