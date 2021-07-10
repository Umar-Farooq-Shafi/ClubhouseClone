import React from 'react';

import style from '../style/dailyInfoCard.module.css';

export default function DailyInfoCard() {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch('data/dailyCard.json')
            .then(r => r.json())
            .then(d => {
                setData(d);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div className={style.dailyCard}>
            {data?.map((item, i) => (<div key={i}>
                <span>{item.time}</span>
                <div>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                </div>
            </div>))}
        </div>
    )
}
