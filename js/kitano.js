
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "kitano-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('kitanoUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        name: "肖像",
        image: "../images/archive-kitano/57. Portrait.png",
        area: "北野エリア",
        author: "丸山 映",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "しょうぞう"
    },
    {
        id: 2,
        name: "階段 －柱－",
        image: "../images/archive-kitano/58. Stairs -Pillar-.png",
        area: "北野エリア",
        author: "岩崎 幸之助",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "かいだん"
    },
    {
        id: 3,
        name: "横たわる女4.",
        image: "../images/archive-kitano/59. Reclining Woman 4.png",
        area: "北野エリア",
        author: "桜井 敏生",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "やすらぎ"
    },
    {
        id: 4,
        name: "大気の底",
        image: "../images/archive-kitano/60. Bottom of the Atmosphere.png",
        area: "北野エリア",
        author: "前田 耕成",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "そこ"
    }
];