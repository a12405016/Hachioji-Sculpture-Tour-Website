
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "kitahachioji-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('kitahachiojiUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        name: "二つの笑い",
        image: "../images/archive-kitahachioji/74. Two Smiles.png",
        area: "北八王子エリア",
        author: "岡野 裕",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "わらい"
    },
    {
        id: 2,
        name: "石の歌",
        image: "../images/archive-kitahachioji/75. Song of Stone.png",
        area: "北八王子エリア",
        author: "マーティン・シュナイダー（MARTIN SCHENIDER）",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "うたごえ"
    },
    {
        id: 3,
        name: "慈",
        image: "../images/archive-kitahachioji/76. Mercy.png",
        area: "北八王子エリア",
        author: "千野 茂",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "めぐみ"
    },
    {
        id: 4,
        name: "デッサン",
        image: "../images/archive-kitahachioji/77. Dessin.png",
        area: "北八王子エリア",
        author: "マチエ・スザンコフスキー（MACIEJ SZANKOWSKI）",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "デッサン"
    }
];