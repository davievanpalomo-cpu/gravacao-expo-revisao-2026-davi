
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  conteudo: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 38,
    paddingBottom: 28,
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },

  etiqueta: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#D62828',
    marginBottom: 9,
  },

  titulo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#20243A',
    marginBottom: 7,
  },

  subtitulo: {
    fontSize: 15,
    lineHeight: 23,
    color: '#85899B',
    marginBottom: 26,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#FCE5E4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarTexto: {
    color: '#D62828',
    fontSize: 23,
    fontWeight: '800',
  },

  banner: {
    backgroundColor: '#D62828',
    borderRadius: 25,
    padding: 23,
    marginBottom: 30,
    overflow: 'hidden',
  },

  bannerEtiqueta: {
    color: '#FFD7A0',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },

  bannerTitulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    lineHeight: 34,
    maxWidth: '90%',
    marginBottom: 10,
  },

  bannerTexto: {
    color: '#FFE9E7',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 22,
    maxWidth: '95%',
  },

  bannerDecoracao: {
    position: 'absolute',
    right: 12,
    top: 35,
    color: '#FFFFFF',
    opacity: 0.12,
    fontSize: 95,
  },

  botaoBanner: {
    backgroundColor: '#FFC857',
    borderRadius: 13,
    paddingVertical: 15,
    paddingHorizontal: 17,
    alignSelf: 'flex-start',
  },

  botaoBannerTexto: {
    color: '#542020',
    fontSize: 14,
    fontWeight: '800',
  },

  secaoTitulo: {
    fontSize: 19,
    fontWeight: '800',
    color: '#20243A',
    marginBottom: 16,
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 16,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFF0F5',
  },

  iconeCartao: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: '#FCE8E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  iconeAmarelo: {
    backgroundColor: '#FFF1C9',
  },

  iconeCartaoTexto: {
    fontSize: 18,
    fontWeight: '800',
    color: '#D62828',
  },

  cartaoConteudo: {
    flex: 1,
  },

  cartaoTitulo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#292D40',
    marginBottom: 5,
  },

  cartaoTexto: {
    fontSize: 13,
    lineHeight: 19,
    color: '#85899B',
  },

  seta: {
    color: '#D62828',
    fontSize: 27,
    marginLeft: 8,
  },

  botaoPrincipal: {
    backgroundColor: '#D62828',
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },

  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  botaoSecundario: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0D8D8',
    marginTop: 5,
    marginBottom: 10,
  },

  botaoSecundarioTexto: {
    color: '#D62828',
    fontSize: 14,
    fontWeight: '700',
  },

  ilustracao: {
    backgroundColor: '#FFF0D0',
    borderRadius: 23,
    padding: 24,
    alignItems: 'flex-start',
    marginBottom: 30,
  },

  ilustracaoIcone: {
    fontSize: 39,
    color: '#D62828',
    marginBottom: 14,
  },

  ilustracaoTitulo: {
    color: '#292D40',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '800',
    marginBottom: 10,
  },

  ilustracaoTexto: {
    color: '#71685C',
    fontSize: 14,
    lineHeight: 22,
  },

  finalIcone: {
    width: 90,
    height: 90,
    borderRadius: 30,
    backgroundColor: '#FFF0C8',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 25,
  },

  finalIconeTexto: {
    color: '#D62828',
    fontSize: 48,
    fontWeight: '800',
  },

  bannerFinal: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#F0D8D8',
    marginBottom: 23,
  },

  bannerFinalTitulo: {
    color: '#D62828',
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 12,
  },

  bannerFinalTexto: {
    color: '#777D90',
    fontSize: 15,
    lineHeight: 24,
  },

  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECEEF4',
    paddingHorizontal: 12,
    paddingTop: 9,
    paddingBottom: 10,
    minHeight: 78,
  },

  itemMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 15,
    position: 'relative',
  },

  itemMenuAtivo: {
    backgroundColor: '#FFF3F2',
  },

  iconeMenu: {
    fontSize: 24,
    color: '#A2A5B3',
    marginBottom: 3,
  },

  textoMenu: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9296A5',
  },

  textoAtivo: {
    color: '#D62828',
    fontWeight: '800',
  },

  indicador: {
    position: 'absolute',
    bottom: -9,
    width: 22,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#FFC857',
  },
});
