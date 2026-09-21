// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "tamacenter-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('tamacenterUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        name: "八王子`88発芽",
        image: "../images/archive-tamacenter/70. Hachioji '88 Germination.png",
        area: "多摩センターエリア",
        author: "五十嵐芳三",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "はつが"
    },
    {
        id: 2,
        name: "生",
        image: "../images/archive-tamacenter/71. Life.png",
        area: "多摩センターエリア",
        author: "酒井良",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "いのち"
    },
    {
        id: 3,
        name: "作品`88",
        image: "../images/archive-tamacenter/72. Artwork '88.png",
        area: "多摩センターエリア",
        author: "田中康二郎",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "はちはち"
    },
    {
        id: 4,
        name: "史雲`80",
        image: "../images/archive-tamacenter/73. Historical Cloud '80.png",
        area: "多摩センターエリア",
        author: "鈴木徹",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "しうん"
    }
];