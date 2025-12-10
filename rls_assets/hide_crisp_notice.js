<script>
// repeatedly check for the invalid Crisp notice and hide it
const hideCrispNotice = () => {
    const notice = document.querySelector('span.cc-1442g');
    if (notice) {
        notice.style.display = 'none';
        clearInterval(intervalId); // stop checking once hidden
    }
};

// check every 300ms
const intervalId = setInterval(hideCrispNotice, 300);
</script>
