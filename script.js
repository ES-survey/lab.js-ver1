// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む　→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "自分自身に対する考え方についてのアンケート(1回目)",
  "content": "この度はアンケートにご協力いただきありがとうございます。アンケートにお答えいただく前に，次のページの文章をよく読んでください。"
 })



}
      },
      "title": "title"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "1.本調査について",
          "content": "この調査は，あなたの自分自身に対する考え方と精神的健康について調べることを⽬的とした研究のために実施されます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "アンケートでは，あなたの考え⽅や気持ちについて，いくつかの質問に回答していただきます。\nアンケートの回答に要する時間は，5分〜10分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "content": "この調査の実施対象となる⽅は，19歳から26歳までの⽇本語を⺟語とする⼤学1年⽣，2年⽣，3年⽣に該当する⽅です。\n\n19歳未満の⽅や，27歳以上の⽅，外国⼈留学⽣の⽅，⼤学⽣4年⽣以上の⽅が回答されても，謝礼のお渡しができません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.調査への参加について",
          "content": "この調査への参加は任意で，あなたの⾃由意志に委ねられています。"
        },
        {
          "required": true,
          "type": "text",
          "content": "調査への参加に同意されなくても，あなたの不利益になることは⼀切ございません。"
        },
        {
          "required": true,
          "type": "text",
          "content": "同意した後であっても，回答を途中でやめたくなった場合，ブラウザの「×」を押すことで，いつでも回答を中⽌することができます。その場合，データは分析に使⽤されません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "※注意事項",
          "content": "このアンケートでは，あなたの考え⽅や気持ちについてお尋ねします。"
        },
        {
          "required": true,
          "type": "text",
          "content": "回答の際中に，苦痛や不快感を抱いた場合は，いつでも調査を中⽌することができます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "調査に協⼒し，アンケートに最後まで回答していただいた⽅にのみ，クロス・マーケティングを通じて謝礼をお渡しすることができます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "また，アンケートに最後までご回答していただいた場合でも，不真⾯⽬な回答を⾏ったと実施者側で判断した場合には，謝礼をお渡しすることができません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.個人情報の保護について",
          "content": "この調査にあたって，参加者の皆様に不利益が⽣じないよう，個⼈情報の保護およびプライバシーの尊重には最⼤限の注意を払います。"
        },
        {
          "required": true,
          "type": "text",
          "content": "アンケートの回答は，個⼈が特定されないよう処理を⾏い，厳重に保管されます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "⼤学の定めた期間が経過後，個⼈情報およびプライバシー保護に留意した上で破棄されます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "この調査は，研究実施者が所属する⼤学の承認を受けて実施されます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.研究結果の公表について",
          "content": "本研究の結果は，個⼈が特定されないように処理を⾏った上\nで，⼼理学の学術研究にのみ使⽤されます。そのため，学会や学術雑誌などで公表されることがあります。"
        },
        {
          "required": true,
          "type": "text",
          "content": "結果を知りたい場合は，クロス・マーケティングを通じて，調査実施者にご連絡ください。"
        },
        {
          "required": true,
          "type": "text",
          "content": "ただし，個別の結果はお伝えできませんので，ご了承ください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "上記の内容を理解し，アンケート調査のご協⼒に同意いただける場合は，以下の『同意する』を選択し，進むボタンをクリックして次の質問に進んでください。同意いただけない場合は，ウインドウを閉じてください。",
          "options": [
            {
              "coding": "informedconsent",
              "label": "同意する"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "インターネットを⽤いた調査においては，うそをついたり，質問を読まないで，いい加減な回答をする⽅がいることが問題になっています。 あなたは質問をきちんと読んで真⾯⽬に答えていただけますか︖"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "真面目に答えていただけるのであれば，以下の文章を選択してください。",
          "options": [
            {
              "label": "私は以下の質問をきちんと読んで，真面目に回答します。",
              "coding": "boutousensei"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次に進む →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Boutousensei"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "1.あなたの年齢を選択してください",
          "options": [
            {
              "label": "19",
              "coding": "19"
            },
            {
              "label": "20",
              "coding": "20"
            },
            {
              "label": "21",
              "coding": "21"
            },
            {
              "label": "22",
              "coding": "22"
            },
            {
              "label": "23",
              "coding": "23"
            },
            {
              "label": "24",
              "coding": "24"
            },
            {
              "label": "25",
              "coding": "25"
            },
            {
              "label": "26",
              "coding": "26"
            }
          ],
          "name": "1."
        },
        {
          "required": true,
          "type": "radio",
          "label": "2.あなたの大学の学年を教えてください",
          "options": [
            {
              "label": "大学1年生",
              "coding": "1"
            },
            {
              "label": "大学2年生",
              "coding": "2"
            },
            {
              "label": "大学3年生",
              "coding": "3"
            },
            {
              "label": "大学4年生以上",
              "coding": "4"
            }
          ],
          "name": "2."
        },
        {
          "required": true,
          "type": "radio",
          "label": "3.あなたの性別を教えてください。",
          "options": [
            {
              "label": "女性",
              "coding": "0"
            },
            {
              "label": "男性",
              "coding": "1"
            },
            {
              "label": "その他",
              "coding": "2"
            },
            {
              "label": "回答したくない",
              "coding": "4"
            }
          ],
          "name": "3."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographic"
    },
    {
      "title": "OSG likert",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
      "metadata": {
        "title": "OSG likert",
        "description": "",
        "repository": "",
        "contributors": "Takayuki Osugi"
      },
      "messageHandlers": {},
      "files": {},
      "responses": {},
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.自分がどんな人生を進むか，決めた",
                  "coding": "D1"
                },
                {
                  "label": "2.私の将来の計画は，自分の本当の興味や大切だと思うものに合っている",
                  "coding": "D2"
                },
                {
                  "label": "3.自分が進もうとする人生にはどのようなものがあるのか，すすんで考える",
                  "coding": "D3"
                },
                {
                  "label": "4.自分がすでに決めた人生の目的が本当に自分に合うのかどうか，考える",
                  "coding": "D4"
                },
                {
                  "label": "5.人生で本当にやりとげたいことは何か，はっきりしない",
                  "coding": "D5"
                },
                {
                  "label": "6.自分の人生をどうするのかについては，自分で選んで決めた",
                  "coding": "D6"
                },
                {
                  "label": "7.私の将来の計画は，自分にとって正しいものに違いない",
                  "coding": "D7"
                },
                {
                  "label": "8.自分が追い求めることのできる色々な目標について考える",
                  "coding": "D8"
                },
                {
                  "label": "9.自分が進もうと決めた人生を他の人がどう思うのか，分かろうとしている",
                  "coding": "D9"
                },
                {
                  "label": "10.どんな人生を進みたいのか，どうしても考えてしまう",
                  "coding": "D10"
                },
                {
                  "label": "11.自分が将来何をするのかについての計画がある",
                  "coding": "D11"
                },
                {
                  "label": "12.将来の計画があるから，私は自信をもっている",
                  "coding": "D12"
                },
                {
                  "label": "13.自分が将来するかもしれない色々なことについて考える",
                  "coding": "D13"
                },
                {
                  "label": "14.自分がすでに決めた将来の計画について考える",
                  "coding": "D14"
                },
                {
                  "label": "15.自分は将来をどうしたいのか，気がかりだ",
                  "coding": "D15"
                },
                {
                  "label": "16.この設問は，「3.どちらでもない」を選択してください。",
                  "coding": "D16"
                },
                {
                  "label": "17.自分の進みたい人生がわかっている",
                  "coding": "D17"
                },
                {
                  "label": "18.将来の計画のおかげで，自分というものがはっきりしている",
                  "coding": "D18"
                },
                {
                  "label": "19.自分にとってよいと思える色々な生き方について考えている",
                  "coding": "D19"
                },
                {
                  "label": "20.自分の将来の計画が，自分が本当にのぞんでいるものかどうかを考える",
                  "coding": "D20"
                },
                {
                  "label": "21.どんな人生を進まなければならないのか，考え続けている",
                  "coding": "D21"
                },
                {
                  "label": "22.自分が将来何をやっていくのか，思い浮かべることができる",
                  "coding": "D22"
                },
                {
                  "label": "23.自分の進みたい人生は，自分に本当に合うものになると思う",
                  "coding": "D23"
                },
                {
                  "label": "24.自分に合ういろんな生き方を考えている",
                  "coding": "D24"
                },
                {
                  "label": "25.他の人たちと，自分の将来の計画についての話をする",
                  "coding": "D25"
                },
                {
                  "label": "26.自分が進みたい人生を，ずっと探し続けている",
                  "coding": "D26"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E１ まったくあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E２ ややあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ どちらとも言えない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ ややあてはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ とてもあてはまる\u003C\u002Fspan\u003E"
              ],
              "label": "1.あなた自身の考え方についてお尋ねします。次の項目をよく読み，あなたの考え方に最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "DIDS",
          "width": "m"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.過去において自分をなくしてしまったように感じる",
                  "coding": "M1"
                },
                {
                  "label": "2.自分が望んでいることがはっきりしている",
                  "coding": "M2"
                },
                {
                  "label": "3.自分のまわりの人々は，本当の私をわかっていないと思う",
                  "coding": "M3"
                },
                {
                  "label": "4.現実の社会の中で，自分らしい生き方ができると思う",
                  "coding": "M4"
                },
                {
                  "label": "5.過去に自分自身を置き去りにしてきたような気がする",
                  "coding": "M5"
                },
                {
                  "label": "6.自分がどうなりたいのかはっきりしている",
                  "coding": "M6"
                },
                {
                  "label": "7.自分は周囲の人々によく理解されていると感じる",
                  "coding": "M7"
                },
                {
                  "label": "8.現実の社会の中で，自分らしい生活が送れる自信がある",
                  "coding": "M8"
                },
                {
                  "label": "9.いつのまにか自分が自分でなくなってしまったような気がする",
                  "coding": "M9"
                },
                {
                  "label": "10.自分のするべきことがはっきりしている",
                  "coding": "M10"
                },
                {
                  "label": "11.人に見られている自分と本当の自分は一致しないと感じる",
                  "coding": "M11"
                },
                {
                  "label": "12.現実の社会の中で，自分の可能性を十分に実現できると思う",
                  "coding": "M12"
                },
                {
                  "label": "13.いつのまにか自分が自分でなくなってしまったような気がする",
                  "coding": "M13"
                },
                {
                  "label": "14.自分が何をしたいのよくわからないと感じるときがある",
                  "coding": "M14"
                },
                {
                  "label": "15.本当の自分は人には理解されないだろう",
                  "coding": "M15"
                },
                {
                  "label": "16.自分らしく生きてゆくことは，現実の社会の中では難しいだろうと思う",
                  "coding": "M16"
                },
                {
                  "label": "17.「自分がない」と感じることがある",
                  "coding": "M17"
                },
                {
                  "label": "18.自分が何を望んでいるのかわからなくなることがある",
                  "coding": "M18"
                },
                {
                  "label": "19.人前での自分は，本当の自分ではないような気がする",
                  "coding": "M19"
                },
                {
                  "label": "20.自分の本当の能力を生かせる場所が社会にはないような気がする",
                  "coding": "M20"
                }
              ],
              "width": "7",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E１ まったくあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E２ ほとんどあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ どちらかと言うとあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ どちらともいえない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ どちらかというとあてはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E６ かなりあてはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E７ 非常にあてはまる\u003C\u002Fspan\u003E"
              ],
              "label": "2.あなた自身についてお尋ねします。次の項目をよく読み，あなたに最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "MEIS",
          "width": "m"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.現在は過去の積み重ねである",
                  "coding": "TC1"
                },
                {
                  "label": "2.過去は過去のためのステップであった",
                  "coding": "TC2"
                },
                {
                  "label": "3.過去があるから今がある",
                  "coding": "TC3"
                },
                {
                  "label": "4.現在のあり方は過去のあり方に影響を受けている",
                  "coding": "TC4"
                },
                {
                  "label": "5.未来は，現在の私の行動に影響を与えている",
                  "coding": "TC5"
                },
                {
                  "label": "6.将来に向けて，現在行っていることがある",
                  "coding": "TC6"
                },
                {
                  "label": "7.未来に向かって今生きている",
                  "coding": "TC7"
                },
                {
                  "label": "8.未来があるから頑張ることができる",
                  "coding": "TC8"
                },
                {
                  "label": "9.今は将来のためのステップである",
                  "coding": "TC9"
                },
                {
                  "label": "10.今を大切にしていると未来もよくなる",
                  "coding": "TC10"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E１ まったくあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E２ ややあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ どちらとも言えない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ ややあてはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ とてもあてはまる\u003C\u002Fspan\u003E"
              ],
              "label": "3.あなた自身の時間に対する考え方についてお尋ねします。次の項目をよく読み，あなたの考え方に最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "time continuity",
          "width": "m"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.自分の将来が楽しみです",
                  "coding": "ta1"
                },
                {
                  "label": "2.私は、今の生活に不満があります",
                  "coding": "ta2"
                },
                {
                  "label": "3.自分には幼い頃のとても幸せな思い出があります",
                  "coding": "ta3"
                },
                {
                  "label": "4.私は将来、成功するとは思えません",
                  "coding": "ta4"
                },
                {
                  "label": "5.今の生活に満足しています",
                  "coding": "ta5"
                },
                {
                  "label": "6.私にとって、過去の人生は忘れたいものです",
                  "coding": "ta6"
                },
                {
                  "label": "7.私は将来、幸背になると思います",
                  "coding": "ta7"
                },
                {
                  "label": "8.自分の今の状況についてよく思っていません",
                  "coding": "ta8"
                },
                {
                  "label": "9.私には、小さい頃のよい思い出があります",
                  "coding": "ta9"
                },
                {
                  "label": "10.私は大人になっても、大した人間にならないと思います",
                  "coding": "ta10"
                },
                {
                  "label": "11.私は、今の状況を気に入っています",
                  "coding": "ta11"
                },
                {
                  "label": "12.私は、自分の過去に不満があります",
                  "coding": "ta12"
                },
                {
                  "label": "13.自分の将来のことを考えると笑顔になります",
                  "coding": "ta13"
                },
                {
                  "label": "14.私にとって、今の状況は充実しています",
                  "coding": "ta14"
                },
                {
                  "label": "15.この項目は，「4.そう思う」を選択してください",
                  "coding": "ta15"
                },
                {
                  "label": "16.自分の昔のことを振り返ると悲しくなります",
                  "coding": "ta16"
                },
                {
                  "label": "17.自分の将来のことを考えると悲しくなります",
                  "coding": "ta17"
                },
                {
                  "label": "18.全体的に、私が今取り組んでいることに幸せを感じます",
                  "coding": "ta18"
                },
                {
                  "label": "19.自分の過去が違うものであったらよかったのにと思います",
                  "coding": "ta19"
                },
                {
                  "label": "20.自分の将来にワクワクします",
                  "coding": "ta20"
                },
                {
                  "label": "21.自分の今の状況に不満足です",
                  "coding": "ta21"
                },
                {
                  "label": "22.自分の過去を幸せに思っています",
                  "coding": "ta22"
                },
                {
                  "label": "23.私は、自分の将来について考えたくありません",
                  "coding": "ta23"
                },
                {
                  "label": "24.今の生活が幸せではありません",
                  "coding": "ta24"
                },
                {
                  "label": "25.とても幸せだったので、昔のことを考えるのが好きです",
                  "coding": "ta25"
                },
                {
                  "label": "26.自分の将来のことを考えても意味がありません",
                  "coding": "ta26"
                },
                {
                  "label": "27.全体的に、自分の今の生活に幸せを感じます",
                  "coding": "ta27"
                },
                {
                  "label": "28.自分の過去について苦い思いがあります",
                  "coding": "ta28"
                },
                {
                  "label": "29.私は、自分の将来のことを考えるとワクワクします",
                  "coding": "ta29"
                },
                {
                  "label": "30.私は、今の生活に悩んでいます",
                  "coding": "ta30"
                },
                {
                  "label": "31.私の過去には楽しい思い出がいっぱいです",
                  "coding": "ta31"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E１ まったくそう思わない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E２ そう思わない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ どちらとも言えない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ そう思う\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ とてもそう思う\u003C\u002Fspan\u003E"
              ],
              "label": "4.あなた自身の考え方についてお尋ねします。次の項目をよく読み，あなた自身に最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "time attitude",
          "width": "m"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.今が大事だと思う",
                  "coding": "to1"
                },
                {
                  "label": "2.人生設計を考えることがある",
                  "coding": "to2"
                },
                {
                  "label": "3.過去のことにこだわっている",
                  "coding": "to3"
                },
                {
                  "label": "4.毎日が幸せだと感じる",
                  "coding": "to4"
                },
                {
                  "label": "5.未来の自分を想像することがある",
                  "coding": "to5"
                },
                {
                  "label": "6.昔に戻りたいと思う",
                  "coding": "to6"
                },
                {
                  "label": "7.今を一生懸命生きている",
                  "coding": "to7"
                },
                {
                  "label": "8.将来の夢がある",
                  "coding": "to8"
                },
                {
                  "label": "9.昔のことを思い出すことがある",
                  "coding": "to9"
                },
                {
                  "label": "10.目の前のことを意識している",
                  "coding": "to10"
                },
                {
                  "label": "11.思い出にひたることが好きである",
                  "coding": "to11"
                },
                {
                  "label": "12.現在を充実させたいと思う",
                  "coding": "to12"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E１ あてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E２ ややあてはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ どちらとも言えない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ ややあてはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ とてもあてはまる\u003C\u002Fspan\u003E"
              ],
              "label": "5.あなた自身の時間に対する考え方についてお尋ねします。次の項目をよく読み，あなた自身に最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "time orientation",
          "width": "m"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "1.理由もなく疲れ切ったように感じましたか。",
                  "coding": "k1"
                },
                {
                  "label": "2.神経過敏に感じましたか。",
                  "coding": "k2"
                },
                {
                  "label": "3.どうしても落ち着けないくらいに，神経過敏に感じましたか。",
                  "coding": "k3"
                },
                {
                  "label": "4.絶望的だと感じましたか。",
                  "coding": "k4"
                },
                {
                  "label": "5.そわそわ，落ち着かなく感じましたか。",
                  "coding": "k5"
                },
                {
                  "label": "6.じっと座っていられないほど，落ち着かなく感じましたか。",
                  "coding": "k6"
                },
                {
                  "label": "7.ゆううつに感じましたか。",
                  "coding": "k7"
                },
                {
                  "label": "8.気分が沈み込んで，何が起こっても気が晴れないように感じましたか。",
                  "coding": "k8"
                },
                {
                  "label": "9.何をするのも骨折りだと感じましたか。",
                  "coding": "k9"
                },
                {
                  "label": "10.今自分は価値のない人間だと感じましたか。",
                  "coding": "k10"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E０ まったくない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E１ 少しだけある\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E３ ときどきある\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E４ たいていある\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E５ いつもある\u003C\u002Fspan\u003E"
              ],
              "label": "6.あなた自身について，過去30日の間にどのくらいの頻度で次のことがありましたか。最もあてはまる数字を選んでください。",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "k10",
          "width": "m"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "7.以下は，あなたが普段の生活のさまざまな場面で，どのように感じているのかについての質問です。もっともあてはまる選択肢を回答してください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "1.あなたは、自分に仲間付き合いがないと感じることがありますか",
          "options": [
            {
              "coding": "1",
              "label": "1.ほとんどない"
            },
            {
              "label": "2.たまにある",
              "coding": "2"
            },
            {
              "label": "3.よくある",
              "coding": "3"
            }
          ],
          "name": "1."
        },
        {
          "required": true,
          "type": "radio",
          "label": "2.あなたは、疎外されていると感じることがありますか",
          "options": [
            {
              "label": "1.ほとんどない",
              "coding": "1"
            },
            {
              "label": "2.たまにある",
              "coding": "2"
            },
            {
              "label": "3.よくある",
              "coding": "3"
            }
          ],
          "name": "2."
        },
        {
          "required": true,
          "type": "radio",
          "label": "3.あなたは、他の人から孤立していると感じることがありますか",
          "options": [
            {
              "label": "1.ほとんどない",
              "coding": "1"
            },
            {
              "label": "2.たまにある",
              "coding": "2"
            },
            {
              "label": "3.よくある",
              "coding": "3"
            }
          ],
          "name": "3."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "isolation"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご協力ありがとうございました。以下の「送信→」ボタンを押して，アンケートを終了してください。",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "送信 →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const data = this.options.datastore.exportJson();

fetch("https://script.google.com/macros/s/AKfycbxbiKkRnwQT9jSqoomNqUvR3E_EBy6Lionu1FCLpAVhB7jKOx08iW56WjIPLO4hn6_B4w/exec", {
  method: "POST",
  body: data,
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));
}
      },
      "title": "Thanks"
    }
  ]
})

// Let's go!
study.run()