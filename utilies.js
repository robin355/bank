function getInputValue(inputId) {
    const inputid = document.getElementById(inputId);
    const inputString = inputid.value;
    const inputvalue = parseFloat(inputString);
    inputid.value = '';
    return inputvalue;

}
function getpriviousValue(getId) {
    const privious = document.getElementById(getId);
    const priviousString = privious.innerText;
    const priviousValue = parseFloat(priviousString);
    return priviousValue;
}
function setTwoaddingValue(depositId, depositTotal) {
    const textelement = document.getElementById(depositId);
    textelement.innerText = depositTotal;
}