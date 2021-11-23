export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = [...array];;
    HeapSortHelper(auxiliaryArray, animations);
    return animations;
  }

  function HeapSortHelper( arr, animations)
    {
        var n = arr.length;
 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        {
            animations.push([[i], false]);
            animations.push(heapify(arr, n, i, animations));
            animations.push([[i], false]);
        }
 
        for (let i = n - 1; i > 0; i--) {
            animations.push([[0, i], false]);
            animations.push([[0, arr[i]], true]);
            animations.push([[i, arr[0]], true]);
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            animations.push(heapify(arr, i, 0, animations));
            console.log("1", animations)
            //heapify(arr, i, 0, animations);
            animations.push([[0, i], false]);
        }
    }
  
    function heapify(arr, n, i)
    {
        const am=[];
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        am.push([[i], false]);
        am.push([[largest], false]);
        am.push([[l, r], false]);

        if (l < n && arr[l] > arr[largest])
        {
            am.push([[l, largest], true]);
            largest = l;
        }
 
        if (r < n && arr[r] > arr[largest])
        {
            am.push([[largest, r], false]);
            largest = r;
        }
 
        if (largest !== i) {
            am.push([[i, arr[largest]], true]);
            am.push([[largest, arr[i]], true]);
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
        }
        console.log(am)
        return am;
    }