import { initI18n, setLanguage } from './i18n.js';

class TravelApp {
    constructor() {
        this.init();
    }

    async init() {
        await this.showLoadingScreen();
        await this.renderApp();
        this.initEventListeners();
        this.initAnimations();
        initI18n('ar');
    }

    showLoadingScreen() {
        return new Promise((resolve) => {
            const loadingHTML = `
                <div class="loading-screen">
                    <div class="plane-loader">
                        <i class="fas fa-plane"></i>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', loadingHTML);
            
            setTimeout(() => {
                const loader = document.querySelector('.loading-screen');
                loader.classList.add('fade-out');
                setTimeout(() => loader.remove(), 500);
                resolve();
            }, 2000);
        });
    }

    renderApp() {
        const appHTML = `
            ${this.renderTopBar()}
            ${this.renderNavbar()}
            <main>
                ${this.renderHero()}
                ${this.renderAbout()}
                ${this.renderServices()}
                ${this.renderDestinations()}
                ${this.renderStats()}
                ${this.renderContact()}
            </main>
            ${this.renderFloatingCTA()}
            ${this.renderFooter()}
        `;
        document.getElementById('root').innerHTML = appHTML;
    }

    renderTopBar() {
        return `
            <div class="top-bar">
                <div class="hotline">
                    <i class="fas fa-phone"></i>
                    <span data-i18n="hotline.text">خط المساعدة 24/7: +1 (555) 123-4567</span>
                </div>
                <div class="social-links-top">
                    <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="إنستغرام"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
    }

    renderNavbar() {
        return `
            <nav class="navbar">
                <a href="#hero" class="logo-link">
                    <img src="https://img.icons8.com/?size=100&id=69543&format=png&color=000000" alt="الرحلة الأولى" class="logo-img" />
                    <span class="logo-text">أواب للسفريات والسياحة</span>
                </a>
                <div class="nav-links">
                    <a href="#hero" class="nav-link" data-i18n="nav.home">الرئيسية</a>
                    <a href="#about" class="nav-link" data-i18n="nav.about">من نحن</a>
                    <a href="#services" class="nav-link">خدماتنا</a>
                    <a href="#destinations" class="nav-link" data-i18n="nav.destinations">الوجهات</a>
                    <a href="#contact" class="nav-link" data-i18n="nav.contact">تواصل معنا</a>
                    <div class="language-switcher">
                        <select id="language-switcher">
                            <option value="ar">العربية</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        `;
    }

    renderHero() {
        return `
<section id="hero" class="hero">
    <div class="hero-background">
        <div class="gradient-orbit"></div>
        <div class="particles-container"></div>
    </div>
    
    <div class="hero-container">
        <div class="logo-reveal">
            <div class="logo-sphere">
                <img src="https://i.imghippo.com/files/PyCq7908Yuw.webp" alt="أواب للسفريات" class="logo-3d">
                <div class="logo-aura"></div>
            </div>
        </div>
        
        <div class="hero-text">
            <h1 class="hero-title">
                <span class="title-char">ا</span>
                <span class="title-char">و</span>
                <span class="title-char">ا</span>
                <span class="title-char">ب</span>
            </h1>
            <p class="hero-tagline">رحلتك تبدأ من هنا</p>
            <p class="hero-subtitle">نحوّل أحلام السفر إلى ذكريات لا تُنسى</p>
        </div>
        
<div class="hero-actions">
    <a href="#about" class="magnetic-btn primary">
        <span>ابدأ رحلتك</span>
        <div class="btn-sparkles"></div>
    </a>
    <a href="#destinations" class="magnetic-btn secondary">
        <span>استكشف العالم</span>
    </a>
</div>
    </div>
    
    <div class="floating-destinations">
        <div class="destination" style="--delay: 0s">✈️ دبي</div>
        <div class="destination" style="--delay: 1s">🏔️ سويسرا</div>
        <div class="destination" style="--delay: 2s">🏝️ المالديف</div>
        <div class="destination" style="--delay: 3s">🗼 باريس</div>
    </div>
    
<div class="scroll-pulse">
    <a href="#about" class="pulse-button">
        <div class="pulse-ring"></div>
        <i class="fas fa-chevron-down"></i>
    </a>
</div>
</section>
        `;
    }

    renderAbout() {
        return `
            <section id="about" class="about-section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2>من نحن</h2>
                        <p>شركة أواب للسفريات والسياحة - رحلة تبدأ بثقة وتنتهي بذكريات</p>
                    </div>
                    
                    <div class="about-content">
                        <!-- Mission Section -->
                        <div class="mission-vision-grid">
                            <div class="mission-card fade-in-up">
                                <div class="icon-container">
                                    <div class="floating-icon">
                                        <i class="fas fa-bullseye"></i>
                                    </div>
                                </div>
                                <div class="content">
                                    <h3 class="section-title">
                                        <span class="title-decoration">ــــــا</span>
                                        رسالتنــــــــــــــا
                                    </h3>
                                    <div class="text-content">
                                        <p>تتلخص رسالتنا في تقديم حلول متكاملة في عالم السفر والسياحة، تجمع بين الجودة العالية والخدمة المتميزة لتلبية احتياجات عملائنا بأفضل طريقة ممكنة. نحن ملتزمون بتقديم تجربة سفر مريحة وآمنة من خلال باقات شاملة تشمل حجوزات الطيران، الفنادق، السيارات، التأشيرات، والرحلات السياحية، مع اهتمام خاص بالتفاصيل التي تجعل كل رحلة فريدة من نوعها.</p>
                                        <p>كما نسعى لتمكين عملائنا من تحقيق أحلامهم بالسفر، سواء للعمل أو الترفيه أو الدراسة، عبر توفير خيارات مبتكرة وخدمات شخصية تُبنى على أسس الاحترافية والثقة.</p>
                                    </div>
                                    <div class="floating-elements">
                                        <span class="floating-tag">جودة</span>
                                        <span class="floating-tag">أمان</span>
                                        <span class="floating-tag">شمولية</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Vision Section -->
                            <div class="vision-card fade-in-up">
                                <div class="icon-container">
                                    <div class="floating-icon">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                </div>
                                <div class="content">
                                    <h3 class="section-title">
                                        <span class="title-decoration">ــــــا</span>
                                        رؤيتنــــــــــــا
                                    </h3>
                                    <div class="text-content">
                                        <p>في أواب للسفريات والسياحة، نسعى لأن نكون الخيار الأول لكل من يبحث عن تجربة سفر استثنائية تجمع بين الراحة، الجودة، والابتكار. نطمح لأن نصبح الوجهة الرائدة في قطاع السفر والسياحة، سواء على المستوى المحلي أو الدولي، من خلال تقديم خدمات متميزة وشاملة تلبي جميع احتياجات عملائنا.</p>
                                        <p>رؤيتنا هي أن نكون رمزاً للتميز في مجالنا، ومصدر ثقة للعملاء الذين يتطلعون إلى أفضل الخيارات بأسعار تنافسية وتجربة لا تُنسى.</p>
                                    </div>
                                    <div class="floating-elements">
                                        <span class="floating-tag">ريادة</span>
                                        <span class="floating-tag">تميز</span>
                                        <span class="floating-tag">ثقة</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Goals Section -->
                        <div class="goals-section fade-in-up">
                            <div class="goals-header">
                                <h3 class="section-title">
                                    <span class="title-decoration">ــــــا</span>
                                    أهدافنــــــــــــــــــــــا
                                </h3>
                                <p>نسعى لتحقيق التميز من خلال مجموعة من الأهداف الاستراتيجية</p>
                            </div>
                            <div class="goals-grid">
                                <div class="goal-card">
                                    <div class="goal-icon">
                                        <i class="fas fa-bolt"></i>
                                    </div>
                                    <h4>تسهيل الخدمات</h4>
                                    <p>تسهيل خدمات السفر للعملاء من خلال خدمات مريحة وسريعة ومتكاملة.</p>
                                    <div class="goal-progress">
                                        <div class="progress-bar" data-progress="95"></div>
                                    </div>
                                </div>
                                <div class="goal-card">
                                    <div class="goal-icon">
                                        <i class="fas fa-handshake"></i>
                                    </div>
                                    <h4>تطوير الشراكات</h4>
                                    <p>تطوير شراكات استراتيجية مع أفضل الشركات المحلية والدولية في مجال الطيران والنقل والسياحة.</p>
                                    <div class="goal-progress">
                                        <div class="progress-bar" data-progress="85"></div>
                                    </div>
                                </div>
                                <div class="goal-card">
                                    <div class="goal-icon">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <h4>بناء العلاقات</h4>
                                    <p>بناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والرضا.</p>
                                    <div class="goal-progress">
                                        <div class="progress-bar" data-progress="90"></div>
                                    </div>
                                </div>
                                <div class="goal-card">
                                    <div class="goal-icon">
                                        <i class="fas fa-layer-group"></i>
                                    </div>
                                    <h4>تنوع الخدمات</h4>
                                    <p>تقديم خدمات متنوعة ومتكاملة تلبي احتياجات الأفراد والمجموعات في مجال السفر.</p>
                                    <div class="goal-progress">
                                        <div class="progress-bar" data-progress="88"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Stats Section -->
                        <div class="about-stats fade-in-up">
                            <div class="stat-item">
                                <div class="stat-number" data-count="5000">0</div>
                                <div class="stat-label">عميل راضي</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-count="50">0</div>
                                <div class="stat-label">وجهة حول العالم</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-count="12">0</div>
                                <div class="stat-label">سنة من الخبرة</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-count="98">0</div>
                                <div class="stat-label">معدل الرضا</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderServices() {
        const services = [
            {
                title: "حجوزات الطيران",
                icon: "fas fa-plane",
                description: "تشمل هذه الخدمة حجز وإصدار التذاكر الداخلية والدولية والتأكيد على المقاعد لجميع شركات الطيران وتعديل التذاكر عند الحاجة كما اننا نحرص على تقديم أفضل جودة بأقل سعر ممكن ولدينا أنظمة خصومات خاصة للمجموعات واستئجار الطائرات الخاصة.",
                features: ["تذاكر داخلية ودولية", "تأكيد المقاعد", "تعديل التذاكر", "خصومات للمجموعات", "طائرات خاصة"]
            },
            {
                title: "حجوزات الفنادق",
                icon: "fas fa-hotel",
                description: "تتوفر لدينا حجوزات الفنادق وحجوزات المنتجعات وحجوزات الشقق الفندقية وحجوزات الفلل الخاصة وتنفيذ ترقية مجانية إلى جناح لكبار الضيوف وأيضا تتوفر لدينا خدمة الغرف لكبار الضيوف وتتوفر خدمة الغسيل لكبار الضيوف وتتوفر ايضاً خدمة السبا للكبار الضيوف.",
                features: ["فنادق ومنتجعات", "شقق فندقية", "فلل خاصة", "ترقية مجانية", "خدمات VIP"]
            },
            {
                title: "حجوزات السيارات",
                icon: "fas fa-car",
                description: "تشمل هذه الخدمة تأجير السيارات بكافة أنواعها والاستقبال والتوديع من المطار وتأجير السيارة بسائق خاص وتأجير الحافلات وتشمل أيضا تذاكر القطار الدولية كما أنه يتوفر سعر خاص للمجموعات.",
                features: ["تأجير سيارات", "استقبال من المطار", "سائق خاص", "حافلات", "تذاكر قطار"]
            },
            {
                title: "إصدار التأشيرات والفيز",
                icon: "fas fa-passport",
                description: "تشمل هذه الخدمة تعبئة نماذج الإصدار وإصدار التأشيرات السياحية والتعليمية و العمل وزيارة التجارية لأي دولة خارجية واستقبال مقدم الطلب أمام السفارة وحجز موعد البصمة واستلام الجواز بعد الإصدار وتوصيل الجواز.",
                features: ["تأشيرات سياحية", "تأشيرات عمل", "تأشيرات دراسة", "حجز مواعيد", "توصيل الجوازات"]
            },
            {
                title: "الترجمات المعتمدة",
                icon: "fas fa-language",
                description: "تشمل ترجمة من العربية الي الإنجليزية ومن الإنجليزية الي الصينة ترجمات عقود الزواج -سجلات العائله -الوثائق والمستندات بشتي أنواعها",
                features: ["عربية ↔ إنجليزية", "إنجليزية ↔ صينية", "عقود زواج", "سجلات عائلة", "وثائق معتمدة"]
            },
            {
                title: "الحج والعمرة",
                icon: "fas fa-kaaba",
                description: "تشمل هذه الخدمة النقل الأرضي والسكن والإعاشة في مكة المكرمة والمدينة المنورة كما تشمل السكن والإعاشة في مشعل عرفات ومزدلفة ومنى وتشمل أيضا حجوزات الطيران وتشغيل مركز إعلامي وتقنية المعلومات والخدمات الطبية والمترجمين.",
                features: ["نقل أرضي", "سكن وإعاشة", "حجوزات طيران", "خدمات طبية", "مترجمين"]
            },
            {
                title: "خدمات الدراسة بالخارج",
                icon: "fas fa-graduation-cap",
                description: "تشمل هذه الخدمة تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات المختلفة حول العالم سواء اللغة الإنجليزية أو الصينية أو الفرنسية وغيرها من اللغات العالمية.",
                features: ["بكالوريوس", "دراسات عليا", "لغات عالمية", "تنسيق كامل", "دعم أكاديمي"]
            },
            {
                title: "الرحلات العلاجية",
                icon: "fas fa-heartbeat",
                description: "نحن نقدم خدمات الرحلات العلاجية للعملاء الذين يسعون للحصول على الرعاية الطبية عالية الجودة في وجهات سياحية.",
                features: ["رعاية طبية", "وجهات سياحية", "جودة عالية", "تنسيق متكامل", "متابعة مستمرة"]
            },
            {
                title: "المعارض و المؤتمرات",
                icon: "fas fa-users",
                description: "تشمل هذه الخدمة تقديم فريق خاص لتنظيم المعارض والمؤتمرات ولحجز القاعات واستقبال منسوبي المعرض أو المؤتمر واستقبال الضيوف من المطار وتوزيع الدعوات ومرافقة كبار الشخصيات وتنسيق الطاولات وأيضا تتوفر لدينا خدمة تنظيم الوجبات الساخنة والخفيفة وطاقم للمرافقة خارج الجمهورية وترتيب السكن والنقل والدعم اللوجيستي وتسهيل كافة إجراءات السفر وتقديم الدعم والتوثيق الإعلامي.",
                features: ["تنظيم معارض", "حجز قاعات", "استقبال ضيوف", "دعم لوجيستي", "توثيق إعلامي"]
            },
            {
                title: "برامج سياحية متنوعة",
                icon: "fas fa-globe-americas",
                description: "لدينا تنسيق برامج سياحية داخلية ودولية مع الجولات السياحية والاستقبال والتوديع في جميع مطارات العالم و شرائح الجوال الدولية وأيضا تتوفر لدينا خدمة إصدار الرخصة الدولية والبرامج العلاجية.",
                features: ["برامج داخلية", "برامج دولية", "جولات سياحية", "شرائح جوال", "رخصة دولية"]
            },
            {
                title: "السياحة الداخلية",
                icon: "fas fa-map-marked-alt",
                description: "تشمل هذه الخدمة حجوزات الفنادق والمواصلات ورحلات المزارات السياحية ورحلات المغامرات وخدمة المرشد السياحي.",
                features: ["فنادق محلية", "مواصلات", "مزارات سياحية", "مغامرات", "مرشد سياحي"]
            },
            {
                title: "خدمات التاشيرات",
                icon: "fas fa-file-alt",
                description: "فيز عمل السعوديه -تاشيرات حج وعمره وسياحيه -دعوات تجارية وحكوميه الصين – موافقات امنيه كلا من القاهره والأردن – فيز علاجية الي الهند …..",
                features: ["فيز عمل السعودية", "حج وعمرة", "دعوات تجارية", "موافقات أمنية", "فيز علاجية"]
            }
        ];

        return `
            <section id="services" class="services-section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2>خدماتنا المتكاملة</h2>
                        <p>نقدم مجموعة شاملة من خدمات السفر والسياحة لتلبية جميع احتياجاتك</p>
                    </div>
                    
                    <div class="services-tabs">
                        <button class="tab-btn active" data-category="all">جميع الخدمات</button>
                        <button class="tab-btn" data-category="travel">خدمات السفر</button>
                        <button class="tab-btn" data-category="visa">التأشيرات والفيز</button>
                        <button class="tab-btn" data-category="special">خدمات خاصة</button>
                    </div>
                    
                    <div class="services-grid" id="services-content">
                        ${this.renderServiceCards(services)}
                    </div>
                    
                    <div class="consultation-cta fade-in-up" style="text-align: center; margin-top: 3rem;">
                        <h3 style="margin-bottom: 1rem; color: #0f172a;">استفسر عن خدماتنا</h3>
                        <p style="margin-bottom: 2rem; color: #64748b">تواصل معنا للحصول على أفضل العروض والخدمات المخصصة</p>
                        <a href="#contact" class="btn btn-primary">
                            <span>تواصل معنا الآن</span>
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    renderServiceCards(services) {
        const categories = {
            'travel': [0, 1, 2, 5, 9, 10],
            'visa': [3, 4, 11],
            'special': [6, 7, 8]
        };

        return services.map((service, index) => {
            let serviceCategory = 'all';
            for (const [category, indices] of Object.entries(categories)) {
                if (indices.includes(index)) {
                    serviceCategory = category;
                    break;
                }
            }

            return `
                <div class="service-card fade-in-up" data-category="${serviceCategory}">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-description">${service.description}</p>
                        <div class="service-features">
                            ${service.features.map(feature => `
                                <span class="feature-tag">${feature}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="service-overlay">
                        <div class="overlay-content">
                            <h4>${service.title}</h4>
                            <p>${service.description.substring(0, 100)}...</p>
                            <button class="btn btn-outline" onclick="travelApp.scrollToContact()">استفسر الآن</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    generateGlobeLines() {
        let lines = '';
        for (let i = 0; i < 180; i += 20) {
            lines += `<div class="globe-line horizontal" style="top: ${i}%"></div>`;
        }
        for (let i = 0; i < 180; i += 20) {
            lines += `<div class="globe-line vertical" style="left: ${i}%"></div>`;
        }
        return lines;
    }

    generateGlobeDots() {
        let dots = '';
        const positions = [
            { top: '20%', left: '30%' },
            { top: '45%', left: '65%' },
            { top: '60%', left: '50%' },
            { top: '35%', left: '40%' },
            { top: '70%', left: '20%' },
            { top: '25%', left: '15%' }
        ];
        
        positions.forEach(pos => {
            dots += `<div class="globe-dot" style="top: ${pos.top}; left: ${pos.left};"></div>`;
        });
        
        return dots;
    }

    renderDestinations() {
        return `
            <section id="destinations" class="section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="destinations.title">أفضل الوجهات</h2>
                        <p data-i18n="destinations.subtitle">أماكن مختارة يحبها مسافرونا.</p>
                    </div>
                    <div class="cards-grid">
                        ${this.renderDestinationCard('باريس', 'فرنسا', 'مدينة الحب والأضواء', 'https://i.imghippo.com/files/BKzk5413xsE.jpg')}
                        ${this.renderDestinationCard('كوالالمبور', 'ماليزيا', 'مدينة الأبراج التوأم والطبيعة الخلابة', 'https://i.imghippo.com/files/MQy5186Wo.jpg')}
                        ${this.renderDestinationCard('بالي', 'إندونيسيا', 'جنة استوائية', 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2')}
                        ${this.renderDestinationCard('سانتوريني', 'اليونان', 'غروب شمس خلاب', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff')}
                        ${this.renderDestinationCard('مكة المكرمة', 'السعودية', 'قبلة المسلمين', 'https://images.unsplash.com/photo-1518232494197-0c0d4975b080')}
                        ${this.renderDestinationCard('المدينة المنورة', 'السعودية', 'موطن النبي محمد صلى الله عليه وسلم', 'https://images.unsplash.com/photo-1520897526229-d4c8e84ff219')}
                        ${this.renderDestinationCard('دبي', 'الإمارات', 'مدينة المستقبل', 'https://images.unsplash.com/photo-1562608703-9399f057f9c0')}
                        ${this.renderDestinationCard('روما', 'إيطاليا', 'مدينة التاريخ والثقافة', 'https://images.unsplash.com/photo-1506817825132-6c3a481b1e1d')}
                        ${this.renderDestinationCard('نيوزيلندا', 'نيوزيلندا', 'مناظر طبيعية خلابة', 'https://images.unsplash.com/photo-1513283842987-29ccf2b07270')}
                        ${this.renderDestinationCard('مالديف', 'مالديف', 'جزر استوائية ومياه زرقاء', 'https://i.imghippo.com/files/AITH7489peo.jpg')}
                        ${this.renderDestinationCard('كيب تاون', 'جنوب أفريقيا', 'أجمل المناظر الطبيعية في العالم', 'https://i.imghippo.com/files/dDQ1974VeM.jpg')}
                    </div>
                </div>
            </section>
        `;
    }

    renderDestinationCard(city, country, description, image) {
        return `
            <div class="card fade-in-up">
                <img src="${image}" alt="${city}" class="card-image" loading="lazy">
                <div class="card-content">
                    <h3 class="card-title">${city}، ${country}</h3>
                    <p class="card-description">${description}</p>
                    <button class="btn btn-secondary" style="margin-top: 1rem;">
                        استكشف <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        `;
    }

    renderStats() {
        return `
            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="5000">0</div>
                            <div class="stat-label" data-i18n="stats.trips">عملاء راضون</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="50">0</div>
                            <div class="stat-label" data-i18n="stats.destinations">وجهة حول العالم</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="12">0</div>
                            <div class="stat-label">سنة من الخبرة</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="98">0</div>
                            <div class="stat-label" data-i18n="stats.satisfaction">معدل الرضا</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderContact() {
        return `
            <section id="contact" class="section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="contact.title">تواصل معنا</h2>
                        <p data-i18n="contact.subtitle">نحن هنا لتحقيق أحلام سفرك.</p>
                    </div>
                    <div class="contact-grid">
                        ${this.renderContactCard('whatsapp', 'واتساب', 'مراسلة فورية', 'fab fa-whatsapp')}
                        ${this.renderContactCard('messenger', 'ماسنجر', 'دردشة فيسبوك', 'fab fa-facebook-messenger')}
                        ${this.renderContactCard('instagram', 'إنستغرام', 'راسلنا في أي وقت', 'fab fa-instagram')}
                        ${this.renderContactCard('phone', 'اتصل بنا', 'دعم 24/7', 'fas fa-phone')}
                    </div>
                </div>
            </section>
        `;
    }

    renderContactCard(type, title, description, icon) {
        let link = "#";
        
        switch(type) {
            case 'whatsapp':
                link = "https://wa.me/1234567890?text=مرحباً%20الرحلة%20الأولى!%20أود%20الحصول%20على%20مزيد%20من%20المعلومات%20حول%20باقات%20السفر%20الخاصة%20بكم.";
                break;
            case 'messenger':
                link = "https://m.me/firstflight";
                break;
            case 'instagram':
                link = "https://instagram.com/firstflight";
                break;
            case 'phone':
                link = "tel:+1234567890";
                break;
        }
        
        return `
            <a href="${link}" class="contact-card fade-in-up" data-contact="${type}" ${type !== 'phone' ? 'target="_blank"' : ''}>
                <div class="contact-icon">
                    <i class="${icon}"></i>
                </div>
                <h3>${title}</h3>
                <p>${description}</p>
            </a>
        `;
    }

    renderFloatingCTA() {
        return `
            <a href="https://wa.me/1234567890?text=مرحباً%20الرحلة%20الأولى!%20أود%20الحصول%20على%20مزيد%20من%20المعلومات%20حول%20باقات%20السفر%20الخاصة%20بكم." 
               class="floating-cta btn btn-primary" target="_blank">
                <i class="fab fa-whatsapp"></i>
                <span data-i18n="cta.quick">اتصال سريع</span>
            </a>
        `;
    }

    renderFooter() {
        return `
            <footer class="footer">
                <div class="container">
                    <p data-i18n="footer.copy">© 2024 الرحلة الأولى للسفر. جميع الحقوق محفوظة.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="إنستغرام"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="لينكدإن"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </footer>
        `;
    }

    initEventListeners() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        document.querySelector('.mobile-menu-btn')?.addEventListener('click', this.toggleMobileMenu.bind(this));
        
        document.getElementById('language-switcher')?.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
        
        document.querySelectorAll('.services-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterServices(e));
        });
    }

    filterServices(e) {
        const category = e.target.dataset.category;
        
        document.querySelectorAll('.services-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => card.classList.remove('hidden'), 50);
            } else {
                card.classList.add('hidden');
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    }

    scrollToContact() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        this.animateCounters();
        this.animateProgressBars();
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressBar.style.width = `${progress}%`;
                    }, 300);
                    
                    progressObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => progressObserver.observe(bar));
    }
}

// Initialize the app when DOM is loaded
let travelApp;
document.addEventListener('DOMContentLoaded', () => {
    travelApp = new TravelApp();
});