import { useState, useEffect } from 'react';
import { getSponsors } from '../../api/sponsors';
import SponsorsList from 'components/SponsorsList/SponsorsList';
import styles from './ourFriendsPage.module.scss';

export default function OurFriendsPage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const ourFriends = await getSponsors();
        // console.log(ourFriends);
        setSponsors([...ourFriends]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };

    fetchSponsor();
  }, []);

  return (
    <main>
      <section className={styles.ourFriendsSection}>
        <div className="container">
          <SponsorsList sponsors={sponsors} />
        </div>
      </section>
    </main>
  );
}
