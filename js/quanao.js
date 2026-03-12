// DOM Elements
const filterButtons = document.querySelectorAll(".filter-btn");
const brandSections = document.querySelectorAll(".brand-section");
const productCards = document.querySelectorAll(".product-card");
const detailButtons = document.querySelectorAll(".btn-details");
const modalOverlay = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const addToCartButtons = document.querySelectorAll(".btn-add-cart");
const wishlistButtons = document.querySelectorAll(".btn-wishlist");

// Product Data
const products = {
  balenciaga1: {
    title: "Balenciaga Logo Hoodie",
    image:
      "https://sneakerdaily.vn/wp-content/uploads/2023/11/Ao-Balenciaga-X-Rated-Small-Fit-Hoodie-in-BlackRed-3AC40AABE1A6C0GS.jpg.webp",
    currentPrice: "11.000.000₫",
    originalPrice: "15.990.000₫",
    specs: [
      "Chất liệu: Cotton cao cấp 100%",
      "Kiểu dáng: Oversize",
      "Màu sắc: Đen/Logo trắng",
      "Xuất xứ: Pháp",
      "Bảo hành: 12 tháng",
      "Phù hợp: Mọi lứa tuổi",
    ],
  },

  balenciaga2: {
    title: "Gucci GG T-Shirt",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/duyetfashion-balenciaga-triple-s-sneaker-clear-sole-triple-grey-541624-w09o1-1705-duyet-fashion-4-jpeg.jpg?v=1637029094527",
    currentPrice: "8.990.000₫",
    originalPrice: "10.990.000₫",
    specs: [
      "Chất liệu: Cotton Pima cao cấp",
      "Kiểu dáng: Regular fit",
      "Màu sắc: Trắng/Logo đỏ xanh",
      "Xuất xứ: Italy",
      "Bảo hành: 6 tháng",
      "Phù hợp: Nam, Nữ",
    ],
  },
  balenciaga3: {
    title: "Puma Sport Jacket",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "2.990.000₫",
    originalPrice: "3.990.000₫",
    specs: [
      "Chất liệu: Polyester chống nước",
      "Kiểu dáng: Thể thao",
      "Màu sắc: Đen/Logo trắng",
      "Xuất xứ: Đức",
      "Bảo hành: 12 tháng",
      "Tính năng: Chống nước, thoáng khí",
    ],
  },
  balenciaga4: {
    title: "Handes Evening Dress",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "5.990.000₫",
    originalPrice: "7.990.000₫",
    specs: [
      "Chất liệu: Lụa cao cấp",
      "Kiểu dáng: Váy dạ hội",
      "Màu sắc: Đỏ rượu vang",
      "Xuất xứ: Pháp",
      "Bảo hành: Vĩnh viễn",
      "Phù hợp: Dự tiệc, sự kiện",
    ],
  },

  gucci1: {
    title: "Chanel Classic Flap Bag",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/duyetfashion-balenciaga-triple-s-sneaker-clear-sole-triple-grey-541624-w09o1-1705-duyet-fashion-4-jpeg.jpg?v=1637029094527",
    currentPrice: "45.990.000₫",
    originalPrice: "52.990.000₫",
    specs: [
      "Chất liệu: Da cừu cao cấp",
      "Kích thước: 25.5 x 15 x 6.5 cm",
      "Màu sắc: Đen",
      "Xuất xứ: Pháp",
      "Bảo hành: Trọn đời",
      "Phụ kiện: Hộp, túi bụi, chứng từ",
    ],
  },
  gucci2: {
    title: "Nike Air Jordan 1",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "5.990.000₫",
    originalPrice: "6.990.000₫",
    specs: [
      "Chất liệu: Da tổng hợp cao cấp",
      "Kiểu dáng: Cổ cao",
      "Màu sắc: Đen/Trắng/Đỏ",
      "Xuất xứ: Việt Nam",
      "Bảo hành: 6 tháng",
      "Phù hợp: Thể thao, thời trang",
    ],
  },
  gucci3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },
  gucci4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  puma1: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  puma2: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  puma3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  puma4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  handes1: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  handes2: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  handes3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  handes4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  chanel1: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  chanel2: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  chanel3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  chanel4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  nike1: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  nike2: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  nike3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  nike4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  adidas1: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  adidas2: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  adidas3: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },

  adidas4: {
    title: "Adidas Ultraboost 22",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "4.990.000₫",
    originalPrice: "5.990.000₫",
    specs: [
      "Chất liệu: Primeknit+",
      "Công nghệ: Boost™",
      "Màu sắc: Trắng/Đen",
      "Xuất xứ: Indonesia",
      "Bảo hành: 6 tháng",
      "Phù hợp: Chạy bộ, tập luyện",
    ],
  },
};

// Initialize Fashion Page
function initFashionPage() {
  console.log("Khởi tạo trang Thời Trang...");

  // Initialize filter functionality
  initFilter();

  // Initialize product modals
  initProductModals();

  // Initialize cart functionality
  initCart();

  // Initialize wishlist functionality
  initWishlist();

  console.log("Trang Thời Trang đã sẵn sàng!");
}

