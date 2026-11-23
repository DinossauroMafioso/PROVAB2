import { useEffect, useState } from "react";
import { FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';


export function App() {
  const [livros, setLivros] = useState<Livros[]>([]);
  useEffect(() => {
    setLivros(MockLivros);
  }, []);

type Livros = {
  id: string;
  title: string;
  author: string;

  }
  
const MockLivros: Livros[] = [
  { id: '1', title: 'Café Especial', author: 'João da Silva' },
  { id: '2', title: 'Moedor Manual', author: 'Maria Oliveira' },
  { id: '3', title: 'A Arte da Torra', author: 'Carlos Eduardo Santos' },
  { id: '4', title: 'Extração Perfeita: Métodos Filtrados', author: 'Ana Beatriz Costa' },
  { id: '5', title: 'O Guia Definitivo do Espresso', author: 'Lucas Pereira' },
  { id: '6', title: 'História do Café no Brasil', author: 'Fernanda Lima' },
  { id: '7', title: 'Latte Art para Iniciantes', author: 'Rafael Souza' },
  { id: '8', title: 'Química da Água e do Café', author: 'Juliana Almeida' },
  { id: '9', title: 'Do Grão à Xícara', author: 'Roberto Mendes' },
  { id: '10', title: 'Cafeterias pelo Mundo', author: 'Camila Rocha' },
  { id: '11', title: 'Fermentação e Processos Naturais', author: 'Thiago Martins' },
  { id: '12', title: 'A Ciência da Degustação Sensorial', author: 'Patrícia Gomes' },
  { id: '13', title: 'Barista Profissional na Prática', author: 'Marcelo Ribeiro' },
  { id: '14', title: 'O Mundo dos Cafés Gelados e Cold Brew', author: 'Letícia Carvalho' },
  { id: '15', title: 'Cultivo Sustentável de Cafeeiros', author: 'Bruno Ferreira' },
  { id: '16', title: 'Receitas Clássicas de Cafeteria', author: 'Mariana Dias' },
  { id: '17', title: 'A Escolha do Grão Ideal', author: 'Gustavo Nogueira' },
];

return (

  <Container>
    <Title>Livros</Title>
    <SearchInput placeholder="Pesquisar o Livro" />
    <FlatList
      data={livros}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard>
          <Title>{item.title}</Title>
          <Title>{item.author}</Title>
        </ProductCard>
      )}
    />
    <StatusBar style="auto" />
  </Container>
);
}

const Container = styled.View`
  flex: 1;
  padding: 24px;
  gap: 16px;
`;

const header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  margin-top: 16px;
  font-size: 28px;
  font-weight: 500;
  color: #000000;
  min-height: 36px;
`;

const SearchInput = styled.TextInput`
  background-color: #00ff2a;
  border-radius: 8px;
  padding: 8px;
`;

 const ProductCard = styled.View`
  margin-bottom: 12px;
  padding: 16px;
  background-color: #fa0000;
  border-radius: 8px;
`;
