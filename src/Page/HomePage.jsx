import React from 'react';
import './homepage.scss';
import naotoImage from '../img/naoto.jpg';
import kumarImage from '../img/kumar.jpg';
import team3Image from '../img/team-3.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

let iconStyles = {
  fontSize: '100px'
};

const Home = () => {
  return (
    <div>
      <div className='home' id='home'>
        <div style={{ color: 'white', position: 'relative', width: '50%', alignSelf: 'center' }}>
          <div style={{ fontSize: '400%'}}>AI × オーディオブック</div>
          <p style={{ fontSize: '120%'}}>忙しい現代人のスキマ時間に本を聴いてもらうためのオーディオブックアプリ「SmartBooks」を開発しています。AIによる音声合成によって、「
            手頃な値段・豊富な品揃え・素早いオーディオブック化」を実現します。</p>
        </div>
      </div>
      <div className='mission' id='mission'>
        <div className="mission-content" >
          <div style={{ fontSize: '300%'}}>OUR MISSION</div>
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
      <div className='team' id='team'>
        <div className='team-title'>TEAM</div>
        <div className='team-images'>
          <div className='image-item' >
            <img className='member-image' src={naotoImage} alt="Naoto Image"/>
            <div className='overlay'>
              <div className='image-description'>hello</div>
            </div>           
          </div>
          <div className='image-item'>
            <img className='member-image' src={kumarImage} alt="Kumar Image"/>
            <div className='overlay'>
              <div className='image-description'>hello</div>
            </div>   
          </div>
          <div className='image-item'>
            <img className='member-image' src={team3Image} alt="Naoto Image"/>
            <div className='overlay'>
              <div className='image-description'>hello</div>
            </div>   
          </div>
          <div className='image-item'>
            <img className='member-image' src={team3Image} alt="Kumar Image"/>
            <div className='overlay'>
              <div className='image-description'>hello</div>
            </div>   
          </div>
        </div>
      </div>
      <div className='contact' id='contact'>
        <div style={{ fontSize: '300%', color: 'white'}}>CONTACT US</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', position: 'relative', width: '80%', alignSelf: 'center' }}>
          <p style={{ fontSize: '120%' }}>広告掲載、作品のご投稿、ご取材等、法人のお客様からのお問合せは以下のアドレスからお願いいたします。</p>
        </div>
        <div>
          <div>
            <MailOutlineIcon className="material-icons" style={iconStyles} color='primary'/>
            <div className='icon-description'>EMAIL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;