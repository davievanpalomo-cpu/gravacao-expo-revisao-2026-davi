
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import Home from './pages/Home';
import Exemplo from './pages/Exemplo';
import Final from './pages/Final';
import { styles } from './styles';

export default function App() {
  const [pagina, setPagina] = useState('home');

  const paginas = {
    home: Home,
    exemplo: Exemplo,
    final: Final,
  };

  const PaginaAtual = paginas[pagina];

  return (
    <GluestackUIProvider mode="light">
      <View style={styles.tela}>
        <View style={styles.conteudo}>
          <PaginaAtual
            navegar={setPagina}
          />
        </View>

        <View style={styles.rodape}>
          {[
            { id: 'home', icone: '⌂', nome: 'Início' },
            { id: 'exemplo', icone: '✦', nome: 'Explorar' },
            { id: 'final', icone: '✓', nome: 'Final' },
          ].map((item) => {
            const ativo = pagina === item.id;

            return (
              <Pressable
                key={item.id}
                onPress={() => setPagina(item.id)}
                style={({ pressed }) => [
                  styles.itemMenu,
                  ativo && styles.itemMenuAtivo,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Text
                  style={[
                    styles.iconeMenu,
                    ativo && styles.textoAtivo,
                  ]}
                >
                  {item.icone}
                </Text>

                <Text
                  style={[
                    styles.textoMenu,
                    ativo && styles.textoAtivo,
                  ]}
                >
                  {item.nome}
                </Text>

                {ativo && (
                  <View style={styles.indicador} />
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </GluestackUIProvider>
  );
}
