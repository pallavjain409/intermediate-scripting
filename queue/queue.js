class Queue{
    constructor(){
        this.storage = {};
        this.head = 0;
        this.length = 0;
    }
    enqueue(value){
        this.storage[this.length + this.head] = value;
        this.length ++;
        return this.length;
    }
    dequeue(){
       if(this.isEmpty()){
           return "Empty";
       } 
       let value =  this.storage[this.head];
       delete this.storage[this.head];
        this.head++;
        this.length--;
        return value;
        }
   isEmpty(){
       return this.length == 0;
   }    
   get peek(){
       return this.storage[this.head];
   } 
}
 module.exports = Queue;