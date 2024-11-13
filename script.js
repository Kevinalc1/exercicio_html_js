document.getElementById("formNumber").addEventListener("submit", function(event) {
    const numeroA = parseFloat(document.getElementById("numberA").value);
    const numeroB = parseFloat(document.getElementById("numberB").value);

    if (numeroB <= numeroA) {
        document.querySelector('.message-error').style.display = 'block';
        event.preventDefault(); 
    } else {
        alert("Tudo certo.")
    }
});