// Filter Products by Brand
function initFilter() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const brand = this.dataset.brand;

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter products
      if (brand === "all") {
        // Show all brands
        brandSections.forEach((section) => {
          section.style.display = "block";
          setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
          }, 50);
        });

        // Show all product cards
        productCards.forEach((card) => {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100);
        });
      } else {
        // Hide all brands first
        brandSections.forEach((section) => {
          section.style.opacity = "0";
          section.style.transform = "translateY(20px)";
          setTimeout(() => {
            section.style.display = "none";
          }, 300);
        });

        // Show selected brand
        const selectedSection = document.getElementById(brand);
        if (selectedSection) {
          setTimeout(() => {
            selectedSection.style.display = "block";
            setTimeout(() => {
              selectedSection.style.opacity = "1";
              selectedSection.style.transform = "translateY(0)";
            }, 50);
          }, 300);
        }

        // Hide all product cards first
        productCards.forEach((card) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        });

        // Show cards from selected brand
        const selectedCards = document.querySelectorAll(
          `[data-brand="${brand}"]`
        );
        setTimeout(() => {
          selectedCards.forEach((card, index) => {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 100);
          });
        }, 300);
      }
    });
  });
}

// Product Modal Functionality
function initProductModals() {
  // Open modal when detail button is clicked
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.dataset.id;
      openProductModal(productId);
    });
  });

  // Close modal when close button is clicked
  modalClose.addEventListener("click", closeProductModal);

  // Close modal when clicking outside
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeProductModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeProductModal();
    }
  });
}

function openProductModal(productId) {
  const product = products[productId];
  if (!product) return;

  // Update modal content
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.title;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalCurrentPrice").textContent =
    product.currentPrice;
  document.getElementById("modalOriginalPrice").textContent =
    product.originalPrice;

  // Update specifications
  const specsList = document.getElementById("modalSpecs");
  specsList.innerHTML = "";
  product.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Update add to cart button
  const addToCartBtn = document.querySelector(".modal-actions .btn-buy");
  addToCartBtn.dataset.id = productId;

  // Show modal
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Cart Functionality
function initCart() {
  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get product info from the card
      const productCard = this.closest(".product-card");
      const productName =
        productCard.querySelector(".product-name").textContent;
      const productPrice =
        productCard.querySelector(".current-price").textContent;

      // Add to cart
      cartCount++;
      updateCartCount(cartCount);

      // Show notification
      showNotification(`Đã thêm "${productName}" vào giỏ hàng!`);

      // Add animation
      this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
      this.style.backgroundColor = "#28a745";

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-shopping-cart"></i> Thêm vào giỏ';
        this.style.backgroundColor = "";
      }, 2000);
    });
  });

  // Modal add to cart button
  document
    .querySelector(".modal-actions .btn-buy")
    .addEventListener("click", function () {
      const productId = this.dataset.id;
      const product = products[productId];

      if (product) {
        cartCount++;
        updateCartCount(cartCount);
        showNotification(`Đã thêm "${product.title}" vào giỏ hàng!`);
        closeProductModal();
      }
    });
}

function updateCartCount(count) {
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = count;
  });
}

// Wishlist Functionality
function initWishlist() {
  wishlistButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");

      if (icon.classList.contains("far")) {
        // Add to wishlist
        icon.classList.remove("far");
        icon.classList.add("fas");
        this.style.color = "#e74c3c";

        // Get product info
        const productCard = this.closest(".product-card");
        const productName =
          productCard.querySelector(".product-name").textContent;

        showNotification(`Đã thêm "${productName}" vào yêu thích!`);
      } else {
        // Remove from wishlist
        icon.classList.remove("fas");
        icon.classList.add("far");
        this.style.color = "";

        showNotification("Đã xóa khỏi danh sách yêu thích!");
      }
    });
  });
}

// Notification System
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    </div>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    border-left: 4px solid #2ecc71;
    max-width: 350px;
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Search Functionality
function initSearch() {
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
      // Show all products if search is empty
      productCards.forEach((card) => {
        card.style.display = "block";
        card.style.opacity = "1";
      });
      return;
    }

    // Filter products based on search term
    let foundResults = false;

    productCards.forEach((card) => {
      const productName = card
        .querySelector(".product-name")
        .textContent.toLowerCase();
      const productBrand = card.dataset.brand;

      if (
        productName.includes(searchTerm) ||
        productBrand.includes(searchTerm)
      ) {
        card.style.display = "block";
        card.style.opacity = "1";
        foundResults = true;
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
      }
    });

    // Show message if no results found
    if (!foundResults) {
      showNotification("Không tìm thấy sản phẩm phù hợp!");
    }
  }

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initFashionPage();
  initSearch();

  // Add some interactive animations
  addScrollAnimations();
});

// Scroll Animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe product cards and sections
  document
    .querySelectorAll(".product-card, .brand-section, .square-gallery-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}
