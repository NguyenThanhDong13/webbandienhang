document.addEventListener("DOMContentLoaded", function () {
  // Hiển thị danh sách yêu thích
  window.viewWishlist = function() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
      alert('Danh sách yêu thích trống!');
      return;
    }
    
    let message = 'Danh sách yêu thích:\n';
    wishlist.forEach(item => {
      message += `- ${item.name}: ${item.price}\n`;
    });
    alert(message);
  };
  
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentSlide = 0;
  let slideInterval;

  function initSlider() {
    showSlide(currentSlide);

    startAutoSlide();

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.addEventListener("mouseenter", pauseAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);
  }

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
      prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function pauseAutoSlide() {
    clearInterval(slideInterval);
  }

  function initCountdown() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    let countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 24);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  function initAddToCart() {
    const addToCartButtons = document.querySelectorAll(".btn-add-cart");
    const cartCount = document.querySelector(".cart-count");
    
    console.log('initAddToCart found buttons:', addToCartButtons.length);
    console.log('Cart count element:', cartCount);

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        
        // Lấy thông tin sản phẩm
        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector(".product-name").textContent;
        const productPrice = productCard.querySelector(".current-price").textContent;
        const productImage = productCard.querySelector("img").src;
        
        // Tạo ID sản phẩm từ tên
        const productId = productName.toLowerCase().replace(/\s+/g, '-').substring(0, 20);
        
        // Lấy giỏ hàng từ localStorage
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Kiểm tra xem sản phẩm đã có trong giỏ chưa
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
          });
        }
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Cập nhật số lượng hiển thị
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
          el.textContent = totalItems;
        });
        
        // Hiệu ứng
        let currentCount = parseInt(cartCount.textContent);
        currentCount++;
        cartCount.textContent = currentCount;
        cartCount.classList.add("pulse");
        setTimeout(() => {
          cartCount.classList.remove("pulse");
        }, 500);
        
        showNotification(`Đã thêm ${productName} vào giỏ hàng`);
      });
    });
  }

  function initWishlist() {
    const wishlistButtons = document.querySelectorAll(".btn-wishlist");
    
    console.log('initWishlist found buttons:', wishlistButtons.length);

    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        
        const icon = this.querySelector("i");
        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector(".product-name").textContent;
        
        if (icon.classList.contains("far")) {
          icon.classList.remove("far");
          icon.classList.add("fas");
          icon.style.color = "#e74c3c";
          
          // Lưu vào wishlist localStorage
          let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
          if (!wishlist.find(item => item.name === productName)) {
            wishlist.push({
              name: productName,
              image: productCard.querySelector("img").src,
              price: productCard.querySelector(".current-price").textContent
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
          }
          
          showNotification(`Đã thêm ${productName} vào yêu thích`);
        } else {
          icon.classList.remove("fas");
          icon.classList.add("far");
          icon.style.color = "";
          
          // Xóa khỏi wishlist
          let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
          wishlist = wishlist.filter(item => item.name !== productName);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          
          showNotification(`Đã xóa ${productName} khỏi yêu thích`);
        }
      });
    });
  }

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--primary);
      color: white;
      padding: 15px 20px;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  initSlider();
  initCountdown();
  initAddToCart();
  initWishlist();
  initSearchClear();
  initSearch();

  function initSearchClear() {
    const clearButtons = document.querySelectorAll('.search-clear');
    
    clearButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const searchInput = this.previousElementSibling;
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
      });
    });
  }

  function initSearch() {
    console.log('initSearch called');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    console.log('Search input:', searchInput);
    console.log('Search button:', searchBtn);
    
    if (!searchInput || !searchBtn) {
      console.log('Search elements not found on this page');
      return;
    }
    
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      console.log('Searching for:', searchTerm);
      
      if (searchTerm === '') {
        showNotification('Vui lòng nhập từ khóa tìm kiếm');
        return;
      }
      
      // Tìm tất cả sản phẩm trên trang - tìm nhiều loại class khác nhau
      const productCards = document.querySelectorAll('.product-card, .product, .slider-item, [data-brand]');
      console.log('Found product cards:', productCards.length);
      
      if (productCards.length === 0) {
        showNotification('Không tìm thấy sản phẩm nào trên trang này');
        return;
      }
      
      productCards.forEach(card => {
        // Kiểm tra textContent của card
        const productName = card.textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
      
      // Kiểm tra xem có sản phẩm nào hiển thị không
      const visibleCards = Array.from(productCards).filter(card => card.style.display !== 'none');
      console.log('Visible cards:', visibleCards.length);
      
      if (visibleCards.length > 0) {
        showNotification(`Tìm thấy ${visibleCards.length} sản phẩm với từ khóa: "${searchTerm}"`);
        // Cuộn đến phần sản phẩm
        const productSection = document.querySelector('.product-section, .products, .product-list, .category-products, .brand-section, .phone-products, .product-grid, .fashion-products');
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        showNotification(`Không tìm thấy sản phẩm với từ khóa: "${searchTerm}"`);
        // Hiển thị lại tất cả sản phẩm
        productCards.forEach(card => {
          card.style.display = '';
        });
      }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }

  const style = document.createElement("style");
  style.textContent = `
    .pulse {
      animation: pulse 0.5s ease;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
  
});

document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if(menuBtn && menu){

    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });

  }

});


