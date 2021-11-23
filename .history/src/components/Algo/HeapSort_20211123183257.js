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
            animations.push([[i, Math.floor(n / 2) - 1], false])
        }

        for (let i = n - 1; i > 0; i--) {

            animations.push([[0, i], false]);
            animations.push([[0, arr[i]], true]);
            animations.push([[i, arr[0]], true]);
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 

            heapify(arr, i, 0, animations);
            animations.push([[i, 0], false]);
        }
    }

    function heapify(arr, n, i, animations)
    {
        var largest = i;
        var l = 2 * i + 1;
        var r = 2 * i + 2; 
 

        if (l < n && arr[l] > arr[largest])

            largest = l;
 

        if (r < n && arr[r] > arr[largest])
            largest = r;
 

        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }
  