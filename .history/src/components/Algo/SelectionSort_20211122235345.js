export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    var i, j, min_idx;

    for (i = 0; i < copy.length - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < copy.length; j++)
            if (copy[j] < copy[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element
        //swap(arr, min_idx, i);
    }

    return animations;
}