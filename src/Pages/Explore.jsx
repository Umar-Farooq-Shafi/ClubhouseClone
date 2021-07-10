import React from 'react';

import { DownOutlined, FireOutlined } from '@ant-design/icons';
import { Input } from 'antd'

import SubHeader from '../Components/SubHeader';

import style from '../style/explore.module.css';

export default function Explore() {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch('data/Explore.json')
            .then(r => r.json())
            .then(d => {
                setData(d);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="EXPLORE" />
                <Input style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '0.8em',
                    padding: '0.3em 1em',
                    border: 'none',
                    boxShadow: 'none'
                }}
                size="large"
                placeholder="Find peoples and clubs."
                prefix={<img src="/images/search.png" alt="search-png" width="15px" />}>
                </Input>
            </div>
            <h6>People to follow</h6>
            <div className={style.peopleContainer}>
                {data?.people.map((p, i) => (
                    <div key={i}>
                        <div className="d-flex align-content-center">
                            <img src="/images/user-img.jpg" alt="usr-img" />
                            <div className="ml-2">
                                <h5>{p.title}</h5>
                                <p>{p.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more <DownOutlined />
                </button>
                <h2>DUMMY</h2>
            </div>
            <h6>Find conversation about</h6>
            <div className="row mx-0">
                {data?.conversation.map((c, i) => (
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationCard}>
                            <h6>
                                <FireOutlined />
                                {c.title}    
                            </h6>
                            <p>{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
