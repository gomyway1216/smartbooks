import React from 'react';
import './homepage.scss';
import naotoImage from '../img/naoto.jpg';
import kumarImage from '../img/kumar.jpg';
import hanaImage from '../img/hana.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

let iconStyles = {
  fontSize: '100px'
};

const Home = () => {

  const handleSendEmail = () => {
    window.open('mailto:smartbooksjapan@gmail.com?subject=件名&body=お問い合わせ内容');
  };

  return (
    <div>
      <div className='home'>
        <div className='home-content'>
          <div style={{ fontSize: '400%'}}>AI × オーディオブック</div>
          <p style={{ fontSize: '120%'}}>忙しい現代人のスキマ時間に本を聴いてもらうためのオーディオブックアプリ「SmartBooks」を開発しています。AIによる音声合成によって、「
            手頃な値段・豊富な品揃え・素早いオーディオブック化」を実現します。</p>
        </div>
      </div>
      <div className='mission'>
        <div className="mission-content" >
          <div className='mission-title'>OUR MISSION</div>
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
      <div className='team'>
        <div className='team-title'>TEAM</div>
        <div className='team-images'>
          <div className='image-item' >
            <img className='member-image' src={naotoImage} alt="Naoto Image"/>
            <div className='overlay'>
              <div className="member-info-content">
                <h4>冨田 直人</h4>
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
                <div className="member-info-content">
                  <h4>サウラブ・クマール</h4>
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
          </div>
          <div className='image-item'>
            <img className='member-image' src={hanaImage} alt="Naoto Image"/>
            <div className='overlay'>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>金杉 華</h4>
                  <span>Designer</span>
                </div>
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
        </div>
      </div>
      <div className='contact'>
        <div className='contact-title'>CONTACT US</div>
        <div className='contact-description'>
          <p style={{ fontSize: '120%' }}>広告掲載、作品のご投稿、ご取材等、法人のお客様からのお問合せは以下のアドレスからお願いいたします。</p>
        </div>
        <div>
          <div className='email-icon' onClick={handleSendEmail}>
            <MailOutlineIcon className="material-icons" style={iconStyles} color='primary'/>
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