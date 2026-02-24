import Produto from '../components/Produto'
import { useAppSelector } from '../store/hooks'
import { useGetProdutosQuery } from '../store/services/produtosApi'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()
  const favoritos = useAppSelector((state) => state.carrinho.favoritos)

  const produtoEstaNosFavoritos = (produtoId: number) =>
    favoritos.some((f) => f.id === produtoId)

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
