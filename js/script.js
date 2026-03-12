document.addEventListener("DOMContentLoaded", function () {
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

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        let currentCount = parseInt(cartCount.textContent);
        currentCount++;
        cartCount.textContent = currentCount;
        cartCount.classList.add("pulse");
        setTimeout(() => {
          cartCount.classList.remove("pulse");
        }, 500);
        const productName =
          this.closest(".product-card").querySelector(
            ".product-name"
          ).textContent;
        showNotification(`Đã thêm ${productName} vào giỏ hàng`);
      });
    });
  }

  function initWishlist() {
    const wishlistButtons = document.querySelectorAll(".btn-wishlist");

    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const icon = this.querySelector("i");
        if (icon.classList.contains("far")) {
          icon.classList.remove("far");
          icon.classList.add("fas");
          icon.style.color = "#e74c3c";
          const productName =
            this.closest(".product-card").querySelector(
              ".product-name"
            ).textContent;
          showNotification(`Đã thêm ${productName} vào yêu thích`);
        } else {
          icon.classList.remove("fas");
          icon.classList.add("far");
          icon.style.color = "";
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
