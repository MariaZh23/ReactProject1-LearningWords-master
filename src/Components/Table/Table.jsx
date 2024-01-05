import './Table.scss'
import wordsData from '../words-data.json';
import { useState } from 'react';

export default function Table() {
    const [editingRow, setEditingRow] = useState(null);
    const [editedWord, setEditedWord] = useState({
        english: "",
        transcription: "",
        russian: "",
        tags: "",
        comments: ""
    });
    const editBtn = (id) => {
        const wordToEdit = wordsData.find((word) => word.id === id);
        setEditingRow(id);
        setEditedWord(wordToEdit);
    };
    const saveBtn = () => {
        setEditingRow(null);
    };
    const cancelBtn = () => {
        setEditingRow(null);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedWord((prevWord) => ({
        ...prevWord,
        [name]: value
        }));
    };
    return (
    <div className='table-container'>
    <table className='table-body'>
    <thead className='table-head'>
        <tr className='table-head-items'>
            <th className='table-col-number'>Номер</th>
            <th className='table-col-english'>Слово</th>
            <th className='table-col-transcription'>Транскрипция</th>
            <th className='table-col-russian'>Перевод</th>
            <th className='table-col-tags'>Тема</th>
            <th className='table-col-comments'>Комментарии</th>
            <th className='table-col-actions'>Действия</th> 
        </tr>
    </thead>
    <tbody>
        {wordsData.map((word, index) => (
            <tr key={word.id}>
                <td className='table-col-number'>{index + 1}</td>
                <td className='table-col-english'> {editingRow === word.id ? (
                    <input
                        type="text"
                        name="english"
                        value={editedWord.english}
                        onChange={handleInputChange}/>
                ) : (word.english)}
                </td>
                <td className='table-col-transcription'>
                    {editingRow === word.id ? (
                    <input
                        type="text"
                        name="transcription"
                        value={editedWord.transcription}
                        onChange={handleInputChange}/>
                ) : (word.transcription)}
                </td>
                <td className='table-col-russian'>
                    {editingRow === word.id ? (
                    <input
                        type="text"
                        name="russian"
                        value={editedWord.russian}
                        onChange={handleInputChange}/>
                ) : (word.russian)}
                </td>
                <td className='table-col-tags'>{
                    editingRow === word.id ? (
                    <input
                        type="text"
                        name="tags"
                        value={editedWord.tags}
                        onChange={handleInputChange}/>
                ) : (word.tags)}
                </td>
                <td className='table-col-comments'>{
                    editingRow === word.id ? (
                    <input
                        type="text"
                        name="comments"
                        value={editedWord.comments}
                        onChange={handleInputChange}/>
                ) : (word.comments)}
                </td>
                <td>
                {editingRow === word.id ? (
                    <div className='editing-buttons'>
                    <button className='save-btn' onClick={saveBtn}></button>
                    <button className='cancel-btn' onClick={cancelBtn}></button>
                    </div>
                ) : (
                    <div className='editing-buttons'>
                        <button className='edit-btn' onClick={() => editBtn (word.id)}></button>
                        <button className='delete-btn'></button>
                    </div>
                )}
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
    )
}
