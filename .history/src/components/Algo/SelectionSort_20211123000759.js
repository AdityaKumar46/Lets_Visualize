export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    let i, j, min_idx;

    for (i = 0; i < arr.length - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                animations.push([[j, min_idx], false]);
                min_idx = j;
            }
        }
        animations.push([[i, arr[min_idx]], true]);
        animations.push([[min_idx, arr[i]], true]);
        const temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }

    return animations;
}