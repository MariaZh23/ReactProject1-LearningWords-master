import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchWords,
	selectWords,
	deleteWord,
	updateWord,
} from '../../wordsSlice';
import './Table.scss';
export default function Table() {
	const wordsData = useSelector(selectWords);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWords());
	}, []);

	const [editedWord, setEditedWord] = useState({
		english: '',
		transcription: '',
		russian: '',
		tags: '',
	});
	const [editingRow, setEditingRow] = useState(null);
	const editBtn = (id) => {
		const wordToEdit = wordsData.find((word) => word.id === id);
		setEditingRow(id);
		setEditedWord(wordToEdit);
	};
	const saveBtn = () => {
		let errors = false;
		if (editedWord.english.trim() === '') {
			document.getElementsByName('english')[0].classList.add('invalid-input');
			errors = true;
		} else {
			document
				.getElementsByName('english')[0]
				.classList.remove('invalid-input');
		}
		if (editedWord.transcription.trim() === '') {
			document
				.getElementsByName('transcription')[0]
				.classList.add('invalid-input');
			errors = true;
		} else {
			document
				.getElementsByName('transcription')[0]
				.classList.remove('invalid-input');
		}
		if (editedWord.russian.trim() === '') {
			document.getElementsByName('russian')[0].classList.add('invalid-input');
			errors = true;
		} else {
			document
				.getElementsByName('russian')[0]
				.classList.remove('invalid-input');
		}
		if (errors) {
			alert('Ошибка: Пожалуйста, заполните все поля');
		} else {
			console.log('Слово успешно отредактировано:', editedWord);
			dispatch(updateWord(editedWord));
			setEditingRow(null);
		}
	};
	const deleteBtn = (id) => {
		dispatch(deleteWord(id));
	};

	const cancelBtn = () => {
		setEditingRow(null);
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedWord((prevWord) => ({
			...prevWord,
			[name]: value,
		}));
		e.target.classList.remove('invalid-input');
	};
	return (
		<div className="table-container">
			<table className="table-body">
				<thead className="table-head">
					<tr className="table-head-items">
						<th className="table-col-number">Номер</th>
						<th className="table-col-english">Слово</th>
						<th className="table-col-transcription">Транскрипция</th>
						<th className="table-col-russian">Перевод</th>
						<th className="table-col-tags">Тема</th>
						<th className="table-col-actions">Действия</th>
					</tr>
				</thead>
				<tbody>
					{wordsData.map((word, index) => (
						<tr key={word.id}>
							<td className="table-col-number">{index + 1}</td>
							<td className="table-col-english">
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
							<td className="table-col-transcription">
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
							<td className="table-col-russian">
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
							<td className="table-col-tags">
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
									<div className="editing-buttons">
										<button
											className="save-btn"
											onClick={saveBtn}
										></button>
										<button
											className="cancel-btn"
											onClick={cancelBtn}
										></button>
									</div>
								) : (
									<div className="editing-buttons">
										<button
											className="edit-btn"
											onClick={() => editBtn(word.id)}
										></button>
										<button
											className="delete-btn"
											onClick={() => deleteBtn(word.id)}
										></button>
									</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
