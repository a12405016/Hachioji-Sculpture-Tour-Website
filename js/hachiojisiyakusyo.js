// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "hachiojisiyakusyo-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('hachiojisiyakusyoUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 14;
const SCULPTURES = [
    {
        id: 1,
        name: "海の鳥と少年",
        image: "../images/archive-hachiojishiyakusyo/20. Sea Bird and Boy.png",
        area: "八王子市役所エリア",
        author: "淀井 敏夫",
        story: "捌王子file.32　捌王子が統一されて、しばらく時が経ちます。捌王子は神様によって創られた、周囲が海に囲まれている島国で、その海の向こう側には大陸はないと考えられていました。ある日、海沿いに家族で住んでいる少年が、海の遠い向こう側から鳥が飛んでくるのを見つけて駆け寄ります。向こう側には何もないはずなのに、いったいこの鳥は、どこからやって来たのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "とり"
    },
    {
        id: 2,
        name: "平和な朝",
        image: "../images/archive-hachiojishiyakusyo/19. Peaceful Morning.png",
        area: "八王子市役所エリア",
        author: "圓鍔 勝三",
        story: "捌王子file.33　統一されてからの捌王子はしばらく、とても平和でした。王政になってからは、王を選挙で決ていました。どんな人々にも、選挙に参加する権利が与えられたため、有能な王が統治する国がしばらく続いていたのです。平和な世の中を願いながら朝を迎える様子を刻んだこの彫刻は、国民の幸福度としては全盛の時代の捌王子を示すのに、十分なものとなっています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "あさ"
    },
        {
        id: 3,
        name: "鶴舞",
        image: "../images/archive-hachiojishiyakusyo/28. Crane Dance.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.34　行方不明になっていたある漁師が、なにやらボロボロになって発見されます。彼は語り始めました。ある日、船が大波に流されて、彼は漂流してしまいました。そしてそれから、こことは違う別の場所の少女に助けられたと言うのです。漁師は、海沿いに家族で住まう、その少女に尋ねました。「君たちはいったい何者なのだ」すると、海の向こう側からやって来た鳥と、戯れながら少女は答えます。「私たちはハシモトの民です」これが、ハシモト大陸が発見された日です。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "つる"
    },
        {
        id: 4,
        name: "夕やけ小やけ",
        image: "../images/archive-hachiojishiyakusyo/27. Sunset.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.35　ある夕やけの日、捌王子から船が出発します。それを見つめる二人は、船の乗組員の子供たちです。捌王子では、ハシモト大陸の調査隊が編成され、航海が始まります。冒険の時代の幕開けです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆうやけ"
    },
        {
        id: 5,
        name: "桑の都",
        image: "../images/archive-hachiojishiyakusyo/25. City of Mulberry.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.36　ハシモト大陸への長い長い船旅を経て、ハシモト調査隊は、ついに新大陸へと足を踏み入れました。すると、異変を感じて様子を確認しようと、一人の籠を持った女性がハシモト大陸から海沿いへやって来ました。乗組員たちは、どうにか自分達の立場を伝えようと、身振り手振りをしましたが、どうやら、ハシモト大陸の人々は、捌王子と同じ言語を扱うようです。彼女は交流のために手に持った籠のなかを乗組員たちに見せます。なんと、その中には、とても品質の良い蚕の糸が入っていたのです。捌王子でも、我々の世界の、織物の文化的影響から養蚕を行っていましたが、これほど良いものは捌王子にはありませんでした。捌王子が、織物の国『桑都』として呼ばれるのも、遠くない未来かも知れません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "くわ"
    },
    {
        id: 6,
        name: "八王子",
        image: "../images/archive-hachiojishiyakusyo/21. Hachioji.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.37　ハシモト大陸との貿易が始まりました。ハシモトは品質のよい蚕の糸を捌王子へ輸出。捌王子は輸入した糸と、その技術力を用いてとてもよい織物を生産し、ハシモトへ輸出しました。国際的な分業と、健全な貿易を通して、両者の関係はいい方向へと発展していきます。その関係を記念してハシモト側が捌王子へと送ったのが、当時捌王子に存在していた捌王院の執政官八人をかたどった彫刻です。神様が残した八人の王子という背景もとてもよく反映されており、お互いの文化的理解も、相当なものだったと感じ取れます。西捌王子一帯には、同じ彫刻家により寄贈されたものが、他にも多く残されています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おうじ"
    },
    {
        id: 7,
        name: "由比の牧",
        image: "../images/archive-hachiojishiyakusyo/22. Pasture of Yui.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.38　ハシモトからの恩恵を受けたものが、捌王子には他にもあります。それが『馬』です。ハシモトとの貿易が始まる前の捌王子には、馬が生息していませんでした。ハシモトの大陸から貿易で得た馬は、捌王子で大変活躍します。馬の登場によって捌王子内での輸送や移動、さらに情報のやり取りが加速します。これによりもともと早かった文化の成長がさらに加速していきました。この彫刻は、当時捌王子で作られた馬の牧場にあったものです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆい"
    },
    {
        id: 8,
        name: "松姫",
        image: "../images/archive-hachiojishiyakusyo/23. Princess Matsu.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.39　この彫刻は、ハシモトの王の息女で、捌王院に所属する一人の執政官に嫁ぐために、捌王子に渡りました。互いの関係をより深めるためです。そんな中、嫁ぎ先の執政官が、不慮の事故により亡くなります。すると、その娘にたいするよからぬ噂が広がりました。こうした真偽不明の情報が、国の関係に思わぬ不和を招くことになるかもしれません…",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ひめ"
    },
    {
        id: 9,
        name: "波頭",
        image: "../images/archive-hachiojishiyakusyo/29. Wave Crest.png",
        area: "八王子市役所エリア",
        author: "渡辺 隆根",
        story: "捌王子file.40　当時の捌王子において重要な四大要素のひとつ、水を示した彫刻です。捌王子の人々にとって、海は原動力でもありました。この頃になると捌王子の人口は急速に増え、その需要に対応するために漁業が盛んに行われるようになります。交易だけでなく、民の食を支える生命の源としても海、すなわち水は重要だったのです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "なみ"
    },
    {
        id: 10,
        name: "紺碧の空へ",
        image: "../images/archive-hachiojishiyakusyo/30. To the Deep Blue Sky.png",
        area: "八王子市役所エリア",
        author: "丸山 映",
        story: "捌王子file.41　当時の捌王子において重要な四大要素のひとつ、空を示した彫刻です。この形の元になったのは、ある貿易船の船首に取り付けられていた像だそうで、女性が空を仰ぐ様子は、まるで捌王子とハシモト、二つの国に隔たりがないことを示しているように思えます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "そら"
    },
    {
        id: 11,
        name: "みどりの浮標",
        image: "../images/archive-hachiojishiyakusyo/31. Green Buoy.png",
        area: "八王子市役所エリア",
        author: "大貝 滝雄",
        story: "捌王子file.42　当時の捌王子において重要な四大要素のひとつ、緑を示した彫刻です。古くから捌王子は、自然と共にありました。そして自然との調和、循環が重要であることにもいち早く気がついていたのです。また、その循環は農業にも取り入れられ、自然を人の手で生み出す農業こそが、最もよい職業だと考えられていたそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "みどり"
    },
    {
        id: 12,
        name: "風洞No．2",
        image: "../images/archive-hachiojishiyakusyo/32. Wind Tunnel No.2.png",
        area: "八王子市役所エリア",
        author: "大成 浩",
        story: "捌王子file.43　当時の捌王子において重要な四大要素のひとつ、風です。古くから捌王子誕生の源としても強く重んじられてきた風は、造船技術が確立されてからはさらに大切に考えられるようになりました。帆船の動力は帆に受ける風であるためです。風がハシモトとの貿易関係に繋がり、捌王子の商業や工業を発展させたのです。彫刻は、帆にあたっている風の輪郭を取られたものだとされています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "かぜ"
    },
    {
        id: 13,
        name: "千人同心",
        image: "../images/archive-hachiojishiyakusyo/26. Sennin Doshin.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "otherfile.6　当時の捌王子の治安は、民による自警団によって守られていました。その規模は1000人ほどだと言われており、彼らは報酬なしで都市を警備していたとされています。王政府も、その力に頼りきりでした。ですがそのうち、民が大きい武力を持つことに危機を感じた王が、自警団に良い報酬を与え、それを公務としました。武力の手綱を握っておこうと考えたのでしょう。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "せんにん"
    },
        {
        id: 14,
        name: "乙女",
        image: "../images/archive-hachiojishiyakusyo/24. Maiden.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "otherfile.7　捌王子では、彫刻や、織物に関する芸術がよく発展しましたが、他にも音楽が存在しました。捌王子では音楽は若者が担う文化で、メロディーにあわせて自己表現する形態がとても流行ったそうです。しかし多くの大人たちは、奔放な感情を論理的でなく語ることに抵抗があったそうで、こうした文化は秩序にひびを加えるとして反対していました。しかし、世代交代が広がるにつれてこうした文化も受け入れられていくことになります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おとめ"
    },
];