class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode | null;
  constructor() {
    this.head = null;
  }

  printList() {
    let current: ListNode | null = this.head;
    while (current != null) {
      console.log(current.data + "-->");

      current = current.next as ListNode;
    }
    console.log("null");
  }

  findLength() {
    if (this.head == null) return 0;

    let current = this.head;
    let counter: number = 0;

    while (current != null) {
      counter++;
      current = current.next as ListNode;
    }
    return counter;
  }
}
