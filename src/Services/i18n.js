import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home : {
        navbar : {
          services: "services",
          aboutus: "aboutus",
          offers: "offers",
          contacts: "contacts",
          privacy_policy: "privacy policy",
          terms_of_service: "terms of service",
          login : "login",
        },
        welcome : {
          welcome: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry.",
          start_now: "Start Now!",
        },
        services : {
          services_we_offer : "SERVICES WE OFFER",
          services_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          grwoing_business : "Growing Business",
          grwoing_business_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          save_time : "Save Time",
          save_time_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          customer_support : "Customer Support",
          customer_support_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_invoice : "Make Invoice",
          make_invoice_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_your_market : "Create Your Market",
          make_your_market_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_shopping : "Make Shopping",
          make_shopping_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
        },
        about : {
          about_my_easy : "ABOUT MY EASY",
          about_my_easy_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          first_section_title : "We Believe",
          first_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          first_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          second_section_title : "We Believe",
          second_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          second_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          read_more : "READ MORE",
        },
        panel : {
          title : "We Can Make Youe Rich",
          description : "you can use your moeny to busniss it in useful work",
          action : "start"
        },
        offers : {
          what_we_offer : "What We Can Offer",
          what_we_offer_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          first_section_title : "We Believe",
          first_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          first_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          second_section_title : "We Believe",
          second_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          second_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
        },
      },
    },
  },
  ar: {
    translation: {
      home : {
        navbar : {
          services: "الخدمات",
          aboutus: "عن الشركة",
          offers: "العروض",
          contacts: "تواصل معنا",
          privacy_policy: "سياسة الخصوصية",
          terms_of_service: "شروط الخدمة",
          login : "سجل الدخول",
        },
        welcome : {
          welcome: "ابدأ مشروعك الخاص علي منصتنا. منصة التجارة الالكترونية رقم واحد في مصر",
          start_now: "ابدأ الاَن!",
        },
        services : {
          services_we_offer : "ما نقدمه من خدمات",
          services_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          grwoing_business : "طور مشاريعك",
          grwoing_business_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          save_time : "وفر الوقت",
          save_time_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          customer_support : "خدمة العملاء",
          customer_support_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          make_invoice : "أنشيء فواتيرك",
          make_invoice_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          make_your_market : "أنشيء متجرك",
          make_your_market_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          make_shopping : "قم بالتسوق",
          make_shopping_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
        },
        about : {
          about_my_easy : "عن ماي إيزي",
          about_my_easy_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          first_section_title : "رؤيتنا",
          first_section_description_1 : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          first_section_description_2 : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          second_section_title : "هدفنا",
          second_section_description_1 : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          second_section_description_2 : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          read_more : "اقرأ المزيد",
        },
        panel : {
          title : "ستصنع ثروة من خلال التجارة",
          description : "بإمكانك استخدام أموالك لتطوير مشاريعك",
          action : "ابدأ"
        },
        offers : {
          what_we_offer : "ما نقدمه لكم",
          what_we_offer_description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات",
          first_section_title : "We Believe",
          first_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          first_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          second_section_title : "We Believe",
          second_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          second_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
        },
      }
    },
  },
};
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
    supportedLngs: ["en", "ar"],
    nonExplicitSupportedLngs: true,
  });
export default i18next;