import SvaedCollection from "../pages/SavedCollection";

export function getItem(){
      
    return JSON.parse(localStorage.getItem('collection')) || []

}


export function setItem(data){

    const getCollection = JSON.parse(localStorage.getItem('collection')) || []
    const alreadyExist= getCollection.find((item)=>(item.id===data.id))

    if(!alreadyExist){
        getCollection.push(data)
    }
    const setCollection = localStorage.setItem('collection',JSON.stringify(getCollection))
    
}



