import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';

import style from '../style/home.module.css';

import DailyInfoCard from '../Components/DailyInfoCard';
import Header from '../Components/Header'
import RoomInfoCard from '../Components/RoomInfoCard';
import BottomSheet from '../Components/BottomSheet';

export default function Home() {
    const [data, setData] = React.useState();
    const [newRoomData, setNewRoomData] = React.useState();
    const [itemsVisible, setItemsVisible] = React.useState(true);
    const [sheetVisible, setSheetVisible] = React.useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = React.useState(false);
    const [loaderVisible, setLoaderVisible] = React.useState(false);
    const [cardId, setCardId] = React.useState(1);

    React.useEffect(() => {
        fetch('data/roomCard.json')
            .then(r => r.json())
            .then(d => {
                setData(d);
            })
            .catch(e => console.log(e));
        fetch('data/newRoom.json')
            .then(r => r.json())
            .then(d => {
                setNewRoomData(d);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <React.Fragment>
            {loaderVisible ? (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src="/images/loader.gif" alt="loader-gif" />
                </div>
            ) : ("")}
            <Header />
            <div className={style.homeContainer}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.actionBtn}>
                <button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus className="mr-2" /> Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet sheetTitle='start room'
                setSheetVisible={(item) => setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data?.find(i => i.id === cardId)}
                setItemsVisible={(item) => setItemsVisible(item)}
                setSheetCreateRoom={(item) => {
                    setLoaderVisible(true);
                    setTimeout(() => {
                        setSheetCreateRoom(item);
                        setLoaderVisible(false);
                    }, 1000);
                }}
            />
            <BottomSheet sheetTitle='new room'
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            />
        </React.Fragment>
    )
}
