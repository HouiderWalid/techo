export default {
    BandInfo: [
        {
            id: 1,
            title: 'call_us',
            icon: 'phone-alt',
            rtlRotation: '270',
            content: '06 73 90 46 23',
        },
        {
            id: 2,
            title: 'email',
            icon: 'envelope',
            content: 'houiderwalid@gmail.com'
        }
    ],
    BandLink: [
        {
            id: 1,
            title: 'my_account',
            icon: 'user',
            url: '#',
            subLinks: []
        },
        {
            id: 2,
            title: 'my_wish_list',
            icon: 'heart',
            url: '#',
            subLinks: []
        },
        {
            id: 3,
            title: 'languages',
            icon: null,
            url: '#',
            subLinks: [
                {id: 1, code: 'en', dir: 'ltr', title: 'english', icon: '', url: null},
                {id: 2, code: 'fr', dir: 'ltr', title: 'français', icon: '', url: null},
                {id: 3, code: 'ar', dir: 'rtl', title: 'العربية', icon: '', url: null},
                {id: 4, code: 'es', dir: 'ltr', title: 'espanol', icon: '', url: null},
            ]
        },
        {
            id: 4,
            title: 'currency',
            icon: null,
            url: '#',
            subLinks: [
                {id: 1, code: '', title: 'usd', icon: '', url: null},
                {id: 2, code: '', title: 'dh', icon: '', url: null}
            ]
        }
    ]
}
