function search(){
   //get word name that is requested by user
   let Word = input.value

   //api call
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word}?fullText=true`)
   .then((result)=>{
    result.json()
    .then((data)=>{
        populationData(data);
    })
   })
}

function populationData(data){
    console.log(data.message);

    if(data.title ){
         let message = data.title

             htmlData1=`<h1 class="mt-3">${message}</h1>`

            document.getElementById('output').innerHTML = htmlData1;}
    else{
        let word = data[0].word
        let meaning = data[0].meanings[0].partOfSpeech
        let text = data[0].phonetics[1].text
        let state = data[0].meanings[1].definitions[0].definition
    
        
            htmlData=`<h1 class="mt-5"><i>_${word}</i>_</h1>
                  <h6 class="mt-3"><b>Part Of Speech</b>:   <i>${meaning}</i></h6>
                  <p class="mt-3"><b>Text:</b>   ${text}</p>
                  <h6 class=mt-3 style="padding:10px; border-left:5px violet solid">Definition: ${state}</h6>`
    
        output.innerHTML = htmlData
    }
   

    
   


    
}