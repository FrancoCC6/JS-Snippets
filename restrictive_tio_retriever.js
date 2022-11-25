try {
    const REQ_COMMIT = new XMLHttpRequest();
    
    REQ_COMMIT.open(
        'GET', 
        'https://api.github.com/repos/FrancoCC6/JS-Snippets/branches', 
        false
    );
    REQ_COMMIT.send(null);

    if (REQ_COMMIT.status != 200)
        throw `No se pudo hacer la conexion con GitHub (Codigo ${REQ_COMMIT.status}). Proceso interrumpido.`;
    
    const LAST_COMMIT = (JSON.parse(REQ_COMMIT.responseText))[0].commit.sha,
          REQ_CODE    = new XMLHttpRequest();
    
    REQ_CODE.open(
        'GET', 
        `https://cdn.jsdelivr.net/gh/FrancoCC6/JS-Snippets@${LAST_COMMIT}/restrictive_tio_snippet.js`, 
        false
    );
    REQ_CODE.send(null);

    if (REQ_CODE.status != 200)
        throw `No se pudo hacer la conexion con JSDelivr (Codigo ${REQ_CODE.status}). Proceso interrumpido.`;

    const RECONFIGURAR_PAGINA = new Function(REQ_CODE.responseText);

    RECONFIGURAR_PAGINA();
}
catch (mensaje_error) {
    console.log(mensaje_error);
}