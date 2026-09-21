// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "others-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('othersUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 5;
const SCULPTURES = [
    {
        id: 1,
        name: "地平線の記憶",
        image: "../images/archive-others/78. Memory of the Horizon.png",
        area: "その他エリア",
        author: "菊地 伸治",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "きおく"
    },
    {
        id: 2,
        name: "燈標",
        image: "../images/archive-others/79. Light Beacon.png",
        area: "その他エリア",
        author: "古島 実",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "ともしび"
    },
    {
        id: 3,
        name: "時間塊",
        image: "../images/archive-others/80. Time Mass.png",
        area: "その他エリア",
        author: "原 透",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "とき"
    },
    {
        id: 4,
        name: "風の中の母子",
        image: "../images/archive-others/81. Mother and Child in the Wind.png",
        area: "その他エリア",
        author: "坂井 彰夫",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "おやこ"
    },
    {
        id: 5,
        name: "太陽の風景－9.",
        image: "../images/archive-others/82. Landscape of the Sun -9.png",
        area: "その他エリア",
        author: "藁谷 収",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "たいよう"
    }
];