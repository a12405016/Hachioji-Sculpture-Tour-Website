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
        image: "../images/archive-tamacenter/70. Hachioji _88 Germination.png",
        area: "多摩センターエリア",
        author: "五十嵐芳三",
        story: "捌王子file.56　捌王子はすでに、大きな産業と大きな経済のもとに成り立っていました。かつては本当に存在したこの世界の神様の存在もうすれ、自然はないがしろにされてしまいました。彫刻家たちは、近代化していく捌王子のなかで考えます。どうすれば世界はより良い方向へ向かっていくのか。自然との共存を、自然の一部である石を利用して訴えたのがこの作品です。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "はつが"
    },
    {
        id: 2,
        name: "作品`88",
        image: "../images/archive-tamacenter/72. Artwork _88.png",
        area: "多摩センターエリア",
        author: "田中康二郎",
        story: "捌王子file.57　捌王子で初めて開通した鉄道のレールを使った作品です。製作者がレールを手に入れる際には、その日の運行が終了した真夜中に、駅潜り込み、その一部を切り取って入手したそうです。幸い、駅員が気付いて、大きな事故には至りませんでしたが、修理のために運行は大きく遅れたといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "はちはち"
    },
    {
        id: 3,
        name: "生",
        image: "../images/archive-tamacenter/71. Life.png",
        area: "多摩センターエリア",
        author: "酒井良",
        story: "other file.9　ある日、石の持つ不思議な力を感じ取った彫刻家は、石には生命が宿っていて、なにかを訴え掛けているのではないかという考えを強めました。そこで石に簡単な足、体、頭を与え、コミュニケーションを図ろうとしたそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "いのち"
    },
    {
        id: 4,
        name: "史雲`80",
        image: "../images/archive-tamacenter/73. Historical Cloud _80.png",
        area: "多摩センターエリア",
        author: "鈴木徹",
        story: "other file.10　一人の彫刻家が、古代においてつくられた、手足のない彫刻を参考に制作したものです。しかし、頭部もついていない様式に挑戦するのはかつてないことで、人体のパーツを絞ることによって、感じられる美を追求したといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "しうん"
    }
];