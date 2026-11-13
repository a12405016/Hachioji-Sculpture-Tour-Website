
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "nishihachioji-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('nishihachiojiUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 7;
const SCULPTURES = [
        {
        id: 1,
        audio: "../narration/hachioji_nishi/file_26.mp3",
        name: "風祭",
        image: "../images/archive-nishihachioji/14. Wind Festival.png",
        area: "西八王子エリア",
        author: "小林 亮介",
        story: "捌王子file.26　古代期、この地で興った『風祭』という運動競技大会のモニュメントです．神様が捌王子に一番初めに与えてくださった大気によって生まれる「風」をその名前に冠しており、その象徴たるモニュメントは風の力を受けて回る風車を源流にしていると言われています．もう一つの説として、捌王子の人間たちの、風が力を与えてくれるという自負や考えから、自分たちの肉体を風車に投影し生まれた彫刻だという考えもあります．",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000017.html",
        keyword: "まつり"
    },
        {
        id: 2,
        audio: "../narration/hachioji_nishi/file_27_change.mp3",
        name: "風の標識No.2",
        image: "../images/archive-nishihachioji/15. Wind Sign No.2.png",
        area: "西八王子エリア",
        author: "大成 浩",
        story: "捌王子file.27　風祭を最初に取り仕切り行ったのは、この地をさる前の神様だと言われています．そのころはまだ風祭という名前はなく、純粋に肉体の能力を競い合う祭でした。この彫刻は第一回目のまつりの競技に使われたものです。神様はこの地を訪れた人々に最初にこの彫刻を飛び越えさせて、速く美しく、そして力強く飛んだものだけを競技に参加させたと言われています．",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000017.html",
        keyword: "しるし"
    },
    {
        id: 3,
        audio: "../narration/hachioji_nishi/file_28.mp3",
        name: "大地",
        image: "../images/archive-nishihachioji/12. The Earth.png",
        area: "西八王子エリア",
        author: "小野寺 優元",
        story: "捌王子file.28　風祭では、その年に最も多く勝ち、名を挙げたものの彫刻を彫り残すというならわしがありました．その際、競技のさなか当人の肉体が最も美しかった部位のみを彫り、そのほかを削ぎ落とすという手法がとられます。それによってその人の身体がより美しく見えるという価値観のもと作られたのがこの二つの彫刻です。どんな競技での姿だったか、想像してみるのも面白いかもしれません．",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000017.html",
        keyword: "だいち"
    },
    {
        id: 4,
        audio: "../narration/hachioji_nishi/file_28.mp3",
        name: "私の影（IDENTITY）",
        image: "../images/archive-nishihachioji/13. My Shadow (IDENTITY).png",
        area: "西八王子エリア",
        author: "中本 成紀",
        story: "捌王子file.28　風祭では、その年に最も多く勝ち、名を挙げたものの彫刻を彫り残すというならわしがありました．その際、競技のさなか当人の肉体が最も美しかった部位のみを彫り、そのほかを削ぎ落とすという手法がとられます。それによってその人の身体がより美しく見えるという価値観のもと作られたのがこの二つの彫刻です。どんな競技での姿だったか、想像してみるのも面白いかもしれません．",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000017.html",
        keyword: "かげ"
    },
    {
        id: 5,
        audio: "../narration/hachioji_nishi/file_29.mp3",
        name: "メイドン・ボエジ",
        image: "../images/archive-nishihachioji/17. Maiden Voyage.png",
        area: "西八王子エリア",
        author: "杉山 功",
        story: "捌王子file.29　石自体の魅力と、身体のポーズ美しさを両立すべくつくられた作品です。風祭の行われていた古代期では、身体の美しさを限界まで高めるべくいろいろな手法が取られてきました。この作品も、そのなかのひとつです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "たび"
    },
    {
        id: 6,
        audio: "../narration/hachioji_nishi/file_30.mp3",
        name: "無題",
        image: "../images/archive-nishihachioji/18. Untitled.png",
        area: "西八王子エリア",
        author: "オズワルト・ステイム（OSWALD STIMM）",
        story: "捌王子file.30　風祭にて、選手の動く軌道や残像を石で示したものだとされています。身体の描く運動の軌跡そのものに美しさを見いだしており、当時としてはとても珍しい作品だったようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "むだい"
    },
    {
        id: 7,
        audio: "../narration/hachioji_nishi/file_31.mp3",        name: "風拓No.4",
        image: "../images/archive-nishihachioji/16. Wind Carving No.4.png",
        area: "西八王子エリア",
        author: "大成 浩",
        story: "捌王子file.31　自然の多かった捌王子は、その成長にも、風が関わっていると思われていました。神様の最初に産んだ風の一部は、今では石になって残っています。それを力強くたてに伸びる植物のイメージと共に、縦にいくつか模して、作ったのがこの彫刻です。神様の風を模したものだったので風祭の前にこの彫刻に、良い競技をできるよう、祈りを捧げるものもいたようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000017.html",
        keyword: "ふう"
    }
];
// 音声ガイド共通処理
(function(){const folder='hachioji_nishi';const a=document.getElementById('popAudio'),b=document.getElementById('audioPlayButton');if(!a||!b)return;const special={'hachioji_nishi/27':'file_27_change.mp3','hachioji_nishi/33':'file_33_change.mp3','other/1':'file_1a.mp3','other/2':'file_2a.mp3','other/3':'fie_3a.mp3','other/4':'file_4a_rewrite.mp3','other/5':'file_5a.mp3'};const reset=()=>{a.pause();a.currentTime=0;b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play');};const original=window.openPopup;window.openPopup=function(id){original(id);const s=SCULPTURES.find(x=>x.id===id),m=(s.story||'').match(/file\.?\s*(\d+)/i);if(!m)return;let n=s.audio||'../narration/'+folder+'/file_'+m[1]+'.mp3';if(special[folder+'/'+m[1]])n='../narration/'+folder+'/'+special[folder+'/'+m[1]];if(folder==='hachioji_kita'&&m[1]==='46')n='../narration/hachioji_kita/filer_46.mp3';reset();a.src=n;a.load();};b.onclick=async()=>{if(!a.src)return;if(a.paused){try{await a.play()}catch(e){console.error('音声の再生に失敗しました:',a.src,e)}}else a.pause()};a.onplay=()=>{b.textContent='Ⅱ';b.classList.remove('is-play');b.classList.add('is-pause')};a.onpause=()=>{if(!a.ended){b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play')}};a.onended=reset;a.onerror=()=>console.error('音声ファイルを読み込めませんでした:',a.src);const close=window.closePopup;window.closePopup=function(){reset();close()}})();