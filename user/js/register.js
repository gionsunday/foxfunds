const dataT = []
window.addEventListener('load', () => {
    const form = document.querySelector('#form')
    const regUsername = document.querySelector('#regusername')
    const regEmail = document.querySelector('#regemail')
    const regPasswordd = document.querySelector('#regpassword')
    const registerBtn = document.querySelector('#registerBtn')

  
   registerBtn.addEventListener('click', async (e)=>{
    e.preventDefault()
    
  const email= regEmail.value
  const password = regPasswordd.value
  const name= regUsername.value
  const today = new Date();
  const date = (today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()).toString()
  console.log(date)
  dataT.push(name, email, password)
   if (!email || !name || !password) {
     document.getElementById('noinfo').textContent = 'please provide usename and password'
     
   }
    try {
      const {data} = await axios.post('/foxic/auth/register', {
       name:name, email:email,password:password, regTime:date })
      
      
      const code = data.code
      localStorage.setItem('code', code)
      console.log(code)
      regEmail.value = ''
      regPasswordd.value = ''
      regUsername.value =''
      dataT.push(code)
      localStorage.setItem('DATA', dataT)
      
      console.log(data)
     
      
    window.location = 'verification.html'
      document.getElementById('status').textContent= 'token present'
    } catch (error) {
      setTimeout(()=>{

        document.getElementById('error').textContent = 'User with email exist. Please choose another email'
        localStorage.removeItem('token')
      }, 3000)
    }
    setTimeout(() =>{
      
    },2000)
 })
  

}) 


