
let a,b,c,d,e;


function coolDount(){  
    let dateNow = new Date();
    let coolDate = new Date("December 31, 2023 23:59:59");
    a = coolDate - dateNow;
    b = Math.floor( a / (1000 * 60 * 60 * 24 ));     //Day
    c = Math.floor(( a % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));    //Hour
    d = Math.floor( (a % (1000 * 60 * 60  )) / (1000 * 60 ));   //Minute
    e = Math.floor( ( a % (1000 * 60 )) / ( 1000));     //Seconds

    document.querySelector('.js-day').innerHTML  = b ;
    document.querySelector('.js-hour').innerHTML = c ;
    document.querySelector('.js-minute').innerHTML = d ;
    document.querySelector('.js-sec').innerHTML = e ;

}


setInterval(()=>{    coolDount();  },1000); //Set Interval