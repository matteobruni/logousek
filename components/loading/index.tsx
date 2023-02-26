import * as S from './styled'

const Loading: React.FC = () => {
    return (
        <S.LoaderWrapper>
            <S.Loader />
            <p>Načítání</p>
        </S.LoaderWrapper>
    )
}

export default Loading
