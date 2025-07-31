<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $empresa = htmlspecialchars($_POST['empresa']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    if ($email) {
        $destinatario = "nicolas.gauna@consulting.com.ar"; // Cambialo si necesitás
        $asunto = "Nueva consulta desde el sitio web";
        $contenido = "Nombre: $nombre\n";
        $contenido .= "Empresa: $empresa\n";
        $contenido .= "Email: $email\n";
        $contenido .= "Mensaje:\n$mensaje";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($destinatario, $asunto, $contenido, $headers)) {
            // Redirigir a una página de agradecimiento
            header("Location: gracias.html");
            exit();
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Email inválido.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
