import React, { useRef, useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import useWindowDimensions from '../Hook/useWindowDimensions';
import { makeStyles, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useRefContext } from '../Provider/RefProvider';
import googleLogo from '../img/google.svg';
import googleLogoSmall from '../img/google-small.svg';
import titLogo from '../img/TokyoTech.svg';
import titLogoSmall from '../img/TokyoTech-small.svg';
import miraiseLogo from '../img/miraise.svg';
import miraiseLogoSmall from '../img/miraise-small.svg';
import smartbooksLogo from '../img/logo_smartbooks.png';
import screenImage from '../img/screen1.png';
import sampleAudio from '../sound/sample_botchan.mp3';
import * as memberInfo from '../consts/memberInfo';
import MemberDialog from '../Component/Dialog/MemberDialog';

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDisplayMember, setDialogDisplayMember] = useState('');

  useEffect(() => {
    const refList = [{ key: 'home', ref: homeRef } , { key: 'mission', ref: missionRef }, {key: 'contents', ref: contentsRef },
      { key: 'team', ref: teamRef }, {key: 'information', ref: informationRef }, { key: 'contact', ref: contactRef }];
    addRefs(refList);
  }, []);

  const handleSendEmail = () => {
    window.open('mailto:admin@smartbooks.jp?subject=件名&body=お問い合わせ内容');
  };

  const onChange = (itemName) => (isVisible) => {
    modifyDisplayedItemList(itemName, isVisible);
  };

  const handleMemberClick = (member) => {
    setDialogOpen(true);
    setDialogDisplayMember(member);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
              <div className="description">
                <div className="description-title">サンプルを聴く</div>
                <div className="description-content">芥川龍之介『坊ちゃん』冒頭</div>
              </div>
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
              <p>-「日本人の読解力」の向上 -</p>
            </div>
            <div className='mission-content-description-detail'>
              <p>最新の国際学力調査（PISA）の結果では、日本人は数学や科学のリテラシーが高い（それぞれ6位・5位）のに対して、読解力が年々下がっている（15位）ことが判明しています。また、OECDは読解力と読書量に相関関係があることを示しており、実際、日本人は国際的にも読書量が少なく、同時に年々減っていることもわかっています（文部科学省調べ）。</p>
              <p>この背景には、若い世代を中心に読書にまとまった時間を取れなかったり、SNSなどで情報に「受動的に」接することに慣れてしまい、活字離れが進んでいることが挙げられます。オーディオブックはスキマ時間に受動的に本を聴くことができる上、オーディオブックをきっかけに目を使っての読書量も増える傾向にあることがわかっているため、私たちはAIを活用したオーディオブックを配信して読書のハードルを下げ、この社会問題を解決したいと考えています。</p>
            </div>
          </div>    
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='team' onChange={onChange('team')}>
        <div className='team' name='team' ref={teamRef}>
          <div className='title'>TEAM</div>
          <div className='team-images'>
            {memberInfo.getMemberList().map(member => (
              <div className='image-item' key={member.name} onClick={() => handleMemberClick(member)}>
                <img className='member-image' src={member.image} alt="Member Image"/>
                <div className='overlay'>
                  <div className="member-info">
                    <div>{member.name}</div>
                    <span>{member.title}</span>
                    <div className='social-icons'>
                      {member.twitter && 
                        <a href={member.twitter}>
                          <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                        </a>
                      }
                      {member.facebook && 
                        <a href={member.facebook}>
                          <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                        </a>
                      }
                      {member.linkedIn && 
                        <a href={member.linkedIn}>
                          <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                        </a>
                      }
                    </div>
                  </div>
                </div>           
              </div>
            ))}
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='investors' onChange={onChange('investors')}>
        <div className='investors' name='investors'>
          <div className='title'>INVESTORS</div>
          <div className='logo-list'>
            <a className='logo' href="https://miraise.vc" >
              { width > 768 && <img src={miraiseLogo} alt="Miraise Logo"/>}
              { width <= 768 && <img src={miraiseLogoSmall} alt="Miraise Logo"/>}
            </a>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='support' onChange={onChange('support')}>
        <div className='support' name='support'>
          <div className='title'>SPONSOR</div>
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
        </div>
      </VisibilitySensor>
      <VisibilitySensor key='information' onChange={onChange('information')}>
        <div className='information' name='information' ref={informationRef}>
          <div className='title'>COMPANY</div>
          <div className='item-container'>
            <div className='item-title' >企業名</div>
            <div>スマートブックス株式会社（SmartBooks Inc.）</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>代表者</div>
            <div>冨田直人</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>事業内容</div>
            <div>アプリケーションの企画・開発・運営</div>
          </div>
          <div className='item-container'>
            <div className='item-title'>創立</div>
            <div>2021年3月19日</div>
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
      <MemberDialog item={dialogDisplayMember} open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default Home;