
import React from 'react'

const frame = () => (
    <div className="modal__body">
        <div className="form-section form-section_theme_9 modal__form-section">
            <h3 className="form-section__title">Модальное окно тема 1</h3>
            <div className="form-section__body">
                <form className="form form_theme_9 row" method="post" action="/"><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="name" type="text" placeholder="ФИО" /></span><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="phone" type="text" placeholder="Ваш телефон" /></span><span className="textfield textfield_theme_6 col-12 form__item"><input className="textfield__control" name="e-mail" type="text" placeholder="E-mail" /></span><span className="textfield textfield_theme_6 col-12 form__item"><textarea className="textfield__control" placeholder="Комментарий" defaultValue={""} /></span>
                    <div className="form__btn col-12">
                        <button className="button button_theme_11 col-12" type="submit">

                            <span className="button__text">Получить консультацию</span>
                            <svg className="icon icon_right-arrow button__icon" role="img" viewBox="0 0 129 129">
                                
                                <symbol id="right-arrow" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/>
                                </symbol>
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="form-section__policy">Нажимая на кнопку "Получить консультацию" - вы даете согласие на oбработку ваших<a className="form-section__link-policy" href="http://library.vctest.tmweb.ru/#">персональных данных.</a></div>
            </div>
        </div>
    </div>
)
export default frame