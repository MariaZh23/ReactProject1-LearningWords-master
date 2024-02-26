class GET {
    static async getWordsServer(){
        try {
            const resp = await fetch('/api/words');
            if (resp.ok) {
                return await resp.json();
            } else {
                throw new Error("Ошибка загрузки данных с сервера");
            }
        } catch(e) {
            console.error(e);
        }
    }
    static async deleteWord(wordId) {
        try {
            const resp = await fetch(`/api/words/${wordId}/delete`, {
                method: 'POST'
            });
            if (resp.ok) {
                return await resp.json();
            } else {
                throw new Error("Ошибка удаления слова на сервере");
            }
        } catch (e) {
            console.error(e);
        }
    }
    static async updateWord(updatedWord) {
        try {
            const resp = await fetch(`/api/words/${updatedWord.id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedWord),
            });
            const data = await resp.json();
            console.log('Ответ сервера при обновлении слова:', data);
            if (!resp.ok){
                throw new Error(
                    data.message || 'Ошибка при обновлении слова на сервере'
                );
            }
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении слова:', error);
            return null;
        }
    }
}

export default GET;