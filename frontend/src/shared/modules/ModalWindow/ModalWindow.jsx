import React from 'react'
import cl from './ModalWindow.module.scss'

function ModalWindow({children, visible, setVisible}) {

    const rootClasses = [cl.modalWindow]
    if(visible){
        rootClasses.push(cl.active);
    }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.modalWindow__content} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default ModalWindow