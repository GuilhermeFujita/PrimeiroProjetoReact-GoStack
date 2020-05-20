import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/19476724?s=400&u=92aa4e484ed429c63b03fb2af389bc5a94aed945&v=4"
            alt="Guilherme Fujita"
          />
          <div>
            <strong>GuilhermeFujita/Laravel-Casa-Codigo</strong>
            <p>
              Sistema desenvolvido em Laravel de acordo com o livro da Casa do
              Código
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
