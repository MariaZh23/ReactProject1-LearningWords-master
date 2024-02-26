import React, { useState } from 'react';
import ActionButtons from '../ActionButtons/ActionButtons';
import './TableRow.scss';
const TableRow = ({ word, index, editingRow, editedWord, editBtn, handleInputChange, saveBtn, cancelBtn, deleteBtn }) => {
    const [isActiveDelete, setIsActiveDelete] = useState(false);

    const handleDeleteActivation = (isActive) => {
        setIsActiveDelete(isActive);
    };

    return (
        <tr key={word.id} className={isActiveDelete ? 'delete-active' : ''}>
            <td className='table-col-number'>{index + 1}</td>
            <td className='table-col-english'> 
                {editingRow === word.id ? (
                    <input
                    type="text"
                    name="english"
                    value={editedWord.english}
                    onChange={handleInputChange}
                    />
                ) : (
                word.english
                )}
            </td>
            <td className='table-col-transcription'>
                {editingRow === word.id ? (
                    <input
                    type="text"
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={handleInputChange}
                    />
                ) : (
                word.transcription
                )}
            </td>
            <td className='table-col-russian'>
                {editingRow === word.id ? (
                    <input
                    type="text"
                    name="russian"
                    value={editedWord.russian}
                    onChange={handleInputChange}
                    />
                ) : (
                word.russian
                )}
            </td>
            <td className='table-col-tags'>
                {editingRow === word.id ? (
                    <input
                    type="text"
                    name="tags"
                    value={editedWord.tags}
                    onChange={handleInputChange}
                    />
                ) : (
                word.tags
                )}
            </td>
            <td>
                {editingRow === word.id ? (
                    <ActionButtons saveBtn={saveBtn} cancelBtn={cancelBtn} />
                    ) : (
                    <ActionButtons editBtn={editBtn} wordId={word.id} deleteBtn={deleteBtn} handleDeleteActivation={handleDeleteActivation} />
                )}
            </td>
        </tr>
    );
};
export default TableRow;