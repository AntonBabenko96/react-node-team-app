import Categories from 'components/Categories/Categories';
import NoticesList from 'components/NoticesList/NoticesList';
import Search from 'components/Search/Search';

export default function NoticesPage() {
  return (
    <section>
      <div className='container'>
        <h1>Find your favorite pet</h1>
        <Search />
        <Categories />
        <NoticesList />
      </div>
    </section>
  );
}
