const dashboard = document.querySelector('.dashboard');
const form__btn = document.querySelector('.form__btn');
const card = document.querySelector('.detail__btn');
const form = document.querySelector('.form__borad');
const submitBtn = document.querySelector('.btnsubmit');

// Inputs
const OrderpriceInputs = document.querySelector('.OrderAmount');
const OrderpiceInputs = document.querySelector('.OrderInventory');
const meeshoSallingPriceInput = document.querySelector('.purchasePrice');
const cutomerreturnPiceInput = document.querySelector('.cutomerreturnPice');
const cutomerreturnChargeInput = document.querySelector('.cutomerreturnCharge');
const RtoPiceInput = document.querySelector('.RtoPiceInput');

// Labls
const mainBalnceLable = document.querySelector('.total__investment');
const Lowwer__investmentLable = document.querySelector('.Lowwer__investment');
const meeshoMainBalncelable = document.querySelector('.messhoo__balance');
const MeeshoprofitLble = document.querySelector('.messhoo__profit');
const cusumarReturnLoss = document.querySelector('.ReturnLoss');
const cusumarReturnLable = document.querySelector('.Customereturnorder');
const RtoReturnLable = document.querySelector('.RTOorderLable');

//importent 
let total__investmentval;
let meeshoMainBalnceval;
let ReturnLossval;
let total__Deliverdorder;

let RtoorderNumber = RtoPiceInput.value;
let CustomerOrderNumber = cutomerreturnPiceInput.value;

// defualt display
dashboard.classList.add('hidden')
form.classList.remove('hidden')

//Event Listner
form__btn.addEventListener('click', () => {
    dashboard.classList.add('hidden')
    form.classList.remove('hidden')
});

card.addEventListener('click', () => {
    dashboard.classList.remove('hidden')
    form.classList.add('hidden')
});



//Functions
function calmainbalance() {
    const mainBalanceval = OrderpriceInputs.value * OrderpiceInputs.value;

    total__Deliverdorder = mainBalanceval - (RtoPiceInput.value * OrderpriceInputs.value);
}


let mainBalnceval;
function ReturnLosscal() {

    ReturnLossval = cutomerreturnPiceInput.value * cutomerreturnChargeInput.value;
    total__investmentval = total__Deliverdorder - (cutomerreturnPiceInput.value * OrderpriceInputs.value);

    mainBalnceval = total__investmentval - ReturnLossval;
    console.log(mainBalnceval);
    mainBalnceLable.textContent = `₹ ${mainBalnceval}`
    cusumarReturnLoss.textContent = `₹ ${ReturnLossval}`;
    cusumarReturnLable.textContent = `${cutomerreturnPiceInput.value} Order`;
    RtoReturnLable.textContent = `${RtoPiceInput.value} Order`;
    return (
        total__investmentval,
        ReturnLossval
    )
}

function Profitcalculation() {
    const investment__pice = OrderpiceInputs.value - RtoPiceInput.value - cutomerreturnPiceInput.value;

    const investment__price = investment__pice * meeshoSallingPriceInput.value;
    mainBalnceval = total__investmentval - ReturnLossval



    let Meeshoprofitval = mainBalnceval - investment__price;

    MeeshoprofitLble.textContent = `₹ ${Meeshoprofitval}`;
    Lowwer__investmentLable.textContent = `₹ ${investment__price}`;
}

submitBtn.addEventListener('click', (e) => {

    e.preventDefault();
    calmainbalance();
    ReturnLosscal();
    Profitcalculation();
    dashboard.classList.remove('hidden')
    form.classList.add('hidden')
});

