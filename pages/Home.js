
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
          <Text style={styles.etiqueta}>SEU APLICATIVO</Text>
          <Text style={styles.titulo}>Olá! 👋</Text>
          <Text style={styles.subtitulo}>
            Que bom ter você por aqui.
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>H</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerEtiqueta}>
          BEM-VINDO
        </Text>

        <Text style={styles.bannerTitulo}>
          Ideias que ganham vida.
        </Text>

        <Text style={styles.bannerTexto}>
          Explore as funcionalidades e descubra
          tudo o que preparamos para você.
        </Text>

        <Pressable
          onPress={() => navegar('exemplo')}
          style={({ pressed }) => [
            styles.botaoBanner,
            pressed && { opacity: 0.8 },
          ]}
        >
          <Text style={styles.botaoBannerTexto}>
            Começar agora  →
          </Text>
        </Pressable>

        <Text style={styles.bannerDecoracao}>✦</Text>
      </View>

      <Text style={styles.secaoTitulo}>
        Visão geral
      </Text>

      <View style={styles.cartao}>
        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>✦</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Descubra novidades
          </Text>
          <Text style={styles.cartaoTexto}>
            Conheça a segunda página e suas funcionalidades.
          </Text>
        </View>

        <Text style={styles.seta}>›</Text>
      </View>

      <View style={styles.cartao}>
        <View style={[styles.iconeCartao, styles.iconeAmarelo]}>
          <Text style={styles.iconeCartaoTexto}>✓</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Acompanhe seu progresso
          </Text>
          <Text style={styles.cartaoTexto}>
            Visite a última tela para conhecer o encerramento.
          </Text>
        </View>

        <Text style={styles.seta}>›</Text>
      </View>

      <Pressable
        onPress={() => navegar('final')}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Conhecer a última página  →
        </Text>
      </Pressable>
    </ScrollView>
  );
}
