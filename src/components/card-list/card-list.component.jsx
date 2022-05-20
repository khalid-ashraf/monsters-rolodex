import Card from "../card-container/card-container.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map((monster) => {
			return <Card key={monster.id} monster={monster} />;
		})}
	</div>
);

export default CardList;
