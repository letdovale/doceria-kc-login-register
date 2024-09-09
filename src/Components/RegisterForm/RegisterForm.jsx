import React from 'react';
import styles from './RegisterForm.module.css'; // Importa o CSS module
import logo from './Logo (2).png';
import InputMask from 'react-input-mask';

const RegisterForm = () => {
    return (
        <div className={styles.wrapper}>
            <form>
                <img className={styles.img} src={logo} alt='Logo do site' />
                <div className={styles.caixa}>
                    <div className={styles.apresentacao}>
                        <p>Vamos criar sua conta</p>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder='Nome' required />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="date" placeholder='Data de Nascimento' required />
                    </div>
                    <div className={styles.inputBox}>
                        <InputMask mask="(99) 99999-9999" placeholder='Celular' required />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder='Usuário' required />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder='Senha' required />
                    </div>
                    <button type="button" className={styles.button}>CADASTRAR</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;