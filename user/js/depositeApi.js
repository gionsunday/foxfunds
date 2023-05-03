window.addEventListener('load', () =>{
    const transaction = []
    const amountT = localStorage.getItem('amount')
    const dashboard = localStorage.getItem('dashboard')
    const assett = document.querySelector('#asset')
    const depositebtn = document.querySelector('#depositebtn')
    console.log(amountT)



    depositebtn.addEventListener('click', async () => {
        const asset = assett.textContent
        console.log(asset)
        const transactionType = 'deposite'
        const token = dashboard.split(',')[0]
        const userId = dashboard.split(',')[4]
        console.log(token)
        try {
           const {data} = await axios.post('/foxic/newtransaction', {
                transactionType:'Deposite', 
                 asset:asset, 
                 amount:amountT,
                 createdBy: userId
            
        })
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
            console.log(error)
        }
        
    })
})