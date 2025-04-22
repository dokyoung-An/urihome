document.addEventListener('DOMContentLoaded', function() {
  const adItems = document.querySelectorAll('.ad-item-content-films');
  
  // 기본 링크 동작 설정 (특정 링크가 아닌 경우)
  document.querySelectorAll('.ad-item-link-films').forEach(link => {
    if (link.getAttribute('href') === 'javascript:void(0);') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // 새 창에서 열기 (필요에 따라 URL 수정 가능)
        window.open('https://woozipsa.com', '_blank');
      });
    }
  });
}); 