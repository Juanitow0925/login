document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Convertir FormData a JSON
            const formData = new FormData(loginForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log('Enviando datos de login:', data);

            fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Asegúrate de enviar JSON
                },
                body: JSON.stringify(data) // Convertir datos a JSON
            })
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor de login:', data);
                if (data.status === 'success') {
                    // Redirigir según el rol del usuario
                    switch (data.role) {
                        case 'Administrador':
                            window.location.href = 'admin.html';
                            break;
                        case 'Monitora':
                            window.location.href = 'monitora.html';
                            break;
                        case 'Conductor':
                            window.location.href = 'conductor.html';
                            break;
                        case 'Acudiente':
                            window.location.href = 'acudiente.html';
                            break;
                        default:
                            alert('Rol desconocido.');
                    }
                } else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud de login:', error);
            });
        });
    }
});
