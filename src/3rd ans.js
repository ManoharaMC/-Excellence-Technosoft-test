import React from "react";

const Repeat = () => {

    function Repeating(arr , size)
    {
       
        for (i = 0; i < size; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                 if (arr[i] == arr[j])
                 document.writeln(arr[i] + "<br />");
            }
        }
    }
        var i, j;
        var arr = [0,1,2,3,4,5,6,7,7,8,9,10];
        var arr=[1.0,0,0,0,1,0,0,0,1];
        var arr_size = arr.length;
         Repeating(arr, arr_size); 
   
        return <div>{Repeating}</div>
    }


export default Repeat;