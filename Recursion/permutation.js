function permutation(arr,news,curr){
    
    if(curr ==arr.length){
        news.push(arr.join(" "));
        return news;
    }

    for(var i = curr;i<arr.length;i++){

        swap(arr,i,curr);
        permutation(arr,news,curr+1)
        swap(arr,i,curr)
    }

    return news;
}

function swap(arr,i,curr){
    let temp = arr[i]
    arr[i] = arr[curr];
    arr[curr] = temp;
}
permutation(arr,[],0)
