
import React, { useRef } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
  Linking,
  ActivityIndicator,
  Keyboard,
  Alert
} from 'react-native';

export default function Final({
  pesquisa,
  setPesquisa,
  noticias,
  carregando,
  erro,
  setErro,
  processarNoticias,
  cores,
  styles
}) {

  const scrollRef = useRef(null);
  const deveRolar = useRef(false);

  // Iniciar pesquisa
  function buscar() {

    if (carregando) return;

    Keyboard.dismiss();

    deveRolar.current = !!pesquisa.trim();

    processarNoticias();
  }

  // Rolar quando a primeira notícia estiver na tela
  function rolarParaNoticia(evento) {

    if (!deveRolar.current || carregando) return;

    const posicao = evento.nativeEvent.layout.y;

    deveRolar.current = false;

    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        y: Math.max(0, posicao - 12),
        animated: true
      });
    });
  }

  function voltarAoTopo() {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
  }

  function formatarData(data) {

    if (!data) return 'Data indisponível';

    const dataValida = new Date(data);

    if (Number.isNaN(dataValida.getTime())) {
      return 'Data indisponível';
    }

    return dataValida.toLocaleDateString('pt-BR');
  }

  async function abrirNoticia(url) {

    try {

      if (!url || !/^https?:\/\//i.test(url)) {
        throw new Error('Link indisponível.');
      }

      await Linking.openURL(url);

    } catch {
      Alert.alert(
        'Atenção',
        'Não foi possível abrir esta notícia.'
      );
    }
  }

  return (
    <ScrollView
      ref={scrollRef}
      style={{
        flex: 1,
        backgroundColor: cores.fundo
      }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >

      {/* Cabeçalho */}
      <Text style={styles.etiqueta}>
        CENTRAL DE INFORMAÇÕES
      </Text>

      <Text style={styles.titulo}>
        Central de notícias
      </Text>

      <Text style={styles.subtitulo}>
        Descubra informações sobre os assuntos
        que mais interessam a você.
      </Text>

      {/* Banner */}
      <View style={styles.banner}>

        <Text style={styles.bannerEtiqueta}>
          INFORMAÇÃO EM UM SÓ LUGAR
        </Text>

        <Text style={styles.bannerTitulo}>
          O conhecimento começa com uma pesquisa.
        </Text>

        <Text style={styles.bannerTexto}>
          Digite uma palavra-chave e encontre
          matérias de diferentes fontes através
          da nossa integração com a NewsAPI.
        </Text>

      </View>

      {/* Área de pesquisa */}
      <View style={styles.pesquisaBox}>

        <Text style={styles.cartaoTitulo}>
          O que deseja descobrir?
        </Text>

        <Text style={styles.cartaoTexto}>
          Digite um assunto para iniciar o processamento.
        </Text>

        <TextInput
          value={pesquisa}
          onChangeText={(texto) => {
            setPesquisa(texto);
            setErro('');
          }}
          placeholder="Ex.: Tecnologia, futebol, ciência..."
          placeholderTextColor={cores.secundario}
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={buscar}
          editable={!carregando}
        />

        <Pressable
          onPress={buscar}
          disabled={carregando}
          style={[
            styles.botaoPrincipal,
            carregando && { opacity: 0.6 }
          ]}
        >

          <Text style={styles.botaoPrincipalTexto}>
            {carregando
              ? 'Processando notícias...'
              : '⌕  Processar notícias'}
          </Text>

        </Pressable>

      </View>

      {/* Carregamento */}
      {carregando && (

        <View style={styles.carregamento}>

          <ActivityIndicator
            size="large"
            color={cores.azul}
          />

          <Text style={[
            styles.cartaoTexto,
            { marginTop: 12 }
          ]}>
            Buscando notícias para você...
          </Text>

        </View>

      )}

      {/* Mensagem de erro */}
      {!!erro && (

        <View style={styles.erroBox}>
          <Text style={styles.erroTexto}>
            {erro}
          </Text>
        </View>

      )}

      {/* Contador de resultados */}
      <View style={styles.resultadoTopo}>

        <Text style={[
          styles.secaoTitulo,
          { marginBottom: 0 }
        ]}>
          Notícias encontradas
        </Text>

        <View style={styles.contador}>
          <Text style={styles.contadorTexto}>
            {noticias.length} resultados
          </Text>
        </View>

      </View>

      {/* Tela antes da pesquisa */}
      {!carregando && noticias.length === 0 && !erro && (

        <View style={styles.vazio}>

          <Text style={{ fontSize: 40 }}>📰</Text>

          <Text style={[
            styles.cartaoTitulo,
            { marginTop: 12, textAlign: 'center' }
          ]}>
            Sua próxima leitura começa aqui!
          </Text>

          <Text style={[
            styles.cartaoTexto,
            { textAlign: 'center' }
          ]}>
            Pesquise um assunto e descubra
            notícias disponíveis na nossa plataforma.
          </Text>

        </View>

      )}

      {/* Notícias da API */}
      {!carregando && noticias.map((noticia, index) => (

        <View
          key={`${noticia.url}-${index}`}
          onLayout={index === 0 ? rolarParaNoticia : undefined}
          style={styles.noticia}
        >

          {/* Imagem da notícia */}
          {!!noticia.urlToImage && (

            <Image
              source={{ uri: noticia.urlToImage }}
              style={styles.noticiaImagem}
              resizeMode="cover"
            />

          )}

          {/* Fonte */}
          <Text style={styles.noticiaFonte}>
            {noticia.source?.name || 'Fonte não informada'}
          </Text>

          {/* Título */}
          <Text style={styles.noticiaTitulo}>
            {noticia.title || 'Título indisponível'}
          </Text>

          {/* Descrição */}
          <Text style={styles.noticiaDescricao}>
            {noticia.description || 'Descrição indisponível.'}
          </Text>

          {/* Data de publicação */}
          <Text style={[
            styles.cartaoTexto,
            { marginBottom: 8, fontSize: 11 }
          ]}>
            Publicado em: {formatarData(noticia.publishedAt)}
          </Text>

          {/* Link da matéria original */}
          <Pressable
            onPress={() => abrirNoticia(noticia.url)}
            style={styles.botaoSecundario}
          >

            <Text style={styles.botaoSecundarioTexto}>
              Ler notícia completa →
            </Text>

          </Pressable>

        </View>

      ))}

      {/* Botão para retornar ao início da pesquisa */}
      {!carregando && noticias.length > 0 && (

        <Pressable
          onPress={voltarAoTopo}
          style={styles.botaoPrincipal}
        >
          <Text style={styles.botaoPrincipalTexto}>
            ↑ Voltar ao topo
          </Text>
        </Pressable>

      )}

      <Text style={styles.assinatura}>
        NEWSFLOW • Informação e conhecimento
      </Text>

    </ScrollView>
  );
}
