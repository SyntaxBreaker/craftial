import { useState, useEffect } from "react";
import styles from "./favorites.module.scss";
import Card from "../../components/Card";
import { IOffer } from "../../types";

function Favorites() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [favoriteOffers, setFavoriteOffers] = useState<IOffer[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const offerID = JSON.parse(
                    localStorage.getItem("favorites") || "[]"
                );
                if (offerID.length === 0) return;

                const response = await fetch(`api/favorites?ids=${offerID}`);
                const offers = await response.json();
                setFavoriteOffers(offers);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
        setIsLoading(false);
    }, []);

    return (
        <section className={styles["favorites"]}>
            <h2>Favorites</h2>
            {isLoading ? (
                <p className={styles["favorites__loading"]}>
                    Please be patient, loading...
                </p>
            ) : !favoriteOffers ? (
                <p className={styles["favorites__info"]}>
                    There are no favorite offers.
                </p>
            ) : (
                <div className={styles["offers"]}>
                    {favoriteOffers?.map((offer) => (
                        <Card {...offer} key={offer._id} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Favorites;
