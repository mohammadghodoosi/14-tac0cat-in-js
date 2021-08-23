function getValue(){
  document.getElementById('alertHeading').classList.add('invisible')

  let input=document.getElementById('input').value 
  processValue(input)
}

function processValue(input){

  input=input.toLowerCase()

  let regex=/[^a-z0-9]/gi;
  input=input.replace(regex,'')

  let revString=[]
  let objString={}

  for (let index = input.length-1; index >= 0; index--) {
    revString += input[index];
  }

  if(revString==input){
    objString.msg='Well done! You enterd a palindrom...'
  }else{
    objString.msg='Oops! Your phrase is Not a palindrom...'
  }

  objString.reversed=revString
  displayValue(objString)
}

function displayValue(objString){
  document.getElementById('alertHeading').classList.remove('invisible')
  document.getElementById('alertMsg').innerHTML=objString.msg
  document.getElementById('alertResult').innerHTML=`the reverse of your phrase:<br/>(specific characters had been deleted)<h5 class='text-center'> ${objString.reversed}</h5>`
}