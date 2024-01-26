function toggleKeyShow() {
    var showkeys = window.document.querySelector('label .switch')
    showkeys.addEventListener('click', () => {
        showkeys.classList.toggle('keys_active')
        
    })
}

toggleKeyShow()
