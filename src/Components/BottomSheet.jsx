import React from 'react'

import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

import style from '../style/bottomSheet.module.css';

import NewRoom from './BottomSheet/NewRoom';
import StartRoom from './BottomSheet/StartRoom';

export default function BottomSheet({
    sheetVisible, setSheetVisible, setItemsVisible, sheetTitle,
    setSheetCreateRoom, cardDetail
}) {
    return (
        <SwipeableBottomSheet
            open={sheetVisible}
            onChange={() => {
                setSheetVisible(!sheetVisible);
                setItemsVisible(true);
            }}
            fullScreen={sheetTitle === 'room detail'}
        >
            <div
                className={style.bottomSheetContainer}
                style={{ backgroundColor: sheetTitle === 'profile' ? 'transparent' : '' }}
            >
                {sheetTitle === 'new room' ? (
                    <NewRoom
                        cardDetail={cardDetail}
                        setSheetVisible={(item) => {
                            setSheetVisible(item);
                            setItemsVisible(true);
                        }}
                    />
                ) : sheetTitle === 'start room' ? (
                    <StartRoom
                        setSheetCreateRoom={setSheetCreateRoom}
                        setSheetVisible={(item) => {
                            setSheetVisible(item);
                            setItemsVisible(true);
                        }}
                    />
                ) :
                    (
                        ""
                    )}
            </div>
        </SwipeableBottomSheet>
    )
}
