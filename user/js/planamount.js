function getstartedAmount(invest) {
    const getstartedAmount = invest.id
    const plan = invest.name
    console.log(getstartedAmount)
   
    localStorage.setItem("GetStartedAmount", getstartedAmount)
    localStorage.setItem("StartedAmount", getstartedAmount)
    localStorage.setItem("Plan", plan)
}