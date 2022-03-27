import React from 'react';
import {BsTwitter, BsLinkedin, BsGithub, BsPinterest, BsBehance, BsDribbble} from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/dwiki-nuri-dhuha/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
            </a>
        </div>
        <div>
            <a href="https://twitter.com/DwikiNuridhuha" target="_blank" rel="noreferrer">
                <BsTwitter/>
            </a>
        </div>
        <div>
            <a href="https://github.com/dwikinuridhuha" target="_blank" rel="noreferrer">
                <BsGithub/>
            </a>
        </div>
        <div>
            <a href="https://www.pinterest.jp/dnuridhuha/_saved/" target="_blank" rel="noreferrer">
                <BsPinterest/>
            </a>
        </div>
        <div>
            <a href="https://www.behance.net/dwikinuridhuha" target="_blank" rel="noreferrer">
                <BsBehance/>
            </a>
        </div>
        <div>
            <a href="https://dribbble.com/dwikinuridhuha" target="_blank" rel="noreferrer">
                <BsDribbble/>
            </a>
        </div>
    </div>
);

export default SocialMedia;
