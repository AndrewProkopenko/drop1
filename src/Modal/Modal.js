import React from 'react'; 

import ModalFrame from '../_Frames/ModalFrame' 

function Modal(props) {
   
    const closeStyle = {
        position: 'absolute',
        right: 10, 
        top: -15, 
        zIndex: 100
    }
    return (
        <div
            className={`modal fade show modal_theme_1  ${props.className}`}
            id="modal-example-1"
            role="dialog"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="position-relative h-100"> 
                <div className={'modal-background'} onClick={props.handleShowModal} />
                
                <div className="modal-dialog modal__dialog modal-dialog-centered my-auto ">
                    <div className="modal-content modal__content ">
                        <div className="modal__header">
                            <button
                                className="modal__close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={props.handleShowModal}
                                style={closeStyle}
                            >
                                <span className="modal__close-btn" aria-hidden="true">×</span>
                            </button>
                        </div>
                        <ModalFrame/>
                        {/* <Iframe url="ModalFrame.html"
                            width="450px"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                        /> */}
                        {/* <div className="modal__body">
                            <div className="form-section form-section_theme_9 modal__form-section">
                                <h3 className="form-section__title">Модальное окно тема 1</h3>
                                <div className="form-section__body">
                                    <form className="form form_theme_9 row" method="post" action="/"><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="name" type="text" placeholder="ФИО" /></span><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="phone" type="text" placeholder="Ваш телефон" /></span><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="e-mail" type="text" placeholder="E-mail" /></span><span className="textfield textfield_theme_6 col-12 form__item"><textarea className="textfield__control" placeholder="Комментарий" defaultValue={""} /></span>
                                        <div className="form__btn col-12">
                                            <button className="button button_theme_11 col-12" type="submit">

                                                <span className="button__text">Получить консультацию</span>
                                                <svg className="icon icon_right-arrow button__icon" role="img">
                                                    <use href={sprite + "#right-arrow"} />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="form-section__policy">Нажимая на кнопку "Получить консультацию" - вы даете согласие на oбработку ваших<a className="form-section__link-policy" href="http://library.vctest.tmweb.ru/#">персональных данных.</a></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal