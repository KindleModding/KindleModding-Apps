$(document).ready(function(){
   var ans="";  // Stores result initially 0
   // Attaching a callback function to click even
   var printed=0;  // Checks whther answer has been printed on screen.

   //If answer has been printed on screen and now I click a new digit first I have to clear the screen.

   $('#screen').val("");  // On page reload calculator screen must be empty

   $('#poweron').click(function(){
      printed=0;
      $('#screen').val("");   // $('#screen').empty()
      ans=0;
      console.log("Poweron");
      this.blur(); // Removes focus from button after clicking

   });

   $('#clear').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content.substr(0,content.length-1));
    //  console.log("Clear");
    //  console.log(content);
      this.blur();

   });

   $('#modulus').click(function(){
      if(printed==1){

         $('#screen').val("");
         printed=0;

      }
      var content=$('#screen').val();
      $('#screen').val(content+'%');
    //  console.log("modulus");
    //  console.log(content);
      this.blur();
   });

   $('#divide').click(function(){

     if(printed==1){

        $('#screen').val("");
        printed=0;

     }

     var content=$('#screen').val();
     $('#screen').val(content+'/');
    // console.log("/");
     //console.log(content);
     this.blur();
   });

   $('#number-7').click(function(){

      if(printed==1){

        $('#screen').val("");
        printed=0;

      }

      var content=$('#screen').val();
    //  console.log("Number 7");
    //  console.log(content);
      $('#screen').val(content+'7');
      this.blur();
   });

   $('#number-8').click(function(){

     if(printed==1){

        $('#screen').val("");
        printed=0;

     }
      var content=$('#screen').val();
      $('#screen').val(content+'8');
    //  console.log("Number 8");
    //  console.log(content);
      this.blur();

   });

   $('#number-9').click(function(){
     if(printed==1){

        $('#screen').val("");
        printed=0;

     }
     var content=$('#screen').val();
     $('#screen').val(content+'9');
    // console.log("Number 9");
    // console.log(content);

     this.blur();

   });

   $('#multiply').click(function(){
      if(printed==1){
        $('#screen').val("");
        printed=0;
      }
      var content=$('#screen').val();
      $('#screen').val(content+'*');
    //  console.log("Multiply");
    //  console.log(content);
      this.blur();

   });
   $('#number-4').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+'4');
    // console.log("Number 4");
    // console.log(content);
     this.blur();

   });

   $('#number-5').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+'5');
    // console.log("Number 5");
    // console.log(content);
     this.blur();

   });

   $('#number-6').click(function(){
      if(printed==1){
        $('#screen').val("");
        printed=0;
      }
      var content=$('#screen').val();
      $('#screen').val(content+'6');
    //  console.log("Number 6");
  //    console.log(content);
      this.blur();

   });

   $('#minus').click(function(){
      if(printed==1){
        $('#screen').val("");
        printed=0;
      }
      var content=$('#screen').val();
      if(content)
        console.log(content);
      else  
        console.log("NULL");
      $('#screen').val(content+'-');

    //  console.log("Number 7");
  //    console.log(content);
      //console.log("Number 7");
     // console.log(content);

      this.blur();

   });

   $('#number-1').click(function(){
      if(printed==1){
        $('#screen').val("");
        printed=0;
      }
      var content=$('#screen').val();
      $('#screen').val(content+'1');
    //  console.log("Number 1");
  //    console.log(content);
      this.blur();

   });

   $('#number-2').click(function(){
       if(printed==1){
        $('#screen').val("");
        printed=0;
      }
      var content=$('#screen').val();
      $('#screen').val(content+'2');
    //  console.log("Number 2");
    //  console.log(content);
      this.blur();

   });

   $('#number-3').click(function(){
       if(printed==1){
        $('#screen').val("");
        printed=0;
       }
       var content=$('#screen').val();
       $('#screen').val(content+'3');
    //   console.log("Number 3");
    //   console.log(content);
       this.blur();

   });

   $('#plus').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+'+');
  //   console.log("Plus");
  //   console.log(content);
     this.blur();

   });

   $('#dot').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+'.');
  //   console.log("Dot");
  //   console.log(content);
     this.blur();

   });

   $('#zero').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+'0');
  //   console.log("Zero");
  //   console.log(content);
     this.blur();


   });

   $('#result').click(function(){
     if(printed==1){
        $('#screen').val("");
        printed=0;
     }
     var content=$('#screen').val();
     $('#screen').val(content+ans.toString());
  //   console.log("Ans");
  //   console.log(content);
     this.blur();
   });

   $('#equals').click(function(){
      var checkZeroError=0;
      var content=$('#screen').val();

  //    console.log("Equals");
  //    console.log(content);
     // console.log("Equals");
      //console.log("Final : "+content);
     
      content=infixToPostfix(content);  // Converting infix mathematical expression to postfix
      ans=evaluatePostfix(content); // Evaluating postfix expression.
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
          
            if(content[i]=='+' || content[i]=='-'){

              if(content[i-1]=='+' || content[i-1]=='-' || content[i-1]=='*' || content[i-1]=='/' || content[i-1]=='%' || i==0){


                   pre=i;
                   continue;
              }              

            }
           
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

//if(content[0] == '-' || content [0] == '+')
  //  content = '0' + content;

     function evaluatePostfix(content){

       var stack=[];

       for(var i=0;i<content.length;++i){
         // console.log(content[i]);

          if(content[i]=='+' || content[i]=='-' || content[i]=='*' || content[i]=='/' || content[i]=='%'){

             var operand1=stack.pop();
             var operand2=stack.pop();

             operand1=parseFloat(operand1);
             operand2=parseFloat(operand2);

             var result;

             if(content[i]=='+')
               result=operand1+operand2;
             else if(content[i]=='-')
               result=operand2-operand1;
             else if(content[i]=='*')
               result=operand1*operand2;
             else if(content[i]=='/'){
               // Place check for divide by zero error
                if(operand1==0){

                  checkZeroError=1;
                  break;

                }

                result=operand2/operand1;

             }
             else if(content[i]=='%'){

               // Place check for divide by zero error
               if(operand1==0){

                 checkZeroError=1;
                 break;

               }

               result=operand2%operand1;
             }

             stack.push(result.toString());

          }

          else{

             stack.push(content[i]);

          }

      }

      var ans=stack.pop();
      return ans;

    }   // Close to function



    //  console.log(ans);
      printed=1;
      $('#screen').val("");
      if(checkZeroError==1)
        $('#screen').val("Dividing by zero kills.");
      else
        $('#screen').val(ans);
      this.blur();

   });





});
