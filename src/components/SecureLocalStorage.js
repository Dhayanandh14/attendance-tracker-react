import React from 'react'
import * as  SecureLS from 'secure-ls';

var ls = new SecureLS();
class SecureLocalStorage {
  setLocalItem(key,item){
    ls.set(key, item); // set key1
  }
  getLocalItem(key){
    return ls.get(key);
  }
  removeLocalItem(key){
    ls.remove(key)
  }
}
export default new SecureLocalStorage();
