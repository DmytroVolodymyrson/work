document.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    let notice = event.target.querySelector('[role="status"]');
    if (!notice) {
        notice = document.createElement('p');
        notice.setAttribute('role', 'status');
        event.target.append(notice);
    }
    notice.textContent = 'Archived example — submissions are disabled. Nothing was sent.';
}, true);
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelectorAll('.menu_active, .header__nav_active, .hamburger_active, .sliding-strip_active').forEach(function (element) {
            element.classList.remove('menu_active', 'header__nav_active', 'hamburger_active', 'sliding-strip_active');
        });
        document.body.classList.remove('body-fix');
    });
});
