var sec = 1;
function sayHello()
{
    console.log("Hello World ", sec);
    sec++;
    if (sec == 6)
    {
        //stop
        clearInterval(id);
    }
}

var id = setInterval(sayHello, 1000);