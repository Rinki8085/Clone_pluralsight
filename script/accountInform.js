// document.querySelector('form').addEventListener('submit',myFun);
let data;
let myfun =()=> {
    event.preventDefault();
    data = document.querySelector('#mySelect').value;
    document.querySelector('#showId').style.display = 'block';
}



    // let fname = document.getElementById('fName').value;
    // let lname = document.getElementById('Lname').value;
    // let email = document.getElementById('Email').value;
    // let reside = document.getElementById('mySelect').value;
    // let cnEmail = document.getElementById('CEmail').value;
    // let comName = document.getElementById('Cname').value;
    // console.log(fname, lname, email, comName, cnEmail,reside)

let confirmData = (event) =>{
   
    event.preventDefault();
    let fname = document.getElementById('fName').value;
    let lname = document.getElementById('Lname').value;
    let email = document.getElementById('Email').value;
    let reside = document.getElementById('mySelect').value;
    let cnEmail = document.getElementById('CEmail').value;
    let comName = document.getElementById('Cname').value;
    if(fname.length===0 || lname.length===0 || cnEmail.length===0 || comName.length==0 || email.length===0 || reside.length===0){
        if(fname.length===0){
            document.getElementById('fname1').style.display = 'block';
            document.getElementById('fName').style.border = '2px solid red';
        }
        if(lname.length===0){
            document.getElementById('lname1').style.display = 'block';
            document.getElementById('Lname').style.border = '2px solid red';
        }
        if(email.length==0){
            document.getElementById('email1').style.display = 'block';
            document.getElementById('Email').style.border = '2px solid red';
        }
        if(reside.length===0){
            document.getElementById('reside').style.display = 'block';
            document.getElementById('mySelect').style.border = '2px solid red';
        }
        if(cnEmail.length===0){
            document.getElementById('cEmail1').style.display = 'block';
            document.getElementById('CEmail').style.border = '2px solid red';
        }
        if(comName.length===0){
            document.getElementById('cname1').style.display = 'block';
            document.getElementById('Cname').style.border = '2px solid red';
        }
    }else{
        //  console.log(document.getElementById('agree').checked)
        let boxValue = document.getElementById('agree').checked;
        let arr = email.split('@');
        if(arr.length<=1){
            console.log(arr)
            document.getElementById('email1').style.display = 'block';
            document.getElementById('email1').innerText = 'Wrong email';
            document.getElementById('Email').style.border = '2px solid red';
        }
        if(email!==cnEmail){
            document.getElementById('cEmail1').style.display = 'block';
            document.getElementById('CEmail').style.border = '2px solid red';
        }
        if(boxValue===false){
            document.getElementById('termsAgree').style.color = 'red';
        }else{
            document.getElementById('form-section-details').style.display = 'none';
            document.getElementById('show-payment-type').style.display = 'block';
        }
       
    }
    
}

let showPayment = () =>{
    document.getElementById('payment-form').style.display = 'block';
    document.getElementById('paypal-form').style.display = 'none';
}

let showPaypal = () =>{
    document.getElementById('payment-form').style.display = 'none';
    document.getElementById('paypal-form').style.display = 'block';
}