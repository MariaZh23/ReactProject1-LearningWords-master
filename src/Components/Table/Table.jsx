import './Table.scss'
import { Context } from '../../Context/Context';
import { useState, useContext } from 'react';
import TableRow from '../TableRow/TableRow';

export default function Table() {
const {saveWords, setDataServer, deleteWord,  dataServer }= useContext(Context);
const [editedWord, setEditedWord] = useState({});
const [commentValue, setCommentValue] = useState("");
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
setEditedWord((prevWord) => ({
...prevWord,
[name]: value,
}));
e.target.classList.remove('invalid-input');
}
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
commentValue={commentValue}
setCommentValue={setCommentValue}
/>
))}
</tbody>
</table>
<button onClick={() => setShowRows(showRows + 10)}>Показать еще</button>
</div>
)
}
