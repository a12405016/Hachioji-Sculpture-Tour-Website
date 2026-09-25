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
        name: "千年の道",
        image: "../images/archive-minamiosawa/62. Path of a Thousand Years.png",
        area: "南大沢エリア",
        author: "小泉俊巳",
        story: "捌王子file.58　捌王子は、絹糸と織物によってまず発展しました。その歴史を称え、記録に残すためにつくられたのがこの作品です。かつてのハシモトの養蚕によってできた糸を輸入し、できた織物をまた輸出するという貿易関係は素晴らしいものでした。近代の捌王子では、工場の織り機によって効率化し、捌王子の経済を支える大きな要となっています。しかし、彫刻はその大量生産に賛成するものではなく、歴史に学び、これからをよりよくすることを目的に制作されたそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "みち"
    },
    {
        id: 2,
        name: "直径24000mmの円周上における1対2対4対の弦",
        image: "../images/archive-minamiosawa/61. Chords.png",
        area: "南大沢エリア",
        author: "前川義春",
        story: "捌王子file.59　彫刻家たちの抵抗は続きます。この作品の作者は、捌王子の街並みを石に見立て、自然や、国同士との関係をないがしろにする社会体制への懸念を示しました。いままで、多くの作品たちが示してきた通り、捌王子の彫刻が示すのは、歴史の記録、そして他の人々や自然との調和です。彼らが正しい道を選ぶには、その訴えと向き合う必要がありそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "げん"
    },
    {
        id: 3,
        name: "みどりの風",
        image: "../images/archive-minamiosawa/63. Green Wind.png",
        area: "南大沢エリア",
        author: "木内禮智",
        story: "捌王子file.60　彫刻家たちの大きな訴えから、捌王子の工業は見直され、環境への悪影響を低減する政策が組まれました。結果、過去の自然はある程度取り戻され、社会は自然との調和を目指します。しかし、止められなかった傷もありました。我々の世界より、小さな捌王子の世界は、環境の汚染の許容量も少なく、公害や、それにともなった病気も発生してしまいます。彫刻は、捌王子のルーツでもある風を、あるべき姿に戻すべくつくられたものです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "わかば"
    },
    {
        id: 4,
        name: " 夏至の日のLand-Mark(八王子）",
        image: "../images/archive-minamiosawa/66. Land-Mark on the Summer Solstice (Hachioji).png",
        area: "南大沢エリア",
        author: "山口牧生",
        story: "捌王子file.61　石と太陽を結びつけるこの彫刻は、日時計の役割を果たすと共に、石の力によって太陽の光を受けてエネルギーを取り込むとされています。この頃になると、捌王子は自然との調和を半ば達成しており、代わりに、石のもつ特別な力の研究がなされるようになってきたようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "げし"
    },
    {
        id: 5,
        name: "風の標識No.42",
        image: "../images/archive-minamiosawa/68. Wind Sign No.42.png",
        area: "南大沢エリア",
        author: "大成浩",
        story: "捌王子file.62　風が吹くと、この作品の間を通り抜けます。風は文明との調和を果たし、間を流れる風によってエネルギーが産み出されます。時を越え、同じ風が流れ続ける捌王子。その時々の向き合い方で、時代は形作られて行くようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "よんじゅうに"
    },
    {
        id: 6,
        name: "記憶の尻尾",
        image: "../images/archive-minamiosawa/69. Tail of Memory.png",
        area: "南大沢エリア",
        author: "高岡典男",
        story: "捌王子file.63　いままでの捌王子の、積み重なってきた記憶を示す作品です。創成期から始まり、近代までの歴史を表すと共に、これから積層していく時代の余地も残されています。これからの捌王子のことは、どんなものになっていくのでしょうか。しかし、記憶はここで途切れてしまっています。どうやら、これから先のことは、想像してみるしかなさそうです。ひょっとしたら、我々のことなどとうに追い越してしまっているかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "しっぽ"
    },
        {
        id: 7,
        name: "集いの詩",
        image: "../images/archive-minamiosawa/64. Poetry of Gathering.png",
        area: "南大沢エリア",
        author: "工藤健",
        story: "other file.11　捌王子でこれだけ、彫刻という芸術が発達し、彫刻という体系での作品が多く残されたのは、その世界で、石に特別な力があったからと考えられています。しかし、ブロンズでできた彫刻には石を使用する工程がないので、彫刻家たちは石の意思を聴かずに、作品がつくれたようです。そのため、過去には歴史の記録のためにもブロンズという素材が使用されましたが、徐々にその方向性は、自由な作品をつくるためというものにも変わってきました。この彫刻は、近代になり、他の芸術体系も重視されてきた世の中に、自分の思うがままの活動をしてほしいという思いを、ブロンズという素材で示したものです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "つどい"
    },
        {
        id: 8,
        name: "風に立つ",
        image: "../images/archive-minamiosawa/65. Standing in the Wind.png",
        area: "南大沢エリア",
        author: "工藤健",
        story: "other file.12　堂々と立つ女性の姿は、古代捌王子において確立された女神をモチーフにしています。人が未来にあるべき理想像を示しており、古代期の女神をモチーフにすることによって、過去から学ぶべきことと、未来に掴み取るべきことを表していると言われています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "たつ"
    },
        {
        id: 9,
        name: "化石",
        image: "../images/archive-minamiosawa/67. Fossil.png",
        area: "南大沢エリア",
        author: "大木達美",
        story: "other file.13　はるか未来の、平和な捌王子での出来事です。深い地中から発見されたこの石は、なんの用途で、なんのためにつくられたのか、研究がなされても、あきらかになりませんでした。何らかの危険性を案じて、再び埋められると、その存在はすっかり忘れられてしまったそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "かせき"
    },
];