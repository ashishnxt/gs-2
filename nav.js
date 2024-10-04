/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navproId) =>{
    const toggle = document.getElementById(toggleId),
          navpro = document.getElementById(navproId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to navpro menu
        navpro.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('navpro-toggle','navpro-menu')