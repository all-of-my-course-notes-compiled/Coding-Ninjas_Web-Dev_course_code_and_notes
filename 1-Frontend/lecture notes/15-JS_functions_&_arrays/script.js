var arr = [0, 1, 2, 3, 4, "dd"];
arr.prop1 = "hi there";

function print(element)
{
    console.log(element);
}

for (index in arr)
{
    console.log(arr[index]);
}

// or we can also use
arr.forEach(print);