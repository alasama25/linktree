// Trigger Pinterest animation on page load
window.addEventListener('DOMContentLoaded', () => {
  const pinterestCard = document.querySelector('.pinterest-animate');
  if (pinterestCard) {
    setTimeout(() => {
      pinterestCard.classList.add('active');
    }, 400);
  }
});

// Add ripple effect and handle navigation for link cards
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple effect
        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);

        // Calculate ripple position relative to the clicked element
        let x = e.clientX - this.getBoundingClientRect().left;
        let y = e.clientY - this.getBoundingClientRect().top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);

        // Navigate to the URL stored in data-url attribute
        const url = this.dataset.url;
        if (url) {
            // Add a small delay to allow ripple to start before navigating
            setTimeout(() => {
                window.open(url, '_blank'); // Open in a new tab
            }, 150); 
        }
    });
});

// Add cursor pointer on hover (already handled by CSS for .link-card, but kept for other potential elements)
document.querySelectorAll('[data-url]').forEach(el => {
    el.style.cursor = 'pointer';
});
