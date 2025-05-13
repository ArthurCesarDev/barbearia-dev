'use client';

import React, { useState } from 'react';
import styles from '../cadastro/cadastro.module.css'; // Reutilizamos os estilos do login
import Image from 'next/image';
import logoImage from '../../../public/sua-logo.png.png'; // Importe sua imagem (ajuste o caminho)
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    console.log('Email:', email, 'Senha:', password, 'Confirmar Senha:', confirmPassword);
    // Aqui você implementaria a lógica de cadastro
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
        <h5 className={styles.title}>Cadastre-se</h5>
        <p className={styles.subtitle}>Crie sua conta para começar.</p>

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
          {/* Novo campo de confirmação de senha */}
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>

        
          <div className={styles.signUp}>
          Já tem uma conta? <a href="/login" className={styles.link}>Faça login</a>
        </div>

        <div className={styles.securedBy}>
          <strong>Denvolvimento Sistema Barbearia Devs!</strong>
        </div>
      </div>
    </div>
  );
}