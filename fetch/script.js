const result = document.getElementById('result')

async function goGet(){
    let res = await fetch("test.html")
    let html = await res.text()
    result.innerHTML = html;
    
}