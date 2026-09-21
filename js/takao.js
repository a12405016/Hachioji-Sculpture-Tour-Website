
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "takao-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('takaoUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 5;
const SCULPTURES = [
    {
        id: 1,
        name: "微風（そよかぜ）",
        image: "../images/archive-takao/33. Breeze.png",
        area: "高尾エリア",
        author: "桜井 敏生",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "そよかぜ"
    },
    {
        id: 2,
        name: "ひょっとこ",
        image: "../images/archive-takao/34. Just Here for a Moment.png",
        area: "高尾エリア",
        author: "吉井 謙二",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "ひょっとこ"
    },
    {
        id: 3,
        name: "作品",
        image: "../images/archive-takao/35. Artwork.png",
        area: "高尾エリア",
        author: "鈴木 徹",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "さくひん"
    },
    {
        id: 4,
        name: "石の詩",
        image: "../images/archive-takao/36. Poetry of Stone.png",
        area: "高尾エリア",
        author: "中井 延也",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "うた"
    },
    {
        id: 5,
        name: "和",
        image: "../images/archive-takao/37. Harmony.png",
        area: "高尾エリア",
        author: "富樫 一",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "なごみ"
    }
];