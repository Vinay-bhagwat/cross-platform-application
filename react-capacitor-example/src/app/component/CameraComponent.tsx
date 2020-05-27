import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

export const takePicture = async () => {
    return await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });

}