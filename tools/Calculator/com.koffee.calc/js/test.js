function infixToPostfix(content){

  var result=[];
  var stack=[];

  var pre=0;

  var priority={'+':0,'-':0,'*':1,'/':1,'%':1};

  var i;

  for(i=0;i<content.length;++i){

      // console.log(result.length);
      //console.log(i);
      //  console.log(stack.length);
      var j=stack.length;



      if(content[i]=='+' || content[i]=='-' || content[i]=='*' || content[i]=='/' || content[i]=='%'){
          result.push(content.substr(pre,i-pre));


          if(stack.length===0)
              stack.push(content[i]);

          else{

              while(stack.length>0){

                 var temp=stack.pop();

                 if(priority[temp]<priority[content[i]]){

                    stack.push(temp);
                    break;
                 }  // close to if

                 else
                    result.push(temp);


              }  // close to while(!stack...)



              stack.push(content[i]);

          }  // close to else;


          pre=i+1;

       }  // close  to bahar waala if

     }  // close to for  loop

     result.push(content.substr(pre,i-pre));


     while(stack.length>0){

        var temp=stack.pop();

        result.push(temp);

      }

      console.log(result.length);


      return result;
}

var content=infixToPostfix("23+3*61+9");
console.log(content[0]);
console.log(content[1]);
console.log(content[2]);
console.log(content[3]);
console.log(content[4]);
console.log(content[5]);
console.log(content[6]);

var ans=
