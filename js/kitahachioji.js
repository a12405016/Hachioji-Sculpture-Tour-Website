
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
        story: "捌王子の彫刻家たちは、この時代に入ると、歴史の記録としてだけでなく、より自由な表現も行うようになってきます。この彫刻はその一端です。石が笑うという表現は、かねてより彫刻との深い関わりを持っ捌王子の民だからこそ出たアイデアと言えるかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "わらい"
    },
    {
        id: 2,
        name: "石の歌",
        image: "../images/archive-kitahachioji/75. Song of Stone.png",
        area: "北八王子エリア",
        author: "マーティン・シュナイダー（MARTIN SCHENIDER）",
        story: "ある一人の彫刻家が、石と長い時間向き合っていると、突然石の声が聴こえ、一気に彫り上げた作品と言われています。捌王子では、石は特に重要視されているもののひとつで、不思議な力を持っているとされています。今こうして我々があちらの世界のことを、彫刻を通して知れるのは、そのお陰かもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "うたごえ"
    },
    {
        id: 3,
        name: "慈",
        image: "../images/archive-kitahachioji/76. Mercy.png",
        area: "北八王子エリア",
        author: "千野 茂",
        story: "彫刻家たちがその表現を広げていく一方、捌王子の近代化は進んでいきました。工業や産業を心がないものとして、その反発としてつくられたのが、母子の愛を表現したこの作品です。しかし、捌王子の発展は、や彫刻家たちの思いもむなしく、さらに成長の一途をたどります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "めぐみ"
    },
    {
        id: 4,
        name: "デッサン",
        image: "../images/archive-kitahachioji/77. Dessin.png",
        area: "北八王子エリア",
        author: "マチエ・スザンコフスキー（MACIEJ SZANKOWSKI）",
        story: "歴史の記録のために作られてきた捌王子の彫刻彫刻ですが、ここにきて、いままでの歴史全てを振り返る表現を持った彫刻が作られます。使われたのは、この地が生まれた当初から捌王子にあった岩で、石を半分に割ることで、その石の持つ記憶と共に捌王子の歴史を想起させます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "デッサン"
    }
];