// Product data with accessories
const productData = {
  1: {
    title: "Súng Đồ Chơi Mô Hình AK-47",
    currentPrice: "250.000₫",
    originalPrice: "300.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-bullseye", name: "Băng đạn" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-shield-alt", name: "Bảo vệ mắt" },
    ],
  },
  2: {
    title: "Súng Lục Đồ Chơi M1911",
    currentPrice: "180.000₫",
    originalPrice: "220.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-bullseye", name: "Băng đạn" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
    ],
  },
  3: {
    title: "Súng Bắn Đạn Nerf Elite",
    currentPrice: "450.000₫",
    originalPrice: "550.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-bullseye", name: "Đạn Nerf" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-shield-alt", name: "Bảo vệ mắt" },
      { icon: "fas fa-bullseye", name: "Băng đạn phụ" },
    ],
  },
  4: {
    title: "Kiếm Nhựa Samurai",
    currentPrice: "150.000₫",
    originalPrice: "180.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-shield-alt", name: "Bao kiếm" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
    ],
  },
  5: {
    title: "Kiếm Ánh Sáng Star Wars",
    currentPrice: "320.000₫",
    originalPrice: "380.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-battery-full", name: "Pin AA" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-shield-alt", name: "Bao kiếm" },
    ],
  },
  6: {
    title: "Bộ Súng Cao Bồi",
    currentPrice: "280.000₫",
    originalPrice: "350.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-bullseye", name: "Băng đạn" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-hat-cowboy", name: "Đai đeo" },
    ],
  },
  7: {
    title: "Súng Bắn Đĩa Bay",
    currentPrice: "380.000₫",
    originalPrice: "450.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-compact-disc", name: "Đĩa bay" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-shield-alt", name: "Bảo vệ mắt" },
    ],
  },
  8: {
    title: "Súng Nước Automatic",
    currentPrice: "220.000₫",
    originalPrice: "280.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-tint", name: "Bình nước" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
    ],
  },
  9: {
    title: "Kiếm Gỗ Tập Luyện",
    currentPrice: "120.000₫",
    originalPrice: "150.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-shield-alt", name: "Bao kiếm" },
    ],
  },
  10: {
    title: "Súng Đồ Chơi Sniper",
    currentPrice: "320.000₫",
    originalPrice: "380.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-bullseye", name: "Băng đạn" },
      { icon: "fas fa-telescope", name: "Ống ngắm" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
    ],
  },
  11: {
    title: "Bộ Kiếm Hiệp Sĩ",
    currentPrice: "280.000₫",
    originalPrice: "350.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-shield-alt", name: "Bao kiếm" },
      { icon: "fas fa-shield", name: "Khiên nhỏ" },
    ],
  },
  12: {
    title: "Súng Bắn Bóng Nerf",
    currentPrice: "350.000₫",
    originalPrice: "420.000₫",
    accessories: [
      { icon: "fas fa-box", name: "Hộp đựng" },
      { icon: "fas fa-basketball", name: "Bóng Nerf" },
      { icon: "fas fa-toolbox", name: "Dụng cụ vệ sinh" },
      { icon: "fas fa-shield-alt", name: "Bảo vệ mắt" },
    ],
  },
};

// Type data for category modals
const typeData = {
  sung: {
    title: "Súng Đồ Chơi",
    icon: "fas fa-gun",
    product: {
      title: "Súng Đồ Chơi Cao Cấp",
      desc: "Bộ sưu tập súng đồ chơi mô hình đa dạng, chất liệu nhựa an toàn, thiết kế chân thực. Phù hợp cho trẻ em từ 8 tuổi trở lên.",
      currentPrice: "250.000₫ - 450.000₫",
      originalPrice: "300.000₫ - 550.000₫",
    },
  },
  kiem: {
    title: "Kiếm Đồ Chơi",
    icon: "fas fa-sword",
    product: {
      title: "Kiếm Đồ Chơi An Toàn",
      desc: "Các loại kiếm đồ chơi làm từ nhựa dẻo và gỗ, không gây thương tích. Thiết kế dựa trên các nhân vật phim ảnh nổi tiếng.",
      currentPrice: "120.000₫ - 320.000₫",
      originalPrice: "150.000₫ - 380.000₫",
    },
  },
  sungban: {
    title: "Súng Bắn Đạn",
    icon: "fas fa-crosshairs",
    product: {
      title: "Súng Bắn Đạn An Toàn",
      desc: "Súng bắn đạn Nerf, súng nước, súng bắn đĩa với cơ chế an toàn. Đạn làm từ xốp mềm, không gây nguy hiểm.",
      currentPrice: "220.000₫ - 450.000₫",
      originalPrice: "280.000₫ - 550.000₫",
    },
  },
  phukien: {
    title: "Phụ Kiện",
    icon: "fas fa-toolbox",
    product: {
      title: "Phụ Kiện Đồ Chơi",
      desc: "Các phụ kiện đi kèm như băng đạn, ống ngắm, bao kiếm, dụng cụ vệ sinh và bảo vệ an toàn khi sử dụng.",
      currentPrice: "50.000₫ - 150.000₫",
      originalPrice: "80.000₫ - 200.000₫",
    },
  },
};

// DOM Elements
const productModal = document.getElementById("productModal");
const typeModal = document.getElementById("typeModal");
const modalClose = document.getElementById("modalClose");
const typeModalClose = document.getElementById("typeModalClose");
const filterButtons = document.querySelectorAll(".filter-btn");
const typeItems = document.querySelectorAll(".type-item");
const detailButtons = document.querySelectorAll(".btn-details");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners();
  initializeProductFilter();
  checkAuthStatus();
});

