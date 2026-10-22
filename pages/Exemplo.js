
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function Exemplo({ navegar }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.etiqueta}>ÁREA DE DESCOBERTA</Text>
      <Text style={styles.titulo}>Explorar ✨</Text>
      <Text style={styles.subtitulo}>
        Um espaço para novas possibilidades.
      </Text>

      <View style={styles.ilustracao}>
        <Text style={styles.ilustracaoIcone}>✦</Text>
        <Text style={styles.ilustracaoTitulo}>
          Sua próxima ideia começa aqui.
        </Text>
        <Text style={styles.ilustracaoTexto}>
          Esta área pode receber ferramentas,
          informações e recursos do seu projeto.
        </Text>
      </View>

      <Text style={styles.secaoTitulo}>
        O que você pode fazer?
      </Text>

      <View style={styles.cartao}>
        <View style={styles.iconeCartao}>
          <Text style={styles.iconeCartaoTexto}>01</Text>
        </View>
        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Personalizar
          </Text>
          <Text style={styles.cartaoTexto}>
            Adicione suas próprias funcionalidades.
          </Text>
        </View>
      </View>

      <View style={styles.cartao}>
        <View style={[styles.iconeCartao, styles.iconeAmarelo]}>
          <Text style={styles.iconeCartaoTexto}>02</Text>
        </View>
        <View style={styles.cartaoConteudo}>
          <Text style={styles.cartaoTitulo}>
            Evoluir o projeto
          </Text>
          <Text style={styles.cartaoTexto}>
            Transforme esta tela em uma área interativa.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navegar('final')}
        style={styles.botaoPrincipal}
      >
        <Text style={styles.botaoPrincipalTexto}>
          Ir para a última página  →
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
