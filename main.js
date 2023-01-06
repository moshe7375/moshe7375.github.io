document.getElementById('body') .onscroll = () => {
    console.log(scrollY)
    if(scrollY >= 675){
        document.querySelector('.sub-buffer') .style = 'width: 90%';
    } else {
        document.querySelector('.sub-buffer') .style = 'width: 0%'
    }

    if(scrollY >= 1800){
        document.querySelector('.sub-buffer-two') .style = 'width: 90%';
    } else {
        document.querySelector('.sub-buffer-two') .style = 'width: 0%'
    }
}