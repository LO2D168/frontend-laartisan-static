import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, Heart, ShoppingBag, Menu, X, ChevronLeft, ChevronRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './styles.css';

const navGroups = [
    { title: 'Bộ sưu tập', items: ['Patriot', 'Giang Sơn', 'Việt Nam tình sử', 'Sắc hoa'] },
    { title: 'Sản phẩm', items: ['Khăn lụa', 'Sơn mài', 'Phụ kiện khác'] },
    { title: 'Set quà tặng', items: ['Tân gia', 'Khai trương', 'Dịp lễ tết', 'Doanh nghiệp'] },
    { title: 'Về chúng tôi', items: ['Câu chuyện', 'Liên hệ'] },
];

const slides = [
    {
        image: '/image/slider/LONG VÂN 2.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/LONG VÂN 3.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331388409_bb501296575ce22178bc4af2e115aa0e.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331400407_e09914b640a9b593b2f2b15a855a6328.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331415940_85e72d8ed421c56791e6b543c9f58e15.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331425896_b280f6f79c3ccf2c6fd7bd0aae3f86fd.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331444674_02d6e264f34c5e9c239640761d518e42.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331475416_b863c00beaacb3e2d1722f78eeeeb119.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331513386_ef33835b78f27725156307856955fbc8.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: 'image/slider/z7851331547028_b196e8ae1ca78bbb7abe02f1ffee9956.jpg',
        kicker: '',
        title: '',
        description: '',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: '',
        title: '',
        description: '',
    },
];

