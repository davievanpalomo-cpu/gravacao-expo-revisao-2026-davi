
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { styles } from '../styles';

export default function Home({
  navegar,
  pesquisa,
  setPesquisa,
  carregando,
  erro,
  setErro,
  processarNoticias,
}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topo}>
        <View>
          <Text style={styles.etiqueta}>NEWSFLOW</Text>
          <Text style={styles.titulo}>Notícias em foco.</Text>
          <Text style={styles.subtitulo}>
            Informação ao seu alcance.
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>N</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerEtiqueta}>
          PESQUISE E DESCUBRA
        </Text>

        <Text style={styles.bannerTitulo}>
          O que está acontecendo no mundo?
        </Text>

        <Text style={styles.bannerTexto}>
          Escolha um assunto e processe as notícias
          para encontrar matérias relacionadas.
        </Text>

        <TextInput
          value={pesquisa}
          onChangeText={(texto) => {
            setPesquisa(texto);
            setErro('');
          }}
          placeholder="Ex.: tecnologia, ciência..."
          placeholderTextColor="#777777"
          returnKeyType="search"
          onSubmitEditing={() => processarNoticias()}
          style={{
            backgroundColor: '#FFFFFF',
            color: '#222222',
            padding: 13,
            borderRadius: 10,
            marginTop: 16,
            marginBottom: 10,
          }}
        />

        <Pressable
          disabled={carregando}
          onPress={() => processarNoticias()}
          style={({ pressed }) => [
            styles.botaoBanner,
            pressed && { opacity: 0.8 },
            carregando && { opacity: 0.6 },
          ]}
        >
          <Text style={styles.botaoBannerTexto}>
            {carregando
              ? 'Processando...'
              : 'Processar notícias →'}
          </Text>
        </Pressable>

        {carregando && (
          <ActivityIndicator
            color="#FFFFFF"
            style={{ marginTop: 12 }}
          />
        )}

        {!!erro && (
          <Text
            style={{
              color: '#FFFFFF',
              marginTop: 12,
              fontWeight: '600',
            }}
          >
            {erro}
          </Text>
        )}

        <Text style={styles.bannerDecoracao}>✦</Text>
      </View>

      <Text style={styles.secaoTitulo}>
        Explore o NewsFlow
      </Text>

      <Pressable
        onPress={() => navegar('exemplo')}
        style={styles.cartao}
      >
        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>✦</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Explorar categorias
          </Text>
          <Text style={styles.cartaoTexto}>
            Descubra assuntos para pesquisar.
          </Text>
        </View>

        <Text style={styles.seta}>›</Text>
      </Pressable>

      <Pressable
        onPress={() => navegar('final')}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Ver últimos resultados →
        </Text>
      </Pressable>
    </ScrollView>
  );
}
