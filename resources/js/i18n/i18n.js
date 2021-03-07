import Vue from 'vue'
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

const messages = {
    en: {
        call_us: 'call us free',
        email: 'email',
        my_account: 'My Account',
        my_wish_list: 'My WishList',
        usd: 'usd',
        dh: 'dh',
        techo: 'Techo',
        electronic_shop: 'electronic shop',
        cart_text: 'cart',
        search_text: 'search entire store here..',
        computer_laptop: 'computer - laptop',
        electronics: 'electronics',
        phone_tablet: 'smart phone & tablet',
        fashion_accessories: 'fashion & accessories',
        health_beauty: 'health & beauty',
        books_office: 'books & office',
        jewelery_watch: 'jewelery & watch',
        sport_outdoor: 'sport & outdoor',
        home_kitchen: 'home & kitchen',
        all_categories: 'all categories',
        home: 'home',
        chair: 'chair',
        computer: 'computer',
        shop: 'shop',
        blog: 'blog',
        electronic: 'electronic',
        contact_us: 'contact us',
        men_fashion: 'men fashion',
        home_brewing: 'home_brewing',
        table_linens: 'table linens',
        knife_accessories: 'knife accessories',
        utensils_gadgets: 'utensils gadgets'
    },
    ar: {
        call_us: 'اتصل بنا مجانا',
        email: 'بريد الكتروني',
        my_account: 'حسابي',
        my_wish_list: 'مقضلاتي',
        usd: 'دولار',
        dh: 'درهم',
        techo: 'تيكو',
        electronic_shop: 'سوق الكتروني',
        cart_text: 'عربة التسوق',
        search_text: 'ابحث في المتجر هنا..',
        computer_laptop: 'حاسوب - حاسوب محمول',
        electronics: 'إلكترونيات',
        phone_tablet: 'هاتف ذكي وكمبيوتر لوحي',
        fashion_accessories: 'الأزياء والاكسسوارات',
        health_beauty: 'الصحة والجمال',
        books_office: 'الكتب والمكتب',
        jewelery_watch: 'المجوهرات والساعات',
        sport_outdoor: 'رياضة وصياحة',
        home_kitchen: 'المنزل والمطبخ',
        all_categories: 'جميع الفئات',
        home: 'الرئيسية',
        chair: 'كراسي',
        computer: 'حواسب',
        shop: 'متجر',
        blog: 'منتدى',
        electronic: 'الكترونيات',
        contact_us: 'تواصل معنا',
        men_fashion: 'أزياء الرجال',
        home_brewing: 'تخمير المنزل',
        table_linens: 'بياضات المائدة',
        knife_accessories: 'ملحقات السكين',
        utensils_gadgets: 'أواني'
    },
    fr: {
        call_us: 'appeler nous gratuite',
        email: 'email',
        my_account: '',
        my_wish_list: '',
        usd: '',
        dh: '',
        techo: '',
        electronic_shop: '',
        cart_text: '',
        search_text: '',
        computer_laptop: '',
        electronics: '',
        phone_tablet: '',
        fashion_accessories: '',
        health_beauty: '',
        books_office: '',
        jewelery_watch: '',
        sport_outdoor: '',
        home_kitchen: '',
    },
    es: {
        call_us: 'llámanos gratis',
        email: 'email',
        my_account: '',
        my_wish_list: '',
        usd: '',
        dh: '',
        techo: '',
        electronic_shop: '',
        cart_text: '',
        search_text: '',
        computer_laptop: '',
        electronics: '',
        phone_tablet: '',
        fashion_accessories: '',
        health_beauty: '',
        books_office: '',
        jewelery_watch: '',
        sport_outdoor: '',
        home_kitchen: '',
    }
}

const I18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

export default I18n