window.addEventListener('load', ()=>{
    const transaction = []
    const dashboard = localStorage.getItem('dashboard')
    const details = localStorage.getItem('withdraw')
    const withdrawBtn = document.querySelector('#withdrawbtn')
    const asset = document.querySelector('#asset').value
    
    const userId = dashboard.split(',')[4]
    const amountAct = details.split(',')[0]
    const walletAct = details.split(',')[1]

    withdrawBtn.addEventListener('click', async () =>{
       
            
    try {
        const {data} = await axios.post('https://www.fox-funds.com/user/foxic/newtransaction', {
            transactionType:"Withdrawal", amount:amountAct, asset:asset, createdBy: userId, walletAddress:walletAct })

          const typeT = data.newtransaction.transactionType
           const  assetT = data.newtransaction.asset
           const amount = data.newtransaction.amount
           const status=data.newtransaction.status
           const transId = data.newtransaction._id
            const transwallet = data.newtransaction.walletAddress
           const time = data.newtransaction.createdAt
          transaction.push(typeT,assetT,amount,status,transId,transwallet,time)

          localStorage.setItem("transaction", transaction)
         
            window.location = "prehistory.html"
        } catch (error) {
            console.log('Can not complete transaction at the moment, try again later')
        }
    })
})