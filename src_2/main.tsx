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
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/LONG VÂN 3.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/VNTS1.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331388409_bb501296575ce22178bc4af2e115aa0e.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331390736_980bc945b16cf4e31c5c07cd2bf11f60.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331396034_41f19821238fc85897dc94297e3f71d3.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331400407_e09914b640a9b593b2f2b15a855a6328.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331411256_f52b66116f834c914cb1b8a0f2b01e1f.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331414129_da60400651c97a02e936ada452f2cb17.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331415940_85e72d8ed421c56791e6b543c9f58e15.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331425896_b280f6f79c3ccf2c6fd7bd0aea3f86fd.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331434699_bad49b41c9cd60fea009e2126d048a3a.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331435022_f40f99b910de6d957b5972c5b719feb9.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331441307_4267b98ca75cf6d8f10487b95631b5d7.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331444674_02d6e264f34c5e9c239640761d518e42.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331456409_37b6bf5304b4d06f61d14fa63a3cb63f.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331465995_55b720b9a96c1fbcad44328a2d39eda6.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331466895_bbb101e9341f5fd4355bd7c07faa9070.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331475416_b863c00beaacb3e2d1722f78eeeeb119.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331483167_ea9942b3dea7166e5c90f8913334b6aa.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331513386_ef33835b78f27725156307856955fbc8.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331547028_b196e8ae1ca78bbb7abe02f1ffee9956.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
    {
        image: '/image/slider/z7851331563535_cc6890415a7273c0eae4e28f312aee91.jpg',
        kicker: 'Made with care',
        title: 'Cảm hứng thủ công',
        description: 'Tùy chỉnh ảnh, tiêu đề và nội dung trực tiếp trong file React.',
    },
];

const galleryItems = [
    {
        image:
            'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80',
        title: 'Luxury Gift Box',
        text: 'Hộp quà thủ công cao cấp với phong cách tinh tế.',
        tag: 'Best Seller',
        price: 'Từ 890.000đ',
    },
    {
        image:
            'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
        title: 'Artisan Collection',
        text: 'Bộ sưu tập quà tặng được tuyển chọn thủ công.',
        tag: 'New Arrival',
        price: 'Từ 1.250.000đ',
    },
    {
        image:
            'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80',
        title: 'Premium Gift Set',
        text: 'Set quà sang trọng phù hợp cho dịp đặc biệt.',
        tag: 'Premium',
        price: 'Từ 1.590.000đ',
    },
    {
        image:
            'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=80',
        title: 'Handmade Beauty',
        text: 'Thiết kế tối giản, thanh lịch và mang dấu ấn riêng.',
        tag: 'Handmade',
        price: 'Từ 750.000đ',
    },
    {
        image:
            'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=900&q=80',
        title: 'Signature Package',
        text: 'Gói quà đặc trưng với tone màu ấm và sang.',
        tag: 'Signature',
        price: 'Từ 990.000đ',
    },
    {
        image:
            'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
        title: 'Elegant Surprise',
        text: 'Món quà nhỏ nhưng được trình bày đầy cảm xúc.',
        tag: 'Limited',
        price: 'Từ 680.000đ',
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

    const next = () => setIndex((current) => (current + 1) % slides.length);
    const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = window.setInterval(next, 4500);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="home">
            {slides.map((slide, i) => (
                <article className={`slide ${i === index ? 'active' : ''}`} key={slide.title}>
                    <img src={slide.image} alt={slide.title} />
                    <div className="hero-content">
                        <p>{slide.kicker}</p>
                        <h1>{slide.title}</h1>
                        <span>{slide.description}</span>
                        <a className="primary-btn" href="#gallery">Khám phá ngay</a>
                    </div>
                </article>
            ))}

            <button className="slider-btn prev" onClick={prev} aria-label="Previous slide"><ChevronLeft /></button>
            <button className="slider-btn next" onClick={next} aria-label="Next slide"><ChevronRight /></button>

            <div className="dots">
                {slides.map((slide, i) => (
                    <button
                        className={i === index ? 'dot active-dot' : 'dot'}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        key={slide.title}
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
                    <h2>Làng lụa tơ tằm - Lá Silk</h2>
                    <p>Landing page tĩnh mô phỏng phong cách quà tặng thủ công cao cấp: thanh lịch, nhiều ảnh, dễ tùy chỉnh.</p>
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
                    <p className="contact-line"><MapPin size={16} /> Hà Nội, Việt Nam</p>
                    <p className="contact-line"><Phone size={16} /> 0386 18 16 23</p>
                    <p className="contact-line"><Mail size={16} /> hello@example.com</p>
                </div>
            </div>
            <div className="footer-bottom">© 2026 La'Artisan Gift. Frontend static website demo.</div>
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
