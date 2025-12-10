document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "Archived Notice",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>You are viewing an archived project.<br>Content and design may be outdated and<br>is no longer affiliated with the original entity.`,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            cancelButtonText: `Visit Current Website <i class="fa fa-external-link"></i>`,
            footer: '© 2024&nbsp;<a href="https://fitri.my" target="_blank" rel="noopener noreferrer" class="custom-footer-link">Mohd Fitri Zulkaffli <i class="fa fa-external-link"></i></a>. All rights reserved.',
            confirmButtonColor: "#660099",
            cancelButtonColor: "#09000E",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
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
