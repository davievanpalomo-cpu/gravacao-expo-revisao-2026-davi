
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function Home({ navegar }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topo}>
        <View>
          <Text style={styles.etiqueta}>BEM-VINDO AO</Text>
          <Text style={styles.titulo}>NewsFlow.</Text>
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
          INFORME-SE. DESCUBRA. CONECTE-SE.
        </Text>

        <Text style={styles.bannerTitulo}>
          O mundo acontece. Você fica por dentro.
        </Text>

        <Text style={styles.bannerTexto}>
          Acompanhe acontecimentos, descubra novidades
          e encontre informações sobre os assuntos
          que fazem parte do seu dia a dia.
        </Text>

        <Pressable
          onPress={() => navegar('exemplo')}
          style={styles.botaoBanner}
        >
          <Text style={styles.botaoBannerTexto}>
            Explorar notícias →
          </Text>
        </Pressable>

        <Text style={styles.bannerDecoracao}>✦</Text>
      </View>

      <Text style={styles.secaoTitulo}>
        Sobre o NewsFlow
      </Text>

      <View style={styles.cartao}>
        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>◎</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Nossa proposta
          </Text>
          <Text style={styles.cartaoTexto}>
            Facilitar o acesso às notícias por meio
            de uma plataforma simples e organizada.
          </Text>
        </View>
      </View>

      <View style={styles.cartao}>
        <View style={[styles.iconeCartao, styles.iconeAmarelo]}>
          <Text style={styles.iconeCartaoTexto}>✦</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Nosso objetivo
          </Text>
          <Text style={styles.cartaoTexto}>
            Reunir informações de diferentes assuntos
            e ajudar o usuário a encontrar notícias
            de seu interesse.
          </Text>
        </View>
      </View>

      <Text style={styles.secaoTitulo}>
        O que você encontra aqui?
      </Text>

      <View style={styles.cartao}>
        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            📰 Notícias atualizadas
          </Text>
          <Text style={styles.cartaoTexto}>
            Consulte matérias disponíveis através
            de nossa integração com uma API de notícias.
          </Text>
        </View>
      </View>

      <View style={styles.cartao}>
        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            🔎 Pesquisa por assuntos
          </Text>
          <Text style={styles.cartaoTexto}>
            Encontre conteúdos de tecnologia, ciência,
            esportes, economia e muito mais.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navegar('final')}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Ir para os resultados →
        </Text>
      </Pressable>

    </ScrollView>
  );
}
