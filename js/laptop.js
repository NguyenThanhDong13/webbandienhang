// Dữ liệu sản phẩm laptop
const laptopProducts = {
  1: {
    id: 1,
    name: 'MacBook Pro 16" M2 Max',
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "68.990.000₫",
    originalPrice: "74.990.000₫",
    specs: [
      "Chip Apple M2 Max với 12-core CPU, 38-core GPU",
      "16.2-inch Liquid Retina XDR display",
      "32GB unified memory, 1TB SSD storage",
      "Camera 1080p FaceTime HD, hệ thống âm thanh 6 loa",
      "Thời lượng pin lên đến 22 giờ",
      "macOS Ventura, hỗ trợ 5G",
    ],
  },
  2: {
    id: 2,
    name: 'MacBook Air M2 13"',
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "32.990.000₫",
    originalPrice: "35.990.000₫",
    specs: [
      "Chip Apple M2 với 8-core CPU, 10-core GPU",
      "13.6-inch Liquid Retina display",
      "8GB unified memory, 256GB SSD storage",
      "Camera 1080p FaceTime HD, Magic Keyboard",
      "Thời lượng pin lên đến 18 giờ",
      "Thiết kế mỏng nhẹ, không quạt tản nhiệt",
    ],
  },
  3: {
    id: 3,
    name: 'MacBook Pro 14" M2 Pro',
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "52.990.000₫",
    originalPrice: "56.990.000₫",
    specs: [
      "Chip Apple M2 Pro với 10-core CPU, 16-core GPU",
      "14.2-inch Liquid Retina XDR display",
      "16GB unified memory, 512GB SSD storage",
      "Camera 1080p FaceTime HD, Touch Bar",
      "Thời lượng pin lên đến 17 giờ",
      "3 cổng Thunderbolt 4, HDMI, SDXC",
    ],
  },
  4: {
    id: 4,
    name: "Dell XPS 13 Plus",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "42.990.000₫",
    originalPrice: "46.990.000₫",
    specs: [
      "Intel Core i7-1260P (12 cores, 16 threads)",
      "13.4-inch FHD+ InfinityEdge Touch Display",
      "16GB LPDDR5 RAM, 512GB NVMe SSD",
      "Intel Iris Xe Graphics, Windows 11 Pro",
      "Thời lượng pin lên đến 14 giờ",
      "Thiết kế không viền, bàn phím cảm ứng",
    ],
  },
  5: {
    id: 5,
    name: "Dell Alienware m15 R7",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec0e7943568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "55.990.000₫",
    originalPrice: "59.990.000₫",
    specs: [
      "Intel Core i9-12900H (14 cores, 20 threads)",
      "15.6-inch QHD 240Hz Display",
      "32GB DDR5 RAM, 1TB NVMe SSD",
      "NVIDIA GeForce RTX 3070 Ti 8GB",
      "Hệ thống tản nhiệt Cryo-Tech",
      "Bàn phím cơ Alienware, RGB lighting",
    ],
  },
  6: {
    id: 6,
    name: "Dell Inspiron 15",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec0e7943568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "18.990.000₫",
    originalPrice: "21.990.000₫",
    specs: [
      "Intel Core i5-1235U (10 cores, 12 threads)",
      "15.6-inch FHD Anti-Glare Display",
      "8GB DDR4 RAM, 256GB SSD",
      "Intel UHD Graphics, Windows 11 Home",
      "Thời lượng pin lên đến 8 giờ",
      "Thiết kế mỏng nhẹ, phù hợp văn phòng",
    ],
  },
  7: {
    id: 7,
    name: "ASUS ROG Zephyrus G14",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "48.990.000₫",
    originalPrice: "52.990.000₫",
    specs: [
      "AMD Ryzen 9 6900HS (8 cores, 16 threads)",
      "14-inch QHD 120Hz Display",
      "16GB DDR5 RAM, 1TB NVMe SSD",
      "AMD Radeon RX 6800S 8GB",
      "Thời lượng pin lên đến 10 giờ",
      "AniMe Matrix LED display trên nắp",
    ],
  },
  8: {
    id: 8,
    name: "ASUS ZenBook 14X",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "32.990.000₫",
    originalPrice: "35.990.000₫",
    specs: [
      "Intel Core i7-1260P (12 cores, 16 threads)",
      "14-inch 2.8K OLED Display",
      "16GB LPDDR5 RAM, 512GB SSD",
      "Intel Iris Xe Graphics, Windows 11 Pro",
      "Thời lượng pin lên đến 15 giờ",
      "Thiết kế mỏng 1.59cm, nặng 1.4kg",
    ],
  },
  9: {
    id: 9,
    name: "ASUS TUF Gaming F15",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec0e7943568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "26.990.000₫",
    originalPrice: "29.990.000₫",
    specs: [
      "Intel Core i5-12500H (12 cores, 16 threads)",
      "15.6-inch FHD 144Hz Display",
      "8GB DDR4 RAM, 512GB SSD",
      "NVIDIA GeForce RTX 3050 4GB",
      "Hệ thống tản nhiệt mới với 4 ống đồng",
      "Bàn phím gaming RGB, độ bền quân đội",
    ],
  },
  10: {
    id: 10,
    name: "HP Spectre x360 14",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "38.990.000₫",
    originalPrice: "42.990.000₫",
    specs: [
      "Intel Core i7-1255U (10 cores, 12 threads)",
      "14-inch 3K2K OLED Touch Display",
      "16GB LPDDR4X RAM, 1TB SSD",
      "Intel Iris Xe Graphics, Windows 11 Pro",
      "Thời lượng pin lên đến 17 giờ",
      "Thiết kế 2-in-1, bản lề xoay 360 độ",
    ],
  },
  11: {
    id: 11,
    name: "HP Omen 16",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "45.990.000₫",
    originalPrice: "49.990.000₫",
    specs: [
      "Intel Core i7-12700H (14 cores, 20 threads)",
      "16.1-inch QHD 165Hz Display",
      "16GB DDR5 RAM, 1TB NVMe SSD",
      "NVIDIA GeForce RTX 3060 6GB",
      "Hệ thống tản nhiệt Tempest Cooling",
      "Bàn phím gaming RGB 4-zone",
    ],
  },
  12: {
    id: 12,
    name: "HP Pavilion 15",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "21.990.000₫",
    originalPrice: "24.990.000₫",
    specs: [
      "Intel Core i5-1240P (12 cores, 16 threads)",
      "15.6-inch FHD Micro-edge Display",
      "8GB DDR4 RAM, 512GB SSD",
      "Intel Iris Xe Graphics, Windows 11 Home",
      "Thời lượng pin lên đến 9 giờ",
      "Thiết kế mỏng nhẹ, màu sắc trẻ trung",
    ],
  },
  13: {
    id: 13,
    name: "Lenovo ThinkPad X1 Carbon",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "46.990.000₫",
    originalPrice: "49.990.000₫",
    specs: [
      "Intel Core i7-1260P (12 cores, 16 threads)",
      "14-inch WUXGA Display",
      "16GB LPDDR5 RAM, 512GB SSD",
      "Intel Iris Xe Graphics, Windows 11 Pro",
      "Thời lượng pin lên đến 15 giờ",
      "Bàn phím ThinkPad huyền thoại, TrackPoint",
    ],
  },
  14: {
    id: 14,
    name: "Lenovo Legion 5 Pro",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec0e7943568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "39.990.000₫",
    originalPrice: "43.990.000₫",
    specs: [
      "AMD Ryzen 7 6800H (8 cores, 16 threads)",
      "16-inch WQXGA 165Hz Display",
      "16GB DDR5 RAM, 1TB NVMe SSD",
      "NVIDIA GeForce RTX 3060 6GB",
      "Hệ thống tản nhiệt Coldfront 4.0",
      "Bàn phím gaming TrueStrike với RGB",
    ],
  },
  15: {
    id: 15,
    name: "Lenovo Yoga 9i",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currentPrice: "35.990.000₫",
    originalPrice: "38.990.000₫",
    specs: [
      "Intel Core i7-1260P (12 cores, 16 threads)",
      "14-inch 4K OLED Touch Display",
      "16GB LPDDR5 RAM, 1TB SSD",
      "Intel Iris Xe Graphics, Windows 11 Pro",
      "Thời lượng pin lên đến 14 giờ",
      "Thiết kế 2-in-1, Sound Bar hinge",
    ],
  },
};

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
  const product = laptopProducts[productId];
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
