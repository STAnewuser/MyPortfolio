function showTab(tabName) {
    // Hide all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Show the selected tab
    document.getElementById(tabName).style.display = "block";
}
// Add this function to filter projects based on technology
function filterProjects() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById('projectList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

// Add this function to dynamically load project items
function loadProjects() {
    var projects = [
        { name: 'Project 1', technology: 'Java' },
        { name: 'Project 2', technology: 'C#' },
        { name: 'Project 3', technology: 'Node.js' },
        // Add more projects as needed
    ];

    var projectList = document.getElementById('projectList');

    // Clear existing list items
    projectList.innerHTML = '';

    // Populate the project list
    projects.forEach(function (project) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = project.name + ' (' + project.technology + ')';
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
}

// Call the loadProjects function when the projects tab is shown
document.getElementById('projects').addEventListener('click', function () {
    loadProjects();
    filterProjects(); // To ensure all projects are visible initially
});

// Add this function to dynamically load certification items
function loadCertifications() {
    var certifications = [
        { name: 'Certification 1', agency: 'Certification Agency 1' },
        { name: 'Certification 2', agency: 'Certification Agency 2' },
        // Add more certifications as needed
    ];

    var certificationsList = document.getElementById('certificationsList');

    // Clear existing list items
    certificationsList.innerHTML = '';

    // Populate the certifications list
    certifications.forEach(function (certification) {
        var listItem = document.createElement('li');
        var text = document.createTextNode(`${certification.name} - ${certification.agency}`);
        listItem.appendChild(text);
        certificationsList.appendChild(listItem);
    });
}

// Call the loadCertifications function when the certifications tab is shown
document.getElementById('certifications').addEventListener('click', function () {
    loadCertifications();
});
