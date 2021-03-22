import React, { useRef, useEffect } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useRefContext } from '../Provider/RefProvider';
import naotoImage from '../img/naoto.jpg';
import kumarImage from '../img/kumar.jpg';
import hanaImage from '../img/hana.jpg';
import yudaiImage from '../img/Yudai-memoji1.png';
import './homepage.scss';

const Home = () => {
  const { addRefs } = useRefContext();
  const homeRef = useRef();
  const missionRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const refList = [{ key: 'home', ref: homeRef } , { key: 'mission', ref: missionRef }, 
      { key: 'team', ref: teamRef }, { key: 'contact', ref: contactRef }];
    addRefs(refList);
  }, []);

  const handleSendEmail = () => {
    window.open('mailto:smartbooksjapan@gmail.com?subject=件名&body=お問い合わせ内容');
  };

  return (
    <div style={{ scrollMarginTop: 280, scrollPaddingTop: 280}}>
      <div className='home' name='home' ref={homeRef} >
        <div className='home-content'>
          <div className='title-large'>SmartBooks Inc.</div>
          <div className='title-large'>AI × オーディオブック</div>
          <p>忙しい現代人のスキマ時間に本を聴いてもらうためのオーディオブックアプリ「SmartBooks」を開発しています。AIによる音声合成によって、「
            手頃な値段・豊富な品揃え・素早いオーディオブック化」を実現します。</p>
        </div>
      </div>
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
                  <a href="https://www.linkedin.com/in/naoto-tomita-684b2b1a9">
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
      <div className='contact' name='contact' ref={contactRef}>
        <div className='title'>CONTACT US</div>
        <div className='contact-description'>
          <p>広告掲載、作品のご投稿、ご取材等、法人のお客様からのお問合せは以下のアドレスからお願いいたします。</p>
        </div>
        <div>
          <div className='email-icon' onClick={handleSendEmail}>
            <MailOutlineIcon className="material-icons" style={{fontSize: '100px'}} color='primary'/>
            <div className='icon-description'>EMAIL</div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='copyright'>
        &copy; Copyright <strong>SmartBooks Inc.</strong> All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Home;