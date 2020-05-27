import { Modals } from "@capacitor/core";


const alertHandler = (title: string, message: string) => Modals.alert({ title, message });

const confirmHandler = (cancelButtonTitle: string, message: string, okButtonTitle: string, title: string) => Modals.confirm({ cancelButtonTitle, message, okButtonTitle, title })

const promptHandler = (cancelButtonTitle: string, inputPlaceholder: string, inputText: string, message: string, okButtonTitle: string, title: string) => Modals.prompt({ cancelButtonTitle, inputPlaceholder, inputText, message, okButtonTitle, title })


export const ModalPopup = {
    alertHandler,
    confirmHandler,
    promptHandler
}







