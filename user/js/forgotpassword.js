window.addEventListener('load', () => {
    const emailP = document.querySelector('#resetemail')
    const passwordbtn = document.querySelector('#passwordbtn')
    const alertP = document.querySelector('#alertP')

    passwordbtn.addEventListener('click', async (e) =>{
        e.preventDefault()
        const email = emailP.value
        if(!email){
            console.log('please provide email')
            alertP.style.display ="block"
        }
         try {
             const {data} = await axios.post('/foxic/auth/beforeforgot', {email:email})
             emailP.value =" "
         
             const code = data.code;
             console.log(data)
             const resetDetails = 
             resetDetails.push(code, email)
             localStorage.setItem('passwordresetcode', resetDetails)
             window.location = 'forgotcode.html'
         } catch (error) {
             console.log(error)
                 alertP.textContent="User not found for email/invalid email"
             alertP.style.display="block"
         }
    })
})