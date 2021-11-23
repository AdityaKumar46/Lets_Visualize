export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = [...array];
    heapSort(auxiliaryArray, auxiliaryArray.length, animations);
    return animations;
  }

  function buildMaxHeap(arr, n, animations)
  {
    for (let i = 1; i < n; i++)
    {
      // if child is bigger than parent
      if (arr[i] > arr[(i - 1) / 2])
      {
        let j = i;
  
        // swap child and parent until
        // parent is smaller
        while (arr[j] > arr[(j - 1) / 2])
        {
          swap(arr, j, (j - 1) / 2);
          j = (j - 1) / 2;
        }
      }
    }
  }
  
  function heapSort(arr, n, animations)
  {
    buildMaxHeap(arr, n, animations);
  
    for (let i = n - 1; i > 0; i--)
    {
      // swap value of first indexed
      // with last indexed
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
      //swap(arr, 0, i);
  
      // maintaining heap property
      // after each swapping
      let j = 0, index;
  
      do
      {
        index = (2 * j + 1);
  
        // if left child is smaller than
        // right child point index variable
        // to right child
        if (index < (i - 1) && arr[index] < arr[index + 1])
          index++;
  
        // if parent is smaller than child
        // then swapping parent with child
        // having higher value
        if (index < i && arr[j] < arr[index])
          swap(arr, j, index);
  
        j = index;
  
      } while (index < i);
    }
  }

  /**function HeapSortHelper( arr, animations)
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
            am.push([[r, largest], false]);
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
    */