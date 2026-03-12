// Dữ liệu sách theo cảm xúc
const emotionBooks = {
  vui: {
    title: "Sách Vui Vẻ",
    icon: '<i class="fas fa-laugh-beam"></i>',
    book: {
      title: "Những Câu Chuyện Hài Hước",
      description:
        "Tuyển tập những câu chuyện cười và tình huống hài hước trong cuộc sống, giúp bạn giải tỏa căng thẳng và mang lại những phút giây thư giãn tuyệt vời.",
      price: "85.000₫",
      originalPrice: "100.000₫",
      image: "#",
    },
  },
  buon: {
    title: "Sách Buồn Bã",
    icon: '<i class="fas fa-sad-tear"></i>',
    book: {
      title: "Những Tâm Hồn Đau Khổ",
      description:
        "Câu chuyện về những số phận, những mảnh đời bất hạnh và những nỗi buồn sâu thẳm trong tâm hồn con người. Một tác phẩm chạm đến trái tim người đọc.",
      price: "95.000₫",
      originalPrice: "120.000₫",
      image: "#",
    },
  },
  yeu: {
    title: "Sách Tình Yêu",
    icon: '<i class="fas fa-heart"></i>',
    book: {
      title: "Tình Yêu Trong Sáng",
      description:
        "Hành trình của một tình yêu đẹp, trong sáng và lãng mạn. Cuốn sách sẽ đưa bạn đến với thế giới của những rung động đầu đời, những lời tỏ tình ngọt ngào.",
      price: "110.000₫",
      originalPrice: "135.000₫",
      image: "#",
    },
  },
  kinhdi: {
    title: "Sách Kinh Dị",
    icon: '<i class="fas fa-ghost"></i>',
    book: {
      title: "Bóng Tối Lẩn Khuất",
      description:
        "Những câu chuyện ma quái, những bí ẩn đáng sợ và những sự kiện siêu nhiên khó giải thích. Chuẩn bị tinh thần cho những giây phút hồi hộp đến nghẹt thở.",
      price: "90.000₫",
      originalPrice: "115.000₫",
      image: "#",
    },
  },
};

