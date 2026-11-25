import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView
} from 'react-native';

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
  {
    nome: 'Educação',
    descricao: 'Conhecimento, escolas e oportunidades.',
    termo: 'educação',
    icone: '📚',
  },
  {
    nome: 'Meio ambiente',
    descricao: 'Natureza, sustentabilidade e clima.',
    termo: 'meio ambiente',
    icone: '🌎',
  },
  {
    nome: 'Saúde',
    descricao: 'Bem-estar, pesquisas e qualidade de vida.',
    termo: 'saúde',
    icone: '❤️',
  },
];

export default function Exemplo({
  navegar,
  setPesquisa,
  setNoticias,
  setErro,
  carregando,
  styles
}) {

  function escolherCategoria(termo) {

    if (carregando) {
      navegar('final');
      return;
    }

    setPesquisa(termo);
    setNoticias([]);
    setErro('');
    navegar('final');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.etiqueta}>
        ÁREA DE DESCOBERTA
      </Text>

      <Text style={styles.titulo}>
        Explore novos assuntos.
      </Text>

      <Text style={styles.subtitulo}>
        Escolha uma categoria e descubra
        o que acontece no mundo.
      </Text>

      <View style={styles.ilustracao}>

        <Text style={styles.ilustracaoIcone}>✦</Text>

        <Text style={styles.ilustracaoTitulo}>
          O conhecimento não tem limites.
        </Text>

        <Text style={styles.ilustracaoTexto}>
          Encontre conteúdos de diferentes áreas
          e acompanhe assuntos que despertam sua curiosidade.
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
            pressed && { opacity: 0.7 }
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
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          ← Voltar ao início
        </Text>
      </Pressable>

      <Text style={styles.assinatura}>
        NEWSFLOW • Descubra novas perspectivas
      </Text>

    </ScrollView>
  );
}
