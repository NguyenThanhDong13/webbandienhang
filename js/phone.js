const products = {
  1: {
    id: 1,
    name: "iPhone 14 Pro Max",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "28.990.000₫",
    originalPrice: "32.990.000₫",
    specs: [
      "Màn hình: 6.7 inch Super Retina XDR",
      "Chip: A16 Bionic",
      "RAM: 6GB, Bộ nhớ: 128GB/256GB/512GB/1TB",
      "Camera: 48MP + 12MP + 12MP",
      "Pin: 4323 mAh, Sạc nhanh 20W",
      "Hệ điều hành: iOS 16",
    ],
  },
  2: {
    id: 2,
    name: "iPhone 13 Pro Max",
    image:
      "https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg",
    currentPrice: "18.990.000₫",
    originalPrice: "21.990.000₫",
    specs: [
      "Màn hình: 6.7 inch OLED",
      "Apple A15 Bionic",
      "RAM: 6 GB, Bộ nhớ: 256GB/512GB/1TB",
      "Camera: 12MP + 12MP + 12MP",
      "Pin: 4,325mAh, Sạc nhanh 20W",
      "Hệ điều hành: iOS 15",
    ],
  },
  3: {
    id: 3,
    name: "iPhone 17 Pro Max",
    image:
      "https://vcdn1-sohoa.vnecdn.net/2024/11/28/iPhone-17-Pro-Dual-Tone-Rectan-5437-2950-1732807344.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=2tj8edHwbMmACQgUPFVExg",
    currentPrice: "61.990.000₫",
    originalPrice: "63.990.000₫",
    specs: [
      "Màn hình: 6.9 inches LTPO Super Retina XDR OLED",
      "Chip: Apple A19 Pro 6 nhân",
      "RAM: 12GB, Bộ nhớ: 256GB/512GB/1TB",
      "Camera: 24MP + 24MP + 24 MP",
      "Pin: 3.240 mAh, Sạc nhanh 30W",
      "Hệ điều hành: iOS 26",
    ],
  },
  4: {
    id: 4,
    name: "Samsung Galaxy S23 Ultra",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=8",
    currentPrice: "24.990.000₫",
    originalPrice: "27.990.000₫",
    specs: [
      "Màn hình: 6.8 inch Dynamic AMOLED 2X",
      "Chip: Snapdragon 8 Gen 2",
      "RAM: 12GB, Bộ nhớ: 256GB/512GB/1TB",
      "Camera: 200MP + 10MP + 10MP + 12MP",
      "Pin: 5000 mAh, Sạc nhanh 45W",
      "Hệ điều hành: Android 13",
    ],
  },
  5: {
    id: 5,
    name: "Samsung Galaxy Z Flip",
    image:
      "https://images.samsung.com/ph/smartphones/galaxy-z-flip6/images/galaxy-z-flip6-features-kv.jpg?imbypass=true",
    currentPrice: "35.990.000₫",
    originalPrice: "39.990.000₫",
    specs: [
      "Màn hình: 7.6 inch Dynamic AMOLED 2X",
      "Chip: Snapdragon 855+",
      "RAM: 8GB, Bộ nhớ: 126/256GB/512GB",
      "Camera: 50MP + 12MP + 10MP",
      "Pin: 4400 mAh, Sạc nhanh 25W",
      "Hệ điều hành: Android 10",
    ],
  },
  6: {
    id: 6,
    name: "Samsung Galaxy S23",
    image:
      "https://tiki.vn/blog/wp-content/uploads/2023/03/OsybBeJVZxYYmDDp5lzGdafcqDY1jMGINw4M_CsiR42HJ4vRhXa37vF2tKZunf4T3tEg4E1Z4crtL6o-hruB9wwOXGvugjrkPoZVNyf3BaY9wonoZb1PW6poZosO5N0zt0rGppfmBne3mMWlSHSr3-o.png",
    currentPrice: "18.990.000₫",
    originalPrice: "20.990.000₫",
    specs: [
      "Màn hình: 6.1 inches",
      "Chip: Snapdragon 8 Gen 2",
      "RAM: 8GB, Bộ nhớ: 128GB/256GB/512GB",
      "Camera: 50MP + 12MP + 5MP",
      "Pin: 3900 mAh, Sạc nhanh 30W",
      "Hệ điều hành: Android 13",
    ],
  },
  7: {
    id: 7,
    name: "Xiaomi 13 Pro",
    image: "https://mihome.vn/wp-content/uploads/2023/03/Xiaomi-13-Pro-1.jpg",
    currentPrice: "18.990.000₫",
    originalPrice: "21.990.000₫",
    specs: [
      "Màn hình: 6.73 inch LTPO AMOLED",
      "Chip: Snapdragon 8 Gen 2",
      "RAM: 12GB, Bộ nhớ: 256GB/512GB",
      "Camera: 50MP + 50MP + 50MP",
      "Pin: 4820 mAh, Sạc nhanh 120W",
      "Hệ điều hành: MIUI 14",
    ],
  },
  8: {
    id: 8,
    name: "Xiaomi Redmi Note 12",
    image:
      "https://cdn.hoanghamobile.vn/Uploads/2023/03/25/image-removebg-preview-1.png",
    currentPrice: "6.490.000₫",
    originalPrice: "7.490.000₫",
    specs: [
      "Màn hình: 6.67 inch AMOLED",
      "Chip: Snapdragon 685",
      "RAM: 6GB/8GB, Bộ nhớ: 128GB/256GB",
      "Camera: 50MP + 8MP + 2MP",
      "Pin: 5000 mAh, Sạc nhanh 33W",
      "Hệ điều hành: MIUI 14",
    ],
  },
  9: {
    id: 9,
    name: "Xiaomi Poco X5",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "5.990.000₫",
    originalPrice: "6.990.000₫",
    specs: [
      "Màn hình: 6.67 inch AMOLED",
      "Chip: Snapdragon 695",
      "RAM: 6GB/8GB, Bộ nhớ: 128GB/256GB",
      "Camera: 48MP + 8MP + 2MP",
      "Pin: 5000 mAh, Sạc nhanh 33W",
      "Hệ điều hành: MIUI 14",
    ],
  },
};

