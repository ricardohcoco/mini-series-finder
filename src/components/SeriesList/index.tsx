import type { SearchResultType } from '../../types/SearchResultType'
import SeriesCard from '../SeriesCard';
import styles from './SeriesList.module.css'

type SeriesListProps = {
    shows: SearchResultType[];
}

export default function SeriesList({ shows }: SeriesListProps) {
    return (
        <section className={styles.container}>
            {shows.map((item) => (
                <SeriesCard key={item.show.id} show={item.show} />
            ))}
        </section>
    )
}