// Dữ liệu sản phẩm chi tiết
const productDetails = {
  1: {
    title: "Tác Phẩm Văn Học Kinh Điển",
    currentPrice: "120.000₫",
    originalPrice: "150.000₫",
    image: "#",
    specs: [
      "Tác giả: Nguyễn Văn A",
      "Nhà xuất bản: Văn Học",
      "Năm xuất bản: 2023",
      "Số trang: 320",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Văn học kinh điển",
    ],
  },
  2: {
    title: "Tiểu Thuyết Đương Đại",
    currentPrice: "95.000₫",
    originalPrice: "120.000₫",
    image: "#",
    specs: [
      "Tác giả: Trần Thị B",
      "Nhà xuất bản: Trẻ",
      "Năm xuất bản: 2024",
      "Số trang: 280",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Tiểu thuyết đương đại",
    ],
  },
  3: {
    title: "Tuyển Tập Truyện Ngắn",
    currentPrice: "85.000₫",
    originalPrice: "100.000₫",
    image: "#",
    specs: [
      "Tác giả: Lê Văn C",
      "Nhà xuất bản: Hội Nhà Văn",
      "Năm xuất bản: 2023",
      "Số trang: 240",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Truyện ngắn",
    ],
  },
  4: {
    title: "Kinh Tế Học Cơ Bản",
    currentPrice: "135.000₫",
    originalPrice: "160.000₫",
    image: "#",
    specs: [
      "Tác giả: Phạm Văn D",
      "Nhà xuất bản: Kinh Tế",
      "Năm xuất bản: 2024",
      "Số trang: 350",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Kinh tế học",
    ],
  },
  5: {
    title: "Đầu Tư Thông Minh",
    currentPrice: "110.000₫",
    originalPrice: "130.000₫",
    image: "#",
    specs: [
      "Tác giả: Hoàng Thị E",
      "Nhà xuất bản: Tài Chính",
      "Năm xuất bản: 2023",
      "Số trang: 300",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Đầu tư, Tài chính",
    ],
  },
  6: {
    title: "Quản Trị Doanh Nghiệp",
    currentPrice: "125.000₫",
    originalPrice: "145.000₫",
    image: "#",
    specs: [
      "Tác giả: Nguyễn Văn F",
      "Nhà xuất bản: Quản Trị",
      "Năm xuất bản: 2024",
      "Số trang: 320",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Quản trị kinh doanh",
    ],
  },
  7: {
    title: "Vũ Trụ Quanh Ta",
    currentPrice: "140.000₫",
    originalPrice: "165.000₫",
    image: "#",
    specs: [
      "Tác giả: Trần Văn G",
      "Nhà xuất bản: Khoa Học",
      "Năm xuất bản: 2023",
      "Số trang: 280",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Khoa học vũ trụ",
    ],
  },
  8: {
    title: "Công Nghệ Tương Lai",
    currentPrice: "115.000₫",
    originalPrice: "140.000₫",
    image: "#",
    specs: [
      "Tác giả: Lê Thị H",
      "Nhà xuất bản: Công Nghệ",
      "Năm xuất bản: 2024",
      "Số trang: 260",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Công nghệ tương lai",
    ],
  },
  9: {
    title: "Khám Phá Thiên Nhiên",
    currentPrice: "95.000₫",
    originalPrice: "115.000₫",
    image: "#",
    specs: [
      "Tác giả: Phạm Văn I",
      "Nhà xuất bản: Thiên Nhiên",
      "Năm xuất bản: 2023",
      "Số trang: 220",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Khoa học tự nhiên",
    ],
  },
  10: {
    title: "Lịch Sử Việt Nam",
    currentPrice: "155.000₫",
    originalPrice: "180.000₫",
    image: "#",
    specs: [
      "Tác giả: Nguyễn Thị K",
      "Nhà xuất bản: Lịch Sử",
      "Năm xuất bản: 2024",
      "Số trang: 400",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Lịch sử Việt Nam",
    ],
  },
  11: {
    title: "Thế Giới Cổ Đại",
    currentPrice: "130.000₫",
    originalPrice: "155.000₫",
    image: "#",
    specs: [
      "Tác giả: Trần Văn L",
      "Nhà xuất bản: Khảo Cổ",
      "Năm xuất bản: 2023",
      "Số trang: 320",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Lịch sử cổ đại",
    ],
  },
  12: {
    title: "Nhân Vật Lịch Sử",
    currentPrice: "105.000₫",
    originalPrice: "125.000₫",
    image: "#",
    specs: [
      "Tác giả: Lê Văn M",
      "Nhà xuất bản: Nhân Vật",
      "Năm xuất bản: 2024",
      "Số trang: 280",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Tiểu sử nhân vật",
    ],
  },
  13: {
    title: "Truyện Cổ Tích",
    currentPrice: "75.000₫",
    originalPrice: "90.000₫",
    image: "#",
    specs: [
      "Tác giả: Phạm Thị N",
      "Nhà xuất bản: Thiếu Nhi",
      "Năm xuất bản: 2023",
      "Số trang: 160",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Truyện cổ tích",
    ],
  },
  14: {
    title: "Khám Phá Khoa Học",
    currentPrice: "85.000₫",
    originalPrice: "100.000₫",
    image: "#",
    specs: [
      "Tác giả: Nguyễn Văn O",
      "Nhà xuất bản: Khoa Học",
      "Năm xuất bản: 2024",
      "Số trang: 180",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Khoa học thiếu nhi",
    ],
  },
  15: {
    title: "Truyện Tranh",
    currentPrice: "65.000₫",
    originalPrice: "80.000₫",
    image: "#",
    specs: [
      "Tác giả: Trần Thị P",
      "Nhà xuất bản: Mỹ Thuật",
      "Năm xuất bản: 2023",
      "Số trang: 120",
      "Ngôn ngữ: Tiếng Việt",
      "Thể loại: Truyện tranh",
    ],
  },
};

// DOM Elements
const emotionItems = document.querySelectorAll(".emotion-item");
const productModal = document.getElementById("productModal");
const emotionModal = document.getElementById("emotionModal");
const modalClose = document.getElementById("modalClose");
const emotionModalClose = document.getElementById("emotionModalClose");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const detailButtons = document.querySelectorAll(".btn-details");

