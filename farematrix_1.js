const myText = document.getElementById("mytext");
const mySubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let result;


mySubmit.onclick = function(){

    basefare = 50; //minimum fare which also include first 2KM 
    perKMrate = 15; //cost per kilometer beyond 2KM 
    baseKM = 2; //distance included in the base fare

    

    result = myText.value;
    result = result.trim().toLowerCase();
    // Github Question:
    // "is this code possible?"
    // "Key changes: Replaced Text(result) with result.trim().toLowerCase() Changed comparison strings to lowercase ('taft' and 'angeles') Used === instead of == (better practice)"

// ChatGPT used to double check computations (https://chatgpt.com/share/69afd12a-b708-8005-b8cf-df65841c1d07)
    // NORTH AVENUE = SOURCE
    if(result === 'north avenue to quezon avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare) + ' pesos');
        //inline suggestion of computation
    }
    else if(result === 'north avenue to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'north avenue to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
     else if(result === 'north avenue to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
     else if(result === 'north avenue to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
    else if(result === 'north avenue to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
        else if(result === 'north avenue to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');
    }
            else if(result === 'north avenue to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
            else if(result === 'north avenue to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
            else if(result === 'north avenue to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*12)) + ' pesos');
    }
            else if(result === 'north avenue to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*13)) + ' pesos');
    }
            else if(result === 'north avenue to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*15)) + ' pesos');
    }



    // QUEZON AVENUE = SOURCE
    else if(result === 'quezon avenue to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + basefare + ' pesos');
    }
    else if(result === 'quezon avenue to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'quezon avenue to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
     else if(result === 'quezon avenue to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
     else if(result === 'quezon avenue to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
    else if(result === 'quezon avenue to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
        else if(result === 'quezon avenue to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
            else if(result === 'quezon avenue to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');
    }
            else if(result === 'quezon avenue to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*10)) + ' pesos');
    }
            else if(result === 'quezon avenue to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
            else if(result === 'quezon avenue to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*12)) + ' pesos');
    }
            else if(result === 'quezon avenue to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*14)) + ' pesos');
    }

    // KAMUNING = SOURCE
    else if(result === 'kamuning to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + basefare + ' pesos');
    }
    else if(result === 'kamuning to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'kamuning to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
     else if(result === 'kamuning to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare (perKMrate*2)) + ' pesos');
    }
     else if(result === 'kamuning to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
    else if(result === 'kamuning to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
        else if(result === 'kamuning to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
            else if(result === 'kamuning to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
            else if(result === 'kamuning to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
            else if(result === 'kamuning to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*10)) + ' pesos');
    }
            else if(result === 'kamuning to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
            else if(result === 'kamuning to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*13)) + ' pesos');
    }
    
    // Araneta Center-Cubao = SOURCE
    else if(result === 'araneta center-cubao to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
    else if(result === 'araneta center-cubao to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare+(perKMrate)) + ' pesos');
    }
        else if(result === 'araneta center-cubao to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
     else if(result === 'araneta center-cubao to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
     else if(result === 'araneta center-cubao to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
    else if(result === 'araneta center-cubao to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
        else if(result === 'araneta center-cubao to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
            else if(result === 'araneta center-cubao to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
            else if(result === 'araneta center-cubao to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
            else if(result === 'araneta center-cubao to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');
    }
            else if(result === 'araneta center-cubao to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
            else if(result === 'araneta center-cubao to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
    
    // Santolan-Annapolis = SOURCE
    else if(result === 'santolan-annapolis to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
    else if(result === 'santolan-annapolis to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
        else if(result === 'santolan-annapolis to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare+ (perKMrate*2)) + ' pesos');
    }
     else if(result === 'santolan-annapolis to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
     else if(result === 'santolan-annapolis to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
    else if(result === 'santolan-annapolis to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate)) + ' pesos');
    }
        else if(result === 'santolan-annapolis to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'santolan-annapolis to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
            else if(result === 'santolan-annapolis to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
            else if(result === 'santolan-annapolis to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
            else if(result === 'santolan-annapolis to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
            else if(result === 'santolan-annapolis to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }

    // Ortigas = SOURCE
        else if(result === 'ortigas to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
        //inline suggestion of computation
    }
    else if(result === 'ortigas to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
        else if(result === 'ortigas to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
     else if(result === 'ortigas to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
     else if(result === 'ortigas to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
    else if(result === 'ortigas to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'ortigas to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'ortigas to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
            else if(result === 'ortigas to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
            else if(result === 'ortigas to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
            else if(result === 'ortigas to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
            else if(result === 'ortigas to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }

    //Shaw Boulevard = SOURCE
    else if(result === 'shaw boulevard to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
        //inline suggestion of computation
    }
    else if(result === 'shaw boulevard to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
        else if(result === 'shaw boulevard to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
     else if(result === 'shaw boulevard to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
     else if(result === 'shaw boulevard to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare+(perKMrate)) + ' pesos');
    }
    else if(result === 'shaw boulevard to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'shaw boulevard to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'shaw boulevard to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'shaw boulevard to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'shaw boulevard to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
            else if(result === 'shaw boulevard to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
            else if(result === 'shaw boulevard to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }

    // Boni = SOURCE
    else if(result === 'boni to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');

    }
    else if(result === 'boni to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
        else if(result === 'boni to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
     else if(result === 'boni to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
     else if(result === 'boni to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
    else if(result === 'boni to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
        else if(result === 'boni to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'boni to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'boni to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate)) + ' pesos');
    }
            else if(result === 'boni to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'boni to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
            else if(result === 'boni to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }

    // Guadalupe = SOURCE
    else if(result === 'guadalupe to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');

    }
    else if(result === 'guadalupe to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');
    }
        else if(result === 'guadalupe to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
     else if(result === 'guadalupe to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
     else if(result === 'guadalupe to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
    else if(result === 'guadalupe to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
        else if(result === 'guadalupe to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'guadalupe to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'guadalupe to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'guadalupe to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
            else if(result === 'guadalupe to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'guadalupe to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }

    // Buendia = SOURCE
    else if(result === 'buendia to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');

    }
    else if(result === 'buendia to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*10)) + ' pesos');
    }
        else if(result === 'buendia to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
     else if(result === 'buendia to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
     else if(result === 'buendia to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
    else if(result === 'buendia to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
        else if(result === 'buendia to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*2)) + ' pesos');
    }
            else if(result === 'buendia to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
            else if(result === 'buendia to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'buendia to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'buendia to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'buendia to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }

    // Ayala == SOURCE

    else if(result === 'ayala to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*12)) + ' pesos');

    }
    else if(result === 'ayala to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
        else if(result === 'ayala to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*10)) + ' pesos');
    }
     else if(result === 'ayala to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*8)) + ' pesos');
    }
     else if(result === 'ayala to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*6)) + ' pesos');
    }
    else if(result === 'ayala to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*4)) + ' pesos');
    }
        else if(result === 'ayala to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*3)) + ' pesos');
    }
            else if(result === 'ayala to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'ayala to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }
            else if(result === 'ayala to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'ayala to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'ayala to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate)) + ' pesos');
    }

    // Magallanes = SOURCE
        else if(result === 'magallanes to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*13)) + ' pesos');

    }
    else if(result === 'magallanes to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*12)) + ' pesos');
    }
        else if(result === 'magallanes to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
     else if(result === 'magallanes to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
     else if(result === 'magallanes to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
    else if(result === 'magallanes to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
        else if(result === 'magallanes to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*4)) + ' pesos');
    }
            else if(result === 'magallanes to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*3)) + ' pesos');
    }
            else if(result === 'magallanes to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*2)) + ' pesos');
    }
            else if(result === 'magallanes to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'magallanes to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }
            else if(result === 'magallanes to taft avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }

    // Taft Avenue = SOURCE
            else if(result === 'taft avenue to north avenue'){
        resultElement.textContent =  ('Your payment should be around ' + (basefare + (perKMrate*15)) + ' pesos');

    }
    else if(result === 'taft avenue to quezon avenue'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*14)) + ' pesos');
    }
        else if(result === 'taft avenue to kamuning'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*13)) + ' pesos');
    }
     else if(result === 'taft avenue to araneta center-cubao'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*11)) + ' pesos');
    }
     else if(result === 'taft avenue to santolan-annapolis'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*9)) + ' pesos');
    }
    else if(result === 'taft avenue to ortigas'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*7)) + ' pesos');
    }
        else if(result === 'taft avenue to shaw boulevard'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*6)) + ' pesos');
    }
            else if(result === 'taft avenue to boni'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*5)) + ' pesos');
    }
            else if(result === 'taft avenue to guadalupe'){
        resultElement.textContent = ('Your payment should be around ' + (basefare +(perKMrate*4)) + ' pesos');
    }
            else if(result === 'taft avenue to buendia'){
        resultElement.textContent = ('Your payment should be around ' + (basefare + (perKMrate*2)) + ' pesos');
    }
            else if(result === 'taft avenue to ayala'){
        resultElement.textContent = ('Your payment should be around ' + (basefare+(perKMrate)) + ' pesos');
    }
            else if(result === 'taft avenue to magallanes'){
        resultElement.textContent = ('Your payment should be around ' + (basefare) + ' pesos');
    }

        else{
        resultElement.textContent = `This term is not in our system. Please try again and check for typo's.`;
    }


}
