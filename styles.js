
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  conteudo: {
    flex: 1,
  },

  container: {
    padding: 22,
    paddingBottom: 35,
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  etiqueta: {
    color: '#1565C0',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  titulo: {
    color: '#0D2340',
    fontSize: 29,
    fontWeight: '800',
    marginBottom: 6,
  },

  subtitulo: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 21,
  },

  avatar: {
    width: 52,
    height: 52,
    backgroundColor: '#1565C0',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarTexto: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
  },

  banner: {
    backgroundColor: '#0D2340',
    borderRadius: 22,
    padding: 23,
    marginBottom: 28,
    overflow: 'hidden',
  },

  bannerEtiqueta: {
    color: '#90CAF9',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginBottom: 13,
  },

  bannerTitulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    lineHeight: 33,
    marginBottom: 12,
  },

  bannerTexto: {
    color: '#D6E5F5',
    fontSize: 14,
    lineHeight: 22,
  },

  botaoBanner: {
    backgroundColor: '#42A5F5',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 17,
  },

  botaoBannerTexto: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },

  bannerDecoracao: {
    color: '#42A5F5',
    fontSize: 60,
    position: 'absolute',
    right: 15,
    top: 5,
    opacity: 0.16,
  },

  secaoTitulo: {
    color: '#0D2340',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 15,
    marginTop: 8,
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EDF7',
    elevation: 2,
    shadowColor: '#0D2340',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  iconeCartao: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  iconeAmarelo: {
    backgroundColor: '#D6E9FA',
  },

  iconeCartaoTexto: {
    color: '#1565C0',
    fontSize: 19,
    fontWeight: '800',
  },

  cartaoConteudo: {
    flex: 1,
  },

  cartaoTitulo: {
    color: '#0D2340',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 5,
  },

  cartaoTexto: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 20,
  },

  seta: {
    color: '#1565C0',
    fontSize: 25,
    marginLeft: 8,
  },

  botaoPrincipal: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 10,
  },

  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  botaoSecundario: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 10,
  },

  botaoSecundarioTexto: {
    color: '#1565C0',
    fontSize: 14,
    fontWeight: '800',
  },

  ilustracao: {
    backgroundColor: '#DCEEFF',
    padding: 23,
    borderRadius: 20,
    marginVertical: 22,
  },

  ilustracaoIcone: {
    color: '#1565C0',
    fontSize: 35,
    marginBottom: 10,
  },

  ilustracaoTitulo: {
    color: '#0D2340',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 8,
  },

  ilustracaoTexto: {
    color: '#496783',
    fontSize: 13,
    lineHeight: 21,
  },

  finalIcone: {
    width: 58,
    height: 58,
    backgroundColor: '#DCEEFF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  finalIconeTexto: {
    color: '#1565C0',
    fontSize: 27,
    fontWeight: '800',
  },

  bannerFinal: {
    backgroundColor: '#0D2340',
    padding: 21,
    borderRadius: 19,
    marginVertical: 16,
  },

  bannerFinalTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },

  bannerFinalTexto: {
    color: '#D6E5F5',
    fontSize: 14,
    lineHeight: 22,
  },

  rodape: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: '#E3EDF7',
  },

  itemMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },

  itemMenuAtivo: {
    backgroundColor: '#EAF4FF',
    borderRadius: 12,
  },

  iconeMenu: {
    fontSize: 21,
    color: '#94A3B8',
    marginBottom: 3,
  },

  textoMenu: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },

  textoAtivo: {
    color: '#1565C0',
    fontWeight: '800',
  },

  indicador: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#1565C0',
    marginTop: 3,
  },
});
