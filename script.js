document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close-btn');
  const closeFooter = document.querySelector('.close-footer');
  const adContainer = document.querySelector('.ad-container');
  const categoryButtons = document.querySelectorAll('.category-button');
  const backBtn = document.querySelector('.back-btn');
  const categories = document.querySelector('.categories');
  const detailView = document.querySelector('.detail-view');
  const adItems = document.querySelectorAll('.ad-item-content');
  
  // 페이지 상태 (main, detail)
  let currentPage = 'main';
  
  // 닫기 버튼 기능
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
  
  // 카테고리 버튼 클릭 이벤트
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const categoryItem = this.parentElement;
      
      // 현재 카테고리가 이미 활성화되어 있으면 비활성화
      if (categoryItem.classList.contains('active')) {
        categoryItem.classList.remove('active');
      } else {
        // 다른 모든 카테고리를 닫고 현재 카테고리만 활성화
        document.querySelectorAll('.category-item').forEach(item => {
          item.classList.remove('active');
        });
        categoryItem.classList.add('active');
      }
    });
  });
  
  // 아이템 클릭 이벤트 - 상세 페이지로 이동
  adItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // 특정 링크가 있는 경우 처리 안함 (새 창으로 이동)
      const parentLink = this.closest('.ad-item-link');
      const href = parentLink.getAttribute('href');
      if (href && href !== 'javascript:void(0);') {
        return; // 링크가 있으면 기본 동작 수행 (새 창 열기)
      }
      
      e.preventDefault();
      
      // 상품 정보 가져오기
      const title = this.querySelector('span').textContent;
      const description = this.querySelector('p').textContent;
      const price = this.querySelector('h3').textContent;
      const imgSrc = this.closest('.ad-item').querySelector('.ad-item-image img').src;
      
      // 상세 페이지 HTML 생성
      detailView.innerHTML = `
        <div class="detail-product">
          <div class="detail-image">
            <img src="${imgSrc}" alt="${title}" style="width: 100%; border-radius: 8px;">
          </div>
          <div class="detail-info" style="margin-top: 15px;">
            <h3 style="font-size: 16px; margin-bottom: 8px;">${title}</h3>
            <p style="font-size: 12px; color: #888; margin-bottom: 10px;">${description}</p>
            <div class="detail-price" style="font-size: 18px; font-weight: bold; color: #1a6dff;">
              ${price}
            </div>
            <button class="buy-button" style="width: 100%; padding: 12px; background-color: #1a6dff; color: white; border: none; border-radius: 8px; margin-top: 15px; cursor: pointer; font-weight: bold;">
              구매하기
            </button>
          </div>
        </div>
      `;
      
      // 이전 버튼 보이기
      if(backBtn) backBtn.classList.add('show');
      
      // 카테고리 숨기고 상세 페이지 보이기
      categories.classList.add('hide');
      detailView.classList.add('show');
      
      // 현재 페이지 상태 업데이트
      currentPage = 'detail';
    });
  });
  
  // 이전 버튼 클릭 이벤트
  if(backBtn) {
    backBtn.addEventListener('click', function() {
      if (currentPage === 'detail') {
        // 상세 페이지에서 메인으로 돌아가기
        categories.classList.remove('hide');
        detailView.classList.remove('show');
        backBtn.classList.remove('show');
        
        // 현재 페이지 상태 업데이트
        currentPage = 'main';
      }
    });
  }
}); 