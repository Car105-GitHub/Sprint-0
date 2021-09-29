let validaUsr = () => {

    let enviarBtn = document.getElementById("enviarBtn");    
    enviarBtn.addEventListener('click', (event) => {
        
        event.preventDefault();
        let enlacePagina = document.createElement('a');
        enlacePagina.href = 'adm-intro.html';
        enlacePagina.click();

    })
}
validaUsr();

// pills-home-tab // Perfiles

// pills-profile-tab // Usuarios

let seleccionTab = () => {

    let tabPerfiles = document.getElementById('pills-home-tab');
    let tabUsuarios = document.getElementById('pills-profile-tab');
    let pagePerfiles = document.getElementById('pills-home');
    let pageUsuarios = document.getElementById('pills-profile')

    tabPerfiles.addEventListener('click', (event) =>{

        // event.preventDefault();
        tabPerfiles.className='nav-link active';
        tabUsuarios.className='nav-link';
        pagePerfiles.className='tab-pane fade show active';
        pageUsuarios.className='tab-pane fade'        

    })

    tabUsuarios.addEventListener('click', (event) =>{

        // event.preventDefault();
        tabUsuarios.className='nav-link active';
        tabPerfiles.className='nav-link';
        pageUsuarios.className='tab-pane fade show active';
        pagePerfiles.className='tab-pane fade'


    })

}
seleccionTab();



