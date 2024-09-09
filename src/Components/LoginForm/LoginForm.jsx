import React from 'react';
import {Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import logo from './Logo (2).png';

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <img className={styles.img} src={logo} alt='Logo do site' />
        <div className={styles.caixa}>
          <div className={styles.apresentacao}>
            <p>Olá,</p>
            <p>seja bem-vindo(a) de volta!</p>
          </div>
          <div className={styles.inputBox}> {/* Usando styles.inputBox */}
            <input type="text" placeholder='Usuário' required className={styles.input} /> {/* Aqui, use styles.input */}
          </div>
          <div className={styles.inputBox}> {/* Usando styles.inputBox */}
            <input type="password" placeholder='Senha' required className={styles.input} /> {/* Aqui, use styles.input */}
          </div>
          <button type="button" className={styles.button}>ENTRAR</button> {/* Aqui, use styles.button */}
          <div className={styles.registrar}>
            <Link to="/register">CADASTRE-SE</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;