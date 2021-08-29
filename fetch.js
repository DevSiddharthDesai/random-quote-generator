let noOfQuo = document.querySelector('#number');
let quoteURL = 'https://type.fit/api/quotes';


document.querySelector('.get-quotes').addEventListener('click', (e) =>{
   e.preventDefault();

   if(noOfQuo.value.length == 0)
   {
        return alert("Plese enter a number");
   }else
   {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
                data = shuffledata(data);
                let output = '';
                for(var i=0;i<data.length;i++)
                {
                    if(i==noOfQuo.value) {break;}
                    output += `<li>${data[i].text}</li>
                    <li>${data[i].author}</li>
                    <hr>`;
                }
                document.querySelector('.quotes').innerHTML = output;
        });
    }
});
function shuffledata(quotes) {
    let currentIndex = quotes.length, tempValue, randomIndex;

    while(currentIndex>0)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = quotes[currentIndex];
        quotes[currentIndex] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}