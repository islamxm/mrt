import IMask from "imask";

export const telMask = () => {

    const el = new IMask(document.getElementById('telInput'), {
        mask: '+{7} (000) 000-00-00'
    });
};