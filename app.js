console.log('worked');

const purchaseAmount = 1000;
const bonuses = 1000;

const maxBonuses=purchaseAmount*0.5;
let appliedBonuses;

if(maxBonuses <= bonuses){
    appliedBonuses = maxBonuses;
}else{
    appliedBonuses = bonuses;
}
console.log(appliedBonuses);
const total = purchaseAmount - appliedBonuses;
console.log(total);



