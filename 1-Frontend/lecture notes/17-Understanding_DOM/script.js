function sayHello()
{
    alert('Hello');
}

function sayBye()
{
    alert('Bye');
}

var helloButton2 = document.getElementById('btn2');

helloButton2 = addEventListener('click', sayBye);