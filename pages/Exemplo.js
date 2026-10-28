
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles';

const categorias = [
  {
    nome: 'Tecnologia',
    descricao: 'Inovação, inteligência artificial e tecnologia.',
    termo: 'tecnologia',
    icone: '💻',
  },
  {
    nome: 'Ciência',
    descricao: 'Descobertas, pesquisas e meio ambiente.',
    termo: 'ciência',
    icone: '🔬',
  },
  {
    nome: 'Esportes',
    descricao: 'Competições, clubes e notícias esportivas.',
    termo: 'esportes',
    icone: '⚽',
  },
  {
    nome: 'Entretenimento',
    descricao: 'Cinema, televisão e cultura.',
    termo: 'entretenimento',
    icone: '🎬',
  },
  {
    nome: 'Economia',
    descricao: 'Mercado, empresas e economia.',
    termo: 'economia',
    icone: '📊',
  },
];

export default function Exemplo({
  navegar,
  setPesquisa,
  setErro,
}) {
  function escolherCategoria(termo) {
    setPesquisa(termo);
    setErro('');
    navegar('home');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.etiqueta}>ÁREA DE DESCOBERTA</Text>

      <Text style={styles.titulo}>Explorar notícias</Text>

      <Text style={styles.subtitulo}>
        Escolha uma categoria para começar sua pesquisa.
      </Text>

      <View style={styles.ilustracao}>
        <Text style={styles.ilustracaoIcone}>✦</Text>
        <Text style={styles.ilustracaoTitulo}>
          Informação sobre todos os assuntos.
        </Text>
        <Text style={styles.ilustracaoTexto}>
          Selecione um tema. Depois, processe a pesquisa
          na página inicial para encontrar notícias.
        </Text>
      </View>

      <Text style={styles.secaoTitulo}>
        Categorias disponíveis
      </Text>

      {categorias.map((categoria) => (
        <Pressable
          key={categoria.termo}
          onPress={() => escolherCategoria(categoria.termo)}
          style={({ pressed }) => [
            styles.cartao,
            pressed && { opacity: 0.7 },
          ]}
        >
          <View style={styles.iconeCartao}>
            <Text style={styles.iconeCartaoTexto}>
              {categoria.icone}
            </Text>
          </View>

          <View style={styles.cartaoConteudo}>
            <Text style={styles.cartaoTitulo}>
              {categoria.nome}
            </Text>
            <Text style={styles.cartaoTexto}>
              {categoria.descricao}
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </Pressable>
      ))}

      <Pressable
        onPress={() => navegar('home')}
        style={styles.botaoPrincipal}
      >
        <Text style={styles.botaoPrincipalTexto}>
          ← Voltar para pesquisar
        </Text>
      </Pressable>
    </ScrollView>
  );
}
