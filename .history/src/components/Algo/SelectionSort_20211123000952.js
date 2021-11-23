export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    let i, j, min_idx;

    for (i = 0; i < arr.length - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
        {
            animations.push([[i, j], false]);
            if (copy[j] < copy[min_idx])
            {
                animations.push([[j, min_idx], false]);
                min_idx = j;
            }
        }
        animations.push([[i, copy[min_idx]], true]);
        animations.push([[min_idx, copy[i]], true]);
        const temp = copy[min_idx];
        copy[min_idx] = copy[i];
        copy[i] = temp;
    }

    return animations;
}