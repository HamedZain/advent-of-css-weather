import { FC } from "react"
import "./DayCard.scss"

// icons
import { ReactComponent as PrecipitationIcon } from '../../assets/svg/precipitation.svg'
import { ReactComponent as LowIcon } from '../../assets/svg/low.svg'

type WeatherState = 'cloudy' | 'partly-cloudy' | 'rainy' | 'snowy' | 'stormy' | 'sunny'
type WeatherData = {
	state: WeatherState
	temperature: number
	precipitation: number
	wind: number
}

interface DayCardProps {
	date: Date
	weather: WeatherData
}

export const DayCard: FC<DayCardProps> = ({ date, weather }) => {

	const dayStr = date.toLocaleDateString('en-us',  { weekday: 'short' }).toUpperCase()
	const dayNum = date.getDate()

	return (
		<div className={`day-card day-card--${weather.state}`}>
			<header className="day-card__day">
				<p className="day-card__day__name">{dayStr}</p>
				<p className="day-card__day__number">{dayNum}</p>
			</header>

			<div className="day-card__card">
				<div className="day-card__card__image">
					<img src={`img/${weather.state}.svg`} alt={`${weather.state} weather image`} />
				</div>

				<p className="day-card__card__temp">71</p>

				<div className="day-card__card__info">
					<p className="day-card__card__info__item">
						<PrecipitationIcon />
						<span>84%</span>
					</p>

					<p className="day-card__card__info__item">
						<LowIcon />
						<span>28°</span>
					</p>
				</div>
			</div>
		</div>
	)
}
