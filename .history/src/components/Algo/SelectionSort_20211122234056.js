export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];

    var i, j, min_idx;
    for (i = 0; i < copy.length - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < copy.length; j++) {
           // animations.push([[i, j], false]);
            if (arr[j] < arr[min_idx])
                animations.push([[j, min_idx], false]);
                min_idx = j;
        }

        //swap(arr,min_idx, i);
        animations.push([[min_idx, copy[i]], true]);
        //animations.push([[min_idx, copy[i]], true]);

        animations.push([[left, arr[j]], true]);
    animations.push([[j, arr[left]], true]);
        const temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }

    return animations;
}