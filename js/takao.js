
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
        story: "捌王子file.51　ある彫刻家たちの団体がありました。それ創作活動で得た体験を共有するものだったようで、ここ一体には彼らの作品が多くあります。この彫刻もそのひとつで、女性の腕が形作る二つの三角形が、人と人との調和、つまりその彫刻家たちのことを示していると考えられています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "そよかぜ"
    },
    {
        id: 2,
        name: "ひょっとこ",
        image: "../images/archive-takao/34. Just Here for a Moment.png",
        area: "高尾エリア",
        author: "吉井 謙二",
        story: "捌王子file.52　彫刻家団体のうちの一人が作品を完成させます。なんとか設置場所まで持ち運べないかと試しに持ち上げようとしますが、なかなか持ち上がりません。再び挑戦しようとして触ると、彼は不思議な体験をします。石を触ったとたん、この彫刻を三つに分けて、みんなで運ぶべきだと、そんな気がいきなりしたのです。彼は石の助言通りに作品を分割し、仲間たちと運ぶことにしました。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "ひょっとこ"
    },
    {
        id: 3,
        name: "作品",
        image: "../images/archive-takao/35. Artwork.png",
        area: "高尾エリア",
        author: "鈴木 徹",
        story: "捌王子file.53　作品をつくるときに起こる不思議な体験は、他の彫刻家たちも感じていました。石の意思…を聴いた作者は、その声に耳を傾けながらこの彫刻を制作しました。台座からはみ出す足はまるで、なにかを我々に訴え掛けているように思えます。石に特別な力があるという考え方は、民の間ではすでに風化していましたが、彫刻家だけはそれを常に感じていたのかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "さくひん"
    },
    {
        id: 4,
        name: "石の詩",
        image: "../images/archive-takao/36. Poetry of Stone.png",
        area: "高尾エリア",
        author: "中井 延也",
        story: "捌王子file.54　この作品も、石の意思を聴いてつくられており、中心の丸い形が、心に秘められた人の優しさを示しているとされています。なぜ、そのような主題を取り上げて作品を作ったのでしょうか。石の意思はなにを訴えているのでしょうか。彫刻家たちはなにかを知っています。それは、我々の世界のことかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "うた"
    },
    {
        id: 5,
        name: "和",
        image: "../images/archive-takao/37. Harmony.png",
        area: "高尾エリア",
        author: "富樫 一",
        story: "捌王子file.55　左右二つの形は、調和を示しています。それは捌王子とハシモト、二つの国の調和です。形は違えど、まとまって団結することを訴えています。捌王子が近代化する一方、ハシモトもその技術を取り込み成長を始めました。捌王子の大切な技術であった高度な織物技術をハシモトが取得した結果、両者の貿易関係は悪化しました。しかし、戦いを始めるほどではありませんでした。それでも、石の意思と向き合いこの作品を理由を考えると、我々の世界の近代において起こった出来事を、彼らが知っているのではないかと考えてしまいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "なごみ"
    }
];