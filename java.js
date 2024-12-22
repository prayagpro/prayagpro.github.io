// JavaScript for interactivity
document.getElementById('readMore').addEventListener('click', function () {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.innerText = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.innerText = 'Read More';
    }
});