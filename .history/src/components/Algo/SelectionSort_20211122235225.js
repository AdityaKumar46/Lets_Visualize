export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < copy.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < copy.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element
        //swap(arr, min_idx, i);
    }

    return animations;
}