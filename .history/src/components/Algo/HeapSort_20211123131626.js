export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    HeapSortHelper(auxiliaryArray, animations);
    return animations;
  }

  function HeapSortHelper( arr, animations)
    {
        var n = arr.length;
 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        {
            heapify(arr, n, i, animations);
        }
 
        for (let i = n - 1; i > 0; i--) {
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            heapify(arr, i, 0, animations);
        }
    }
  
    function heapify(arr, n, i, animations)
    {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        
        animations.push([[largest], false]);
        animations.push([[l], false]);
        animations.push([[r], false]);

        if (l < n && arr[l] > arr[largest])
        {
            animations.push([[largest, l], false]);
            largest = l;
        }
 
        if (r < n && arr[r] > arr[largest])
        {
            animations.push([[largest, r], false]);
            largest = r;
        }
 
        if (largest !== i) {
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            heapify(arr, n, largest);
        }
    }