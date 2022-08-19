var projectsArray = document.getElementById("test");
var n=0;

updateButtons();

function slidePlus()
{
    // finding the current position of the projects that are showing
    for (var i = 1; i < projectsArray.childNodes.length-1; i+=2)
    { 
        if (projectsArray.childNodes[i].className == "project-card active")
        {
            // i is the current position and we want it to increase so n=i+2
            n=i+2;
            break;
        }
    }
    // removing all the actives in the projects
    for (var i = 1; i < projectsArray.childNodes.length-1; i+=2)
    { 
        projectsArray.childNodes[i].className = "project-card unactive";
    }

    // addings actives only to the ones that are now needed, which is n and its consecutive 2 projects
    projectsArray.childNodes[n].className = "project-card active";
    projectsArray.childNodes[n+2].className = "project-card active";
    projectsArray.childNodes[n+4].className = "project-card active";

    updateButtons(n-2); // -2 because we did +2 earlier
}

function slideMinus()
{
    // finding the current position of the projects that are showing
    for (var i = 1; i < projectsArray.childNodes.length-1; i+=2)
    { 
        if (projectsArray.childNodes[i].className == "project-card active")
        {
            // i is the current position and we want it to decrease so n=i-2
            n=i-2;
            break;
        }
    }
    
    // removing all the actives in the projects
    for (var i = 1; i < projectsArray.childNodes.length-1; i+=2)
    { 
        projectsArray.childNodes[i].className = "project-card unactive";
    }

    // addings actives only to the ones that are now needed, which is n and its consecutive 2 projects
    projectsArray.childNodes[n].className = "project-card active";
    projectsArray.childNodes[n+2].className = "project-card active";
    projectsArray.childNodes[n+4].className = "project-card active";

    updateButtons(n+2); // +2 because we did -2 earlier
}

function updateButtons(n)
{
    // disables left arrow if first project is reached else enable it
    if(projectsArray.childNodes[1].className == "project-card active")
    {
        var temp = document.getElementById("projectArrowPrevious");
        temp.style.pointerEvents = "none";
        temp.style.opacity = "0.4";
    }
    else
    {
        var temp = document.getElementById("projectArrowPrevious");
        temp.style.pointerEvents = "auto";
        temp.style.opacity = "1";
    }
    
    // disables right arrow if last project is reached else enable it
    if(projectsArray.childNodes[projectsArray.childNodes.length-2].className == "project-card active")
    {
        var temp = document.getElementById("projectArrowNext");
        temp.style.pointerEvents = "none";
        temp.style.opacity = "0.4";
    }
    else
    {
        var temp = document.getElementById("projectArrowNext");
        temp.style.pointerEvents = "auto";
        temp.style.opacity = "1";
    }
}

// for nav bar, to change selected icon as user scrolls
document.addEventListener('scroll', () => {

    if (window.scrollY >= document.querySelector('#home').getBoundingClientRect().top) 
    {
        document.getElementById('home-icon').setAttribute('src','Icons/Selected/Home button.png');

        document.getElementById('projects-icon').setAttribute('src','Icons/Projects button.png');
        document.getElementById('contact-icon').setAttribute('src','Icons/Contact button.png');
        document.getElementById('about-icon').setAttribute('src','Icons/About me button.png');
    }

    if (window.scrollY >= document.querySelector('#projects').getBoundingClientRect().top) 
    {
        document.getElementById('projects-icon').setAttribute('src','Icons/Selected/Projects button.png');

        document.getElementById('home-icon').setAttribute('src','Icons/Home button.png');
        document.getElementById('contact-icon').setAttribute('src','Icons/Contact button.png');
        document.getElementById('about-icon').setAttribute('src','Icons/About me button.png');
    }
    
    if (window.scrollY >= document.querySelector('#aboutme').getBoundingClientRect().top+200) 
    {
        document.getElementById('about-icon').setAttribute('src','Icons/Selected/About me button.png');

        document.getElementById('projects-icon').setAttribute('src','Icons/Projects button.png');
        document.getElementById('contact-icon').setAttribute('src','Icons/Contact button.png');
        document.getElementById('home-icon').setAttribute('src','Icons/Home button.png');
    }
    
    if (window.scrollY >= document.querySelector('footer').getBoundingClientRect().bottom) 
    {
        document.getElementById('contact-icon').setAttribute('src','Icons/Selected/Contact button.png');

        document.getElementById('projects-icon').setAttribute('src','Icons/Projects button.png');
        document.getElementById('about-icon').setAttribute('src','Icons/About me button.png');
        document.getElementById('home-icon').setAttribute('src','Icons/Home button.png');
    }


}) 

