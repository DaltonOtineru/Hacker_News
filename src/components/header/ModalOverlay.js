import React from 'react';

import '../../css/modalOverlay.css';

import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaBell,
  FaTelegram,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { CgClose } from 'react-icons/cg';
import { MdRssFeed } from 'react-icons/md';

const ModalOverlay = ({ closeModal }) => {
  return (
    <div className="modal--overlay">
      <div className="modal--content">
        <div className="modal--close">
          <CgClose
            className="modal--close--icon"
            onClick={() => closeModal()}
          />
        </div>
        <div className="modal--top--links--section">
          <div className="modal--resources--section">
            <h5 className="modal--link--title">Resources</h5>
            <div className="modal--resources--links">
              <a href="/" className="modal--top--links">
                THN Store
              </a>
              <a href="/" className="modal--top--links">
                Free eBooks
              </a>
              <a href="/" className="modal--top--links">
                Freebies
              </a>
              <a href="/" className="modal--top--links">
                RSS Feeds
              </a>
            </div>
          </div>
          <div className="modal--about--section">
            <h5 className="modal--link--title">About Site</h5>
            <div className="modal--about--links">
              <a href="/" className="modal--top--links">
                About Us
              </a>
              <a href="/" className="modal--top--links">
                Our Team
              </a>
              <a href="/" className="modal--top--links">
                Jobs
              </a>
              <a href="/" className="modal--top--links">
                Advertise With Us
              </a>
            </div>
          </div>
        </div>
        <div className="modal--contact--box">
          <div className="modal--contact--title">
            <h5>Contact/Tip Us</h5>
          </div>
          <div className="contact--content">
            <div className="mail--icon--wrap">
              <a
                href="https://thehackernews.com/p/submit-news.html"
                className="mail--icon--anchor"
              >
                <GrMail className="mail--icon" />
              </a>
            </div>
            <p>
              Reach out to get featured. Contact us to send your exclusive story
              idea, research, hacks, ask us a question or leave a
              comment/feedback!
            </p>
          </div>
          <div className="modal--socials">
            <div className="modal--socials--title">
              <h5>Follow Us On Social Media</h5>
            </div>
            <a href="">
              <FaFacebookF className="modal--social--icon" />
            </a>
            <a href="">
              <AiOutlineTwitter className="modal--social--icon" />
            </a>
            <a href="">
              <FaLinkedinIn className="modal--social--icon" />
            </a>
            <a href="">
              <BsYoutube className="modal--social--icon" />
            </a>
            <a href="">
              <FaInstagramSquare className="modal--social--icon" />
            </a>
          </div>
          <div className="modal--buttons">
            <a href="/">
              <button type="button" className="modal--button">
                <MdRssFeed className="button--icon" /> RSS Feeds
              </button>
            </a>
            <a href="/">
              <button type="button" className="modal--button">
                <FaBell className="button--icon" /> Email Alerts
              </button>
            </a>
            <a href="/">
              <button type="button" className="modal--button">
                <FaTelegram className="button--icon" /> Telegram Channel
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
