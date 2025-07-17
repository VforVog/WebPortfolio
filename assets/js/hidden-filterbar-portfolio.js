document.addEventListener('DOMContentLoaded', function() {
    const mainFilters = document.querySelectorAll('.portfolio-filters li');
    const certSubfilters = document.getElementById('certifications-subfilters');
    const projSubfilters = document.getElementById('projects-subfilters');

    mainFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = filter.getAttribute('data-filter');

            // Certification related
            if (filterValue === '.filter-certifications' || filterValue === '.filter-cert-cloud' || filterValue === '.filter-cert-education') {
                certSubfilters.style.display = 'flex';
                projSubfilters.style.display = 'none';
            }
            // Project related
            else if (filterValue === '.filter-projects' || filterValue === '.filter-proj-research' || filterValue === '.filter-proj-cloud' || filterValue === '.filter-proj-coding' || filterValue === '.filter-proj-business' || filterValue === '.filter-proj-security') {
                projSubfilters.style.display = 'flex';
                certSubfilters.style.display = 'none';
            }
            // Everything else (languages, all, etc.)
            else {
                certSubfilters.style.display = 'none';
                projSubfilters.style.display = 'none';
            }
        });
    });

    // Also allow clicks inside certification subfilters without hiding them
    const certSubFilterItems = document.querySelectorAll('#certifications-subfilters li');
    certSubFilterItems.forEach(subFilter => {
        subFilter.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // Also allow clicks inside project subfilters without hiding them
    const projSubFilterItems = document.querySelectorAll('#projects-subfilters li');
    projSubFilterItems.forEach(subFilter => {
        subFilter.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
