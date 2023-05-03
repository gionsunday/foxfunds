window.addEventListener('load', () => {
    const ava = [100, 200]
   const availableAccs = localStorage.getItem("LogprofileDetails")  || ava
    /*const accStatus = document.querySelector('#accountstatus')
    const accValue = document.querySelector('#accvalue')
    const accBtn = document.querySelector('#acctbtn')*/
    const getstartedAmount =  localStorage.getItem('GetStartedAmount') || 300

   const availableAcc = 200 //availableAccs.split(',')[2]
    console.log(availableAcc)
   console.log(getstartedAmount)

    const remaining = getstartedAmount - availableAcc

    const fromAcct = document.createElement("input")
    fromAcct.value = "From Account"
    fromAcct.type = "botton"
    fromAcct.setAttribute("readonly", "readonly")
    fromAcct.style.padding = "2px"
    fromAcct.classList.add('btn')
    fromAcct.classList.add('btn-primary')
    fromAcct.classList.add('m-2')
    document.getElementById('acctspan').style.display ="flex"
    
    document.getElementById('acctspan').style.padding ="20px"
    document.getElementById('acctspan').style.justifyContent ="space-evenly"
    document.getElementById('acctspan').append(fromAcct)

   

    const fromDeposite = document.createElement("input")
    fromDeposite.value = "Deposite"
    fromDeposite.type = "botton"
    fromDeposite.style.padding = "2px"
    fromDeposite.classList.add('btn')
    fromDeposite.classList.add('btn-secondary')
    fromDeposite.classList.add('m-2')
    document.getElementById('acctspan').append(fromDeposite)

   if(availableAcc >= getstartedAmount){
        
        fromAcct.addEventListener('click', () =>{
            window.location = 'fromaccount.html'
        })
    }
    else{
        fromDeposite.addEventListener('click', () =>{
            window.location = 'deposite1.html'
        })
        const alertR = document.createElement('small')
        alertR.style.color = "crimson"
        alertR.textContent = `Insuficient Balance: Deposite $${remaining} to continue`
        fromAcct.style.opacity = "0.2"
        alertR.style.fontSize = "1em"
        fromAcct.style.cursor = "not-allowed"
        alertR.classList.add("text-danger")
       
        document.getElementById('alert').append(alertR)
       // accValue.textContent = `Insuficient Balance: Deposite $${remaining} to continue`
       // accStatus.textContent = `Insuficient Balance: Deposite $${remaining} to continue`
    }
    

  
})