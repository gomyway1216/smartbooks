import React, { useRef, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { makeStyles, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useRefContext } from '../Provider/RefProvider';
import naotoImage from '../img/naoto.jpg';
import kumarImage from '../img/kumar.jpg';
import hanaImage from '../img/hana.jpg';
import yudaiImage from '../img/Yudai-memoji1.png';
import googleLogo from '../img/google.svg';
import googleLogoSmall from '../img/google-small.svg';
import titLogo from '../img/TokyoTech.svg';
import titLogoSmall from '../img/TokyoTech-small.svg';
import useWindowDimensions from '../Hook/useWindowDimensions';
import smartbooksLogo from '../img/logo_smartbooks.png';
import screenImage from '../img/screen1.png';
import sampleAudio from '../sound/sample_botchan.mp3';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import AudioPlayer from 'material-ui-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import ReactAudioPlayer from 'react-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './homepage.scss';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const muiTheme = createMuiTheme({});

const src = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
];


const Home = () => {
  const classes = useStyles();
  const { addRefs, modifyDisplayedItemList } = useRefContext();
  const homeRef = useRef();
  const missionRef = useRef();
  const contentsRef = useRef();
  const teamRef = useRef();
  const informationRef = useRef();
  const contactRef = useRef();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const refList = [{ key: 'home', ref: homeRef } , { key: 'mission', ref: missionRef }, 
      { key: 'team', ref: teamRef }, {key: 'information', ref: informationRef }, { key: 'contact', ref: contactRef }];
    addRefs(refList);
  }, []);

  const handleSendEmail = () => {
    window.open('mailto:admin@smartbooks.jp?subject=件名&body=お問い合わせ内容');
  };

  const onChange = (itemName) => (isVisible) => {
    modifyDisplayedItemList(itemName, isVisible);
  };

  const Player = () => (
    <AudioPlayer
      autoPlay
      src={sampleAudio}
      onPlay={e => console.log('onPlay')}
      // other props here
      showSkipControls
    />
  );

  return (
    <div style={{ scrollMarginTop: 280, scrollPaddingTop: 280}}>         
      <div className='home' name='home' ref={homeRef} >   
        <VisibilitySensor key='home' onChange={onChange('home')}>
          <div className='home-content'>
            <div className='title-large'>AI × オーディオブック</div>
            <p>忙しい現代人のスキマ時間に本を聴いてもらうためのオーディオブックアプリ「smartbooks」を開発しています。AIを活用して、「手頃な値段・豊富な品揃え・素早いオーディオブック化」を実現します。</p>
            <Button className={classes.root}>Coming soon...</Button>
          </div> 
        </VisibilitySensor>   
      </div>  
      <VisibilitySensor key="contents" onChange={onChange('contents')}>
        <div className="contents" name="contents" ref={contentsRef}>
          <div className="contents-container">
            <div className="logo-container">
              <img className="smartbooks-logo" src={smartbooksLogo} alt="smartbooks logo" />
            </div>
            <div className="contents-main">
              <div className="screen-container">
                <img className="screen-image" src={screenImage} alt="screen image" />
              </div>
              <div className="description-container">
                <div className="description-content">
                  <div className="description-start">ナレーターは</div>
                  <div className="description-important">AI</div>
                  <div className="description">ニューラルネットワークを活用した音声合成モデルを用いて、自然で聴き取りやすいオーディオブックを制作しています。</div>
                </div>
                <div className="description-content">
                  <div className="description-start">オーディオ化は</div>
                  <div className="description-important">24時間</div>
                  <div className="description">AIによるオーディオ化までの期間は約24時間。従来２ヶ月は待たなければいけなかった話題の新作書籍もすぐに聴くことができます。</div>
                </div>
              </div>      
            </div>
            <div className="audio-player">
              <div>サンプルを聴く</div>
              <div>芥川龍之介『坊ちゃん』冒頭</div>
              <audio
                controls
                controlsList="nodownload"
                src={sampleAudio}>
                  Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='mission' onChange={onChange('mission')}>
        <div className='mission' name='mission' ref={missionRef}>    
          <div className='mission-content'>
            <div className='title'>OUR MISSION</div>
            <div className='mission-content-description'>
              <p>-  忙しい現代人の読書離れの解決  -</p>
              <p>「日本人の約半分は1ヶ月に1冊も本を読まない」<br/>
              「日本人の65.1％が読書量は以前に比べて減っている」<br/>
              「そのうち過半数は仕事や勉強が忙しくて読む時間がないと回答」</p>
              <p>このように、現代人の読書離れが進んでいる一方、人々の読書へのモチベーションが下がっている訳ではないこともわかっています。
              smartbooksはそんな「読みたい本があるが忙しくて読む時間がない」という方々が、電車の中や家事をやっている時間などのスキマ時間で本を楽しめるように、
              AIを活用して、オーディオブックをより「手頃な値段・豊富な品揃え・素早いリリース」で提供することで、現代人の読書離れにアプローチします。</p>
            </div>
          </div>    
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='team' onChange={onChange('team')}>
        <div className='team' name='team' ref={teamRef}>
          <div className='title'>TEAM</div>
          <div className='team-images'>
            <div className='image-item'>
              <img className='member-image' src={naotoImage} alt="Naoto Image"/>
              <div className='overlay'>
                <div className="member-info">
                  <div>冨田 直人</div>
                  <span>Co-CEO ＆ Co-Founder</span>
                  <div className='social-icons'>
                    <a href="https://twitter.com/naoto_tomita">
                      <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.facebook.com/naoto.tomita.7505">
                      <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.linkedin.com/in/naoto-tomita-684b2b1a9/">
                      <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                  </div>
                </div>
              </div>           
            </div>
            <div className='image-item'>
              <img className='member-image' src={kumarImage} alt="Kumar Image"/>
              <div className='overlay'>
                <div className="member-info">
                  <div>サウラブ・クマール</div>
                  <span>Co-CEO ＆ Co-Founder</span>
                  <div className='social-icons'>
                    <a href="https://twitter.com/Saurabh190598">
                      <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.facebook.com/saurabh0598">
                      <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.linkedin.com/in/saurabh-kumar-82417a137/">
                      <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                  </div>
                </div>
              </div>   
            </div>
            <div className='image-item'>
              <img className='member-image' src={hanaImage} alt="Naoto Image"/>
              <div className='overlay'>
                <div className="member-info">
                  <div>金杉 華</div>
                  <span>Designer</span>
                  <div className='social-icons'>
                    <a>
                      <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.facebook.com/hana.kanasugi">
                      <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.linkedin.com/in/華-金杉-394506176/">
                      <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                  </div>
                </div>   
              </div>
            </div>
            <div className='image-item'>
              <img className='member-image' src={yudaiImage} alt="Naoto Image"/>
              <div className='overlay'>
                <div className="member-info">
                  <div>矢口　雄大</div>
                  <span>Software Engineer</span>
                  <div className='social-icons'>
                    <a>
                      <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.facebook.com/yaguchiyuudai">
                      <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    <a href="https://www.linkedin.com/in/yudai-yaguchi/">
                      <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='support' onChange={onChange('support')}>
        <div className='support' name='support'>
          <div className='title'>SPONSOR</div>
          {/* <div className='support-content'> */}
          <p className='description'>スマートブックス株式会社は、以下の組織から支援を受けています。</p>
          <div className='logo-list'>
            <a className='logo' href="https://startup.google.com" >
              { width > 768 && <img src={googleLogo} alt="Google Logo"/>}
              { width <= 768 && <img src={googleLogoSmall} alt="Google Logo"/>}
            </a>
            <a className='logo' href="https://www.titech.ac.jp" >
              { width > 768 && <img src={titLogo} alt="TIT Logo"/>}
              { width <= 768 && <img src={titLogoSmall} alt="TIT Logo"/>}
            </a>
          </div>    
          {/* </div>      */}
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='information' onChange={onChange('information')}>
        <div className='information' name='information' ref={informationRef}>
          <div className='title'>企業情報</div>
          <div className='item-container'>
            <div className='item-title' >企業名</div>
            <div>スマートブックス株式会社（SmartBooks Inc.）</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>代表者</div>
            <div>冨田直人</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>所在地</div>
            <div>東京都世田谷区南烏山５－１－１９</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>事業内容</div>
            <div>アプリケーションの企画・開発・運営</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>創立</div>
            <div>2021年3月19日</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>電話番号</div>
            <div>070-8409-8610</div>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='contact' onChange={onChange('contact')}>
        <div className='contact' name='contact' ref={contactRef}>
          <div className='title'>CONTACT US</div>
          <div className='contact-description'>
            <p>広告掲載、作品のご投稿、ご取材等、法人のお客様からのお問合せは以下よりお願いいたします。</p>
          </div>
          <div>
            <div className='email-icon' onClick={handleSendEmail}>
              <MailOutlineIcon className="material-icons" style={{fontSize: '100px'}} color='primary'/>
              <div className='icon-description'>EMAIL</div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
      <div className='footer'>
        <div className='copyright'>
        &copy; Copyright <strong>SmartBooks Inc.</strong> All Rights Reserved
        </div>
      </div>  
    </div>
  );
};

export default Home;