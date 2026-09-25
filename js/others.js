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
        name: "燈標",
        image: "../images/archive-others/79. Light Beacon.png",
        area: "その他エリア",
        author: "古島 実",
        story: "file.1　捌王子の世界は切迫していました。人口が増加し、捌王子、ハシモト、二つの大陸では、全ての消費を賄いきることができない状況でした。そんな不安定ななかで、ひとつ燈標を、彼らは見つけます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "ともしび"
    },
    {
        id: 2,
        name: "地平線の記憶",
        image: "../images/archive-others/78. Memory of the Horizon.png",
        area: "その他エリア",
        author: "菊地 伸治",
        story: "file.2　あるひとつの作品が完成します。はるか昔につくられた、空間と空間を繋げる作品をもとにつくられました。この作品で、捌王子の人口問題を解決しようというのです。いったい彼らはどんな世界にたどり着こうというのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "きおく"
    },
    {
        id: 3,
        name: "時間塊",
        image: "../images/archive-others/80. Time Mass.png",
        area: "その他エリア",
        author: "原 透",
        story: "file.3　彼らが目指す世界をモデル化したものだとされています。ある一点を起点に時間が動き出し、文明が育ち、また立ち返るという循環の流れです。長い時間をかけて行われるひとつのサイクルは、立ち返りの時期に達しようとしているようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "とき"
    },
        {
        id: 4,
        name: "太陽の風景－9.",
        image: "../images/archive-others/82. Landscape of the Sun -9.png",
        area: "その他エリア",
        author: "藁谷 収",
        story: "file.４　彼らが目指す世界をモデル化したものだとされています。ある一点を起点に時間が動き出し、文明が育ち、また立ち返るという循環の流れです。長い時間をかけて行われるひとつのサイクルは、立ち返りの時期に達しようとしているようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "たいよう"
    },
    {
        id: 5,
        name: "風の中の母子",
        image: "../images/archive-others/81. Mother and Child in the Wind.png",
        area: "その他エリア",
        author: "坂井 彰夫",
        story: "file.5　ただ砂漠ばかりが広がる世界で彼らは祈りました。すると、強く風が吹いて、たちまち地面を緑が覆ったといいます。今でも同じ風が吹いています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "おやこ"
    },
];