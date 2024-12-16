


export const SetLoacalStorage = (name,value)=>{
    localStorage.setItem(name,value)
 }

 export const GetLoacalStorage = (name)=>{
  const test=localStorage.getItem(name)
   return test
   
 }

 export const RemoveLoacalStorage = (name)=>{
     localStorage.remove(name);
  }