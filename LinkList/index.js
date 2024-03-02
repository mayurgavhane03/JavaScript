class List{
    constructor(data){
        this.head={
            value:data,
            next:null
        };
        this.tail = this.head ;
        this.size = 1
    }

    AddNode(data){
       let newNode = {
        value : data,
        next:null
       };
       this.tail.next =  newNode;
       this.tail = newNode;
       this.size =  this.size +1;

    }

}

let list = new List(200);
list.AddNode(300);
list.AddNode(300);
list.AddNode(500);


console.log(list);