
window.addEventListener('load', async function(){
  const equBtc = document.querySelector('#equibtc');
  const equUsdt = document.querySelector('#equiusdt');
  const equBnb = document.querySelector('#equibnb');
  const equEth = document.querySelector('#equieth');



 const userDataRef = localStorage.getItem('dashboard')
 const email = userDataRef.split(',')[3]
 const password =  userDataRef.split(',')[1]
  const token =   userDataRef.split(',')[0]
const profileDetails = []  
const activeplans =[]
     console.log(userDataRef)
     if(!token){
     console.log('no token')
     }
     try {
       const data = await axios.post('https://foxic.onrender.com/foxic/auth/login', {
         email, password,
         Headers:{
           Authorization:  `Bearer ${token}`,
         },
       })
       
       if(!data){
         console.log('Wrong email or password')
       }
       console.log(data.data.accounts.balance)
       const user = data.data.user
       const accounts = data.data.accounts
      console.log(user.name)
       const name = user.name
       const notifications = user.notifications
       const referalLink = user.referlink
       
       this.localStorage.setItem('Notifications', notifications)
       
       const UserEmail = user.email
       const withdrawableBalanced = user.withdrawableBalance
       const beforeW = accounts.beforeW
       const activeplan = accounts.activeplan
       const depositBonus = accounts.depositeBonus
       const signupBonus = accounts.signupBonus
       const referalBonus = accounts.referalBonus
       const referalcode = user.referalCode
       const status = accounts.statu
       const wallet= accounts.connectWallet
       const balance = accounts.balance
       const balanceInc = accounts.balanceIn
       const earnings = accounts.earnigs
       const deposite = accounts.deposite
       const bnb = accounts.bnb
       const usdt = accounts.usdt
       const eth = accounts.eth
       const btc = accounts.btc
       const asset = accounts.asset
       const timeT = accounts.time
       const depositeAmount = accounts.depositeAmount
       
       activeplans.push(activeplan)
       
       const Ebtc = (Number(btc) * 20418.50)
       equBtc.textContent = '$'+ Number(Ebtc).toFixed(2);
       const Eusdt = (Number(usdt) * 1)
       equUsdt.textContent = '$'+ Number(Eusdt).toFixed(2);
       const Ebnb = (Number(bnb) * 289.5)
       equBnb.textContent = '$'+ Number(Ebnb).toFixed(2);
       const Eeth = (Number(eth) * 1578.84)
       equEth.textContent = '$'+ Number(Eeth).toFixed(2);
       
       const totalAvaliableBalance = Number(Ebtc + Eusdt + Ebnb + Eeth + earnings ).toFixed(2) ;
       
       const totalAvaliableBalanced = Number(Ebtc + Eusdt + Ebnb + Eeth).toFixed(2) ;
       const totalDeposite = Number(Ebtc + Eusdt + Ebnb + Eeth).toFixed(2)
       profileDetails.push(name, UserEmail, totalAvaliableBalanced)
       
       localStorage.setItem('LogprofileDetails', profileDetails)
       localStorage.setItem('activeplans', activeplans)
       localStorage.setItem('wallet', wallet)
       localStorage.setItem('status', status)

      document.querySelector('#user').textContent = name
 // plan 
 

   //assets
   const initialAsset = "0.00";
   document.querySelector('#btc').textContent = btc || initialAsset;
   document.querySelector('#usdt').textContent = usdt || initialAsset;
   document.querySelector('#eth').textContent = eth || initialAsset;
   document.querySelector('#bnb').textContent = bnb || initialAsset;
   

///avaliableBalance 
   const avaliableBalance = document.createElement('h1');
   avaliableBalance.classList.add('mt-1');
   avaliableBalance.classList.add('mb-3');
   avaliableBalance.textContent = `$${totalAvaliableBalance}`;
   document.getElementById('balance').appendChild(avaliableBalance);
 
   const divBalance = document.createElement('div')
   divBalance.classList.add('mb-0');

   const spanBalance = document.createElement('span');
   spanBalance.classList.add('text-success');
   spanBalance.innerText = `+${earnings}%`;

   const balanceT = document.createElement('i');
   balanceT.classList.add('mdi');
   balanceT.classList.add('mdi-arrow-bottom-right');
   
   const profSpan1 = document.createElement('span');
   profSpan1.classList.add('text-muted');
   profSpan1.textContent = ' Since last week'
   divBalance.appendChild(spanBalance);
   spanBalance.appendChild(balanceT);
   divBalance.appendChild(profSpan1);
   document.getElementById('balance').appendChild(divBalance)


   ///BONUSES
   var totalBonuss = Number(depositBonus) + Number(signupBonus) + Number(referalBonus)
   const totalBonus = document.createElement('h1');
   totalBonus.classList.add('mt-1');
   totalBonus.classList.add('mb-3');
   totalBonus.textContent = `$${totalBonuss}`;
   document.getElementById('bonuses').appendChild(totalBonus);
 
   const divBonus = document.createElement('div')
   divBalance.classList.add('mb-0');

   const spanBonus1 = document.createElement('span');
   spanBonus1.classList.add('text-success');
   spanBonus1.innerText = `~`;

   const bonus1 = document.createElement('i');
   bonus1.classList.add('mdi');
   bonus1.classList.add('mdi-arrow-bottom-right');

   const lineBreak1 = document.createElement('br')
   const bonusSpan1 = document.createElement('span');
   bonusSpan1.classList.add('text-dark');
   bonusSpan1.textContent = `Deposit bonus: $${depositBonus}` 
   bonusSpan1.appendChild(lineBreak1)
   divBonus.appendChild(spanBonus1);
   spanBonus1.appendChild(bonus1);
   divBonus.appendChild(bonusSpan1);

   const spanBonus2 = document.createElement('span');
   spanBonus2.classList.add('text-success');
   spanBonus2.innerText = `~`;

   const bonus2 = document.createElement('i');
   bonus2.classList.add('mdi');
   bonus2.classList.add('mdi-arrow-bottom-right');
   
   const lineBreak2 = document.createElement('br')
   const bonusSpan2 = document.createElement('span');
   bonusSpan2.classList.add('text-dark');
   bonusSpan2.textContent = `Sign Up bonus: $${signupBonus}`
   bonusSpan2.appendChild(lineBreak2)
   divBonus.appendChild(spanBonus2);
   spanBonus2.appendChild(bonus2);
   divBonus.appendChild(bonusSpan2);
   
   const spanBonus3 = document.createElement('span');
   spanBonus3.classList.add('text-success');
   spanBonus3.innerText = `~`;

   const bonus3 = document.createElement('i');
   bonus3.classList.add('mdi');
   bonus3.classList.add('mdi-arrow-bottom-right');
   const lineBreak3 = document.createElement('br')
   const bonusSpan3 = document.createElement('span');
   bonusSpan3.classList.add('text-dark');
   bonusSpan3.textContent = `Referal bonus: $${referalBonus}`
   bonusSpan3.appendChild(lineBreak3)
   divBonus.appendChild(spanBonus3);
   spanBonus3.appendChild(bonus3);
   divBonus.appendChild(bonusSpan3);
   document.getElementById('bonuses').appendChild(divBonus)

   this.document.getElementById('referalcode').value = referalcode || 'Not Available'

   this.document.getElementById('referallink').value = referalLink || "Getting your Link..."
   this.document.getElementById('referalbonus').textContent === referalBonus || 0

   
///withdrawaable
const withdrawableBalance = document.createElement('h1');
withdrawableBalance.classList.add('mt-1');
withdrawableBalance.classList.add('mb-3');
withdrawableBalance.textContent = `$${withdrawableBalanced}`;
document.getElementById('withdrawalbalbalance').appendChild(withdrawableBalance);

const divwithdrawable = document.createElement('div')
divwithdrawable.classList.add('mb-0');

const spanwithdrawable = document.createElement('span');

if (beforeW === 1) {
  spanwithdrawable.innerText = `Your bonus is ready`;
  spanwithdrawable.classList.add('text-success');


}
else{
  spanwithdrawable.innerText = `Deposite $${beforeW} to unlock your bonuse`;
  spanwithdrawable.classList.add('text-muted');

}

const withdrawableT = document.createElement('i');
withdrawableT.classList.add('mdi');
withdrawableT.classList.add('mdi-arrow-bottom-right');

divwithdrawable.appendChild(spanwithdrawable);
spanwithdrawable.appendChild(withdrawableT);

document.getElementById('withdrawalbalbalance').appendChild(divwithdrawable)
   //deposite
   
   const availableDeposite = document.createElement('h1');
   availableDeposite.classList.add('mt-1');
   availableDeposite.classList.add('mb-3');
   availableDeposite.textContent = `$${totalDeposite}`;
   document.getElementById('deposite').appendChild(availableDeposite);
   const divDeposite = document.createElement('div')
   divDeposite.classList.add('mb-0');

   const spanDeposite = document.createElement('span');
   spanDeposite.classList.add('text-primary');
   spanDeposite.textContent = 'Since '

   const depositeT = document.createElement('i');
   depositeT.classList.add('mdi');
   depositeT.classList.add('mdi-arrow-bottom-right');
   
   const spanDeposite1 = document.createElement('span');
   spanDeposite1.classList.add('text-muted');
   spanDeposite1.textContent = timeT
   divDeposite.appendChild(spanDeposite);
   spanDeposite.appendChild(depositeT);
   depositeT.appendChild(spanDeposite1);

   document.getElementById('deposite').appendChild(divDeposite)
   
   //earnings
   
   const avaliableEarnings = document.createElement('h1');
   avaliableEarnings.classList.add('mt-1');
   avaliableEarnings.classList.add('mb-3');
   avaliableEarnings.textContent = '$' +(earnings).toFixed(2);
 document.getElementById('earnings').appendChild(avaliableEarnings);
   const divEarnings = document.createElement('div')
   divEarnings.classList.add('mb-0');

   const spanEarnings = document.createElement('span');
   spanEarnings.classList.add('text-success');
   spanEarnings.innerText = `+${earnings}%`;

   const earningsT = document.createElement('i');
   earningsT.classList.add('mdi');
   earningsT.classList.add('mdi-arrow-bottom-right');
   
   const spanEarnings1 = document.createElement('span');
   spanEarnings1.classList.add('text-muted');
   divEarnings.appendChild(spanEarnings);
   spanEarnings.appendChild(earningsT);
   divEarnings.appendChild(spanEarnings1);

   document.getElementById('earnings').appendChild(divEarnings)

   //transaction
   
   const completedTransactions = document.createElement('h1');
   completedTransactions.classList.add('mt-1');
   completedTransactions.classList.add('mb-3');
   const cancelledTransactions = document.createElement('h5');
   cancelledTransactions.classList.add('mt-1');
   cancelledTransactions.classList.add('mb-3');
   
   completedTransactions.textContent = '$'+(deposite).toFixed(2);
   
   document.getElementById('transaction').appendChild(completedTransactions);
   document.getElementById('transaction').appendChild(cancelledTransactions);

   const divTransaction = document.createElement('div')
   divTransaction.classList.add('mb-0');

   const spanTransaction = document.createElement('span');
   spanTransaction.classList.add('text-primary');
   spanTransaction.textContent = 'Since ';

   const transaction = document.createElement('i');
   transaction.classList.add('mdi');
   transaction.classList.add('mdi-arrow-bottom-right');
   
   const spanTransaction1 = document.createElement('span');
   spanTransaction1.classList.add('text-muted');
   spanTransaction1.textContent = timeT
   divTransaction.appendChild(spanTransaction);
   spanTransaction.appendChild(transaction);
   divTransaction.appendChild(spanTransaction1);

   document.getElementById('transaction').appendChild(divTransaction)

  } catch (error) {
    localStorage.removeItem('token')
    console.log('Not Registred user. please register')
  
    
  }   

})
 

