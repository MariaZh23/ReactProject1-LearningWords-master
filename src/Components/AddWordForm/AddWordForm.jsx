import { Context } from '../../Context/Context';
import { useState, useContext } from 'react';
export default function AddWordForm() {
    const {addNewWord}= useContext(Context);
    const [english, setWord] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setTranslation] = useState('');
    const [tags, setTheme] = useState('');
    const [success, setSuccess] = useState(false);
    
    const resetForm = () => {
        setWord('');
        setTranscription('');
        setTranslation('');
        setTheme('');
    };

    const handleEnglishInput = (e) => {
        if (!/^[a-zA-Z ]+$/.test(e.target.value)) {
            alert('Пожалуйста, используйте латиницу для поля "Слово"');
        } else {
            setWord(e.target.value);
        }
    };

    const handleRussianInput = (e) => {
        if (!/^[а-яА-Я ]+$/.test(e.target.value)) {
            alert('Пожалуйста, используйте кириллицу для поля "Перевод"');
        } else {
            setTranslation(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWord = {
            english: english,
            transcription: transcription,
            russian: russian,
            tags: tags
        };
        if (english.trim() === '' || russian.trim() === '') {
            alert('Заполните обязательные поля: Слово и Перевод');
            return;
        }
        try {
            await addNewWord(newWord);
            resetForm();
            setSuccess(true);
        } catch (error) {
            console.error('Ошибка при добавлении нового слова:', error);
        }
    }

    return (
        <>
        {!success && (
            <form onSubmit={handleSubmit}>
                <input type="text" value={english} onChange={handleEnglishInput} placeholder="Слово" />
                    <input type="text" value={transcription} onChange={(e) => setTranscription(e.target.value)} placeholder="Транскрипция" />
                    <input type="text" value={russian} onChange={handleRussianInput} placeholder="Перевод" />
                    <input type="text" value={tags} onChange={(e) => setTheme(e.target.value)} placeholder="Тема" />
                <button type="submit">Сохранить</button>
            </form>
        )}
        </>
    );
};
