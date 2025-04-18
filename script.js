document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close-btn');
  const closeFooter = document.querySelector('.close-footer');
  const adContainer = document.querySelector('.ad-container');
  const categoryButtons = document.querySelectorAll('.category-button');
  
  function closeAd() {
    adContainer.style.animation = 'slideUp 0.3s ease-out reverse forwards';
    setTimeout(() => {
      adContainer.style.display = 'none';
    }, 300);
  }
  
  if(closeBtn) {
    closeBtn.addEventListener('click', closeAd);
  }
  
  if(closeFooter) {
    closeFooter.addEventListener('click', closeAd);
  }
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const categoryItem = this.parentElement;
      
      if (categoryItem.classList.contains('active')) {
        categoryItem.classList.remove('active');
      } else {
        document.querySelectorAll('.category-item').forEach(item => {
          item.classList.remove('active');
        });
        categoryItem.classList.add('active');
      }
    });
  });
}); 