import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

export const showToaster=async(msg:string)=> {
  await Toast.show({
    text: msg
  });
}