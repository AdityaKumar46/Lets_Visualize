export function getHeapSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    heapSortHelper(copy, 0, copy.length - 1, animations);
    return animations;
  }

  function sort( arr)
    {
        var n = arr.length;
 
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
 
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
  
  /**function quickSortHelper(arr, left, right, animations) {
    if (right <= left) return;
    const part = partition(arr, left, right, animations);
    quickSortHelper(arr, left, part, animations);
    quickSortHelper(arr, part + 1, right, animations);
  }
   
  function partition(arr, left, right, animations) {
    let i = left;
    let j = right + 1;
    const pivot = arr[left];
    while (true) {
      while (arr[++i] <= pivot) {
        if (i === right) break;
        animations.push([[i], false]);
      }
      while (arr[--j] >= pivot) {
        if (j === left) break;
        animations.push([[j], false]);
      }
      if (j <= i) break;
      animations.push([[i, arr[j]], true]);
      animations.push([[j, arr[i]], true]);
      //swap(arr, i, j);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    animations.push([[left, arr[j]], true]);
    animations.push([[j, arr[left]], true]);
    //swap(arr, left, j);
    const temp = arr[left];
      arr[left] = arr[j];
      arr[j] = temp;
    return j;
  }
   
  
  */