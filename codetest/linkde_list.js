class node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor(node)
    {
        this.head = new Node(value);
    }

    append(value)
    {
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }

        const newNode = new Node(value);
        curr.next = newNode;
    }

    getNode(index)
    {
        let node = this.head;
        for(let i = 0;i<index;i++)
        {
            node = node.next;
        }
        return node;
    }

    

    addNode(index, value)
    {
        const newNode = new Node(value);
        if(index === 0)
        {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        const node = this.getNode(index, -1);
        const nextNode = node.next;
        node.next = newNode;
        node.next = nextNode;
    }


}