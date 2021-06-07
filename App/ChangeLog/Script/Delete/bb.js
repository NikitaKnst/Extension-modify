
chrome.storage.sync.set({ searchtxt });/*Дали его локальным королём*/

chrome.storage.sync.get("searchtxt", ({ searchtxt }) => {/*Выкинули короля с трона*/
    document.getElementById("searchtxt").value=searchtxt   /*Снова на трон*/ /*Не рб не сохраняет прошлое*/
});