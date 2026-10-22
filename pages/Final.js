
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function Final({ navegar }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.finalIcone}>
        <Text style={styles.finalIconeTexto}>✓</Text>
      </View>

      <Text style={styles.etiqueta}>ETAPA FINAL</Text>
      <Text style={styles.titulo}>Muito bem!</Text>
      <Text style={styles.subtitulo}>
        Você chegou ao final da navegação.
      </Text>

      <View style={styles.bannerFinal}>
        <Text style={styles.bannerFinalTitulo}>
          Projeto em andamento!
        </Text>

        <Text style={styles.bannerFinalTexto}>
          Esta é a tela de conclusão. Agora você pode
          adaptar o aplicativo às suas próprias ideias
          e adicionar novas funcionalidades.
        </Text>
      </View>

      <View style={styles.cartao}>
        <View style={[styles.iconeCartao, styles.iconeAmarelo]}>
          <Text style={styles.iconeCartaoTexto}>✓</Text>
        </View>

        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Navegação funcionando
          </Text>
          <Text style={styles.cartaoTexto}>
            Você pode alternar entre as três páginas
            usando o menu inferior.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navegar('home')}
        style={styles.botaoPrincipal}
      >
        <Text style={styles.botaoPrincipalTexto}>
          ↻  Voltar ao início
        </Text>
      </Pressable>
    </ScrollView>
  );
}
