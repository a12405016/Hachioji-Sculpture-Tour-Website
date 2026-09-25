
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
        story: "捌王子file.48　これはいったいどういうことでしょう…この彫刻は、捌王子において、近代に当たる時代につくられた作品です。その形状は、あきらかに日本列島を模しており、それは、彼らが我々の住む日本をはっきりと認知していることを意味します。おそらく、初代八人の王子から伝えられたきたことのなかに、日本列島に関することがあったのでしょう。でも、なぜ今になって、このような彫刻をつくるに至ったのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "しょうぞう"
    },
    {
        id: 2,
        name: "階段 －柱－",
        image: "../images/archive-kitano/58. Stairs -Pillar-.png",
        area: "北野エリア",
        author: "岩崎 幸之助",
        story: "捌王子file.49　近代化は進んでいきます。彼らは、より良い暮らしや発展を求め、立ち止まることを知らず生産し、築きあげてきました。高みを目指し、挑戦することをやめません。彫刻は、その道筋を表しています。そしてどうやら捌王子の民たちには理想像があるようで、それは我々もよく知る世界のことです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "かいだん"
    },
        {
        id: 3,
        name: "大気の底",
        image: "../images/archive-kitano/60. Bottom of the Atmosphere.png",
        area: "北野エリア",
        author: "前田 耕成",
        story: "捌王子file.50　突然現れたある老人が残していった石碑とされています。老人は語りました。「私は全てを知っている」だれも、その言葉に耳を貸すことはありません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "そこ"
    },
    {
        id: 4,
        name: "横たわる女4.",
        image: "../images/archive-kitano/59. Reclining Woman 4.png",
        area: "北野エリア",
        author: "桜井 敏生",
        story: "other file.8　ある日作品を作ろうと一人の彫刻家が石と向き合います。すると、石の声が聞こえてきました。言うとおりに掘ると、一人の横たわった女性の姿が現れました。それ以降彼は、石一つ一つに本当の姿があるのではないかと考えるようになったといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "やすらぎ"
    },
];