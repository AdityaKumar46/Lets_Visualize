export function getHeapSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    heapSortHelper(copy, animations);
    return animations;
  }

  function heapSortHelper( arr, animations)
    {
        var n = arr.length;
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        {
            animations.push([[i], false])
            heapify(arr, n, i, animations);
        }

        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            animations.push([[0, arr[i]], true]);
            animations.push([[0, arr[i]], true]);
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0, animations);
        }
    }

    function heapify(arr, n, i, animations)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
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