import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView
} from 'react-native';

export default function Home({ navegar, styles }) {

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.etiqueta}>
        SEU PORTAL DE INFORMAÇÃO
      </Text>

      <Text style={styles.titulo}>
        Bem-vindo ao NewsFlow.
      </Text>

      <Text style={styles.subtitulo}>
        Conhecimento que acompanha você.
      </Text>

      {/* Banner principal */}
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
          style={styles.botaoPrincipal}
        >
          <Text style={styles.botaoPrincipalTexto}>
            Explorar notícias →
          </Text>
        </Pressable>

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
            Facilitar o acesso às notícias através
            de uma plataforma moderna, simples e organizada.
          </Text>
        </View>

      </View>

      <View style={styles.cartao}>

        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>✦</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Nosso objetivo
          </Text>

          <Text style={styles.cartaoTexto}>
            Reunir informações de diferentes assuntos
            e ajudar você a encontrar notícias de seu interesse.
          </Text>
        </View>

      </View>

      <Text style={styles.secaoTitulo}>
        Nossas funcionalidades
      </Text>

      <Pressable
        style={styles.cartao}
        onPress={() => navegar('final')}
      >

        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>⌕</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Pesquisa inteligente
          </Text>

          <Text style={styles.cartaoTexto}>
            Pesquise qualquer assunto e encontre
            matérias relacionadas através da NewsAPI.
          </Text>
        </View>

        <Text style={styles.seta}>›</Text>

      </Pressable>

      <Pressable
        style={styles.cartao}
        onPress={() => navegar('exemplo')}
      >

        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>▤</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Diversidade de assuntos
          </Text>

          <Text style={styles.cartaoTexto}>
            Explore tecnologia, ciência, esportes,
            economia, cultura e entretenimento.
          </Text>
        </View>

        <Text style={styles.seta}>›</Text>

      </Pressable>

      <View style={styles.cartao}>

        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>◐</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Experiência personalizada
          </Text>

          <Text style={styles.cartaoTexto}>
            Alterne entre o modo claro e escuro
            para uma leitura mais confortável.
          </Text>
        </View>

      </View>

      <Pressable
        onPress={() => navegar('final')}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Acessar central de notícias →
        </Text>
      </Pressable>

      <Text style={styles.assinatura}>
        NEWSFLOW • Informação e conhecimento
      </Text>

    </ScrollView>
  );
}
