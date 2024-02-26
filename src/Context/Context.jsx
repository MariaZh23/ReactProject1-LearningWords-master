import { createContext, useState, useEffect } from "react"
import GET from "../Services/GETAPI";
export const Context=createContext(); 

export  function ContextComponent({children}) {
    const [dataServer, setDataServer]= useState(false);
    const value={dataServer, saveWords, setDataServer, deleteWord, addNewWord};
    useEffect(()=>{
        setDataServer();
        getWordsServer();
    }, []);

    async function getWordsServer() {
        const wordsServer = await GET.getWordsServer();
        setDataServer (wordsServer);
    }

    async function deleteWord(wordId) {
        const updatedData = dataServer.filter(word => word.id !== wordId);
        setDataServer(updatedData);
        await GET.deleteWord(wordId);
    }

    async function addNewWord(newWord) {
        try {
            const addedWord = await GET.addWord(newWord);
            setDataServer([...dataServer, addedWord]);
        } catch (error) {
            console.error('Ошибка при добавлении нового слова:', error);
        }
    }

    async function saveWords(wordToUpdate) {
        const updatedData = dataServer.map(word => {
        if (word.id === wordToUpdate.id) {
            return wordToUpdate;
        }
        return word;
        });
        setDataServer(updatedData);
        await GET.updateWord(wordToUpdate);
    }

    if (!dataServer){
        return <h1>loading...</h1>
    }
    
    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    )
}
