import './ActionButtons.scss'
const ActionButtons = ({ saveBtn, cancelBtn, editBtn, wordId }) => {
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
<button className='delete-btn'></button>
</>
)}
</div>
);
};
export default ActionButtons;
