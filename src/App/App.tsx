import { FC } from 'react'
import './App.scss'
import { DayCard } from "../components/DayCard/DayCard"
import { weatherData } from '../data/weatherData'

export const App: FC = () => {
	return (
		<div className="App">

			<div className="App__scrollable-container">
				<div className="App__list">
					{weatherData.map((day, index) => (
						<DayCard key={`day-${index}`} {...day} />
					))}
				</div>
			</div>

		</div>
	)
}
