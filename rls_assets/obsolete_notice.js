document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "Archived Notice",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>You are viewing an archived project.<br><br>Content and design may be outdated and is no longer affiliated with the original entity.`,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            cancelButtonText: `Visit Current Website <i class="fa fa-external-link"></i>`,
            footer: 'Copyright © 2024&nbsp;<a href="https://fitri.my" target="_blank" rel="noopener noreferrer" class="custom-footer-link">Mohd Fitri Zulkaffli <i class="fas fa-external-link-alt"></i></a>',
            confirmButtonColor: "#660099",
            cancelButtonColor: "#09000E",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'swal-title',
                htmlContainer: 'swal-html',
                footer: 'swal-footer'
            },
            didOpen: () => {
                const swalTitle = Swal.getTitle();
                const swalHtml = Swal.getHtmlContainer();
                const swalFooter = Swal.getFooter();
            
                if (swalTitle) swalTitle.style.color = "#09000E";
                if (swalHtml) swalHtml.style.color = "#09000E";
                if (swalFooter) {
                    swalFooter.style.color = "#09000E";
                    const footerLinks = swalFooter.querySelectorAll('a');
                    footerLinks.forEach(link => link.style.color = "#09000E");
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                popupOpen = false;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.open("https://fitri.my/", "noopener,noreferrer,nofollow");
            }
        });
        popupOpen = true;
    }

    window.addEventListener('blur', function() {
        if (popupOpen) {
            Swal.close();
        }
    });

    window.addEventListener('focus', function() {
        if (popupOpen) {
            openPopup();
        }
    });

    openPopup();
});
