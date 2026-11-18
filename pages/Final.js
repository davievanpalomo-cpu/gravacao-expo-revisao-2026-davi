
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../styles';

export default function Final({
  navegar,
  pesquisa,
  setPesquisa,
  noticias,
  carregando,
  erro,
  setErro,
  processarNoticias,
}) {
  function formatarData(data) {
    if (!data) return 'Data indisponível';

    const dataValida = new Date(data);

    if (Number.isNaN(dataValida.getTime())) {
      return 'Data indisponível';
    }

    return dataValida.toLocaleDateString('pt-BR');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.etiqueta}>NEWSFLOW</Text>

      <Text style={styles.titulo}>Resultados 📰</Text>

      <Text style={styles.subtitulo}>
        Pesquise um assunto e encontre notícias.
      </Text>

      <View style={styles.bannerFinal}>
        <Text style={styles.bannerFinalTitulo}>
          Pesquisa de notícias
        </Text>

        <Text style={styles.bannerFinalTexto}>
          Digite uma palavra ou assunto para buscar
          matérias disponíveis na nossa API.
        </Text>

        <TextInput
          value={pesquisa}
          onChangeText={(texto) => {
            setPesquisa(texto);
            setErro('');
          }}
          placeholder="Ex.: tecnologia, esportes..."
          placeholderTextColor="#777777"
          returnKeyType="search"
          onSubmitEditing={() => processarNoticias()}
          style={{
          backgroundColor: '#FFFFFF',
          color: '#0D2340',
          borderWidth: 1,
          borderColor: '#BBD6F0',
          padding: 14,
          borderRadius: 12,
          marginTop: 15,
          marginBottom: 12,
}}
        />

        <Pressable
          disabled={carregando}
          onPress={() => processarNoticias()}
          style={[
            styles.botaoPrincipal,
            { backgroundColor: '#FFFFFF' },
            carregando && { opacity: 0.6 },
          ]}
        >
          <Text
            style={[
              styles.botaoPrincipalTexto,
              { color: '#222222' },
            ]}
          >
            {carregando
              ? 'Processando...'
              : 'Processar notícias →'}
          </Text>
        </Pressable>
      </View>

      {carregando && (
        <ActivityIndicator
          size="large"
          color="#d62828"
          style={{ marginVertical: 20 }}
        />
      )}

      {!!erro && (
        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>
            Atenção
          </Text>
          <Text style={styles.cartaoTexto}>
            {erro}
          </Text>
        </View>
      )}

      <Text style={styles.secaoTitulo}>
        Notícias encontradas
      </Text>

      {!carregando && noticias.length === 0 && !erro && (
        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>
            Nenhuma pesquisa realizada
          </Text>
          <Text style={styles.cartaoTexto}>
            Digite um assunto acima e clique em
            Processar notícias para visualizar os resultados.
          </Text>
        </View>
      )}

      {!carregando && noticias.map((noticia, indice) => (
        <View
          key={`${noticia.url}-${indice}`}
          style={styles.cartao}
        >
          <View style={{ flex: 1 }}>
            {!!noticia.urlToImage && (
              <Image
                source={{ uri: noticia.urlToImage }}
                style={{
                  width: '100%',
                  height: 170,
                  borderRadius: 10,
                  marginBottom: 12,
                  backgroundColor: '#EEEEEE',
                }}
                resizeMode="cover"
              />
            )}

            <Text style={styles.etiqueta}>
              {noticia.source?.name || 'Fonte não informada'}
            </Text>

            <Text style={styles.cartaoTitulo}>
              {noticia.title}
            </Text>

            {!!noticia.description && (
              <Text style={styles.cartaoTexto}>
                {noticia.description}
              </Text>
            )}

            <Text style={[styles.cartaoTexto, { marginTop: 8 }]}>
              Publicado em: {formatarData(noticia.publishedAt)}
            </Text>

            <Pressable
              onPress={() => {
                Linking.openURL(noticia.url).catch(() => {});
              }}
              style={[
                styles.botaoPrincipal,
                { marginTop: 12 },
              ]}
            >
              <Text style={styles.botaoPrincipalTexto}>
                Ler notícia completa →
              </Text>
            </Pressable>
          </View>
        </View>
      ))}

      <Pressable
        onPress={() => navegar('home')}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          ← Voltar ao início
        </Text>
      </Pressable>

    </ScrollView>
  );
}
