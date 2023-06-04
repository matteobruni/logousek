import * as S from './styled'
import { useTrafficLights } from '@hooks/useTrafficLights'

type TrafficLightsProps = { countdownTime: number; timerIsDone?: () => void }

const TrafficLights: React.FC<TrafficLightsProps> = ({
  countdownTime,
  timerIsDone,
}) => {
  const { trafficLights } = useTrafficLights(countdownTime, timerIsDone)

  return (
    <S.TrafficContainer>
      {trafficLights?.map((trafficLight) => (
        <S.LightWrapper key={`traffic_light_${trafficLight.name}`}>
          <S.Light color={trafficLight.name} isActive={trafficLight.isActive} />
          {trafficLight.isActive ? (
            <S.Lighting color={trafficLight.name} />
          ) : null}
        </S.LightWrapper>
      ))}
    </S.TrafficContainer>
  )
}

export default TrafficLights
