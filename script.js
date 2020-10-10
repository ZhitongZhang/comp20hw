function displayresult(r_count, l_count)
{
    if (l_count)
    {
        if (r_count == 1)
        {
            document.write("You win 6 dollars!");
        }
        else if (r_count == 2)
        {
            document.write("You win 25 dollars!");
        }
        else if (r_count == 3)
        {
            document.write("You win 150 dollars!");
        }
        else if (r_count == 4)
        {
            document.write("You win 5000 dollars!");
        }
        else if (r_count == 5)
        {
            document.write("You win 7000 a WEEK for LIFE!!!");
        }
        else
        {
            document.write("You win 4 dollars!");
        }
    }
    else
    {
        if (r_count == 2)
        {
            document.write("you win 3 Dollars!");
        }
        else if(r_count == 3)
        {
            document.write("you win 20 Dollars!");
        }
        else if(r_count == 4)
        {
            document.write("you win 200 dollars!");
        }
        else if(r_count == 5)
        {
            document.write("you win 25000 a YEAR for LIFE!");
        }
        else
        {
            document.write("You didn't win :(");
        }
    }
}

var winning_nums = prompt("what are the 6 winning numbers? (1-48)");
var lucky_num = prompt("what is the luckyball number? (1-18)");

var sNums = winning_nums.trim().split(" ");

var picked = [];

while (picked.length != 6)
{
    var x = Math.floor(Math.random()* 48)+1; // random num
    if (!picked.includes(x))
    {
        picked.push(x);
    }
}
var lucky_picked = Math.floor(Math.random() * 18) + 1;

var regcount = 0;
var lucky = 0;

var i;
for (i = 0 ; i < picked.length ; i++)
{

    if (sNums.includes(picked[i].toString()));
    {
        regcount++;
    }
}
if (lucky_num == lucky_picked)
{
    lucky++;
}

//displaying everything
picked.sort(function(a, b){return a - b});
document.write("The quickpick numbers are:");
for (i = 0; i < picked.length ; i++)
{
 
    document.write(picked[i] + " ");

}

var intNums = []; 

for (i = 0 ; i < sNums.length ; i++)
{
    intNums.push(parseInt(sNums[i]));
}

intNums.sort(function(a, b){return a - b});

document.write("</br> The lucky ball number is: " + lucky_picked);

document.write("</br></br> The winning numbers are:");
for (i = 0 ; i  < intNums.length; i++)
{

    document.write(intNums[i] + " ");

}

document.write("</br> The lucky ball number is: " + lucky_num + "</br></br>");


displayresult(regcount,lucky);