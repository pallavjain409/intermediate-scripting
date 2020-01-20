class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
    }
    
    insert(key, value) {
        const index = this._hash(key, this._tableSize);
        if (!this._storage[index]) {
            this._storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (let i = 0; i < this._storage[index].length; i++) {
                if (this._storage[index][i][0] === key) {
                    this._storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this._storage[index].push([key, value]);
            }
        }
    }


    lookUp(key) {
        const index = this._hash(key, this._tableSize);
        if (!this._storage[index]) {
            return "Key Not found";
        }
        for (let i = 0; i < this._storage[index].length; i++) {
            if (this._storage[index][i][0] === key) {
                return this._storage[index][i][1];
            }
        }
    }


    remove(key) {
        const index = this._hash(key, this._tableSize);
        if (!this._storage[index]) {
            return "Key Not found"
        }

        let value;
        if (this._storage[index].length == 1 && this._storage[index][0][0] == key) {
            value = this._storage[index][0];
            delete this._storage[index];
            return value;
        } else {
            for (let i = 0; i < this._storage[index].length; i++) {
                if (this._storage[index][i][0] === key) {
                    value = this._storage[index][i];
                    delete this._storage[index][i];
                    return value;
                }

            }
        }
    }


    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }
        return sum % n;
    }
}

let myHT = new HashTable(25);
myHT.insert('a', 1);
myHT.insert('a', 2);
console.log(myHT.remove('a'))
myHT.insert('a', 1);
console.log(myHT);