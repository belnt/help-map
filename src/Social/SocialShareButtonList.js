import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    OKIcon,
    OKShareButton,
    TwitterIcon,
    TwitterShareButton,
    TelegramIcon,
    TelegramShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
} from "react-share";


const defaultHashTags = [
  'helpbelarus',
  'помогиБоровая',
  'помогимне',
];

const defaultShareUrl = 'https://helpbelarus.org';

const defaultMessage = 'Взаимопомощь в Беларуси';


/**
 * A list of "Share" buttons for social networks.
 * @see https://github.com/nygardk/react-share 
 */
const SocialShareButtonList = (props) => {
    const hashTags = props.hashTags || defaultHashTags;
    const message = props.message || defaultMessage;
    const shareUrl = props.shareUrl || defaultShareUrl;

    const messageWithHashTags = `${message} ${hashTags.map(tag => `#${tag}`).join(' ')}`;

    return (
        <ul className="social-share-button-list">
            <li title="Поделиться в Facebook">
                <FacebookShareButton
                    className="social-share-button"
                    url={shareUrl}
                    quote={message}
                    hashtag={'#' + hashTags[0]}
                >
                    <FacebookIcon size={28} round />
                </FacebookShareButton>
            </li>
            <li title="Поделиться в Twitter">
                <TwitterShareButton
                    className="social-share-button"
                    url={shareUrl}
                    title={message}
                    hashtags={hashTags}
                >
                    <TwitterIcon size={28} round />
                </TwitterShareButton>
            </li>
            <li title="Поделиться в ВКонтакте">
                <VKShareButton
                    className="social-share-button"
                    url={shareUrl}
                    title={messageWithHashTags}
                >
                    <VKIcon size={28} round />
                </VKShareButton>
            </li>
            <li title="Поделиться в Одноклассники">
                <OKShareButton
                    className="social-share-button"
                    url={shareUrl}
                    title={messageWithHashTags}
                >
                    <OKIcon size={28} round />
                </OKShareButton>
            </li>
            <li title="Поделиться в Telegram">
                <TelegramShareButton
                    className="social-share-button"
                    url={shareUrl}
                    title={messageWithHashTags}
                >
                    <TelegramIcon size={28} round />
                </TelegramShareButton>
            </li>
            <li title="Поделиться в Viber">
                <ViberShareButton
                    className="social-share-button"
                    url={shareUrl}
                    title={message}
                >
                    <ViberIcon size={28} round />
                </ViberShareButton>
            </li>
        </ul>
    );
}

export default SocialShareButtonList;
