import React from 'react';
import { Link } from 'react-router-dom';

import Style from '../style/welcome.module.css';

export default function Welcome() {
    return (
        <div className={Style.WelcomeContainer}>
            <h1>Welcome</h1>

            <div className={Style.WelcomeInfo}>
                <p>
                    We're working hard to get clubhouse get ready for everyone!
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sit natus illo perspiciatis possimus dolore non inventore culpa molestias vel!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque officia quos aliquid libero, eaque quisquam temporibus explicabo maiores impedit et rerum quibusdam saepe vero inventore. Minima pariatur quasi debitis, blanditiis officiis ullam quo voluptas totam harum? Impedit at odio ipsam aspernatur ducimus libero, cum nulla amet! Nesciunt, voluptas tempora.
                </p>
                <p>Paul, Rohan & the clubhouse team</p>
            </div>
            <div className={Style.actionBtn}>
                <Link
                    to="/invite" 
                    className="primaryBtn d-flex align-items-center" 
                    
                >Get your profile</Link>
                <Link to="/invite">Have an invite text? Sign in</Link>
            </div>
        </div>
    )
}
