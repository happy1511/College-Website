/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}

function showImageInModal(src){
    const tag = document.getElementById('modalinner');
    const tag2 = document.getElementById("Modal")
    console.log(src)
    tag2.style.display='block'
    tag.innerHTML=`<img src=${src} style="width:100%">`
}