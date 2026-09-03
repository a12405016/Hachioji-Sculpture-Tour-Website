
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "katakura-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('katakuraUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 19;
const SCULPTURES = [
    {
        id: 1,
        name: "浦島-長寿の舞",
        image: "../images/archive-hachiojistation/1Grandchild of the Shogun.png", // "  1Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "北村 西望",
        story: "捌王子が人々の手にわたり、世界は人間自らが形作る時代へと変わりました。これは、民のために古代都市で行われた、人間の時代の幕開けを祝う祭儀で執り行われた舞だと言われており、八人の王子の中で、最も高齢の一人が披露したとされています。さらに世界が先へ進むことになる古代期は、この一人の男の舞によって始まったのです。同時に捌王子では、八人の王子の世代交代が起ころうとしていました。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "うらしま"
    },
    {
        id: 2,
        name: "西望自刻像",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png", // "  2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "北村西望",
        story: "other file.2　セイボウとは、創世期後半から古代期までを生きた偉大な彫刻家です。彼は、捌王子の歴史を彫刻として残し、のちの時代に伝えたとして功績を讃えられました。この彫刻巡りの中にも多くの彫刻を残しており、中には、我々の世界の言語、アルファベットで書かれたサインも残っています。それは、彼自身も我々の世界に大きい影響を受けたことを示しているように思います。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "せいぼう"
    },
    {
        id: 3,
        name: "貌",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "溝口寛",
        story: "八人の王子たちはこれまで、対等な関係で捌王子を収めてきました。しかし、その中の一人が病で急死すると、対応策を練る間もなく立て続けに王子たちは亡くなってしまいました。残された一人は、今後自分がいなくなったときのための政策を作ることに奔走します。特に問題に上がったのは、次世代の統治を誰に任せるか、そして、このまま八人に対等に統治させるか、一人に統治させるかです。しかし、権力や富を得ようとする側近たちによって議論は過熱し長引きました。焦りを感じつつも最後の王子が亡くなると、民にも混乱が広がります。この彫刻は、彼をもっとも慕っていた側近が死後すぐに作らせたものです。その顔は、人生の壮絶な体験や苦悩を物語っています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "かお"
    },
    {
        id: 4,
        name: "希望",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "長江録弥",
        story: "王子が次の統治者を決める前にいなくなると、残された民たちは二つの陣営に分かれます。一つは、今まで通り八人の王子を掲げる陣は８王派、もう一つは、一人の王を掲げる１王派です。しかし、権力や富を得たい富裕民たちは、その枠が多い８王派についたので、立場の悪い１王派はすぐに古代都市から追放されてしまいます。しかし、追放された彼らはやがて、一人の少女を王として立てて、もう片方の捌王子、片倉国を建国します。しかし王は、たった一人平和を願っていました。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "きぼう"
    },
    {
        id: 5,
        name: "酔っぱらい",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "坂坦道",
        story: "我々の世界の技術でもっとも多く捌王子に伝わったのが、酒の製法だと言われています。創世期、娯楽に乏しかった捌王子で、この土地に来たばかりの王子の一人が捌王子ぶどう酒を口にしました。しかし、八王子に伝わる美酒とそれとはかけ離れており、ショックを受けた彼は、記憶を頼りに男性は酒の研究を始めます。結果、捌王子には多くの良質な酒が生まれ、働く人々の大きな原動力となりました。ただ、古代期になると治世は不安定になり、その不安から市民たちは多くの酒を消費しました。結果、酔っぱらいが増え、治安を悪化させたようです。一方、片倉の人々は着々と準備を進めていました。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "おさけ"
    },
    {
        id: 6,
        name: "春風",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "木内禮智",
        story: "片倉では、復権のための準備が多くすすめられていました。その中の一つに、女神像の建立があげられます。建国当時、片倉では、柔軟な執政官のもと豊穣や機運などの弦担ぎのために多くの神様や女神の概念がたてられました。この女神像は3女神の一つで、”豊穣”の願いを込められています。草木が生き生きと育ち、多くの植物が実をつける春に流れる風を、女神が受けています。しかし、女神たちの中には、戦いの女神すら存在したようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "はるかぜ"
    },
    {
        id: 7,
        name: "独",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "雨宮淳",
        story: "捌王子に伝わる、片倉の女神像の一つで、３女神のうちの”美”に数えられます。追放後、独立国として持ち直した彼らは、その経験から、世をより良くするには思考し続けなければならないと考え至りました。そこで3女神の中に数えられるこの彫刻は、一人物思いにふける女性となり、やがて、その考える姿は美を体現するようになったのです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "ひとり"
    },
    {
        id: 8,
        name: "春を感じて",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "土田副生",
        story: "捌王子に伝わる、片倉の女神像のひとつで、3女神のうちの”寛容”に数えられます。これは、片倉の王として立てられた少女の希望で作られました。片倉では戦の準備が進められており、人々の身を案じた王は、慈愛や優しさを感じる女神によって、相手を許すことへ視野を向けさせようとしたのです。しかし、この寛容の女神が建てられようとも、人々の戦いへの士気は下りません。戦いに勝てども、敵を滅ぼしはしないほどにしか受け取られなかったのかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "はる"
    },
    {
        id: 9,
        name: "少年",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "瀬戸剛",
        story: "一方の捌王子でも、戦いの準備が進められていました。このたくましくもしなやかな彫刻は、捌王子に創世期から伝わる英雄をかたどったものです。当時少年であった彼は、村を襲いにきた大きな熊を投石で追い返したといいます。この英雄のように、勇敢に正義を貫き戦いぬくために彫刻がつくられました。片倉が信じる正義があれば、捌王子の民たちにも、彼らの信じる正義があるのです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "しょうねん"
    },
    {
        id: 10,
        name: "雪の朝",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "今城國忠",
        story: "戦いは、いよいよ始まろうとしていました。片倉国の鍛えられた戦士たちは、彼らの拠点、片倉城を出て進軍していきます。捌王子の冬は厳しく、その日は豪雪となりました。悪条件の中進む彼らを、少女の王は城の窓辺から不安そうに見守ります。やはり、唯一彼女だけは戦いを望んでいなかったようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "ゆき"
    },
    {
        id: 11,
        name: "ダンシングオールナイト",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "江里敏明",
        story: "otherfile.4　八王子に伝わる伝統的で躍動感のあるダンスは、捌王子に瞬く間に広がっていきます。捌王子で『でぃすこ』とよばれたそのダンスは、戦いに勝利した祭儀や結婚式などの冠婚葬祭でよく踊られ、貴族の間でも、社交の際に由緒正しい踊りとして親しまれました。誰かが嘘でも教えたんでしょうか？",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "ダンス"
    },
    {
        id: 12,
        name: "憧れ",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "山本眞輔",
        story: "戦いは、いよいよ始まろうとしていました。捌王子の戦士たちは、都市を出て片倉へと進軍していきます。堂々と戦地へ赴むかんとする彼らを、少女が羨望の眼差しで見つめていました。記念すべき出陣の日のために、母から借りたサイズの少し大きいドレスを身にまとっています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "あこがれ"
    },
    {
        id: 13,
        name: "アテネの戦士",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "久保浩",
        story: "捌王子と片倉の境で、両陣営は衝突します。彫刻は、片倉戦士のなかの一人です。陸上での戦闘は捌王子陣営の戦士が、若干量多かったものの、士気では片倉が上回り、戦況は拮抗していました。しかし、視界の悪い雪の中に紛れて回り込む奇襲作戦を片倉側が決行。勝利への機運がやや片倉側に向くと、そこからは一方的な戦いになります。しかし、捌王子側にも策はありました。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "せんし"
    },
    {
        id: 14,
        name: "風景-海-",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "桑山賀行",
        story: "捌王子の大陸外周には海が広がっています。そこから船で回り込み、片倉城の王へ直接奇襲をかけるというものです。ですが、その作戦は何らかの理由で片倉側へと漏洩していました。捌王子大陸下半分を占める片倉の領地沿岸には砲台が設置されており、少数精鋭で望んだ奇襲作戦は水泡のように消えてなくなりました。砲撃により沈んでいく船を表したのがこの彫刻です。戦いに、決着が着こうとしています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "うみ"
    },
    {
        id: 15,
        name: "夢につつまれて",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "石黒光二",
        story: "otherfile.5　古代期の捌王子では、八王子の合理的な考えも広まっていましたが、当時の人々は、数世代前の人々が、神が実際に地上に存在していた時代を目撃していたので、まだまだ神聖なちからを信じていました。中でも眠っている間に見る夢は、神からの啓示だと思われていて、この像は人々に啓示を夢として運ぶ神を示したものと言われています。我々の目には見えないそれを、目一杯抱え運んでいる姿を想像できます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "ねむり"
    },
    {
        id: 16,
        name: "早く来ないかなあ",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "宮瀬富之",
        story: "otherfile.3　捌王子古代期は、実在した神の神秘と、我々の世界の合理性が複雑に入り混じる、特殊な時代でもありました。我々よりもとても身近に神の存在を感じていた彼らは、大人も子供も等しくその帰還を信じ、心から待ち望んでいたのです。「あ〜、神早くこないかなあ」こんな具合に。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "はやく"
    },
    {
        id: 17,
        name: "ダナエ",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "亀谷政代司",
        story: "かつて一度だけ捌王子に舞い降りたとされる神様の妻を模った彫刻です。身にまとった布は、彼女を守るために神様から賜った特別な布です。戦争は、片倉の勝利で幕をおろします。捌王子は、八人の王子の統治から、王政の国へと転換。捌王子王国の誕生です。しかし初代王は二度と、このような戦いが起きぬようにと、この彫刻を平和像として作らせました。さらに統治者としてでなく、王の補助役として八人の王子制を存続。これは、捌王院と呼ばれます。それらが終わると、自らはすぐに王の座を退きました。次期国王は民たちに選ばせるように、そう言い残して。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "ダナエ"
    },
    {
        id: 18,
        name: "長い髪",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "鷲見香治",
        story: "かつての王は、すっかり美しい女性へと成長していました。どうやら彼女は、最後の王子のたった一人の孫娘だったために、王へと持ち上げられていたようでした。王を退いた後は、祖父のやり残した初めての学校の設立、あとは教師として、一般の女性と同じ生涯を過ごしたとされています。彼女をモデルにしたこの彫刻が、最後に残った記録となります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "かみ"
    },
    {
        id: 19,
        name: "春休み",
        image: "../images/archive-hachiojistation/2Grandchild of the Shogun.png",
        area: "片倉エリア",
        author: "東山俊郎",
        story: "捌王子では、学問が非常に発達しました。かつての八人の王子たちが、八王子の知識を伝えることに全力を尽くしたからです。中でも、最後の王子の、学問への貢献は、非常に大きかったとされています。学生たちの余暇の時期も似かよっていて、春休み、夏休み、冬休みというような型式を取られていました。彫刻は、豊穣の季節、春の休息日をのんびりと楽しむ、学生の少女です。しかし、学校が出来上がったのは、王子たちの世代ではありません。捌王子で初めての学校、の創立に貢献したのは、かつて片倉の王であったあの少女でした。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000020.html",
        keyword: "やすみ"
    }
];