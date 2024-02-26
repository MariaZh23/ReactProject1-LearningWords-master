import ReactDOM from 'react-dom';
import './ModalDelete.scss'
import { useContext } from 'react';
import { Context } from '../../Context/Context';

export default function ModalDelete({onClose, wordId}) {
    const { deleteWord } = useContext(Context);

    const handleDeleteWord = () => {
        deleteWord(wordId);
        console.log('Deleting word', wordId);
        onClose();
    };

    return ReactDOM.createPortal(
        <div className='modal-overlay'>
            <div className='modal-content'>
                <p>Точно хотите удалить полностью строку?</p>
                <button onClick={handleDeleteWord}>Да, удалить</button>
                <button onClick={onClose}>Нет, оставить</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}
