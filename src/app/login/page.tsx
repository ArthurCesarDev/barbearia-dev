'use client';

import React, { useState } from 'react';
import styles from './login.module.css';
import Image from 'next/image'; // Importe o componente Image do Next.js
import logoImage from '../../../public/sua-logo.png.png'; // Importe sua imagem (ajuste o caminho)
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Novo estado para a senha

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email, 'Senha:', password);
    // Aqui você implementaria a lógica de login com email e senha
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image
            src={logoImage}
            alt="Logo da Barbearia"
            width={120}
            height={50}
            priority
          />
        </div>
        <h5 className={styles.title}>Login</h5>
        <p className={styles.subtitle}>Bem-vindo! Faça login para prosseguir.</p>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>
            <FaGithub style={{ marginRight: 8 }} /> GitHub
          </button>
          <button className={styles.socialButton}>
            <FcGoogle style={{ marginRight: 8 }} /> Google
          </button>
        </div>
        <div className={styles.separator}>ou</div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Usuário</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Digite seu endereço de e-mail"
              required
            />
          </div>
          {/* Novo campo de senha */}
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>

        <button className={styles.secondaryButton}>
          Esqueceu sua senha?
        </button>

        <div className={styles.signUp}>
          Não tem uma conta? <a href="/cadastro" className={styles.link}>Cadastre-se</a>
        </div>

        <div className={styles.securedBy}>
          <strong>Denvolvimento Sistema Barbearia Devs!</strong>
        </div>
      </div>
    </div>
  );
}