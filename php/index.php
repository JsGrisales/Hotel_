<?php
include_once("conexionBd.php");
if(
    isset($_REQUEST['nombre'])&&
    isset($_REQUEST['email'])&&
    isset($_REQUEST['comentario'])&&
    isset($_REQUEST['tel'])
){
    almacenarDatos(
        $_REQUEST['nombre'],
        $_REQUEST['email'],
        $_REQUEST['comentario'],
        $_REQUEST['hotel'],
    );
}else{
    echo "violacion de integridad ".$_SERVER['REMOTE_ADDR'];
};

//almacenar datos
function almacenarDatos($nombre,$email,$comentario,$tel){
    $wsp="+573321554";
    $comentario="sdsdsdsnbdjsbgdhsgvdhsdhgsgdsdg";
    $sql = "INSERT INTO `informacion`(
        `id_informacion`,
        `nombre_persona`,
        `correo_persona`,
        `numero_whatsapp`,
        `comentario_persona`,
        `apellido_persona`
        )VALUES (
            NULL,
            \"$nombre\",
            \"$correo\",
            \"$wsp\",
            \"$comentario\",
            \"$apellido\"
            );";

    if(con()->query($sql) == TRUE){
        echo "almacenado correctamente";
    }else{
        echo "los datos no se almacenaron";
    }
}
?>