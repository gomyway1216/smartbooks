import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Dialog, DialogContent } from '@material-ui/core';
import useWindowDimensions from '../../Hook/useWindowDimensions';
import './item-dialog.scss';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const MemberDialog = (props) => {
  const [open, setOpen] = useState(props.open);
  const { name, title, subTitle, twitter, facebook, linkedIn, image, description } = props.item;
  const { width } = useWindowDimensions();

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div className="dialog-root">
      <Dialog
        open={open}
        onClose={() => props.onClose()}
        aria-labelledby="item-dialog"
        aria-describedby="item-dialog"
        fullWidth
        maxWidth={width <= 768 ? 'xm' : 'md'}
        className="member-dialog"
      >
        <DialogContent style={{ color: 'white', backgroundColor: '#262A2B'}}>
          <div className="main">
            <div className="top-container">
              <div className="cover-image-container">
                <img className='cover-image' src={image} alt="Cover image" />
              </div>
              <div className="info-container">
                <div className="content">
                  <div className="position">{title}</div>
                  <div className="name">{name}</div>
                  <div className="sub-title">{subTitle}</div>
                  <div className='social-icons'>
                    {twitter && 
                    <a href={twitter}>
                      <TwitterIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    }
                    {facebook && 
                    <a href={facebook}>
                      <FacebookIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    }
                    {linkedIn && 
                    <a href={linkedIn}>
                      <LinkedInIcon style={{ color: 'white' }} fontSize='large'/>
                    </a>
                    }
                  </div>
                  <div className="description">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

MemberDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    image: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default MemberDialog;
