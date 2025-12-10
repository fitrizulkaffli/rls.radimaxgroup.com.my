document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "This Website is Obsolete",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>This website is outdated and has been archived.<br>It no longer reflects the current status or updates and is no longer affiliated with the company.`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            cancelButtonText: `Parent Company Website <i class="fa fa-external-link"></i>`,
            footer: 'Another website design by&nbsp;<a href="https://fitri.my" target="_blank" rel="noopener noreferrer" class="custom-footer-link">Mohd Fitri Zulkaffli <i class="fa fa-external-link"></i></a>',
            confirmButtonColor: "#2A52BE",
            cancelButtonColor: "#24252B",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                popupOpen = false;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.open("https://www.radimaxgroup.com.my/", "noopener,noreferrer,nofollow");
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