// DOM Elements
const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCurrentPrice = document.getElementById("modalCurrentPrice");
const modalOriginalPrice = document.getElementById("modalOriginalPrice");
const modalSpecs = document.getElementById("modalSpecs");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const brandSections = document.querySelectorAll(".brand-section");
const btnDetails = document.querySelectorAll(".btn-details");
const wishlistButtons = document.querySelectorAll(".btn-wishlist");
const cartCount = document.querySelector(".cart-count");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const logoutLink = document.getElementById("logout-link");

// Khởi tạo giỏ hàng
let cart = [];
let wishlist = [];

// Kiểm tra trạng thái đăng nhập
function checkAuthStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutLink.style.display = "block";
  } else {
    loginLink.style.display = "block";
    registerLink.style.display = "block";
    logoutLink.style.display = "none";
  }
}

// Lấy giỏ hàng từ localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Lấy danh sách yêu thích từ localStorage
function loadWishlist() {
  const savedWishlist = localStorage.getItem("wishlist");
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist);
    updateWishlistButtons();
  }
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Cập nhật trạng thái nút yêu thích
function updateWishlistButtons() {
  wishlistButtons.forEach((button) => {
    const productId = button
      .closest(".product-card")
      .querySelector(".btn-details").dataset.id;
    if (wishlist.includes(parseInt(productId))) {
      button.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      button.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

// Mở modal chi tiết sản phẩm
function openProductModal(productId) {
  const product = products[productId];
  if (!product) return;

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalCurrentPrice.textContent = product.currentPrice;
  modalOriginalPrice.textContent = product.originalPrice;

  // Xóa các thông số cũ
  modalSpecs.innerHTML = "";

  // Thêm các thông số mới
  product.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    modalSpecs.appendChild(li);
  });

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Đóng modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Lọc sản phẩm theo hãng
function filterProducts(brand) {
  productCards.forEach((card) => {
    if (brand === "all" || card.dataset.brand === brand) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Hiển thị/ẩn các phần theo hãng
  brandSections.forEach((section) => {
    if (brand === "all" || section.id === brand) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// Thêm vào giỏ hàng
function addToCart(productId) {
  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Hiệu ứng thông báo
    showNotification("Đã thêm sản phẩm vào giỏ hàng!");
  }
}

// Thêm/Xóa khỏi danh sách yêu thích
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    wishlist.push(productId);
    showNotification("Đã thêm vào danh sách yêu thích!");
  } else {
    wishlist.splice(index, 1);
    showNotification("Đã xóa khỏi danh sách yêu thích!");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistButtons();
}

// Hiển thị thông báo
function showNotification(message) {
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
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Đăng xuất
function logout() {
  localStorage.setItem("isLoggedIn", "false");
  checkAuthStatus();
  showNotification("Đã đăng xuất!");
}

// Sự kiện khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo
  checkAuthStatus();
  loadCart();
  loadWishlist();

  // Sự kiện cho nút lọc sản phẩm
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Xóa lớp active khỏi tất cả các nút
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Thêm lớp active cho nút được nhấn
      this.classList.add("active");
      // Lọc sản phẩm
      filterProducts(this.dataset.brand);
    });
  });

  // Sự kiện cho nút xem chi tiết
  btnDetails.forEach((button) => {
    button.addEventListener("click", function () {
      openProductModal(this.dataset.id);
    });
  });

  // Sự kiện cho nút đóng modal
  modalClose.addEventListener("click", closeModal);

  // Đóng modal khi nhấn bên ngoài
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Sự kiện cho nút yêu thích
  wishlistButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(
        this.closest(".product-card").querySelector(".btn-details").dataset.id
      );
      toggleWishlist(productId);
    });
  });

  // Sự kiện cho nút thêm vào giỏ hàng trong modal
  document.querySelector(".btn-buy").addEventListener("click", function () {
    const productId = parseInt(modalTitle.textContent.match(/\d+/)?.[0] || 1);
    addToCart(productId);
    closeModal();
  });

  // Sự kiện cho nút mua ngay trong modal
  document.querySelector(".btn-accent").addEventListener("click", function () {
    const productId = parseInt(modalTitle.textContent.match(/\d+/)?.[0] || 1);
    addToCart(productId);
    closeModal();
    showNotification("Chuyển hướng đến trang thanh toán...");
  });

  // Sự kiện đăng xuất
  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    logout();
  });

  // Tạo hiệu ứng cho slider
  const sliderTrack = document.querySelector(".slider-track");
  const sliderItems = document.querySelectorAll(".slider-item");

  // Nhân đôi các phần tử để tạo hiệu ứng vô hạn
  sliderItems.forEach((item) => {
    const clone = item.cloneNode(true);
    sliderTrack.appendChild(clone);
  });
});
