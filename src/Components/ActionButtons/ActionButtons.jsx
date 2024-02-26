import './ActionButtons.scss'
import React, { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';
const ActionButtons = ({ saveBtn, cancelBtn, editBtn, deleteBtn, wordId, handleDeleteActivation }) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleDeleteConfirmation = () => {
        setShowModal(true);
        handleDeleteActivation(true);
    };

    const handleConfirmDelete = () => {
        deleteBtn(wordId);
        setShowModal(false);
        handleDeleteActivation(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        handleDeleteActivation(false);
    };

    return (
        <div className='editing-buttons'>
            {saveBtn ? (
            <>
            <button className='save-btn' onClick={saveBtn}></button>
            <button className='cancel-btn' onClick={cancelBtn}></button>
            </>
            ) : (
            <>
            <button className='edit-btn' onClick={() => editBtn(wordId)}></button>
            <button className='delete-btn' onClick={handleDeleteConfirmation}></button>
            </>
            )}
            {showModal && (
                <ModalDelete wordId={wordId} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
            )}
        </div>
    );
};

export default ActionButtons;
