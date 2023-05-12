import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

export default function NoticesPage() {
  return (
    <section>
      <div className="container">
        <h1>Find your favorite pet</h1>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
      </div>
    </section>
  );
}
