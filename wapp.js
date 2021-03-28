document.write("<h1>My Weather Protal</h1>");

let div = document.createElement('div');
div.className = 'h';
div.innerHTML = '<p>HK Weather</p>';
document.body.appendChild(div);
//hkweather();
//myFunction();
//document.getElementById('header').innerHTML = hkweather();

let div1 = document.createElement('div');
div.id = 'myData';
div.className = 'm';
document.body.appendChild(div1);

let div2 = document.createElement('div');
div.id = 'location';
createList();
document.body.appendChild(div2);

let div3 = document.createElement('div');
div.id = 'day';
document.body.appendChild(div3);
//myFunction();

function hkweather() {
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    .then( function(response)  {
        let output = "";
        let temp = 

        temp += '<span>!!!: '+temp+'</span>'
        document.getElementById('header').innerHTML = temp;
        })
    .then(function(myJson) {
        console.log(myJson);
    })

    
}

function createList() {
    let array = ["Chek Lap Kok", "Cheung Chau", "Happy Valley", "Hong Kong Observatory", "Hong Kong Park", "Kai Tak Runway Park", "King's Park", "Kowloon City", "Kwun Tong", "Lau Fau Shan", "Wong Chuk Hang", "Sai Kung", "Shau Kei Wan", "Sha Tin", "Sham Shui Po", "Shek Kong", "Stanley", "Ta Kwu Ling", "Tai Mei Tuk", "Tai Po", "Tseung Kwan O", "Tsing Yi", "Tsuen Wan Ho Koon"
    , "Tsuen Wan Shing Mun Valley", "Tuen Mun", "Wong Tai Sin", "Yuen Long Park"];
    let selcetList = document.createElement('select');
    selcetList.id = 'station';
    div2.appendChild(selcetList);

    for (var i = 0; i < array.length; i++) {
        let option =  document.createElement('option');
        option.value = array[i];
        option.text = array[i];
        selcetList.appendChild(option);
    }
/*
    let station = document.getElementById('station').value;
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    .then( function(response) {
        response.json().then( WR => {
            document.getElementById('header').innerHTML = "12212";
        })
    })*/
}

function myFunction() {
    document.getElementById('header').innerHTML = "12212";
  }