
function e(e) {
    return document.getElementById(e);
}

e("search-id").addEventListener('input', showToolTipSearch);

function showToolTipSearch() {
    console.log(e("search-id").value.length)
    if (e("search-id").value.length > 0) {
        e("ttsearch").style.opacity = "1";
    } else {
        e("ttsearch").style.opacity = "0";
    }
}