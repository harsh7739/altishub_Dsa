

let arr = [1,5,-3,2,6]
let N=arr.length
findMax(arr)
function findMax(arr){
let max= -Infinity
for(let i=0;i<N;i++){
    let sum=0
    for(let j=i;j<N;j++){
      sum+=arr[j]
    }
    if(sum>max){
        max=sum
    }
}
console.log(max)
}

// for array rotation in O(N) space complexcity

let arr2=[1,2,3,4,5]
let k2=2

function rotation(arr2,k2){
k2=k2%arr2.length
let res=[]
for(let i=1;i<=k2;i++){
    res.unshift(arr2.pop())
}
for(let i=k;i<arr2.length;i++){
    res.push(arr2[i])
}
console.log(res)
}


// for array rotation 

let arr1=[1,2,3,4,5]
let k=2

function rotation(arr1,k){
k=k%arr1.length
for(let i=1;i<=k;i++){
    let popedEl=arr1.pop()
    arr1.unshift(popedEl)
}
console.log(arr1)
}


//reverse linked list

let head=[1,2,3,4,5]
reverseList(head)
function reverseList(head){
let cur=head
let prev=null
while(cur!=null){
    let temp=cur.next
    cur.next=prev
    prev=cur
    cur=temp
}
return prev
}

// check cycle of Linked List

LinkedListCycle(head)

function LinkedListCycle(head){
    let fast=head
    let slow=head
    while(fast!==null && fast.next!==null){
        fast=fast.next.next
        slow=slow.next
        if(fast==slow){
            return true
        }
    }
    return false
}

