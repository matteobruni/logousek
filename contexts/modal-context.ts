import React from "react";
export type showModalModalInfoParam = {
    header: any,
    content?: any,
    closeDisabled?: boolean,
    onOkClick?: () => void,
    onStornoClick?: () => void,
}

type ModalContextType = {
    showModal: (param: showModalModalInfoParam) => void;
    closeModal: () => void;
}
    | undefined;
export default React.createContext<ModalContextType>(undefined);
