buf = new Buffer(256);

len = buf.write("Hello world");

console.log(len);//11 - length of the string (octets)

buff = new Buffer(26);

for(var i = 0;i<26;i++)
{
    buff[i] = i+97;
}

console.log(buff.toString('ascii'));
console.log(buff.toString('ascii', 0,5));
console.log(buff.toString(undefined, 0, 5));


//convert buffer into JSON

var buf = new Buffer('Simple easy learning');
var json = buf.toJSON(buf);

console.log(json);

//Concatinate buffer
//Buffer.concat(list[, totalLength])

var buffer1 = new Buffer("Hello World");
var buffer2 = new Buffer(" World hello");

var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("Concatenated buffer -->  "+buffer3.toString());


//Compare buffer -- buf.compare(otherBuffer)

var buffer1 = new Buffer('ABCDE');
var buffer2 = new Buffer('ABCDEFGHIJK');

var result = buffer1.compare(buffer2);

if(result<0){
    console.log(buffer1 + ' comes before '+ buffer2);
}
else if(result == 0){
    console.log(buffer1 + ' is same as ' + buffer2);
}

else{
    console.log(buffer1 + ' comes after '+ buffer2);
}

//Copy buffer -- buf.copy(target buffer, [, targetStart][, source start][, source End])

var buffer1  = new Buffer("ABC");

var buffer2 = new Buffer(3);

buffer1.copy(buffer2);
console.log("Buffer 2 copied from buffer 1 -- > "+buffer2);


//Slice buffer -- buf.slice(start, end)


var buffer1 = new Buffer("Lorem Epsum some string is going straight here");
console.log(buffer1.slice(0,20).toString());

//Buffer length -- buf.length; 

var buffer1 = new Buffer("Lorem Epsum some string is going straight here");
console.log(buffer1.length);
