const burger = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const close = document.getElementById('close')

burger.addEventListener('click' , ()=>{
    navigation.style.display = "flex"
    document.body.style.background = "#0c0b09dc"
})

close.addEventListener('click' , () => {
    navigation.style.display = "none"
    document.body.style.background = "none"
})

