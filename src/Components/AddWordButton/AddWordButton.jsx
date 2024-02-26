import AddWordForm from "../AddWordForm/AddWordForm";
import React, { useState } from 'react';

export default function AddWordButton() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
      setShowForm(!showForm);
  }

  return (
      <div>
          <button onClick={handleShowForm}>Добавить слово</button>
          {showForm && <AddWordForm />}
      </div>
  );
}
