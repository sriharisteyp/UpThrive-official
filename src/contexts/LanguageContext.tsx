
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ar' | 'hi' | 'pt' | 'ru';

// Define translations
export type TranslationKey = 
  | 'home' 
  | 'skillsQuiz' 
  | 'careers' 
  | 'dashboard'
  | 'login'
  | 'signup'
  | 'tagline'
  | 'findCareer'
  | 'takeQuiz'
  | 'viewDashboard'
  | 'signUpFree'
  | 'howItWorks'
  | 'skillAssessment'
  | 'careerMatching'
  | 'customRoadmap'
  | 'getStarted'
  | 'reviews'
  | 'contactUs';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    home: 'Home',
    skillsQuiz: 'Skills Quiz',
    careers: 'Careers',
    dashboard: 'Dashboard',
    login: 'Login',
    signup: 'Sign Up',
    tagline: 'Take our skills assessment quiz and get personalized career recommendations with roadmaps tailored to your strengths.',
    findCareer: 'Find Your Perfect Career Path',
    takeQuiz: 'Take the Quiz',
    viewDashboard: 'View Dashboard',
    signUpFree: 'Sign Up Free',
    howItWorks: 'How It Works',
    skillAssessment: 'Skills Assessment',
    careerMatching: 'Career Matching',
    customRoadmap: 'Custom Roadmap',
    getStarted: 'Get Started',
    reviews: 'What Our Users Say',
    contactUs: 'Contact Us'
  },
  es: {
    home: 'Inicio',
    skillsQuiz: 'Cuestionario de Habilidades',
    careers: 'Carreras',
    dashboard: 'Panel',
    login: 'Iniciar Sesión',
    signup: 'Registrarse',
    tagline: 'Realiza nuestro cuestionario de evaluación de habilidades y obtén recomendaciones de carrera personalizadas con hojas de ruta adaptadas a tus puntos fuertes.',
    findCareer: 'Encuentra Tu Carrera Perfecta',
    takeQuiz: 'Realizar Cuestionario',
    viewDashboard: 'Ver Panel',
    signUpFree: 'Registrarse Gratis',
    howItWorks: 'Cómo Funciona',
    skillAssessment: 'Evaluación de Habilidades',
    careerMatching: 'Compatibilidad de Carrera',
    customRoadmap: 'Hoja de Ruta Personalizada',
    getStarted: 'Empezar',
    reviews: 'Lo Que Dicen Nuestros Usuarios',
    contactUs: 'Contáctenos'
  },
  fr: {
    home: 'Accueil',
    skillsQuiz: 'Quiz de Compétences',
    careers: 'Carrières',
    dashboard: 'Tableau de Bord',
    login: 'Connexion',
    signup: "S'inscrire",
    tagline: 'Faites notre quiz d\'évaluation des compétences et obtenez des recommandations de carrière personnalisées avec des feuilles de route adaptées à vos points forts.',
    findCareer: 'Trouvez Votre Parcours Professionnel Idéal',
    takeQuiz: 'Faire le Quiz',
    viewDashboard: 'Voir le Tableau de Bord',
    signUpFree: "S'inscrire Gratuitement",
    howItWorks: 'Comment Ça Marche',
    skillAssessment: 'Évaluation des Compétences',
    careerMatching: 'Correspondance de Carrière',
    customRoadmap: 'Feuille de Route Personnalisée',
    getStarted: 'Commencer',
    reviews: 'Ce Que Disent Nos Utilisateurs',
    contactUs: 'Contactez-nous'
  },
  de: {
    home: 'Startseite',
    skillsQuiz: 'Fähigkeitstest',
    careers: 'Karrieren',
    dashboard: 'Dashboard',
    login: 'Anmelden',
    signup: 'Registrieren',
    tagline: 'Machen Sie unseren Fähigkeitstest und erhalten Sie personalisierte Karriereempfehlungen mit auf Ihre Stärken zugeschnittenen Fahrplänen.',
    findCareer: 'Finden Sie Ihren perfekten Karriereweg',
    takeQuiz: 'Test machen',
    viewDashboard: 'Dashboard anzeigen',
    signUpFree: 'Kostenlos registrieren',
    howItWorks: 'Wie es funktioniert',
    skillAssessment: 'Fähigkeitsbewertung',
    careerMatching: 'Karriere-Matching',
    customRoadmap: 'Individueller Fahrplan',
    getStarted: 'Loslegen',
    reviews: 'Was unsere Benutzer sagen',
    contactUs: 'Kontaktieren Sie uns'
  },
  zh: {
    home: '首页',
    skillsQuiz: '技能测验',
    careers: '职业',
    dashboard: '仪表板',
    login: '登录',
    signup: '注册',
    tagline: '参加我们的技能评估测验，获取个性化的职业建议和根据您的优势量身定制的发展路线图。',
    findCareer: '找到您理想的职业道路',
    takeQuiz: '参加测验',
    viewDashboard: '查看仪表板',
    signUpFree: '免费注册',
    howItWorks: '工作原理',
    skillAssessment: '技能评估',
    careerMatching: '职业匹配',
    customRoadmap: '定制路线图',
    getStarted: '开始',
    reviews: '用户评价',
    contactUs: '联系我们'
  },
  ja: {
    home: 'ホーム',
    skillsQuiz: 'スキルクイズ',
    careers: 'キャリア',
    dashboard: 'ダッシュボード',
    login: 'ログイン',
    signup: '登録',
    tagline: 'スキル評価クイズを受けて、あなたの強みに合わせたパーソナライズされたキャリア提案とロードマップを取得しましょう。',
    findCareer: '理想のキャリアパスを見つける',
    takeQuiz: 'クイズを受ける',
    viewDashboard: 'ダッシュボードを見る',
    signUpFree: '無料登録',
    howItWorks: '仕組み',
    skillAssessment: 'スキル評価',
    careerMatching: 'キャリアマッチング',
    customRoadmap: 'カスタムロードマップ',
    getStarted: '始める',
    reviews: 'ユーザーの声',
    contactUs: 'お問い合わせ'
  },
  ar: {
    home: 'الرئيسية',
    skillsQuiz: 'اختبار المهارات',
    careers: 'المسارات المهنية',
    dashboard: 'لوحة التحكم',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    tagline: 'قم بإجراء اختبار تقييم المهارات لدينا واحصل على توصيات وظيفية مخصصة مع خرائط طريق مصممة حسب نقاط قوتك.',
    findCareer: 'ابحث عن مسارك المهني المثالي',
    takeQuiz: 'قم بالاختبار',
    viewDashboard: 'عرض لوحة التحكم',
    signUpFree: 'تسجيل مجاني',
    howItWorks: 'كيف يعمل',
    skillAssessment: 'تقييم المهارات',
    careerMatching: 'مطابقة الوظائف',
    customRoadmap: 'خارطة طريق مخصصة',
    getStarted: 'ابدأ الآن',
    reviews: 'ما يقوله مستخدمونا',
    contactUs: 'اتصل بنا'
  },
  hi: {
    home: 'होम',
    skillsQuiz: 'कौशल प्रश्नोत्तरी',
    careers: 'करियर',
    dashboard: 'डैशबोर्ड',
    login: 'लॉगिन',
    signup: 'साइन अप',
    tagline: 'हमारी कौशल आकलन प्रश्नोत्तरी लें और अपनी ताकत के अनुरूप व्यक्तिगत करियर अनुशंसाएँ प्राप्त करें।',
    findCareer: 'अपना परफेक्ट करियर पाथ खोजें',
    takeQuiz: 'क्विज़ लें',
    viewDashboard: 'डैशबोर्ड देखें',
    signUpFree: 'मुफ्त साइन अप करें',
    howItWorks: 'यह कैसे काम करता है',
    skillAssessment: 'कौशल आकलन',
    careerMatching: 'करियर मिलान',
    customRoadmap: 'कस्टम रोडमैप',
    getStarted: 'शुरू करें',
    reviews: 'हमारे उपयोगकर्ता क्या कहते हैं',
    contactUs: 'संपर्क करें'
  },
  pt: {
    home: 'Início',
    skillsQuiz: 'Questionário de Habilidades',
    careers: 'Carreiras',
    dashboard: 'Painel',
    login: 'Entrar',
    signup: 'Inscrever-se',
    tagline: 'Faça nosso questionário de avaliação de habilidades e obtenha recomendações de carreira personalizadas com roteiros adaptados aos seus pontos fortes.',
    findCareer: 'Encontre Seu Caminho de Carreira Perfeito',
    takeQuiz: 'Fazer o Questionário',
    viewDashboard: 'Ver Painel',
    signUpFree: 'Inscreva-se Gratuitamente',
    howItWorks: 'Como Funciona',
    skillAssessment: 'Avaliação de Habilidades',
    careerMatching: 'Correspondência de Carreira',
    customRoadmap: 'Roteiro Personalizado',
    getStarted: 'Começar',
    reviews: 'O Que Nossos Usuários Dizem',
    contactUs: 'Contate-nos'
  },
  ru: {
    home: 'Главная',
    skillsQuiz: 'Тест Навыков',
    careers: 'Карьеры',
    dashboard: 'Панель',
    login: 'Вход',
    signup: 'Регистрация',
    tagline: 'Пройдите наш тест оценки навыков и получите персонализированные рекомендации карьеры с дорожными картами, адаптированными к вашим сильным сторонам.',
    findCareer: 'Найдите Свой Идеальный Карьерный Путь',
    takeQuiz: 'Пройти Тест',
    viewDashboard: 'Просмотреть Панель',
    signUpFree: 'Зарегистрироваться Бесплатно',
    howItWorks: 'Как Это Работает',
    skillAssessment: 'Оценка Навыков',
    careerMatching: 'Подбор Карьеры',
    customRoadmap: 'Индивидуальная Дорожная Карта',
    getStarted: 'Начать',
    reviews: 'Что Говорят Наши Пользователи',
    contactUs: 'Свяжитесь с нами'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
