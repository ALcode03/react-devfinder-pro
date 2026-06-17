import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h3>Favorires</h3>

            {
                favorites.length === 0 && (<p> No Favorites yet.</p>)
            }

            <ul classname='list-group'> 
                {
                    favorites.map((user, index) => (
                        <li key={index} className='list-group-item'>
                            {user.login}
                        </li>

                    ))
                }

            </ul>
        </div>
    );
}