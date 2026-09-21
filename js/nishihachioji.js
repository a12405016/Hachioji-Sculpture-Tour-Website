
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "nishihachioji-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('nishihachiojiUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 7;
const SCULPTURES = [
    {
        id: 1,
        name: "大地",
        image: "../images/archive-nishihachioji/12. The Earth.png",
        area: "西八王子エリア",
        author: "小野寺 優元",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "だいち"
    },
    {
        id: 2,
        name: "私の影（IDENTITY）",
        image: "../images/archive-nishihachioji/13. My Shadow (IDENTITY).png",
        area: "西八王子エリア",
        author: "中本 成紀",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "かげ"
    },
    {
        id: 3,
        name: "風祭",
        image: "../images/archive-nishihachioji/14. Wind Festival.png",
        area: "西八王子エリア",
        author: "小林 亮介",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "まつり"
    },
    {
        id: 4,
        name: "風の標識No.2",
        image: "../images/archive-nishihachioji/15. Wind Sign No.2.png",
        area: "西八王子エリア",
        author: "大成 浩",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "しるし"
    },
    {
        id: 5,
        name: "風拓No.4",
        image: "../images/archive-nishihachioji/16. Wind Carving No.4.png",
        area: "西八王子エリア",
        author: "大成 浩",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ふう"
    },
    {
        id: 6,
        name: "メイドン・ボエジ",
        image: "../images/archive-nishihachioji/17. Maiden Voyage.png",
        area: "西八王子エリア",
        author: "杉山 功",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "たび"
    },
    {
        id: 7,
        name: "無題",
        image: "../images/archive-nishihachioji/18. Untitled.png",
        area: "西八王子エリア",
        author: "オズワルト・ステイム（OSWALD STIMM）",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "むだい"
    }
];