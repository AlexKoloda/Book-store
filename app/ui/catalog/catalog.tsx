import BookCard from '../catalogItem/bookCard';
import style from './catalog.module.scss'
import Select from './select/select';

const Catalog: React.FC = () => {

  const listGenreValues = ['Fiction', 'Non-fiction', 'Light-fiction', 'Science-fiction', 'Fantasy', 'Business & Finance', 'Politics', 'Travel books', 'Autobiography', 'History', 'Thriller/ Mystery', 'Romance', 'Satire', 'Horror', 'Health / Medicine', 'Children`s books', 'Encyclopedia']
  const listPriceValues = ['0-100', '100 - 1000', '1000-5000'];
  const listSortValues = ['Price', 'Name', 'Author Name', 'Rating', 'Date of issue'];
  const bookCard = {
    title: "The Two towers",
    author: "J. R. R. Tolkien",
    coast: "Not available",
  }

  return (
    <section className={style.catalog}>
      <div className={style.catalog__filter}>

      <h1 className={style.catalog__title}>Catalog</h1>

      <div className={style.catalog__filters}>
        <Select         
        values = {listGenreValues}
        className = {style.catalog__select}
        />
        <Select         
        values = {listPriceValues}
        className = {style.catalog__select}
        />
        <Select
        values = {listSortValues}
        className= {style.catalog__sort}
        />
      </div>
      </div>
    <div className={style.catalog__container}>

      <ul className={style.catalog__list}>
        <BookCard
        bookTitle={bookCard.title}
        bookAuthor={bookCard.author}
        bookCoast={bookCard.coast}        
        />
               <BookCard
        bookTitle={bookCard.title}
        bookAuthor={bookCard.author}
        bookCoast={bookCard.coast}        
        />
               <BookCard
        bookTitle={bookCard.title}
        bookAuthor={bookCard.author}
        bookCoast={bookCard.coast}        
        />
               <BookCard
        bookTitle={bookCard.title}
        bookAuthor={bookCard.author}
        bookCoast={bookCard.coast}        
        />
      </ul>
      </div>

    </section>
  )

}

export default Catalog;