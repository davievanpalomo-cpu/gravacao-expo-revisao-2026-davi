
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import { styles } from '../styles';

export default function Final({
  navegar,
  pesquisa,
  noticias,
  carregando,
  erro,
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
      <View style={styles.finalIcone}>
        <Text style={styles.finalIconeTexto}>✓</Text>
      </View>

      <Text style={styles.etiqueta}>RESULTADO DO PROCESSAMENTO</Text>

      <Text style={styles.titulo}>Notícias encontradas</Text>

      <Text style={styles.subtitulo}>
        {pesquisa
          ? `Assunto pesquisado: ${pesquisa}`
          : 'Faça uma pesquisa para visualizar os resultados.'}
      </Text>

      {!!erro && (
        <View style={styles.bannerFinal}>
          <Text style={styles.bannerFinalTitulo}>
            Atenção
          </Text>
          <Text style={styles.bannerFinalTexto}>
            {erro}
          </Text>
        </View>
      )}

      {carregando && (
        <Text style={styles.cartaoTexto}>
          Carregando notícias...
        </Text>
      )}

      {!carregando && noticias.length === 0 && !erro && (
        <View style={styles.bannerFinal}>
          <Text style={styles.bannerFinalTitulo}>
            Nenhum resultado ainda
          </Text>
          <Text style={styles.bannerFinalTexto}>
            Volte à página inicial, digite um assunto
            e clique em Processar notícias.
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
        onPress={() => processarNoticias()}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          ↻ Pesquisar novamente
        </Text>
      </Pressable>

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