// Hiển thị modal sách theo cảm xúc
emotionItems.forEach((item) => {
  item.addEventListener("click", function () {
    const emotion = this.getAttribute("data-emotion");
    const emotionData = emotionBooks[emotion];

    if (emotionData) {
      document.getElementById("modalEmotionIcon").innerHTML = emotionData.icon;
      document.getElementById("modalEmotionTitle").textContent =
        emotionData.title;
      document.getElementById("modalEmotionBookTitle").textContent =
        emotionData.book.title;
      document.getElementById("modalEmotionBookDesc").textContent =
        emotionData.book.description;
      document.getElementById("modalEmotionCurrentPrice").textContent =
        emotionData.book.price;
      document.getElementById("modalEmotionOriginalPrice").textContent =
        emotionData.book.originalPrice;
      document.getElementById("modalEmotionImage").src = emotionData.book.image;

      emotionModal.style.display = "flex";
    }
  });
});

// Hiển thị modal chi tiết sản phẩm
detailButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    const productData = productDetails[productId];

    if (productData) {
      document.getElementById("modalTitle").textContent = productData.title;
      document.getElementById("modalCurrentPrice").textContent =
        productData.currentPrice;
      document.getElementById("modalOriginalPrice").textContent =
        productData.originalPrice;
      document.getElementById("modalImage").src = productData.image;

      const specsList = document.getElementById("modalSpecs");
      specsList.innerHTML = "";
      productData.specs.forEach((spec) => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
      });

      productModal.style.display = "flex";
    }
  });
});

// Đóng modal
modalClose.addEventListener("click", function () {
  productModal.style.display = "none";
});

emotionModalClose.addEventListener("click", function () {
  emotionModal.style.display = "none";
});

// Đóng modal khi click bên ngoài
window.addEventListener("click", function (event) {
  if (event.target === productModal) {
    productModal.style.display = "none";
  }
  if (event.target === emotionModal) {
    emotionModal.style.display = "none";
  }
});

// Lọc sản phẩm theo thể loại
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Xóa active class từ tất cả buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Thêm active class cho button được click
    this.classList.add("active");

    const category = this.getAttribute("data-category");

    productCards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Cuộn đến phần sản phẩm
    document.querySelector(".sach-products").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Wishlist functionality
const wishlistButtons = document.querySelectorAll(".btn-wishlist");
wishlistButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      this.style.background = "#e74c3c";
      this.style.color = "white";
      showNotification("Đã thêm vào yêu thích");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      this.style.background = "white";
      this.style.color = "inherit";
      showNotification("Đã xóa khỏi yêu thích");
    }
  });
});

// Hiển thị thông báo
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 3000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Thêm CSS animation cho notification
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Tìm kiếm sách
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm === "") {
    showNotification("Vui lòng nhập từ khóa tìm kiếm");
    return;
  }

  let found = false;
  productCards.forEach((card) => {
    const productName = card
      .querySelector(".product-name")
      .textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = "block";
      found = true;
      // Highlight sản phẩm tìm thấy
      card.style.boxShadow = "0 0 0 3px var(--accent)";
      setTimeout(() => {
        card.style.boxShadow = "";
      }, 2000);
    } else {
      card.style.display = "none";
    }
  });

  if (found) {
    showNotification(`Tìm thấy sách với từ khóa: "${searchTerm}"`);
    document.querySelector(".sach-products").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    showNotification(`Không tìm thấy sách với từ khóa: "${searchTerm}"`);
    // Hiển thị lại tất cả sản phẩm
    productCards.forEach((card) => {
      card.style.display = "block";
    });
  }
}

// Thêm vào giỏ hàng
const addToCartButtons = document.querySelectorAll(".btn-buy");
const cartCount = document.querySelector(".cart-count");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let count = parseInt(cartCount.textContent);
    count++;
    cartCount.textContent = count;
    showNotification("Đã thêm vào giỏ hàng");

    // Hiệu ứng cho icon giỏ hàng
    const cartIcon = document.querySelector(".fa-shopping-cart").parentElement;
    cartIcon.style.transform = "scale(1.2)";
    setTimeout(() => {
      cartIcon.style.transform = "scale(1)";
    }, 300);
  });
});

// Khởi tạo hình ảnh sách mặc định
document.addEventListener("DOMContentLoaded", function () {
  const bookImages = document.querySelectorAll(".product-image");
  bookImages.forEach((image) => {
    // Tạo hình ảnh sách mặc định với màu sắc khác nhau
    const colors = ["#8B4513", "#A0522D", "#CD853F", "#D2691E", "#B8860B"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    image.style.background = `linear-gradient(135deg, ${randomColor}40, ${randomColor}80)`;
  });
});
