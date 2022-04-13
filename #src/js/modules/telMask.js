import IMask from "imask";

export const telMask = () => {
    const inp = document.getElementById('telInput');

    if(inp) {
        const el = new IMask(inp, {
            mask: '+{7} (000) 000-00-00'
        });
    }
    
};