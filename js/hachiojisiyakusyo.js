// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "hachiojisiyakusyo-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('hachiojisiyakusyoUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 14;
const SCULPTURES = [
    {
        id: 1,
        name: "平和な朝",
        image: "../images/archive-hachiojishiyakusyo/19. Peaceful Morning.png",
        area: "八王子市役所エリア",
        author: "圓鍔 勝三",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "あさ"
    },
    {
        id: 2,
        name: "海の鳥と少年",
        image: "../images/archive-hachiojishiyakusyo/20. Sea Bird and Boy.png",
        area: "八王子市役所エリア",
        author: "淀井 敏夫",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "とり"
    },
    {
        id: 3,
        name: "八王子",
        image: "../images/archive-hachiojishiyakusyo/21. Hachioji.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おうじ"
    },
    {
        id: 4,
        name: "由比の牧",
        image: "../images/archive-hachiojishiyakusyo/22. Pasture of Yui.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆい"
    },
    {
        id: 5,
        name: "松姫",
        image: "../images/archive-hachiojishiyakusyo/23. Princess Matsu.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ひめ"
    },
    {
        id: 6,
        name: "乙女",
        image: "../images/archive-hachiojishiyakusyo/24. Maiden.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おとめ"
    },
    {
        id: 7,
        name: "桑の都",
        image: "../images/archive-hachiojishiyakusyo/25. City of Mulberry.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "くわ"
    },
    {
        id: 8,
        name: "千人同心",
        image: "../images/archive-hachiojishiyakusyo/26. Sennin Doshin.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "せんにん"
    },
    {
        id: 9,
        name: "夕やけ小やけ",
        image: "../images/archive-hachiojishiyakusyo/27. Sunset.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆうやけ"
    },
    {
        id: 10,
        name: "鶴舞",
        image: "../images/archive-hachiojishiyakusyo/28. Crane Dance.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "つる"
    },
    {
        id: 11,
        name: "波頭",
        image: "../images/archive-hachiojishiyakusyo/29. Wave Crest.png",
        area: "八王子市役所エリア",
        author: "渡辺 隆根",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "なみ"
    },
    {
        id: 12,
        name: "紺碧の空へ",
        image: "../images/archive-hachiojishiyakusyo/30. To the Deep Blue Sky.png",
        area: "八王子市役所エリア",
        author: "丸山 映",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "そら"
    },
    {
        id: 13,
        name: "みどりの浮標",
        image: "../images/archive-hachiojishiyakusyo/31. Green Buoy.png",
        area: "八王子市役所エリア",
        author: "大貝 滝雄",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "みどり"
    },
    {
        id: 14,
        name: "風洞No．2",
        image: "../images/archive-hachiojishiyakusyo/32. Wind Tunnel No.2.png",
        area: "八王子市役所エリア",
        author: "大成 浩",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "かぜ"
    }
];