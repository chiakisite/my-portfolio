//main
let number = 0;

const next = document.getElementById("next");
const photo = document.getElementById("photo");
const content = document.getElementById("content");
const QandAContainer = document.getElementById("QandA-container");

const photos = [
  {
    photo: "./myphoto.jpg",
    content:
      "所属しているサークル・理工展連絡会の夏旅行！理工展連絡会は、学園祭の運営をしているサークルだよ！私は主に、近隣の飲食店とのコラボを担当しているんだー！",
  },
  {
    photo: "./納涼船.png",
    content: "理工展連絡会は昔、納涼船にも乗ったんだよ！",
  },
  {
    photo: "./ディズニー.jpg",
    content:
      "ディズニーにも行った、もちろん理工展メンバーで！なにげにディズニーシーは初めて！ジェットコースター苦手なの(><)",
  },
  {
    photo: "./花火.jpg",
    content: "学科のメンバーも推しだなー！花火大会楽しかった♪♪",
  },
  {
    photo: "./渋谷.jpg",
    content:
      "渋谷で遊んだりもした！イルミネーションめっちゃ綺麗だと思いませんか！？　こういう写真を、もっと撮れるようになることが、夢のひとつだったりします！！！",
  },
  {
    photo: "./推し.png",
    content:
      "推しと写真撮ったりも！ 左の子、もうすぐ卒業しちゃうんだよ？　あーあ、コロナじゃなかったらライブ行ったのになぁ。。。",
  },
  {
    photo: "./トークライブ.png",
    content:
      "遊んでばっかりだと思ったん？残念、真面目に活動もしてますよーん(笑) 写真は、２年から所属し始めた、もう一つのサークル、こうはいナビ！早稲田祭で、受験生向けにトークライブしたの！緊張したけど、楽しかったぁ！！",
  },
  {
    photo: "./カミングアウト.jpg",
    content:
      "2年の頃には、大学の機関のアルバイト職員もしました！このポスター、私が作ったのー！！！",
  },
  {
    photo: "./テーマトーク.jpg",
    content: "自分でイベントを企画したりもしました！",
  },
  {
    photo: "./こころ.png",
    content:
      "本業の理工展では、コラボメニュー開発！！ぜひ食べに来て、理工展にもおいでねん！！",
  },
  {
    photo: "./趣味.png",
    content:
      "最近は、絵を描くことにハマってます！森の中のカフェ、ってイメージ♪♪",
  },
  {
    photo: "./ローカル線.png",
    content:
      "都会だけど、少し移動すれば、こんな感じの田舎。そんな場所に住むのが、夢だったりします。ここまでたくさんの画像を見てくださり、ありがとうございます。皆さんの夢が叶いますように♪♪",
  },
];

//Q&A
next.onclick = function () {
  if (number === 11) {
    number = 0;
  } else {
    number += 1;
  }
  photo.setAttribute("src", photos[number].photo);
  content.textContent = photos[number].content;
};

const QandAs = [
  {
    Question: "あなたの名前は？",
    Answer: "川崎 千晶。かわさきちあき、って読むよ！！",
  },
  {
    Question: "所属を教えて下さい！",
    Answer: "早稲田大学 先進理工学部 電気・情報生命工学科 3年！",
  },
  {
    Question: "出身はどこですか？",
    Answer: "生まれも育ちも千葉です！ 案外、田舎です……",
  },
  {
    Question: "サークルは何してますか？",
    Answer:
      "理工展連絡会と、こうはいナビ！理工展連絡会は、学園祭を運営する団体で、私は主に,近隣飲食店さんとのコラボを担当しています！他にも、マスコットキャラクターを普及させる係や、外国人の来場者を呼び込む取り組みもしてますよー！こうはいナビは、受験生や新入生に、受験のことや早稲田のことなど、トークライブやイベントを通じて知ってもらう団体！去年から入ったばっかりなんだけど、とても居心地が良くてやりがいのある団体ですよ♪♪",
  },
  {
    Question: "バイトってしてますか？",
    Answer:
      "今はいそがしいからあんまし……聴覚障がいのある学生さんに向けた文字起こしのお仕事ぐらいかなー。あとはたまーに単発で採点バイト入るぐらい、、",
  },
  {
    Question: "趣味は何ですか？",
    Answer:
      "音楽聴くこと！それから、youtubeとかサブスクとかテレビで動画見ること！あとは最近は、絵を描くこととか、本を読むことも結構してるかな！あとは～……英語学習とかプログラミング？かなり多趣味です。",
  },
  {
    Question: "好きな芸能人っている？",
    Answer:
      "結構広く浅く見てる方だからいっぱいいるけど……ずっと追っかけてるのはやっぱりハロプロかな～。特に元モーニング娘。の道重さゆみさんが好きです。現役だと、アンジュルムの川村文乃ちゃん、Juice=Juiceの段原瑠々ちゃんが推しかな！調べてみてね♪♪",
  },
  {
    Question: "今、頑張っていることは？",
    Answer:
      "これ！(笑) あとは、研究室ですかね……思ったより大変だっちゃ！！！(大変すぎて語尾が変になった人)",
  },
  {
    Question: "何の研究してるんでしょうか？",
    Answer:
      "バイオインフォマティクス！情報系と生命系のコラボレーション！ってとこかなー笑 生物系なのに実験しないんだよ？面白いっしょ！！",
  },
  {
    Question: "最後に、あなたの夢を教えて下さい！",
    Answer:
      "うーん……研究職か、IT系エンジニアか、特許関係？それ以外の技術職系もいいかもだし、、都会と田舎の中間みたいな都市で、自分にあった職業をして、自分にあった仲間を周りに引き寄せて、いい意味で自由気ままに生きていくのが、１番の夢だったりします！",
  },
];

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.classList.add("Questions");
  div.setAttribute("id", `Question-${i}`);
  div.textContent = "Q. " + QandAs[i].Question;
  QandAContainer.appendChild(div);

  let div2 = document.createElement("div");
  div2.classList.add("Answers");
  div2.setAttribute("id", `Answer-${i}`);
  div2.style.display = "none";
  div2.textContent = "A. " + QandAs[i].Answer;
  div.parentNode.appendChild(div2);

  div.onclick = function () {
    if ((div2.style.display = "none")) {
      div2.style.display = "block";
    } else {
      div2.setAttribute("none");
    }
  };
}
