class node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class stack
{
    constructor()
    {
        this.head = null;
    }

    peek()
    {
        if(this.head !== null)
        {
            return this.head.data;
        }
        else
        {
            return null;
        }
    }

    pop()
    {
        if(this.head === null)
        {
            return null;
        }


        let temp = this.head;
        this.head = this.head.next;

        return temp.data;
    }

    push(data)
    {
        let newdata = new node(data);
        newdata.next = this.head;
        this.head = newdata;
    }
}

class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    peak()
    {
        if(this.head !== null)
            {
                return this.head.data;
            }
            else
            {
                return null;
            }
    }

    enqueue(data)
    {
        let newnode = new node(data);
        if(this.head === null)
        {
            this.head = newnode;
            this.tail = newnode;
        }
        else
        {
            //주소를 가져오는 것이다 보니까 이게 가능하다.
            this.tail.next = newnode;
            this.tail = newnode;
        }


    }

    dequeue()
    {
        if(this.head === null)
        {
            return null;
        }
        const deletenode = this.head;
        this.head = this.head.next;

        return deletenode.data;
    }
}

function SelectSort(arr)
{
    
    for(let i = 0;i<arr.length -1;i++)
    {
        let mini_num = Infinity;
        let point = Infinity;
        for(let j = i;j<arr.length;j++)
        {
            if(mini_num > arr[j])
            {
                mini_num = arr[j];
                point = j;
            }
            
        }

        let temp = arr[i];
        arr[i] = arr[point];
        arr[point] = temp;
    }

    return arr;
}

//삽입정렬 : 값을 순회하면서 값을 중간에 추가하는 방식
function insertionSort(array) {
    let n = array.length; // 루프 카운트!
    // 중요: 삽입 정렬의 0번째 인덱스는 정렬된 상태라고 판단하므로 인덱스가 1부터 시작해요!
    for (let i = 1; i < n; i++) {
      // 최초 i = 1 -> i = 2
      // 현재 index 범위 내에서 비교를 시작하죠! 비교 방향은 끝에서부터 시작해요!
      for (let j = i; j > 0; j--) {
        // 뒤의 값보다 앞의 값이 크면 바꿔줘요!
        if (array[j - 1] > array[j]) { // array[1-1] > array[1]
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        } else {
          // 그렇지 않다면 정렬된 상태이기 때문에 이번 루프는 바로 나가도 되어요!
          break;
        }
      }
    }
    return array;
  }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue()); // 1
// console.log(queue.dequeue()); // 2
// console.log(queue.dequeue()); // 3
// console.log(queue.dequeue());

console.log(SelectSort([8,7,3,1,9]));