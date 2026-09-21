
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
        story: "その女は疲れていたので、横になっていたが、長い休みの中で自然と一緒になって石になってしまいました。しかし、その姿が日本列島のように見えたために人々はその石像を崇めたてまつるようになったよと言い伝えられている。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "しょうぞう"
    },
    {
        id: 2,
        name: "階段 －柱－",
        image: "../images/archive-kitano/58. Stairs -Pillar-.png",
        area: "北野エリア",
        author: "岩崎 幸之助",
        story: "人々がみ神になりたいと思うと同時にその無力さを知ることがあるだろう。ただし、人々は諦めることを知らずその高みを想像し、その過程の段階を考え挑戦することをめやめない。その挑戦の中で生まれ落ちた過程の一部である。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "かいだん"
    },
    {
        id: 3,
        name: "横たわる女4.",
        image: "../images/archive-kitano/59. Reclining Woman 4.png",
        area: "北野エリア",
        author: "桜井 敏生",
        story: "その女は横になり少し運動そをしようとしていた、その腕・首・足を持ち上げる姿勢を維持することがあまりに美しかったので、周りの人間がその姿を自然の美しさとして後世に残そうとした。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "やすらぎ"
    },
    {
        id: 4,
        name: "大気の底",
        image: "../images/archive-kitano/60. Bottom of the Atmosphere.png",
        area: "北野エリア",
        author: "前田 耕成",
        story: "その老人は全てを知っている。　しかし誰も信じることをしてくれなかった。彼曰く「上の世界と下の世界の関係はどちらも必要十分条件であってバランスがとられている」とまた、「そのバランスは今にも変わるかもしれない」その警告をどれだけ信じていただろうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "そこ"
    }
];