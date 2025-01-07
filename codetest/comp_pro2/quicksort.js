function quicksort(array, left = 0, right = array.length - 1)
{
    console.log(array);
    if(left >= right)
    {
        return;
    }

    const mid = Math.floor((left + right)/2);
    const pivot = array[mid]; //중간 지점을 pivot으로 만든다.

    let i = left;
    let j = right;

    while(i <= j)
    {
        while(array[i] < pivot)
        {
            i++;
        }
        while(array[j] > pivot)
        {
            j--;
        }

        if(i <= j)
        {
            [array[i],array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    

    if(left < j)
    {
        quicksort(array, left, j);
    }

    if(i < right)
    {
        quicksort(array, i, right);
    }
}

console.log(quicksort([5,3,2,1,4]));