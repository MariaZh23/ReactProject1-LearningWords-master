import './Table.scss'
import { Context } from '../../Context/Context';
import { useState, useContext } from 'react';
import TableRow from '../TableRow/TableRow';
import AddWordButton from '../AddWordButton/AddWordButton';
export default function Table() {
    const {saveWords, setDataServer, dataServer }= useContext(Context);
    const [editedWord, setEditedWord] = useState({});
    const [editingRow, setEditingRow] = useState(null);
    const [showRows, setShowRows] = useState(10);

    const editBtn = (id) => {
        const wordToEdit = dataServer.find((word) => word.id === id);
        if (wordToEdit) {
            setEditedWord(wordToEdit);
            setEditingRow(id);
        }
    };

    const saveBtn = () => {
        const validateField = (fieldName, fieldValue) => {
            if (fieldValue.trim() === "") {
                document.getElementsByName(fieldName)[0].classList.add('invalid-input');
                errors = true;
            } else {
                document.getElementsByName(fieldName)[0].classList.remove('invalid-input');
            }
        };
        let errors = false;
        errors = validateField("english", editedWord.english) || errors;
        errors = validateField("transcription", editedWord.transcription) || errors;
        errors = validateField("russian", editedWord.russian) || errors;
        errors = validateField("tags", editedWord.tags) || errors;
        if (errors) {
            alert("Ошибка: Пожалуйста, заполните все поля");
        } else {
            console.log("Слово успешно отредактировано:", editedWord);
            saveWords(editedWord); 
            setDataServer(prevData => {
                const updatedData = prevData.map(word => (word.id === editedWord.id ? editedWord : word));
                return updatedData;
            });
            setEditingRow(null);
        }
    };

    const cancelBtn = () => {
        setEditingRow(null);
    };

    const handleInputChange = (e) => {
        if (e.target) {
            const { name, value } = e.target;
            if (name === 'english') {
                if (!/^[a-zA-Z]+$/.test(value)) {
                    e.target.value = value.replace(/[^a-zA-Z]/g, ''); 
                    e.target.classList.add('invalid-input');
                    alert('Пожалуйста, используйте латиницу');
                } else {
                    e.target.classList.remove('invalid-input');
                }
            }
            if (name === 'russian') {
                if (!/^[а-яА-Я]+$/.test(value)) {
                    e.target.value = value.replace(/[^а-яА-Я]/g, '');
                    e.target.classList.add('invalid-input');
                    alert('Пожалуйста, используйте кириллицу');
                } else {
                    e.target.classList.remove('invalid-input');
                }
            }
            setEditedWord((prevWord) => ({
                ...prevWord,
                [name]: e.target.value,
            }));
        }
    };

return (

    <div className='table-container'>
        <AddWordButton/>
        <div id='modal-root'></div>
        <table className='table-body'>
            <thead className='table-head'>
                <tr className='table-head-items'>
                    <th className='table-col-number'>Номер</th>
                    <th className='table-col-english'>Слово</th>
                    <th className='table-col-transcription'>Транскрипция</th>
                    <th className='table-col-russian'>Перевод</th>
                    <th className='table-col-tags'>Тема</th>
                    <th className='table-col-actions'>Действия</th> 
                </tr>            
                </thead>
            <tbody>
                {dataServer.slice(0, showRows).map((word, index) => (
                    <TableRow
                        key={word.id}
                        word={word}
                        index={index}
                        editingRow={editingRow}
                        editedWord={editedWord}
                        setEditedWord={setEditedWord}
                        editBtn={editBtn}
                        handleInputChange={handleInputChange}
                        saveBtn={saveBtn}
                        cancelBtn={cancelBtn}
                    />
                ))}
            </tbody>
            </table>
            <div>
            <button onClick={() => setShowRows(showRows + 10)}>Показать еще</button>
            <button onClick={() => setShowRows(showRows - 10)}>Убрать</button>
            </div>
        </div>
    )
}
