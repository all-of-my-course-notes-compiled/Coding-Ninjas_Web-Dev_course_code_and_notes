for (var i = 1; i <= 5; i++)
{
    setTimeout(function ()
    {
        console.log(i + " "); //output is 6 6 6 6 6 6
    }, 1000);
}

for (let j = 1; j <= 5; j++)
{
    setTimeout(function ()
    {
        console.log(j + " "); //output is 1 2 3 4 5 6
    }, 1000);
}

// Smooth scroll code

var scrollInterval = setInterval(function ()
{
    if (currentPos >= targetPos)
    {
        clearInterval(scrollInterval);
        return;
    }
    currentPos += 50;
    window.scrollBy(0, 50);
}, 50);

targetPos = 1000;

currentPos = 0;