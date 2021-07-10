import React from 'react'

import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';

import style from '../style/roomInfoCard.module.css';

export default function RoomInfoCard() {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch('data/roomCard.json')
            .then(r => r.json())
            .then(d => {
                setData(d);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
           {data?.map((item, i) => (
               <div key={i}>
                   <div>
                        <div className={style.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={style.roomMembers}>
                                <div>
                                    <img src="/images/user-img.jpg" alt="user-img" />
                                    <img src="/images/user-img2.jpg" alt="user-img" />
                                </div>
                                <div>
                                    {item.members.map((mem, ind) => (
                                        <div key={ind}>
                                        <p>
                                            {mem.first_name} {mem.last_name} <BsChatDots />
                                        </p>
                                        <pre className="d-flex align-items-center">
                                            <span className="mr-2">
                                                1.8
                                            </span>
                                            <BsFillPersonFill />
                                            <span className="mx-2"></span>
                                            <span className="mr-2">5</span>
                                            <BsChatDotsFill />
                                        </pre>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           ))} 
        </div>
    )
}
