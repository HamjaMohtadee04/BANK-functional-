

document.getElementById("buttonDeposit").addEventListener('click',function(){
    const newDepositAmount = getInputFieldvaluebyId("DepositField");

 const newDepostitTotal= getAmountValue("DepositTotal");

//  console.log(newDepositAmount);
//  console.log(newDepostitTotal);

const FinalDepositTotal = newDepositAmount+newDepostitTotal;

//set deposit total
setTextElementById('DepositTotal',FinalDepositTotal);

//calculate balance
 const newBalanceTotal = getAmountValue("BalanceTotal");
//  console.log(newBalanceTotal);
const FinalBalanceTotal = newBalanceTotal + FinalDepositTotal;
//set BALANCE total
        setTextElementById('BalanceTotal',FinalBalanceTotal);
})