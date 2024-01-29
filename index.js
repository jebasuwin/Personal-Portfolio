function showContent(tabname) {
    var tabcontents = document.querySelectorAll('.tab-contents');
    var tablinks = document.querySelectorAll('.tab-links .tab-link');

    tabcontents.forEach(function (tabcontent) {
        if (tabcontent.id === tabname) {
            tabcontent.style.display = 'block';
        } else {
            tabcontent.style.display = 'none';
        }
    });

    tablinks.forEach(function (tablink) {
        if (tablink.getAttribute('onclick').includes(tabname)) {
            tablink.classList.add('active-link');
        } else {
            tablink.classList.remove('active-link');
        }
    });
}










