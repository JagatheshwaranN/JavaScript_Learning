for(count = 1; count <= 5; count++){
    console.log(count)
}

for(count = 1; count <= 5; count=count+2){
    console.log(count)
}

for(count = 5; count >= 1; count--){
    console.log(count)
}

for(count = 1; count <= 10; count++){
    if(count % 2 == 0){
        console.log(count)
    }
}

var table = 2
for(count = 1; count <= 10; count++){
    console.log(count + 'x' + table + '=' + count * table )
}