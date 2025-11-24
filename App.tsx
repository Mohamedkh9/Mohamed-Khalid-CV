import React, { useState, useEffect } from 'react';
import { 
  User, Briefcase, Palette, Mail, Phone, MapPin, 
  Download, ExternalLink, Linkedin, Send, PenTool, Video, 
  Image as ImageIcon, Layers, X, Eye, Menu, Home, Grid, Globe, CheckCircle, Sparkles, Facebook, Moon, Sun
} from 'lucide-react';
import { Lang, Translation, Skill } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>('ar');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // ---------------------------------------------------------------------------
  // إعدادات الصور
  // ---------------------------------------------------------------------------
  // استخدام رابط مباشر للصورة للعرض الفوري
  const profileImageUrl = "https://photos.fife.usercontent.google.com/pw/AP1GczNDwfOTvqThn8COEmbD86F5kgn67EoanJJ7dGn_bmNCw_xi0T9w66p2Tg=w808-h811-s-no-gm?authuser=0"; 
  
  // Google Drive preview link
  const cvUrl = "https://drive.google.com/file/d/1AoQD3mP-B8aBZa0ygSSlUynQZsI3wutB/preview";

  const translations: Record<Lang, Translation> = {
    ar: {
      name: 'محمد خالد',
      title: 'مصمم جرافيك ومونتير',
      nav: [
        { id: 'home', label: 'الرئيسية', icon: Home },
        { id: 'about', label: 'من أنا', icon: User },
        { id: 'skills', label: 'مهاراتي', icon: PenTool },
        { id: 'experience', label: 'الخبرات', icon: Briefcase },
        { id: 'portfolio', label: 'أعمالي', icon: Grid },
        { id: 'contact', label: 'تواصل معي', icon: Mail },
      ],
      home: {
        greeting: 'مرحباً، أنا محمد خالد',
        headline: 'أحول الأفكار إلى',
        headlineHighlight: 'تجارب بصرية',
        description: 'مصمم جرافيك بخبرة واسعة في تصميم الهويات البصرية، الموشن جرافيك، والباكجينج. أساعد العلامات التجارية على التعبير عن نفسها بلمسة إبداعية واحترافية.',
        btnPortfolio: 'أعمالي السابقة',
        btnCV: 'عرض السيرة الذاتية',
      },
      about: {
        title: 'البيانات الشخصية',
        description: 'محمد خالد عبد المجيد، مصمم جرافيك مصري، حاصل على بكالوريوس التربية الفنية بتقدير جيد جداً مع مرتبة الشرف. أدرس حالياً تمهيدي الماجستير في التصميم والزخرفة. شغوف بكل ما يتعلق بالفنون البصرية والتكنولوجيا.',
        addressLabel: 'العنوان', addressValue: 'مصر',
        emailLabel: 'البريد', emailValue: 'mk77285@gmail.com',
        phoneLabel: 'الهاتف', phoneValue: '+20 102 436 1468 | +966 50 350 6532',
        statusLabel: 'الحالة', statusValue: 'متاح للعمل (Freelance)',
      },
      skills: {
        title: 'المهارات التقنية',
      },
      experience: {
        title: 'الرحلة المهنية',
        items: [
          { role: "Freelance Graphic Designer", company: "Potter Use Agency", date: "2024 - الآن", desc: "تصميم حملات إعلانية، تصاميم سوشيال ميديا." },
          { role: "Freelance Graphic Designer", company: "Frenzy Ice Cream", date: "2024 - الآن", desc: "تصميم عبوات (Packaging)، ستيكرات، وموديلات 3D." },
          { role: "Remote Graphic Designer", company: "Carrefour Market - UAE", date: "2023 - الآن", desc: "تصميم عروض السوشيال ميديا والبروشورات الترويجية." },
          { role: "Graphic Designer", company: "مكتب دعوة للدعاية والإعلان", date: "2023", desc: "تصميم المطبوعات والهويات البصرية." },
          { role: "Video Editor", company: "Concept Design", date: "2023", desc: "مونتاج وتغطية المعارض (EVIS Summit)." },
          { role: "Social Media Designer", company: "مكتب تطوير الأداء الجامعي", date: "2021", desc: "تصميم منشورات السوشيال ميديا للجامعة." },
          { role: "Freelance Graphic Designer", company: "مكتب خدمة المجتمع", date: "2019 - 2021", desc: "المشاركة في تصميم الحملات التوعوية والبيئية." },
          { role: "Graphic Designer", company: "مكتب بريستيج للدعاية", date: "2018", desc: "تصميم الهويات التجارية واللافتات الخارجية." },
          { role: "Graphic Designer", company: "مكتب هجرس للدعاية", date: "2017", desc: "تصميم كروت العمل، الفلايرات، والمطبوعات التجارية." },
        ]
      },
      portfolio: {
        title: 'معرض الأعمال',
        items: [
          { category: 'Packaging', title: 'Frenzy Ice Cream', icon: ImageIcon, desc: 'تصميم عبوات ومنتجات 3D' },
          { category: 'Social Media', title: 'Carrefour UAE', icon: Layers, desc: 'حملات ترويجية وتصاميم سوشيال' },
          { category: 'Video Editing', title: 'EVIS Summit', icon: Video, desc: 'تغطية ومونتاج الفعاليات' },
          { category: 'Branding', title: 'جامعة المنصورة', icon: PenTool, desc: 'هويات بصرية وشعارات' },
        ],
        moreBtn: 'مشاهدة المزيد على Behance',
      },
      contact: {
        title: 'تواصل معي',
        nameLabel: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        messageLabel: 'الرسالة',
        sendBtn: 'إرسال',
        successMsg: 'تم الإرسال بنجاح!',
      },
      footer: {
        rights: '© 2025 جميع الحقوق محفوظة',
      },
      cvPopup: {
        title: 'السيرة الذاتية',
      }
    },
    en: {
      name: 'Mohamed Khalid',
      title: 'Graphic Designer & Editor',
      nav: [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About Me', icon: User },
        { id: 'skills', label: 'Skills', icon: PenTool },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'portfolio', label: 'Portfolio', icon: Grid },
        { id: 'contact', label: 'Contact', icon: Mail },
      ],
      home: {
        greeting: 'Hello, I\'m Mohamed Khalid',
        headline: 'Transforming Ideas into',
        headlineHighlight: 'Visual Experiences',
        description: 'A Graphic Designer with extensive experience in visual identity, motion graphics, and packaging. I help brands express themselves with a creative and professional touch.',
        btnPortfolio: 'My Portfolio',
        btnCV: 'View CV',
      },
      about: {
        title: 'Personal Information',
        description: 'Mohamed Khalid Abdel Meguid, an Egyptian Graphic Designer, holds a Bachelor\'s degree in Art Education with Very Good grade with Honors. I am currently studying for a Master\'s pre-requisite in Design and Ornamentation. I am passionate about everything related to visual arts and technology.',
        addressLabel: 'Address', addressValue: 'Egypt',
        emailLabel: 'Email', emailValue: 'mk77285@gmail.com',
        phoneLabel: 'Phone', phoneValue: '+20 102 436 1468 | +966 50 350 6532',
        statusLabel: 'Status', statusValue: 'Available for Freelance',
      },
      skills: {
        title: 'Technical Skills',
      },
      experience: {
        title: 'Professional Journey',
        items: [
          { role: "Freelance Graphic Designer", company: "Potter Use Agency", date: "2024 - Present", desc: "Designing advertising campaigns, social media designs." },
          { role: "Freelance Graphic Designer", company: "Frenzy Ice Cream", date: "2024 - Present", desc: "Designing packaging, stickers, and 3D models." },
          { role: "Remote Graphic Designer", company: "Carrefour Market - UAE", date: "2023 - Present", desc: "Designing social media offers and promotional brochures." },
          { role: "Graphic Designer", company: "Da'wah Advertising Office", date: "2023", desc: "Designing publications and visual identities." },
          { role: "Video Editor", company: "Concept Design", date: "2023", desc: "Editing and covering exhibitions (EVIS Summit)." },
          { role: "Social Media Designer", company: "University Performance Development Office", date: "2021", desc: "Designing social media posts for the university." },
          { role: "Freelance Graphic Designer", company: "Community Service Office", date: "2019 - 2021", desc: "Participating in designing awareness and environmental campaigns." },
          { role: "Graphic Designer", company: "Prestige Advertising Office", date: "2018", desc: "Designing commercial identities and outdoor signs." },
          { role: "Graphic Designer", company: "Hajras Advertising Office", date: "2017", desc: "Designing business cards, flyers, and commercial publications." },
        ]
      },
      portfolio: {
        title: 'Portfolio Showcase',
        items: [
          { category: 'Packaging', title: 'Frenzy Ice Cream', icon: ImageIcon, desc: 'Packaging Design & 3D' },
          { category: 'Social Media', title: 'Carrefour UAE', icon: Layers, desc: 'Promotional Campaigns' },
          { category: 'Video Editing', title: 'EVIS Summit', icon: Video, desc: 'Event Coverage & Montage' },
          { category: 'Branding', title: 'Mansoura University', icon: PenTool, desc: 'Visual Identity & Logos' },
        ],
        moreBtn: 'View More on Behance',
      },
      contact: {
        title: 'Get In Touch',
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        sendBtn: 'Send',
        successMsg: 'Sent Successfully!',
      },
      footer: {
        rights: '© 2025 All Rights Reserved',
      },
      cvPopup: {
        title: 'Curriculum Vitae',
      }
    }
  };

  const t = translations[lang];

  const skills: Skill[] = [
    { name: 'Adobe Photoshop', code: 'Ps', color: '#31A8FF', textColor: 'white' },
    { name: 'Adobe Illustrator', code: 'Ai', color: '#FF9A00', textColor: '#330000' },
    { name: 'Adobe InDesign', code: 'Id', color: '#FF3366', textColor: 'white' },
    { name: 'After Effects', code: 'Ae', color: '#D291FF', textColor: '#330033' },
    { name: 'Premiere Pro', code: 'Pr', color: '#9999FF', textColor: '#000033' },
    { name: 'Cinema 4D', code: '3D', color: '#004477', textColor: 'white' },
    { name: 'Microsoft Word', code: 'W', color: '#2B579A', textColor: 'white' },
    { name: 'Microsoft PowerPoint', code: 'P', color: '#D24726', textColor: 'white' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const phoneNumber = "201024361468"; // Egyptian number
    const text = `*طلب تواصل جديد*\n\n*الاسم:* ${contactName}\n*البريد:* ${contactEmail}\n*الرسالة:* ${contactMessage}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);

    // Reset form fields
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 ${lang === 'ar' ? 'font-cairo' : 'font-poppins'} ${isDarkMode ? 'dark' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        /* Custom Scrollbar for Dark Mode */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; }
        ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
        .font-cairo { font-family: 'Cairo', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`lg:hidden fixed top-4 z-50 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg text-indigo-600 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${lang === 'ar' ? 'left-4' : 'right-4'}`}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto overflow-hidden lg:h-screen shadow-2xl lg:my-0 bg-white dark:bg-slate-800 transition-colors duration-300">
        
        {/* Sidebar */}
        <aside className={`
          bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl text-slate-800 dark:text-slate-200 w-full lg:w-80 flex-shrink-0 flex flex-col 
          lg:static fixed inset-0 z-40 transition-transform duration-300 ease-in-out overflow-y-auto border-r border-slate-200 dark:border-slate-800
          ${isMobileMenuOpen ? 'translate-x-0' : (lang === 'ar' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
        `}>
          <div className="p-8 text-center bg-slate-100/50 dark:bg-slate-950/50 relative transition-colors duration-300">
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} 
              className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} p-2 rounded-full bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors z-50 shadow-lg`}
              title={lang === 'ar' ? 'English' : 'عربي'}
            >
              <Globe size={18} />
            </button>

            {/* Theme Switcher */}
            <button 
              onClick={toggleTheme}
              className={`absolute top-4 ${lang === 'ar' ? 'right-4' : 'left-4'} p-2 rounded-full bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors z-50 shadow-lg`}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="w-32 h-32 mx-auto mb-4 relative group cursor-pointer">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
              <div className="w-full h-full rounded-full border-4 border-indigo-600 overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center relative">
                 <img src={profileImageUrl} alt={t.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{t.name}</h1>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm uppercase tracking-wider">{t.title}</p>
          </div>

          <nav className="flex-1 py-6 px-4">
            <ul className="space-y-2">
              {t.nav.map((item) => {
                return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden
                      ${activeSection === item.id 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                    {activeSection === item.id && <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20"></span>}
                    <item.icon size={18} className={`relative z-10 ${activeSection === item.id ? 'text-white' : 'text-indigo-600 dark:text-indigo-400 group-hover:text-slate-900 dark:group-hover:text-white'}`} />
                    <span className="font-medium relative z-10">{item.label}</span>
                  </button>
                </li>
              )})}
            </ul>
          </nav>

          <div className="p-6 text-center border-t border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-950/30 transition-colors duration-300">
            <div className="flex justify-center gap-4 mb-4">
              <a href="https://linkedin.com/in/mohamedka99" target="_blank" rel="noreferrer" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-indigo-600 transition-all shadow-sm hover:shadow-indigo-500/50">
                <Linkedin size={18} />
              </a>
              <a href="https://behance.net/mohamedka99" target="_blank" rel="noreferrer" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-indigo-600 transition-all font-bold text-xs flex items-center justify-center w-[34px] shadow-sm hover:shadow-indigo-500/50">
                Be
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500">{t.footer.rights}</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-slate-50 dark:bg-slate-900 overflow-y-auto overflow-x-hidden scroll-smooth h-full relative transition-colors duration-300">
          
          {/* Home Section */}
          <section id="home" className="min-h-screen lg:min-h-0 lg:h-screen flex items-center justify-center relative p-8 lg:p-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
            <div className="max-w-3xl w-full animate-fade-in-up relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full text-sm font-bold mb-6 border dark:border-indigo-500/20">
                 <Sparkles size={14} />
                 {t.home.greeting}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                {t.home.headline} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 relative">
                  {t.home.headlineHighlight}
                  <svg className="absolute w-full h-3 -bottom-2 right-0 text-indigo-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
                {t.home.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('portfolio')} className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 flex items-center gap-2">
                  <Grid size={18} /> {t.home.btnPortfolio}
                </button>
                <button onClick={() => setIsCvOpen(true)} className="px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center gap-2 hover:bg-indigo-500/5">
                  <Eye size={18} />
                  {t.home.btnCV}
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex flex-wrap gap-4 items-center">
                <a href="https://wa.me/201024361468" target="_blank" rel="noreferrer" title="WhatsApp (EG)" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group shadow-md">
                  <Phone size={20} />
                </a>
                <a href="https://wa.me/966503506532" target="_blank" rel="noreferrer" title="WhatsApp (KSA)" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group shadow-md">
                  <Phone size={20} />
                </a>
                <a href="mailto:mk77285@gmail.com" title="Email" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group shadow-md">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com/in/mohamedka99" target="_blank" rel="noreferrer" title="LinkedIn" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group shadow-md">
                  <Linkedin size={20} />
                </a>
                <a href="https://behance.net/mohamedka99" target="_blank" rel="noreferrer" title="Behance" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group font-bold font-serif flex items-center justify-center w-[46px] h-[46px] shadow-md">
                  Be
                </a>
                <a href="https://facebook.com/Mohamedka99" target="_blank" rel="noreferrer" title="Facebook" className="p-3 rounded-full bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 border text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-600 transition-all duration-300 group shadow-md">
                  <Facebook size={20} />
                </a>
              </div>

            </div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          </section>

          {/* About Section */}
          <section id="about" className="p-8 lg:p-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/50 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-4xl relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {t.about.title}
              </h3>
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-indigo-500/20 shadow-xl relative group">
                     <div className="absolute inset-0 bg-indigo-600 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                     <img src={profileImageUrl} alt={t.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="md:col-span-3 space-y-6 text-slate-600 dark:text-slate-300">
                  <p className="leading-loose text-lg">
                    {t.about.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400"><MapPin size={20} /></div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{t.about.addressLabel}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{t.about.addressValue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400"><Mail size={20} /></div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{t.about.emailLabel}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm break-all">{t.about.emailValue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400"><Phone size={20} /></div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{t.about.phoneLabel}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm" dir="ltr">{t.about.phoneValue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400"><Briefcase size={20} /></div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{t.about.statusLabel}</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{t.about.statusValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="p-8 lg:p-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
            <div className="max-w-6xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {t.skills.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all hover:-translate-y-1 group flex flex-col items-center text-center gap-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shadow-md transition-transform group-hover:scale-110 relative z-10"
                      style={{ backgroundColor: skill.color, color: skill.textColor, boxShadow: `0 4px 15px -3px ${skill.color}60` }}
                    >
                      {skill.code}
                    </div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 relative z-10">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="p-8 lg:p-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {t.experience.title}
              </h3>
              <div className="relative border-r-2 border-slate-200 dark:border-slate-700 pr-8 space-y-12">
                {t.experience.items.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -right-[41px] top-0 w-6 h-6 bg-white dark:bg-slate-800 rounded-full border-4 border-indigo-500 group-hover:scale-125 group-hover:border-indigo-400 transition-transform duration-300 z-10"></div>
                    
                    <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500/30 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-all group-hover:translate-x-[-5px]">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 border dark:border-indigo-500/20">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-300 font-medium text-sm mb-3">{exp.company}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="p-8 lg:p-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
            <div className="max-w-6xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {t.portfolio.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.portfolio.items.map((item, index) => (
                   <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-slate-800 aspect-[4/3] cursor-pointer border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                    {/* Overlay with stronger gradient and slide-up text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/60 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col justify-end p-6">
                      <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{item.category}</span>
                      <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{item.title}</h4>
                      <p className="text-slate-300 text-xs mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150">{item.desc}</p>
                    </div>
                    {/* Background zoom effect */}
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-700/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/50 transition-all duration-500 ease-out relative z-10">
                      <item.icon size={64} className="text-slate-400 dark:text-slate-600 group-hover:text-indigo-500/50 transition-all duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                ))}

                 {/* More Button */}
                 <a href="https://behance.net/mohamedka99" target="_blank" rel="noreferrer" className="col-span-1 md:col-span-2 lg:col-span-2 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all flex flex-col items-center justify-center p-8 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 group-hover:bg-indigo-500/20 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-400 mb-3 transition-colors">
                      <ExternalLink size={24} />
                    </div>
                    <span className="font-bold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{t.portfolio.moreBtn}</span>
                 </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="p-8 lg:p-16 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-4xl">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {t.contact.title}
              </h3>
              <div className="bg-slate-50 dark:bg-slate-700/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
                <form onSubmit={handleContact} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.nameLabel}</label>
                      <input 
                        type="text" 
                        required 
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.emailLabel}</label>
                      <input 
                        type="email" 
                        required 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.messageLabel}</label>
                    <textarea 
                      rows={4} 
                      required 
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                     {messageSent ? (
                       <><CheckCircle size={18} /> {t.contact.successMsg}</>
                     ) : (
                       <><Send size={18} /> {t.contact.sendBtn}</>
                     )}
                  </button>
                </form>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* CV Modal */}
      {isCvOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsCvOpen(false)}>
          <div className="bg-white dark:bg-slate-800 w-full max-w-5xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-slate-200 dark:border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50">
               <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                 <Download size={18} className="text-indigo-600 dark:text-indigo-400" /> {t.cvPopup.title}
               </h3>
               <button onClick={() => setIsCvOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500 dark:text-slate-400"><X size={24} /></button>
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-900 relative">
               <iframe 
                 src={cvUrl} 
                 className="w-full h-full border-0"
                 title="CV Preview"
               />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;