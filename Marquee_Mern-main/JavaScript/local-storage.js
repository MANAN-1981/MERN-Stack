const save = (k,v)=>localStorage.setItem(k,JSON.stringify(v));
const load = k=>JSON.parse(localStorage.getItem(k));
