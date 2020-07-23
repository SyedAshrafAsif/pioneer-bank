
//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})
        
//deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
     const depositNumber = getInputNumber('deposit-amount');

        updateSpanText('current-deposit', depositNumber);
        updateSpanText('current-balance', depositNumber);
})

//withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdraw-amount');

        updateSpanText('current-withdraw', withdrawNumber);
        updateSpanText('current-balance', -1 * withdrawNumber);
        document.getElementById('withdraw-amount').value = "";
})
            
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}    

function updateSpanText(id, depositNumber){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

    document.getElementById('deposit-amount').value = "";
}



