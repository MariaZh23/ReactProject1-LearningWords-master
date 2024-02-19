class GET {
static async getWordsServer(){
try {
const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
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
const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${wordId}/delete`, {
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
const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.wordId}/update`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(updatedWord),
});
if (resp.ok) {
const updatedWordResponse = await resp.json();
console.log("Слово успешно обновлено на сервере:", updatedWordResponse);
return updatedWordResponse;
} else {
throw new Error("Ошибка при обновлении слова на сервере");
}
} catch (error) {
console.error(error.message);
return null;
}
}
}

export default GET;