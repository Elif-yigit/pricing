
let billingTypeValue = false;


function handlePageViewChange() {
  pageViews.innerText = pageViewRange.value;
  // console.log(pageViewRange.value);
  if(billingTypeValue){
   pricing.innerText = Number(pageViewRange.value) *  12
   page.innerText = Number(pageViewRange.value * 6.25) * 12;
  } else {
    pricing.innerText = pageViewRange.value;
    page.innerText = pageViewRange.value * 6.25;
  }
 
 }
 
 pageViewRange.addEventListener("input", handlePageViewChange);
 billingType.addEventListener('click', changeBillingType);


 function changeBillingType () {
  billingTypeValue = !billingTypeValue;
 changePricing();

 }
 
 function changePricing() {
  if(billingTypeValue){

    pricing.innerText = (Number(pageViewRange.value) * 0.75) * 12;
    period.innerText = "year";
    page.innerText = Number(pageViewRange.value * 6.25 * 12);
  } else {
    pricing.innerText = pageViewRange.value;
    period.innerText = "month";
    page.innerText = pageViewRange.value * 6.25;
  }
 }
 