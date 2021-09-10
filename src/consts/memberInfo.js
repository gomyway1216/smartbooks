import naotoImage from '../img/naoto.jpg';
import kumarImage from '../img/kumar.jpg';
import hanaImage from '../img/hana.jpg';
import yudaiImage from '../img/Yudai-memoji1.png';
import utkarshImage from '../img/utkarsh.png';
import abhishekImage from '../img/abhishek.jpg';
import nekoImage from '../img/neko.png';
import natsukiImage from '../img/natsuki.png';

export const getMemberList = () => {
  const memberList = [
    {
      'name': '冨田 直人 / Naoto Tomita',
      'title': 'Co-CEO ＆ Co-Founder',
      'subTitle': 'A winner never quits, A quitter never wins.',
      'twitter': 'https://twitter.com/naoto_tomita',
      'facebook': 'https://www.facebook.com/naoto.tomita.7505',
      'linkedIn': 'https://www.linkedin.com/in/naoto-tomita-684b2b1a9/',
      'image': naotoImage,
      'description': `＃ データ分析エンジニア  
                    ＃ 東京工業大学大学院在籍中  
                    ＃ 経歴： Apple Books, インドのカフェ店長...  
                    ＃ その他：うどん作りが趣味`
    },
    {
      'name': 'サウラブ・クマール / Saurabh Kumar',
      'title': 'Co-CEO ＆ Co-Founder',
      'twitter': 'https://twitter.com/Saurabh190598',
      'facebook': 'https://www.facebook.com/saurabh0598',
      'linkedIn': 'https://www.linkedin.com/in/saurabh-kumar-82417a137/',
      'image': kumarImage,
      'description': `＃ 機械学習エンジニア  
      ＃ インド工科大学卒業  
      ＃ 経歴： NOKIA, Yahoo Japan, Rapyuta Robotics...  
      ＃ インド・ニューデリー在住`
    },
    {
      'name': '金杉 華 / Hana Kanasugi',
      'title': 'Designer',
      'twitter': null,
      'facebook': null,
      'linkedIn': 'https://www.linkedin.com/in/%E8%8F%AF-%E9%87%91%E6%9D%89-394506176/',
      'image': hanaImage,
      'description': `＃ デザイナー（UIUX）  
      ＃ 慶應義塾大学卒業  
      ＃ 経歴：スタートアップ複数社`
    },
    {
      'name': '矢口 雄大',
      'title': 'Software Engineer',
      'twitter': 'https://twitter.com/yudai_yaguchi',
      'facebook': 'https://www.facebook.com/yaguchiyuudai',
      'linkedIn': 'https://www.linkedin.com/in/yudai-yaguchi/',
      'image': yudaiImage,
      'description': `＃ ウィスコンシン大学卒  
      ＃ 好きな物は寿司とお笑い  
      ＃ 英語は別に得意じゃなかった`
    },
    {
      'name': 'ウトゥカルシュ・シング / Utkarsh Singh',
      'title': 'Software Engineer',
      'twitter': null,
      'facebook': 'https://www.facebook.com/utkarsh.singh.97',
      'linkedIn': 'https://www.linkedin.com/in/singh-utkarsh/',
      'image': utkarshImage,
      'description': `＃ バックエンドエンジニア    
      ＃ インド工科大学卒業    
      ＃ 経歴：YahooJapan, 外資銀行...  
      ＃ その他：テニスが趣味  `
    },
    {
      'name': 'アビシェク・クマール / Abhishek Kumar',
      'title': 'Software Engineer',
      'twitter': null,
      'facebook': null,
      'linkedIn': 'https://www.linkedin.com/in/abhishek-kumar-5387b3165/',
      'image': abhishekImage,
      'description': `＃ モバイルエンジニア   
      ＃ インド工科大学卒業    
      ＃ 経歴：GAFAM  
      ＃ その他：インド・ハイデラバード在住  `
    },
    {
      'name': '山口 ねこ / Neko Yamaguchi',
      'title': 'QA Engineer',
      'twitter': null,
      'facebook': null,
      'linkedIn': null,
      'image': nekoImage,
      'description': `＃ QAエンジニア   
      ＃ 趣味は散歩と食事`
    },
    {
      'name': '水野夏来 / Natsuki Mizuno',
      'title': 'Software Engineer',
      'twitter': 'https://twitter.com/natsuki_m777',
      'facebook': null,
      'linkedIn': null,
      'image': natsukiImage,
      'description': `＃自然言語処理   
      ＃東京工業大学 学士２年   
      ＃ 趣味はAR`
    },
  ];
  return memberList;
};