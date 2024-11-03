
document.addEventListener("mouseup" , ()=>{
    const selectText = window.getSelection().toString();

    if (selectText)
        alert(selectText)
})