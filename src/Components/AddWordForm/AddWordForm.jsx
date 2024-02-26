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
                <input type="text" value={english} onChange={(e) => setWord(e.target.value)} placeholder="Слово" />
                <input type="text" value={transcription} onChange={(e) => setTranscription(e.target.value)} placeholder="Транскрипция" />
                <input type="text" value={russian} onChange={(e) => setTranslation(e.target.value)} placeholder="Перевод" />
                <input type="text" value={tags} onChange={(e) => setTheme(e.target.value)} placeholder="Тема" />
                <button type="submit">Сохранить</button>
            </form>
        )}
        </>
    );
};
