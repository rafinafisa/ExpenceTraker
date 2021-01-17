var work = document.querySelector('#inp1');
var amount = document.querySelector('#inp2');
var day = document.querySelector('#inp3');
var Div = document.querySelector('#text');
var delBtn = document.querySelector('#delBtn');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

    if(work.value !== '' && amount.value !== '' && day.value !== '' &&  work.value !== ' ' && amount.value !== ' ' && day.value !== ' '){
        let tbl = document.createElement('table');
        tbl.classList.add('tbl');
    
        let tblR = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerText = work.value;
        td1.classList.add('tblDa');
    
        let td2 = document.createElement('td');
        td2.innerText = day.value;
        td2.classList.add('tblDa');
    
        let td3 = document.createElement('td');
        td3.innerText = amount.value + '$';
        td3.classList.add('tblDa');

        let td4 = document.createElement('td');
        td4.innerHTML = '&times;';
        td4.classList.add('delBtn');
    
        tbl.appendChild(tblR);
        tblR.appendChild(td1);
        tblR.appendChild(td2);
        tblR.appendChild(td3);
        tblR.appendChild(td4);
        Div.appendChild(tbl);
        
        work.value = '';
        amount.value = '';
        day.value = '';

        delBtn.addEventListener('click', function(){
            Div.removeChild(tbl);
        })

        td4.addEventListener('click', function(){
            tbl.removeChild(tblR);
        })
    }

});
