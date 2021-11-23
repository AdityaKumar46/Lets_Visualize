export function getInsertionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    
    var i, j, min_idx;
    for (i = 0; i < copy.length-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < copy.length; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;

        swap(arr,min_idx, i);
    }

    return animations;
}