const galleryItems = [
    {
        image:
            'image/gallary/SAPA6.jpg',
        title: 'SAPA',
        text: 'Sương mờ bảng lảng đỉnh ngàn mây.',
        tag: 'Best Seller',
        price: 'Từ 890.000đ',
    },
    {
        image:
            'image/gallary/QUỐC HỌC HUẾ 2.jpg',
        title: 'QUỐC HỌC HUẾ',
        text: 'Trường xưa lưu dấu bậc hào kiệt.',
        tag: 'New Arrival',
        price: 'Từ 1.250.000đ',
    },
    {
        image:
            'image/gallary/DINH ĐỘC LẬP 2.jpg',
        title: 'DINH ĐỘC LẬP',
        text: 'Dấu ấn vàng son thời đại mới. ',
        tag: 'Premium',
        price: 'Từ 1.590.000đ',
    },
    {
        image:
            'image/gallary/TRUYỆN KIỀU 4.jpg',
        title: 'TRUYỆN KIỀU',
        text: 'Áng văn nghìn thu đượm tri âm. ',
        tag: 'Handmade',
        price: 'Từ 750.000đ',
    },
    {
        image:
            'image/gallary/MẸ ÂU CƠ 4.jpg',
        title: 'MẸ ÂU CƠ',
        text: 'Món quà nhỏ nhưng được trình bày đầy cảm xúc.',
        tag: 'Limited',
        price: 'Từ 680.000đ',
    },
    {
        image:
            'image/gallary/GA ĐÀ LẠT 3.jpg',
        title: 'GA ĐÀ LẠT',
        text: 'Khởi nguồn dòng máu lạc hồng xưa.',
        tag: 'Signature',
        price: 'Từ 990.000đ',
    },
    {
        image:
            'image/gallary/NAM PHƯƠNG HOÀNG HẬU 2.jpg',
        title: 'NAM PHƯƠNG HOÀNG HẬU',
        text: 'Nét đẹp vương triều thuở vàng son.',
        tag: 'Limited',
        price: 'Từ 880.000đ',
    },
    {
        image:
            'image/gallary/HÀ NỘI 1.jpg',
        title: 'HÀ NỘI',
        text: 'Ngàn năm văn hiến rạng rỡ ngời.',
        tag: 'Limited',
        price: 'Từ 980.000đ',
    },
    {
        image:
            'image/gallary/BIỂN ĐẢO VN 8.jpg',
        title: 'BIỂN ĐẢO',
        text: 'Sóng cuộn ngàn năm giữ cõi bờ.',
        tag: 'Limited',
        price: 'Từ 920.000đ',
    },
]

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="navbar">
                <button className="icon-button menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
                    <Menu size={24} />
                </button>

                <a href="#home" className="logo">
                    <img src="/image/LOGO.svg" alt="Latisa logo" className="logo-img" />
                    <span>LÀNG LỤA TƠ TẰM - LÁ SILK</span>
                </a>

                <div className="desktop-nav">
                    {navGroups.map((group) => (
                        <div className="nav-item" key={group.title}>
                            <a href={`#${group.title.toLowerCase().replaceAll(' ', '-')}`}>{group.title}</a>
                            <div className="dropdown">
                                {group.items.map((item) => <a href="#gallery" key={item}>{item}</a>)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="actions">
                    <button className="icon-button" aria-label="Search"><Search size={20} /></button>
                    <button className="icon-button" aria-label="Wishlist"><Heart size={20} /></button>
                    <button className="icon-button" aria-label="Cart"><ShoppingBag size={20} /></button>
                </div>
            </nav>

            {open && (
                <div className="mobile-panel">
                    <button className="icon-button close-button" onClick={() => setOpen(false)} aria-label="Close menu">
                        <X size={24} />
                    </button>
                    <a href="#home" className="mobile-logo">La'Artisan</a>
                    {navGroups.map((group) => (
                        <div className="mobile-group" key={group.title}>
                            <h3>{group.title}</h3>
                            {group.items.map((item) => <a href="#gallery" onClick={() => setOpen(false)} key={item}>{item}</a>)}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}

function Slideshow() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((current) => (current + 1) % slides.length);
    };

    const prev = () => {
        setIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % slides.length);
        }, 4000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div
                className="slider-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <article className="slide" key={`${slide.image}-${i}`}>
                        <img
                            className="slide-blur-bg"
                            src={slide.image}
                            alt=""
                            aria-hidden="true"
                        />

                        <img
                            className="slide-main-img"
                            src={slide.image}
                            alt={slide.title}
                        />

                        <div className="hero-content">
                            <p>{slide.kicker}</p>
                            <h1>{slide.title}</h1>
                            <span>{slide.description}</span>
                        </div>
                    </article>
                ))}
            </div>

            <button className="slider-btn prev" onClick={prev} aria-label="Previous slide" type="button">
                <ChevronLeft />
            </button>
            <button className="slider-btn next" onClick={next} aria-label="Next slide" type="button">
                <ChevronRight />
            </button>

            <div className="dots">
                {slides.map((slide, i) => (
                    <button
                        className={i === index ? 'dot active-dot' : 'dot'}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        key={`${slide.image}-dot-${i}`}
                        type="button"
                    />
                ))}
            </div>
        </section>
    );
}

function Gallery() {
    return (
        <section className="gallery-section" id="gallery">
            <div className="section-heading">
                <p>Trân trọng giới thiệu</p>
                <h2>BỘ SƯU TẬP</h2>
            </div>

            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <article className="gallery-card" key={index}>
                        <img src={item.image} alt={item.title} />

                        <div className="gallery-overlay">
                            <span className="gallery-tag">{item.tag}</span>

                            <div className="gallery-info">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <strong>{item.price}</strong>
                                <button>Xem chi tiết</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer" id="liên-hệ">
            <div className="footer-main">
                <div>
                    <h2>LÁ SILK</h2>
                    <p>Chắt chiu tâm huyết của nghệ nhân truyền thống.
                        Gìn giữ bản sắc Việt qua từng sợi tơ..</p>
                    <div className="socials">
                        <a href="#home" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#home" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a>
                    </div>
                </div>

                <div>
                    <h3>Menu</h3>
                    <a href="#home">Trang chủ</a>
                    <a href="#gallery">Bộ sưu tập</a>
                    <a href="#gallery">Sản phẩm</a>
                    <a href="#liên-hệ">Liên hệ</a>
                </div>

                <div>
                    <h3>Hỗ trợ</h3>
                    <a href="#home">Chính sách giao hàng</a>
                    <a href="#home">Bảo hành sản phẩm</a>
                    <a href="#home">Tư vấn quà tặng</a>
                </div>

                <div>
                    <h3>Liên hệ</h3>
                    <p className="contact-line"><MapPin size={16} /> 53 Triều Khúc, Thanh Xuân, Hà Nội </p>
                    <p className="contact-line"><Phone size={16} /> 0988 735 056</p>
                    <p className="contact-line"><Mail size={16} /> lasilkvietnam@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <>
            <Header />
            <main>
                <Slideshow />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

createRoot(document.getElementById('root')!).render(<App />);
