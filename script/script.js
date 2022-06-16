let displayTestimonal = () => {
    console.log('hii')
    document.getElementById('show').style.display = 'none';
    document.getElementById('hide').style.display = 'block';
}
let i =0;
setInterval(function(){
    if(i===5){
        i=0;
    }else{
        if(i===1){
            document.getElementById('teams').innerText = ' teams';
        }else if(i===2){
            document.getElementById('teams').innerText = ' products';
        }else if(i===3){
            document.getElementById('teams').innerText = ' workflows';
        }else if(i===4){
            document.getElementById('teams').innerText = ' skills';
        }else if(i===1){
            document.getElementById('teams').innerText = ' processes';
        }
        i++;
    }
},1000)

let showPlatforms = () =>{
    document.getElementById('showNav').style.display = 'block';
}

let closeShowPlatforms = () =>{
    document.getElementById('showNav').style.display = 'none';
}

let showProduct = () =>{
    document.getElementById('showProduct').style.display = 'block';
}
let hideProduct = () =>{
    document.getElementById('showProduct').style.display = 'none';
}
let showResource = () =>{
    document.getElementById('Resources').style.display = 'block'
}

let hideResource = () =>{
    document.getElementById('Resources').style.display = 'none'
}

let showSign = () =>{
    document.getElementById('signIn').style.display = 'block'
}
//
// products,workflows,skills,processes