// store.js
import { reactive } from 'vue';

export const store = reactive({
  username: null,
  updateName(name) {
    this.username = name;
  },
  hasLogin: false,
  updateHasLogin(value) {
    this.hasLogin = value;
  },
  sData: {},
  updateSData(data) {
    const mergedData = {
      ...data,
      ...this.sData
    }
    this.sData = mergedData;
  },
  getSData(){
    return this.sData
  }
})