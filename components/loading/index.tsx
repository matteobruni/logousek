import * as S from './styled'
import { P3 } from '@components/typography/paragraph'

const Loading: React.FC = () => {
    return (
        <S.LoaderWrapper>
            <S.Loader />
            <P3 type="ghost">Načítání</P3>
        </S.LoaderWrapper>
    )
}

export default Loading