// Initialize event listeners
function initializeEventListeners() {
  // Modal close events
  modalClose.addEventListener("click", closeProductModal);
  typeModalClose.addEventListener("click", closeTypeModal);

  // Close modal when clicking outside
  productModal.addEventListener("click", function (e) {
    if (e.target === productModal) {
      closeProductModal();
    }
  });

  typeModal.addEventListener("click", function (e) {
    if (e.target === typeModal) {
      closeTypeModal();
    }
  });

  // Product detail buttons
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      openProductModal(productId);
    });
  });

  // Type items click events
  typeItems.forEach((item) => {
    item.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      openTypeModal(type);
    });
  });

  // Wishlist buttons
  const wishlistButtons = document.querySelectorAll(".btn-wishlist");
  wishlistButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleWishlist(this);
    });
  });

  // Search functionality
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Cart functionality
  const cartButtons = document.querySelectorAll(".btn-buy");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      addToCart(this);
    });
  });
}

// Product filter functionality
function initializeProductFilter() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter products
      filterProducts(category);
    });
  });
}

// Filter products by category
function filterProducts(category) {
  const productCards = document.querySelectorAll(".product-card");
  const categorySections = document.querySelectorAll(".category-section");

  if (category === "all") {
    // Show all products and sections
    productCards.forEach((card) => {
      card.style.display = "block";
    });
    categorySections.forEach((section) => {
      section.style.display = "block";
    });
  } else {
    // Hide all sections first
    categorySections.forEach((section) => {
      section.style.display = "none";
    });

    // Show only the selected category section
    const targetSection = document.getElementById(category);
    if (targetSection) {
      targetSection.style.display = "block";
    }

    // Filter individual products
    productCards.forEach((card) => {
      if (card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
}

// Open product modal with details
function openProductModal(productId) {
  const product = productData[productId];

  if (product) {
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalCurrentPrice").textContent =
      product.currentPrice;
    document.getElementById("modalOriginalPrice").textContent =
      product.originalPrice;

    // Set accessories
    const accessoriesContainer = document.getElementById("modalAccessories");
    accessoriesContainer.innerHTML = "";

    product.accessories.forEach((accessory) => {
      const accessoryItem = document.createElement("div");
      accessoryItem.className = "accessory-item";
      accessoryItem.innerHTML = `
                <div class="accessory-icon">
                    <i class="${accessory.icon}"></i>
                </div>
                <div class="accessory-name">${accessory.name}</div>
            `;
      accessoriesContainer.appendChild(accessoryItem);
    });

    productModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Close product modal
function closeProductModal() {
  productModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Open type modal
function openTypeModal(type) {
  const typeInfo = typeData[type];

  if (typeInfo) {
    document.getElementById("modalTypeTitle").textContent = typeInfo.title;

    const typeIcon = document.getElementById("modalTypeIcon");
    typeIcon.innerHTML = `<i class="${typeInfo.icon}"></i>`;

    document.getElementById("modalTypeProductTitle").textContent =
      typeInfo.product.title;
    document.getElementById("modalTypeProductDesc").textContent =
      typeInfo.product.desc;
    document.getElementById("modalTypeCurrentPrice").textContent =
      typeInfo.product.currentPrice;
    document.getElementById("modalTypeOriginalPrice").textContent =
      typeInfo.product.originalPrice;

    typeModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Close type modal
function closeTypeModal() {
  typeModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Toggle wishlist
function toggleWishlist(button) {
  const icon = button.querySelector("i");

  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
    icon.style.color = "#cd853f";
    showNotification("Đã thêm vào yêu thích");
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
    icon.style.color = "";
    showNotification("Đã xóa khỏi yêu thích");
  }
}

// Add to cart functionality
function addToCart(button) {
  const cartCount = document.querySelector(".cart-count");
  let count = parseInt(cartCount.textContent);
  count++;
  cartCount.textContent = count;

  showNotification("Đã thêm vào giỏ hàng");

  // Add animation to cart icon
  const cartIcon = document.querySelector(".fa-shopping-cart").parentElement;
  cartIcon.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartIcon.style.transform = "scale(1)";
  }, 300);
}

// Search functionality
function performSearch() {
  const searchInput = document.querySelector(".search-input");
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm) {
    const productCards = document.querySelectorAll(".product-card");
    let found = false;

    productCards.forEach((card) => {
      const productName = card
        .querySelector(".product-name")
        .textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        card.style.display = "block";
        found = true;

        // Highlight the product
        card.style.animation = "highlight 2s ease";
        setTimeout(() => {
          card.style.animation = "";
        }, 2000);
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      showNotification("Không tìm thấy sản phẩm nào phù hợp");
    }
  } else {
    showNotification("Vui lòng nhập từ khóa tìm kiếm");
  }
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Check authentication status
function checkAuthStatus() {
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");
  const logoutLink = document.getElementById("logout-link");

  // Simulate checking if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutLink.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }

  // Logout functionality
  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem("isLoggedIn", "false");
      checkAuthStatus();
      showNotification("Đã đăng xuất");
    });
  }
}

// Add CSS for highlight animation
const style = document.createElement("style");
style.textContent = `
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(205, 133, 63, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(205, 133, 63, 0); }
        100% { box-shadow: 0 0 0 0 rgba(205, 133, 63, 0); }
    }
    
    .notification {
        font-family: inherit;
    }
`;
document.head.appendChild(style);
