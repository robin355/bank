const withdrowBtn = document.getElementById('withdrow-btn');
withdrowBtn.addEventListener('click', function () {
    const withdrowinput = getInputValue('withdrow-field');
    // console.log(withdrowinput);
    const priviousWithdrow = getpriviousValue('withdrow-amount');
    // console.log(priviousWithdrow);
    const totalWithdrowValue = withdrowinput + priviousWithdrow;
    setTwoaddingValue('withdrow-amount', totalWithdrowValue);
    //balance try
    const priviousBalance = getpriviousValue('balance-amount');
    const totalWithdrowVBalance = priviousBalance - withdrowinput;
    setTwoaddingValue('balance-amount', totalWithdrowVBalance);

})