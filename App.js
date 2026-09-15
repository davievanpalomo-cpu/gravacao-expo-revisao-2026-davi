import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button";

export default function App() {

  const [pagina, setPagina] = useState('inicio');

  return (
    <GluestackUIProvider mode="dark">

      {pagina === 'inicio' && (
        <View style={styles.container}>

          <Text style={styles.titulo}>
            Página de início
          </Text>

          <Button
            className="bg-red-500 w-72 h-16 mb-5"
            onPress={() => setPagina('pagina1')}
          >
            <ButtonText className="text-white">
              Botão 1
            </ButtonText>
          </Button>

          <Button
            className="bg-yellow-500 w-72 h-16"
            onPress={() => setPagina('pagina2')}
          >
            <ButtonText className="text-white">
              Botão 2
            </ButtonText>
          </Button>

        </View>
      )}

      {pagina === 'pagina1' && (
        <View style={styles.container}>

          <Text style={styles.titulo}>
            Página 1
          </Text>

          <Text style={styles.texto}>
            Essa é a primeira página de início.
          </Text>

          <Button
            className="bg-orange-500 w-72 h-16 mt-6"
            onPress={() => setPagina('inicio')}
          >
            <ButtonText className="text-white">
              Voltar
            </ButtonText>
          </Button>

        </View>
      )}

      {pagina === 'pagina2' && (
        <View style={styles.container}>

          <Text style={styles.titulo}>
            Página 2
          </Text>

          <Text style={styles.texto}>
            Essa é a segunda página.
          </Text>

          <Button
            className="bg-amber-500 w-72 h-16 mt-6"
            onPress={() => setPagina('inicio')}
          >
            <ButtonText className="text-white">
              Voltar
            </ButtonText>
          </Button>

        </View>
      )}

    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  texto: {
    fontSize: 18,
    marginTop: 10,
  },

});