// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "minamiosawa-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('minamiosawaUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 9;
const SCULPTURES = [
    {
        id: 1,
        name: "直径24000mmの円周上における1対2対4対の弦",
        image: "../images/archive-minamiosawa/61. Chords.png",
        area: "南大沢エリア",
        author: "前川義春",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "げん"
    },
    {
        id: 2,
        name: "千年の道",
        image: "../images/archive-minamiosawa/62. Path of a Thousand Years.png",
        area: "南大沢エリア",
        author: "小泉俊巳",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "みち"
    },
    {
        id: 3,
        name: "みどりの風",
        image: "../images/archive-minamiosawa/63. Green Wind.png",
        area: "南大沢エリア",
        author: "木内禮智",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "わかば"
    },
    {
        id: 4,
        name: "集いの詩",
        image: "../images/archive-minamiosawa/64. Poetry of Gathering.png",
        area: "南大沢エリア",
        author: "工藤健",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "つどい"
    },
    {
        id: 5,
        name: "風に立つ",
        image: "../images/archive-minamiosawa/65. Standing in the Wind.png",
        area: "南大沢エリア",
        author: "工藤健",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "たつ"
    },
    {
        id: 6,
        name: " 夏至の日のLand-Mark(八王子）",
        image: "../images/archive-minamiosawa/66. Land-Mark on the Summer Solstice (Hachioji).png",
        area: "南大沢エリア",
        author: "山口牧生",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "げし"
    },
    {
        id: 7,
        name: "化石",
        image: "../images/archive-minamiosawa/67. Fossil.png",
        area: "南大沢エリア",
        author: "大木達美",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "かせき"
    },
    {
        id: 8,
        name: "風の標識No.42",
        image: "../images/archive-minamiosawa/68. Wind Sign No.42.png",
        area: "南大沢エリア",
        author: "大成浩",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "よんじょうに"
    },
    {
        id: 9,
        name: "記憶の尻尾",
        image: "../images/archive-minamiosawa/69. Tail of Memory.png",
        area: "南大沢エリア",
        author: "高岡典男",
        story: "",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "しっぽ"
    }
];