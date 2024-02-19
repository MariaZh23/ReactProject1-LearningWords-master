import { createContext, useState, useEffect } from "react"
import GET from "../Services/GETAPI";

export const Context=createContext(); 
export  function ContextComponent({children}) {
const [dataServer, setDataServer]= useState(false);
const value={dataServer, saveWords, setDataServer, deleteWord};
useEffect(()=>{
getWordsServer();
}, []);

async function getWordsServer() {
const wordsServer = await GET.getWordsServer();
setDataServer (wordsServer);
}

async function deleteWord(wordId) {
await GET.deleteWord(wordId);
getWordsServer();
}

async function saveWords(wordToUpdate) {
await GET.updateWord(wordToUpdate);
getWordsServer();
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
