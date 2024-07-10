document.getElementById("buttonWithdraw").addEventListener('click',function(){

    const newWithdrawAmount = getInputFieldvaluebyId("WithdrawField");

 const newWithdrawFieldTotal= getAmountValue("WithdrawTotal");

 

const FinalWithdrawTotal = newWithdrawAmount+newWithdrawFieldTotal;


//set Withdraw total
setTextElementById('WithdrawTotal',FinalWithdrawTotal);

//calculate balance
 const newBalanceTotal = getAmountValue("BalanceTotal");
//  console.log(newBalanceTotal);
const FinalBalanceTotal = newBalanceTotal - FinalWithdrawTotal;
//set BALANCE total
        setTextElementById('BalanceTotal',FinalBalanceTotal);
})