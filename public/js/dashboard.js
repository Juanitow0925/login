document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            fetch('/auth/logout', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert(data.message);
                    window.location.href = 'index.html';
                } else {
                    alert(data.message);
                }
            });
        });
    }
});
