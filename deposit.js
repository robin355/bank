const depositbtn = document.getElementById('deposit-btn');
depositbtn.addEventListener('click', function () {
    const depositInputValue = getInputValue('deposit-field');
    // console.log(depositInputValue);
    const priviousStoreValue = getpriviousValue('deposit-amount');
    // console.log(priviousStoreValue, depositInputValue);
    const totaldepositValue = priviousStoreValue + depositInputValue;
    setTwoaddingValue('deposit-amount', totaldepositValue);
    // console.log(totaldepositValue);
    //Balance try
    const priviousBalance = getpriviousValue('balance-amount');
    const totalBalance = depositInputValue + priviousBalance;
    setTwoaddingValue('balance-amount', totalBalance);

})