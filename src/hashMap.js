const hash = (key) => {
    let hashCode = 0

    const prime = 31
    for (let i = 0; i < key.length; i++) {
        hashCode = (prime * hashCode + key.charCodeAt(i)) % 16
    }

    return hashCode
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

export class HashMap {
    constructor() {
        this.linkedListArray = new Array(16).fill(null).map(() => new ListNode());
    }

    set(key, value) {
        const hashCode = hash(key)
        if (hashCode < 0 || hashCode >= this.linkedListArray.length) {
            throw new Error("Trying to access index out of bound");
        } else if (this.linkedListArray[hashCode].data === undefined) {
            this.linkedListArray[hashCode].data = value
        } else {
            let current = this.linkedListArray[hashCode];
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new ListNode(value)
        }
    }

    get(key) {
        const hashCode = hash(key)
        if (this.linkedListArray[hashCode] !== null) {
            return this.linkedListArray[hashCode].data
        }
    }


}